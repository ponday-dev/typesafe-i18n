import { Locale } from "~/locale";
import { Keys, Maybe } from "~/utils";

export type InferLocaleObjectType<T> = T extends Locale<infer R> ? R : never;

export interface Translator<T, K extends keyof T> {
  (key: Keys<InferLocaleObjectType<T[K]>>): string;
}

export interface II18n<T, K extends keyof T> {
  currentLocale: keyof T;
  fallbackLocale: K;
  changeLocale: (locale: keyof T) => II18n<T, K>;
  get: Translator<T, K>;
  unsafe: (key: string) => Maybe<string>;
  locales: T;
}
