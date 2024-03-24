// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../../geometry ../../../../analysis/SlicePlane ../../../../core/has ../../../../core/Logger ../../../../core/mathUtils ../../../../core/screenUtils ../../../../chunks/mat4 ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../../../geometry/projection ../../../../geometry/support/Axis ../../../../chunks/boundedPlane ../../../../geometry/support/plane ../../../../geometry/support/ray ../../../../geometry/support/vector ../../../../geometry/support/vectorStacks ./settings ./sliceToolConfig ../support/projectionUtils ../../interactive/manipulatorUtils ../../interactive/visualElements/LineVisualElement ../../interactive/visualElements/SlicePlaneVisualElement ../../support/RenderCoordsHelper ../../support/geometryUtils/ray ../../webgl-engine/lib/Material ../../../interactive/interfaces ../../../../geometry/Extent".split(" "),
function(m,M,W,ia,X,E,F,t,d,Y,Z,N,u,B,G,H,h,I,v,aa,ba,ca,da,O,ea,P,y,fa){function Q(a,b,f,c,e,k){const g=d.dot(a,b),l=h.sv3d.get(),n=h.sv3d.get();switch(c===m.SliceOrientation.HORIZONTAL_OR_VERTICAL?Math.abs(g)>v.verticalDotThreshold?m.SliceOrientation.HORIZONTAL:m.SliceOrientation.VERTICAL:c){case m.SliceOrientation.VERTICAL:d.cross(l,Math.abs(g)<=v.smallAngleDotThreshold?a:f.viewUp,b);d.copy(n,b);break;case m.SliceOrientation.HORIZONTAL:d.cross(l,f.viewUp,b);d.cross(n,b,l);break;case m.SliceOrientation.TILTED:d.cross(l,
Math.abs(g)<=v.smallAngleDotThreshold?b:f.viewUp,a),d.cross(n,a,l)}a=d.cross(h.sv3d.get(),l,n);0<d.dot(a,f.viewForward)&&d.scale(n,n,-1);d.normalize(e,l);d.normalize(k,n)}function R(a,b,f){var c=b.worldUpAtPosition(a.origin,h.sv3d.get());b=a.basis1;c=H.angleAroundAxis(c,a.basis2,a.basis1)+x;return u.rotate(a,Math.round(c/x)*x-c,b,f)}function J(a,b){switch(b){case w.POSITIVE_X:return{basis:a.basis1,direction:1,position:d.add(h.sv3d.get(),a.origin,a.basis1),edge:b};case w.POSITIVE_Y:return{basis:a.basis2,
direction:1,position:d.add(h.sv3d.get(),a.origin,a.basis2),edge:b};case w.NEGATIVE_X:return{basis:a.basis1,direction:-1,position:d.subtract(h.sv3d.get(),a.origin,a.basis1),edge:b};case w.NEGATIVE_Y:return{basis:a.basis2,direction:-1,position:d.subtract(h.sv3d.get(),a.origin,a.basis2),edge:b}}}function S(a,b,f){const c=f.projectToRenderScreen(d.add(h.sv3d.get(),a,b),F.castRenderScreenPointArray3(h.sv3d.get()));a=f.projectToRenderScreen(d.subtract(h.sv3d.get(),a,b),F.castRenderScreenPointArray3(h.sv3d.get()));
return d.squaredLength(d.subtract(c,c,a))}function A(a){const b=d.length(a.basis1);a=d.length(a.basis2);return v.resizeHandleEdgePaddingFrac*Math.min(b,a)}function K(a){return 0!==a.direction[0]&&0!==a.direction[1]}function ha(a,b,f,c,e,k,g=u.create()){if(!k.toRenderCoords(a,g.origin))return X.getLogger("esri.views.3d.analysis.Slice.sliceToolUtils").error(`Failed to project slice plane position, projection from ${a.spatialReference.wkid} is not supported`),null;k.worldBasisAtPosition(g.origin,N.Axis.X,
g.basis1);k.worldBasisAtPosition(g.origin,N.Axis.Y,g.basis2);B.fromVectorsAndPoint(g.basis2,g.basis1,g.origin,g.plane);u.rotate(g,-E.deg2rad(b),u.normal(g),g);u.rotate(g,E.deg2rad(f),g.basis1,g);d.scale(g.basis1,g.basis1,c/2);d.scale(g.basis2,g.basis2,e/2);u.updateUnboundedPlane(g);return g}function T(a,b){if(null==a?.position)return null;const f=aa.applyProjectionAndElevationAlignment(a.position,b.spatialReference,b.elevationProvider);if(null==f)return null;b=O.RenderCoordsHelper.renderUnitScaleFactor(a.position.spatialReference,
b.spatialReference);return{position:f,heading:a.heading,tilt:a.tilt,renderWidth:a.width*b,renderHeight:a.height*b}}function U(a,b,f,c=u.create()){if(null==a)return null;a=ha(a.position,a.heading,a.tilt,a.renderWidth,a.renderHeight,b.renderCoordsHelper,c);f.tiltEnabled||null==a||R(a,b.renderCoordsHelper,a);return a}var w;(function(a){a[a.POSITIVE_X=0]="POSITIVE_X";a[a.POSITIVE_Y=1]="POSITIVE_Y";a[a.NEGATIVE_X=2]="NEGATIVE_X";a[a.NEGATIVE_Y=3]="NEGATIVE_Y"})(w||(w={}));M=y.ManipulatorStateCustomFlags.Custom1;
m.RotationAxis=void 0;(function(a){a[a.HEADING=1]="HEADING";a[a.TILT=2]="TILT"})(m.RotationAxis||(m.RotationAxis={}));m.SliceOrientation=void 0;(function(a){a[a.HORIZONTAL_OR_VERTICAL=0]="HORIZONTAL_OR_VERTICAL";a[a.HORIZONTAL=1]="HORIZONTAL";a[a.VERTICAL=2]="VERTICAL";a[a.TILTED=3]="TILTED"})(m.SliceOrientation||(m.SliceOrientation={}));const L=y.ManipulatorStateCustomFlags.Custom2,C=G.create(),x=Math.PI/2;G=y.ManipulatorStateCustomFlags.Custom1;y=y.ManipulatorStateCustomFlags.Custom2;m.DidPointerMoveRecentlyFlag=
M;m.IsShiftEdgeOnScreenFlag=L;m.calculateBoundedPlaneTranslateRotate=function(a,b){return ba.calculateTranslateRotateFromBases(a.basis1,a.basis2,a.origin,b)};m.calculateDiagonalResizeHandleScale=function(a){return A(a)};m.calculatePlaneHalfSize=function(a,b){return v.initialPlaneHalfSizeViewProportion*Math.min(b.width,b.height)*b.computeRenderPixelSizeAt(a)};m.createGridVisualElement=function(a){return new da.SlicePlaneVisualElement({view:a,attached:!1,backgroundColor:I.planeColor,gridColor:I.getGridColor(a.effectiveTheme),
gridWidth:4,renderOccluded:P.RenderOccludedFlag.OccludeAndTransparent,isDecoration:!0})};m.createOutlineVisualElement=function(a){return new ca.LineVisualElement({view:a,attached:!1,color:I.getOutlineColor(a.effectiveTheme),width:v.planeOutlineWidth,renderOccluded:P.RenderOccludedFlag.OccludeAndTransparent,geometry:[[[-1,-1,0],[1,-1,0],[1,1,0],[-1,1,0],[-1,-1,0]]],isDecoration:!0})};m.createPlane=function(a,b,f,c,e,k,g,l){g=g.worldUpAtPosition(a,h.sv3d.get());Q(b,g,e,k,l.basis1,l.basis2);d.scale(l.basis1,
l.basis1,f);d.scale(l.basis2,l.basis2,c);d.copy(l.origin,a);B.fromVectorsAndPoint(l.basis2,l.basis1,l.origin,l.plane);return l};m.createRotatePlane=function(a,b,f,c){b=b.worldUpAtPosition(a.origin,h.sv3d.get());const e=h.sv3d.get();switch(f){case m.RotationAxis.HEADING:d.copy(e,b);break;case m.RotationAxis.TILT:d.copy(e,a.basis1)}return B.fromPositionAndNormal(a.origin,e,c)};m.createShiftPlane=function(a,b,f,c){f=d.cross(h.sv3d.get(),b,f);d.cross(f,f,b);return B.fromPositionAndNormal(a,f,c)};m.forceHorizontalOrVertical=
R;m.isDiagonalResizeHandle=K;m.isIBuildingSceneLayerView3D=function(a){return null!=("building-scene-3d"===a.type?a:null)};m.normalToBases=Q;m.planeToExtent=function(a,b,f){if(null==a)return null;const c=a.origin,e=h.sv3d.get(),k=h.sv3d.get(),g=h.sv3d.get(),l=h.sv3d.get();d.add(e,c,a.basis1);d.add(e,e,a.basis2);d.add(k,c,a.basis1);d.sub(k,k,a.basis2);d.sub(g,c,a.basis1);d.sub(g,g,a.basis2);d.sub(l,c,a.basis1);d.add(l,l,a.basis2);let n,p,q,r,z,D;for(const V of[e,k,g,l]){a=b.fromRenderCoords(V,V,f);
if(null==a)return null;n=null==n?a[0]:Math.min(n,a[0]);p=null==p?a[0]:Math.max(p,a[0]);q=null==q?a[1]:Math.min(q,a[1]);r=null==r?a[1]:Math.max(r,a[1]);z=null==z?a[2]:Math.min(z,a[2]);D=null==D?a[2]:Math.max(D,a[2])}return new fa({xmin:n,xmax:p,ymin:q,ymax:r,zmin:z,zmax:D,spatialReference:f})};m.planeToShape=function(a,b,f,c=new W){if(null==a)return null;const {renderCoordsHelper:e}=b;var k=e.fromRenderCoords(a.origin,b.spatialReference);if(null==k)return null;k=Z.tryProjectWithZConversion(k,f);if(null==
k)return null;c.position=k;k=2*d.length(a.basis1);const g=2*d.length(a.basis2);b=O.RenderCoordsHelper.renderUnitScaleFactor(b.spatialReference,f);c.width=k*b;c.height=g*b;b=e.worldUpAtPosition(a.origin,h.sv3d.get());c.tilt=E.rad2deg(H.angleAroundAxis(b,a.basis2,a.basis1)+x);c.heading=e.headingAtPosition(a.origin,a.basis1)-90;return c};m.projectAndElevationAlignShape=T;m.projectedShapeToPlane=U;m.resizeNormal=G;m.resizeOutlineOnly=y;m.resizePlane=function(a,b,f,c,e,k){const g=d.copy(h.sv3d.get(),e.origin);
d.add(g,g,d.scale(h.sv3d.get(),e.basis1,0>a.direction[0]?1:-1));d.add(g,g,d.scale(h.sv3d.get(),e.basis2,0>a.direction[1]?1:-1));var l=d.length(e.basis1);const n=d.length(e.basis2);f=d.subtract(h.sv3d.get(),f,g);var p=d.subtract(h.sv3d.get(),b,g);let q=0;b=0;if(K(a)){var r=A(e);const z=A(k);q=l-.5*a.direction[0]*d.dot(e.basis1,p)/l;b=n-.5*a.direction[1]*d.dot(e.basis2,p)/n;p=z/r;q*=p;b*=p}p=.5*a.direction[0]*d.dot(e.basis1,f)/l;r=.5*a.direction[1]*d.dot(e.basis2,f)/n;f=q+p;b+=r;l=d.scale(h.sv3d.get(),
e.basis1,f/l);e=d.scale(h.sv3d.get(),e.basis2,b/n);(0>=f||S(k.origin,l,c)<=v.planeMinBasisScreenLen2)&&d.copy(l,k.basis1);(0>=b||S(k.origin,e,c)<=v.planeMinBasisScreenLen2)&&d.copy(e,k.basis2);c=d.copy(h.sv3d.get(),g);d.add(c,c,d.scale(h.sv3d.get(),l,0>a.direction[0]?-1:1));d.add(c,c,d.scale(h.sv3d.get(),e,0>a.direction[1]?-1:1));return u.fromValues(c,l,e,k)};m.shapeToPlane=function(a,b,f,c=u.create()){a=T(a,b);return null==a?null:U(a,b,f,c)};m.updateResizeHandle=function(a,b,f,c){var e=d.length(c.basis1);
const k=d.length(c.basis2),g=A(c),l=A(c),n=d.set(h.sv3d.get(),0,0,0);d.add(n,d.scale(h.sv3d.get(),c.basis1,b.direction[0]),d.scale(h.sv3d.get(),c.basis2,b.direction[1]));d.add(n,c.origin,n);c=0;let p=1;K(b)?(1===b.direction[0]&&-1===b.direction[1]?c=x:1===b.direction[0]&&1===b.direction[1]?c=Math.PI:-1===b.direction[0]&&1===b.direction[1]&&(c=3*Math.PI/2),p=l):(b=0!==b.direction[0]?1:2,c=1===b?x:0,p=(1===b?k:e)-g);e=t.fromZRotation(h.sm4d.get(),c);t.scale(e,e,d.set(h.sv3d.get(),p,p,p));t.multiply(e,
f,e);e[12]=0;e[13]=0;e[14]=0;a.modelTransform=e;a.renderLocation=n};m.updateRotateHeadingHandle=function(a,b,f,c){c=c.worldUpAtPosition(f.origin,h.sv3d.get());const e=J(f,w.POSITIVE_X),k=t.fromZRotation(h.sm4d.get(),e.edge*Math.PI/2);t.rotateX(k,k,-(H.angleAroundAxis(c,f.basis2,f.basis1)+x));t.multiply(k,b,k);k[12]=0;k[13]=0;k[14]=0;a.modelTransform=k;a.renderLocation=e.position};m.updateRotateTiltHandle=function(a,b,f){f=J(f,w.POSITIVE_Y);const c=t.fromZRotation(h.sm4d.get(),f.edge*Math.PI/2);t.rotateX(c,
c,x);t.multiply(c,b,c);c[12]=0;c[13]=0;c[14]=0;a.modelTransform=c;a.renderLocation=f.position};m.updateShiftRestartHandle=function(a,b,f,c){var e=J(f,w.NEGATIVE_X);const k=h.sm4d.get();t.rotateZ(k,b,e.edge*Math.PI/2);b=d.normalize(h.sv3d.get(),e.basis);b=d.scale(h.sv3d.get(),b,e.direction*c.computeScreenPixelSizeAt(e.position)*v.shiftRestartOffsetDistance);d.add(b,b,e.position);e=c.projectToRenderScreen(b,F.castRenderScreenPointArray3(h.sv3d.get()));const [g,l,n,p]=c.viewport;var q=Math.min(n,p)/
16;let r=!0;e[0]<g+q?(e[0]=g+q,r=!1):e[0]>g+n-q&&(e[0]=g+n-q,r=!1);e[1]<l+q?(e[1]=l+q,r=!1):e[1]>l+p-q&&(e[1]=l+p-q,r=!1);q=r;ea.fromRender(c,e,C);d.normalize(C.direction,C.direction);c=h.sv3d.get();!q&&u.intersectRay(f,C,c)&&(b=c);k[12]=0;k[13]=0;k[14]=0;a.modelTransform=k;a.renderLocation=Y.clone(b);a.state=q?a.state|L:a.state&~L};Object.defineProperty(m,Symbol.toStringTag,{value:"Module"})});