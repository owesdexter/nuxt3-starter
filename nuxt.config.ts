// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devServer: {
    port: 8000
  },
  devtools: { enabled: true },
  css: ['@/assets/scss/app.scss'],
  security: {
    headers: {
      xFrameOptions: 'SAMEORIGIN',
      contentSecurityPolicy: 'http://localhost:9000/'
    }
  },
  modules: [
    [
      '@nuxtjs/i18n',
      {
        locales: ['tw', 'cn', 'en'],
        defaultLocale: 'tw'
      }
    ]
  ]
});
