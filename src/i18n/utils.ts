import { defaultLang, translations, type Lang } from "./ui";

export type TranslationKey = keyof (typeof translations)[typeof defaultLang];

export function useTranslations(lang: Lang) {
  return function t(key: TranslationKey): string {
    return translations[lang][key] ?? translations[defaultLang][key] ?? key;
  };
}

export function getLocalePath(lang: Lang): string {
  return lang === defaultLang ? "/" : `/${lang}/`;
}
