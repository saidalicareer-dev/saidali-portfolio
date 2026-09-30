// Two-column row: heading on the left, content on the right (stacks on mobile).
export default function Section({ id, title, children }) {
  return (
    <section id={id} className="grid gap-6 border-t border-line py-14 md:grid-cols-[11rem_1fr] md:gap-10">
      <h2 className="text-lg font-semibold text-muted">{title}</h2>
      <div>{children}</div>
    </section>
  );
}
