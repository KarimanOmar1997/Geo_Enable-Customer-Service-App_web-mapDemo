// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../chunks/tslib.es6 ../core/Error ../core/MultiOriginJSONSupport ../core/reactiveUtils ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/arrayUtils ../core/has ../core/accessorSupport/decorators/subclass ./Layer ./mixins/BlendLayer ./mixins/CustomParametersMixin ./mixins/ImageryTileMixin ./mixins/OperationalLayer ./mixins/PortalLayer ./mixins/RefreshableLayer ./mixins/ScaleRangeLayer ./mixins/TemporalLayer ./support/commonProperties ./support/Field ./support/rasterDatasets/WCSRaster ../support/popupUtils".split(" "),
function(c,l,b,m,d,D,E,F,n,p,q,r,t,u,v,w,x,y,z,h,A,B){const C=new Set("milliseconds seconds minutes hours days weeks months years decades centuries".split(" "));b=class extends q.BlendLayer(x.ScaleRangeLayer(u.OperationalLayer(v.PortalLayer(r.CustomParametersMixin(t.ImageryTileMixin(y.TemporalLayer(w.RefreshableLayer(b.MultiOriginJSONMixin(p))))))))){constructor(...a){super(...a);this.isReference=this.version=this.coverageId=null;this.type="wcs";this.popupEnabled=!0;this.fields=this.popupTemplate=
null}normalizeCtorArgs(a,e){return"string"===typeof a?{url:a,...e}:a}load(a){this.addResolvingPromise(this._openRaster(null!=a?a.signal:null));return Promise.resolve(this)}get coverageInfo(){return this.raster.coverageInfo}get defaultPopupTemplate(){return this.createPopupTemplate()}get rasterFields(){return[new h({name:"Raster.ServicePixelValue",alias:"Pixel Value",domain:null,editable:!1,length:50,type:"string"})]}createPopupTemplate(a){return B.createPopupTemplate({fields:this.rasterFields,title:this.title},
a)}async _openRaster(a){const e=new A({url:this.url,version:this.version,coverageId:this.coverageId,ioConfig:{sampling:"closest",...this.ioConfig,customFetchParameters:this.customParameters}});await e.open({signal:a});if(!e.rasterInfo)throw e.destroy(),new l("wcs-layer:load","cannot load resources on "+this.url);({rasterInfo:a}=e);this._set("rasterInfo",a);this._set("spatialReference",a.spatialReference);null==this.title&&this.setAtOrigin("title",e.datasetName,"service");null==this.coverageId&&this.setAtOrigin("coverageId",
e.coverageInfo.id,"service");this.setAtOrigin("tileInfo",e.rasterInfo.storageInfo.tileInfo,"service");({multidimensionalInfo:a}=a);if(null!=a&&(a=a.variables[0].dimensions.find(({name:f})=>"StdTime"===f))){let f=a.extent?.[0]??a.values[0];Array.isArray(f)&&(f=f[0]);let g=a.extent?.[1]??a.values[a.values.length-1];Array.isArray(g)&&(g=g[1]);const k=C.has(a.intervalUnit?.toLowerCase())?a.intervalUnit?.toLowerCase():null;this.set("timeInfo",{startField:"StdTime",fullTimeExtent:{start:f,end:g},timeZone:null,
interval:k?{value:a.interval,unit:k}:null})}this.raster=e;this._configDefaultSettings();this.addHandles(m.watch(()=>this.customParameters,f=>this.raster.ioConfig.customFetchParameters=f))}};c.__decorate([d.property({type:String,nonNullable:!0,json:{write:!0}})],b.prototype,"coverageId",void 0);c.__decorate([d.property()],b.prototype,"coverageInfo",null);c.__decorate([d.property()],b.prototype,"version",void 0);c.__decorate([d.property()],b.prototype,"isReference",void 0);c.__decorate([d.property()],
b.prototype,"raster",void 0);c.__decorate([d.property({readOnly:!0})],b.prototype,"type",void 0);c.__decorate([d.property(z.popupEnabled)],b.prototype,"popupEnabled",void 0);c.__decorate([d.property()],b.prototype,"popupTemplate",void 0);c.__decorate([d.property({readOnly:!0})],b.prototype,"defaultPopupTemplate",null);c.__decorate([d.property({readOnly:!0,type:[h]})],b.prototype,"fields",void 0);c.__decorate([d.property({readOnly:!0,type:[h]})],b.prototype,"rasterFields",null);return b=c.__decorate([n.subclass("esri.layers.WCSLayer")],
b)});