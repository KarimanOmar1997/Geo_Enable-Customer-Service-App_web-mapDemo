/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as r}from"../chunks/tslib.es6.js";import e from"../core/Collection.js";import{r as t}from"../chunks/collectionUtils.js";import{L as s}from"../chunks/Logger.js";import{isPromiseLike as o}from"../core/promiseUtils.js";import{property as i}from"../core/accessorSupport/decorators/property.js";import"../chunks/ensureType.js";import"../chunks/typedArrayUtil.js";import{subclass as n}from"../core/accessorSupport/decorators/subclass.js";import a from"../layers/Layer.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../chunks/metadata.js";import"../core/lang.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/ObjectPool.js";import"../chunks/ObservableBase.js";import"../chunks/tracking.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../chunks/PooledArray.js";import"../chunks/time.js";import"../core/Error.js";import"../config.js";import"../core/Evented.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../core/JSONSupport.js";import"../chunks/reader.js";import"../geometry/SpatialReference.js";import"../chunks/unitUtils.js";import"../chunks/jsonMap.js";import"../chunks/Ellipsoid.js";import"../chunks/assets.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../chunks/writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/Axis.js";import"../chunks/extentUtils.js";import"../chunks/aaBoundingRect.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/vec3f64.js";import"../chunks/common.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../core/Identifiable.js";import"../core/Loadable.js";import"../core/Promise.js";function m(r,e,t){let s,o;if(r)for(let i=0,n=r.length;i<n;i++){if(s=r.at(i),s?.[e]===t)return s;if("group"===s?.type&&(o=m(s.layers,e,t),o))return o}}const p=p=>{let c=class extends p{constructor(...r){super(...r),this.layers=new e;const t=r=>{r.parent=this,this.layerAdded(r),"elevation"!==r.type&&"base-elevation"!==r.type||s.getLogger(this).error(`Layer 'title:${r.title}, id:${r.id}' of type '${r.type}' is not supported as an operational layer and will therefore be ignored.`)},o=r=>{r.parent=null,this.layerRemoved(r)};this.addHandles([this.layers.on("before-add",(r=>{var e;(e=r.item).parent&&"remove"in e.parent&&e.parent.remove(e)})),this.layers.on("after-add",(r=>t(r.item))),this.layers.on("after-remove",(r=>o(r.item)))])}destroy(){const r=this.layers.toArray();for(const e of r)e.destroy();this.layers.destroy()}set layers(r){this._set("layers",t(r,this._get("layers")))}add(r,e){const t=this.layers;if(e=t.getNextIndex(e),r instanceof a){const s=r;s.parent===this?this.reorder(s,e):t.add(s,e)}else o(r)?r.then((r=>{this.destroyed||this.add(r,e)})):s.getLogger(this).error("#add()","The item being added is not a Layer or a Promise that resolves to a Layer.")}addMany(r,e){const t=this.layers;let s=t.getNextIndex(e);r.slice().forEach((r=>{r.parent!==this?(t.add(r,s),s+=1):this.reorder(r,s)}))}findLayerById(r){return m(this.layers,"id",r)}findLayerByUid(r){return m(this.layers,"uid",r)}remove(r){return this.layers.remove(r)}removeMany(r){return this.layers.removeMany(r)}removeAll(){return this.layers.removeAll()}reorder(r,e){return this.layers.reorder(r,e)}layerAdded(r){}layerRemoved(r){}};return r([i()],c.prototype,"layers",null),c=r([n("esri.support.LayersMixin")],c),c};export{p as LayersMixin};
