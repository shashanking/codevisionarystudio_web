if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,t)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let n={};const c=e=>a(e,r),f={module:{uri:r},exports:n,require:c};s[r]=Promise.all(i.map((e=>f[e]||c(e)))).then((e=>(t(...e),n)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts("fallback-9wxMrOgAuWnClWP8lTJm9.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/9wxMrOgAuWnClWP8lTJm9/_buildManifest.js",revision:"354eb916679aff7f929a6484a9112bac"},{url:"/_next/static/9wxMrOgAuWnClWP8lTJm9/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/230.fd5dfbbec0ce96be.js",revision:"fd5dfbbec0ce96be"},{url:"/_next/static/chunks/249-2cbb18b47802feee.js",revision:"2cbb18b47802feee"},{url:"/_next/static/chunks/260.d135f974a07a7791.js",revision:"d135f974a07a7791"},{url:"/_next/static/chunks/286-a5aff8bd6f6f3985.js",revision:"a5aff8bd6f6f3985"},{url:"/_next/static/chunks/339.6ac41fe5652a4504.js",revision:"6ac41fe5652a4504"},{url:"/_next/static/chunks/34-254326c6545d2d6c.js",revision:"254326c6545d2d6c"},{url:"/_next/static/chunks/434.f333596b45d1f236.js",revision:"f333596b45d1f236"},{url:"/_next/static/chunks/510-ee9e17cff967a41d.js",revision:"ee9e17cff967a41d"},{url:"/_next/static/chunks/664-8c5a4c082990d0a6.js",revision:"8c5a4c082990d0a6"},{url:"/_next/static/chunks/678.babee5aec8cdd43d.js",revision:"babee5aec8cdd43d"},{url:"/_next/static/chunks/718.f9591e113ea2a8ff.js",revision:"f9591e113ea2a8ff"},{url:"/_next/static/chunks/742-13c1e21fb54bbc92.js",revision:"13c1e21fb54bbc92"},{url:"/_next/static/chunks/94726e6d-8102d0319c74e2fb.js",revision:"8102d0319c74e2fb"},{url:"/_next/static/chunks/989-7bbc718007754de3.js",revision:"7bbc718007754de3"},{url:"/_next/static/chunks/ea88be26.f4d1fcbd94a0d09f.js",revision:"f4d1fcbd94a0d09f"},{url:"/_next/static/chunks/framework-bbecb7d54330d002.js",revision:"bbecb7d54330d002"},{url:"/_next/static/chunks/main-1708f1bf87eea25c.js",revision:"1708f1bf87eea25c"},{url:"/_next/static/chunks/pages/404-a1a288b2063ef422.js",revision:"a1a288b2063ef422"},{url:"/_next/static/chunks/pages/500-9048f0dddaf392dd.js",revision:"9048f0dddaf392dd"},{url:"/_next/static/chunks/pages/_app-8e5cd6c231b4eae9.js",revision:"8e5cd6c231b4eae9"},{url:"/_next/static/chunks/pages/_error-ee5b5fb91d29d86f.js",revision:"ee5b5fb91d29d86f"},{url:"/_next/static/chunks/pages/_offline-dab65e1a52f92701.js",revision:"dab65e1a52f92701"},{url:"/_next/static/chunks/pages/about-us-eb1b4182d4dadae7.js",revision:"eb1b4182d4dadae7"},{url:"/_next/static/chunks/pages/index-19a5dbe20c912359.js",revision:"19a5dbe20c912359"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-e8170399755128b4.js",revision:"e8170399755128b4"},{url:"/_next/static/css/7b8037562f47d11b.css",revision:"7b8037562f47d11b"},{url:"/_next/static/css/e4d6e86416c02387.css",revision:"e4d6e86416c02387"},{url:"/_next/static/css/e68b975263bc4067.css",revision:"e68b975263bc4067"},{url:"/_next/static/media/634216363f5c73c1-s.woff2",revision:"4a1bf14c88bdef173c2a39c5c60e65ce"},{url:"/_next/static/media/88325a2c1fede2f4-s.woff2",revision:"93131c3ec4fe9782c2c40a708db9b0b6"},{url:"/_next/static/media/88f0bb7a7d06fb1d-s.p.ttf",revision:"141f0082275e5cdbcbe7f18a4cc033ec"},{url:"/_next/static/media/a08fcd9e8a7e41da-s.p.ttf",revision:"cc127a063891cbcd1d0ebcc1b8005181"},{url:"/_next/static/media/aec774cbe1963439-s.woff2",revision:"37f8885214448afc8f3b3678db525598"},{url:"/_next/static/media/d83fe381bb17eb77-s.woff2",revision:"215b11e73137fdb7d9a773e0211c29d6"},{url:"/_next/static/media/e1c529c04de64b40-s.p.woff2",revision:"e88b1871ed8eef59b7df05a91a6f2157"},{url:"/_offline",revision:"9wxMrOgAuWnClWP8lTJm9"},{url:"/assets/fonts/earthorbiter.ttf",revision:"cc127a063891cbcd1d0ebcc1b8005181"},{url:"/assets/fonts/earthorbiter.txt",revision:"608b7f03717e27b95e812fb05425db63"},{url:"/assets/fonts/earthorbiter3d.ttf",revision:"7cca39cf30c6078e374c53c826567fc1"},{url:"/assets/fonts/earthorbiter3dital.ttf",revision:"23773def4f793c3113cb70a62eac1368"},{url:"/assets/fonts/earthorbiteracad.ttf",revision:"082a4f9670b6cdb648ce06e2f7871aa8"},{url:"/assets/fonts/earthorbiteracadital.ttf",revision:"6a8974306acf8a2ad99fe9ebe20ad443"},{url:"/assets/fonts/earthorbiterbold.ttf",revision:"141f0082275e5cdbcbe7f18a4cc033ec"},{url:"/assets/fonts/earthorbiterboldital.ttf",revision:"3843a4b43d48d2db81747a0aeff3c639"},{url:"/assets/fonts/earthorbitercond.ttf",revision:"4a0f159d0cadb80fb2934dbe473654fe"},{url:"/assets/fonts/earthorbitercondital.ttf",revision:"8f3e0ecc2d42bf393ae8336c6cb749c0"},{url:"/assets/fonts/earthorbiterdeep3d.ttf",revision:"99ac4c7d5f1f3cc793647c4c56f34adc"},{url:"/assets/fonts/earthorbiterdeep3dital.ttf",revision:"3148a6a31579957c20b31c569411c48b"},{url:"/assets/fonts/earthorbiterengraved.ttf",revision:"7f92282208fd7834a3b2c90a239ffc88"},{url:"/assets/fonts/earthorbiterengravedital.ttf",revision:"0a3254354678b1b69c3c904844663156"},{url:"/assets/fonts/earthorbiterexpand.ttf",revision:"890346c9f0dbfa62dc3a1746608ab174"},{url:"/assets/fonts/earthorbiterexpandital.ttf",revision:"264ca43793c0b1452eaa7248bcd200b5"},{url:"/assets/fonts/earthorbitergrad.ttf",revision:"490fcf040c9d00d9858f5cde27ba0628"},{url:"/assets/fonts/earthorbitergradital.ttf",revision:"f507755ea1b2236c5cd98fe4b39b6d62"},{url:"/assets/fonts/earthorbiterhalf.ttf",revision:"62cf3c22264d377a5cd4aa3765365552"},{url:"/assets/fonts/earthorbiterhalfital.ttf",revision:"70424ef4aaa852a62e7ceab3bd6dc1f7"},{url:"/assets/fonts/earthorbiterital.ttf",revision:"fc26f11d5c43b36bc401470d3b000a2e"},{url:"/assets/fonts/earthorbiterlaser.ttf",revision:"3be3821139dd49a43227a56983fddec0"},{url:"/assets/fonts/earthorbiterlaserital.ttf",revision:"6a58b0609bd9c528838e3c408e0f80b8"},{url:"/assets/fonts/earthorbiterleft.ttf",revision:"98a44466cf0e9125094a5b0386ec81c5"},{url:"/assets/fonts/earthorbiterout.ttf",revision:"929a6a0f35b3eb435e9eb005418cd40f"},{url:"/assets/fonts/earthorbiteroutital.ttf",revision:"a843bf1a761bbe5df20e30bbdb11d441"},{url:"/assets/fonts/earthorbiterpunch.ttf",revision:"335d8afc5cb13ea02d6561b67110bbe7"},{url:"/assets/fonts/earthorbiterpunchital.ttf",revision:"ea3da34f946e3a63ae33b0d587dd58d9"},{url:"/assets/fonts/earthorbitersemital.ttf",revision:"db81edf7857e79d4d8aec744e0e776e6"},{url:"/assets/fonts/earthorbitersuperital.ttf",revision:"55b52d284a1b07a61ffda1569b427ee2"},{url:"/assets/fonts/earthorbitertitle.ttf",revision:"2050828fe2da9b71979543bbda93b801"},{url:"/assets/fonts/earthorbitertitleital.ttf",revision:"45f4d94712ea5ce1f54f889f215fd94c"},{url:"/assets/fonts/earthorbiterxtrabold.ttf",revision:"6c6525aaf6b7fd536ef898f860ffcd36"},{url:"/assets/fonts/earthorbiterxtraboldital.ttf",revision:"c0120b4d509d7ae1c434b695d1d3db00"},{url:"/assets/icons/2082.png",revision:"65ada0ff471d1e8183b3b10deb5ec9d1"},{url:"/assets/icons/icon-192x192.png",revision:"ae6f521329304d4806aa5e23db04c71a"},{url:"/assets/icons/icon-256x256.png",revision:"cf43e20b526340564d41f8c16ea74595"},{url:"/assets/icons/icon-384x384.png",revision:"a389bbec381b2590af7cd0cd2b0eb487"},{url:"/assets/icons/icon-512x512.png",revision:"0bfd110606f188a25f48d83f4ea136ea"},{url:"/assets/images/404.svg",revision:"228e4ee9247e1cceb504ad2281f14458"},{url:"/assets/images/branding-block-ring.png",revision:"b08245b27a2703cd30387bb16ed602cb"},{url:"/assets/images/branding.png",revision:"5d593b5277aab74f48228c258c562303"},{url:"/assets/images/design_txt1.png",revision:"e40aac8969314feb64405fd6b4879ce9"},{url:"/assets/images/design_txt2.png",revision:"41709d0bd77fcc761c68ca2a5f64bb19"},{url:"/assets/images/design_txt3.png",revision:"a5b933c5388aba34af9af0580e104013"},{url:"/assets/images/digital-marketing-ring.png",revision:"a86fba17cd2b1ef259f026a3c680e368"},{url:"/assets/images/digital-marketing.png",revision:"b84ed0637308d155c730bda35c19e451"},{url:"/assets/images/gallery1.jpg",revision:"d0be1eb6fbb896992471a18cd7be5daf"},{url:"/assets/images/gallery2.jpg",revision:"e49c437278f85c2378acffe697af15ac"},{url:"/assets/images/gallery3.jpg",revision:"bcd12223bd7bc9e59c6dc5c8c2fcf4aa"},{url:"/assets/images/gallery4.jpeg",revision:"e4032bc54f4e9dcdfda142f64073c639"},{url:"/assets/images/img1.jpeg",revision:"b4462fa83f438886bcdc1eef456a6d51"},{url:"/assets/images/img10.jpeg",revision:"b205a7ff5a9b78013dfeb878c0143cf9"},{url:"/assets/images/img2.jpeg",revision:"356eb850c617d5cc9779766a1670486e"},{url:"/assets/images/img3.jpeg",revision:"6e47c55abab42d278fce877dd343f9e8"},{url:"/assets/images/img4.jpeg",revision:"a2e66096dc469eb805ab67bfb4dd8514"},{url:"/assets/images/img5.jpeg",revision:"a54d22271ef0ad7d4f938e7cdda75410"},{url:"/assets/images/img6.jpeg",revision:"c3b6654931c7d92adc204ffef9ef82b4"},{url:"/assets/images/img7.jpeg",revision:"e32d7e206fd73f7128f85156abbf63a1"},{url:"/assets/images/img8.jpeg",revision:"e6f00a2765deda858cc4ff427ef8dfd6"},{url:"/assets/images/img9.jpeg",revision:"b47687d0cb1e764b50e575920a930d07"},{url:"/assets/images/logo.png",revision:"ee7a3794509fb7edcbbf8cf07ee57fda"},{url:"/assets/images/logo_img.png",revision:"8164bae33d427ecb48c9e672b7fddd1d"},{url:"/assets/images/mbl_img1.png",revision:"21c8abe796231768b001b3da610c0e41"},{url:"/assets/images/mbl_img2.png",revision:"ca8d972e8a09f7db305b36c333310176"},{url:"/assets/images/mbl_img3.png",revision:"08e618c631b3ac1ab46ebe38ea0e53c4"},{url:"/assets/images/mbl_img4.png",revision:"e7818f05f0bf6f1a4f9b0d1bd620d529"},{url:"/assets/images/mobile-app-dev-block-bg.png",revision:"99d71d43ba5cb522e1accd317a73705a"},{url:"/assets/images/mobile-app-dev.png",revision:"665f2fc3b0007d836a1c096295350386"},{url:"/assets/images/sahilBiswasPortrait.png",revision:"059ff6dec628311df661f128de0c1609"},{url:"/assets/images/sayanChoudhuryPortrait.png",revision:"15fc15158605052b0e4eb2f8bfccfc2c"},{url:"/assets/images/shashankSinghPortrait.png",revision:"fc5b19e500ad5fd305cd984c32b11e48"},{url:"/assets/images/sliding-heading-icon.png",revision:"2f042a9d8af3e9fcee5b64c94bb2c7a3"},{url:"/assets/images/story_img.png",revision:"5a3d6f061360f3df645754982bde1131"},{url:"/assets/images/subheading-icon.png",revision:"ce7f13da041695e1f49766210fc2ed79"},{url:"/assets/images/team-1.jpg",revision:"7e9e3e3a8aafe1a0ac9f15b8387d69ce"},{url:"/assets/images/ui-ux-ring.png",revision:"075f90b122903c21179c1a9296a8c941"},{url:"/assets/images/ui-ux.png",revision:"655b54c84ff6076e3331d9e4777b2bda"},{url:"/assets/images/vikashJhaPortrait.png",revision:"6b7fefc11741e5be98d532af3bf02503"},{url:"/assets/images/weLyr.png",revision:"9ddc8405818f6cc793c020223f53f9fc"},{url:"/assets/images/web-application.png",revision:"6ce223d6144ff5bdff414737b7a0a5de"},{url:"/assets/images/web-applications-ring.png",revision:"d2f444a0da89f9e2f1d4a11fa3d4c47b"},{url:"/assets/images/web-design-ring.png",revision:"3677af50bb7473fab94f64eb06b91048"},{url:"/assets/images/web-design.png",revision:"0d59d029350b75356283c124347ef286"},{url:"/assets/images/why-us-col-img.png",revision:"1d395800d91c4e361992635a460b3223"},{url:"/assets/images/why-us-col-img1.png",revision:"bcc078363e84819658c8dc240fc5bae0"},{url:"/favicon.ico",revision:"7fddc2bdf63fc13906f1537d4d704601"},{url:"/manifest.json",revision:"37e9309189ad052ba86f4095b53b0dd5"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));
