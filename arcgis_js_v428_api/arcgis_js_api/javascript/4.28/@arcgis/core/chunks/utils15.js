/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{x as e}from"./typedArrayUtil.js";import{f as t}from"./messages.js";import{substitute as n}from"../intl.js";import{numericTypes as i}from"../layers/support/fieldUtils.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import o from"../popup/content/FieldsContent.js";import"../popup/content/MediaContent.js";import"../popup/content/RelationshipContent.js";import s from"../popup/content/TextContent.js";import a from"../popup/ExpressionInfo.js";import r from"../popup/FieldInfo.js";import{getAttributes as p}from"../renderers/support/utils.js";import{v as l}from"./visualVariableUtils.js";import{q as m}from"./utils13.js";let f=0;const u="expression/";function d(e){return"hasVisualVariables"in e&&e.hasVisualVariables()?e.visualVariables.filter((e=>!(l.test(e.valueExpression)||"target"in e&&"outline"===e.target))):[]}function c(e,t){if(!t)return null;const n=m(e);return n?.find((e=>e.name.toLowerCase()===t.toLowerCase()))}function x(e,t,n){let o=null;if(n){const t=e.featureReduction;t&&"popupTemplate"in t&&t.popupTemplate&&(o=t.popupTemplate.fieldInfos)}else"popupTemplate"in e&&e.popupTemplate&&(o=e.popupTemplate.fieldInfos);const s=n?c(e,t):e.getField(t);let a=null;if(o&&o.some((e=>!(!e||e.fieldName.toLowerCase()!==s?.name.toLowerCase()||(a=e.clone(),0)))),!a){const e=i.includes(s.type),t="integer"===s.type||"small-integer"===s.type;a=new r({fieldName:s.name,isEditable:s.editable,visible:!0,format:e?{places:t?0:2,digitSeparator:!0}:null})}return a.label||(a.label=s.alias),a}function b(e){const{expression:t,title:n,returnType:i}=e;return new a({name:"expr"+f++,expression:t,title:n,returnType:i})}function g(e){const t="number"===e.returnType?{places:2,digitSeparator:!0}:null;return new r({fieldName:`${u}${e.name}`,visible:!0,format:t})}async function j(i){const o=await t("esri/smartMapping/t9n/smartMapping"),{renderer:s,layer:a,normFieldExpressionTemplate:r,isFeatureReduction:l}=i,m=[],f=[],u=p(s,d);for(const e of u)if("field"===e.type)m.push(x(a,e.field,l));else if("normalized-field"===e.type){const t=l?c(a,e.field):a.getField(e.field),i=l?c(a,e.normalizationField):a.getField(e.normalizationField),s=b({type:"expression",expression:`\n      $feature["${t.name}"];\n      $feature["${i.name}"];\n      ${"percentage"===r?`($feature["${t.name}"] / $feature["${i.name}"]) * 100;`:`$feature["${t.name}"] / $feature["${i.name}"];`}\n      `,title:n("percentage"===r?o.normFieldLabelAsPercent:o.normFieldLabel,{expression1:t.alias,expression2:i.alias}),returnType:"number"});m.push(g(s),x(a,e.field,l),x(a,e.normalizationField,l)),f.push(s)}else if("expression"===e.type){const t=b(e);m.push(g(t)),f.push(t)}return{fieldInfos:e(m,((e,t)=>e.fieldName===t.fieldName)),expressionInfos:e(f,((e,t)=>e.expression===t.expression))}}async function y(e,i,a){const{fieldInfos:r,expressionInfos:p}=i,l=await t("esri/smartMapping/t9n/smartMapping");if(r.length>2)return[new o({fieldInfos:r})];const m=[];for(const t of r){const i=t.fieldName;let o=t.label;if(!o){const t=a?c(e,i):e.getField(i);if(t)o=t.alias||i;else if(p){const e=i.split(u)[1],t=p[p.findIndex((t=>t.name===e))];t&&(o=t.title||t.name)}}m.push(new s({text:n(l.fieldInfo,{fieldLabel:o,fieldValue:`{${i}}`})}))}return m}function F(e){return!(!("normalizationField"in e)||!e.normalizationField)||"hasVisualVariables"in e&&e.hasVisualVariables()&&e.visualVariables.some((e=>!(!("normalizationField"in e)||!e.normalizationField)))}export{j as a,y as b,x as c,u as e,d as g,F as h};
