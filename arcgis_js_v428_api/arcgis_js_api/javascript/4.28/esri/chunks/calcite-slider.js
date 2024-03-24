// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ./index ./guid ./dom ./form ./interactive ./key ./label2 ./loadable ./locale ./math ./observers".split(" "),function(C,d,I,y,A,D,Q,E,F,B,z,R){function J(a,b,c){const e=b[0]-a[0];a=b[1]-a[1];return e?(3*a/e-c)/2:c}function K(a,b,c,e,g){const [h,l]=a,[m,k]=b;a=(m-h)/3;c=g([h+a,l+a*c]).join(",");e=g([m-a,k-a*e]).join(",");g=g([m,k]).join(",");return`C ${c} ${e} ${g}`}function S({width:a,height:b,min:c,max:e}){const g=e[0]-c[0],h=e[1]-c[1];return l=>[(l[0]-c[0])/g*a,b-l[1]/h*b]}function T(a){const [b,
c]=a[0];return a.reduce(({min:e,max:g},[h,l])=>({min:[Math.min(e[0],h),Math.min(e[1],l)],max:[Math.max(g[0],h),Math.max(g[1],l)]}),{min:[b,c],max:[b,c]})}function U({data:a,min:b,max:c,t:e}){if(0===a.length)return"";const [g,h]=e(a[0]),[l,m]=e(b);[b]=e(c);let k,n,t;c=a.reduce((p,r,q)=>{n=a[q-2];t=a[q-1];if(1<q){q=t[0]-n[0];const w=r[0]-t[0],x=(t[1]-n[1])/(q||0>w&&0);r=(r[1]-t[1])/(w||0>q&&0);r=(Math.sign(x)+Math.sign(r))*Math.min(Math.abs(x),Math.abs(r),.5*Math.abs((x*w+r*q)/(q+w)))||0;q=void 0===
k?J(n,t,r):k;q=K(n,t,q,r,e);k=r;return`${p} ${q}`}return p},`M ${l},${m} L ${l},${h} L ${g},${h}`);var u=a[a.length-1];u=K(t,u,k,J(t,u,k),e);return`${c} ${u} L ${b},${m} Z`}function L(){"undefined"!==typeof customElements&&["calcite-graph"].forEach(a=>{switch(a){case "calcite-graph":customElements.get(a)||customElements.define(a,V)}})}function v(a){return Array.isArray(a)}function M(){"undefined"!==typeof customElements&&["calcite-slider","calcite-graph"].forEach(a=>{switch(a){case "calcite-slider":customElements.get(a)||
customElements.define(a,N);break;case "calcite-graph":customElements.get(a)||L()}})}const V=d.proxyCustomElement(class extends d.H{constructor(){super();this.__registerHost();this.__attachShadow();this.graphId=`calcite-graph-${I.guid()}`;this.resizeObserver=R.createObserver("resize",()=>d.forceUpdate(this));this.data=[];this.max=this.min=this.highlightMax=this.highlightMin=this.colorStops=void 0}connectedCallback(){this.resizeObserver?.observe(this.el)}disconnectedCallback(){this.resizeObserver?.disconnect()}render(){const {data:a,
colorStops:b,el:c,highlightMax:e,highlightMin:g,min:h,max:l}=this,m=this.graphId,{clientHeight:k,clientWidth:n}=c;if(!a||0===a.length)return d.h("svg",{"aria-hidden":"true",class:"svg",height:k,preserveAspectRatio:"none",viewBox:`0 0 ${n} ${k}`,width:n});const {min:t,max:u}=T(a);var p=t,r=u;if(h<t[0]||h>t[0])p=[h,0];if(l>u[0]||l<u[0])r=[l,u[1]];var q=S({min:p,max:r,width:n,height:k});[p]=q([g,r[1]]);[r]=q([e,r[1]]);q=U({data:a,min:t,max:u,t:q});const w=b?`url(#linear-gradient-${m})`:void 0;return d.h("svg",
{"aria-hidden":"true",class:"svg",height:k,preserveAspectRatio:"none",viewBox:`0 0 ${n} ${k}`,width:n},b?d.h("defs",null,d.h("linearGradient",{id:`linear-gradient-${m}`,x1:"0",x2:"1",y1:"0",y2:"0"},b.map(({offset:x,color:G,opacity:H})=>d.h("stop",{offset:`${100*x}%`,"stop-color":G,"stop-opacity":H})))):null,void 0!==g?[d.h("mask",{height:"100%",id:`${m}1`,width:"100%",x:"0%",y:"0%"},d.h("path",{d:`\n            M 0,0\n            L ${p-1},0\n            L ${p-1},${k}\n            L 0,${k}\n            Z\n          `,
fill:"white"})),d.h("mask",{height:"100%",id:`${m}2`,width:"100%",x:"0%",y:"0%"},d.h("path",{d:`\n            M ${p+1},0\n            L ${r-1},0\n            L ${r-1},${k}\n            L ${p+1}, ${k}\n            Z\n          `,fill:"white"})),d.h("mask",{height:"100%",id:`${m}3`,width:"100%",x:"0%",y:"0%"},d.h("path",{d:`\n                M ${r+1},0\n                L ${n},0\n                L ${n},${k}\n                L ${r+1}, ${k}\n                Z\n              `,fill:"white"})),d.h("path",
{class:"graph-path",d:q,fill:w,mask:`url(#${m}1)`}),d.h("path",{class:"graph-path--highlight",d:q,fill:w,mask:`url(#${m}2)`}),d.h("path",{class:"graph-path",d:q,fill:w,mask:`url(#${m}3)`})]:d.h("path",{class:"graph-path",d:q,fill:w}))}get el(){return this}static get style(){return":host{display:block;block-size:100%}.svg{fill:currentColor;stroke:transparent;margin:0px;display:block;block-size:100%;inline-size:100%;padding:0px}.svg .graph-path--highlight{fill:var(--calcite-ui-brand);opacity:0.5}:host([hidden]){display:none}[hidden]{display:none}"}},
[1,"calcite-graph",{data:[16],colorStops:[16],highlightMin:[2,"highlight-min"],highlightMax:[2,"highlight-max"],min:[514],max:[514]}]);L();const N=d.proxyCustomElement(class extends d.H{constructor(){super();this.__registerHost();this.__attachShadow();this.calciteSliderInput=d.createEvent(this,"calciteSliderInput",6);this.calciteSliderChange=d.createEvent(this,"calciteSliderChange",6);this.activeProp="value";this.guid=`calcite-slider-${I.guid()}`;this.dragUpdate=a=>{if(!this.disabled&&(a.preventDefault(),
this.dragProp)){var b=this.translate(a.clientX||a.pageX);v(this.value)&&"minMaxValue"===this.dragProp?this.minValueDragRange&&this.maxValueDragRange&&this.minMaxValueRange?(a=b-this.minValueDragRange,b+=this.maxValueDragRange,b<=this.max&&a>=this.min&&b-a===this.minMaxValueRange&&this.setValue({minValue:this.clamp(a,"minValue"),maxValue:this.clamp(b,"maxValue")})):(this.minValueDragRange=b-this.minValue,this.maxValueDragRange=this.maxValue-b,this.minMaxValueRange=this.maxValue-this.minValue):this.setValue({[this.dragProp]:this.clamp(b,
this.dragProp)})}};this.pointerUpDragEnd=a=>{!this.disabled&&y.isPrimaryPointerButton(a)&&this.dragEnd(a)};this.dragEnd=a=>{this.disabled||(this.removeDragListeners(),this.focusActiveHandle(a.clientX),this.lastDragPropValue!=this[this.dragProp]&&this.emitChange(),this.minMaxValueRange=this.maxValueDragRange=this.minValueDragRange=this.lastDragPropValue=this.dragProp=null)};this.storeTrackRef=a=>{this.trackEl=a};this.determineGroupSeparator=a=>{if("number"===typeof a)return B.numberStringFormatter.numberFormatOptions=
{locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator},B.numberStringFormatter.localize(a.toString())};this.disabled=!1;this.form=void 0;this.hasHistogram=this.groupSeparator=!1;this.histogramStops=this.histogram=void 0;this.labelTicks=this.labelHandles=!1;this.max=100;this.maxValue=this.maxLabel=void 0;this.min=0;this.minValue=this.minLabel=void 0;this.mirrored=!1;this.pageStep=this.numberingSystem=this.name=void 0;this.snap=this.required=this.precise=
!1;this.step=1;this.ticks=void 0;this.value=0;this.scale="m";this.effectiveLocale="";this.maxValueDragRange=this.minValueDragRange=this.minMaxValueRange=null;this.tickValues=[]}histogramWatcher(a){this.hasHistogram=!!a}ticksWatcher(){this.tickValues=this.generateTickValues()}valueHandler(){this.setMinMaxFromValue()}minMaxValueHandler(){this.setValueFromMinMax()}connectedCallback(){D.connectInteractive(this);B.connectLocalized(this);this.setMinMaxFromValue();this.setValueFromMinMax();E.connectLabel(this);
A.connectForm(this)}disconnectedCallback(){D.disconnectInteractive(this);E.disconnectLabel(this);A.disconnectForm(this);B.disconnectLocalized(this);this.removeDragListeners()}componentWillLoad(){F.setUpLoadableComponent(this);v(this.value)||(this.value=this.snap?this.getClosestStep(this.value):this.clamp(this.value));this.ticksWatcher();this.histogramWatcher(this.histogram);A.afterConnectDefaultValueSet(this,this.value)}componentDidLoad(){F.setComponentLoaded(this)}componentDidRender(){this.labelHandles&&
(this.adjustHostObscuredHandleLabel("value"),v(this.value)&&(this.adjustHostObscuredHandleLabel("minValue"),this.precise&&!this.hasHistogram||this.hyphenateCollidingRangeHandleLabels()));this.hideObscuredBoundingTickLabels();D.updateHostInteraction(this)}render(){const a=this.el.id||this.guid,b=v(this.value)?"maxValue":"value",c=v(this.value)?this.maxValue:this.value;var e=this.determineGroupSeparator(c),g=this.determineGroupSeparator(this.minValue);const h=this.minValue||this.min,l=this.shouldUseMinValue(),
m=100*this.getUnitInterval(l?this.minValue:h),k=100*this.getUnitInterval(c),n=this.shouldMirror(),t=`${n?100-m:m}%`;var u=`${n?k:100-k}%`;const p=v(this.value),r=d.h("div",{"aria-disabled":this.disabled,"aria-label":p?this.maxLabel:this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":c,class:{thumb:!0,"thumb--value":!0,"thumb--active":"minMaxValue"!==this.lastDragProp&&this.dragProp===b},onBlur:()=>this.activeProp=null,onFocus:()=>this.activeProp=
b,onPointerDown:f=>this.pointerDownDragStart(f,b),role:"slider",style:{right:u},tabIndex:0,ref:f=>this.maxHandle=f},d.h("div",{class:"handle"})),q=d.h("div",{"aria-disabled":this.disabled,"aria-label":p?this.maxLabel:this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":c,class:{thumb:!0,"thumb--value":!0,"thumb--active":"minMaxValue"!==this.lastDragProp&&this.dragProp===b},onBlur:()=>this.activeProp=null,onFocus:()=>this.activeProp=b,onPointerDown:f=>
this.pointerDownDragStart(f,b),role:"slider",style:{right:u},tabIndex:0,ref:f=>this.maxHandle=f},d.h("span",{"aria-hidden":"true",class:"handle__label handle__label--value"},e),d.h("span",{"aria-hidden":"true",class:"handle__label handle__label--value static"},e),d.h("span",{"aria-hidden":"true",class:"handle__label handle__label--value transformed"},e),d.h("div",{class:"handle"})),w=d.h("div",{"aria-disabled":this.disabled,"aria-label":p?this.maxLabel:this.minLabel,"aria-orientation":"horizontal",
"aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":c,class:{thumb:!0,"thumb--value":!0,"thumb--active":"minMaxValue"!==this.lastDragProp&&this.dragProp===b},onBlur:()=>this.activeProp=null,onFocus:()=>this.activeProp=b,onPointerDown:f=>this.pointerDownDragStart(f,b),role:"slider",style:{right:u},tabIndex:0,ref:f=>this.maxHandle=f},d.h("div",{class:"handle"}),d.h("span",{"aria-hidden":"true",class:"handle__label handle__label--value"},e),d.h("span",{"aria-hidden":"true",class:"handle__label handle__label--value static"},
e),d.h("span",{"aria-hidden":"true",class:"handle__label handle__label--value transformed"},e)),x=d.h("div",{"aria-disabled":this.disabled,"aria-label":p?this.maxLabel:this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":c,class:{thumb:!0,"thumb--value":!0,"thumb--active":"minMaxValue"!==this.lastDragProp&&this.dragProp===b,"thumb--precise":!0},onBlur:()=>this.activeProp=null,onFocus:()=>this.activeProp=b,onPointerDown:f=>this.pointerDownDragStart(f,
b),role:"slider",style:{right:u},tabIndex:0,ref:f=>this.maxHandle=f},d.h("div",{class:"handle"}),d.h("div",{class:"handle-extension"})),G=d.h("div",{"aria-disabled":this.disabled,"aria-label":p?this.maxLabel:this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":c,class:{thumb:!0,"thumb--value":!0,"thumb--active":"minMaxValue"!==this.lastDragProp&&this.dragProp===b,"thumb--precise":!0},onBlur:()=>this.activeProp=null,onFocus:()=>this.activeProp=
b,onPointerDown:f=>this.pointerDownDragStart(f,b),role:"slider",style:{right:u},tabIndex:0,ref:f=>this.maxHandle=f},d.h("div",{class:"handle-extension"}),d.h("div",{class:"handle"})),H=d.h("div",{"aria-disabled":this.disabled,"aria-label":p?this.maxLabel:this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":c,class:{thumb:!0,"thumb--value":!0,"thumb--active":"minMaxValue"!==this.lastDragProp&&this.dragProp===b,"thumb--precise":!0},onBlur:()=>
this.activeProp=null,onFocus:()=>this.activeProp=b,onPointerDown:f=>this.pointerDownDragStart(f,b),role:"slider",style:{right:u},tabIndex:0,ref:f=>this.maxHandle=f},d.h("span",{"aria-hidden":"true",class:"handle__label handle__label--value"},e),d.h("span",{"aria-hidden":"true",class:"handle__label handle__label--value static"},e),d.h("span",{"aria-hidden":"true",class:"handle__label handle__label--value transformed"},e),d.h("div",{class:"handle"}),d.h("div",{class:"handle-extension"}));e=d.h("div",
{"aria-disabled":this.disabled,"aria-label":p?this.maxLabel:this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":c,class:{thumb:!0,"thumb--value":!0,"thumb--active":"minMaxValue"!==this.lastDragProp&&this.dragProp===b,"thumb--precise":!0},onBlur:()=>this.activeProp=null,onFocus:()=>this.activeProp=b,onPointerDown:f=>this.pointerDownDragStart(f,b),role:"slider",style:{right:u},tabIndex:0,ref:f=>this.maxHandle=f},d.h("div",{class:"handle-extension"}),
d.h("div",{class:"handle"}),d.h("span",{"aria-hidden":"true",class:"handle__label handle__label--value"},e),d.h("span",{"aria-hidden":"true",class:"handle__label handle__label--value static"},e),d.h("span",{"aria-hidden":"true",class:"handle__label handle__label--value transformed"},e));u=d.h("div",{"aria-disabled":this.disabled,"aria-label":this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":this.minValue,class:{thumb:!0,"thumb--minValue":!0,
"thumb--active":"minValue"===this.dragProp},onBlur:()=>this.activeProp=null,onFocus:()=>this.activeProp="minValue",onPointerDown:f=>this.pointerDownDragStart(f,"minValue"),role:"slider",style:{left:t},tabIndex:0,ref:f=>this.minHandle=f},d.h("div",{class:"handle"}));const W=d.h("div",{"aria-disabled":this.disabled,"aria-label":this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":this.minValue,class:{thumb:!0,"thumb--minValue":!0,"thumb--active":"minValue"===
this.dragProp},onBlur:()=>this.activeProp=null,onFocus:()=>this.activeProp="minValue",onPointerDown:f=>this.pointerDownDragStart(f,"minValue"),role:"slider",style:{left:t},tabIndex:0,ref:f=>this.minHandle=f},d.h("span",{"aria-hidden":"true",class:"handle__label handle__label--minValue"},g),d.h("span",{"aria-hidden":"true",class:"handle__label handle__label--minValue static"},g),d.h("span",{"aria-hidden":"true",class:"handle__label handle__label--minValue transformed"},g),d.h("div",{class:"handle"})),
X=d.h("div",{"aria-disabled":this.disabled,"aria-label":this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":this.minValue,class:{thumb:!0,"thumb--minValue":!0,"thumb--active":"minValue"===this.dragProp},onBlur:()=>this.activeProp=null,onFocus:()=>this.activeProp="minValue",onPointerDown:f=>this.pointerDownDragStart(f,"minValue"),role:"slider",style:{left:t},tabIndex:0,ref:f=>this.minHandle=f},d.h("div",{class:"handle"}),d.h("span",{"aria-hidden":"true",
class:"handle__label handle__label--minValue"},g),d.h("span",{"aria-hidden":"true",class:"handle__label handle__label--minValue static"},g),d.h("span",{"aria-hidden":"true",class:"handle__label handle__label--minValue transformed"},g)),Y=d.h("div",{"aria-disabled":this.disabled,"aria-label":this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":this.minValue,class:{thumb:!0,"thumb--minValue":!0,"thumb--active":"minValue"===this.dragProp,"thumb--precise":!0},
onBlur:()=>this.activeProp=null,onFocus:()=>this.activeProp="minValue",onPointerDown:f=>this.pointerDownDragStart(f,"minValue"),role:"slider",style:{left:t},tabIndex:0,ref:f=>this.minHandle=f},d.h("div",{class:"handle-extension"}),d.h("div",{class:"handle"}));g=d.h("div",{"aria-disabled":this.disabled,"aria-label":this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":this.minValue,class:{thumb:!0,"thumb--minValue":!0,"thumb--active":"minValue"===
this.dragProp,"thumb--precise":!0},onBlur:()=>this.activeProp=null,onFocus:()=>this.activeProp="minValue",onPointerDown:f=>this.pointerDownDragStart(f,"minValue"),role:"slider",style:{left:t},tabIndex:0,ref:f=>this.minHandle=f},d.h("div",{class:"handle-extension"}),d.h("div",{class:"handle"}),d.h("span",{"aria-hidden":"true",class:"handle__label handle__label--minValue"},g),d.h("span",{"aria-hidden":"true",class:"handle__label handle__label--minValue static"},g),d.h("span",{"aria-hidden":"true",class:"handle__label handle__label--minValue transformed"},
g));return d.h(d.Host,{id:a,onTouchStart:this.handleTouchStart},d.h("div",{"aria-label":E.getLabelText(this),class:{container:!0,["container--range"]:p,[`scale--${this.scale}`]:!0}},this.renderGraph(),d.h("div",{class:"track",ref:this.storeTrackRef},d.h("div",{class:"track__range",onPointerDown:f=>this.pointerDownDragStart(f,"minMaxValue"),style:{left:`${n?100-k:m}%`,right:`${n?m:100-k}%`}}),d.h("div",{class:"ticks"},this.tickValues.map(f=>{const O=`${100*this.getUnitInterval(f)}%`;let P=f>=h&&f<=
c;l&&(P=f>=this.minValue&&f<=this.maxValue);return d.h("span",{class:{tick:!0,"tick--active":P},style:{left:n?"":O,right:n?O:""}},this.renderTickLabel(f))}))),d.h("div",{class:"thumb-container"},!this.precise&&!this.labelHandles&&p&&u,!this.hasHistogram&&!this.precise&&this.labelHandles&&p&&W,this.precise&&!this.labelHandles&&p&&Y,this.precise&&this.labelHandles&&p&&g,this.hasHistogram&&!this.precise&&this.labelHandles&&p&&X,!this.precise&&!this.labelHandles&&r,!this.hasHistogram&&!this.precise&&
this.labelHandles&&q,!this.hasHistogram&&this.precise&&!this.labelHandles&&x,this.hasHistogram&&this.precise&&!this.labelHandles&&G,!this.hasHistogram&&this.precise&&this.labelHandles&&H,this.hasHistogram&&!this.precise&&this.labelHandles&&w,this.hasHistogram&&this.precise&&this.labelHandles&&e,d.h(A.HiddenFormInputSlot,{component:this}))))}renderGraph(){return this.histogram?d.h("calcite-graph",{class:"graph",colorStops:this.histogramStops,data:this.histogram,highlightMax:v(this.value)?this.maxValue:
this.value,highlightMin:v(this.value)?this.minValue:this.min,max:this.max,min:this.min}):null}renderTickLabel(a){const b=v(this.value),c=a===this.min,e=a===this.max;a=this.determineGroupSeparator(a);a=d.h("span",{class:{tick__label:!0,["tick__label--min"]:c,["tick__label--max"]:e}},a);return this.labelTicks&&!this.hasHistogram&&!b||this.labelTicks&&!this.hasHistogram&&b&&!this.precise&&!this.labelHandles||this.labelTicks&&!this.hasHistogram&&b&&!this.precise&&this.labelHandles||this.labelTicks&&!this.hasHistogram&&
b&&this.precise&&(c||e)||this.labelTicks&&this.hasHistogram&&!this.precise&&!this.labelHandles||this.labelTicks&&this.hasHistogram&&this.precise&&!this.labelHandles&&(c||e)||this.labelTicks&&this.hasHistogram&&!this.precise&&this.labelHandles&&(c||e)||this.labelTicks&&this.hasHistogram&&this.precise&&this.labelHandles&&(c||e)?a:null}keyDownHandler(a){const b=this.shouldMirror(),{activeProp:c,max:e,min:g,pageStep:h,step:l}=this,m=this[c],{key:k}=a;if(Q.isActivationKey(k))a.preventDefault();else{var n;
"ArrowUp"===k||"ArrowRight"===k?n=m+l*(b&&"ArrowRight"===k?-1:1):"ArrowDown"===k||"ArrowLeft"===k?n=m-l*(b&&"ArrowLeft"===k?-1:1):"PageUp"===k?h&&(n=m+h):"PageDown"===k?h&&(n=m-h):"Home"===k?n=g:"End"===k&&(n=e);isNaN(n)||(a.preventDefault(),a=Number(n.toFixed(z.decimalPlaces(l))),this.setValue({[c]:this.clamp(a,c)}))}}pointerDownHandler(a){if(!this.disabled&&y.isPrimaryPointerButton(a)){a=a.clientX||a.pageX;var b=this.translate(a),c="value";v(this.value)&&(c=b>=this.minValue&&b<=this.maxValue&&"minMaxValue"===
this.lastDragProp?"minMaxValue":Math.abs(this.maxValue-b)<Math.abs(this.minValue-b)||b>this.maxValue?"maxValue":"minValue");this.lastDragPropValue=this[c];this.dragStart(c);this.el.shadowRoot.querySelector(".thumb:active")||this.setValue({[c]:this.clamp(b,c)});this.focusActiveHandle(a)}}handleTouchStart(a){a.preventDefault()}async setFocus(){await F.componentFocusable(this);(this.minHandle?this.minHandle:this.maxHandle)?.focus()}setValueFromMinMax(){const {minValue:a,maxValue:b}=this;"number"===typeof a&&
"number"===typeof b&&(this.value=[a,b])}setMinMaxFromValue(){const {value:a}=this;v(a)&&(this.minValue=a[0],this.maxValue=a[1])}onLabelClick(){this.setFocus()}shouldMirror(){return this.mirrored&&!this.hasHistogram}shouldUseMinValue(){return v(this.value)?this.hasHistogram&&0===this.maxValue||!this.hasHistogram&&0===this.minValue:!1}getTickDensity(){const a=(this.max-this.min)/this.ticks/250;return 1>a?1:a}generateTickValues(){var a=this.ticks??0;if(0>=a)return[];const b=[this.min];var c=this.getTickDensity();
a*=c;for(c=this.min;c<this.max;)c+=a,b.push(Math.min(c,this.max));b.includes(this.max)||b.push(this.max);return b}pointerDownDragStart(a,b){y.isPrimaryPointerButton(a)&&this.dragStart(b)}dragStart(a){this.activeProp=this.lastDragProp=this.dragProp=a;document.addEventListener("pointermove",this.dragUpdate);document.addEventListener("pointerup",this.pointerUpDragEnd);document.addEventListener("pointercancel",this.dragEnd)}focusActiveHandle(a){switch(this.dragProp){case "minValue":this.minHandle.focus();
break;case "maxValue":case "value":this.maxHandle.focus();break;case "minMaxValue":this.getClosestHandle(a).focus()}}emitInput(){this.calciteSliderInput.emit()}emitChange(){this.calciteSliderChange.emit()}removeDragListeners(){document.removeEventListener("pointermove",this.dragUpdate);document.removeEventListener("pointerup",this.pointerUpDragEnd);document.removeEventListener("pointercancel",this.dragEnd)}setValue(a){let b;Object.keys(a).forEach(c=>{const e=a[c];b||(b=this[c]!==e);this[c]=e});b&&
(this.dragProp||this.emitChange(),this.emitInput())}clamp(a,b){a=z.clamp(a,this.min,this.max);"maxValue"===b&&(a=Math.max(a,this.minValue));"minValue"===b&&(a=Math.min(a,this.maxValue));return a}translate(a){var b=this.max-this.min;const {left:c,width:e}=this.trackEl.getBoundingClientRect();a=(a-c)/e;const g=this.shouldMirror();b=this.clamp(this.min+b*(g?1-a:a));b=Number(b.toFixed(z.decimalPlaces(this.step)));this.snap&&this.step&&(b=this.getClosestStep(b));return b}getClosestStep(a){a=Number(this.clamp(a).toFixed(z.decimalPlaces(this.step)));
this.step&&(a=Number(this.clamp(Math.round(a/this.step)*this.step).toFixed(z.decimalPlaces(this.step))));return a}getClosestHandle(a){return this.getDistanceX(this.maxHandle,a)>this.getDistanceX(this.minHandle,a)?this.minHandle:this.maxHandle}getDistanceX(a,b){return Math.abs(a.getBoundingClientRect().left-b)}getFontSizeForElement(a){return Number(window.getComputedStyle(a).getPropertyValue("font-size").match(/\d+/)[0])}getUnitInterval(a){a=this.clamp(a);return(a-this.min)/(this.max-this.min)}adjustHostObscuredHandleLabel(a){const b=
this.el.shadowRoot.querySelector(`.handle__label--${a}`);var c=this.el.shadowRoot.querySelector(`.handle__label--${a}.static`);a=this.el.shadowRoot.querySelector(`.handle__label--${a}.transformed`);c=c.getBoundingClientRect();c=this.getHostOffset(c.left,c.right);b.style.transform=`translateX(${c}px)`;a.style.transform=`translateX(${c}px)`}hyphenateCollidingRangeHandleLabels(){var {shadowRoot:a}=this.el,b=this.shouldMirror(),c=b?"value":"minValue",e=b?"minValue":"value";b=a.querySelector(`.handle__label--${c}`);
var g=a.querySelector(`.handle__label--${c}.static`);c=a.querySelector(`.handle__label--${c}.transformed`);var h=this.getHostOffset(g.getBoundingClientRect().left,g.getBoundingClientRect().right);g=a.querySelector(`.handle__label--${e}`);var l=a.querySelector(`.handle__label--${e}.static`);a=a.querySelector(`.handle__label--${e}.transformed`);var m=this.getHostOffset(l.getBoundingClientRect().left,l.getBoundingClientRect().right);e=this.getFontSizeForElement(b);l=this.getRangeLabelOverlap(c,a);e/=
2;if(0<l)if(b.classList.add("hyphen","hyphen--wrap"),0===m&&0===h){h=l/2-e;h=-1===Math.sign(h)?Math.abs(h):-h;m=this.getHostOffset(c.getBoundingClientRect().left+h-e,c.getBoundingClientRect().right+h-e);l/=2;const k=this.getHostOffset(a.getBoundingClientRect().left+l,a.getBoundingClientRect().right+l);0!==m&&(h+=m,l+=m);0!==k&&(h+=k,l+=k);b.style.transform=`translateX(${h}px)`;c.style.transform=`translateX(${h-e}px)`;g.style.transform=`translateX(${l}px)`;a.style.transform=`translateX(${l}px)`}else if(0<
h||0<m)b.style.transform=`translateX(${h+e}px)`,g.style.transform=`translateX(${l+m}px)`,a.style.transform=`translateX(${l+m}px)`;else{if(0>h||0>m)g=Math.abs(h)+l-e,g=-1===Math.sign(g)?Math.abs(g):-g,b.style.transform=`translateX(${g}px)`,c.style.transform=`translateX(${g-e}px)`}else b.classList.remove("hyphen","hyphen--wrap"),b.style.transform=`translateX(${h}px)`,c.style.transform=`translateX(${h}px)`,g.style.transform=`translateX(${m}px)`,a.style.transform=`translateX(${m}px)`}hideObscuredBoundingTickLabels(){var a=
v(this.value);if(this.hasHistogram||a||this.labelHandles||this.precise)if(this.hasHistogram||a||!this.labelHandles||this.precise)if(this.hasHistogram||a||this.labelHandles||!this.precise)if(this.hasHistogram||a||!this.labelHandles||!this.precise)if(this.hasHistogram||!a||this.precise)if(!this.hasHistogram||this.precise||this.labelHandles){a=this.el.shadowRoot.querySelector(".thumb--minValue");var b=this.el.shadowRoot.querySelector(".thumb--value"),c=this.el.shadowRoot.querySelector(".tick__label--min"),
e=this.el.shadowRoot.querySelector(".tick__label--max");!a&&b&&c&&e&&(c.style.opacity=this.isMinTickLabelObscured(c,b)?"0":"1",e.style.opacity=this.isMaxTickLabelObscured(e,b)?"0":"1");a&&b&&c&&e&&(c.style.opacity=this.isMinTickLabelObscured(c,a)||this.isMinTickLabelObscured(c,b)?"0":"1",e.style.opacity=this.isMaxTickLabelObscured(e,a)||this.isMaxTickLabelObscured(e,b)&&this.hasHistogram?"0":"1")}}getHostOffset(a,b){const c=this.el.getBoundingClientRect();return a+7<c.left?c.left-a-7:b-7>c.right?
-(b-c.right)+7:0}getRangeLabelOverlap(a,b){const c=a.getBoundingClientRect();b=b.getBoundingClientRect();a=this.getFontSizeForElement(a);return Math.max(c.right+a-b.left,0)}isMinTickLabelObscured(a,b){a=a.getBoundingClientRect();b=b.getBoundingClientRect();return y.intersects(a,b)}isMaxTickLabelObscured(a,b){a=a.getBoundingClientRect();b=b.getBoundingClientRect();return y.intersects(a,b)}static get delegatesFocus(){return!0}get el(){return this}static get watchers(){return{histogram:["histogramWatcher"],
ticks:["ticksWatcher"],value:["valueHandler"],minValue:["minMaxValueHandler"],maxValue:["minMaxValueHandler"]}}static get style(){return'@charset "UTF-8";:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}.scale--s{--calcite-slider-handle-size:0.625rem;--calcite-slider-handle-extension-height:0.4rem;--calcite-slider-container-font-size:var(--calcite-font-size--3)}.scale--s .handle__label,.scale--s .tick__label{line-height:.75rem}.scale--m{--calcite-slider-handle-size:0.875rem;--calcite-slider-handle-extension-height:0.5rem;--calcite-slider-container-font-size:var(--calcite-font-size--2)}.scale--m .handle__label,.scale--m .tick__label{line-height:1rem}.scale--l{--calcite-slider-handle-size:1rem;--calcite-slider-handle-extension-height:0.65rem;--calcite-slider-container-font-size:var(--calcite-font-size--1)}.scale--l .handle__label,.scale--l .tick__label{line-height:1rem}.handle__label,.tick__label{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-2);font-size:var(--calcite-slider-container-font-size)}:host{display:block}.container{position:relative;display:block;overflow-wrap:normal;word-break:normal;padding-inline:calc(var(--calcite-slider-handle-size) * 0.5);padding-block:calc(var(--calcite-slider-handle-size) * 0.5);margin-block:calc(var(--calcite-slider-handle-size) * 0.5);margin-inline:0;--calcite-slider-full-handle-height:calc(\n    var(--calcite-slider-handle-size) + var(--calcite-slider-handle-extension-height)\n  );touch-action:none}:host([disabled]) .track__range,:host([disabled]) .tick--active{background-color:var(--calcite-ui-text-3)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.scale--s .thumb:not(.thumb--precise){--calcite-slider-thumb-y-offset:-0.375rem}.scale--m .thumb:not(.thumb--precise){--calcite-slider-thumb-y-offset:-0.5rem}.scale--l .thumb:not(.thumb--precise){--calcite-slider-thumb-y-offset:-0.55rem}:host([precise]:not([has-histogram])) .container .thumb--value{--calcite-slider-thumb-y-offset:calc(var(--calcite-slider-full-handle-height) * -1)}.thumb-container{position:relative;max-inline-size:100%}.thumb{--calcite-slider-thumb-x-offset:calc(var(--calcite-slider-handle-size) * 0.5);position:absolute;margin:0px;display:flex;cursor:pointer;flex-direction:column;align-items:center;border-style:none;background-color:transparent;padding:0px;font-family:inherit;outline:2px solid transparent;outline-offset:2px;transform:translate(var(--calcite-slider-thumb-x-offset), var(--calcite-slider-thumb-y-offset))}.thumb .handle__label.static,.thumb .handle__label.transformed{position:absolute;inset-block:0px;opacity:0}.thumb .handle__label.hyphen::after{content:"\u2014";display:inline-block;inline-size:1em}.thumb .handle__label.hyphen--wrap{display:flex}.thumb .handle{box-sizing:border-box;border-radius:9999px;background-color:var(--calcite-ui-foreground-1);outline-color:transparent;block-size:var(--calcite-slider-handle-size);inline-size:var(--calcite-slider-handle-size);box-shadow:0 0 0 2px var(--calcite-ui-text-3) inset;transition:border var(--calcite-internal-animation-timing-medium) ease, background-color var(--calcite-internal-animation-timing-medium) ease, box-shadow var(--calcite-animation-timing) ease}.thumb .handle-extension{inline-size:0.125rem;block-size:var(--calcite-slider-handle-extension-height);background-color:var(--calcite-ui-text-3)}.thumb:hover .handle{box-shadow:0 0 0 3px var(--calcite-ui-brand) inset}.thumb:hover .handle-extension{background-color:var(--calcite-ui-brand)}.thumb:focus .handle{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.thumb:focus .handle-extension{background-color:var(--calcite-ui-brand)}.thumb.thumb--minValue{transform:translate(calc(var(--calcite-slider-thumb-x-offset) * -1), var(--calcite-slider-thumb-y-offset))}.thumb.thumb--precise{--calcite-slider-thumb-y-offset:-0.125rem}:host([label-handles]) .thumb{--calcite-slider-thumb-x-offset:50%}:host([label-handles]):host(:not([has-histogram])) .scale--s .thumb:not(.thumb--precise){--calcite-slider-thumb-y-offset:-1.4375rem}:host([label-handles]):host(:not([has-histogram])) .scale--m .thumb:not(.thumb--precise){--calcite-slider-thumb-y-offset:-1.875rem}:host([label-handles]):host(:not([has-histogram])) .scale--l .thumb:not(.thumb--precise){--calcite-slider-thumb-y-offset:-2rem}:host([has-histogram][label-handles]) .handle__label,:host([label-handles]:not([has-histogram])) .thumb--minValue.thumb--precise .handle__label{margin-block-start:0.5em}:host(:not([has-histogram]):not([precise])) .handle__label,:host([label-handles]:not([has-histogram])) .thumb--value .handle__label{margin-block-end:0.5em}:host([label-handles][precise]):host(:not([has-histogram])) .scale--s .thumb--value{--calcite-slider-thumb-y-offset:-2.075rem}:host([label-handles][precise]):host(:not([has-histogram])) .scale--m .thumb--value{--calcite-slider-thumb-y-offset:-2.75rem}:host([label-handles][precise]):host(:not([has-histogram])) .scale--l .thumb--value{--calcite-slider-thumb-y-offset:-3.0625rem}.thumb:focus .handle,.thumb--active .handle{background-color:var(--calcite-ui-brand);box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.16)}.thumb:hover.thumb--precise:after,.thumb:focus.thumb--precise:after,.thumb--active.thumb--precise:after{background-color:var(--calcite-ui-brand)}.track{position:relative;block-size:0.125rem;border-radius:0px;background-color:var(--calcite-ui-border-2);transition:all var(--calcite-internal-animation-timing-medium) ease-in}.track__range{position:absolute;inset-block-start:0px;block-size:0.125rem;background-color:var(--calcite-ui-brand)}.container--range .track__range:hover{cursor:ew-resize}.container--range .track__range:after{position:absolute;inline-size:100%;content:"";inset-block-start:calc(var(--calcite-slider-full-handle-height) * 0.5 * -1);block-size:calc(var(--calcite-slider-handle-size) + var(--calcite-slider-handle-extension-height))}@media (forced-colors: active){.thumb{outline-width:0;outline-offset:0}.handle{outline:2px solid transparent;outline-offset:2px}.thumb:focus .handle,.thumb .handle-extension,.thumb:hover .handle-extension,.thumb:focus .handle-extension,.thumb:active .handle-extension{background-color:canvasText}.track{background-color:canvasText}.track__range{background-color:highlight}}.tick{position:absolute;block-size:0.25rem;inline-size:0.125rem;border-width:1px;border-style:solid;background-color:var(--calcite-ui-border-input);border-color:var(--calcite-ui-foreground-1);inset-block-start:-2px;pointer-events:none;margin-inline-start:calc(-1 * 0.125rem)}.tick--active{background-color:var(--calcite-ui-brand)}.tick__label{pointer-events:none;margin-block-start:0.875rem;display:flex;justify-content:center}.tick__label--min{transition:opacity var(--calcite-animation-timing)}.tick__label--max{transition:opacity var(--calcite-internal-animation-timing-fast)}:host([has-histogram][label-handles]) .tick__label--min,:host([has-histogram][label-handles]) .tick__label--max,:host([has-histogram][precise]) .tick__label--min,:host([has-histogram][precise]) .tick__label--max{font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-3)}.graph{color:var(--calcite-ui-foreground-3);block-size:48px}:host([label-ticks][ticks]) .container{padding-block-end:calc(0.875rem + var(--calcite-slider-container-font-size))}:host([has-histogram]):host([precise][label-handles]) .container{padding-block-end:calc(var(--calcite-slider-full-handle-height) + 1em)}:host([has-histogram]):host([label-handles]:not([precise])) .container{padding-block-end:calc(var(--calcite-slider-handle-size) * 0.5 + 1em)}:host([has-histogram]):host([precise]:not([label-handles])) .container{padding-block-end:var(--calcite-slider-full-handle-height)}:host(:not([has-histogram])):host([precise]:not([label-handles])) .container{padding-block-start:var(--calcite-slider-full-handle-height)}:host(:not([has-histogram])):host([precise]:not([label-handles])) .container--range{padding-block-end:var(--calcite-slider-full-handle-height)}:host(:not([has-histogram])):host([label-handles]:not([precise])) .container{padding-block-start:calc(var(--calcite-slider-full-handle-height) + 4px)}:host(:not([has-histogram])):host([label-handles][precise]) .container{padding-block-start:calc(var(--calcite-slider-full-handle-height) + var(--calcite-slider-container-font-size) + 4px)}:host(:not([has-histogram])):host([label-handles][precise]) .container--range{padding-block-end:calc(var(--calcite-slider-full-handle-height) + var(--calcite-slider-container-font-size) + 4px)}::slotted(input[slot\x3dhidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}'}},
[17,"calcite-slider",{disabled:[516],form:[513],groupSeparator:[516,"group-separator"],hasHistogram:[1540,"has-histogram"],histogram:[16],histogramStops:[16],labelHandles:[516,"label-handles"],labelTicks:[516,"label-ticks"],max:[514],maxLabel:[1,"max-label"],maxValue:[1026,"max-value"],min:[514],minLabel:[1,"min-label"],minValue:[1026,"min-value"],mirrored:[516],name:[513],numberingSystem:[1,"numbering-system"],pageStep:[514,"page-step"],precise:[516],required:[516],snap:[516],step:[514],ticks:[514],
value:[1538],scale:[513],effectiveLocale:[32],minMaxValueRange:[32],minValueDragRange:[32],maxValueDragRange:[32],tickValues:[32],setFocus:[64]},[[0,"keydown","keyDownHandler"],[1,"pointerdown","pointerDownHandler"]]]);M();C.CalciteSlider=N;C.defineCustomElement=M;Object.defineProperty(C,Symbol.toStringTag,{value:"Module"})});