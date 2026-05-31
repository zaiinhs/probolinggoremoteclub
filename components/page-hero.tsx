type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="theme-hero relative overflow-hidden border-b-2">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-3xl space-y-5">
          {eyebrow ? (
            <span className="sticker rotate-l">✦ {eyebrow}</span>
          ) : null}
          <h1 className="theme-heading text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="theme-copy max-w-2xl text-lg leading-8">{description}</p>
        </div>
      </div>
    </section>
  );
}
