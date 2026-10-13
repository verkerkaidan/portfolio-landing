interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section
      id={id}
      className="grid gap-6 border-t border-border py-12 md:grid-cols-[10rem_1fr] md:gap-10 md:py-16"
    >
      <h2 className="font-mono text-sm uppercase tracking-widest text-muted">
        {title}
      </h2>
      <div>{children}</div>
    </section>
  );
}
