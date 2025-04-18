import { reduce } from "fp-ts/lib/Array";
import { pipe } from "fp-ts/lib/function";

export type Language = [Language: string, Regions: string[]];
export type Languages = Language[];

export const languages: Languages = pipe(
    navigator.languages as string[],
    reduce<string, Languages>([], (acc, str) => {
        const [language, region] = str.split("-");

        if (!language) return acc;

        const existing_lang_index = acc.findIndex(([lang]) => lang === language);

        if (existing_lang_index !== -1) {
            const existing_lang = acc[existing_lang_index];
            if (existing_lang) {
                const updated_acc = [...acc];
                updated_acc[existing_lang_index] = [
                    language,
                    region ? [...existing_lang[1], region] : existing_lang[1],
                ];
                return updated_acc;
            } else {
                return acc;
            }
        } else {
            return [...acc, [language, region ? [region] : []]];
        }
    }),
);
