// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/Logger","../../../../core/promiseUtils","../../../../layers/graphics/hydratedFeatures","../../../../support/arcadeOnDemand"],function(c,g,h,k,l){const m=g.getLogger("esri.views.3d.layers.graphics.featureExpressionInfoUtils");c.clone=function(a){return{cachedResult:a.cachedResult,arcade:a.arcade?{func:a.arcade.func,context:a.arcade.modules.arcadeUtils.createExecContext(null,{sr:a.arcade.context.spatialReference}),modules:a.arcade.modules}:null}};c.createContext=
async function(a,b,d,f){a=a?.expression;if("string"!==typeof a)return null;var e="0"===a?0:null;if(null!=e)return{cachedResult:e};e=await l.loadArcade();h.throwIfAborted(d);d=e.arcadeUtils;a=d.createSyntaxTree(a);return d.dependsOnView(a)?(null!=f&&f.error("Expressions containing '$view' are not supported on ElevationInfo"),{cachedResult:0}):{arcade:{func:d.createFunction(a),context:d.createExecContext(null,{sr:b}),modules:e}}};c.createContextWithoutExpressionSupport=function(a){a=a?.expression;return"string"===
typeof a&&(a="0"===a?0:null,null!=a)?{cachedResult:a}:null};c.createFeature=function(a,b,d){return a.arcadeUtils.createFeature(b.attributes,b.geometry,d)};c.execute=function(a){if(null!=a){if(null!=a.cachedResult)return a.cachedResult;var b=a.arcade;b=b?.modules.arcadeUtils.executeFunction(b.func,b.context);"number"!==typeof b&&(b=a.cachedResult=0);return b}return 0};c.extractExpressionInfo=function(a,b=!1){a=a?.featureExpressionInfo;b||"0"===a?.expression||(a=null);return a??null};c.setContextFeature=
function(a,b){null!=a&&null==a.cachedResult&&(b&&a.arcade?(b._geometry&&(b._geometry=k.hydrateGeometry(b._geometry)),a.arcade.modules.arcadeUtils.updateExecContext(a.arcade.context,b)):m.errorOncePerTick("Arcade support required but not provided"))};c.zeroContext={cachedResult:0};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});