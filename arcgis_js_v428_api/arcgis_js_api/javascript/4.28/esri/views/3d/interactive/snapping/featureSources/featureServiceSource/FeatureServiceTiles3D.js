// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../chunks/tslib.es6 ../../../../../../core/Accessor ../../../../../../core/reactiveUtils ../../../../../../core/accessorSupport/decorators/property ../../../../../../core/accessorSupport/ensureType ../../../../../../core/arrayUtils ../../../../../../core/has ../../../../../../core/accessorSupport/decorators/subclass ../../../../../../layers/support/TileKey ../../../../layers/support/FeatureTileDescriptor3D ../../../../../interactive/snapping/featureSources/featureServiceSource/tileUtils".split(" "),
function(b,d,l,k,f,u,v,w,m,n,p,h){function q({lij:[a,c,g],extent:e}){return new n.TileKey(`${a}/${c}/${g}`,a,c,g,e)}b.FeatureServiceTiles3D=class extends l{get tiles(){const a=this.tilesCoveringView,c=this._effectivePointOfInterest;if(null!=c){const g=a.map(e=>h.distanceToTile(c,e));for(let e=1;e<g.length;e++)if(g[e-1]>g[e])return a.sort((r,t)=>h.distanceToTile(c,r)-h.distanceToTile(c,t)),a.slice()}return a}get tilesCoveringView(){return this._filterTiles(this.view.featureTiles?.tiles?.toArray()).map(q)}get tileInfo(){return this.view.featureTiles?.tilingScheme.toTileInfo()??
null}get tileSize(){return this.view.featureTiles?.tileSize??256}get _effectivePointOfInterest(){const a=this.pointOfInterest;return null!=a?a:this.view.pointsOfInterest?.focus.location}constructor(a){super(a);this.pointOfInterest=null}initialize(){this.addHandles(k.watch(()=>this.view.featureTiles,a=>{this.removeHandles("feature-tiles");a&&this.addHandles(a.addClient(),"feature-tiles")},k.initial))}_filterTiles(a){return null==a?[]:a.filter(c=>50<Math.abs(c.measures.screenRect[3]-c.measures.screenRect[1])&&
c.measures.visibility===p.Visibility.VISIBLE_ON_SURFACE)}};d.__decorate([f.property({readOnly:!0})],b.FeatureServiceTiles3D.prototype,"tiles",null);d.__decorate([f.property({readOnly:!0})],b.FeatureServiceTiles3D.prototype,"tilesCoveringView",null);d.__decorate([f.property({readOnly:!0})],b.FeatureServiceTiles3D.prototype,"tileInfo",null);d.__decorate([f.property({readOnly:!0})],b.FeatureServiceTiles3D.prototype,"tileSize",null);d.__decorate([f.property({constructOnly:!0})],b.FeatureServiceTiles3D.prototype,
"view",void 0);d.__decorate([f.property()],b.FeatureServiceTiles3D.prototype,"pointOfInterest",void 0);d.__decorate([f.property()],b.FeatureServiceTiles3D.prototype,"_effectivePointOfInterest",null);b.FeatureServiceTiles3D=d.__decorate([m.subclass("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiles3D")],b.FeatureServiceTiles3D);Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});