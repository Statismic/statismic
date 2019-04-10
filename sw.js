importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/008513f7966972c170f9.js",
    "revision": "b86e1d86e8003bcd3458d146c12fb44f"
  },
  {
    "url": "/_nuxt/0fa10a1476bf825d1bd9.js",
    "revision": "81a4714869d2b2eda0ac9f0c507c24f6"
  },
  {
    "url": "/_nuxt/12669a12de0bbcbe99b4.js",
    "revision": "c20d39a653fb3881150be94c01f02113"
  },
  {
    "url": "/_nuxt/1d9273ed9c18db8976e7.js",
    "revision": "b4ba8d3d5fe5894fd381bf526810cb32"
  },
  {
    "url": "/_nuxt/1df146712e29020363e3.js",
    "revision": "91f2fd22161d1087e98d0924d975068e"
  },
  {
    "url": "/_nuxt/3f33deeddf9fdde82b43.js",
    "revision": "4f3bc2bdbfb7e86db36a2ac97588fa9e"
  },
  {
    "url": "/_nuxt/59296cefd24df0e45be5.js",
    "revision": "85e0831f546cb2eacb0d27958956a694"
  },
  {
    "url": "/_nuxt/61285c600d10831b0c8e.js",
    "revision": "077ccbf526e04142bcb2179394472b79"
  },
  {
    "url": "/_nuxt/63b3d1a7bde224b35680.js",
    "revision": "aa0f4ae37a11108dcd40a2f3d755d699"
  },
  {
    "url": "/_nuxt/86b411337fd029b28d6c.js",
    "revision": "bc0e468f8c80bca99eeeb8baea8fa584"
  },
  {
    "url": "/_nuxt/b06639cb33679f13e979.js",
    "revision": "192c7405c6bf3be2f49c681349d54e3f"
  },
  {
    "url": "/_nuxt/fc3a43a3dd463169294c.js",
    "revision": "1fc3e721436268cd6a44d5e797b865ed"
  }
], {
  "cacheId": "ui",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
