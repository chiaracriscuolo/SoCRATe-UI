export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'socrate',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Heebo:300,700'
    },
    {
      rel: 'stylesheet',
      href:
        'https://cdn.jsdelivr.net/npm/fomantic-ui@2.8.7/dist/semantic.min.css'
    }
  ],
  script: [
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js'
    },
    {
      src: 'https://code.jquery.com/jquery-migrate-3.0.0.js'
    },
    {
      src: 'https://cdn.jsdelivr.net/npm/jquery@3.3.1/dist/jquery.min.js'
    },
    {
      src:
        'https://cdn.jsdelivr.net/npm/fomantic-ui@2.8.7/dist/semantic.min.js'
    }
  ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
  ],

  axios: {
    // proxy: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    standalone: true,
  },
}
