import Image from "next/image";
import type { ExperienceItemProps } from "./about.types";

export default function ExperienceItem({
  title,
  period,
  description,
  logoSrc,
  logoAlt,
}: Omit<ExperienceItemProps, "accentColor">) {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
      <div className="flex-1">
        <p className="text-lg font-semibold text-slate-900">
          {title}
          <span className="text-slate-500 font-normal ml-2">({period})</span>
        </p>
        <p className="text-slate-600 text-sm mt-2">{description}</p>
      </div>
      <div className="w-20 h-20 md:w-28 md:h-28 flex-shrink-0 bg-white rounded-lg shadow-sm border border-emerald-200 overflow-hidden">
        <Image
          src={logoSrc}
          alt={logoAlt}
          className="w-full h-full object-cover"
          width={112}
          height={112}
        />
      </div>
    </div>
  );
}
