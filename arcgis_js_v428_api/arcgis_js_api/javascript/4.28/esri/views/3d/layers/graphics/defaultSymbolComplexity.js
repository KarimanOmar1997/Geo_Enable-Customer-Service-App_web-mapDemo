// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/compilerUtils ../../../../symbols/support/ObjectSymbol3DLayerResource ./Graphics3DPathSymbolLayerConstants ./primitiveObjectSymbolUtils ./SymbolComplexity ../support/edgeUtils ../../webgl-engine/materials/DefaultMaterial".split(" "),function(l,n,x,p,y,e,z,A){function q(a){let b=0,c=0,f=0,h=!1,m=0;const g=new e.SymbolComplexityMemory;for(const k of a)null!=k&&(b+=k.verticesPerFeature,c+=k.verticesPerCoordinate,f+=k.drawCallsPerFeature,g.bytesPerFeature+=k.memory.bytesPerFeature,
g.bytesPerFeatureLabel+=k.memory.bytesPerFeatureLabel,g.resourceBytes+=k.memory.resourceBytes,g.draped.bytesPerFeature+=k.memory.bytesPerFeature,g.draped.bytesPerFeatureLabel+=k.memory.bytesPerFeatureLabel,h=h||k.estimated,++m);return h?new e.EstimatedAggregateSymbolComplexity(m,{verticesPerFeature:b,verticesPerCoordinate:c,drawCallsPerFeature:f,memory:g}):new e.AggregateSymbolComplexity(m,{verticesPerFeature:b,verticesPerCoordinate:c,drawCallsPerFeature:f,memory:g})}function t(a,b){const c=u(a,b);
var f=z.hasEdges(b)?2:0;switch(b.type){case "extrude":return new e.SymbolComplexity({verticesPerFeature:-12,verticesPerCoordinate:12,drawCallsPerFeature:f,memory:c});case "fill":if("mesh-3d"===a.type)return new e.SymbolComplexity({drawCallsPerFeature:f,memory:c});if(null!=b.outline&&0<b.outline.size)return new e.SymbolComplexity({verticesPerFeature:-12,verticesPerCoordinate:9,memory:c});case "water":return new e.SymbolComplexity({verticesPerFeature:-6,verticesPerCoordinate:3,memory:c});case "line":return new e.SymbolComplexity({verticesPerFeature:-6,
verticesPerCoordinate:6,memory:c});case "object":if(b.resource?.href)return new e.EstimatedSymbolComplexity({verticesPerFeature:100,memory:c});b=b.resource?.primitive??x.defaultPrimitive;(a=r[b])?b=a:(a=y.primitiveLodResources(b,new A.DefaultMaterial({})),a=v(a.levels),r[b]=new e.SymbolComplexity({verticesPerFeature:a}),b=r[b]);return{...b,memory:c};case "path":var h=a=0;switch(b.profile){case "circle":a=p.pathNumCircleProfileSubdivisions;break;case "quad":a=4;break;default:n.neverReached(b.profile);
return}switch(b.join??"simple"){case "round":h=p.pathNumRoundJoinSubdivisions;break;case "miter":case "bevel":h=1;break;default:return}f=2*a;h=a*h*2;let m=-2*h-f;switch(b.cap){case "none":break;case "butt":case "square":m+=2*(a-1);break;case "round":m+=2*(a*(p.pathNumRoundCapExtrusionSubdivisions-1)*2+a);break;default:return}return new e.SymbolComplexity({verticesPerFeature:m,verticesPerCoordinate:h+f,memory:c});case "text":case "icon":return new e.SymbolComplexity({verticesPerFeature:6,memory:c})}}
function u(a,b){a="point-3d"===a.type;switch(b.type){case "extrude":return b.edges&&0<b.edges.size?d.EXTRUDE_EDGES:d.EXTRUDE;case "fill":return null!=b.outline&&0<b.outline.size?d.FILL_OUTLINE:d.FILL;case "water":return d.FILL;case "line":return"round"===b.join?d.LINE_ROUND:d.LINE_MITER;case "path":switch(b.join){case "round":switch(b.profile){case "circle":return d.PATH_ROUND_CIRCLE;case "quad":return d.PATH_ROUND_QUAD;default:n.neverReached(b.profile);return}case "miter":case "bevel":switch(b.profile){case "circle":return d.PATH_MITER_CIRCLE;
case "quad":return d.PATH_MITER_QUAD;default:n.neverReached(b.profile);return}case "simple":return;default:return}case "object":return a?d.OBJECT_POINT:d.OBJECT_POLYGON;case "icon":case "text":return a?d.ICON_POINT:d.ICON_POLYGON}}function v(a){return a.reduce((b,c,f)=>b+1/10**f*c.numVertices,0)/a.reduce((b,c,f)=>b+1/10**f,0)}const w=new e.EstimatedSymbolComplexity({}),r={},d={ICON_POINT:{bytesPerFeature:2111.586639736967,bytesPerFeatureLabel:870.520855,resourceBytes:0,draped:{bytesPerFeature:1799.2619971817762,
bytesPerFeatureLabel:857.4890149999999}},ICON_POLYGON:{bytesPerFeature:2829.8183316810564,bytesPerFeatureLabel:858.0951816666667,resourceBytes:0,draped:{bytesPerFeature:2521.242008227286,bytesPerFeatureLabel:869.6919750000001}},OBJECT_POINT:{bytesPerFeature:607.8007336777831,bytesPerFeatureLabel:715.7017950000001,resourceBytes:0,draped:{bytesPerFeature:607.8007336777831,bytesPerFeatureLabel:715.7017950000001}},OBJECT_POLYGON:{bytesPerFeature:1111.4123028075749,bytesPerFeatureLabel:684.5498416666667,
resourceBytes:0,draped:{bytesPerFeature:1111.4123028075749,bytesPerFeatureLabel:684.5498416666667}},LINE_MITER:{bytesPerFeature:3053.034748007272,bytesPerFeatureLabel:804.5473016666666,resourceBytes:0,draped:{bytesPerFeature:2649.5661560225844,bytesPerFeatureLabel:843.3404083333334}},LINE_ROUND:{bytesPerFeature:3225.35183564197,bytesPerFeatureLabel:807.296835,resourceBytes:0,draped:{bytesPerFeature:2650.9229994933276,bytesPerFeatureLabel:861.108335}},PATH_MITER_CIRCLE:{bytesPerFeature:38664.832646351235,
bytesPerFeatureLabel:862.95665,resourceBytes:0,draped:{bytesPerFeature:38664.832646351235,bytesPerFeatureLabel:862.95665}},PATH_ROUND_CIRCLE:{bytesPerFeature:42462.97022293504,bytesPerFeatureLabel:851.35885,resourceBytes:0,draped:{bytesPerFeature:42462.97022293504,bytesPerFeatureLabel:851.35885}},PATH_MITER_QUAD:{bytesPerFeature:25558.22153327986,bytesPerFeatureLabel:838.56885,resourceBytes:0,draped:{bytesPerFeature:25558.22153327986,bytesPerFeatureLabel:838.56885}},PATH_ROUND_QUAD:{bytesPerFeature:42274.86801764233,
bytesPerFeatureLabel:867.5658500000001,resourceBytes:0,draped:{bytesPerFeature:42274.86801764233,bytesPerFeatureLabel:867.5658500000001}},FILL:{bytesPerFeature:3124.272297197038,bytesPerFeatureLabel:850.6966816666666,resourceBytes:0,draped:{bytesPerFeature:2630.99580851019,bytesPerFeatureLabel:845.464495}},FILL_OUTLINE:{bytesPerFeature:4501.643043274039,bytesPerFeatureLabel:866.3982816666668,resourceBytes:0,draped:{bytesPerFeature:3841.8870233416183,bytesPerFeatureLabel:854.9969683333334}},EXTRUDE:{bytesPerFeature:7545.975968446941,
bytesPerFeatureLabel:859.7106016666668,resourceBytes:0,draped:{bytesPerFeature:7545.975968446941,bytesPerFeatureLabel:859.7106016666668}},EXTRUDE_EDGES:{bytesPerFeature:2872.306473115409,bytesPerFeatureLabel:604.556581666667,resourceBytes:0,draped:{bytesPerFeature:2872.306473115409,bytesPerFeatureLabel:604.556581666667}}};l.averageSymbolComplexities=function(a){a=q(a);0<a.numComplexities&&(a.verticesPerFeature/=a.numComplexities,a.verticesPerCoordinate/=a.numComplexities,a.drawCallsPerFeature/=a.numComplexities,
a.memory.bytesPerFeature/=a.numComplexities,a.memory.bytesPerFeatureLabel/=a.numComplexities,a.memory.resourceBytes/=a.numComplexities,a.memory.draped.bytesPerFeature/=a.numComplexities,a.memory.draped.bytesPerFeatureLabel/=a.numComplexities);return a};l.defaultSymbolComplexity=function(a){if("web-style"===a.type)return w;const b=a.symbolLayers.toArray().map(c=>t(a,c));return q(b)};l.defaultSymbolLayerComplexity=t;l.defaultSymbolLayerMemoryComplexity=u;l.emptySymbolComplexity=w;l.estimateNumVerticesForLods=
v;l.memoryEstimators=d;l.totalSymbolComplexities=q;Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});