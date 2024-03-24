// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../chunks/tslib.es6 ../core/Error ../core/jsonMap ../core/accessorSupport/decorators/property ../core/accessorSupport/decorators/cast ../core/accessorSupport/decorators/subclass ./FeatureLayer ./orientedImagery/core/utils".split(" "),function(b,k,l,c,m,n,a,g){function d(e,f,h){return{name:`orientedImageryProperties.${e}`,write:f?{target:`orientedImageryProperties.${e}`,writer:f}:!0,origins:{service:{name:`orientedImageryInfo.orientedImageryProperties.${e}`,write:f,read:h}}}}a=class extends a{constructor(){super(...arguments);
this.farDistance=this.elevationSource=this.depthImagePathSuffix=this.depthImagePathPrefix=this.demPathSuffix=this.demPathPrefix=this.coveragePercent=this.cameraRoll=this.cameraPitch=this.cameraHeight=this.cameraHeading=null;this.geometryType="point";this.nearDistance=this.maximumDistance=this.imageRotation=this.imagePathSuffix=this.imagePathPrefix=this.horizontalMeasurementUnit=this.horizontalFieldOfView=null;this.operationalLayerType="OrientedImageryLayer";this.orientedImageryType=this.orientationAccuracy=
null;this.type="oriented-imagery";this.videoPathSuffix=this.videoPathPrefix=this.verticalMeasurementUnit=this.verticalFieldOfView=this.timeIntervalUnit=null}get effectiveElevationSource(){const {elevationSource:e,demPathPrefix:f,demPathSuffix:h}=this;return g.getEffectiveElevationSource(e,f,h)}findFirstValidLayerId(e){return e.layers?.find(f=>"Oriented Imagery Layer"===f.type)?.id}_verifySource(){super._verifySource();if("point"!==this.geometryType)throw new k("oriented-imagery-layer:invalid-geometry-type",
"OrientedImageryLayer only supports point geometry type");}};b.__decorate([c.property({type:Number,json:d("cameraHeading")})],a.prototype,"cameraHeading",void 0);b.__decorate([c.property({type:Number,json:d("cameraHeight")})],a.prototype,"cameraHeight",void 0);b.__decorate([c.property({type:Number,json:d("cameraPitch")})],a.prototype,"cameraPitch",void 0);b.__decorate([c.property({type:Number,json:d("cameraRoll")})],a.prototype,"cameraRoll",void 0);b.__decorate([c.property({type:Number,json:d("coveragePercent")})],
a.prototype,"coveragePercent",void 0);b.__decorate([c.property({type:String,json:d("demPathPrefix")})],a.prototype,"demPathPrefix",void 0);b.__decorate([c.property({type:String,json:d("demPathSuffix")})],a.prototype,"demPathSuffix",void 0);b.__decorate([c.property({type:String,json:d("depthImagePathPrefix")})],a.prototype,"depthImagePathPrefix",void 0);b.__decorate([c.property({type:String,json:d("depthImagePathSuffix")})],a.prototype,"depthImagePathSuffix",void 0);b.__decorate([c.property({type:Object,
json:d("elevationSource")})],a.prototype,"elevationSource",void 0);b.__decorate([c.property()],a.prototype,"effectiveElevationSource",null);b.__decorate([c.property({type:Number,json:d("farDistance")})],a.prototype,"farDistance",void 0);b.__decorate([c.property({json:{write:!0}})],a.prototype,"geometryType",void 0);b.__decorate([c.property({type:Number,json:d("horizontalFieldOfView")})],a.prototype,"horizontalFieldOfView",void 0);b.__decorate([c.property({type:String,json:d("horizontalMeasurementUnit")})],
a.prototype,"horizontalMeasurementUnit",void 0);b.__decorate([c.property({type:String,json:d("imagePathPrefix")})],a.prototype,"imagePathPrefix",void 0);b.__decorate([c.property({type:String,json:d("imagePathSuffix")})],a.prototype,"imagePathSuffix",void 0);b.__decorate([c.property({type:Number,json:d("imageRotation")})],a.prototype,"imageRotation",void 0);b.__decorate([c.property({type:Number,json:d("maximumDistance")})],a.prototype,"maximumDistance",void 0);b.__decorate([c.property({type:Number,
json:d("nearDistance")})],a.prototype,"nearDistance",void 0);b.__decorate([c.property({type:["OrientedImageryLayer"]})],a.prototype,"operationalLayerType",void 0);b.__decorate([c.property({json:d("orientationAccuracy",(e,f)=>{e&&(f.orientationAccuracy=e.join(","))})}),m.cast(e=>e?e.trim().split(",").map(Number):null)],a.prototype,"orientationAccuracy",void 0);b.__decorate([c.property({json:{...d("orientedImageryType",g.orientedImageryTypeMap.write,g.orientedImageryTypeMap.read),type:g.orientedImageryTypeMap.apiValues}})],
a.prototype,"orientedImageryType",void 0);b.__decorate([c.property({json:{read:!1},value:"oriented-imagery",readOnly:!0})],a.prototype,"type",void 0);b.__decorate([c.property({json:{...d("timeIntervalUnit",g.timeIntervalUnitTypeMap.write,g.timeIntervalUnitTypeMap.read),type:g.timeIntervalUnitTypeMap.apiValues}})],a.prototype,"timeIntervalUnit",void 0);b.__decorate([c.property({type:Number,json:d("verticalFieldOfView")})],a.prototype,"verticalFieldOfView",void 0);b.__decorate([c.property({json:{...d("verticalMeasurementUnit"),
type:(new l.JSONMap({Feet:"feet",Meter:"meter"})).apiValues}})],a.prototype,"verticalMeasurementUnit",void 0);b.__decorate([c.property({type:String,json:d("videoPathPrefix")})],a.prototype,"videoPathPrefix",void 0);b.__decorate([c.property({type:String,json:d("videoPathSuffix")})],a.prototype,"videoPathSuffix",void 0);return a=b.__decorate([n.subclass("esri.layers.OrientedImageryLayer")],a)});