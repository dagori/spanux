module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'spanux',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js blog with SSR & Grid adaptive gallery' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Indie+Flower'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  router: {base: '/spanux/'},

  env: {baseUrl: (process.env.NODE_ENV === 'production' ? 'https://dagori.github.io/spanux/' : 'http://localhost:3000/spanux')},

  css: [
    '@/assets/css/main.css',
    '@/assets/scss/main.scss'
  ],

  modules: [
    '@nuxtjs/axios',
    ['nuxt-sass-resources-loader', '@/assets/scss/main.scss'],
    ['nuxt-imagemin', {
        optipng: { optimizationLevel: 5 },
        gifsicle: { optimizationLevel: 2 },
        jpegtran: {
          progressive: true,
          quality: 70
        }
      }
    ]
  ]
}
