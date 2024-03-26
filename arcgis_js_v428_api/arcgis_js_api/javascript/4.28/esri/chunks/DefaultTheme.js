// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports","./Theme"],function(l,b){function e(h,d,c,f){h.set(d,c.get(f));c.on(f,a=>{h.set(d,a)})}class m extends b.Theme{setupDefaultRules(){super.setupDefaultRules();var h=this._root.language;const d=this._root.interfaceColors;var c=this._root.horizontalLayout,f=this._root.verticalLayout,a=this.rule.bind(this);a("InterfaceColors").setAll({stroke:b.Color.fromHex(15066597),fill:b.Color.fromHex(15987699),primaryButton:b.Color.fromHex(6788316),primaryButtonHover:b.Color.fromHex(6779356),primaryButtonDown:b.Color.fromHex(6872182),
primaryButtonActive:b.Color.fromHex(6872182),primaryButtonText:b.Color.fromHex(16777215),primaryButtonStroke:b.Color.fromHex(16777215),secondaryButton:b.Color.fromHex(14277081),secondaryButtonHover:b.Color.fromHex(10724259),secondaryButtonDown:b.Color.fromHex(9276813),secondaryButtonActive:b.Color.fromHex(15132390),secondaryButtonText:b.Color.fromHex(0),secondaryButtonStroke:b.Color.fromHex(16777215),grid:b.Color.fromHex(0),background:b.Color.fromHex(16777215),alternativeBackground:b.Color.fromHex(0),
text:b.Color.fromHex(0),alternativeText:b.Color.fromHex(16777215),disabled:b.Color.fromHex(11382189),positive:b.Color.fromHex(5288704),negative:b.Color.fromHex(11730944)});const k=a("ColorSet");k.setAll({passOptions:{hue:.05,saturation:0,lightness:0},colors:[b.Color.fromHex(6797276)],step:1,reuse:!1,startIndex:0});k.setPrivate("currentStep",0);k.setPrivate("currentPass",0);a("Entity").setAll({stateAnimationDuration:0,stateAnimationEasing:b.out(b.cubic)});a("Component").setAll({interpolationDuration:0,
interpolationEasing:b.out(b.cubic)});a("Sprite").setAll({visible:!0,scale:1,opacity:1,rotation:0,position:"relative",tooltipX:b.p50,tooltipY:b.p50,tooltipPosition:"fixed",isMeasured:!0});a("Sprite").states.create("default",{visible:!0,opacity:1});a("Container").setAll({interactiveChildren:!0,setStateOnChildren:!1});a("Graphics").setAll({strokeWidth:1});a("Chart").setAll({width:b.p100,height:b.p100,interactiveChildren:!1});a("Sprite",["horizontal","center"]).setAll({centerX:b.p50,x:b.p50});a("Sprite",
["vertical","center"]).setAll({centerY:b.p50,y:b.p50});a("Container",["horizontal","layout"]).setAll({layout:c});a("Container",["vertical","layout"]).setAll({layout:f});a("Pattern").setAll({repetition:"repeat",width:50,height:50,rotation:0,fillOpacity:1});a("LinePattern").setAll({gap:6,colorOpacity:1,width:49,height:49});a("RectanglePattern").setAll({gap:6,checkered:!1,centered:!0,maxWidth:5,maxHeight:5,width:48,height:48,strokeWidth:0});a("CirclePattern").setAll({gap:5,checkered:!1,centered:!1,radius:3,
strokeWidth:0,width:45,height:45});a("LinearGradient").setAll({rotation:90});a("Legend").setAll({fillField:"fill",strokeField:"stroke",nameField:"name",layout:b.GridLayout.new(this._root,{}),layer:30,clickTarget:"itemContainer"});a("Container",["legend","item","itemcontainer"]).setAll({paddingLeft:5,paddingRight:5,paddingBottom:5,paddingTop:5,layout:c,setStateOnChildren:!0,interactiveChildren:!1,ariaChecked:!0,focusable:!0,ariaLabel:h.translate("Press ENTER to toggle"),role:"checkbox"});f=a("Rectangle",
["legend","item","background"]);f.setAll({fillOpacity:0});e(f,"fill",d,"background");a("Container",["legend","marker"]).setAll({setStateOnChildren:!0,centerY:b.p50,paddingLeft:0,paddingRight:0,paddingBottom:0,paddingTop:0,width:18,height:18});a("RoundedRectangle",["legend","marker","rectangle"]).setAll({width:b.p100,height:b.p100,cornerRadiusBL:3,cornerRadiusTL:3,cornerRadiusBR:3,cornerRadiusTR:3});f=a("RoundedRectangle",["legend","marker","rectangle"]).states.create("disabled",{});e(f,"fill",d,"disabled");
e(f,"stroke",d,"disabled");a("Label",["legend","label"]).setAll({centerY:b.p50,marginLeft:5,paddingRight:0,paddingLeft:0,paddingTop:0,paddingBottom:0,populateText:!0});f=a("Label",["legend","label"]).states.create("disabled",{});e(f,"fill",d,"disabled");a("Label",["legend","value","label"]).setAll({centerY:b.p50,marginLeft:5,paddingRight:0,paddingLeft:0,paddingTop:0,paddingBottom:0,width:50,centerX:b.p100,populateText:!0});f=a("Label",["legend","value","label"]).states.create("disabled",{});e(f,"fill",
d,"disabled");a("HeatLegend").setAll({stepCount:1});a("RoundedRectangle",["heatlegend","marker"]).setAll({cornerRadiusTR:0,cornerRadiusBR:0,cornerRadiusTL:0,cornerRadiusBL:0});a("RoundedRectangle",["vertical","heatlegend","marker"]).setAll({height:b.p100,width:15});a("RoundedRectangle",["horizontal","heatlegend","marker"]).setAll({width:b.p100,height:15});a("HeatLegend",["vertical"]).setAll({height:b.p100});a("HeatLegend",["horizontal"]).setAll({width:b.p100});a("Label",["heatlegend","start"]).setAll({paddingLeft:5,
paddingRight:5,paddingTop:5,paddingBottom:5});a("Label",["heatlegend","end"]).setAll({paddingLeft:5,paddingRight:5,paddingTop:5,paddingBottom:5});f=a("Label");f.setAll({paddingTop:8,paddingBottom:8,paddingLeft:10,paddingRight:10,fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',fontSize:"1em",populateText:!1});e(f,"fill",d,"text");a("RadialLabel").setAll({textType:"regular",centerY:b.p50,centerX:b.p50,
inside:!1,radius:0,baseRadius:b.p100,orientation:"auto",textAlign:"center"});a("RoundedRectangle").setAll({cornerRadiusTL:8,cornerRadiusBL:8,cornerRadiusTR:8,cornerRadiusBR:8});a("PointedRectangle").setAll({pointerBaseWidth:15,pointerLength:10,cornerRadius:8});a("Slice").setAll({shiftRadius:0,dRadius:0,dInnerRadius:0});f=a("Tick");f.setAll({strokeOpacity:.15,isMeasured:!1,length:4.5,position:"absolute",crisp:!0});e(f,"stroke",d,"grid");a("Bullet").setAll({locationX:.5,locationY:.5});a("Tooltip").setAll({position:"absolute",
getFillFromSprite:!0,getStrokeFromSprite:!1,autoTextColor:!0,paddingTop:9,paddingBottom:8,paddingLeft:10,paddingRight:10,marginBottom:5,pointerOrientation:"vertical",centerX:b.p50,centerY:b.p50,animationEasing:b.out(b.cubic),exportable:!1});a("Polygon").setAll({animationEasing:b.out(b.cubic)});a("PointedRectangle",["tooltip","background"]).setAll({strokeOpacity:.9,cornerRadius:4,pointerLength:4,pointerBaseWidth:8,fillOpacity:.9,stroke:b.Color.fromHex(16777215)});f=a("Label",["tooltip"]);f.setAll({role:"tooltip",
populateText:!0,paddingRight:0,paddingTop:0,paddingLeft:0,paddingBottom:0});e(f,"fill",d,"alternativeText");a("Button").setAll({paddingTop:8,paddingBottom:8,paddingLeft:10,paddingRight:10,interactive:!0,layout:c,interactiveChildren:!1,setStateOnChildren:!0,focusable:!0});a("Button").states.create("hover",{});a("Button").states.create("down",{stateAnimationDuration:0});a("Button").states.create("active",{});c=a("RoundedRectangle",["button","background"]);e(c,"fill",d,"primaryButton");e(c,"stroke",
d,"primaryButtonStroke");c=a("RoundedRectangle",["button","background"]).states.create("hover",{});e(c,"fill",d,"primaryButtonHover");c=a("RoundedRectangle",["button","background"]).states.create("down",{stateAnimationDuration:0});e(c,"fill",d,"primaryButtonDown");c=a("RoundedRectangle",["button","background"]).states.create("active",{});e(c,"fill",d,"primaryButtonActive");c=a("Graphics",["button","icon"]);e(c,"stroke",d,"primaryButtonText");c=a("Label",["button"]);e(c,"fill",d,"primaryButtonText");
a("Button",["zoom"]).setAll({paddingTop:18,paddingBottom:18,paddingLeft:12,paddingRight:12,centerX:46,centerY:-10,y:0,x:b.p100,role:"button",ariaLabel:h.translate("Zoom Out"),layer:30});c=a("RoundedRectangle",["background","button","zoom"]);c.setAll({cornerRadiusBL:40,cornerRadiusBR:40,cornerRadiusTL:40,cornerRadiusTR:40});e(c,"fill",d,"primaryButton");c=a("RoundedRectangle",["background","button","zoom"]).states.create("hover",{});e(c,"fill",d,"primaryButtonHover");c=a("RoundedRectangle",["background",
"button","zoom"]).states.create("down",{stateAnimationDuration:0});e(c,"fill",d,"primaryButtonDown");c=a("Graphics",["icon","button","zoom"]);c.setAll({crisp:!0,strokeOpacity:.7,draw:g=>{g.moveTo(0,0);g.lineTo(12,0)}});e(c,"stroke",d,"primaryButtonText");a("Button",["resize"]).setAll({paddingTop:9,paddingBottom:9,paddingLeft:13,paddingRight:13,draggable:!0,centerX:b.p50,centerY:b.p50,position:"absolute",role:"slider",ariaValueMin:"0",ariaValueMax:"100",ariaLabel:h.translate("Use up and down arrows to move selection")});
c=a("RoundedRectangle",["background","resize","button"]);c.setAll({cornerRadiusBL:40,cornerRadiusBR:40,cornerRadiusTL:40,cornerRadiusTR:40});e(c,"fill",d,"secondaryButton");e(c,"stroke",d,"secondaryButtonStroke");c=a("RoundedRectangle",["background","resize","button"]).states.create("hover",{});e(c,"fill",d,"secondaryButtonHover");c=a("RoundedRectangle",["background","resize","button"]).states.create("down",{stateAnimationDuration:0});e(c,"fill",d,"secondaryButtonDown");c=a("Graphics",["resize","button",
"icon"]);c.setAll({interactive:!1,crisp:!0,strokeOpacity:.5,draw:g=>{g.moveTo(0,.5);g.lineTo(0,12.5);g.moveTo(4,.5);g.lineTo(4,12.5)}});e(c,"stroke",d,"secondaryButtonText");a("Button",["resize","vertical"]).setAll({rotation:90,cursorOverStyle:"ns-resize"});a("Button",["resize","horizontal"]).setAll({cursorOverStyle:"ew-resize"});a("Button",["play"]).setAll({paddingTop:13,paddingBottom:13,paddingLeft:14,paddingRight:14,ariaLabel:h.translate("Play"),toggleKey:"active"});c=a("RoundedRectangle",["play",
"background"]);c.setAll({strokeOpacity:.5,cornerRadiusBL:100,cornerRadiusBR:100,cornerRadiusTL:100,cornerRadiusTR:100});e(c,"fill",d,"primaryButton");c=a("Graphics",["play","icon"]);c.setAll({stateAnimationDuration:0,dx:1,draw:g=>{g.moveTo(0,-5);g.lineTo(8,0);g.lineTo(0,5);g.lineTo(0,-5)}});e(c,"fill",d,"primaryButtonText");a("Graphics",["play","icon"]).states.create("default",{stateAnimationDuration:0});a("Graphics",["play","icon"]).states.create("active",{stateAnimationDuration:0,draw:g=>{g.moveTo(-4,
-5);g.lineTo(-1,-5);g.lineTo(-1,5);g.lineTo(-4,5);g.lineTo(-4,-5);g.moveTo(4,-5);g.lineTo(1,-5);g.lineTo(1,5);g.lineTo(4,5);g.lineTo(4,-5)}});a("Button",["switch"]).setAll({paddingTop:4,paddingBottom:4,paddingLeft:4,paddingRight:4,ariaLabel:h.translate("Press ENTER to toggle"),toggleKey:"active",width:40,height:24,layout:null});c=a("RoundedRectangle",["switch","background"]);c.setAll({strokeOpacity:.5,cornerRadiusBL:100,cornerRadiusBR:100,cornerRadiusTL:100,cornerRadiusTR:100});e(c,"fill",d,"primaryButton");
c=a("Circle",["switch","icon"]);c.setAll({radius:8,centerY:0,centerX:0,dx:0});e(c,"fill",d,"primaryButtonText");a("Graphics",["switch","icon"]).states.create("active",{dx:16});a("Scrollbar").setAll({start:0,end:1,layer:30,animationEasing:b.out(b.cubic)});a("Scrollbar",["vertical"]).setAll({marginRight:13,marginLeft:13,minWidth:12,height:b.p100});a("Scrollbar",["horizontal"]).setAll({marginTop:13,marginBottom:13,minHeight:12,width:b.p100});this.rule("Button",["scrollbar"]).setAll({exportable:!1});
c=a("RoundedRectangle",["scrollbar","main","background"]);c.setAll({cornerRadiusTL:8,cornerRadiusBL:8,cornerRadiusTR:8,cornerRadiusBR:8,fillOpacity:.8});e(c,"fill",d,"fill");c=a("RoundedRectangle",["scrollbar","thumb"]);c.setAll({role:"slider",ariaLive:"polite",position:"absolute",draggable:!0});e(c,"fill",d,"secondaryButton");c=a("RoundedRectangle",["scrollbar","thumb"]).states.create("hover",{});e(c,"fill",d,"secondaryButtonHover");c=a("RoundedRectangle",["scrollbar","thumb"]).states.create("down",
{stateAnimationDuration:0});e(c,"fill",d,"secondaryButtonDown");a("RoundedRectangle",["scrollbar","thumb","vertical"]).setAll({x:b.p50,width:b.p100,centerX:b.p50,ariaLabel:h.translate("Use up and down arrows to move selection")});a("RoundedRectangle",["scrollbar","thumb","horizontal"]).setAll({y:b.p50,centerY:b.p50,height:b.p100,ariaLabel:h.translate("Use left and right arrows to move selection")});h=a("PointedRectangle",["axis","tooltip","background"]);h.setAll({cornerRadius:0});e(h,"fill",d,"alternativeBackground");
a("Label",["axis","tooltip"]).setAll({role:void 0});a("Label",["axis","tooltip","y"]).setAll({textAlign:"right"});a("Label",["axis","tooltip","y","opposite"]).setAll({textAlign:"left"});a("Label",["axis","tooltip","x"]).setAll({textAlign:"center"});a("Tooltip",["categoryaxis"]).setAll({labelText:"{category}"});a("Star").setAll({spikes:5,innerRadius:5,radius:10});a("Tooltip",["stock"]).setAll({paddingTop:6,paddingBottom:5,paddingLeft:7,paddingRight:7});a("PointedRectangle",["tooltip","stock","axis"]).setAll({pointerLength:0,
pointerBaseWidth:0,cornerRadius:3});a("Label",["tooltip","stock"]).setAll({fontSize:"0.8em"});a("SpriteResizer").setAll({rotationStep:10});a("Container",["resizer","grip"]).states.create("hover",{});h=a("RoundedRectangle",["resizer","grip"]);h.setAll({strokeOpacity:.7,strokeWidth:1,fillOpacity:1,width:12,height:12});e(h,"fill",d,"background");e(h,"stroke",d,"alternativeBackground");h=a("RoundedRectangle",["resizer","grip","outline"]);h.setAll({strokeOpacity:0,fillOpacity:0,width:20,height:20});h.states.create("hover",
{fillOpacity:.3});e(h,"fill",d,"alternativeBackground");a("RoundedRectangle",["resizer","grip","left"]).setAll({cornerRadiusBL:0,cornerRadiusBR:0,cornerRadiusTL:0,cornerRadiusTR:0});a("RoundedRectangle",["resizer","grip","right"]).setAll({cornerRadiusBL:0,cornerRadiusBR:0,cornerRadiusTL:0,cornerRadiusTR:0});a=a("Rectangle",["resizer","rectangle"]);a.setAll({strokeDasharray:[2,2],strokeOpacity:.5,strokeWidth:1});e(a,"stroke",d,"alternativeBackground")}}l.DefaultTheme=m;l.setColor=e});