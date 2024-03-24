/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import t from"../request.js";import e from"../core/Error.js";import{isAbortError as r}from"../core/promiseUtils.js";import{dataComponents as a,b as n}from"../core/urlUtils.js";let i=null,o=!0;function s(t,e,r){if(!t||!e)throw new Error("Cannot construct image data without dimensions");if(o)try{return new ImageData(t,e)}catch(t){o=!1}return f(t,e,r)}function c(t,e,r,a){if(!e||!r)throw new Error("Cannot construct image data without dimensions");if(o)try{return new ImageData(t,e,r)}catch(t){o=!1}const n=f(e,r,a);return n.data.set(t,0),n}function f(t,e,r){return r||(i||(i=document.createElement("canvas"),i.width=1,i.height=1),r=i),r.getContext("2d").createImageData(t,e)}async function m(i,o){const{arrayBuffer:s,mediaType:c}=await async function(e,r){const i=a(e);if(i?.isBase64)return{arrayBuffer:n(i.data),mediaType:i.mediaType};const o=await t(e,{responseType:"array-buffer",...r});return{arrayBuffer:o.data,mediaType:o.getHeader("Content-Type")}}(i,o),f="image/png"===c;if("image/gif"===c){const{isAnimatedGIF:t,parseGif:e}=await import("./gif.js");if(t(s))return e(s,o)}if(f){const{isAnimatedPNG:t,parseApng:e}=await import("./apng.js");if(t(s))return e(s,o)}return async function(a,n){const i=window.URL.createObjectURL(a);try{const{data:e}=await t(i,{...n,responseType:"image"});return e}catch(t){if(!r(t))throw new e("invalid-image",`Could not fetch requested image at ${i}`);throw t}finally{window.URL.revokeObjectURL(i)}}(new Blob([s],{type:c}),o)}export{s as c,m as g,c as w};
