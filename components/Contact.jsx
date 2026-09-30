import Section from "./Section";
import { profile } from "../data/content";

const link = "underline decoration-line underline-offset-4 transition hover:decoration-accent";

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <p className="max-w-xl text-lg">I am looking for Software Test Engineer and Embedded Test Engineer roles in automotive OEMs and R&D teams. I can join immediately.</p>
      <ul className="mt-6 space-y-2">
        <li>Email: <a className={link} href={`mailto:${profile.email}`}>{profile.email}</a></li>
        {profile.phone && (
          <li>Phone: <a className={link} href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a></li>
        )}
        <li>LinkedIn: <a className={link} href={profile.linkedin} target="_blank" rel="noopener noreferrer">saidali-s-501884247</a></li>
      </ul>
      <p className="mt-12 text-sm text-muted">{profile.name}, {profile.location}</p>
    </Section>
  );
}
