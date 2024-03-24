/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{W as e}from"./WorkerHandle.js";class t{constructor(e,t,s,a){this._hasNoDataValues=null,this._minValue=null,this._maxValue=null,"pixelData"in e?(this.values=e.pixelData,this.width=e.width,this.height=e.height,this.noDataValue=e.noDataValue):(this.values=e,this.width=t,this.height=s,this.noDataValue=a)}get hasNoDataValues(){if(null==this._hasNoDataValues){const e=this.noDataValue;this._hasNoDataValues=this.values.includes(e)}return this._hasNoDataValues}get minValue(){return this._ensureBounds(),this._minValue}get maxValue(){return this._ensureBounds(),this._maxValue}_ensureBounds(){if(null!=this._minValue)return;const{noDataValue:e,values:t}=this;let s=1/0,a=-1/0,i=!0;for(const l of t)l===e?this._hasNoDataValues=!0:(s=l<s?l:s,a=l>a?l:a,i=!1);i?(this._minValue=0,this._maxValue=0):(this._minValue=s,this._maxValue=a>-3e38?a:0)}}class s extends e{constructor(e=null){super("LercWorker","_decode",{_decode:e=>[e.buffer]},e,{strategy:"dedicated"}),this.schedule=e,this.ref=0}decode(e,t,s){return e&&0!==e.byteLength?this.invoke({buffer:e,options:t},s):Promise.resolve(null)}release(){--this.ref<=0&&(a.forEach(((e,t)=>{e===this&&a.delete(t)})),this.destroy())}}const a=new Map;function i(e=null){let t=a.get(e);return t||(null!=e?(t=new s((t=>e.immediate.schedule(t))),a.set(e,t)):(t=new s,a.set(null,t))),++t.ref,t}export{t as E,i as a};
