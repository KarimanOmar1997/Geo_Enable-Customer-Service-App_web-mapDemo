/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as s}from"../../chunks/tslib.es6.js";import{property as t}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import"../../chunks/typedArrayUtil.js";import{subclass as r}from"../../core/accessorSupport/decorators/subclass.js";import e from"../support/PublishingInfo.js";import"../../chunks/Logger.js";import"../../config.js";import"../../core/lang.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../core/Error.js";import"../../chunks/tracking.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/ObjectPool.js";import"../../chunks/ObservableBase.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../chunks/PooledArray.js";import"../../core/promiseUtils.js";import"../../chunks/time.js";const o="esri.layers.mixins.PublishableLayer",i=Symbol(o);function n(s){return null!=s&&"object"==typeof s&&i in s}const c=n=>{var c;let u=class extends n{constructor(){super(...arguments),this[c]=!0}get publishingInfo(){if(this.destroyed)return null;const s=this._get("publishingInfo");if(s)return s;const t=new e;return this._checkPublishingStatus(t),t}_checkPublishingStatus(s){let t=0;const r=async o=>{let i;s.updating=!0;try{i=await this.fetchPublishingStatus()}catch(s){i="unavailable"}"published"!==i&&"unavailable"!==i||("publishing"===s.status&&this.refresh(),e.remove()),s.status=i,s.updating=!1,e.removed||(t=setTimeout(r,o,o+125))},e={removed:!1,remove(){this.removed=!0,clearTimeout(t)}};this.when().catch((()=>e.remove())),r(250),this.addHandles(e)}};return c=i,s([t({readOnly:!0,clonable:!1})],u.prototype,"publishingInfo",null),u=s([r(o)],u),u};export{c as PublishableLayer,n as isPublishableLayer};