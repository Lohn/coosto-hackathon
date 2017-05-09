const nodeExternals = require('webpack-node-externals')
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'DogShit',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://afeld.github.io/emoji-css/emoji.css' }
    ]
  },
  /*
  ** Global CSS
  */
  css: ['~assets/css/main.css'],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['vue2-google-maps'],

    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      } else {
        config.externals = [ nodeExternals({
          whitelist: ['vue2-google-maps']
        })]
      }
    }
  },
  /*
  ** Plugins
  */
  plugins: [
    '~plugins/maps'
  ]
}
