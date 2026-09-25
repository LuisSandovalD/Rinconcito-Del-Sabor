import argon2 from "argon2";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";
import { PERMISSIONS } from "../src/lib/permissions";

const url = process.env.DATABASE_URL;
const adminPassword = process.env.SEED_ADMIN_PASSWORD;

if (!url) throw new Error("DATABASE_URL es obligatorio para ejecutar el seed.");
if (!adminPassword || adminPassword.length < 12) throw new Error("SEED_ADMIN_PASSWORD debe tener al menos 12 caracteres.");

const db = new PrismaClient({ adapter: new PrismaPg({ connectionString: url }) });

async function main() {
  if (process.env.NODE_ENV === "production") throw new Error("El seed está bloqueado en producción.");

  const permissions = await Promise.all(
    PERMISSIONS.map(code => db.permission.upsert({ where: { code }, update: {}, create: { code } }))
  );

  const adminRole = await db.role.upsert({
    where: { name: "ADMINISTRADOR" },
    update: {},
    create: { name: "ADMINISTRADOR", system: true }
  });

  await db.rolePermission.createMany({
    data: permissions.map(permission => ({ roleId: adminRole.id, permissionId: permission.id })),
    skipDuplicates: true
  });

  const passwordHash = await argon2.hash(adminPassword, { type: argon2.argon2id });
  const admin = await db.user.upsert({
    where: { email: "admin@rinconcitodelsabor.local" },
    update: {},
    create: { email: "admin@rinconcitodelsabor.local", passwordHash, firstName: "Administrador", lastName: "Principal" }
  });

  await db.userRole.upsert({
    where: { userId_roleId: { userId: admin.id, roleId: adminRole.id } },
    update: {},
    create: { userId: admin.id, roleId: adminRole.id }
  });

  await db.restaurantSettings.upsert({
    where: { id: "singleton" },
    update: {},
    create: { id: "singleton", legalName: "Rinconcito del Sabor", tradeName: "Rinconcito del Sabor" }
  });
}

main().finally(() => db.$disconnect());
