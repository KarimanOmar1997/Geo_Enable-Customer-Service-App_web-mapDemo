/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as s}from"../../../chunks/tslib.es6.js";import{property as t}from"../../../core/accessorSupport/decorators/property.js";import"../../../chunks/ensureType.js";import"../../../chunks/typedArrayUtil.js";import{subclass as e}from"../../../core/accessorSupport/decorators/subclass.js";import{c as i}from"../../../chunks/aaBoundingRect.js";import{f as r}from"../../../chunks/unitUtils.js";import{T as o}from"../../../chunks/TileInfoView.js";import"../../../chunks/TileKey2.js";import"../../../chunks/TileStrategy.js";import{L as n}from"../../../chunks/LayerView2D.js";import{B as c}from"../../../chunks/Bitmap.js";import{B as m}from"../../../chunks/BitmapContainer.js";import p from"../../layers/LayerView.js";import{R as a}from"../../../chunks/RefreshableLayerView.js";import"../../../chunks/Logger.js";import"../../../config.js";import"../../../core/lang.js";import"../../../chunks/utils.js";import"../../../chunks/handleUtils.js";import"../../../chunks/metadata.js";import"../../../core/Error.js";import"../../../chunks/tracking.js";import"../../../chunks/mathUtils.js";import"../../../chunks/vec3.js";import"../../../chunks/vec3f64.js";import"../../../chunks/common.js";import"../../../geometry/Extent.js";import"../../../geometry/Geometry.js";import"../../../core/JSONSupport.js";import"../../../core/Accessor.js";import"../../../core/Handles.js";import"../../../chunks/maybe.js";import"../../../chunks/ObjectPool.js";import"../../../chunks/ObservableBase.js";import"../../../core/scheduling.js";import"../../../chunks/nextTick.js";import"../../../chunks/PooledArray.js";import"../../../core/promiseUtils.js";import"../../../chunks/time.js";import"../../../chunks/reader.js";import"../../../geometry/SpatialReference.js";import"../../../chunks/writer.js";import"../../../chunks/jsonMap.js";import"../../../chunks/Ellipsoid.js";import"../../../chunks/assets.js";import"../../../request.js";import"../../../kernel.js";import"../../../core/urlUtils.js";import"../../../geometry/Point.js";import"../../../core/accessorSupport/decorators/cast.js";import"../../../geometry/support/webMercatorUtils.js";import"../../../chunks/vec2.js";import"../../../chunks/QueueProcessor.js";import"../../../chunks/Queue.js";import"../../../chunks/SimpleObservable.js";import"../../../core/signal.js";import"../../../core/Collection.js";import"../../../core/Evented.js";import"../../../chunks/shared.js";import"../../../chunks/collectionUtils.js";import"../../../core/reactiveUtils.js";import"../../../chunks/asyncUtils.js";import"../../../chunks/scaleUtils.js";import"../../../chunks/Container.js";import"../../../chunks/mat3f32.js";import"../../../chunks/EffectView.js";import"../../../chunks/parser.js";import"../../../chunks/colorUtils.js";import"../../../chunks/utils3.js";import"../../../chunks/screenUtils.js";import"../../../chunks/mat4.js";import"../../../chunks/_commonjsHelpers.js";import"../../../chunks/DisplayObject.js";import"../../../chunks/definitions.js";import"../../../chunks/enums3.js";import"../../../chunks/Texture.js";import"../../../chunks/contextUtils.js";import"../../../chunks/HighlightOptions.js";import"../../../Color.js";import"../../../chunks/ClipRect.js";import"../../../geometry.js";import"../../../geometry/Multipoint.js";import"../../../chunks/zmUtils.js";import"../../../geometry/Polygon.js";import"../../../chunks/Axis.js";import"../../../chunks/extentUtils.js";import"../../../geometry/Polyline.js";import"../../../chunks/typeUtils.js";import"../../../geometry/support/jsonUtils.js";import"../../../chunks/mat3.js";import"../../../chunks/vec2f32.js";import"../../../chunks/WGLContainer.js";import"../../../chunks/BufferObject.js";import"../../../chunks/VertexArrayObject.js";import"../../../chunks/VertexElementDescriptor.js";import"../../../chunks/WGLBrushVTLSymbol.js";import"../../../chunks/vec4f32.js";import"../../../chunks/enums4.js";import"../../../chunks/number.js";import"../../../chunks/StyleDefinition.js";import"../../../chunks/enums.js";import"../../../chunks/config.js";import"../../../chunks/GeometryUtils2.js";import"../../../chunks/color.js";import"../../../chunks/ShaderCompiler.js";import"../../../chunks/ProgramTemplate.js";import"../../../chunks/Program.js";import"../../../chunks/MaterialKey.js";import"../../../chunks/alignmentUtils.js";import"../../../chunks/heatmapUtils.js";import"../../../chunks/vec4.js";import"../../../chunks/vec4f64.js";import"../../../chunks/FramebufferObject.js";import"../../../chunks/heatmapTextureUtils.js";import"../../../chunks/isWebGL2Context.js";import"../../../chunks/earcut.js";import"../../../chunks/vec2f64.js";import"../../../chunks/featureConversionUtils.js";import"../../../chunks/aaBoundingBox.js";import"../../../chunks/OptimizedFeature.js";import"../../../chunks/OptimizedFeatureSet.js";import"../../../chunks/OptimizedGeometry.js";import"../../../core/Identifiable.js";import"../../../core/Promise.js";import"../../../chunks/UpdatingHandles.js";class h extends m{constructor(s){super(),this.requestRender=this.requestRender.bind(this),this._layerView=s,this._canvas=document.createElement("canvas"),this._context=this._canvas.getContext("2d"),this._bitmap=new c(this._canvas),this.addChild(this._bitmap)}doRender(s){const t=s.state,e=this._createCustomRenderParams(s),i=this._canvas,r=this._bitmap,o=window.devicePixelRatio;i.width=t.size[0]*o,i.height=t.size[1]*o,r.resolution=t.resolution;const n=t.clone();n.pixelRatio=o,r.pixelRatio=o,e.state=n,r.x=t.viewpoint.targetGeometry.x-Math.abs(t.extent.xmax-t.extent.xmin)/2,r.y=t.viewpoint.targetGeometry.y+Math.abs(t.extent.ymax-t.extent.ymin)/2,this._layerView.render(e),r.rotation=t.rotation,r.invalidateTexture(),super.doRender({...s,state:n})}_createCustomRenderParams(s){return{globalOpacity:s.globalOpacity,state:s.state,stationary:s.stationary,pixelRatio:window.devicePixelRatio,context:this._context}}}const u=new Set,l=[],j=[];class k{constructor(s,t,e,r,o,n,c,m=[0,0],p=i()){this.id=s,this.level=t,this.row=e,this.col=r,this.world=o,this.resolution=n,this.scale=c,this.coords=m,this.bounds=p}}let d=class extends(a(n(p))){constructor(s){super(s),this._tileMap=new Map,this.layer=null,this.tiles=[]}initialize(){this.display=new h(this),this.container.addChild(this.display)}get _tileInfoView(){const s=this.layer?.tileInfo;return s?new o(s):null}attach(){}detach(){}requestRender(){this.display.requestRender()}tilesChanged(s,t){}supportsSpatialReference(s){const t=this.layer?.tileInfo;return!t||r(t.spatialReference,s)}async doRefresh(){}isUpdating(){return!1}update(s){const t=this._tileInfoView,e=this.tiles;if(t){const i=t.getTileCoverage(s.state,0),{spans:r,lodInfo:o}=i??{};if(r?.length&&o)for(const{row:s,colFrom:t,colTo:i}of r)for(let r=t;r<=i;r++){const t=o.normalizeCol(r),i=o.getWorldForColumn(r),n=`${o.level}/${s}/${t}/${i}`;if(!this._tileMap.has(n)){const r=new k(n,o.level,s,t,i,o.resolution,o.scale);o.getTileCoords(r.coords,r,!1),o.getTileBounds(r.bounds,r,!0),this._tileMap.set(n,r),e.push(r),l.push(r)}u.add(n)}}for(let s=e.length-1;s>=0;s--){const t=e[s];u.has(t.id)||(e.splice(s,1),j.push(t),this._tileMap.delete(t.id))}(l.length||j.length)&&(this.tilesChanged(l,j),l.length=j.length=0),u.clear(),this.requestRender()}moveStart(){}viewChange(){this.requestUpdate()}moveEnd(){}};s([t()],d.prototype,"_tileInfoView",null),s([t()],d.prototype,"layer",void 0),d=s([e("esri.views.2d.layers.BaseLayerView2D")],d);const y=d;export{y as default};
