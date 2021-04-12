export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'en-zo | front-end developer and ui designer',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'og:image', property: 'og:image', content: 'https://en-zo.dev/share.png' },
      { hid: 'og:type', property: 'og:type', content: 'product' },
      { hid: 'og:title', property: 'og:title', content: 'en-zo | welcome to my portfolio' },
      { hid: 'og:description', property: 'og:description', content: 'Hi ! I\'m Enzo ! 👋\nIf you would like to know more about my profile or my current projects, please go directly to my website.' },
      { hid: 'twitter:image', name: 'twitter:image', content: 'https://en-zo.dev/share.png' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'en-zo | welcome to my portfolio' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'theme-color', name: 'theme-color', content: '#7289DA'},
      { hid: 'twitter:description', name: 'twitter:description', content: 'Hi ! I\'m Enzo ! 👋\nIf you would like to know more about my profile or my current projects, please go directly to my website.' },
      { hid: 'description', name: 'description', content: 'Hi ! I\'m Enzo ! 👋\nFront-End Developer and UI Designer.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favico.ico' },
      { rel: 'preload', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;600&display=swap' }
    ],
    script: [
      { src: 'js/all.min.js' }
    ]
  },
  server: {
    port: 8080,
    host: '0.0.0.0',
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/styles/app.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/vue-scrollmagic.client.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
