// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/enumeration ../../core/accessorSupport/decorators/subclass ./Domain".split(" "),function(d,g,c,m,n,h,k,l){var e;c=e=class extends l{constructor(a){super(a);this.minValue=this.maxValue=null;this.type="range"}clone(){return new e({maxValue:this.maxValue,minValue:this.minValue,name:this.name})}};d.__decorate([g.property({json:{type:[Number],
read:{source:"range",reader(a,b){return b.range?.[1]}},write:{enabled:!1,overridePolicy(){return{enabled:null!=this.maxValue&&null==this.minValue}},target:"range",writer(a,b,f){b[f]=[this.minValue||0,a]}}}})],c.prototype,"maxValue",void 0);d.__decorate([g.property({json:{type:[Number],read:{source:"range",reader(a,b){return b.range?.[0]}},write:{target:"range",writer(a,b,f){b[f]=[a,this.maxValue||0]}}}})],c.prototype,"minValue",void 0);d.__decorate([h.enumeration({range:"range"})],c.prototype,"type",
void 0);return c=e=d.__decorate([k.subclass("esri.layers.support.RangeDomain")],c)});