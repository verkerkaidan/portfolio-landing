import type { Language } from "../../constants/language.types";

export default function LanguageSelect({
  lang,
  setLang,
}: {
  lang: Language;
  setLang: (lang: Language) => void;
}) {
  return (
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
  );
}
