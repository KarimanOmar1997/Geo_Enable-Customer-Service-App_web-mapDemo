/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class t{constructor(t,i,e,o=1,s=0){if(this._ctor=t,this._acquireFunction=i,this._releaseFunction=e,this.allocationSize=o,this._pool=new Array(s),this._initialSize=s,this._ctor)for(let t=0;t<s;t++)this._pool[t]=new this._ctor;this.allocationSize=Math.max(o,1)}destroy(){this.prune(0)}acquire(...i){let e;if(t.test.disabled)e=new this._ctor;else{if(0===this._pool.length){const t=this.allocationSize;for(let i=0;i<t;i++)this._pool[i]=new this._ctor}e=this._pool.pop()}return this._acquireFunction?this._acquireFunction(e,...i):function(t){return t?.acquire&&"function"==typeof t.acquire}(e)&&e.acquire(...i),e}release(i){i&&!t.test.disabled&&(this._releaseFunction?this._releaseFunction(i):function(t){return t?.release&&"function"==typeof t.release}(i)&&i.release(),this._pool.push(i))}prune(t=this._initialSize){if(!(t>=this._pool.length)){for(let i=t;i<this._pool.length;++i){const t=this._pool[i];this._dispose(t)}this._pool.length=t}}_dispose(t){t.dispose&&"function"==typeof t.dispose&&t.dispose()}}t.test={disabled:!1};export{t as O};
