// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/decorators/subclass ../rasterFunctionConstants ../rasterFormats/pixelRangeUtils ./BaseRasterFunction ./LocalFunctionArguments ./localUtils".split(" "),function(h,m,f,u,v,p,n,q,r,t,k){f=class extends r{constructor(){super(...arguments);this.functionName="Local";this.functionArguments=null;this.rasterArgumentNames=
["rasters"]}_bindSourceRasters(){var {sourceRasterInfos:a}=this,b=a[0];const {bandCount:l}=b;var {processAsMultiband:c}=this.functionArguments;if(a.some(d=>d.bandCount!==l))return{success:!1,supportsGPU:!1,error:"local-function: input rasters do not have same band count"};const {operation:e,rasters:g}=this.functionArguments;a=k.operandsCount[e];if(!(999===a||g.length===a||1>=g.length&&1===a))return{success:!1,supportsGPU:!1,error:`local-function: the length of functionArguments.rasters does not match operation's requirement: ${a}`};
this.outputPixelType=this._getOutputPixelType("f32");b=b.clone();b.pixelType=this.outputPixelType;b.statistics=null;b.histograms=null;b.colormap=null;b.attributeTable=null;b.bandCount=999!==a||c?l:1;if(c=k.getOutputDomain(e)){b.statistics=[];for(let d=0;d<b.bandCount;d++)b.statistics[d]={min:c[0],max:c[1],avg:(c[0]+c[1])/2,stddev:(c[0]+c[1])/10}}this.rasterInfo=b;return{success:!0,supportsGPU:1===b.bandCount&&3>=a&&(11>e||16<e)}}_processPixels(a){({pixelBlocks:a}=a);return null==a||a.some(b=>null==
b)?null:k.local(a,this.functionArguments.operation,{processAsMultiband:this.functionArguments.processAsMultiband,outputPixelType:this.outputPixelType??void 0})}_getWebGLParameters(){const {operation:a}=this.functionArguments,b=k.operandsCount[a],l=Object.keys(n.localOperators).find(d=>n.localOperators[d]===a)?.toLowerCase()??"undefined";var c=this.outputPixelType??"f32";let [e,g]=q.getPixelValueRange(c);if(c=c.startsWith("u")||c.startsWith("s"))e-=1E-4,g+=1E-4;return{imageCount:b,operationName:l,
domainRange:[e,g],isOutputRounded:c}}};h.__decorate([m.property({json:{write:!0,name:"rasterFunction"}})],f.prototype,"functionName",void 0);h.__decorate([m.property({type:t,json:{write:!0,name:"rasterFunctionArguments"}})],f.prototype,"functionArguments",void 0);h.__decorate([m.property()],f.prototype,"rasterArgumentNames",void 0);return f=h.__decorate([p.subclass("esri.layers.support.rasterFunctions.LocalFunction")],f)});