import en from "./lang/en-US";
import jp from "./lang/ja-JP";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  compilation: {
    escapeHtml: true,
  },
  messages: {
    en: en,
    ja: jp,
  },
}));
