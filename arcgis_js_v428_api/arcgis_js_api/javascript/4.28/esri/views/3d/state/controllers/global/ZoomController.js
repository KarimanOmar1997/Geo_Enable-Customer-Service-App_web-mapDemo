// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/tslib.es6 ../../../../../core/mathUtils ../../../../../core/screenUtils ../../../../../core/Logger ../../../../../core/accessorSupport/ensureType ../../../../../core/arrayUtils ../../../../../core/has ../../../../../core/Error ../../../../../core/accessorSupport/decorators/subclass ../../../../../chunks/vec2 ../../../../../chunks/vec2f64 ../../../../../chunks/vec3 ../../../../../chunks/vec3f64 ../../../../../geometry/ellipsoidUtils ../../../../../geometry/support/axisAngle ../../../../../chunks/sphere ../../../camera/constraintUtils ../../../camera/constraintUtils/ConstraintTypes ../../../camera/constraintUtils/InteractionType ../../../camera/constraintUtils/surfaceCollision ../../../camera/constraintUtils/TiltMode ../InteractiveController ../../utils/navigationUtils ../../../support/geometryUtils/ray".split(" "),
function(h,t,u,v,F,G,H,I,J,w,l,m,c,g,x,n,y,p,z,A,B,C,D,d,E){h.ZoomController=class extends D.InteractiveController{constructor(){super(...arguments);this._pickPoint=g.create();this._tmpP0=m.create();this._panAxisAngle=n.create();this._tmpRayDir=g.create();this._tmpRayDirPick=g.create();this._targetOnSphere=g.create();this._navMode=d.NavigationMode.Horizontal;this._tmpRay={origin:g.create(),direction:g.create()};this.dragBeginPoint=v.createScreenPointArray();this._normalizedAnchorPoint=m.create();
this._constraintOptions={selection:z.ConstraintTypes.ALL_EXCEPT_COLLISION,interactionType:A.InteractionType.ZOOM,interactionFactor:0,interactionStartCamera:null,interactionDirection:null,tiltMode:C.TiltMode.TUMBLE};this._sphere=y.create();this._hasPickPoint=!1}get _intersectionHelper(){return this.view.sceneIntersectionHelper}begin(b){if(this.active){l.copy(this.dragBeginPoint,b);d.normalizeCoordinate(this.startCamera,b,this._normalizedAnchorPoint);var a=x.getReferenceEllipsoid(this.view.spatialReference),
f=d.pickPointAndInitSphere(this._intersectionHelper,this.startCamera,b,a,d.SpherePickPointFallback.Ellipsoid,0===this.view.map.ground.opacity?d.contentIntersectorOptions:{});this._navMode=d.decideNavigationMode(this.startCamera,b,a);if(this._navMode===d.NavigationMode.Horizontal)this._hasPickPoint=!!f.scenePickPoint,this._pickPoint=f.scenePickPoint??this._pickPoint,this._sphere=f.sphere;else{E.fromScreenAtEye(this.startCamera,b,this._tmpRay);c.normalize(this._tmpRay.direction,this._tmpRay.direction);
let e;null!=f.scenePickPoint&&(c.subtract(this._tmpRayDirPick,this.startCamera.eye,f.scenePickPoint),e=c.length(this._tmpRayDirPick));a=Math.abs(this.view.camera.position.z);this.view.renderCoordsHelper.worldUpAtPosition(this.startCamera.eye,q);a=u.clamp(Math.min(d.pivotDistanceModifier,1/Math.abs(c.dot(q,this._tmpRay.direction)))*a,d.distanceClampValues[0],d.distanceClampValues[1]);b=this.view._stage.renderView.getMinimalDepthForArea(null,b[0],b[1],this.view.state.camera,d.screenPixelArea);a=null!=
b?b:a;a=null!=e?Math.min(a,e):a;this._hasPickPoint=!0;c.scale(this._tmpRay.direction,this._tmpRay.direction,a);c.add(this._pickPoint,this._tmpRay.origin,this._tmpRay.direction)}this._constraintOptions.interactionStartCamera=this.startCamera}}update(b){if(this.active){this.currentCamera.eye=this.startCamera.eye;this.currentCamera.center=this.startCamera.center;this.currentCamera.up=this.startCamera.up;if(this._navMode===d.NavigationMode.Horizontal){c.subtract(this._tmpRayDir,this.currentCamera.center,
this.currentCamera.eye);var a=c.length(this._tmpRayDir);d.normalizeCoordinate(this.currentCamera,b,this._tmpP0);var f=12*(this._normalizedAnchorPoint[1]-this._tmpP0[1]),e=a*2**f;const r=this.view.state.constraints.minimumPoiDistance;0>f&&e<r&&(e=r);if(1E-6>Math.abs(a-e))return;this._hasPickPoint&&e<a&&(f=1-(1-e/a)*(1-this._sphere[3]/c.length(this.currentCamera.center)),this.currentCamera.center=c.scale(k,this.currentCamera.center,f));c.scale(this._tmpRayDir,this._tmpRayDir,-e/a);this.currentCamera.eye=
c.add(k,this.currentCamera.center,this._tmpRayDir);this._constraintOptions.interactionFactor=p.pixelDistanceToInteractionFactor(l.distance(this.dragBeginPoint,b));p.applyAll(this.view,this.currentCamera,this._constraintOptions);this._hasPickPoint&&(d.sphereOrPlanePointFromScreenPoint(this._sphere,this.currentCamera,this.dragBeginPoint,this._targetOnSphere),n.fromPoints(this._pickPoint,this._targetOnSphere,this._panAxisAngle),d.applyRotation(this.currentCamera,this._sphere,this._panAxisAngle))}else{a=
c.length(this._tmpRay.direction);d.normalizeCoordinate(this.currentCamera,b,this._tmpP0);b=12*(this._normalizedAnchorPoint[1]-this._tmpP0[1]);e=a*2**b;f=this.view.state.constraints.minimumPoiDistance;0>b&&e<f&&(e=f);if(1E-6>Math.abs(a-e))return;c.scale(this._tmpRayDir,this._tmpRay.direction,1-e/a);this.currentCamera.eye=c.add(k,this.currentCamera.eye,this._tmpRayDir);this.currentCamera.center=c.add(k,this.currentCamera.center,this._tmpRayDir)}B.applySurfaceCollisionConstraint(this.view,this.currentCamera);
this.commitCamera()}}end(){this.active&&this.finishController()}};h.ZoomController=t.__decorate([w.subclass("esri.views.3d.state.controllers.global.ZoomController")],h.ZoomController);const k=g.create(),q=g.create();Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});