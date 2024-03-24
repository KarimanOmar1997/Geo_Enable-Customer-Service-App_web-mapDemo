// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../intl ../../core/Accessor ../../core/Collection ../../core/Error ../../core/Logger ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass ../../core/support/UpdatingHandles ../../layers/support/layerUtils ../../portal/Portal ../../portal/support/utils ../../intl/locale ../../intl/messages".split(" "),function(f,d,p,q,l,k,n,g,
z,A,B,r,t,u,v,w,x,y){d=class extends p{constructor(a){super(a);this._initialValidationsFinished=this._activeOperationDidSucceed=!1;this._serverVersion=this._dirtyAreasLayer=null;this._updatingHandles=new t.UpdatingHandles;this._validConstructProperties=!1;this.executionError="";this.extentToValidate="current";this.loadErrors=new q}initialize(){const a=async()=>{this.messages||(this.messages=await y.fetchMessageBundle("esri/widgets/UtilityNetworkValidateTopology/t9n/UtilityNetworkValidateTopology"))};
a().then(()=>{this.view||(this.view=null);this.utilityNetwork||(this.utilityNetwork=null);this.addHandles([n.watch(()=>[this.view,this.utilityNetwork],async()=>{const {loadErrors:e,messages:{info:{noUtilityNetwork:c,noView:h}}}=this;this._initialValidationsFinished=!1;e.removeAll();this._validConstructProperties=!0;this._serverVersion=this._dirtyAreasLayer=null;"utility"!==this.utilityNetwork?.type&&(this.loadErrors.push(c),k.getLogger(this).error(new l("utilityNetworkValidateTopology:missing-property",
c)),this._validConstructProperties=!1);"2d"!==this.view?.type&&(this.loadErrors.push(h),k.getLogger(this).error(new l("utilityNetworkValidateTopology:missing-property",h)),this._validConstructProperties=!1);this._validConstructProperties&&(this.utilityNetwork.loaded||await this.utilityNetwork.load().catch(b=>{k.getLogger(this).error(b);this._validConstructProperties=!1}),await this._setDirtyAreasLayer());this._validConstructProperties&&await this._validateNetworkExtension()},n.initial),n.on(()=>this.view?.map?.layers,
"change",async()=>{const {loadErrors:e,messages:{info:{noUtilityNetwork:c}}}=this,h=e.find(b=>b===c);this._initialValidationsFinished=!1;h||(e.removeAll(),await this._validateNetworkExtension(),await this._setDirtyAreasLayer());this._initialValidationsFinished=!0}),x.onLocaleChange(a)])})}destroy(){this._updatingHandles.destroy()}get state(){return this.loadErrors.length||!this._validConstructProperties?"disabled":this.executionError?"failed":this._updatingHandles.updating?"executing":this._activeOperationDidSucceed?
"success":this._initialValidationsFinished?"ready":"loading"}set utilityNetwork(a){this._get("utilityNetwork")!==a&&this._set("utilityNetwork",a)}set view(a){this._get("view")!==a&&this._set("view",a)}async validateTopology(){const {messages:{info:{cannotAcquireVersionLock:a,noDirtyAreasInExtent:e}},utilityNetwork:c,view:h}=this;this.loadErrors.length||(this._activeOperationDidSucceed=!1,this._set("executionError",""),this._updatingHandles.addPromise(c?.validateTopology({validateArea:"current"===
this.extentToValidate?h.extent.clone():c.fullExtent.clone()}).then(()=>{this._activeOperationDidSucceed=!0},b=>{let m="Error: "+b;if(b instanceof l&&b.details?.raw)switch(b.details.raw.extendedCode){case -2147208940:m=e;break;case -2147217146:case -2147220947:m=a;break;default:m=b.details.message}this._set("executionError",m)})))}async _setDirtyAreasLayer(){const {messages:{info:{noDirtyAreasLayer:a}}}=this,e=this.view?.map.allLayers.items.filter(c=>u.isFeatureLayer(c)).find(c=>c.parsedUrl?.path===
this.utilityNetwork?.networkSystemLayers.dirtyAreasLayerUrl);e?(this._dirtyAreasLayer=e,await this._dirtyAreasLayer.load(),this._serverVersion=this._dirtyAreasLayer.version??0,this._validConstructProperties=!0):(this.loadErrors.push(a),k.getLogger(this).error(new l("utilityNetworkValidateTopology:missing-layer",a)),this._validConstructProperties=!1)}async _validateNetworkExtension(){const {messages:{info:{noAdvancedEditingUserTypeExtension:a,noUtilityNetworkServiceUserTypeExtension:e}}}=this,c=await (new v({url:(new URL(this.utilityNetwork.layerUrl)).origin+
"/portal"})).load(),h=c?.user?.username;h?w.hasUserTypeExtension(c,h,11.1>=Number(this._serverVersion)?"utilityNetwork":"advediting").then(b=>{b||(b=11.1>=Number(this._serverVersion)?e:a,this.loadErrors.push(b),k.getLogger(this).error(new l("utilityNetworkValidateTopology:no-user-type-extension",b)),this._validConstructProperties=!1)}).catch(b=>{this.loadErrors.push(11.1>=Number(this._serverVersion)?e:a);k.getLogger(this).error(b);this._validConstructProperties=!1}).finally(()=>{this._initialValidationsFinished=
!0}):(this.loadErrors.push("No portal user found."),k.getLogger(this).error(new l("utilityNetworkValidateTopology:no-user","No portal user found.")),this._validConstructProperties=!1,this._initialValidationsFinished=!0)}};f.__decorate([g.property()],d.prototype,"_initialValidationsFinished",void 0);f.__decorate([g.property()],d.prototype,"_dirtyAreasLayer",void 0);f.__decorate([g.property()],d.prototype,"_validConstructProperties",void 0);f.__decorate([g.property({readOnly:!0})],d.prototype,"executionError",
void 0);f.__decorate([g.property()],d.prototype,"extentToValidate",void 0);f.__decorate([g.property()],d.prototype,"loadErrors",void 0);f.__decorate([g.property()],d.prototype,"messages",void 0);f.__decorate([g.property({readOnly:!0})],d.prototype,"state",null);f.__decorate([g.property()],d.prototype,"utilityNetwork",null);f.__decorate([g.property()],d.prototype,"view",null);return d=f.__decorate([r.subclass("esri.widgets.UtilityNetworkValidateTopology.UtilityNetworkValidateTopologyViewModel")],d)});