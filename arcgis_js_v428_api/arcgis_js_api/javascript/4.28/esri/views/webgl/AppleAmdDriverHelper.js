// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports","./BufferObject","./enums"],function(c,e,a){class d{constructor(b){this._rctx=b;this._indexBuffer=this._createIndexbuffer();this._program=this._createHelperProgram()}static getShaderSources(){return{vertex:"#version 300 es\n    precision highp float;\n\n    void main(void) {\n      gl_Position \x3d vec4(0.0, 0.0, float(gl_VertexID)-2.0, 1.0);\n    }",fragment:"#version 300 es\n    precision highp float;\n\n    out vec4 fragColor;\n\n    void main(void) {\n      fragColor \x3d vec4(0.0, 0.0, 0.0, 1.0);\n    }"}}_createHelperProgram(){const b=
d.getShaderSources();return this._rctx.programCache.acquire(b.vertex,b.fragment,new Map([]))}_createIndexbuffer(){return e.BufferObject.createIndex(this._rctx,a.Usage.STATIC_DRAW,new Uint32Array([0]))}run(){this._program.compiled&&this._indexBuffer&&(this._rctx.bindVAO(null),this._rctx.useProgram(this._program),this._rctx.bindBuffer(this._indexBuffer,a.BufferType.ELEMENT_ARRAY_BUFFER),this._rctx.drawElements(a.PrimitiveType.POINTS,1,a.DataType.UNSIGNED_INT,0))}dispose(){this._program.dispose();this._indexBuffer.dispose()}get test(){return{cachedWebGLObjects:this._indexBuffer?.glName?
1:0}}}c.AppleAmdDriverHelper=d;Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});