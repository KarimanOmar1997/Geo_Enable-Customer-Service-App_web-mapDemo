// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/Accessor ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass".split(" "),function(g,e,h,u,v,w,r){function n(a,b){const d=t,f=d.length,c=[];let l,p=a;a=0<=a?a:0;b=0<b?b:d[f-1].minScale;for(let m=0;m<f;m++){const q=Math.min(d[m].minScale,b);l=Math.min(q,b);a<=q&&p<b&&c.push({id:d[m].id,maxScale:Math.max(p,a),minScale:l});p=l+1}c.reverse();0!==
c.length&&([a]=c,b=c[c.length-1],a.minScale===a.maxScale&&(c.shift(),a.minScale+=1),b.minScale===b.maxScale&&(c.pop(),--b.maxScale));return c}var k;const t=[{id:"room",minScale:100},{id:"rooms",minScale:400},{id:"smallBuilding",minScale:800},{id:"building",minScale:1999},{id:"buildings",minScale:3999},{id:"street",minScale:7499},{id:"streets",minScale:14999},{id:"neighborhood",minScale:29999},{id:"town",minScale:59999},{id:"city",minScale:119999},{id:"cities",minScale:249999},{id:"metropolitanArea",
minScale:499999},{id:"county",minScale:999999},{id:"counties",minScale:1999999},{id:"stateProvince",minScale:3999999},{id:"statesProvinces",minScale:6999999},{id:"countriesSmall",minScale:14999999},{id:"countriesBig",minScale:34999999},{id:"continent",minScale:99999999},{id:"world",minScale:147914382}];e=k=class extends e{constructor(){super(...arguments);this.ranges=[]}static fromScaleRange({maxScale:a,minScale:b}){return new k({ranges:n(a,b)})}static async fromLayer(a){await a.when();a=(a="tileInfo"in
a?a.tileInfo?.lods:void 0)?n(a[a.length-1].scale,a[0].scale):n(0,0);return new k({ranges:a})}get firstRange(){return this.ranges[0]}get lastRange(){const a=this.ranges;return a[a.length-1]}get length(){return this.ranges.length}get maxScale(){return this.lastRange.maxScale}get minScale(){return this.firstRange.minScale}isMinScaleEdge(a){const {firstRange:b}=this,d=k.RecommendedScales[b.id]||b.maxScale;return a<=b.minScale&&a>=d}isMaxScaleEdge(a){const {lastRange:b}=this,d=b.maxScale;return a<=(k.RecommendedScales[b.id]||
b.minScale)&&a>=d}findScaleRange(a){const b=this.ranges;let d;if(a>=b[0].maxScale)return b[0];if(a<=b[b.length-1].minScale)return b[b.length-1];for(let f=0;f<b.length;f++){const c=b[f];if(a>=c.maxScale&&a<=c.minScale){d=c;break}}return d}findScaleRangeByIndex(a){return this.ranges[this._clampScaleRangeIndex(a)]}scaleToRangeIndex(a){return this.ranges.indexOf(this.findScaleRange(a))}clampScale(a){return Math.min(this.minScale,Math.max(this.maxScale,a))}clampMinScale(a){return 0===a?this.minScale:this.clampScale(a)}clampMaxScale(a){return this.clampScale(a)}contains(a){const b=
this.ranges;let d=!1;for(let f=0;f<b.length;f++){const {maxScale:c,minScale:l}=b[f];if(a>=c&&a<=l){d=!0;break}}return d}_clampScaleRangeIndex(a){if(0>=a)return 0;const b=this.ranges.length-1;return a>b?b:Math.floor(a)}};e.RecommendedScales=Object.freeze({world:147914382,continent:5E7,countriesBig:25E6,countriesSmall:12E6,statesProvinces:6E6,stateProvince:3E6,counties:15E5,county:75E4,metropolitanArea:32E4,cities:16E4,city:8E4,town:4E4,neighborhood:2E4,streets:1E4,street:5E3,buildings:2500,building:1250,
smallBuilding:800,rooms:400,room:100});g.__decorate([h.property()],e.prototype,"firstRange",null);g.__decorate([h.property()],e.prototype,"lastRange",null);g.__decorate([h.property()],e.prototype,"length",null);g.__decorate([h.property()],e.prototype,"maxScale",null);g.__decorate([h.property()],e.prototype,"minScale",null);g.__decorate([h.property({constructOnly:!0})],e.prototype,"ranges",void 0);return e=k=g.__decorate([r.subclass("esri.widgets.ScaleRangeSlider.ScaleRanges")],e)});