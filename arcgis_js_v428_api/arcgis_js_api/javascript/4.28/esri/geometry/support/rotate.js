// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../geometry ./coordsUtils ../Polygon ../Polyline ../Point ../Multipoint".split(" "),function(u,n,p,q,r,t){function l(a,d,b,e){const g=[];for(const c of a){a=c.slice(0);g.push(a);const f=b*(c[0]-e.x)+d*(c[1]-e.y)+e.y;a[0]=d*(c[0]-e.x)-b*(c[1]-e.y)+e.x;a[1]=f}return g}return function(a,d,b){const {hasM:e,hasZ:g,spatialReference:c}=a;var f=d*Math.PI/180;d=Math.cos(f);f=Math.sin(f);"xmin"in a&&(b=b??a.center,a=new p({spatialReference:c,rings:[[[a.xmin,a.ymin],[a.xmin,a.ymax],[a.xmax,a.ymax],
[a.xmax,a.ymin],[a.xmin,a.ymin]]]}));if("paths"in a){b=b??a.extent.center;var h=[];for(var k of a.paths)h.push(l(k,d,f,b));return new q({hasM:e,hasZ:g,spatialReference:c,paths:h})}if("rings"in a){b=b??a.extent.center;k=[];for(h of a.rings){a=n.isClockwise(h);const m=l(h,d,f,b);n.isClockwise(m)!==a&&m.reverse();k.push(m)}return new p({hasM:e,hasZ:g,spatialReference:c,rings:k})}return"x"in a?(b=b??a,b=new r({x:d*(a.x-b.x)-f*(a.y-b.y)+b.x,y:f*(a.x-b.x)+d*(a.y-b.y)+b.y,spatialReference:c}),null!=a.z&&
(b.z=a.z),null!=a.m&&(b.m=a.m),b):"points"in a?(b=b??a.extent.center,new t({hasM:e,hasZ:g,points:l(a.points,d,f,b),spatialReference:c})):null}});