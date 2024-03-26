// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../geometry ../../core/jsonMap ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass ../../geometry/support/jsonUtils".split(" "),function(c,e,a,f,d,n,p,q,g,h){const k=new a.JSONMap({9001:"meters",9002:"feet",9036:"kilometers",9093:"miles",109012:"nautical-miles",109001:"yards"});a=class extends f.JSONSupport{constructor(b){super(b);
this.maxSegmentLength=this.lengthUnit=this.geodesic=this.geometries=null}toJSON(){const b={};if(this.geometries&&0<this.geometries.length){const m=this.geometries.map(l=>l.toJSON());b.geometries=JSON.stringify({geometryType:h.getJsonType(this.geometries[0]),geometries:m});b.sr=JSON.stringify(this.geometries[0].spatialReference.toJSON())}this.geodesic&&(b.geodesic=this.geodesic);this.lengthUnit&&(b.lengthUnit=k.toJSON(this.lengthUnit));this.maxSegmentLength&&(b.maxSegmentLength=this.maxSegmentLength);
return b}};c.__decorate([d.property({types:[e.geometryTypes],json:{write:!0}})],a.prototype,"geometries",void 0);c.__decorate([d.property({type:Boolean,json:{write:!0}})],a.prototype,"geodesic",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"lengthUnit",void 0);c.__decorate([d.property({type:Number,json:{write:!0}})],a.prototype,"maxSegmentLength",void 0);return a=c.__decorate([g.subclass("esri.rest.support.DensifyParameters")],a)});