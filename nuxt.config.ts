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
    '@nuxtjs/i18n',
    '@huntersofbook/naive-ui-nuxt',
  ],
  build: {
    transpile: ['@headlessui/vue'],
  },

  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en-US.json',
      },
      { code: 'tr', file: 'tr-TR.json' },
    ],
    defaultLocale: 'en',
    lazy: true,
    langDir: 'locales/',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
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
