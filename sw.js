// sw.js
self.addEventListener('message', (event) => {
    if (event.data.type === 'SCHEDULE_NOTIFY') {
        const { title, body, delay } = event.data;
        
        // 指定時間後に通知を出す（SWが生きていれば閉じても動く）
        setTimeout(() => {
            self.registration.showNotification(title, {
                body: body,
                icon: 'https://ntv142.github.io/NT-HP/favicon.ico',
                requireInteraction: true
            });
        }, delay);
    }
});

self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    event.waitUntil(clients.openWindow('https://ntv142.github.io/POPv2/'));
});
