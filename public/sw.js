if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,t)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let i={};const o=e=>a(e,c),r={module:{uri:c},exports:i,require:o};s[c]=Promise.all(n.map((e=>r[e]||o(e)))).then((e=>(t(...e),i)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts("fallback-IvxXxxvBxBTkYPFvPhJZl.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/IvxXxxvBxBTkYPFvPhJZl/_buildManifest.js",revision:"073d235b1bce177a5c5010c0dca028cb"},{url:"/_next/static/IvxXxxvBxBTkYPFvPhJZl/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/129-e8a64a10626e1acc.js",revision:"e8a64a10626e1acc"},{url:"/_next/static/chunks/230.14bb5451d284d1e9.js",revision:"14bb5451d284d1e9"},{url:"/_next/static/chunks/260.d135f974a07a7791.js",revision:"d135f974a07a7791"},{url:"/_next/static/chunks/287-25811403db5b5055.js",revision:"25811403db5b5055"},{url:"/_next/static/chunks/339.e80b2a47c985bf98.js",revision:"e80b2a47c985bf98"},{url:"/_next/static/chunks/34-254326c6545d2d6c.js",revision:"254326c6545d2d6c"},{url:"/_next/static/chunks/398-d55c828ead06685c.js",revision:"d55c828ead06685c"},{url:"/_next/static/chunks/416-225d1d3a798f9641.js",revision:"225d1d3a798f9641"},{url:"/_next/static/chunks/434.3b2ce84febc3b373.js",revision:"3b2ce84febc3b373"},{url:"/_next/static/chunks/664-8c5a4c082990d0a6.js",revision:"8c5a4c082990d0a6"},{url:"/_next/static/chunks/678.4fdf222b34db8d56.js",revision:"4fdf222b34db8d56"},{url:"/_next/static/chunks/718.f9591e113ea2a8ff.js",revision:"f9591e113ea2a8ff"},{url:"/_next/static/chunks/742-ab58132bfbae612b.js",revision:"ab58132bfbae612b"},{url:"/_next/static/chunks/844-c9b4bb67276adecf.js",revision:"c9b4bb67276adecf"},{url:"/_next/static/chunks/9-a80dc5b7b899e4d1.js",revision:"a80dc5b7b899e4d1"},{url:"/_next/static/chunks/ea88be26.f4d1fcbd94a0d09f.js",revision:"f4d1fcbd94a0d09f"},{url:"/_next/static/chunks/framework-bbecb7d54330d002.js",revision:"bbecb7d54330d002"},{url:"/_next/static/chunks/main-c543cea9649c33fa.js",revision:"c543cea9649c33fa"},{url:"/_next/static/chunks/pages/404-fac559dbbb75ad47.js",revision:"fac559dbbb75ad47"},{url:"/_next/static/chunks/pages/500-912656c61a41e117.js",revision:"912656c61a41e117"},{url:"/_next/static/chunks/pages/_app-2f00a9a2f81d5204.js",revision:"2f00a9a2f81d5204"},{url:"/_next/static/chunks/pages/_error-ee5b5fb91d29d86f.js",revision:"ee5b5fb91d29d86f"},{url:"/_next/static/chunks/pages/_offline-087bb15b10d0bae8.js",revision:"087bb15b10d0bae8"},{url:"/_next/static/chunks/pages/dashboard-1a3a4a19c0d39b3e.js",revision:"1a3a4a19c0d39b3e"},{url:"/_next/static/chunks/pages/index-78b4b42ee5fea701.js",revision:"78b4b42ee5fea701"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-3fe2017f800382ab.js",revision:"3fe2017f800382ab"},{url:"/_next/static/css/356505de204f2bac.css",revision:"356505de204f2bac"},{url:"/_next/static/css/7b8037562f47d11b.css",revision:"7b8037562f47d11b"},{url:"/_offline",revision:"IvxXxxvBxBTkYPFvPhJZl"},{url:"/assets/fonts/corbel-demo.html",revision:"e12b317cf74e0697f502cd9fd6cd1b7b"},{url:"/assets/fonts/corbel-webfont.eot",revision:"be0eaa9f3aa52b1e8ca4fc9eeedfb606"},{url:"/assets/fonts/corbel-webfont.svg",revision:"8d7a6499f60e4f462af276b21d063ced"},{url:"/assets/fonts/corbel-webfont.ttf",revision:"4d97026343ee754d81c964b9affaacd6"},{url:"/assets/fonts/corbel-webfont.woff",revision:"b2893732c1bcf56ded072129713fcc83"},{url:"/assets/fonts/corbel-webfont.woff2",revision:"8d6858e40351a6f2778647eb86f811e0"},{url:"/assets/fonts/corbel_bold-demo.html",revision:"4102225006c1bf02a9e8cf6828bb3cc8"},{url:"/assets/fonts/corbel_bold-webfont.eot",revision:"73437dff94669488115ef433d1c04ac7"},{url:"/assets/fonts/corbel_bold-webfont.svg",revision:"28763cedcf5cd6da265016a8fd85051e"},{url:"/assets/fonts/corbel_bold-webfont.ttf",revision:"a69965de4e60235b10304958b2311820"},{url:"/assets/fonts/corbel_bold-webfont.woff",revision:"87c8365b6978413a46300217ee1240db"},{url:"/assets/fonts/corbel_bold-webfont.woff2",revision:"00a7bdf278eb7b2a15021a0ec12568c7"},{url:"/assets/fonts/corbel_bold_italic-demo.html",revision:"62c522459246c731c266c13aebde93e2"},{url:"/assets/fonts/corbel_bold_italic-webfont.eot",revision:"f5a80612c4ec900e5d5d29125ce6e255"},{url:"/assets/fonts/corbel_bold_italic-webfont.svg",revision:"d1d1ecfb8de947b8cac06169714b1840"},{url:"/assets/fonts/corbel_bold_italic-webfont.ttf",revision:"38810c0d5956da44a5b9f6ee79d1b366"},{url:"/assets/fonts/corbel_bold_italic-webfont.woff",revision:"6d657edce82ad68f70e892e8875adc4b"},{url:"/assets/fonts/corbel_bold_italic-webfont.woff2",revision:"4a0115675f9588df3ed971f77770d159"},{url:"/assets/fonts/corbel_italic-demo.html",revision:"faf7c5655e9ed88f3dbd0621f3ce48b9"},{url:"/assets/fonts/corbel_italic-webfont.eot",revision:"d9a93043f85a6302aa42d93d55973cb7"},{url:"/assets/fonts/corbel_italic-webfont.svg",revision:"2b6965a20ca440a36e10d0bd72690463"},{url:"/assets/fonts/corbel_italic-webfont.ttf",revision:"f037a9afa729a774c8f5eb5cee634d7e"},{url:"/assets/fonts/corbel_italic-webfont.woff",revision:"8b9a128f32fb038bf7395c073cbb9c21"},{url:"/assets/fonts/corbel_italic-webfont.woff2",revision:"1d0b38fdf8ff4c1c26361564880df068"},{url:"/assets/fonts/corbelb-demo.html",revision:"eca943339d37bf704c4c49a79454ecf6"},{url:"/assets/fonts/corbelb-webfont.eot",revision:"f2b40577defe99d7aca831d38eed136a"},{url:"/assets/fonts/corbelb-webfont.svg",revision:"ef761ed0628b620f6d4adcf69f61a362"},{url:"/assets/fonts/corbelb-webfont.ttf",revision:"38b6295f927143224de8bde1a188bc67"},{url:"/assets/fonts/corbelb-webfont.woff",revision:"7bf29a143f619fda0a3b897e4cde201b"},{url:"/assets/fonts/corbelb-webfont.woff2",revision:"86cd3e820ee4437393277711a4f06fdf"},{url:"/assets/fonts/corbeli-demo.html",revision:"a5fd1892902a703a77806ff97ccfbffa"},{url:"/assets/fonts/corbeli-webfont.eot",revision:"8622b330d62792abf47ab6d2869082f6"},{url:"/assets/fonts/corbeli-webfont.svg",revision:"5823f93f878837bd3159d7a8f5e0084e"},{url:"/assets/fonts/corbeli-webfont.ttf",revision:"f4c1c787f3dae909e6a911951c371370"},{url:"/assets/fonts/corbeli-webfont.woff",revision:"c426ecb13301450c6754a1fc381fd5e3"},{url:"/assets/fonts/corbeli-webfont.woff2",revision:"1f6ec86a6ef2ce13d6fc1da96efa6d69"},{url:"/assets/fonts/corbelz-demo.html",revision:"e737c0f7943f75ed3ec7b6798fde802e"},{url:"/assets/fonts/corbelz-webfont.eot",revision:"45a82f69fcf2bf1fcb97bdd3690ec708"},{url:"/assets/fonts/corbelz-webfont.svg",revision:"b8cc38cdc0308285c1c18e3ba6ccf05e"},{url:"/assets/fonts/corbelz-webfont.ttf",revision:"f53e125b885524b4f5d618b4b28de6ce"},{url:"/assets/fonts/corbelz-webfont.woff",revision:"3815196014a23d1a0996ad8c3582c916"},{url:"/assets/fonts/corbelz-webfont.woff2",revision:"2f95e6eb3c6e7a413711b162ed55b325"},{url:"/assets/icons/2082.png",revision:"65ada0ff471d1e8183b3b10deb5ec9d1"},{url:"/assets/icons/icon-192x192.png",revision:"ae6f521329304d4806aa5e23db04c71a"},{url:"/assets/icons/icon-256x256.png",revision:"cf43e20b526340564d41f8c16ea74595"},{url:"/assets/icons/icon-384x384.png",revision:"a389bbec381b2590af7cd0cd2b0eb487"},{url:"/assets/icons/icon-512x512.png",revision:"0bfd110606f188a25f48d83f4ea136ea"},{url:"/assets/images/404.svg",revision:"228e4ee9247e1cceb504ad2281f14458"},{url:"/assets/images/logo_img.png",revision:"8164bae33d427ecb48c9e672b7fddd1d"},{url:"/assets/images/story_img.png",revision:"5a3d6f061360f3df645754982bde1131"},{url:"/favicon.ico",revision:"ad30b75d028e920b47ed247a0ce1eafc"},{url:"/manifest.json",revision:"37e9309189ad052ba86f4095b53b0dd5"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));
