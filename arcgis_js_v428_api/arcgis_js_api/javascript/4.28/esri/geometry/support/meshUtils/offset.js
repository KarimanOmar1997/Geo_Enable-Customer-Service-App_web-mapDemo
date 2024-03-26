// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/mat3 ../../../chunks/mat3f64 ../../../chunks/mat4f64 ../../../chunks/vec3 ../../../chunks/vec3f64 ../../spatialReferenceEllipsoidUtils ../../projection/computeTranslationToOriginAndRotation ./geographicUtils ./projection".split(" "),function(n,x,y,z,p,q,A,B,r,e){function t(b,h){if(b)for(let c=0;c<b.length;c+=3)for(let a=0;3>a;a++)b[c+a]+=h[a]}const u=q.create(),v=z.create(),w=y.create();n.offset=function(b,h,c){if(b.vertexAttributes?.position){var {vertexSpace:a}=b;
if(a.isRelative)r.validateGeographicFlag(a,"esri.geometry.support.meshUtils.offset",c),b=a.origin,a.origin=p.add(q.create(),b,h);else{if(r.isGeographicMesh(b.spatialReference,c)){a=b.spatialReference;c=b.vertexAttributes.position;const f=b.vertexAttributes.normal,g=b.vertexAttributes.tangent,d=new Float64Array(c.length),k=null!=f?new Float32Array(f.length):null,l=null!=g?new Float32Array(g.length):null,m=b.extent.center;B.computeTranslationToOriginAndRotation(a,[m.x,m.y,m.z],v,A.getSphericalPCPF(a));
x.fromMat4(w,v);p.transformMat3(u,h,w);e.projectToPCPF(c,a,d);null!=f&&null!=k&&e.projectNormalToPCPF(f,c,d,a,k);null!=g&&null!=l&&e.projectTangentToPCPF(g,c,d,a,l);t(d,u);e.projectFromPCPF(d,c,a);null!=f&&null!=k&&e.projectNormalFromPCPF(k,c,d,a,f);null!=g&&null!=l&&e.projectTangentFromPCPF(l,c,d,a,g)}else t(b.vertexAttributes.position,h);b.vertexAttributesChanged()}}};Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})});