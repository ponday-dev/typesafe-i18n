import { LanguageDetector } from "../detector";

export const queryString = (key: string = "lang"): LanguageDetector => {
  return () => {
    if (globalThis.window?.location) {
      const queryString = window.location.search.slice(1);

      return queryString
        .split("&")
        .find((token) => token.startsWith(`${key}=`))
        ?.split("=")?.[1];
    }

    return null;
  };
};
