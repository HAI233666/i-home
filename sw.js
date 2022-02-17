importScripts('/i-home/_nuxt/workbox.6041bd81.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/i-home/_nuxt/7d363dd.js",
    "revision": "8f3d3998dd4428d01752ab584c8ed5fc"
  },
  {
    "url": "/i-home/_nuxt/96c587c.js",
    "revision": "0d090a96613f88ce30bd69cfcdff5774"
  },
  {
    "url": "/i-home/_nuxt/a1120fe.js",
    "revision": "2ceab28de75bedeeaf0eebeb4695b248"
  },
  {
    "url": "/i-home/_nuxt/aac84dc.js",
    "revision": "64b50fcbabd30880325f5fe377137b8d"
  },
  {
    "url": "/i-home/_nuxt/d942e39.js",
    "revision": "6df2d8d0cb0ba02b1e34aa93e130cee2"
  },
  {
    "url": "/i-home/_nuxt/eb175bd.js",
    "revision": "6d1115d2c9492527eecd8af1940a4369"
  },
  {
    "url": "/i-home/_nuxt/faf6275.js",
    "revision": "d444e888f03d58e5a3a4bb1017be8525"
  },
  {
    "url": "/i-home/_nuxt/ff182b9.js",
    "revision": "67c3546e74b176bd715f0503f1f8217e"
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
