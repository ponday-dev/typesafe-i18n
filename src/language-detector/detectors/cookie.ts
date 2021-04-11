import { LanguageDetector } from "../detector";

export const cookie = (key: string = "lang"): LanguageDetector => {
  return () => {
    if (document && document.cookie) {
      return document.cookie
        .split(";")
        .map((token) => token.trim())
        .find((token) => token.startsWith(key))
        ?.split("=")?.[1];
    }

    return null;
  };
};
