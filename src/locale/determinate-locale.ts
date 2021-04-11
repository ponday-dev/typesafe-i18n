import { detectLanguage, LanguageDetector } from "~/language-detector";
import { isEmpty, Maybe } from "~/utils";
import { Locale } from "./type";

export const determinateLocale = <T extends Record<string, Locale<any>>>(
  locales: T,
  fallbackLocale: keyof T,
  locale: Maybe<string | LanguageDetector | LanguageDetector[]>
): keyof T => {
  const detectResult = detectLocale(locale);

  if (isEmpty(detectResult)) {
    return fallbackLocale;
  }

  if (!isValidLanguage(locales, detectResult)) {
    console.warn(`Language ${detectResult} is not valid. It uses ${fallbackLocale} instead.`);
    return fallbackLocale;
  }

  return detectResult;
};

const detectLocale = (locale?: Maybe<string | LanguageDetector | LanguageDetector[]>): Maybe<string> => {
  if (isEmpty(locale)) {
    return null;
  }

  if (typeof locale === "string") {
    return locale;
  }

  return detectLanguage(locale);
};

const isValidLanguage = <T extends Record<string, any>>(locales: T, language: unknown): language is keyof T => {
  if (typeof language !== "string") {
    return false;
  }
  return Object.keys(locales).includes(language);
};
