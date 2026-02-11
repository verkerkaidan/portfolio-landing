import type { Language } from "../constants/language.types";

export interface HeaderProps {
  title: string;
  lang: Language;
  setLang: (lang: Language) => void;
}

export interface LanguageSelectProps {
  lang: Language;
  setLang: (lang: Language) => void;
}
