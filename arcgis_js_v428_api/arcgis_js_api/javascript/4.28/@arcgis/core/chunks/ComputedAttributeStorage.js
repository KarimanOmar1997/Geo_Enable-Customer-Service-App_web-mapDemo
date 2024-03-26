/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{n as t,m as e,o as s,i,x as r,u as n}from"./featureConversionUtils.js";import{h as a}from"./OptimizedFeature.js";import o from"../layers/support/FieldsIndex.js";import{F as u,S as h}from"./FeatureSetReader.js";import d from"../core/Error.js";import{h as l}from"./typedArrayUtil.js";import{L as c}from"./Logger.js";import{c as p}from"./mathUtils.js";import{createResolver as _,isAbortError as g}from"../core/promiseUtils.js";import{d as f}from"./diffUtils.js";import{U as m}from"./UpdatingHandles.js";import{u as y,w as x,x as b,y as I,z as S,A as T}from"./definitions.js";import{a as z,b as A,g as F,e as U,f as C,h as E,i as w,j as D,c as M,d as k}from"./visualVariablesUtils.js";import{g as N}from"./color.js";import{b as B}from"./enums3.js";class j extends u{static fromFeatures(e,s){const{objectIdField:i,geometryType:r}=s,n=t([],e,r,!1,!1,i);for(let t=0;t<n.length;t++)n[t].displayId=e[t].displayId;return j.fromOptimizedFeatures(n,s)}static fromFeatureSet(t,s){const i=e(t,s.objectIdField);return j.fromOptimizedFeatureSet(i,s)}static fromOptimizedFeatureSet(t,e){const{features:s}=t,i=j.fromOptimizedFeatures(s,e);return i._exceededTransferLimit=t.exceededTransferLimit,i._transform=t.transform,i._fieldsIndex=new o(e.fields),i}static fromOptimizedFeatures(t,e,s){const i=u.createInstance(),r=new j(i,t,e);return r._fieldsIndex=new o(e.fields),r._transform=s,r}constructor(t,e,s){super(t,s),this._exceededTransferLimit=!1,this._featureIndex=-1,this._fieldsIndex=null,this._geometryType=s?.geometryType,this._features=e}get fields(){return this._fieldsIndex}get _current(){return this._features[this._featureIndex]}get geometryType(){return this._geometryType}get hasFeatures(){return!!this._features.length}get hasNext(){return this._featureIndex+1<this._features.length}get exceededTransferLimit(){return this._exceededTransferLimit}get hasZ(){return!1}get hasM(){return!1}removeIds(t){const e=new Set(t);this._features=this._features.filter((t=>!(null!=t.objectId&&e.has(t.objectId))))}append(t){for(const e of t)this._features.push(e)}getSize(){return this._features.length}getCursor(){return this.copy()}getQuantizationTransform(){return this._transform}getAttributeHash(){let t="";for(const e in this._current.attributes)t+=this._current.attributes[e];return t}getIndex(){return this._featureIndex}setIndex(t){this._featureIndex=t}getObjectId(){return this._current?.objectId}getDisplayId(){return this._current.displayId}setDisplayId(t){this._current.displayId=t}getGroupId(){return this._current.groupId}setGroupId(t){this._current.groupId=t}copy(){const t=new j(this.instance,this._features,this.fullSchema());return this.copyInto(t),t}next(){for(;++this._featureIndex<this._features.length&&!this._getExists(););return this._featureIndex<this._features.length}readLegacyFeature(){return s(this._current,this.geometryType,this.hasZ,this.hasM)}readOptimizedFeature(){return this._current}readLegacyPointGeometry(){return this.readGeometry()?{x:this.getX(),y:this.getY()}:null}readLegacyGeometry(){const t=this.readUnquantizedGeometry();return i(t,this.geometryType,this.hasZ,this.hasM)}readLegacyCentroid(){const t=this.readCentroid();return null==t?null:{x:t.coords[0]*this._sx+this._tx,y:t.coords[1]*this._sy+this._ty}}readGeometryArea(){return a(this._current)?r(this._current.geometry,2):0}readUnquantizedGeometry(){const t=this.readGeometry();if("esriGeometryPoint"===this.geometryType||!t)return t;const e=t.clone();return function({coords:t,lengths:e}){let s=0;for(const i of e){for(let e=1;e<i;e++)t[2*(s+e)]+=t[2*(s+e)-2],t[2*(s+e)+1]+=t[2*(s+e)-1];s+=i}}(e),e}readHydratedGeometry(){const t=this._current.geometry;if(null==t)return null;const e=t.clone();return null!=this._transform&&n(e,e,this.hasZ,this.hasM,this._transform),e}getXHydrated(){if(!a(this._current))return 0;const t=this._current.geometry.coords[0],e=this.getQuantizationTransform();return null==e?t:t*e.scale[0]+e.translate[0]}getYHydrated(){if(!a(this._current))return 0;const t=this._current.geometry.coords[1],e=this.getQuantizationTransform();return null==e?t:e.translate[1]-t*e.scale[1]}getX(){return a(this._current)?this._current.geometry.coords[0]*this._sx+this._tx:0}getY(){return a(this._current)?this._current.geometry.coords[1]*this._sy+this._ty:0}readGeometry(){if(!a(this._current)){if(null!=this._current.centroid){const[t,e]=this._current.centroid.coords;return this.createQuantizedExtrudedGeometry(t,e)}return null}const t=this._current.geometry.clone();if(t.isPoint)return t.coords[0]=t.coords[0]*this._sx+this._tx,t.coords[1]=t.coords[1]*this._sy+this._ty,t;let e=0;for(const s of t.lengths)t.coords[2*e]=t.coords[2*e]*this._sx+this._tx,t.coords[2*e+1]=t.coords[2*e+1]*this._sy+this._ty,e+=s;return t}readCentroid(){return a(this._current)?this._computeCentroid():this._current.centroid}_readAttribute(t,e){const s=this._fieldsIndex.get(t);if(!s)return;let i=this._current.attributes[s.name];return null==i?i:("esriFieldTypeTimestampOffset"===this.fields.get(t)?.type&&(i=this.parseTimestampOffset(i)),e&&this.fields.isDateField(t)?new Date(i):i)}copyInto(t){super.copyInto(t),t._featureIndex=this._featureIndex,t._transform=this._transform,t._fieldsIndex=this._fieldsIndex}_readAttributes(){return this._current.attributes}}const G=c.getLogger("esri.views.layers.2d.features.support.AttributeStore"),H=E(w,G),O={sharedArrayBuffer:l("esri-shared-array-buffer"),atomics:l("esri-atomics")};function v(t,e){return s=>e(t(s))}class R{constructor(t,e,s,i){this.size=0,this.texelSize=4,this.dirtyStart=0,this.dirtyEnd=0;const{pixelType:r,layout:n,textureOnly:a}=i;this.textureOnly=a||!1,this.pixelType=r,this._ctype=e,this.layout=n,this._resetRange(),this._shared=t,this.size=s,a||(this.data=this._initData(r,s,t,e))}get buffer(){return this.data?.buffer}unsetComponentAllTexels(t,e){const s=this.data;for(let i=0;i<this.size*this.size;i++)s[i*this.texelSize+t]&=~e;this.dirtyStart=0,this.dirtyEnd=this.size*this.size-1}setComponentAllTexels(t,e){const s=this.data;for(let i=0;i<this.size*this.size;i++)s[i*this.texelSize+t]|=255&e;this.dirtyStart=0,this.dirtyEnd=this.size*this.size-1}setComponent(t,e,s){const i=this.data;for(const r of s)i[r*this.texelSize+t]|=e,this.dirtyStart=Math.min(this.dirtyStart,r),this.dirtyEnd=Math.max(this.dirtyEnd,r)}setComponentTexel(t,e,s){this.data[s*this.texelSize+t]|=e,this.dirtyStart=Math.min(this.dirtyStart,s),this.dirtyEnd=Math.max(this.dirtyEnd,s)}unsetComponentTexel(t,e,s){this.data[s*this.texelSize+t]&=~e,this.dirtyStart=Math.min(this.dirtyStart,s),this.dirtyEnd=Math.max(this.dirtyEnd,s)}getData(t,e){const s=F(t);return this.data[s*this.texelSize+e]}setData(t,e,s){const i=F(t),r=1<<e;0!=(this.layout&r)?null!=this.data&&(this.data[i*this.texelSize+e]=s,this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,i)):G.error("mapview-attributes-store","Tried to set a value for a texel's readonly component")}lock(){this.pixelType===B.UNSIGNED_BYTE&&this._shared&&O.atomics&&"local"!==this._ctype&&Atomics.store(this.data,0,1)}unlock(){this.pixelType===B.UNSIGNED_BYTE&&this._shared&&O.atomics&&"local"!==this._ctype&&Atomics.store(this.data,0,0)}expand(t){if(this.size=t,!this.textureOnly){const e=this._initData(this.pixelType,t,this._shared,this._ctype),s=this.data;e.set(s),this.data=e}}toMessage(){const t=this.dirtyStart,e=this.dirtyEnd,s=this.texelSize;if(t>e)return null;this._resetRange();const i=!(this._shared||"local"===this._ctype),r=this.pixelType,n=this.layout,a=this.data;return{start:t,end:e,data:i&&a.slice(t*s,(e+1)*s)||null,pixelType:r,layout:n}}_initData(t,e,s,i){const r=s&&"local"!==i?SharedArrayBuffer:ArrayBuffer,n=N(t),a=new n(new r(e*e*4*n.BYTES_PER_ELEMENT));for(let t=0;t<a.length;t+=4)a[t+1]=255;return a}_resetRange(){this.dirtyStart=2147483647,this.dirtyEnd=0}}class P{constructor(t,e){this._client=t,this.config=e,this.updatingHandles=new m,this._blocks=new Array,this._filters=new Array(y),this._attributeComputeInfo=null,this._targetType=0,this._abortController=new AbortController,this._hasScaleExpr=!1,this._size=32,this._nextUpdate=null,this._currUpdate=null,this._idsToHighlight=new Set;const s=e.supportsTextureFloat?B.FLOAT:B.UNSIGNED_BYTE;H(`Creating AttributeStore ${O.sharedArrayBuffer?"with":"without"} shared memory`),this._blockDescriptors=[{pixelType:B.UNSIGNED_BYTE,layout:1},{pixelType:B.UNSIGNED_BYTE,layout:15,textureOnly:!0},{pixelType:B.UNSIGNED_BYTE,layout:15,textureOnly:!0},{pixelType:s,layout:15},{pixelType:s,layout:15},{pixelType:s,layout:15},{pixelType:s,layout:15}],this._blocks=this._blockDescriptors.map((()=>null))}destroy(){this._abortController.abort(),this.updatingHandles.destroy()}get hasScaleExpr(){return this._hasScaleExpr}get _signal(){return this._abortController.signal}get hasHighlight(){return this._idsToHighlight.size>0}isUpdating(){const t=this.updatingHandles.updating||!!this._nextUpdate;return l("esri-2d-log-updating")&&console.log(`Updating AttributeStore: ${t}\n  -> updatingHandles ${this.updatingHandles.updating} (currUpdate: ${!!this._currUpdate})\n  -> nextUpdate: ${!!this._nextUpdate}\n`),t}update(t,e){this.config=e;const s=e.schema.processors[0].storage,i=f(this._schema,s);if((t.targets.feature||t.targets.aggregate)&&(t.storage.data=!0),i&&(l("esri-2d-update-debug")&&console.debug("Applying Update - AttributeStore:",i),t.storage.data=!0,this._schema=s,this._attributeComputeInfo=null,null!=s)){switch(s.target){case"feature":this._targetType=A;break;case"aggregate":this._targetType=z}if("subtype"===s.type){this._attributeComputeInfo={isSubtype:!0,subtypeField:s.subtypeField,map:new Map};for(const t in s.mapping){const e=s.mapping[t];if(null!=e?.vvMapping)for(const s of e.vvMapping)this._bindAttribute(s,parseInt(t,10))}}else{if(this._attributeComputeInfo={isSubtype:!1,map:new Map},null!=s.vvMapping)for(const t of s.vvMapping)this._bindAttribute(t);if(null!=s.attributeMapping)for(const t of s.attributeMapping)this._bindAttribute(t)}}}onTileData(t,e){if(null==e.addOrUpdate)return;const s=e.addOrUpdate.getCursor();for(;s.next();){const t=s.getDisplayId();this.setAttributeData(t,s)}}async setHighlight(t,e){const s=this._getBlock(0),i=e.map((t=>F(t)));s.lock(),s.unsetComponentAllTexels(0,1),s.setComponent(0,1,i),s.unlock(),this._idsToHighlight.clear();for(const e of t)this._idsToHighlight.add(e);await this.sendUpdates()}async updateFilters(t,e,s){l("esri-2d-update-debug")&&console.debug("AttributeStore::updateFilters");const{service:i,spatialReference:r}=s,{filters:n}=e,a=n.map(((t,e)=>this._updateFilter(t,e,i,r))),o=(await Promise.all(a)).some((t=>t));l("esri-2d-update-debug")&&console.debug("AttributeStore::updateFilters - finsihed"),o&&(t.storage.filters=!0,l("esri-2d-update-debug")&&console.debug("Applying Update - AttributeStore:","Filters changed"))}setData(t,e,s,i){const r=F(t);this._ensureSizeForTexel(r),this._getBlock(e).setData(t,s,i)}getData(t,e,s){return this._getBlock(e).getData(t,s)}getHighlightFlag(t){return this._idsToHighlight.has(t)?x:0}unsetAttributeData(t){const e=F(t);this._getBlock(0).setData(e,0,0)}setAttributeData(t,e){const s=F(t);if(this._ensureSizeForTexel(s),this._getBlock(0).setData(s,0,this.getFilterFlags(e)),this._targetType!==U(t))return;const i=this._attributeComputeInfo,r=this.config.supportsTextureFloat?1:2;let n=null;i&&(n=i.isSubtype?i.map.get(e.readAttribute(i.subtypeField)):i.map,n?.size&&n.forEach(((t,i)=>{const n=i*r%4,a=Math.floor(i*r/4),o=this._getBlock(a+b),u=t(e);if(this.config.supportsTextureFloat)o.setData(s,n,u);else if(u===I)o.setData(s,n,255),o.setData(s,n+1,255);else{const t=p(Math.round(u),-32767,32766)+32768,e=255&t,i=(65280&t)>>8;o.setData(s,n,e),o.setData(s,n+1,i)}})))}sendUpdates(){if(l("esri-2d-update-debug")&&console.debug("AttributeStore::sendUpdate"),this._nextUpdate)return this._nextUpdate.promise;if(this._currUpdate)return this._nextUpdate=_(),this.updatingHandles.addPromise(this._nextUpdate.promise),this._nextUpdate.promise;const t={blocks:this._blocks.map((t=>null!=t?t.toMessage():null))};return this._currUpdate=this._createResources().then((()=>{const e=()=>{if(this._currUpdate=null,this._nextUpdate){const t=this._nextUpdate;this._nextUpdate=null,this.sendUpdates().then((()=>t.resolve()))}else l("esri-2d-update-debug")&&console.debug("AttributeStore::sendUpdate::No additional updates queued")};l("esri-2d-update-debug")&&console.debug("AttributeStore::sendUpdate::client.update");const s=this.updatingHandles.addPromise(this._client.update(t,this._signal).then(e).catch(e));return this._client.render(this._signal),s})).catch((t=>{if(g(t))return this._createResourcesPromise=null,this._createResources();G.error(new d("mapview-attribute-store","Encountered an error during client update",t))})),this._currUpdate}_ensureSizeForTexel(t){for(;t>=this._size*this._size;)if(this._expand())return}_bindAttribute(t,e){let s;if(null!=t.fieldIndex)t.normalizationField&&G.warn("mapview-arcade","Ignoring normalizationField specified with an arcade expression which is not supported."),s=e=>e.getComputedNumericAtIndex(t.fieldIndex);else{if(!t.field)return;s=function(){const{normalizationField:e}=t;return e?s=>{const i=s.readAttribute(e);return i?s.readAttribute(t.field)/i:null}:e=>e.readAttribute(t.field)}()}const{valueRepresentation:i}=t;i&&(s=v(s,(t=>D(t,i))));const r=t=>null===t||isNaN(t)||t===1/0||t===-1/0?I:t,n=this._attributeComputeInfo;if(n.isSubtype){const i=n.map.get(e)??new Map;i.set(t.binding,v(s,r)),n.map.set(e,i)}else n.map.set(t.binding,v(s,r))}_createResources(){if(null!=this._createResourcesPromise)return this._createResourcesPromise;this._getBlock(S),this._getBlock(T),H("Initializing AttributeStore");const t={shared:O.sharedArrayBuffer&&!("local"===this._client.type),size:this._size,blocks:this._blocks.map((t=>null!=t?{textureOnly:t.textureOnly,buffer:t.buffer,pixelType:t.pixelType}:null))},e=this._client.initialize(t,this._signal).catch((t=>{g(t)?this._createResourcesPromise=null:G.error(new d("mapview-attribute-store","Encountered an error during client initialization",t))}));return this._createResourcesPromise=e,e.then((()=>null==this._createResourcesPromise?this._createResources():void 0)),e}_getBlock(t){const e=this._blocks[t];if(null!=e)return e;H(`Initializing AttributeBlock at index ${t}`);const s=O.sharedArrayBuffer,i=this._client.type,r=new R(s,i,this._size,this._blockDescriptors[t]);return this._blocks[t]=r,this._createResourcesPromise=null,r}_expand(){if(this._size<this.config.maxTextureSize){const t=this._size<<=1;H("Expanding block size to",t,this._blocks);for(const e of this._blocks)e?.expand(t);return this._createResourcesPromise=null,this._size=t,0}return G.error(new d("mapview-limitations","Maximum number of onscreen features exceeded.")),-1}async _updateFilter(t,e,s,i){const r=this._filters[e],n=null!=r&&r.hash;if(!r&&!t)return!1;if(n===JSON.stringify(t))return!1;if(null==t){if(!r)return!1;const t=1<<e+1,s=this._getBlock(0);return this._filters[e]=null,s.setComponentAllTexels(0,t),this.sendUpdates(),!0}const a=await this._getFilter(e,s);return await a.update(t,i),!0}async _getFilter(t,e){const s=this._filters[t];if(null!=s)return s;const{default:i}=await import("./FeatureFilter.js"),r=new i({geometryType:e.geometryType,hasM:!1,hasZ:!1,timeInfo:e.timeInfo,fieldsIndex:o.fromJSON(e.fieldsIndex)});return this._filters[t]=r,r}isVisible(t){return!!(2&this._getBlock(0).getData(t,0))}getFilterFlags(t){let e=0;const s=C(t.getDisplayId());for(let i=0;i<this._filters.length;i++){const r=!!(s&1<<i),n=this._filters[i];e|=(!r||null==n||n.check(t)?1:0)<<i}let i=0;if(this._idsToHighlight.size){const e=t.getObjectId();i=this.getHighlightFlag(e)}return e<<1|i}}class L{constructor(){this._freeIds=[],this._idCounter=1}createId(t=!1){return M(this._getFreeId(),t)}releaseId(t){this._freeIds.push(t)}_getFreeId(){return this._freeIds.length?this._freeIds.pop():this._idCounter++}}function Y(t,e,s){if(!(t.length>e))for(;t.length<=e;)t.push(s)}class ${constructor(){this._numerics=[],this._strings=[],this._idGenerator=new L,this._allocatedSize=256,this._bitsets=[],this._instanceIds=[],this._bounds=[]}createBitset(){const t=this._bitsets.length;return this._bitsets.push(h.create(this._allocatedSize,k)),t+1}getBitset(t){return this._bitsets[t-1]}_expand(){this._allocatedSize<<=1;for(const t of this._bitsets)t.resize(this._allocatedSize)}_ensureNumeric(t,e){this._numerics[t]||(this._numerics[t]=[]),Y(this._numerics[t],e,0)}_ensureInstanceId(t){Y(this._instanceIds,t,0)}_ensureString(t,e){this._strings[t]||(this._strings[t]=[]),Y(this._strings[t],e,null)}createDisplayId(t=!1){const e=this._idGenerator.createId();return e>this._allocatedSize&&this._expand(),M(e,t)}releaseDisplayId(t){for(const e of this._bitsets)e.unset(t);return this._idGenerator.releaseId(t&k)}getComputedNumeric(t,e){return this.getComputedNumericAtIndex(t&k,0)}setComputedNumeric(t,e,s){return this.setComputedNumericAtIndex(t&k,s,0)}getComputedString(t,e){return this.getComputedStringAtIndex(t&k,0)}setComputedString(t,e,s){return this.setComputedStringAtIndex(t&k,0,s)}getComputedNumericAtIndex(t,e){const s=t&k;return this._ensureNumeric(e,s),this._numerics[e][s]}setComputedNumericAtIndex(t,e,s){const i=t&k;this._ensureNumeric(e,i),this._numerics[e][i]=s}getInstanceId(t){const e=t&k;return this._ensureInstanceId(e),this._instanceIds[e]}setInstanceId(t,e){const s=t&k;this._ensureInstanceId(s),this._instanceIds[s]=e}getComputedStringAtIndex(t,e){const s=t&k;return this._ensureString(e,s),this._strings[e][s]}setComputedStringAtIndex(t,e,s){const i=t&k;this._ensureString(e,i),this._strings[e][i]=s}getXMin(t){return this._bounds[4*(t&k)]}getYMin(t){return this._bounds[4*(t&k)+1]}getXMax(t){return this._bounds[4*(t&k)+2]}getYMax(t){return this._bounds[4*(t&k)+3]}setBounds(t,e){const s=e.readHydratedGeometry();if(!s?.coords.length)return!1;let i=1/0,r=1/0,n=-1/0,a=-1/0;s.forEachVertex(((t,e)=>{i=Math.min(i,t),r=Math.min(r,e),n=Math.max(n,t),a=Math.max(a,e)}));const o=t&k;return Y(this._bounds,4*o+4,0),this._bounds[4*o]=i,this._bounds[4*o+1]=r,this._bounds[4*o+2]=n,this._bounds[4*o+3]=a,!0}}export{P as A,$ as C,j as F};