import Image from "next/image";

interface EducationSectionProps {
  title: string;
  degree: string;
  school: string;
  description: string;
}

export default function EducationSection({
  title,
  degree,
  school,
  description,
}: EducationSectionProps) {
  return (
    <section className="rounded-xl bg-gradient-to-br from-blue-50 to-slate-50 border border-blue-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-1 h-8 bg-blue-600 rounded-full"
              aria-hidden="true"
            ></div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              {title}
            </h2>
          </div>
          <div className="space-y-3">
            <div>
              <p className="text-lg font-semibold text-blue-600">{degree}</p>
              <p className="text-slate-700 font-medium">{school}</p>
              <p className="text-slate-600 text-sm mt-1">{description}</p>
            </div>
          </div>
        </div>
        <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 bg-white rounded-xl shadow-sm border border-blue-100 overflow-hidden">
          <Image
            src="/hogeschool-leiden.png"
            alt="Hogeschool Leiden logo"
            className="w-full h-full object-cover"
            width={128}
            height={128}
          />
        </div>
      </div>
    </section>
  );
}
