// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../core/Error ../../intl/messages ../heuristics/clusterMinSize ./support/utils ../support/clusterUtils ../../views/2d/layers/support/clusterUtils".split(" "),function(q,r,v,t,l,m,w){async function x(a){const {layer:c,renderer:g,view:d}=a;await Promise.all([c.load(),d.when()]);a=g||c.renderer;if(!w.isClusterCompatibleRenderer(a))throw new r("clusters-label-schemes:invalid-parameters","'renderer' is not valid");return{layer:c,renderer:a,view:d}}async function u(a){const {renderer:c,
view:g,statInfo:d}=a,h=d?.statisticType,b=d?m.getClusterField(d.attributeInfo,h):m.clusterCountField;a="type"===h?m.getPredominantTypeExpression("unique-value"===c.type?c.uniqueValueInfos??[]:[],b,a.noneValueLabel):l.createNumericLabelExpression(b);a=l.createLabelClass(a);return{name:d?`clusters-${h}-${m.getClusterFieldHash(b,h)}`:"clusters-count",labelingInfo:[a],clusterMinSize:await t(a.symbol,g),fieldName:b}}q.getLabelSchemes=async function(a){const [{renderer:c,layer:g,view:d},h]=await Promise.all([x(a),
v.fetchMessageBundle("esri/smartMapping/t9n/smartMapping")]);var b=h.clusters.predominantNoneValue;if(!c)return null;var f=null;const n=[];if(a.field){var k=l.getAggregateFieldInfo(a.field,g);if(!k)throw new r("clusters-label-schemes:invalid-parameters","'field' is not a valid aggregate field");({name:f}=k);b=l.createLabelExpressionForAggregateField(g,c,k,b);b=l.createLabelClass(b);f={name:`clusters-${f}`,labelingInfo:[b],clusterMinSize:await t(b.symbol,d),fieldName:f};return{primaryScheme:f,secondarySchemes:n}}a=
m.getStatisticInfos(g,c,!1);const p=new Map;for(e of a)"size"===e.attributeInfo.vvType?p.set(e.statisticHash,e):p.has(e.statisticHash)||p.set(e.statisticHash,e);var e=[...p.values()];for(k of e)e=await u({renderer:c,view:d,statInfo:k,noneValueLabel:b}),"size"===k.attributeInfo.vvType?f=e:n.push(e);b=await u({renderer:c,view:d});f?n.unshift(b):f=b;return{primaryScheme:f,secondarySchemes:n}};Object.defineProperty(q,Symbol.toStringTag,{value:"Module"})});