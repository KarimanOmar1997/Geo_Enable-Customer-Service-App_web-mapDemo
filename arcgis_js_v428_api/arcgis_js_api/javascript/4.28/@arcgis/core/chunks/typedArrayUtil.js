/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let e;function t(t){return"function"==typeof e[t]?e[t]=e[t](globalThis):e[t]}e=globalThis.dojoConfig?.has||globalThis.esriConfig?.has?{...globalThis.dojoConfig?.has,...globalThis.esriConfig?.has}:{},t.add=(r,n,a,o)=>((o||void 0===e[r])&&(e[r]=n),a&&t(r)),t.cache=e,t.add("big-integer-warning-enabled",!0),t.add("esri-deprecation-warnings",!0),t.add("esri-tests-disable-screenshots",!1),t.add("esri-tests-use-full-window",!1),t.add("esri-tests-post-to-influx",!0),(()=>{t.add("host-webworker",void 0!==globalThis.WorkerGlobalScope&&self instanceof globalThis.WorkerGlobalScope);const e="undefined"!=typeof window&&"undefined"!=typeof location&&"undefined"!=typeof document&&window.location===location&&window.document===document;if(t.add("host-browser",e),t.add("host-node","object"==typeof globalThis.process&&globalThis.process.versions?.node&&globalThis.process.versions.v8),t.add("dom",e),t("host-browser")){const e=navigator,r=e.userAgent,n=e.appVersion,a=parseFloat(n);if(t.add("wp",parseFloat(r.split("Windows Phone")[1])||void 0),t.add("msapp",parseFloat(r.split("MSAppHost/")[1])||void 0),t.add("khtml",n.includes("Konqueror")?a:void 0),t.add("edge",parseFloat(r.split("Edge/")[1])||void 0),t.add("opr",parseFloat(r.split("OPR/")[1])||void 0),t.add("webkit",!t("wp")&&!t("edge")&&parseFloat(r.split("WebKit/")[1])||void 0),t.add("chrome",!t("edge")&&!t("opr")&&parseFloat(r.split("Chrome/")[1])||void 0),t.add("android",!t("wp")&&parseFloat(r.split("Android ")[1])||void 0),t.add("safari",!n.includes("Safari")||t("wp")||t("chrome")||t("android")||t("edge")||t("opr")?void 0:parseFloat(n.split("Version/")[1])),t.add("mac",n.includes("Macintosh")),!t("wp")&&/(iPhone|iPod|iPad)/.test(r)){const e=RegExp.$1.replace(/P/,"p"),n=/OS ([\d_]+)/.test(r)?RegExp.$1:"1",a=parseFloat(n.replace(/_/,".").replaceAll("_",""));t.add(e,a),t.add("ios",a)}t("webkit")||(!r.includes("Gecko")||t("wp")||t("khtml")||t("edge")||t.add("mozilla",a),t("mozilla")&&t.add("ff",parseFloat(r.split("Firefox/")[1]||r.split("Minefield/")[1])||void 0))}})(),(()=>{if(globalThis.navigator){const e=navigator.userAgent,r=/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini|IEMobile/i.test(e),n=/iPhone/i.test(e);r&&t.add("esri-mobile",r),n&&t.add("esri-iPhone",n),t.add("esri-geolocation",!!navigator.geolocation)}t.add("esri-wasm","WebAssembly"in globalThis),t.add("esri-performance-mode-frames-between-render",20),t.add("esri-force-performance-mode",!1),t.add("esri-shared-array-buffer",(()=>{const e="SharedArrayBuffer"in globalThis,t=!1===globalThis.crossOriginIsolated;return e&&!t})),t.add("wasm-simd",(()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11])))),t.add("esri-atomics","Atomics"in globalThis),t.add("esri-workers","Worker"in globalThis),t.add("web-feat:cache","caches"in globalThis),t.add("esri-workers-arraybuffer-transfer",!t("safari")||Number(t("safari"))>=12),t.add("workers-pool-size",8),t.add("featurelayer-simplify-thresholds",[.5,.5,.5,.5]),t.add("featurelayer-simplify-payload-size-factors",[1,1,4]),t.add("featurelayer-animation-enabled",!0),t.add("featurelayer-snapshot-enabled",!0),t.add("featurelayer-snapshot-point-min-threshold",8e4),t.add("featurelayer-snapshot-point-max-threshold",4e5),t.add("featurelayer-snapshot-point-coverage",.1),t.add("featurelayer-advanced-symbols",!1),t.add("featurelayer-pbf",!0),t.add("featurelayer-pbf-statistics",!1),t.add("feature-layers-workers",!0),t.add("feature-polyline-generalization-factor",1),t.add("mapview-transitions-duration",200),t.add("mapview-srswitch-adjust-rotation-scale-threshold",24e6),t.add("mapserver-pbf-version-support",10.81),t.add("mapservice-popup-identify-max-tolerance",20),t.add("heatmap-allow-raster-fallback",!1),t.add("heatmap-force-raster",!1),t("host-webworker")||t("host-browser")&&(t.add("esri-csp-restrictions",(()=>{try{new Function}catch{return!0}return!1})),t.add("esri-image-decode",(()=>{if("decode"in new Image){const e=new Image;return e.src='data:image/svg+xml;charset=UTF-8,<svg version="1.1" xmlns="http://www.w3.org/2000/svg"></svg>',void e.decode().then((()=>{t.add("esri-image-decode",!0,!0,!0)})).catch((()=>{t.add("esri-image-decode",!1,!0,!0)}))}return!1})),t.add("esri-url-encodes-apostrophe",(()=>{const e=window.document.createElement("a");return e.href="?'",e.href.includes("?%27")})))})();class r{constructor(e=1){this._seed=e}set seed(e){this._seed=e??Math.random()*r._m}getInt(){return this._seed=(r._a*this._seed+r._c)%r._m,this._seed}getFloat(){return this.getInt()/(r._m-1)}getIntRange(e,t){return Math.round(this.getFloatRange(e,t))}getFloatRange(e,t){const n=t-e;return e+this.getInt()/r._m*n}}r._m=2147483647,r._a=48271,r._c=0;const n=1.5,a=1/1.5,o=.5;function s(e,t){if(!t)return e;for(const r of t)e.push(r);return e}function i(e){if(!e)return;const t=e.length;return t>0?e[t-1]:void 0}function d(e){return e}function l(e,t=d){return function(e,t=d){if(!e||0===e.length)return;let r=e[0],n=t(r);for(let a=1;a<e.length;++a){const o=e[a],s=Number(t(o));s>n&&(n=s,r=o)}return r}(e,(e=>-t(e)))}function c(e,t){return t?e.filter(((e,r,n)=>n.findIndex(t.bind(null,e))===r)):Array.from(new Set(e))}function u(e,t,r){if(null==e&&null==t)return!0;if(null==e||null==t||e.length!==t.length)return!1;if(r){for(let n=0;n<e.length;n++)if(!r(e[n],t[n]))return!1}else for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}function f(e,t){let r=e.length!==t.length;r&&(e.length=t.length);for(let n=0;n<t.length;++n)e[n]!==t[n]&&(e[n]=t[n],r=!0);return r}function h(e,t,r){let n,a;return r?(n=t.filter((t=>!e.some((e=>r(e,t))))),a=e.filter((e=>!t.some((t=>r(t,e)))))):(n=t.filter((t=>!e.includes(t))),a=e.filter((e=>!t.includes(e)))),{added:n,removed:a}}function p(e){return e&&"number"==typeof e.length}function g(e,t){const r=e.length;if(0===r)return[];const n=[];for(let a=0;a<r;a+=t)n.push(e.slice(a,a+t));return n}const m=!!Array.prototype.fill;function b(e,t){if(m)return new Array(e).fill(t);const r=new Array(e);for(let n=0;n<e;n++)r[n]=t;return r}function w(e,t){void 0===t&&(t=e,e=0);const r=new Array(t-e);for(let n=e;n<t;n++)r[n-e]=n;return r}function y(e,t,r){const n=e.length;let a=0,o=n-1;for(;a<o;){const r=a+Math.floor((o-a)/2);t>e[r]?a=r+1:o=r}const s=e[a];return r?t>=e[n-1]?-1:s===t?a:a-1:s===t?a:-1}function v(e,t,r){if(!e||0===e.length)return;const n=e.length-1,a=e[0];if(t<=r(a))return a;const o=e[n];if(t>=r(o))return o;let s=0,i=0,d=n;for(;s<d;){i=s+Math.floor((d-s)/2);const a=e[i],o=r(a);if(o===t)return a;if(t<o){if(i>0){const n=e[i-1],s=r(n);if(t>s)return t-s>=o-t?a:n}d=i}else{if(i<n){const n=e[i+1],s=r(n);if(t<s)return t-o>=s-t?n:a}s=i+1}}return e[i]}class A{constructor(){this.last=0}}const F=new A;function k(e,t,r,n){n=n||F;const a=Math.max(0,n.last-10);for(let o=a;o<r;++o)if(e[o]===t)return n.last=o,o;const o=Math.min(a,r);for(let r=0;r<o;++r)if(e[r]===t)return n.last=r,r;return-1}function T(e,t,r,n){const a=r??e.length,o=k(e,t,a,n);if(-1!==o)return e[o]=e[a-1],null==r&&e.pop(),t}const M=new Set;function _(e,t,r=e.length,n=t.length,a,o){if(0===n||0===r)return r;M.clear();for(let e=0;e<n;++e)M.add(t[e]);a=a||F;const s=Math.max(0,a.last-10);for(let t=s;t<r;++t)if(M.has(e[t])&&(o?.push(e[t]),M.delete(e[t]),e[t]=e[r-1],--r,--t,0===M.size||0===r))return M.clear(),r;for(let t=0;t<s;++t)if(M.has(e[t])&&(o?.push(e[t]),M.delete(e[t]),e[t]=e[r-1],--r,--t,0===M.size||0===r))return M.clear(),r;return M.clear(),r}function x(e,t){let r=0;for(let n=0;n<e.length;++n){const a=e[n];t(a,n)&&(e[r]=a,r++)}e.length=r}function P(e,t,r){const n=e.length;if(t>=n)return e.slice(0);const a=I(r),o=new Set,s=[];for(;s.length<t;){const t=Math.floor(a()*n);o.has(t)||(o.add(t),s.push(e[t]))}return s}function I(e){return e?(O.seed=e,()=>O.getFloat()):Math.random}function S(e,t){const r=I(t);for(let t=e.length-1;t>0;t--){const n=Math.floor(r()*(t+1)),a=e[t];e[t]=e[n],e[n]=a}return e}const O=new r;function z(e,t){const r=e.indexOf(t);return-1!==r?(e.splice(r,1),t):null}function W(e,t){const r=new Map,n=e.length;for(let a=0;a<n;a++){const n=e[a],o=t(n,a,e),s=r.get(o);s?s.push(n):r.set(o,[n])}return r}function C(e,t){return null!=e}const R=[];function U(e){return 32+e.length}function j(){return 16}function E(e){if(!e)return 0;let t=N;for(const r in e)if(e.hasOwnProperty(r)){const n=e[r];switch(typeof n){case"string":t+=U(n);break;case"number":t+=16;break;case"boolean":t+=4}}return t}function B(e){if(!e)return 0;if(Array.isArray(e))return function(e){const t=e.length;if(0===t||"number"==typeof e[0])return 32+8*t;let r=V;for(let n=0;n<t;n++)r+=G(e[n]);return r}(e);let t=N;for(const r in e)e.hasOwnProperty(r)&&(t+=G(e[r]));return t}function G(e){switch(typeof e){case"object":return B(e);case"string":return U(e);case"number":return 16;case"boolean":return 4;default:return 8}}function K(e,t){return V+e.length*t}const N=32,V=32;function q(e){return e instanceof ArrayBuffer}function H(e){return"Int8Array"===e?.constructor?.name}function L(e){return"Uint8Array"===e?.constructor?.name}function $(e){return"Uint8ClampedArray"===e?.constructor?.name}function D(e){return"Int16Array"===e?.constructor?.name}function J(e){return"Uint16Array"===e?.constructor?.name}function Q(e){return"Int32Array"===e?.constructor?.name}function X(e){return"Uint32Array"===e?.constructor?.name}function Y(e){return"Float32Array"===e?.constructor?.name}function Z(e){return"Float64Array"===e?.constructor?.name}function ee(e){return!("buffer"in e)}function te(...e){return e.reduce(((e,t)=>e+(t?ee(t)?K(t,16):t.byteLength+re:0)),0)}const re=145,ne=1024;function ae(e){return Z(e)||Y(e)||Q(e)||D(e)||H(e)}function oe(e){return Z(e)||Y(e)}function se(e){return Z(e)?179769e303:Y(e)?3402823e32:X(e)?4294967295:J(e)?65535:L(e)||$(e)?255:Q(e)?2147483647:D(e)?32767:H(e)?127:256}export{re as A,f as B,x as C,E as D,h as E,n as F,R as G,o as H,a as I,oe as J,se as K,ae as L,B as M,w as N,s as O,A as P,l as Q,r as R,v as S,i as T,K as U,W as V,U as W,j as X,S as Y,H as a,L as b,$ as c,D as d,J as e,Q as f,X as g,t as h,C as i,Y as j,Z as k,u as l,k as m,_ as n,T as o,ne as p,ee as q,z as r,y as s,g as t,te as u,b as v,q as w,c as x,P as y,p as z};
