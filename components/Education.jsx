import Section from "./Section";
import { education, certifications } from "../data/content";

export default function Education() {
  return (
    <Section id="education" title="Education and certifications">
      <ul className="space-y-4">
        {education.map((e) => (
          <li key={e.degree}>
            <p className="font-semibold">{e.degree}</p>
            <p className="text-muted">{e.school} · {e.period}{e.note ? ` · ${e.note}` : ""}</p>
          </li>
        ))}
      </ul>
      <p className="mt-8 font-semibold">Certifications</p>
      <p className="mt-1 text-muted">{certifications.join(", ")}</p>
    </Section>
  );
}
