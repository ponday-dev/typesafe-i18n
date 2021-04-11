export type Maybe<T> = T | null | undefined;

export type Keys<T> = keyof T extends infer K
  ? K extends keyof T
    ? K extends string
      ? T[K] extends string
        ? K
        : `${K}.${Keys<T[K]>}`
      : never
    : never
  : never;

export type DigValueType<T, K extends string> = K extends `${infer H}.${infer R}`
  ? H extends keyof T
    ? DigValueType<T[H], R>
    : never
  : K extends keyof T
  ? T[K]
  : never;
