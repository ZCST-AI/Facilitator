export const exec = <F extends () => any>(fn: F): ReturnType<F> => fn();
