// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../../../chunks/tslib.es6 ../../../../core/Accessor ../../../../core/arrayUtils ../../../../core/BidiText ../../../../core/has ../../../../core/Identifiable ../../../../core/maybe ../../../../core/promiseUtils ../../../../core/reactiveUtils ../../../../core/accessorSupport/decorators/property ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/subclass ../../../../geometry/SpatialReference ../../../../geometry/support/aaBoundingRect ../../../../geometry/support/coordsUtils ../../../../geometry/support/jsonUtils ../../../../geometry/support/normalizeUtilsSync ../../../../geometry/support/spatialReferenceUtils ../../../../layers/graphics/data/projectionSupport ../../../../symbols/cim/CIMSymbolHelper ../../../../symbols/support/defaults ../../engine/webgl/definitions ../../engine/webgl/enums ../../engine/webgl/GraphicTile ../../engine/webgl/TileData ../../engine/webgl/WGLDisplayObject ../../engine/webgl/mesh/MeshData ../../engine/webgl/mesh/factories/WGLMeshFactory ../../engine/webgl/mesh/templates/WGLTemplateStore ../../engine/webgl/util/Matcher ../features/schemaUtils ../features/support/AttributeStore ../features/support/ComputedAttributeStorage ../features/support/GraphicsReader ./GraphicStore ./graphicsUtils ../support/cimSymbolUtils ../../../webgl/capabilities ../features/createSymbolSchema".split(" "),
function(u,n,F,G,H,I,J,k,K,v,ha,L,M,x,N,q,O,C,D,P,y,Q,R,S,E,T,U,V,W,X,z,Y,Z,aa,ba,m,ca,da,ea){function A(a,b,c){let d=c.get(a);d||(d={tile:b,addedOrModified:[],removed:[]},c.set(a,d));return d}const fa=H("esri-2d-graphic-debug");n=class extends I.IdentifiableMixin(n){constructor(a){super(a);this._storage=new Z.ComputedAttributeStorage;this._displayIds=new Map;this._controller=new AbortController;this._tiles=new Map;this._graphicStoreUpdate=!1;this._graphicsSet=new Set;this._matcher=Promise.resolve(null);
this._tileUpdateSet=new Set;this._tilesToUpdate=new Map;this._graphicIdToAbortController=new Map;this._attached=!1;this._updatingGraphicsTimer=null;this._hashToExpandedSymbol=new Map;this._hashToExpandedSymbolPromise=new Map;this._hashToCIMSymbolPromise=new Map;this._hashToCIM=new Map;this._needsProcessing=this._processing=!1;this._pendingUpdate={added:new Set,updated:new Set,removed:new Set};this.lastUpdateId=-1;this.renderer=null;this.updateRequested=!1;this.defaultPointSymbolEnabled=!0;this.graphicUpdateHandler=
this.graphicUpdateHandler.bind(this)}destroy(){this._updatingGraphicsTimer&&(clearTimeout(this._updatingGraphicsTimer),this._updatingGraphicsTimer=null,this.notifyChange("updating"));this._controller.abort();this.container.destroy();this._set("graphics",null);this._graphicStore.clear();this._attributeStore=null;this._hashToExpandedSymbol.clear();this.renderer=this.view=null;this._hashToCIM.clear();this._hashToCIMSymbolPromise.clear();this._hashToExpandedSymbolPromise.clear()}_createMatcher(a,b,c){if(a){const d=
z.createSymbolSchemaOptions(a);a=z.createMatcherSchema({indexCount:0,fields:{}},"feature",a,d);this._matcher=X.createMatcher(a,b,null,c)}}_createDisplayId(a){let b=this._displayIds.get(a);b||(b=this._storage.createDisplayId(),this._displayIds.set(a,b));return b}initialize(){this._attributeStore=new Y({type:"local",initialize:b=>Promise.resolve(this.container.attributeView.initialize(b)),update:b=>this.container.attributeView.requestUpdate(b),render:()=>this.container.requestRender()},da.getWebGLCapabilities("2d"));
this.container.checkHighlight=()=>this._attributeStore.hasHighlight;const a=new W.WGLTemplateStore(this.container.getMaterialItems.bind(this.container),this.view.featuresTilingScheme.tileInfo);this._graphicStore=new ba(this.view.featuresTilingScheme,this.view.state.scale,this.uid,this.graphics,b=>{this._createDisplayId(b.uid);this._setFilterState(b.uid,b.visible)},b=>{const c=this._displayIds.get(b.uid);this._displayIds.delete(b.uid);this._storage.releaseDisplayId(c)},this._hashToCIM);this._meshFactory=
new V.WGLMeshFactory(null,this.uid,a);this._templateStore=a;this.addHandles([K.watch(()=>this._effectiveRenderer,b=>{this._createMatcher(b,a,this.container.stage.resourceManager);for(const c of this.graphics)this._pendingUpdate.updated.add(c);this.requestUpdate()}),this.view.graphicsTileStore.on("update",this._onTileUpdate.bind(this)),this.container.on("attach",()=>{fa&&this.container.enableRenderingBounds(()=>this._graphicStore.getAllBounds());0<this.graphics.items.length&&this._graphicsChangeHandler({target:this.graphics,
added:this.graphics.items,removed:[],moved:[]});this.addHandles(this.graphics.on("change",c=>this._graphicsChangeHandler(c)),"graphics");const b=this.container.stage.resourceManager;this._createMatcher(this._effectiveRenderer,a,b);this._graphicStore.setResourceManager(b);this._attached=!0;this.notifyChange("updating")})]);this._onTileUpdate({added:this.view.graphicsTileStore.tiles,removed:[]})}get _effectiveRenderer(){return"function"===typeof this.renderer?this.renderer():this.renderer}get updating(){return!this._attached||
null!==this._updatingGraphicsTimer||0<this._pendingUpdate.added.size||0<this._pendingUpdate.removed.size||0<this._pendingUpdate.updated.size||0<this._tileUpdateSet.size||0<this._tilesToUpdate.size||this._attributeStore?.updatingHandles.updating||this._processing}hitTest(a){if(!this.view||this.view.suspended)return[];const {resolution:b,rotation:c}=this.view.state;return this._graphicStore.hitTest(a.x,a.y,2,b,c)}update(a){k.throwIfAborted(this._controller.signal);({resolution:a}=a.state);this._graphicStore.updateLevel(a);
this._graphicStoreUpdate=!0;this.updateRequested=!1;0<this._pendingUpdate.updated.size&&(this._processing?this._needsProcessing=!0:this._updateGraphics())}viewChange(){this.requestUpdate()}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.requestUpdateCallback())}processUpdate(a){this.updateRequested&&(this.updateRequested=!1,this.update(a))}graphicUpdateHandler(a){const {graphic:b,property:c}=a;switch(c){case "attributes":case "geometry":case "symbol":this._pendingUpdate.updated.add(b);
this.requestUpdate();break;case "visible":this._setFilterState(b.uid,b.visible),this._attributeStore.sendUpdates()}}setHighlight(a){const b=a.map(c=>this._displayIds.get(c)).filter(F.isSome);this._attributeStore.setHighlight(a,b)}_getIntersectingTiles(a){a=this._graphicStore.getBounds(a);if(!a||0===x.width(a)||0===x.height(a))return[];const b=m.intersectingInternationalDateline(a,this.view.spatialReference);return null!=b?[...(new Set([...this.view.graphicsTileStore.boundsIntersections(b[0]),...this.view.graphicsTileStore.boundsIntersections(b[1])]))]:
this.view.graphicsTileStore.boundsIntersections(a)}async _updateTile(a){k.throwIfAborted(this._controller.signal);const b=a.tile;var c=this._getGraphicsData(this._templateStore,b,a.addedOrModified);c=await this._processGraphics(b,c);k.throwIfAborted(this._controller.signal);this._patchTile(b.key,{type:"update",addOrUpdate:c,remove:a.removed,end:!0,clear:!1,sort:!1});return c}_patchTile(a,b){if(a=this._tiles.get(a))this.container.onTileData(a,b),this.container.requestRender()}_graphicsChangeHandler(a){const b=
this._pendingUpdate;for(const c of a.added)b.added.add(c);for(const c of a.moved)b.updated.add(c);for(const c of a.removed)this._pendingUpdate.added.has(c)?b.added.delete(c):b.removed.add(c);this._processing?this._needsProcessing=!0:this._updateGraphics()}_getGraphicsToUpdate(){const a={added:[],removed:[],updated:[]};if(!this.graphics)return a;const b=this._pendingUpdate;for(const c of this.graphics.items)b.added.has(c)?a.added.push(c):b.updated.has(c)&&a.updated.push(c);for(const c of b.removed)this._graphicStore.has(c)&&
a.removed.push(c);b.added.clear();b.removed.clear();b.updated.clear();return a}async _updateGraphics(){this._processing=!0;const {added:a,removed:b,updated:c}=this._getGraphicsToUpdate(),d=this._tilesToUpdate;try{if(!this._graphicStoreUpdate){var {resolution:e}=this.view.state;this._graphicStore.updateLevel(e)}e=[];const t=Array(a.length+b.length);for(let g=0;g<c.length;g++){var f=c[g];const r=this._getIntersectingTiles(f);for(const w of r){var h=w.id;A(h,w,d).removed.push(this._displayIds.get(f.uid))}e.push(this._updateGraphic(f,
null));t[g]=f}var p=c.length;for(f=0;f<a.length;f++){const g=a[f];t[p+f]=g;this._graphicsSet.add(g);e.push(this._addGraphic(g))}for(const g of b){this._abortProcessingGraphic(g.uid);const r=this._getIntersectingTiles(g);for(const w of r)h=w.id,A(h,w,d).removed.push(this._displayIds.get(g.uid));this._graphicsSet.delete(g);this._graphicStore.remove(g)}this._flipUpdatingGraphics();await Promise.all(e);let l;for(p=0;p<t.length;p++){l=t[p];const g=this._getIntersectingTiles(l);for(const r of g)h=r.id,
A(h,r,d).addedOrModified.push(l)}this._graphicStore.updateZ();h=[];for(const [,g]of d)h.push(this._updateTile(g));await Promise.all(h)}catch(t){k.isAbortError(t)}for(const t of b)try{const l=await this._getSymbolForGraphic(t,null);if(l){const g=l.hash();this._hashToExpandedSymbol.delete(g)}}catch(l){k.isAbortError(l)}d.clear();this.notifyChange("updating");this._processing=!1;this._needsProcessing&&(this._needsProcessing=!1,this._updateGraphics())}_getArcadeInfo(a){const b=(a.attributes?Object.keys(a.attributes):
[]).map(c=>({name:c,alias:c,type:"string"===typeof a.attributes[c]?"esriFieldTypeString":"esriFieldTypeDouble"}));return null==a.geometry?null:{geometryType:q.getJsonType(a.geometry),spatialReference:M.fromJSON(a.geometry.spatialReference),fields:b}}_getSymbolForGraphic(a,b){k.throwIfAborted(this._controller.signal);return null!=a.symbol?Promise.resolve(a.symbol):null!=this._effectiveRenderer?this._effectiveRenderer.getSymbolAsync(a,{scale:this.view.state.scale,signal:null!=b?b.signal:null}):Promise.resolve(this._getNullSymbol(a))}_getCIMSymbol(a,
b,c){var d=this._hashToCIM.get(b);if(d)return Promise.resolve(d);a=P.symbolToCIM(a);if(null!=a){if("CIMSymbolReference"===a.type)return d=a,this._hashToCIM.set(b,d),Promise.resolve(d);if(d=this._hashToCIMSymbolPromise.get(b))return d;d=a.fetchCIMSymbol(c).then(e=>{this._hashToCIM.set(b,e.data);this._hashToCIMSymbolPromise.delete(b);return e}).catch(e=>{this._hashToCIMSymbolPromise.delete(b);k.throwIfAbortError(e);return null});this._hashToCIMSymbolPromise.set(b,d);return d}return Promise.resolve(null)}_expandCIMSymbol(a,
b,c,d){var e=this._hashToExpandedSymbol.get(c);if(e)return Promise.resolve(e);if(e=this._hashToExpandedSymbolPromise.get(c))return e;e=this.container.stage;b=this._getArcadeInfo(b);const f=z.createSymbolSchemaOptions(null);a=ea.createSymbolSchema(a,f);e=ca.expandSymbol(a,b,e.resourceManager,d);this._hashToExpandedSymbolPromise.set(c,e);e.then(h=>{this._hashToExpandedSymbol.set(c,h);this._hashToExpandedSymbolPromise.delete(c);return h});return e}async _getSymbolResources(a,b){k.throwIfAborted(this._controller.signal);
return this.container.stage?this._getSymbolForGraphic(a,b).then(c=>{if(!c)return null;const d=c.hash();return this._getCIMSymbol(c,d,b).then(e=>null==e?null:this._expandCIMSymbol(e,a,d,b).then(f=>{const h=f.layers.filter(p=>"text"===p.type&&"string"===typeof p.text);if(h&&0<h.length){const p=Array(h.length);for(let l=0;l<h.length;l++){const g=h[l],r=[],[w]=G.bidiText(g.text);g.text=w;"text"===c.type&&(g.lineWidth=c.lineWidth);for(let B=0;B<w.length;B++)r.push(w.charCodeAt(B));p[l]={symbol:g,id:l,
glyphIds:r}}const t=new Map;return this.container.getMaterialItems(p).then(l=>{J.assertIsSome(l);for(let g=0;g<h.length;g++){const r=h[g];t.set(r.cim,{text:r.text,mosaicItem:l[g].mosaicItem})}return{symbol:f,textInfo:t,hash:d}})}return{symbol:f,hash:d}}))}).catch(c=>{k.throwIfAbortError(c);return null}):null}async _projectAndNormalizeGeometry(a,b){k.throwIfAborted(this._controller.signal);if(null==a.geometry||"mesh"===a.geometry.type)return null;var c=a.geometry;q.isPolygon(c)?c.rings=c.rings:q.isPolyline(c)?
c.paths=c.paths:q.isExtent(c)&&(a=await this._getSymbolForGraphic(a,b),k.throwIfAborted(this._controller.signal),c=a&&(m.isMarkerSymbol(a.type)||m.isTextSymbol(a.type))?c.center:m.polygonFromExtent(c));await D.checkProjectionSupport(c.spatialReference,this.view.spatialReference);a=O.normalizeCentralMeridianForDisplay(c);(c=D.project(a,c.spatialReference,this.view.spatialReference))&&N.closeRingsAndFixWinding(c);return c}_onTileUpdate(a){const b=C.getInfo(this.view.spatialReference);if(a.added&&0<
a.added.length)for(const c of a.added)this._addNewTile(c,b);if(a.removed&&0<a.removed.length)for(const c of a.removed)this._removeTile(c.key)}async _addGraphic(a){this._abortProcessingGraphic(a.uid);k.throwIfAborted(this._controller.signal);var b=new AbortController;this._graphicIdToAbortController.set(a.uid,b);b={signal:b.signal};try{await this._addOrUpdateGraphic(a,b),k.throwIfAborted(this._controller.signal),this._graphicIdToAbortController.delete(a.uid)}catch(c){if(this._graphicIdToAbortController.delete(a.uid),
!k.isAbortError(c))throw c;}}_updateGraphic(a,b){k.throwIfAborted(this._controller.signal);const c=this._projectAndNormalizeGeometry(a,b);b=this._getSymbolResources(a,b);return Promise.all([c,b]).then(([d,e])=>{k.throwIfAborted(this._controller.signal);this._graphicStore.addOrModify(a,e,d)})}_addOrUpdateGraphic(a,b){k.throwIfAborted(this._controller.signal);const c=this._projectAndNormalizeGeometry(a,b);b=this._getSymbolResources(a,b);return Promise.all([c,b]).then(([d,e])=>{k.throwIfAborted(this._controller.signal);
this._graphicsSet.has(a)&&this._graphicStore.addOrModify(a,e,d)})}_addTile(a){var b=this.view.featuresTilingScheme.getTileBounds(x.create(),a);const c=this.view.featuresTilingScheme.getTileResolution(a.level);b=new S.GraphicTile(a,c,b[0],b[3]);this._tiles.set(a,b);this.container.addChild(b);return b}async _addNewTile(a,b){const c=this._addTile(a.key),d=this._graphicStore.queryTileData(this._templateStore,a);if(0!==d.length){if(b){b=Math.round((b.valid[1]-b.valid[0])/a.resolution);for(var e of d)e.geometry&&
(q.isPoint(e.geometry)||q.isMultipoint(e.geometry))&&this._wrapPoints(e,b)}e=a.key;this._tileUpdateSet.add(a.key);this.notifyChange("updating");try{const f={type:"update",clear:!1,addOrUpdate:await this._processGraphics(a,d),remove:[],end:!0,sort:!1};c.patch(f);this._tileUpdateSet.delete(e);this.notifyChange("updating")}catch(f){if(this._tileUpdateSet.delete(e),this.notifyChange("updating"),!k.isAbortError(f))throw f;}}}_removeTile(a){if(this._tiles.has(a)){var b=this._tiles.get(a);this.container.removeChild(b);
b.destroy();this._tiles.delete(a)}}_setFilterState(a,b){const c=this._displayIds.get(a);a=this._attributeStore.getHighlightFlag(a);this._attributeStore.setData(c,0,0,a|(b?Q.filterFlag0:0))}_getGraphicsData(a,b,c){const d=C.getInfo(this.view.spatialReference);a=this._graphicStore.getGraphicsData(a,b,c);if(d){b=Math.round((d.valid[1]-d.valid[0])/b.resolution);for(const e of a)e.geometry&&(q.isPoint(e.geometry)||q.isMultipoint(e.geometry))&&this._wrapPoints(e,b)}return a}_wrapPoints(a,b){const c=a.geometry;
q.isMultipoint(c)?this._wrapMultipoint(c,b):this._wrapPoint(a,b)}_wrapMultipoint(a,b){var c=a.points;const d=[];let e=0,f=0;for(const [h,p]of c)d.push([h+e,p]),e=0,b===m.tileSize?(c=5*m.pixelBuffer,h+f<c?(d.push([b,0]),e=-b):h+f>m.tileSize-c&&(d.push([-b,0]),e=b)):h+f<-m.pixelBuffer?(d.push([b,0]),e=-b):h+f>m.tileSize+m.pixelBuffer&&(d.push([-b,0]),e=b),f+=h;a.points=d}_wrapPoint(a,b){const c=a.geometry;if(b===m.tileSize){const d=5*m.pixelBuffer;c.x<d?a.geometry={points:[[c.x,c.y],[b,0]]}:c.x>m.tileSize-
d&&(a.geometry={points:[[c.x,c.y],[-b,0]]})}else c.x<-m.pixelBuffer?a.geometry={points:[[c.x,c.y],[b,0]]}:c.x>m.tileSize+m.pixelBuffer&&(a.geometry={points:[[c.x,c.y],[-b,0]]})}_processGraphics(a,b,c){if(!b||!b.length||!this._meshFactory)return Promise.resolve(null);const d=aa.GraphicsReader.from(b,this.uid,a.transform),e=this._meshFactory;return this._matcher.then(f=>e.analyzeGraphics(d,this.container.stage.resourceManager,f,null,null,c).then(()=>{this._attributeStore.sendUpdates();return this._processAnalyzedGraphics(a,
d)}))}_processAnalyzedGraphics(a,b){const c=this._meshFactory;var d=b.getSize();b=b.getCursor();const e=new U.MeshData(a.key.id,{features:d,records:d,metrics:0},R.WGLSymbologyType.DEFAULT,!1,!1);for(d=[];b.next();){const f=b.readGraphic();f.insertAfter=-1===f.insertAfter?-1:this._displayIds.get(f.insertAfter);f.displayId=this._displayIds.get(f.attributes[this.uid]);const h=new T(f.displayId);h.insertAfter=f.insertAfter;d.push(h);c.writeGraphic(e,b,a.level,this.container.stage.resourceManager)}a=e.serialize(a.tileInfoView.tileInfo.isWrappable);
return 1!==a.length?new E.TileData:E.TileData.fromVertexData(a[0].message,d)}_abortProcessingGraphic(a){this._graphicIdToAbortController.get(a)?.abort()}_getNullSymbol(a){a=a.geometry;return q.isPolyline(a)?y.errorPolylineSymbol2D:q.isPolygon(a)||q.isExtent(a)?y.errorPolygonSymbol2D:this.defaultPointSymbolEnabled?y.errorPointSymbol2D:null}_flipUpdatingGraphics(){this._updatingGraphicsTimer&&clearTimeout(this._updatingGraphicsTimer);this._updatingGraphicsTimer=setTimeout(()=>{this._updatingGraphicsTimer=
null;this.notifyChange("updating")},160);this.notifyChange("updating")}};u.__decorate([v.property()],n.prototype,"_effectiveRenderer",null);u.__decorate([v.property({constructOnly:!0})],n.prototype,"requestUpdateCallback",void 0);u.__decorate([v.property()],n.prototype,"container",void 0);u.__decorate([v.property({constructOnly:!0})],n.prototype,"graphics",void 0);u.__decorate([v.property()],n.prototype,"renderer",void 0);u.__decorate([v.property()],n.prototype,"updating",null);u.__decorate([v.property()],
n.prototype,"view",void 0);u.__decorate([v.property()],n.prototype,"updateRequested",void 0);u.__decorate([v.property()],n.prototype,"defaultPointSymbolEnabled",void 0);return n=u.__decorate([L.subclass("esri.views.2d.layers.support.GraphicsView2D")],n)});