// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/tslib.es6 ../../core/Logger ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/Error ../../core/accessorSupport/decorators/enumeration ../../core/accessorSupport/decorators/subclass ./Symbol3DMaterial".split(" "),function(a,d,h,k,l,m,n,e,f,g){var b;a.Symbol3DFillMaterial=b=class extends g.Symbol3DMaterial{constructor(c){super(c);this.colorMixMode=null}clone(){const c={color:null!=this.color?this.color.clone():null,colorMixMode:this.colorMixMode};
return new b(c)}};d.__decorate([e.enumeration({multiply:"multiply",replace:"replace",tint:"tint"})],a.Symbol3DFillMaterial.prototype,"colorMixMode",void 0);a.Symbol3DFillMaterial=b=d.__decorate([f.subclass("esri.symbols.support.Symbol3DFillMaterial")],a.Symbol3DFillMaterial);Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});