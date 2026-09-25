export const PERMISSIONS = [
  "dashboard.view","tables.view","tables.manage","orders.view","orders.create","orders.update","orders.cancel","orders.discount","orders.transfer","orders.split",
  "kitchen.view","kitchen.prepare","kitchen.complete","kitchen.cancel","products.view","products.create","products.update","products.disable",
  "recipes.view","recipes.manage","inventory.view","inventory.adjust","inventory.loss","inventory.movements","sales.view","sales.create","sales.cancel","sales.refund",
  "cash.view","cash.open","cash.close","cash.withdraw","cash.adjust","customers.view","customers.create","customers.update","delivery.view","delivery.manage",
  "purchases.view","purchases.create","purchases.cancel","suppliers.view","suppliers.create","suppliers.update","expenses.view","expenses.create","expenses.cancel",
  "reports.view","users.view","users.create","users.update","users.disable","roles.manage","audit.view","settings.view","settings.update"
] as const;

export type PermissionCode = (typeof PERMISSIONS)[number];
