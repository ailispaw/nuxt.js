const config = {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Augmented Idea Studio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Augmented Idea Studio' }
    ]
  },

  pwa: {
    icon: true,
    meta: {
      name: 'Augmented Idea Studio'
    },
    manifest: {
      name: 'Augmented Idea Studio',
      short_name: 'AiStudio'
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // https://www.contentful.com/developers/docs/javascript/tutorials/integrate-contentful-with-vue-and-nuxt/
    { src: '~/plugins/contentful.js' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    // https://image.nuxtjs.org/
    '@nuxt/image',
    // https://pwa.nuxtjs.org/
    '@nuxtjs/pwa'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://i18n.nuxtjs.org/
    '@nuxtjs/i18n',
  ],

  // Environment variables: https://nuxtjs.org/docs/configuration-glossary/configuration-env
  env: {
    CTF_SPACE_ID:        process.env.CTF_SPACE_ID,
    CTF_ACCESS_TOKEN:    process.env.CTF_ACCESS_TOKEN,
    CTF_CONTENT_TYPE_ID: process.env.CTF_CONTENT_TYPE_ID
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: [ '~/assets/css/variables.scss' ],
    treeShake: true
  },

  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json', name: 'English' },
      { code: 'ja', iso: 'ja-JP', file: 'ja.json', name: '日本語' }
    ],
    defaultLocale: 'en',
    langDir: '~/locales/',
    lazy: true,
    vueI18n: {
      fallbackLocale: 'en',
      formatFallbackMessages: true
    }
  }
}

module.exports = config
