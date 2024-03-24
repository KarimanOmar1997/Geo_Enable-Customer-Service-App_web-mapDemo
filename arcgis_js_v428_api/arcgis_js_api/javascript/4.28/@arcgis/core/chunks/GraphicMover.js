/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import"../symbols.js";import i from"../core/Evented.js";import{clone as s}from"../core/lang.js";import{watch as o,when as r}from"../core/reactiveUtils.js";import{property as e}from"../core/accessorSupport/decorators/property.js";import"./ensureType.js";import{subclass as p}from"../core/accessorSupport/decorators/subclass.js";import a from"../layers/GraphicsLayer.js";import{c as l}from"./drawUtils.js";import n from"../views/draw/support/HighlightHelper.js";import{a as h,f as c}from"./layerUtils.js";import{V as m}from"./InputManager.js";import{G as y}from"./GraphicManipulator.js";import{c as d}from"./screenUtils2.js";import j from"../symbols/SimpleMarkerSymbol.js";import u from"../symbols/SimpleLineSymbol.js";import g from"../symbols/SimpleFillSymbol.js";import"../symbols/CIMSymbol.js";import"./Logger.js";import"../config.js";import"./typedArrayUtil.js";import"./enumeration.js";import"./jsonMap.js";import"./reader.js";import"./writer.js";import"../layers/support/fieldUtils.js";import"../core/Error.js";import"../core/Accessor.js";import"../core/Handles.js";import"./maybe.js";import"./metadata.js";import"./utils.js";import"./handleUtils.js";import"./ObjectPool.js";import"./ObservableBase.js";import"./tracking.js";import"../core/scheduling.js";import"./nextTick.js";import"./PooledArray.js";import"../core/promiseUtils.js";import"./time.js";import"../core/sql.js";import"../intl.js";import"./date.js";import"./locale.js";import"./timeZoneUtils.js";import"./datetime.js";import"./messages.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/JSONSupport.js";import"./assets.js";import"./mathUtils.js";import"./vec3.js";import"./vec3f64.js";import"./common.js";import"./arcadeOnDemand.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../geometry/SpatialReference.js";import"./unitUtils.js";import"./Ellipsoid.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./Axis.js";import"./extentUtils.js";import"./aaBoundingRect.js";import"../geometry/Polyline.js";import"./typeUtils.js";import"../geometry/support/jsonUtils.js";import"../symbols/Symbol.js";import"../Color.js";import"./colorUtils.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"./utils4.js";import"../symbols/edges/Edges3D.js";import"./screenUtils.js";import"./materialUtils.js";import"./opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"./Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"./lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"./utils5.js";import"./colors.js";import"./symbolLayerUtils3D.js";import"./aaBoundingBox.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"./persistableUrlUtils.js";import"./Symbol3DAnchorPosition2D.js";import"../symbols/LabelSymbol3D.js";import"../core/Collection.js";import"./shared.js";import"./SimpleObservable.js";import"../symbols/Symbol3D.js";import"./collectionUtils.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../core/Promise.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../core/Clonable.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"./Thumbnail.js";import"./calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"./urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"./asyncUtils.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"./GraphicsCollection.js";import"../Graphic.js";import"../PopupTemplate.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../popup/support/FieldInfoFormat.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"./chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../core/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../layers/Layer.js";import"../layers/mixins/BlendLayer.js";import"./jsonUtils.js";import"./parser.js";import"./utils3.js";import"./mat4.js";import"./_commonjsHelpers.js";import"../layers/mixins/ScaleRangeLayer.js";import"./ElevationInfo.js";import"./unitConversionUtils.js";import"./lengthUtils.js";import"./layerViewUtils.js";import"./featureUtils.js";import"./layerUtils2.js";import"./utils2.js";import"./basemapUtils.js";import"../Basemap.js";import"./loadAll.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../support/BasemapStyle.js";import"./writeUtils.js";import"./Queue.js";import"./PropertiesPool.js";import"../core/signal.js";import"./vec2.js";import"../geometry/projection.js";import"./projectBuffer.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"./zscale.js";import"./projectPointToVector.js";import"./elevationInfoUtils.js";import"./defaults.js";import"./defaultsJSON.js";import"./drapedUtils.js";class v{constructor(t,i,s,o,r){this.graphic=t,this.index=i,this.x=s,this.y=o,this.viewEvent=r,this.type="graphic-click"}}class b{constructor(t,i,s,o,r){this.graphic=t,this.index=i,this.x=s,this.y=o,this.viewEvent=r,this.type="graphic-double-click"}}class f{constructor(t,i,s,o,r,e,p,a,l,n){this.graphic=t,this.allGraphics=i,this.index=s,this.x=o,this.y=r,this.dx=e,this.dy=p,this.totalDx=a,this.totalDy=l,this.viewEvent=n,this.defaultPrevented=!1,this.type="graphic-move-start"}preventDefault(){this.defaultPrevented=!0}}class _{constructor(t,i,s,o,r,e,p,a,l,n){this.graphic=t,this.allGraphics=i,this.index=s,this.x=o,this.y=r,this.dx=e,this.dy=p,this.totalDx=a,this.totalDy=l,this.viewEvent=n,this.defaultPrevented=!1,this.type="graphic-move"}preventDefault(){this.defaultPrevented=!0}}class w{constructor(t,i,s,o,r,e,p,a,l,n){this.graphic=t,this.allGraphics=i,this.index=s,this.x=o,this.y=r,this.dx=e,this.dy=p,this.totalDx=a,this.totalDy=l,this.viewEvent=n,this.defaultPrevented=!1,this.type="graphic-move-stop"}preventDefault(){this.defaultPrevented=!0}}class G{constructor(t,i,s,o,r){this.graphic=t,this.index=i,this.x=s,this.y=o,this.viewEvent=r,this.type="graphic-pointer-over"}}class x{constructor(t,i,s,o,r){this.graphic=t,this.index=i,this.x=s,this.y=o,this.viewEvent=r,this.type="graphic-pointer-out"}}class S{constructor(t,i,s,o,r){this.graphic=t,this.index=i,this.x=s,this.y=o,this.viewEvent=r,this.type="graphic-pointer-down"}}class k{constructor(t,i,s,o,r){this.graphic=t,this.index=i,this.x=s,this.y=o,this.viewEvent=r,this.type="graphic-pointer-up"}}const U="indicator-symbols";let D=class extends i.EventedAccessor{constructor(t){super(t),this._activeGraphic=null,this._dragEvent=null,this._hoverGraphic=null,this._indicators=[],this._initialDragGeometry=null,this._manipulators=[],this._layerViews=null,this.type="graphic-mover",this.callbacks={onGraphicClick(){},onGraphicDoubleClick(){},onGraphicMoveStart(){},onGraphicMove(){},onGraphicMoveStop(){},onGraphicPointerOver(){},onGraphicPointerOut(){},onGraphicPointerDown(){},onGraphicPointerUp(){}},this.enableMoveAllGraphics=!1,this.graphics=[],this.indicatorsEnabled=!1,this.layer=new a({listMode:"hide",internal:!0,title:"GraphicMover highlight layer"}),this.view=null}initialize(){h(this.view,this.layer),this._highlightHelper=new n({view:this.view}),this.refresh(),this.addHandles([o((()=>this.graphics.length),(()=>this.refresh())),r((()=>this.view?.ready),(()=>{this.addHandles([this.view.on("immediate-click",(t=>this._clickHandler(t)),m.TOOL),this.view.on("double-click",(t=>this._doubleClickHandler(t)),m.TOOL),this.view.on("pointer-down",(t=>this._pointerDownHandler(t)),m.TOOL),this.view.on("pointer-move",(t=>this._pointerMoveHandler(t)),m.TOOL),this.view.on("pointer-up",(t=>this._pointerUpHandler(t)),m.TOOL),this.view.on("drag",(t=>this._dragHandler(t)),m.TOOL),this.view.on("key-down",(t=>this._keyDownHandler(t)),m.TOOL)])}),{once:!0,initial:!0}),o((()=>this.view),(t=>{this._highlightHelper.removeAll(),this._highlightHelper.view=t}))])}destroy(){this._removeIndicators(),this.view.map?.remove(this.layer),this.layer.destroy(),this.reset(),this._manipulators.forEach((t=>t.destroy())),this._manipulators=null}set highlightsEnabled(t){this._highlightHelper?.removeAll(),this._set("highlightsEnabled",t),t&&this._highlightHelper?.add(this.graphics)}get state(){const t=this.view.ready,i=this.graphics.length>0,s=this._activeGraphic;return t&&i?s?"moving":"active":t?"ready":"disabled"}refresh(){this.reset(),this._setup()}reset(){this._activeGraphic=null,this._hoverGraphic=null,this._dragEvent=null,this._highlightHelper.removeAll()}updateGeometry(t,i){const s=this.graphics[t];s&&(s.set("geometry",i),this._setUpIndicators())}_setup(){this._setUpHighlights(),this._setUpIndicators(),this._setUpManipulators(),this._syncLayerViews()}_clickHandler(t){const i=this._findTargetGraphic(d(t));if(i){const s=new v(i,this.graphics.indexOf(i),t.x,t.y,t);this.emit("graphic-click",s),this.callbacks.onGraphicClick&&this.callbacks.onGraphicClick(s)}}_doubleClickHandler(t){const i=this._findTargetGraphic(d(t));if(i){const s=new b(i,this.graphics.indexOf(i),t.x,t.y,t);this.emit("graphic-double-click",s),this.callbacks.onGraphicDoubleClick&&this.callbacks.onGraphicDoubleClick(s)}}_pointerDownHandler(t){const i=this._findTargetGraphic(d(t));if(i){this._activeGraphic=i;const{x:s,y:o}=t,r=new S(i,this.graphics.indexOf(i),s,o,t);this.emit("graphic-pointer-down",r),this.callbacks.onGraphicPointerDown&&this.callbacks.onGraphicPointerDown(r)}else this._activeGraphic=null}_pointerUpHandler(t){if(this._activeGraphic){const{x:i,y:s}=t,o=this.graphics.indexOf(this._activeGraphic),r=new k(this._activeGraphic,o,i,s,t);this.emit("graphic-pointer-up",r),this.callbacks.onGraphicPointerUp&&this.callbacks.onGraphicPointerUp(r)}}_pointerMoveHandler(t){if(this._dragEvent)return;const i=this._findTargetGraphic(d(t));if(i){const{x:s,y:o}=t;if(this._hoverGraphic){if(this._hoverGraphic===i)return;const r=this.graphics.indexOf(this._hoverGraphic),e=new x(this.graphics[r],r,s,o,t);this._hoverGraphic=null,this.emit("graphic-pointer-out",e),this.callbacks.onGraphicPointerOut&&this.callbacks.onGraphicPointerOut(e)}const r=this.graphics.indexOf(i),e=new G(i,r,s,o,t);return this._hoverGraphic=i,this.emit("graphic-pointer-over",e),void(this.callbacks.onGraphicPointerOver&&this.callbacks.onGraphicPointerOver(e))}if(this._hoverGraphic){const{x:i,y:s}=t,o=this.graphics.indexOf(this._hoverGraphic),r=new x(this.graphics[o],o,i,s,t);this._hoverGraphic=null,this.emit("graphic-pointer-out",r),this.callbacks.onGraphicPointerOut&&this.callbacks.onGraphicPointerOut(r)}}_dragHandler(t){if("start"!==t.action&&!this._dragEvent||!this._activeGraphic?.geometry)return;"start"===t.action&&this._removeIndicators(),t.stopPropagation();const{action:i,x:o,y:r}=t,e=this.graphics.indexOf(this._activeGraphic),p=this._dragEvent?o-this._dragEvent.x:0,a=this._dragEvent?r-this._dragEvent.y:0,n=o-t.origin.x,h=r-t.origin.y,c="start"===i?this._activeGraphic.geometry:this._initialDragGeometry,m=l(c,n,h,this.view);if(this._activeGraphic.geometry=m,this.enableMoveAllGraphics&&this.graphics.forEach((t=>{t!==this._activeGraphic&&(t.geometry=l(t.geometry,p,a,this.view))})),this._dragEvent=t,"start"===i){this._initialDragGeometry=s(c);const i=new f(this._activeGraphic,this.graphics,e,o,r,p,a,n,h,t);this.emit("graphic-move-start",i),this.callbacks.onGraphicMoveStart&&this.callbacks.onGraphicMoveStart(i),i.defaultPrevented&&this._activeGraphic.set("geometry",c)}else if("update"===i){const i=new _(this._activeGraphic,this.graphics,e,o,r,p,a,n,h,t);this.emit("graphic-move",i),this.callbacks.onGraphicMove&&this.callbacks.onGraphicMove(i),i.defaultPrevented&&(this._activeGraphic.geometry=c)}else{const i=new w(this._activeGraphic,this.graphics,e,o,r,p,a,n,h,t);this._dragEvent=null,this._activeGraphic=null,this._setUpIndicators(),this.emit("graphic-move-stop",i),this.callbacks.onGraphicMoveStop&&this.callbacks.onGraphicMoveStop(i),i.defaultPrevented&&(this.graphics[e].set("geometry",this._initialDragGeometry),this._setUpIndicators()),this._initialDragGeometry=null}}_keyDownHandler(t){"a"!==t.key&&"d"!==t.key&&"n"!==t.key||"moving"!==this.state||t.stopPropagation()}_findTargetGraphic(t){const i=this.view.toMap(t),s=this.graphics;let o=null,r=Number.MAX_VALUE;this._syncLayerViews();const e=this._layerViews.flatMap((t=>"graphicsViews"in t?Array.from(t.graphicsViews(),(t=>t.hitTest(i))).flat():t.graphicsView.hitTest(i))).filter((t=>s.includes(t))).sort(((t,i)=>s.indexOf(t)-s.indexOf(i)));return e.length?e[0]:(this._manipulators.forEach((i=>{const s=i.intersectionDistance(t);null!=s&&s<r&&(r=s,o=i.graphic)})),o)}_syncLayerViews(){this._layerViews=[];const t=new Set;for(const i of this.graphics){const s=c(this.view,i.layer);s&&t.add(s)}this._layerViews=[...t]}_setUpManipulators(){const{graphics:t,view:i}=this;this._manipulators.forEach((t=>t.destroy())),this._manipulators=t.length?t.map((t=>new y({graphic:t,view:i}))):[]}_setUpHighlights(){this.highlightsEnabled&&this._highlightHelper.add(this.graphics)}_setUpIndicators(){if(this._removeIndicators(),this.indicatorsEnabled){for(const t of this.graphics){const i=t.clone();i.symbol=this._getSymbolForIndicator(t),this._indicators.push(i),this.addHandles(o((()=>t.symbol),(()=>this._setUpIndicators())),U)}this.layer.addMany(this._indicators)}}_removeIndicators(){this.removeHandles(U),this._indicators.length&&(this.layer.removeMany(this._indicators),this._indicators.forEach((t=>t.destroy())),this._indicators=[])}_getSymbolForIndicator(t){if(null==t.symbol)return null;switch(t.symbol.type){case"cim":return new j({style:"circle",size:12,color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}});case"picture-marker":{const{xoffset:i,yoffset:s,height:o,width:r}=t.symbol,e=o===r?r:Math.max(o,r);return new j({xoffset:i,yoffset:s,size:e,style:"square",color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}})}case"simple-marker":{const{xoffset:i,yoffset:s,size:o,style:r}=t.symbol;return new j({xoffset:i,yoffset:s,style:"circle"===r?"circle":"square",size:o+2,color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}})}case"simple-fill":return new g({color:[0,0,0,0],outline:{style:"dash",color:[255,127,0,1],width:1}});case"simple-line":return new u({color:[255,127,0,1],style:"dash",width:1});case"text":{const{xoffset:i,yoffset:s}=t.symbol;return new j({xoffset:i,yoffset:s,size:12,color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}})}default:return null}}};t([e()],D.prototype,"_activeGraphic",void 0),t([e({readOnly:!0})],D.prototype,"type",void 0),t([e()],D.prototype,"callbacks",void 0),t([e()],D.prototype,"enableMoveAllGraphics",void 0),t([e()],D.prototype,"graphics",void 0),t([e({value:!1})],D.prototype,"highlightsEnabled",null),t([e()],D.prototype,"indicatorsEnabled",void 0),t([e()],D.prototype,"layer",void 0),t([e({readOnly:!0})],D.prototype,"state",null),t([e()],D.prototype,"view",void 0),D=t([p("esri.views.draw.support.GraphicMover")],D);const P=D;export{P as default};
