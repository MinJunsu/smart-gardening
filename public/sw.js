if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,t)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const r=e=>a(e,i),o={module:{uri:i},exports:c,require:r};s[i]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(t(...e),c)))}}define(["./workbox-6316bd60"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/MDtvdZ6n7a94h-CrgCzaO/_buildManifest.js",revision:"9ec3e247cafc909d9ffa006a37152283"},{url:"/_next/static/MDtvdZ6n7a94h-CrgCzaO/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/MDtvdZ6n7a94h-CrgCzaO/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/536-8f4409e687bbaeaf.js",revision:"8f4409e687bbaeaf"},{url:"/_next/static/chunks/669-b4a56b7adf507d17.js",revision:"b4a56b7adf507d17"},{url:"/_next/static/chunks/675-b1c0bfa226b363b1.js",revision:"b1c0bfa226b363b1"},{url:"/_next/static/chunks/framework-1f10003e17636e37.js",revision:"1f10003e17636e37"},{url:"/_next/static/chunks/main-5035a05945ec0e6e.js",revision:"5035a05945ec0e6e"},{url:"/_next/static/chunks/pages/_app-f28deff53fb135a9.js",revision:"f28deff53fb135a9"},{url:"/_next/static/chunks/pages/_error-0a004b8b8498208d.js",revision:"0a004b8b8498208d"},{url:"/_next/static/chunks/pages/index-dae26babd742ad9f.js",revision:"dae26babd742ad9f"},{url:"/_next/static/chunks/pages/lists-1f5647598b3e411e.js",revision:"1f5647598b3e411e"},{url:"/_next/static/chunks/pages/lists/%5Bid%5D-564c245fb13bb341.js",revision:"564c245fb13bb341"},{url:"/_next/static/chunks/pages/lists/%5Bid%5D/diary-581b197f03e50f5c.js",revision:"581b197f03e50f5c"},{url:"/_next/static/chunks/pages/lists/%5Bid%5D/diary/create-a5dc79336df69dbf.js",revision:"a5dc79336df69dbf"},{url:"/_next/static/chunks/pages/lists/%5Bid%5D/timelapse-71f35292b85fdf80.js",revision:"71f35292b85fdf80"},{url:"/_next/static/chunks/pages/search-3bb4f686c8970b32.js",revision:"3bb4f686c8970b32"},{url:"/_next/static/chunks/pages/search/%5Bid%5D-8ae67d36b3bdc769.js",revision:"8ae67d36b3bdc769"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-9b312e20a4e32339.js",revision:"9b312e20a4e32339"},{url:"/_next/static/css/ee2b96fb8e6255a2.css",revision:"ee2b96fb8e6255a2"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/img.png",revision:"8c8a3d6edc06673e2334a52481b906a0"},{url:"/img_1.png",revision:"1397c9275111dd43d33280645dadd59a"},{url:"/img_2.png",revision:"9721a6cd6de6c7f072448e398254de44"},{url:"/manifest.json",revision:"a577b654747b3d50af580ef2b34a0b3f"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
