/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as r}from"../../chunks/tslib.es6.js";import{i as s}from"../../chunks/typedArrayUtil.js";import{JSONSupport as t}from"../../core/JSONSupport.js";import{property as o}from"../../core/accessorSupport/decorators/property.js";import{j as e}from"../../chunks/ensureType.js";import{subclass as i}from"../../core/accessorSupport/decorators/subclass.js";import{fromJSON as m}from"../../geometry/support/jsonUtils.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/Logger.js";import"../../config.js";import"../../core/lang.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObjectPool.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../chunks/PooledArray.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/time.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/unitUtils.js";import"../../chunks/jsonMap.js";import"../../chunks/Ellipsoid.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../chunks/writer.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";import"../../geometry/Polyline.js";let p=class extends t{constructor(r){super(r),this.deviationUnit=null,this.geometries=null,this.maxDeviation=null}};r([o({type:String,json:{write:!0}})],p.prototype,"deviationUnit",void 0),r([o({json:{read:{reader:r=>r?r.map((r=>m(r))).filter(s):null},write:{writer:(r,s)=>{s.geometries=r?.map((r=>r.toJSON()))??null}}}})],p.prototype,"geometries",void 0),r([o({type:Number,json:{write:!0}})],p.prototype,"maxDeviation",void 0),p=r([i("esri.rest.support.GeneralizeParameters")],p),p.from=e(p);const n=p;export{n as default};
