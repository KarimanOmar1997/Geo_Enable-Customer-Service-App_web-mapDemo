/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{a as e}from"./devEnvironmentUtils.js";import{m as t,n as r}from"./mat3.js";import{a as s}from"./mat3f64.js";import{i as o}from"./mat4.js";import{a}from"./mat4f64.js";import{e as i,s as n,c as l,p as u,b as c,l as h,q as p,i as d,r as m,t as f,D as g,g as x}from"./vec3.js";import{Z as T,c as v,g as y,f as b}from"./vec3f64.js";import{m as w,e as S}from"./aaBoundingBox.js";import{s as O,a as M,b as C,D as A,n as R}from"./DefaultBufferWriter.js";import{c as P,b as _,t as E,B as I,p as j,s as N}from"./BufferView.js";import{a as D,t as B,s as L}from"./vec32.js";import{l as V,D as F,a as U,b as k,t as z,n as q,s as G,d as H,c as W}from"./DefaultMaterial_COLOR_GAMMA.js";import{i as $}from"./resourceUtils2.js";import{f as Q,c as Y}from"./mat3f32.js";import{Z,O as J}from"./vec2f32.js";import K from"../request.js";import{r as X}from"./asyncUtils.js";import{h as ee,M as te}from"./typedArrayUtil.js";import re from"../core/Error.js";import{L as se}from"./Logger.js";import{N as oe}from"./NestedMap.js";import{throwIfAbortError as ae}from"../core/promiseUtils.js";import{V as ie}from"./Version.js";import{a as ne}from"./Indices.js";import{r as le}from"./requestImageUtils.js";import{A as ue}from"./Attribute.js";import{C as ce,b as he,A as pe}from"./basicInterfaces.js";import{G as de}from"./Geometry.js";import{D as me,T as fe}from"./Texture2.js";import{V as ge}from"./VertexAttribute.js";import{V as xe}from"./ViewingMode.js";import{n as Te}from"./InterleavedLayout.js";import{S as ve}from"./ShaderOutput.js";import{a as ye,V as be,b as we}from"./VertexNormal.glsl.js";import{N as Se}from"./Normals.glsl.js";import{d as Oe,P as Me}from"./EvaluateAmbientLighting.glsl.js";import{G as Ce}from"./GLTextureMaterial.js";import{R as Ae,D as Re,a as Pe,v as _e,i as Ee}from"./Material.js";import{c as Ie,o as je,a as Ne,g as De,d as Be}from"./OrderIndependentTransparency.js";import{R as Le}from"./RenderSlot.js";import{g as Ve}from"./verticalOffsetUtils.js";import{f as Fe}from"./vec4f64.js";import{d as Ue}from"./AlphaCutoff.js";import{R as ke,S as ze,P as qe}from"./Program2.js";import{T as Ge}from"./TransparencyPassType.js";import{D as He}from"./DefaultMaterial.glsl.js";import{g as We,T as $e}from"./enums3.js";import{m as Qe,c as Ye,d as Ze,a as Je}from"./renderState2.js";import{_ as Ke}from"./tslib.es6.js";import{p as Xe}from"./ShaderTechniqueConfiguration.js";import{R as et}from"./RealisticTree.glsl.js";function tt({normalTexture:e,metallicRoughnessTexture:t,metallicFactor:r,roughnessFactor:s,emissiveTexture:o,emissiveFactor:a,occlusionTexture:n}){return null==e&&null==t&&null==o&&(null==a||i(a,T))&&null==n&&(null==s||1===s)&&(null==r||1===r||0===r)}const rt=[1,1,.5],st=[0,.6,.2],ot=[0,1,.2];class at extends be{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=y(rt),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=ce.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveFactor=b(0,0,0),this.instancedDoublePrecision=!1,this.normalType=we.Attribute,this.receiveShadows=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=b(.2,.2,.2),this.diffuse=b(.8,.8,.8),this.externalColor=Fe(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=v(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.transparent=!1,this.writeDepth=!0,this.customDepthTest=he.Less,this.textureAlphaMode=pe.Blend,this.textureAlphaCutoff=Ue,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=Ae.Occlude,this.isDecoration=!1}}class it extends ye{constructor(){super(...arguments),this.origin=v(),this.slicePlaneLocalOrigin=this.origin}}class nt extends ze{initializeConfiguration(e,t){t.spherical=e.viewingMode===xe.Global,t.doublePrecisionRequiresObfuscation=e.rctx.driverTest.doublePrecisionRequiresObfuscation.result,t.textureCoordinateType=t.hasColorTexture||t.hasMetallicRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture||t.hasNormalTexture?Oe.Default:Oe.None,t.objectAndLayerIdColorInstanced=t.instanced}initializeProgram(e){return this._initializeProgram(e,nt.shader)}_initializeProgram(e,t){return new qe(e.rctx,t.get().build(this.configuration),Re)}_convertDepthTestFunction(e){return e===he.Lequal?We.LEQUAL:We.LESS}_makePipeline(e,t){const r=this.configuration,s=e===Ge.NONE,o=e===Ge.FrontFace;return Qe({blending:r.output!==ve.Color&&r.output!==ve.Alpha||!r.transparent?null:s?Ie:je(e),culling:lt(r)?Ye(r.cullFace):null,depthTest:{func:Ne(e,this._convertDepthTestFunction(r.customDepthTest))},depthWrite:(s||o)&&r.writeDepth?Ze:null,colorWrite:Je,stencilWrite:r.hasOccludees?O:null,stencilTest:r.hasOccludees?t?M:C:null,polygonOffset:s||o?null:De(r.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._makePipeline(this.configuration.transparencyPassType,!0),this._makePipeline(this.configuration.transparencyPassType,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}}function lt(e){return e.cullFace!==ce.None||!e.hasSlicePlane&&!e.transparent&&!e.doubleSidedMode}nt.shader=new ke(He,(()=>import("./DefaultMaterial.glsl.js").then((e=>e.D))));class ut extends me{constructor(){super(...arguments),this.output=ve.Color,this.alphaDiscardMode=pe.Opaque,this.doubleSidedMode=Se.None,this.pbrMode=Me.Disabled,this.cullFace=ce.None,this.transparencyPassType=Ge.NONE,this.normalType=we.Attribute,this.textureCoordinateType=Oe.None,this.customDepthTest=he.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.multipassEnabled=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.objectAndLayerIdColorInstanced=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1}}Ke([Xe({count:ve.COUNT})],ut.prototype,"output",void 0),Ke([Xe({count:pe.COUNT})],ut.prototype,"alphaDiscardMode",void 0),Ke([Xe({count:Se.COUNT})],ut.prototype,"doubleSidedMode",void 0),Ke([Xe({count:Me.COUNT})],ut.prototype,"pbrMode",void 0),Ke([Xe({count:ce.COUNT})],ut.prototype,"cullFace",void 0),Ke([Xe({count:Ge.COUNT})],ut.prototype,"transparencyPassType",void 0),Ke([Xe({count:we.COUNT})],ut.prototype,"normalType",void 0),Ke([Xe({count:Oe.COUNT})],ut.prototype,"textureCoordinateType",void 0),Ke([Xe({count:he.COUNT})],ut.prototype,"customDepthTest",void 0),Ke([Xe()],ut.prototype,"spherical",void 0),Ke([Xe()],ut.prototype,"hasVertexColors",void 0),Ke([Xe()],ut.prototype,"hasSymbolColors",void 0),Ke([Xe()],ut.prototype,"hasVerticalOffset",void 0),Ke([Xe()],ut.prototype,"hasSlicePlane",void 0),Ke([Xe()],ut.prototype,"hasSliceHighlight",void 0),Ke([Xe()],ut.prototype,"hasColorTexture",void 0),Ke([Xe()],ut.prototype,"hasMetallicRoughnessTexture",void 0),Ke([Xe()],ut.prototype,"hasEmissionTexture",void 0),Ke([Xe()],ut.prototype,"hasOcclusionTexture",void 0),Ke([Xe()],ut.prototype,"hasNormalTexture",void 0),Ke([Xe()],ut.prototype,"hasScreenSizePerspective",void 0),Ke([Xe()],ut.prototype,"hasVertexTangents",void 0),Ke([Xe()],ut.prototype,"hasOccludees",void 0),Ke([Xe()],ut.prototype,"multipassEnabled",void 0),Ke([Xe()],ut.prototype,"hasModelTransformation",void 0),Ke([Xe()],ut.prototype,"offsetBackfaces",void 0),Ke([Xe()],ut.prototype,"vvSize",void 0),Ke([Xe()],ut.prototype,"vvColor",void 0),Ke([Xe()],ut.prototype,"receiveShadows",void 0),Ke([Xe()],ut.prototype,"receiveAmbientOcclusion",void 0),Ke([Xe()],ut.prototype,"textureAlphaPremultiplied",void 0),Ke([Xe()],ut.prototype,"instanced",void 0),Ke([Xe()],ut.prototype,"instancedColor",void 0),Ke([Xe()],ut.prototype,"objectAndLayerIdColorInstanced",void 0),Ke([Xe()],ut.prototype,"instancedDoublePrecision",void 0),Ke([Xe()],ut.prototype,"doublePrecisionRequiresObfuscation",void 0),Ke([Xe()],ut.prototype,"writeDepth",void 0),Ke([Xe()],ut.prototype,"transparent",void 0),Ke([Xe()],ut.prototype,"enableOffset",void 0),Ke([Xe()],ut.prototype,"cullAboveGround",void 0),Ke([Xe()],ut.prototype,"snowCover",void 0),Ke([Xe()],ut.prototype,"hasColorTextureTransform",void 0),Ke([Xe()],ut.prototype,"hasEmissionTextureTransform",void 0),Ke([Xe()],ut.prototype,"hasNormalTextureTransform",void 0),Ke([Xe()],ut.prototype,"hasOcclusionTextureTransform",void 0),Ke([Xe()],ut.prototype,"hasMetallicRoughnessTextureTransform",void 0),Ke([Xe({constValue:!1})],ut.prototype,"occlusionPass",void 0),Ke([Xe({constValue:!0})],ut.prototype,"hasVvInstancing",void 0),Ke([Xe({constValue:!1})],ut.prototype,"useCustomDTRExponentForWater",void 0),Ke([Xe({constValue:!1})],ut.prototype,"supportsTextureAtlas",void 0),Ke([Xe({constValue:!0})],ut.prototype,"useFillLights",void 0);class ct extends nt{initializeConfiguration(e,t){super.initializeConfiguration(e,t),t.hasMetallicRoughnessTexture=!1,t.hasEmissionTexture=!1,t.hasOcclusionTexture=!1,t.hasNormalTexture=!1,t.hasModelTransformation=!1,t.normalType=we.Attribute,t.doubleSidedMode=Se.WindingOrder,t.hasVertexTangents=!1}initializeProgram(e){return this._initializeProgram(e,ct.shader)}}ct.shader=new ke(et,(()=>import("./RealisticTree.glsl.js").then((e=>e.R))));class ht extends Pe{constructor(e){super(e,dt),this.supportsEdges=!0,this._configuration=new ut,this._vertexBufferLayout=function(e){const t=Te().vec3f(ge.POSITION);return e.normalType===we.Compressed?t.vec2i16(ge.NORMALCOMPRESSED,{glNormalized:!0}):t.vec3f(ge.NORMAL),e.hasVertexTangents&&t.vec4f(ge.TANGENT),(e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId)&&t.vec2f(ge.UV0),e.hasVertexColors&&t.vec4u8(ge.COLOR),e.hasSymbolColors&&t.vec4u8(ge.SYMBOLCOLOR),ee("enable-feature:objectAndLayerId-rendering")&&t.vec4u8(ge.OBJECTANDLAYERIDCOLOR),t}(this.parameters)}isVisibleForOutput(e){return e!==ve.Shadow&&e!==ve.ShadowExcludeHighlight&&e!==ve.ShadowHighlight||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||0===e.layerOpacity)return!1;const{hasInstancedColor:t,hasVertexColors:r,hasSymbolColors:s,vvColor:o}=e,a="replace"===e.colorMixMode,i=e.opacity>0,n=e.externalColor&&e.externalColor[3]>0,l=t||o||s;return r&&l?a||i:r?a?n:i:l?a||i:a?n:i}getConfiguration(e,t){return this._configuration.output=e,this._configuration.hasNormalTexture=!!this.parameters.normalTextureId,this._configuration.hasColorTexture=!!this.parameters.textureId,this._configuration.hasVertexTangents=this.parameters.hasVertexTangents,this._configuration.instanced=this.parameters.isInstanced,this._configuration.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.hasVerticalOffset=null!=this.parameters.verticalOffset,this._configuration.hasScreenSizePerspective=null!=this.parameters.screenSizePerspective,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasSliceHighlight=this.parameters.hasSliceHighlight,this._configuration.alphaDiscardMode=this.parameters.textureAlphaMode,this._configuration.normalType=this.parameters.normalType,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,null!=this.parameters.customDepthTest&&(this._configuration.customDepthTest=this.parameters.customDepthTest),this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.cullFace=this.parameters.hasSlicePlane?ce.None:this.parameters.cullFace,this._configuration.multipassEnabled=t.multipassEnabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration.hasModelTransformation=null!=this.parameters.modelTransformation,e!==ve.Color&&e!==ve.Alpha||(this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.hasSymbolColors=this.parameters.hasSymbolColors,this.parameters.treeRendering?this._configuration.doubleSidedMode=Se.WindingOrder:this._configuration.doubleSidedMode=this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?Se.View:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?Se.WindingOrder:Se.None,this._configuration.instancedColor=this.parameters.hasInstancedColor,this._configuration.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this._configuration.receiveAmbientOcclusion=null!=t.ssao,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this._configuration.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?Me.Schematic:Me.Normal:Me.Disabled,this._configuration.hasMetallicRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this._configuration.hasEmissionTexture=!!this.parameters.emissiveTextureId,this._configuration.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this._configuration.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<Be,this._configuration.snowCover=this.hasSnowCover(t),this._configuration.hasColorTextureTransform=!!this.parameters.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!this.parameters.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!this.parameters.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!this.parameters.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!this.parameters.metallicRoughnessTextureTransformMatrix),this._configuration}hasSnowCover(e){return null!=e.weather&&e.weatherVisible&&"snowy"===e.weather.type&&"enabled"===e.weather.snowCover}intersect(e,t,r,s,o,a){if(null!=this.parameters.verticalOffset){const e=r.camera;n(vt,t[12],t[13],t[14]);let a=null;switch(r.viewingMode){case xe.Global:a=u(xt,vt);break;case xe.Local:a=l(xt,gt)}let i=0;const f=c(yt,vt,e.eye),g=h(f),x=p(f,f,1/g);let T=null;this.parameters.screenSizePerspective&&(T=d(a,x)),i+=_e(e,g,this.parameters.verticalOffset,T??0,this.parameters.screenSizePerspective),p(a,a,i),m(Tt,a,r.transform.inverseRotation),s=c(mt,s,Tt),o=c(ft,o,Tt)}Ee(e,r,s,o,Ve(r.verticalOffset),a)}produces(e,t){return!(t!==ve.Color&&t!==ve.Alpha&&t!==ve.Depth&&t!==ve.Normal&&t!==ve.Shadow&&t!==ve.ShadowHighlight&&t!==ve.ShadowExcludeHighlight&&t!==ve.Highlight&&t!==ve.ObjectAndLayerIdColor||e!==(this.parameters.transparent?this.parameters.writeDepth?Le.TRANSPARENT_MATERIAL:Le.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:Le.OPAQUE_MATERIAL)&&e!==Le.DRAPED_MATERIAL)}createGLMaterial(e){return new pt(e)}createBufferWriter(){return new A(this._vertexBufferLayout)}}class pt extends Ce{constructor(e){super({...e,...e.material.parameters})}_updateShadowState(e){e.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMap.enabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){this._output!==ve.Color&&this._output!==ve.Alpha||(this._updateShadowState(e),this._updateOccludeeState(e));const t=this._material.parameters;this.updateTexture(t.textureId);const r=e.camera.viewInverseTransposeMatrix;return n(t.origin,r[3],r[7],r[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(t.treeRendering?ct:nt,e)}}const dt=new class extends at{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}},mt=v(),ft=v(),gt=b(0,0,1),xt=v(),Tt=v(),vt=v(),yt=v();function bt(e){if(null==e)return null;const r=null!=e.offset?e.offset:Z,s=null!=e.rotation?e.rotation:0,o=null!=e.scale?e.scale:J,a=Q(1,0,0,0,1,0,r[0],r[1],1),i=Q(Math.cos(s),-Math.sin(s),0,Math.sin(s),Math.cos(s),0,0,0,1),n=Q(o[0],0,0,0,o[1],0,0,0,1),l=Y();return t(l,i,n),t(l,a,l),l}class wt{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}}class St{constructor(e,t,r){this.name=e,this.lodThreshold=t,this.pivotOffset=r,this.stageResources=new wt,this.numberOfVertices=0}}const Ot=se.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function Mt(e,t){const r=await async function(e,t){const r=t?.streamDataRequester;if(r)return async function(e,t,r){const s=await X(t.request(e,"json",r));return!0===s.ok?s.value:(ae(s.error),void Ct(s.error.details.url))}(e,r,t);const s=await X(K(e,t));return!0===s.ok?s.value.data:(ae(s.error),void Ct(s.error))}(e,t),s=await async function(e,t){const r=new Array;for(const s in e){const o=e[s],a=o.images[0].data;if(!a){Ot.warn("Externally referenced texture data is not yet supported");continue}const i=o.encoding+";base64,"+a,n="/textureDefinitions/"+s,l="rgba"===o.channels?o.alphaChannelUsage||"transparency":"none",u={noUnpackFlip:!0,wrap:{s:$e.REPEAT,t:$e.REPEAT},preMultiplyAlpha:Pt(l)!==pe.Opaque},c=null!=t&&t.disableTextures?Promise.resolve(null):le(i,t);r.push(c.then((e=>({refId:n,image:e,parameters:u,alphaChannelUsage:l}))))}const s=await Promise.all(r),o={};for(const e of s)o[e.refId]=e;return o}(r.textureDefinitions??{},t);let o=0;for(const e in s)if(s.hasOwnProperty(e)){const t=s[e];o+=t?.image?t.image.width*t.image.height*4:0}return{resource:r,textures:s,size:o+te(r)}}function Ct(e){throw new re("",`Request for object resource failed: ${e}`)}function At(e){const t=e.params,r=t.topology;let s=!0;switch(t.vertexAttributes||(Ot.warn("Geometry must specify vertex attributes"),s=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t?.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(Ot.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),s=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(Ot.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),s=!1)):(Ot.warn(`Indexed geometry does not specify face indices for '${r}' attribute`),s=!1)}}else Ot.warn("Indexed geometries must specify faces"),s=!1;break}default:Ot.warn(`Unsupported topology '${r}'`),s=!1}e.params.material||(Ot.warn("Geometry requires material"),s=!1);const o=e.params.vertexAttributes;for(const e in o)o[e].values||(Ot.warn("Geometries with externally defined attributes are not yet supported"),s=!1);return s}function Rt(e){const t=w();return e.forEach((e=>{const r=e.boundingInfo;null!=r&&(S(t,r.bbMin),S(t,r.bbMax))})),t}function Pt(e){switch(e){case"mask":return pe.Mask;case"maskAndTransparency":return pe.MaskBlend;case"none":return pe.Opaque;default:return pe.Blend}}function _t(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const Et=new ie(1,2,"wosr");async function It(t,r){const s=jt(e(t));if("wosr"===s.fileType){const e=await(r.cache?r.cache.loadWOSR(s.url,r):Mt(s.url,r)),{engineResources:t,referenceBoundingBox:o}=function(e,t){const r=new Array,s=new Array,o=new Array,a=new oe,i=e.resource,n=ie.parse(i.version||"1.0","wosr");Et.validate(n);const l=i.model.name,u=i.model.geometries,c=i.materialDefinitions??{},h=e.textures;let p=0;const d=new Map;for(let e=0;e<u.length;e++){const i=u[e];if(!At(i))continue;const n=_t(i),l=i.params.vertexAttributes,m=[],f=e=>{if("PerAttributeArray"===i.params.topology)return null;const t=i.params.faces;for(const r in t)if(r===e)return t[r].values;return null},g=l[ge.POSITION],x=g.values.length/g.valuesPerElement;for(const e in l){const t=l[e],r=t.values,s=f(e)??ne(x);m.push([e,new ue(r,s,t.valuesPerElement,!0)])}const T=n.texture,v=h&&h[T];if(v&&!d.has(T)){const{image:e,parameters:t}=v,r=new fe(e,t);s.push(r),d.set(T,r)}const b=d.get(T),w=b?b.id:void 0,S=n.material;let O=a.get(S,T);if(null==O){const e=c[S.substring(S.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const r=v&&v.alphaChannelUsage,s=e.transparency>0||"transparency"===r||"maskAndTransparency"===r,o=v?Pt(v.alphaChannelUsage):void 0,i={ambient:y(e.diffuse),diffuse:y(e.diffuse),opacity:1-(e.transparency||0),transparent:s,textureAlphaMode:o,textureAlphaCutoff:.33,textureId:w,initTextureTransparent:!0,doubleSided:!0,cullFace:ce.None,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:v?.parameters.preMultiplyAlpha??!1};t?.materialParameters&&Object.assign(i,t.materialParameters),O=new ht(i),a.set(S,T,O)}o.push(O);const M=new de(O,m);p+=m.find((e=>e[0]===ge.POSITION))?.[1]?.indices.length??0,r.push(M)}return{engineResources:[{name:l,stageResources:{textures:s,materials:o,geometries:r},pivotOffset:i.model.pivotOffset,numberOfVertices:p,lodThreshold:null}],referenceBoundingBox:Rt(r)}}(e,r);return{lods:t,referenceBoundingBox:o,isEsriSymbolResource:!1,isWosr:!0}}const i=await(r.cache?r.cache.loadGLTF(s.url,r,!!r.usePBR):V(new F(r.streamDataRequester),s.url,r,r.usePBR)),n=i.model.meta?.ESRI_proxyEllipsoid,l=i.meta.isEsriSymbolResource&&null!=n&&i.meta.uri.includes("/RealisticTrees/");l&&!i.customMeta.esriTreeRendering&&(i.customMeta.esriTreeRendering=!0,function(e,t){for(let r=0;r<e.model.lods.length;++r){const s=e.model.lods[r];for(const i of s.parts){const s=i.attributes.normal;if(null==s)return;const n=i.attributes.position,l=n.count,p=v(),d=v(),m=v(),T=new Uint8Array(4*l),y=new Float64Array(3*l),b=o(a(),i.transform);let w=0,S=0;for(let o=0;o<l;o++){n.getVec(o,d),s.getVec(o,p),f(d,d,i.transform),c(m,d,t.center),g(m,m,t.radius);const a=m[2],l=h(m),v=Math.min(.45+.55*l*l,1);g(m,m,t.radius),null!==b&&f(m,m,b),u(m,m),r+1!==e.model.lods.length&&e.model.lods.length>1&&x(m,m,p,a>-1?.2:Math.min(-4*a-3.8,1)),y[w]=m[0],y[w+1]=m[1],y[w+2]=m[2],w+=3,T[S]=255*v,T[S+1]=255*v,T[S+2]=255*v,T[S+3]=255,S+=4}i.attributes.normal=new I(y),i.attributes.color=new _(T)}}}(i,n));const p=!!r.usePBR,d=i.meta.isEsriSymbolResource?{usePBR:p,isSchematic:!1,treeRendering:l,mrrFactors:[...ot]}:{usePBR:p,isSchematic:!1,treeRendering:!1,mrrFactors:[...rt]},m={...r.materialParameters,treeRendering:l},{engineResources:T,referenceBoundingBox:b}=Nt(i,d,m,r.skipHighLods&&null==s.specifiedLodIndex?{skipHighLods:!0}:{skipHighLods:!1,singleLodIndex:s.specifiedLodIndex});return{lods:T,referenceBoundingBox:b,isEsriSymbolResource:i.meta.isEsriSymbolResource,isWosr:!1}}function jt(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function Nt(e,t,s,o){const a=e.model,i=new Array,n=new Map,l=new Map,u=a.lods.length,c=w();return a.lods.forEach(((e,h)=>{const p=!0===o.skipHighLods&&(u>1&&0===h||u>3&&1===h)||!1===o.skipHighLods&&null!=o.singleLodIndex&&h!==o.singleLodIndex;if(p&&0!==h)return;const d=new St(e.name,e.lodThreshold,[0,0,0]);e.parts.forEach((e=>{const o=p?new ht({}):function(e,t,r,s,o,a,i){const n=t.material+(t.attributes.normal?"_normal":"")+(t.attributes.color?"_color":"")+(t.attributes.texCoord0?"_texCoord0":"")+(t.attributes.tangent?"_tangent":""),l=e.materials.get(t.material),u=null!=t.attributes.texCoord0,c=null!=t.attributes.normal;if(null==l)return null;const h=function(e){switch(e){case"BLEND":return pe.Blend;case"MASK":return pe.Mask;case"OPAQUE":case null:case void 0:return pe.Opaque}}(l.alphaMode);if(!a.has(n)){if(u){const t=(t,r=!1)=>{if(null!=t&&!i.has(t)){const s=e.textures.get(t);if(null!=s){const e=s.data;i.set(t,new fe($(e)?e.data:e,{...s.parameters,preMultiplyAlpha:!$(e)&&r,encoding:$(e)&&null!=e.encoding?e.encoding:void 0}))}}};t(l.textureColor,h!==pe.Opaque),t(l.textureNormal),t(l.textureOcclusion),t(l.textureEmissive),t(l.textureMetallicRoughness)}const r=l.color[0]**(1/U),p=l.color[1]**(1/U),d=l.color[2]**(1/U),m=l.emissiveFactor[0]**(1/U),f=l.emissiveFactor[1]**(1/U),g=l.emissiveFactor[2]**(1/U),x=null!=l.textureColor&&u?i.get(l.textureColor):null,T=tt({normalTexture:l.textureNormal,metallicRoughnessTexture:l.textureMetallicRoughness,metallicFactor:l.metallicFactor,roughnessFactor:l.roughnessFactor,emissiveTexture:l.textureEmissive,emissiveFactor:l.emissiveFactor,occlusionTexture:l.textureOcclusion});a.set(n,new ht({...s,transparent:h===pe.Blend,customDepthTest:he.Lequal,textureAlphaMode:h,textureAlphaCutoff:l.alphaCutoff,diffuse:[r,p,d],ambient:[r,p,d],opacity:l.opacity,doubleSided:l.doubleSided,doubleSidedType:"winding-order",cullFace:l.doubleSided?ce.None:ce.Back,hasVertexColors:!!t.attributes.color,hasVertexTangents:!!t.attributes.tangent,normalType:c?we.Attribute:we.ScreenDerivative,castShadows:!0,textureId:null!=x?x.id:void 0,colorMixMode:l.colorMixMode,normalTextureId:null!=l.textureNormal&&u?i.get(l.textureNormal).id:void 0,textureAlphaPremultiplied:null!=x&&!!x.parameters.preMultiplyAlpha,occlusionTextureId:null!=l.textureOcclusion&&u?i.get(l.textureOcclusion).id:void 0,emissiveTextureId:null!=l.textureEmissive&&u?i.get(l.textureEmissive).id:void 0,metallicRoughnessTextureId:null!=l.textureMetallicRoughness&&u?i.get(l.textureMetallicRoughness).id:void 0,emissiveFactor:[m,f,g],mrrFactors:T?[...st]:[l.metallicFactor,l.roughnessFactor,s.mrrFactors[2]],isSchematic:T,colorTextureTransformMatrix:bt(l.colorTextureTransform),normalTextureTransformMatrix:bt(l.normalTextureTransform),occlusionTextureTransformMatrix:bt(l.occlusionTextureTransform),emissiveTextureTransformMatrix:bt(l.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:bt(l.metallicRoughnessTextureTransform),...o}))}const p=a.get(n);if(r.stageResources.materials.push(p),u){const e=e=>{null!=e&&r.stageResources.textures.push(i.get(e))};e(l.textureColor),e(l.textureNormal),e(l.textureOcclusion),e(l.textureEmissive),e(l.textureMetallicRoughness)}return p}(a,e,d,t,s,n,l),{geometry:i,vertexCount:u}=function(e,t){const s=e.attributes.position.count,o=k(e.indices||s,e.primitiveType),a=R(3*s),{typedBuffer:i,typedBufferStride:n}=e.attributes.position;D(a,i,e.transform,3,n);const l=[[ge.POSITION,new ue(a,o,3,!0)]];if(null!=e.attributes.normal){const t=R(3*s),{typedBuffer:a,typedBufferStride:i}=e.attributes.normal;r(Dt,e.transform),B(t,a,Dt,3,i),l.push([ge.NORMAL,new ue(t,o,3,!0)])}if(null!=e.attributes.tangent){const t=R(4*s),{typedBuffer:a,typedBufferStride:i}=e.attributes.tangent;r(Dt,e.transform),z(t,a,Dt,4,i),l.push([ge.TANGENT,new ue(t,o,4,!0)])}if(null!=e.attributes.texCoord0){const t=R(2*s),{typedBuffer:r,typedBufferStride:a}=e.attributes.texCoord0;q(t,r,2,a),l.push([ge.UV0,new ue(t,o,2,!0)])}if(null!=e.attributes.color){const t=new Uint8Array(4*s);4===e.attributes.color.elementCount?e.attributes.color instanceof P?G(t,e.attributes.color,255):e.attributes.color instanceof _?H(t,e.attributes.color):e.attributes.color instanceof E&&G(t,e.attributes.color,1/256):(t.fill(255),e.attributes.color instanceof I?L(t,e.attributes.color,255,4):e.attributes.color instanceof j?W(t,e.attributes.color.typedBuffer,4,e.attributes.color.typedBufferStride):e.attributes.color instanceof N&&L(t,e.attributes.color,1/256,4)),l.push([ge.COLOR,new ue(t,o,4,!0)])}return{geometry:new de(t,l),vertexCount:s}}(e,null!=o?o:new ht({})),m=i.boundingInfo;null!=m&&0===h&&(S(c,m.bbMin),S(c,m.bbMax)),null!=o&&(d.stageResources.geometries.push(i),d.numberOfVertices+=u)})),p||i.push(d)})),{engineResources:i,referenceBoundingBox:c}}const Dt=s(),Bt=Object.freeze(Object.defineProperty({__proto__:null,fetch:It,gltfToEngineResources:Nt,parseUrl:jt},Symbol.toStringTag,{value:"Module"}));export{ht as D,st as a,it as b,rt as d,It as f,bt as g,Mt as l,Bt as o,tt as u};