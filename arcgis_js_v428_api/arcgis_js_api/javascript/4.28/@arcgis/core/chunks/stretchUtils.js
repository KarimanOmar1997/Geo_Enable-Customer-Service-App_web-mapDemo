/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{b as t}from"./maybe.js";import n from"../layers/support/PixelBlock.js";import{g as s}from"./pixelRangeUtils.js";import{a as e}from"./stretchRendererUtils.js";function i(t){return["u8","s8"].includes(t.pixelType)&&null!=t.statistics?.[0]?.min&&null!=t.statistics[0]?.max&&1===t.bandCount}function a(t,n){const{attributeTable:s,bandCount:e}=t;return!((null!=s||!i(t))&&(null==s||e>1||n&&null==s.fields.find((t=>t.name.toLowerCase()===n.toLowerCase()))))}function o(t){const{bandCount:n,dataType:s,pixelType:e}=t;return"elevation"===s||"generic"===s&&1===n&&("s16"===e||"s32"===e||"f32"===e||"f64"===e)}function r(t,n=!1){const{bandCount:s,colormap:e,pixelType:i}=t;return 1===s&&(!!e?.length||!n&&"u8"===i)}function l(t,n=!1){const{attributeTable:s,bandCount:e}=t;return 1===e&&(!n||null!=s||null!=t.histograms)}function u(t){const{dataType:n}=t;return"vector-uv"===n||"vector-magdir"===n}function f(t){const{dataType:n}=t;return"vector-uv"===n||"vector-magdir"===n}const c=1,m=[.299,.587,.114];function h(t,n=256){n=Math.min(n,256);const{size:s,counts:e}=t,i=new Uint8Array(s),a=e.reduce(((t,s)=>t+s/n),0);let o=0,r=0,l=0,u=a;for(let t=0;t<s;t++)if(l+=e[t],!(t<s-1&&l+e[t+1]<u)){for(;o<n-1&&u<l;)o++,u+=a;for(let n=r;n<=t;n++)i[n]=o;r=t+1}for(let t=r;t<s;t++)i[t]=n-1;return i}function d(t){const{minCutOff:n,maxCutOff:s,gamma:e,pixelType:i,rounding:a}=t,o=t.outMin||0,r=t.outMax||255;if(!["u8","u16","s8","s16"].includes(i))return null;const l=n.length;let u,f,c=0;"s8"===i?c=-127:"s16"===i&&(c=-32767);let m=256;["u16","s16"].includes(i)&&(m=65536);const h=[],d=[],g=r-o;for(u=0;u<l;u++)d[u]=s[u]-n[u],h[u]=0===d[u]?0:g/d[u];let x;const M=[];let y,b,v;if(e&&e.length>=l){const t=C(l,e);for(u=0;u<l;u++){for(v=[],f=0;f<m;f++)if(0!==d[u])if(y=f+c,x=(y-n[u])/d[u],b=1,e[u]>1&&(b-=(1/g)**(x*t[u])),y<s[u]&&y>n[u]){const t=b*g*x**(1/e[u])+o;v[f]="floor"===a?Math.floor(t):"round"===a?Math.round(t):t}else y>=s[u]?v[f]=r:v[f]=o;else v[f]=o;M[u]=v}}else for(u=0;u<l;u++){for(v=[],f=0;f<m;f++)if(y=f+c,y<=n[u])v[f]=o;else if(y>=s[u])v[f]=r;else{const t=(y-n[u])*h[u]+o;v[f]="floor"===a?Math.floor(t):"round"===a?Math.round(t):t}M[u]=v}if(null!=t.contrastOffset){const n=p(t.contrastOffset,t.brightnessOffset);for(u=0;u<l;u++)for(v=M[u],f=0;f<m;f++)v[f]=n[v[f]]}return{lut:M,offset:c}}function p(t,n){const s=Math.min(Math.max(t,-100),100),e=Math.min(Math.max(n??0,-100),100);let i=0,a=0;const o=new Uint8Array(256);for(i=0;i<256;i++)s>0&&s<100?a=(200*i-25500+510*e)/(2*(100-s))+128:s<=0&&s>-100?a=(200*i-25500+510*e)*(100+s)/2e4+128:100===s?(a=200*i-25500+256*(100-s)+510*e,a=a>0?255:0):-100===s&&(a=128),o[i]=a>255?255:a<0?0:a;return o}function g(t,n,s){const e=[];for(let i=0;i<n.length;i++){let a=0,o=0,r=0;"min"in n[i]?({min:a,max:o,avg:r}=n[i]):[a,o,r]=n[i];let l=r??0;"u8"!==t&&(l=255*(l-a)/(o-a)),s&&(l*=m[i]),e.push(x(l))}return e}function x(t){if(t<=0||t>=255)return c;let n=0;150!==t&&(n=t<=150?45*Math.cos(.01047*t):17*Math.sin(.021*t));const s=t+n,e=Math.log(t/255),i=Math.log(s/255);if(0===i)return c;const a=e/i;return isNaN(a)?c:Math.min(9.9,Math.max(.01,a))}function M(t){const{pixels:n,mask:s,pixelType:e,bandMasks:i}=t,a=n.map(((t,n)=>function(t,n,s,e){let i=1/0,a=-1/0,o=0,r=0,l=0,u=0;const f=t.length,c=new Map,m=[];for(let s=0;s<f;s++){const e=t[s];if(!n||n[s]){m.push(e);const t=(c.get(e)??0)+1;c.set(e,t),t>u&&(u=t,l=e),i=e<i?e:i,a=e>a?e:a,o+=e,r++}}if(0===r)return{statistics:{min:0,max:0,avg:0,stddev:0,mode:0,median:0},histogram:null};const h=o/r;let d=0;for(let s=0;s<f;s++)n&&!n[s]||(d+=(t[s]-h)**2);const p=n?n.filter((t=>t)).length:f,g=p<=1?0:Math.sqrt(d/(p-1));m.sort(((t,n)=>t-n));const x=r>>>1,M={min:i,max:a,avg:h,stddev:g,mode:l,median:r%2?m[Math.floor(x)]:(m[x-1]+m[x])/2};if(["u8","s8","u4","u2","u1"].includes(s)){const s=a-i+1,e=new Uint32Array(s);for(let s=0;s<f;s++)n&&!n[s]||e[t[s]-i]++;return{statistics:M,histogram:{min:i-.5,max:a+.5,size:s,counts:e}}}const y=new Uint32Array(256),b=(a-i)/256;if(0===b)return{statistics:M,histogram:{min:i,max:a,size:1,counts:new Uint32Array(1).fill(r)}};const v=new Uint32Array(257);for(let s=0;s<f;s++)n&&!n[s]||v[Math.floor((t[s]-i)/b)]++;for(let t=0;t<255;t++)y[t]=v[t];return y[255]=v[255]+v[256],{statistics:M,histogram:{min:i,max:a,size:256,counts:y}}}(t,i?.[n]??s,e)));return{statistics:a.map((({statistics:t})=>t)),histograms:a.map((({histogram:t})=>t))}}function y(t){if(!t?.pixels?.length)return null;const{pixels:n,mask:s,bandMasks:e,pixelType:i}=t,a=t.width*t.height,o=n.length;let r,l,u,f,c;const m=[],h=[];let d,p,g,x,M,y,b,v,C,w;const k=256;for(f=0;f<o;f++){d=new Uint32Array(k),g=n[f];const o=e?.[f]??s;if("u8"===i)if(r=-.5,l=255.5,o)for(c=0;c<a;c++)o[c]&&d[g[c]]++;else for(c=0;c<a;c++)d[g[c]]++;else{let n=!1;t.statistics||(t.updateStatistics(),n=!0);const s=t.statistics;if(r=s[f].minValue,l=s[f].maxValue,u=(l-r)/k,0===u){!s||t.validPixelCount||n||t.updateStatistics();const e=(t.validPixelCount||t.width*t.height)/k;for(let t=0;t<k;t++)d[t]=Math.round(e*(t+1))-Math.round(e*t)}else{for(p=new Uint32Array(257),c=0;c<a;c++)o&&!o[c]||p[Math.floor((g[c]-r)/u)]++;for(c=0;c<255;c++)d[c]=p[c];d[255]=p[255]+p[256]}}for(m.push({min:r,max:l,size:k,counts:d}),x=0,M=0,v=0,c=0;c<k;c++)x+=d[c],M+=c*d[c];for(C=M/x,c=0;c<k;c++)v+=d[c]*(c-C)**2;w=Math.sqrt(v/(x-1)),u=(l-r)/k,y=(C+.5)*u+r,b=w*u,h.push({min:r,max:l,avg:y,stddev:b})}return{statistics:h,histograms:m}}function b(t){const n=[];for(let s=0;s<t.length;s++){const{min:e,max:i,size:a,counts:o}=t[s];let r=0,l=0;for(let t=0;t<a;t++)r+=o[t],l+=t*o[t];const u=l/r;let f=0;for(let t=0;t<a;t++)f+=o[t]*(t-u)**2;const c=(i-e)/a,m=(u+.5)*c+e,h=Math.sqrt(f/(r-1))*c;n.push({min:e,max:i,avg:m,stddev:h})}return n}function v(n,i){const{pixelBlock:a,bandIds:o,returnHistogramLut:r,rasterInfo:l}=i;let u=null,f=null,c=n.stretchType;if("number"==typeof c&&(c=e[c]),n.dra)if("minMax"===c&&a?.statistics)u=a.statistics.map((t=>[t.minValue,t.maxValue,0,0]));else{const t=y(a);u=null!=t?t.statistics:null,f=null!=t?t.histograms:null}else u=n.statistics?.length?n.statistics:l.statistics,f="histograms"in n?n.histograms:void 0,f||(f=l.histograms);"percentClip"!==c&&"histogramEqualization"!==c||f?.length||(c="minMax");const m=u?.length||f?.length||l.bandCount,d=[],p=[];let g,x,M,b,v,C,w,k,z;u&&!Array.isArray(u[0])&&(u=u.map((t=>[t.min,t.max,t.avg,t.stddev])));const[T,O]=s(l.pixelType);if(!u?.length){for(u=[],k=0;k<m;k++)u.push([T,O,1,1]);"standardDeviation"===c&&(c="minMax")}switch(c){case"none":for(k=0;k<m;k++)d[k]=T,p[k]=O;break;case"minMax":for(k=0;k<m;k++){const t=u[k];d[k]=t[0],p[k]=t[1]}break;case"standardDeviation":{const{numberOfStandardDeviations:t=2}=n;for(k=0;k<m;k++){const n=u[k];d[k]=n[2]-t*n[3],p[k]=n[2]+t*n[3],d[k]<n[0]&&(d[k]=n[0]),p[k]>n[1]&&(p[k]=n[1])}}break;case"histogramEqualization":for(t(f),k=0;k<m;k++)d[k]=f[k].min,p[k]=f[k].max;break;case"percentClip":for(t(f),k=0;k<f.length;k++){for(g=f[k],v=new Uint32Array(g.size),b=[...g.counts],b.length>=20&&(b[0]=b[1]=b[2]=b[b.length-1]=b[b.length-2]=0),M=0,x=(g.max-g.min)/g.size,w=-.5===g.min&&1===x?.5:0,z=0;z<g.size;z++)M+=b[z],v[z]=M;for(C=(n.minPercent||0)*M/100,d[k]=g.min+w,z=0;z<g.size;z++)if(v[z]>C){d[k]=g.min+x*(z+w);break}for(C=(1-(n.maxPercent||0)/100)*M,p[k]=g.max+w,z=g.size-2;z>=0;z--)if(v[z]<C){p[k]=g.min+x*(z+2-w);break}if(p[k]<d[k]){const t=d[k];d[k]=p[k],p[k]=t}}break;default:for(k=0;k<m;k++){const t=u[k];d[k]=t[0],p[k]=t[1]}}let A,U,q;return"histogramEqualization"===c?(t(f),U=f[0].size||256,A=0,r&&(q=f.map((t=>h(t))))):(U=n.max||255,A=n.min||0),function(t,n){if(null==n||0===n.length)return t;const s=Math.max.apply(null,n),{minCutOff:e,maxCutOff:i,outMin:a,outMax:o,histogramLut:r}=t;return e.length===n.length||e.length<=s?t:{minCutOff:n.map((t=>e[t])),maxCutOff:n.map((t=>i[t])),histogramLut:r?n.map((t=>r[t])):null,outMin:a,outMax:o}}({minCutOff:d,maxCutOff:p,outMax:U,outMin:A,histogramLut:q},o)}function C(t,n){const s=new Float32Array(t);for(let e=0;e<t;e++)n[e]>1?n[e]>2?s[e]=6.5+(n[e]-2)**2.5:s[e]=6.5+100*(2-n[e])**4:s[e]=1;return s}function w(t,s){if(!t?.pixels?.length)return t;const{mask:e,bandMasks:i,width:a,height:o,pixels:r}=t,{minCutOff:l,maxCutOff:u,gamma:f}=s,c=s.outMin||0,m=s.outMax||255,h=a*o,d=s.outputPixelType||"u8",p=t.pixels.map((()=>n.createEmptyBand(d,h))),g=p.length,x=m-c,M=[],y=[];for(let t=0;t<g;t++)y[t]=u[t]-l[t],M[t]=0===y[t]?0:x/y[t];const b=d.startsWith("u")||d.startsWith("s"),v=f&&f.length>=g,w=!!s.isRenderer;if(v){const t=C(g,f);for(let n=0;n<g;n++){const s=i?.[n]??e;for(let e=0;e<h;e++)if(null==s||s[e]){if(0===y[n]){p[n][e]=c;continue}const s=r[n][e],i=(s-l[n])/y[n];let a=1;if(f[n]>1&&(a-=(1/x)**(i*t[n])),s<u[n]&&s>l[n]){const t=a*x*i**(1/f[n])+c;p[n][e]=w?Math.floor(t):b?Math.round(t):t}else s>=u[n]?p[n][e]=m:p[n][e]=c}}}else for(let t=0;t<g;t++){const n=i?.[t]??e;for(let s=0;s<h;s++)if(null==n||n[s]){const n=r[t][s];if(n<u[t]&&n>l[t]){const e=(n-l[t])*M[t]+c;p[t][s]=w?Math.floor(e):b?Math.round(e):e}else n>=u[t]?p[t][s]=m:p[t][s]=c}}const k=new n({width:a,height:o,mask:e,bandMasks:i,pixels:p,pixelType:d});return k.updateStatistics(),k}export{r as a,o as b,d as c,g as d,h as e,u as f,v as g,l as h,a as i,f as j,y as k,b as l,M as m,p as n,C as o,i as p,w as s};