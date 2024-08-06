import type { ExternalVuetifyOptions } from 'vuetify-nuxt-module'

export default {
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
  },
} satisfies ExternalVuetifyOptions