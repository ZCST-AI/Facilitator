import { WizardBase } from "./WizardBase";
import { i } from "../../../libraries/signals/i18n";
import { TextInput } from "@carbon/react";
import { config } from "../../../libraries/config";
import { commit } from "../../../libraries/utils/commit";
import { Signal } from "@preact/signals";

export const Profile = ({ validity }: { validity: Signal<boolean> }) => {
    return (
        <WizardBase
            title={i.value.wizard.profile.title}
            description={i.value.wizard.profile.description}
            validity={validity}
        >
            <TextInput
                id="name"
                required
                labelText={i.value.wizard.profile.name}
                placeholder={i.value.wizard.profile.name_placeholder}
                value={config.value.self.name}
                onChange={(e) => (config.value = commit(config.value, { self: { name: e.currentTarget.value } }))}
            />
            <TextInput
                id="lang"
                required
                labelText={i.value.wizard.profile.lang}
                placeholder={i.value.wizard.profile.lang_placeholder}
                value={config.value.self.language}
                onChange={(e) => (config.value = commit(config.value, { self: { language: e.currentTarget.value } }))}
            />
        </WizardBase>
    );
};
