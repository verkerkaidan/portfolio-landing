"use client";
import { useState } from "react";
import CertificationsSection from "../../../components/About/CertificationsSection";
import EducationSection from "../../../components/About/EducationSection";
import ExperienceSection from "../../../components/About/ExperienceSection";
import HobbiesSection from "../../../components/About/HobbiesSection";
import Header from "../../../components/Header/Header";
import { en } from "../../../constants/en";
import type { Language } from "../../../constants/language.types";
import { nl } from "../../../constants/nl";

export default function About() {
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
    <>
      <Header title={content.aboutHeader} lang={lang} setLang={setLang} />
      <article className="w-full space-y-6 md:space-y-8">
        <EducationSection
          title={content.educationHeader}
          degree={content.educationDegree}
          school={content.educationSchool}
          description={content.educationDescription}
        />
        <ExperienceSection
          title={content.experienceHeader}
          experiences={experiences}
        />
        <CertificationsSection
          title={content.certificationsHeader}
          certifications={certifications}
        />
        <HobbiesSection
          title={content.hobbiesHeader}
          hobbies={hobbies}
          images={hobbyImages}
        />
      </article>
    </>
  );
}
