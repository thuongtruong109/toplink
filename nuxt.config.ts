import { BASE_URL } from './path'

export default defineNuxtConfig({
  app: {
    baseURL: BASE_URL,
    buildAssetsDir: 'assets',
  },
  srcDir: './',
  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@huntersofbook/naive-ui-nuxt',
  ],
  build: {
    transpile: ['@headlessui/vue'],
  },
  
  typescript: {
    tsConfig: {
      compilerOptions: {
        strict: true,
        types: ['@pinia/nuxt', './type.d.ts']
      },
    },
  },

  tailwindcss: {
    configPath: './tailwind.config.js',
  },

  vite: {
    logLevel: 'info',
  },

  postcss: {
    plugins: {
      'postcss-nested': {},
      'postcss-import': {},
      'tailwindcss/nesting': {},
      'tailwindcss': {},
    },
  },
})
