// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports","../../core/Logger","./interfaces"],function(c,f,e){c.areToolManipulatorsEditable=function(a){return a.visible&&null!=a.getEditableFlag&&a.getEditableFlag(e.EditableFlag.USER)&&a.getEditableFlag(e.EditableFlag.MANAGER)};c.getToolCollectionHandles=function(a){return[a.on("before-add",b=>{const d=b.item;if(null==d||a.includes(d))f.getLogger("esri.views.interactive.interactiveToolUtils").warn("Tool is either already in the list of tools or tool is `null`. Not adding tool."),b.preventDefault();
else d.onAdd()}),a.on("after-remove",b=>{b=b.item;b.active&&(b.view.activeTool=null);b.destroy()})]};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});