function SectionTitle({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={`space-y-3 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--accent)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className={`max-w-2xl text-base leading-7 text-[var(--muted)] ${align === 'center' ? 'mx-auto' : ''}`}>
          {description}
        </p>
      ) : null}
    </div>
  )
}

export default SectionTitle