// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports","./calcite-input-time-picker"],function(g,l){function d(a){return 5>a%10&&1<a%10&&1!==~~(a/10)%10}function b(a,e,m){var f=a+" ";switch(m){case "m":return e?"minuta":"minut\u0119";case "mm":return f+(d(a)?"minuty":"minut");case "h":return e?"godzina":"godzin\u0119";case "hh":return f+(d(a)?"godziny":"godzin");case "MM":return f+(d(a)?"miesi\u0105ce":"miesi\u0119cy");case "yy":return f+(d(a)?"lata":"lat")}}var h="stycznia lutego marca kwietnia maja czerwca lipca sierpnia wrze\u015bnia pa\u017adziernika listopada grudnia".split(" "),
k="stycze\u0144 luty marzec kwiecie\u0144 maj czerwiec lipiec sierpie\u0144 wrzesie\u0144 pa\u017adziernik listopad grudzie\u0144".split(" "),n=/D MMMM/,c=function(a,e){return n.test(e)?h[a.month()]:k[a.month()]};c.s=k;c.f=h;c={name:"pl",weekdays:"niedziela poniedzia\u0142ek wtorek \u015broda czwartek pi\u0105tek sobota".split(" "),weekdaysShort:"ndz pon wt \u015br czw pt sob".split(" "),weekdaysMin:"Nd Pn Wt \u015ar Cz Pt So".split(" "),months:c,monthsShort:"sty lut mar kwi maj cze lip sie wrz pa\u017a lis gru".split(" "),
ordinal:function(a){return a+"."},weekStart:1,yearStart:4,relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",m:b,mm:b,h:b,hh:b,d:"1 dzie\u0144",dd:"%d dni",M:"miesi\u0105c",MM:b,y:"rok",yy:b},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"}};l.d.locale(c,null,!0);g.default=c;Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});