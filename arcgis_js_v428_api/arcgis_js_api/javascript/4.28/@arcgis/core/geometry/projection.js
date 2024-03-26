/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import n from"../core/Error.js";import{throwIfAborted as e,waitTick as r}from"../core/promiseUtils.js";import{t}from"../chunks/tracking.js";import{S as o}from"../chunks/SimpleObservable.js";import{c as s}from"../chunks/vec3f64.js";import{l as i,p as l,k as u,f as a,m as c,n as p,o as m}from"../chunks/unitUtils.js";import f from"./Extent.js";import h from"./Multipoint.js";import j from"./Point.js";import d from"./Polygon.js";import g from"./Polyline.js";import y from"./SpatialReference.js";import{p as k,g as R,a as x,b as w}from"../chunks/projectBuffer.js";import b from"./support/GeographicTransformation.js";import{g as M}from"../chunks/zscale.js";import"../core/lang.js";import"../chunks/typedArrayUtil.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/handleUtils.js";import"../chunks/maybe.js";import"../chunks/utils.js";import"../chunks/ObservableBase.js";import"../chunks/jsonMap.js";import"../chunks/Ellipsoid.js";import"../chunks/assets.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/JSONSupport.js";import"../chunks/tslib.es6.js";import"../core/Accessor.js";import"../core/Handles.js";import"../core/accessorSupport/decorators/subclass.js";import"../chunks/metadata.js";import"../chunks/ensureType.js";import"../core/accessorSupport/decorators/property.js";import"../chunks/ObjectPool.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../chunks/PooledArray.js";import"../chunks/time.js";import"./Geometry.js";import"../chunks/reader.js";import"../chunks/writer.js";import"./support/webMercatorUtils.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/zmUtils.js";import"../chunks/Axis.js";import"../chunks/extentUtils.js";import"../chunks/aaBoundingRect.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/common.js";import"../chunks/geodesicConstants.js";import"./support/GeographicTransformationStep.js";function P(n,e,r,t,o,s){return S[0]=n,S[1]=e,S[2]=r,k(S,t,0,o,s,0,1)}const S=s();let z=null,v=null,A=null,T={};const Z=new o;function E(){return!!z&&m()}function G(){return!!E()||(t(Z),O(),!1)}function O(n){return null==A&&(A=Promise.all([i(),import("../chunks/geometryEngineBase.js").then((n=>n.g)),import("../chunks/hydrated.js")])),A.then((([,r,{hydratedAdapter:t}])=>{e(n),v=t,z=r.default,z._enableProjection(l),Z.notify()}))}function U(n,e,r=null,t=null){return Array.isArray(n)?0===n.length?[]:_(v,n,n[0].spatialReference,e,r,t):_(v,[n],n.spatialReference,e,r,t)[0]}function _(n,e,r,t,o=null,s=null){if(null==r||null==t)return e;if(D(r,t,o))return e.map((n=>I(n,r,t)));if(null==o&&u(r))return e.map((n=>I(n,r,y.WGS84))).map((n=>K(n,t)));if(null==o&&u(t))return e.map((n=>K(n,y.WGS84))).map((n=>I(n,y.WGS84,t)));if(null==o){const n=b.cacheKey(r,t);void 0!==T[n]?o=T[n]:(null==(o=B(r,t,void 0))&&(o=new b),T[n]=o)}if(null==z||null==n)throw new q;return null!=s?z._project(n,e,r,t,o,s):z._project(n,e,r,t,o)}function L(n,e){const r=W([n],e);return null!=r.pending?{pending:r.pending,geometry:null}:null!=r.geometries?{pending:null,geometry:r.geometries[0]}:{pending:null,geometry:null}}function W(n,e){if(!E())for(const r of n)if(null!=r&&!a(r.spatialReference,e)&&c(r.spatialReference)&&c(e)&&!D(r.spatialReference,e))return t(Z),{pending:O(),geometries:null};return{pending:null,geometries:n.map((n=>null==n?null:a(n.spatialReference,e)?n:c(n.spatialReference)&&c(e)?K(n,e):null))}}function B(n,e,r=null){if(null==n||null==e)return null;if(null==z||null==v)throw new q;const t=z._getTransformation(v,n,e,r,r?.spatialReference);return null!==t?b.fromGE(t):null}function C(n,e,r=null){if(null==z||null==v)throw new q;const t=z._getTransformationBySuitability(v,n,e,r,r?.spatialReference);if(null!==t){const n=[];for(const e of t)n.push(b.fromGE(e));return n}return[]}class q extends n{constructor(){super("projection:not-loaded","projection engine not fully loaded yet, please call load()")}}function H(){z=null,v=null,A=null,T={}}const J={get loadPromise(){return A}};function K(n,e){try{const r=U(n,e);if(null==r)return null;"xmin"in n&&"xmin"in r&&(r.zmin=n.zmin,r.zmax=n.zmax);const t=M(r.type,n.spatialReference,e);return null!=t&&t(r),r}catch(n){if(!(n instanceof q))throw n;return null}}async function N(n,e,r){const t=n.spatialReference;return null!=t&&null!=e&&await F(t,e,null,r),K(n,e)}function D(n,e,r){return!r&&(!!a(n,e)||c(n)&&c(e)&&!!R(n,e,w))}async function F(n,e,t,o){if(E())return r(o);if(Array.isArray(n)){for(const{source:e,dest:r,geographicTransformation:t}of n)if(!D(e,r,t))return O(o)}else if(!D(n,e,t))return O(o);return r(o)}function I(n,e,r){return n?"x"in n?V(n,e,new j,r,0):"xmin"in n?on(n,e,new f,r,0):"rings"in n?rn(n,e,new d,r,0):"paths"in n?nn(n,e,new g,r,0):"points"in n?Y(n,e,new h,r,0):null:null}function Q(n,e,r=e.spatialReference,t=0){return null!=r&&null!=n.spatialReference&&null!=V(n,n.spatialReference,e,r,t)}function V(n,e,r,t,o){un[0]=n.x,un[1]=n.y;const s=n.z;return un[2]=void 0!==s?s:o,k(un,e,0,un,t,0,1)?(r.x=un[0],r.y=un[1],r.spatialReference=t,void 0!==s||p(t)?(r.z=un[2],r.hasZ=!0):(r.z=void 0,r.hasZ=!1),void 0===n.m?(r.m=void 0,r.hasM=!1):(r.m=n.m,r.hasM=!0),r):null}function X(n,e,r=e.spatialReference,t=0){return null!=n.spatialReference&&null!=r&&null!=Y(n,n.spatialReference,e,r,t)}function Y(n,e,r,t,o){const{points:s,hasZ:i,hasM:l}=n,u=[],a=s.length,c=[];for(const n of s)c.push(n[0],n[1],i?n[2]:o);if(!k(c,e,0,c,t,0,a))return null;const m=i||p(t);for(let n=0;n<a;++n){const e=3*n,r=c[e],t=c[e+1];m&&l?u.push([r,t,c[e+2],s[n][3]]):m?u.push([r,t,c[e+2]]):l?u.push([r,t,s[n][2]]):u.push([r,t])}return r.points=u,r.spatialReference=t,r.hasZ=i,r.hasM=l,r}function $(n,e,r=e.spatialReference,t=0){return null!=n.spatialReference&&null!=r&&null!=nn(n,n.spatialReference,e,r,t)}function nn(n,e,r,t,o){const{paths:s,hasZ:i,hasM:l}=n,u=[];if(!sn(s,i??!1,l??!1,e,u,t,o))return null;const a=i||p(t);return r.paths=u,r.spatialReference=t,r.hasZ=a,r.hasM=l,r}function en(n,e,r=e.spatialReference,t=0){return null!=n.spatialReference&&null!=r&&null!=rn(n,n.spatialReference,e,r,t)}function rn(n,e,r,t,o){const{rings:s,hasZ:i,hasM:l}=n,u=[];if(!sn(s,i??!1,l??!1,e,u,t,o))return null;const a=i||p(t);return r.rings=u,r.spatialReference=t,r.hasZ=a,r.hasM=l,r}function tn(n,e,r=e.spatialReference,t=0){return null!=n.spatialReference&&null!=r&&null!=on(n,n.spatialReference,e,r,t)}function on(n,e,r,t,o){const{xmin:s,ymin:i,xmax:l,ymax:u,hasZ:a,hasM:c}=n;if(!P(s,i,a?n.zmin:o,e,un,t))return null;const m=a||p(t);return r.xmin=un[0],r.ymin=un[1],m&&(r.zmin=un[2]),P(l,u,a?n.zmax:o,e,un,t)?(r.xmax=un[0],r.ymax=un[1],m&&(r.zmax=un[2]),c&&(r.mmin=n.mmin,r.mmax=n.mmax),r.spatialReference=t,r):null}function sn(n,e,r,t,o,s,i=0){const l=new Array;for(const r of n)for(const n of r)l.push(n[0],n[1],e?n[2]:i);if(!k(l,t,0,l,s,0,l.length/3))return!1;let u=0;o.length=0;const a=e||p(s);for(const e of n){const n=new Array;for(const t of e)a&&r?n.push([l[u++],l[u++],l[u++],t[3]]):a?n.push([l[u++],l[u++],l[u++]]):r?(n.push([l[u++],l[u++],t[2]]),u++):(n.push([l[u++],l[u++]]),u++);o.push(n)}return!0}function ln(n){return null!=n&&null!=x(n)}const un=s(),an=Object.freeze(Object.defineProperty({__proto__:null,canProjectToWGS84ComparableLonLat:ln,canProjectWithoutEngine:D,getTransformation:B,getTransformations:C,initializeProjection:F,isLoaded:E,isLoadedOrLoad:G,load:O,project:U,projectExtent:tn,projectMany:_,projectMultipoint:X,projectOrLoad:L,projectOrLoadMany:W,projectPoint:Q,projectPolygon:en,projectPolyline:$,projectWithZConversion:N,projectWithoutEngine:I,test:J,tryProjectWithZConversion:K,unload:H},Symbol.toStringTag,{value:"Module"}));export{an as a,ln as canProjectToWGS84ComparableLonLat,D as canProjectWithoutEngine,B as getTransformation,C as getTransformations,F as initializeProjection,E as isLoaded,G as isLoadedOrLoad,O as load,P as p,U as project,tn as projectExtent,_ as projectMany,X as projectMultipoint,L as projectOrLoad,W as projectOrLoadMany,Q as projectPoint,en as projectPolygon,$ as projectPolyline,N as projectWithZConversion,I as projectWithoutEngine,J as test,K as tryProjectWithZConversion,H as unload};