// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports","./Theme"],function(p,c){class k extends c.Rectangle{_beforeChanged(){super._beforeChanged();if(this.isDirty("cornerRadiusTL")||this.isDirty("cornerRadiusTR")||this.isDirty("cornerRadiusBR")||this.isDirty("cornerRadiusBL"))this._clear=!0}_draw(){let b=this.width(),a=this.height(),l=b/Math.abs(b),m=a/Math.abs(a);if(c.isNumber(b)&&c.isNumber(a)){var e=Math.min(b,a)/2;let f=c.relativeToValue(this.get("cornerRadiusTL",8),e),g=c.relativeToValue(this.get("cornerRadiusTR",8),e),h=c.relativeToValue(this.get("cornerRadiusBR",
8),e);e=c.relativeToValue(this.get("cornerRadiusBL",8),e);var d=Math.min(Math.abs(b/2),Math.abs(a/2));f=c.fitToRange(f,0,d);g=c.fitToRange(g,0,d);h=c.fitToRange(h,0,d);e=c.fitToRange(e,0,d);d=this._display;d.moveTo(f*l,0);d.lineTo(b-g*l,0);0<g&&d.arcTo(b,0,b,g*m,g);d.lineTo(b,a-h*m);0<h&&d.arcTo(b,a,b-h*l,a,h);d.lineTo(e*l,a);0<e&&d.arcTo(0,a,0,a-e*m,e);d.lineTo(0,f*m);0<f&&d.arcTo(0,0,f*l,0,f);d.closePath()}}}Object.defineProperty(k,"className",{enumerable:!0,configurable:!0,writable:!0,value:"RoundedRectangle"});
Object.defineProperty(k,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:c.Rectangle.classNames.concat([k.className])});class n extends c.Container{_afterNew(){this._settings.themeTags=c.mergeTags(this._settings.themeTags,["button"]);super._afterNew();this._settings.background||this.set("background",k.new(this._root,{themeTags:c.mergeTags(this._settings.themeTags,["background"])}))}_prepareChildren(){super._prepareChildren();if(this.isDirty("icon")){var b=this._prevSettings.icon,a=this.get("icon");
a!==b&&(this._disposeProperty("icon"),b&&b.dispose(),a&&this.children.push(a),this._prevSettings.icon=a)}this.isDirty("label")&&(b=this._prevSettings.label,a=this.get("label"),a!==b&&(this._disposeProperty("label"),b&&b.dispose(),a&&this.children.push(a),this._prevSettings.label=a))}}Object.defineProperty(n,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Button"});Object.defineProperty(n,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:c.Container.classNames.concat([n.className])});
p.Button=n;p.RoundedRectangle=k});