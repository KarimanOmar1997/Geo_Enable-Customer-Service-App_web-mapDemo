// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/tslib.es6 ../../geometry ../../rasterRenderers ../../request ../../core/Error ../../core/Logger ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/reader ../../core/accessorSupport/decorators/subclass ../../geometry/support/spatialReferenceUtils ../support/arcgisLayerUrl ../support/commonProperties ../support/DimensionalDefinition ../support/MultidimensionalSubset ../support/RasterFunction ../support/RasterJobHandler ../support/TileInfo ../support/rasterDatasets/FunctionRaster ../support/rasterDatasets/multidimensionalUtils ../support/rasterFunctions/clipUtils ../support/rasterFunctions/rasterFunctionHelper ../support/rasterFunctions/rasterProjectionHelper ../support/rasterFunctions/stretchUtils ../support/rasterFunctions/vectorFieldUtils ../../renderers/support/rasterRendererHelper ../../renderers/support/RasterSymbolizer ../../rest/support/ImageHistogramParameters ../../views/2d/engine/flow/dataUtils ../../geometry/SpatialReference ../../geometry/Point".split(" "),
function(z,h,aa,x,E,u,F,k,G,ba,ca,H,I,J,K,L,M,N,A,O,B,P,t,C,Q,y,R,S,q,T,U,V,W,X){const D=F.getLogger("esri.layers.mixins.ImageryTileMixin");z.ImageryTileMixin=g=>{function v(a){if(!a.raster||!a.rasterInfo)throw new u("imagery-tile","no raster");}g=class extends g{constructor(...a){super(...a);this._isConstructedFromFunctionRaster=!1;this._rasterJobHandler={instance:null,refCount:0,connectionPromise:null};this.copyright=this.bandIds=null;this.interpolation="nearest";this.symbolizer=this.spatialReference=
this.sourceJSON=this.rasterInfo=this.raster=this.multidimensionalSubset=null;this._isConstructedFromFunctionRaster="Function"===a[0]?.raster?.datasetFormat}get fullExtent(){return this.rasterInfo?.extent}set multidimensionalDefinition(a){this._set("multidimensionalDefinition",a);this.updateRenderer()}set rasterFunction(a){"none"===a?.functionName?.toLowerCase()&&(a=void 0);this._set("rasterFunction",a);this.updateRasterFunction()}set url(a){this._set("url",K.sanitizeUrl(a,D))}set renderer(a){null==
a&&null==this.rasterFunction?this._configDefaultRenderer("override"):(this._set("renderer",a),this.updateRenderer())}readRenderer(a,b,c){return x.read(b?.layerDefinition?.drawingInfo?.renderer,c)||void 0}async convertVectorFieldData(a,b){if(null==a||!this.rasterInfo)return null;const c=this._rasterJobHandler.instance,d=this.rasterInfo.dataType;return c?c.convertVectorFieldData({pixelBlock:a,dataType:d},b):S.convertVectorFieldData(a,d)}async computeStatisticsHistograms(a,b){a=G.ensureClass(U,a).clone();
var {rasterInfo:c}=this;const {geometry:d}=a;if(null==d)throw new u("imagery-tile-mixin:compute-statistics-histograms","geometry must be specified");var e=d;const {spatialReference:l}=c;d.spatialReference.equals(l)||(await y.load(),e="extent"===d.type?y.projectExtent(d,l):y.projectPolygon(d,l));a=a.pixelSize??new X({x:c.pixelSize.x,y:c.pixelSize.y,spatialReference:l});const {extent:r,width:w,height:m}=C.snapToRaster(c,e,a);c=await this.fetchPixels(r,w,m,{...b,interpolation:"nearest"});if(null==c.pixelBlock)throw new u("imagery-tile-mixin:compute-statistics-histograms",
"failed to fetch pixels");e=await C.clip(c.pixelBlock,r,e);return(c=this._rasterJobHandler.instance)?c.computeStatisticsHistograms({pixelBlock:e},b):R.computeStatisticsHistograms(e)}async createFlowMesh(a,b){const c=this._rasterJobHandler.instance;return c?c.createFlowMesh(a,b):V.createFlowMesh(a.meshType,a.simulationSettings,a.flowData,null!=b.signal?b.signal:(new AbortController).signal)}normalizeRasterFetchOptions(a){var {multidimensionalInfo:b}=this.rasterInfo??{};if(null==b)return a;let c=a.multidimensionalDefinition||
this.multidimensionalDefinition;c?.length||(c=t.getDefaultMultidimensionalDefinition(this.raster.rasterInfo,{multidimensionalSubset:this.multidimensionalSubset}));var d=a.timeExtent||this.timeExtent;if(null!=c&&null!=d&&(null!=d.start||null!=d.end)){c=c.map(f=>f.clone());var e=b.variables.find(({name:f})=>f===c[0].variableName)?.dimensions?.find(({name:f})=>"StdTime"===f);b=c.find(({dimensionName:f})=>"StdTime"===f);if(!e||!b)return{...a,multidimensionalDefinition:null};const {start:l,end:r}=d;d=
null==l?null:l.getTime();const w=null==r?null:r.getTime(),m=d??w,n=w??d;if(null!=e.values)e=e.values.filter(f=>{if(Array.isArray(f)){if(m===n)return f[0]<=m&&f[1]>=m;const p=f[0]>=m&&f[1]<=n||f[0]<m&&f[1]>n;return f[0]<=m&&f[1]>m||f[0]<n&&f[1]>=n||p}return m===n?f===m:f>=m&&f<=n}),e.length?(e=e.sort((f,p)=>{const Y=Array.isArray(f)?f[0]:f;f=Array.isArray(f)?f[1]:f;const Z=Array.isArray(p)?p[0]:p;p=Array.isArray(p)?p[1]:p;return m===n?Y-Z:Math.abs(f-n)-Math.abs(p-n)})[0],b.values=[e]):c=null;else if(e.hasRegularIntervals&&
e.extent){const [f,p]=e.extent;m>p||n<f?c=null:b.values=m===n?[m]:[Math.max(f,m),Math.min(p,n)]}}return null!=c&&t.hasExcludedVariableOrDimension(c,this.multidimensionalSubset)?{...a,multidimensionalDefinition:null}:{...a,multidimensionalDefinition:c}}async updateRasterFunction(){if(this.loaded&&"imagery-tile"===this.type&&(this.rasterFunction||this._cachedRasterFunctionJson)&&JSON.stringify(this.rasterFunction)!==JSON.stringify(this._cachedRasterFunctionJson))if(this._isConstructedFromFunctionRaster&&
"Function"===this.raster.datasetFormat){var a=this.raster.rasterFunction.toJSON();!this.rasterFunction&&a&&this._set("rasterFunction",A.fromJSON(a));this._cachedRasterFunctionJson=this.rasterFunction?.toJSON()}else{var b=this.raster;a=!1;if("Function"===b.datasetFormat){var c=b.primaryRasters.rasters;b=c[0];a=!0}else c=[b];var {rasterFunction:d}=this;if(d){const l={raster:b};1<c.length&&c.forEach(r=>l[r.url]=r);b=Q.create(d.functionDefinition?.toJSON()??d.toJSON(),l);b=new P({rasterFunction:b});b.rasterJobHandler=
this._rasterJobHandler.instance;await b.open();this._cachedRasterFunctionJson=this.rasterFunction?.toJSON();this.raster=b}else this.raster=b,this._cachedRasterFunctionJson=null,await b.when();this._cachedRendererJson=null;if(a||d){({bandIds:a}=this);var {bandCount:e}=this.raster.rasterInfo;d=a?.length?a.some(l=>l>=e):3<=e;a&&(d||this.renderer&&"raster-stretch"!==this.renderer.type)&&this._set("bandIds",null);this._configDefaultRenderer("auto")}}}async updateRenderer(){const {loaded:a,symbolizer:b}=
this;if(a&&b&&this.renderer){var {rasterInfo:c}=this.raster,d=t.getDefaultVariablInfo(c,{multidimensionalDefinition:this.multidimensionalDefinition,multidimensionalSubset:this.multidimensionalSubset})?.name,e=q.normalizeRendererJSON({...this.renderer.toJSON(),variableName:d});if(JSON.stringify(this._cachedRendererJson)!==JSON.stringify(e)){var l=this._rasterJobHandler.instance;l&&(b.rasterInfo=q.getVariableRasterInfo(c,d),b.rendererJSON=e,b.bind(),await l.updateSymbolizer(b),this._cachedRendererJson=
e)}}}async applyRenderer(a,b){var c=a?.pixelBlock;if(!(null!=c&&c.pixels&&0<c.pixels.length))return null;await this.updateRenderer();c=this._rasterJobHandler.instance;const d=this.bandIds??[];return c?await c.symbolize({...a,simpleStretchParams:b,bandIds:d}):this.symbolizer.symbolize({...a,simpleStretchParams:b,bandIds:d})}getTileUrl(a,b,c){return"RasterTileServer"===this.raster.datasetFormat?`${this.url}/tile/${a}/${b}/${c}`:""}getCompatibleTileInfo(a,b,c=!1){if(!this.loaded||null==b)return null;
if(c&&a.equals(this.spatialReference))return this.tileInfo;c=J.getInfo(a);return B.create({size:256,spatialReference:a,origin:c?{x:c.origin[0],y:c.origin[1]}:{x:b.xmin,y:b.ymax}})}getCompatibleFullExtent(a){return this.loaded?this._compatibleFullExtent&&this._compatibleFullExtent.spatialReference.equals(a)?this._compatibleFullExtent:this._compatibleFullExtent=this.raster.computeExtent(a):null}async fetchTile(a,b,c,d={}){v(this);if(d.requestAsImageElement)return a=this.getTileUrl(a,b,c),E(a,{responseType:"image",
query:{...this.refreshParameters,...this.raster.ioConfig.customFetchParameters},signal:d.signal}).then(l=>l.data);const {rasterInfo:e}=this;if(null!=e.multidimensionalInfo&&(d=this.normalizeRasterFetchOptions(d),null==d.multidimensionalDefinition))return{extent:this.raster.getTileExtentFromTileInfo(a,b,c,d.tileInfo||e.storageInfo.tileInfo),pixelBlock:null};await this._initJobHandler();await this.updateRasterFunction();"raster-shaded-relief"===this.renderer?.type&&(d={...d,buffer:{cols:1,rows:1}});
return this.raster.fetchTile(a,b,c,d)}async fetchPixels(a,b,c,d={}){if(null!=this.rasterInfo.multidimensionalInfo&&(d=this.normalizeRasterFetchOptions(d),null==d.multidimensionalDefinition))return{extent:a,pixelBlock:null};await this._initJobHandler();await this.updateRasterFunction();b=Math.round(b);c=Math.round(c);return this.raster.fetchPixels(a,b,c,d)}async identify(a,b={}){const {raster:c,rasterInfo:d}=this;if(!(null==d.multidimensionalInfo||d.hasMultidimensionalTranspose&&(t.isMultiSliceOrRangeDefinition(b.multidimensionalDefinition)||
b.transposedVariableName||b.timeExtent))&&(b=this.normalizeRasterFetchOptions(b),null==b.multidimensionalDefinition))return{location:a,value:null};const e=this.multidimensionalSubset?.areaOfInterest;if(e&&!e.contains(a))throw new u("imagery-tile-mixin:identify","the request cannot be fulfilled when falling outside of the multidimensional subset");return c.identify(a,b)}increaseRasterJobHandlerUsage(){this._rasterJobHandler.refCount++}decreaseRasterJobHandlerUsage(){this._rasterJobHandler.refCount--;
0>=this._rasterJobHandler.refCount&&this._shutdownJobHandler()}hasStandardTime(){const a=this.rasterInfo?.multidimensionalInfo;if(null==a||"standard-time"!==this.rasterInfo?.dataType)return!1;const b=this.multidimensionalDefinition,c=b?.[0]?.variableName;return a.variables.some(d=>d.name===c&&(!b?.[0].dimensionName||d.dimensions.some(e=>"StdTime"===e.name)))}getStandardTimeValue(a){return(new Date(864E5*(a-25569))).toString()}getMultidimensionalSubsetVariables(a){return t.getSubsetVariablesFromMdInfo(this.multidimensionalSubset,
a??this.rasterInfo?.multidimensionalInfo)}_configDefaultSettings(){this._configDefaultInterpolation();this.multidimensionalDefinition||(this.multidimensionalDefinition=t.getDefaultMultidimensionalDefinition(this.raster.rasterInfo,{multidimensionalSubset:this.multidimensionalSubset}));this.rasterFunction&&"Function"===this.raster.datasetFormat&&(this._cachedRasterFunctionJson=this.rasterFunction.toJSON());this._configDefaultRenderer()}_initJobHandler(){if(null!=this._rasterJobHandler.connectionPromise)return this._rasterJobHandler.connectionPromise;
const a=new O;this._rasterJobHandler.connectionPromise=a.initialize().then(async()=>{v(this);this._rasterJobHandler.instance=a;this.raster.rasterJobHandler=a;"Function"===this.raster.datasetFormat&&this.raster.syncJobHandler();this.rasterFunction&&await this.updateRasterFunction().catch(()=>{});this.renderer&&this.updateRenderer()}).catch(()=>{});return this._rasterJobHandler.connectionPromise}_shutdownJobHandler(){this._rasterJobHandler.instance&&this._rasterJobHandler.instance.destroy();this._rasterJobHandler.instance=
null;this._rasterJobHandler.connectionPromise=null;this._rasterJobHandler.refCount=0;this._cachedRendererJson=null;this.raster&&(this.raster.rasterJobHandler=null)}_configDefaultInterpolation(){if(null==this.interpolation){v(this);var {raster:a}=this;a=q.getDefaultInterpolation(a.rasterInfo,a.tileType,this.sourceJSON?.defaultResamplingMethod);this._set("interpolation",a)}}_configDefaultRenderer(a="no"){v(this);var {rasterInfo:b}=this.raster;!this.bandIds&&1<b.bandCount&&(this.bandIds=q.getDefaultBandCombination(b));
var c=t.getDefaultVariablInfo(b,{multidimensionalDefinition:this.multidimensionalDefinition,multidimensionalSubset:this.multidimensionalSubset})?.name;if(!this.renderer||"override"===a){var d=q.createDefaultRenderer(b,{bandIds:this.bandIds,variableName:c}),e=b.statistics;e=e&&0<e.length?e[0]:null;"WCSServer"===this.raster.datasetFormat&&"raster-stretch"===d.type&&(1E24<(e?.max??0)||-1E24>(e?.min??0))&&(d.dynamicRangeAdjustment=!0,d.statistics=null,"none"===d.stretchType&&(d.stretchType="min-max"));
this.renderer=d}d=q.normalizeRendererJSON({...this.renderer.toJSON(),variableName:c});b=q.getVariableRasterInfo(b,c);this.symbolizer?(this.symbolizer.rendererJSON=d,this.symbolizer.rasterInfo=b):this.symbolizer=new T({rendererJSON:d,rasterInfo:b});b=this.symbolizer.bind();b.success?"auto"===a&&({colormap:b}=this.raster.rasterInfo,a=this.renderer,null!=b&&"raster-colormap"===a.type?(b=q.createDefaultRenderer(this.raster.rasterInfo),JSON.stringify(b)!==JSON.stringify(a)&&this._configDefaultRenderer("override")):
"raster-stretch"===a.type&&(b=this.bandIds?.length,c=a.statistics?.length,!a.dynamicRangeAdjustment&&c&&b&&c!==b&&this._configDefaultRenderer("override"))):(D.warn("imagery-tile-mixin",b.error||"The given renderer is not supported by the layer."),"auto"===a&&this._configDefaultRenderer("override"))}};h.__decorate([k.property({clonable:!1})],g.prototype,"_cachedRendererJson",void 0);h.__decorate([k.property({clonable:!1})],g.prototype,"_cachedRasterFunctionJson",void 0);h.__decorate([k.property({clonable:!1})],
g.prototype,"_compatibleFullExtent",void 0);h.__decorate([k.property({clonable:!1})],g.prototype,"_isConstructedFromFunctionRaster",void 0);h.__decorate([k.property({clonable:!1})],g.prototype,"_rasterJobHandler",void 0);h.__decorate([k.property()],g.prototype,"bandIds",void 0);h.__decorate([k.property({json:{origins:{service:{read:{source:"copyrightText"}}}}})],g.prototype,"copyright",void 0);h.__decorate([k.property({json:{read:!1}})],g.prototype,"fullExtent",null);h.__decorate([k.property()],g.prototype,
"interpolation",void 0);h.__decorate([k.property()],g.prototype,"ioConfig",void 0);h.__decorate([k.property({type:[M],json:{write:!0}})],g.prototype,"multidimensionalDefinition",null);h.__decorate([k.property({type:N,json:{write:!0}})],g.prototype,"multidimensionalSubset",void 0);h.__decorate([k.property()],g.prototype,"raster",void 0);h.__decorate([k.property({type:A,json:{name:"renderingRule",write:!0}})],g.prototype,"rasterFunction",null);h.__decorate([k.property()],g.prototype,"rasterInfo",void 0);
h.__decorate([k.property()],g.prototype,"sourceJSON",void 0);h.__decorate([k.property({readOnly:!0,type:W,json:{read:!1}})],g.prototype,"spatialReference",void 0);h.__decorate([k.property({type:B})],g.prototype,"tileInfo",void 0);h.__decorate([k.property(L.url)],g.prototype,"url",null);h.__decorate([k.property({types:x.rasterRendererTypes,json:{name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy(){const a="raster-stretch"===this.renderer?.type&&"none"===this.renderer.stretchType&&!this.renderer.useGamma;
return{enabled:!this.loaded||"Raster"===this.raster.tileType||!a}}},origins:{"web-scene":{types:x.websceneRasterRendererTypes,name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy(a){return{enabled:a&&"vector-field"!==a.type&&"flow"!==a.type}}}}}}})],g.prototype,"renderer",null);h.__decorate([H.reader("renderer")],g.prototype,"readRenderer",null);h.__decorate([k.property({clonable:!1})],g.prototype,"symbolizer",void 0);return g=h.__decorate([I.subclass("esri.layers.ImageryTileMixin")],
g)};Object.defineProperty(z,Symbol.toStringTag,{value:"Module"})});