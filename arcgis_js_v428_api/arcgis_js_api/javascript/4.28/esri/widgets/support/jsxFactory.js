// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports","./jsxWidgetSupport"],function(f,h){var g=function(a,e){for(var b=0,c=a.length;b<c;b++){var d=a[b];Array.isArray(d)?g(d,e):null!==d&&void 0!==d&&!1!==d&&(d.hasOwnProperty("vnodeSelector")||(d={vnodeSelector:"",properties:void 0,children:void 0,text:d.toString(),domNode:null}),e.push(d))}},k=function(a,e){for(var b=[],c=2;c<arguments.length;c++)b[c-2]=arguments[c];if(1===b.length&&"string"===typeof b[0])return{vnodeSelector:a,properties:e||void 0,children:void 0,text:b[0],domNode:null};
c=[];g(b,c);return{vnodeSelector:a,properties:e||void 0,children:c,text:void 0,domNode:null}};f.tsx=function(a,e,...b){return"function"!==typeof a||h.isWidgetConstructor(a)?k(a,e,...b):a(e,...b)};f.tsxFragment=function(...a){return a};Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});