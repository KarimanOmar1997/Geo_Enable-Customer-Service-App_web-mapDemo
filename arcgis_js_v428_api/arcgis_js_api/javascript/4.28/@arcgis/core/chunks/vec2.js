/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{g as t}from"./common.js";function n(t,n){return t[0]=n[0],t[1]=n[1],t}function a(t,n,a){return t[0]=n,t[1]=a,t}function s(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t}function r(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t}function u(t,n,a){return t[0]=Math.min(n[0],a[0]),t[1]=Math.min(n[1],a[1]),t}function o(t,n,a){return t[0]=Math.max(n[0],a[0]),t[1]=Math.max(n[1],a[1]),t}function c(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t}function e(t,n,a,s){return t[0]=n[0]+a[0]*s,t[1]=n[1]+a[1]*s,t}function i(t,n){const a=n[0]-t[0],s=n[1]-t[1];return Math.sqrt(a*a+s*s)}function f(t,n){const a=n[0]-t[0],s=n[1]-t[1];return a*a+s*s}function h(t){const n=t[0],a=t[1];return Math.sqrt(n*n+a*a)}function M(t){const n=t[0],a=t[1];return n*n+a*a}function m(t,n){return t[0]=-n[0],t[1]=-n[1],t}function b(t,n){const a=n[0],s=n[1];let r=a*a+s*s;return r>0&&(r=1/Math.sqrt(r),t[0]=n[0]*r,t[1]=n[1]*r),t}function q(t,n){return t[0]*n[0]+t[1]*n[1]}function x(t,n,a){const s=n[0]*a[1]-n[1]*a[0];return t[0]=t[1]=0,t[2]=s,t}function l(t,n,a,s){const r=n[0],u=n[1];return t[0]=r+s*(a[0]-r),t[1]=u+s*(a[1]-u),t}function p(t,n,a){const s=n[0],r=n[1];return t[0]=a[0]*s+a[2]*r,t[1]=a[1]*s+a[3]*r,t}function g(t,n,a){const s=n[0],r=n[1];return t[0]=a[0]*s+a[2]*r+a[4],t[1]=a[1]*s+a[3]*r+a[5],t}function j(t,n,a,s){const r=n[0]-a[0],u=n[1]-a[1],o=Math.sin(s),c=Math.cos(s);return t[0]=r*c-u*o+a[0],t[1]=r*o+u*c+a[1],t}function d(t,n){const a=t[0],s=t[1],r=n[0],u=n[1];let o=a*a+s*s;o>0&&(o=1/Math.sqrt(o));let c=r*r+u*u;c>0&&(c=1/Math.sqrt(c));const e=(a*r+s*u)*o*c;return e>1?0:e<-1?Math.PI:Math.acos(e)}function k(t,n){return t[0]===n[0]&&t[1]===n[1]}function v(n,a){const s=n[0],r=n[1],u=a[0],o=a[1],c=t();return Math.abs(s-u)<=c*Math.max(1,Math.abs(s),Math.abs(u))&&Math.abs(r-o)<=c*Math.max(1,Math.abs(r),Math.abs(o))}function w(t,n,a,s,r){let u=n[0]-a[0],o=n[1]-a[1];const c=(s[0]*u+s[1]*o)*(r-1);return u=s[0]*c,o=s[1]*c,t[0]=n[0]+u,t[1]=n[1]+o,t}const y=r,z=i;export{r as a,M as b,e as c,q as d,i as e,a as f,y as g,h,s as i,c as j,m as k,l,x as m,b as n,n as o,v as p,w as q,j as r,f as s,g as t,z as u,k as v,p as w,d as x,u as y,o as z};
