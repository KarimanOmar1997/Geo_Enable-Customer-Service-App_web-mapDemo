// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/lang","../../../symbols/support/gfxUtils","../../../symbols/support/previewSymbol3D"],function(h,q,k,r){function t(a){if(a){var {type:b}=a;return b.includes("3d")?r.getSymbolLayerFill(a.symbolLayers.at(0)):"simple-line"===b||"simple-marker"===a.type&&("x"===a.style||"cross"===a.style)?(a=k.getStroke(a))&&a.color:k.getFill(a)}}function u(a,b){const e=b.HH.label,d=b.LL.label,c=b.HL.label;b=b.LH.label;switch(a){case "HH":return{top:e,bottom:d,left:c,right:b};case "HL":return{top:c,
bottom:b,left:d,right:e};case "LL":return{top:d,bottom:e,left:b,right:c};case "LH":return{top:b,bottom:c,left:e,right:d};default:return{top:e,bottom:d,left:c,right:b}}}function m(a){let b=n[a];a&&null==b&&(b=n.HH);return b||0}const n={HH:315,HL:45,LL:135,LH:225},v={2:[["HL","HH"],["LL","LH"]],3:[["HL","HM","HH"],["ML","MM","MH"],["LL","LM","LH"]],4:[["HL","HM1","HM2","HH"],["M2L","M2M1","M2M2","M2H"],["M1L","M1M1","M1M2","M1H"],["LL","LM1","LM2","LH"]]};h.getRelationshipRampColors2D=function(a,b){const e=
[],d=a.length**.5;a=q.clone(a);var c=(b||"HH").split("");b=c[0];for(c="H"===c[1];a.length;){const f=[];for(;f.length<d;)f.push(a.shift());c&&f.reverse();e.push(f)}"L"===b&&e.reverse();return e};h.getRelationshipRampElement=function(a){const {focus:b,infos:e,numClasses:d}=a;var c=v[d];const f={};e.forEach(g=>{f[g.value]={label:g.label,fill:t(g.symbol)}});a=[];for(let g=0;g<d;g++){const p=[];for(let l=0;l<d;l++)p.push(f[c[g][l]].fill);a.push(p)}c=u(b,f);return{type:"relationship-ramp",numClasses:d,
focus:b,colors:a,labels:c,rotation:m(b)}};h.getRotationAngleForFocus=m;Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});