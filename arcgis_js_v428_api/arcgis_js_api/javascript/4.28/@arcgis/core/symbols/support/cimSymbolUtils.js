/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import e from"../../Color.js";import{t,i as o,a as r,b as s,c as n,f as a}from"../../chunks/utils9.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";import"../../chunks/ensureType.js";import"../../chunks/typedArrayUtil.js";import"../../chunks/Logger.js";import"../../config.js";import"../../core/lang.js";function i(e){const n=t(e);if("CIMTextSymbol"===n?.type)return n.height??0;let a=0;if(n?.symbolLayers)for(const e of n.symbolLayers)o(e)&&null!=e.size&&e.size>a?a=e.size:r(e)&&null!=e.width&&e.width>a?a=e.width:s(e);return a}function c(e,o,r){if(!e)return;const s=t(e),n=i(e);0!==n?f(s,o/n,!1,r):function(e,t){if(e)if("CIMTextSymbol"!==e.type){if(e.symbolLayers)for(const o of e.symbolLayers)switch(o.type){case"CIMPictureMarker":case"CIMVectorMarker":o.size=t;break;case"CIMPictureStroke":case"CIMSolidStroke":o.width=t}}else e.height=t}(s,o)}function f(e,t,o,r){if(e)if("CIMTextSymbol"!==e.type){if(o&&e.effects)for(const o of e.effects)m(o,t);if(e.symbolLayers)for(const o of e.symbolLayers)switch(o.type){case"CIMPictureMarker":case"CIMVectorMarker":l(o,t,r);break;case"CIMPictureStroke":case"CIMSolidStroke":!r?.preserveOutlineWidth&&o.width&&(o.width*=t);break;case"CIMPictureFill":o.height&&(o.height*=t),o.offsetX&&(o.offsetX*=t),o.offsetY&&(o.offsetY*=t);break;case"CIMHatchFill":f(o.lineSymbol,t,!0,{...r,preserveOutlineWidth:!1}),o.offsetX&&(o.offsetX*=t),o.offsetY&&(o.offsetY*=t),o.separation&&(o.separation*=t)}}else null!=e.height&&(e.height*=t)}function l(e,t,o){if(e&&(e.markerPlacement&&function(e,t){switch(n(e)&&e.offset&&(e.offset*=t),e.type){case"CIMMarkerPlacementAlongLineRandomSize":case"CIMMarkerPlacementAlongLineSameSize":if(e.customEndingOffset&&(e.customEndingOffset*=t),e.offsetAlongLine&&(e.offsetAlongLine*=t),e.placementTemplate&&e.placementTemplate.length){const o=e.placementTemplate.map((e=>e*t));e.placementTemplate=o}break;case"CIMMarkerPlacementAlongLineVariableSize":if(e.maxRandomOffset&&(e.maxRandomOffset*=t),e.placementTemplate&&e.placementTemplate.length){const o=e.placementTemplate.map((e=>e*t));e.placementTemplate=o}break;case"CIMMarkerPlacementOnLine":e.startPointOffset&&(e.startPointOffset*=t);break;case"CIMMarkerPlacementAtExtremities":e.offsetAlongLine&&(e.offsetAlongLine*=t);break;case"CIMMarkerPlacementAtMeasuredUnits":case"CIMMarkerPlacementOnVertices":break;case"CIMMarkerPlacementAtRatioPositions":e.beginPosition&&(e.beginPosition*=t),e.endPosition&&(e.endPosition*=t);break;case"CIMMarkerPlacementPolygonCenter":e.offsetX&&(e.offsetX*=t),e.offsetY&&(e.offsetY*=t);break;case"CIMMarkerPlacementInsidePolygon":e.offsetX&&(e.offsetX*=t),e.offsetY&&(e.offsetY*=t),e.stepX&&(e.stepX*=t),e.stepY&&(e.stepY*=t)}}(e.markerPlacement,t),e.offsetX&&(e.offsetX*=t),e.offsetY&&(e.offsetY*=t),e.anchorPoint&&"Absolute"===e.anchorPointUnits&&(e.anchorPoint={x:e.anchorPoint.x*t,y:e.anchorPoint.y*t}),e.size=null!=e.size?e.size*t:0,"CIMVectorMarker"===e.type&&e.markerGraphics))for(const r of e.markerGraphics)e.scaleSymbolsProportionally||f(r.symbol,t,!0,o)}function m(e,t){switch(e.type){case"CIMGeometricEffectArrow":case"CIMGeometricEffectDonut":e.width&&(e.width*=t);break;case"CIMGeometricEffectBuffer":e.size&&(e.size*=t);break;case"CIMGeometricEffectCut":e.beginCut&&(e.beginCut*=t),e.endCut&&(e.endCut*=t),e.middleCut&&(e.middleCut*=t);break;case"CIMGeometricEffectDashes":if(e.customEndingOffset&&(e.customEndingOffset*=t),e.offsetAlongLine&&(e.offsetAlongLine*=t),e.dashTemplate&&e.dashTemplate.length){const o=e.dashTemplate.map((e=>e*t));e.dashTemplate=o}break;case"CIMGeometricEffectExtension":case"CIMGeometricEffectJog":case"CIMGeometricEffectRadial":e.length&&(e.length*=t);break;case"CIMGeometricEffectMove":e.offsetX&&(e.offsetX*=t),e.offsetY&&(e.offsetY*=t);break;case"CIMGeometricEffectOffset":case"CIMGeometricEffectOffsetTangent":e.offset&&(e.offset*=t);break;case"CIMGeometricEffectRegularPolygon":e.radius&&(e.radius*=t);break;case"CIMGeometricEffectTaperedPolygon":e.fromWidth&&(e.fromWidth*=t),e.length&&(e.length*=t),e.toWidth&&(e.toWidth*=t);break;case"CIMGeometricEffectWave":e.amplitude&&(e.amplitude*=t),e.period&&(e.period*=t)}}function M(o){const r=[];return u(t(o),r),r.length?new e(a(r[0])):null}function u(e,t){if(!e)return;let s;s="CIMTextSymbol"===e.type?e.symbol:e;const a="CIMPolygonSymbol"===e.type;if(s?.symbolLayers)for(const e of s.symbolLayers)if(!(e.colorLocked||a&&(r(e)||o(e)&&e.markerPlacement&&n(e.markerPlacement))))switch(e.type){case"CIMPictureMarker":case"CIMPictureStroke":case"CIMPictureFill":e.tintColor&&y(t,e.tintColor);break;case"CIMVectorMarker":e.markerGraphics?.forEach((e=>{u(e.symbol,t)}));break;case"CIMSolidStroke":case"CIMSolidFill":y(t,e.color);break;case"CIMHatchFill":u(e.lineSymbol,t)}}function y(e,t){for(const o of e)if(o.join(".")===t.join("."))return;e.push(t)}function C(o,r,s){r instanceof e||(r=new e(r));const n=t(o);n&&k(n,r,s)}function k(e,t,a){if(!e)return;let i;i="CIMTextSymbol"===e.type?e.symbol:e;const c="CIMPolygonSymbol"===i?.type;if(i?.symbolLayers)for(const e of i.symbolLayers){if(e.colorLocked)continue;if(c)if(a){const{layersToColor:t}=a;if((r(e)||o(e)&&e.markerPlacement&&n(e.markerPlacement))&&"fill"===t||s(e)&&"outline"===t)continue}else if(r(e)||o(e)&&e.markerPlacement&&n(e.markerPlacement))continue;const i=t.toArray();switch(e.type){case"CIMPictureMarker":case"CIMPictureStroke":case"CIMPictureFill":e.tintColor=i;break;case"CIMVectorMarker":e.markerGraphics?.forEach((e=>{k(e.symbol,t,a)}));break;case"CIMSolidStroke":case"CIMSolidFill":e.color=i;break;case"CIMHatchFill":k(e.lineSymbol,t,a)}}}function p(e,o=!1){const r=t(e);if("CIMTextSymbol"===r?.type||"CIMPointSymbol"===r?.type){const e=r.angle;return null!=e&&0!==e&&o?360-e:e??0}return 0}function b(e,r,s=!1){const n=t(e);if(s&&0!==r&&(r=360-r),"CIMTextSymbol"!==n?.type){if("CIMPointSymbol"===n?.type&&n.symbolLayers){const e=r-(n.angle||0);for(const t of n.symbolLayers)if(o(t)){let o=t.rotation||0;t.rotateClockwise?o-=e:o+=e,t.rotation=o}n.angle=r}}else n.angle=r}function h(e){const o=t(e);if(!o)return null;switch(o.type){case"CIMPointSymbol":return"CIMPointSymbol";case"CIMLineSymbol":return"CIMLineSymbol";case"CIMPolygonSymbol":return"CIMPolygonSymbol";case"CIMTextSymbol":return"CIMTextSymbol";case"CIMMeshSymbol":return"CIMMeshSymbol";default:return null}}export{C as applyCIMSymbolColor,b as applyCIMSymbolRotation,M as getCIMSymbolColor,p as getCIMSymbolRotation,i as getCIMSymbolSize,h as getCIMSymbolType,l as scaleCIMMarker,f as scaleCIMSymbol,c as scaleCIMSymbolTo};