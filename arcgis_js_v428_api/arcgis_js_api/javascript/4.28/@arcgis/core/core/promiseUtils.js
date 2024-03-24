/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{m as t}from"../chunks/handleUtils.js";import e from"./Error.js";import{L as r}from"../chunks/Logger.js";import{r as n}from"../chunks/maybe.js";import"./lang.js";import"../chunks/typedArrayUtil.js";import"../config.js";const o=(i=globalThis,{setTimeout:(e,r)=>{const n=i.setTimeout(e,r);return t((()=>i.clearTimeout(n)))}});var i;function s(t){return t&&("function"==typeof t.on||"function"==typeof t.addEventListener)}function u(e,r,n){if(!s(e))throw new TypeError("target is not a Evented or EventTarget object");if("on"in e)return e.on(r,n);if(Array.isArray(r)){const o=r.slice();for(const t of o)e.addEventListener(t,n);return t((()=>{for(const t of o)e.removeEventListener(t,n)}))}return e.addEventListener(r,n),t((()=>e.removeEventListener(r,n)))}function c(t,e,r){if(!s(t))throw new TypeError("target is not a Evented or EventTarget object");if("once"in t)return t.once(e,r);const n=u(t,e,(e=>{n.remove(),r.call(t,e)}));return n}function a(t,e,r){let n=!1;const o=u(t,e,(e=>{n||r.call(t,e)}));return{resume(){n=!1},pause(){n=!0},remove(){o.remove()}}}const l={Win:"Meta",Scroll:"ScrollLock",Spacebar:" ",Down:"ArrowDown",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Del:"Delete",Apps:"ContextMenu",Esc:"Escape",Multiply:"*",Add:"+",Subtract:"-",Decimal:".",Divide:"/"};function f({key:t}){return l[t]||t}async function m(t,e){const r=t.slice(),n=await Promise.all(t.map(((t,r)=>e(t,r))));return r.filter(((t,e)=>n[e]))}function p(t="Aborted"){return new e("AbortError",t)}function w(t,e="Aborted"){if(d(t))throw p(e)}function h(t){return null!=t?"aborted"in t?t:t.signal:t}function d(t){const e=h(t);return null!=e&&e.aborted}function v(t){if(A(t))throw t}function y(t){if(!A(t))throw t}function b(t,e){const r=h(t);if(null!=r){if(!r.aborted)return c(r,"abort",(()=>e()));e()}}function E(t,e){const r=h(t);if(null!=r)return w(r),c(r,"abort",(()=>e(p())))}function g(t,e){return null==h(e)?t:new Promise(((r,o)=>{let i=b(e,(()=>o(p())));const s=()=>{i=n(i)};t.then(s,s),t.then(r,o)}))}function j(t,r,n){return Promise.race([t,U(r).then((()=>{throw new e("timeout",`Did not resolve within ${r} milliseconds (${n??"timeout"})`)}))])}function A(t){return"AbortError"===t?.name}async function T(t){try{return await t}catch(t){if(!A(t))throw t;return}}async function L(t,e=r.getLogger("esri")){try{return await t}catch(t){A(t)||e.error(t)}}async function P(t){if(!t)return;if("function"!=typeof t.forEach){const e=Object.keys(t),r=e.map((e=>t[e])),n=await P(r),o={};return e.map(((t,e)=>o[t]=n[e])),o}const e=t;return Promise.allSettled(e).then((t=>Array.from(e,((e,r)=>{const n=t[r];return"fulfilled"===n.status?{promise:e,value:n.value}:{promise:e,error:n.reason}}))))}async function k(t){return(await P(t)).filter((t=>!!t.value)).map((t=>t.value))}async function D(t){return(await Promise.allSettled(t)).filter((t=>"fulfilled"===t.status)).map((t=>t.value))}async function S(t){return(await Promise.allSettled(t)).filter((t=>"rejected"===t.status)).map((t=>t.reason))}function U(t,e=void 0,r){const n=new AbortController;return b(r,(()=>n.abort())),new Promise(((r,o)=>{let i=setTimeout((()=>{i=0,r(e)}),t);b(n,(()=>{i&&(clearTimeout(i),o(p()))}))}))}function C(t,r,n,o){const i=n&&"abort"in n?n:null;null!=o||i||(o=n);let s=setTimeout((()=>{s=0,i?.abort()}),r);const u=()=>o||new e("promiseUtils:timeout","The wrapped promise did not resolve within "+r+" ms");return t.then((t=>{if(0===s)throw u();return clearTimeout(s),t}),(t=>{throw clearTimeout(s),0===s?u():t}))}function M(t){return t&&"function"==typeof t.then}function x(t){return M(t)?t:Promise.resolve(t)}function R(t,e=-1){let r,n,o,i,s=null;const u=(...c)=>{if(r){n=c,i&&i.reject(p()),i=$();const t=i.promise;if(s){const t=s;s=null,t.abort()}return t}if(o=i||$(),i=null,e>0){const n=new AbortController;r=x(t(...c,n.signal));const o=r;U(e).then((()=>{r===o&&(i?n.abort():s=n)}))}else r=1,r=x(t(...c));const a=()=>{const t=n;n=o=r=s=null,null!=t&&u(...t)},l=r,f=o;return l.then(a,a),l.then(f.resolve,f.reject),f.promise};return u}function $(){let t,e;const r=new Promise(((r,n)=>{t=r,e=n})),n=e=>{t(e)};return n.resolve=e=>t(e),n.reject=t=>e(t),n.timeout=(t,e)=>o.setTimeout((()=>n.reject(e)),t),n.promise=r,n}function O(t,e){return t.then(e,e)}function W(t,e){e.then(t.resolve,t.reject)}async function q(t){await Promise.resolve(),w(t)}export{c as a,U as after,S as allSettledErrors,D as allSettledValues,O as always,o as c,p as createAbortError,$ as createResolver,R as debounce,f as e,P as eachAlways,k as eachAlwaysValues,m as filter,s as i,T as ignoreAbortErrors,A as isAbortError,d as isAborted,M as isPromiseLike,L as logOnError,u as o,b as onAbort,E as onAbortOrThrow,a as p,W as settleWithPromise,v as throwIfAbortError,w as throwIfAborted,y as throwIfNotAbortError,C as timeout,q as waitTick,x as when,g as whenOrAbort,j as whenOrTimeout};
