import{h as m,p as c}from"./hooks.module.ee390651.js";import{p as f}from"./page.9d55ce90.js";import{S as o}from"./spinner.164b1eeb.js";import{o as n}from"./jsxRuntime.module.760e3403.js";import"./preact.module.e54f245b.js";function u(e,t,l){let r=new Set([...t,void 0]);return e.listen((s,i)=>{r.has(i)&&l(s,i)})}function d(e,t={}){let[,l]=m({});return c(()=>{let r,s,i,a=()=>{r||(r=1,s=setTimeout(()=>{r=void 0,l({})}))};return t.keys?i=u(e,t.keys,a):i=e.listen(a),()=>{i(),clearTimeout(s)}},[e,""+t.keys]),e.get()}function w(){const e=d(f);return e?n("div",{children:n("div",{className:"fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-white bg-opacity-75",children:n("div",{class:"flex  items-center justify-center rounded-md border bg-white px-4 py-2 ",children:[n("img",{src:o,alt:"Loading",className:"h-4 w-4 animate-spin fill-blue-600 text-gray-200 sm:h-4 sm:w-4"}),n("h1",{className:"ml-2",children:[e,n("span",{className:"animate-pulse",children:"..."})]})]})})}):null}export{w as PageProgress};
