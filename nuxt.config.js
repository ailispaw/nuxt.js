const config = {
  target: 'static',

  head: {
    title: 'Augmented Idea Studio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ]
  },

  plugins: [
    { src: '~/plugins/contentful.js' }
  ],

  env: {
    CTF_SPACE_ID:        process.env.CTF_SPACE_ID,
    CTF_ACCESS_TOKEN:    process.env.CTF_ACCESS_TOKEN,
    CTF_CONTENT_TYPE_ID: process.env.CTF_CONTENT_TYPE_ID
  }
}

module.exports = config