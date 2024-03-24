/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import r from"../core/Error.js";import{whenOnce as e}from"../core/reactiveUtils.js";import{property as o}from"../core/accessorSupport/decorators/property.js";import"./ensureType.js";import"./typedArrayUtil.js";import{subclass as i}from"../core/accessorSupport/decorators/subclass.js";import{j as s}from"./rasterProjectionHelper.js";import{L as p}from"./LayerView3D.js";import{T as m}from"./TiledLayerView3D.js";import{R as l}from"../views/SceneView.js";import{I as a}from"./ImageryTileLayerView.js";import n from"../views/layers/LayerView.js";import{R as j}from"./RefreshableLayerView.js";import{a as c}from"./drapedUtils.js";import{g as u}from"./capabilities2.js";import"../core/lang.js";import"./Logger.js";import"../config.js";import"./asyncUtils.js";import"../core/Accessor.js";import"../core/Handles.js";import"./maybe.js";import"./metadata.js";import"./utils.js";import"./handleUtils.js";import"./ObjectPool.js";import"./ObservableBase.js";import"./tracking.js";import"../core/scheduling.js";import"./nextTick.js";import"./PooledArray.js";import"../core/promiseUtils.js";import"./time.js";import"../core/Collection.js";import"../core/Evented.js";import"./shared.js";import"./SimpleObservable.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../core/JSONSupport.js";import"./reader.js";import"../geometry/SpatialReference.js";import"./unitUtils.js";import"./jsonMap.js";import"./Ellipsoid.js";import"./assets.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"./writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./Axis.js";import"./extentUtils.js";import"./aaBoundingRect.js";import"./mathUtils.js";import"./vec3.js";import"./vec3f64.js";import"./common.js";import"../geometry/Polyline.js";import"./typeUtils.js";import"../geometry/support/jsonUtils.js";import"../geometry/projection.js";import"./projectBuffer.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"./zscale.js";import"./heightModelInfoUtils.js";import"../geometry/HeightModelInfo.js";import"./arcgisLayerUrl.js";import"./persistableUrlUtils.js";import"./terrainUtils.js";import"./layerUtils2.js";import"./ViewingMode.js";import"./Util.js";import"./vec2f64.js";import"./vec4.js";import"./vec4f64.js";import"./Scheduler.js";import"../core/signal.js";import"./debugFlags.js";import"./RenderState.js";import"./TerrainConst.js";import"../layers/support/LOD.js";import"../layers/support/TileInfo.js";import"./TileKey.js";import"../Camera.js";import"../core/Clonable.js";import"./Cyclical.js";import"../Graphic.js";import"../PopupTemplate.js";import"../layers/support/fieldUtils.js";import"../core/sql.js";import"../intl.js";import"./date.js";import"./locale.js";import"./timeZoneUtils.js";import"./datetime.js";import"./messages.js";import"./arcadeOnDemand.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"./enumeration.js";import"../popup/support/FieldInfoFormat.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../Color.js";import"./colorUtils.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"./chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../core/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"./utils4.js";import"../symbols/edges/Edges3D.js";import"./screenUtils.js";import"./materialUtils.js";import"./opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"./Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"./lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"./utils5.js";import"./colors.js";import"./symbolLayerUtils3D.js";import"./aaBoundingBox.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"./Symbol3DAnchorPosition2D.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"./collectionUtils.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../core/Promise.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"./Thumbnail.js";import"./calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"./urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../Viewpoint.js";import"./domUtils.js";import"../core/workers/workers.js";import"../core/workers/Connection.js";import"./Queue.js";import"../core/workers/RemoteClient.js";import"./GraphicsCollection.js";import"./projectBoundingRect.js";import"./projectPointToVector.js";import"./projectVectorToVector.js";import"./boundedPlane.js";import"./vector.js";import"./ByteSizeUnit.js";import"./mat3f64.js";import"./mat4f64.js";import"./quatf64.js";import"./mat4.js";import"./lineSegment.js";import"./plane.js";import"./mathUtils2.js";import"./coordinateSystem.js";import"./spatialReferenceEllipsoidUtils.js";import"./sphere.js";import"./scaleUtils.js";import"./LayerConstants.js";import"../views/View.js";import"../Map.js";import"../Basemap.js";import"./loadAll.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../support/BasemapStyle.js";import"./writeUtils.js";import"../Ground.js";import"./compilerUtils.js";import"./CollectionFlattener.js";import"./editableLayers.js";import"./infoFor3D.js";import"./basemapUtils.js";import"./utils3.js";import"./collectionUtils2.js";import"../support/LayersMixin.js";import"../layers/Layer.js";import"../support/TablesMixin.js";import"../TimeExtent.js";import"./timeUtils.js";import"./UpdatingHandles.js";import"../views/BasemapView.js";import"../views/Magnifier.js";import"../views/Theme.js";import"./InputManager.js";import"./PropertiesPool.js";import"./ViewEvents.js";import"./IViewEvents.js";import"./interfaces5.js";import"./screenUtils2.js";import"../views/input/Input.js";import"../views/input/gamepad/GamepadSettings.js";import"../views/input/gamepad/GamepadInputDevice.js";import"../views/navigation/Navigation.js";import"../views/navigation/gamepad/GamepadSettings.js";import"./projectionUtils.js";import"../views/BreakpointsOwner.js";import"../views/DOMContainer.js";import"./projector.js";import"./widgetUtils.js";import"../views/GroundView.js";import"./cameraUtils.js";import"./projectPointToVectorWithEngine.js";import"./dehydratedPoint.js";import"./projectVectorToPoint.js";import"./Intersector2.js";import"./verticalOffsetUtils.js";import"./mat3.js";import"./orientedBoundingBox.js";import"./quat.js";import"./Attribute.js";import"./earthUtils.js";import"./ElevationProvider.js";import"./dehydratedFeatureUtils.js";import"./spatialReferenceSupport.js";import"../layers/support/ElevationSampler.js";import"../views/PopupView.js";import"../views/ViewAnimation.js";import"../views/3d/environment/SunLighting.js";import"../webscene/SunLighting.js";import"../views/3d/environment/VirtualLighting.js";import"../webscene/VirtualLighting.js";import"../webscene/Environment.js";import"../views/3d/environment/SunnyWeather.js";import"./weather.js";import"../views/3d/environment/CloudyWeather.js";import"../views/3d/environment/FoggyWeather.js";import"../views/3d/environment/RainyWeather.js";import"../views/3d/environment/SnowyWeather.js";import"./lightingTypes.js";import"../webscene/background/Background.js";import"../webscene/background/ColorBackground.js";import"./projectPointToWGS84ComparableLonLat.js";import"./projectVectorToWGS84ComparableLonLat.js";import"./colorUtils2.js";import"./vec2.js";import"./EvaluateAmbientLighting.glsl.js";import"./Float3PassUniform.js";import"./ShaderBuilder.js";import"./interfaces3.js";import"./PiUtils.glsl.js";import"./RgbaFloat16Encoding.glsl.js";import"./Float4PassUniform.js";import"./IntegerPassUniform.js";import"./Texture2DPassUniform.js";import"./VertexAttribute.js";import"./View.glsl.js";import"./FloatPassUniform.js";import"./Matrix4PassUniform.js";import"./Texture2DDrawUniform.js";import"./basicInterfaces.js";import"./ReadLinearDepth.glsl.js";import"./WaterSurface.glsl.js";import"./ForwardLinearDepth.glsl.js";import"./ShaderOutput.js";import"./Matrix3PassUniform.js";import"./Float2PassUniform.js";import"./Slice.glsl.js";import"./Transform.glsl.js";import"./ObjectAndLayerIdColor.glsl.js";import"./OutputHighlight.glsl.js";import"./ColorConversion.glsl.js";import"./NormalUtils.glsl.js";import"./axisAngleDegrees.js";import"./BooleanPassUniform.js";import"./AlphaCutoff.js";import"./TransparencyPassType.js";import"./Program2.js";import"./enums3.js";import"./Texture.js";import"./contextUtils.js";import"./Material.js";import"./ContentObject.js";import"./renderState2.js";import"./ShaderTechniqueConfiguration.js";import"./SceneLighting.js";import"./MemCache.js";import"./FramebufferObject.js";import"./BufferObject.js";import"./RenderGeometry.js";import"./FloatsPassUniform.js";import"./lengthUtils.js";import"./OverlayCompositing.glsl.js";import"./ScreenSpacePass.glsl.js";import"./VertexNormal.glsl.js";import"./TextureOnly.glsl.js";import"./NestedMap.js";import"./RenderPlugin.js";import"./Camera.js";import"./frustum.js";import"./VertexElementDescriptor.js";import"./VertexArrayObject2.js";import"./VertexArrayObject.js";import"./Geometry.js";import"./Indices.js";import"./triangle.js";import"./doublePrecisionUtils.js";import"./TriangleMaterial.js";import"./Octree.js";import"./InterleavedLayout.js";import"./BufferView.js";import"./types.js";import"./DefaultBufferWriter.js";import"./RenderSlot.js";import"./MarkerSizing.glsl.js";import"./VisualVariables.glsl.js";import"./floatRGBA.js";import"./Texture2.js";import"./InstancedDoublePrecision.glsl.js";import"./requestImageUtils.js";import"./RibbonLine.glsl.js";import"./OutputDepth.glsl.js";import"./OrderIndependentTransparency.js";import"./MultipassGeometryTest.glsl.js";import"./Intersector.js";import"./glUtil.js";import"./DefaultLayouts.js";import"./vec3f32.js";import"./GeometryUtil.js";import"./DoubleArray.js";import"./ShadowCastVisualizeTechniqueConfiguration.js";import"./_commonjsHelpers.js";import"./ElevationQuery2.js";import"./ElevationContext.js";import"./computeTranslationToOriginAndRotation.js";import"./graphicUtils.js";import"./hydratedFeatures.js";import"./unitConversionUtils.js";import"./vec2f32.js";import"./LineCallout.glsl.js";import"./HUDVisibility.glsl.js";import"./VerticalOffset.glsl.js";import"./dehydratedFeatures.js";import"./quantizationUtils.js";import"../layers/support/Field.js";import"./domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"./fieldType.js";import"./featureConversionUtils.js";import"./OptimizedFeature.js";import"./OptimizedFeatureSet.js";import"./OptimizedGeometry.js";import"./edgeUtils.js";import"./earcut.js";import"./vec32.js";import"./SnappingCandidate.js";import"./visualVariableUtils.js";import"./triangulationUtils.js";import"./deduplicate.js";import"./objectResourceUtils.js";import"./devEnvironmentUtils.js";import"./DefaultMaterial_COLOR_GAMMA.js";import"./Version.js";import"./resourceUtils2.js";import"./mat3f32.js";import"./Normals.glsl.js";import"./GLTextureMaterial.js";import"./DefaultMaterial.glsl.js";import"./MixExternalColor.glsl.js";import"./symbolColorUtils.js";import"./DiscardOrAdjustAlphaBlend.glsl.js";import"./VertexColor.glsl.js";import"./EvaluateSceneLighting.glsl.js";import"./SSAOBlur.glsl.js";import"./SSAO.glsl.js";import"./CameraSpace.glsl.js";import"./RenderFeature.js";import"./RealisticTree.glsl.js";import"./utils8.js";import"./jsonUtils.js";import"./parser.js";import"../symbols/support/cimSymbolUtils.js";import"./utils9.js";import"./LRUCache.js";import"./callExpressionWithFeature.js";import"./HUDMaterial.js";import"./HUDMaterial.glsl.js";import"./line.js";import"./line2.js";import"./LineMarkerMaterial.js";import"./LineMarker.glsl.js";import"./lineStippleUtils.js";import"./projectVectorToDehydratedPoint.js";import"../geometry/support/MeshComponent.js";import"../geometry/support/MeshMaterial.js";import"../geometry/support/MeshTexture.js";import"./imageUtils.js";import"../geometry/support/MeshTextureTransform.js";import"../geometry/support/MeshMaterialMetallicRoughness.js";import"./georeference.js";import"../geometry/support/MeshGeoreferencedRelativeVertexSpace.js";import"../geometry/support/MeshGeoreferencedVertexSpace.js";import"../geometry/support/MeshLocalVertexSpace.js";import"../geometry/support/MeshTransform.js";import"./interfaces6.js";import"./NativeLine.glsl.js";import"./styleUtils.js";import"./webStyleSymbolUtils.js";import"../symbols/support/jsonUtils.js";import"./Intersector4.js";import"./Path.glsl.js";import"./ColorMaterial.js";import"./ColorMaterial.glsl.js";import"./Pattern.glsl.js";import"./fontUtils.js";import"./ray.js";import"./WebGLRequirements.js";import"./Frustum2.js";import"./viewpointUtils.js";import"./ZoomMomentumEstimator.js";import"./labelFormatUtils.js";import"./labelUtils.js";import"./FeatureTileDescriptor3D.js";import"./geometryServiceUtils.js";import"./project.js";import"./utils6.js";import"./utils7.js";import"../rest/support/ProjectParameters.js";import"./RenderCoordsHelper.js";import"../views/3d/support/SceneViewPerformanceInfo.js";import"../views/3d/support/LayerPerformanceInfo.js";import"../layers/mixins/RefreshableLayer.js";import"./layerContainerType.js";import"./ElevationQueryTileCache.js";import"./LercDecoder.js";import"./WorkerHandle.js";import"./RenderableTile.js";import"./enums2.js";import"./config.js";import"./TiledDisplayObject.js";import"./DisplayObject.js";import"./TileKey2.js";import"./ElevationSamplerData.js";import"./rasterUtils.js";import"./TileInfoView.js";import"./TileStrategy.js";import"./QueueProcessor.js";import"../views/2d/ViewState.js";import"./mat2d.js";import"./mat2df32.js";import"./mat2df64.js";import"../geometry/support/normalizeUtils.js";import"./normalizeUtilsCommon.js";import"./simplify.js";import"./StyleDefinition.js";import"./enums.js";import"./edgeProcessing.js";import"./resources2.js";import"./EdgeWorkerHandle.js";import"./workerHelper.js";import"./testSVGPremultipliedAlpha.js";import"./isWebGL2Context.js";import"./RenderingContext.js";import"./ProgramCache.js";import"./Program.js";import"./intersectorUtilsConversions.js";import"./Intersector3.js";import"./hitTestSelectUtils.js";import"./layerViewUtils.js";import"../views/ui/DefaultUI.js";import"../views/ui/UI.js";import"./themeUtils.js";import"../widgets/Attribution.js";import"../widgets/Widget.js";import"./uuid.js";import"./dom.js";import"./index.js";import"./jsxWidgetSupport.js";import"./legacyIcon.js";import"../widgets/Attribution/AttributionViewModel.js";import"./globalCss.js";import"./accessibleHandler.js";import"./messageBundle.js";import"./jsxFactory.js";import"../widgets/Compass.js";import"../widgets/Compass/CompassViewModel.js";import"../widgets/support/GoTo.js";import"../widgets/NavigationToggle.js";import"../widgets/NavigationToggle/NavigationToggleViewModel.js";import"../widgets/Zoom.js";import"./resources.js";import"../widgets/Zoom/ZoomViewModel.js";import"./commonProperties2.js";import"../support/timeUtils.js";import"./ElevationInfo.js";import"./popupUtils.js";let y=class extends(a(j(m(p(n))))){constructor(){super(...arguments),this.type="imagery-tile-3d",this.isAlignedMapTile=!0}initialize(){this.layer.increaseRasterJobHandlerUsage(),null==this.fullExtent&&this.addResolvingPromise(Promise.reject(new r("layerview:spatial-reference-incompatible","The layer extent cannot be projected to the view's spatial reference",{layer:this.layer})));const t=e((()=>this.view?.basemapTerrain?.tilingSchemeLocked)).then((()=>{const t=this.view.basemapTerrain.tilingScheme,r=this.layer.tileInfo,e=["png","png24","png32","jpg","mixed"].includes(r.format)&&t.compatibleWith(r);this.isAlignedMapTile=e;const o=e?r:t.toTileInfo();this.tileInfo=o,this._updatingHandles.add((()=>[this.layer.renderer,this.layer.interpolation,this.layer.bandIds,this.layer.multidimensionalDefinition,this.layer.multidimensionalSubset,this.layer.rasterFunction,this.timeExtent]),(()=>this.refresh()))}));this.addResolvingPromise(t)}destroy(){this.layer.decreaseRasterJobHandlerUsage(),this.view=null}get _blankTile(){const t=document.createElement("canvas"),r=t.getContext("2d"),[e,o]=this.tileInfo.size;return t.width=e,t.height=o,r.clearRect(0,0,e,o),r.getImageData(0,0,e,o)}get imageFormatIsOpaque(){return"jpg"===this.layer.tileInfo.format}get hasMixedImageFormats(){return"mixed"===this.layer.tileInfo.format}get dataLevelRange(){const t=this.layer.tileInfo,r=this.tileInfo.lodAt(0)?.scale,e=this.layer.tileInfo.lodAt(t.lods.length-1)?.scale;return this.levelRangeFromScaleRange(r,e)}_getfullExtent(){return s(this.layer.rasterInfo,null!=this.view.basemapTerrain?.spatialReference?this.view.basemapTerrain.spatialReference:this.view.spatialReference)}async fetchTile(t,r,e,o){const i=this.tileInfo,s=this._canSymbolizeInWebGL(),p={tileInfo:i,requestRawData:s,signal:o.signal,timeExtent:this.timeExtent,requestAsImageElement:this.isAlignedMapTile},m=await this.layer.fetchTile(t,r,e,p);if(m instanceof HTMLImageElement)return m;let a=m?.pixelBlock;if(null==a)return this._blankTile;if(!s&&(a=await this.layer.applyRenderer(m),null==a))return this._blankTile;const n=new l([t,r,e],a,i.size[0],i.size[1]);return s?(n.symbolizerRenderer=this.layer.symbolizer.rendererJSON,n.symbolizerParameters=this.layer.symbolizer.generateWebGLParameters(this._getSymbolizerOptions(t)),n.transformGrid=m.transformGrid):n.isRendereredSource=!0,n.interpolation=this.layer.interpolation,n.bandIds=this.layer.bandIds,n}_getSymbolizerOptions(t){const r=this.tileInfo.lodAt(t).resolution;return{pixelBlock:null,isGCS:null!=this.view.basemapTerrain?.spatialReference?this.view.basemapTerrain.spatialReference.isGeographic:this.view.spatialReference.isGeographic,resolution:{x:r,y:r},bandIds:this.layer.bandIds}}ensureSymbolizerParameters(t){this._canSymbolizeInWebGL()&&JSON.stringify(t.symbolizerRenderer)!==JSON.stringify(this.layer.symbolizer.rendererJSON)&&(t.symbolizerParameters=this.layer.symbolizer.generateWebGLParameters(this._getSymbolizerOptions(t.lij[0])))}createFetchPopupFeaturesQueryGeometry(t,r){return c(t,r,this.view)}refresh(){this.emit("data-changed")}async doRefresh(){this.suspended||this.emit("data-changed")}_canSymbolizeInWebGL(){const t=u("3d"),{symbolizer:r}=this.layer,e=r.lookup?.colormapLut?.indexedColormap,o=e&&e.length>4*(t.maxTextureSize||4906);return t.supportsTextureFloat&&r.canRenderInWebGL&&!o}};t([o({readOnly:!0})],y.prototype,"_blankTile",null),t([o({readOnly:!0})],y.prototype,"imageFormatIsOpaque",null),t([o({readOnly:!0})],y.prototype,"hasMixedImageFormats",null),t([o({readOnly:!0})],y.prototype,"dataLevelRange",null),y=t([i("esri.views.3d.layers.ImageryTileLayerView3D")],y);const d=y;export{d as default};
