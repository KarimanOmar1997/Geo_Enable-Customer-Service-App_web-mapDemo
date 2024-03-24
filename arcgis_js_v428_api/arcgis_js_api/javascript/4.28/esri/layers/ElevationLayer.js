// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("require ../chunks/tslib.es6 ../request ../core/Error ../core/maybe ../core/MultiOriginJSONSupport ../core/promiseUtils ../core/urlUtils ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/arrayUtils ../core/has ../core/accessorSupport/decorators/reader ../core/accessorSupport/decorators/subclass ../geometry/HeightModelInfo ./Layer ./mixins/ArcGISCachedService ./mixins/ArcGISService ./mixins/OperationalLayer ./mixins/PortalLayer ./support/commonProperties ./support/ElevationTileData ./support/LercDecoder".split(" "),
function(m,e,n,r,t,b,k,u,g,H,I,J,p,v,w,x,y,z,A,B,C,D,E){b=class extends y.ArcGISCachedService(z.ArcGISService(A.OperationalLayer(B.PortalLayer(b.MultiOriginJSONMixin(x))))){constructor(...a){super(...a);this.capabilities={operations:{supportsTileMap:!1}};this.path=this.heightModelInfo=this.copyright=null;this.maxScale=this.minScale=void 0;this.opacity=1;this.operationalLayerType="ArcGISTiledElevationServiceLayer";this.sourceJSON=null;this.type="elevation";this.version=this.url=null;this._lercDecoder=
E.acquireDecoder()}normalizeCtorArgs(a,c){return"string"===typeof a?{url:a,...c}:a}destroy(){this._lercDecoder=t.releaseMaybe(this._lercDecoder)}readCapabilities(a,c){return(a=c.capabilities&&c.capabilities.split(",").map(f=>f.toLowerCase().trim()))?{operations:{supportsTileMap:a.includes("tilemap")}}:{operations:{supportsTileMap:!1}}}readVersion(a,c){(a=c.currentVersion)||(a=9.3);return a}load(a){const c=null!=a?a.signal:null;this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],
supportsData:!1,validateItem:f=>{for(let d=0;d<f.typeKeywords.length;d++)if("elevation 3d layer"===f.typeKeywords[d].toLowerCase())return!0;throw new r("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"});}},a).catch(k.throwIfAbortError).then(()=>this._fetchImageService(c)));return Promise.resolve(this)}fetchTile(a,c,f,d){d=d||{signal:null};const h=null!=d.signal?d.signal:d.signal=
(new AbortController).signal,F={responseType:"array-buffer",signal:h},G={noDataValue:d.noDataValue,returnFileInfo:!0};return this.load().then(()=>this._fetchTileAvailability(a,c,f,d)).then(()=>n(this.getTileUrl(a,c,f),F)).then(l=>this._lercDecoder.decode(l.data,G,h)).then(l=>new D.ElevationTileData(l))}getTileUrl(a,c,f){const d=u.objectToQuery({...this.parsedUrl.query,blankTile:!this.capabilities.operations.supportsTileMap&&this.supportsBlankTile?!1:null});return`${this.parsedUrl.path}/tile/${a}/${c}/${f}${d?
"?"+d:""}`}async queryElevation(a,c){const {ElevationQuery:f}=await new Promise((d,h)=>m(["./support/ElevationQuery"],d,h));k.throwIfAborted(c);return(new f).query(this,a,c)}async createElevationSampler(a,c){const {ElevationQuery:f}=await new Promise((d,h)=>m(["./support/ElevationQuery"],d,h));k.throwIfAborted(c);return(new f).createSampler(this,a,c)}_fetchTileAvailability(a,c,f,d){return this.tilemapCache?this.tilemapCache.fetchAvailability(a,c,f,d):Promise.resolve("unknown")}async _fetchImageService(a){if(this.sourceJSON)return this.sourceJSON;
a=await n(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query},responseType:"json",signal:a});a.ssl&&(this.url=this.url?.replace(/^http:/i,"https:"));this.sourceJSON=a.data;this.read(a.data,{origin:"service",url:this.parsedUrl})}get hasOverriddenFetchTile(){return!this.fetchTile[q]}};e.__decorate([g.property({readOnly:!0})],b.prototype,"capabilities",void 0);e.__decorate([p.reader("service","capabilities",["capabilities"])],b.prototype,"readCapabilities",null);e.__decorate([g.property({json:{read:{source:"copyrightText"}}})],
b.prototype,"copyright",void 0);e.__decorate([g.property({readOnly:!0,type:w})],b.prototype,"heightModelInfo",void 0);e.__decorate([g.property({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],b.prototype,"path",void 0);e.__decorate([g.property({type:["show","hide"]})],b.prototype,"listMode",void 0);e.__decorate([g.property({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}},readOnly:!0})],b.prototype,
"minScale",void 0);e.__decorate([g.property({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}},readOnly:!0})],b.prototype,"maxScale",void 0);e.__decorate([g.property({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],b.prototype,"opacity",void 0);e.__decorate([g.property({type:["ArcGISTiledElevationServiceLayer"]})],b.prototype,"operationalLayerType",void 0);e.__decorate([g.property()],b.prototype,"sourceJSON",
void 0);e.__decorate([g.property({json:{read:!1},value:"elevation",readOnly:!0})],b.prototype,"type",void 0);e.__decorate([g.property(C.url)],b.prototype,"url",void 0);e.__decorate([g.property()],b.prototype,"version",void 0);e.__decorate([p.reader("version",["currentVersion"])],b.prototype,"readVersion",null);b=e.__decorate([v.subclass("esri.layers.ElevationLayer")],b);const q=Symbol("default-fetch-tile");b.prototype.fetchTile[q]=!0;return b});