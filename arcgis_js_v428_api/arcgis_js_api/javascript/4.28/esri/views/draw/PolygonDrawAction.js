// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/tslib.es6 ../../geometry ../../core/maybe ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass ./DrawAction ./DrawingMode ./DrawTool ./input/DrawEvents ../input/InputManager ../interactive/keybindings ../support/screenUtils ../../geometry/Point".split(" "),function(f,h,u,n,k,v,w,x,p,q,m,r,e,d,g,l,t){f.PolygonDrawAction=class extends q{constructor(a){super(a);
this._addVertexOnPointerUp=this._popVertexOnPointerMove=this._panEnabled=!1;this.mode=m.defaultDrawingMode}initialize(){"2d"===this.view.type?(this._addViewHandles(),this._addUndoRedoHandles()):this._addDrawTool()}destroy(){"2d"===this.view.type?(this._removeViewHandles(),this._removeUndoRedoHandles()):this._removeDrawTool();this.emit("destroy")}get _dragEnabled(){return"freehand"===this.mode||"hybrid"===this.mode}get _clickEnabled(){return"click"===this.mode||"hybrid"===this.mode}undo(){super.undo();
this.notifyChange("vertices")}redo(){super.redo();this.notifyChange("vertices")}complete(){"2d"===this.view.type?this._completeDrawing():this._drawTool.completeCreateOperation()}_getGeometryZValue(){return this.hasZ&&0<this.vertices.length?this.vertices[0][2]:this.defaultZ}_addViewHandles(){this._removeViewHandles();this.addHandles([this.view.on("click",a=>{a.stopPropagation()},d.ViewEventPriorities.TOOL),this.view.on("pointer-down",a=>{this._shouldHandlePointerEvent(a)&&(this._abortSnapping(),this._activePointerId=
a.pointerId,this._addVertexOnPointerUp=!0,this._cursorScreenPoint=l.createScreenPointFromEvent(a),"touch"===a.pointerType&&this._updateCursor(a.native))},d.ViewEventPriorities.TOOL),this.view.on("pointer-move",a=>{this._abortSnapping();this._popVertexOnPointerMove&&(this.undo(),this._popVertexOnPointerMove=!1);this._cursorScreenPoint=l.createScreenPointFromEvent(a);"touch"!==a.pointerType&&this._updateCursor(a.native)},d.ViewEventPriorities.TOOL),this.view.on("pointer-drag",a=>{this._shouldHandlePointerEvent(a)&&
(this._abortSnapping(),this._cursorScreenPoint=l.createScreenPointFromEvent(a),this._dragEnabled&&!this._panEnabled?this._vertexAddHandler(a):this._addVertexOnPointerUp=!1)},d.ViewEventPriorities.TOOL),this.view.on("pointer-up",a=>{this._shouldHandlePointerEvent(a)&&(this._abortSnapping(),this._activePointerId=null,this._addVertexOnPointerUp?this._clickEnabled?this._vertexAddHandler(a):(1===this.vertices.length&&this.vertices.pop(),this._drawCompleteHandler(a)):this._updateCursor(a.native,"touch"===
a.pointerType))},d.ViewEventPriorities.TOOL),this.view.on("drag",a=>{this._dragEnabled&&null!=this._activePointerId&&!this._panEnabled&&a.stopPropagation()},d.ViewEventPriorities.TOOL),this.view.on("drag",["Shift"],a=>{a.stopPropagation()},d.ViewEventPriorities.TOOL),this.view.on("double-click",a=>{a.stopPropagation();this._drawCompleteHandler(a)},d.ViewEventPriorities.TOOL),this.view.on("double-click",["Control"],a=>{a.stopPropagation();this._drawCompleteHandler(a)},d.ViewEventPriorities.TOOL),this.view.on("key-down",
a=>{const {key:b,repeat:c}=a;b===g.sketchKeys.vertexAdd&&!c&&this._cursorScreenPoint?(a.stopPropagation(),this._abortSnapping(),this._vertexAddHandler(a)):b!==g.sketchKeys.complete||c?b!==g.sketchKeys.undo||this.interactiveUndoDisabled||c?b!==g.sketchKeys.redo||this.interactiveUndoDisabled||c?b!==g.sketchKeys.pan||c||(a.stopPropagation(),this._panEnabled=!0):(a.stopPropagation(),this.redo()):(a.stopPropagation(),this.undo()):(a.stopPropagation(),this._drawCompleteHandler(a))},d.ViewEventPriorities.TOOL),
this.view.on("key-up",a=>{a.key===g.sketchKeys.pan&&(a.stopPropagation(),this._panEnabled=!1)},d.ViewEventPriorities.TOOL)],this._viewHandlesKey)}_addUndoRedoHandles(){this._removeUndoRedoHandles();this.addHandles([this._editGeometryOperations.on("vertex-remove",a=>{this.notifyChange("vertices");if("undo"===a.operation){const b=this._nativeEventHistory.undoStack.pop();this._nativeEventHistory.redoStack.push(b);const c=[...this._committedVertices];null!=this._stagedVertex&&c.push(this._coordinateHelper.pointToArray(this._stagedVertex));
this.emit("undo",new e.VertexRemoveEvent(this.view,b,a.vertices[0].index,c))}}),this._editGeometryOperations.on("vertex-add",a=>{this.notifyChange("vertices");if("apply"===a.operation)a=new e.VertexAddEvent(this.view,this._nativeEventHistory.undoStack[this._nativeEventHistory.undoStack.length],this._committedVertices.length-1,this.vertices),this.emit("vertex-add",a),a.defaultPrevented&&(this._popVertexOnPointerMove=!0);else if("redo"===a.operation){const b=this._nativeEventHistory.redoStack.pop();
this._nativeEventHistory.undoStack.push(b);const c=[...this._committedVertices];null!=this._stagedVertex&&c.push(this._coordinateHelper.pointToArray(this._stagedVertex));this.emit("redo",new e.VertexAddEvent(this.view,b,a.vertices[0].index,c))}})],this._undoRedoHandlesKey)}_removeViewHandles(){this.removeHandles(this._viewHandlesKey)}_removeUndoRedoHandles(){this.removeHandles(this._undoRedoHandlesKey)}_addDrawTool(){this._drawTool=new r.DrawTool({view:this.view,elevationInfo:this.elevationInfo,hasZ:this.hasZ,
geometryType:"polygon",mode:this.mode});this.view.addAndActivateTool(this._drawTool);this._drawTool.on("vertex-add",a=>{1===a.vertices.length&&this.emit("vertex-add",new e.VertexAddEvent(this.view,null,a.vertices[0].vertexIndex,this._drawTool.getVertexCoords()))});this._drawTool.on("cursor-update",a=>{1===a.vertices.length&&this.emit("cursor-update",new e.CursorUpdateEvent(this.view,null,a.vertices[0].vertexIndex,this._drawTool.getVertexCoords()))});this._drawTool.on("complete",a=>{this.emit("draw-complete",
new e.DrawCompleteEvent(null,this._drawTool.getVertexCoords()));this._removeDrawTool()})}_removeDrawTool(){this.removeHandles(this._drawToolHandlesKey);this.view.tools.remove(this._drawTool);this._drawTool=n.destroyMaybe(this._drawTool)}_addVertex(a,b){a=this._coordinateHelper.arrayToVector(a);this._isDuplicateOfLastVertex(a)||(this._lastVertexUnsnapped=this._stagedVertexUnsnapped,this._popCursorVertex(),this._editGeometryOperations.appendVertex(a),b=b||new Event("placeholder"),this._nativeEventHistory.undoStack.push(b))}_updateCursor(a,
b=!1){this._popCursorVertex();if(this._cursorScreenPoint){var c=this.getCoordsAndPointFromScreenPoint(this._cursorScreenPoint);null==c||b||this._pushCursorVertex(c.vertex,()=>this.emit("cursor-update",new e.CursorUpdateEvent(this.view,a,this._activeComponent.vertices.length,this.vertices,null!=this._stagedVertex?new t(this._stagedVertex):null)))}}_completeDrawing(a){this._activePointerId=null;this._popCursorVertex();3>this._committedVertices.length||(this._abortSnapping(),null!=this._snappingManager&&
this._snappingManager.doneSnapping(),a=new e.DrawCompleteEvent(a,this.vertices),this.emit("draw-complete",a),a.defaultPrevented||this._removeViewHandles())}};h.__decorate([k.property()],f.PolygonDrawAction.prototype,"_dragEnabled",null);h.__decorate([k.property()],f.PolygonDrawAction.prototype,"_clickEnabled",null);h.__decorate([k.property({type:m.drawingModes})],f.PolygonDrawAction.prototype,"mode",void 0);f.PolygonDrawAction=h.__decorate([p.subclass("esri.views.draw.PolygonDrawAction")],f.PolygonDrawAction);
Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});