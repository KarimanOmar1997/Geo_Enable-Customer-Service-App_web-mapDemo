/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as r}from"../chunks/tslib.es6.js";import s from"../core/Collection.js";import{r as t,c as e}from"../chunks/collectionUtils.js";import{L as o}from"../chunks/Logger.js";import{isAbsolute as i,normalize as m,hasSamePortal as l}from"../core/urlUtils.js";import{W as n,subclass as p}from"../core/accessorSupport/decorators/subclass.js";import{property as a}from"../core/accessorSupport/decorators/property.js";import{cast as y}from"../core/accessorSupport/decorators/cast.js";import"../chunks/typedArrayUtil.js";import{r as c}from"../chunks/reader.js";import{w as j}from"../chunks/writer.js";import u from"../portal/Portal.js";import{f as h,t as b}from"../chunks/persistableUrlUtils.js";import d from"./ExtrudeSymbol3DLayer.js";import g from"./FillSymbol3DLayer.js";import k from"./IconSymbol3DLayer.js";import f from"./LineSymbol3DLayer.js";import S from"./ObjectSymbol3DLayer.js";import U from"./PathSymbol3DLayer.js";import L from"./Symbol.js";import D from"./Symbol3DLayer.js";import O from"./TextSymbol3DLayer.js";import P from"./WaterSymbol3DLayer.js";import _ from"./support/StyleOrigin.js";import{T as w}from"../chunks/Thumbnail.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../chunks/metadata.js";import"../core/lang.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/ObjectPool.js";import"../chunks/ObservableBase.js";import"../chunks/tracking.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../chunks/PooledArray.js";import"../core/promiseUtils.js";import"../core/Error.js";import"../config.js";import"../chunks/time.js";import"../chunks/ensureType.js";import"../core/Evented.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../core/JSONSupport.js";import"../kernel.js";import"../request.js";import"../core/Loadable.js";import"../core/Promise.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../geometry/SpatialReference.js";import"../chunks/unitUtils.js";import"../chunks/jsonMap.js";import"../chunks/Ellipsoid.js";import"../chunks/assets.js";import"../geometry/Point.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/locale.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../chunks/enumeration.js";import"../chunks/utils4.js";import"./edges/Edges3D.js";import"../Color.js";import"../chunks/colorUtils.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/vec3f64.js";import"../chunks/common.js";import"../chunks/screenUtils.js";import"../chunks/materialUtils.js";import"../chunks/opacityUtils.js";import"./edges/SketchEdges3D.js";import"./edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"./patterns/LineStylePattern3D.js";import"./patterns/StylePattern3D.js";import"../chunks/utils5.js";import"../chunks/colors.js";import"../chunks/symbolLayerUtils3D.js";import"../chunks/aaBoundingBox.js";import"../chunks/aaBoundingRect.js";import"../chunks/Symbol3DAnchorPosition2D.js";import"./LineStyleMarker3D.js";import"../core/Clonable.js";import"../chunks/lineMarkers.js";import"./Font.js";const v={icon:k,object:S,line:f,path:U,fill:g,extrude:d,text:O,water:P},x=s.ofType({base:D,key:"type",typeMap:v,errorContext:"symbol-layer"});let N=class extends L{constructor(r){super(r),this.styleOrigin=null,this.thumbnail=null,this.type=null;const t=this.__accessor__&&this.__accessor__.metadatas&&this.__accessor__.metadatas.symbolLayers,e=t?.type,o=e||s;this._set("symbolLayers",new o)}get color(){return null}set color(r){this.constructed&&o.getLogger(this).error("Symbol3D does not support colors on the symbol level. Colors may be set on individual symbol layer materials instead.")}set symbolLayers(r){t(r,this._get("symbolLayers"))}readStyleOrigin(r,s,t){if(r.styleUrl&&r.name){const s=h(r.styleUrl,t);return new _({styleUrl:s,name:r.name})}if(r.styleName&&r.name)return new _({portal:t?.portal||u.getDefault(),styleName:r.styleName,name:r.name});t?.messages&&t.messages.push(new n("symbol3d:incomplete-style-origin","Style origin requires either a 'styleUrl' or 'styleName' and a 'name' property",{context:t,definition:r}))}writeStyleOrigin(r,s,t,e){if(r.styleUrl&&r.name){let t=b(r.styleUrl,e);i(t)&&(t=m(t)),s.styleOrigin={styleUrl:t,name:r.name}}else r.styleName&&r.name&&(r.portal&&e?.portal&&!l(r.portal.restUrl,e.portal.restUrl)?e?.messages&&e.messages.push(new n("symbol:cross-portal","The symbol style origin cannot be persisted because it refers to an item on a different portal than the one being saved to.",{symbol:this})):s.styleOrigin={styleName:r.styleName,name:r.name})}normalizeCtorArgs(r){return r instanceof D||r&&v[r.type]?{symbolLayers:[r]}:Array.isArray(r)?{symbolLayers:r}:r}};r([a({json:{read:!1,write:!1}})],N.prototype,"color",null),r([a({type:x,nonNullable:!0,json:{write:!0}}),y(e)],N.prototype,"symbolLayers",null),r([a({type:_})],N.prototype,"styleOrigin",void 0),r([c("styleOrigin")],N.prototype,"readStyleOrigin",null),r([j("styleOrigin",{"styleOrigin.styleUrl":{type:String},"styleOrigin.styleName":{type:String},"styleOrigin.name":{type:String}})],N.prototype,"writeStyleOrigin",null),r([a({type:w,json:{read:!1}})],N.prototype,"thumbnail",void 0),r([a({type:["point-3d","line-3d","polygon-3d","mesh-3d","label-3d"],readOnly:!0})],N.prototype,"type",void 0),N=r([p("esri.symbols.Symbol3D")],N);const E=N;export{E as default};
