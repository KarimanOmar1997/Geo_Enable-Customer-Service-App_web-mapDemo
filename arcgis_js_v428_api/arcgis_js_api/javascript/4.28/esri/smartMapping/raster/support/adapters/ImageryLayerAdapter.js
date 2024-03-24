// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../../../chunks/tslib.es6 ../../../../geometry ../../../../core/accessorSupport/decorators/property ../../../../core/accessorSupport/ensureType ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/decorators/subclass ../../../../layers/support/rasterFunctions/stretchUtils ../../../../rest/support/ImageHistogramParameters ./RasterLayerAdapter ../../../../geometry/Point".split(" "),function(f,d,m,w,x,y,n,p,q,r,t){d=class extends r{generateRasterInfo(a){try{return this.layer.generateRasterInfo(a?.rasterFunction,
{signal:a?.signal})}catch{return Promise.resolve(this.layer.serviceRasterInfo)}}async estimateStatisticsHistograms(a){const {layer:b}=this,g=`${a?.rasterFunction?.functionName??"default"}${b.mosaicRule?.multidimensionalDefinition?.[0]?.variableName??""}`;var c=this._statsCache.get(g);if(c)return c;let {width:h,height:k,pixelSize:e}=b.rasterInfo;for(c=1;2E3<h||2E3<k;)h/=2,k/=2,c*=2;const u=a?.rasterFunction??b.rasterFunction,{fullExtent:l,mosaicRule:v}=b;e=new t(e.x*c,e.y*c,l.spatialReference);c=new q({geometry:l,
pixelSize:e,renderingRule:u,mosaicRule:v});b.capabilities.operations.supportsComputeStatisticsHistograms?a=await b.computeStatisticsHistograms(c,a):({histograms:a}=await b.computeHistograms(c,a),a={statistics:p.estimateStatisticsFromHistograms(a),histograms:a});a&&this._statsCache.put(g,a);return a}supportsMultidirectionalHillshade(){return 10.81<=this.layer.version}load(a){this.addResolvingPromise(this.layer.load(a).then(()=>{this.generateRasterInfo({rasterFunction:this.rasterFunction,signal:a?.signal}).then(b=>
this.rasterInfo=b)}));return Promise.resolve(this)}};f.__decorate([m.property()],d.prototype,"layer",void 0);return d=f.__decorate([n.subclass("esri.smartMapping.support.adapters.ImageryLayerAdapter")],d)});