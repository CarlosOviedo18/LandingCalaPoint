import SectionTitle from './SectionTitle'

function Problem() {
  const pains = [
    'Buscar videos en YouTube da pereza y muchas veces no resuelve el caso real de tu zapato.',
    'Tener que usar herramientas, pintura o cosas de la casa para probar termina siendo incómodo.',
    'Ir a un ciclo taller y que igual quede mal puede terminar en molestias o incluso lesión.',
  ]

  return (
    <section className="border-b border-white/8 bg-[rgba(9,12,19,0.92)]">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <div className="max-w-3xl">
          <SectionTitle
            eyebrow="El problema"
            title="Cuando la cala queda mal, el pedaleo se siente raro desde el primer kilómetro."
            description="La app nace para ciclistas que quieren una forma más clara de ajustar sus calas sin depender de adivinar, sin reglas complicadas y sin pagar por cada pequeño cambio. También sirve para medir el desgaste de la cala y repetir la medida después si cambias a otra zapatilla o haces un ajuste nuevo."
          />
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {pains.map((pain) => (
            <article key={pain} className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 text-white shadow-[0_20px_80px_rgba(0,0,0,0.18)]">
              <div className="mb-5 h-10 w-10 rounded-2xl bg-[rgba(157,255,193,0.12)]" />
              <p className="text-base leading-7">{pain}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Problem