// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports","../../core/Error","../../rest/knowledgeGraphService","../../rest/knowledgeGraph/GraphQueryStreaming"],function(e,m,n,p){e.extentToInBoundsRings=function(a){if(!a.spatialReference.isWGS84)throw new m("knowledge-graph:layer-support-utils","The extentToInBoundsRings function only supports WGS84 spatial references.");return 180<a.xmax&&180>a.xmin?[[[a.xmin,a.ymin],[a.xmin,a.ymax],[180,a.ymax],[180,a.ymin],[a.xmin,a.ymin]],[[-180,a.ymin],[-180,a.ymax],[a.xmax-360,a.ymax],[a.xmax-360,
a.ymin],[-180,a.ymin]]]:180<a.xmax&&180<a.xmin?[[[a.xmin-360,a.ymin],[a.xmin-360,a.ymax],[a.xmax-360,a.ymax],[a.xmax-360,a.ymin],[a.xmin-360,a.ymin]]]:-180<a.xmax&&-180>a.xmin?[[[a.xmin+360,a.ymin],[a.xmin+360,a.ymax],[180,a.ymax],[180,a.ymin],[a.xmin+360,a.ymin]],[[-180,a.ymin],[-180,a.ymax],[a.xmax,a.ymax],[a.xmax,a.ymin],[-180,a.ymin]]]:-180>a.xmax&&-180>a.xmin?[[[a.xmin+360,a.ymin],[a.xmin+360,a.ymax],[a.xmax+360,a.ymax],[a.xmax+360,a.ymin],[a.xmin+360,a.ymin]]]:[[[a.xmin,a.ymin],[a.xmin,a.ymax],
[a.xmax,a.ymax],[a.xmax,a.ymin],[a.xmin,a.ymin]]]};e.getRelationshipEndNodeIds=async function(a,f){const g=[],c=new Map,k=[];if(f.dataModel?.relationshipTypes)for(const b of f.dataModel.relationshipTypes)b.name&&c.set(b.name,[]);for(const b of a)c.has(b.typeName)&&c.get(b.typeName)?.push(b.id);for(const [b,l]of c)1>l.length||(a=new p({openCypherQuery:`MATCH (n)-[r:${b}]->(m) WHERE id(r) in $ids RETURN id(n), labels(n)[0], id(m), labels(m)[0]`,bindParameters:{ids:l}}),k.push(n.executeQueryStreaming(f,
a).then(async h=>{for(h=h.resultRowsStream.getReader();;){const {done:q,value:r}=await h.read();if(q)break;for(const d of r)g.push({id:d[0],typeName:d[1]}),g.push({id:d[2],typeName:d[3]})}})));await Promise.all(k);return g};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});