"use client";
import { useState } from "react";
import Header from "../../components/Header/Header";
import ProjectsList from "../../components/ProjectItem/ProjectsList";
import type { ProjectItemProps } from "../../components/ProjectItem/projectitem.types";
import { en } from "../../constants/en";
import type { Language } from "../../constants/language.types";
import { nl } from "../../constants/nl";
import { PROJECT_LINKS } from "../../constants/project-links";

export default function Home() {
  const [lang, setLang] = useState<Language>("en");
  const content = lang === "nl" ? nl : en;

  const projects: ProjectItemProps[] = [
    {
      href: PROJECT_LINKS.POWERLIFTING_CALENDAR,
      title: content.powerliftingCalendarTitle,
      description: content.powerliftingCalendarDescription,
      tags: ["React", "Next.js", "Python", "Supabase"],
    },
    {
      href: PROJECT_LINKS.PORTFOLIO,
      title: content.portfolioTitle,
      description: content.portfolioDescription,
      tags: ["React", "Next.js"],
    },
  ];

  return (
    <>
      <Header title={content.projectsHeader} lang={lang} setLang={setLang} />
      <article className="w-full">
        <ProjectsList projects={projects} />
      </article>
    </>
  );
}
