import { LanguageDetector } from "../detector";

export const intl: LanguageDetector = () => {
  if (globalThis.Intl) {
    return Intl.NumberFormat().resolvedOptions().locale;
  }
  return null;
};
