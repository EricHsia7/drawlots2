if(!self.define){let e,n={};const i=(i,s)=>(i=new URL(i+".js",s).href,n[i]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=n,document.head.appendChild(e)}else e=i,importScripts(i),n()})).then((()=>{let e=n[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,l)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(n[o])return;let r={};const t=e=>i(e,o),c={module:{uri:o},exports:r,require:t};n[o]=Promise.all(s.map((e=>c[e]||t(e)))).then((e=>(l(...e),r)))}}define(["./workbox-6c3e5c38"],(function(e){"use strict";e.setCacheNameDetails({prefix:"drawlots-1f062b2"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"./4bfcce6e9d5b5eb0b4c2.min.js",revision:null},{url:"./4e3f031e38abb4582308.min.js",revision:null},{url:"./591880fdda37c6d49d4b.min.js",revision:null},{url:"./5977e1fffa4f0766bfe1.min.js",revision:null},{url:"./9beafb581cdeb48949a3.min.js",revision:null},{url:"./c25b9eefc33133b749df.min.css",revision:null},{url:"./c3d758e614e52b4d388b.min.js",revision:null},{url:"./index.html",revision:"8fd1619f60a8dabc8230cfe035cdecae"}],{}),e.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[]}),"GET")}));
//# sourceMappingURL=service-worker.js.map
