"use client";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Section from "../../components/Section";
import Tag from "../../components/Tag";
import { CONTACT, en, type Language, nl } from "../../constants/content";

const LANG_KEY = "lang";

export default function Home() {
  const [lang, setLang] = useState<Language>("en");
  const c = lang === "nl" ? nl : en;

  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem(LANG_KEY);
    } catch {}
    if (saved === "nl" || saved === "en") setLang(saved);
    else if (navigator.language.toLowerCase().startsWith("nl")) setLang("nl");
  }, []);

  useEffect(() => {
    document.documentElement.lang = c.htmlLang;
  }, [c.htmlLang]);

  const changeLang = (next: Language) => {
    setLang(next);
    try {
      localStorage.setItem(LANG_KEY, next);
    } catch {}
  };

  return (
    <>
      <Navbar nav={c.nav} lang={lang} setLang={changeLang} />
      <main id="content" className="mx-auto max-w-4xl px-5 sm:px-8">
        <section className="py-16 md:py-28">
          <p className="mb-3 font-mono text-sm text-accent">
            {c.hero.greeting}
          </p>
          <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
            {c.hero.name}
          </h1>
          <p className="mt-4 text-xl text-muted md:text-2xl">{c.hero.role}</p>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed">
            {c.hero.summary}
          </p>
          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-sm">
            <span
              aria-hidden="true"
              className="size-2 rounded-full bg-emerald-500"
            />
            {c.hero.status}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            <a
              href="#contact"
              className="rounded-md bg-foreground px-4 py-2 font-medium text-background transition-opacity hover:opacity-80"
            >
              {c.hero.cta}
            </a>
            <a
              href={c.hero.cvHref}
              download
              className="rounded-md border border-border px-4 py-2 font-medium transition-colors hover:bg-surface"
            >
              {c.hero.downloadCv}
            </a>
            <a
              href={CONTACT.github}
              className="text-muted underline-offset-4 hover:text-foreground hover:underline"
            >
              GitHub
            </a>
            <a
              href={CONTACT.linkedin}
              className="text-muted underline-offset-4 hover:text-foreground hover:underline"
            >
              LinkedIn
            </a>
            <span className="text-muted">{c.hero.location}</span>
          </div>
        </section>

        <Section id="experience" title={c.experienceHeader}>
          <ol className="space-y-10">
            {c.experience.map((job) => (
              <li key={job.role}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="text-lg font-semibold">
                    {job.role}
                    <span className="font-normal text-muted">
                      {" · "}
                      {job.orgHref ? (
                        <a
                          href={job.orgHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline-offset-4 hover:text-foreground hover:underline"
                        >
                          {job.org}
                        </a>
                      ) : (
                        job.org
                      )}
                    </span>
                  </h3>
                  <span className="font-mono text-xs text-muted">
                    {job.period}
                  </span>
                </div>
                {job.stack && (
                  <p className="mt-1 font-mono text-xs text-accent">
                    {job.stack}
                  </p>
                )}
                <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-muted marker:text-border">
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="projects" title={c.projectsHeader}>
          <ul className="grid gap-4 sm:grid-cols-2">
            {c.projects.map((p) => (
              <li
                key={p.title}
                className="flex flex-col rounded-xl border border-border bg-surface p-5"
              >
                <p className="font-mono text-xs text-muted">{p.meta}</p>
                <h3 className="mt-1 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
                {p.href && (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 text-sm font-medium text-accent underline-offset-4 hover:underline"
                  >
                    {p.linkLabel} <span aria-hidden="true">↗</span>
                    <span className="sr-only">
                      (
                      {lang === "nl"
                        ? "opent in een nieuw tabblad"
                        : "opens in a new tab"}
                      )
                    </span>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </Section>

        <Section id="skills" title={c.skillsHeader}>
          <dl className="space-y-4">
            {c.skills.map((group) => (
              <div
                key={group.label}
                className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6"
              >
                <dt className="w-44 shrink-0 text-sm text-muted">
                  {group.label}
                </dt>
                <dd className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="education" title={c.educationHeader}>
          <div className="flex flex-wrap items-baseline justify-between gap-x-4">
            <h3 className="text-lg font-semibold">
              {c.education.degree}
              <span className="font-normal text-muted">
                {" "}
                ·{" "}
                <a
                  href={c.education.schoolHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-4 hover:text-foreground hover:underline"
                >
                  {c.education.school}
                </a>
              </span>
            </h3>
            <span className="font-mono text-xs text-muted">
              {c.education.period}
            </span>
          </div>
          <p className="mt-3 leading-relaxed text-muted">
            {c.education.description}
          </p>
        </Section>

        <Section id="beyond" title={c.beyondHeader}>
          <ul className="grid gap-6 sm:grid-cols-3">
            {c.beyond.map((item) => (
              <li key={item.title}>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="contact" title={c.contactHeader}>
          <p className="max-w-xl text-lg leading-relaxed">{c.contactText}</p>
          <div className="mt-6 flex flex-col gap-2 font-mono text-sm">
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-accent underline-offset-4 hover:underline"
            >
              {CONTACT.email}
            </a>
            <a
              href={CONTACT.linkedin}
              className="text-muted underline-offset-4 hover:text-foreground hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </Section>

        <footer className="border-t border-border py-8 text-sm text-muted">
          © {new Date().getFullYear()} Aidan Verkerk · {c.footer}
        </footer>
      </main>
    </>
  );
}
