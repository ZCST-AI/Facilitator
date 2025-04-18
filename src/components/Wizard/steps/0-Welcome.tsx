import { Signal } from "@preact/signals";
import { i } from "../../../libraries/signals/i18n";
import { WizardBase } from "./WizardBase";

export const Welcome = ({ validity }: { validity: Signal<boolean> }) => {
    return (
        <WizardBase
            title={i.value.wizard.welcome.title}
            description={i.value.wizard.welcome.description}
            validity={validity}
        ></WizardBase>
    );
};
