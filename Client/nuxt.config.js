
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'normalize.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src:'~/plugins/common.js' },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/toast',
    'nuxt-fontawesome'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  // 追記
  filenames: {
    app: ({ isDev }) => isDev ? '[name].[hash].js' : '[chunkhash].js',
    chunk: ({ isDev }) => isDev ? '[name].[hash].js' : '[chunkhash].js'
  },
  //ここまで
  toast: {
    position: 'top-right', //右上に表示させます
    duration: 2000, //２秒間表示させます
    singleton: true //２個目のメッセージが出た時に2秒経ってなくても１つ目を消します
  },
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      }
    ]
  },
}
