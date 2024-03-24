// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/tslib.es6 ../../../../core/Accessor ../../../../core/arrayUtils ../../../../core/mathUtils ../../../../core/maybe ../../../../core/reactiveUtils ../../../../core/accessorSupport/decorators/property ../../../../core/accessorSupport/ensureType ../../../../core/has ../../../../core/accessorSupport/decorators/subclass ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../core/shaderLibrary/shading/ReadShadowMap.glsl ./BindParameters ./depthRange ./glUtil3D ./ShadowCastRenderer ./ShadowMap ../../../../chunks/ShadowCastAccumulate.glsl ../shaders/ShadowCastAccumulateTechnique ../../../support/Scheduler ../../../webgl/enums ../../../webgl/FramebufferObject ../../../webgl/TextureDescriptor ../../../webgl/Util".split(" "),
function(b,d,u,v,w,k,l,e,K,L,x,n,y,z,A,p,B,m,C,D,E,F,h,G,H,I){b.ShadowAccumulator=class extends u{constructor(a,c,g,f,J,q){super({});this.fbos=a;this._stage=g;this._prepareForShadowMapPass=f;this._renderToShadowMap=J;this._requestRender=q;this._sampleCount=this._progress=0;this._passParameters=new z.ReadShadowMapPassParameters;this._cachedLightDirections=[];this._depthRange=p.zero;this._cameraForcedForScreenshot=this._previewing=!1;this._shadowAccumulatorKey="shadowAccumulator";this._rctx=a.rctx;
this._bindParameters=new A.BindParameters(new C.ShadowMap(a,g.viewingMode),null);this._bindParameters.shadowMap.enabled=!0;this._vao=B.createQuadVAO(this._rctx);this._accumulationRenderer=new m.ShadowCastRenderer(c,this._rctx,this,q);this.addHandles([this._stage.view.resourceController.scheduler.registerTask(F.TaskPriority.SHADOW_ACCUMULATOR,this),l.watch(()=>g.renderView,r=>{this.removeHandles("renderView");null!=r&&this.addHandles(r.events.on("force-camera-for-screenshot",()=>this._cameraForcedForScreenshot=
!0),"renderView")},l.syncAndInitial),l.watch(()=>this._previewing,()=>this._requestRenderIfEnabled(),l.sync)],this._shadowAccumulatorKey)}normalizeCtorArgs(){return{}}dispose(){this._disable();this.removeHandles(this._shadowAccumulatorKey);this._accumulationRenderer=k.disposeMaybe(this._accumulationRenderer);this._bindParameters.shadowMap.dispose();this._fbo=k.disposeMaybe(this._fbo);this._vao=k.disposeMaybe(this._vao);this._accumulationTechniqueCached=k.releaseMaybe(this._accumulationTechniqueCached);
this._sampleCount=this._cachedLightDirections.length=0}get computedSamples(){return this._progress}get shadowCastTexture(){return this._fbo?.colorTexture}get isAccumulating(){return this._isPreviewing||this._isRefining}get _accumulationTechnique(){null==this._accumulationTechniqueCached&&(this._accumulationTechniqueCached=new E.ShadowCastAccumulateTechnique({rctx:this._rctx,viewingMode:this._stage.viewingMode}));return this._accumulationTechniqueCached}get _isRefining(){return this._isActive&&!this._isDoneAccumulating&&
!this._previewing}get _isPreviewing(){return this._isActive&&this._previewing}get _isActive(){return null!=this._fbo&&0<this._sampleCount}get canAccumulate(){return null!==this._bindParameters.linearDepth?.colorTexture&&this._depthRange!==p.zero&&this._opacityFromElevation>m.shadowCastDisabledElevationThreshold}get _isDoneAccumulating(){return this._progress>=this._sampleCount}get _lightDirections(){return this._cachedLightDirections}set _lightDirections(a){const c=this._cachedLightDirections;if(!v.equals(c,
a,n.equals)){var g=Math.min(D.ShadowCastMaxSamples,a.length);this._sampleCount=c.length=g;for(let f=0;f<g;++f)c[f]=n.copy(c[f]??y.create(),a[f]);this._invalidate()}}get _opacityFromElevation(){return this._accumulationRenderer.opacityFromElevation}set _opacityFromElevation(a){this._accumulationRenderer.opacityFromElevation=a}get running(){return this._isRefining&&this.canAccumulate&&0<this._progress}runTask(a){for(this._prepareForShadowMapPass(this._bindParameters);!a.done&&!this._isDoneAccumulating;)this._accumulateShadow(),
a.madeProgress();this._requestRender()}renderAccumulation(a,c,g,f){this._depthRange=c;this._updateCamera(g);this._bindParameters.contentCamera=f;this._bindParameters.linearDepth=a;this._passParameters.origin=this._bindParameters.camera.center;this.notifyChange("canAccumulate");if(this.isAccumulating&&this.canAccumulate){(this._previewing||0===this._progress||this._cameraForcedForScreenshot)&&this._clear();a=this._cameraForcedForScreenshot?this._sampleCount:Math.min(6,this._sampleCount-this._progress);
for(c=0;c<a;++c)this._accumulateShadow();this._cameraForcedForScreenshot=!1;this._requestRender()}}render(a){this._accumulationRenderer.render(a)}setOptions(a){void 0!==a.enabled&&a.enabled!==(null!=this._fbo)&&(a.enabled?this._enable():this._disable());void 0!==a.previewing&&(this._previewing=a.previewing);void 0!==a.lightDirections&&(this._lightDirections=a.lightDirections);this._accumulationRenderer.setOptions(a)}readAccumulatedShadow(a,c){if(!this._isActive||!this._fbo||1>this._progress||0>a||
a>=this._fbo.width||0>c||c>=this._fbo.height)return 0;this._fbo.readPixels(a,c,1,1,h.PixelFormat.RED,h.PixelType.UNSIGNED_BYTE,t);return t[0]/this._progress}_enable(){this._progress=0;const a=new H.TextureDescriptor;a.pixelFormat=h.PixelFormat.RED;a.internalFormat=h.SizedPixelFormat.R8;a.wrapMode=h.TextureWrapMode.CLAMP_TO_EDGE;this._fbo=new G.FramebufferObject(this._rctx,a)}_disable(){this._fbo=k.disposeMaybe(this._fbo)}_invalidate(){this._progress=0;this._requestRenderIfEnabled()}_clear(){this._rctx.bindFramebuffer(this._fbo);
this._rctx.setClearColor(0,0,0,0);this._rctx.clearSafe(h.ClearBufferBit.COLOR_BUFFER_BIT);this._progress=0}_accumulateShadow(){this._renderToShadowMap(this._bindParameters,this._lightDirections[this._progress++],this._depthRange);const a=this._accumulationTechnique;this._rctx.bindFramebuffer(this._fbo);this._rctx.bindTechnique(a,this._passParameters,this._bindParameters);this._rctx.bindVAO(this._vao);this._rctx.drawArrays(a.primitiveType,0,I.vertexCount(this._vao,"geometry"))}_updateCamera(a){!a.equals(this._bindParameters.camera)&&
this._fbo&&(this._bindParameters.camera.copyFrom(a),this._fbo.resize(a.fullWidth,a.fullHeight),this._opacityFromElevation=1-w.smoothstep(m.shadowCastDisableElevationMin,m.shadowCastDisableElevationMax,a.relativeElevation))}_requestRenderIfEnabled(){this._fbo&&this._requestRender()}get test(){const a=this;return{lightDirections:this._lightDirections,get isDone(){return a._isDoneAccumulating},get isActive(){return a._isActive}}}};d.__decorate([e.property()],b.ShadowAccumulator.prototype,"_progress",
void 0);d.__decorate([e.property()],b.ShadowAccumulator.prototype,"_sampleCount",void 0);d.__decorate([e.property()],b.ShadowAccumulator.prototype,"_fbo",void 0);d.__decorate([e.property()],b.ShadowAccumulator.prototype,"_depthRange",void 0);d.__decorate([e.property()],b.ShadowAccumulator.prototype,"_previewing",void 0);d.__decorate([e.property()],b.ShadowAccumulator.prototype,"_accumulationRenderer",void 0);d.__decorate([e.property()],b.ShadowAccumulator.prototype,"_isRefining",null);d.__decorate([e.property()],
b.ShadowAccumulator.prototype,"_isActive",null);d.__decorate([e.property()],b.ShadowAccumulator.prototype,"canAccumulate",null);d.__decorate([e.property()],b.ShadowAccumulator.prototype,"_isDoneAccumulating",null);d.__decorate([e.property()],b.ShadowAccumulator.prototype,"_opacityFromElevation",null);d.__decorate([e.property()],b.ShadowAccumulator.prototype,"running",null);b.ShadowAccumulator=d.__decorate([x.subclass("esri.views.3d.webgl-engine.lib.ShadowAccumulator")],b.ShadowAccumulator);const t=
new Uint8Array(1);Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});