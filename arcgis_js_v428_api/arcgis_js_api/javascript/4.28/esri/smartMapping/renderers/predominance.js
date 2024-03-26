// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../core/Error ../../intl/messages ../../renderers/support/AuthoringInfo ../../renderers/support/AuthoringInfoVisualVariable ../../renderers/support/numberUtils ../../renderers/visualVariables/OpacityVariable ../heuristics/outline ./size ./type ./support/utils ../statistics/predominantCategories ../statistics/summaryStatistics ../statistics/support/predominanceUtils ../support/binningUtils ../support/adapters/support/layerUtils ../symbology/predominance".split(" "),function(x,m,
v,y,E,F,G,H,I,J,l,K,L,M,N,q,z){async function O(a){if(!(a?.layer&&a.view&&a.fields?.length))throw new m("predominance-renderer:missing-parameters","'layer', 'view' and 'fields' parameters are required");if(2>a.fields.length)throw new m("predominance-renderer:invalid-parameters","Minimum 2 fields are required");if(10<a.fields.length)throw new m("predominance-renderer:invalid-parameters","Maximum 10 fields are supported");a.forBinning&&N.verifyBinningParams(a,"predominance-renderer");const b={...a,
layer:a.layer,fields:a.fields};b.symbolType=b.symbolType||"2d";b.defaultSymbolEnabled??(b.defaultSymbolEnabled=!0);b.includeOpacityVariable=a.includeOpacityVariable||!1;b.includeSizeVariable=a.includeSizeVariable||!1;b.sortBy??(b.sortBy="count");a=q.createLayerAdapter(b.layer,a.forBinning?q.binningCapableLayerTypes:q.featureCapableLayerTypes,a.forBinning);if(!a)throw new m("predominance-renderer:invalid-parameters","'layer' must be one of these types: "+q.getLayerTypeLabels(q.featureCapableLayerTypes).join(", "));
b.layer=a;await a.load(null!=b.signal?{signal:b.signal}:null);var c=a.geometryType;const d=b.symbolType.includes("3d");b.outlineOptimizationEnabled="polygon"===c?b.outlineOptimizationEnabled:!1;b.includeSizeVariable||(b.sizeOptimizationEnabled="point"===c||"multipoint"===c||"polyline"===c?b.sizeOptimizationEnabled:!1);if("mesh"===c)b.symbolType="3d-volumetric",b.colorMixMode=b.colorMixMode||"replace",b.edgesType=b.edgesType||"none",b.sizeOptimizationEnabled=!1;else{if(d&&("polyline"===c||"polygon"===
c))throw new m("predominance-renderer:not-supported","3d symbols are not supported for polyline and polygon layers");if(b.symbolType.includes("3d-volumetric")&&(!b.view||"3d"!==b.view.type))throw new m("predominance-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or '3d-volumetric-uniform'");}c=b.fields.map(e=>e.name);if(a=l.verifyBasicFieldValidity(a,c,"predominance-renderer:invalid-parameters"))throw a;return b}async function P(a){let b=
a.predominanceScheme,c=null;var d=null;d=await l.getBasemapInfo(a.basemap,a.view);c=null!=d.basemapId?d.basemapId:null;d=null!=d.basemapTheme?d.basemapTheme:null;if(b)return{scheme:z.cloneScheme(b),basemapId:c,basemapTheme:d};if(a=z.getSchemes({basemapTheme:d,geometryType:a.geometryType,numColors:a.numColors,theme:a.theme,worldScale:a.worldScale,view:a.view}))b=a.primaryScheme,c=a.basemapId,d=a.basemapTheme;return{scheme:b,basemapId:c,basemapTheme:d}}async function Q(a,b,c,d){var e=await v.fetchMessageBundle("esri/smartMapping/t9n/smartMapping"),
f=a.layer,k={layer:a.layer,view:a.view,signal:a.signal};const [g,n]=await Promise.all([K({layer:f,fields:d,view:a.view,signal:a.signal}),a.outlineOptimizationEnabled?H(k).catch(l.errorCallback):null]);k=g;g?.predominantCategoryInfos||(k={predominantCategoryInfos:d.map(h=>({value:h,count:0}))});const A=n&&n.opacity;b=await J.createRenderer({layer:f,basemap:a.basemap,valueExpression:b.valueExpression,valueExpressionTitle:e.predominantCategory,numTypes:-1,defaultSymbolEnabled:a.defaultSymbolEnabled,
sortBy:a.sortBy,typeScheme:c,statistics:{uniqueValueInfos:k.predominantCategoryInfos},legendOptions:a.legendOptions,outlineOptimizationEnabled:!1,sizeOptimizationEnabled:a.includeSizeVariable&&a.sizeOptimizationEnabled?!1:a.sizeOptimizationEnabled,symbolType:a.symbolType,colorMixMode:a.colorMixMode,edgesType:a.edgesType,view:a.view,signal:a.signal});const {renderer:r,basemapId:R,basemapTheme:S,uniqueValueInfos:w,excludedUniqueValueInfos:T}=b;b=r.uniqueValueInfos??[];const B={};for(var p of a.fields)e=
f.getField(p.name),B[e.name]=p.label||e&&e.alias||p.name;b.forEach((h,t)=>{const u=B[h.value];h.label=u;w[t].label=u});if(a.includeSizeVariable){let h=f.geometryType,t=null;"polygon"===h?(f=c.sizeScheme,p=f.background,r.backgroundFillSymbol=l.createSymbol(h,{type:a.symbolType,color:p.color,outline:l.getSymbolOutlineFromScheme(p,h,A)}),t=f.marker.size,h="point"):t="polyline"===h?c.width:c.size;const u=l.createColors(c.colors,b.length);b.forEach((U,C)=>{const D=l.createSymbol(h,{type:a.symbolType,color:u[C],
size:t,outline:l.getSymbolOutlineFromScheme(c,h,A),meshInfo:{colorMixMode:a.colorMixMode,edgesType:a.edgesType}});U.symbol=D;w[C].symbol=D.clone()})}n&&n.visualVariables&&n.visualVariables.length&&(r.visualVariables=n.visualVariables.map(h=>h.clone()));r.authoringInfo=new y({type:"predominance",fields:[...d]});return{renderer:r,predominantCategoryInfos:w,excludedCategoryInfos:T,predominanceScheme:c,basemapId:R,basemapTheme:S}}async function V(a,b,c){const d=await v.fetchMessageBundle("esri/smartMapping/t9n/smartMapping");
return I.createVisualVariables({layer:a.layer,basemap:a.basemap,valueExpression:b.valueExpression,sqlExpression:b.statisticsQuery.sqlExpression,sqlWhere:b.statisticsQuery.sqlWhere,sizeScheme:c,sizeOptimizationEnabled:a.sizeOptimizationEnabled,worldScale:!!a.symbolType?.includes("3d-volumetric"),legendOptions:{title:d.sumOfCategories},view:a.view,signal:a.signal})}async function W(a,b){var c=await v.fetchMessageBundle("esri/smartMapping/t9n/smartMapping");const d=await L({layer:a.layer,valueExpression:b.valueExpression,
sqlExpression:b.statisticsQuery.sqlExpression,sqlWhere:b.statisticsQuery.sqlWhere,view:a.view,signal:a.signal}),{avg:e,stddev:f}=d,k=null==e||null==f;a=1/a.fields.length*100;let g=k?100:e+1.285*f;100<g&&(g=100);a=F.round([a,g],{strictBounds:!0});b=new G({valueExpression:b.valueExpression,stops:[{value:a[0],opacity:.15},{value:a[1],opacity:1}],legendOptions:{title:c.strengthOfPredominance}});c=new E({type:"opacity",minSliderValue:d.min,maxSliderValue:d.max});c=new y({visualVariables:[c]});return{visualVariable:b,
statistics:d,defaultValuesUsed:k,authoringInfo:c}}x.createRenderer=async function(a){a=await O(a);var b=a.layer,c=(await P({basemap:a.basemap,geometryType:b.geometryType,numColors:a.fields.length,predominanceScheme:a.predominanceScheme,worldScale:!!a.symbolType?.includes("3d-volumetric"),view:a.view})).scheme,d=a.fields.map(g=>g.name);b=M.getPredominanceExpressions(b,d);d=Q(a,b.predominantCategory,c,d);c=a.includeSizeVariable?V(a,b.size,c.sizeScheme):null;a=a.includeOpacityVariable?W(a,b.opacity):
null;const [e,f,k]=await Promise.all([d,c,a]);a=[];c=[];f&&(Array.prototype.push.apply(a,f.visualVariables.map(g=>g.clone())),delete f.sizeScheme,e.size=f,Array.prototype.push.apply(c,f.authoringInfo.visualVariables.map(g=>g.clone())));k&&(a.push(k.visualVariable.clone()),e.opacity=k,Array.prototype.push.apply(c,k.authoringInfo.visualVariables.map(g=>g.clone())));a.length&&(b=e.renderer.visualVariables||[],Array.prototype.push.apply(b,a),e.renderer.visualVariables=b,e.renderer.authoringInfo.visualVariables=
c);return e};Object.defineProperty(x,Symbol.toStringTag,{value:"Module"})});