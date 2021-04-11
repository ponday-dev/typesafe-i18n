import { LanguageDetector } from "./detectors";
import { Maybe } from "../utils";

export const detectLanguage = (detectors: LanguageDetector | LanguageDetector[]): Maybe<string> => {
  if (Array.isArray(detectors)) {
    return detectors.map((detector) => detector()).find((result) => result !== null && result !== undefined);
  }
  return detectors();
};
