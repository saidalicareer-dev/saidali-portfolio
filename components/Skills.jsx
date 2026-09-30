import Section from "./Section";
import { skills } from "../data/content";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <dl className="space-y-5">
        {skills.map((g) => (
          <div key={g.group} className="grid gap-1 sm:grid-cols-[13rem_1fr]">
            <dt className="font-semibold">{g.group}</dt>
            <dd className="text-muted">{g.items.join(", ")}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
