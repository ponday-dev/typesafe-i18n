import { Maybe } from "~/utils";

export type LocaleObject = Record<string, unknown>;

export interface Locale<T extends LocaleObject> {
  raw: T;
  translate: (key: string) => Maybe<string>;
}
