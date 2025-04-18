import { Button } from "@carbon/react";
import { useComputed, useSignal, useSignalEffect } from "@preact/signals";
import { ArrowLeft, ArrowRight } from "@carbon/react/icons";
import { steps } from "./steps";
import { store } from "../../libraries/stores/store";

const step = store("wizard.step", 0);

export const Wizard = () => {
    const is_first = useComputed(() => step.value === 0);
    const is_last = useComputed(() => step.value === steps.length - 1);
    const validity = useSignal<boolean>(false);
    const step_component = useComputed(() => steps[step.value]?.({ validity }));

    useSignalEffect(() => {
        if (step.value < 0) {
            step.value = 0;
        } else if (step.value >= steps.length) {
            step.value = steps.length - 1;
        }
    });
    return (
        <div class="w-128 max-w-full! aspect-[4/3] h-auto! max-h-full! p-4! flex flex-col justify-between gap-2">
            {step_component}
            <div class="flex flex-row justify-end-safe items-center pt-8!">
                {!is_first.value && (
                    <Button
                        onClick={() => step.value--}
                        kind="secondary"
                        disabled={is_first.value}
                        renderIcon={ArrowLeft}
                        iconDescription="Previous"
                        hasIconOnly
                    />
                )}
                {
                    <Button
                        onClick={() => {
                            if (is_last.value) {
                                step.value = 0;
                            } else {
                                step.value++;
                            }
                        }}
                        kind="primary"
                        disabled={!validity.value}
                        renderIcon={ArrowRight}
                        iconDescription="Next"
                        hasIconOnly
                    />
                }
            </div>
        </div>
    );
};
