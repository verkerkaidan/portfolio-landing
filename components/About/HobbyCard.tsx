import type { HobbyCardProps } from "./about.types";

export default function HobbyCard({ title, description }: HobbyCardProps) {
  return (
    <div className="p-4 rounded-lg bg-white border border-amber-200 hover:border-amber-400 transition-colors duration-300">
      <h3 className="font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-600">{description}</p>
    </div>
  );
}
