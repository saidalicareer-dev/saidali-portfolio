import Section from "./Section";
import { experience } from "../data/content";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <h3 className="text-xl font-semibold">{experience.role} at {experience.company}</h3>
      <p className="text-muted">{experience.period} · {experience.place}</p>
      <ol className="mt-5 space-y-2 border-l border-line pl-5">
        {experience.steps.map((s) => (
          <li key={s.title}><span className="font-medium">{s.title}</span> <span className="text-muted">{s.period}</span></li>
        ))}
      </ol>
      <ul className="mt-6 list-disc space-y-2 pl-5 marker:text-accent">
        {experience.highlights.map((h) => <li key={h}>{h}</li>)}
      </ul>
    </Section>
  );
}
