import { Locale } from "../locale";
import { Keys } from "../utils";
import { InferLocaleObjectType, II18n } from "./type";

export class I18n<T extends Record<string, Locale<any>>, K extends keyof T> implements II18n<T, K> {
  private _currentLocale: keyof T;
  private localeInstance: Locale<any>;
  readonly fallbackLocale: K;
  private fallbackLocaleInstance: T[K];

  constructor(readonly locales: T, fallbackLocale: K, currentLocale: keyof T) {
    this._currentLocale = currentLocale ?? fallbackLocale;
    this.fallbackLocale = fallbackLocale;
    this.localeInstance = locales[fallbackLocale];
    this.fallbackLocaleInstance = locales[fallbackLocale];
  }

  changeLocale(locale: keyof T) {
    this._currentLocale = locale;
    this.localeInstance = this.locales[locale];
    return this;
  }

  get currentLocale() {
    return this._currentLocale;
  }

  get languages() {
    return Object.keys(this.locales);
  }

  get(key: Keys<InferLocaleObjectType<T[K]>>) {
    return this.localeInstance.translate(key) ?? this.fallbackLocaleInstance.translate(key) ?? "";
  }

  unsafe(key: string, fallback?: string) {
    return this.localeInstance.translate(key) ?? fallback;
  }
}
