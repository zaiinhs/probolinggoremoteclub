type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="theme-hero relative overflow-hidden border-b">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-3xl space-y-5">
          {eyebrow ? (
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[var(--prc-sea)]">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="theme-heading text-4xl font-semibold tracking-tight sm:text-5xl">
            {title}
          </h1>
          <p className="theme-copy max-w-2xl text-lg leading-8">{description}</p>
        </div>
      </div>
    </section>
  );
}
