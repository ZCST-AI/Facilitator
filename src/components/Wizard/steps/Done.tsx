import { Signal } from "@preact/signals";
import { i } from "../../../libraries/signals/i18n";
import { WizardBase } from "./WizardBase";

export const Done = ({ validity }: { validity: Signal<boolean> }) => {
    return (
        <WizardBase
            title={i.value.wizard.done.title}
            description={i.value.wizard.done.description}
            validity={validity}
        ></WizardBase>
    );
};
