/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as r}from"../../chunks/tslib.es6.js";import{ClonableMixin as s}from"../../core/Clonable.js";import{JSONSupport as o}from"../../core/JSONSupport.js";import{property as t}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import"../../chunks/typedArrayUtil.js";import{e}from"../../chunks/enumeration.js";import{subclass as i}from"../../core/accessorSupport/decorators/subclass.js";import{c as p,f as c}from"../../chunks/vec3f64.js";import m from"../Point.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/Logger.js";import"../../config.js";import"../../core/lang.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObjectPool.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../chunks/PooledArray.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/time.js";import"../../chunks/jsonMap.js";import"../../core/accessorSupport/decorators/cast.js";import"../../chunks/reader.js";import"../../chunks/writer.js";import"../Geometry.js";import"../SpatialReference.js";import"../../chunks/unitUtils.js";import"../../chunks/Ellipsoid.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"./webMercatorUtils.js";let n=class extends(s(o)){constructor(r){super(r),this.type="local",this.isRelative=!0,this.isGeoreferenced=!1,this.origin=p()}getOriginPoint(r){const[s,o,t]=this.origin;return new m({x:s,y:o,z:t,spatialReference:r})}setOriginFromPoint({x:r,y:s,z:o}){this.origin=c(r,s,o??0)}};r([e({local:"local"},{readOnly:!0})],n.prototype,"type",void 0),r([t({type:[Number],nonNullable:!0,json:{write:!0}})],n.prototype,"origin",void 0),n=r([i("esri.geometry.support.MeshLocalVertexSpace")],n);const a=n;export{a as default};
