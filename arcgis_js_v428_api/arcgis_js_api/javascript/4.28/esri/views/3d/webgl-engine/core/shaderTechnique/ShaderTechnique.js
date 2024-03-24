// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../core/maybe","../../../../webgl/enums"],function(c,d,f){class g{constructor(a,b,e){this.release=e;this.initializeConfiguration(a,b);this._configuration=b.snapshot();this._program=this.initializeProgram(a);this._pipeline=this.initializePipeline(a.rctx.capabilities)}destroy(){this._program=d.disposeMaybe(this._program);this._pipeline=this._configuration=null}reload(a){d.disposeMaybe(this._program);this._program=this.initializeProgram(a);this._pipeline=this.initializePipeline(a.rctx.capabilities)}get program(){return this._program}get compiled(){return this.program.compiled}get key(){return this._configuration.key}get configuration(){return this._configuration}ensureAttributeLocations(a){this.program.assertCompatibleVertexAttributeLocations(a)}get primitiveType(){return f.PrimitiveType.TRIANGLES}getPipeline(a,
b,e){return this._pipeline}initializeConfiguration(a,b){}}c.ShaderTechnique=g;Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});