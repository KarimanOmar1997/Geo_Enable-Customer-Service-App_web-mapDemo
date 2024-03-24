// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/tslib.es6 ../../../../analysis/SlicePlane ../../../../core/Accessor ../../../../core/Logger ../../../../core/reactiveUtils ../../../../core/accessorSupport/decorators/property ../../../../core/accessorSupport/ensureType ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/decorators/subclass ../../../../chunks/boundedPlane ../../../../layers/Layer ../../../../layers/buildingSublayers/BuildingComponentSublayer ./sliceToolUtils ../support/projectionUtils ../../terrain/isTerrainSurfaceLayer".split(" "),
function(e,g,r,t,u,h,k,B,C,D,v,w,p,x,l,y,z){function A(a,b){f.has(a)||f.set(a,{all:[],activeController:null});f.get(a)?.all.push(b)}const m=u.getLogger("esri.views.3d.analysis.Slice.SliceController");e.SliceController=class extends t{constructor(a){super(a);this._internalChange=!1;this._currentSlicePlane=null}initialize(){this.addHandles(this.analysis.excludedLayers.on("before-add",a=>{const b=a.item;null!=b&&(b instanceof p||b instanceof x)?b instanceof p&&z.isTerrainSurfaceLayer(b)?(m.error("excludedLayers",
`Layer '${b.title}, id:${b.id}' of type '${b.type}' can not be individually excluded from slicing. Use 'excludeGroundSurface' instead.`),a.preventDefault()):this.analysis.excludedLayers.includes(b)&&a.preventDefault():(m.error("excludedLayers","Invalid layer type, layer must derive from Layer or BuildingComponentSublayer"),a.preventDefault())}));A(this.view,this);this.addHandles([h.watch(()=>this.analysisViewData.plane,()=>{this._internalChange||this._updateSlicePlaneFromBoundedPlane();this._updateLayerViews()},
{sync:!0}),h.watch(()=>this.analysis.excludeGroundSurface,()=>this._updateLayerViews(),{sync:!0}),this.analysis.excludedLayers.on("change",()=>this._updateLayerViews()),h.watch(()=>[this.analysisViewData.active,this.analysisViewData.visible],()=>{this._updateActiveController();this._updateViewSlicePlane()},{sync:!0}),h.watch(()=>this._allLayerAndSubLayerViews,()=>this._updateLayerViews())]);this.addHandles([h.watch(()=>this.analysis.shape,()=>{this._internalChange||(this._updateBoundedPlaneFromSlicePlane(),
this._updateViewSlicePlane())},{sync:!0})],"analysis");this._updateActiveController();this._updateBoundedPlaneFromSlicePlane();this._updateViewSlicePlane()}destroy(){this.analysisViewData.active&&(this.analysisViewData.active=!1,this.view.slicePlane=null,this._updateActiveController(),this._updateViewSlicePlane());var a=this.view;if(!f.has(a))throw Error("view expected in global slice register");const b=f.get(a),d=b?.all.lastIndexOf(this)??-1;if(!b||-1===d)throw Error("controller expected in global slice register");
b.all.splice(d,1);0===b.all.length&&f.delete(a);this.set("view",null)}get _allLayerAndSubLayerViews(){const a=this.view.allLayerViews.items;return a.concat(a.filter(l.isIBuildingSceneLayerView3D).flatMap(({sublayerViews:b})=>b.items))}_updateBoundedPlaneFromSlicePlane(){const a=this.analysis.shape;var b=this._currentSlicePlane;if(!(null==b&&null==a||null!=b&&null!=a&&a.equals(b))){var d=null;b=null;if(null!=a?.position){d=a.position.spatialReference;const c=l.projectAndElevationAlignShape(a,this.view);
null==c&&y.logFailedGeometryProjectionError(this.analysis,d,m);d=l.projectedShapeToPlane(c,this.view,{tiltEnabled:this.analysis.tiltEnabled},w.create());null!=d&&(b={heading:a.heading,tilt:a.tilt,position:a.position,width:a.width,height:a.height})}this._currentSlicePlane=b;this._internalChange=!0;this.analysisViewData.plane=d;this._internalChange=!1}}_updateSlicePlaneFromBoundedPlane(){const a=l.planeToShape(this.analysisViewData.plane,this.view,this.view.spatialReference,new r);let b=null;null!=
a&&(b={heading:a.heading,tilt:a.tilt,position:a.position,width:a.width,height:a.height});this._currentSlicePlane=b;this._internalChange=!0;this.analysis.shape=a;this._internalChange=!1;this._updateViewSlicePlane()}_updateActiveController(){if(!n){var a=f.get(this.view);a&&(this.analysisViewData.active?(null!=a.activeController&&a.activeController!==this&&(n=!0,n=a.activeController.analysisViewData.active=!1),this._updateLayerViews(),a.activeController=this):null!=a.activeController&&a.activeController!==
this||null==a.activeController||a.activeController!==this||(a.activeController=null,this._updateLayerViews()))}}_updateViewSlicePlane(){var a=this.view;const b=f.get(a)?.activeController;a.slicePlane=null!=b?.analysisViewData.plane&&b.analysisViewData.visible?b.analysisViewData.plane:null}_updateLayerViews(){const a=null!=this.analysisViewData.plane&&this.analysisViewData.visible&&this.analysisViewData.active,b=[],d=c=>{"layers"in c?c.layers.forEach(d):b.push(c)};this.analysis.excludedLayers.forEach(d);
this.view.allLayerViews.forEach(c=>{c.destroyed||("slicePlaneEnabled"in c&&(c.slicePlaneEnabled=a&&!b.includes(c.layer)),"sublayerViews"in c&&c.sublayerViews.forEach(q=>{q.slicePlaneEnabled=a&&!b.includes(q.sublayer)}))});null!=this.view.basemapTerrain&&(this.view.basemapTerrain.slicePlaneEnabled=a&&!this.analysis.excludeGroundSurface)}};g.__decorate([k.property()],e.SliceController.prototype,"view",void 0);g.__decorate([k.property()],e.SliceController.prototype,"analysis",void 0);g.__decorate([k.property()],
e.SliceController.prototype,"analysisViewData",void 0);g.__decorate([k.property()],e.SliceController.prototype,"_allLayerAndSubLayerViews",null);e.SliceController=g.__decorate([v.subclass("esri.views.3d.analysis.Slice.SliceController")],e.SliceController);const f=new Map;let n=!1;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});