"use client";
import { useState } from "react";
import Header from "../../components/Header/Header";
import ProjectItem from "../../components/ProjectItem/ProjectItem";
import { en } from "../../constants/en";
import type { Language } from "../../constants/language.types";
import { nl } from "../../constants/nl";
import { PROJECT_LINKS } from "../../constants/project-links";

export default function Home() {
  const [lang, setLang] = useState<Language>("en");
  const content = lang === "nl" ? nl : en;

  return (
    <>
      <Header title={content.projectsHeader} lang={lang} setLang={setLang} />
      <ul className="space-y-4 w-full">
        <ProjectItem
          href={PROJECT_LINKS.POWERLIFTING_CALENDAR}
          title={content.powerliftingCalendarTitle}
          description={content.powerliftingCalendarDescription}
          tags={["React", "Next.js", "Python", "Supabase"]}
        />
        <ProjectItem
          href={PROJECT_LINKS.DRAW_SOMETHING}
          title={content.drawSomethingTitle}
          description={content.drawSomethingDescription}
          tags={["React", "Next.js", "Supabase"]}
        />
        <ProjectItem
          href={PROJECT_LINKS.PORTFOLIO} // TODO: Replace with Tic Tac Toe link
          title={content.drawSomethingTitle}
          description={content.drawSomethingDescription}
          tags={["React", "Next.js", "Firebase"]}
        />
        <ProjectItem
          href={PROJECT_LINKS.PORTFOLIO}
          title={content.portfolioTitle}
          description={content.portfolioDescription}
          tags={["React", "Next.js"]}
        />
      </ul>
    </>
  );
}
