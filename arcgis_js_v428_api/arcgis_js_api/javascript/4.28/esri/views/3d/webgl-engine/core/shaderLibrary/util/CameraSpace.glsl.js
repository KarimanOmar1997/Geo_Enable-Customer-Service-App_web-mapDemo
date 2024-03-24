// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../chunks/vec2 ../../../../../../chunks/vec2f64 ../../../../../../chunks/vec4 ../../../../../../chunks/vec4f64 ../../shaderModules/Float2PassUniform ../../shaderModules/Float4PassUniform ../../shaderModules/interfaces".split(" "),function(c,e,m,f,n,p,q,r){function g(b){const a=b.camera.projectionMatrix;return 0===a[11]?f.set(h,2/(b.camera.fullWidth*a[0]),2/(b.camera.fullHeight*a[5]),(1+a[12])/a[0],(1+a[13])/a[5]):f.set(h,-2/(b.camera.fullWidth*a[0]),-2/(b.camera.fullHeight*
a[5]),(1-a[8])/a[0],(1-a[9])/a[5])}function k(b){return 0===b.camera.projectionMatrix[11]?e.set(l,0,1):e.set(l,1,0)}const h=n.create(),l=m.create();c.CameraSpace=function(b){b.fragment.uniforms.add(new q.Float4PassUniform("projInfo",(a,d)=>g(d)));b.fragment.uniforms.add(new p.Float2PassUniform("zScale",(a,d)=>k(d)));b.fragment.code.add(r.glsl`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)};c.getProjectionInfo=g;c.getZScale=k;Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});