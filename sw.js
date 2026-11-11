self.addEventListener('install', (e) => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('push', (e) => {
  e.waitUntil(self.registration.showNotification('Hannah Atelier Office', {
    body: 'Có tin mới từ agent 💬',
    icon: 'icon-192.png',
    badge: 'icon-192.png',
    tag: 'atelier-msg',
    renotify: true
  }));
});
self.addEventListener('notificationclick', (e) => {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({ type: 'window' }).then((cs) => {
    if (cs.length) return cs[0].focus();
    return self.clients.openWindow(self.registration.scope);
  }));
});
