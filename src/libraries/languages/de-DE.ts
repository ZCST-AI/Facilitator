import { en_US } from "./en-US";

export const de_DE: typeof en_US = {
    title: "Facilitator",
    hello: "Hallo",
    wizard: {
        welcome: {
            title: "Hallo!",
            description: "Willkommen bei Facilitator",
        },
        profile: {
            title: "Profil",
            name: "Name",
            name_placeholder: "Ihr Name",
            lang: "Sprache",
            lang_placeholder: "Ihre Muttersprache",
            description: "Erstellen Sie Ihr Profil\nDies hilft uns, Sie besser zu verstehen",
        },
        aiEndpoint: {
            title: "AI Endpoint",
            description: "Konfigurieren Sie Ihren AI Endpoint",
            apiKey: "API-Schlüssel",
            apiKey_placeholder: "Ihr API-Schlüssel",
            apiUrl: "API-Basis-URL",
            apiUrl_placeholder: "Ihre API-Basis-URL",
        },
        aiModel: {
            title: "AI-Modell",
            description: "Konfigurieren Sie Ihr AI-Modell",
            model: "Modell",
            model_placeholder: "Ihr AI-Modell",
        },
        done: {
            title: "Fertig",
            description: "Jetzt können Sie Facilitator verwenden",
        },
    },
};
