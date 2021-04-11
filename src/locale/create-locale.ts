import { LocaleObject } from "./type";
import { compress, Maybe } from "~/utils";

export const createLocale = <T extends LocaleObject>(locale: T) => {
  const compressed: LocaleObject = compress(locale);

  const translate = (key: string): Maybe<string> => {
    const value = compressed[key];
    return typeof value === "string" ? value : null;
  };

  return {
    raw: locale,
    translate,
  };
};
