import type { HeaderProps } from "./header.types";
import LanguageSelect from "../LanguageSelect/LanguageSelect";

export default function Header({ title, lang, setLang }: HeaderProps) {
  return (
    <div className="w-full flex items-center justify-between mb-8 md:mb-12">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-600 to-slate-900 bg-clip-text text-transparent">
        {title}
      </h1>
      <LanguageSelect lang={lang} setLang={setLang} />
    </div>
  );
}
