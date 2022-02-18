importScripts('/i-home/_nuxt/workbox.6041bd81.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/i-home/_nuxt/0347ad8.js",
    "revision": "76b4301c2b6391f33b6f77a6ee2de20c"
  },
  {
    "url": "/i-home/_nuxt/2952490.js",
    "revision": "3b3f9c322eeac132a27b1eedebc8ba52"
  },
  {
    "url": "/i-home/_nuxt/5a4fbb4.js",
    "revision": "4fb04fb98f9c0e60fb0ce1de78cf1934"
  },
  {
    "url": "/i-home/_nuxt/9551221.js",
    "revision": "551c71ab0885f45c80bb627b365f3684"
  },
  {
    "url": "/i-home/_nuxt/a56fac2.js",
    "revision": "749d6869e2b2b2044d9a45e1d69bfd44"
  },
  {
    "url": "/i-home/_nuxt/b4c9892.js",
    "revision": "54ed253953995aab0a7f03c2e4c275eb"
  },
  {
    "url": "/i-home/_nuxt/e8dc8f6.js",
    "revision": "d38a32be31c27d911ae386c2af98472a"
  },
  {
    "url": "/i-home/_nuxt/feb5d4b.js",
    "revision": "a6ee86ec0175501737fdb5a4410d504a"
  }
], {
  "cacheId": "i-app",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/i-home/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/i-home/.*'), workbox.strategies.networkFirst({}), 'GET')
