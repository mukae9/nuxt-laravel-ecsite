
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
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
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
    '@nuxtjs/auth'
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
    auth: {
        strategies: {
          local: {
            endpoints: {
              login: {
                url: '/auth/login',
                method: 'post',
                propertyName: 'd-token',
              },
              user: {
                url: '/auth/me',
                method: 'post',
                propertyName: 'data'
              },
              logout: {
                url: '/logout',
                method: 'get'
              },
            },
          }
        }
      },
      /*
       ** Axios module configuration
       ** See https://axios.nuxtjs.org/options
       */
      axios: {
        baseURL: 'http://localhost.test/api',
      },
}
