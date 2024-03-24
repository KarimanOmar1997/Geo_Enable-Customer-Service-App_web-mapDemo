/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import o from"../core/Collection.js";import{L as r}from"./Logger.js";import{whenOnce as i}from"../core/reactiveUtils.js";import{property as s}from"../core/accessorSupport/decorators/property.js";import"./ensureType.js";import"./typedArrayUtil.js";import{subclass as e}from"../core/accessorSupport/decorators/subclass.js";import{l as p}from"./layerUtils2.js";import{L as m}from"./LayerView3D.js";import{T as l}from"./TiledLayerView3D.js";import j from"../views/layers/LayerView.js";import{R as a}from"./RefreshableLayerView.js";import"../core/Accessor.js";import"../core/Handles.js";import"./maybe.js";import"./metadata.js";import"../core/lang.js";import"./utils.js";import"./handleUtils.js";import"./ObjectPool.js";import"./ObservableBase.js";import"./tracking.js";import"../core/scheduling.js";import"./nextTick.js";import"./PooledArray.js";import"../core/promiseUtils.js";import"../core/Error.js";import"../config.js";import"./time.js";import"../core/Evented.js";import"./shared.js";import"./SimpleObservable.js";import"./asyncUtils.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/JSONSupport.js";import"../request.js";import"./heightModelInfoUtils.js";import"../geometry/HeightModelInfo.js";import"./jsonMap.js";import"./unitUtils.js";import"./Ellipsoid.js";import"./assets.js";import"./reader.js";import"./writer.js";import"./arcgisLayerUrl.js";import"./persistableUrlUtils.js";import"../views/SceneView.js";import"../Camera.js";import"../core/Clonable.js";import"./Cyclical.js";import"./mathUtils.js";import"./vec3.js";import"./vec3f64.js";import"./common.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/Point.js";import"../geometry/Geometry.js";import"../geometry/SpatialReference.js";import"../geometry/support/webMercatorUtils.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./Axis.js";import"./extentUtils.js";import"./aaBoundingRect.js";import"../geometry/Polyline.js";import"./typeUtils.js";import"../geometry/support/jsonUtils.js";import"../Graphic.js";import"../PopupTemplate.js";import"../layers/support/fieldUtils.js";import"../core/sql.js";import"../intl.js";import"./date.js";import"./locale.js";import"./timeZoneUtils.js";import"./datetime.js";import"./messages.js";import"./arcadeOnDemand.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"./enumeration.js";import"../popup/support/FieldInfoFormat.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../Color.js";import"./colorUtils.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"./chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../core/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"./utils4.js";import"../symbols/edges/Edges3D.js";import"./screenUtils.js";import"./materialUtils.js";import"./opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"./Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"./lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"./utils5.js";import"./colors.js";import"./symbolLayerUtils3D.js";import"./aaBoundingBox.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"./Symbol3DAnchorPosition2D.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"./collectionUtils.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../core/Promise.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"./Thumbnail.js";import"./calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"./urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../Viewpoint.js";import"./domUtils.js";import"../core/workers/workers.js";import"../core/workers/Connection.js";import"./Queue.js";import"../core/workers/RemoteClient.js";import"./GraphicsCollection.js";import"../geometry/projection.js";import"./projectBuffer.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"./zscale.js";import"./projectBoundingRect.js";import"./projectPointToVector.js";import"./projectVectorToVector.js";import"./boundedPlane.js";import"./vector.js";import"./ByteSizeUnit.js";import"./mat3f64.js";import"./mat4f64.js";import"./quatf64.js";import"./vec2f64.js";import"./vec4f64.js";import"./mat4.js";import"./lineSegment.js";import"./plane.js";import"./mathUtils2.js";import"./coordinateSystem.js";import"./spatialReferenceEllipsoidUtils.js";import"./sphere.js";import"./vec4.js";import"./scaleUtils.js";import"./LayerConstants.js";import"../views/View.js";import"../Map.js";import"../Basemap.js";import"./loadAll.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../support/BasemapStyle.js";import"./writeUtils.js";import"../Ground.js";import"./compilerUtils.js";import"./CollectionFlattener.js";import"./editableLayers.js";import"./infoFor3D.js";import"./basemapUtils.js";import"./utils3.js";import"./collectionUtils2.js";import"../support/LayersMixin.js";import"../layers/Layer.js";import"../support/TablesMixin.js";import"../TimeExtent.js";import"./timeUtils.js";import"./UpdatingHandles.js";import"../views/BasemapView.js";import"../views/Magnifier.js";import"../views/Theme.js";import"./InputManager.js";import"./PropertiesPool.js";import"../core/signal.js";import"./ViewEvents.js";import"./IViewEvents.js";import"./interfaces5.js";import"./screenUtils2.js";import"../views/input/Input.js";import"../views/input/gamepad/GamepadSettings.js";import"../views/input/gamepad/GamepadInputDevice.js";import"../views/navigation/Navigation.js";import"../views/navigation/gamepad/GamepadSettings.js";import"./ViewingMode.js";import"./projectionUtils.js";import"../views/BreakpointsOwner.js";import"../views/DOMContainer.js";import"./projector.js";import"./widgetUtils.js";import"../views/GroundView.js";import"./cameraUtils.js";import"./projectPointToVectorWithEngine.js";import"./dehydratedPoint.js";import"./projectVectorToPoint.js";import"./Intersector2.js";import"./verticalOffsetUtils.js";import"./mat3.js";import"./orientedBoundingBox.js";import"./quat.js";import"./Attribute.js";import"./earthUtils.js";import"./ElevationProvider.js";import"./dehydratedFeatureUtils.js";import"./spatialReferenceSupport.js";import"../layers/support/ElevationSampler.js";import"./TerrainConst.js";import"../layers/support/LOD.js";import"../layers/support/TileInfo.js";import"./TileKey.js";import"../views/PopupView.js";import"../views/ViewAnimation.js";import"../views/3d/environment/SunLighting.js";import"../webscene/SunLighting.js";import"../views/3d/environment/VirtualLighting.js";import"../webscene/VirtualLighting.js";import"../webscene/Environment.js";import"../views/3d/environment/SunnyWeather.js";import"./weather.js";import"../views/3d/environment/CloudyWeather.js";import"../views/3d/environment/FoggyWeather.js";import"../views/3d/environment/RainyWeather.js";import"../views/3d/environment/SnowyWeather.js";import"./lightingTypes.js";import"../webscene/background/Background.js";import"../webscene/background/ColorBackground.js";import"./projectPointToWGS84ComparableLonLat.js";import"./projectVectorToWGS84ComparableLonLat.js";import"./colorUtils2.js";import"./vec2.js";import"./EvaluateAmbientLighting.glsl.js";import"./Float3PassUniform.js";import"./ShaderBuilder.js";import"./Util.js";import"./interfaces3.js";import"./PiUtils.glsl.js";import"./RgbaFloat16Encoding.glsl.js";import"./Float4PassUniform.js";import"./IntegerPassUniform.js";import"./Texture2DPassUniform.js";import"./VertexAttribute.js";import"./View.glsl.js";import"./FloatPassUniform.js";import"./Matrix4PassUniform.js";import"./Texture2DDrawUniform.js";import"./basicInterfaces.js";import"./ReadLinearDepth.glsl.js";import"./WaterSurface.glsl.js";import"./ForwardLinearDepth.glsl.js";import"./ShaderOutput.js";import"./Matrix3PassUniform.js";import"./Float2PassUniform.js";import"./Slice.glsl.js";import"./Transform.glsl.js";import"./ObjectAndLayerIdColor.glsl.js";import"./OutputHighlight.glsl.js";import"./ColorConversion.glsl.js";import"./NormalUtils.glsl.js";import"./axisAngleDegrees.js";import"./RenderState.js";import"./BooleanPassUniform.js";import"./AlphaCutoff.js";import"./TransparencyPassType.js";import"./Program2.js";import"./enums3.js";import"./Texture.js";import"./contextUtils.js";import"./Material.js";import"./ContentObject.js";import"./renderState2.js";import"./ShaderTechniqueConfiguration.js";import"./SceneLighting.js";import"./MemCache.js";import"./FramebufferObject.js";import"./BufferObject.js";import"./RenderGeometry.js";import"./FloatsPassUniform.js";import"./lengthUtils.js";import"./OverlayCompositing.glsl.js";import"./ScreenSpacePass.glsl.js";import"./VertexNormal.glsl.js";import"./TextureOnly.glsl.js";import"./NestedMap.js";import"./RenderPlugin.js";import"./Camera.js";import"./frustum.js";import"./VertexElementDescriptor.js";import"./VertexArrayObject2.js";import"./VertexArrayObject.js";import"./Geometry.js";import"./Indices.js";import"./triangle.js";import"./doublePrecisionUtils.js";import"./TriangleMaterial.js";import"./Octree.js";import"./InterleavedLayout.js";import"./BufferView.js";import"./types.js";import"./DefaultBufferWriter.js";import"./RenderSlot.js";import"./MarkerSizing.glsl.js";import"./VisualVariables.glsl.js";import"./floatRGBA.js";import"./Texture2.js";import"./InstancedDoublePrecision.glsl.js";import"./requestImageUtils.js";import"./RibbonLine.glsl.js";import"./OutputDepth.glsl.js";import"./OrderIndependentTransparency.js";import"./MultipassGeometryTest.glsl.js";import"./Intersector.js";import"./glUtil.js";import"./DefaultLayouts.js";import"./Scheduler.js";import"./debugFlags.js";import"./vec3f32.js";import"./GeometryUtil.js";import"./DoubleArray.js";import"./ShadowCastVisualizeTechniqueConfiguration.js";import"./_commonjsHelpers.js";import"./ElevationQuery2.js";import"./ElevationContext.js";import"./computeTranslationToOriginAndRotation.js";import"./graphicUtils.js";import"./hydratedFeatures.js";import"./unitConversionUtils.js";import"./vec2f32.js";import"./LineCallout.glsl.js";import"./HUDVisibility.glsl.js";import"./VerticalOffset.glsl.js";import"./dehydratedFeatures.js";import"./quantizationUtils.js";import"../layers/support/Field.js";import"./domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"./fieldType.js";import"./featureConversionUtils.js";import"./OptimizedFeature.js";import"./OptimizedFeatureSet.js";import"./OptimizedGeometry.js";import"./edgeUtils.js";import"./earcut.js";import"./vec32.js";import"./SnappingCandidate.js";import"./visualVariableUtils.js";import"./triangulationUtils.js";import"./deduplicate.js";import"./objectResourceUtils.js";import"./devEnvironmentUtils.js";import"./DefaultMaterial_COLOR_GAMMA.js";import"./Version.js";import"./resourceUtils2.js";import"./mat3f32.js";import"./Normals.glsl.js";import"./GLTextureMaterial.js";import"./DefaultMaterial.glsl.js";import"./MixExternalColor.glsl.js";import"./symbolColorUtils.js";import"./DiscardOrAdjustAlphaBlend.glsl.js";import"./VertexColor.glsl.js";import"./EvaluateSceneLighting.glsl.js";import"./SSAOBlur.glsl.js";import"./SSAO.glsl.js";import"./CameraSpace.glsl.js";import"./RenderFeature.js";import"./RealisticTree.glsl.js";import"./utils8.js";import"./jsonUtils.js";import"./parser.js";import"../symbols/support/cimSymbolUtils.js";import"./utils9.js";import"./LRUCache.js";import"./callExpressionWithFeature.js";import"./HUDMaterial.js";import"./HUDMaterial.glsl.js";import"./line.js";import"./line2.js";import"./LineMarkerMaterial.js";import"./LineMarker.glsl.js";import"./lineStippleUtils.js";import"./projectVectorToDehydratedPoint.js";import"../geometry/support/MeshComponent.js";import"../geometry/support/MeshMaterial.js";import"../geometry/support/MeshTexture.js";import"./imageUtils.js";import"../geometry/support/MeshTextureTransform.js";import"../geometry/support/MeshMaterialMetallicRoughness.js";import"./georeference.js";import"../geometry/support/MeshGeoreferencedRelativeVertexSpace.js";import"../geometry/support/MeshGeoreferencedVertexSpace.js";import"../geometry/support/MeshLocalVertexSpace.js";import"../geometry/support/MeshTransform.js";import"./interfaces6.js";import"./NativeLine.glsl.js";import"./styleUtils.js";import"./webStyleSymbolUtils.js";import"../symbols/support/jsonUtils.js";import"./Intersector4.js";import"./Path.glsl.js";import"./ColorMaterial.js";import"./ColorMaterial.glsl.js";import"./Pattern.glsl.js";import"./fontUtils.js";import"./ray.js";import"./WebGLRequirements.js";import"./capabilities2.js";import"./Frustum2.js";import"./viewpointUtils.js";import"./ZoomMomentumEstimator.js";import"./labelFormatUtils.js";import"./labelUtils.js";import"./FeatureTileDescriptor3D.js";import"./geometryServiceUtils.js";import"./project.js";import"./utils6.js";import"./utils7.js";import"../rest/support/ProjectParameters.js";import"./RenderCoordsHelper.js";import"../views/3d/support/SceneViewPerformanceInfo.js";import"../views/3d/support/LayerPerformanceInfo.js";import"./terrainUtils.js";import"../layers/mixins/RefreshableLayer.js";import"./layerContainerType.js";import"./ElevationQueryTileCache.js";import"./LercDecoder.js";import"./WorkerHandle.js";import"./RenderableTile.js";import"./enums2.js";import"./config.js";import"./TiledDisplayObject.js";import"./DisplayObject.js";import"./TileKey2.js";import"./ElevationSamplerData.js";import"./rasterUtils.js";import"./TileInfoView.js";import"./TileStrategy.js";import"./QueueProcessor.js";import"../views/2d/ViewState.js";import"./mat2d.js";import"./mat2df32.js";import"./mat2df64.js";import"../geometry/support/normalizeUtils.js";import"./normalizeUtilsCommon.js";import"./simplify.js";import"./StyleDefinition.js";import"./enums.js";import"./edgeProcessing.js";import"./resources2.js";import"./EdgeWorkerHandle.js";import"./workerHelper.js";import"./testSVGPremultipliedAlpha.js";import"./isWebGL2Context.js";import"./RenderingContext.js";import"./ProgramCache.js";import"./Program.js";import"./intersectorUtilsConversions.js";import"./Intersector3.js";import"./hitTestSelectUtils.js";import"./layerViewUtils.js";import"../views/ui/DefaultUI.js";import"../views/ui/UI.js";import"./themeUtils.js";import"../widgets/Attribution.js";import"../widgets/Widget.js";import"./uuid.js";import"./dom.js";import"./index.js";import"./jsxWidgetSupport.js";import"./legacyIcon.js";import"../widgets/Attribution/AttributionViewModel.js";import"./globalCss.js";import"./accessibleHandler.js";import"./messageBundle.js";import"./jsxFactory.js";import"../widgets/Compass.js";import"../widgets/Compass/CompassViewModel.js";import"../widgets/support/GoTo.js";import"../widgets/NavigationToggle.js";import"../widgets/NavigationToggle/NavigationToggleViewModel.js";import"../widgets/Zoom.js";import"./resources.js";import"../widgets/Zoom/ZoomViewModel.js";let n=class extends(a(l(m(j)))){constructor(){super(...arguments),this.type="wmts-3d"}initialize(){this._getCompatibleTileInfoMatrixSet((t=>this._getTileInfoSupportError(t.tileInfo,t.fullExtent)));const t=i((()=>this.view?.basemapTerrain?.tilingSchemeLocked)).then((()=>{const t=this._getCompatibleTileInfoMatrixSet((t=>this._getTileInfoError(t.tileInfo,t.fullExtent)));null!=t&&(null!==t.id&&this.layer.activeLayer.tileMatrixSetId!==t.id&&(this.layer.activeLayer.tileMatrixSetId=t.id),t.tileInfo&&(this.tileInfo=t.tileInfo),this.layer.fullExtent=t.fullExtent)}));this.addResolvingPromise(t),this.when((()=>this._postInitialize()))}get hasMixedImageFormats(){return!0}refresh(){this.emit("data-changed")}canResume(){if(!super.canResume())return!1;const t=this.layer.activeLayer.tileMatrixSet;return null!=t&&!this._getTileInfoError(t.tileInfo,t.fullExtent)}async doRefresh(){this.suspended||this.emit("data-changed")}_postInitialize(){this._updatingHandles.add((()=>this.layer?.activeLayer?.styleId),(()=>this.refresh())),this._updatingHandles.add((()=>this.layer?.activeLayer),(t=>{const o=this._getCompatibleTileInfoMatrixSet((t=>this._getTileInfoError(t.tileInfo,t.fullExtent)),!0);o&&null!=o.id&&t.tileMatrixSetId!==o.id&&(this.layer.activeLayer.tileMatrixSetId=o.id),this.notifyChange("suspended"),this.canResume()&&this.refresh()}))}_getCompatibleTileInfoMatrixSet(t,i=!1){const s=p(this.layer);if(null!=s){if(o.isCollection(s)){const o=s.find((o=>{const s=t(o);return null!=s&&(i?r.getLogger(this).error("The selected tile matrix set is not compatible with the view",s):this.addResolvingPromise(Promise.reject(s))),null==s}));return o}const e=t(s);return null!=e&&(i?r.getLogger(this).error("The selected tile matrix set is not compatible with the view",e):this.addResolvingPromise(Promise.reject(e))),s}return null}_getTileInfoError(t,o){return this._getTileInfoSupportError(t,o)||this._getTileInfoCompatibilityError(t,this.view.basemapTerrain.tilingScheme)}};t([s({readOnly:!0})],n.prototype,"hasMixedImageFormats",null),t([s()],n.prototype,"layer",void 0),t([s()],n.prototype,"suspended",void 0),t([s()],n.prototype,"tileInfo",void 0),n=t([e("esri.views.3d.layers.WMTSLayerView3d")],n);const c=n;export{c as default};
