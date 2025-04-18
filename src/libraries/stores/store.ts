import { effect } from "@preact/signals";
import localforage from "localforage";
import { Signal, signal as new_signal } from "@preact/signals";

const storehouse = new Map<string, Signal<any>>();

export const store = <T>(id: string, init: T): Signal<T> => {
    if (storehouse.has(id)) return storehouse.get(id) as Signal<T>;

    const signal = new_signal(init);
    storehouse.set(id, signal);

    localforage.getItem<T>(id).then((value) => {
        signal.value = value ?? init;

        effect(() => {
            localforage.setItem(id, signal.value);
        });
    });

    return signal;
};
