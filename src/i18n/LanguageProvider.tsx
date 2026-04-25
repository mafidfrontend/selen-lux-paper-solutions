import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Lang, translations, TranslationKeys } from "./translations";

type LanguageContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: TranslationKeys;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = "selen-lux-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "uz";
    const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
    return stored && ["uz", "ru", "en"].includes(stored) ? stored : "uz";
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang: setLangState, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
