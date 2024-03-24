/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{M as e}from"./time.js";var t={},r={},n={};Object.defineProperty(n,"__esModule",{value:!0}),n.loop=n.conditional=n.parse=void 0,n.parse=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:n;if(Array.isArray(r))r.forEach((function(r){return e(t,r,n,i)}));else if("function"==typeof r)r(t,n,i,e);else{var a=Object.keys(r)[0];Array.isArray(r[a])?(i[a]={},e(t,r[a],n,i[a])):i[a]=r[a](t,n,i,e)}return n},n.conditional=function(e,t){return function(r,n,i,a){t(r,n,i)&&a(r,e,n,i)}},n.loop=function(e,t){return function(r,n,i,a){for(var o=[],d=r.pos;t(r,n,i);){var s={};if(a(r,e,n,s),r.pos===d)break;d=r.pos,o.push(s)}return o}};var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.readBits=i.readArray=i.readUnsigned=i.readString=i.peekBytes=i.readBytes=i.peekByte=i.readByte=i.buildStream=void 0,i.buildStream=function(e){return{data:e,pos:0}},i.readByte=function(){return function(e){return e.data[e.pos++]}},i.peekByte=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(t){return t.data[t.pos+e]}};var a=function(e){return function(t){return t.data.subarray(t.pos,t.pos+=e)}};i.readBytes=a,i.peekBytes=function(e){return function(t){return t.data.subarray(t.pos,t.pos+e)}},i.readString=function(e){return function(t){return Array.from(a(e)(t)).map((function(e){return String.fromCharCode(e)})).join("")}},i.readUnsigned=function(e){return function(t){var r=a(2)(t);return e?(r[1]<<8)+r[0]:(r[0]<<8)+r[1]}},i.readArray=function(e,t){return function(r,n,i){for(var o="function"==typeof t?t(r,n,i):t,d=a(e),s=new Array(o),c=0;c<o;c++)s[c]=d(r);return s}},i.readBits=function(e){return function(t){for(var r=function(e){return e.data[e.pos++]}(t),n=new Array(8),i=0;i<8;i++)n[7-i]=!!(r&1<<i);return Object.keys(e).reduce((function(t,r){var i=e[r];return i.length?t[r]=function(e,t,r){for(var n=0,i=0;i<r;i++)n+=e[t+i]&&Math.pow(2,r-i-1);return n}(n,i.index,i.length):t[r]=n[i.index],t}),{})}},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n,r=i,a={blocks:function(e){for(var t=[],n=e.data.length,i=0,a=(0,r.readByte)()(e);0!==a&&a;a=(0,r.readByte)()(e)){if(e.pos+a>=n){var o=n-e.pos;t.push((0,r.readBytes)(o)(e)),i+=o;break}t.push((0,r.readBytes)(a)(e)),i+=a}for(var d=new Uint8Array(i),s=0,c=0;c<t.length;c++)d.set(t[c],s),s+=t[c].length;return d}},o=(0,t.conditional)({gce:[{codes:(0,r.readBytes)(2)},{byteSize:(0,r.readByte)()},{extras:(0,r.readBits)({future:{index:0,length:3},disposal:{index:3,length:3},userInput:{index:6},transparentColorGiven:{index:7}})},{delay:(0,r.readUnsigned)(!0)},{transparentColorIndex:(0,r.readByte)()},{terminator:(0,r.readByte)()}]},(function(e){var t=(0,r.peekBytes)(2)(e);return 33===t[0]&&249===t[1]})),d=(0,t.conditional)({image:[{code:(0,r.readByte)()},{descriptor:[{left:(0,r.readUnsigned)(!0)},{top:(0,r.readUnsigned)(!0)},{width:(0,r.readUnsigned)(!0)},{height:(0,r.readUnsigned)(!0)},{lct:(0,r.readBits)({exists:{index:0},interlaced:{index:1},sort:{index:2},future:{index:3,length:2},size:{index:5,length:3}})}]},(0,t.conditional)({lct:(0,r.readArray)(3,(function(e,t,r){return Math.pow(2,r.descriptor.lct.size+1)}))},(function(e,t,r){return r.descriptor.lct.exists})),{data:[{minCodeSize:(0,r.readByte)()},a]}]},(function(e){return 44===(0,r.peekByte)()(e)})),s=(0,t.conditional)({text:[{codes:(0,r.readBytes)(2)},{blockSize:(0,r.readByte)()},{preData:function(e,t,n){return(0,r.readBytes)(n.text.blockSize)(e)}},a]},(function(e){var t=(0,r.peekBytes)(2)(e);return 33===t[0]&&1===t[1]})),c=(0,t.conditional)({application:[{codes:(0,r.readBytes)(2)},{blockSize:(0,r.readByte)()},{id:function(e,t,n){return(0,r.readString)(n.blockSize)(e)}},a]},(function(e){var t=(0,r.peekBytes)(2)(e);return 33===t[0]&&255===t[1]})),u=(0,t.conditional)({comment:[{codes:(0,r.readBytes)(2)},a]},(function(e){var t=(0,r.peekBytes)(2)(e);return 33===t[0]&&254===t[1]})),l=[{header:[{signature:(0,r.readString)(3)},{version:(0,r.readString)(3)}]},{lsd:[{width:(0,r.readUnsigned)(!0)},{height:(0,r.readUnsigned)(!0)},{gct:(0,r.readBits)({exists:{index:0},resolution:{index:1,length:3},sort:{index:4},size:{index:5,length:3}})},{backgroundColorIndex:(0,r.readByte)()},{pixelAspectRatio:(0,r.readByte)()}]},(0,t.conditional)({gct:(0,r.readArray)(3,(function(e,t){return Math.pow(2,t.lsd.gct.size+1)}))},(function(e,t){return t.lsd.gct.exists})),{frames:(0,t.loop)([o,c,u,d,s],(function(e){var t=(0,r.peekByte)()(e);return 33===t||44===t}))}];e.default=l}(r);var o={};Object.defineProperty(o,"__esModule",{value:!0}),o.deinterlace=void 0,o.deinterlace=function(e,t){for(var r=new Array(e.length),n=e.length/t,i=function(n,i){var a=e.slice(i*t,(i+1)*t);r.splice.apply(r,[n*t,t].concat(a))},a=[0,4,2,1],o=[8,8,4,2],d=0,s=0;s<4;s++)for(var c=a[s];c<n;c+=o[s])i(c,d),d++;return r};var d={};Object.defineProperty(d,"__esModule",{value:!0}),d.lzw=void 0,d.lzw=function(e,t,r){var n,i,a,o,d,s,c,u,l,f,p,g,y,h,m,v,w=4096,x=r,B=new Array(r),b=new Array(w),k=new Array(w),A=new Array(4097);for(d=1+(i=1<<(f=e)),n=i+2,c=-1,a=(1<<(o=f+1))-1,u=0;u<i;u++)b[u]=0,k[u]=u;for(p=g=y=h=m=v=0,l=0;l<x;){if(0===h){if(g<o){p+=t[v]<<g,g+=8,v++;continue}if(u=p&a,p>>=o,g-=o,u>n||u==d)break;if(u==i){a=(1<<(o=f+1))-1,n=i+2,c=-1;continue}if(-1==c){A[h++]=k[u],c=u,y=u;continue}for(s=u,u==n&&(A[h++]=y,u=c);u>i;)A[h++]=k[u],u=b[u];y=255&k[u],A[h++]=y,n<w&&(b[n]=c,k[n]=y,0==(++n&a)&&n<w&&(o++,a+=n)),c=s}h--,B[m++]=A[h],l++}for(l=m;l<x;l++)B[l]=0;return B},Object.defineProperty(t,"__esModule",{value:!0});var s,c=t.decompressFrames=t.decompressFrame=y=t.parseGIF=void 0,u=(s=r)&&s.__esModule?s:{default:s},l=n,f=i,p=o,g=d,y=t.parseGIF=function(e){var t=new Uint8Array(e);return(0,l.parse)((0,f.buildStream)(t),u.default)},h=function(e,t,r){if(e.image){var n=e.image,i=n.descriptor.width*n.descriptor.height,a=(0,g.lzw)(n.data.minCodeSize,n.data.blocks,i);n.descriptor.lct.interlaced&&(a=(0,p.deinterlace)(a,n.descriptor.width));var o={pixels:a,dims:{top:e.image.descriptor.top,left:e.image.descriptor.left,width:e.image.descriptor.width,height:e.image.descriptor.height}};return n.descriptor.lct&&n.descriptor.lct.exists?o.colorTable=n.lct:o.colorTable=t,e.gce&&(o.delay=10*(e.gce.delay||10),o.disposalType=e.gce.extras.disposal,e.gce.extras.transparentColorGiven&&(o.transparentIndex=e.gce.transparentColorIndex)),r&&(o.patch=function(e){for(var t=e.pixels.length,r=new Uint8ClampedArray(4*t),n=0;n<t;n++){var i=4*n,a=e.pixels[n],o=e.colorTable[a]||[0,0,0];r[i]=o[0],r[i+1]=o[1],r[i+2]=o[2],r[i+3]=a!==e.transparentIndex?255:0}return r}(o)),o}console.warn("gif frame does not have associated image.")};let m,v,w;async function x(t,r){const n=y(t),i=c(n,!0),{width:a,height:o}=n.lsd,d=function(e,t){return m??=document.createElement("canvas"),m.width=e,m.height=t,m.getContext("2d",{willReadFrequently:!0})}(a,o),s=[],u=[];let l=0;for(const t of i){const r=e(t.delay||100);u.push(r),l+=r;const n=B(new ImageData(t.patch,t.dims.width,t.dims.height)),i=3===t.disposalType?d.getImageData(t.dims.left,t.dims.top,t.dims.width,t.dims.height):void 0;d.drawImage(n,t.dims.left,t.dims.top);const c=d.getImageData(0,0,a,o);s.push(c),1===t.disposalType||(2===t.disposalType?d.clearRect(t.dims.left,t.dims.top,t.dims.width,t.dims.height):3===t.disposalType&&d.putImageData(i,t.dims.left,t.dims.top))}return{frameCount:i.length,duration:l,frameDurations:u,getFrame:e=>s[e],width:a,height:o}}function B(e){return v??=document.createElement("canvas"),w??=v.getContext("2d",{willReadFrequently:!0}),v.width=e.width,v.height=e.height,w.putImageData(e,0,0),v}t.decompressFrame=h,c=t.decompressFrames=function(e,t){return e.frames.filter((function(e){return e.image})).map((function(r){return h(r,e.gct,t)}))};const b=[71,73,70];function k(e){const t=new Uint8Array(e);return!b.some(((e,r)=>e!==t[r]))}function A(e){if(!k(e))return!1;const t=new DataView(e),r=t.getUint8(10);let n=13+(128&r?3*2**(1+(7&r)):0),i=0,a=!1;for(;!a;){switch(t.getUint8(n++)){case 33:if(!o())return!1;break;case 44:d();break;case 59:a=!0;break;default:return!1}if(i>1)return!0}function o(){switch(t.getUint8(n++)){case 249:n++,n+=4,s();break;case 1:i++,n++,n+=12,s();break;case 254:s();break;case 255:n++,n+=8,n+=3,s();break;default:return!1}return!0}function d(){i++,n+=8;const e=t.getUint8(n++);n+=128&e?3*2**(1+(7&e)):0,n++,s()}function s(){let e;for(;e=t.getUint8(n++);)n+=e}return!1}export{A as isAnimatedGIF,k as isGIF,x as parseGif};
