/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{p as t,H as e,h as i}from"./index.js";import{c as o}from"./observers.js";import{c as a,s,a as n}from"./loadable.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.9.2
 */const r=t(class extends e{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.itemMutationObserver=o("mutation",(()=>this.updateFlowProps())),this.getFlowDirection=(t,e)=>t&&e>1||t>1?e<t?"retreating":"advancing":null,this.updateFlowProps=()=>{const{customItemSelectors:t,el:e,items:i}=this,o=Array.from(e.querySelectorAll("calcite-flow-item"+(t?`,${t}`:""))).filter((t=>t.closest("calcite-flow")===e)),a=i.length,s=o.length,n=o[s-1],r=o[s-2];if(s&&n&&o.forEach((t=>{t.showBackButton=t===n&&s>1,t.hidden=t!==n})),r&&(r.menuOpen=!1),this.items=o,a!==s){const t=this.getFlowDirection(a,s);this.itemCount=s,this.flowDirection=t}},this.customItemSelectors=void 0,this.flowDirection=null,this.itemCount=0,this.items=[]}async back(){const{items:t}=this,e=t[t.length-1];if(!e)return;const i=e.beforeBack?e.beforeBack:()=>Promise.resolve();try{await i.call(e)}catch(t){return}return e.remove(),e}async setFocus(){await a(this);const{items:t}=this,e=t[t.length-1];return e?.setFocus()}connectedCallback(){this.itemMutationObserver?.observe(this.el,{childList:!0,subtree:!0}),this.updateFlowProps()}async componentWillLoad(){s(this)}componentDidLoad(){n(this)}disconnectedCallback(){this.itemMutationObserver?.disconnect()}async handleItemBackClick(t){if(!t.defaultPrevented)return await this.back(),this.setFocus()}render(){const{flowDirection:t}=this;return i("div",{class:{frame:!0,"frame--advancing":"advancing"===t,"frame--retreating":"retreating"===t}},i("slot",null))}get el(){return this}static get style(){return":host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{position:relative;display:flex;inline-size:100%;flex:1 1 auto;align-items:stretch;overflow:hidden;background-color:transparent}:host .frame{position:relative;margin:0px;display:flex;inline-size:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;padding:0px}:host ::slotted(calcite-flow-item),:host ::slotted(calcite-panel){block-size:100%}:host ::slotted(.calcite-match-height:last-child){display:flex;flex:1 1 auto;overflow:hidden}:host .frame--advancing{animation:calcite-frame-advance var(--calcite-animation-timing)}:host .frame--retreating{animation:calcite-frame-retreat var(--calcite-animation-timing)}@keyframes calcite-frame-advance{0%{--tw-bg-opacity:0.5;transform:translate3d(50px, 0, 0)}100%{--tw-bg-opacity:1;transform:translate3d(0, 0, 0)}}@keyframes calcite-frame-retreat{0%{--tw-bg-opacity:0.5;transform:translate3d(-50px, 0, 0)}100%{--tw-bg-opacity:1;transform:translate3d(0, 0, 0)}}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-flow",{customItemSelectors:[1,"custom-item-selectors"],flowDirection:[32],itemCount:[32],items:[32],back:[64],setFocus:[64]},[[0,"calciteFlowItemBack","handleItemBackClick"]]]);function c(){"undefined"!=typeof customElements&&["calcite-flow"].forEach((t=>{"calcite-flow"===t&&(customElements.get(t)||customElements.define(t,r))}))}c();const l=r,m=c;export{l as CalciteFlow,m as defineCustomElement};
