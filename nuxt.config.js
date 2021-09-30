const config = {
  target: 'static',

  plugins: [
    { src: '~/plugins/contentful.js' }
  ],

  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  env: {
    CTF_SPACE_ID:        process.env.CTF_SPACE_ID,
    CTF_ACCESS_TOKEN:    process.env.CTF_ACCESS_TOKEN,
    CTF_CONTENT_TYPE_ID: process.env.CTF_CONTENT_TYPE_ID
  }
}

module.exports = config