// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  srcDir: 'src',
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "@nuxtjs/color-mode",
    "@vueuse/nuxt",
  ],
  tailwindcss: {
    config: {
      darkMode: 'class',
      theme: {
        extend: {
          backgroundImage: {
            'gradient-conic':
              'conic-gradient(from var(--conic-position, 45deg), var(--tw-gradient-stops))'
          }
        }
      }
    }
  },
  colorMode: {
    classSuffix: '',
    preference: 'light', 
    fallback: 'light',  
  }
})
