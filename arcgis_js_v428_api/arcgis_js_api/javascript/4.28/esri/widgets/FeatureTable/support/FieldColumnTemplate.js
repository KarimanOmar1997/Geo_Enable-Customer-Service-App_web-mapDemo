// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/decorators/subclass ../../../layers/support/domains ../../FeatureForm/Format ./ColumnTemplateBase ./EditableColumnTemplateMixin".split(" "),function(b,c,a,l,m,e,d,f,g,h){a=class extends h.EditableColumnTemplateMixin(g){constructor(k){super(k);this.requiredExpression=this.format=this.fieldName=this.editableExpression=
this.domain=null;this.type="field";this.visibilityExpression=this.valueExpression=null}};b.__decorate([c.property({types:d.types,json:{read:{reader:d.fromJSON},write:!0}})],a.prototype,"domain",void 0);b.__decorate([c.property({type:String,json:{write:!0}}),c.property()],a.prototype,"editableExpression",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"fieldName",void 0);b.__decorate([c.property({type:f})],a.prototype,"format",void 0);b.__decorate([c.property({type:String,
json:{write:!0}})],a.prototype,"requiredExpression",void 0);b.__decorate([c.property({type:String,json:{read:!1,write:!0}})],a.prototype,"type",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"valueExpression",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"visibilityExpression",void 0);return a=b.__decorate([e.subclass("esri.widgets.FeatureTable.support.FieldColumnTemplate")],a)});