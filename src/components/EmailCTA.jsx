import SectionTitle from './SectionTitle'
import { useLeadEmail } from '../hook/useLeadEmail'

function EmailCTA() {
  const { email, setEmail, submitEmail, isLoading, message, isSuccess, isError } = useLeadEmail('cta')

  const notificationClasses = isSuccess
    ? 'border-[rgba(157,255,193,0.32)] bg-[linear-gradient(135deg,_rgba(157,255,193,0.16),_rgba(157,255,193,0.06))] text-[var(--accent)]'
    : isError
      ? 'border-[rgba(248,113,113,0.35)] bg-[linear-gradient(135deg,_rgba(248,113,113,0.18),_rgba(248,113,113,0.08))] text-red-100'
      : 'border-white/10 bg-white/[0.04] text-white/55'

  return (
    <section className="bg-[rgba(9,12,19,0.92)]">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,_rgba(157,255,193,0.12),_rgba(92,114,255,0.08),_rgba(255,255,255,0.04))] p-6 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <SectionTitle
              eyebrow="Validación"
              title="Si te interesa, deja tu correo y te avisamos cuando esté lista."
              description="La landing no intenta vender todavía. Solo medir si hay suficiente interés para seguir construyendo la app."
            />

            <form onSubmit={submitEmail} className="rounded-[1.75rem] border border-white/10 bg-[rgba(7,10,16,0.68)] p-5 backdrop-blur-xl">
              <label htmlFor="lead-email" className="mb-3 block text-sm font-medium text-[var(--text)]">
                Tu correo
              </label>
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  id="lead-email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="nombre@email.com"
                  className="min-w-0 flex-1 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-base text-[var(--text)] outline-none transition placeholder:text-white/35 focus:border-[var(--accent)]"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="rounded-2xl bg-white px-6 py-4 text-sm font-semibold text-[#07110d] transition hover:bg-[var(--accent)] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isLoading ? 'Enviando...' : 'Avisame cuando esté listo'}
                </button>
              </div>
              <div className={`mt-4 rounded-[1.25rem] border px-4 py-4 text-sm leading-6 shadow-[0_18px_50px_rgba(0,0,0,0.22)] ${notificationClasses}`}>
                <p className="font-medium">
                  {message || 'Sin spam. Solo una lista corta de personas interesadas en probar la idea.'}
                </p>
                {isSuccess ? (
                  <p className="mt-1 text-xs uppercase tracking-[0.22em] text-[var(--accent)]/80">Listo, correo guardado</p>
                ) : null}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EmailCTA