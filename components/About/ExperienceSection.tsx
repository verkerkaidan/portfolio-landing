import ExperienceItem from "./ExperienceItem";

interface Experience {
  title: string;
  period: string;
  description: string;
  logoSrc: string;
  logoAlt: string;
}

interface ExperienceSectionProps {
  title: string;
  experiences: Experience[];
}

export default function ExperienceSection({
  title,
  experiences,
}: ExperienceSectionProps) {
  return (
    <section className="rounded-xl bg-gradient-to-br from-emerald-50 to-slate-50 border border-emerald-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="p-6 md:p-8">
        <div className="flex items-center gap-3 mb-6">
          <div
            className="w-1 h-8 bg-emerald-600 rounded-full"
            aria-hidden="true"
          ></div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            {title}
          </h2>
        </div>
        <div className="space-y-6">
          {experiences.map((experience, idx) => (
            <div key={experience.title}>
              <ExperienceItem {...experience} />
              {idx < experiences.length - 1 && (
                <div className="border-t border-emerald-200 mt-6"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
