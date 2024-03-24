// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../request ../../../core/urlUtils ../../../geometry/support/jsonUtils ../../../geometry/support/normalizeUtils ../../../geometry/support/spatialReferenceUtils ../../operations/urlUtils ./pbfQueryUtils ./queryZScale".split(" "),function(f,u,m,v,w,n,x,y,z){function p(b,c){if(c&&"extent"===b.type)return`${b.xmin},${b.ymin},${b.xmax},${b.ymax}`;if(c&&"point"===b.type)return`${b.x},${b.y}`;b=b.toJSON();delete b.spatialReference;return JSON.stringify(b)}function q(b,c){const d=b.geometry,
a=b.toJSON();delete a.compactGeometryEnabled;delete a.defaultSpatialReferenceEnabled;let g,e,r;null!=d&&(e=d.spatialReference,r=n.srToRESTValue(e),a.geometryType=v.getJsonType(d),a.geometry=p(d,b.compactGeometryEnabled),a.inSR=r);a.groupByFieldsForStatistics&&(a.groupByFieldsForStatistics=a.groupByFieldsForStatistics.join(","));a.objectIds&&(a.objectIds=a.objectIds.join(","));a.orderByFields&&(a.orderByFields=a.orderByFields.join(","));!a.outFields||!a.returnDistinctValues&&(c?.returnCountOnly||c?.returnExtentOnly||
c?.returnIdsOnly)?delete a.outFields:a.outFields.includes("*")?a.outFields="*":a.outFields=a.outFields.join(",");a.outSR?(a.outSR=n.srToRESTValue(a.outSR),g=b.outSpatialReference):d&&(a.returnGeometry||a.returnCentroid)&&(a.outSR=a.inSR,g=e);a.returnGeometry&&delete a.returnGeometry;a.outStatistics&&(a.outStatistics=JSON.stringify(a.outStatistics));a.fullText&&(a.fullText=JSON.stringify(a.fullText));a.pixelSize&&(a.pixelSize=JSON.stringify(a.pixelSize));a.quantizationParameters&&(b.defaultSpatialReferenceEnabled&&
null!=e&&null!=b.quantizationParameters?.extent&&e.equals(b.quantizationParameters.extent.spatialReference)&&delete a.quantizationParameters.extent.spatialReference,a.quantizationParameters=JSON.stringify(a.quantizationParameters));a.parameterValues&&(a.parameterValues=JSON.stringify(a.parameterValues));a.rangeValues&&(a.rangeValues=JSON.stringify(a.rangeValues));a.dynamicDataSource&&(a.layer=JSON.stringify({source:a.dynamicDataSource}),delete a.dynamicDataSource);if(a.timeExtent){const {start:k,
end:l}=a.timeExtent;if(null!=k||null!=l)a.time=k===l?k:`${null==k?"null":k},${null==l?"null":l}`;delete a.timeExtent}b.defaultSpatialReferenceEnabled&&null!=e&&null!=g&&e.equals(g)&&(a.defaultSR=a.inSR,delete a.inSR,delete a.outSR);return a}function t(b,c,d){return h(b,c,"pbf",d)}async function h(b,c,d,a={},g={}){b="string"===typeof b?m.urlToObject(b):b;var e=(await w.normalizeCentralMeridian(c.geometry?[c.geometry]:[],null,{signal:a.signal}))?.[0];null!=e&&(c=c.clone(),c.geometry=e);e=x.mapParameters({...b.query,
f:d,...g,...q(c,g)});return u(m.join(b.path,null==c.formatOf3DObjects||g.returnCountOnly||g.returnExtentOnly||g.returnIdsOnly?"query":"query3d"),{...a,responseType:"pbf"===d?"array-buffer":"json",query:{...e,...a.query}})}f.encodeGeometry=p;f.executeQuery=async function(b,c,d,a){b=null!=c.timeExtent&&c.timeExtent.isEmpty?{data:{features:[]}}:await h(b,c,"json",a);z.applyFeatureSetZUnitScaling(c,d,b.data);return b};f.executeQueryForCount=function(b,c,d){return null!=c.timeExtent&&c.timeExtent.isEmpty?
Promise.resolve({data:{count:0}}):h(b,c,"json",d,{returnIdsOnly:!0,returnCountOnly:!0})};f.executeQueryForExtent=async function(b,c,d){if(null!=c.timeExtent&&c.timeExtent.isEmpty)return{data:{count:0,extent:null}};b=await h(b,c,"json",d,{returnExtentOnly:!0,returnCountOnly:!0});c=b.data;if(c.hasOwnProperty("extent"))return b;if(c.features)throw Error("Layer does not support extent calculation.");if(c.hasOwnProperty("count"))throw Error("Layer does not support extent calculation.");return b};f.executeQueryForIds=
function(b,c,d){return null!=c.timeExtent&&c.timeExtent.isEmpty?Promise.resolve({data:{objectIds:[]}}):h(b,c,"json",d,{returnIdsOnly:!0})};f.executeQueryPBF=async function(b,c,d,a){if(null!=c.timeExtent&&c.timeExtent.isEmpty)return{data:d.createFeatureResult()};b=await t(b,c,a);b.data=y.parsePBFFeatureQuery(b.data,d);return b};f.executeQueryPBFBuffer=t;f.queryToQueryStringParameters=q;f.runQuery=h;Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});