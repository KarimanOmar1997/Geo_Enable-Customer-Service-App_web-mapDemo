"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[9014],{75025:(e,t,r)=>{r.d(t,{A:()=>l});var s=r(29768),i=r(92143),n=r(34250),o=(r(91306),r(48578),r(17533)),a=r(21132);const l=e=>{let t=class extends e{get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){const e=(0,a.p)(this.url);if(null!=e&&e.title)return e.title}return this._get("title")||""}set title(e){this._set("title",e)}set url(e){this._set("url",(0,a.s)(e,i.L.getLogger(this)))}};return(0,s._)([(0,n.Cb)()],t.prototype,"title",null),(0,s._)([(0,n.Cb)({type:String})],t.prototype,"url",null),t=(0,s._)([(0,o.j)("esri.layers.mixins.ArcGISService")],t),t}},6941:(e,t,r)=>{r.d(t,{a:()=>n,b:()=>o,c:()=>a,d:()=>i,e:()=>l,f:()=>p,g:()=>u});const s=[252,146,31,255],i={type:"esriSMS",style:"esriSMSCircle",size:6,color:s,outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[153,153,153,255]}},n={type:"esriSLS",style:"esriSLSSolid",width:.75,color:s},o={type:"esriSFS",style:"esriSFSSolid",color:[252,146,31,196],outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[255,255,255,191]}},a={type:"esriTS",color:[255,255,255,255],font:{family:"arial-unicode-ms",size:10,weight:"bold"},horizontalAlignment:"center",kerning:!0,haloColor:[0,0,0,255],haloSize:1,rotated:!1,text:"",xoffset:0,yoffset:0,angle:0},l={type:"esriSMS",style:"esriSMSCircle",color:[0,0,0,255],outline:null,size:10.5},p={type:"esriSLS",style:"esriSLSSolid",color:[0,0,0,255],width:1.5},u={type:"esriSFS",style:"esriSFSSolid",color:[0,0,0,255],outline:null}},93939:(e,t,r)=>{r.d(t,{a:()=>c,d:()=>h,h:()=>y});var s=r(21972),i=r(15324),n=r(66396);const o=new Set(["esri.Color","esri.portal.Portal","esri.symbols.support.Symbol3DAnchorPosition2D","esri.symbols.support.Symbol3DAnchorPosition3D"]);function a(e){return e instanceof s.Z}function l(e){return e instanceof i.Z?Object.keys(e.items):a(e)?(0,n.g)(e).keys():e?Object.keys(e):[]}function p(e,t){return e instanceof i.Z?e.items[t]:e[t]}function u(e){return e?e.declaredClass:null}function d(e,t){const r=e.diff;if(r&&"function"==typeof r)return r(e,t);const s=l(e),i=l(t);if(0===s.length&&0===i.length)return;if(!s.length||!i.length||function(e,t){return!(!Array.isArray(e)||!Array.isArray(t))&&e.length!==t.length}(e,t))return{type:"complete",oldValue:e,newValue:t};const n=i.filter((e=>!s.includes(e))),y=s.filter((e=>!i.includes(e))),c=s.filter((r=>i.includes(r)&&p(e,r)!==p(t,r))).concat(n,y).sort(),h=u(e);if(h&&o.has(h)&&c.length)return{type:"complete",oldValue:e,newValue:t};let b;const f=a(e)&&a(t);for(const s of c){const i=p(e,s),n=p(t,s);let o;if((f||"function"!=typeof i&&"function"!=typeof n)&&i!==n&&(null!=i||null!=n)){if(r&&r[s]&&"function"==typeof r[s])o=r[s]?.(i,n);else if(i instanceof Date&&n instanceof Date){if(i.getTime()===n.getTime())continue;o={type:"complete",oldValue:i,newValue:n}}else o="object"==typeof i&&"object"==typeof n&&u(i)===u(n)?d(i,n):{type:"complete",oldValue:i,newValue:n};null!=o&&(null!=b?b.diff[s]=o:b={type:"partial",diff:{[s]:o}})}}return b}function y(e,t){if(null==e)return!1;const r=t.split(".");let s=e;for(const e of r){if("complete"===s.type)return!0;if("partial"!==s.type)return!1;{const t=s.diff[e];if(!t)return!1;s=t}}return!0}function c(e,t){for(const r of t)if(y(e,r))return!0;return!1}function h(e,t){if("function"!=typeof e&&"function"!=typeof t&&(null!=e||null!=t))return null==e||null==t||"object"==typeof e&&"object"==typeof t&&u(e)!==u(t)?{type:"complete",oldValue:e,newValue:t}:d(e,t)}},3663:(e,t,r)=>{r.d(t,{g:()=>d});var s=r(48578),i=r(21132);function n(e,t,r){return!!a(e,t,r)}function o(e,t,r){return a(e,t,r)}function a(e,t,r){return e&&e.hasOwnProperty(t)?e[t]:r}const l={name:"supportsName",size:"supportsSize",contentType:"supportsContentType",keywords:"supportsKeywords",exifInfo:"supportsExifInfo"};function p(e){const t=e?.supportedSpatialAggregationStatistics?.map((e=>e.toLowerCase()));return{envelope:!!t?.includes("envelopeaggregate"),centroid:!!t?.includes("centroidaggregate"),convexHull:!!t?.includes("convexhullaggregate")}}function u(e,t){const r=e?.supportedOperationsWithCacheHint?.map((e=>e.toLowerCase()));return!!r?.includes(t.toLowerCase())}function d(e,t){return{analytics:y(e),attachment:c(e),data:h(e),metadata:b(e),operations:f(e.capabilities,e,t),query:g(e,t),queryRelated:m(e),queryTopFeatures:v(e),editing:S(e)}}function y(e){return{supportsCacheHint:u(e.advancedQueryCapabilities,"queryAnalytics")}}function c(e){const t=e.attachmentProperties,r={supportsName:!1,supportsSize:!1,supportsContentType:!1,supportsKeywords:!1,supportsExifInfo:!1,supportsCacheHint:u(e.advancedQueryCapabilities,"queryAttachments"),supportsResize:n(e,"supportsAttachmentsResizing",!1)};return t&&Array.isArray(t)&&t.forEach((e=>{const t=l[e.name];t&&(r[t]=!!e.isEnabled)})),r}function h(e){return{isVersioned:n(e,"isDataVersioned",!1),supportsAttachment:n(e,"hasAttachments",!1),supportsM:n(e,"hasM",!1),supportsZ:n(e,"hasZ",!1)}}function b(e){return{supportsAdvancedFieldProperties:n(e,"supportsFieldDescriptionProperty",!1)}}function f(e,t,r){const s=e?e.toLowerCase().split(",").map((e=>e.trim())):[],o=r?(0,i.p)(r):null,a=s.includes(null!=o&&"MapServer"===o.serverType?"data":"query"),l=s.includes("editing")&&!t.datesInUnknownTimezone;let p=l&&s.includes("create"),u=l&&s.includes("delete"),d=l&&s.includes("update");const y=s.includes("changetracking"),c=t.advancedQueryCapabilities;return l&&!(p||u||d)&&(p=u=d=!0),{supportsCalculate:n(t,"supportsCalculate",!1),supportsTruncate:n(t,"supportsTruncate",!1),supportsValidateSql:n(t,"supportsValidateSql",!1),supportsAdd:p,supportsDelete:u,supportsEditing:l,supportsChangeTracking:y,supportsQuery:a,supportsQueryAnalytics:n(c,"supportsQueryAnalytic",!1),supportsQueryAttachments:n(c,"supportsQueryAttachments",!1),supportsQueryTopFeatures:n(c,"supportsTopFeaturesQuery",!1),supportsResizeAttachments:n(t,"supportsAttachmentsResizing",!1),supportsSync:s.includes("sync"),supportsUpdate:d,supportsExceedsLimitStatistics:n(t,"supportsExceedsLimitStatistics",!1),supportsAsyncConvert3D:n(t,"supportsAsyncConvert3D",!1)}}function g(e,t){const r=e.advancedQueryCapabilities,a=e.ownershipBasedAccessControlForFeatures,l=e.archivingInfo,d=e.currentVersion,y=t?.includes("MapServer"),c=!y||d>=(0,s.h)("mapserver-pbf-version-support"),h=(0,i.i)(t),b=new Set((e.supportedQueryFormats??"").split(",").map((e=>e.toLowerCase().trim())));return{supportsStatistics:n(r,"supportsStatistics",e.supportsStatistics),supportsPercentileStatistics:n(r,"supportsPercentileStatistics",!1),supportsSpatialAggregationStatistics:n(r,"supportsSpatialAggregationStatistics",!1),supportedSpatialAggregationStatistics:p(r),supportsCentroid:n(r,"supportsReturningGeometryCentroid",!1),supportsDistance:n(r,"supportsQueryWithDistance",!1),supportsDistinct:n(r,"supportsDistinct",e.supportsAdvancedQueries),supportsExtent:n(r,"supportsReturningQueryExtent",!1),supportsGeometryProperties:n(r,"supportsReturningGeometryProperties",!1),supportsHavingClause:n(r,"supportsHavingClause",!1),supportsOrderBy:n(r,"supportsOrderBy",e.supportsAdvancedQueries),supportsPagination:n(r,"supportsPagination",!1),supportsQuantization:n(e,"supportsCoordinatesQuantization",!1),supportsQuantizationEditMode:n(e,"supportsQuantizationEditMode",!1),supportsQueryGeometry:n(e,"supportsReturningQueryGeometry",!1),supportsResultType:n(r,"supportsQueryWithResultType",!1),supportsMaxRecordCountFactor:n(r,"supportsMaxRecordCountFactor",!1),supportsSqlExpression:n(r,"supportsSqlExpression",!1),supportsStandardizedQueriesOnly:n(e,"useStandardizedQueries",!1),supportsTopFeaturesQuery:n(r,"supportsTopFeaturesQuery",!1),supportsQueryByAnonymous:n(a,"allowAnonymousToQuery",!0),supportsQueryByOthers:n(a,"allowOthersToQuery",!0),supportsHistoricMoment:n(l,"supportsQueryWithHistoricMoment",!1),supportsFormatPBF:c&&b.has("pbf"),supportsDisjointSpatialRelationship:n(r,"supportsDisjointSpatialRel",!1),supportsCacheHint:n(r,"supportsQueryWithCacheHint",!1)||u(r,"query"),supportsDefaultSpatialReference:n(r,"supportsDefaultSR",!1),supportsCompactGeometry:h,supportsFullTextSearch:n(r,"supportsFullTextSearch",!1),maxRecordCountFactor:o(e,"maxRecordCountFactor",void 0),maxRecordCount:o(e,"maxRecordCount",void 0),standardMaxRecordCount:o(e,"standardMaxRecordCount",void 0),tileMaxRecordCount:o(e,"tileMaxRecordCount",void 0)}}function m(e){const t=e.advancedQueryCapabilities,r=n(t,"supportsAdvancedQueryRelated",!1);return{supportsPagination:n(t,"supportsQueryRelatedPagination",!1),supportsCount:r,supportsOrderBy:r,supportsCacheHint:u(t,"queryRelated")}}function v(e){return{supportsCacheHint:u(e.advancedQueryCapabilities,"queryTopFilter")}}function S(e){const t=e.ownershipBasedAccessControlForFeatures,r=e?e.advancedEditingCapabilities:void 0;return{supportsGeometryUpdate:n(e,"allowGeometryUpdates",!0),supportsGlobalId:n(e,"supportsApplyEditsWithGlobalIds",!1),supportsReturnServiceEditsInSourceSpatialReference:n(e,"supportsReturnServiceEditsInSourceSR",!1),supportsRollbackOnFailure:n(e,"supportsRollbackOnFailureParameter",!1),supportsUpdateWithoutM:n(e,"allowUpdateWithoutMValues",!1),supportsUploadWithItemId:n(e,"supportsAttachmentsByUploadId",!1),supportsDeleteByAnonymous:n(t,"allowAnonymousToDelete",!0),supportsDeleteByOthers:n(t,"allowOthersToDelete",!0),supportsUpdateByAnonymous:n(t,"allowAnonymousToUpdate",!0),supportsUpdateByOthers:n(t,"allowOthersToUpdate",!0),supportsAsyncApplyEdits:n(r,"supportsAsyncApplyEdits",!1),zDefault:o(e,"zDefault",void 0)}}},79014:(e,t,r)=>{r.r(t),r.d(t,{default:()=>U});var s=r(29768),i=r(66122),n=r(15324),o=r(60991),a=r(91162),l=r(54179),p=r(50406),u=r(58085),d=r(52991),y=r(32101),c=r(34250),h=(r(91306),r(48578),r(97714)),b=r(17533),f=r(21972),g=r(41617),m=r(96994),v=r(75025),S=r(80462),w=r(21471),C=r(65398),_=r(79093),F=r(11634),A=r(39241),I=r(68219),O=r(6416),T=r(82377),E=r(21132),j=r(43022),x=r(62670),L=r(47346),R=r(14249),P=r(27064),Q=r(77361),Z=r(40944),D=r(31292),M=r(86849);r(76506),r(92143),r(31450),r(66396),r(22723),r(86656),r(379),r(62062),r(6540),r(6906),r(79456),r(75067),r(89914),r(41864),r(81184),r(33101),r(12047),r(74569),r(21801),r(73796),r(60947),r(53785),r(57251),r(89623),r(73173),r(82058),r(88762),r(2906),r(91597),r(86787),r(35132),r(84069),r(44567),r(89034),r(98380),r(92482),r(82426),r(72836),r(66106),r(29794),r(92896),r(22781),r(32422),r(3296),r(92200),r(65949),r(54174),r(59877),r(65775),r(5777),r(10279),r(29027),r(76131),r(36097),r(17055),r(2180),r(14327),r(3663),r(12805),r(9801),r(53523),r(59465),r(42911),r(46826),r(45433),r(38742),r(93314),r(35197),r(8925),r(3482),r(1557),r(47842),r(17298),r(85557),r(66284),r(87239),r(60217),r(34394),r(96467),r(63571),r(30776),r(48027),r(63130),r(25696),r(94216),r(42775),r(95834),r(57150),r(76726),r(20444),r(76393),r(78548),r(2497),r(49906),r(46527),r(11799),r(48649),r(81731),r(9960),r(30823),r(53326),r(5853),r(39141),r(52461),r(48243),r(34635),r(10401),r(49900),r(58943),r(67477),r(78533),r(74653),r(91091),r(70737),r(36834),r(8487),r(17817),r(90814),r(15459),r(97189),r(61847),r(28212),r(16955),r(22401),r(48699),r(77894),r(55187),r(8586),r(44509),r(69814),r(11305),r(62259),r(44790),r(5909),r(60669),r(48208),r(51589),r(72992),r(69218),r(97546),r(54732),r(32925),r(50619),r(27207),r(39855),r(86758),r(65684),r(12158),r(74864),r(63683),r(94479),r(45702),r(51127),r(26822),r(51723),r(23243),r(51669),r(6090),r(3977),r(36741),r(11253),r(90319),r(38822),r(74057),r(23761),r(86748),r(29107),r(30574),r(2157),r(25977),r(58076),r(98242),r(7471),r(54414),r(1648),r(45154),r(16769),r(93603),r(15438),r(593),r(85699),r(55531),r(96055),r(47776),r(18033),r(6331),r(62048),r(56890),r(30493),r(4292),r(75626),r(72652),r(29641),r(70821),r(34229),r(37029),r(48190),r(67541),r(16218),r(95310),r(93939),r(62407),r(90033),r(97807),r(238),r(71831),r(34446),r(46646),r(56420),r(74742),r(28239),r(60111),r(1623),r(50626),r(92624),r(92847),r(59765),r(1709),r(35154),r(55306),r(94070),r(71206),r(9352),r(89241),r(91700),r(10738),r(51979),r(32037),r(60698),r(90811),r(60045),r(7200),r(68681),r(53321),r(20208),r(10691),r(38949),r(71777),r(19755),r(62554),r(27371),r(78648),r(87558),r(13063),r(17153),r(35962),r(49975),r(35907),r(9252),r(67350),r(11471),r(83748),r(28376),r(79690),r(94612),r(46495),r(77807),r(50203),r(30439),r(6941),r(68653),r(78893);const V="SubtypeGroupLayer";function q(e,t){return new o.Z("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${t}`,{layer:e})}const G=(0,L.d)();let k=class extends((0,_.B)((0,C.E)((0,S.h)((0,T.n)((0,O.M)((0,I.Q)((0,v.A)((0,F.q)((0,A.I)((0,l.M)((0,w.N)((0,m.V)((0,i.J)(g.Z)))))))))))))){constructor(...e){super(...e),this._sublayersCollectionChanged=!1,this._sublayerLookup=new Map,this.fields=null,this.fieldsIndex=null,this.outFields=null,this.sublayers=new(n.Z.ofType(P.Z)),this.timeInfo=null,this.title="Layer",this.type="subtype-group",this._debouncedSaveOperations=(0,p.Ds)((async(e,t,s)=>{const{save:i,saveAs:n}=await r.e(8703).then(r.bind(r,98703));switch(e){case M.S.SAVE:return i(this,t);case M.S.SAVE_AS:return n(this,s,t)}})),this.addHandles((0,u.YP)((()=>this.sublayers),((e,t)=>this._handleSublayersChange(e,t)),u.Z_))}destroy(){this.source?.destroy()}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){const t=null!=e?e.signal:null,r=this.loadFromPortal({supportedTypes:["Feature Service"]},e).catch(p.r9).then((async()=>{if(!this.url)throw new o.Z("subtype-grouplayer:missing-url-or-source","SubtypeGroupLayer must be created with either a url or a portal item");if(null==this.layerId)throw new o.Z("subtype-grouplayer:missing-layerid","layerId is required for a SubtypeGroupLayer created with url");return this._initLayerProperties(await this.createGraphicsSource(t))})).then((()=>(0,x.e)(this,"load",e)));return this.addResolvingPromise(r),Promise.resolve(this)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("gdbVersion"),this.commitProperty("historicMoment"),this.commitProperty("returnZ"),this.commitProperty("capabilities"),this.commitProperty("returnM"),(this._get("createQueryVersion")??0)+1}get editingEnabled(){return this.loaded&&null!=this.capabilities&&this.capabilities.operations.supportsEditing&&this.userHasEditingPrivileges}get effectiveEditingEnabled(){return(0,x.c)(this)}get parsedUrl(){const e=(0,y.mN)(this.url);return null!=e&&null!=this.layerId&&(e.path=(0,y.v_)(e.path,this.layerId.toString())),e}set source(e){this._get("source")!==e&&this._set("source",e)}readTitleFromService(e,{name:t}){return this.url?(0,E.t)(this.url,t):t}async addAttachment(e,t){return(0,x.d)(this,e,t,V)}async updateAttachment(e,t,r){return(0,x.u)(this,e,t,r,V)}async applyEdits(e,t){return(0,x.f)(this,e,t)}on(e,t){return super.on(e,t)}async createGraphicsSource(e){const{default:t}=await(0,p.Hl)(Promise.all([r.e(9214),r.e(708),r.e(9705),r.e(3888)]).then(r.bind(r,29705)),e);return new t({layer:this}).load({signal:e})}createQuery(){const e=(0,x.h)(this),t=this.sublayers.map((e=>e.subtypeCode));return e.where=(0,d._)(`${this.subtypeField} IN (${t.join(",")})`,this.definitionExpression),e}async deleteAttachments(e,t){return(0,x.i)(this,e,t,V)}async fetchRecomputedExtents(e){return(0,x.j)(this,e,V)}findSublayerForFeature(e){const t=this.fieldsIndex.get(this.subtypeField),r=e.attributes[t.name];return this.findSublayerForSubtypeCode(r)}findSublayerForSubtypeCode(e){return this._sublayerLookup.get(e)}getFieldDomain(e,t){return this._getLayerDomain(e)}getField(e){return this.fieldsIndex.get(e)}loadAll(){return(0,a.l)(this,(e=>{e(this.sublayers)}))}async queryAttachments(e,t){return(0,x.q)(this,e,t,V)}async queryFeatures(e,t){const r=await this.load(),s=D.Z.from(e)??r.createQuery(),i=s.outFields??[];i.includes(this.subtypeField)||(i.push(this.subtypeField),s.outFields=i);const n=await r.source.queryFeatures(s,t);if(n?.features)for(const e of n.features)e.layer=e.sourceLayer=this.findSublayerForFeature(e);return n}async queryObjectIds(e,t){return(0,x.k)(this,e,t,V)}async queryFeatureCount(e,t){return(0,x.l)(this,e,t,V)}async queryExtent(e,t){return(0,x.m)(this,e,t,V)}async queryRelatedFeatures(e,t){return(0,x.n)(this,e,t,V)}async queryRelatedFeaturesCount(e,t){return(0,x.o)(this,e,t,V)}async save(e){return this._debouncedSaveOperations(M.S.SAVE,e)}async saveAs(e,t){return this._debouncedSaveOperations(M.S.SAVE_AS,t,e)}write(e,t){const{origin:r,layerContainerType:s,messages:i}=t;if(this.isTable){if("web-scene"===r||"web-map"===r&&"tables"!==s)return i?.push(q(this,"using a table source cannot be written to web scenes and web maps")),null}else if(this.loaded&&"web-map"===r&&"tables"===s)return i?.push(q(this,"using a non-table source cannot be written to tables in web maps")),null;return this.sublayers?.length?super.write(e,t):(i?.push(new o.Z("web-document-write:invalid-property",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' has invalid value for 'sublayers' property. 'sublayers' collection should contain at least one sublayer`,{layer:this})),null)}serviceSupportsSpatialReference(e){return!!this.loaded&&(0,Z.s)(this,e)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}async _initLayerProperties(e){this._set("source",e);const{sourceJSON:t}=e;if(t&&(this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl})),this.isTable)throw new o.Z("subtype-grouplayer:unsupported-source","SubtypeGroupLayer cannot be created using a layer with table source");if(!this.subtypes?.length)throw new o.Z("subtype-grouplayer:missing-subtypes","SubtypeGroupLayer must be created using a layer with subtypes");this._verifyFields(),(0,R.UF)(this.timeInfo,this.fieldsIndex)}async hasDataChanged(){return(0,x.p)(this)}_verifyFields(){const e=this.parsedUrl?.path??"undefined";this.objectIdField||console.log("SubtypeGroupLayer: 'objectIdField' property is not defined (url: "+e+")"),this.isTable||-1!==e.search(/\/FeatureServer\//i)||this.fields?.some((e=>"geometry"===e.type))||console.log("SubtypeGroupLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: "+e+")")}_handleSublayersChange(e,t){t&&(t.forEach((e=>{e.parent=null})),this.removeHandles("sublayers-owner"),this._sublayerLookup.clear()),e&&(e.forEach((e=>{e.parent=this,this._sublayerLookup.set(e.subtypeCode,e)})),this._sublayersCollectionChanged=!1,this.addHandles([e.on("after-add",(({item:e})=>{e.parent=this,this._sublayerLookup.set(e.subtypeCode,e)})),e.on("after-remove",(({item:e})=>{e.parent=null,this._sublayerLookup.delete(e.subtypeCode)})),e.on("after-changes",(()=>{this._sublayersCollectionChanged=!0}))],"sublayers-owner"))}};(0,s._)([(0,c.Cb)({readOnly:!0})],k.prototype,"createQueryVersion",null),(0,s._)([(0,c.Cb)({readOnly:!0})],k.prototype,"editingEnabled",null),(0,s._)([(0,c.Cb)({readOnly:!0})],k.prototype,"effectiveEditingEnabled",null),(0,s._)([(0,c.Cb)({...G.fields,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}})],k.prototype,"fields",void 0),(0,s._)([(0,c.Cb)(G.fieldsIndex)],k.prototype,"fieldsIndex",void 0),(0,s._)([(0,c.Cb)(j.i)],k.prototype,"id",void 0),(0,s._)([(0,c.Cb)({type:["show","hide","hide-children"],json:{origins:{"portal-item":{read:!1,write:!1}}}})],k.prototype,"listMode",void 0),(0,s._)([(0,c.Cb)({value:"SubtypeGroupLayer",type:["SubtypeGroupLayer"],json:{origins:{"portal-item":{name:"layerType",write:{enabled:!0,ignoreOrigin:!0}}}}})],k.prototype,"operationalLayerType",void 0),(0,s._)([(0,c.Cb)(G.outFields)],k.prototype,"outFields",void 0),(0,s._)([(0,c.Cb)({readOnly:!0})],k.prototype,"parsedUrl",null),(0,s._)([(0,c.Cb)({clonable:!1})],k.prototype,"source",null),(0,s._)([(0,c.Cb)({type:n.Z.ofType(P.Z),json:{origins:{service:{read:{source:"subtypes",reader:(e,t,r)=>{const s=e.map((({code:e})=>{const s=new P.Z({subtypeCode:e});return s.read(t,r),s}));return new(n.Z.ofType(P.Z))(s)}}}},name:"layers",write:{overridePolicy(e,t,r){const s=this.originOf("sublayers"),i=f.O.PORTAL_ITEM;let n=!0;if((0,f.n)(s)===i&&(0,f.n)(r.origin)>i){const t=e.some((e=>e.hasUserOverrides()));n=this._sublayersCollectionChanged||t}return{enabled:n,ignoreOrigin:!0}}}}})],k.prototype,"sublayers",void 0),(0,s._)([(0,c.Cb)({type:Q.Z})],k.prototype,"timeInfo",void 0),(0,s._)([(0,c.Cb)({json:{origins:{"portal-item":{write:{enabled:!0,ignoreOrigin:!0,writerEnsuresNonNull:!0}}}}})],k.prototype,"title",void 0),(0,s._)([(0,h.r)("service","title",["name"])],k.prototype,"readTitleFromService",null),(0,s._)([(0,c.Cb)({json:{read:!1}})],k.prototype,"type",void 0),k=(0,s._)([(0,b.j)("esri.layers.SubtypeGroupLayer")],k);const U=k},96994:(e,t,r)=>{r.d(t,{V:()=>o});var s=r(29768),i=r(34250),n=(r(91306),r(48578),r(17533));r(92143),r(31450),r(76506),r(66396),r(22723),r(86656),r(60991),r(6540);const o=e=>{let t=class extends e{get apiKey(){return this._isOverridden("apiKey")?this._get("apiKey"):"portalItem"in this?this.portalItem?.apiKey:null}set apiKey(e){null!=e?this._override("apiKey",e):(this._clearOverride("apiKey"),this.clear("apiKey","user"))}};return(0,s._)([(0,i.Cb)({type:String})],t.prototype,"apiKey",null),t=(0,s._)([(0,n.j)("esri.layers.mixins.APIKeyMixin")],t),t}},2180:(e,t,r)=>{r.d(t,{Z:()=>u});var s,i=r(29768),n=r(15324),o=r(12047),a=r(34250),l=(r(91306),r(48578),r(17533));r(21972),r(92143),r(31450),r(76506),r(86656),r(66396),r(22723),r(379),r(62062),r(6540),r(6906),r(79456),r(50406),r(60991),r(75067),r(89914);let p=s=class extends o.wq{constructor(e){super(e),this.floorField=null,this.viewAllMode=!1,this.viewAllLevelIds=new n.Z}clone(){return new s({floorField:this.floorField,viewAllMode:this.viewAllMode,viewAllLevelIds:this.viewAllLevelIds})}};(0,i._)([(0,a.Cb)({type:String,json:{write:!0}})],p.prototype,"floorField",void 0),(0,i._)([(0,a.Cb)({json:{read:!1,write:!1}})],p.prototype,"viewAllMode",void 0),(0,i._)([(0,a.Cb)({json:{read:!1,write:!1}})],p.prototype,"viewAllLevelIds",void 0),p=s=(0,i._)([(0,l.j)("esri.layers.support.LayerFloorInfo")],p);const u=p},27064:(e,t,r)=>{r.d(t,{Z:()=>N});var s=r(29768),i=r(86748),n=r(55306),o=(r(71206),r(51979),r(60698),r(53321),r(65684)),a=r(86758),l=r(95310),p=(r(20208),r(92143)),u=r(66122),d=(r(48578),r(60991)),y=r(3296),c=r(76506),h=r(81184),b=r(54179),f=r(31450),g=r(52991),m=r(34250),v=(r(91306),r(97714)),S=r(17533),w=r(2906),C=r(21972),_=r(10691),F=r(43022),A=r(62670),I=r(46495),O=r(47346),T=r(14249),E=r(77807),j=r(68653),x=r(31292),L=r(78893),R=r(30439);r(15324),r(75067),r(22723),r(66396),r(86656),r(379),r(62062),r(6540),r(6906),r(79456),r(50406),r(89914),r(12047),r(86787),r(29107),r(30574),r(2157),r(25977),r(58076),r(98242),r(7471),r(54414),r(57251),r(59465),r(1648),r(8925),r(3482),r(76131),r(36097),r(45154),r(16769),r(93603),r(15438),r(593),r(48027),r(54174),r(82426),r(72836),r(66106),r(29794),r(85699),r(55531),r(96055),r(47776),r(18033),r(6331),r(62048),r(56890),r(30493),r(4292),r(75626),r(72652),r(29641),r(70821),r(34229),r(37029),r(66284),r(87239),r(82058),r(88762),r(32101),r(73173),r(60217),r(74569),r(21801),r(73796),r(60947),r(53785),r(89623),r(91597),r(35132),r(84069),r(44567),r(89034),r(98380),r(92482),r(92896),r(22781),r(32422),r(96467),r(63571),r(30776),r(63130),r(25696),r(94216),r(42775),r(95834),r(34394),r(57150),r(76726),r(20444),r(76393),r(78548),r(2497),r(49906),r(46527),r(11799),r(48649),r(81731),r(9960),r(30823),r(53326),r(5853),r(39141),r(38742),r(52461),r(48243),r(34635),r(10401),r(49900),r(58943),r(67477),r(78533),r(74653),r(91091),r(33101),r(70737),r(36834),r(8487),r(17817),r(90814),r(15459),r(97189),r(61847),r(28212),r(16955),r(22401),r(48699),r(77894),r(55187),r(8586),r(44509),r(69814),r(11305),r(62259),r(44790),r(58085),r(41864),r(5909),r(60669),r(48208),r(51589),r(26822),r(51723),r(23243),r(51669),r(6090),r(3977),r(36741),r(11253),r(90319),r(38822),r(74057),r(23761),r(48190),r(85557),r(94070),r(67541),r(16218),r(39855),r(12158),r(74864),r(63683),r(94479),r(45702),r(51127),r(9352),r(89241),r(91700),r(10738),r(1709),r(35154),r(32037),r(90811),r(60045),r(7200),r(68681),r(93939),r(62407),r(90033),r(97807),r(238),r(71831),r(38949),r(71777),r(19755),r(62554),r(27371),r(78648),r(87558),r(13063),r(17153),r(35962),r(49975),r(35907),r(9252),r(67350),r(11471),r(83748),r(28376),r(79690),r(9801),r(53523),r(42911),r(46826),r(45433),r(94612),r(93314),r(35197),r(1557),r(47842),r(17298),r(72992),r(34446),r(46646),r(69218),r(97546),r(54732),r(50203),r(6941),r(32925),r(50619),r(27207);const P=["charts","editingEnabled","formTemplate","labelsVisible","labelingInfo","legendEnabled","minScale","maxScale","opacity","popupEnabled","popupTemplate","renderer","subtypeCode","templates","title","visible"],Q={key:"type",base:o.Z,errorContext:"renderer",typeMap:{simple:a.Z,"unique-value":l.Z,"class-breaks":n.Z}},Z=(0,O.d)(),D=(0,S.d)({types:Q});let M=0;function V(e){const t=e.json.write;return"object"==typeof t?t.ignoreOrigin=!0:e.json.write={ignoreOrigin:!0},e}function q(e){switch(e){case"point":case"multipoint":return R.c.clone();case"polyline":return R.b.clone();case"polygon":case"multipatch":return R.a.clone();default:return null}}function G(e,t){return null==e?null:t.subtypes?.find((t=>t.code===e))}function k(e,t){let r=null;switch(t.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":r="point";break;case"esriGeometryPolyline":r="line";break;case"esriGeometryPolygon":case"esriGeometryMultiPatch":r="polygon";break;default:t.type,r=null}const s={},i=G(e,t);if(null!=i){const{defaultValues:e}=i;for(const t in e)s[t]=e[t]}return s[t.subtypeField]=e,new I.Z({name:"New Feature",drawingTool:r,prototype:{attributes:s}})}const U="esri.layers.support.SubtypeSublayer";let z=class extends((0,b.M)((0,u.J)((0,y.IG)(h.Z)))){constructor(e){super(e),this.charts=null,this.editingEnabled=!0,this.fieldOverrides=null,this.fieldsIndex=null,this.formTemplate=null,this.id=`${Date.now().toString(16)}-subtype-sublayer-${M++}`,this.type="subtype-sublayer",this.labelsVisible=!0,this.labelingInfo=null,this.layerType="ArcGISFeatureLayer",this.legendEnabled=!0,this.listMode="show",this.minScale=0,this.maxScale=0,this.opacity=1,this.parent=null,this.popupEnabled=!0,this.popupTemplate=null,this.subtypeCode=null,this.templates=null,this.title=null,this.visible=!0}get capabilities(){return this.parent?.capabilities}get effectiveCapabilities(){return this.parent?.effectiveCapabilities}get effectiveEditingEnabled(){const{parent:e}=this;return e?e.effectiveEditingEnabled&&this.editingEnabled:this.editingEnabled}get elevationInfo(){return this.parent?.elevationInfo}writeFieldOverrides(e,t,r){const{fields:s,parent:i}=this;let n;if(s){n=[];let e=0;s.forEach((({name:t,alias:r,editable:s,visible:o})=>{if(!o)return;const a=i?.fields?.find((e=>e.name===t));if(!a)return;const l={name:t};let p=!1;r!==a.alias&&(l.alias=r,p=!0),s!==a.editable&&(l.editable=s,p=!0),n.push(l),p&&e++})),0===e&&n.length===s.length&&(n=null)}else n=(0,c.d9)(e);n?.length&&(0,f.s)(r,n,t)}get fields(){const{parent:e,fieldOverrides:t,subtypeCode:r}=this,s=e?.fields;if(!e||!s?.length)return null;const{subtypes:i,subtypeField:n}=e,o=i?.find((e=>e.code===r)),a=o?.defaultValues,l=o?.domains,p=[];for(const e of s){const s=e.clone(),{name:i}=s,o=t?.find((e=>e.name===i));if(s.visible=!t||!!o,o){const{alias:e,editable:t}=o;e&&(s.alias=e),!1===t&&(s.editable=!1)}const u=a?.[i]??null;s.defaultValue=i===n?r:u;const d=l?.[i]??null;s.domain=i===n?null:d?"inherited"===d.type?s.domain:d.clone():null,p.push(s)}return p}get floorInfo(){return this.parent?.floorInfo}get geometryType(){return this.parent?.geometryType}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}get objectIdField(){return this.parent||p.L.getLogger(U).error(B("objectIdField")),this.parent?.objectIdField}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){(0,T.YN)(e,this.fieldsIndex),this._override("renderer",e)}get renderer(){if(this._isOverridden("renderer"))return this._get("renderer");const{parent:e}=this;return e&&!e.isTable&&"mesh"!==e.geometryType?(t=e.geometryType,new a.Z({symbol:q(t)})):null;var t}readRendererFromService(e,t,r){if("Table"===t.type)return null;const s=t.drawingInfo?.renderer,i=D(s,t,r);let n;const{subtypeCode:o}=this;if(null!=o&&function(e,t){return!(!t||"unique-value"!==e?.type||"string"!=typeof e.field||e.field.toLowerCase()!==t.toLowerCase()||e.field2||e.field3||e.valueExpression)}(i,t.subtypeField)){const e=i.uniqueValueInfos?.find((({value:e})=>(e="number"==typeof e?String(e):e)===String(o)));e&&(n=new a.Z({symbol:e.symbol}))}else"simple"!==i?.type||i.visualVariables?.length||(n=i);return n}readRenderer(e,t,r){const s=t?.layerDefinition?.drawingInfo?.renderer;if(!s)return;const i=s.visualVariables?.some((e=>"rotationInfo"!==e.type));return i?void 0:D(s,t,r)||void 0}get spatialReference(){return this.parent?.spatialReference}readTemplatesFromService(e,t){return[k(this.subtypeCode,t)]}readTitleFromService(e,t){const r=G(this.subtypeCode,t);return null!=r?r.name:null}get url(){return this.parent?.url}get userHasUpdateItemPrivileges(){return!!this.parent?.userHasUpdateItemPrivileges}async addAttachment(e,t){const{parent:r}=this;if(!r)throw B("addAttachment");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new d.Z("subtype-sublayer:addAttachment","The feature provided does not belong to this SubtypeSublayer");return r.addAttachment(e,t)}async updateAttachment(e,t,r){const{parent:s}=this;if(!s)throw B("updateAttachment");if(e.getAttribute(s.subtypeField)!==this.subtypeCode)throw new d.Z("subtype-sublayer:updateAttachment","The feature provided does not belong to this SubtypeSublayer");return s.updateAttachment(e,t,r)}async deleteAttachments(e,t){const{parent:r}=this;if(!r)throw B("deleteAttachments");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new d.Z("subtype-sublayer:deleteAttachments","The feature provided does not belong to this SubtypeSublayer");return r.deleteAttachments(e,t)}async applyEdits(e,t){if(!this.parent)throw B("applyEdits");return this.parent.applyEdits(e,t)}createPopupTemplate(e){let t=this;const{parent:r,fields:s,title:i}=this;if(r){const{displayField:e,editFieldsInfo:n,objectIdField:o}=r;t={displayField:e,editFieldsInfo:n,fields:s,objectIdField:o,title:i}}return(0,L.eZ)(t,e)}createQuery(){if(!this.parent)throw B("createQuery");const e=(0,A.h)(this.parent),t=`${this.parent.subtypeField}=${this.subtypeCode}`;return e.where=(0,g._)(t,this.parent.definitionExpression),e}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e){return this._getLayerDomain(e)}hasUserOverrides(){return P.some((e=>this.originIdOf(e)===C.O.USER))}async queryAttachments(e,t){const r=await this.load();if(!r.parent)throw B("queryAttachments");const s=e.clone();return s.where=H(s.where,r.parent.subtypeField,r.subtypeCode),r.parent.queryAttachments(e,t)}async queryFeatures(e,t){const r=await this.load();if(!r.parent)throw B("queryFeatures");const s=x.Z.from(e)??r.createQuery();return null!=e&&(s.where=H(s.where,r.parent.subtypeField,r.subtypeCode)),r.parent.queryFeatures(s,t)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}};(0,s._)([(0,m.Cb)({readOnly:!0,json:{read:!1}})],z.prototype,"capabilities",null),(0,s._)([(0,m.Cb)({readOnly:!0,json:{read:!1}})],z.prototype,"effectiveCapabilities",null),(0,s._)([(0,m.Cb)({json:{write:{ignoreOrigin:!0}}})],z.prototype,"charts",void 0),(0,s._)([(0,m.Cb)({type:Boolean,nonNullable:!0,json:{name:"enableEditing",write:{ignoreOrigin:!0}}})],z.prototype,"editingEnabled",void 0),(0,s._)([(0,m.Cb)({type:Boolean,readOnly:!0})],z.prototype,"effectiveEditingEnabled",null),(0,s._)([(0,m.Cb)({readOnly:!0,json:{read:!1}})],z.prototype,"elevationInfo",null),(0,s._)([(0,m.Cb)({json:{name:"layerDefinition.fieldOverrides",origins:{service:{read:!1}},write:{ignoreOrigin:!0,allowNull:!0}}})],z.prototype,"fieldOverrides",void 0),(0,s._)([(0,w.w)("fieldOverrides")],z.prototype,"writeFieldOverrides",null),(0,s._)([(0,m.Cb)({...Z.fields,readOnly:!0,json:{read:!1}})],z.prototype,"fields",null),(0,s._)([(0,m.Cb)(Z.fieldsIndex)],z.prototype,"fieldsIndex",void 0),(0,s._)([(0,m.Cb)({readOnly:!0,json:{read:!1}})],z.prototype,"floorInfo",null),(0,s._)([(0,m.Cb)({type:_.Z,json:{name:"formInfo",write:{ignoreOrigin:!0}}})],z.prototype,"formTemplate",void 0),(0,s._)([(0,m.Cb)({type:String,clonable:!1,readOnly:!0,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],z.prototype,"id",void 0),(0,s._)([(0,m.Cb)({readOnly:!0,json:{read:!1}})],z.prototype,"geometryType",null),(0,s._)([(0,m.Cb)({readOnly:!0,json:{read:!1}})],z.prototype,"type",void 0),(0,s._)([(0,m.Cb)(V((0,c.d9)(F.l)))],z.prototype,"labelsVisible",void 0),(0,s._)([(0,m.Cb)({type:[E.Z],json:{name:"layerDefinition.drawingInfo.labelingInfo",origins:{service:{read:!1}},read:{reader:j.r},write:{ignoreOrigin:!0}}})],z.prototype,"labelingInfo",void 0),(0,s._)([(0,m.Cb)({type:["ArcGISFeatureLayer"],readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],z.prototype,"layerType",void 0),(0,s._)([(0,m.Cb)(V((0,c.d9)(F.a)))],z.prototype,"legendEnabled",void 0),(0,s._)([(0,m.Cb)({type:["show","hide"]})],z.prototype,"listMode",void 0),(0,s._)([(0,m.Cb)((()=>{const e=(0,c.d9)(F.c);return e.json.origins.service.read=!1,V(e)})())],z.prototype,"minScale",void 0),(0,s._)([(0,m.Cb)((()=>{const e=(0,c.d9)(F.m);return e.json.origins.service.read=!1,V(e)})())],z.prototype,"maxScale",void 0),(0,s._)([(0,m.Cb)({readOnly:!0})],z.prototype,"effectiveScaleRange",null),(0,s._)([(0,m.Cb)({readOnly:!0,json:{read:!1}})],z.prototype,"objectIdField",null),(0,s._)([(0,m.Cb)({type:Number,range:{min:0,max:1},nonNullable:!0,json:{write:{ignoreOrigin:!0}}})],z.prototype,"opacity",void 0),(0,s._)([(0,m.Cb)({clonable:!1})],z.prototype,"parent",void 0),(0,s._)([(0,m.Cb)(V((0,c.d9)(F.p)))],z.prototype,"popupEnabled",void 0),(0,s._)([(0,m.Cb)({type:i.Z,json:{name:"popupInfo",write:{ignoreOrigin:!0}}})],z.prototype,"popupTemplate",void 0),(0,s._)([(0,m.Cb)({readOnly:!0})],z.prototype,"defaultPopupTemplate",null),(0,s._)([(0,m.Cb)({types:Q,json:{write:{target:"layerDefinition.drawingInfo.renderer",ignoreOrigin:!0}}})],z.prototype,"renderer",null),(0,s._)([(0,v.r)("service","renderer",["drawingInfo.renderer","subtypeField","type"])],z.prototype,"readRendererFromService",null),(0,s._)([(0,v.r)("renderer",["layerDefinition.drawingInfo.renderer"])],z.prototype,"readRenderer",null),(0,s._)([(0,m.Cb)({readOnly:!0,json:{read:!1}})],z.prototype,"spatialReference",null),(0,s._)([(0,m.Cb)({type:Number,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],z.prototype,"subtypeCode",void 0),(0,s._)([(0,m.Cb)({type:[I.Z],json:{name:"layerDefinition.templates",write:{ignoreOrigin:!0}}})],z.prototype,"templates",void 0),(0,s._)([(0,v.r)("service","templates",["geometryType","subtypeField","subtypes","type"])],z.prototype,"readTemplatesFromService",null),(0,s._)([(0,m.Cb)({type:String,json:{write:{ignoreOrigin:!0}}})],z.prototype,"title",void 0),(0,s._)([(0,v.r)("service","title",["subtypes"])],z.prototype,"readTitleFromService",null),(0,s._)([(0,m.Cb)({readOnly:!0,json:{read:!1}})],z.prototype,"url",null),(0,s._)([(0,m.Cb)({readOnly:!0})],z.prototype,"userHasUpdateItemPrivileges",null),(0,s._)([(0,m.Cb)({type:Boolean,nonNullable:!0,json:{name:"visibility",write:{ignoreOrigin:!0}}})],z.prototype,"visible",void 0),z=(0,s._)([(0,S.j)(U)],z);const H=(e,t,r)=>{const s=new RegExp(`${t}\\s*=\\s*\\d+`),i=`${t}=${r}`,n=e??"";return s.test(n)?n.replace(s,i):(0,g._)(i,n)},B=e=>new d.Z(`This sublayer must have a parent SubtypeGroupLayer in order to use ${e}`),N=z}}]);