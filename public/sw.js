if(!self.define){let e,c={};const i=(i,n)=>(i=new URL(i+".js",n).href,c[i]||new Promise((c=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=c,document.head.appendChild(e)}else e=i,importScripts(i),c()})).then((()=>{let e=c[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,s)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(c[a])return;let r={};const o=e=>i(e,a),d={module:{uri:a},exports:r,require:o};c[a]=Promise.all(n.map((e=>d[e]||o(e)))).then((e=>(s(...e),r)))}}define(["./workbox-dda1764b"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/85T64ykx3k9VFAYUlfEG1/_buildManifest.js",revision:"c926e394d71357bb80ae560e1a22582e"},{url:"/_next/static/85T64ykx3k9VFAYUlfEG1/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/142.e52adebd7ed8ba29.js",revision:"e52adebd7ed8ba29"},{url:"/_next/static/chunks/375.0707bb39fa052958.js",revision:"0707bb39fa052958"},{url:"/_next/static/chunks/408-f24fdc61c5a9b855.js",revision:"f24fdc61c5a9b855"},{url:"/_next/static/chunks/577-bcb3d3d397e4fb4c.js",revision:"bcb3d3d397e4fb4c"},{url:"/_next/static/chunks/593.ce456e56d3415d58.js",revision:"ce456e56d3415d58"},{url:"/_next/static/chunks/61-0ca6663d46fce3e1.js",revision:"0ca6663d46fce3e1"},{url:"/_next/static/chunks/760.e11f88da6d9927e8.js",revision:"e11f88da6d9927e8"},{url:"/_next/static/chunks/857-cf25daee139ce32d.js",revision:"cf25daee139ce32d"},{url:"/_next/static/chunks/framework-2c79e2a64abdb08b.js",revision:"2c79e2a64abdb08b"},{url:"/_next/static/chunks/main-1cb174da82364de6.js",revision:"1cb174da82364de6"},{url:"/_next/static/chunks/pages/404-ffb1e8c12f74e021.js",revision:"ffb1e8c12f74e021"},{url:"/_next/static/chunks/pages/_app-44cb9c25d8fe9c3f.js",revision:"44cb9c25d8fe9c3f"},{url:"/_next/static/chunks/pages/_error-54de1933a164a1ff.js",revision:"54de1933a164a1ff"},{url:"/_next/static/chunks/pages/index-7af23817d9180bb8.js",revision:"7af23817d9180bb8"},{url:"/_next/static/chunks/pages/pokemon/%5Bid%5D-53efb101f6e2ffaf.js",revision:"53efb101f6e2ffaf"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-cda7c1a266800ebf.js",revision:"cda7c1a266800ebf"},{url:"/_next/static/css/7f32b9303dde3c92.css",revision:"7f32b9303dde3c92"},{url:"/favicon.ico",revision:"27296b63a324511fb02bcff664011ea1"},{url:"/icons/favicon.ico",revision:"27296b63a324511fb02bcff664011ea1"},{url:"/icons/icon-100x100.png",revision:"4ae1e2d56bed90eabb9c0a2be7f76c63"},{url:"/icons/icon-114x114.png",revision:"b6559189ba858adc2f90d9d472c63dd8"},{url:"/icons/icon-120x120.png",revision:"7880d2f053f0d20391cedc4b40fabe94"},{url:"/icons/icon-128x128.png",revision:"1445ea4edb9f1e18c74c1b9f01e9d778"},{url:"/icons/icon-144x144.png",revision:"8d3c32a62c2e6544bea5e1a7ce322329"},{url:"/icons/icon-16x16.png",revision:"6855407f0b1d0e81ce451692d78befd4"},{url:"/icons/icon-20x20.png",revision:"6ad56b28fd3387df9ca132ae6a6a9cb9"},{url:"/icons/icon-29x29.png",revision:"55a333fc73d7c2be8387795f36601195"},{url:"/icons/icon-32x32.png",revision:"f3cacc7520c633d7c2ce0c656e3d0052"},{url:"/icons/icon-40x40.png",revision:"2fa702970644767c03d4c2fde822cb32"},{url:"/icons/icon-48x48.png",revision:"ea91c8ea6800656ba2232c87132e4e87"},{url:"/icons/icon-50x50.png",revision:"7c86a106aec69fd9bdfa9fc022b8d2cd"},{url:"/icons/icon-57x57.png",revision:"a0ee06c0957e2a05fd9103c6a95afbe7"},{url:"/icons/icon-58x58.png",revision:"3ff94bbce40ba86bc134ebed95af9d0d"},{url:"/icons/icon-60x60.png",revision:"be1950b010fcc74b6447152acc62fc4c"},{url:"/icons/icon-64x64.png",revision:"45b7382fe4600627341e93b7409c4960"},{url:"/icons/icon-72x72.png",revision:"6b5c891219189f63f6a5636438ee78e8"},{url:"/icons/icon-76x76.png",revision:"db8b4c5eda2063f776d5f8ac7ffb8a8b"},{url:"/icons/icon-80x80.png",revision:"409ebda350993be1f4370f01c2dc2010"},{url:"/icons/icon-87x87.png",revision:"040f3f3751067a616c6784a4ce8447e0"},{url:"/icons/icon-96x96.png",revision:"de9efd8c0eb553e3993d78b7bd4d350d"},{url:"/images/empty-filters.png",revision:"f790905f9c15f40c65a8816b6b53b309"},{url:"/images/empty-image.png",revision:"11eda93b7ca5543303e00deebbd8fe64"},{url:"/images/error-page.png",revision:"ad69b021b79e4c48a6c870ba9ce4ffbd"},{url:"/images/logo-pokedev.png",revision:"9fa60b91a447209ec3d7bbe6dac7ce5a"},{url:"/manifest.json",revision:"5971f9d95d53c489cceb0fe2f0b2d1dd"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:c,event:i,state:n})=>c&&"opaqueredirect"===c.type?new Response(c.body,{status:200,statusText:"OK",headers:c.headers}):c}]}),"GET"),e.registerRoute(/^https:\/\/pokeapi.co\/api\/v2\/.*/,new e.StaleWhileRevalidate({cacheName:"pokeapi",plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:png|jpg|jpeg|svg|gif|webp)$/i,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/^https?.*/,new e.StaleWhileRevalidate({cacheName:"offline",plugins:[new e.ExpirationPlugin({maxEntries:200}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
