import Image from "next/image";
import type { CertificationCardProps } from "./about.types";

export default function CertificationCard({
  title,
  description,
  logoSrc,
  logoAlt,
}: CertificationCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-4 rounded-lg bg-white border border-purple-200 hover:border-purple-400 transition-colors duration-300">
      <div className="w-20 h-20 mb-4 rounded-lg overflow-hidden shadow-sm">
        <Image
          src={logoSrc}
          alt={logoAlt}
          className="w-full h-full object-cover"
          width={80}
          height={80}
        />
      </div>
      <h3 className="font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-600">{description}</p>
    </div>
  );
}
