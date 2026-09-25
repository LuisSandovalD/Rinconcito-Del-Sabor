import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen p-6 md:p-10">
      <section className="mx-auto max-w-6xl rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8b3f29]">Rinconcito del Sabor</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">Operación del restaurante, simple y conectada.</h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-black/65">Base productiva para salón, pedidos, cocina, caja, inventario, delivery, comprobantes y administración.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/health" className="rounded-xl bg-[#8b3f29] px-5 py-3 font-medium text-white">Verificar sistema</Link>
        </div>
      </section>
    </main>
  );
}
