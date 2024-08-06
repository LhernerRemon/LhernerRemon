// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  telemetry: false,
  compatibilityDate: '2024-04-03',
  css: ['assets/main.scss'],
  modules: ['vuetify-nuxt-module', '@nuxt/eslint', '@nuxtjs/google-fonts', '@nuxt/content'],
  app: {
    head: {
      title: 'Blog',
      titleTemplate: '%s',
      meta: [
        { charset: 'utf-8' }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  vuetify: {
    moduleOptions: { styles: 'sass' },
    vuetifyOptions: './vuetify.config.ts',
  },

  googleFonts: {
    display: 'swap',
    download: true,
    families: {
      Poppins: true
    }
  },
  content: {
    defaultLocale: 'es',
    highlight: {
      preload: ['python'],
      theme: 'monokai'
    }
  }
})
