import type { LanguageSelectProps } from "../Header/header.types";

export default function LanguageSelect({ lang, setLang }: LanguageSelectProps) {
  return (
    <div className="flex gap-2 bg-white rounded-lg border border-slate-200 p-1 shadow-sm">
      <button
        type="button"
        aria-label="Switch to Dutch"
        className={`px-3 py-2 rounded-md font-semibold transition-all duration-200 text-sm md:text-base ${
          lang === "nl"
            ? "bg-blue-600 text-white shadow-sm"
            : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
        } focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2`}
        onClick={() => setLang("nl")}
      >
        🇳🇱
      </button>
      <button
        type="button"
        aria-label="Switch to English"
        className={`px-3 py-2 rounded-md font-semibold transition-all duration-200 text-sm md:text-base ${
          lang === "en"
            ? "bg-blue-600 text-white shadow-sm"
            : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
        } focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2`}
        onClick={() => setLang("en")}
      >
        🇺🇸
      </button>
    </div>
  );
}
