import { WizardBase } from "./WizardBase";
import { i } from "../../../libraries/signals/i18n";
import { TextInput } from "@carbon/react";
import { config } from "../../../libraries/config";
import { commit } from "../../../libraries/utils/commit";
import { Signal } from "@preact/signals";

export const AIModel = ({ validity }: { validity: Signal<boolean> }) => {
    return (
        <WizardBase
            title={i.value.wizard.aiModel.title}
            description={i.value.wizard.aiModel.description}
            validity={validity}
        >
            <TextInput
                id="model"
                required
                labelText={i.value.wizard.aiModel.model}
                placeholder={i.value.wizard.aiModel.model_placeholder}
                value={config.value.ai.models.document_describing}
                onChange={(e) =>
                    (config.value = commit(config.value, {
                        ai: { models: { document_describing: e.currentTarget.value } },
                    }))
                }
            />
        </WizardBase>
    );
};
