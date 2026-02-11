import CertificationCard from "./CertificationCard";

interface Certification {
  title: string;
  description: string;
  logoSrc: string;
  logoAlt: string;
}

interface CertificationsSectionProps {
  title: string;
  certifications: Certification[];
}

export default function CertificationsSection({
  title,
  certifications,
}: CertificationsSectionProps) {
  return (
    <section className="rounded-xl bg-gradient-to-br from-purple-50 to-slate-50 border border-purple-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="p-6 md:p-8">
        <div className="flex items-center gap-3 mb-6">
          <div
            className="w-1 h-8 bg-purple-600 rounded-full"
            aria-hidden="true"
          ></div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            {title}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <CertificationCard key={cert.title} {...cert} />
          ))}
        </div>
      </div>
    </section>
  );
}
