if(!self.define){let e,n={};const i=(i,s)=>(i=new URL(i+".js",s).href,n[i]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=n,document.head.appendChild(e)}else e=i,importScripts(i),n()})).then((()=>{let e=n[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,l)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(n[r])return;let o={};const t=e=>i(e,r),c={module:{uri:r},exports:o,require:t};n[r]=Promise.all(s.map((e=>c[e]||t(e)))).then((e=>(l(...e),o)))}}define(["./workbox-6c3e5c38"],(function(e){"use strict";e.setCacheNameDetails({prefix:"drawlots-d2a688e"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"./473c59594f322bb02ac0.min.js",revision:null},{url:"./4e3f031e38abb4582308.min.js",revision:null},{url:"./9beafb581cdeb48949a3.min.js",revision:null},{url:"./a6769b47f1cf2b25d26b.min.js",revision:null},{url:"./b7537e9066233c6fe4e4.min.js",revision:null},{url:"./c8265ea6387fea356fe1.min.js",revision:null},{url:"./f5854d05182c55ba5dce.min.css",revision:null},{url:"./f70263d6facf34de72fd.min.js",revision:null},{url:"./index.html",revision:"bb24c6828b3cf384a9886e666c95e375"}],{}),e.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[]}),"GET")}));
//# sourceMappingURL=service-worker.js.map
