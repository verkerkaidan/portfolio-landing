import type { Content, Language } from "../constants/content";

interface NavbarProps {
  nav: Content["nav"];
  lang: Language;
  setLang: (lang: Language) => void;
}

const LANGS: { code: Language; label: string; aria: string }[] = [
  { code: "en", label: "EN", aria: "Switch to English" },
  { code: "nl", label: "NL", aria: "Wissel naar Nederlands" },
];

export default function Navbar({ nav, lang, setLang }: NavbarProps) {
  const links = [
    { href: "#experience", label: nav.experience },
    { href: "#projects", label: nav.projects },
    { href: "#skills", label: nav.skills },
    { href: "#education", label: nav.education },
    { href: "#contact", label: nav.contact },
  ];

  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/80 backdrop-blur">
      <nav className="mx-auto flex h-14 max-w-4xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="font-mono text-sm font-semibold">
          av<span className="text-accent">.</span>
        </a>
        <div className="flex items-center gap-5">
          <ul className="hidden gap-5 text-sm text-muted sm:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex rounded-md border border-border p-0.5 font-mono text-xs">
            {LANGS.map(({ code, label, aria }) => (
              <button
                key={code}
                type="button"
                aria-label={aria}
                aria-pressed={lang === code}
                onClick={() => setLang(code)}
                className={`rounded px-2 py-1 transition-colors ${
                  lang === code
                    ? "bg-foreground text-background"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
