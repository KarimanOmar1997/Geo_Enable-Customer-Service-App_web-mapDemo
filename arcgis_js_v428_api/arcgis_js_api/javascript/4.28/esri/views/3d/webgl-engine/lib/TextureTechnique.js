// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("require exports ../../../../chunks/TextureOnly.glsl ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ./DefaultVertexAttributeLocations ./Program ../../../webgl/enums ../../../webgl/renderState".split(" "),function(f,e,g,h,k,l,m,b,a){class c extends k.ShaderTechnique{initializeProgram(d){return new m.Program(d.rctx,c.shader.get().build(),l.Default3D)}initializePipeline(){return this.configuration.hasAlpha?a.makePipelineState({blending:a.separateBlendingParams(b.BlendFactor.SRC_ALPHA,
b.BlendFactor.ONE,b.BlendFactor.ONE_MINUS_SRC_ALPHA,b.BlendFactor.ONE_MINUS_SRC_ALPHA),colorWrite:a.defaultColorWriteParams}):a.makePipelineState({colorWrite:a.defaultColorWriteParams})}}c.shader=new h.ReloadableShaderModule(g.TextureOnly,()=>new Promise((d,n)=>f(["../core/shaderLibrary/util/TextureOnly.glsl"],d,n)));e.TextureTechnique=c;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});