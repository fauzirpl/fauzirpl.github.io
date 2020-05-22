'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/FontManifest.json": "ed9cd32fa597ae46abed4ac894b9902b",
"assets/LICENSE": "5f510a324cd11254de39bb1784122bc6",
"assets/assets/images/history.png": "30bbdc902331d3bbcc5b3dd795736280",
"assets/assets/images/linkedin.png": "884dd4da839e388f4180087993de8871",
"assets/assets/images/media.png": "b885089418406535613e2f13fa9636d2",
"assets/assets/images/SMA.png": "de66da84dd3513e865a7ce53176f8728",
"assets/assets/images/start.png": "506ac60fc7b51fb35d66d6ef2a4da9fc",
"assets/assets/images/file.png": "9b31035ef08d2f6f1a57bbebe684a7d7",
"assets/assets/images/SD.png": "b025d0ad3a37dc563e09124376c4c3f3",
"assets/assets/images/folder.png": "05dfd06db5c72d8b345c751d065aab36",
"assets/assets/images/KULIAH.png": "5e227191d4bdadbb0b0e9022aef20f11",
"assets/assets/images/instagram.png": "63cae4750ab5e6845ed25920e8d45888",
"assets/assets/images/logo.png": "772a06eea94c413f527365aeadceb104",
"assets/assets/images/SMP.png": "27d57c47ae8cf1fcf6d5bb12911a54bd",
"assets/assets/images/education.png": "a09bcb1b5b51ce9823ba78f9d5a87942",
"assets/assets/images/mycomputer.png": "b8e5723076a74ca155c3f4981d7c027b",
"assets/assets/images/KERJA.png": "d2b6cccd2e18654322258b14e932aaad",
"assets/assets/images/MAGANG.png": "4d705f68a0a86bebd3101e271235efb2",
"assets/assets/images/bin.png": "6d2203db7b8fe6cd6bcdcad9900d83a0",
"assets/AssetManifest.json": "7e0c20e364822ac98e1d16f9e18d23d7",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"main.dart.js": "11ae67710b3699d35fd7846c10b4d55e",
"manifest.json": "2cb63214ba26ba46afdc7883fd2f2f12",
"index.html": "44dba4b2a9c61197b95fcd5544f4a0b5",
"/": "44dba4b2a9c61197b95fcd5544f4a0b5"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
