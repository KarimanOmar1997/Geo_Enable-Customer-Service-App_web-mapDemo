// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../../Color ../../../../core/has ../../../../core/mathUtils ../../../../chunks/mat3 ../../../../chunks/mat3f64 ../../../../chunks/mat4 ../../../../chunks/mat4f64 ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../../../chunks/vec4f64 ../../../../geometry/projection ../../../../geometry/projection/computeTranslationToOriginAndRotation ../../../../geometry/projection/projectBuffer ../../../../geometry/projection/projectVectorToDehydratedPoint ../../../../geometry/support/aaBoundingBox ../../../../geometry/support/FloatArray ../../../../geometry/support/Indices ../../../../geometry/support/MeshComponent ../../../../geometry/support/MeshMaterialMetallicRoughness ../../../../geometry/support/MeshTextureTransform ../../../../chunks/vec32 ../../../../geometry/support/meshUtils/georeference ../../../../geometry/support/meshUtils/projection ../../../../layers/graphics/dehydratedPoint ../../../../layers/graphics/sources/interfaces ../../../ViewingMode ../../glTF/internal/resourceUtils ../../glTF/internal/TextureTransformUtils ./ElevationAligners ./elevationAlignmentUtils ./Graphics3DMeshObject3DGraphicLayer ./Graphics3DObject3DGraphicLayer ./Graphics3DSymbolLayer ./MeshFastUpdateProcessor ../support/edgeUtils ../support/symbolColorUtils ../../support/debugFlags ../../webgl-engine/lib/Attribute ../../webgl-engine/lib/basicInterfaces ../../webgl-engine/lib/ContentObjectType ../../webgl-engine/lib/Geometry ../../webgl-engine/lib/Object3D ../../webgl-engine/lib/Texture ../../webgl-engine/lib/VertexAttribute ../../webgl-engine/materials/DefaultMaterial ../../webgl-engine/materials/NativeLineMaterial ../../webgl-engine/materials/pbrUtils ../../../webgl/enums".split(" "),
function(Y,F,Pa,ra,Z,sa,I,z,u,A,aa,ta,P,ua,va,J,ba,ca,wa,xa,ya,K,za,L,Aa,Q,da,Ba,G,R,M,Ca,Da,Ea,ea,Fa,fa,ha,B,v,S,T,Ga,Ha,w,Ia,ia,U,V){const Ja=["mesh"];class Ka extends Ea.Graphics3DSymbolLayer{constructor(a,b,c,d){super(a,b,c,d);this._materialInfoCache=new ea.MaterialInfoCache;this._fastUpdateProcessor=new ea.MeshFastUpdateProcessor;this._textures=new Map;this.ensureDrapedStatus(!1)}async doLoad(){ha.debugFlags.DRAW_MESH_GEOMETRY_NORMALS&&(this._debugVertexNormalMaterial=new ia.NativeLineMaterial({color:[1,
0,1,1]}),this._debugFaceNormalMaterial=new ia.NativeLineMaterial({color:[0,1,1,1]}))}destroy(){super.destroy();this._textures.forEach(a=>a.unload());this._context.stage.removeMany(this._materialInfoCache.materials);this._context.stage.removeMany(Array.from(this._textures.values()));this._materialInfoCache.clear();this._textures.clear();this._fastUpdateProcessor.destroy(this._context.stage)}get materials(){return this._materialInfoCache.materials}createGraphics3DGraphic(a){const b=a.graphic;if(!this._validateGeometry(b.geometry,
Ja,"fill on mesh-3d"))return null;const c=this.setGraphicElevationContext(b);return this._createAs3DShape(b,a.renderingInfo,c,b.uid)}onRemoveGraphic(a){this._fastUpdateProcessor.onRemoveGraphic(a,this._materialInfoCache,this._context)}layerOpacityChanged(a,b){const c=this._getLayerOpacity();this._updateMaterialParameters(d=>{d.material.setParameters({layerOpacity:c});const e=d.material.parameters;this._setMaterialTransparentParameter(e,d);d.material.setParameters({transparent:e.transparent})});a.forEach(d=>
b(d)?.layerOpacityChanged(c,this._context.isAsync))}layerElevationInfoChanged(a,b){return this.updateGraphics3DGraphicElevationInfo(a,b,M.needsElevationUpdates3D)}slicePlaneEnabledChanged(a,b){this._updateMaterialParameters(({material:c})=>{c.setParameters({hasSlicePlane:this._context.slicePlaneEnabled})});a.forEach(c=>b(c)?.slicePlaneEnabledChanged(this._context.slicePlaneEnabled,this._context.isAsync));return!0}physicalBasedRenderingChanged(){const a=this._usePBR();this._updateMaterialParameters(({material:b})=>
b.setParameters({usePBR:a}));return!0}updateTransform(a,b,c,d){const e=this._context.renderCoordsHelper.spatialReference,f=La,{origin:g,transform:h}=c;P.computeTranslationToOriginAndRotation(b,u.set(m,g.x,g.y,g.z??0),f,e);switch(d){case Q.MeshTransformUpdateAction.EnableFastUpdates:this._fastUpdateProcessor.enable(a,this._materialInfoCache,this._context);break;case Q.MeshTransformUpdateAction.DisableFastUpdates:this._fastUpdateProcessor.disable(a,this._materialInfoCache,this._context);break;case Q.MeshTransformUpdateAction.UpdateFastLocalOrigin:a.updateFastLocalOrigin(f,
h,this._context.localOriginFactory)}const {elevationContext:n}=a;n.centerPointInElevationSR=this._getCenterPointInElevationSR(f);const {elevationProvider:q,renderCoordsHelper:p}=this._context;a.alignedSampledElevation=R.perObjectElevationAligner(a,n,q.spatialReference,(k,t)=>M.evaluateElevationInfoAtPoint(k,q,n,p,t),p,f);a.updateTransform(f,h,this._context.isAsync);return!0}_requiresSymbolVertexColors(){return this._drivenProperties.color||this._drivenProperties.opacity}_colorOrTextureUid(a){return null==
a?"-":a instanceof F?a.toHex():a.contentHash}_materialPropertiesDefault(a,b){const c=this._requiresSymbolVertexColors(),d=!!a.vertexAttributes.color;a=!!a.vertexAttributes.tangent;return{hasSymbolVertexColors:c,hasVertexColors:d,hasVertexTangents:a,uid:`vc:${d},vt:${a},vct${b},svc:${c}`}}_textureTransformUid(a){const {offset:b,scale:c,rotation:d}=a??Ma;return`${b[0]},${b[1]},${d},${c[0]},${c[1]}`}_materialProperties(a,b,c){a=this._materialPropertiesDefault(a,c);if(!b.material)return a;const {color:d,
colorTexture:e,colorTextureTransform:f,normalTexture:g,normalTextureTransform:h,doubleSided:n,alphaCutoff:q,alphaMode:p}=b.material;c=this._colorOrTextureUid(d);var k=this._colorOrTextureUid(e),t=this._textureTransformUid(f),x=this._colorOrTextureUid(g),l=this._textureTransformUid(h);a.color=d;a.colorTexture=e;a.normalTexture=g;a.uid=`${a.uid},cmuid:${c},ctmuid:${k},cttuid:${t},ntmuid:${x},nttuid:${l},ds:${n},ac:${q},am:${p}`;if(b.material instanceof xa){const {metallic:y,roughness:N,metallicRoughnessTexture:ja,
metallicRoughnessTextureTransform:ka,emissiveColor:la,emissiveTexture:ma,emissiveTextureTransform:na,occlusionTexture:oa,occlusionTextureTransform:pa}=b.material;b=this._colorOrTextureUid(ja);c=this._textureTransformUid(ka);k=this._colorOrTextureUid(la);t=this._colorOrTextureUid(ma);x=this._textureTransformUid(na);l=this._colorOrTextureUid(oa);const Na=this._textureTransformUid(pa);a.metallic=y;a.roughness=N;a.metallicRoughnessTexture=ja;a.emissiveColor=la;a.emissiveTexture=ma;a.occlusionTexture=
oa;a.colorTextureTransform=this._convertTextureTransform(f);a.normalTextureTransform=this._convertTextureTransform(h);a.emissiveTextureTransform=this._convertTextureTransform(na);a.occlusionTextureTransform=this._convertTextureTransform(pa);a.metallicRoughnessTextureTransform=this._convertTextureTransform(ka);a.uid=`${a.uid},mrm:${y},mrr:${N},mrt:${b},mrtt:${c},emuid:${k},etmuid:${t},ett:${x},otmuid:${l},ott:${Na}`}return a}_convertTextureTransform(a){if(!a)return null;const {scale:b,offset:c,rotation:d}=
a;return{scale:b,offset:c,rotation:ra.deg2rad(d)}}_setInternalColorValueParameters(a,b){b.diffuse=F.toUnitRGB(a);b.opacity=a.a}_getLoadableTextureResource(a){return a.data??a.url}_getInternalTextureId(a){return this._getInternalTexture(a,v.AlphaDiscardMode.Opaque)?.id}_getInternalTexture(a,b){const c=this._getLoadableTextureResource(a);if(!c)return null;const d=`${a.contentHash}/${b}`;var e=this._textures.get(d);e||(e=null,e=this._context.stage.renderView.renderingContext.parameters.maxMaxAnisotropy,
a={wrap:this._castTextureWrap(a.wrap),noUnpackFlip:!0,maxAnisotropy:e,mipmap:1<e},Ba.isEncodedMeshTexture(c)?(e=c.data,a.preMultiplyAlpha=!1,a.encoding=c.encoding):(e=c,a.preMultiplyAlpha=b!==v.AlphaDiscardMode.Opaque,a.downsampleUncompressed=this._context.graphicsCoreOwner.view.qualitySettings.graphics3D.uncompressedTextureDownsamplingEnabled),e=new Ha.Texture(e,a),this._textures.set(d,e),e.load(this._context.stage.renderView.renderingContext),this._context.stage.add(e));return e}_castTextureWrap(a=
"repeat"){return"string"===typeof a?(a=this._castTextureWrapIndividual(a),{s:a,t:a}):{s:this._castTextureWrapIndividual(a.horizontal),t:this._castTextureWrapIndividual(a.vertical)}}_castTextureWrapIndividual(a){switch(a){case "clamp":return V.TextureWrapMode.CLAMP_TO_EDGE;case "mirror":return V.TextureWrapMode.MIRRORED_REPEAT;default:return V.TextureWrapMode.REPEAT}}_setInternalMaterialParameters(a,b){null!=a.color&&this._setInternalColorValueParameters(a.color,b);if(null!=a.colorTexture){const c=
this._getInternalTexture(a.colorTexture,b.textureAlphaMode);c?(b.textureId=c.id,b.textureAlphaPremultiplied=!!c.parameters.preMultiplyAlpha):b.textureId=void 0}a.normalTexture&&(b.normalTextureId=this._getInternalTextureId(a.normalTexture));a.emissiveColor&&(b.emissiveFactor=F.toUnitRGB(a.emissiveColor));a.emissiveTexture&&(b.emissiveTextureId=this._getInternalTextureId(a.emissiveTexture));a.occlusionTexture&&(b.occlusionTextureId=this._getInternalTextureId(a.occlusionTexture));a.metallicRoughnessTexture&&
(b.metallicRoughnessTextureId=this._getInternalTextureId(a.metallicRoughnessTexture));b.colorTextureTransformMatrix=G.getTransformMatrix(a.colorTextureTransform);b.normalTextureTransformMatrix=G.getTransformMatrix(a.normalTextureTransform);b.occlusionTextureTransformMatrix=G.getTransformMatrix(a.occlusionTextureTransform);b.emissiveTextureTransformMatrix=G.getTransformMatrix(a.emissiveTextureTransform);b.metallicRoughnessTextureTransformMatrix=G.getTransformMatrix(a.metallicRoughnessTextureTransform)}_setExternalMaterialParameters(a){let b=
this.symbolLayer.material?.colorMixMode??null;if(this._drivenProperties.color)a.externalColor=aa.ONES;else{const c=this.symbolLayer.material?.color??null;c?a.externalColor=F.toUnitRGBA(c):(b=null,a.externalColor=aa.ONES)}b&&(a.colorMixMode=b);a.castShadows=!!this.symbolLayer.castShadows}_hasTransparentVertexColors(a){a=a.vertexAttributes.color;if(null==a)return!1;for(let b=3;b<a.length;b+=4)if(255!==a[b])return!0;return!1}_getOrCreateMaterial(a,b){var c=b.material?.color,d=b.material?.colorTexture,
e=b.material?.alphaMode;const f="blend"===e;c="opaque"!==e&&(this._hasTransparentVertexColors(a)||null!=c&&1>c.a||d?.transparent||f);a=this._materialProperties(a,b,c);if(d=this._materialInfoCache.byUid(a.uid))return d.material;c={uid:a.uid,material:null,isComponentTransparent:c,alphaMode:b.material?b.material.alphaMode:"opaque"};d=U.useSchematicPBR({normalTexture:a.normalTexture,metallicRoughnessTexture:a.metallicRoughnessTexture,metallicFactor:a.metallic,roughnessFactor:a.roughness,emissiveTexture:a.emissiveTexture,
emissiveFactor:F.toUnitRGB(a.emissiveColor),occlusionTexture:a.occlusionTexture});e={usePBR:this._usePBR(),isSchematic:d,hasVertexColors:a.hasVertexColors,hasSymbolColors:a.hasSymbolVertexColors,hasVertexTangents:a.hasVertexTangents,ambient:A.ZEROS,diffuse:A.ONES,opacity:1,doubleSided:!0,doubleSidedType:"winding-order",cullFace:v.CullFaceOptions.None,layerOpacity:this._getLayerOpacity(),hasSlicePlane:this._context.slicePlaneEnabled,initTextureTransparent:!0};e.mrrFactors=d?[...U.defaultSchematicMRRFactors]:
[a.metallic,a.roughness,U.defaultAdvancedMRRFactors[2]];b.material&&(e.doubleSided=b.material.doubleSided,e.cullFace=b.material.doubleSided?v.CullFaceOptions.None:v.CullFaceOptions.Back,e.textureAlphaCutoff=b.material.alphaCutoff);this._setExternalMaterialParameters(e);this._setMaterialTransparentParameter(e,c);this._setInternalMaterialParameters(a,e);b=new Ia.DefaultMaterial(e);c.material=b;this._materialInfoCache.set(a.uid,c);this._context.stage.add(b);return b}_usePBR(){return this._context.physicalBasedRenderingEnabled}_setMaterialTransparentParameter(a,
b){a.transparent=this.needsDrivenTransparentPass||b.isComponentTransparent||1>a.layerOpacity||1>a.opacity||a.externalColor&&1>a.externalColor[3];a.textureAlphaMode="auto"===b.alphaMode?a.transparent?v.AlphaDiscardMode.MaskBlend:v.AlphaDiscardMode.Opaque:"opaque"===b.alphaMode?v.AlphaDiscardMode.Opaque:"mask"===b.alphaMode?v.AlphaDiscardMode.Mask:v.AlphaDiscardMode.Blend}_addDebugNormals(a,b){var c=b.length,d=a.spatialReference.isGeographic?20015077/180:1;const e=.1*Math.max(a.extent.width*d,a.extent.height*
d,a.extent.zmax-a.extent.zmin);var f=[];const g=[];a=[];d=[];for(let t=0;t<c;t++){var h=b[t],n=h.attributes.get(w.VertexAttribute.POSITION),q=h.attributes.get(w.VertexAttribute.NORMAL);h=n.data;n=n.indices;const x=q.data;q=q.indices;for(let l=0;l<n.length;l++){var p=3*n[l];const y=3*q[l];for(var k=0;3>k;k++)f.push(h[p+k]);for(k=0;3>k;k++)f.push(h[p+k]+x[y+k]*e);g.push(g.length);g.push(g.length);if(0===l%3){this._calculateFaceNormal(h,n,l,C);this._getFaceVertices(h,n,l,m,D,E);u.add(m,m,D);u.add(m,
m,E);u.scale(m,m,1/3);for(p=0;3>p;p++)a.push(m[p]);for(p=0;3>p;p++)a.push(m[p]+C[p]*e);d.push(d.length);d.push(d.length)}}}c=b[0].transformation;f=new T.Geometry(this._debugVertexNormalMaterial,[[w.VertexAttribute.POSITION,new B.Attribute(f,g,3,!0)]],null,S.ContentObjectType.Line);b.push(f);f.transformation=c;a=new T.Geometry(this._debugFaceNormalMaterial,[[w.VertexAttribute.POSITION,new B.Attribute(a,d,3,!0)]],null,S.ContentObjectType.Line);a.transformation=c;b.push(a)}_createAs3DShape(a,b,c,d){a=
a.geometry;if("mesh"!==a.type)return null;b=this._createGeometryInfo(a,b,d);if(null==b)return null;const {geometries:e,objectTransformation:f}=b;ha.debugFlags.DRAW_MESH_GEOMETRY_NORMALS&&this._addDebugNormals(a,e);d=new Ga.Object3D({geometries:e,layerUid:this._context.layer.uid,graphicUid:d});d.transformation=f;b=(b=Fa.createMaterial(this.symbolLayer,{opacity:this._getLayerOpacity()}))?new Da.Object3DEdgeState(e[0].material,[b],{mergeGeometries:!0,hasSlicePlane:this._context.slicePlaneEnabled}):null;
b=new Ca.Graphics3DMeshObject3DGraphicLayer(this,d,e,null,null,R.perObjectElevationAligner,c,b);this._fastUpdateProcessor.onAddGraphic();b.needsElevationUpdates=M.needsElevationUpdates3D(c.mode);b.useObjectOriginAsAttachmentOrigin=!0;c.centerPointInElevationSR=this._getCenterPointInElevationSR(d.transformation);const {elevationProvider:g,renderCoordsHelper:h}=this._context;b.alignedSampledElevation=R.perObjectElevationAligner(b,c,g.spatialReference,(n,q)=>M.evaluateElevationInfoAtPoint(n,g,c,h,q),
h);return b}_getCenterPointInElevationSR(a){const b=Aa.makeDehydratedPoint(0,0,0,null!=this._context.elevationProvider.spatialReference?this._context.elevationProvider.spatialReference:null);va.projectVectorToDehydratedPoint([a[12],a[13],a[14]],this._context.renderCoordsHelper.spatialReference,b);return b}_createComponentNormals(a,b,c,d){switch(c.shading||"flat"){default:case "source":return this._createComponentNormalsSource(a,b,c,d);case "flat":return this._createComponentNormalsFlat(a,d);case "smooth":return this._createComponentNormalsSmooth(a,
d)}}_createComponentNormalsSource(a,b,c,d){if(null==b)return this._createComponentNormalsFlat(a,d);let e=!1;if(!c.trustSourceNormals)for(c=0;c<d.length;c+=3){this._calculateFaceNormal(a,d,c,C);for(let f=0;3>f;f++){const g=3*d[c+f];m[0]=b[g];m[1]=b[g+1];m[2]=b[g+2];0>u.dot(C,m)&&(b[g]=-b[g],b[g+1]=-b[g+1],b[g+2]=-b[g+2],e=!0)}}return new W(b,d,e)}_createComponentNormalsFlat(a,b){const c=ba.newFloatArray(b.length),d=Array(3*b.length);for(let e=0;e<b.length;e+=3){const f=this._calculateFaceNormal(a,
b,e,C);for(let g=0;3>g;g++)c[e+g]=f[g],d[e+g]=e/3}return new W(c,d,!1)}_createComponentNormalsSmooth(a,b){const c={};for(var d=0;d<b.length;d+=3){var e=this._calculateFaceNormal(a,b,d,C);for(var f=0;3>f;f++){var g=b[d+f];let h=c[g];h||(h={normal:A.create(),count:0},c[g]=h);u.add(h.normal,h.normal,e);h.count++}}a=ba.newFloatArray(3*b.length);d=Array(3*b.length);for(e=0;e<b.length;e++){f=c[b[e]];1!==f.count&&(u.normalize(f.normal,f.normal),f.count=1);for(g=0;3>g;g++)a[3*e+g]=f.normal[g];d[e]=e}return new W(a,
d,!1)}_getFaceVertices(a,b,c,d,e,f){const g=3*b[c],h=3*b[c+1];b=3*b[c+2];d[0]=a[g];d[1]=a[g+1];d[2]=a[g+2];e[0]=a[h];e[1]=a[h+1];e[2]=a[h+2];f[0]=a[b];f[1]=a[b+1];f[2]=a[b+2]}_calculateFaceNormal(a,b,c,d){this._getFaceVertices(a,b,c,m,D,E);u.subtract(D,D,m);u.subtract(E,E,m);u.cross(m,D,E);u.normalize(d,m);return d}_getOrCreateComponents(a){return a.components??Oa}_createPositionBuffer(a,b){let c=a.vertexAttributes.position;const d=b.reprojection===r.ECEF?b.transformBeforeProject:null;d&&(c=K.transformMat4(new Float64Array(c.length),
c,d));if(b.reprojection===r.NONE)return b.needsBufferCopy?new Float64Array(c):c;b=d?c:new Float64Array(c.length);ua.projectBuffer(c,a.spatialReference,0,b,this._context.renderCoordsHelper.spatialReference,0,c.length/3);return b}_createNormalBuffer(a,b,c){let d=a.vertexAttributes.normal;if(null==d)return null;var e=c.reprojection===r.ECEF?c.transformBeforeProject:null;e&&(d=L.transformNormal(d,new Float32Array(d.length),e));if("local"===this._context.graphicsCoreOwner.view.viewingMode||c.reprojection===
r.NONE)return c.needsBufferCopy&&a.vertexAttributes.normal===d?new Float32Array(d):d;c=a.vertexAttributes.position;e=e?d:new Float32Array(d.length);return L.projectNormalToPCPF(d,c,b,a.spatialReference,e)}_createTangentBuffer(a,b,c){let d=a.vertexAttributes.tangent;if(null==d)return null;var e=c.reprojection===r.ECEF?c.transformBeforeProject:null;e&&(d=L.transformTangent(d,new Float32Array(d.length),e));if("local"===this._context.graphicsCoreOwner.view.viewingMode||c.reprojection===r.NONE)return c.needsBufferCopy&&
a.vertexAttributes.normal===d?new Float32Array(d):d;c=a.vertexAttributes.position;e=e?d:new Float32Array(d.length);return L.projectTangentToPCPF(d,c,b,a.spatialReference,e)}_createColorBuffer(a){return a.vertexAttributes.color}_createSymbolColorBuffer(a){if(this._requiresSymbolVertexColors()){a=this._getVertexOpacityAndColor(a);const b=fa.parseColorMixMode(this.symbolLayer?.material?.colorMixMode),c=new Uint8Array(4);fa.encodeSymbolColor(a,b,c);return c}return null}_createBuffers(a,b){var c=a.vertexAttributes&&
a.vertexAttributes.position;if(!c)return this.logger.warn("Mesh geometry must contain position vertex attributes"),null;var d=a.vertexAttributes.normal;const e=a.vertexAttributes.uv;var f=a.vertexAttributes.tangent;if(d&&d.length!==c.length)return this.logger.warn("Mesh normal vertex buffer must contain the same number of elements as the position buffer"),null;if(f&&f.length/4!==c.length/3)return this.logger.warn("Mesh tangent vertex buffer must contain the same number of elements as the position buffer"),
null;if(e&&e.length/2!==c.length/3)return this.logger.warn("Mesh uv vertex buffer must contain the same number of elements as the position buffer"),null;f=this._computeReprojectionInfo(a);c=this._createPositionBuffer(a,f);d=this._createColorBuffer(a);b=this._createSymbolColorBuffer(b);const g=this._createNormalBuffer(a,c,f),h=this._createTangentBuffer(a,c,f);a=f.reprojection===r.NONE&&f.objectTransformation?f.objectTransformation:this._transformOriginLocal(a,c,g,h);f=f.reprojection===r.NONE&&f.geometryTransformation?
f.geometryTransformation:z.create();return{positionBuffer:c,normalBuffer:g,tangentBuffer:h,uvBuffer:e,colorBuffer:d,symbolColorBuffer:b,objectTransformation:a,geometryTransformation:f}}_computeReprojectionInfo(a){var {vertexSpace:b}=a;const c=b.isGeoreferenced?this._context.renderCoordsHelper.viewingMode===da.ViewingMode.Local?r.NONE:r.ECEF:r.NONE;if(b.isRelative){const {origin:d}=b;b=z.create();const e=a.transform?.localMatrix??z.IDENTITY;if(c===r.NONE)return P.computeTranslationToOriginAndRotation(a.spatialReference,
d,b,this._context.renderCoordsHelper.spatialReference),a=z.clone(e),{reprojection:c,objectTransformation:b,geometryTransformation:a,needsBufferCopy:!1};a=I.fromTranslation(z.create(),d);I.multiply(a,a,e);return{reprojection:c,transformBeforeProject:a,needsBufferCopy:!0}}return{reprojection:c,needsBufferCopy:!0}}_transformOriginLocal(a,b,c,d){const e=this._context.renderCoordsHelper.spatialReference;var f=a.anchor;O[0]=f.x;O[1]=f.y;O[2]=f.z??0;f=z.create();P.computeTranslationToOriginAndRotation(a.spatialReference,
O,f,e);I.invert(qa,f);K.transformMat4(b,b,qa);if(c||d)Z.fromMat4(H,f),Z.transpose(H,H),c&&K.transformMat3(c,c,H),d&&K.transformMat3(d,d,H,4);return f}_validateFaces(a,b){a=a.vertexAttributes.position.length/3;if(b=b.faces){let c=-1;for(let d=0;d<b.length;d++){const e=b[d];e>c&&(c=e)}if(a<=c)return this.logger.warn(`Vertex index ${c} is out of bounds of the mesh position buffer`),!1}else if(0!==a%3)return this.logger.warn("Mesh position buffer length must be a multiple of 9 if no component faces are defined (3 values per vertex * 3 vertices per triangle)"),
!1;return!0}_getOrCreateFaces(a,b){return b.faces??ca.getContinuousIndexArray(a.vertexAttributes.position.length/3)}_isOutsideClippingArea(a){if(!this._context.clippingExtent)return!1;var b=a.vertexAttributes?.position;if(!b)return!1;a=za.project({positions:b,transform:a.transform,vertexSpace:a.vertexSpace,inSpatialReference:a.spatialReference,outSpatialReference:this._context.elevationProvider.spatialReference??a.spatialReference,localMode:this._context.stage.viewingMode===da.ViewingMode.Local});
b=a.length/3;J.empty(X);J.expandWithBuffer(X,a,0,b);return!J.intersectsClippingArea(X,this._context.clippingExtent)}_createGeometryInfo(a,b,c){if(!ta.canProjectWithoutEngine(a.spatialReference,this._context.graphicsCoreOwner.view.spatialReference))return this.logger.warn("Geometry spatial reference is not compatible with the view"),null;if(this._isOutsideClippingArea(a))return null;b=this._createBuffers(a,b);if(null==b)return null;const {positionBuffer:d,uvBuffer:e,colorBuffer:f,symbolColorBuffer:g,
normalBuffer:h,tangentBuffer:n,objectTransformation:q,geometryTransformation:p}=b;var k=this._getOrCreateComponents(a);b=[];let t=!1;var x=I.getTranslation(m,q);x=this._context.localOriginFactory.getOrigin(x);for(const y of k){if(!this._validateFaces(a,y))return null;var l=this._getOrCreateFaces(a,y);if(0===l.length)continue;k=this._createComponentNormals(d,h,y,l);k.didFlipNormals&&(t=!0);k=[[w.VertexAttribute.POSITION,new B.Attribute(d,l,3,!0)],[w.VertexAttribute.NORMAL,new B.Attribute(k.normals,
k.indices,3,!0)]];f&&k.push([w.VertexAttribute.COLOR,new B.Attribute(f,l,4,!0)]);g&&k.push([w.VertexAttribute.SYMBOLCOLOR,new B.Attribute(g,ca.getZeroIndexArray(l.length),4,!0)]);e&&k.push([w.VertexAttribute.UV0,new B.Attribute(e,l,2,!0)]);n&&k.push([w.VertexAttribute.TANGENT,new B.Attribute(n,l,4,!0)]);l=this._context.stage.renderView.getObjectAndLayerIdColor({graphicUid:c,layerUid:this._context.layer.uid});const N=this._getOrCreateMaterial(a,y);k=new T.Geometry(N,k,null,S.ContentObjectType.Mesh,
l);k.transformation=p;k.localOrigin=x;b.push(k)}t&&this.logger.warn("Normals have been automatically flipped to be consistent with the counter clock wise face winding order. It is better to generate mesh geometries that have consistent normals.");return{geometries:b,objectTransformation:q}}_updateMaterialParameters(a){this._materialInfoCache.forEachMaterialInfo(a);this._fastUpdateProcessor.forEachMaterialInfo(a);this._fastUpdateProcessor.forEachClonedMaterial((b,c)=>{c.setParameters(b.parameters)})}test(){return{...super.test(),
materials:this._materialInfoCache.materials}}}class W{constructor(a,b,c){this.normals=a;this.indices=b;this.didFlipNormals=c}}const O=A.create(),m=A.create(),D=A.create(),E=A.create(),C=A.create(),qa=z.create(),H=sa.create(),La=z.create(),X=J.create(),Oa=[new wa],Ma=new ya;var r;(function(a){a[a.NONE=0]="NONE";a[a.ECEF=1]="ECEF"})(r||(r={}));Y.Graphics3DMeshFillSymbolLayer=Ka;Object.defineProperty(Y,Symbol.toStringTag,{value:"Module"})});