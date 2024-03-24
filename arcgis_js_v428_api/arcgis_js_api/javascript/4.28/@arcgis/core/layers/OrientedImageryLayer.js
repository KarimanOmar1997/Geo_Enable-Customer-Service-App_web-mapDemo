/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import e from"../core/Error.js";import{J as o}from"../chunks/jsonMap.js";import{property as r}from"../core/accessorSupport/decorators/property.js";import{cast as i}from"../core/accessorSupport/decorators/cast.js";import{subclass as s}from"../core/accessorSupport/decorators/subclass.js";import n from"./FeatureLayer.js";import{ClonableMixin as p}from"../core/Clonable.js";import{JSONSupportMixin as a,JSONSupport as m}from"../core/JSONSupport.js";import"../chunks/ensureType.js";import"../chunks/typedArrayUtil.js";import l from"../core/Accessor.js";import{f as u}from"../chunks/requestPresets.js";import"../core/lang.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../chunks/tracking.js";import"../PopupTemplate.js";import"../core/Collection.js";import"../core/Evented.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../chunks/ObjectPool.js";import"../chunks/ObservableBase.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../chunks/PooledArray.js";import"../core/promiseUtils.js";import"../chunks/time.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../chunks/reader.js";import"../chunks/writer.js";import"./support/fieldUtils.js";import"../core/sql.js";import"../intl.js";import"../chunks/date.js";import"../chunks/locale.js";import"../chunks/timeZoneUtils.js";import"../chunks/datetime.js";import"../chunks/messages.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../chunks/assets.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/vec3f64.js";import"../chunks/common.js";import"../chunks/arcadeOnDemand.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../geometry/SpatialReference.js";import"../chunks/unitUtils.js";import"../chunks/Ellipsoid.js";import"../geometry/Point.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/Axis.js";import"../chunks/extentUtils.js";import"../chunks/aaBoundingRect.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../chunks/enumeration.js";import"../popup/support/FieldInfoFormat.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../Color.js";import"../chunks/colorUtils.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../chunks/chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../core/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../renderers/ClassBreaksRenderer.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"../chunks/utils4.js";import"../symbols/edges/Edges3D.js";import"../chunks/screenUtils.js";import"../chunks/materialUtils.js";import"../chunks/opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../chunks/lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"../chunks/utils5.js";import"../chunks/colors.js";import"../chunks/symbolLayerUtils3D.js";import"../chunks/aaBoundingBox.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../chunks/persistableUrlUtils.js";import"../chunks/Symbol3DAnchorPosition2D.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"../chunks/collectionUtils.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../core/Promise.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"../chunks/Thumbnail.js";import"../chunks/calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"../chunks/urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../core/reactiveUtils.js";import"../chunks/asyncUtils.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../renderers/Renderer.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"../chunks/colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"../renderers/mixins/VisualVariablesMixin.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/VisualVariable.js";import"../chunks/LegendOptions.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/visualVariables/SizeVariable.js";import"../renderers/visualVariables/support/SizeStop.js";import"../chunks/visualVariableUtils.js";import"../Graphic.js";import"../chunks/compilerUtils.js";import"../chunks/lengthUtils.js";import"../renderers/support/ClassBreakInfo.js";import"../chunks/commonProperties.js";import"../symbols/support/jsonUtils.js";import"../chunks/layerUtils2.js";import"../renderers/DictionaryRenderer.js";import"../chunks/DictionaryLoader.js";import"../chunks/LRUCache.js";import"../chunks/MemCache.js";import"../chunks/Version.js";import"./support/FieldsIndex.js";import"../chunks/UnknownTimeZone.js";import"../renderers/DotDensityRenderer.js";import"../renderers/support/AttributeColorInfo.js";import"../renderers/HeatmapRenderer.js";import"../renderers/support/HeatmapColorStop.js";import"../chunks/heatmapUtils.js";import"../chunks/vec4.js";import"../chunks/vec4f64.js";import"../renderers/PieChartRenderer.js";import"../renderers/SimpleRenderer.js";import"../renderers/UniqueValueRenderer.js";import"../chunks/diffUtils.js";import"../renderers/support/UniqueValue.js";import"../renderers/support/UniqueValueClass.js";import"../renderers/support/UniqueValueGroup.js";import"../renderers/support/UniqueValueInfo.js";import"../chunks/styleUtils.js";import"../renderers/support/jsonUtils.js";import"../chunks/MultiOriginJSONSupport.js";import"../chunks/layerContainerType.js";import"../form/FormTemplate.js";import"../form/ExpressionInfo.js";import"../form/elements/GroupElement.js";import"../form/elements/Element.js";import"../form/support/elements.js";import"../form/elements/FieldElement.js";import"../form/elements/support/inputs.js";import"../form/elements/inputs/BarcodeScannerInput.js";import"../form/elements/inputs/TextInput.js";import"../form/elements/inputs/Input.js";import"../form/elements/inputs/ComboBoxInput.js";import"../form/elements/inputs/DatePickerInput.js";import"../form/elements/inputs/DateTimeOffsetPickerInput.js";import"../form/elements/inputs/DateTimePickerInput.js";import"../form/elements/inputs/RadioButtonsInput.js";import"../form/elements/inputs/SwitchInput.js";import"../form/elements/inputs/TextAreaInput.js";import"../form/elements/inputs/TextBoxInput.js";import"../form/elements/inputs/TimePickerInput.js";import"../chunks/domains.js";import"./support/CodedValueDomain.js";import"./support/Domain.js";import"./support/InheritedDomain.js";import"./support/RangeDomain.js";import"../form/elements/RelationshipElement.js";import"./Layer.js";import"../core/workers/workers.js";import"../core/workers/Connection.js";import"../chunks/Queue.js";import"../core/workers/RemoteClient.js";import"../chunks/editsZScale.js";import"../chunks/queryZScale.js";import"../chunks/zscale.js";import"../rest/support/FeatureSet.js";import"./support/Field.js";import"../chunks/fieldType.js";import"./mixins/APIKeyMixin.js";import"../chunks/ArcGISService.js";import"../chunks/arcgisLayerUrl.js";import"./mixins/BlendLayer.js";import"../chunks/jsonUtils.js";import"../chunks/parser.js";import"../chunks/utils3.js";import"../chunks/mat4.js";import"../chunks/_commonjsHelpers.js";import"./mixins/CustomParametersMixin.js";import"../chunks/EditBusLayer.js";import"../chunks/uuid.js";import"./mixins/FeatureEffectLayer.js";import"./support/FeatureEffect.js";import"./support/FeatureFilter.js";import"../TimeExtent.js";import"../chunks/timeUtils.js";import"../rest/support/Query.js";import"../chunks/DataLayerSource.js";import"../chunks/FullTextSearch.js";import"../chunks/QuantizationParameters.js";import"../rest/support/StatisticDefinition.js";import"./mixins/FeatureLayerBase.js";import"../geometry/HeightModelInfo.js";import"../chunks/commonProperties2.js";import"../support/timeUtils.js";import"../chunks/ElevationInfo.js";import"../chunks/unitConversionUtils.js";import"../chunks/featureLayerUtils.js";import"../chunks/featureQueryAll.js";import"../rest/support/AttachmentQuery.js";import"../rest/support/RelationshipQuery.js";import"./support/GeometryFieldsInfo.js";import"./support/LayerFloorInfo.js";import"./support/Relationship.js";import"../chunks/serviceCapabilitiesUtils.js";import"../chunks/jsonUtils2.js";import"./support/Subtype.js";import"./mixins/FeatureReductionLayer.js";import"./support/AggregateField.js";import"./support/ExpressionInfo.js";import"../chunks/FeatureReduction.js";import"./support/FeatureReductionBinning.js";import"./support/LabelClass.js";import"../chunks/labelUtils.js";import"../chunks/defaults.js";import"../chunks/defaultsJSON.js";import"./support/FeatureReductionCluster.js";import"./support/FeatureReductionSelection.js";import"../chunks/clusterUtils.js";import"../chunks/MD5.js";import"./mixins/OperationalLayer.js";import"./mixins/OrderedLayer.js";import"./mixins/PortalLayer.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../chunks/portalItemUtils.js";import"../geometry/projection.js";import"../chunks/projectBuffer.js";import"../chunks/geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"./mixins/PublishableLayer.js";import"./support/PublishingInfo.js";import"./mixins/RefreshableLayer.js";import"./mixins/ScaleRangeLayer.js";import"./mixins/TemporalLayer.js";import"../TimeInterval.js";import"./support/TimeInfo.js";import"./support/FeatureTemplate.js";import"./support/FeatureType.js";import"../chunks/fieldProperties.js";import"../chunks/labelingInfo.js";import"../chunks/versionUtils.js";import"../chunks/styleUtils2.js";import"../rest/support/TopFeaturesQuery.js";import"../rest/support/TopFilter.js";import"../support/popupUtils.js";import"../chunks/interfaces.js";const c=[2155,2194,2204,2222,2223,2224,2225,2226,2227,2228,2229,2230,2231,2232,2233,2234,2235,2236,2237,2238,2239,2240,2241,2242,2243,2244,2245,2246,2247,2248,2249,2250,2251,2252,2253,2254,2255,2256,2257,2258,2259,2260,2261,2262,2263,2264,2265,2266,2267,2268,2269,2270,2271,2272,2273,2274,2275,2276,2277,2278,2279,2280,2281,2282,2283,2284,2285,2286,2287,2288,2289,2314,2867,2868,2869,2870,2871,2872,2873,2874,2875,2876,2877,2878,2879,2880,2881,2882,2883,2884,2885,2886,2887,2888,2889,2890,2891,2892,2893,2894,2895,2896,2897,2898,2899,2900,2901,2902,2903,2904,2905,2906,2907,2908,2909,2910,2911,2912,2913,2914,2915,2916,2917,2918,2919,2920,2921,2922,2923,2924,2925,2926,2927,2928,2929,2930,2964,2965,2966,2967,2968,2992,2994,3080,3089,3091,3102,3359,3359,3361,3363,3365,3366,3404,3407,3417,3418,3419,3420,3421,3422,3423,3424,3425,3426,3427,3428,3429,3430,3431,3432,3433,3434,3435,3436,3437,3438,3441,3442,3443,3444,3445,3446,3451,3452,3453,3454,3455,3456,3457,3458,3459,3479,3481,3483,3485,3487,3490,3492,3494,3496,3498,3500,3502,3504,3506,3508,3510,3512,3515,3517,3519,3521,3523,3525,3527,3529,3531,3533,3535,3537,3539,3541,3543,3545,3547,3549,3551,3553,3560,3561,3562,3563,3564,3565,3566,3567,3568,3569,3570,3582,3584,3586,3588,3590,3593,3598,3600,3605,3608,3610,3612,3614,3616,3618,3620,3622,3624,3626,3628,3630,3632,3634,3636,3640,3642,3644,3646,3648,3650,3652,3654,3656,3658,3660,3662,3664,3668,3670,3672,3674,3676,3677,3679,3680,3682,3683,3686,3688,3690,3692,3696,3698,3700,3728,3729,3730,3731,3732,3733,3734,3735,3736,3737,3738,3739,3753,3754,3755,3756,3757,3758,3759,3760,3991,3992,4217,4399,4400,4401,4402,4403,4404,4405,4406,4407,4408,4409,4410,4411,4412,4413,4418,4419,4420,4421,4422,4423,4424,4425,4426,4427,4428,4429,4430,4431,4432,4433,4438,4439,4455,4456,4457,5466,5588,5589,5623,5624,5625,5646,5654,5655,6128,6129,6141,6200,6201,6202,6391,6405,6407,6409,6411,6413,6416,6418,6420,6422,6424,6426,6428,6430,6432,6434,6436,6438,6441,6443,6445,6447,6449,6451,6453,6455,6457,6459,6461,6463,6465,6467,6469,6471,6473,6475,6477,6479,6484,6486,6488,6490,6492,6494,6496,6499,6501,6503,6505,6507,6510,6515,6517,6519,6521,6523,6525,6527,6529,6531,6533,6535,6537,6539,6541,6543,6545,6547,6549,6551,6553,6555,6557,6559,6561,6563,6565,6568,6570,6572,6574,6576,6578,6582,6584,6586,6588,6590,6593,6595,6597,6599,6601,6603,6605,6607,6609,6612,6614,6616,6618,6625,6626,6627,6633,6785,6787,6789,6791,6793,6795,6797,6799,6801,6803,6805,6807,6809,6811,6813,6815,6817,6819,6821,6823,6825,6827,6829,6831,6833,6835,6837,6839,6841,6843,6845,6847,6849,6851,6853,6855,6857,6859,6861,6863,6868,6880,6885,6887,6923,6925,6966,6997,7057,7058,7059,7060,7061,7062,7063,7064,7065,7066,7067,7068,7069,7070,7119,7120,7121,7122,7123,7124,7125,7126,7127,7128,7132,7258,7260,7262,7264,7266,7268,7270,7272,7274,7276,7278,7280,7282,7284,7286,7288,7290,7292,7294,7296,7298,7300,7302,7304,7306,7308,7310,7312,7314,7316,7318,7320,7322,7324,7326,7328,7330,7332,7334,7336,7338,7340,7342,7344,7346,7348,7350,7352,7354,7356,7358,7360,7362,7364,7366,7368,7370,7558,7587,7588,7589,7590,7591,7592,7593,7594,7595,7596,7597,7598,7599,7600,7601,7602,7603,7604,7605,7606,7607,7608,7609,7610,7611,7612,7613,7614,7615,7616,7617,7618,7619,7620,7621,7622,7623,7624,7625,7626,7627,7628,7629,7630,7631,7632,7633,7634,7635,7636,7637,7638,7639,7640,7641,7642,7643,7644,7645,24100,26729,26730,26731,26732,26733,26734,26735,26736,26737,26738,26739,26740,26741,26742,26743,26744,26745,26746,26747,26748,26749,26750,26751,26752,26753,26754,26755,26756,26757,26758,26759,26760,26766,26767,26768,26769,26770,26771,26772,26773,26774,26775,26776,26777,26778,26779,26780,26781,26782,26783,26784,26785,26786,26787,26791,26792,26793,26794,26795,26796,26797,26798,26799,26801,26802,26803,26811,26812,26813,26814,26815,26819,26820,26821,26822,26825,26826,26830,26831,26832,26833,26836,26837,26841,26842,26843,26844,26847,26848,26849,26850,26851,26852,26853,26854,26855,26856,26857,26858,26859,26860,26861,26862,26863,26864,26865,26866,26867,26868,26869,26870,32001,32002,32003,32005,32006,32007,32008,32009,32010,32011,32012,32013,32014,32015,32016,32017,32018,32019,32020,32021,32022,32023,32024,32025,32026,32027,32028,32029,32030,32031,32033,32034,32035,32036,32037,32038,32039,32040,32041,32042,32043,32044,32045,32046,32047,32048,32049,32050,32051,32052,32053,32054,32055,32056,32057,32058,32064,32065,32066,32067,32074,32075,32076,32077,32099,32164,32165,32166,32167,32664,32665,32666,32667,65061,102120,102121,102629,102630,102631,102632,102633,102634,102635,102636,102637,102638,102639,102640,102641,102642,102643,102644,102645,102646,102648,102649,102650,102651,102652,102653,102654,102655,102656,102657,102658,102659,102660,102661,102662,102663,102664,102665,102666,102667,102668,102669,102670,102671,102672,102673,102674,102675,102676,102677,102678,102679,102680,102681,102682,102683,102684,102685,102686,102687,102688,102689,102690,102691,102692,102693,102694,102695,102696,102697,102698,102700,102704,102707,102708,102709,102710,102711,102712,102713,102714,102715,102716,102717,102718,102719,102720,102721,102722,102723,102724,102725,102726,102727,102728,102729,102730,102733,102734,102735,102736,102737,102738,102739,102740,102741,102742,102743,102744,102745,102746,102747,102748,102749,102750,102751,102752,102753,102754,102755,102756,102757,102758,102761,102766],j=[5614,5702,6130,6131,6132,6358,6359,6360],y=[115700,4326];function h(t){return c.includes(t)?"feet":"meters"}let d=class extends l{get isAdvanced(){return!1}getInfo(){const{horizontalWKID:t,verticalWKID:e}=this;let o=t,r=e;const i=this;if(4===i.type){const{properties:t}=i;o=4326,r=t.verticalWKID}const s=function(t,e){return y.includes(t)||4326===e?"ellipsoidal":"gravity-related-height"}(o,r),n=function(t,e){return"number"==typeof t?j.includes(t)?"feet":"meters":h(e)}(r,o);return{heightModel:s,heightUnit:n,horizontalUnit:h(o)}}};t([r({json:{write:!0}})],d.prototype,"affineTransformations",void 0),t([r({json:{write:!0}})],d.prototype,"focalLength",void 0),t([r({json:{write:!0}})],d.prototype,"principalOffsetPoint",void 0),t([r({json:{write:!0}})],d.prototype,"radialDistortionCoefficients",void 0),t([r({json:{write:!0}})],d.prototype,"tangentialDistortionCoefficients",void 0),t([r({json:{write:!0}})],d.prototype,"horizontalWKID",void 0),t([r({json:{write:!0}})],d.prototype,"verticalWKID",void 0),t([r({json:{write:!0}})],d.prototype,"x",void 0),t([r({json:{write:!0}})],d.prototype,"y",void 0),t([r({json:{write:!0}})],d.prototype,"z",void 0),t([r({json:{write:!0}})],d.prototype,"type",void 0),d=t([s("esri.layers.orientedImagery.core.CameraOrientation")],d);const f=d;let g=class extends(p(a(f))){constructor(){super(...arguments),this.type=1}get isAdvanced(){const{affineTransformations:t,focalLength:e,principalOffsetPoint:o,radialDistortionCoefficients:r,tangentialDistortionCoefficients:i}=this;return t?.length>1||!Number.isNaN(e)||o?.length>1||r?.length>1||i?.length>1}toString(){const{type:t,horizontalWKID:e,verticalWKID:o,x:r,y:i,z:s,heading:n,pitch:p,roll:a,affineTransformations:m,focalLength:l,principalOffsetPoint:u,radialDistortionCoefficients:c,tangentialDistortionCoefficients:j}=this,y=[t,e,o,r,i,s,n,p,a];return this.isAdvanced&&(m?.forEach((t=>y.push(t))),y.push(l),u?.forEach((t=>y.push(t))),c?.forEach((t=>y.push(t))),j?.forEach((t=>y.push(t)))),y.map((t=>Number.isNaN(t)?"":t)).join("|")}};t([r({json:{write:!0}})],g.prototype,"type",void 0),t([r({type:[Number],json:{write:!0}})],g.prototype,"affineTransformations",void 0),t([r({type:Number,json:{write:!0}})],g.prototype,"focalLength",void 0),t([r({type:[Number],json:{write:!0}})],g.prototype,"principalOffsetPoint",void 0),t([r({type:[Number],json:{write:!0}})],g.prototype,"radialDistortionCoefficients",void 0),t([r({type:[Number],json:{write:!0}})],g.prototype,"tangentialDistortionCoefficients",void 0),t([r({type:Number,json:{write:!0}})],g.prototype,"heading",void 0),t([r({type:Number,json:{write:!0}})],g.prototype,"pitch",void 0),t([r({type:Number,json:{write:!0}})],g.prototype,"roll",void 0),t([r({type:Number,json:{write:!0}})],g.prototype,"horizontalWKID",void 0),t([r({type:Number,json:{write:!0}})],g.prototype,"verticalWKID",void 0),t([r({type:Number,json:{write:!0}})],g.prototype,"x",void 0),t([r({type:Number,json:{write:!0}})],g.prototype,"y",void 0),t([r({type:Number,json:{write:!0}})],g.prototype,"z",void 0),g=t([s("esri.layers.orientedImagery.core.CameraOrientationHPR")],g);const b=g;let v=class extends(p(a(f))){constructor(){super(...arguments),this.type=2}get isAdvanced(){const{affineTransformations:t,focalLength:e,principalOffsetPoint:o,radialDistortionCoefficients:r,tangentialDistortionCoefficients:i}=this;return t?.length>1||!Number.isNaN(e)||o?.length>1||r?.length>1||i?.length>1}toString(){const{type:t,horizontalWKID:e,verticalWKID:o,x:r,y:i,z:s,omega:n,phi:p,kappa:a,affineTransformations:m,focalLength:l,principalOffsetPoint:u,radialDistortionCoefficients:c,tangentialDistortionCoefficients:j}=this,y=[t,e,o,r,i,s,n,p,a];return this.isAdvanced&&(m?.forEach((t=>y.push(t))),y.push(l),u?.forEach((t=>y.push(t))),c?.forEach((t=>y.push(t))),j?.forEach((t=>y.push(t)))),y.map((t=>isNaN(t)?"":t)).join("|")}};t([r({json:{write:!0}})],v.prototype,"type",void 0),t([r({type:[Number],json:{write:!0}})],v.prototype,"affineTransformations",void 0),t([r({type:Number,json:{write:!0}})],v.prototype,"focalLength",void 0),t([r({type:[Number],json:{write:!0}})],v.prototype,"principalOffsetPoint",void 0),t([r({type:[Number],json:{write:!0}})],v.prototype,"radialDistortionCoefficients",void 0),t([r({type:[Number],json:{write:!0}})],v.prototype,"tangentialDistortionCoefficients",void 0),t([r({type:Number,json:{write:!0}})],v.prototype,"omega",void 0),t([r({type:Number,json:{write:!0}})],v.prototype,"phi",void 0),t([r({type:Number,json:{write:!0}})],v.prototype,"kappa",void 0),t([r({type:Number,json:{write:!0}})],v.prototype,"horizontalWKID",void 0),t([r({type:Number,json:{write:!0}})],v.prototype,"verticalWKID",void 0),t([r({type:Number,json:{write:!0}})],v.prototype,"x",void 0),t([r({type:Number,json:{write:!0}})],v.prototype,"y",void 0),t([r({type:Number,json:{write:!0}})],v.prototype,"z",void 0),v=t([s("esri.layers.orientedImagery.core.CameraOrientationOPK")],v);const k=v;let P=class extends(p(a(f))){constructor(){super(...arguments),this.type=3}get isAdvanced(){const{affineTransformations:t,focalLength:e,principalOffsetPoint:o,radialDistortionCoefficients:r,tangentialDistortionCoefficients:i}=this;return t?.length>1||!Number.isNaN(e)||o?.length>1||r?.length>1||i?.length>1}toString(){const{type:t,horizontalWKID:e,verticalWKID:o,x:r,y:i,z:s,yaw:n,pitch:p,roll:a,affineTransformations:m,focalLength:l,principalOffsetPoint:u,radialDistortionCoefficients:c,tangentialDistortionCoefficients:j}=this,y=[t,e,o,r,i,s,n,p,a];return this.isAdvanced&&(m?.forEach((t=>y.push(t))),y.push(l),u?.forEach((t=>y.push(t))),u?.forEach((t=>y.push(t))),c?.forEach((t=>y.push(t))),j?.forEach((t=>y.push(t)))),y.map((t=>Number.isNaN(t)?"":t)).join("|")}};t([r({json:{write:!0}})],P.prototype,"type",void 0),t([r({type:[Number],json:{write:!0}})],P.prototype,"affineTransformations",void 0),t([r({type:Number,json:{write:!0}})],P.prototype,"focalLength",void 0),t([r({type:[Number],json:{write:!0}})],P.prototype,"principalOffsetPoint",void 0),t([r({type:[Number],json:{write:!0}})],P.prototype,"radialDistortionCoefficients",void 0),t([r({type:[Number],json:{write:!0}})],P.prototype,"tangentialDistortionCoefficients",void 0),t([r({type:Number,json:{write:!0}})],P.prototype,"yaw",void 0),t([r({type:Number,json:{write:!0}})],P.prototype,"pitch",void 0),t([r({type:Number,json:{write:!0}})],P.prototype,"roll",void 0),t([r({type:Number,json:{write:!0}})],P.prototype,"horizontalWKID",void 0),t([r({type:Number,json:{write:!0}})],P.prototype,"verticalWKID",void 0),t([r({type:Number,json:{write:!0}})],P.prototype,"x",void 0),t([r({type:Number,json:{write:!0}})],P.prototype,"y",void 0),t([r({type:Number,json:{write:!0}})],P.prototype,"z",void 0),P=t([s("esri.layers.orientedImagery.core.CameraOrientationYPR")],P);const S=P;let I=class extends m{constructor(){super(...arguments),this.url=null}};t([r({type:Number,json:{write:!0}})],I.prototype,"lod",void 0),t([r({type:String,json:{write:!0}})],I.prototype,"rasterFunction",void 0),t([r({type:String,json:{write:!0}})],I.prototype,"url",void 0),I=t([s("esri.layers.orientedImagery.core.ElevationSourceDefinitions.ElevationSource")],I);let D=class extends m{};t([r({type:Number,json:{write:!0}})],D.prototype,"constantElevation",void 0),D=t([s("esri.layers.orientedImagery.cor.ElevationSourceDefinitions.ConstantElevation")],D);const w=t=>"constantElevation"in t;async function x(t){const o=await u(t),{tileInfo:r,cacheType:i}=o;return o.hasOwnProperty("bandCount")&&o.hasOwnProperty("pixelSizeX")?"LERC"!==r?.format?.toUpperCase()||i&&"elevation"!==i.toLowerCase()?{isSupported:!1,error:new e("elevation-source:unsupported-imagery-service","Only elevation 3d services are supported")}:{isSupported:!0}:{isSupported:!1,error:new e("elevation-source:invalid-service-url",`ElevationSource URL expects an elevation 3D image service but given ${t}`)}}var C;function N(t,e,o){return e&&(t=`${e}${t}`),o&&(t+=`${o}`),t}function U(t,e,o){return t?w(t)?new D(t):function(t,e,o){let{url:r}=t;return r?(r=N(r,e,o),new I({...t,url:r})):null}(t,e,o):t}!function(t){t[t.HPR=1]="HPR",t[t.OPK=2]="OPK",t[t.YPR=3]="YPR",t[t.LTP=4]="LTP"}(C||(C={}));const L=new o({Minutes:"minutes",Hours:"hours",Days:"days",Weeks:"weeks",Months:"months",Years:"years"}),O=new o({360:"360",Horizontal:"horizontal",Inspection:"inspection",Nadir:"nadir",Oblique:"oblique","":null}),R=new Map;R.set(`${C.OPK}`,{desc:"Using Omega Phi Kappa",constructor:k}),R.set(`${C.HPR}`,{desc:"Using Heading, Pitch and Roll",constructor:b}),R.set(`${C.YPR}`,{desc:"Using Yaw, Pitch and Roll",constructor:S});const T=new Map;function E(t){if(!t)return null;const e=`${t}`.split("|");if(0===e.length)return null;const o=R.get(e[0]);if(!o)return null;const r=T.get(e[0]);return r?new(0,o.constructor)(r(e)):null}function M(t,e,o){return{name:`orientedImageryProperties.${t}`,write:!e||{target:`orientedImageryProperties.${t}`,writer:e},origins:{service:{name:`orientedImageryInfo.orientedImageryProperties.${t}`,write:e,read:o}}}}T.set(`${C.HPR}`,(function(t){const[e,o,r,i,s,n,p,a,m,l,u,c,j,y,h,d,f,g,b,v,k,P,S]=t;return{type:e,horizontalWKID:o,verticalWKID:r,x:i,y:s,z:n,heading:p,pitch:a,roll:m,affineTransformations:[l,u,c,j,y,h],focalLength:d,principalOffsetPoint:[f,g],radialDistortionCoefficients:[b,v,k],tangentialDistortionCoefficients:[P,S]}})),T.set(`${C.YPR}`,(function(t){const[e,o,r,i,s,n,p,a,m,l,u,c,j,y,h,d,f,g,b,v,k,P,S]=t;return{type:e,horizontalWKID:o,verticalWKID:r,x:i,y:s,z:n,yaw:p,pitch:a,roll:m,affineTransformations:[l,u,c,j,y,h],focalLength:d,principalOffsetPoint:[f,g],radialDistortionCoefficients:[b,v,k],tangentialDistortionCoefficients:[P,S]}})),T.set(`${C.OPK}`,(function(t){const[e,o,r,i,s,n,p,a,m,l,u,c,j,y,h,d,f,g,b,v,k,P,S]=t;return{type:e,horizontalWKID:o,verticalWKID:r,x:i,y:s,z:n,omega:p,phi:a,kappa:m,affineTransformations:[l,u,c,j,y,h],focalLength:d,principalOffsetPoint:[f,g],radialDistortionCoefficients:[b,v,k],tangentialDistortionCoefficients:[P,S]}})),T.set(`${C.LTP}`,(function(t){const[e,o,r,i,s,n,...p]=t,a=T.get(n);return a?{type:e,latitude:o,longitude:r,ellipsoidRadius:i,squaredEccentricity:s,properties:a([n,"",...p])}:null}));let F=class extends n{constructor(){super(...arguments),this.cameraHeading=null,this.cameraHeight=null,this.cameraPitch=null,this.cameraRoll=null,this.coveragePercent=null,this.demPathPrefix=null,this.demPathSuffix=null,this.depthImagePathPrefix=null,this.depthImagePathSuffix=null,this.elevationSource=null,this.farDistance=null,this.geometryType="point",this.horizontalFieldOfView=null,this.horizontalMeasurementUnit=null,this.imagePathPrefix=null,this.imagePathSuffix=null,this.imageRotation=null,this.maximumDistance=null,this.nearDistance=null,this.operationalLayerType="OrientedImageryLayer",this.orientationAccuracy=null,this.orientedImageryType=null,this.type="oriented-imagery",this.timeIntervalUnit=null,this.verticalFieldOfView=null,this.verticalMeasurementUnit=null,this.videoPathPrefix=null,this.videoPathSuffix=null}get effectiveElevationSource(){const{elevationSource:t,demPathPrefix:e,demPathSuffix:o}=this;return U(t,e,o)}findFirstValidLayerId(t){return t.layers?.find((t=>"Oriented Imagery Layer"===t.type))?.id}_verifySource(){if(super._verifySource(),"point"!==this.geometryType)throw new e("oriented-imagery-layer:invalid-geometry-type","OrientedImageryLayer only supports point geometry type")}};t([r({type:Number,json:M("cameraHeading")})],F.prototype,"cameraHeading",void 0),t([r({type:Number,json:M("cameraHeight")})],F.prototype,"cameraHeight",void 0),t([r({type:Number,json:M("cameraPitch")})],F.prototype,"cameraPitch",void 0),t([r({type:Number,json:M("cameraRoll")})],F.prototype,"cameraRoll",void 0),t([r({type:Number,json:M("coveragePercent")})],F.prototype,"coveragePercent",void 0),t([r({type:String,json:M("demPathPrefix")})],F.prototype,"demPathPrefix",void 0),t([r({type:String,json:M("demPathSuffix")})],F.prototype,"demPathSuffix",void 0),t([r({type:String,json:M("depthImagePathPrefix")})],F.prototype,"depthImagePathPrefix",void 0),t([r({type:String,json:M("depthImagePathSuffix")})],F.prototype,"depthImagePathSuffix",void 0),t([r({type:Object,json:M("elevationSource")})],F.prototype,"elevationSource",void 0),t([r()],F.prototype,"effectiveElevationSource",null),t([r({type:Number,json:M("farDistance")})],F.prototype,"farDistance",void 0),t([r({json:{write:!0}})],F.prototype,"geometryType",void 0),t([r({type:Number,json:M("horizontalFieldOfView")})],F.prototype,"horizontalFieldOfView",void 0),t([r({type:String,json:M("horizontalMeasurementUnit")})],F.prototype,"horizontalMeasurementUnit",void 0),t([r({type:String,json:M("imagePathPrefix")})],F.prototype,"imagePathPrefix",void 0),t([r({type:String,json:M("imagePathSuffix")})],F.prototype,"imagePathSuffix",void 0),t([r({type:Number,json:M("imageRotation")})],F.prototype,"imageRotation",void 0),t([r({type:Number,json:M("maximumDistance")})],F.prototype,"maximumDistance",void 0),t([r({type:Number,json:M("nearDistance")})],F.prototype,"nearDistance",void 0),t([r({type:["OrientedImageryLayer"]})],F.prototype,"operationalLayerType",void 0),t([r({json:M("orientationAccuracy",((t,e)=>{t&&(e.orientationAccuracy=t.join(","))}))}),i((t=>t?t.trim().split(",").map(Number):null))],F.prototype,"orientationAccuracy",void 0),t([r({json:{...M("orientedImageryType",O.write,O.read),type:O.apiValues}})],F.prototype,"orientedImageryType",void 0),t([r({json:{read:!1},value:"oriented-imagery",readOnly:!0})],F.prototype,"type",void 0),t([r({json:{...M("timeIntervalUnit",L.write,L.read),type:L.apiValues}})],F.prototype,"timeIntervalUnit",void 0),t([r({type:Number,json:M("verticalFieldOfView")})],F.prototype,"verticalFieldOfView",void 0),t([r({json:{...M("verticalMeasurementUnit"),type:new o({Feet:"feet",Meter:"meter"}).apiValues}})],F.prototype,"verticalMeasurementUnit",void 0),t([r({type:String,json:M("videoPathPrefix")})],F.prototype,"videoPathPrefix",void 0),t([r({type:String,json:M("videoPathSuffix")})],F.prototype,"videoPathSuffix",void 0),F=t([s("esri.layers.OrientedImageryLayer")],F);const V=F,z=Object.freeze(Object.defineProperty({__proto__:null,default:V},Symbol.toStringTag,{value:"Module"}));export{C,z as O,R as a,N as b,E as c,f as d,V as default,U as g,w as i,O as o,x as v};
