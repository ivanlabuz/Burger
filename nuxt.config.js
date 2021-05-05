export default {
  target: 'static',

  head: {
    titleTemplate: (title) => (title ? `${title} | Impossible` : 'Impossible'),
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'YOUR GUIDE TO TALKING ABOUT CLIMATE CHANGE',
      },
      { property: 'og:title', content: 'EARTH DAY' },
      {
        property: 'og:description',
        content: 'YOUR GUIDE TO TALKING ABOUT CLIMATE CHANGE',
      },
      {
        property: 'og:image',
        content: 'https://ecunkyls.sirv.com/Images/share-image.png',
      },
      { property: 'twitter:card', content: 'summary_large_image' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&display=swap',
      },
    ],
  },

  dev: process.env.NODE_ENV !== 'production',

  css: ['~assets/global.css'],

  plugins: [
    { src: '~/plugins/text-marquee.js', mode: 'client' }, // only on client side
    { src: '~/plugins/sticky-directive.js', mode: 'client' }, // only on client side
    { src: '~/plugins/touch-event.js', mode: 'client' }, // only on client side
  ],

  // TODO: Refactor: use import inside
  components: true,

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss'],

  modules: [],

  build: {},

  server: {
    port: 8000,
    host: '0.0.0.0',
  },
}
