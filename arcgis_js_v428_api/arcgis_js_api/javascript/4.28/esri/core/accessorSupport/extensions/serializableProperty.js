// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../ensureType ./serializableProperty/originAliases ./serializableProperty/reader ./serializableProperty/shorthands ./serializableProperty/writer".split(" "),function(e,m,n,h,p,k){function f(a,b,c){a=a?.json;a?.origins&&c&&(c="link-chart"===c?a.origins[c]&&("any"===b||b in a.origins[c])?a.origins[c]:a.origins["web-map"]:a.origins[c])&&("any"===b||b in c)&&(a=c);return a}function l(a){if(a.type){var b=0;for(a=a.type;Array.isArray(a)&&!m.isOneOf(a);)a=a[0],b++;return{type:a,ndimArray:b}}}
function g(a){if(a.types){var b=0;for(a=a.types;Array.isArray(a);)a=a[0],b++;return{types:a,ndimArray:b}}}e.originSpecificPropertyDefinition=function(a,b){return f(a,"any",b?.origin)};e.originSpecificReadPropertyDefinition=function(a,b){return f(a,"read",b?.origin)};e.originSpecificWritePropertyDefinition=function(a,b){return f(a,"write",b?.origin)};e.processPrototypePropertyMetadata=function(a){if(p.process(a)){n.process(a);var b=a.json.types?g(a.json):a.type?l(a):g(a);if(a.json.origins)for(const q in a.json.origins){const d=
a.json.origins[q];if(d.types){var c=d;c=c.type?l(c):g(c)}else c=b;h.create(c,d,!1);d.types&&!d.write&&a.json.write&&a.json.write.enabled&&(d.write={...a.json.write});k.create(c,d)}h.create(b,a.json,!0);k.create(b,a.json)}};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});