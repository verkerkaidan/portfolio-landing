export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-accent-soft px-3 py-1 font-mono text-xs text-accent">
      {children}
    </span>
  );
}
