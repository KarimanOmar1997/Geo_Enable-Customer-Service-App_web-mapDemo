// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports","../../../../Color","../../../../core/colorUtils"],function(a,b,d){b=new b([127,127,127,.5]);a.constraintThresholdPx=10;a.disabledPointColor=b;a.focusedLinePaddingPx=6;a.getContrastColor=function(c){return d.getContrast(c.accentColor)};a.getTransparentAccentColor=function(c){return d.multiplyOpacity(c.accentColor,.5)};a.initialOffsetPx=50;a.labelMarginPx=20;a.lengthFraction=.5;a.linePaddingPx=4;a.markerLineSizeFraction=.8;a.minLengthMeters=.1;a.minScreenLengthFontSizeFactor=5;a.offsetLineSizeFraction=
.25;a.orientationCalloutOffsetPx=18;a.orientationCalloutWidth=2;a.orientationDiscScale=.3;a.orientationFocusMultiplier=2;a.orientationSnapThresholdDegrees=5;a.pointRadius=5;a.pointerMoveTimeoutMs=2500;a.smallScreenLengthLineSizeFactor=2;Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});