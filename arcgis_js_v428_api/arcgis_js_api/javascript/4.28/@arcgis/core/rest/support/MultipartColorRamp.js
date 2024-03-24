/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as o}from"../../chunks/tslib.es6.js";import{clone as r}from"../../core/lang.js";import{property as s}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import{subclass as t}from"../../core/accessorSupport/decorators/subclass.js";import p from"./AlgorithmicColorRamp.js";import i from"./ColorRamp.js";import"../../chunks/typedArrayUtil.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../core/Error.js";import"../../chunks/tracking.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";import"../../chunks/enumeration.js";import"../../chunks/jsonMap.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/ObjectPool.js";import"../../chunks/ObservableBase.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../chunks/PooledArray.js";import"../../core/promiseUtils.js";import"../../chunks/time.js";var c;let m=c=class extends i{constructor(o){super(o),this.colorRamps=null,this.type="multipart"}clone(){return new c({colorRamps:r(this.colorRamps)})}};o([s({type:[p],json:{write:!0}})],m.prototype,"colorRamps",void 0),o([s({type:["multipart"]})],m.prototype,"type",void 0),m=c=o([t("esri.rest.support.MultipartColorRamp")],m);const e=m;export{e as default};
