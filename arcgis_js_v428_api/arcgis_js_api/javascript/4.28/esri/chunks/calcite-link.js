// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ./index ./dom ./interactive ./loadable ./icon".split(" "),function(d,b,e,f,g,l){function h(){"undefined"!==typeof customElements&&["calcite-link","calcite-icon"].forEach(a=>{switch(a){case "calcite-link":customElements.get(a)||customElements.define(a,k);break;case "calcite-icon":customElements.get(a)||l.defineCustomElement()}})}const k=b.proxyCustomElement(class extends b.H{constructor(){super();this.__registerHost();this.__attachShadow();this.childElClickHandler=a=>{a.isTrusted||
a.stopPropagation()};this.storeTagRef=a=>{this.childEl=a};this.download=this.disabled=!1;this.target=this.rel=this.iconStart=this.iconFlipRtl=this.iconEnd=this.href=void 0}connectedCallback(){f.connectInteractive(this)}componentWillLoad(){g.setUpLoadableComponent(this)}componentDidLoad(){g.setComponentLoaded(this)}componentDidRender(){f.updateHostInteraction(this)}disconnectedCallback(){f.disconnectInteractive(this)}render(){const {download:a,el:m}=this,n=e.getElementDir(m),c=this.href?"a":"span",
p=b.h("calcite-icon",{class:"calcite-link--icon icon-start",flipRtl:"start"===this.iconFlipRtl||"both"===this.iconFlipRtl,icon:this.iconStart,scale:"s"}),q=b.h("calcite-icon",{class:"calcite-link--icon icon-end",flipRtl:"end"===this.iconFlipRtl||"both"===this.iconFlipRtl,icon:this.iconEnd,scale:"s"});return b.h(b.Host,{role:"presentation"},b.h(c,{class:{[e.CSS_UTILITY.rtl]:"rtl"===n},download:"a"!==c||""!==a&&!a?null:a,href:"a"===c&&this.href,onClick:this.childElClickHandler,rel:"a"===c&&this.rel,
role:"span"===c?"link":null,tabIndex:"span"===c?0:null,target:"a"===c&&this.target,ref:this.storeTagRef},this.iconStart?p:null,b.h("slot",null),this.iconEnd?q:null))}clickHandler(a){this.disabled||a.isTrusted||this.childEl.click()}async setFocus(){await g.componentFocusable(this);e.focusElement(this.childEl)}get el(){return this}static get style(){return":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:inline}:host a,:host span{position:relative;display:flex;cursor:pointer;align-items:center;justify-content:center;border-radius:0px;border-style:none;font-family:inherit;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;text-decoration:none;line-height:inherit;font-size:inherit;-webkit-appearance:none}:host a:hover,:host span:hover{text-decoration:none}:host a,:host span{outline-color:transparent}:host a:focus,:host span:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}calcite-icon{inline-size:1em;block-size:1em;min-inline-size:unset;min-block-size:unset}.calcite-link--icon{vertical-align:middle;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;margin-block-start:-0.25em}:host .calcite-link--icon.icon-start{margin-inline-end:0.5rem}:host .calcite-link--icon.icon-end{margin-inline-start:0.5rem}:host span,:host a{position:relative;display:inline;border-style:none;background-color:transparent;padding:0px;color:var(--calcite-ui-text-link);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;line-height:inherit;white-space:initial;background-image:linear-gradient(currentColor, currentColor), linear-gradient(var(--calcite-link-blue-underline), var(--calcite-link-blue-underline));background-position-x:0%, 100%;background-position-y:min(1.5em, 100%);background-repeat:no-repeat, no-repeat;background-size:0% 1px, 100% 1px}:host span:hover,:host span:focus,:host a:hover,:host a:focus{background-size:100% 1px, 100% 1px}:host span:active,:host a:active{background-size:100% 2px, 100% 2px}:host span.calcite--rtl,:host a.calcite--rtl{background-position:100% 100%, 100% 100%}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([hidden]){display:none}[hidden]{display:none}"}},
[1,"calcite-link",{disabled:[516],download:[520],href:[513],iconEnd:[513,"icon-end"],iconFlipRtl:[513,"icon-flip-rtl"],iconStart:[513,"icon-start"],rel:[1],target:[1],setFocus:[64]},[[0,"click","clickHandler"]]]);h();d.CalciteLink=k;d.defineCustomElement=h;Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});