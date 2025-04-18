import { reduce } from "fp-ts/lib/Array";
import { pipe } from "fp-ts/lib/function";
import * as t from "io-ts";

export type Language = [Language: string, Regions: string[]];
export type Languages = Language[];

export const languages: Languages = pipe(
    navigator.languages as string[],
    reduce<string, Languages>([], (acc, lang) => {
        const [language, region] = lang.split("-");

        const existingLang = acc.find(([lang]) => lang === language);

        return existingLang
            ? [
                  ...acc.filter(([lang]) => lang !== language),
                  [language, region ? [...existingLang[1], region] : existingLang[1]],
              ]
            : [...acc, [language, region ? [region] : []]];
    }),
);
