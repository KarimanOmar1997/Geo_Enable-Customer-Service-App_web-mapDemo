// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/tslib.es6 ../../../../core/Accessor ../../../../core/Logger ../../../../core/quantityUtils ../../../../core/reactiveUtils ../../../../core/accessorSupport/decorators/property ../../../../core/accessorSupport/ensureType ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/decorators/subclass ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../../../geometry/geometryEngine ../../../../geometry/Polyline ../../../../geometry/projection ../../../../geometry/spatialReferenceEllipsoidUtils ../../../../geometry/projection/projectPointToVector ../../../../geometry/projection/projectPointToWGS84ComparableLonLat ../../../../geometry/support/geodesicUtils ../interfaces ../support/projectionUtils ../support/UnitNormalizer".split(" "),
function(f,l,C,D,n,h,p,K,L,M,E,u,m,F,G,v,r,t,w,q,x,y,H){const I=D.getLogger("esri.views.3d.analysis.DirectLineMeasurement.DirectLineMeasurementController");f.DirectLineMeasurementController=class extends C{constructor(a){super(a);this._unitNormalizer=new H.UnitNormalizer;this._tempStartPosition=m.create();this._tempEndPosition=m.create();this._tempCornerPosition=m.create()}initialize(){const a=this.view.spatialReference;var c=r.getSphericalPCPF(a);this._sphericalPCPF=c=c===r.SphericalECEFSpatialReference?
r.WGS84ECEFSpatialReference:c;const e=v.canProjectWithoutEngine(a,c);this._unitNormalizer.spatialReference=e?c:a;this.addHandles([h.watch(()=>({viewData:this.viewData,startPoint:this.analysis.startPoint}),({viewData:b,startPoint:d})=>{b.elevationAlignedStartPoint=this._applyProjectionAndElevationAlignment(d)},h.syncAndInitial),h.watch(()=>({viewData:this.viewData,endPoint:this.analysis.endPoint}),({viewData:b,endPoint:d})=>{b.elevationAlignedEndPoint=this._applyProjectionAndElevationAlignment(d)},
h.syncAndInitial),h.watch(()=>({result:this._computedResult,viewData:this.viewData}),({result:b,viewData:d})=>{d.result=b},h.syncAndInitial)])}_applyProjectionAndElevationAlignment(a){if(null==a)return a;const {spatialReference:c,elevationProvider:e}=this.view,b=y.applyProjectionAndElevationAlignment(a,c,e);return null==b?(y.logFailedGeometryProjectionError(this.analysis,a.spatialReference,I),null):b}get _computedResult(){const {elevationAlignedStartPoint:a,elevationAlignedEndPoint:c,measurementMode:e}=
this.viewData;if(null==a||null==c)return null;const b=this._euclideanDistances(a,c),d=this._geodesicDistance(a,c,b.horizontal.value),g=e===x.MeasurementMode.Geodesic||e===x.MeasurementMode.Auto&&1E5<b.horizontal.value?"geodesic":"euclidean";return{mode:g,distance:"euclidean"===g?b.direct:d,directDistance:b.direct,horizontalDistance:b.horizontal,verticalDistance:b.vertical,geodesicDistance:d}}_euclideanDistances(a,c){var e=a.clone();e.z=c.z;const b=this._tempStartPosition;var d=this._tempEndPosition,
g=this._tempCornerPosition,k=this.view.spatialReference;const z=this._sphericalPCPF;k=v.canProjectWithoutEngine(k,z)?z:k;t.projectPointToVector(a,b,k);t.projectPointToVector(c,d,k);t.projectPointToVector(e,g,k);e=u.distance(b,d);d=u.distance(g,d);a=Math.abs(c.z-a.z);c=J=>this._unitNormalizer.normalizeDistance(J);g=c(e);d=c(d);a=c(a);return{direct:n.createQuantity(g,"meters"),horizontal:n.createQuantity(d,"meters"),vertical:n.createQuantity(a,"meters")}}_geodesicDistance(a,c,e){var b=a.spatialReference;
const d=new G({spatialReference:b});d.addPath([a,c]);b=b.isGeographic&&q.isSupported(b)?q.geodesicLengths([d],"meters")[0]:b.isWebMercator?F.geodesicLength(d,"meters"):null;a=null!=b?b:this._fallbackGeodesicDistance(a,c,e);return n.createQuantity(a,"meters")}_fallbackGeodesicDistance(a,c,e){return w.projectPointToWGS84ComparableLonLat(a,A)&&w.projectPointToWGS84ComparableLonLat(c,B)?(a=new q.InverseGeodeticSolverResult,q.inverseGeodeticSolver(a,A,B),a.distance):e}};l.__decorate([p.property()],f.DirectLineMeasurementController.prototype,
"view",void 0);l.__decorate([p.property()],f.DirectLineMeasurementController.prototype,"analysis",void 0);l.__decorate([p.property()],f.DirectLineMeasurementController.prototype,"viewData",void 0);l.__decorate([p.property()],f.DirectLineMeasurementController.prototype,"_computedResult",null);f.DirectLineMeasurementController=l.__decorate([E.subclass("esri.views.3d.analysis.DirectLineMeasurement.DirectLineMeasurementController")],f.DirectLineMeasurementController);const A=m.create(),B=m.create();Object.defineProperty(f,
Symbol.toStringTag,{value:"Module"})});