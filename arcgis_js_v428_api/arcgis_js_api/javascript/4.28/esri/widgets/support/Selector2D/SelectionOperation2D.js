// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../symbols ../../../core/Collection ../../../core/Evented ../../../core/promiseUtils ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/decorators/subclass ../../../layers/GraphicsLayer ../../Sketch/SketchViewModel ./selectorUtils ../../../symbols/SimpleFillSymbol ../../../symbols/SimpleLineSymbol ../../../symbols/SimpleMarkerSymbol".split(" "),function(e,
c,w,x,m,f,H,I,J,y,z,A,B,C,D,E){c=class extends x.EventedAccessor{constructor({options:a,view:b}){super();this._activeOptions=this._abortController=null;this._completed=!1;this._dashedFillSymbol=new C({color:[0,0,0,0],outline:{style:"dash",color:[12,207,255],width:2}});this._dashedLineSymbol=new D({style:"dash",color:[12,207,255],width:2});this._defaultOptions={createTool:"rectangle",selectionOptions:{overlaps:!0,intersects:!0,contains:!1}};this._processSelectionGeometry=async({canceled:d,completed:n,
selector:p})=>{const {_activeOptions:F,sources:q,selection:r,view:t}=this;this._abortController&&this._abortController.abort();if(n||d)this._completed=!0;if(d)this._onComplete([],!0);else if(p&&q?.length&&t){this._abortController=d=new AbortController;var {added:u,removed:v}=await B.getSelectionFromGeometry({currentSelection:r,sources:q,options:F.selectionOptions,selector:p,signal:d.signal,view:t});this._abortController===d&&(this._abortController=null);d.signal.aborted||(n?this._onComplete(this.selection.toArray(),
!1):(u.length||v.length)&&this.emit("selection-change",{added:u,removed:v,type:"selection-change"}))}else r.removeAll()};this._processDebounced=m.debounce(this._processSelectionGeometry,100);this._sketchViewModel=new A;this._sketchGraphicsLayer=new z({listMode:"hide",internal:!0});this._transparentPointSymbol=new E({color:[0,0,0,0],outline:{style:"none",width:0}});this.options=null;this.selection=new w;this.sources=null;this.options=a;this.view=b;const {_dashedFillSymbol:g,_dashedLineSymbol:h,_sketchViewModel:k,
_sketchGraphicsLayer:G,_transparentPointSymbol:l}=this;k.set({layer:G,activePointSymbol:l,activeLineSymbol:h,activeVertexSymbol:l,activeFillSymbol:g,pointSymbol:l,polygonSymbol:g,polylineSymbol:h,vertexSymbol:l,view:b});this.addHandles([k.on("create",d=>this._onSketchEvent(d)),k.on(["undo","redo"],d=>this._onSketchEvent(d)),k.watch("activeComponent.forceUniformSize",()=>this._onSketchGeometryChange())])}initialize(){this._load()}set cursor(a){const b=this._sketchViewModel?.activeComponent;if("draw-2d"===
b?.type||"draw-3d"===b?.type)b.cursor=a;this._set("cursor",a)}get state(){const {_completed:a,_sketchViewModel:{state:b}}=this;return a?"complete":"active"===b?"active":"disabled"}set view(a){this._sketchViewModel.view=a;this._set("view",a)}cancel(){return this._sketchViewModel.cancel()}async _load(){await this.view?.whenReady();const {_defaultOptions:a,options:b}=this,{createTool:g,createOptions:h}=this._activeOptions={...a,...b,createOptions:{...a.createOptions,cursor:b?.createOptions?.cursor||
this.cursor||a.createOptions?.cursor,...b?.createOptions},selectionOptions:{...a.selectionOptions,...b?.selectionOptions}};this._sketchViewModel.create(g,h)}_onSketchEvent(a){m.ignoreAbortErrors(this._processDebounced({canceled:"create"===a.type&&"cancel"===a.state,completed:"create"===a.type&&"complete"===a.state,selector:("create"===a.type?a.graphic:a.graphics[0])?.geometry}))}_onSketchGeometryChange(){const a=this._sketchViewModel.createGraphic?.geometry;a&&m.ignoreAbortErrors(this._processDebounced({canceled:!1,
completed:!1,selector:a}))}_onComplete(a,b){this.removeAllHandles();this.notifyChange("state");this.emit("complete",{aborted:b,selection:a,type:"complete"})}};e.__decorate([f.property()],c.prototype,"_abortController",void 0);e.__decorate([f.property()],c.prototype,"_completed",void 0);e.__decorate([f.property()],c.prototype,"cursor",null);e.__decorate([f.property()],c.prototype,"options",void 0);e.__decorate([f.property({readOnly:!0})],c.prototype,"selection",void 0);e.__decorate([f.property()],
c.prototype,"sources",void 0);e.__decorate([f.property({readOnly:!0})],c.prototype,"state",null);e.__decorate([f.property()],c.prototype,"view",null);return c=e.__decorate([y.subclass("esri.widgets.support.Selector2D.SelectionOperation2D")],c)});