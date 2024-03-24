// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports","../CIMCursor","../CurveHelper","../enums"],function(r,t,u,m){class k{static local(){null===k.instance&&(k.instance=new k);return k.instance}execute(a,b,c,f,d){return new v(a,b,c)}}k.instance=null;class v extends t.PathTransformationCursor{constructor(a,b,c){super(a);this._curveHelper=new u.CurveHelper;this._angleToLine=void 0!==b.angleToLine?b.angleToLine:!0;this._offset=void 0!==b.offset?b.offset*c:0;this._relativeTo=b.relativeTo;this._position=void 0!==b.startPointOffset?b.startPointOffset*
c:0;this._epsilon=.001*c}processPath(a){var b=this._position;if(this._relativeTo===m.PlacementOnLineRelativeTo.SegmentMidpoint){this.iteratePath||(this.iteratePath=!0);if(a.nextPoint()){let [c,f]=[a.x,a.y],[d,e]=[0,0];for(;a.nextPoint();){d=a.x;e=a.y;b=this._curveHelper.getLength(c,f,d,e);if(b<this._epsilon){c=d;f=e;continue}a=.5+this._position/b;const [h,g]=this._curveHelper.getAngleCS(c,f,d,e,a);a=this._curveHelper.getCoord2D(c,f,d,e,a);this.internalPlacement.setTranslate(a[0]-this._offset*g,a[1]+
this._offset*h);this._angleToLine&&this.internalPlacement.setRotateCS(h,g);return this.internalPlacement}}this.iteratePath=!1;return null}return this.onLine(a,b,this._relativeTo===m.PlacementOnLineRelativeTo.LineEnd)}onLine(a,b,c){let f=!1;switch(this._relativeTo){default:a.seekPathStart();b=a.pathLength()/2+b;break;case m.PlacementOnLineRelativeTo.LineBeginning:break;case m.PlacementOnLineRelativeTo.LineEnd:f=!0}c?a.seekPathEnd():a.seekPathStart();let d=0;if(c?a.prevPoint():a.nextPoint()){let [e,
h]=[a.x,a.y],[g,l]=[0,0];for(;c?a.prevPoint():a.nextPoint();){g=a.x;l=a.y;const n=this._curveHelper.getLength(e,h,g,l);if(d+n>b){a=(b-d)/n;const [p,q]=this._curveHelper.getAngleCS(e,h,g,l,a);a=this._curveHelper.getCoord2D(e,h,g,l,a);c=f?-this._offset:this._offset;this.internalPlacement.setTranslate(a[0]-c*q,a[1]+c*p);this._angleToLine&&(f?this.internalPlacement.setRotateCS(-p,-q):this.internalPlacement.setRotateCS(p,q));return this.internalPlacement}e=g;h=l;d+=n}}return null}}r.PlacementOnLine=k;
Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})});