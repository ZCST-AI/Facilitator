import OpenAI from "openai";

export const get_models = async (client: OpenAI) => {
    const data: OpenAI.Models.Model[] = [];

    let models = await client.models.list();

    data.push(...models.data);
    while (models.hasNextPage()) {
        models = await models.getNextPage();
        data.push(...models.data);
    }

    return data;
};
