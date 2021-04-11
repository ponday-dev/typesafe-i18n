import { DigValueType, Keys } from "./type";

export type CompressedObject<T> = {
  [K in Keys<T>]: DigValueType<T, K>;
};

export const compress = <T extends Record<string, any>>(obj: T): CompressedObject<T> => {
  return _compress(obj) as any;
};

const _compress = (obj: object, prefix?: string): object => {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    const strKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === "string") {
      return {
        ...acc,
        [strKey]: value,
      };
    }

    const v = _compress(value, strKey);
    return { ...acc, ...v };
  }, {});
};
