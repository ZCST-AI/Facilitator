import { pipe } from "fp-ts/lib/function";

type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export const commit = <S extends object, T extends DeepPartial<S>>(source: S, change: T): S => {
    const clone: S = structuredClone(source);

    Object.entries(change).map(([key, value]) => {
        if (typeof value === "object" && value !== null) {
            clone[key as keyof S] = commit(clone[key as keyof S] as any, value as any);
        } else {
            clone[key as keyof S] = value as any;
        }
    });

    return clone;
};
