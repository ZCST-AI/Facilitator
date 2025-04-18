import { zh_CN } from "./libraries/languages/zh-CN";
import { en_US } from "./libraries/languages/en-US";
import { register_i18n_resource } from "./libraries/signals/i18n";

(async () => {
    register_i18n_resource(["en", "US"], en_US);
    register_i18n_resource(["zh", "CN"], zh_CN);
})();
