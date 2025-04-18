import { Form } from "@carbon/react";
import { Signal, useSignalEffect } from "@preact/signals";
import { ComponentChild } from "preact";
import { useRef } from "preact/compat";
import { useEffect } from "preact/hooks";

export const WizardBase = ({
    children,
    title,
    description,
    validity,
}: {
    children?: ComponentChild;
    title: ComponentChild;
    description: ComponentChild;
    validity: Signal<boolean>;
}) => {
    const form = useRef<HTMLFormElement>(null);

    const handler = () => (validity.value = form.current?.checkValidity() ?? false);

    useEffect(() => {
        handler();
        if (form.current) {
            form.current.addEventListener("input", handler);
            return () => {
                form.current?.removeEventListener("input", handler);
            };
        }
    }, [children]);

    return (
        <div class="w-full h-fit overflow-x-hidden overflow-y-auto flex flex-col gap-2 whitespace-pre-wrap">
            <div class="text-left text-4xl! font-bold">{title}</div>
            <div class="text-left text-2xl!">{description}</div>
            <form ref={form} className="contents">
                {children}
            </form>
        </div>
    );
};
