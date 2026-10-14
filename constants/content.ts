export type Language = "nl" | "en";

export interface ExperienceEntry {
  role: string;
  org: string;
  orgHref?: string;
  period: string;
  stack?: string;
  bullets: string[];
}

export interface ProjectEntry {
  title: string;
  meta: string;
  description: string;
  tags: string[];
  href?: string;
  linkLabel?: string;
}

export interface Content {
  htmlLang: string;
  nav: {
    about: string;
    experience: string;
    projects: string;
    skills: string;
    education: string;
    contact: string;
  };
  hero: {
    greeting: string;
    name: string;
    role: string;
    summary: string;
    cta: string;
    location: string;
  };
  experienceHeader: string;
  experience: ExperienceEntry[];
  projectsHeader: string;
  projects: ProjectEntry[];
  skillsHeader: string;
  skills: { label: string; items: string[] }[];
  educationHeader: string;
  education: {
    degree: string;
    school: string;
    schoolHref: string;
    period: string;
    description: string;
  };
  beyondHeader: string;
  beyond: { title: string; description: string }[];
  contactHeader: string;
  contactText: string;
  footer: string;
}

export const PROJECT_LINKS = {
  KOBO: "https://github.com/verkerkaidan/Kobo-Custom-Book-Cover-Background",
  FORTIUS: "https://lskvfortius.nl",
};

export const ORG_LINKS = {
  ODIDO: "https://www.odido.nl",
  HOGESCHOOL_LEIDEN: "https://www.hsleiden.nl",
};

export const CONTACT = {
  email: "aidanverkerk@icloud.com",
  phone: "+31 6 48084353",
  linkedin: "https://nl.linkedin.com/in/aidanverkerk",
  github: "https://github.com/verkerkaidan",
};

const skillItems = {
  frontend: ["React", "Next.js", "TypeScript"],
  backend: ["Java (Spring Boot)", "Go"],
  infra: ["Docker"],
  data: ["PostgreSQL", "Grafana"],
  tooling: ["Git", "GitHub"],
  ai: ["Claude Code", "Cowork"],
};

export const en: Content = {
  htmlLang: "en",
  nav: {
    about: "About",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    education: "Education",
    contact: "Contact",
  },
  hero: {
    greeting: "Hi, I’m",
    name: "Aidan Verkerk",
    role: "Frontend developer & fourth-year Computer Science student",
    summary:
      "I’m a 24-year-old student at Hogeschool Leiden. Alongside my studies I work 32 hours a week at Odido as a work-student software engineer, where I function as a junior frontend developer on the customer portals. Outside of code I’m a powerlifter and love tabletop games.",
    cta: "Get in touch",
    location: "Alphen aan den Rijn, the Netherlands",
  },
  experienceHeader: "Experience",
  experience: [
    {
      role: "Frontend Developer (Work Student)",
      org: "Odido Netherlands",
      orgHref: ORG_LINKS.ODIDO,
      period: "Sept 2025 – Present",
      stack: "React / Next.js, Nest.js, communication, scrum",
      bullets: [
        "Grew from an internship into a work-student role, where I function as a junior frontend developer.",
        "Build features for the Odido customer portals in React / Next.js (TypeScript) as part of a scrum team of 7 developers, with daily contact with UX, backend teams, other departments and product leads.",
        "Able to take features independently from the Figma design to a finished frontend.",
      ],
    },
    {
      role: "Retail Associate",
      org: "Albert Heijn",
      period: "2019 – Present",
      bullets: [
        "Over 7 years of customer-facing experience as a cashier in a fast-paced supermarket: reliability, teamwork and patience.",
      ],
    },
  ],
  projectsHeader: "Projects",
  projects: [
    {
      title: "Hobbiton",
      meta: "School project · 2025/2026",
      description:
        "A social media website for sharing hobbies, built in a group of 5 with around 15 microservices in different languages. I owned a Notification Service using websockets (Go) and a Profile Connections Service (Java).",
      tags: ["Java", "Go", "Docker", "PostgreSQL"],
    },
    {
      title: "Kobo Dynamic Sleep Screen",
      meta: "Personal project · Aug 2026",
      description:
        "A Go application that reads an e-reader’s local Nickel database, renders reading statistics onto a background photo and automatically selects it as the sleep screen. Written with Claude Code.",
      tags: ["Go", "SQLite"],
      href: PROJECT_LINKS.KOBO,
      linkLabel: "View on GitHub",
    },
    {
      title: "L.S.K.V. Fortius Website",
      meta: "WordPress · Jun 2026",
      description:
        "Built the website for the powerlifting club I’m a member of, from a design by a fellow student, to attract new members during the El Cid of Leiden. Configured SEO through Google Search Console.",
      tags: ["WordPress", "Figma", "SEO"],
      href: PROJECT_LINKS.FORTIUS,
      linkLabel: "Visit website",
    },
  ],
  skillsHeader: "Skills",
  skills: [
    { label: "Frontend", items: skillItems.frontend },
    { label: "Backend", items: [skillItems.backend[0], "Go (basic)"] },
    { label: "Infrastructure", items: ["Docker (basic)"] },
    { label: "Data & observability", items: ["PostgreSQL", "Grafana (basic)"] },
    { label: "Tooling", items: skillItems.tooling },
    { label: "AI", items: [...skillItems.ai, "other AI technologies"] },
    {
      label: "Languages",
      items: ["Dutch (native)", "English (second native)"],
    },
  ],
  educationHeader: "Education",
  education: {
    degree: "HBO Computer Science",
    school: "Hogeschool Leiden",
    schoolHref: ORG_LINKS.HOGESCHOOL_LEIDEN,
    period: "2023 – 2027",
    description:
      "Studying Computer Science since 2023, graduating in 2027 after a final graduation project.",
  },
  beyondHeader: "Beyond code",
  beyond: [
    {
      title: "Powerlifting",
      description: "Training four times a week and competing through the KNKF.",
    },
    {
      title: "Tabletop games",
      description:
        "A Dungeons & Dragons campaign with friends, running since 2020. For the past few months I’ve also been dabbling in Call of Cthulhu.",
    },
    {
      title: "Gaming",
      description:
        "From competitive Rocket League to story-driven games like Baldur’s Gate 3. Lately I’ve been enjoying REPO with friends.",
    },
  ],
  contactHeader: "Let’s talk",
  contactText:
    "Looking for a frontend developer, or just want to say hi? Send me a message.",
  footer: "Built with Next.js and Tailwind CSS.",
};

export const nl: Content = {
  htmlLang: "nl",
  nav: {
    about: "Over mij",
    experience: "Ervaring",
    projects: "Projecten",
    skills: "Skills",
    education: "Opleiding",
    contact: "Contact",
  },
  hero: {
    greeting: "Hoi, ik ben",
    name: "Aidan Verkerk",
    role: "Frontend developer & vierdejaars Informatica student",
    summary:
      "Ik ben een 24-jarige student aan de Hogeschool Leiden. Naast mijn studie werk ik 32 uur per week bij Odido als werkstudent Software Engineer, waar ik effectief functioneer als junior frontend developer op de klantportalen. In mijn vrije tijd ben ik powerlifter en speel ik graag tabletop games.",
    cta: "Neem contact op",
    location: "Alphen aan den Rijn, Nederland",
  },
  experienceHeader: "Ervaring",
  experience: [
    {
      role: "Frontend Developer (Werkstudent)",
      org: "Odido Nederland",
      orgHref: ORG_LINKS.ODIDO,
      period: "sept 2025 – nu",
      stack: "React / Next.js, Nest.js, communicatie, scrum",
      bullets: [
        "Vanuit een stagepositie doorgegroeid naar werkstudent, waar ik effectief functioneer als junior frontend developer.",
        "Features ontwikkeld voor de Odido Customer Portals in React / Next.js (TypeScript), als onderdeel van een scrumteam van 7 developers, met dagelijks contact met UX, backendteams, andere afdelingen en product leads.",
        "In staat om zelfstandig features uit te werken van Figma-ontwerp tot gerealiseerde frontend.",
      ],
    },
    {
      role: "Winkelmedewerker",
      org: "Albert Heijn",
      period: "2019 – nu",
      bullets: [
        "Meer dan 7 jaar ervaring in klantcontact als servicemedewerker in een drukke supermarkt: betrouwbaarheid, teamwork en geduld.",
      ],
    },
  ],
  projectsHeader: "Projecten",
  projects: [
    {
      title: "Hobbiton",
      meta: "Schoolproject · 2025/2026",
      description:
        "Een social media website waar gebruikers hun hobby’s delen, gebouwd in een groep van 5 met zo’n 15 microservices in verschillende talen. Mijn verantwoordelijkheid: een Notification Service met websockets (Go) en een Profile Connections Service (Java).",
      tags: ["Java", "Go", "Docker", "PostgreSQL"],
    },
    {
      title: "Kobo Dynamisch Sleep Screen",
      meta: "Persoonlijk project · aug 2026",
      description:
        "Een Go-applicatie die de lokale Nickel-database van een e-reader uitleest, statistieken rendert op een achtergrondfoto en die automatisch als sleep screen selecteert. Geschreven met behulp van Claude Code.",
      tags: ["Go", "SQLite"],
      href: PROJECT_LINKS.KOBO,
      linkLabel: "Bekijk op GitHub",
    },
    {
      title: "L.S.K.V. Fortius website",
      meta: "WordPress · juni 2026",
      description:
        "De website gebouwd voor de powerliftingvereniging waar ik lid van ben, vanaf een ontwerp van een medestudent, om nieuwe leden aan te trekken tijdens de El Cid van Leiden. SEO geconfigureerd via Google Search Console.",
      tags: ["WordPress", "Figma", "SEO"],
      href: PROJECT_LINKS.FORTIUS,
      linkLabel: "Bezoek website",
    },
  ],
  skillsHeader: "Skills",
  skills: [
    { label: "Frontend", items: skillItems.frontend },
    { label: "Backend", items: [skillItems.backend[0], "Go (basis)"] },
    { label: "Infrastructuur", items: ["Docker (basis)"] },
    { label: "Data & observability", items: ["PostgreSQL", "Grafana (basis)"] },
    { label: "Tooling", items: skillItems.tooling },
    { label: "AI", items: [...skillItems.ai, "andere AI-technologieën"] },
    {
      label: "Talen",
      items: ["Nederlands (moedertaal)", "Engels (tweede moedertaal)"],
    },
  ],
  educationHeader: "Opleiding",
  education: {
    degree: "HBO Informatica",
    school: "Hogeschool Leiden",
    schoolHref: ORG_LINKS.HOGESCHOOL_LEIDEN,
    period: "2023 – 2027",
    description:
      "Sinds 2023 volg ik de opleiding Informatica. In 2027 studeer ik af, na afloop van een afstudeerproject.",
  },
  beyondHeader: "Naast code",
  beyond: [
    {
      title: "Powerlifting",
      description: "Vier keer per week trainen en wedstrijden via de KNKF.",
    },
    {
      title: "Tabletop games",
      description:
        "Een Dungeons & Dragons-campagne met vrienden, lopend sinds 2020. Sinds een paar maanden speel ik ook Call of Cthulhu.",
    },
    {
      title: "Gamen",
      description:
        "Van competitief Rocket League tot verhalende games zoals Baldur’s Gate 3. De laatste tijd speel ik graag REPO met vrienden.",
    },
  ],
  contactHeader: "Laten we praten",
  contactText:
    "Op zoek naar een frontend developer, of gewoon hallo zeggen? Stuur me een bericht.",
  footer: "Gebouwd met Next.js en Tailwind CSS.",
};
