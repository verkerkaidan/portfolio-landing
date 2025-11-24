import type { Language } from "../../constants/language.types";
import LanguageSelect from "../LanguageSelect/LanguageSelect";

export default function Header({
  title,
  lang,
  setLang,
}: {
  title: string;
  lang: Language;
  setLang: (lang: Language) => void;
}) {
  return (
    <div className="w-full flex items-center justify-between mb-12">
      <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">
        {title}
      </h1>
      <LanguageSelect lang={lang} setLang={setLang} />
    </div>
  );
}
