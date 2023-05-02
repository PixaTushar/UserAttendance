'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "8594013e03b4dfca693f2b709d2e4d5f",
"assets/assets/argon.png": "c9cb09dec505f7d6751a8729f961d70a",
"assets/assets/box.svg": "c1fda4602332bbb2b289d98e85dcd4b7",
"assets/assets/calendar.png": "61cd4ce649560da10cb3c302fb7462f9",
"assets/assets/check_box.svg": "933d80466b51138bc264a24194b130ff",
"assets/assets/eye.svg": "f5d5af1dd139ead05c33ff42a7ba2f5b",
"assets/assets/eye_off.svg": "d464562ab274057a40c4e104b829b246",
"assets/assets/ic_Attandance.png": "d831bb9593850730713ef4f68aa98553",
"assets/assets/ic_box.png": "98d95a07ee71fe856a34ec85cea8c533",
"assets/assets/ic_check_box.png": "5f877a2cf3854bf0a3f4b9f11dcd217f",
"assets/assets/ic_dashboard.png": "9a14cc4639e95b5569f44ccaf297db4c",
"assets/assets/ic_eye.png": "d8b23632446b37ed9b94c9ab769db848",
"assets/assets/ic_eye_offf.png": "a9ecceca0984e91842d48376d0efcb69",
"assets/assets/ic_leave.png": "b8e8073ce02a7535e765cf6abc456b23",
"assets/assets/ic_lock.png": "0c804952f5072afc687e3f189843f79e",
"assets/assets/ic_mail.png": "3c425440f7c1887dc6daebde9a18b85b",
"assets/assets/ic_noti.png": "22f6de0735530a0503f8da2f45f13ab0",
"assets/assets/Image.png": "3a02033f68fe718a5071e2eac96f6734",
"assets/assets/login_canvas.png": "3f56f17d553acc06fa990a56b4adbe21",
"assets/assets/logo1.png": "fb5b2949d4aeb9b9331f9a4d819c5e38",
"assets/assets/log_button.png": "6b2abdb23911fada985938a7ba2f4e22",
"assets/assets/log_in.png": "0127867436661e7824b0e51e2f2942b4",
"assets/assets/mail.svg": "485414861b24affd3c2a3b505903a751",
"assets/assets/pass.svg": "f6bcdb0268b165512312543ea9033854",
"assets/assets/pen.png": "06760e0ecd197ad577ab5a2d0f73f394",
"assets/assets/Rectangle%25203.png": "f17c39c0bfee9e8e38acf6d221fdc2a4",
"assets/assets/user_image.png": "be0863a9db281020f9953be2b53b16c0",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "d2d8302e0f77ea79f0bf65499ef4c651",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/timezone/data/latest_all.tzf": "d34414858d4bd4de35c0ef5d94f1d089",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9c1089825cce17b2948d8ba40ee2044d",
"/": "9c1089825cce17b2948d8ba40ee2044d",
"main.dart.js": "5a4e24f7f32f4067f40b49e03132fd51",
"manifest.json": "3a1c1bd81c1e197de246bc89efb9456a",
"splash/img/dark-1x.png": "bad4c68aaf517b9269357cf24ca90074",
"splash/img/dark-2x.png": "b587c77a0ea6d023721b0efdb13fdb26",
"splash/img/dark-3x.png": "0d52f904e821e5bf138cad59cbae529a",
"splash/img/dark-4x.png": "745fdbfe9894514642bf746cf4c91c4b",
"splash/img/light-1x.png": "bad4c68aaf517b9269357cf24ca90074",
"splash/img/light-2x.png": "b587c77a0ea6d023721b0efdb13fdb26",
"splash/img/light-3x.png": "0d52f904e821e5bf138cad59cbae529a",
"splash/img/light-4x.png": "745fdbfe9894514642bf746cf4c91c4b",
"splash/splash.js": "f6ee10f0a11f96089a97623ece9a1367",
"splash/style.css": "882c80670cd5385442f6f892e8e68b62",
"version.json": "b860f4160bcef8026e33316243c38373"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
