import { en_US } from "./en-US";

export const zh_CN: typeof en_US = {
    title: "中文",
    hello: "您好",
    wizard: {
        welcome: {
            title: "您好",
            description: "欢迎使用 Facilitator",
        },
        profile: {
            title: "档案",
            name: "名字",
            name_placeholder: "您的名字",
            lang: "语言",
            lang_placeholder: "您的母语",
            description: "创建您的档案，\n这可以帮助我们更好地了解您",
        },
        aiEndpoint: {
            title: "AI 终结点",
            description: "配置您的 AI 终结点",
            apiKey: "API 密钥",
            apiKey_placeholder: "您的 API 密钥",
            apiUrl: "API 基础 URL",
            apiUrl_placeholder: "您的 API 基础 URL",
        },
        aiModel: {
            title: "AI 模型",
            description: "配置您的 AI 模型",
            model: "模型",
            model_placeholder: "您的 AI 模型",
        },
        done: {
            title: "完成",
            description: "现在您可以开始使用 Facilitator 了",
        },
    },
};
