import { ComponentChildren } from "preact";
import { GlobalTheme, Theme, usePrefersDarkScheme } from "@carbon/react";
import { useEffect } from "preact/hooks";
export default ({ children }: { children: ComponentChildren }) => {
    const dark = usePrefersDarkScheme();

    return (
        <GlobalTheme theme={dark ? "g100" : "white"}>
            <Theme theme={dark ? "g100" : "white"}>
                <div class="w-dvw h-dvh overflow-hidden flex flex-col items-center justify-center">{children}</div>
            </Theme>
        </GlobalTheme>
    );
};
