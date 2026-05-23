import { useLeadEmail } from '../hook/useLeadEmail'

function Hero() {
  const { email, setEmail, submitEmail, isLoading, message, isSuccess, isError } = useLeadEmail('hero')

  return (
    <section className="relative overflow-hidden border-b border-white/8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(157,255,193,0.16),_transparent_40%),radial-gradient(circle_at_80%_20%,_rgba(92,114,255,0.14),_transparent_32%),linear-gradient(180deg,_rgba(8,12,20,0.96),_rgba(7,10,16,1))]" />
      <div className="relative mx-auto grid min-h-[100svh] max-w-7xl items-center gap-12 px-6 py-8 sm:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:px-12 lg:py-10">
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-[var(--text)] sm:text-6xl lg:text-7xl">
              Calas bien puestas, sin regla, sin adivinar y desde tu celular.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
              Una herramienta simple para ciclistas que quieren ajustar sus calas con más precisión, evitar molestias y no pagar un bike fitting para cada cambio.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 text-sm text-white/70">
            {['SPD-SL', 'Look Keo', 'Speedplay', 'Pago único'].map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
                {item}
              </span>
            ))}
          </div>

          <form onSubmit={submitEmail} className="max-w-xl space-y-3 rounded-3xl border border-white/10 bg-white/6 p-4 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
            <label className="block text-sm font-medium text-white/80" htmlFor="email">
              Avisame cuando esté listo
            </label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="tu@email.com"
                className="min-w-0 flex-1 rounded-2xl border border-white/10 bg-[rgba(7,10,16,0.7)] px-4 py-4 text-base text-[var(--text)] outline-none transition placeholder:text-white/35 focus:border-[var(--accent)]"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="rounded-2xl bg-[var(--accent)] px-6 py-4 text-sm font-semibold text-[#07110d] transition hover:brightness-110"
              >
                {isLoading ? 'Guardando...' : 'Quiero acceso'}
              </button>
            </div>
            <p className={`text-xs leading-6 ${isSuccess ? 'text-[var(--accent)]' : isError ? 'text-red-300' : 'text-white/48'}`}>
              {message || 'Sin spam. Solo avisos cuando el MVP esté listo para probar.'}
            </p>
          </form>
        </div>

        <div className="relative mx-auto w-full max-w-[420px]">
          <div className="absolute -inset-8 rounded-[2rem] bg-[radial-gradient(circle,_rgba(157,255,193,0.16),_transparent_60%)] blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,_rgba(255,255,255,0.08),_rgba(255,255,255,0.03))] p-5 shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 text-xs text-white/50">
              <span>Cómo se siente la app</span>
              <span>Clara y simple</span>
            </div>

            <div className="mt-5 space-y-4">
              <div className="rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,_rgba(18,24,36,0.95),_rgba(9,12,19,0.98))] p-5">
                <div className="flex items-center justify-between">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-white/35">Paso a paso</p>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] tracking-[0.24em] text-white/45">
                    4 pasos
                  </span>
                </div>

                <div className="mt-5 space-y-3">
                  {[
                    ['Foto lateral del zapato', 'Abrís la cámara y tomás una foto real.'],
                    ['Alineás la referencia', 'Movés las guías hasta tus puntos clave.'],
                    ['La app calcula', 'Te devuelve cuánto mover la cala en mm.'],
                    ['Guardás el ajuste', 'Lo reutilizás si cambias de calas o zapato.'],
                  ].map(([title, text], index) => (
                    <div key={title} className="flex items-start gap-4 rounded-[1.25rem] border border-white/10 bg-white/[0.04] px-4 py-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-[11px] font-semibold text-white/65">
                        {index + 1}
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-white">{title}</p>
                        <p className="text-sm leading-6 text-white/55">{text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4">
                <p className="text-[11px] uppercase tracking-[0.28em] text-white/35">Resultado y memoria</p>
                <div className="mt-3 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-3xl font-semibold tracking-tight text-white">3 mm atrás</p>
                    <p className="mt-1 text-sm text-white/60">1 mm hacia adentro</p>
                  </div>
                  <div className="rounded-2xl border border-[rgba(157,255,193,0.16)] bg-[rgba(157,255,193,0.08)] px-4 py-3 text-right">
                    <p className="text-[10px] uppercase tracking-[0.24em] text-[var(--accent)]">Guardado</p>
                    <p className="mt-1 text-sm font-medium text-white">Repetís la medida luego</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero