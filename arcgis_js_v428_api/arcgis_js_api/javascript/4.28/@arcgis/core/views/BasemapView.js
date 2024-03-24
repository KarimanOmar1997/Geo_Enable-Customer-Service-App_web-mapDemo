/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import s from"../core/Accessor.js";import r from"../core/Collection.js";import{watch as t,initial as o}from"../core/reactiveUtils.js";import{property as i}from"../core/accessorSupport/decorators/property.js";import"../chunks/ensureType.js";import"../chunks/typedArrayUtil.js";import{subclass as n}from"../core/accessorSupport/decorators/subclass.js";import"../core/Handles.js";import"../chunks/Logger.js";import"../config.js";import"../core/lang.js";import"../chunks/maybe.js";import"../chunks/metadata.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/ObjectPool.js";import"../chunks/ObservableBase.js";import"../chunks/tracking.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../chunks/PooledArray.js";import"../core/promiseUtils.js";import"../core/Error.js";import"../chunks/time.js";import"../core/Evented.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../chunks/asyncUtils.js";let a=class extends s{constructor(e){super(e),this.view=null,this.baseLayerViews=new r,this.referenceLayerViews=new r,this._loadingHandle=t((()=>this.view?.map?.basemap),(e=>{e&&e.load().catch((()=>{}))}),o)}destroy(){this._set("view",null),this._loadingHandle&&(this._loadingHandle.remove(),this._loadingHandle=null);for(const e of this.baseLayerViews)e.destroy();this.baseLayerViews.length=0;for(const e of this.referenceLayerViews)e.destroy();this.referenceLayerViews.length=0}get suspended(){return!this.view||this.view.suspended}get updating(){if(this.view&&this.view.suspended)return!1;const e=this.view?.map?.basemap;return!!e&&!!e.loaded&&(this.baseLayerViews.some((e=>e.updating))||this.referenceLayerViews.some((e=>e.updating)))}};e([i({constructOnly:!0})],a.prototype,"view",void 0),e([i({readOnly:!0})],a.prototype,"baseLayerViews",void 0),e([i({readOnly:!0})],a.prototype,"referenceLayerViews",void 0),e([i({readOnly:!0})],a.prototype,"suspended",null),e([i({type:Boolean,readOnly:!0})],a.prototype,"updating",null),a=e([n("esri.views.BasemapView")],a);export{a as BasemapView};
