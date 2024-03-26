/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import t from"../core/Error.js";import"../core/lang.js";import"./typedArrayUtil.js";import"./Logger.js";import"../config.js";function e(e,r){let s=r.responseType;s?"array-buffer"!==s&&"blob"!==s&&"json"!==s&&"native"!==s&&"native-request-init"!==s&&"text"!==s&&(s="text"):s="json",r.responseType=s;const a=r.signal;return delete r.signal,globalThis.invokeStaticMessage("request",{url:e,options:r},{signal:a}).then((async o=>{let n,i,l,u,p;if(o.data)if(o.data instanceof ArrayBuffer){if(!("json"!==s&&"text"!==s&&"blob"!==s||(n=new Blob([o.data]),"json"!==s&&"text"!==s||(u=await n.text(),"json"!==s)))){try{i=JSON.parse(u||null)}catch(s){const a={...s,url:e,requestOptions:r};throw new t("request:server",s.message,a)}if(i.error){const s={...i.error,url:e,requestOptions:r};throw new t("request:server",i.error.message,s)}}}else"native"===s&&(o.data.signal=a,l=await fetch(o.data.url,o.data),o.httpStatus=l.status);switch(s){case"blob":p=n;break;case"json":p=i;break;case"native":p=l;break;case"text":p=u;break;default:p=o.data}return{data:p,httpStatus:o.httpStatus,requestOptions:r,ssl:o.ssl,url:e}}))}export{e as execute};