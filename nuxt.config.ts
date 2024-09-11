// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    [
      '@nuxtjs/i18n',
      {
        locales: ['tw', 'cn', 'en'],
        defaultLocale: 'tw',
        langDir: '~assets/locales/'
      }
    ]
  ]
  // i18n: {
  //   // Module Options
  // }
});
