(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[593],{5997:function(e,t,n){Promise.resolve().then(n.bind(n,8838))},8838:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return page}});var u,o=n(9424),s=n(1087),c=n.n(s);let createStoreImpl=e=>{let t;let n=new Set,setState=(e,u)=>{let o="function"==typeof e?e(t):e;if(!Object.is(o,t)){let e=t;t=(null!=u?u:"object"!=typeof o)?o:Object.assign({},t,o),n.forEach(n=>n(t,e))}},getState=()=>t,u={setState,getState,subscribe:e=>(n.add(e),()=>n.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}};return t=e(setState,getState,u),u},createStore=e=>e?createStoreImpl(e):createStoreImpl;var i=n(3381),l=n(698);let{useSyncExternalStoreWithSelector:f}=l,createImpl=e=>{"function"!=typeof e&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");let t="function"==typeof e?createStore(e):e,useBoundStore=(e,n)=>(function(e,t=e.getState,n){let u=f(e.subscribe,e.getState,e.getServerState||e.getState,t,n);return(0,i.useDebugValue)(u),u})(t,e,n);return Object.assign(useBoundStore,t),useBoundStore},d=(u?createImpl(u):createImpl)(e=>({query:"",setQuery:t=>e(()=>({query:t}))}));var page=()=>{let{query:e,setQuery:t}=d();return(0,o.jsxs)("div",{className:"flex flex-col",children:[(0,o.jsx)("h1",{className:"text-4xl mb-4",children:"use zustand Page"}),(0,o.jsx)("input",{type:"text",className:"border",defaultValue:e,onChange:e=>t(e.target.value)}),(0,o.jsx)(c(),{href:"/end",children:"go to End Page"})]})}},8652:function(e,t,n){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u=n(3381),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},s=u.useState,c=u.useEffect,i=u.useLayoutEffect,l=u.useDebugValue;function r(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!o(e,n)}catch(e){return!0}}var f="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),u=s({inst:{value:n,getSnapshot:t}}),o=u[0].inst,f=u[1];return i(function(){o.value=n,o.getSnapshot=t,r(o)&&f({inst:o})},[e,n,t]),c(function(){return r(o)&&f({inst:o}),e(function(){r(o)&&f({inst:o})})},[e]),l(n),n};t.useSyncExternalStore=void 0!==u.useSyncExternalStore?u.useSyncExternalStore:f},1973:function(e,t,n){"use strict";/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u=n(3381),o=n(3916),s="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},c=o.useSyncExternalStore,i=u.useRef,l=u.useEffect,f=u.useMemo,d=u.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,n,u,o){var v=i(null);if(null===v.current){var S={hasValue:!1,value:null};v.current=S}else S=v.current;var b=c(e,(v=f(function(){function a(t){if(!i){if(i=!0,e=t,t=u(t),void 0!==o&&S.hasValue){var n=S.value;if(o(n,t))return c=n}return c=t}if(n=c,s(e,t))return n;var l=u(t);return void 0!==o&&o(n,l)?n:(e=t,c=l)}var e,c,i=!1,l=void 0===n?null:n;return[function(){return a(t())},null===l?void 0:function(){return a(l())}]},[t,n,u,o]))[0],v[1]);return l(function(){S.hasValue=!0,S.value=b},[b]),d(b),b}},3916:function(e,t,n){"use strict";e.exports=n(8652)},698:function(e,t,n){"use strict";e.exports=n(1973)}},function(e){e.O(0,[704,362,95,744],function(){return e(e.s=5997)}),_N_E=e.O()}]);