// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports","./ArcadeModule","../chunks/languageUtils"],function(c,g,b){function d(a){if(null===a)return null;if(b.isDate(a))return a.clone();if(b.isSimpleType(a))return a;if(b.isGeometry(a))return a.clone();if(b.isImmutableArray(a))return a.toArray().map(e=>d(e));if(b.isArray(a))return a.map(e=>d(e));if(b.isFeature(a))return f.createFromArcadeFeature(a);if(b.isFeatureSetCollection(a)||b.isFeatureSet(a))return a;if(b.isDictionary(a)||"esri.arcade.Attachment"===a?.declaredClass)return a.deepClone();
if("esri.arcade.Portal"===a?.declaredClass||a instanceof g.ArcadeModule)return a;b.isFunctionParameter(a);return a}let f;c.configureDeepClone=function(a){f=a};c.deepClone=d;Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});