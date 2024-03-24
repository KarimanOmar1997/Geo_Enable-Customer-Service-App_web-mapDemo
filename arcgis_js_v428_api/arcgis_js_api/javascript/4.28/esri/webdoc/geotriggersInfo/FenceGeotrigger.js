// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/enumeration ../../core/accessorSupport/decorators/subclass ./DeviceLocationFeed ./FeatureFenceParameters ./Geotrigger ./GeotriggerNotificationOptions ./support/typeUtils".split(" "),function(b,d,a,n,p,e,f,g,h,k,l,c){a=class extends k{constructor(m){super(m);this.enterExitRule="enter-contains-and-exit-does-not-intersect";
this.feed=null;this.feedAccuracyMode="use-geometry";this.notificationOptions=this.name=this.fenceParameters=this.fenceNotificationRule=null;this.type="fence"}};b.__decorate([e.enumeration(c.enterExitRuleKebabDict)],a.prototype,"enterExitRule",void 0);b.__decorate([d.property({type:g,json:{write:{isRequired:!0}}})],a.prototype,"feed",void 0);b.__decorate([e.enumeration(c.feedAccuracyModeKebabDict)],a.prototype,"feedAccuracyMode",void 0);b.__decorate([d.property({type:c.fenceNotificationRuleKebabDict.apiValues,
json:{type:c.fenceNotificationRuleKebabDict.jsonValues,read:c.fenceNotificationRuleKebabDict.read,write:{writer:c.fenceNotificationRuleKebabDict.write,isRequired:!0}}})],a.prototype,"fenceNotificationRule",void 0);b.__decorate([d.property({type:h,json:{write:{isRequired:!0}}})],a.prototype,"fenceParameters",void 0);b.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"name",void 0);b.__decorate([d.property({type:l,json:{write:!0}})],a.prototype,"notificationOptions",void 0);b.__decorate([e.enumeration({fence:"fence"},
{readOnly:!0})],a.prototype,"type",void 0);return a=b.__decorate([f.subclass("esri.webdoc.geotriggersInfo.FenceGeotrigger")],a)});