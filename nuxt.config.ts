// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  telemetry: false,
  css: ['assets/main.scss'],
  // enable takeover mode
  typescript: { shim: false },
  modules: [
    '@invictus.codes/nuxt-vuetify',
    '@nuxtjs/google-fonts',
    '@nuxt/content'
  ],
  app: {
    baseURL: process.env.BASE_URL || '/',
    head: {
      title: 'Blog',
      titleTemplate: '%s',
      meta: [
        { charset: 'utf-8' }
      ]
    }
  },
  vuetify: {
    vuetifyOptions: {
      theme: {
        defaultTheme: 'dark',
        themes: {
          light: {
            dark: false,
            colors: {
              background: '#f6f8fa',
              primary: '#00dc82'
            }
          },
          dark: {
            dark: true,
            colors: {
              background: '#212121',
              primary: '#00dc82'
            }
          }
        }
      }
    },
    moduleOptions: {
      treeshaking: true,
      useIconCDN: true,
      styles: 'sass'
    }
  },
  googleFonts: {
    families: {
      Poppins: true
    }
  },
  content: {}
})
