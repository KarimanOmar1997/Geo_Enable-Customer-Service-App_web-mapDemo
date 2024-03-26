// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../geometry ../../../core/Error ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/decorators/subclass ../LOD ../RasterInfo ../RasterStorageInfo ../TileInfo ./BaseRaster ./DBFParser ../rasterTransforms/utils ../../../rest/support/FeatureSet ../../../geometry/SpatialReference ../../../geometry/Extent ../../../geometry/Point".split(" "),function(y,
t,z,E,V,W,X,I,J,K,L,M,N,O,F,P,Q,R,G){const n=new Map;n.set("int16","esriFieldTypeSmallInteger");n.set("int32","esriFieldTypeInteger");n.set("int64","esriFieldTypeInteger");n.set("float32","esriFieldTypeSingle");n.set("float64","esriFieldTypeDouble");n.set("text","esriFieldTypeString");t=class extends N{constructor(){super(...arguments);this.storageInfo=null;this.datasetFormat="CRF"}async open(a){await this.init();({data:a}=await this.request(this.url+"/conf.json",{signal:a?.signal}));if(!this._validateHeader(a))throw new z("cloudraster:open",
"Invalid or unsupported conf.json.");this.datasetName=this.url.slice(this.url.lastIndexOf("/")+1);const {storageInfo:b,rasterInfo:c}=this._parseHeader(a);"thematic"===c.dataType&&(a=await this._fetchAuxiliaryInformation(),c.attributeTable=a);this._set("storageInfo",b);this._set("rasterInfo",c);this.ioConfig.retryCount=this.ioConfig.retryCount||0}async fetchRawTile(a,b,c,d={}){var {transposeInfo:g}=this.rasterInfo.storageInfo,{transposedVariableName:e}=d;a=(g=!(!g||!e))?0:this.rasterInfo.storageInfo.maximumPyramidLevel-
a;if(0>a)return null;e=this._buildCacheFilePath(a,b,c,d.multidimensionalDefinition,e);b=this._getIndexRecordFromBundle(b,c,g);c=await this.request(e,{range:{from:0,to:this.storageInfo.headerSize-1},responseType:"array-buffer",signal:d.signal});if(!c)return null;c=new Uint8Array(c.data);b=this._getTileEndAndContentType(c,b);if(0===b.recordSize)return null;d=await this.request(e,{range:{from:b.position,to:b.position+b.recordSize},responseType:"array-buffer",signal:d.signal});if(!d)return null;const [m,
p]=this._getTileSize(g);return this.decodePixelBlock(d.data,{width:m,height:p,planes:null,pixelType:null,returnInterleaved:g})}_validateHeader(a){const b="origin extent geodataXform LODInfos blockWidth blockHeight bandCount pixelType pixelSizeX pixelSizeY format packetSize".split(" ");return a&&"RasterInfo"===a.type&&!b.some(c=>!a[c])}_parseHeader(a){var b="u1 u2 u4 u8 s8 u16 s16 u32 s32 f32 f64".split(" ")[a.pixelType];const {bandCount:c,colormap:d,blockWidth:g,blockHeight:e,firstPyramidLevel:m,
maximumPyramidLevel:p}=a,S=a.statistics?.map(r=>({min:r.min,max:r.max,avg:r.mean,stddev:r.standardDeviation,median:r.median,mode:r.mode})),T=a.histograms?.[0]?.counts?.length?a.histograms:null;var l=a.extent.spatialReference,h=a.geodataXform?.spatialReference;l=new Q(l?.wkid||l?.wkt||l?.wkt2?l:h);h=new R({xmin:a.extent.xmin,ymin:a.extent.ymin,xmax:a.extent.xmax,ymax:a.extent.ymax,spatialReference:l});const u=new G({x:a.pixelSizeX,y:a.pixelSizeY,spatialReference:l}),v=Math.round((h.xmax-h.xmin)/u.x),
w=Math.round((h.ymax-h.ymin)/u.y),x=this._parseTransform(a.geodataXform),U=x?h:null;x&&(h=x.forwardTransform(h),u.x=(h.xmax-h.xmin)/v,u.y=(h.ymax-h.ymin)/w);const A=a.properties??{};var B=a.format.toLowerCase().replace("cache/","");const H=new G(a.origin.x,a.origin.y,l);let C;var f;if(d?.colors)for(C=[],f=0;f<d.colors.length;f++){var k=d.colors[f];var q=d.values?d.values[f]:f;C.push([q,k&255,k<<16>>>24,k<<8>>>24,k>>>24])}k=a.LODInfos;q=[];for(f=0;f<k.levels.length;f++)q.push(new J({level:k.levels[f],
resolution:k.resolutions[f],scale:96/.0254*k.resolutions[f]}));k=new M({dpi:96,lods:q,format:B,origin:H,size:[g,e],spatialReference:l});B={recordSize:8,packetSize:a.packetSize,headerSize:a.packetSize*a.packetSize*8+64};q=[{maxCol:Math.ceil(v/g)-1,maxRow:Math.ceil(w/e)-1,minCol:0,minRow:0}];let D=2;if(0<p)for(f=0;f<p;f++)q.push({maxCol:Math.ceil(v/D/g)-1,maxRow:Math.ceil(w/D/e)-1,minCol:0,minRow:0}),D*=2;a=a.mdInfo;f=null;a&&A._yxs&&(f=A._yxs,f={packetSize:f.PacketSize,tileSize:[f.TileXSize,f.TileYSize]});
b=new K({width:v,height:w,pixelType:b,bandCount:c,extent:h,nativeExtent:U,transform:x,spatialReference:l,pixelSize:u,keyProperties:A,statistics:S,histograms:T,multidimensionalInfo:a,colormap:C,storageInfo:new L({blockWidth:g,blockHeight:e,pyramidBlockWidth:g,pyramidBlockHeight:e,origin:H,tileInfo:k,transposeInfo:f,firstPyramidLevel:m,maximumPyramidLevel:p,blockBoundary:q})});return{storageInfo:B,rasterInfo:b}}_parseTransform(a){if(!F.isTransformSupported(a))throw new z("cloudraster:open","the data contains unsupported geodata transform types");
a=F.readTransform(a);if("identity"===a.type)return null;if("polynomial"!==a.type||!a.forwardCoefficients?.length||!a.inverseCoefficients?.length)throw new z("cloudraster:open","the data contains unsupported geodata transforms - both forward and inverse coefficients are required currently");return a}async _fetchAuxiliaryInformation(a){var b=this.request(this.url+"/conf.vat.json",{signal:a}).then(d=>d.data).catch(()=>null);a=this.request(this.url+"/conf.vat.dbf",{responseType:"array-buffer",signal:a}).then(d=>
d.data).catch(()=>null);b=await Promise.all([b,a]);let c;if(b[0]){a=b[0].fields;const d=b[0].values;if(a&&d){a=a.map(e=>({type:"OID"===e.name?"esriFieldTypeOID":n.get(e.type),name:e.name,alias:e.alias||e.name}));const g=d.map(e=>({attributes:e}));a&&d&&(c={fields:a,features:g})}}!c&&b[1]&&(c=O.parse(b[1]).recordSet);return P.fromJSON(c)}_buildCacheFilePath(a,b,c,d,g){var e=this._getPackageSize(!!g);c=Math.floor(c/e)*e;b="R"+this._toHexString4(Math.floor(b/e)*e)+"C"+this._toHexString4(c);e="L";e=10<=
a?e+a.toString():e+("0"+a.toString());({multidimensionalInfo:a}=this.rasterInfo);const m=d?.[0];if(null==a||!m)return`${this.url}/_alllayers/${e}/${b}.bundle`;d="_yxs";if(!g){d=a.variables.find(p=>p.name===m.variableName).dimensions[0].values.indexOf(m.values[0]).toString(16);a=4-d.length;for(c=0;c<a;c++)d="0"+d;d="S"+d}g=this._getVariableFolderName(g||m.variableName);return`${this.url}/_alllayers/${g}/${d}/${e}/${b}.bundle`}_getPackageSize(a=!1){const {transposeInfo:b}=this.rasterInfo.storageInfo;
return a&&null!=b?b.packetSize??0:this.storageInfo.packetSize}_getTileSize(a=!1){const {storageInfo:b}=this.rasterInfo,{transposeInfo:c}=b;return a&&null!=c?c.tileSize:b.tileInfo.size}_getVariableFolderName(a){a=a.trim();return""===a?"_v":a.replaceAll(/[\{|\}\-]/g,"_").replace("\\*","_v")}_getIndexRecordFromBundle(a,b,c=!1){c=this._getPackageSize(c);a=a%c*c+b%c;if(0>a)throw Error("Invalid level / row / col");return a*this.storageInfo.recordSize+64}_getTileEndAndContentType(a,b){a=a.subarray(b,b+8);
b=0;let c;for(c=0;5>c;c++)b|=(a[c]&255)<<8*c;const d=b&0xffffffffff;b=0;for(c=5;8>c;c++)b|=(a[c]&255)<<8*(c-5);return{position:d,recordSize:b&0xffffffffff}}_toHexString4(a){a=a.toString(16);if(4!==a.length){let b=4-a.length;for(;0<b--;)a="0"+a}return a}};y.__decorate([E.property({readOnly:!0})],t.prototype,"storageInfo",void 0);y.__decorate([E.property({type:String,json:{write:!0}})],t.prototype,"datasetFormat",void 0);return t=y.__decorate([I.subclass("esri.layers.support.rasterDatasets.CloudRaster")],
t)});