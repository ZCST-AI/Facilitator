import Bowser from "bowser";

const parsed = Bowser.parse(globalThis.navigator.userAgent);

export type Browser = {
    platform: "desktop" | "mobile";
};

export const browser: Browser = {
    platform: parsed.platform.type === "mobile" ? "mobile" : "desktop",
};
