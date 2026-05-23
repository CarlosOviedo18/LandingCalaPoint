import SectionTitle from './SectionTitle'

function Pricing() {
  return (
    <section className="border-b border-white/8 bg-[rgba(7,10,16,0.96)]">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionTitle
            eyebrow="Precio"
            title="$4.99 pago único."
            description="Sin suscripción, sin app store y con acceso directo desde el celular. En esta fase la meta es validar interés real antes de construir más."
          />

          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,_rgba(255,255,255,0.07),_rgba(255,255,255,0.03))] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.22)]">
            <div className="flex items-end justify-between gap-6 border-b border-white/10 pb-6">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-white/45">Acceso temprano</p>
                <p className="mt-3 text-5xl font-semibold tracking-tight text-[var(--text)]">$4.99</p>
              </div>
              <div className="rounded-full border border-[rgba(157,255,193,0.2)] bg-[rgba(157,255,193,0.08)] px-4 py-2 text-sm font-medium text-[var(--accent)]">
                Pago único
              </div>
            </div>

            <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--muted)]">
              <li>Acceso a la web app para ajustar calas desde el móvil.</li>
              <li>Proceso visual con foto, líneas y resultado en milímetros.</li>
              <li>Guardado de la primera medida para no repetir el proceso completo después.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing