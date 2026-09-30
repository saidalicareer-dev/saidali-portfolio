import { profile, chain } from "../data/content";

export default function Hero() {
  return (
    <header className="pb-16 pt-16 sm:pt-24">
      <p className="text-muted">{profile.availability} · {profile.location}</p>
      <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-7xl">{profile.name}</h1>
      <p className="mt-3 text-xl font-medium text-accent sm:text-2xl">{profile.title}: {profile.headline}</p>
      <p className="mt-6 max-w-xl text-lg">{profile.statement}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a href={`mailto:${profile.email}`} className="rounded-md bg-accent px-5 py-2.5 font-medium text-bg transition hover:opacity-90">Email me</a>
        <a href="#work" className="rounded-md border border-line px-5 py-2.5 font-medium transition hover:border-accent">See what I validate</a>
      </div>

      <ol aria-label="Validation flow" className="mt-16 grid border-l border-line md:grid-cols-5 md:border-l-0 md:border-t">
        {chain.map((s, i) => (
          <li key={s} className="step relative pb-6 pl-6 md:pb-0 md:pl-0 md:pr-4 md:pt-6" style={{ animationDelay: `${300 + i * 260}ms` }}>
            <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-accent md:-top-[5px] md:left-0" />
            <span className="font-medium">{s}</span>
          </li>
        ))}
      </ol>
      <p className="mt-4 text-sm text-muted">Every requirement traced to a test, every test to a result. Work done under ASPICE SYS.4 and SYS.5.</p>
    </header>
  );
}
