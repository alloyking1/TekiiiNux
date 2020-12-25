require('dotenv').config()

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s | Tekiii',
    meta: [{
      charset: 'utf-8'
    }, {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    }, {
      hid: 'description',
      name: 'description',
      content: ''
    }],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }],
    script: [{
      "src": "https://cdn.polyfill.io/v2/polyfill.min.js?features=Element.prototype.classList"
    }, {
      "src": "https://cdn.jsdelivr.net/npm/focus-visible@5.0.2/dist/focus-visible.min.js"
    }, {
      "src": "https://cdn.polyfill.io/v2/polyfill.min.js?features=Element.prototype.classList"
    }, {
      "src": "https://cdn.jsdelivr.net/npm/focus-visible@5.0.2/dist/focus-visible.min.js"
    }, {
      "src": "https://cdn.polyfill.io/v2/polyfill.min.js?features=Element.prototype.classList"
    }, {
      "src": "https://cdn.jsdelivr.net/npm/focus-visible@5.0.2/dist/focus-visible.min.js"
    },{ src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js' },
      { src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js' },
      { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js' }]
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/styles/style.css', '~/assets/styles/simplebar.css', '~/assets/styles/custom.css', "vue-essential-slices/src/styles/styles.scss", "vue-essential-slices/src/styles/styles.scss", "vue-essential-slices/src/styles/styles.scss"],
 
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/CustomConfig.js'],
  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,
  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: ['@nuxtjs/dotenv'],
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [// https://go.nuxtjs.dev/bootstrap
   ['@nuxtjs/axios', '@nuxtjs/dotenv', 'bootstrap-vue/nuxt'],
  //  ['@nuxtjs/moment'],
  ],
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ["vue-slicezone", "nuxt-sm", "vue-slicezone", "nuxt-sm", "vue-slicezone", "nuxt-sm"]
  },

};