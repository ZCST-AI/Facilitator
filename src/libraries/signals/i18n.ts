import { computed, signal, ReadonlySignal } from "@preact/signals";
import { languages } from "../environments/language";
import { low_equal } from "../utils/low-equal";
import { en_US } from "../languages/en-US";

export type I18nLanguage = [Language: string, Region: string];
export type I18nResources = [I18nLanguage, object][];

export const current_language = signal<I18nLanguage>([languages[0]![0]!, languages[0]![1]![0]!]);

const i18n_resources = signal<I18nResources>([]);

export const register_i18n_resource = (language: I18nLanguage, resources: object) => {
    i18n_resources.value = [...i18n_resources.value, [language, resources]];
};

const get_i18n_resource = ([language, region]: I18nLanguage, resources: I18nResources): object | undefined => {
    const exact_match = resources.find(([[l, r]]) => low_equal(l, language) && low_equal(r, region));

    if (exact_match) return exact_match[1];

    const language_match = resources.find(([[l]]) => low_equal(l, language));

    return language_match?.[1] ?? undefined;
};

export const i18n = computed(() => {
    return (
        get_i18n_resource(current_language.value, i18n_resources.value) ||
        get_i18n_resource(["en", "US"], i18n_resources.value) ||
        i18n_resources.value?.[0]?.[1]
    );
});

export const i = i18n as ReadonlySignal<typeof en_US>;
