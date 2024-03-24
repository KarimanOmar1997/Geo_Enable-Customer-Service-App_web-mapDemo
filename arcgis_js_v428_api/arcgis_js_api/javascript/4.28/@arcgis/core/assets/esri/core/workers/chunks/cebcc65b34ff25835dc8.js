"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[9705],{20114:(e,t,r)=>{r.d(t,{S:()=>u,a:()=>y,b:()=>w,c:()=>o,d:()=>g,e:()=>f,f:()=>b,i:()=>l});var a=r(82058),s=r(48578),n=r(50406),i=r(13235);class o{constructor(e,t,r){this.assetName=e,this.assetMimeType=t,this.parts=r}equals(e){return this===e||this.assetName===e.assetName&&this.assetMimeType===e.assetMimeType&&(0,s.l)(this.parts,e.parts,((e,t)=>e.equals(t)))}isOnService(e){return this.parts.every((t=>t.isOnService(e)))}makeHash(){let e="";for(const t of this.parts)e+=t.partHash;return e}async toBlob(e){const{parts:t}=this;if(1===t.length)return t[0].toBlob(e);const r=await Promise.all(t.map((t=>t.toBlob(e))));return(0,n.k_)(e),new Blob(r)}}class u{constructor(e,t){this.partUrl=e,this.partHash=t}equals(e){return this===e||this.partUrl===e.partUrl&&this.partHash===e.partHash}isOnService(e){return this.partUrl.startsWith(`${e.path}/assets/`)}async toBlob(e){const{data:t}=await(0,a.Z)(this.partUrl,{responseType:"blob"});return(0,n.k_)(e),t}}function l(e){return t=e?.source,!!t&&(Array.isArray(t)?t.some(h):h(t));var t}function d(e){return!!Array.isArray(e)&&e.every((e=>e instanceof o))}const p=/^(model\/gltf\+json)|(model\/gltf-binary)$/,c=/\.(gltf|glb)/i;function h(e){if(e instanceof File){const{type:t,name:r}=e;return p.test(t)||c.test(r)}return p.test(e.assetMimeType)||c.test(e.assetName)}function y(e,t){if(!e)return!1;const{source:r}=e;return function(e,t){if(Array.isArray(e)){const r=e;return r.length>0&&r.every((e=>m(e,t)))}return m(e,t)}(r,t)}function f(e,t){if(e===t)return!0;const{source:r}=e,{source:a}=t;if(r===a)return!0;if(d(r)&&d(a)){if(r.length!==a.length)return!1;const e=(e,t)=>e.assetName<t.assetName?-1:e.assetName>t.assetName?1:0,t=[...r].sort(e),s=[...a].sort(e);for(let e=0;e<t.length;++e)if(!t[e].equals(s[e]))return!1;return!0}return!1}function m(e,t){return e instanceof o&&e.isOnService(t)}function g(e,t){return e instanceof File?(0,i.g)(e,t):(0,i.b)(e.assetMimeType,t)??(0,i.c)(e.assetName,t)}function b(e){return Array.isArray(e)?e:[e]}function w(e){return!!e.original}},29705:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Y});var a=r(29768),s=(r(74569),r(88762)),n=r(82058),i=r(93314),o=r(48578),u=r(60991),l=r(57251),d=r(81184),p=r(92143),c=r(31450),h=r(50406),y=r(32101),f=r(10279),m=r(34250),g=(r(91306),r(17533)),b=r(21801),w=r(65775),F=r(57532),A=r(66705),S=r(79641),R=r(20114),v=r(23761),I=r(53785),E=r(1623),O=r(32422),q=r(89231);async function x(e,t,r){const{geometry:a}=t,s={...t.attributes};if(null!=r&&"mesh"===a?.type){const{transformFieldRoles:t}=r,{origin:n,spatialReference:i,transform:o}=a,u=e.spatialReference;await(0,E.initializeProjection)(i,u);const l=(0,E.project)(n,u);if(s[t.originX]=l.x,s[t.originY]=l.y,s[t.originZ]=l.z??0,null!=o){const{translation:e,scale:r,rotation:n}=o,{vertexSpace:l}=a,d=l.isGeoreferenced?1:(0,I.R)(i)/(0,I.R)(u);s[t.translationX]=e[0]*d,s[t.translationY]=e[2]*d,s[t.translationZ]=-e[1]*d,s[t.scaleX]=r[0],s[t.scaleY]=r[2],s[t.scaleZ]=r[1],s[t.rotationX]=n[0],s[t.rotationY]=n[2],s[t.rotationZ]=-n[1],s[t.rotationDeg]=n[3]}return{attributes:s}}return null==a?{attributes:s}:"mesh"===a.type||"extent"===a.type?null:{geometry:a.toJSON(),attributes:s}}async function Z(e,t){const r=await Promise.all((t.addAttachments??[]).map((t=>_(e,t)))),a=await Promise.all((t.updateAttachments??[]).map((t=>_(e,t)))),s=t.deleteAttachments??[];return r.length||a.length||s.length?{adds:r,updates:a,deletes:[...s]}:null}async function _(e,t){const{feature:r,attachment:a}=t,{globalId:s,name:n,contentType:i,data:o,uploadId:u}=a,l={globalId:s};if(r&&("attributes"in r?l.parentGlobalId=r.attributes?.[e.globalIdField]:r.globalId&&(l.parentGlobalId=r.globalId)),u)l.uploadId=u;else if(o){const e=await(0,y.IR)(o);e&&(l.contentType=e.mediaType,l.data=e.data),o instanceof File&&(l.name=o.name)}return n&&(l.name=n),i&&(l.contentType=i),l}function T(e){const t=!0===e.success?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new u.Z("feature-layer-source:edit-failure",t.description,{code:t.code}):null}}function $(e,t){return new v.Z({attributes:e.attributes,geometry:(0,O.im)({...e.geometry,spatialReference:t})})}function M(e,t){return{adds:e?.adds?.map((e=>$(e,t)))||[],updates:e?.updates?.map((e=>({original:$(e[0],t),current:$(e[1],t)})))||[],deletes:e?.deletes?.map((e=>$(e,t)))||[],spatialReference:t}}var C=r(4571),N=r(10708),U=r(21132),k=r(62670),B=r(13235),L=r(2845),j=r(87728),D=r(31292),J=r(65398),P=r(60947);function Q(e){const{vertexSpace:t}=e;if(t.isRelative)return e.clone();const{anchor:r}=e,a=r.clone(),s=(0,w.d)(G,[-a.x,-a.y,-a.z]),n=new A.Z({origin:[a.x,a.y,a.z]}),i=e.cloneWithVertexSpace(n),{position:o}=i.vertexAttributes;return i.vertexAttributes.position=(0,S.a)(new Float64Array(o.length),o,s),i.vertexAttributesChanged(),i}r(73796),r(12047),r(21972),r(86656),r(76506),r(66396),r(22723),r(379),r(62062),r(6540),r(6906),r(79456),r(97714),r(89623),r(73173),r(2906),r(84069),r(91597),r(86787),r(35132),r(44567),r(89034),r(98380),r(92482),r(82426),r(72836),r(66106),r(29794),r(92896),r(22781),r(35197),r(8925),r(3482),r(76131),r(36097),r(33101),r(66122),r(59465),r(86748),r(15324),r(75067),r(89914),r(14249),r(66284),r(87239),r(60217),r(29107),r(30574),r(2157),r(25977),r(58076),r(98242),r(7471),r(54414),r(1648),r(45154),r(16769),r(93603),r(15438),r(593),r(48027),r(54174),r(85699),r(55531),r(96055),r(47776),r(18033),r(6331),r(62048),r(56890),r(30493),r(4292),r(75626),r(72652),r(29641),r(70821),r(3296),r(34229),r(37029),r(96467),r(63571),r(30776),r(63130),r(25696),r(94216),r(42775),r(95834),r(34394),r(57150),r(76726),r(20444),r(76393),r(78548),r(2497),r(49906),r(46527),r(11799),r(48649),r(81731),r(9960),r(30823),r(53326),r(5853),r(39141),r(38742),r(52461),r(48243),r(34635),r(10401),r(49900),r(58943),r(67477),r(78533),r(74653),r(91091),r(70737),r(36834),r(8487),r(17817),r(90814),r(15459),r(97189),r(61847),r(28212),r(16955),r(22401),r(48699),r(77894),r(55187),r(8586),r(44509),r(69814),r(11305),r(62259),r(44790),r(58085),r(41864),r(5909),r(60669),r(48208),r(51589),r(50626),r(92624),r(92847),r(95533),r(94751),r(95307),r(19124),r(20438),r(39855),r(89219),r(6941),r(69218),r(97546),r(9801),r(53523),r(42911),r(46826),r(45433),r(54732),r(55402),r(49214),r(76733),r(11385),r(55823),r(82827),r(6502),r(40267),r(87258),r(72992),r(86758),r(65684),r(12158),r(74864),r(63683),r(94479),r(45702),r(51127),r(26822),r(51723),r(23243),r(51669),r(6090),r(3977),r(36741),r(11253),r(90319),r(38822),r(74057),r(48190),r(85557),r(67541),r(16218),r(95310),r(93939),r(62407),r(90033),r(97807),r(238),r(71831),r(34446),r(46646),r(32925),r(50619),r(27207);const G=(0,F.a)(),V=new l.J({originalAndCurrentFeatures:"original-and-current-features",none:"none"}),z=new Set(["Feature Layer","Oriented Imagery Layer","Table"]),H=new l.J({Started:"published",Publishing:"publishing",Stopped:"unavailable"});let W=class extends d.Z{constructor(){super(...arguments),this.type="feature-layer",this.refresh=(0,h.Ds)((async()=>{await this.load();const e=this.sourceJSON.editingInfo?.lastEditDate;if(null==e)return{dataChanged:!0,updates:{}};try{await this._fetchService(null)}catch{return{dataChanged:!0,updates:{}}}const t=e!==this.sourceJSON.editingInfo?.lastEditDate;return{dataChanged:t,updates:t?{editingInfo:this.sourceJSON.editingInfo,extent:this.sourceJSON.extent}:null}})),this._ongoingAssetUploads=new Map}load(e){const t=this.layer.sourceJSON,r=this._fetchService(t,{...e}).then((()=>this.layer.setUserPrivileges(this.sourceJSON.serviceItemId,e))).then((()=>this._ensureLatestMetadata(e)));return this.addResolvingPromise(r),Promise.resolve(this)}get queryTask(){const{capabilities:e,parsedUrl:t,dynamicDataSource:r,infoFor3D:a,gdbVersion:s,spatialReference:n,fieldsIndex:i}=this.layer,u=(0,o.h)("featurelayer-pbf")&&e?.query.supportsFormatPBF&&null==a,l=e?.operations?.supportsQueryAttachments??!1;return new N.Q({url:t.path,pbfSupported:u,fieldsIndex:i,infoFor3D:a,dynamicDataSource:r,gdbVersion:s,sourceSpatialReference:n,queryAttachmentsSupported:l})}async addAttachment(e,t){await this.load();const{layer:r}=this;await(0,k.e)(r,"editing");const a=e.attributes[r.objectIdField],s=r.parsedUrl.path+"/"+a+"/addAttachment",i=this._getLayerRequestOptions(),o=this._getFormDataForAttachment(t,i.query);try{return T((await(0,n.Z)(s,{body:o})).data.addAttachmentResult)}catch(e){throw this._createAttachmentErrorResult(a,e)}}async updateAttachment(e,t,r){await this.load();const{layer:a}=this;await(0,k.e)(a,"editing");const s=e.attributes[a.objectIdField],i=a.parsedUrl.path+"/"+s+"/updateAttachment",o=this._getLayerRequestOptions({query:{attachmentId:t}}),u=this._getFormDataForAttachment(r,o.query);try{return T((await(0,n.Z)(i,{body:u})).data.updateAttachmentResult)}catch(e){throw this._createAttachmentErrorResult(s,e)}}async applyEdits(e,t){await this.load();const{layer:r}=this;await(0,k.e)(r,"editing");const a=r.infoFor3D,i=null!=a,u=i||(t?.globalIdUsed??!1),l=i?await this._uploadMeshesAndGetAssetMapEditsJSON(e):null,d=e.addFeatures?.map((e=>x(this.layer,e,a)))??[],p=(await Promise.all(d)).filter(o.i),c=e.updateFeatures?.map((e=>x(this.layer,e,a)))??[],h=(await Promise.all(c)).filter(o.i),y=function(e,t,r){if(!t||0===t.length)return[];if(r&&(0,q.Ey)(t))return t.map((e=>e.globalId));if((0,q.aw)(t))return t.map((e=>e.objectId));const a=r?e.globalIdField:e.objectIdField;return a?t.map((e=>e.getAttribute(a))):[]}(this.layer,e.deleteFeatures,u);(0,j.u)(p,h,r.spatialReference);const f=await Z(this.layer,e),m=r.capabilities.editing.supportsAsyncApplyEdits&&i,g=t?.gdbVersion||r.gdbVersion,b={gdbVersion:g,rollbackOnFailure:t?.rollbackOnFailureEnabled,useGlobalIds:u,returnEditMoment:t?.returnEditMoment,usePreviousEditMoment:t?.usePreviousEditMoment,async:m};await(0,J.b)(this.layer.url,g,!0);const w=(0,J.i)(this.layer.url,g||null);t?.returnServiceEditsOption?(b.edits=JSON.stringify([{id:r.layerId,adds:p,updates:h,deletes:y,attachments:f,assetMaps:l}]),b.returnServiceEditsOption=V.toJSON(t?.returnServiceEditsOption),b.returnServiceEditsInSourceSR=t?.returnServiceEditsInSourceSR):(b.adds=p.length?JSON.stringify(p):null,b.updates=h.length?JSON.stringify(h):null,b.deletes=y.length?u?JSON.stringify(y):y.join(","):null,b.attachments=f&&JSON.stringify(f),b.assetMaps=null!=l?JSON.stringify(l):void 0);const F=this._getLayerRequestOptions({method:"post",query:b});w&&(F.authMode="immediate",F.query.returnEditMoment=!0,F.query.sessionId=J.c);const A=t?.returnServiceEditsOption?r.url:r.parsedUrl.path;let S;try{S=m?await this._asyncApplyEdits(A+"/applyEdits",F):await(0,n.Z)(A+"/applyEdits",F)}catch(e){if(!function(e){const t=e.details.raw,r=+t.code,a=+t.extendedCode;return 500===r&&(-2147217144===a||-2147467261===a)}(e))throw e;F.authMode="immediate",S=m?await this._asyncApplyEdits(A+"/applyEdits",F):await(0,n.Z)(A+"/applyEdits",F)}if(!r.capabilities.operations?.supportsEditing&&r.effectiveCapabilities?.operations?.supportsEditing){const e=s.id?.findCredential(r.url);await(e?.refreshToken())}return this._createEditsResult(S)}async deleteAttachments(e,t){await this.load();const{layer:r}=this;await(0,k.e)(r,"editing");const a=e.attributes[r.objectIdField],s=r.parsedUrl.path+"/"+a+"/deleteAttachments";try{return(await(0,n.Z)(s,this._getLayerRequestOptions({query:{attachmentIds:t.join(",")},method:"post"}))).data.deleteAttachmentResults.map(T)}catch(e){throw this._createAttachmentErrorResult(a,e)}}fetchRecomputedExtents(e={}){const t=e.signal;return this.load({signal:t}).then((async()=>{const t=this._getLayerRequestOptions({...e,query:{returnUpdates:!0}}),{layerId:r,url:a}=this.layer,{data:s}=await(0,n.Z)(`${a}/${r}`,t),{id:o,extent:u,fullExtent:l,timeExtent:d}=s,p=u||l;return{id:o,fullExtent:p&&b.Z.fromJSON(p),timeExtent:d&&i.Z.fromJSON({start:d[0],end:d[1]})}}))}async queryAttachments(e,t={}){await this.load();const r=this._getLayerRequestOptions(t);return this.queryTask.executeAttachmentQuery(e,r)}async queryFeatures(e,t){await this.load();const r=await this.queryTask.execute(e,{...t,query:this._createRequestQueryOptions(t)});return e.outStatistics?.length&&r.features.length&&r.features.forEach((t=>{const r=t.attributes;e.outStatistics?.forEach((({outStatisticFieldName:e})=>{if(e){const t=e.toLowerCase();t&&t in r&&e!==t&&(r[e]=r[t],delete r[t])}}))})),r}async queryFeaturesJSON(e,t){return await this.load(),this.queryTask.executeJSON(e,{...t,query:this._createRequestQueryOptions(t)})}async queryObjectIds(e,t){return await this.load(),this.queryTask.executeForIds(e,{...t,query:this._createRequestQueryOptions(t)})}async queryFeatureCount(e,t){return await this.load(),this.queryTask.executeForCount(e,{...t,query:this._createRequestQueryOptions(t)})}async queryExtent(e,t){return await this.load(),this.queryTask.executeForExtent(e,{...t,query:this._createRequestQueryOptions(t)})}async queryRelatedFeatures(e,t){return await this.load(),this.queryTask.executeRelationshipQuery(e,{...t,query:this._createRequestQueryOptions(t)})}async queryRelatedFeaturesCount(e,t){return await this.load(),this.queryTask.executeRelationshipQueryForCount(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopFeatures(e,t){return await this.load(),this.queryTask.executeTopFeaturesQuery(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopObjectIds(e,t){return await this.load(),this.queryTask.executeForTopIds(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopExtents(e,t){return await this.load(),this.queryTask.executeForTopExtents(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopCount(e,t){return await this.load(),this.queryTask.executeForTopCount(e,{...t,query:this._createRequestQueryOptions(t)})}async fetchPublishingStatus(){if(!(0,U.i)(this.layer.url))return"unavailable";const e=(0,y.v_)(this.layer.url,"status"),t=await(0,n.Z)(e,{query:{f:"json"}});return H.fromJSON(t.data.status)}async uploadAssets(e,t){const{uploadAssets:a}=await r.e(5743).then(r.bind(r,45743));return a(e,{layer:this.layer,ongoingUploads:this._ongoingAssetUploads},t)}async _asyncApplyEdits(e,t){const r=(await(0,n.Z)(e,t)).data.statusUrl;for(;;){const e=(await(0,n.Z)(r,{query:{f:"json"},responseType:"json"})).data;switch(e.status){case"Completed":return(0,n.Z)(e.resultUrl,{query:{f:"json"},responseType:"json"});case"CompletedWithErrors":throw new u.Z("async-applyEdits-failed","asynchronous applyEdits call failed.");case"Failed ImportChanges":case"InProgress":case"Pending":case"ExportAttachments":case"ExportChanges":case"ExportingData":case"ExportingSnapshot":case"ImportAttachments":case"ProvisioningReplica":case"UnRegisteringReplica":break;default:throw new u.Z("async-applyEdits-failed","asynchronous applyEdits call failed (undefined response status)")}await(0,h.e4)(X)}}_createRequestQueryOptions(e){const t={...this.layer.customParameters,token:this.layer.apiKey,...e?.query};return this.layer.datesInUnknownTimezone&&(t.timeReferenceUnknownClient=!0),t}async _fetchService(e,t){if(!e){const r={};(0,o.h)("featurelayer-advanced-symbols")&&(r.returnAdvancedSymbols=!0),t?.cacheBust&&(r._ts=Date.now());const{data:a}=await(0,n.Z)(this.layer.parsedUrl.path,this._getLayerRequestOptions({query:r,signal:t?.signal}));e=a}this.sourceJSON=await this._patchServiceJSON(e,t?.signal);const r=e.type;if(!z.has(r))throw new u.Z("feature-layer-source:unsupported-type",`Source type "${r}" is not supported`)}async _patchServiceJSON(e,t){if("Table"!==e.type&&e.geometryType&&!e?.drawingInfo?.renderer&&!e.defaultSymbol){const t=(0,C.a)(e.geometryType).renderer;(0,c.s)("drawingInfo.renderer",t,e)}if("esriGeometryMultiPatch"===e.geometryType&&e.infoFor3D&&(e.geometryType="mesh"),null==e.extent)try{const{data:r}=await(0,n.Z)(this.layer.url,this._getLayerRequestOptions({signal:t}));r.spatialReference&&(e.extent={xmin:0,ymin:0,xmax:0,ymax:0,spatialReference:r.spatialReference})}catch(e){(0,h.r9)(e)}return e}async _ensureLatestMetadata(e){if(this.layer.userHasUpdateItemPrivileges&&this.sourceJSON.cacheMaxAge>0)return this._fetchService(null,{...e,cacheBust:!0})}async _uploadMeshesAndGetAssetMapEditsJSON(e){const{addAssetFeatures:t}=e;if(!t?.length)return null;const r=await this._filterRedundantAssetMaps(t);if(!t?.length)return null;const a=new Array,s=new Map;for(const e of r){const{geometry:t}=e,{vertexSpace:r}=t;if(r.isRelative)a.push(t);else{const r=Q(t);s.set(r,t),e.geometry=r,a.push(r)}}await this.uploadAssets(a);for(const[e,t]of s)t.addExternalSources(e.metadata.externalSources.items);return{adds:this._getAssetMapEditsJSON(r),updates:[],deletes:[]}}_getAssetMapEditsJSON(e){const t=new Array,r=this.layer.globalIdField,a=this.layer.parsedUrl;for(const s of e){const e=s.geometry,{metadata:n}=e,i=n.getExternalSourcesOnService(a),o=s.getAttribute(r);if(0===i.length){p.L.getLogger(this).error(`Skipping feature ${o}. The mesh it is associated with has not been uploaded to the service and cannot be mapped to it.`);continue}const{source:u}=i.find(R.b)??i[0],{vertexSpace:l}=e,d=l.isGeoreferenced?["PROJECT_VERTICES"]:[];for(const e of u)1===e.parts.length?t.push({globalId:(0,f.a)(),parentGlobalId:o,assetName:e.assetName,assetHash:e.parts[0].partHash,flags:d}):p.L.getLogger(this).error(`Skipping asset ${e.assetName}. It does not have exactly one part, so we cannot map it to a feature.`)}return t}_createEditsResult(e){const t=e.data,{layerId:r}=this.layer,a=[];let s=null;if(Array.isArray(t))for(const e of t)a.push({id:e.id,editedFeatures:e.editedFeatures}),e.id===r&&(s={addResults:e.addResults??[],updateResults:e.updateResults??[],deleteResults:e.deleteResults??[],attachments:e.attachments,editMoment:e.editMoment});else s=t;const n=function(e){const t=e?.assetMaps;if(t){for(const e of t.addResults)e.success||p.L.getLogger("esri.layers.graphics.sources.support.sourceUtils").error(`Failed to map asset to feature with globalId ${e.globalId}.`);for(const e of t.updateResults)e.success||p.L.getLogger("esri.layers.graphics.sources.support.sourceUtils").error(`Failed to map asset to feature with globalId ${e.globalId}.`)}const r=e?.attachments,a={addFeatureResults:e?.addResults?.map(T)??[],updateFeatureResults:e?.updateResults?.map(T)??[],deleteFeatureResults:e?.deleteResults?.map(T)??[],addAttachmentResults:r?.addResults?r.addResults.map(T):[],updateAttachmentResults:r?.updateResults?r.updateResults.map(T):[],deleteAttachmentResults:r?.deleteResults?r.deleteResults.map(T):[]};return e?.editMoment&&(a.editMoment=e.editMoment),a}(s);if(a.length>0){n.editedFeatureResults=[];for(const e of a){const{editedFeatures:t}=e,r=t?.spatialReference?new P.Z(t.spatialReference):null;n.editedFeatureResults.push({layerId:e.id,editedFeatures:M(t,r)})}}return n}_createAttachmentErrorResult(e,t){const r=t.details.messages?.[0]||t.message,a=t.details.httpStatus||t.details.messageCode;return{objectId:e,globalId:null,error:new u.Z("feature-layer-source:attachment-failure",r,{code:a})}}_getFormDataForAttachment(e,t){const r=e instanceof FormData?e:e&&e.elements?new FormData(e):null;if(r)for(const e in t){const a=t[e];null!=a&&(r.set?r.set(e,a):r.append(e,a))}return r}_getLayerRequestOptions(e={}){const{parsedUrl:t,gdbVersion:r,dynamicDataSource:a}=this.layer;return{...e,query:{gdbVersion:r,layer:a?JSON.stringify({source:a}):void 0,...t.query,f:"json",...this._createRequestQueryOptions(e)},responseType:"json"}}async _filterRedundantAssetMaps(e){const{layer:t}=this,{globalIdField:r,infoFor3D:a,parsedUrl:s}=t;if(null==a||null==r)return e;const n=(0,B.d)(a);if(null==n)return e;const i=(0,y.v_)(s.path,`../${n.id}`),u=new Array,l=new Array;for(const t of e)t.geometry.metadata.getExternalSourcesOnService(s).length>0?l.push(t):u.push(t);const d=l.map((e=>e.getAttribute(r))).filter(o.i);if(0===d.length)return e;const{assetMapFieldRoles:{parentGlobalId:p,assetHash:c}}=a,h=new D.Z;h.where=`${p} IN (${d.map((e=>`'${e}'`))})`,h.outFields=[c,p],h.returnGeometry=!1;const f=await(0,L.e)(i,h),{features:m}=f;return 0===m.length?e:[...u,...l.filter((e=>{const t=e.getAttribute(r);if(!t)return!0;const{metadata:a}=e.geometry,n=m.filter((e=>e.getAttribute(p)===t));if(0===n.length)return!0;const i=n.map((e=>e.getAttribute(c)));return a.getExternalSourcesOnService(s).flatMap((({source:e})=>e.flatMap((e=>e.parts.map((e=>e.partHash)))))).some((e=>i.every((t=>e!==t))))}))]}};(0,a._)([(0,m.Cb)()],W.prototype,"type",void 0),(0,a._)([(0,m.Cb)({constructOnly:!0})],W.prototype,"layer",void 0),(0,a._)([(0,m.Cb)({readOnly:!0})],W.prototype,"queryTask",null),W=(0,a._)([(0,g.j)("esri.layers.graphics.sources.FeatureLayerSource")],W);const X=1e3,Y=W},89219:(e,t,r)=>{r.d(t,{q:()=>a});const a={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByAnonymous:!0,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},4571:(e,t,r)=>{r.d(t,{a:()=>o,b:()=>d,c:()=>c,d:()=>p});var a=r(48578),s=r(76506),n=r(89219),i=r(6941);function o(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?i.d:"esriGeometryPolyline"===e?i.a:i.b}}}const u=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let l=1;function d(e,t){if((0,a.h)("esri-csp-restrictions"))return()=>({[t]:null,...e});try{let r=`this.${t} = null;`;for(const t in e)r+=`this${u.test(t)?`.${t}`:`["${t}"]`} = ${JSON.stringify(e[t])};`;const a=new Function(`\n      return class AttributesClass$${l++} {\n        constructor() {\n          ${r};\n        }\n      }\n    `)();return()=>new a}catch(r){return()=>({[t]:null,...e})}}function p(e={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,s.d9)(e)}}]}function c(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0,supportsAsyncConvert3D:!1},query:n.q,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}},89231:(e,t,r)=>{r.d(t,{Ey:()=>F,applyEdits:()=>A,aw:()=>b,uploadAssets:()=>q});var a=r(23761),s=r(15324),n=r(60991),i=r(76506),o=r(92143),u=r(50406),l=r(32101),d=r(10279),p=r(95533),c=r(65398),h=r(14249),y=r(13235),f=r(39855);function m(e){return null!=e?.applyEdits}function g(e){return"object"==typeof e&&null!=e&&"objectId"in e&&!!e.objectId}function b(e){return e.every(g)}function w(e){return"object"==typeof e&&null!=e&&"globalId"in e&&!!e.globalId}function F(e){return e.every(w)}async function A(e,t,r,a={}){let l;const p="gdbVersion"in e?e.gdbVersion:null,h=a.gdbVersion??p;if((0,c.d)(e)&&e.url)l=(0,c.e)(e.url,e.layerId,h,"original-and-current-features"===a.returnServiceEditsOption);else{l=(0,u.hh)(),l.promise.then((t=>{(t.addedFeatures.length||t.updatedFeatures.length||t.deletedFeatures.length||t.addedAttachments.length||t.updatedAttachments.length||t.deletedAttachments.length)&&e.emit("edits",t)}));const t={result:l.promise};e.emit("apply-edits",t)}try{const{results:u,edits:p}=await async function(e,t,r,a){if(await e.load(),!m(t))throw new n.Z(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e});if(!(0,f.j)(e))throw new n.Z(`${e.type}-layer:editing-disabled`,"Editing is disabled for layer",{layer:e});const{edits:i,options:u}=await async function(e,t,r){const a=(0,f.g)(e),i=t&&(t.addFeatures||t.updateFeatures||t.deleteFeatures),u=t&&(t.addAttachments||t.updateAttachments||t.deleteAttachments),l=null!=e.infoFor3D;if(function(e,t,r,a,s,i){if(!e||!a&&!s)throw new n.Z(`${i}:missing-parameters`,"'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");if(!t.editing.supportsGlobalId&&r?.globalIdUsed)throw new n.Z(`${i}:invalid-parameter`,"This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");if(!t.editing.supportsGlobalId&&s)throw new n.Z(`${i}:invalid-parameter`,"'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");if(!r?.globalIdUsed&&s)throw new n.Z(`${i}:invalid-parameter`,"When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true")}(t,a,r,!!i,!!u,`${e.type}-layer`),!a.data.isVersioned&&r?.gdbVersion)throw new n.Z(`${e.type}-layer:invalid-parameter`,"'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");if(!a.editing.supportsRollbackOnFailure&&r?.rollbackOnFailureEnabled)throw new n.Z(`${e.type}-layer:invalid-parameter`,"This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");const p={...r};if(null!=p.rollbackOnFailureEnabled||a.editing.supportsRollbackOnFailure||(p.rollbackOnFailureEnabled=!0),p.rollbackOnFailureEnabled||"original-and-current-features"!==p.returnServiceEditsOption||(!1===p.rollbackOnFailureEnabled&&o.L.getLogger("esri.layers.graphics.editingSupport").warn(`${e.type}-layer:invalid-parameter`,"'original-and-current-features' is valid for 'returnServiceEditsOption' only when 'rollBackOnFailure' is true, but 'rollBackOnFailure' was set to false. 'rollBackOnFailure' has been overwrritten and set to true."),p.rollbackOnFailureEnabled=!0),!a.editing.supportsReturnServiceEditsInSourceSpatialReference&&p.returnServiceEditsInSourceSR)throw new n.Z(`${e.type}-layer:invalid-parameter`,"This layer does not support 'returnServiceEditsInSourceSR' parameter. See: 'capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference'");if(p.returnServiceEditsInSourceSR&&"original-and-current-features"!==p.returnServiceEditsOption)throw new n.Z(`${e.type}-layer:invalid-parameter`,"'returnServiceEditsInSourceSR' is valid only when 'returnServiceEditsOption' is set to 'original-and-current-features'");const c=function(e,t,r){const a=function(e){return{addFeatures:Array.from(e?.addFeatures??[]),updateFeatures:Array.from(e?.updateFeatures??[]),deleteFeatures:e&&s.Z.isCollection(e.deleteFeatures)?e.deleteFeatures.toArray():e.deleteFeatures||[],addAttachments:e.addAttachments||[],updateAttachments:e.updateAttachments||[],deleteAttachments:e.deleteAttachments||[]}}(e);if(a.addFeatures?.length&&!t.operations.supportsAdd)throw new n.Z(`${r}:unsupported-operation`,"Layer does not support adding features.");if(a.updateFeatures?.length&&!t.operations.supportsUpdate)throw new n.Z(`${r}:unsupported-operation`,"Layer does not support updating features.");if(a.deleteFeatures?.length&&!t.operations.supportsDelete)throw new n.Z(`${r}:unsupported-operation`,"Layer does not support deleting features.");return a.addFeatures=a.addFeatures.map(E),a.updateFeatures=a.updateFeatures.map(E),a.addAssetFeatures=[],a}(t,a,`${e.type}-layer`),h=r?.globalIdUsed||l,m=e.fields.filter((e=>"big-integer"===e.type||"oid"===e.type&&(e.length||0)>=8));if(h){const{globalIdField:t}=e;if(null==t)throw new n.Z(`${e.type}-layer:invalid-parameter`,"Layer does not specify a global id field.");c.addFeatures.forEach((e=>function(e,t){const{attributes:r}=e;null==r[t]&&(r[t]=(0,d.a)())}(e,t)))}return c.addFeatures.forEach((t=>function(e,t,r,a){S(e,t,r,a),R(e,t)}(t,e,h,m))),c.updateFeatures.forEach((t=>function(e,t,r,a){S(e,t,r,a),R(e,t);const s=(0,f.g)(t);if("geometry"in e&&null!=e.geometry&&!s?.editing.supportsGeometryUpdate)throw new n.Z(`${t.type}-layer:unsupported-operation`,"Layer does not support geometry updates.")}(t,e,h,m))),c.deleteFeatures.forEach((t=>function(e,t,r,a){S(e,t,r,a)}(t,e,h,m))),c.addAttachments.forEach((t=>v(t,e))),c.updateAttachments.forEach((t=>v(t,e))),l&&await async function(e,t){if(null==t.infoFor3D)return;const{infoFor3D:r}=t,a=(0,y.b)("model/gltf-binary",r.supportedFormats)??(0,y.c)("glb",r.supportedFormats);if(!a||!r.editFormats.includes(a))throw new n.Z(`${t.type}-layer:binary-gltf-asset-not-supported`,"3DObjectFeatureLayer requires binary glTF (.glb) support for updating mesh geometry.");e.addAssetFeatures??=[];const{addAssetFeatures:s}=e;for(const t of e.addFeatures??[])O(t)&&s.push(t);for(const t of e.updateFeatures??[])O(t)&&s.push(t)}(c,e),{edits:await I(c),options:p}}(e,r,a);return i.addFeatures?.length||i.updateFeatures?.length||i.deleteFeatures?.length||i.addAttachments?.length||i.updateAttachments?.length||i.deleteAttachments?.length?{edits:i,results:await t.applyEdits(i,u)}:{edits:i,results:{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}}(e,t,r,a),c=e=>e.filter((e=>!e.error)).map(i.d9),h={edits:p,addedFeatures:c(u.addFeatureResults),updatedFeatures:c(u.updateFeatureResults),deletedFeatures:c(u.deleteFeatureResults),addedAttachments:c(u.addAttachmentResults),updatedAttachments:c(u.updateAttachmentResults),deletedAttachments:c(u.deleteAttachmentResults),exceededTransferLimit:!1,historicMoment:u.editMoment?new Date(u.editMoment):null,globalIdToObjectId:a.globalIdToObjectId};return u.editedFeatureResults?.length&&(h.editedFeatures=u.editedFeatureResults),l.resolve(h),u}catch(e){throw l.reject(e),e}}function S(e,t,r,a){if(r){if("attributes"in e&&!e.attributes[t.globalIdField])throw new n.Z(`${t.type}-layer:invalid-parameter`,`Feature should have '${t.globalIdField}' when 'globalIdUsed' is true`);if(!("attributes"in e)&&!e.globalId)throw new n.Z(`${t.type}-layer:invalid-parameter`,"`'globalId' of the feature should be passed when 'globalIdUsed' is true")}if(a.length&&"attributes"in e)for(const r of a){const a=e.attributes[r.name];if(void 0!==a&&!(0,h.d2)(r,a))throw new n.Z(`${t.type}-layer:invalid-parameter`,`Big-integer field '${r.name}' of the feature must be less than ${Number.MAX_SAFE_INTEGER}`,{feature:e})}if("geometry"in e&&null!=e.geometry){if(e.geometry.hasZ&&!1===t.capabilities?.data.supportsZ)throw new n.Z(`${t.type}-layer:z-unsupported`,"Layer does not support z values while feature has z values.");if(e.geometry.hasM&&!1===t.capabilities?.data.supportsM)throw new n.Z(`${t.type}-layer:m-unsupported`,"Layer does not support m values while feature has m values.")}}function R(e,t){if("geometry"in e&&"mesh"===e.geometry?.type&&null!=t.infoFor3D){const{geometry:r}=e;if(r.vertexSpace.isGeoreferenced)throw new n.Z(`${t.type}-layer:georeferenced-mesh-unsupported`,"Uploading georeferenced meshes to a layer is not supported.")}}function v(e,t){const{feature:r,attachment:a}=e;if(!r||"attributes"in r&&!r.attributes[t.globalIdField])throw new n.Z(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to a feature with 'globalId'");if(!("attributes"in r)&&!r.globalId)throw new n.Z(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to 'globalId' of the parent feature");if(!a.globalId)throw new n.Z(`${t.type}-layer:invalid-parameter`,"Attachment should have 'globalId'");if(!a.data&&!a.uploadId)throw new n.Z(`${t.type}-layer:invalid-parameter`,"Attachment should have 'data' or 'uploadId'");if(!(a.data instanceof File&&a.data.name||a.name))throw new n.Z(`${t.type}-layer:invalid-parameter`,"'name' is required when attachment is specified as Base64 encoded string using 'data'");if(!t.capabilities?.editing.supportsUploadWithItemId&&a.uploadId)throw new n.Z(`${t.type}-layer:invalid-parameter`,"This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if("string"==typeof a.data){const e=(0,l.sJ)(a.data);if(e&&!e.isBase64)throw new n.Z(`${t.type}-layer:invalid-parameter`,"Attachment 'data' should be a Blob, File or Base64 encoded string")}}async function I(e){const t=e.addFeatures??[],r=e.updateFeatures??[],a=t.concat(r).map((e=>e.geometry)),s=await(0,p.aX)(a),n=t.length,i=r.length;return s.slice(0,n).forEach(((e,r)=>t[r].geometry=e)),s.slice(n,n+i).forEach(((e,t)=>r[t].geometry=e)),e}function E(e){const t=new a.Z;return e.attributes||(e.attributes={}),t.geometry=e.geometry,t.attributes=e.attributes,t}function O(e){return"mesh"===e?.geometry?.type}function q(e,t,r,a){if(!m(t))throw new n.Z(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e});if(!t.uploadAssets)throw new n.Z(`${e.type}-layer:no-asset-upload-support`,"Layer source does not support uploadAssets capability",{layer:e});return t.uploadAssets(r,a)}r(29768),r(74569),r(91306),r(48578),r(21801),r(34250),r(66396),r(22723),r(86656),r(31450),r(17533),r(6540),r(73796),r(12047),r(21972),r(379),r(62062),r(6906),r(79456),r(97714),r(60947),r(53785),r(57251),r(89623),r(73173),r(82058),r(88762),r(2906),r(91597),r(86787),r(35132),r(84069),r(44567),r(89034),r(98380),r(92482),r(82426),r(72836),r(66106),r(29794),r(92896),r(22781),r(32422),r(86748),r(66122),r(29107),r(30574),r(2157),r(25977),r(58076),r(98242),r(7471),r(54414),r(59465),r(1648),r(8925),r(3482),r(76131),r(36097),r(45154),r(16769),r(93603),r(15438),r(593),r(48027),r(54174),r(85699),r(55531),r(96055),r(47776),r(18033),r(6331),r(62048),r(56890),r(30493),r(4292),r(75626),r(72652),r(29641),r(70821),r(3296),r(34229),r(37029),r(75067),r(89914),r(66284),r(87239),r(60217),r(96467),r(63571),r(30776),r(63130),r(25696),r(94216),r(42775),r(95834),r(34394),r(57150),r(76726),r(20444),r(76393),r(78548),r(2497),r(49906),r(46527),r(11799),r(48649),r(81731),r(9960),r(30823),r(53326),r(5853),r(39141),r(38742),r(52461),r(48243),r(34635),r(10401),r(49900),r(81184),r(33101),r(58943),r(67477),r(78533),r(74653),r(91091),r(70737),r(36834),r(8487),r(17817),r(90814),r(15459),r(97189),r(61847),r(28212),r(16955),r(22401),r(48699),r(77894),r(55187),r(8586),r(44509),r(69814),r(11305),r(62259),r(44790),r(58085),r(41864),r(5909),r(60669),r(48208),r(51589),r(94751),r(95307),r(19124),r(20438)},57532:(e,t,r)=>{function a(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function s(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]]}function n(e,t){return new Float64Array(e,t,16)}r.d(t,{I:()=>i,a:()=>a,b:()=>s,c:()=>n});const i=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]},79641:(e,t,r)=>{r.d(t,{a:()=>n,b:()=>i,c:()=>s,d:()=>d,e:()=>u,m:()=>a,n:()=>p,s:()=>l,t:()=>o});const a=r(92143).L.getLogger("esri.views.3d.support.buffer.math");function s(e,t,r){n(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function n(e,t,r,s=3,n=s){if(e.length/s!==Math.ceil(t.length/n))return a.error("source and destination buffers need to have the same number of elements"),e;const i=e.length/s,o=r[0],u=r[1],l=r[2],d=r[4],p=r[5],c=r[6],h=r[8],y=r[9],f=r[10],m=r[12],g=r[13],b=r[14];let w=0,F=0;for(let r=0;r<i;r++){const r=t[w],a=t[w+1],i=t[w+2];e[F]=o*r+d*a+h*i+m,e[F+1]=u*r+p*a+y*i+g,e[F+2]=l*r+c*a+f*i+b,w+=n,F+=s}return e}function i(e,t,r){o(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function o(e,t,r,s=3,n=s){if(e.length/s!==Math.ceil(t.length/n))return void a.error("source and destination buffers need to have the same number of elements");const i=e.length/s,o=r[0],u=r[1],l=r[2],d=r[3],p=r[4],c=r[5],h=r[6],y=r[7],f=r[8];let m=0,g=0;for(let r=0;r<i;r++){const r=t[m],a=t[m+1],i=t[m+2];e[g]=o*r+d*a+h*i,e[g+1]=u*r+p*a+y*i,e[g+2]=l*r+c*a+f*i,m+=n,g+=s}}function u(e,t,r){l(e.typedBuffer,t,r,e.typedBufferStride)}function l(e,t,r,a=3){const s=Math.min(e.length/a,t.count),n=t.typedBuffer,i=t.typedBufferStride;let o=0,u=0;for(let t=0;t<s;t++)e[u]=r*n[o],e[u+1]=r*n[o+1],e[u+2]=r*n[o+2],o+=i,u+=a}function d(e,t){p(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function p(e,t,r=3,a=r){const s=Math.min(e.length/r,t.length/a);let n=0,i=0;for(let o=0;o<s;o++){const s=t[n],o=t[n+1],u=t[n+2],l=s*s+o*o+u*u;if(l>0){const t=1/Math.sqrt(l);e[i]=t*s,e[i+1]=t*o,e[i+2]=t*u}n+=a,i+=r}}},66705:(e,t,r)=>{r.d(t,{Z:()=>c});var a=r(29768),s=r(66122),n=r(12047),i=r(34250),o=(r(91306),r(48578),r(59465)),u=r(17533),l=r(66106),d=r(91597);r(21972),r(92143),r(31450),r(76506),r(86656),r(66396),r(22723),r(379),r(62062),r(6540),r(6906),r(79456),r(50406),r(60991),r(57251),r(86787),r(97714),r(2906),r(73796),r(60947),r(53785),r(89623),r(73173),r(82058),r(88762),r(32101),r(35132);let p=class extends((0,s.J)(n.wq)){constructor(e){super(e),this.type="georeferenced-relative",this.isRelative=!0,this.isGeoreferenced=!0,this.origin=(0,l.c)()}getOriginPoint(e){const[t,r,a]=this.origin;return new d.Z({x:t,y:r,z:a,spatialReference:e})}setOriginFromPoint({x:e,y:t,z:r}){this.origin=(0,l.f)(e,t,r??0)}};(0,a._)([(0,o.e)({georeferencedRelative:"georeferenced-relative"},{readOnly:!0})],p.prototype,"type",void 0),(0,a._)([(0,i.Cb)({type:[Number],nonNullable:!0,json:{write:!0}})],p.prototype,"origin",void 0),p=(0,a._)([(0,u.j)("esri.geometry.support.MeshGeoreferencedRelativeVertexSpace")],p);const c=p}}]);