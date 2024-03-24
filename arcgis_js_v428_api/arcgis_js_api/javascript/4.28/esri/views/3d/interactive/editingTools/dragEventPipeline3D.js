// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/screenUtils ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../../../geometry/projection ../../../../geometry/support/plane ../../../../geometry/support/ray ../../../../geometry/support/vector ../../../../geometry/support/vectorStacks ../../../../support/elevationInfoUtils ../../support/geometryUtils/ray ../../webgl-engine/lib/Intersector ../../webgl-engine/lib/IntersectorInterfaces ../../webgl-engine/lib/verticalOffsetUtils ../../../interactive/dragEventPipeline".split(" "),
function(h,n,l,p,u,r,H,I,v,w,x,J,y,z,K){function A(a,b){return B(a,()=>b)}function B(a,b){const c=p.create(),f=p.create();let g=!1;return e=>{const k=b(e);if("start"===e.action){var d=n.screenPointObjectToArray(e.screenStart,n.castScreenPointArray(v.sv2d.get()));d=x.fromScreen(a.state.camera,d,C);null!=d&&(g=r.intersectRay(k,d,c))}if(!g)return null;d=n.screenPointObjectToArray(e.screenEnd,n.castScreenPointArray(v.sv2d.get()));d=x.fromScreen(a.state.camera,d,C);return null==d?null:r.intersectRay(k,
d,f)?{...e,renderStart:c,renderEnd:f,plane:k,ray:d}:null}}function L(a,b,c=0,f=null,g=null){let e=null;return k=>{if("start"===k.action&&(e=a.sceneIntersectionHelper.intersectElevationFromScreen(n.createScreenPointArray(k.screenStart.x,k.screenStart.y),b,c,g),null!=e&&null!=f&&!u.projectPoint(e,e,f))||null==e)return null;const d=a.sceneIntersectionHelper.intersectElevationFromScreen(n.createScreenPointArray(k.screenEnd.x,k.screenEnd.y),b,c,g);return null!=d?null==f||u.projectPoint(d,d,f)?{...k,mapStart:e,
mapEnd:d}:null:null}}function D(a,b,c,f=null,g=null){b=w.getZForElevationMode(b,a,c);return L(a,c,b,f,g)}function E(a,b,c,f=null,g=null){return D(a,c,w.getGraphicEffectiveElevationInfo(b),f,g)}function M(a,b){const c=N,f=O,g=r.create();a.renderCoordsHelper.worldUpAtPosition(b,c);a=l.cross(g,c,l.subtract(f,b,a.state.camera.eye));l.cross(a,a,c);return r.fromPositionAndNormal(b,a,g)}function F(a,b){const c=p.create(),f=l.length(b);a.renderCoordsHelper.worldUpAtPosition(b,c);const g=p.create(),e=p.create(),
k=d=>{l.subtract(d,d,b);I.projectPoint(c,d,d);"global"===a.viewingMode&&l.length(d)*Math.sign(l.dot(c,d))<-f+.001&&l.subtract(d,l.scale(d,c,.001),b);l.add(d,d,b);return d};return d=>{d.renderStart=k(l.copy(g,d.renderStart));d.renderEnd=k(l.copy(e,d.renderEnd));return d}}function G(a,b){const c=a.renderCoordsHelper;return f=>{const g=c.fromRenderCoords(f.renderStart,b),e=c.fromRenderCoords(f.renderEnd,b);return null!=g&&null!=e?{...f,mapStart:g,mapEnd:e}:null}}h.SurfaceType=void 0;(function(a){a[a.GROUND=
0]="GROUND";a[a.OTHER=1]="OTHER"})(h.SurfaceType||(h.SurfaceType={}));const N=p.create(),O=p.create(),C=H.create();h.convertToMapCoordinates=G;h.hideManipulatorWhileDragging=function(a){let b=null;return c=>{switch(c.action){case "start":b=a.disableDisplay();break;case "end":case "cancel":null!=b&&(b.remove(),b=null)}return c}};h.projectToWorldUp=F;h.screenToMap3D=function(a,b=null){const c=J.newIntersector(a.state.viewingMode);c.options.selectionMode=!0;c.options.store=y.StoreResults.MIN;c.options.hud=
!1;const f=n.createScreenPointArray(),g={requiresGroundFeedback:!0,enableDraped:!0,exclude:new Set},e=p.create(),k=b??a.spatialReference,d=m=>{a.map.ground&&1>a.map.ground.opacity?g.exclude.add(z.terrainId):g.exclude.delete(z.terrainId);a.sceneIntersectionHelper.intersectIntersectorScreen(n.screenPointObjectToArray(m,f),c,g);m=c.results.min;if(m.getIntersectionPoint(e))m=m.intersector===y.IntersectorType.TERRAIN?h.SurfaceType.GROUND:h.SurfaceType.OTHER;else if(c.results.ground.getIntersectionPoint(e))m=
h.SurfaceType.GROUND;else return null;return{location:a.renderCoordsHelper.fromRenderCoords(e,k),surfaceType:m}};let t;return m=>{if("start"===m.action){var q=d(m.screenStart);t=null!=q?q.location:null}if(null==t)return null;q=d(m.screenEnd);return null!=q?.location?{...m,mapStart:t,mapEnd:q.location,surfaceType:q.surfaceType}:null}};h.screenToMapXYAtLocation=D;h.screenToMapXYForGraphic=function(a,b,c,f){a=b.toMap(a.screenStart,{include:[c]});return null!=a?E(b,c,a,f):null};h.screenToMapXYForGraphicAtLocation=
E;h.screenToRenderPlane=A;h.screenToRenderPlaneFromEvent=function(a){return B(a,b=>b.plane)};h.screenToZConstrained=function(a,b,c){let f=null;const g=new K.EventPipeline;g.next(A(a,M(a,b))).next(F(a,b)).next(G(a,c)).next(e=>{e.mapEnd.x=e.mapStart.x;e.mapEnd.y=e.mapStart.y;f=e});return e=>{f=null;g.execute(e);return f}};Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});