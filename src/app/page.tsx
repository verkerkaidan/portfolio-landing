"use client";
import { useState } from "react";
import ProjectItem from "../../components/ProjectItem/ProjectItem";
import { en } from "../../constants/en";
import type { Language } from "../../constants/language.types";
import { nl } from "../../constants/nl";

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
          <div className="flex gap-2">
            <button
              type="button"
              className={`px-3 py-1 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-medium hover:bg-zinc-300 dark:hover:bg-zinc-700 transition${lang === "nl" ? " font-bold" : ""}`}
              onClick={() => setLang("nl")}
            >
              🇳🇱
            </button>
            <button
              type="button"
              className={`px-3 py-1 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-medium hover:bg-zinc-300 dark:hover:bg-zinc-700 transition${lang === "en" ? " font-bold" : ""}`}
              onClick={() => setLang("en")}
            >
              🇺🇸
            </button>
          </div>
        </div>
        <ul className="space-y-4 w-full">
          <ProjectItem
            href={"https://dionaidan.vercel.app/"}
            title={content.knkfTitle}
            description={content.knkfDescription}
            tags={["React", "Next.js", "Python"]}
          />
          <ProjectItem
            href="https://dionaidan-draw-app.vercel.app/"
            title={content.drawSomethingTitle}
            description={content.drawSomethingDescription}
            tags={["React", "Next.js"]}
          />
          <ProjectItem
            href="http://localhost:3000"
            title={content.portfolioTitle}
            description={content.portfolioDescription}
            tags={["React", "Next.js"]}
          />
        </ul>
      </main>
    </div>
  );
}
