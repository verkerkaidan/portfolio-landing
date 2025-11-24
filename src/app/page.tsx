"use client";
import { useState } from "react";
import LanguageSelect from "../../components/LanguageSelect/LanguageSelect";
import ProjectItem from "../../components/ProjectItem/ProjectItem";
import { en } from "../../constants/en";
import type { Language } from "../../constants/language.types";
import { nl } from "../../constants/nl";
import { PROJECT_LINKS } from "../../constants/project-links";

export default function Home() {
  const [lang, setLang] = useState<Language>("en");
  const content = lang === "nl" ? nl : en;

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-content py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="w-full flex items-center justify-between mb-12">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">
            {content.h1}
          </h1>
          <LanguageSelect lang={lang} setLang={setLang} />
        </div>
        <ul className="space-y-4 w-full">
          <ProjectItem
            href={PROJECT_LINKS.POWERLIFTING_CALENDAR}
            title={content.powerliftingCalendarTitle}
            description={content.powerliftingCalendarDescription}
            tags={["React", "Next.js", "Python"]}
          />
          <ProjectItem
            href={PROJECT_LINKS.DRAW_SOMETHING}
            title={content.drawSomethingTitle}
            description={content.drawSomethingDescription}
            tags={["React", "Next.js"]}
          />
          <ProjectItem
            href={PROJECT_LINKS.PORTFOLIO}
            title={content.portfolioTitle}
            description={content.portfolioDescription}
            tags={["React", "Next.js"]}
          />
        </ul>
      </main>
    </div>
  );
}
