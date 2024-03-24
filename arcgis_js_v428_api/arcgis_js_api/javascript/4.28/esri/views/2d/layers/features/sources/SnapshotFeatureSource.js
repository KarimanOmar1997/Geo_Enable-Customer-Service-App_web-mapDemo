// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/tslib.es6 ../../../../../core/has ../../../../../core/Logger ../../../../../core/maybe ../../../../../core/promiseUtils ../../../../../core/RandomLCG ../../../../../core/accessorSupport/decorators/subclass ./BaseFeatureSource ../support/FeatureSetReaderPBFIndirect ../support/UpdateToken".split(" "),function(p,v,F,w,x,r,y,z,A,B,q){function C(a,b,d){var c=a.getXHydrated();a=a.getYHydrated();c=b.getColumnForX(c);c=Math.floor(b.normalizeCol(c));b=Math.floor(b.getRowForY(a));
return`${d}/${b}/${c}`}function t(a,b){if(null==a)return null;b=b.transform;const d=a.getQuantizationTransform();if(null==d){const [l,u]=b.scale,[D,E]=b.translate;return a.transform(-D/l,E/u,1/l,1/-u)}const [c,e]=d.scale,[g,h]=d.translate,[f,k]=b.scale,[n,m]=b.translate;return a.transform((g-n)/f,(-h+m)/k,c/f,e/k)}p.SnapshotFeatureSource=class extends A.BaseFeatureSource{constructor(a){super(a);this.mode="snapshot";this._loading=!0;this._controller=new AbortController;this._downloadPromise=null;this._didSendEnd=
!1;this._queries=[];this._hasAggregates=this._invalidated=!1;this._random=new y(1E3);this._store=a.store;this._markedIdsBufId=this._store.storage.createBitset()}destroy(){super.destroy();this._controller.abort()}get loading(){return this._loading}get _signal(){return this._controller.signal}update(a,b){super.update(a,b);this._featureCount??(this._featureCount=b.initialFeatureCount);null!=b.changedFeatureCount&&(this._featureCount=b.changedFeatureCount);this._hasAggregates=!!a.targets?.aggregate}async resend(a=
!1){await this._downloadPromise;this._invalidated||a?(a=this._featureCount,x.assertIsSome(a,"Expected featureCount to be defined"),this._invalidated=!1,this._subscriptions.forEach(b=>b.clear()),this._downloadPromise=this._download(a),await this._downloadPromise):(a=this._queries.map(({query:b,reader:d})=>this._sendPatchQuery(b,d)),await Promise.all(a),this._subscriptions.forEach(b=>{b.requests.done.forEach(d=>this._onMessage(d.message))}))}async refresh(a,b){b&&(this._featureCount=b.featureCount);
await this.resend(!0)}async _sendPatchQuery(a,b){const d=null!=a.outFields?a.outFields:[],c=this._queryInfo.outFields,e=c.filter(f=>!d.includes(f));if(e.length){var g=a.clone(),h=this._signal;g.returnGeometry=!1;g.returnCentroid=!1;g.outFields=e;a.outFields=c;a=await this.enqueueQuery({query:g,depth:0,signal:h});r.throwIfAborted({signal:h});b.joinAttributes(a)}}async _fetchDataTile(a){this._downloadPromise??(this._downloadPromise=this._download(this._featureCount));var b=this._store.search(a);const d=
this._subscriptions.get(a.key.id),c=b.length-1;for(let g=0;g<c;g++){var e=t(b[g],a);e={type:"append",id:a.id,addOrUpdate:e,end:!1,status:q.UpdateToken.empty()};d.add({query:null,message:e});this._hasAggregates||await r.after(1);this._onMessage(e)}b=t(0<=c?b[c]:null,a);a={type:"append",id:a.id,addOrUpdate:b,end:this._didSendEnd,status:q.UpdateToken.empty()};d.add({query:null,message:a});this._onMessage(a)}async _download(a){try{await this.whenInitialized();const b=this._store.storage.getBitset(this._markedIdsBufId),
d=new Set;b.clear();const c=Array.from({length:Math.ceil(a/this.pageSize)},(e,g)=>g).sort((e,g)=>this._random.getInt()-this._random.getInt()).map(e=>this._downloadPage(e,b,d));await Promise.all(c);this._store.sweepFeatures(b,this._store.storage);this._store.sweepFeatureSets(d)}catch(b){w.getLogger("esri.views.2d.layers.features.sources.SnapshotFeatureSource").error("mapview-snapshot-source","Encountered and error when downloading feature snapshot",b)}this._sendEnd();this._loading=!1}async _downloadPage(a,
b,d){var c=this.pageSize;c={start:a*c,num:c,cacheHint:!0};null!=this.maxRecordCountFactor&&(c.maxRecordCountFactor=this.maxRecordCountFactor);c=this.createQuery(c);const e=this._signal;a=await this.enqueueQuery({query:c,depth:a,signal:e});r.throwIfAborted({signal:e});this._queries.push({query:c,reader:a});this._store.insert(a);d.add(a.instance);for(d=a.getCursor();d.next();)b.set(d.getDisplayId());this._send(a)}_send(a){if(this._subscriptions.size){var b=null,d=new Map,c=new Set,e=new Map;this._subscriptions.forEach(h=>
{var f=h.tile;d.set(f.key.id,null);b=f.tileInfoView;c.add(f.level);const {row:k,col:n}=f.key;f=`${f.level}/${k}/${n}`;const m=e.get(f)??[];m.push(h);e.set(f,m)});for(const h of c){const f=b.getLODInfoAt(h),k=a.getCursor();for(;k.next();){var g=C(k,f,h);const n=k.getIndex();if(e.has(g))for(const m of e.get(g)){g=m.tile.id;let l=d.get(g);null==l&&(l=[],d.set(g,l));l.push(n)}}}d.forEach((h,f)=>{if(null!=h){const k=this._subscriptions.get(f);h=t(B.FeatureSetReaderIndirect.from(a,h),k.tile);f={type:"append",
id:f,addOrUpdate:h,end:!1,status:q.UpdateToken.empty()};k.add({query:null,message:f});this._onMessage(f)}})}}_sendEnd(){this._subscriptions.forEach(a=>{const b={type:"append",id:a.tile.id,addOrUpdate:null,end:!0,status:q.UpdateToken.empty()};a.add({query:null,message:b});this._onMessage(b)});this._didSendEnd=!0}};p.SnapshotFeatureSource=v.__decorate([z.subclass("esri.view.2d.layers.features.sources.SnapshotFeatureSource")],p.SnapshotFeatureSource);Object.defineProperty(p,Symbol.toStringTag,{value:"Module"})});