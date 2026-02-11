import HobbyCard from "./HobbyCard";
import Slideshow from "./Slideshow";

interface Hobby {
  title: string;
  description: string;
}

interface HobbiesSectionProps {
  title: string;
  hobbies: Hobby[];
  images: string[];
}

export default function HobbiesSection({
  title,
  hobbies,
  images,
}: HobbiesSectionProps) {
  return (
    <section className="rounded-xl bg-gradient-to-br from-amber-50 to-slate-50 border border-amber-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="p-6 md:p-8">
        <div className="flex items-center gap-3 mb-6">
          <div
            className="w-1 h-8 bg-amber-600 rounded-full"
            aria-hidden="true"
          ></div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            {title}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {hobbies.map((hobby) => (
            <HobbyCard key={hobby.title} {...hobby} />
          ))}
        </div>
        <div className="flex justify-center">
          <Slideshow images={images} />
        </div>
      </div>
    </section>
  );
}
