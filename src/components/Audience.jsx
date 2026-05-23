import SectionTitle from './SectionTitle'

const audience = [
  'Ciclistas que usan SPD-SL, Look Keo o Speedplay.',
  'Personas que quieren ajustar sus calas por su cuenta.',
  'Usuarios que no quieren pagar un bike fitting solo para una corrección pequeña.',
  'Ciclistas que ya notaron molestias y quieren repetir la medida luego.',
]

function Audience() {
  return (
    <section className="border-b border-white/8 bg-[rgba(9,12,19,0.92)]">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <SectionTitle
          eyebrow="Para quién es"
          title="Hecha para ciclistas que quieren precisión sin complicarse."
          description="La propuesta apunta a usuarios que ya usan calas y necesitan una guía más simple, rápida y accesible."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {audience.map((item) => (
            <article key={item} className="flex items-start gap-4 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6">
              <div className="mt-1 h-3 w-3 rounded-full bg-[var(--accent)]" />
              <p className="text-base leading-7 text-[var(--muted)]">{item}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Audience