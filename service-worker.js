if(!self.define){let e,n={};const i=(i,s)=>(i=new URL(i+".js",s).href,n[i]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=n,document.head.appendChild(e)}else e=i,importScripts(i),n()})).then((()=>{let e=n[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,l)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(n[o])return;let r={};const t=e=>i(e,o),c={module:{uri:o},exports:r,require:t};n[o]=Promise.all(s.map((e=>c[e]||t(e)))).then((e=>(l(...e),r)))}}define(["./workbox-03ee9729"],(function(e){"use strict";e.setCacheNameDetails({prefix:"drawlots-7eaf4c7"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"./31b34d0417190ce9e4de.min.js",revision:null},{url:"./5d64bee3755315299794.min.js",revision:null},{url:"./844dbf527a942dc3521a.min.css",revision:null},{url:"./96d2589fd9e12b844fd6.min.js",revision:null},{url:"./9beafb581cdeb48949a3.min.js",revision:null},{url:"./c3d758e614e52b4d388b.min.js",revision:null},{url:"./fc57fdbc0a186b69cebb.min.js",revision:null},{url:"./index.html",revision:"5508a85c75bc7a739ea45ce78e9a3bfc"}],{}),e.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[]}),"GET")}));
//# sourceMappingURL=service-worker.js.map
