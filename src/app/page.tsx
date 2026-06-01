"use client";
import { useState } from "react";
import CertificationsSection from "../../components/About/CertificationsSection";
import EducationSection from "../../components/About/EducationSection";
import ExperienceSection from "../../components/About/ExperienceSection";
import HobbiesSection from "../../components/About/HobbiesSection";
import { en } from "../../constants/en";
import type { Language } from "../../constants/language.types";
import { nl } from "../../constants/nl";

export default function Home() {
  const [lang, setLang] = useState<Language>("en");
  const content = lang === "nl" ? nl : en;

  const experiences = [
    {
      title: content.odidoParttimeTitle,
      period: content.odidoParttimeDuration,
      description: content.odidoParttimeExperienceDescription,
      logoSrc: "/odido-logo.png",
      logoAlt: "Odido logo",
    },
    {
      title: content.odidoInternTitle,
      period: content.odidoInternDuration,
      description: content.odidoInternExperienceDescription,
      logoSrc: "/odido-logo.png",
      logoAlt: "Odido logo",
    },
    {
      title: content.experienceAhTitle,
      period: content.experienceAhPeriod,
      description: content.experienceAhDescription,
      logoSrc: "/AH-logo.png",
      logoAlt: "Albert Heijn logo",
    },
  ];

  const certifications = [
    {
      title: content.certificationReactTitle,
      description: content.certificationReactDescription,
      logoSrc: "/React-logo.png",
      logoAlt: "React logo",
    },
    {
      title: content.certificationSwiftTitle,
      description: content.certificationSwiftDescription,
      logoSrc: "/swift-logo.png",
      logoAlt: "Swift logo",
    },
    {
      title: content.certificationFlutterTitle,
      description: content.certificationFlutterDescription,
      logoSrc: "/flutter-logo.png",
      logoAlt: "Flutter logo",
    },
  ];

  const hobbies = [
    {
      title: "Powerlifting",
      description: content.hobbyPowerlifting,
    },
    {
      title: "Dungeons & Dragons",
      description: content.hobbyDnD,
    },
    {
      title: "Gaming",
      description: content.hobbyGaming,
    },
  ];

  const hobbyImages = [
    "/knkf-logo2.png",
    "/rocket-league-logo2.png",
    "/bg3-logo.png",
    "/dnd-logo.png",
  ];

  return (
    <main className="w-full">
      <div className="flex justify-end items-center gap-2 p-4">
        <button
          onClick={() => setLang("en")}
          className={`px-3 py-1 rounded text-sm font-medium transition ${
            lang === "en"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
        >
          EN
        </button>
        <button
          onClick={() => setLang("nl")}
          className={`px-3 py-1 rounded text-sm font-medium transition ${
            lang === "nl"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
        >
          NL
        </button>
      </div>
      <article className="w-full space-y-6 md:space-y-8">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
          {content.aboutHeader}
        </h1>
        <section className="rounded-xl bg-white border border-slate-200 p-6 md:p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-1 h-8 bg-slate-700 rounded-full"
              aria-hidden="true"
            ></div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              {content.generalAboutHeader}
            </h2>
          </div>
          <p className="text-slate-700 leading-relaxed">
            {content.generalAboutDescription}
          </p>
        </section>
        <ExperienceSection
          experiences={experiences}
          title={content.experienceHeader}
        />
        <EducationSection
          title={content.educationHeader}
          degree={content.educationDegree}
          school={content.educationSchool}
          description={content.educationDescription}
        />
        <CertificationsSection
          certifications={certifications}
          title={content.certificationsHeader}
        />
        <HobbiesSection
          hobbies={hobbies}
          title={content.hobbiesHeader}
          images={hobbyImages}
        />
        <section className="rounded-xl bg-white border border-slate-200 p-6 md:p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-1 h-8 bg-blue-600 rounded-full"
              aria-hidden="true"
            ></div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              {content.contactHeader}
            </h2>
          </div>
          <p className="text-slate-700 leading-relaxed whitespace-pre-line">
            {content.contactDescription}
          </p>
        </section>
      </article>
    </main>
  );
}
