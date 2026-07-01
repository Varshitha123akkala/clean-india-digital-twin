export function PageHero({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="bg-[var(--section-muted)] border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-12 text-center">
        {eyebrow && (
          <div className="text-primary text-sm font-semibold uppercase tracking-wide mb-3">{eyebrow}</div>
        )}
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">{title}</h1>
        {subtitle && <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  );
}