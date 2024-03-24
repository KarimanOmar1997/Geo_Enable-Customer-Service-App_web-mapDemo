// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports","./SimpleIndexManager","./TextureBackedBuffer"],function(b,c,d){class e{constructor(a,f=1){this.textureBuffer=new d.TextureBackedBuffer(a,f);this._indexManager=new c.SimpleIndexManager(65536)}dispose(){this.textureBuffer.dispose();this.textureBuffer=void 0}get availableCount(){return this._indexManager.availableCount}get activeCount(){return this._indexManager.activeCount}acquireIndex(){const a=this._indexManager.acquire();this.textureBuffer.resizeToFit(a);return a}releaseIndex(a){this._indexManager.release(a)}}
b.ManagedTextureBackedBuffer=e;b.maxIndexCount=65536;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});