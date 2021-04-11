import { LanguageDetector } from "../detector";

export const navigator: LanguageDetector = () => {
  if (globalThis.window?.navigator) {
    return window.navigator.language;
  }
  return null;
};
