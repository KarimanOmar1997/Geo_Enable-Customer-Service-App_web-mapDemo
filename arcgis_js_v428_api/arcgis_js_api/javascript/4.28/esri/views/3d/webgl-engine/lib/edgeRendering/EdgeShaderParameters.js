// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../chunks/mat3f64","../../../../../chunks/vec3f64","../../core/shaderLibrary/attributes/VertexPosition.glsl"],function(a,b,d,c){class e extends c.VertexPositionPassParameters{constructor(f,g){super();this.distanceFalloffFactor=f;this.transparency=g;this.transformNormalViewFromGlobal=b.create()}}class h extends c.VertexPositionDrawParameters{constructor(){super(...arguments);this.transformNormalViewFromGlobal=b.create();this.slicePlaneLocalOrigin=d.create();this.transformNormalGlobalFromModel=
b.create()}}a.EdgeDrawParameters=h;a.EdgePassParameters=e;Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});