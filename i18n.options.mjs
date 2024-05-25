
// @ts-nocheck


export const localeCodes =  [
  "en",
  "tr"
]

export const localeLoaders = {
  "en": [{ key: "../locales/en-US.json", load: () => import("../locales/en-US.json" /* webpackChunkName: "locale_D_58_D_58_OneDrive_32__32VietNam_32National_32University_32__32HCM_32INTERNATIONAL_32UNIVERSITY_Github_32project_toplink_locales_en_US_json" */), cache: true }],
  "tr": [{ key: "../locales/tr-TR.json", load: () => import("../locales/tr-TR.json" /* webpackChunkName: "locale_D_58_D_58_OneDrive_32__32VietNam_32National_32University_32__32HCM_32INTERNATIONAL_32UNIVERSITY_Github_32project_toplink_locales_tr_TR_json" */), cache: true }]
}

export const vueI18nConfigs = [
  
]

export const nuxtI18nOptions = {
  "experimental": {
    "localeDetector": "",
    "switchLocalePathLinkSSR": false,
    "autoImportTranslationFunctions": false
  },
  "bundle": {
    "compositionOnly": true,
    "runtimeOnly": false,
    "fullInstall": true,
    "dropMessageCompiler": false
  },
  "compilation": {
    "jit": true,
    "strictMessage": true,
    "escapeHtml": false
  },
  "customBlocks": {
    "defaultSFCLang": "json",
    "globalSFCScope": false
  },
  "vueI18n": "",
  "locales": [
    {
      "code": "en",
      "files": [
        "locales/en-US.json"
      ]
    },
    {
      "code": "tr",
      "files": [
        "locales/tr-TR.json"
      ]
    }
  ],
  "defaultLocale": "en",
  "defaultDirection": "ltr",
  "routesNameSeparator": "___",
  "trailingSlash": false,
  "defaultLocaleRouteNameSuffix": "default",
  "strategy": "prefix_except_default",
  "lazy": true,
  "langDir": "locales/",
  "detectBrowserLanguage": {
    "alwaysRedirect": false,
    "cookieCrossOrigin": false,
    "cookieDomain": null,
    "cookieKey": "i18n_redirected",
    "cookieSecure": false,
    "fallbackLocale": "",
    "redirectOn": "root",
    "useCookie": true
  },
  "differentDomains": false,
  "baseUrl": "",
  "dynamicRouteParams": false,
  "customRoutes": "page",
  "pages": {},
  "skipSettingLocaleOnNavigate": false,
  "types": "composition",
  "debug": false,
  "parallelPlugin": false,
  "i18nModules": []
}

export const normalizedLocales = [
  {
    "code": "en",
    "files": [
      {
        "path": "locales/en-US.json"
      }
    ]
  },
  {
    "code": "tr",
    "files": [
      {
        "path": "locales/tr-TR.json"
      }
    ]
  }
]

export const NUXT_I18N_MODULE_ID = "@nuxtjs/i18n"
export const parallelPlugin = false
export const isSSG = false

export const DEFAULT_DYNAMIC_PARAMS_KEY = "nuxtI18n"
export const DEFAULT_COOKIE_KEY = "i18n_redirected"
export const SWITCH_LOCALE_PATH_LINK_IDENTIFIER = "nuxt-i18n-slp"
