"use client";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Section from "../../components/Section";
import Tag from "../../components/Tag";
import { CONTACT, en, type Language, nl } from "../../constants/content";

export default function Home() {
  const [lang, setLang] = useState<Language>("en");
  const c = lang === "nl" ? nl : en;

  useEffect(() => {
    document.documentElement.lang = c.htmlLang;
  }, [c.htmlLang]);

  return (
    <>
      <Navbar nav={c.nav} lang={lang} setLang={setLang} />
      <main id="top" className="mx-auto max-w-4xl px-5 sm:px-8">
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
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            <a
              href="#contact"
              className="rounded-md bg-foreground px-4 py-2 font-medium text-background transition-opacity hover:opacity-80"
            >
              {c.hero.cta}
            </a>
            <a
              href="/CV_Aidan_Verkerk.pdf"
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
                    <span className="font-normal text-muted"> · {job.org}</span>
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
                    {p.linkLabel} ↗
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
                · {c.education.school}
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
              href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
              className="text-muted underline-offset-4 hover:text-foreground hover:underline"
            >
              {CONTACT.phone}
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
