// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports","../../core/urlUtils","../Portal"],function(b,d,e){b.createForGroupLayerItemRead=function(a){return{origin:"web-map",url:d.urlToObject(a.itemUrl),portal:a.portal||e.getDefault(),portalItem:a,readResourcePaths:[]}};b.createForGroupLayerItemWrite=function(a,c){const f=d.urlToObject(a.itemUrl);return{origin:"web-map",messages:[],writtenProperties:[],url:f,portal:a.portal||e.getDefault(),portalItem:a,initiator:c,verifyItemRelativeUrls:f?{rootPath:f.path,writtenUrls:[]}:null,blockedRelativeUrls:[],
resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}}};b.createForItemRead=function(a){return{origin:"portal-item",url:d.urlToObject(a.itemUrl),portal:a.portal||e.getDefault(),portalItem:a,readResourcePaths:[]}};b.createForItemWrite=function(a){const c=d.urlToObject(a.itemUrl);return{origin:"portal-item",messages:[],writtenProperties:[],url:c,portal:a.portal||e.getDefault(),portalItem:a,verifyItemRelativeUrls:c?{rootPath:c.path,writtenUrls:[]}:null,blockedRelativeUrls:[]}};Object.defineProperty(b,
Symbol.toStringTag,{value:"Module"})});