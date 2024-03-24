"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[6601],{66601:(e,a,r)=>{r.r(a),r.d(a,{fromUrl:()=>d});var t=r(60991),n=r(32101),l=r(21132),s=r(24083),i=r(14830),o=r(39855),u=r(67902),c=r(51698);r(76506),r(48578),r(92143),r(31450),r(12047),r(29768),r(21972),r(17533),r(86656),r(66396),r(22723),r(6540),r(91306),r(34250),r(379),r(62062),r(6906),r(79456),r(50406),r(38742),r(88762),r(82058),r(49900),r(81184),r(33101),r(97714),r(21801),r(73796),r(60947),r(53785),r(57251),r(89623),r(73173),r(2906),r(91597),r(86787),r(35132),r(3482),r(58943),r(67477),r(78533),r(74653),r(91091),r(56420),r(74742),r(28239);const y={FeatureLayer:!0,SceneLayer:!0};async function d(e){const a=e.properties?.customParameters,u=await async function(e,a){let r=(0,l.p)(e);if(null==r&&(r=await async function(e,a){const r=await(0,c.f)(e,{customParameters:a});let t=null,s=null;const i=r.type;if("Feature Layer"===i||"Table"===i?(t="FeatureServer",s=r.id??null):"indexedVector"===i?t="VectorTileServer":r.hasOwnProperty("mapName")?t="MapServer":r.hasOwnProperty("bandCount")&&r.hasOwnProperty("pixelSizeX")?t="ImageServer":r.hasOwnProperty("maxRecordCount")&&r.hasOwnProperty("allowGeometryUpdates")?t="FeatureServer":r.hasOwnProperty("streamUrls")?t="StreamServer":m(r)?(t="SceneServer",s=r.id):r.hasOwnProperty("layers")&&m(r.layers?.[0])&&(t="SceneServer"),!t)return null;const o=null!=s?(0,l.e)(e):null;return{title:null!=o&&r.name||(0,n.vt)(e),serverType:t,sublayer:s,url:{path:null!=o?o.serviceUrl:(0,n.mN)(e).path}}}(e,a)),null==r)throw new t.Z("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:e});const{serverType:u,sublayer:d}=r;let f;const h={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"},p="FeatureServer"===u,b="SceneServer"===u,v={parsedUrl:r,Constructor:null,layerId:p||b?d??void 0:void 0,layers:[],tables:[]};switch(u){case"MapServer":f=null!=d?"FeatureLayer":await async function(e,a){return(await(0,c.f)(e,{customParameters:a})).tileInfo}(e,a)?"TileLayer":"MapImageLayer";break;case"ImageServer":{const r=await(0,c.f)(e,{customParameters:a}),{tileInfo:t,cacheType:n}=r;f=t?"LERC"!==t?.format?.toUpperCase()||n&&"elevation"!==n.toLowerCase()?"ImageryTileLayer":"ElevationLayer":"ImageryLayer";break}case"SceneServer":{const e=await(0,c.f)(r.url.path,{customParameters:a});if(f="SceneLayer",e){const a=e?.layers;if("Voxel"===e?.layerType)f="VoxelLayer";else if(a?.length){const e=a[0]?.layerType;null!=e&&null!=o.v[e]&&(f=o.v[e])}}break}case"FeatureServer":if(f="FeatureLayer",null!=d){const r=await(0,c.f)(e,{customParameters:a});v.sourceJSON=r,"Oriented Imagery Layer"===r.type&&(f="OrientedImageryLayer")}break;default:f=h[u]}if(y[f]&&null==d){const r=await async function(e,a,r){let t,n,l=!1;switch(a){case"FeatureServer":{const a=await(0,i.f)(e,{customParameters:r});l=!!a.layersJSON,t=a.layersJSON||a.serviceJSON;break}case"SceneServer":{const a=await async function(e,a){const r=await(0,c.f)(e,{customParameters:a}),t=r.layers?.[0];if(!t)return{serviceInfo:r};try{const{serverUrl:t}=await(0,s.f)(e),n=await(0,c.f)(t,{customParameters:a}).catch((()=>null));return n&&(r.tables=n.tables),{serviceInfo:r,tableServerUrl:t}}catch{return{serviceInfo:r}}}(e,r);t=a.serviceInfo,n=a.tableServerUrl;break}default:t=await(0,c.f)(e,{customParameters:r})}const o=t?.layers,u=t?.tables;return{layers:o?.map((e=>({id:e.id}))).reverse()||[],tables:u?.map((e=>({serverUrl:n,id:e.id}))).reverse()||[],layerInfos:l?o:[],tableInfos:l?u:[]}}(e,u,a);if(p&&(v.sublayerInfos=r.layerInfos,v.tableInfos=r.tableInfos),1!==r.layers.length+r.tables.length)v.layers=r.layers,v.tables=r.tables,p&&r.layerInfos?.length&&(v.sublayerConstructorProvider=await async function(e){const a=[],r=[];if(e.forEach((e=>{const{type:t}=e;"Oriented Imagery Layer"===t?(a.push(t),r.push(w("OrientedImageryLayer"))):(a.push(t),r.push(w("FeatureLayer")))})),!r.length)return;const t=await Promise.all(r),n=new Map;return a.forEach(((e,a)=>{n.set(e,t[a])})),e=>n.get(e.type)}(r.layerInfos));else if(p||b){const e=r.layerInfos?.[0]??r.tableInfos?.[0];v.layerId=r.layers[0]?.id??r.tables[0]?.id,v.sourceJSON=e,p&&"Oriented Imagery Layer"===e?.type&&(f="OrientedImageryLayer")}}return v.Constructor=await w(f),v}(e.url,a),d={...e.properties,url:e.url};if(u.layers.length+u.tables.length===0)return null!=u.layerId&&(d.layerId=u.layerId),null!=u.sourceJSON&&(d.sourceJSON=u.sourceJSON),new u.Constructor(d);const h=new(0,(await Promise.all([r.e(1259),r.e(4350),r.e(951)]).then(r.bind(r,59061))).default)({title:u.parsedUrl.title});return await async function(e,a,r){function t(e,a,t,n){const l={...r,layerId:a,sublayerTitleMode:"service-name"};return null!=e&&(l.url=e),null!=t&&(l.sourceJSON=t),n(l)}const n=a.sublayerConstructorProvider;for(const{id:r,serverUrl:l}of a.layers){const s=f(a.sublayerInfos,r),i=(s&&n?.(s))??a.Constructor,o=t(l,r,s,(e=>new i(e)));e.add(o)}if(a.tables.length){const r=await w("FeatureLayer");a.tables.forEach((({id:n,serverUrl:l})=>{const s=t(l,n,f(a.tableInfos,n),(e=>new r(e)));e.tables.add(s)}))}}(h,u,d),h}function f(e,a){return e?e.find((e=>e.id===a)):null}function m(e){return null!=e&&e.hasOwnProperty("store")&&e.hasOwnProperty("id")&&"number"==typeof e.id}async function w(e){return(0,u.l[e])()}},24083:(e,a,r)=>{r.d(a,{f:()=>c});var t=r(88762),n=r(82058),l=r(60991),s=r(50406),i=r(21132),o=r(49900),u=r(56420);async function c(e,a){const r=(0,i.p)(e);if(!r)throw new l.Z("invalid-url","Invalid scene service url");const c={...a,sceneServerUrl:r.url.path,layerId:r.sublayer??void 0};if(c.sceneLayerItem??=await async function(e){const a=(await y(e)).serviceItemId;if(!a)return null;const r=new u.default({id:a,apiKey:e.apiKey}),l=await async function(e){const a=t.id?.findServerInfo(e.sceneServerUrl);if(a?.owningSystemUrl)return a.owningSystemUrl;const r=e.sceneServerUrl.replace(/(.*\/rest)\/.*/i,"$1")+"/info";try{const a=(await(0,n.Z)(r,{query:{f:"json"},responseType:"json",signal:e.signal})).data.owningSystemUrl;if(a)return a}catch(e){(0,s.r9)(e)}return null}(e);null!=l&&(r.portal=new o.Z({url:l}));try{return r.load({signal:e.signal})}catch(e){return(0,s.r9)(e),null}}(c),null==c.sceneLayerItem)return d(c.sceneServerUrl.replace("/SceneServer","/FeatureServer"),c);const f=await async function({sceneLayerItem:e,signal:a}){if(!e)return null;try{const r=(await e.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:a})).find((e=>"Feature Service"===e.type))||null;if(!r)return null;const t=new u.default({portal:r.portal,id:r.id});return await t.load(),t}catch(e){return(0,s.r9)(e),null}}(c);if(!f?.url)throw new l.Z("related-service-not-found","Could not find feature service through portal item relationship");const m=await d(f.url,c);return m.portalItem=f,m}async function y(e){if(e.rootDocument)return e.rootDocument;const a={query:{f:"json",token:e.apiKey},responseType:"json",signal:e.signal};try{const r=await(0,n.Z)(e.sceneServerUrl,a);e.rootDocument=r.data}catch{e.rootDocument={}}return e.rootDocument}async function d(e,a){const r=(0,i.p)(e);if(!r)throw new l.Z("invalid-feature-service-url","Invalid feature service url");const t=r.url.path,s=a.layerId;if(null==s)return{serverUrl:t};const o=y(a),u=e=>{const r={query:{f:"json"},responseType:"json",authMode:e,signal:a.signal};return(0,n.Z)(t,r)},c=u("anonymous").catch((()=>u("no-prompt"))),[d,f]=await Promise.all([c,o]),m=f?.layers,w=d.data&&d.data.layers;if(!Array.isArray(w))throw new Error("expected layers array");if(Array.isArray(m)){for(let e=0;e<Math.min(m.length,w.length);e++)if(m[e].id===s)return{serverUrl:t,layerId:w[e].id}}else if(null!=s&&s<w.length)return{serverUrl:t,layerId:w[s].id};throw new Error("could not find matching associated sublayer")}},14830:(e,a,r)=>{r.d(a,{f:()=>n});var t=r(51698);async function n(e,a){const r=await(0,t.f)(e,a);c(r),i(r);const n={serviceJSON:r};if((r.currentVersion??0)<10.5)return n;const l=await(0,t.f)(e+"/layers",a);return c(l),i(l),n.layersJSON={layers:l.layers,tables:l.tables},n}function l(e){return"Feature Layer"===e.type||"Oriented Imagery Layer"===e.type}function s(e){return"Table"===e.type}function i(e){e.layers=e.layers?.filter(l),e.tables=e.tables?.filter(s)}function o(e){e.type||="Feature Layer"}function u(e){e.type||="Table"}function c(e){e.layers?.forEach(o),e.tables?.forEach(u)}},67902:(e,a,r)=>{r.d(a,{l:()=>t});const t={BingMapsLayer:async()=>(await Promise.all([r.e(1259),r.e(4350),r.e(7963)]).then(r.bind(r,37963))).default,BuildingSceneLayer:async()=>(await Promise.all([r.e(1259),r.e(4350),r.e(6467),r.e(1074),r.e(5959),r.e(208),r.e(6576),r.e(9651),r.e(2570),r.e(9275),r.e(1577),r.e(9075),r.e(7652),r.e(9506),r.e(2311),r.e(8567),r.e(5214),r.e(3439)]).then(r.bind(r,3439))).default,CSVLayer:async()=>(await Promise.all([r.e(1259),r.e(4350),r.e(6467),r.e(1074),r.e(5959),r.e(208),r.e(6576),r.e(9651),r.e(2570),r.e(9275),r.e(1577),r.e(9075),r.e(7652),r.e(9506),r.e(4004)]).then(r.bind(r,44004))).default,DimensionLayer:async()=>(await Promise.all([r.e(1259),r.e(210)]).then(r.bind(r,90210))).default,ElevationLayer:async()=>(await Promise.all([r.e(1259),r.e(5613),r.e(2204)]).then(r.bind(r,72204))).default,FeatureLayer:async()=>(await Promise.all([r.e(1259),r.e(4350),r.e(6467),r.e(1074),r.e(5959),r.e(208),r.e(6576),r.e(9651),r.e(2570),r.e(9275),r.e(1577),r.e(9075),r.e(7652),r.e(9506),r.e(3325)]).then(r.bind(r,9506))).default,GeoJSONLayer:async()=>(await Promise.all([r.e(1259),r.e(4350),r.e(6467),r.e(1074),r.e(5959),r.e(208),r.e(6576),r.e(9651),r.e(2570),r.e(9275),r.e(1577),r.e(9075),r.e(9039)]).then(r.bind(r,99039))).default,GeoRSSLayer:async()=>(await Promise.all([r.e(1259),r.e(4350),r.e(6467),r.e(2197)]).then(r.bind(r,92197))).default,GroupLayer:async()=>(await Promise.all([r.e(1259),r.e(4350),r.e(9061)]).then(r.bind(r,59061))).default,ImageryLayer:async()=>(await Promise.all([r.e(1259),r.e(4350),r.e(6467),r.e(1074),r.e(5959),r.e(6576),r.e(9214),r.e(3864),r.e(7200),r.e(5023)]).then(r.bind(r,75023))).default,ImageryTileLayer:async()=>(await Promise.all([r.e(1259),r.e(4350),r.e(6467),r.e(1074),r.e(5959),r.e(3864),r.e(7200),r.e(4918),r.e(2552)]).then(r.bind(r,32552)).then((e=>e.I))).default,IntegratedMeshLayer:async()=>(await Promise.all([r.e(1259),r.e(2311),r.e(156)]).then(r.bind(r,60156))).default,KMLLayer:async()=>(await Promise.all([r.e(1259),r.e(4350),r.e(6467),r.e(1074),r.e(5959),r.e(208),r.e(1903)]).then(r.bind(r,21903))).default,LineOfSightLayer:async()=>(await Promise.all([r.e(1259),r.e(5839)]).then(r.bind(r,25839))).default,LinkChartLayer:async()=>(await Promise.all([r.e(4350),r.e(6467),r.e(1074),r.e(5959),r.e(208),r.e(6576),r.e(9651),r.e(2570),r.e(9275),r.e(2274),r.e(4449),r.e(1392)]).then(r.bind(r,1392))).default,MapImageLayer:async()=>(await Promise.all([r.e(1259),r.e(4350),r.e(6467),r.e(1074),r.e(5959),r.e(208),r.e(6576),r.e(9651),r.e(9075),r.e(9214),r.e(708),r.e(3968),r.e(605)]).then(r.bind(r,60605))).default,MapNotesLayer:async()=>(await Promise.all([r.e(1259),r.e(4350),r.e(6467),r.e(1074),r.e(5959),r.e(208),r.e(6576),r.e(9651),r.e(2570),r.e(9275),r.e(1577),r.e(9075),r.e(7652),r.e(9506),r.e(1135)]).then(r.bind(r,41135))).default,MediaLayer:async()=>(await Promise.all([r.e(1259),r.e(4350),r.e(2090)]).then(r.bind(r,22090))).default,OGCFeatureLayer:async()=>(await Promise.all([r.e(1259),r.e(4350),r.e(6467),r.e(1074),r.e(5959),r.e(208),r.e(6576),r.e(9651),r.e(2570),r.e(9275),r.e(1577),r.e(9075),r.e(5307),r.e(3958)]).then(r.bind(r,63958))).default,OpenStreetMapLayer:async()=>(await Promise.all([r.e(1259),r.e(4350),r.e(3799),r.e(6043)]).then(r.bind(r,16043))).default,OrientedImageryLayer:async()=>(await Promise.all([r.e(1259),r.e(4350),r.e(6467),r.e(1074),r.e(5959),r.e(208),r.e(6576),r.e(9651),r.e(2570),r.e(9275),r.e(1577),r.e(9075),r.e(7652),r.e(9506),r.e(4064)]).then(r.bind(r,4064)).then((e=>e.O))).default,PointCloudLayer:async()=>(await Promise.all([r.e(1259),r.e(1074),r.e(2311),r.e(5032)]).then(r.bind(r,25032))).default,RouteLayer:async()=>(await Promise.all([r.e(1259),r.e(4350),r.e(6467),r.e(1074),r.e(5959),r.e(208),r.e(3435)]).then(r.bind(r,63435))).default,SceneLayer:async()=>(await Promise.all([r.e(1259),r.e(6467),r.e(1074),r.e(5959),r.e(208),r.e(6576),r.e(9651),r.e(2570),r.e(2311),r.e(8567),r.e(5214),r.e(4580)]).then(r.bind(r,84580))).default,StreamLayer:async()=>(await Promise.all([r.e(1259),r.e(4350),r.e(6467),r.e(1074),r.e(5959),r.e(208),r.e(6576),r.e(9651),r.e(2570),r.e(9275),r.e(1577),r.e(8324)]).then(r.bind(r,58324))).default,SubtypeGroupLayer:async()=>(await Promise.all([r.e(1259),r.e(4350),r.e(6467),r.e(1074),r.e(5959),r.e(208),r.e(6576),r.e(9651),r.e(7652),r.e(9014),r.e(660)]).then(r.bind(r,79014))).default,TileLayer:async()=>(await Promise.all([r.e(1259),r.e(4350),r.e(6467),r.e(1074),r.e(5959),r.e(208),r.e(6576),r.e(9651),r.e(9075),r.e(9214),r.e(708),r.e(5613),r.e(3968),r.e(611)]).then(r.bind(r,90611))).default,UnknownLayer:async()=>(await r.e(3117).then(r.bind(r,63117))).default,UnsupportedLayer:async()=>(await r.e(8243).then(r.bind(r,88243))).default,VectorTileLayer:async()=>(await Promise.all([r.e(1259),r.e(4350),r.e(5613),r.e(2348),r.e(9878),r.e(6491)]).then(r.bind(r,46491))).default,VoxelLayer:async()=>(await Promise.all([r.e(1259),r.e(1074),r.e(2311),r.e(8528)]).then(r.bind(r,18528))).default,WFSLayer:async()=>(await Promise.all([r.e(1259),r.e(4350),r.e(6467),r.e(1074),r.e(5959),r.e(208),r.e(6576),r.e(9651),r.e(2570),r.e(9275),r.e(1577),r.e(4344),r.e(5955)]).then(r.bind(r,44797))).default,WMSLayer:async()=>(await Promise.all([r.e(1259),r.e(4350),r.e(6467),r.e(1074),r.e(3561)]).then(r.bind(r,73561))).default,WMTSLayer:async()=>(await Promise.all([r.e(1259),r.e(4350),r.e(3799),r.e(2790)]).then(r.bind(r,82790))).default,WebTileLayer:async()=>(await Promise.all([r.e(1259),r.e(4350),r.e(3799)]).then(r.bind(r,3799)).then((e=>e.a))).default}},51698:(e,a,r)=>{r.d(a,{f:()=>n});var t=r(82058);async function n(e,a){const{data:r}=await(0,t.Z)(e,{responseType:"json",query:{f:"json",...a?.customParameters,token:a?.apiKey}});return r}}}]);