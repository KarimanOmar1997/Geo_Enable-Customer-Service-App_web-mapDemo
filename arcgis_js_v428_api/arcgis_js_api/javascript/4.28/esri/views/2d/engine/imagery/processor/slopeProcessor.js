// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["./utils"],function(e){const g={vsPath:"raster/rfx/vs",fsPath:"raster/rfx/slope",attributes:new Map([["a_position",0],["a_texcoord",1]])};return{createProgram:function(c,a){const {painter:b,rasterFunction:d}=c;({slopeType:c}=d.parameters);return b.materialManager.getProgram(g,"percent-rise"===c?["percentRise"]:[])},bindTextureAndUniforms:function(c,a,b){e.setSingleImageTextures(c,a,b);e.setCoordsAndTransforms(a);const d=b.getRasterTextureSize();a.setUniform2fv("u_srcImageSize",d);b=b.getRasterCellSize();
a.setUniform2fv("u_cellSize",b);const {zFactor:h,slopeType:f,pixelSizePower:k,pixelSizeFactor:l}=c.rasterFunction.parameters;a.setUniform1f("u_zFactor",h);a.setUniform1f("u_pixelSizePower","adjusted"===f?k:0);a.setUniform1f("u_pixelSizeFactor","adjusted"===f?l:0)}}});