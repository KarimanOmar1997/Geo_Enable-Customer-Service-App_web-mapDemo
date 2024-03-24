// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/tslib.es6 ../../../../core/Accessor ../../../../core/accessorSupport/decorators/property ../../../../core/accessorSupport/ensureType ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/decorators/subclass ../../../../chunks/vec3f64".split(" "),function(a,c,e,d,h,k,l,f,b){a.LineOfSightComputation=class extends e{constructor(g){super(g);this.elevationAlignedTargetLocation=null;this.inputPoints={isValid:!1,observer:b.create(),observerSurfaceNormal:null,
observerFeatureId:null,target:b.create(),targetSurfaceNormal:null,targetFeatureId:null,observerAdjusted:b.create(),targetAdjusted:b.create()};this.computationResult={start:b.create(),end:b.create(),intersection:b.create(),isValid:!1,isTargetVisible:!1};this.result=null}notifyResultChanged(){this.notifyChange("computationResult")}notifyInputPointsChanged(){this.notifyChange("inputPoints")}};c.__decorate([d.property()],a.LineOfSightComputation.prototype,"target",void 0);c.__decorate([d.property()],
a.LineOfSightComputation.prototype,"elevationAlignedTargetLocation",void 0);c.__decorate([d.property()],a.LineOfSightComputation.prototype,"inputPoints",void 0);c.__decorate([d.property()],a.LineOfSightComputation.prototype,"computationResult",void 0);c.__decorate([d.property()],a.LineOfSightComputation.prototype,"result",void 0);a.LineOfSightComputation=c.__decorate([f.subclass("esri.views.3d.analysis.LineOfSight.LineOfSightComputation")],a.LineOfSightComputation);Object.defineProperty(a,Symbol.toStringTag,
{value:"Module"})});