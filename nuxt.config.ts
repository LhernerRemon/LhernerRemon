// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
              backgroundCodeLang: '#eceded',
              primary: '#00dc82'
            }
          },
          dark: {
            dark: true,
            colors: {
              background: '#212121',
              backgroundCodeLang: '#3a3a3a',
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
      theme: 'github-dark'
    }
  }
})
