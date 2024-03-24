// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../handleUtils ../Logger ../promiseUtils ../Queue ./connectionRegistry ./RemoteClient".split(" "),function(m,n,h,p,q,l){class r{constructor(){this._inUseClients=[];this._clients=[];this._clientPromises=[];this._ongoingJobsQueue=new p}destroy(){this.close()}get closed(){return!this._clients?.length}open(a,b){return new Promise((c,d)=>{let e=!0;const g=f=>{h.throwIfAborted(b.signal);e&&(e=!1,f())};this._clients.length=a.length;this._clientPromises.length=a.length;this._inUseClients.length=a.length;
for(let f=0;f<a.length;++f){const k=a[f];h.isPromiseLike(k)?this._clientPromises[f]=k.then(t=>{this._clients[f]=new l(t,b,this._ongoingJobsQueue);g(c);return this._clients[f]},()=>{g(d);return null}):(this._clients[f]=new l(k,b,this._ongoingJobsQueue),this._clientPromises[f]=Promise.resolve(this._clients[f]),g(c))}})}broadcast(a,b,c){const d=Array(this._clientPromises.length);for(let e=0;e<this._clientPromises.length;++e)d[e]=this._clientPromises[e].then(g=>g?.invoke(a,b,c));return d}close(){let a;
for(;a=this._ongoingJobsQueue.pop();)a.resolver.reject(h.createAbortError(`Worker closing, aborting job calling '${a.methodName}'`));for(const b of this._clientPromises)b.then(c=>c?.close());this._clients.length=0;this._clientPromises.length=0;this._inUseClients.length=0;q.unregister(this)}invoke(a,b,c){let d;Array.isArray(c)?(n.getLogger("esri.core.workers.Connection").warn("invoke()","The transferList parameter is deprecated, use the options object instead"),d={transferList:c}):d=c;c=h.createResolver();
this._ongoingJobsQueue.push({methodName:a,data:b,invokeOptions:d,resolver:c});for(a=0;a<this._clientPromises.length;a++)(b=this._clients[a])?b.jobAdded():this._clientPromises[a].then(e=>e?.jobAdded());return c.promise}on(a,b){return Promise.all(this._clientPromises).then(()=>m.handlesGroup(this._clients.map(c=>c.on(a,b))))}openPorts(){return new Promise(a=>{const b=Array(this._clientPromises.length);let c=b.length;for(let d=0;d<this._clientPromises.length;++d)this._clientPromises[d].then(e=>{e&&(b[d]=
e.openPort());0===--c&&a(b)})})}get test(){return{numClients:this._clients.length}}}return r});