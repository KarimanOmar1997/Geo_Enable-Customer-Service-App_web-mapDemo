/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import"../../geometry.js";import"../../chunks/typedArrayUtil.js";import{m as t}from"../../chunks/handleUtils.js";import{L as e}from"../../chunks/Logger.js";import{g as s}from"../../chunks/unitUtils.js";import{t as o,h as i,c as n}from"../../chunks/aaBoundingRect.js";import{project as r}from"../../geometry/support/webMercatorUtils.js";import a from"../../geometry/Point.js";import"../../chunks/ensureType.js";import"../../geometry/Extent.js";import"../../chunks/tslib.es6.js";import"../../core/accessorSupport/decorators/property.js";import"../../chunks/utils.js";import"../../core/lang.js";import"../../chunks/metadata.js";import"../../core/Error.js";import"../../config.js";import"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/tracking.js";import"../../geometry/Geometry.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/ObjectPool.js";import"../../chunks/ObservableBase.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../chunks/PooledArray.js";import"../../core/promiseUtils.js";import"../../chunks/time.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/writer.js";import"../../chunks/jsonMap.js";import"../../chunks/Ellipsoid.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";const m=e.getLogger("esri.layers.support.ElevationSampler");class l{queryElevation(t){return u(t.clone(),this)}on(){return t()}projectIfRequired(t,e){return h(t,e)}}class c extends l{get spatialReference(){return this.extent.spatialReference}constructor(t,e,i){super(),this.tile=t,this.noDataValue=i;const n=t.tile.extent;this.extent=o(n,e.spatialReference),this.extent.zmin=t.zmin,this.extent.zmax=t.zmax,this._aaExtent=n;const r=s(e.spatialReference),a=e.lodAt(t.tile.level).resolution*r;this.demResolution={min:a,max:a}}contains(t){const e=this.projectIfRequired(t,this.spatialReference);return null!=e&&this.containsAt(e.x,e.y)}containsAt(t,e){return i(this._aaExtent,t,e)}elevationAt(t,e){if(!this.containsAt(t,e)){const s=this.extent,o=`${s.xmin}, ${s.ymin}, ${s.xmax}, ${s.ymax}`;return m.warn("#elevationAt()",`Point used to sample elevation (${t}, ${e}) is outside of the sampler extent (${o})`),this.noDataValue}return this.tile.sample(t,e)??this.noDataValue}}class p extends l{get spatialReference(){return this.extent.spatialReference}constructor(t,e,s){let i;super(),"number"==typeof e?(this.noDataValue=e,i=null):(i=e,this.noDataValue=s),this.samplers=i?t.map((t=>new c(t,i,this.noDataValue))):t;const r=this.samplers[0];if(r){this.extent=r.extent.clone();const{min:t,max:e}=r.demResolution;this.demResolution={min:t,max:e};for(let t=1;t<this.samplers.length;t++){const e=this.samplers[t];this.extent.union(e.extent),this.demResolution.min=Math.min(this.demResolution.min,e.demResolution.min),this.demResolution.max=Math.max(this.demResolution.max,e.demResolution.max)}}else this.extent=o(n(),i.spatialReference),this.demResolution={min:0,max:0}}elevationAt(t,e){for(const s of this.samplers)if(s.containsAt(t,e))return s.elevationAt(t,e);return m.warn("#elevationAt()",`Point used to sample elevation (${t}, ${e}) is outside of the sampler`),this.noDataValue}}function u(t,e){const s=h(t,e.spatialReference);if(!s)return null;switch(t.type){case"point":!function(t,e,s){t.z=s.elevationAt(e.x,e.y)}(t,s,e);break;case"polyline":!function(t,e,s){j.spatialReference=e.spatialReference;const o=t.hasM&&!t.hasZ;for(let i=0;i<t.paths.length;i++){const n=t.paths[i],r=e.paths[i];for(let t=0;t<n.length;t++){const e=n[t],i=r[t];j.x=i[0],j.y=i[1],o&&(e[3]=e[2]),e[2]=s.elevationAt(j.x,j.y)}}t.hasZ=!0}(t,s,e);break;case"multipoint":!function(t,e,s){j.spatialReference=e.spatialReference;const o=t.hasM&&!t.hasZ;for(let i=0;i<t.points.length;i++){const n=t.points[i],r=e.points[i];j.x=r[0],j.y=r[1],o&&(n[3]=n[2]),n[2]=s.elevationAt(j.x,j.y)}t.hasZ=!0}(t,s,e)}return t}function h(t,e){if(null==t)return null;const s=t.spatialReference;if(s.equals(e))return t;const o=r(t,e);return o||m.error(`Cannot project geometry spatial reference (wkid:${s.wkid}) to elevation sampler spatial reference (wkid:${e.wkid})`),o}const j=new a;export{l as ElevationSamplerBase,p as MultiTileElevationSampler,c as TileElevationSampler,u as updateGeometryElevation};