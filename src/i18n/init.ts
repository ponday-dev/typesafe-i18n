import { LanguageDetector, detectLanguage } from "../language-detector";
import { determinateLocale, Locale } from "../locale";
import { I18n } from "./i18n";

export interface CreateI18nOptions<T, K extends keyof T> {
  locales: T;
  fallbackLocale: K;
  initialLocale?: keyof T | LanguageDetector | LanguageDetector[];
}

export const create = <T extends Record<string, Locale<any>>, K extends keyof T>(options: CreateI18nOptions<T, K>) => {
  const { locales, fallbackLocale } = options;

  const initialLocale = determinateLocale(locales, fallbackLocale, options.initialLocale as any);

  return new I18n<T, K>(locales, fallbackLocale, initialLocale);
};
