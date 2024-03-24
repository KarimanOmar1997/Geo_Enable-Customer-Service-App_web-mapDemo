/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as s}from"../../../../chunks/tslib.es6.js";import o from"../../../../core/Accessor.js";import{property as r}from"../../../../core/accessorSupport/decorators/property.js";import{cast as t}from"../../../../core/accessorSupport/decorators/cast.js";import"../../../../chunks/typedArrayUtil.js";import{subclass as e}from"../../../../core/accessorSupport/decorators/subclass.js";import p from"./ButtonMenuItem.js";import"../../../../core/Handles.js";import"../../../../chunks/Logger.js";import"../../../../config.js";import"../../../../core/lang.js";import"../../../../chunks/maybe.js";import"../../../../chunks/metadata.js";import"../../../../chunks/utils.js";import"../../../../chunks/handleUtils.js";import"../../../../chunks/ObjectPool.js";import"../../../../chunks/ObservableBase.js";import"../../../../chunks/tracking.js";import"../../../../core/scheduling.js";import"../../../../chunks/nextTick.js";import"../../../../chunks/PooledArray.js";import"../../../../core/promiseUtils.js";import"../../../../core/Error.js";import"../../../../chunks/time.js";import"../../../../chunks/ensureType.js";let c=class extends o{constructor(s){super(s),this.items=null,this.open=!1}castItems(s){return s?s.map((s=>s instanceof p?s:new p(s))):null}};s([r()],c.prototype,"items",void 0),s([t("items")],c.prototype,"castItems",null),s([r()],c.prototype,"open",void 0),c=s([e("esri.widgets.FeatureTable.Grid.support.ButtonMenuViewModel")],c);const i=c;export{i as default};
