// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/tslib.es6 ../../../geometry ../../../Graphic ../../../core/Accessor ../../../core/maybe ../../../core/Promise ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/decorators/subclass ../data/StreamFeatureManager ../sources/connections/createConnection ../../../views/3d/support/EventedSet ../../../geometry/support/typeUtils".split(" "),
function(c,d,H,n,p,k,q,r,g,I,J,K,l,t,u,v,w){c.StreamGraphic=class extends n{getObjectId(){return this.objectId}};d.__decorate([g.property({type:Number,json:{read:!0}})],c.StreamGraphic.prototype,"objectId",void 0);c.StreamGraphic=d.__decorate([l.subclass("esri.layers.graphics.controllers.StreamGraphic")],c.StreamGraphic);class x{constructor(a){this.onUpdate=a;this._idToGraphic=new Map}destroy(){this._idToGraphic.clear()}add(a){this._idToGraphic.set(a.objectId,a)}get(a){return this._idToGraphic.get(a)}forEach(a){this._idToGraphic.forEach(a)}removeById(a){const b=
this._idToGraphic.get(a);if(!b)return null;b.sourceLayer=b.layer=null;this._idToGraphic.delete(a);return b}update(a,b){this.onUpdate(a,b)}get size(){return this._idToGraphic.size}}c.StreamController=class extends q.EsriPromiseMixin(p){constructor(){super(...arguments);this.isPaused=!1;this.graphics=new v.EventedSet;this._updateInfo={websocket:0,client:0};this._outSpatialReference=this._updateIntervalId=null}initialize(){this.addResolvingPromise(this.layer.when(()=>this._startup()))}destroy(){this.clear()}_clearInterval(){null!==
this._updateIntervalId&&(clearInterval(this._updateIntervalId),this._updateIntervalId=null)}clear(){this._clearInterval();this.connection=k.destroyMaybe(this.connection);this.store=k.destroyMaybe(this.store);this.graphics.clear();this.removeAllHandles()}get updating(){return!this.connection||"connected"===this.connection.connectionStatus}_startup(){const {layer:a,layerView:b}=this,{spatialReference:h,definitionExpression:e,geometryDefinition:y,objectIdField:z,timeInfo:A,purgeOptions:B,maxReconnectionAttempts:C,
maxReconnectionInterval:D,customParameters:E}=a,F=a.geometryType?w.featureGeometryTypeKebabDictionary.toJSON(a.geometryType):null,m=b.view.spatialReference,G={geometry:y,where:e};this.clear();this._set("connection",u.createConnection(a.parsedUrl,h,m,F,G,C,D,E??void 0));this._outSpatialReference=m.toJSON();this.store=new x(this._onUpdate.bind(this));this.featuresManager=new t.StreamFeatureManager(this.store,z,A.toJSON(),B);this.removeHandles("startup-watches");this.addHandles([a.on("send-message-to-socket",
f=>this.connection.sendMessageToSocket(f)),a.on("send-message-to-client",f=>this.connection.sendMessageToClient(f)),this.connection.on("data-received",f=>this._onFeature(f)),this.connection.on("message-received",f=>this._onWebSocketMessage(f)),r.watch(()=>[a.definitionExpression,a.geometryDefinition,a.purgeOptions],()=>this._startup())],"startup-watches");this.isPaused||this._initUpdateInterval()}_onWebSocketMessage(a){this.layerView.emit("message-received",a);if("type"in a)switch(a.type){case "delete":if(a.objectIds)for(const b of a.objectIds)this.featuresManager.removeById(b);
if(a.trackIds)for(const b of a.trackIds)this.featuresManager.removeByTrackId(b);break;case "clear":this.store.forEach(b=>this.featuresManager.removeById(b.objectId))}}_onFeature(a){this._updateInfo.websocket++;this.layerView.hasEventListener("data-received")&&this.layerView.emit("data-received",{attributes:a.attributes,centroid:a.centroid,geometry:a.geometry});try{null==a.geometry||a.geometry.spatialReference||(a.geometry.spatialReference=this._outSpatialReference);const b=c.StreamGraphic.fromJSON(a);
b.sourceLayer=b.layer=this.layer;this.featuresManager.add(b)}catch{}}_onUpdate(a,b){null!=b&&this.graphics.removeMany(b);null!=a&&(this._updateInfo.client+=a.length,this.graphics.addMany(a))}_initUpdateInterval(){this._clearInterval();const {updateInterval:a}=this.layer;let b=performance.now();this._updateIntervalId=setInterval(()=>{var h=performance.now(),e=h-b;2500<e&&(b=h,h=Math.round(this._updateInfo.client/(e/1E3)),e=Math.round(this._updateInfo.websocket/(e/1E3)),this._updateInfo.client=0,this._updateInfo.websocket=
0,this.layerView.emit("update-rate",{client:h,websocket:e}));this.featuresManager.checkForUpdates()},a)}pauseStream(){this.isPaused=!0;this._clearInterval()}resumeStream(){this.isPaused=!1;this._initUpdateInterval()}};d.__decorate([g.property()],c.StreamController.prototype,"isPaused",void 0);d.__decorate([g.property({constructOnly:!0})],c.StreamController.prototype,"layer",void 0);d.__decorate([g.property({constructOnly:!0})],c.StreamController.prototype,"layerView",void 0);d.__decorate([g.property()],
c.StreamController.prototype,"connection",void 0);d.__decorate([g.property({readOnly:!0})],c.StreamController.prototype,"updating",null);c.StreamController=d.__decorate([l.subclass("esri.layers.graphics.controllers.StreamController")],c.StreamController);Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});