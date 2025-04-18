import { WizardBase } from "./WizardBase";
import { i } from "../../../libraries/signals/i18n";
import { commit } from "../../../libraries/utils/commit";
import { en_US } from "../../../libraries/languages/en-US";
import { TextInput } from "@carbon/react";
import { config } from "../../../libraries/config";
import { Signal } from "@preact/signals";

export const AIEndpoint = ({ validity }: { validity: Signal<boolean> }) => {
    return (
        <WizardBase
            title={i.value.wizard.aiEndpoint.title}
            description={i.value.wizard.aiEndpoint.description}
            validity={validity}
        >
            <TextInput
                id="apiUrl"
                type="url"
                required
                labelText={i.value.wizard.aiEndpoint.apiUrl}
                placeholder={i.value.wizard.aiEndpoint.apiUrl_placeholder}
                value={config.value.ai.endpoint.base_url}
                onChange={(e) =>
                    (config.value = commit(config.value, {
                        ai: { endpoint: { base_url: e.currentTarget.value } },
                    }))
                }
            />
            <TextInput
                id="apiKey"
                type="password"
                required
                labelText={i.value.wizard.aiEndpoint.apiKey}
                placeholder={i.value.wizard.aiEndpoint.apiKey_placeholder}
                value={config.value.ai.endpoint.api_key}
                onChange={(e) =>
                    (config.value = commit(config.value, {
                        ai: { endpoint: { api_key: e.currentTarget.value } },
                    }))
                }
            />
        </WizardBase>
    );
};
