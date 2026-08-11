self.addEventListener('install', function(e) {
    e.waitUntil(caches.open('hitroman-v1').then(function(cache) {
        return cache.addAll(['.', 'index.html', 'manifest.json', 'bg_lab.png', 'buddy_head.png', 'buddy_head_hurt.png', 'coin_icon.png', 'weapon_bat.png', 'weapon_sword.png', 'weapon_bita.png', 'weapon_shocker.png', 'weapon_acid.png', 'weapon_shuriken.png', 'weapon_laser_sword.png']);
    }));
});
self.addEventListener('fetch', function(e) {
    e.respondWith(caches.match(e.request).then(function(r) { return r || fetch(e.request); }));
});