// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/JSONSupport ../../../core/screenUtils ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/decorators/subclass".split(" "),function(b,a,e,c,h,k,l,f){var d;a=d=class extends a.JSONSupport{constructor(g){super(g);this.value=this.size=this.label=null}clone(){return new d({label:this.label,size:this.size,value:this.value})}};b.__decorate([c.property({type:String,
json:{write:!0}})],a.prototype,"label",void 0);b.__decorate([c.property({type:Number,cast:e.toPt,json:{write:!0}})],a.prototype,"size",void 0);b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,"value",void 0);return a=d=b.__decorate([f.subclass("esri.renderers.visualVariables.support.SizeStop")],a)});