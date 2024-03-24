/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{i as t}from"./networkEnums.js";function r(r,i){if(null==r)return null;const e={},s=new RegExp(`^${i}`,"i");for(const n of Object.keys(r))if(s.test(n)){const s=n.substring(i.length);e[t.fromJSON(s)]=r[n]}return e}function i(r,i,e){if(null!=r){i.attributes||(i.attributes={});for(const s in r){const n=t.toJSON(s);i.attributes[`${e}${n}`]=r[s]}}}function e(r){const i={};for(const e of Object.keys(r)){const s=e;i[t.fromJSON(s)]=r[e]}return i}function s(r){const i={};for(const e of Object.keys(r)){const s=e;i[t.toJSON(s)]=r[e]}return i}function n(t,r){return null==t||null==r?null:Math.round((t-r)/6e4)}function o(t){const r=t.toJSON(),i=r;return i.accumulateAttributeNames&&=r.accumulateAttributeNames?.join(),i.attributeParameterValues&&=JSON.stringify(r.attributeParameterValues),i.barriers&&=JSON.stringify(r.barriers),i.outSR&&=r.outSR?.wkid,i.overrides&&=JSON.stringify(r.overrides),i.polygonBarriers&&=JSON.stringify(r.polygonBarriers),i.polylineBarriers&&=JSON.stringify(r.polylineBarriers),i.restrictionAttributeNames&&=r.restrictionAttributeNames?.join(),i.stops&&=JSON.stringify(r.stops),i.travelMode&&=JSON.stringify(r.travelMode),i}function a(t){const r=t.toJSON(),i=r;return i.accumulateAttributeNames&&=r.accumulateAttributeNames?.join(),i.attributeParameterValues&&=JSON.stringify(r.attributeParameterValues),i.barriers&&=JSON.stringify(r.barriers),i.facilities&&=JSON.stringify(r.facilities),i.incidents&&=JSON.stringify(r.incidents),i.outSR&&=r.outSR?.wkid,i.overrides&&=JSON.stringify(r.overrides),i.polygonBarriers&&=JSON.stringify(r.polygonBarriers),i.polylineBarriers&&=JSON.stringify(r.polylineBarriers),i.restrictionAttributeNames&&=r.restrictionAttributeNames?.join(),i.travelMode&&=JSON.stringify(r.travelMode),i}function u(t){const r=t.toJSON(),i=r;return i.accumulateAttributeNames&&=r.accumulateAttributeNames?.join(),i.attributeParameterValues&&=JSON.stringify(r.attributeParameterValues),i.barriers&&=JSON.stringify(r.barriers),i.defaultBreaks&&=r.defaultBreaks?.join(),i.excludeSourcesFromPolygons&&=r.excludeSourcesFromPolygons?.join(),i.facilities&&=JSON.stringify(r.facilities),i.outSR&&=r.outSR?.wkid,i.overrides&&=JSON.stringify(r.overrides),i.polygonBarriers&&=JSON.stringify(r.polygonBarriers),i.polylineBarriers&&=JSON.stringify(r.polylineBarriers),i.restrictionAttributeNames&&=r.restrictionAttributeNames?.join(),i.travelMode&&=JSON.stringify(r.travelMode),i}export{n as a,u as b,a as c,s as f,r as g,o as r,i as s,e as t};
