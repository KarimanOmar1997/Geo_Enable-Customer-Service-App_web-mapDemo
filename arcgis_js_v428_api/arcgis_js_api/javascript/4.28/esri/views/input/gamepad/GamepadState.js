// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports"],function(d){d.extractState=function(c){const b=c.native;return b?{buttons:b.buttons.map(a=>a.pressed?a.value||1:0),axes:b.axes.map(a=>{{var e=c.axisThreshold;const f=Math.abs(a);a=f<e?0:Math.sign(a)*(f-e)/(1-e)}return a})}:{buttons:[],axes:[]}};d.stateEqual=function(c,b){if(c.axes.length!==b.axes.length||c.buttons.length!==b.buttons.length)return!1;for(var a=0;a<c.axes.length;a++)if(c.axes[a]!==b.axes[a])return!1;for(a=0;a<c.buttons.length;a++)if(c.buttons[a]!==b.buttons[a])return!1;
return!0};d.stateIdle=function(c){for(var b=0;b<c.axes.length;b++)if(0!==c.axes[b])return!1;for(b=0;b<c.buttons.length;b++)if(0!==c.buttons[b])return!1;return!0};Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});