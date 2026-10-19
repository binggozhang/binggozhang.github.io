// sw.js —— 测试用：把 test.bing.com 的请求替换为 gips0.baidu.com
const FROM = 'https://test.bing.com'
const TO = 'https://gips0.baidu.com'

self.addEventListener('install', () => self.skipWaiting())
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()))

self.addEventListener('fetch', e => {
  if (e.request.url.startsWith(FROM)) {
    const newUrl = e.request.url.replace(FROM, TO)
    console.log('[sw] 替换:', e.request.url, '->', newUrl)
    e.respondWith(fetch(newUrl))
  }
})
