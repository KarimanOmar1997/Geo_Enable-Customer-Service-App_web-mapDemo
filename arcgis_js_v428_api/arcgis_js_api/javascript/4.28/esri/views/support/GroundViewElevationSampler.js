// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/Evented ../../core/Logger ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass ../../geometry/SpatialReference ../../geometry/support/aaBoundingRect ../../geometry/support/contains ../../layers/support/ElevationSampler ../3d/terrain/TerrainConst".split(" "),function(d,b,f,e,q,r,t,g,h,k,l,m,n){b=class extends b.EventedAccessor{constructor(a){super(a);
this.demResolution={min:-1,max:-1};this.noDataValue=n.elevationNodataValue}initialize(){this.view.basemapTerrain.on("elevation-change",()=>this.emit("changed",{}))}get extent(){const a=this.view.basemapTerrain;if(null==a?.extent||null==a.spatialReference)return null;const c=k.toExtent(a.extent,a.spatialReference);c.zmin=a.visibleElevationBounds.min;c.zmax=a.visibleElevationBounds.max;return c}get spatialReference(){return this.view.basemapTerrain?.spatialReference??h.WGS84}elevationAt(a,c){if(null==
this.extent||!l.extentContainsXYZ(this.extent,a,c)){const p=null!=this.extent?`${this.extent.xmin}, ${this.extent.ymin}, ${this.extent.xmax}, ${this.extent.ymax}`:null;f.getLogger(this).warn("#elevationAt()",`Point used to sample elevation (${a}, ${c}) is outside of the sampler extent (${p})`);return this.noDataValue}return this.view.elevationProvider?.getElevation(a,c,0,this.spatialReference,"ground")??this.noDataValue}queryElevation(a){return m.updateGeometryElevation(a.clone(),this)}};d.__decorate([e.property({readOnly:!0})],
b.prototype,"demResolution",void 0);d.__decorate([e.property({readOnly:!0})],b.prototype,"extent",null);d.__decorate([e.property({readOnly:!0})],b.prototype,"noDataValue",void 0);d.__decorate([e.property()],b.prototype,"spatialReference",null);d.__decorate([e.property({constructOnly:!0})],b.prototype,"view",void 0);return b=d.__decorate([g.subclass("esri.views.support.GroundViewElevationSampler")],b)});