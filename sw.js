importScripts('/i-home/_nuxt/workbox.6041bd81.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/i-home/_nuxt/1d5a578.js",
    "revision": "4c89a29be423bbb7ec3f6dcbfb8545aa"
  },
  {
    "url": "/i-home/_nuxt/436e208.js",
    "revision": "aaefd9ffcb769ed33478f29fbfed5ac4"
  },
  {
    "url": "/i-home/_nuxt/5712517.js",
    "revision": "9239f00df39d753ab740d6cf616ce6be"
  },
  {
    "url": "/i-home/_nuxt/6a3a189.js",
    "revision": "d949f62662a765e94353ab191c215954"
  },
  {
    "url": "/i-home/_nuxt/a7179d9.js",
    "revision": "3ae33d97c566554aff039e80b759b394"
  },
  {
    "url": "/i-home/_nuxt/ce98408.js",
    "revision": "c84352788db80165507732600ba3cca5"
  },
  {
    "url": "/i-home/_nuxt/ec9a8a0.js",
    "revision": "0ac094a9e9bc60a864638ed672d3c433"
  },
  {
    "url": "/i-home/_nuxt/fc4e57d.js",
    "revision": "bd54a93cc3960c5e41b05e49916148c5"
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
