// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/fonts", "@nuxtjs/i18n", "@nuxt/icon"],
  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },
  i18n: {
    locales: [
      { code: "en", language: "en-US", name: "English" },
      { code: "ja", language: "ja-JP", name: "日本語" },
    ],
    defaultLocale: "en",
    vueI18n: "./i18n.config.ts",
  },
});