if(!self.define){let e,n={};const i=(i,s)=>(i=new URL(i+".js",s).href,n[i]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=n,document.head.appendChild(e)}else e=i,importScripts(i),n()})).then((()=>{let e=n[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,l)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(n[r])return;let o={};const t=e=>i(e,r),u={module:{uri:r},exports:o,require:t};n[r]=Promise.all(s.map((e=>u[e]||t(e)))).then((e=>(l(...e),o)))}}define(["./workbox-6c3e5c38"],(function(e){"use strict";e.setCacheNameDetails({prefix:"drawlots-4d67906"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"./25feb837031872076108.min.js",revision:null},{url:"./3a0336619a8f3b6a8ede.min.js",revision:null},{url:"./47c2fca7497c47aafe96.min.js",revision:null},{url:"./4f99bd4241e0a67eb653.min.js",revision:null},{url:"./6667800f41be784bce8b.min.js",revision:null},{url:"./9beafb581cdeb48949a3.min.js",revision:null},{url:"./ab0531189ff0b4c9e6ed.min.css",revision:null},{url:"./c79d25362bef109378ff.min.js",revision:null},{url:"./index.html",revision:"60d56afeaa311e7342ee0e784fb28b89"}],{}),e.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[]}),"GET")}));
//# sourceMappingURL=service-worker.js.map
