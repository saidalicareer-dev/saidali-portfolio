import Section from "./Section";
import { about, work } from "../data/content";

export default function Work() {
  return (
    <Section id="work" title="What I validate">
      <p className="max-w-2xl text-lg">{about}</p>
      <div className="mt-10 divide-y divide-line border-y border-line">
        {work.map((w) => (
          <article key={w.name} className="grid gap-4 py-8 lg:grid-cols-[1fr_1fr]">
            <div>
              <h3 className="text-xl font-semibold">{w.name}</h3>
              <p className="mt-1 text-accent">{w.standard}</p>
              <p className="mt-3 text-muted">{w.problem}</p>
            </div>
            <dl className="space-y-3 text-sm">
              <div><dt className="font-semibold">My contribution</dt><dd className="text-muted">{w.did}</dd></div>
              <div><dt className="font-semibold">Tools</dt><dd className="text-muted">{w.tools}</dd></div>
              <div><dt className="font-semibold">Outcome</dt><dd className="text-muted">{w.outcome}</dd></div>
            </dl>
          </article>
        ))}
      </div>
      <p className="mt-4 text-sm text-muted">Project and customer names are omitted; the work above describes my role on ASPICE automotive projects.</p>
    </Section>
  );
}
