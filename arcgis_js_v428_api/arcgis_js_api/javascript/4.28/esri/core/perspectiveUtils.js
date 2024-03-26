// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../chunks/mat3 ../chunks/mat3f64 ../chunks/vec2 ../chunks/vec3 ../chunks/vec3f64".split(" "),function(h,e,k,m,g,q){function n(a,b,d,r,t,u,v,w,x){e.set(a,b,r,u,d,t,v,1,1,1);g.set(c,w,x,1);e.adjoint(f,a);const [y,z,A]=g.transformMat3(c,c,e.transpose(f,f));e.set(f,y,0,0,0,z,0,0,0,A);return e.multiply(a,f,a)}const c=q.create(),f=k.create(),l=k.create(),p=k.create();h.getProjectiveTransform=function(a,b,d){n(l,b[0],b[1],b[2],b[3],b[4],b[5],b[6],b[7]);n(p,d[0],d[1],d[2],d[3],d[4],d[5],d[6],
d[7]);e.multiply(a,e.adjoint(l,l),p);0!==a[8]&&(a[0]/=a[8],a[1]/=a[8],a[2]/=a[8],a[3]/=a[8],a[4]/=a[8],a[5]/=a[8],a[6]/=a[8],a[7]/=a[8],a[8]/=a[8]);return a};h.transformProjective=function(a,b,d){g.set(c,b[0],b[1],1);g.transformMat3(c,c,e.transpose(f,d));return 0===c[2]?m.set(a,c[0],c[1]):m.set(a,c[0]/c[2],c[1]/c[2])};Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});