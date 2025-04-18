import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";

export const useTime = (interval = 1000) => {
    const time = useSignal(Date.now());

    useEffect(() => {
        const id = setInterval(() => {
            time.value = Date.now();
        }, interval);

        return () => clearInterval(id);
    }, []);

    return time;
};
