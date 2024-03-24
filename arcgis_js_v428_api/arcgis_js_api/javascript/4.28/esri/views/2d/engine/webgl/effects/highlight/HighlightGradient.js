// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../../../../../core/Logger ../../definitions ./parameters ../../../../../webgl/enums ../../../../../webgl/Texture ../../../../../webgl/TextureDescriptor".split(" "),function(r,t,f,u,v,w){function x(b,a){a.fillColor[0]=b.color.r/255;a.fillColor[1]=b.color.g/255;a.fillColor[2]=b.color.b/255;a.fillColor[3]=b.color.a;b.haloColor?(a.outlineColor[0]=b.haloColor.r/255,a.outlineColor[1]=b.haloColor.g/255,a.outlineColor[2]=b.haloColor.b/255,a.outlineColor[3]=b.haloColor.a):(a.outlineColor[0]=a.fillColor[0],
a.outlineColor[1]=a.fillColor[1],a.outlineColor[2]=a.fillColor[2],a.outlineColor[3]=a.fillColor[3]);a.fillColor[3]*=b.fillOpacity;a.outlineColor[3]*=b.haloOpacity;a.fillColor[0]*=a.fillColor[3];a.fillColor[1]*=a.fillColor[3];a.fillColor[2]*=a.fillColor[3];a.outlineColor[0]*=a.outlineColor[3];a.outlineColor[1]*=a.outlineColor[3];a.outlineColor[2]*=a.outlineColor[3];a.outlineWidth=f.highlightSizing.outlineWidth;a.outerHaloWidth=f.highlightSizing.outerHaloWidth;a.innerHaloWidth=f.highlightSizing.innerHaloWidth;
a.outlinePosition=f.highlightSizing.outlinePosition}const n=r.getLogger("esri.views.2d.engine.webgl.painter.highlight.HighlightGradient"),y=[0,0,0,0];class z{constructor(){this._convertedHighlightOptions={fillColor:[.2*.75,.6*.75,.675,.75],outlineColor:[.2*.9,.54,.81,.9],outlinePosition:f.highlightSizing.outlinePosition,outlineWidth:f.highlightSizing.outlineWidth,innerHaloWidth:f.highlightSizing.innerHaloWidth,outerHaloWidth:f.highlightSizing.outerHaloWidth};this._shadeTexChanged=!0;this._texelData=
new Uint8Array(4*f.shadeTextureSize);this._minMaxDistance=[0,0]}setHighlightOptions(b){function a(g,m,k){d[0]=(1-k)*g[0]+k*m[0];d[1]=(1-k)*g[1]+k*m[1];d[2]=(1-k)*g[2]+k*m[2];d[3]=(1-k)*g[3]+k*m[3]}const c=this._convertedHighlightOptions;x(b,c);b=c.outlinePosition-c.outlineWidth/2-c.outerHaloWidth;const q=c.outlinePosition-c.outlineWidth/2,p=c.outlinePosition+c.outlineWidth/2,l=c.outlinePosition+c.outlineWidth/2+c.innerHaloWidth;var e=Math.sqrt(Math.PI/2)*f.sigma,h=Math.abs(b)>e?Math.round(10*(Math.abs(b)-
e))/10:0;e=Math.abs(l)>e?Math.round(10*(Math.abs(l)-e))/10:0;h&&!e?n.error("The outer rim of the highlight is "+h+"px away from the edge of the feature; consider reducing some width values or shifting the outline position towards positive values (inwards)."):!h&&e?n.error("The inner rim of the highlight is "+e+"px away from the edge of the feature; consider reducing some width values or shifting the outline position towards negative values (outwards)."):h&&e&&n.error("The highlight is "+Math.max(h,
e)+"px away from the edge of the feature; consider reducing some width values.");const d=[void 0,void 0,void 0,void 0];({_texelData:e}=this);for(let g=0;g<f.shadeTextureSize;++g)h=b+g/(f.shadeTextureSize-1)*(l-b),h<b?(d[0]=0,d[1]=0,d[2]=0,d[3]=0):h<q?a(y,c.outlineColor,(h-b)/(q-b)):h<p?[d[0],d[1],d[2],d[3]]=c.outlineColor:h<l?a(c.outlineColor,c.fillColor,(h-p)/(l-p)):[d[0],d[1],d[2],d[3]]=c.fillColor,e[4*g]=255*d[0],e[4*g+1]=255*d[1],e[4*g+2]=255*d[2],e[4*g+3]=255*d[3];this._minMaxDistance[0]=b;this._minMaxDistance[1]=
l;this._shadeTexChanged=!0}applyHighlightOptions(b,a){if(!this._shadeTex){const c=new w.TextureDescriptor;c.wrapMode=u.TextureWrapMode.CLAMP_TO_EDGE;c.width=f.shadeTextureSize;c.height=1;this._shadeTex=new v.Texture(b,c)}this._shadeTexChanged&&(this._shadeTex.updateData(0,0,0,f.shadeTextureSize,1,this._texelData),this._shadeTexChanged=!1);b.bindTexture(this._shadeTex,t.textureBindingHighlight1);a.setUniform2fv("u_minMaxDistance",this._minMaxDistance)}destroy(){this._shadeTex?.dispose();this._shadeTex=
null}}return z});