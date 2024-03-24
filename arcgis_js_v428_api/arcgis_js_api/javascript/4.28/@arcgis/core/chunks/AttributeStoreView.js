/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{d as e,m as t}from"./mat2d.js";import{c as i}from"./mat2df32.js";import{s,m as r}from"./mat3.js";import{c as n}from"./mat3f32.js";import{o as a,N as o,a3 as l,x as d,d as u,e as c,f as h,h as f,i as p,j as y,a4 as m,a5 as _,A as g,z as x,a6 as b}from"./definitions.js";import{T as E}from"./TiledDisplayObject.js";import{h as T,i as R}from"./typedArrayUtil.js";import v from"../core/Error.js";import{L as w}from"./Logger.js";import{t as S,d as F}from"./screenUtils.js";import{sqlAnd as k}from"../core/sql.js";import{d as C}from"./diffUtils.js";import{v as z}from"./labelingInfo.js";import{c as M,b as O}from"./enums4.js";import{C as D,g as I,D as N}from"./color.js";import{g as L}from"./WGLContainer.js";import{l as A,h as V,i as P,g as U}from"./visualVariablesUtils.js";import{createSymbolSchema as j}from"./createSymbolSchema.js";import{R as B}from"./CIMSymbolHelper.js";import"./shapingUtils.js";import"../geometry/Polygon.js";import"./mathUtils.js";import"../geometry/Extent.js";import"./unitUtils.js";import"./alignmentUtils.js";import"./vec2f32.js";import"./number.js";import"./cimAnalyzer.js";import"./ExpandedCIM.js";import{g as K}from"./capabilities2.js";import{a as Y,c as q}from"./clusterUtils.js";import{t as H}from"./util2.js";import{createResolver as $}from"../core/promiseUtils.js";import{T as G,c as J,b as W}from"./enums3.js";import{F as Z}from"./FramebufferObject.js";import{T as X,a as Q}from"./Texture.js";class ee{constructor(e){if(this.next=null,!Array.isArray(e))return void(this.data=e);this.data=e[0];let t=this;for(let i=1;i<e.length;i++)t.next=new ee([e[i]]),t=t.next}*values(){let e=this;for(;e;)yield e.data,e=e.next}forEach(e){let t=this;for(;t;)e(t.data),t=t.next}find(e){return e(this.data)?this:this.next?.find(e)}max(e,t=this){const i=e(this.data)>e(t.data)?this:t;return this.next?this.next.max(e,i):i}remove(e,t=null){return this===e?t?(t.next=this.next,t):this.next:this.next?.remove(e,this)??null}get last(){return this.next?this.next.last:this}}class te{constructor(e){this._head=null,null!=e&&(this._head=new ee(e))}get head(){return this._head}maxAvailableSpace(){if(null==this._head)return 0;const e=this._head.max((e=>e.end-e.start));return e.data.end-e.data.start}firstFit(e){if(null==this._head)return null;let t=null,i=this._head;for(;i;){const s=i.data.end-i.data.start;if(s===e)return t?t.next=i.next:this._head=i.next,i.data.start;if(s>e){const t=i.data.start;return i.data.start+=e,t}t=i,i=i.next}return null}free(e,t){const i=e+t;if(null==this._head){const t=new ee({start:e,end:i});return void(this._head=t)}if(i<=this._head.data.start){if(i===this._head.data.start)return void(this._head.data.start-=t);const s=new ee({start:e,end:i});return s.next=this._head,void(this._head=s)}let s=this._head,r=s.next;for(;r;){if(r.data.start>=i){if(s.data.end===e){if(s.data.end+=t,s.data.end===r.data.start){const e=r.data.end-r.data.start;return s.data.end+=e,void(s.next=r.next)}return}if(r.data.start===i)return void(r.data.start-=t);const n=new ee({start:e,end:i});return n.next=s.next,void(s.next=n)}s=r,r=r.next}if(e===s.data.end)return void(s.data.end+=t);const n=new ee({start:e,end:i});s.next=n}}class ie extends E{constructor(e,t,i,s){super(e,t,i,s,a,a)}destroy(){super.destroy(),this._transforms&&ie.TransformCache.release(this.key.hash)}setTransform(n){const a=this.resolution/n.resolution,o=this.transforms.tileMat3,[l,d]=n.toScreenNoRotation([0,0],[this.x,this.y]),u=this.width/this.rangeX*a,c=this.height/this.rangeY*a;s(o,u,0,0,0,c,0,l,d,1),r(this.transforms.dvs,n.displayViewMat3,o);const h=this.transforms.labelMat2d,f=window.devicePixelRatio,p=e(i(),u*f,0,0,c*f,l*f,d*f);t(h,n.viewMat2d,p)}_createTransforms(){return ie.TransformCache.acquire(this.key.hash)}}ie.TransformCache=new class{acquire(e){return{refCount:1,version:-1,labelMat2d:i(),tileMat3:n(),dvs:n()}}release(e){}};class se{constructor(e,t,i,s,r){this.target=e,this.geometryType=t,this.materialKey=i,this.indexFrom=s,this.indexCount=r}get indexEnd(){return this.indexFrom+this.indexCount}extend(e){this.indexCount+=e}}class re{constructor(e,t){this.geometryType=0,this._target=e,this.geometryType=t}static from(e,t,i,s){const r=new re(e,t);if(null!=s)for(const e of s)i.seekIndex(e),r.addRecord(i);else for(;i.next();)r.addRecord(i);return r}addRecord(e){const t=this._target,i=this.geometryType,s=e.materialKey;let r=e.indexFrom,n=e.indexCount;const a=e.vertexFrom,o=e.vertexCount;if(n||(r=a,n=o),null==this._head){const e=new se(t,i,s,r,n);return void(this._head=new ee(e))}let l=null,d=this._head;for(;d;){if(r<d.data.indexFrom)return this._insert(s,r,n,l,d);l=d,d=d.next}this._insert(s,r,n,l,null)}forEach(e){null!=this._head&&this._head.forEach(e)}*infos(){if(null!=this._head)for(const e of this._head.values())yield e}_insert(e,t,i,s,r){if(null==s&&null==r){const s=new se(this._target,this.geometryType,e,t,i);this._head=new ee(s)}return null==s&&null!=r?this._insertAtHead(e,t,i,r):null!=s&&null==r?this._insertAtEnd(e,t,i,s):null!=s&&null!=r?this._insertAtMiddle(e,t,i,s,r):void 0}_insertAtHead(e,t,i,s){const r=t+i;if(e===s.data.materialKey&&r===s.data.indexFrom)s.data.indexFrom=t,s.data.indexCount+=i;else{const r=new se(this._target,this.geometryType,e,t,i);this._head=new ee(r),this._head.next=s}}_insertAtEnd(e,t,i,s){if(s.data.materialKey===e&&s.data.indexEnd===t)s.data.indexCount+=i;else{const r=new se(this._target,this.geometryType,e,t,i),n=new ee(r);s.next=n}}_insertAtMiddle(e,t,i,s,r){const n=t+i;if(s.data.materialKey===e&&s.data.indexEnd===t)s.data.indexCount+=i,s.data.materialKey===r.data.materialKey&&s.data.indexEnd===r.data.indexFrom&&(s.data.indexCount+=r.data.indexCount,s.next=r.next);else if(e===r.data.materialKey&&n===r.data.indexFrom)r.data.indexFrom=t,r.data.indexCount+=i;else{const n=new se(this._target,this.geometryType,e,t,i),a=new ee(n);s.next=a,a.next=r}}}const ne=2147483647;class ae{constructor(e){this._head=e,this._cursor=e}static from(e,t=0,i=e.byteLength/oe.BYTES_PER_RECORD-t){const s=new oe(new Int32Array(e,t*oe.BYTES_PER_RECORD,i*oe.ELEMENTS_PER_RECORD));return new ae(s)}size(){let e=this._cursor,t=0;for(;e;)t+=e.size(),e=e._link;return t}get id(){return this._cursor.id}set id(e){this._cursor.id=e}get materialKey(){return this._cursor.materialKey}set materialKey(e){this._cursor.materialKey=e}get insertAfter(){return this._cursor.insertAfter}get indexFrom(){return this._cursor.indexFrom}set indexFrom(e){this._cursor.indexFrom=e}get indexCount(){return this._cursor.indexCount}set indexCount(e){this._cursor.indexCount=e}get vertexFrom(){return this._cursor.vertexFrom}set vertexFrom(e){this._cursor.vertexFrom=e}get vertexCount(){return this._cursor.vertexCount}set vertexCount(e){this._cursor.vertexCount=e}get sortKey(){return this._cursor.sortKey}set sortKey(e){this._cursor.sortKey=e}get index(){return this._cursor._indexStart+this._cursor._index}seekIndex(e){let t=e;for(this._cursor=this._head;this._cursor;){const e=this._cursor.size();if(t<e)return this._cursor._index=t,!0;t-=e,this._cursor=this._cursor._link}return!1}forEach(e){const t=this.getCursor();for(;t.next();)e(t)}link(e){if(!this._head)return void(this._head=e._head);let t=this._head;for(;t._link;)t=t._link;t._link=e._head,t._link._indexStart=t._indexStart+t.size()}getCursor(){return this.copy()}getDrawInfo(e,t){return new se(e,t,this.materialKey,this.indexFrom,this.indexCount)}lookup(e){for(this._cursor=this._head;this._cursor&&!this._cursor.lookup(e);){if(!this._cursor._link)return!1;this._cursor=this._cursor._link}return!!this._cursor}copy(){const e=new ae(this._head?.copy());if(!e._head)return e;let t=e._head,i=e._head._link;for(;i;)t._link=i.copy(),t=i,i=t._link;return e}next(){return!!this._cursor&&(!!this._cursor.next()||!!this._cursor._link&&(this._cursor=this._cursor._link,this.next()))}peekId(){return this._cursor.peekId()??this._cursor._link.peekId()}delete(e){let t=this._head,i=null;for(;t;){if(t.delete(e))return t.isEmpty()&&(null!=i&&(i._link=t._link),t===this._head&&(this._head=t._link),t===this._cursor&&(this._cursor=t._link)),!0;i=t,t=t._link}return!1}}ae.ELEMENTS_PER_RECORD=o,ae.BYTES_PER_RECORD=ae.ELEMENTS_PER_RECORD*Int32Array.BYTES_PER_ELEMENT;class oe{constructor(e){this._link=null,this._index=-1,this._indexStart=0,this._packedRecordsF32=null,this._deletedCount=0,this._offsets={instance:null},this._packedRecords=e}static from(e,t=0,i=e.byteLength/this.BYTES_PER_RECORD-t){return new oe(new Int32Array(e,t*this.BYTES_PER_RECORD,i*this.ELEMENTS_PER_RECORD))}delete(e){const t=this._index,i=this.lookup(e);if(i)for(this.id=ne,++this._deletedCount;this.next()&&this.id===e;)this.id=ne,++this._deletedCount;return this._index=t,i}isEmpty(){return this._deletedCount===this.size()}link(e){this._link?this._link.link(e):this._link=e}lookup(e){if(null==this._offsets.instance){this._offsets.instance=new Map;const e=this.copy();e._index=-1;let t=0;for(;e.next();)e.id!==t&&(this._offsets.instance.set(e.id,e._index),t=e.id)}if(!this._offsets.instance.has(e))return!1;const t=this._index;return this._index=this._offsets.instance.get(e),this.id!==ne||(this._index=t,!1)}get id(){return this._packedRecords[this._index*oe.ELEMENTS_PER_RECORD]}set id(e){this._packedRecords[this._index*oe.ELEMENTS_PER_RECORD]=e}get materialKey(){return this._packedRecords[this._index*oe.ELEMENTS_PER_RECORD+1]}set materialKey(e){this._packedRecords[this._index*oe.ELEMENTS_PER_RECORD+1]=e}get insertAfter(){return this._packedRecords[this._index*oe.ELEMENTS_PER_RECORD+2]}get indexFrom(){return this._packedRecords[this._index*oe.ELEMENTS_PER_RECORD+3]}set indexFrom(e){this._packedRecords[this._index*oe.ELEMENTS_PER_RECORD+3]=e}get indexCount(){return this._packedRecords[this._index*oe.ELEMENTS_PER_RECORD+4]}set indexCount(e){this._packedRecords[this._index*oe.ELEMENTS_PER_RECORD+4]=e}get vertexFrom(){return this._packedRecords[this._index*oe.ELEMENTS_PER_RECORD+5]}set vertexFrom(e){this._packedRecords[this._index*oe.ELEMENTS_PER_RECORD+5]=e}get vertexCount(){return this._packedRecords[this._index*oe.ELEMENTS_PER_RECORD+6]}set vertexCount(e){this._packedRecords[this._index*oe.ELEMENTS_PER_RECORD+6]=e}get sortKey(){return this._packedRecordsF32||(this._packedRecordsF32=new Float32Array(this._packedRecords.buffer)),this._packedRecordsF32[this._index*oe.ELEMENTS_PER_RECORD+7]}set sortKey(e){this._packedRecordsF32||(this._packedRecordsF32=new Float32Array(this._packedRecords.buffer)),this._packedRecordsF32[this._index*oe.ELEMENTS_PER_RECORD+7]=e}get index(){return this._index}size(){return this._packedRecords.length/oe.ELEMENTS_PER_RECORD}next(){for(;++this._index<this.size()&&this.id===ne;);return this._index<this.size()}peekId(){const e=(this._index+1)*oe.ELEMENTS_PER_RECORD;return e>=this._packedRecords.length?0:this._packedRecords[e]}getCursor(){return this.copy()}copy(){const e=new oe(this._packedRecords);return e._indexStart=this._indexStart,e._link=this._link,e._index=this._index,e._offsets=this._offsets,e._deletedCount=this._deletedCount,e}}function le(e){if(!e)return M.NONE;let t=0;for(const i of e)if("size"===i.type){const e=A(i);t|=e,"outline"===i.target&&(t|=e<<4)}else"color"===i.type?t|=M.COLOR:"opacity"===i.type?t|=M.OPACITY:"rotation"===i.type&&(t|=M.ROTATION);return t}function de(e,t){return Math.max(e,t)}oe.ELEMENTS_PER_RECORD=o,oe.BYTES_PER_RECORD=oe.ELEMENTS_PER_RECORD*Int32Array.BYTES_PER_ELEMENT,l.metrics,new B(0,0,24,24);const ue=8,ce=ue-2,he=w.getLogger("esri.views.2d.layers.features.support.rendererUtils"),fe=e=>{if(!("visualVariables"in e)||!e.visualVariables?.length)return e;const t=e.clone(),i=t.visualVariables.map((e=>pe(e)?ye(e):e));return t.visualVariables=i,t};function pe(e){return("size"===e.type||"color"===e.type||"opacity"===e.type)&&null!=e.stops}function ye(e){return e.stops=(t=e.type,(i=e.stops??[]).length<=ue?i:(he.warn(`Found ${i.length} Visual Variable stops, but MapView only supports ${ue}. Displayed stops will be simplified.`),i.length>2*ue?function(e,t){const[i,...s]=t,r=s.pop(),n=s[0].value,a=s[s.length-1].value,o=(a-n)/ce,l=[];for(let i=n;i<a;i+=o){let r=0;for(;i>=s[r].value;)r++;const n=s[r],a=t[r-1],o=i-a.value,d=n.value===a.value?1:o/(n.value-a.value);if("color"===e){const e=s[r],n=t[r-1],a=e.color.clone();a.r=me(n.color.r,a.r,d),a.g=me(n.color.g,a.g,d),a.b=me(n.color.b,a.b,d),a.a=me(n.color.a,a.a,d),l.push({value:i,color:a,label:e.label})}else if("size"===e){const e=s[r],n=t[r-1],a=S(e.size),o=me(S(n.size),a,d);l.push({value:i,size:o,label:e.label})}else{const e=s[r],n=me(t[r-1].opacity,e.opacity,d);l.push({value:i,opacity:n,label:e.label})}}return[i,...l,r]}(t,i):function(e){const[t,...i]=e,s=i.pop();for(;i.length>ce;){let e=0,t=0;for(let s=1;s<i.length;s++){const r=i[s-1],n=i[s],a=Math.abs(n.value-r.value);a>t&&(t=a,e=s)}i.splice(e,1)}return[t,...i,s]}(i))),e;var t,i}function me(e,t,i){return(1-i)*e+i*t}function _e(){if(T("heatmap-force-raster"))return"raster";const{supportsTextureFloat:e,supportsTextureHalfFloat:t,supportsColorBufferFloat:i,supportsColorBufferFloatBlend:s,supportsColorBufferHalfFloat:r}=K("2d");return e&&i&&s||t&&r?"symbol":T("heatmap-allow-raster-fallback")?"raster":"none"}function ge(e){if(!e)return!0;switch(e.type){case"dot-density":if(!K("2d").supportsTextureFloat)return he.error(new v("webgl-missing-extension","Missing WebGL extension OES_Texture_Float which is required for DotDensity")),!1;break;case"heatmap":{const e=_e();if("none"===e||"raster"===e&&!T("heatmap-force-raster")){const t=K("2d"),i=["supportsTextureFloat","supportsTextureHalfFloat","supportsColorBufferFloat","supportsColorBufferFloatBlend","supportsColorBufferHalfFloat"].filter((e=>!t[e])).join(", ");if("none"===e)return he.errorOnce(new v("webgl-missing-extension",`Missing WebGL${t.type} requirements for Heatmap: ${i}`)),!1;"raster"===e&&he.warnOnce(`Missing WebGL${t.type} requirements for accelerated Heatmap: ${i}. Feature support may be limited.`)}break}}return!0}const xe=w.getLogger("esri.views.2d.layers.features.schemaUtils"),be="ValidationError";function Ee(e,t){let i=0,s=0,r=O.DEFAULT;if(null!=e){if(s=function(e,t){if(!("visualVariables"in e))return 0;if(!e.hasVisualVariables("size"))return 0;const i=e.getVisualVariablesForType("size");if(!i[0])return 0;const s=i[0];if(t&&"cluster_count"===s.field&&"cluster"===t.type)return t.clusterMaxSize;if("outline"===s.target)return 0;if("stops"===s.transformationType)return s.stops.map((e=>e.size)).reduce(de,0);if("clamped-linear"===s.transformationType){let e=-1/0,t=-1/0;return e="number"==typeof s.maxSize?s.maxSize:s.maxSize.stops.map((e=>e.size)).reduce(de,0),t="number"==typeof s.minSize?s.minSize:s.minSize.stops.map((e=>e.size)).reduce(de,0),Math.max(e,t)}return"real-world-size"===s.transformationType?30:void 0}(e,t),"visualVariables"in e&&(i=le(e.visualVariables||[]),"dot-density"===e.type&&(r=O.DOT_DENSITY)),"heatmap"===e.type&&(r=O.HEATMAP),"dictionary"===e.type)return{maxVVSize:s,vvFlags:i,symbologyType:O.DEFAULT};if("pie-chart"===e.type)return{maxVVSize:s,vvFlags:i,symbologyType:O.PIE_CHART};if(r!==O.DOT_DENSITY&&r!==O.HEATMAP){const t=e.getSymbols();"backgroundFillSymbol"in e&&e.backgroundFillSymbol&&t.push(e.backgroundFillSymbol);let i=!0,s=!0;for(const e of t)if("cim"!==e.type&&"web-style"!==e.type||(s=!1),"simple-fill"===e.type||"picture-fill"===e.type){const t=e.outline,r=t&&"none"!==t.style&&"solid"!==t.style,n="simple-fill"===e.type&&"none"!==e.style&&"solid"!==e.style;r&&(i=!1),("picture-fill"===e.type||n||r)&&(s=!1)}i?r=s?O.OUTLINE_FILL_SIMPLE:O.OUTLINE_FILL:s&&(r=O.SIMPLE)}}return{vvFlags:i,maxVVSize:s,symbologyType:r}}let Te=null;function Re(e){if(T("esri-2d-update-debug")){const t=ve(e,!0);console.debug("Created new schema",t),console.debug("Schema diff",C(Te,t)),Te=t}return ve(e)}function ve(e,t=!1){try{const i=function(e,t=!1){const i=new Array;return i.push(function(e,t,i=!1){const s={indexCount:0,fields:{}},r="featureReduction"in e?e.featureReduction??void 0:void 0,n=r?"aggregate":"feature";if("sublayers"in e){const t={type:"subtype",subtypeField:e.subtypeField,renderers:{},symbologyType:O.DEFAULT},r={type:"subtype",mapping:{},target:"feature",subtypeField:e.subtypeField},a={type:"subtype",classes:{}},o={type:"symbol",target:"feature",aggregateFields:[],attributes:s,storage:r,mesh:{matcher:t,aggregateMatcher:null,labels:a,sortKey:null}},l=new Set;let d=0;for(const{renderer:o,subtypeCode:u,labelingInfo:c,labelsVisible:h}of e.sublayers){let e=0;"visualVariables"in o&&o.visualVariables&&(o.visualVariables.some((e=>"rotation"!==e.type))&&xe.warnOnce("SubtypeGroupLayer currently only supports rotation visualVariables. All other visualVariable types will be ignored."),e=le(o.visualVariables.filter((e=>"size"!==e.type))));const f={symbologyType:O.DEFAULT,vvFlags:e,maxVVSize:0},p=De(s,n,o,f,i),y=Oe(s,n,o),m=h&&c;if("dictionary"===p.type)throw new v(be,"Dictionary renderer is not supported in subtype layers");if("subtype"===p.type)throw new v(be,"Nested subtype renderers is not supported");if(null!=y&&"subtype"===y.type)throw new v(be,"Nested subtype storage is not supported");if(null!=y?.attributeMapping)throw new v(be,"Non-visual-variable attributes are not supported in subtype layers");if("heatmap"===p.type)throw new v(be,"Heatmaps are not supported in subtype layers");if("pie-chart"===p.type)throw new v(be,"Pie-charts are not supported in subtype layers");if(l.has(u))throw new v(be,"Subtype codes for sublayers must be unique");l.add(u),t.renderers[u]=p,r.mapping[u]=y,m&&(a.classes[u]=m.map((e=>Me(s,e,"feature",d++,f,i))))}return o}if("heatmap"===e.renderer?.type&&"raster"===_e()){const{radius:t,fieldOffset:i,field:r}=e.renderer;return{type:"heatmap",aggregateFields:[],attributes:s,target:n,storage:null,mesh:{radius:t,fieldOffset:i,field:Ce(s,{target:n,field:r,resultType:"numeric"}).field}}}const a=function(e,t,i){const s="featureReduction"in t&&t.featureReduction;if(!s)return{fields:[],labels:[],matcher:void 0,rendererOverride:void 0};const r=[];let n=null,a=H(t.geometryType),o=[],l=null;if(s)switch(s.type){case"selection":return xe.error(new v(be,"Mapview does not support `selection` reduction type",s)),{fields:[],labels:[],matcher:void 0,rendererOverride:void 0};case"cluster":case"binning":if(r.push(...s.fields??[]),"cluster"===s.type?a="esriGeometryPoint":"binning"===s.type&&(a="esriGeometryPolygon"),s.renderer&&!s.renderer.authoringInfo?.isAutoGenerated){if("cluster"===s.type){const{renderer:e}=Y(s.renderer,s,null);l=e}else l=s.renderer;const t=Ee(s.renderer,s);n=De(e,"aggregate",s.renderer,t,i),o=s&&s.labelsVisible&&s.labelingInfo||[]}else if("cluster"===s.type){if(l=q(r,t.renderer,s,null,!0),s.symbol){const e=Ee(l,s);n={type:"simple",symbol:j(s.symbol,e,i),symbologyType:e.symbologyType}}o=s&&s.labelsVisible&&s.labelingInfo||[]}}return function(e,t){const i={mesh:!0,storage:!0};for(const s of t){const{name:t,onStatisticField:r,onStatisticExpression:n,statisticType:a}=s;let o,l;const d="numeric",u="feature";n?l=ze(e,{type:"expression",target:u,valueExpression:n.expression,resultType:d}).fieldIndex:o=ze(e,{type:"field",target:u,field:r}).field,ze(e,{type:"statistic",target:"aggregate",name:t,context:i,inField:o,inFieldIndex:l,statisticType:a})}}(e,r),{labels:z(o,"binning"===s.type?"esriGeometryPolygon":a),matcher:n,fields:r,rendererOverride:l}}(s,e,i),o=H(e.geometryType),l=a.rendererOverride??e.renderer,d=Ee(l,r),u=De(s,n,l,d,i),c=Oe(s,n,l),h=function(e,t,i,s){if(null!=s)return null;if(null!=t&&t.length){t.length>1&&xe.warn(`Layer rendering currently only supports ordering by 1 orderByInfo, but found ${t.length}. All but the first will be discarded`);const i=t[0],s="ascending"===i.order?"asc":"desc";return i.field?{field:i.field,order:s}:i.valueExpression?{fieldIndex:ze(e,{type:"expression",target:"feature",valueExpression:i.valueExpression,resultType:"numeric"}).fieldIndex,order:s}:(xe.error(new v(be,"Expected to find a field or valueExpression for OrderByInfo",i)),null)}return null!=i&&"unique-value"===i.type&&i.orderByClassesEnabled?{byRenderer:!0,order:"asc"}:null}(s,e.orderBy,e.renderer,r),f=e.labelsVisible&&e.labelingInfo||[],p=z(f,o);let y=0;const m=[...p.map((e=>Me(s,e,"feature",y++,d,i))),...a.labels.map((e=>Me(s,e,"aggregate",y++,d,i)))];return{type:"symbol",target:n,attributes:s,aggregateFields:a.fields,storage:c,mesh:{matcher:u,labels:{type:"simple",classes:m},aggregateMatcher:a.matcher,sortKey:h}}}(e,0,t)),i}(e,t),s=function(e){return"heatmap"===e.renderer?.type&&"raster"===_e()?{type:"heatmap"}:{type:"symbol"}}(e),r={};i.map((t=>function(e,t,i){switch(i.target){case"feature":return void Fe(e,Se(t),i);case"aggregate":{if(!("featureReduction"in t))return;const s=t.featureReduction;switch(s?.type){case"selection":throw new v(be,"Mapview does not support `selection` reduction type",s);case"binning":return Fe(e,Se(t),i),void function(e,t,i,s){e.aggregate||(e.aggregate={name:"aggregate",type:"bin",filters:null,input:"feature",params:{fixedBinLevel:t.fixedBinLevel,fields:(t.fields??[]).map((e=>({...e.toJSON(),type:ke(e,i)})))},attributes:{}}),we(e.aggregate,s.attributes.fields)}(e,s,t.fields.map((e=>e.toJSON())),i);case"cluster":return Fe(e,Se(t),i),void function(e,t,i,s){const r=s.aggregateFields??[],n=new Set;for(const e of r)n.add(e.name);for(const e of t?.fields??[])n.has(e.name)||r.push(e);e.aggregate||(e.aggregate={name:"aggregate",type:"cluster",input:"feature",filters:null,attributes:{},params:{clusterRadius:F(t.clusterRadius/2),clusterPixelBuffer:64*Math.ceil(F(t.clusterMaxSize)/64),fields:r.map((e=>({...e.toJSON(),type:ke(e,i)})))}}),we(e.aggregate,s.attributes.fields)}(e,s,t.fields.map((e=>e.toJSON())),i)}}}}(r,e,t)));const n=null!=e.subtypeCode?`${e.subtypeField} = ${e.subtypeCode}`:null;return{source:{definitionExpression:k(e.definitionExpression,n),fields:e.fields.map((e=>e.toJSON())),gdbVersion:e.gdbVersion,historicMoment:e.historicMoment?.getTime(),outFields:e.availableFields,pixelBuffer:e.pixelBuffer,spatialReference:e.spatialReference.toJSON(),timeExtent:e.timeExtent?.toJSON(),customParameters:e.customParameters},attributes:{fields:{},indexCount:0},processors:i,tileRenderer:s,targets:r}}catch(e){if(e.fieldName===be)return xe.error(e),null;throw e}}function we(e,t){for(const i in t){const s=t[i];if(s.target!==e.name)continue;const r=e.attributes[i];if(r?.context){const e=r.context;e.mesh=e.mesh||s.context?.mesh,e.storage=e.storage||s.context?.storage}else e.attributes[i]=s}return e}function Se(e){return[e.filter?.toJSON()??null,e.featureEffect?.filter?.toJSON()??null]}function Fe(e,t,i){return e.feature||(e.feature={name:"feature",input:"source",filters:t,attributes:{}}),we(e.feature,i.attributes.fields),e}function ke(e,t){const{onStatisticExpression:i,onStatisticField:s,statisticType:r}=e;switch(r){case"min":case"max":case"avg":case"avg_angle":case"sum":case"count":return"esriFieldTypeDouble";case"mode":{if(i){const{returnType:t}=i;return t?"string"===t?"esriFieldTypeString":"esriFieldTypeDouble":(xe.error(new v(be,"Unable to infer type of aggregateField with onStatisticExpression. ReturnType is not defined",e)),"esriFieldTypeString")}const r=t.find((e=>e.name===s));return r?r.type:(xe.error(new v(be,"Unable to infer type of aggregateField with onStatisticExpression. ReturnType is not defined",e)),"esriFieldTypeString")}}}function Ce(e,t){return t.field?ze(e,{...t,type:"field",field:t.field}):t.valueExpression?ze(e,{...t,type:"expression",valueExpression:t.valueExpression}):{field:void 0,fieldIndex:void 0}}function ze(e,t){switch(t.type){case"expression":{const i=t.valueExpression;if(!e.fields[i]){const s=e.indexCount++;e.fields[i]={...t,name:i,fieldIndex:s}}return{fieldIndex:e.fields[i].fieldIndex}}case"label-expression":{const i=JSON.stringify(t.label);if(!e.fields[i]){const s=e.indexCount++;e.fields[i]={...t,name:i,fieldIndex:s}}return{fieldIndex:e.fields[i].fieldIndex}}case"field":{const i=t.field;return"aggregate"===t.target&&e.fields[i]||(e.fields[i]={...t,name:i}),{field:i}}case"statistic":return e.fields[t.name]={...t},{field:t.name}}}function Me(e,t,i,s,r,n=!1){const a=ze(e,{type:"label-expression",target:i,context:{mesh:!0},resultType:"string",label:{labelExpression:t.labelExpression,labelExpressionInfo:t.labelExpressionInfo?{expression:t.labelExpressionInfo.expression}:null,symbol:!!t.symbol,where:t.where}}),{fieldIndex:o}=a;return{...j(t,r,n),fieldIndex:o,target:i,index:s}}function Oe(e,t,i){let s;switch(i.type){case"simple":case"class-breaks":case"unique-value":case"dictionary":s={visualVariables:!0,attributes:null};break;default:s=L(i).getStorageSpec(i)}return function(e,t,i,s){if(null==i)return null;const{visualVariables:r,attributes:n}=i;let a=null;r&&"visualVariables"in s&&(a=function(e,t,i){if(!i?.length)return[];const s={storage:!0},r="numeric",n=function(e){return e.map((e=>pe(e)?ye(e.clone()):e))}(i).map((i=>{const n=D(i.type),{field:a,fieldIndex:o}=Ce(e,{target:t,valueExpression:i.valueExpression,field:i.field,context:s,resultType:r});switch(i.type){case"size":return"$view.scale"===i.valueExpression?null:{type:"size",binding:n,field:a,fieldIndex:o,normalizationField:Ce(e,{target:t,field:i.normalizationField,context:s,resultType:r}).field,valueRepresentation:i.valueRepresentation??null};case"color":return{type:"color",binding:n,field:a,fieldIndex:o,normalizationField:Ce(e,{target:t,field:i.normalizationField,context:s,resultType:r}).field};case"opacity":return{type:"opacity",binding:n,field:a,fieldIndex:o,normalizationField:Ce(e,{target:t,field:i.normalizationField,context:s,resultType:r}).field};case"rotation":return{type:"rotation",binding:n,field:a,fieldIndex:o}}})).filter(R);return n}(e,t,s.visualVariables));const o=null!=a?4:0;let l=null;return null!=n&&(l=n.map(((i,s)=>{const{field:r,fieldIndex:n}=Ce(e,{valueExpression:i.valueExpression,field:i.field,resultType:"numeric",target:t});return{binding:s+o,field:r,fieldIndex:n}}))),{type:"simple",target:t,attributeMapping:l,vvMapping:a}}(e,t,s,i)}function De(e,t,i,s,r=!1){const n=e??{indexCount:0,fields:{}};switch(i.type){case"simple":case"dot-density":return function(e,t,i,s=!1){const r=t.getSymbols(),n=r.length?r[0]:null;return{type:"simple",symbol:j(n,i,s),symbologyType:i.symbologyType}}(0,i,s,r);case"class-breaks":return function(e,t,i,s,r=!1){const n=i.backgroundFillSymbol,{field:a,fieldIndex:o}=Ce(e,{target:t,field:i.field,valueExpression:i.valueExpression,resultType:"numeric",context:{mesh:!0,use:"renderer.field"}}),l=i.normalizationType,d="log"===l?"esriNormalizeByLog":"percent-of-total"===l?"esriNormalizeByPercentOfTotal":"field"===l?"esriNormalizeByField":null,u=i.classBreakInfos.map((e=>({symbol:j(e.symbol,s,r),min:e.minValue,max:e.maxValue}))).sort(((e,t)=>e.min-t.min));return{type:"interval",attributes:e.fields,field:a,fieldIndex:o,backgroundFillSymbol:j(n,s,r),defaultSymbol:j(i.defaultSymbol,s,r),intervals:u,normalizationField:i.normalizationField,normalizationTotal:i.normalizationTotal,normalizationType:d,isMaxInclusive:i.isMaxInclusive,symbologyType:s.symbologyType}}(n,t,i,s,r);case"unique-value":return function(e,t,i,s,r=!1){const n=[],a=i.backgroundFillSymbol,o={target:t,context:{mesh:!0},resultType:"string"};if(i.field&&"string"!=typeof i.field)throw new v(be,"Expected renderer.field to be a string",i);const{field:l,fieldIndex:d}=Ce(e,{...o,field:i.field,valueExpression:i.valueExpression});for(const e of i.uniqueValueInfos??[])n.push({value:""+e.value,symbol:j(e.symbol,s,r)});return{type:"map",attributes:e.fields,field:l,fieldIndex:d,field2:Ce(e,{...o,field:i.field2}).field,field3:Ce(e,{...o,field:i.field3}).field,fieldDelimiter:i.fieldDelimiter??void 0,backgroundFillSymbol:j(a,s),defaultSymbol:j(i.defaultSymbol,s),map:n,symbologyType:s.symbologyType}}(n,t,i,s,r);case"dictionary":return function(e,t,i,s=!1){return{type:"dictionary",config:t.config,fieldMap:t.fieldMap,scaleExpression:t.scaleExpression,url:t.url,symbolOptions:i,symbologyType:i.symbologyType}}(0,i,s,r);case"heatmap":return function(e,t,i,s=!1){const r=t.getSymbols(),n=r.length?r[0]:null;return{type:"heatmap",symbol:j(n,i,s),symbologyType:i.symbologyType}}(0,i,s,r);case"pie-chart":return function(e,t,i,s=!1){const r=t.getSymbols(),n=r[0],a=r.length>1?r[1]:null;return{type:"pie-chart",markerSymbol:j(n,i,s),fillSymbol:j(a,i,s),symbologyType:i.symbologyType}}(0,i,s,r)}}const Ie=w.getLogger("esri.views.2d.engine.webgl.AttributeStoreView"),Ne=V(P,Ie);class Le{constructor(e,t,i){this._texture=null,this._lastTexture=null,this._fbos={},this.texelSize=4;const{buffer:s,pixelType:r,textureOnly:n}=e,a=I(r);this.shared=i,this.pixelType=r,this.size=t,this.textureOnly=n,n||(this.data=new a(s)),this._resetRange()}destroy(){this._texture?.dispose();for(const e in this._fbos){const t=this._fbos[e];t&&("0"===e&&t.detachColorTexture(),t.dispose()),this._fbos[e]=null}this._texture=null}get _textureDesc(){const e=new X;return e.wrapMode=G.CLAMP_TO_EDGE,e.samplingMode=J.NEAREST,e.dataType=this.pixelType,e.width=this.size,e.height=this.size,e}setData(e,t,i){const s=U(e),r=this.data,n=s*this.texelSize+t;!r||n>=r.length||(r[n]=i,this.dirtyStart=Math.min(this.dirtyStart,s),this.dirtyEnd=Math.max(this.dirtyEnd,s))}getData(e,t){if(null==this.data)return null;const i=U(e)*this.texelSize+t;return!this.data||i>=this.data.length?null:this.data[i]}getTexture(e){return this._texture??this._initTexture(e)}getFBO(e,t=0){if(!this._fbos[t]){const i=0===t?this.getTexture(e):this._textureDesc;this._fbos[t]=new Z(e,i)}return this._fbos[t]}get locked(){return!(this.pixelType!==W.UNSIGNED_BYTE||!this.shared||this.textureOnly||!T("esri-atomics")||!this.data)&&1===Atomics.load(this.data,0)}get hasDirty(){const e=this.dirtyStart;return this.dirtyEnd>=e}updateTexture(e,t){if(!this.locked){try{const t=this.dirtyStart,i=this.dirtyEnd;if(!this.hasDirty)return;this._resetRange();const s=this.data.buffer,r=this.getTexture(e),n=4,a=(t-t%this.size)/this.size,o=(i-i%this.size)/this.size,l=a,d=this.size,u=o,c=a*this.size*n,h=(d+u*this.size)*n-c,f=I(this.pixelType),p=new f(s,c*f.BYTES_PER_ELEMENT,h),y=this.size,m=u-l+1;if(m>this.size)return void Ie.error(new v("mapview-webgl","Out-of-bounds index when updating AttributeData"));r.updateData(0,0,l,y,m,p)}catch(e){}t()}}update(e){const{data:t,start:i,end:s}=e;if(null!=t&&null!=this.data){const s=this.data,r=i*this.texelSize;for(let i=0;i<t.length;i++){const n=1<<i%this.texelSize;e.layout&n&&(s[r+i]=t[i])}}this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,s)}resize(e,t){const i=this.size;if(this.size=t,this.textureOnly)return void(i!==this.size&&(this._lastTexture=this._texture,this._texture=null));const s=I(this.pixelType);this.destroy(),this.data=new s(e.buffer)}_resetRange(){this.dirtyStart=2147483647,this.dirtyEnd=0}_initTexture(e){const t=new Q(e,this._textureDesc,this.data??void 0);if(null!=this._lastTexture&&this._fbos[0]){const i=this._lastTexture.descriptor.width,s=this._lastTexture.descriptor.height,r=this._lastTexture.descriptor.dataType,n=this._lastTexture.descriptor.pixelFormat,a=this.getFBO(e),o=N(r),l=new(I(r))(new ArrayBuffer(i*s*o*this.texelSize)),d=e.getBoundFramebufferObject(),{x:u,y:c,width:h,height:f}=e.getViewport();e.bindFramebuffer(a),a.readPixels(0,0,i,s,n,r,l),t.updateData(0,0,0,2*i,s/2,l),e.setViewport(u,c,h,f),e.bindFramebuffer(d)}return this.destroy(),this._texture=t,this._texture}}class Ae{constructor(e){this._onUpdate=e,this._initialized=!1,this._forceNextUpload=!1,this._locked=!1}initialize(e){const{blocks:t,shared:i,size:s}=e;if(this.shared=i,this.size=s,Ne("Initializing AttributeStoreView",e),null==this._data)this._data=t.map((e=>null!=e?new Le(e,s,i):null));else for(let e=0;e<this._data.length;e++){const r=this._data[e],n=t[e];null!=n&&(null==r?this._data[e]=new Le(n,s,i):r.resize(n,s))}this._initialized=!0}destroy(){for(const e of this._data??[])e?.destroy();this._defaultTexture?.dispose()}isEmpty(){return null==this._data}isUpdating(){const e=null!=this._pendingAttributeUpdate,t=e;return T("esri-2d-log-updating")&&console.log(`Updating AttributeStoreView ${t}\n  -> hasPendingUpdate ${e}`),t}getBlock(e){return null==this._data?null:this._data[e]}setLabelMinZoom(e,t){this.setData(e,0,1,t)}getLabelMinZoom(e){return this.getData(e,0,1,255)}getFilterFlags(e){return this.getData(e,0,0,0)}getVVSize(e){return this.getData(e,d,0,0)}getData(e,t,i,s){if(!this._data)return 0;const r=this._data[t];if(null==r)return 0;const n=r.getData(e,i);return null!=n?n:s}setData(e,t,i,s){this._data[t].setData(e,i,s)}lockTextureUpload(){this._locked=!0}unlockTextureUpload(){this._locked=!1}forceTextureUpload(){this._forceNextUpload=!0}async requestUpdate(e){if(this._pendingAttributeUpdate)return void Ie.error(new v("mapview-webgl","Tried to update attribute data with a pending update"));const t=$();return Ne("AttributeStoreView Update Requested",e),this._pendingAttributeUpdate={data:e,resolver:t},this._onUpdate(),t.promise}update(){if(this._initialized&&null!=this._pendingAttributeUpdate){T("esri-2d-update-debug")&&console.debug("AttributeStoreView::update");const{data:e,resolver:t}=this._pendingAttributeUpdate,i=this._data;for(let t=0;t<e.blocks.length;t++){const s=e.blocks[t],r=i[t];null!=r&&null!=s&&(Ne(`Updating block ${t}`,s),r.update(s))}this._pendingAttributeUpdate=null,t(),this._onUpdate()}}bindTextures(e,t=!0){const i=this._getDefaultTexture(e);if(!this._initialized)return e.bindTexture(i,u),void(t&&(e.bindTexture(i,c),e.bindTexture(i,h),e.bindTexture(i,f),e.bindTexture(i,p),e.bindTexture(i,y),e.bindTexture(i,m)));const s=this._data;if(!this._locked||this._forceNextUpload){for(const t of s)t?.updateTexture(e,(()=>this._onUpdate()));this._forceNextUpload=!1}e.bindTexture(s[_]?.getTexture(e)??i,u),t&&(e.bindTexture(s[g]?.getTexture(e)??i,m),e.bindTexture(s[x]?.getTexture(e)??i,c),e.bindTexture(s[d]?.getTexture(e)??i,h),e.bindTexture(s[b]?.getTexture(e)??i,f),e.bindTexture(s[p]?.getTexture(e)??i,p),e.bindTexture(s[y]?.getTexture(e)??i,y))}_getDefaultTexture(e){if(null==this._defaultTexture){const t=new X;t.wrapMode=G.CLAMP_TO_EDGE,t.samplingMode=J.NEAREST,t.width=1,t.height=1,this._defaultTexture=new Q(e,t,new Uint8Array(4))}return this._defaultTexture}}export{Ae as A,ae as D,te as F,ie as W,De as a,re as b,Ee as c,Re as d,ge as i,fe as s};
