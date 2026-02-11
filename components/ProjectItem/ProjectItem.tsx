import Link from "next/link";
import type { ProjectItemProps } from "./projectitem.types";

const TAG_COLORS = [
  "bg-blue-100 text-blue-700 border border-blue-200",
  "bg-emerald-100 text-emerald-700 border border-emerald-200",
  "bg-purple-100 text-purple-700 border border-purple-200",
  "bg-pink-100 text-pink-700 border border-pink-200",
  "bg-amber-100 text-amber-700 border border-amber-200",
  "bg-red-100 text-red-700 border border-red-200",
  "bg-indigo-100 text-indigo-700 border border-indigo-200",
];

export default function ProjectItem({
  href,
  title,
  description,
  tags,
}: ProjectItemProps) {
  return (
    <Link href={href} className="block group">
      <li className="bg-white border border-slate-200 rounded-xl p-5 md:p-6 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all duration-300 cursor-pointer">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h2>
        <p className="text-slate-600 text-base md:text-lg mb-4 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <span
              key={tag}
              className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${TAG_COLORS[idx % TAG_COLORS.length]} hover:shadow-sm transition-shadow duration-200`}
            >
              {tag}
            </span>
          ))}
        </div>
      </li>
    </Link>
  );
}
