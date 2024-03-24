// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/tslib.es6 ../../Color ../../Graphic ../../symbols ../../core/Accessor ../../core/Collection ../../core/mathUtils ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass ../../symbols/PointSymbol3D ../../symbols/SimpleFillSymbol ../../symbols/TextSymbol ../../symbols/TextSymbol3DLayer ../../symbols/support/Symbol3DVerticalOffset ../../symbols/callouts/LineCallout3D ../../symbols/callouts/LineCallout3DBorder".split(" "),
function(e,h,k,q,I,x,y,r,l,J,K,L,z,A,B,C,D,E,F,G){const H=[[0,179,255],[117,62,128],[0,104,255],[215,189,166],[32,0,193],[98,162,206],[102,112,129],[52,125,0],[142,118,246],[138,83,0],[92,122,255],[122,55,83],[0,142,255],[81,40,179],[0,200,244],[13,24,127],[0,170,147],[19,58,241],[22,44,35]];e.TileTreeDebugger=class extends x{constructor(c){super(c);this.updating=!1;this.enableLabels=this.enablePolygons=!0;this._polygons=new Map;this._labels=new Map;this._enabled=!0}initialize(){this._symbols=H.map(c=>
new B({color:[c[0],c[1],c[2],.6],outline:{color:"black",width:1}}));this.update()}destroy(){this._enabled=!1;this.clear()}get enabled(){return this._enabled}set enabled(c){this._enabled!==c&&(this._enabled=c,this.update())}update(){if(this._enabled){var c=a=>{if(null!=a.label)return a.label;let b=a.lij.toString();null!=a.loadPriority&&(b+=` (${a.loadPriority})`);return b},m=this.getTiles(),n=[],t=new Set(this._labels.keys());m.forEach((a,b)=>{var d=a.lij.toString();t.delete(d);var f=a.lij[0],g=a.geometry;
this.enablePolygons&&!this._polygons.has(d)&&(f=new q({geometry:g,symbol:this._symbols[f%this._symbols.length]}),this._polygons.set(d,f),n.push(f));if(this.enableLabels){const u=c(a);f=b/(m.length-1);b=r.lerp(0,200,f);const v=r.lerp(20,6,f)/.75;a=null!=a.loadPriority&&a.loadPriority>=m.length;const w=new k([b,a?0:b,a?0:b]);b="3d"===this.view.type?()=>new A({verticalOffset:new E({screenLength:40/.75}),callout:new F({color:new k("white"),border:new G({color:new k("black")})}),symbolLayers:new y([new D({text:u,
halo:{color:"white",size:1/.75},material:{color:w},size:v})])}):()=>new C({text:u,haloColor:"white",haloSize:1/.75,color:w,size:v});if(a=this._labels.get(d)){if(d=b(),null==a.symbol||JSON.stringify(d)!==JSON.stringify(a.symbol))a.symbol=d}else g=new q({geometry:g.extent.center,symbol:b()}),this._labels.set(d,g),n.push(g)}});var p=[];t.forEach(a=>{var b=this._polygons.get(a);null!=b&&(p.push(b),this._polygons.delete(a));b=this._labels.get(a);null!=b&&(p.push(b),this._labels.delete(a))});this.view.graphics.removeMany(p);
this.view.graphics.addMany(n)}else this.clear()}clear(){this.view.graphics.removeMany(Array.from(this._polygons.values()));this.view.graphics.removeMany(Array.from(this._labels.values()));this._polygons.clear();this._labels.clear()}};h.__decorate([l.property({constructOnly:!0})],e.TileTreeDebugger.prototype,"view",void 0);h.__decorate([l.property({readOnly:!0})],e.TileTreeDebugger.prototype,"updating",void 0);h.__decorate([l.property()],e.TileTreeDebugger.prototype,"enabled",null);e.TileTreeDebugger=
h.__decorate([z.subclass("esri.views.support.TileTreeDebugger")],e.TileTreeDebugger);Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});