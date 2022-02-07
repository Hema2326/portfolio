'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "a52ac9d49d197194d355a038494fa3b1",
"index.html": "8141be8575253b717cb5bbce29f1b24c",
"/": "8141be8575253b717cb5bbce29f1b24c",
"main.dart.js": "8c5adf0432fb2e3d4afa34586b40100d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8bfdaea8f9b95736230497e916f94930",
".git/ORIG_HEAD": "899e9974ce01e3afdabe6320dabe7061",
".git/config": "10aa9e52b788a996ed2b1fa6d1f764da",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f5/cd6995f8bbef1b7c374608e21843051615455d": "1c8c653e04189bb9a23584390f7af8c9",
".git/objects/c1/31d79cb7e1b58e237094a8677f43d774eed5f9": "34d974567750ee88a5a4ae3b4487d185",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/b25c51367de735b89b391bc74a93a980067e44": "dc16d5563641d713e2fa611ce2f679d5",
".git/objects/af/6f6db1234d67547bbcce43a0e01be47aacf733": "254b1f33ffbc2101c2ee1f2cc55f8194",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "92a86b25e143173c1113520f24be5c74",
".git/logs/refs/heads/master": "92a86b25e143173c1113520f24be5c74",
".git/logs/refs/remotes/origin/master": "174f8e3df3d4d5a3db99b3d276ca8449",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "899e9974ce01e3afdabe6320dabe7061",
".git/refs/remotes/origin/master": "899e9974ce01e3afdabe6320dabe7061",
".git/index": "abd79d9aef9a8b1a23b43214cbf99ca1",
".git/COMMIT_EDITMSG": "5a356ecb3ad9951b89e17c364db72b30",
".git/FETCH_HEAD": "e7fb3e4cea5dc6da58b2e29e5d474ba6",
"assets/AssetManifest.json": "1e55c66c74624c3561a6e66a0e6f628a",
"assets/NOTICES": "ce2d6906b9d0c55eeb9346ed4b49e001",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/camera%2520copy.svg": "58e15450aa454f51fcbe3f9c4f5160a3",
"assets/assets/API%2520Docs.svg": "2432cb2831f82276727fc847106a6cbf",
"assets/assets/alexia.png": "0967daf032ee35c9554631d959565bb1",
"assets/assets/view.jpeg": "d0a9dd2a129fb0373758cb70f8708cfd",
"assets/assets/fintech.png": "77092ae6b4e268c3ced12a6d370b2abd",
"assets/assets/Codemagic-io_Blog_Flutter-Versus-Other-Mobile-Development-Frameworks_1.png": "8464f99453646e7aa631698b9fb91a7d",
"assets/assets/icici1.png": "80d073b6ded337e7f610cf9fbf6de677",
"assets/assets/flutter-engage.png": "0d9ad17cd4b0b97c5ae676f20e0a8d13",
"assets/assets/projects.png": "50edaa62987ef56c1362d0decaf80c93",
"assets/assets/flutter.png": "69d60c599d80c13363e4a3364d0fe2be",
"assets/assets/icici2.png": "27c4d7d6b578e042d72ee673a20666bd",
"assets/assets/flutter-2.png": "226d30e4da6790252fe183da9a0f08e9",
"assets/assets/project1.png": "c19373ba2eef96c60fb4be0e4b06518d",
"assets/assets/visa.png": "29fa9082afd01faabaf6b96941a8902a",
"assets/assets/seema.png": "8aac6854bb0a68474fb26390ae8aea06",
"assets/assets/video.mp4": "9e84c164927082c14ce41850351c9001",
"assets/assets/value.png": "0f48d4fe0433762f620b1d28fd156a97",
"assets/assets/nandha.png": "0baded081c9b2aabe2398c5452d60d50",
"assets/assets/chinnadurai.png": "5d3275518ccdc14f394801e7df0ff142",
"assets/assets/hema.png": "753b7a53b9f382f49474839b30f8822b",
"assets/assets/generic_components.png": "cd3b4d53ca4663e14084106fbc39c8e7",
"assets/assets/logo1.png": "8715a972e1a19229e326520770a3fa6c",
"assets/assets/flutterlogo.png": "2ad200fa335cf2850b5030cd8bff9f55",
"assets/assets/pockets.png": "30d681305ce31c641c5ee38596cd70d8",
"assets/assets/camera.svg": "58e15450aa454f51fcbe3f9c4f5160a3",
"assets/assets/design.jpeg": "14f53cd03b9f93d32af16093b60afcc6",
"assets/assets/docs.png": "823de74af2cb55a50abc9b841796c271",
"assets/assets/web.png": "7bc5352921f1f38d0efe9aeb8c1cc8bb",
"assets/assets/phone.png": "72aa2451ba0658048badeb4b0ea2f377",
"assets/assets/genericcomponents1.png": "17b85137961dd4ac2058ccc2a98a5cd8",
"assets/assets/115443-111948-Equitaslogo.webp": "5da599bf9e9f7eeb6b698d843e6568ce",
"assets/assets/mari.png": "a5b48e618041553b6f98d57ff577814e",
"assets/assets/Flutter-2%2520(1).png": "0fd69926ed5aa7ecf96e297e932c932b",
"assets/assets/logo.jpeg": "dc22f62dcc5dba43c8b33cdcd31f2650",
"assets/assets/6078b650748b8558d46ffb7f_Flutter%2520app%2520development.png": "bbbd12fc7c14bb6bf8b469f95742bfec",
"assets/assets/jones.png": "ea8761b31eaee3fa2f724a28cdbb89cc",
"assets/assets/logo.svg": "5739fe268e2dda463e6fef7148d415b3",
"assets/assets/camera.png": "27cad634e0486d36399f55d7b45a3213",
"assets/assets/dart.png": "d79088097d1c5de2f8f873a17e109d8a",
"assets/assets/images.png": "17c081dbc3272e98a448ff6d05b03430"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
