// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ./index ./dom ./conditionalSlot ./loadable ./t9n ./interactive ./locale ./observers ./key ./icon".split(" "),function(g,b,d,h,e,c,f,k,n,p,q){function l(){"undefined"!==typeof customElements&&["calcite-chip","calcite-icon"].forEach(a=>{switch(a){case "calcite-chip":customElements.get(a)||customElements.define(a,m);break;case "calcite-icon":customElements.get(a)||q.defineCustomElement()}})}const m=b.proxyCustomElement(class extends b.H{constructor(){super();this.__registerHost();this.__attachShadow();
this.calciteChipClose=b.createEvent(this,"calciteChipClose",6);this.calciteChipSelect=b.createEvent(this,"calciteChipSelect",6);this.calciteInternalChipKeyEvent=b.createEvent(this,"calciteInternalChipKeyEvent",6);this.mutationObserver=n.createObserver("mutation",()=>this.updateHasText());this.close=()=>{this.calciteChipClose.emit();this.selected=!1;this.closed=!0};this.closeButtonKeyDownHandler=a=>{p.isActivationKey(a.key)&&(a.preventDefault(),this.close())};this.handleSlotImageChange=a=>{this.hasImage=
d.slotChangeHasAssignedElement(a)};this.handleEmittingEvent=()=>{this.interactive&&this.calciteChipSelect.emit()};this.disabled=!1;this.appearance="solid";this.kind="neutral";this.closable=!1;this.icon=void 0;this.iconFlipRtl=!1;this.scale="m";this.value=this.label=void 0;this.closed=!1;this.selectionMode="none";this.selected=!1;this.messages=this.messageOverrides=void 0;this.interactive=!1;this.effectiveLocale=this.defaultMessages=void 0;this.hasImage=this.hasText=!1}onMessagesChange(){}effectiveLocaleChange(){c.updateMessages(this,
this.effectiveLocale)}connectedCallback(){h.connectConditionalSlotComponent(this);f.connectInteractive(this);k.connectLocalized(this);c.connectMessages(this);this.mutationObserver?.observe(this.el,{childList:!0,subtree:!0})}componentDidLoad(){e.setComponentLoaded(this)}componentDidRender(){f.updateHostInteraction(this)}disconnectedCallback(){h.disconnectConditionalSlotComponent(this);f.disconnectInteractive(this);k.disconnectLocalized(this);c.disconnectMessages(this);this.mutationObserver?.disconnect()}async componentWillLoad(){e.setUpLoadableComponent(this);
b.Build.isBrowser&&(await c.setUpMessages(this),this.updateHasText())}keyDownHandler(a){if(a.target===this.el)switch(a.key){case " ":case "Enter":this.handleEmittingEvent();a.preventDefault();break;case "ArrowRight":case "ArrowLeft":case "Home":case "End":this.calciteInternalChipKeyEvent.emit(a),a.preventDefault()}}clickHandler(){!this.interactive&&this.closable&&this.closeButtonEl.focus()}async setFocus(){await e.componentFocusable(this);!this.disabled&&this.interactive?this.containerEl?.focus():
!this.disabled&&this.closable&&this.closeButtonEl?.focus()}updateHasText(){this.hasText=0<this.el.textContent.trim().length}renderChipImage(){return b.h("div",{class:"image-container"},b.h("slot",{name:"image",onSlotchange:this.handleSlotImageChange}))}renderSelectionIcon(){return b.h("div",{class:{["select-icon"]:!0,["select-icon--active"]:"multiple"===this.selectionMode||this.selected}},b.h("calcite-icon",{icon:"multiple"===this.selectionMode&&this.selected?"check-circle-f":"multiple"===this.selectionMode?
"circle":this.selected?"circle-f":void 0,scale:"l"===this.scale?"m":"s"}))}renderCloseButton(){return b.h("button",{"aria-label":this.messages.dismissLabel,class:"close",onClick:this.close,onKeyDown:this.closeButtonKeyDownHandler,tabIndex:this.disabled?-1:0,ref:a=>this.closeButtonEl=a},b.h("calcite-icon",{icon:"x",scale:"l"===this.scale?"m":"s"}))}renderIcon(){return b.h("calcite-icon",{class:"chip-icon",flipRtl:this.iconFlipRtl,icon:this.icon,scale:"l"===this.scale?"m":"s"})}render(){const a=this.disabled||
!this.disabled&&!this.interactive,r="multiple"===this.selectionMode&&this.interactive?"checkbox":"none"!==this.selectionMode&&this.interactive?"radio":this.interactive?"button":void 0;return b.h(b.Host,null,b.h("div",{"aria-checked":"none"!==this.selectionMode&&this.interactive?d.toAriaBoolean(this.selected):void 0,"aria-disabled":a?d.toAriaBoolean(this.disabled):void 0,"aria-label":this.label,class:{container:!0,["text--slotted"]:this.hasText,["image--slotted"]:this.hasImage,selectable:"none"!==
this.selectionMode,multiple:"multiple"===this.selectionMode,closable:this.closable,["non-interactive"]:!this.interactive,["is-circle"]:!this.closable&&!this.hasText&&(!this.icon||!this.hasImage)&&("none"===this.selectionMode||!!this.selectionMode&&"multiple"!==this.selectionMode&&!this.selected)},onClick:this.handleEmittingEvent,role:r,tabIndex:a?-1:0,ref:t=>this.containerEl=t},"none"!==this.selectionMode&&this.renderSelectionIcon(),this.renderChipImage(),this.icon&&this.renderIcon(),b.h("span",{class:"title"},
b.h("slot",null)),this.closable&&this.renderCloseButton()))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host([scale\x3ds]){block-size:1.5rem;font-size:var(--calcite-font-size--2);--calcite-chip-spacing-s-internal:0.25rem;--calcite-chip-spacing-l-internal:0.5rem}:host([scale\x3ds]) .close,:host([scale\x3ds]) .select-icon--active{block-size:1rem;inline-size:1rem}:host([scale\x3ds]) .image-container{block-size:1.25rem;inline-size:1.25rem}:host([scale\x3ds]) .container.is-circle{block-size:1.5rem;inline-size:1.5rem}:host([scale\x3dm]){block-size:2rem;font-size:var(--calcite-font-size--1);--calcite-chip-spacing-s-internal:0.375rem;--calcite-chip-spacing-l-internal:0.5rem}:host([scale\x3dm]) .close,:host([scale\x3dm]) .image-container,:host([scale\x3dm]) .select-icon--active{block-size:1.5rem;inline-size:1.5rem}:host([scale\x3dm]) .container.is-circle{block-size:2rem;inline-size:2rem}:host([scale\x3dl]){block-size:2.75rem;font-size:var(--calcite-font-size-0);--calcite-chip-spacing-s-internal:0.5rem;--calcite-chip-spacing-l-internal:0.75rem}:host([scale\x3dl]) .image-container,:host([scale\x3dl]) .close,:host([scale\x3dl]) .select-icon--active{block-size:2rem;inline-size:2rem}:host([scale\x3dl]) .container.is-circle{block-size:2.75rem;inline-size:2.75rem}:host{display:inline-flex;cursor:default;border-radius:9999px}.container{box-sizing:border-box;display:inline-flex;block-size:100%;max-inline-size:100%;align-items:center;justify-content:center;border-radius:9999px;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-1);font-weight:var(--calcite-font-weight-medium);outline-color:transparent}.container:not(.is-circle){padding-inline:var(--calcite-chip-spacing-s-internal)}.container.selectable{cursor:pointer}.container:not(.non-interactive):focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}:host([scale\x3ds]) .container.image--slotted{padding-inline-start:calc(0.125rem / 2)}:host([scale\x3ds]) .container.is-circle{padding-inline:0}.container.text--slotted .title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-inline:var(--calcite-chip-spacing-s-internal)}.container:not(.text--slotted) .title{display:none}.container:not(.image--slotted) .image-container{display:none}.container.closable{padding-inline-end:calc(var(--calcite-chip-spacing-l-internal) / 2)}.container:not(.is-circle).image--slotted{padding-inline-start:calc(var(--calcite-chip-spacing-l-internal) / 2)}.container:not(.is-circle).image--slotted .image-container{margin-inline-end:var(--calcite-chip-spacing-s-internal)}.container:not(.is-circle).image--slotted .image-container~.chip-icon{margin-inline-start:var(--calcite-chip-spacing-s-internal)}.container:not(.is-circle).selectable:not(.text--slotted) .chip-icon{margin-inline-end:var(--calcite-chip-spacing-s-internal)}.container:not(.is-circle):not(.selectable):not(.text--slotted) .chip-icon{margin-inline-start:var(--calcite-chip-spacing-s-internal)}.container:not(.is-circle):not(.text--slotted) .chip-icon{margin-inline-end:var(--calcite-chip-spacing-s-internal)}.container:not(.is-circle):not(.text-slotted).image--slotted .image-container{margin-inline-end:var(--calcite-chip-spacing-s-internal)}.container:not(.is-circle):not(.closable):not(.text--slotted).image--slotted.selectable .image-container{margin-inline-end:0}.container:not(.is-circle):not(.closable):not(.text--slotted).image--slotted.selectable .image-container~.chip-icon{margin-inline-start:calc(var(--calcite-chip-spacing-s-internal) * 2)}.chip-icon{position:relative;margin-block:0px;display:inline-flex;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);margin-inline:var(--calcite-chip-spacing-s-internal)}.image-container{display:inline-flex;overflow:hidden;align-items:center;justify-content:center;pointer-events:none}.close{margin:0px;cursor:pointer;align-items:center;border-style:none;background-color:transparent;color:var(--calcite-ui-text-1);outline-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;-webkit-appearance:none;display:flex;border-radius:50%;align-content:center;justify-content:center;--calcite-chip-transparent-hover:var(--calcite-button-transparent-hover);--calcite-chip-transparent-press:var(--calcite-button-transparent-press)}.close:hover{background-color:var(--calcite-chip-transparent-hover)}.close:focus{background-color:var(--calcite-chip-transparent-hover);outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.close:active{background-color:var(--calcite-chip-transparent-press)}.close calcite-icon{color:inherit}.select-icon{align-self:center;justify-content:center;align-items:center;display:flex;inset-block-start:-1px;position:relative;visibility:hidden;inline-size:0;opacity:0;transition:opacity 0.15s ease-in-out, inline-size 0.15s ease-in-out}.select-icon.select-icon--active{visibility:visible;opacity:0.5}.container:not(.is-circle).image--slotted .select-icon.select-icon--active{margin-inline-end:var(--calcite-chip-spacing-s-internal)}:host([selected]) .select-icon{opacity:1}.container:hover .select-icon--active{opacity:1}slot[name\x3dimage]::slotted(*){display:flex;block-size:100%;inline-size:100%;overflow:hidden;border-radius:50%}:host([kind\x3dneutral]){background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}:host([kind\x3dneutral]) .container{border-color:transparent}:host([kind\x3dneutral]) .close{color:var(--calcite-ui-text-3)}:host([kind\x3dneutral]) .chip-icon{color:var(--calcite-ui-icon-color, var(--calcite-ui-text-3))}:host([kind\x3dinverse]){background-color:var(--calcite-ui-inverse);color:var(--calcite-ui-text-inverse)}:host([kind\x3dinverse]) .container{border-color:transparent}:host([kind\x3dinverse]) .close{color:var(--calcite-ui-text-inverse)}:host([kind\x3dinverse]) .chip-icon{color:var(--calcite-ui-icon-color, var(--calcite-ui-text-inverse))}:host([kind\x3dbrand]){background-color:var(--calcite-ui-brand);color:var(--calcite-ui-text-inverse)}:host([kind\x3dbrand]) .container{border-color:transparent}:host([kind\x3dbrand]) .close{color:var(--calcite-ui-text-inverse)}:host([kind\x3dbrand]) .chip-icon{color:var(--calcite-ui-icon-color, var(--calcite-ui-text-inverse))}:host([appearance\x3doutline-fill]),:host([appearance\x3doutline]){background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-1)}:host([appearance\x3doutline-fill]) .close,:host([appearance\x3doutline]) .close{color:var(--calcite-ui-text-3)}:host([appearance\x3doutline-fill]) .chip-icon,:host([appearance\x3doutline]) .chip-icon{color:var(--calcite-ui-icon-color, var(--calcite-ui-text-3))}:host([appearance\x3doutline-fill]){background-color:var(--calcite-ui-foreground-1)}:host([appearance\x3doutline]){background-color:transparent}:host([kind\x3dneutral][appearance\x3doutline-fill]) .container,:host([kind\x3dneutral][appearance\x3doutline]) .container{border-color:var(--calcite-ui-border-1)}:host([kind\x3dinverse][appearance\x3doutline-fill]) .container,:host([kind\x3dinverse][appearance\x3doutline]) .container{border-color:var(--calcite-ui-border-inverse)}:host([kind\x3dbrand][appearance\x3doutline-fill]) .container,:host([kind\x3dbrand][appearance\x3doutline]) .container{border-color:var(--calcite-ui-brand)}:host([kind\x3dbrand][appearance\x3dsolid]) button,:host([kind\x3dinverse][appearance\x3dsolid]) button{outline-color:var(--calcite-ui-text-inverse)}:host([closed]){display:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([hidden]){display:none}[hidden]{display:none}"}},
[1,"calcite-chip",{disabled:[516],appearance:[513],kind:[513],closable:[516],icon:[513],iconFlipRtl:[516,"icon-flip-rtl"],scale:[513],label:[1],value:[8],closed:[1540],selectionMode:[1,"selection-mode"],selected:[1540],messageOverrides:[1040],messages:[1040],interactive:[4],defaultMessages:[32],effectiveLocale:[32],hasText:[32],hasImage:[32],setFocus:[64]},[[0,"keydown","keyDownHandler"],[0,"click","clickHandler"]]]);l();g.Chip=m;g.defineCustomElement=l});