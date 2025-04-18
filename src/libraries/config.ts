import { store } from "./stores/store";

export const config = store<{
    self: {
        name: string;
        language: string;
    };
    ai: {
        endpoint: {
            base_url: string;
            api_key: string;
        };
        models: {
            change_detecting: string;
            document_describing: string;
            mindmap_generating: string;
            speech_to_text: string;
            text_to_speech: string;
        };
    };
}>("config", {
    self: {
        name: "",
        language: "",
    },
    ai: {
        endpoint: {
            base_url: "",
            api_key: "",
        },
        models: {
            change_detecting: "",
            document_describing: "",
            mindmap_generating: "",
            speech_to_text: "",
            text_to_speech: "",
        },
    },
});
