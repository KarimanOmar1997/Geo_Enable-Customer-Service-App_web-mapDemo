/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as o}from"../chunks/tslib.es6.js";import{JSONSupport as t}from"../core/JSONSupport.js";import{property as r}from"../core/accessorSupport/decorators/property.js";import"../chunks/ensureType.js";import"../chunks/typedArrayUtil.js";import{subclass as s}from"../core/accessorSupport/decorators/subclass.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/Logger.js";import"../config.js";import"../core/lang.js";import"../chunks/maybe.js";import"../chunks/metadata.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/ObjectPool.js";import"../chunks/ObservableBase.js";import"../chunks/tracking.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../chunks/PooledArray.js";import"../core/promiseUtils.js";import"../core/Error.js";import"../chunks/time.js";var e;let i=e=class extends t{constructor(o){super(o),this._oAuthCred=null,this.appId=null,this.authNamespace="/",this.expiration=20160,this.flowType="auto",this.forceLogin=!1,this.forceUserId=!1,this.locale=null,this.minTimeUntilExpiration=30,this.popup=!1,this.popupCallbackUrl="oauth-callback.html",this.popupWindowFeatures="height=490,width=800,resizable,scrollbars,status",this.portalUrl="https://www.arcgis.com",this.preserveUrlHash=!1,this.userId=null}clone(){return e.fromJSON(this.toJSON())}};o([r({json:{write:!0}})],i.prototype,"appId",void 0),o([r({json:{write:!0}})],i.prototype,"authNamespace",void 0),o([r({json:{write:!0}})],i.prototype,"expiration",void 0),o([r({json:{write:!0}})],i.prototype,"flowType",void 0),o([r({json:{write:!0}})],i.prototype,"forceLogin",void 0),o([r({json:{write:!0}})],i.prototype,"forceUserId",void 0),o([r({json:{write:!0}})],i.prototype,"locale",void 0),o([r({json:{write:!0}})],i.prototype,"minTimeUntilExpiration",void 0),o([r({json:{write:!0}})],i.prototype,"popup",void 0),o([r({json:{write:!0}})],i.prototype,"popupCallbackUrl",void 0),o([r({json:{write:!0}})],i.prototype,"popupWindowFeatures",void 0),o([r({json:{write:!0}})],i.prototype,"portalUrl",void 0),o([r({json:{write:!0}})],i.prototype,"preserveUrlHash",void 0),o([r({json:{write:!0}})],i.prototype,"userId",void 0),i=e=o([s("esri.identity.OAuthInfo")],i);const p=i;export{p as default};
