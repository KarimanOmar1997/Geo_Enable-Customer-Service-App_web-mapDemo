/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import e from"../core/Error.js";import{a as t}from"./MultiOriginJSONSupport.js";import{whenOnce as r}from"../core/reactiveUtils.js";import{urlToObject as o,hasSameCanonicalPortal as a}from"../core/urlUtils.js";import{u as i}from"./originUtils.js";import s from"../geometry/SpatialReference.js";import{f as p}from"./unitUtils.js";import{webMercatorToGeographic as n}from"../geometry/support/webMercatorUtils.js";import{f as l}from"./arcgisLayerUrl.js";import{w as m,i as c}from"./layerUtils2.js";import u from"../portal/Portal.js";import d from"../portal/PortalItem.js";import{r as f,T as j,b as y,h as w}from"./portalItemUtils.js";import{p as g}from"./project.js";import h from"../rest/support/ProjectParameters.js";import{k as b,h as U,m as v}from"./basemapUtils.js";import{v as P}from"./saveAPIKeyUtils.js";import{b as R,s as _}from"./saveUtils.js";import"../core/lang.js";import"./typedArrayUtil.js";import"./Logger.js";import"../config.js";import"./tslib.es6.js";import"../core/Accessor.js";import"../core/Handles.js";import"./maybe.js";import"../core/accessorSupport/decorators/subclass.js";import"./metadata.js";import"./utils.js";import"./handleUtils.js";import"./tracking.js";import"./ensureType.js";import"../core/accessorSupport/decorators/property.js";import"./ObjectPool.js";import"./ObservableBase.js";import"../core/scheduling.js";import"./nextTick.js";import"./PooledArray.js";import"../core/promiseUtils.js";import"./time.js";import"../core/JSONSupport.js";import"./asyncUtils.js";import"../core/Collection.js";import"../core/Evented.js";import"./shared.js";import"./SimpleObservable.js";import"./multiOriginJSONSupportUtils.js";import"./writer.js";import"./jsonMap.js";import"./Ellipsoid.js";import"./assets.js";import"../request.js";import"../kernel.js";import"./persistableUrlUtils.js";import"../core/Loadable.js";import"../core/Promise.js";import"./reader.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"./locale.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../geometry/projection.js";import"./vec3f64.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./Axis.js";import"./extentUtils.js";import"./aaBoundingRect.js";import"./mathUtils.js";import"./vec3.js";import"./common.js";import"../geometry/Polyline.js";import"./projectBuffer.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"./zscale.js";import"../geometry/support/jsonUtils.js";import"./utils6.js";import"./utils7.js";import"../Basemap.js";import"./collectionUtils.js";import"./loadAll.js";import"./messages.js";import"../support/BasemapStyle.js";import"./writeUtils.js";import"./utils3.js";import"./colorUtils.js";import"./screenUtils.js";import"./mat4.js";import"./uuid.js";import"./resourceUtils.js";const S=["NatGeo_World_Map","Ocean_Basemap","USA_Topo_Maps","World_Imagery","World_Street_Map","World_Terrain_Base","World_Topo_Map","World_Hillshade","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Reference/World_Boundaries_and_Places","Reference/World_Reference_Overlay","Reference/World_Transportation"].map((e=>e.toLowerCase()));async function A(t,a,i){i??={},function(t,r){if(!r.portalItem)throw new e(`${t.name}:portal-item-not-set`,"Portal item to save to has not been set on the WebMap");P(r.portalItem),I(t,r.portalItem)}(t,a),await r((()=>!a.updatingFromView)),await a.load(),await T(a),await R(a),await W(t,a);const s=a.portalItem,p=o(s.itemUrl),n={origin:"web-map",messages:[],writtenProperties:[],url:p,portal:s.portal||u.getDefault(),portalItem:s,verifyItemRelativeUrls:p?{rootPath:p.path,writtenUrls:[]}:null,blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},l=a.write({},n);return await Promise.all(n.resources.pendingOperations),k(t,n,i),await M(a,s),await async function(e,t,r,o,a){await r.update({data:o}),q(e,t,r,o,a)}(t,a,s,l,n),await Promise.all([a.updateItemThumbnail(),_(a.resourceReferences,n,null)]),s}async function O(t,o,i,s){s??={};const p=function(e,t){let r=d.from(t);return r.id&&(r=r.clone(),r.id=null),r.type||(r.type=e.itemType),r.portal||(r.portal=u.getDefault()),P(r),I(e,r),r}(t,i);await r((()=>!o.updatingFromView)),await o.load(),await T(o),await R(o),await W(t,o);const n={origin:"web-map",messages:[],writtenProperties:[],url:null,portal:p.portal,portalItem:p,blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},l=o.write({},n);await Promise.all(n.resources.pendingOperations),k(t,n,s),await async function(e,t){f(t,G),f(t,N),f(t,j.METADATA),f(t,D),f(t,K),f(t,$),f(t,V),f(t,x),await M(e,t)}(o,p);const m=o.getThumbnailState(),c=await async function(t,r,o,i,s,p){const n=r.portalItem,l={item:n,authenticated:!(!n?.id||!n.portal.user)},m=o.portal;await m.signIn();const{copyAllowed:c,itemReloaded:u}=await async function(e,t){const{item:r,authenticated:o}=e;return r?.id&&r.typeKeywords?.includes("useOnly")?r.portal.portalHostname!==t.portalHostname?{copyAllowed:!1,itemReloaded:!1}:(o||await r.reload(),{copyAllowed:"admin"===r.itemControl||"update"===r.itemControl,itemReloaded:!0}):{copyAllowed:!0,itemReloaded:!1}}(l,m);if(l.authenticated||=u,!c)throw new e(`${t.name}:save-as-copy-not-allowed`,"Owner of this map does not allow others to save a copy");const d=await async function(e,t,r,o){const i=e.portal,{item:s}=t,{folder:p,copyAllResources:n}=o;let l=!1;if(n&&s?.id&&a(s.portal.url,i.url)&&parseInt(s.portal.currentVersion,10)>=2023){const{total:e}=await s.fetchResources();l=!!e}if(l){const t=await s.copy({copyResources:"all",folder:p});e.id=t.id,e.portal=t.portal;const o=e.toJSON();await e.load(),e.read(o),await e.update({data:r})}else await(i.user?.addItem({item:e,folder:p,data:r}));return l}(o,l,i,p);return r.portalItem=o,q(t,r,o,i,s),d}(t,o,p,l,n,s);return c&&(o.resourceReferences.portalItem=p),o.restoreThumbnailFromState(m),await Promise.all([o.updateItemThumbnail(),_(o.resourceReferences,n,null)]),p}function I(t,r){if(r.type!==t.itemType)throw new e(`${t.name}:portal-item-wrong-type`,`Portal item needs to have type "${t.itemType}"`)}async function W(t,o){if(!o.basemap?.baseLayers.length)throw new e(`${t.name}:save`,"Map does not have a valid basemap with a base layer.");let a=null;if(await r((()=>{const e=b(o.initialViewProperties,o.basemap);return a=e.spatialReference,!e.updating})),!p(a,o.initialViewProperties.spatialReference))throw new e(`${t.name}:save`,"The spatial reference of the basemap is not compatible with the one from the map.",{expected:o.initialViewProperties.spatialReference,actual:a})}function T(e){const t=[];return e.basemap&&t.push(e.basemap.load()),e.ground&&t.push(e.ground.load()),Promise.allSettled(t).then((()=>{}))}function k(t,r,o){let a=(r.messages??[]).filter((e=>"error"===e.type)).map((t=>new e(t.name,t.message,t.details)));if(r.blockedRelativeUrls&&(a=a.concat(r.blockedRelativeUrls.map((t=>new e("url:unsupported",`Relative url '${t}' is not supported in Web Map`))))),o.ignoreUnsupported&&(a=a.filter((e=>"layer:unsupported"!==e.name&&"symbol:unsupported"!==e.name&&"symbol-layer:unsupported"!==e.name&&"property:unsupported"!==e.name&&"url:unsupported"!==e.name))),a.length>0)throw new e(`${t.name}:save`,"Failed to save webmap due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:a})}async function M(e,t){t.extent=await async function(e,t){const r=t.clone().normalize();let o;if(r.length>1)for(const e of r)o?e.width>o.width&&(o=e):o=e;else o=r[0];return async function(e,t){const r=t.spatialReference;if(r.isWGS84)return t.clone();if(r.isWebMercator)return n(t);const{getGeometryServiceURL:o}=await import("./geometryServiceUtils.js"),a=await o(e),i=new h;return i.geometries=[t],i.outSpatialReference=s.WGS84,(await g(a,i))[0]}(e,o)}(e.portalItem,e.initialViewProperties.viewpoint.targetGeometry),await async function(e,t){y(t,E),await function(e){const t=H(e).map((e=>e.load())).toArray();return Promise.allSettled(t).then((()=>{}))}(e),function(e,t){w(t,G)||w(t,V)||w(t,x)||w(t,$)||!z(e)?f(t,B):y(t,B)}(e,t),function(e,t){z(e)?y(t,C):f(t,C)}(e,t),function(e,t){!w(t,D)&&function(e){return H(e).filter((e=>"group"!==e.type)).every((t=>t.loaded&&function(e,t){return m(t)&&t.capabilities.operations.supportsSync||function(e){return c(e)||"map-notes"===e.type||"route"===e.type}(t)&&!t.portalItem||("tile"===t.type||"vector-tile"===t.type)&&(t.capabilities.operations.supportsExportTiles||function(e){return"tile"===e.type&&l(e.url)&&S.some((t=>e.url?.toLowerCase().includes("/"+t+"/")))}(t)||v(t))&&t.spatialReference.equals(e.initialViewProperties.spatialReference)}(e,t)))}(e)?y(t,L):f(t,L)}(e,t),function(e,t){U(e.basemap)?y(t,F):f(t,F)}(e,t),function(e,t){e.utilityNetworks?.length?y(t,J):f(t,J)}(e,t),t.typeKeywords&&(t.typeKeywords=t.typeKeywords.filter(((e,t,r)=>r.indexOf(e)===t)))}(e,t)}const E=j.JSAPI,G="CollectorDisabled",B="Collector",C="Data Editing",D="OfflineDisabled",L="Offline",V="Workforce Project",x="Workforce Worker",$="Workforce Dispatcher",K="Offline Map Areas",N="FieldMapsDisabled",F=j.DEVELOPER_BASEMAP,J="UtilityNetwork";function H(e){return e.allLayers.concat(e.allTables)}function z(e){return H(e).some((e=>e.loaded&&m(e)&&e.capabilities.operations.supportsEditing&&e.editingEnabled&&("subtype-group"!==e.type||e.sublayers.some((e=>e.editingEnabled)))))}function q(e,r,a,s,p){t.prototype.read.call(r,{version:s.version,authoringApp:s.authoringApp,authoringAppVersion:s.authoringAppVersion},{origin:e.origin,ignoreDefaults:!0,url:a.itemUrl?o(a.itemUrl):void 0}),i(p),r.resourceInfo=s}export{A as save,O as saveAs};
