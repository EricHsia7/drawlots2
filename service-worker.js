if(!self.define){let e,n={};const i=(i,s)=>(i=new URL(i+".js",s).href,n[i]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=n,document.head.appendChild(e)}else e=i,importScripts(i),n()})).then((()=>{let e=n[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,l)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(n[r])return;let o={};const t=e=>i(e,r),u={module:{uri:r},exports:o,require:t};n[r]=Promise.all(s.map((e=>u[e]||t(e)))).then((e=>(l(...e),o)))}}define(["./workbox-6c3e5c38"],(function(e){"use strict";e.setCacheNameDetails({prefix:"drawlots-9f7f27a"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"./0095492b8f440abdd214.min.js",revision:null},{url:"./0150f082069417a05d0b.min.js",revision:null},{url:"./0674ecaafe8295572627.min.css",revision:null},{url:"./193d3be947b7a8a1a421.min.js",revision:null},{url:"./25feb837031872076108.min.js",revision:null},{url:"./2f4773e5baa22053ca4c.min.js",revision:null},{url:"./7a7635b01036d942810a.min.js",revision:null},{url:"./9beafb581cdeb48949a3.min.js",revision:null},{url:"./b25fff0298b33c64eab9.min.js",revision:null},{url:"./index.html",revision:"1a58e263741fc7589aee9353935eb2d4"}],{}),e.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[]}),"GET")}));
//# sourceMappingURL=service-worker.js.map
