!function(){var e=["9a90cbb31f8d5e0d/bundle.js","cf83e1357eefb8bd/bundle.css","assets/data.js","assets/middelpercentage.png","assets/hoogpercentage.png","assets/laagpercentage.png","assets/style.css","manifest.json"];self.addEventListener("fetch",function(e){e.respondWith(self.caches.match(e.request).then(function(t){return t||self.fetch(e.request)}))}),self.addEventListener("install",function(t){t.waitUntil(self.caches.open("1.0.0").then(function(t){return t.addAll(e)}))}),self.addEventListener("activate",function(e){e.waitUntil(self.caches.keys().then(function(e){return Promise.all(e.map(function(t,s){if("1.0.0"!==e[s])return self.caches.delete(e[s])}))}))})}();
//# sourceMappingURL=bankai-service-worker.js.map