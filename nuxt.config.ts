// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: [
    '@invictus.codes/nuxt-vuetify',
    '@nuxt/content'
  ],
  vuetify: {
    vuetifyOptions: {
      theme: {
        defaultTheme: 'dark',
        themes: {
          light: {
            colors: {
              background: '#f6f8fa',
              primary: '#53a1b1',
              secondary: '#68b2a0'
            }
          },
          dark: {
            colors: {
              background: '#0d0f14',
              primary: '#53a1b1',
              secondary: '#68b2a0'
            }
          }
        }
      }
    },
    moduleOptions: {
      treeshaking: true,
      styles: 'sass'
    }
  },
  content: {},
  runtimeConfig: {
    public: { baseUrl: process.env.NUXT_BASE_API_URL || '/' }
  }
})
