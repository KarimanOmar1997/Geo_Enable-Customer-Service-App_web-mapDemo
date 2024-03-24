// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/tslib.es6 ../../../../core/Accessor ../../../../core/reactiveUtils ../../../../core/accessorSupport/decorators/property ../../../../core/accessorSupport/ensureType ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/decorators/subclass ../../../analysis/LengthDimensionResult".split(" "),function(a,b,f,e,c,m,n,p,g,h){a.LengthDimensionComputation=class extends f{constructor(d){super(d);this.elevationAlignedEndPoint=this.elevationAlignedStartPoint=
this.unconstrainedGeometry=this.geometry=null}normalizeCtorArgs(d){const {dimension:k,...l}=d;return{result:new h({dimension:k}),...l}}initialize(){this.addHandles([e.watch(()=>this.dimension.startPoint,d=>this.elevationAlignedStartPoint=this.projectAndAlignPoint(d),e.syncAndInitial),e.watch(()=>this.dimension.endPoint,d=>this.elevationAlignedEndPoint=this.projectAndAlignPoint(d),e.syncAndInitial)])}get dimension(){return this.result.dimension}get length(){return this.result.length}};b.__decorate([c.property({constructOnly:!0,
nonNullable:!0})],a.LengthDimensionComputation.prototype,"result",void 0);b.__decorate([c.property({constructOnly:!0,nonNullable:!0})],a.LengthDimensionComputation.prototype,"projectAndAlignPoint",void 0);b.__decorate([c.property()],a.LengthDimensionComputation.prototype,"dimension",null);b.__decorate([c.property()],a.LengthDimensionComputation.prototype,"length",null);b.__decorate([c.property()],a.LengthDimensionComputation.prototype,"geometry",void 0);b.__decorate([c.property()],a.LengthDimensionComputation.prototype,
"unconstrainedGeometry",void 0);b.__decorate([c.property()],a.LengthDimensionComputation.prototype,"elevationAlignedStartPoint",void 0);b.__decorate([c.property()],a.LengthDimensionComputation.prototype,"elevationAlignedEndPoint",void 0);b.__decorate([c.property()],a.LengthDimensionComputation.prototype,"preConstraintProperties",void 0);b.__decorate([c.property()],a.LengthDimensionComputation.prototype,"previousConstraint",void 0);a.LengthDimensionComputation=b.__decorate([g.subclass("esri.views.3d.analysis.LengthDimensionComputation")],
a.LengthDimensionComputation);Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});