import SectionTitle from './SectionTitle'

const steps = [
  'El usuario abre la app desde el celular y elige su sistema de cala.',
  'Toma una foto lateral del zapato para trabajar sobre una base real.',
  'Arrastra las guías hasta alinear los puntos clave con el dedo gordo y el meñique.',
  'La app calcula la posición y devuelve cuántos mm mover la cala.',
]

function HowItWorks() {
  return (
    <section className="border-b border-white/8 bg-[rgba(7,10,16,0.96)]">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <SectionTitle
          eyebrow="Cómo funciona"
          title="Un flujo corto, visual y fácil de seguir."
          description="El objetivo es que la experiencia se entienda sin manual. Cuatro pasos, una foto y un resultado directo."
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-4">
          {steps.map((step, index) => (
            <article key={step} className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.18)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(157,255,193,0.12)] text-sm font-semibold text-[var(--accent)]">
                0{index + 1}
              </div>
              <p className="mt-5 text-base leading-7 text-[var(--text)]">{step}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks