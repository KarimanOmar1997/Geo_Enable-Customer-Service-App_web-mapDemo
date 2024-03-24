/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import n from"../Color.js";import{e as t}from"./vec4.js";import{f as r}from"./vec4f64.js";function o(n){return"h"in n&&"s"in n&&"v"in n}function u(n){return"l"in n&&"a"in n&&"b"in n}function a(n){return"l"in n&&"c"in n&&"h"in n}const e=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],c=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]];function i(n,t){const r=[];let o,u;if(n[0].length!==t.length)throw new Error("dimensions do not match");const a=n.length,e=n[0].length;let c=0;for(o=0;o<a;o++){for(c=0,u=0;u<e;u++)c+=n[o][u]*t[u];r.push(c)}return r}function s(n){const t=[n.r/255,n.g/255,n.b/255].map((n=>n<=.04045?n/12.92:((n+.055)/1.055)**2.4)),r=i(e,t);return{x:100*r[0],y:100*r[1],z:100*r[2]}}function f(n){const t=i(c,[n.x/100,n.y/100,n.z/100]).map((n=>{const t=n<=.0031308?12.92*n:1.055*n**(1/2.4)-.055;return Math.min(1,Math.max(t,0))}));return{r:Math.round(255*t[0]),g:Math.round(255*t[1]),b:Math.round(255*t[2])}}function h(n){const t=[n.x/95.047,n.y/100,n.z/108.883].map((n=>n>(6/29)**3?n**(1/3):1/3*(29/6)**2*n+4/29));return{l:116*t[1]-16,a:500*(t[0]-t[1]),b:200*(t[1]-t[2])}}function l(n){const t=n.l,r=[(t+16)/116+n.a/500,(t+16)/116,(t+16)/116-n.b/200].map((n=>n>6/29?n**3:3*(6/29)**2*(n-4/29)));return{x:95.047*r[0],y:100*r[1],z:108.883*r[2]}}function b(n){return function(n){return"r"in n&&"g"in n&&"b"in n}(n)?n:a(n)?function(n){return f(l(function(n){const t=n.l,r=n.c,o=n.h;return{l:t,a:r*Math.cos(o),b:r*Math.sin(o)}}(n)))}(n):u(n)?function(n){return f(l(n))}(n):function(n){return"x"in n&&"y"in n&&"z"in n}(n)?f(n):o(n)?function(n){const t=(n.h+360)%360/60,r=n.s/100,o=n.v/100*255,u=o*r,a=u*(1-Math.abs(t%2-1));let e;switch(Math.floor(t)){case 0:e={r:u,g:a,b:0};break;case 1:e={r:a,g:u,b:0};break;case 2:e={r:0,g:u,b:a};break;case 3:e={r:0,g:a,b:u};break;case 4:e={r:a,g:0,b:u};break;case 5:case 6:e={r:u,g:0,b:a};break;default:e={r:0,g:0,b:0}}return e.r=Math.round(e.r+o-u),e.g=Math.round(e.g+o-u),e.b=Math.round(e.b+o-u),e}(n):n}function g(n){return o(n)?n:function(n){const t=n.r,r=n.g,o=n.b,u=Math.max(t,r,o),a=u-Math.min(t,r,o);let e=u,c=0===a?0:u===t?(r-o)/a%6:u===r?(o-t)/a+2:(t-r)/a+4,i=0===a?0:a/e;return c<0&&(c+=6),c*=60,i*=100,e*=100/255,{h:c,s:i,v:e}}(b(n))}function M(n){return u(n)?n:function(n){return h(s(n))}(b(n))}function m(n){return a(n)?n:function(n){return function(n){const t=n.l,r=n.a,o=n.b,u=Math.sqrt(r*r+o*o);let a=Math.atan2(o,r);return a=a>0?a:a+2*Math.PI,{l:t,c:u,h:a}}(h(s(n)))}(b(n))}function d(n){return p(n).isBright?"light":"dark"}function p(t){let{r,g:o,b:u,a}=t;return a<1&&(r=Math.round(a*r+255*(1-a)),o=Math.round(a*o+255*(1-a)),u=Math.round(a*u+255*(1-a))),new n({r,g:o,b:u})}function k(n,t){const{r,g:o,b:u}=t?.ignoreAlpha?n:p(n);return.2126*r+.7152*o+.0722*u}var w;function x(t,r=w.High){return k(t,{ignoreAlpha:!0})>r?new n([0,0,0,t.a]):new n([255,255,255,t.a])}function v(n,t){const r=M(n);r.l*=1-t;const o=b(r),u=n.clone();return u.setColor(o),u.a=n.a,u}function y(n,t){const r=n.clone();return r.a*=t,r}function z(n,t){const r=g(n);r.s*=t;const o=b(r),u=n.clone();return u.setColor(o),u.a=n.a,u}function j(t){return n.toUnitRGBA(t)}function A(n,t){return n===t||null!=n&&n.equals(t)}function B(n,r){return n===r||null!=n&&null!=r&&t(n,r)}function C(n){return r(n[0],n[1],n[2],n.length>3?n[3]:1)}function H(t,r){const o=n.toUnitRGBA(t);return o[3]*=r,o}!function(n){n[n.Low=160]="Low",n[n.High=225]="High"}(w||(w={}));export{w as B,M as a,m as b,b as c,x as d,y as e,B as f,d as g,C as h,A as i,v as j,z as k,k as l,H as m,g as t,j as u};
