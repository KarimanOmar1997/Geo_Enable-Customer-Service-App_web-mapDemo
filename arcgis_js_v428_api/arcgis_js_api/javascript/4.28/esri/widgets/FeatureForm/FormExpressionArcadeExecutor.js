// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/tslib.es6 ../../arcade ../../core/Accessor ../../core/promiseUtils ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass ../../core/support/UpdatingHandles ../../layers/support/fieldUtils".split(" "),function(a,b,g,l,m,c,h,t,u,n,p,q){h=Symbol("FormExpressionArcadeExecutor");a.FormExpressionArcadeExecutor=class extends l{constructor(d){super(d);this[r]=!0;
this._lastEvaluatedValue=null;this._abortController=new AbortController;this._stale=!1;this._updatingTracking=new p.UpdatingHandles;this._executeAsyncDebounced=m.debounce(async(e,f,k)=>{e=await this.executor.executeAsync(e,{...f,abortSignal:k});if(k.aborted)return this._lastEvaluatedValue;this._lastEvaluatedValue=e;this._stale=!1;return e})}get isAsync(){return this.executor.isAsync}get fieldsUsed(){return this.executor.fieldsUsed}get syntaxTree(){return this.executor.syntaxTree}get updating(){return this._updatingTracking.updating}get stale(){return this._stale}get geometryUsed(){return this.executor.geometryUsed}get variablesUsed(){return this.executor.variablesUsed}get lastEvaluatedValue(){return this._lastEvaluatedValue}abort(){this._abortController.abort()}execute(d,
e){this._abortController=new AbortController;return this._lastEvaluatedValue=d=this.executor.execute(d,{...e,abortSignal:this._abortController.signal})}async executeAsync(d,e){this._abortController=new AbortController;return this._updatingTracking.addPromise(this._executeAsyncDebounced(d,e??{},this._abortController.signal))}markStale(){this._stale=!0}reset(){this.abort();this._lastEvaluatedValue=null;this._stale=!1}};var r=h;b.__decorate([c.property()],a.FormExpressionArcadeExecutor.prototype,"_lastEvaluatedValue",
void 0);b.__decorate([c.property()],a.FormExpressionArcadeExecutor.prototype,"_stale",void 0);b.__decorate([c.property()],a.FormExpressionArcadeExecutor.prototype,"_updatingTracking",void 0);b.__decorate([c.property({constructOnly:!0})],a.FormExpressionArcadeExecutor.prototype,"executor",void 0);b.__decorate([c.property()],a.FormExpressionArcadeExecutor.prototype,"isAsync",null);b.__decorate([c.property()],a.FormExpressionArcadeExecutor.prototype,"fieldsUsed",null);b.__decorate([c.property()],a.FormExpressionArcadeExecutor.prototype,
"syntaxTree",null);b.__decorate([c.property()],a.FormExpressionArcadeExecutor.prototype,"updating",null);b.__decorate([c.property()],a.FormExpressionArcadeExecutor.prototype,"stale",null);b.__decorate([c.property()],a.FormExpressionArcadeExecutor.prototype,"geometryUsed",null);b.__decorate([c.property()],a.FormExpressionArcadeExecutor.prototype,"variablesUsed",null);b.__decorate([c.property()],a.FormExpressionArcadeExecutor.prototype,"lastEvaluatedValue",null);a.FormExpressionArcadeExecutor=b.__decorate([n.subclass("esri.widgets.FeatureForm.FormExpressionArcadeExecutor")],
a.FormExpressionArcadeExecutor);a.createFormExpressionArcadeExecutor=async(d,e)=>{const f=g.createArcadeProfile("form-calculation");d=await g.createArcadeExecutor(d,f,{});e?.fieldsIndex&&(d.fieldsUsed=q.fixFields(e.fieldsIndex,d.fieldsUsed));return new a.FormExpressionArcadeExecutor({executor:d})};Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});