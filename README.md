# typesafe-i18n

It is simple i18n translator scoped with type safety.

Althogh `get` gets the phrase based on the string like other i18n packages, `typesafe-i18n` properly restrict the usable keyword.

## How to use

```typescript
import * as typesafeI18n from "@ponday/typesafe-i18n";

const localeEn = typesafeI18n.createLocale({
  foo: "Foo",
  bar: {
    baz: "BarBaz",
  },
});

const localeJa = typesafeI18n.createLocale({
  foo: "ふー",
});

const i18n = typesafeI18n.create({
  fallbackLocale: "en",
  initialLocale: typesafeI18n.intl(),
  locales: {
    "ja-JP": localeJa,
    "en-US": localeEn,
  },
});

console.log(i18n.get("foo"));
```
