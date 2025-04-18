import OpenAI from "openai";
import Instructor from "@instructor-ai/instructor";

export const openai = (base_url: string, api_key: string) => {
    return new OpenAI({
        apiKey: api_key,
        baseURL: base_url,
        dangerouslyAllowBrowser: true,
    });
};

export const instructor = (base_url: string, api_key: string) => {
    return Instructor({
        client: openai(base_url, api_key),
        mode: "JSON",
    });
};
