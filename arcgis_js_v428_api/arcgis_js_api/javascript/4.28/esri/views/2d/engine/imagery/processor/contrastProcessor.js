// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["./utils"],function(c){const d={vsPath:"raster/rfx/vs",fsPath:"raster/rfx/contrast",attributes:new Map([["a_position",0],["a_texcoord",1]])};return{createProgram:function(b,a){return b.painter.materialManager.getProgram(d,[])},bindTextureAndUniforms:function(b,a,e){c.setSingleImageTextures(b,a,e);c.setCoordsAndTransforms(a);const {contrastOffset:f,brightnessOffset:g}=b.rasterFunction.parameters;a.setUniform1f("u_contrastOffset",f);a.setUniform1f("u_brightnessOffset",g)}}});