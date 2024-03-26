/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import e from"../core/Error.js";import{L as r}from"./Logger.js";import{b as t,u as a,a as n,c as o}from"./quantizationUtils.js";function s(s,u,c,m,l){if(null==s)return null;const p=s.referencesGeometry()&&l?function(s,u,c){const{transform:m,hasZ:l,hasM:p}=c;i.has(u)||i.set(u,function(s){const i={};switch(s){case"esriGeometryPoint":return(e,r,t,a)=>o(r,i,e,t,a);case"esriGeometryPolygon":return(e,r,t,a)=>n(r,i,e,t,a);case"esriGeometryPolyline":return(e,r,t,n)=>a(r,i,e,t,n);case"esriGeometryMultipoint":return(e,r,a,n)=>t(r,i,e,a,n);default:return r.getLogger("esri.views.2d.support.arcadeOnDemand").error(new e("mapview-arcade",`Unable to handle geometryType: ${s}`)),e=>e}}(u));const g=i.get(u)(s.geometry,m,l,p);return{...s,geometry:g}}(u,m,l):u,g=s.repurposeFeature(p);try{return s.evaluate({...c,$feature:g},s.services)}catch(e){return r.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",e),null}}const i=new Map;export{s as c};