/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import{ClonableMixin as s}from"../core/Clonable.js";import t from"../core/Collection.js";import r from"../core/Error.js";import{l as o}from"../chunks/loadAll.js";import{M as i}from"../chunks/MultiOriginJSONSupport.js";import{debounce as p,throwIfAbortError as n,whenOrAbort as m}from"../core/promiseUtils.js";import{watch as a,sync as l}from"../core/reactiveUtils.js";import{sqlAnd as u}from"../core/sql.js";import{urlToObject as c,join as y}from"../core/urlUtils.js";import{property as j}from"../core/accessorSupport/decorators/property.js";import"../chunks/ensureType.js";import"../chunks/typedArrayUtil.js";import{r as h}from"../chunks/reader.js";import{subclass as d}from"../core/accessorSupport/decorators/subclass.js";import{O as b,n as f}from"../core/Accessor.js";import k from"./Layer.js";import{APIKeyMixin as g}from"./mixins/APIKeyMixin.js";import{A as S}from"../chunks/ArcGISService.js";import{BlendLayer as I}from"./mixins/BlendLayer.js";import{CustomParametersMixin as C}from"./mixins/CustomParametersMixin.js";import{E as L}from"../chunks/EditBusLayer.js";import{FeatureLayerBase as v}from"./mixins/FeatureLayerBase.js";import{OperationalLayer as U}from"./mixins/OperationalLayer.js";import{PortalLayer as P}from"./mixins/PortalLayer.js";import{RefreshableLayer as F}from"./mixins/RefreshableLayer.js";import{ScaleRangeLayer as w}from"./mixins/ScaleRangeLayer.js";import{TemporalLayer as x}from"./mixins/TemporalLayer.js";import{t as D}from"../chunks/arcgisLayerUrl.js";import{i as E}from"../chunks/commonProperties2.js";import{e as T,c as V,d as M,u as O,f as R,h as A,i as _,j as G,q,k as B,l as Q,m as H,n as $,o as N,p as z}from"../chunks/featureLayerUtils.js";import{d as J}from"../chunks/fieldProperties.js";import{fixTimeInfoFields as Z}from"./support/fieldUtils.js";import W from"./support/SubtypeSublayer.js";import K from"./support/TimeInfo.js";import{s as X}from"../chunks/versionUtils.js";import Y from"../rest/support/Query.js";import{S as ee}from"../chunks/interfaces.js";import"../core/lang.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/maybe.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../core/Handles.js";import"../chunks/metadata.js";import"../chunks/ObjectPool.js";import"../chunks/ObservableBase.js";import"../chunks/tracking.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../chunks/PooledArray.js";import"../chunks/time.js";import"../core/Evented.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../chunks/asyncUtils.js";import"../core/Loadable.js";import"../core/Promise.js";import"../core/JSONSupport.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../geometry/SpatialReference.js";import"../chunks/unitUtils.js";import"../chunks/jsonMap.js";import"../chunks/Ellipsoid.js";import"../chunks/assets.js";import"../request.js";import"../kernel.js";import"../chunks/writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/Axis.js";import"../chunks/extentUtils.js";import"../chunks/aaBoundingRect.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/vec3f64.js";import"../chunks/common.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../core/Identifiable.js";import"../chunks/jsonUtils.js";import"../chunks/parser.js";import"../chunks/colorUtils.js";import"../chunks/utils3.js";import"../chunks/screenUtils.js";import"../chunks/mat4.js";import"../chunks/_commonjsHelpers.js";import"../chunks/uuid.js";import"../chunks/layerContainerType.js";import"../geometry/HeightModelInfo.js";import"../chunks/timeZoneUtils.js";import"../chunks/datetime.js";import"./support/GeometryFieldsInfo.js";import"./support/LayerFloorInfo.js";import"./support/Relationship.js";import"../chunks/serviceCapabilitiesUtils.js";import"../chunks/jsonUtils2.js";import"./support/Subtype.js";import"../chunks/domains.js";import"./support/CodedValueDomain.js";import"../chunks/enumeration.js";import"./support/Domain.js";import"./support/InheritedDomain.js";import"./support/RangeDomain.js";import"../chunks/persistableUrlUtils.js";import"../TimeExtent.js";import"../chunks/timeUtils.js";import"../chunks/date.js";import"../chunks/locale.js";import"../support/timeUtils.js";import"../chunks/ElevationInfo.js";import"../chunks/unitConversionUtils.js";import"../chunks/lengthUtils.js";import"../intl.js";import"../chunks/messages.js";import"../chunks/arcadeOnDemand.js";import"../chunks/opacityUtils.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../Color.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"../chunks/utils4.js";import"../symbols/edges/Edges3D.js";import"../chunks/materialUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../chunks/lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"../chunks/utils5.js";import"../chunks/colors.js";import"../chunks/symbolLayerUtils3D.js";import"../chunks/aaBoundingBox.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../chunks/Symbol3DAnchorPosition2D.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"../chunks/collectionUtils.js";import"../portal/Portal.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"../chunks/Thumbnail.js";import"../chunks/calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"../chunks/urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../chunks/featureQueryAll.js";import"../chunks/DataLayerSource.js";import"./support/Field.js";import"../chunks/fieldType.js";import"../chunks/FullTextSearch.js";import"../chunks/QuantizationParameters.js";import"../rest/support/StatisticDefinition.js";import"../chunks/layerUtils2.js";import"../renderers/SimpleRenderer.js";import"../renderers/Renderer.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"../chunks/colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"../renderers/mixins/VisualVariablesMixin.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/VisualVariable.js";import"../chunks/LegendOptions.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/visualVariables/SizeVariable.js";import"../renderers/visualVariables/support/SizeStop.js";import"../chunks/visualVariableUtils.js";import"../Graphic.js";import"../PopupTemplate.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../popup/support/FieldInfoFormat.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../chunks/chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../chunks/compilerUtils.js";import"../chunks/commonProperties.js";import"../symbols/support/jsonUtils.js";import"../renderers/UniqueValueRenderer.js";import"../chunks/diffUtils.js";import"../renderers/support/UniqueValue.js";import"../renderers/support/UniqueValueClass.js";import"../renderers/support/UniqueValueGroup.js";import"../renderers/support/UniqueValueInfo.js";import"../chunks/styleUtils.js";import"../rest/support/AttachmentQuery.js";import"../rest/support/RelationshipQuery.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../chunks/portalItemUtils.js";import"../geometry/projection.js";import"../chunks/projectBuffer.js";import"../chunks/geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"../chunks/zscale.js";import"../TimeInterval.js";import"./support/FieldsIndex.js";import"../chunks/UnknownTimeZone.js";import"../renderers/ClassBreaksRenderer.js";import"../renderers/support/ClassBreakInfo.js";import"../renderers/DictionaryRenderer.js";import"../chunks/DictionaryLoader.js";import"../chunks/LRUCache.js";import"../chunks/MemCache.js";import"../chunks/Version.js";import"../renderers/DotDensityRenderer.js";import"../renderers/support/AttributeColorInfo.js";import"../renderers/HeatmapRenderer.js";import"../renderers/support/HeatmapColorStop.js";import"../chunks/heatmapUtils.js";import"../chunks/vec4.js";import"../chunks/vec4f64.js";import"../renderers/PieChartRenderer.js";import"../renderers/support/jsonUtils.js";import"../form/FormTemplate.js";import"../form/ExpressionInfo.js";import"../form/elements/GroupElement.js";import"../form/elements/Element.js";import"../form/support/elements.js";import"../form/elements/FieldElement.js";import"../form/elements/support/inputs.js";import"../form/elements/inputs/BarcodeScannerInput.js";import"../form/elements/inputs/TextInput.js";import"../form/elements/inputs/Input.js";import"../form/elements/inputs/ComboBoxInput.js";import"../form/elements/inputs/DatePickerInput.js";import"../form/elements/inputs/DateTimeOffsetPickerInput.js";import"../form/elements/inputs/DateTimePickerInput.js";import"../form/elements/inputs/RadioButtonsInput.js";import"../form/elements/inputs/SwitchInput.js";import"../form/elements/inputs/TextAreaInput.js";import"../form/elements/inputs/TextBoxInput.js";import"../form/elements/inputs/TimePickerInput.js";import"../form/elements/RelationshipElement.js";import"./support/FeatureTemplate.js";import"./support/LabelClass.js";import"../chunks/labelUtils.js";import"../chunks/defaults.js";import"../chunks/defaultsJSON.js";import"../chunks/labelingInfo.js";import"../support/popupUtils.js";const se="SubtypeGroupLayer";function te(e,s){return new r("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${s}`,{layer:e})}const re=J();let oe=class extends(v(L(I(x(w(F(S(U(P(i(C(g(s(k)))))))))))))){constructor(...e){super(...e),this._sublayersCollectionChanged=!1,this._sublayerLookup=new Map,this.fields=null,this.fieldsIndex=null,this.outFields=null,this.sublayers=new(t.ofType(W)),this.timeInfo=null,this.title="Layer",this.type="subtype-group",this._debouncedSaveOperations=p((async(e,s,t)=>{const{save:r,saveAs:o}=await import("../chunks/featureLayerUtils2.js");switch(e){case ee.SAVE:return r(this,s);case ee.SAVE_AS:return o(this,t,s)}})),this.addHandles(a((()=>this.sublayers),((e,s)=>this._handleSublayersChange(e,s)),l))}destroy(){this.source?.destroy()}normalizeCtorArgs(e,s){return"string"==typeof e?{url:e,...s}:e}load(e){const s=null!=e?e.signal:null,t=this.loadFromPortal({supportedTypes:["Feature Service"]},e).catch(n).then((async()=>{if(!this.url)throw new r("subtype-grouplayer:missing-url-or-source","SubtypeGroupLayer must be created with either a url or a portal item");if(null==this.layerId)throw new r("subtype-grouplayer:missing-layerid","layerId is required for a SubtypeGroupLayer created with url");return this._initLayerProperties(await this.createGraphicsSource(s))})).then((()=>T(this,"load",e)));return this.addResolvingPromise(t),Promise.resolve(this)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("gdbVersion"),this.commitProperty("historicMoment"),this.commitProperty("returnZ"),this.commitProperty("capabilities"),this.commitProperty("returnM"),(this._get("createQueryVersion")??0)+1}get editingEnabled(){return this.loaded&&null!=this.capabilities&&this.capabilities.operations.supportsEditing&&this.userHasEditingPrivileges}get effectiveEditingEnabled(){return V(this)}get parsedUrl(){const e=c(this.url);return null!=e&&null!=this.layerId&&(e.path=y(e.path,this.layerId.toString())),e}set source(e){this._get("source")!==e&&this._set("source",e)}readTitleFromService(e,{name:s}){return this.url?D(this.url,s):s}async addAttachment(e,s){return M(this,e,s,se)}async updateAttachment(e,s,t){return O(this,e,s,t,se)}async applyEdits(e,s){return R(this,e,s)}on(e,s){return super.on(e,s)}async createGraphicsSource(e){const{default:s}=await m(import("../chunks/FeatureLayerSource.js"),e);return new s({layer:this}).load({signal:e})}createQuery(){const e=A(this),s=this.sublayers.map((e=>e.subtypeCode));return e.where=u(`${this.subtypeField} IN (${s.join(",")})`,this.definitionExpression),e}async deleteAttachments(e,s){return _(this,e,s,se)}async fetchRecomputedExtents(e){return G(this,e,se)}findSublayerForFeature(e){const s=this.fieldsIndex.get(this.subtypeField),t=e.attributes[s.name];return this.findSublayerForSubtypeCode(t)}findSublayerForSubtypeCode(e){return this._sublayerLookup.get(e)}getFieldDomain(e,s){return this._getLayerDomain(e)}getField(e){return this.fieldsIndex.get(e)}loadAll(){return o(this,(e=>{e(this.sublayers)}))}async queryAttachments(e,s){return q(this,e,s,se)}async queryFeatures(e,s){const t=await this.load(),r=Y.from(e)??t.createQuery(),o=r.outFields??[];o.includes(this.subtypeField)||(o.push(this.subtypeField),r.outFields=o);const i=await t.source.queryFeatures(r,s);if(i?.features)for(const e of i.features)e.layer=e.sourceLayer=this.findSublayerForFeature(e);return i}async queryObjectIds(e,s){return B(this,e,s,se)}async queryFeatureCount(e,s){return Q(this,e,s,se)}async queryExtent(e,s){return H(this,e,s,se)}async queryRelatedFeatures(e,s){return $(this,e,s,se)}async queryRelatedFeaturesCount(e,s){return N(this,e,s,se)}async save(e){return this._debouncedSaveOperations(ee.SAVE,e)}async saveAs(e,s){return this._debouncedSaveOperations(ee.SAVE_AS,s,e)}write(e,s){const{origin:t,layerContainerType:o,messages:i}=s;if(this.isTable){if("web-scene"===t||"web-map"===t&&"tables"!==o)return i?.push(te(this,"using a table source cannot be written to web scenes and web maps")),null}else if(this.loaded&&"web-map"===t&&"tables"===o)return i?.push(te(this,"using a non-table source cannot be written to tables in web maps")),null;return this.sublayers?.length?super.write(e,s):(i?.push(new r("web-document-write:invalid-property",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' has invalid value for 'sublayers' property. 'sublayers' collection should contain at least one sublayer`,{layer:this})),null)}serviceSupportsSpatialReference(e){return!!this.loaded&&X(this,e)}_getLayerDomain(e){const s=this.fieldsIndex.get(e);return s?s.domain:null}async _initLayerProperties(e){this._set("source",e);const{sourceJSON:s}=e;if(s&&(this.sourceJSON=s,this.read(s,{origin:"service",url:this.parsedUrl})),this.isTable)throw new r("subtype-grouplayer:unsupported-source","SubtypeGroupLayer cannot be created using a layer with table source");if(!this.subtypes?.length)throw new r("subtype-grouplayer:missing-subtypes","SubtypeGroupLayer must be created using a layer with subtypes");this._verifyFields(),Z(this.timeInfo,this.fieldsIndex)}async hasDataChanged(){return z(this)}_verifyFields(){const e=this.parsedUrl?.path??"undefined";this.objectIdField||console.log("SubtypeGroupLayer: 'objectIdField' property is not defined (url: "+e+")"),this.isTable||-1!==e.search(/\/FeatureServer\//i)||this.fields?.some((e=>"geometry"===e.type))||console.log("SubtypeGroupLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: "+e+")")}_handleSublayersChange(e,s){s&&(s.forEach((e=>{e.parent=null})),this.removeHandles("sublayers-owner"),this._sublayerLookup.clear()),e&&(e.forEach((e=>{e.parent=this,this._sublayerLookup.set(e.subtypeCode,e)})),this._sublayersCollectionChanged=!1,this.addHandles([e.on("after-add",(({item:e})=>{e.parent=this,this._sublayerLookup.set(e.subtypeCode,e)})),e.on("after-remove",(({item:e})=>{e.parent=null,this._sublayerLookup.delete(e.subtypeCode)})),e.on("after-changes",(()=>{this._sublayersCollectionChanged=!0}))],"sublayers-owner"))}};e([j({readOnly:!0})],oe.prototype,"createQueryVersion",null),e([j({readOnly:!0})],oe.prototype,"editingEnabled",null),e([j({readOnly:!0})],oe.prototype,"effectiveEditingEnabled",null),e([j({...re.fields,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}})],oe.prototype,"fields",void 0),e([j(re.fieldsIndex)],oe.prototype,"fieldsIndex",void 0),e([j(E)],oe.prototype,"id",void 0),e([j({type:["show","hide","hide-children"],json:{origins:{"portal-item":{read:!1,write:!1}}}})],oe.prototype,"listMode",void 0),e([j({value:"SubtypeGroupLayer",type:["SubtypeGroupLayer"],json:{origins:{"portal-item":{name:"layerType",write:{enabled:!0,ignoreOrigin:!0}}}}})],oe.prototype,"operationalLayerType",void 0),e([j(re.outFields)],oe.prototype,"outFields",void 0),e([j({readOnly:!0})],oe.prototype,"parsedUrl",null),e([j({clonable:!1})],oe.prototype,"source",null),e([j({type:t.ofType(W),json:{origins:{service:{read:{source:"subtypes",reader:(e,s,r)=>{const o=e.map((({code:e})=>{const t=new W({subtypeCode:e});return t.read(s,r),t}));return new(t.ofType(W))(o)}}}},name:"layers",write:{overridePolicy(e,s,t){const r=this.originOf("sublayers"),o=b.PORTAL_ITEM;let i=!0;if(f(r)===o&&f(t.origin)>o){const s=e.some((e=>e.hasUserOverrides()));i=this._sublayersCollectionChanged||s}return{enabled:i,ignoreOrigin:!0}}}}})],oe.prototype,"sublayers",void 0),e([j({type:K})],oe.prototype,"timeInfo",void 0),e([j({json:{origins:{"portal-item":{write:{enabled:!0,ignoreOrigin:!0,writerEnsuresNonNull:!0}}}}})],oe.prototype,"title",void 0),e([h("service","title",["name"])],oe.prototype,"readTitleFromService",null),e([j({json:{read:!1}})],oe.prototype,"type",void 0),oe=e([d("esri.layers.SubtypeGroupLayer")],oe);const ie=oe;export{ie as default};