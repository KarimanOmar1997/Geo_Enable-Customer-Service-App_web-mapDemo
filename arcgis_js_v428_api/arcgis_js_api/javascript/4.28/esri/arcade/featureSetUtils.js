// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../request ./featureSetCollection ../chunks/languageUtils ./featureset/actions/AttributeFilter ./featureset/actions/GroupBy ./featureset/actions/OrderBy ./featureset/actions/SpatialFilter ./featureset/actions/Top ./featureset/sources/FeatureLayerDynamic ./featureset/sources/FeatureLayerMemory ./featureset/sources/FeatureLayerRelated ./featureset/support/cache ./featureset/support/errorsupport ./featureset/support/FeatureSet ./featureset/support/shared ../core/sql/WhereClause ../layers/FeatureLayer ../portal/PortalItem".split(" "),
function(q,u,x,t,E,F,G,H,I,J,K,L,h,y,M,z,A,m,N){async function v(a,d){if(h.applicationCache){var b=h.applicationCache.getLayerInfo(a);if(b)return b=await b,new m({url:a,outFields:d,sourceJSON:b});const c=new m({url:a,outFields:d});d=(async()=>{await c.load();return c.sourceJSON})();if(h.applicationCache){h.applicationCache.setLayerInfo(a,d);try{return await d,c}catch(f){throw h.applicationCache.clearLayerInfo(a),f;}}await d;return c}return new m({url:a,outFields:d})}async function w(a,d,b,c,f,e=null){a=
await v(a,["*"]);return l(a,d,b,c,f,e)}function l(a,d=null,b=null,c=!0,f=null,e=null){if(a instanceof m||t.isSubtypeGrouplayer(a))return d={layer:a,spatialReference:d,outFields:b,includeGeometry:c,lrucache:f,interceptor:e},!0===!(a.url||!a.source)?new K(d):new J(d);d=l(a.parent,d,b,c,f,e);return d.filter(A.WhereClause.create(a.parent.subtypeField+"\x3d"+a.subtypeCode.toString(),a.parent.fieldsIndex,d.dateFieldsTimeZoneDefaultUTC))}async function O(a){if(null!==h.applicationCache){var d=h.applicationCache.getLayerInfo(a);
if(null!==d)return d}d=(async()=>{const b=await u(a,{responseType:"json",query:{f:"json"}});return b.data?b.data:null})();if(null!==h.applicationCache){h.applicationCache.setLayerInfo(a,d);try{return await d}catch(b){throw h.applicationCache.clearLayerInfo(a),b;}}return d}async function P(a,d){const b="QUERYDATAELEMTS:"+d.toString()+":"+a;if(null!==h.applicationCache){var c=h.applicationCache.getLayerInfo(b);if(null!==c)return c}c=(async()=>{var f=await u(a+"/queryDataElements",{method:"post",responseType:"json",
query:{layers:JSON.stringify([d.toString()]),f:"json"}});if(f.data&&(f=f.data,f.layerDataElements?.[0]))return f.layerDataElements[0];throw new y.FeatureSetError(y.FeatureSetErrorCodes.DataElementsNotFound);})();if(null!==h.applicationCache){h.applicationCache.setLayerInfo(b,c);try{return await c}catch(f){throw h.applicationCache.clearLayerInfo(b),f;}}return c}async function B(a){if(null!==h.applicationCache){var d=h.applicationCache.getLayerInfo(a);if(null!==d)return d}d=(async()=>{var b=await u(a,
{responseType:"json",query:{f:"json"}});return b.data?(b=b.data,b.layers||(b.layers=[]),b.tables||(b.tables=[]),b):{layers:[],tables:[]}})();if(null!==h.applicationCache){h.applicationCache.setLayerInfo(a,d);try{return await d}catch(b){throw h.applicationCache.clearLayerInfo(a),b;}}return d}E.registerAction();F.registerAction();G.registerAction();H.registerAction();I.registerAction();class Q extends x{constructor(a,d=null,b=null,c=null){super();this._map=a;this._overridespref=d;this._lrucache=b;this._interceptor=
c;this._instantLayers=[]}_makeAndAddFeatureSet(a,d=!0,b=null){const c=l(a,this._overridespref,null===b?["*"]:b,d,this._lrucache,this._interceptor);this._instantLayers.push({featureset:c,opitem:a,includeGeometry:d,outFields:JSON.stringify(b)});return c}async featureSetByName(a,d=!0,b=null){if(void 0!==this._map.loaded&&void 0!==this._map.load&&!1===this._map.loaded)return await this._map.load(),this.featureSetByName(a,d,b);null===b&&(b=["*"]);b=b.slice(0);b=b.sort();var c=JSON.stringify(b);for(let e=
0;e<this._instantLayers.length;e++){const g=this._instantLayers[e];if(g.opitem.title===a&&g.includeGeometry===d&&g.outFields===c)return this._instantLayers[e].featureset}const f=[];if(c=this._map.allLayers.find(e=>{if(e instanceof m){if(e.title===a)return!0}else if(t.isSubtypeGrouplayer(e)){if(e.title===a)return!0;f.push(e)}return!1}))return this._makeAndAddFeatureSet(c,d,b);if(this._map.tables&&(c=this._map.tables.find(e=>e.title&&e.title===a||e.title&&e.title===a?!0:!1))){if(c instanceof m)return this._makeAndAddFeatureSet(c,
d,b);c._materializedTable||(c._materializedTable=new m(c.outFields?c:{...c,outFields:["*"]}));await c._materializedTable.load();return this._makeAndAddFeatureSet(c._materializedTable,d,b)}for(const e of f){if("not-loaded"===e.loadStatus||"loading"===e.loadStatus)try{await e.load()}catch(g){}if(c=e.sublayers.find(g=>g.title===a?!0:!1))return this._makeAndAddFeatureSet(c,d,b)}return null}async featureSetById(a,d=!0,b=["*"]){if(void 0!==this._map.loaded&&void 0!==this._map.load&&!1===this._map.loaded)return await this._map.load(),
this.featureSetById(a,d,b);null===b&&(b=["*"]);b=b.slice(0);b=b.sort();var c=JSON.stringify(b);for(let e=0;e<this._instantLayers.length;e++){const g=this._instantLayers[e];if(g.opitem.id===a&&g.includeGeometry===d&&g.outFields===c)return this._instantLayers[e].featureset}const f=[];if(c=this._map.allLayers.find(e=>{if(e instanceof m){if(e.id===a)return!0}else if(t.isSubtypeGrouplayer(e)){if(e.id===a)return!0;f.push(e)}return!1}))return this._makeAndAddFeatureSet(c,d,b);if(this._map.tables&&(c=this._map.tables.find(e=>
e.id===a?!0:!1))){if(c instanceof m)return this._makeAndAddFeatureSet(c,d,b);c._materializedTable||(c._materializedTable=new m({...c,outFields:["*"]}));await c._materializedTable.load();return this._makeAndAddFeatureSet(c._materializedTable,d,b)}for(const e of f){if("not-loaded"===e.loadStatus||"loading"===e.loadStatus)try{await e.load()}catch(g){}if(c=e.sublayers.find(g=>g.id===a?!0:!1))return this._makeAndAddFeatureSet(c,d,b)}return null}}class C extends x{constructor(a,d=null,b=null,c=null){super();
this._url=a;this._overridespref=d;this._lrucache=b;this._interceptor=c;this.metadata=null;this._instantLayers=[]}get url(){return this._url}_makeAndAddFeatureSet(a,d=!0,b=null){const c=l(a,this._overridespref,null===b?["*"]:b,d,this._lrucache);this._instantLayers.push({featureset:c,opitem:a,includeGeometry:d,outFields:JSON.stringify(b)});return c}async _loadMetaData(){const a=await B(this._url);return this.metadata=a}load(){return this._loadMetaData()}clone(){return new C(this._url,this._overridespref,
this._lrucache,this._interceptor)}async featureSetByName(a,d=!0,b=null){null===b&&(b=["*"]);b=b.slice(0);b=b.sort();var c=JSON.stringify(b);for(var f=0;f<this._instantLayers.length;f++){const e=this._instantLayers[f];if(e.opitem.title===a&&e.includeGeometry===d&&e.outFields===c)return this._instantLayers[f].featureset}c=await this._loadMetaData();f=null;for(const e of c.layers??[])e.name===a&&(f=e);if(!f)for(const e of c.tables??[])e.name===a&&(f=e);return f?(a=await v(this._url+"/"+f.id,["*"]),this._makeAndAddFeatureSet(a,
d,b)):null}async featureSetById(a,d=!0,b=["*"]){null===b&&(b=["*"]);b=b.slice(0);b=b.sort();var c=JSON.stringify(b);a=null!==a&&void 0!==a?a.toString():"";for(var f=0;f<this._instantLayers.length;f++){const e=this._instantLayers[f];if(e.opitem.id===a&&e.includeGeometry===d&&e.outFields===c)return this._instantLayers[f].featureset}c=await this._loadMetaData();f=null;for(const e of c.layers??[])null!==e.id&&void 0!==e.id&&e.id.toString()===a&&(f=e);if(!f)for(const e of c.tables??[])null!==e.id&&void 0!==
e.id&&e.id.toString()===a&&(f=e);return f?(a=await v(this._url+"/"+f.id,["*"]),this._makeAndAddFeatureSet(a,d,b)):null}}q.constructAssociationMetaDataFeatureSetFromUrl=async function(a,d){var b=3,c=[],f=null,e={},g=null;g=await B(a);if(void 0!==g.controllerDatasetLayers?.utilityNetworkLayerId&&null!==g.controllerDatasetLayers.utilityNetworkLayerId){if(g.layers)for(var n of g.layers)e[n.id]=n.name;if(g.tables)for(var k of g.tables)e[k.id]=k.name;n=g.controllerDatasetLayers.utilityNetworkLayerId;if(g=
await P(a,n)){f=g;f?.dataElement&&void 0!==f.dataElement.schemaGeneration&&(b=f.dataElement.schemaGeneration);g={};f.dataElement.domainNetworks||(f.dataElement.domainNetworks=[]);for(var r of f.dataElement.domainNetworks){for(const p of r.edgeSources??[])k={layerId:p.layerId,sourceId:p.sourceId,className:e[p.layerId]??null},k.className&&(g[k.className]=k);for(const p of r.junctionSources??[])k={layerId:p.layerId,sourceId:p.sourceId,className:e[p.layerId]??null},k.className&&(g[k.className]=k)}if(f.dataElement.terminalConfigurations)for(const p of f.dataElement.terminalConfigurations)for(const D of p.terminals)c.push({terminalId:D.terminalId,
terminalName:D.terminalName});e=await O(a+"/"+n);if(void 0!==e.systemLayers?.associationsTableId&&null!==e.systemLayers.associationsTableId)return r=[],4<=b&&(r.push("STATUS"),r.push("PERCENTALONG")),a=await w(a+"/"+e.systemLayers.associationsTableId.toString(),d,["OBJECTID","FROMNETWORKSOURCEID","TONETWORKSOURCEID","FROMGLOBALID","TOGLOBALID","TOTERMINALID","FROMTERMINALID","ASSOCIATIONTYPE","ISCONTENTVISIBLE","GLOBALID",...r],!1,null,null),await a.load(),4<=b&&(a=a.filter(A.WhereClause.create("STATUS NOT IN (1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22, 23, 25, 26, 27, 28, 29, 30, 31, 33, 34, 35, 36, 37, 38, 39, 41, 42, 43, 44, 45, 46, 47, 49, 50, 51, 52, 53, 54, 55, 57, 58, 59, 60, 61, 62, 63)",
a.getFieldsIndex(),a.dateFieldsTimeZoneDefaultUTC)),await a.load()),{lkp:g,associations:a,unVersion:b,terminals:c}}}return{associations:null,unVersion:b,lkp:null,terminals:[]}};q.constructFeatureSet=l;q.constructFeatureSetFromPortalItem=async function(a,d,b,c,f,e,g,n=null){if(h.applicationCache){var k=h.applicationCache.getLayerInfo(a+":"+e.url);if(k)return a=await k,d=new m({url:z.extractServiceUrl(a.url)+"/"+d,outFields:["*"]}),l(d,b,c,f,g,n)}k=(new N({id:a,portal:e})).load();h.applicationCache&&
h.applicationCache.setLayerInfo(a+":"+e.url,k);try{const r=await k,p=new m({url:z.extractServiceUrl(r.url??"")+"/"+d,outFields:["*"]});return l(p,b,c,f,g,n)}catch(r){throw h.applicationCache&&h.applicationCache.clearLayerInfo(a+":"+e.url),r;}};q.constructFeatureSetFromRelationship=async function(a,d,b,c=null,f=null,e=!0,g=null,n=null){var k=a.serviceUrl();if(!k)return null;k="/"===k.charAt(k.length-1)?k+d.relatedTableId.toString():k+"/"+d.relatedTableId.toString();k=await w(k,c,f,e,g,n);return new L({layer:a,
relatedLayer:k,relationship:d,objectId:b,spatialReference:c,outFields:f,includeGeometry:e,lrucache:g,interceptor:n})};q.constructFeatureSetFromUrl=w;q.convertToFeatureSet=function(a,d,b,c,f){if(null===a)return null;if(a instanceof m){switch(d){case "datasource":return l(a,f,a.outFields,!0,b,c).getDataSourceFeatureSet();case "parent":return l(a,f,a.outFields,!0,b,c);case "root":return l(a,f,a.outFields,!0,b,c)}return null}if(t.isSubtypeGrouplayer(a)){switch(d){case "datasource":return l(a,f,a.outFields,
!0,b,c).getDataSourceFeatureSet();case "parent":return l(a,f,a.outFields,!0,b,c);case "root":return l(a,f,a.outFields,!0,b,c)}return null}if(t.isSubtypeSublayer(a)){switch(d){case "datasource":return l(a.parent,f,a.parent.outFields,!0,b,c).getDataSourceFeatureSet();case "parent":return l(a,f,a.parent.outFields,!0,b,c);case "root":return l(a,f,a.parent.outFields,!0,b,c)}return null}if(a instanceof M)switch(d){case "datasource":return a.getDataSourceFeatureSet();case "parent":return a;case "root":return a.getRootFeatureSet()}return null};
q.createFeatureSetCollectionFromMap=function(a,d,b=null,c=null){return new Q(a,d,b,c)};q.createFeatureSetCollectionFromService=function(a,d,b=null,c=null){return new C(a,d,b,c)};q.initialiseMetaDataCache=function(){null===h.applicationCache&&(h.applicationCache=new h)};Object.defineProperty(q,Symbol.toStringTag,{value:"Module"})});