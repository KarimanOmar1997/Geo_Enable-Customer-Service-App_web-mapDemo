/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import e from"../Color.js";import"./colorUtils2.js";const o={main:new e([255,127,0]),selected:new e([255,255,255]),outline:new e([0,0,0,.5]),selectedOutline:new e([255,255,255]),hoverOutline:new e([255,255,255]),secondary:new e([255,255,255]),secondaryOutline:new e([100,100,100]),transparent:new e([0,0,0,0])};function t(e,o){Object.assign(e,o)}class s{constructor(e){this.size=8,this.hoverSize=10,this.color=o.main,this.hoverColor=o.main,this.outlineColor=o.outline,this.hoverOutlineColor=o.hoverOutline,t(this,e)}}class r{constructor(e){this.color=o.secondary,this.hoverColor=o.main,t(this,e)}}class n{constructor(e){this.color=o.transparent,this.hoverColor=o.transparent,this.outlineColor=o.main,this.hoverOutlineColor=o.main,this.stagedColor=o.transparent,this.stagedOutlineColor=o.secondary,t(this,e)}}class i{constructor(e){this.vertex=new s,this.midpoint=new s({color:o.secondary,outlineColor:o.secondaryOutline,size:6}),this.selected=new s({color:o.selected,hoverColor:o.selected,hoverOutlineColor:o.hoverOutline}),t(this,e)}}class l{constructor(e){this.center=new s({color:o.secondaryOutline}),this.fill=new n,this.line=new r,this.vertex=new s({color:o.selected,outlineColor:o.main,hoverColor:o.selected,hoverOutlineColor:o.secondaryOutline}),t(this,e)}}const c=new class{constructor(e){this.reshapeGraphics=new i,this.transformGraphics=new l,t(this,e)}};export{c as s};
