/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{r as e}from"./Logger.js";import{U as t}from"./UnknownTimeZone.js";import{D as s,Z as r,F as n,a}from"./datetime.js";import{g as i}from"./locale.js";import o from"../geometry/Extent.js";var c;!function(e){e.TimeZoneNotRecognized="TimeZoneNotRecognized"}(c||(c={}));const u={[c.TimeZoneNotRecognized]:"Timezone identifier has not been recognized."};class m extends Error{constructor(t,s){super(e(u[t],s)),this.declaredRootClass="esri.arcade.arcadedate.dateerror",Error.captureStackTrace&&Error.captureStackTrace(this,m)}}function l(e,t,s){return e<t?e-t:e>s?e-s:0}function h(e,t,s){return e<t?t:e>s?s:e}class d{constructor(e){this._date=e,this.declaredRootClass="esri.arcade.arcadedate"}static fromParts(e=0,t=1,r=1,n=0,a=0,i=0,o=0,c){if(isNaN(e)||isNaN(t)||isNaN(r)||isNaN(n)||isNaN(a)||isNaN(i)||isNaN(o))return null;const u=s.local(e,t).daysInMonth;let m=s.fromObject({day:h(r,1,u),year:e,month:h(t,1,12),hour:h(n,0,23),minute:h(a,0,59),second:h(i,0,59),millisecond:h(o,0,999)},{zone:f(c)});return m=m.plus({months:l(t,1,12),days:l(r,1,u),hours:l(n,0,23),minutes:l(a,0,59),seconds:l(i,0,59),milliseconds:l(o,0,999)}),new d(m)}static get systemTimeZoneCanonicalName(){return Intl.DateTimeFormat().resolvedOptions().timeZone??"system"}static arcadeDateAndZoneToArcadeDate(e,s){const r=f(s);return e.isUnknownTimeZone||r===t.instance?d.fromParts(e.year,e.monthJS+1,e.day,e.hour,e.minute,e.second,e.millisecond,r):new d(e._date.setZone(r))}static dateJSToArcadeDate(e){return new d(s.fromJSDate(e,{zone:"system"}))}static dateJSAndZoneToArcadeDate(e,t="system"){const r=f(t);return new d(s.fromJSDate(e,{zone:r}))}static unknownEpochToArcadeDate(e){return new d(s.fromMillis(e,{zone:t.instance}))}static unknownDateJSToArcadeDate(e){return new d(s.fromMillis(e.getTime(),{zone:t.instance}))}static epochToArcadeDate(e,t="system"){const r=f(t);return new d(s.fromMillis(e,{zone:r}))}static dateTimeToArcadeDate(e){return new d(e)}clone(){return new d(this._date)}changeTimeZone(e){const t=f(e);return d.dateTimeToArcadeDate(this._date.setZone(t))}static dateTimeAndZoneToArcadeDate(e,s){const r=f(s);return e.zone===t.instance||r===t.instance?d.fromParts(e.year,e.month,e.day,e.hour,e.minute,e.second,e.millisecond,r):new d(e.setZone(r))}static nowToArcadeDate(e){const t=f(e);return new d(s.fromJSDate(new Date,{zone:t}))}static nowUTCToArcadeDate(){return new d(s.utc())}get isSystem(){return"system"===this.timeZone||this.timeZone===d.systemTimeZoneCanonicalName}equals(e){return this.isSystem&&e.isSystem?this.toNumber()===e.toNumber():this.isUnknownTimeZone===e.isUnknownTimeZone&&this._date.equals(e._date)}get isUnknownTimeZone(){return this._date.zone===t.instance}get isValid(){return this._date.isValid}get hour(){return this._date.hour}get second(){return this._date.second}get day(){return this._date.day}get dayOfWeekISO(){return this._date.weekday}get dayOfWeekJS(){let e=this._date.weekday;return e>6&&(e=0),e}get millisecond(){return this._date.millisecond}get monthISO(){return this._date.month}get weekISO(){return this._date.weekNumber}get yearISO(){return this._date.weekYear}get monthJS(){return this._date.month-1}get year(){return this._date.year}get minute(){return this._date.minute}get zone(){return this._date.zone}get timeZoneOffset(){return this.isUnknownTimeZone?0:this._date.offset}get timeZone(){if(this.isUnknownTimeZone)return"unknown";if("system"===this._date.zone.type)return"system";const e=this.zone;return"fixed"===e.type?0===e.fixed?"UTC":e.formatOffset(0,"short"):e.name}stringify(){return JSON.stringify(this.toJSDate())}plus(e){return new d(this._date.plus(e))}diff(e,t="milliseconds"){return this._date.diff(e._date,t)[t]}toISODate(){return this._date.toISODate()}toISOString(e){return e?this._date.toISO({suppressMilliseconds:!0,includeOffset:!this.isUnknownTimeZone}):this._date.toISO({includeOffset:!this.isUnknownTimeZone})}toISOTime(e,t){return this._date.toISOTime({suppressMilliseconds:e,includeOffset:t&&!this.isUnknownTimeZone})}toFormat(e,t){return this.isUnknownTimeZone&&(e=e.replaceAll("Z","")),this._date.toFormat(e,t)}toJSDate(){return this._date.toJSDate()}toSQLValue(){return this._date.toFormat("yyyy-LL-dd HH:mm:ss")}toSQLWithKeyword(){return`timestamp '${this.toSQLValue()}'`}toDateTime(){return this._date}toNumber(){return this._date.toMillis()}getTime(){return this._date.toMillis()}toUTC(){return new d(this._date.toUTC())}toLocal(){return new d(this._date.toLocal())}toString(){return this.toISOString(!0)}static fromReaderAsTimeStampOffset(e){if(!e)return null;const t=s.fromISO(e,{setZone:!0});return new d(t)}}function f(e,s=!0){if(e instanceof r)return e;if("system"===e.toLowerCase())return"system";if("utc"===e.toLowerCase())return"UTC";if("unknown"===e.toLowerCase())return t.instance;if(/^[\+\-]?[0-9]{1,2}([:][0-9]{2})?$/.test(e)){const t=n.parseSpecifier("UTC"+(e.startsWith("+")||e.startsWith("-")?"":"+")+e);if(t)return t}const i=a.create(e);if(!i.isValid){if(s)throw new m(c.TimeZoneNotRecognized);return null}return i}function y(e){e=e.replaceAll(/LTS|LT|LL?L?L?|l{1,4}/g,"[$&]");let t="";const s=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;for(const r of e.match(s)||[])switch(r){case"D":t+="d";break;case"DD":t+="dd";break;case"DDD":t+="o";break;case"d":t+="c";break;case"ddd":t+="ccc";break;case"dddd":t+="cccc";break;case"M":t+="L";break;case"MM":t+="LL";break;case"MMM":t+="LLL";break;case"MMMM":t+="LLLL";break;case"YY":t+="yy";break;case"Y":case"YYYY":t+="yyyy";break;case"Q":t+="q";break;case"X":case"x":t+=r;break;default:r.length>=2&&"["===r.slice(0,1)&&"]"===r.slice(-1)?t+=`'${r.slice(1,-1)}'`:t+=`'${r}'`}return t}class T{constructor(e,t,s){this._year=e,this._month=t,this._day=s,this.declaredRootClass="esri.core.sql.dateonly"}get month(){return this._month}get monthJS(){return this._month-1}get year(){return this._year}get day(){return this._day}get isValid(){return this.toDateTime("unknown").isValid}equals(e){return e instanceof T&&e.day===this.day&&e.month===this.month&&e.year===this.year}clone(){return new T(this._year,this._month,this._day)}toDateTime(e){return s.fromObject({day:this.day,month:this.month,year:this.year},{zone:f(e)})}toDateTimeLuxon(e){return s.fromObject({day:this.day,month:this.month,year:this.year},{zone:f(e)})}toString(){return`${this.year.toString().padStart(4,"0")}-${this.month.toString().padStart(2,"0")}-${this.day.toString().padStart(2,"0")}`}toFormat(e=null){if(null===e||""===e)return this.toString();if(!(e=y(e)))return"";const t=this.toDateTime("unknown");return d.dateTimeToArcadeDate(t).toFormat(e,{locale:i(),numberingSystem:"latn"})}toArcadeDate(){const e=this.toDateTime("unknown");return d.dateTimeToArcadeDate(e)}toNumber(){return this.toDateTime("unknown").toMillis()}toJSDate(){return this.toDateTime("unknown").toJSDate()}toStorageFormat(){return this.toFormat("yyyy-LL-dd")}toSQLValue(){return this.toFormat("yyyy-LL-dd")}toSQLWithKeyword(){return"date '"+this.toFormat("yyyy-LL-dd")+"'"}plus(e,t){return T.fromDateTime(this.toUTCDateTime().plus({[e]:t}))}toUTCDateTime(){return s.utc(this.year,this.month,this.day,0,0,0,0)}difference(e,t){switch(t.toLowerCase()){case"days":case"day":case"d":return this.toUTCDateTime().diff(e.toUTCDateTime(),"days").days;case"months":case"month":return this.toUTCDateTime().diff(e.toUTCDateTime(),"months").months;case"minutes":case"minute":case"m":return"M"===t?this.toUTCDateTime().diff(e.toUTCDateTime(),"months").months:this.toUTCDateTime().diff(e.toUTCDateTime(),"minutes").minutes;case"seconds":case"second":case"s":return this.toUTCDateTime().diff(e.toUTCDateTime(),"seconds").seconds;case"milliseconds":case"millisecond":case"ms":default:return this.toUTCDateTime().diff(e.toUTCDateTime(),"milliseconds").milliseconds;case"hours":case"hour":case"h":return this.toUTCDateTime().diff(e.toUTCDateTime(),"hours").hours;case"years":case"year":case"y":return this.toUTCDateTime().diff(e.toUTCDateTime(),"years").years}}static fromMilliseconds(e){const t=s.fromMillis(e,{zone:n.utcInstance});return t.isValid?T.fromParts(t.year,t.month,t.day):null}static fromSeconds(e){const t=s.fromSeconds(e,{zone:n.utcInstance});return t.isValid?T.fromParts(t.year,t.month,t.day):null}static fromReader(e){if(!e)return null;const t=e.split("-");return 3!==t.length?null:new T(parseInt(t[0],10),parseInt(t[1],10),parseInt(t[2],10))}static fromParts(e,t,s){const r=new T(e,t,s);return!1===r.isValid?null:r}static fromDateJS(e){return T.fromParts(e.getFullYear(),e.getMonth()+1,e.getDay())}static fromDateTime(e){return T.fromParts(e.year,e.month,e.day)}static fromSqlTimeStampOffset(e){return this.fromDateTime(e.toDateTime())}static fromString(e,t=null){if(""===e)return null;if(null===e)return null;const r=[];if(t)(t=y(t))&&r.push(t);else if(null===t||""===t){const t=s.fromISO(e,{setZone:!0});return t.isValid?T.fromParts(t.year,t.month,t.day):null}for(const n of r){const r=s.fromFormat(e,t??n);if(r.isValid)return new T(r.year,r.month,r.day)}return null}static fromNow(e="system"){const t=s.fromJSDate(new Date).setZone(f(e));return new T(t.year,t.month,t.day)}}function S(e){if(null==e)return null;if("number"==typeof e)return e;let t=e.toLowerCase();switch(t=t.replaceAll(/\s/g,""),t=t.replaceAll("-",""),t){case"meters":case"meter":case"m":case"squaremeters":case"squaremeter":return 109404;case"miles":case"mile":case"squaremile":case"squaremiles":return 109439;case"kilometers":case"kilometer":case"squarekilometers":case"squarekilometer":case"km":return 109414;case"acres":case"acre":case"ac":return 109402;case"hectares":case"hectare":case"ha":return 109401;case"yard":case"yd":case"yards":case"squareyards":case"squareyard":return 109442;case"feet":case"ft":case"foot":case"squarefeet":case"squarefoot":return 109405;case"nmi":case"nauticalmile":case"nauticalmiles":case"squarenauticalmile":case"squarenauticalmiles":return 109409}return null}function D(e){if(null==e)return null;switch(e.type){case"polygon":case"multipoint":case"polyline":return e.extent;case"point":return new o({xmin:e.x,ymin:e.y,xmax:e.x,ymax:e.y,spatialReference:e.spatialReference});case"extent":return e}return null}function g(e){if(null==e)return null;if("number"==typeof e)return e;let t=e.toLowerCase();switch(t=t.replaceAll(/\s/g,""),t=t.replaceAll("-",""),t){case"meters":case"meter":case"m":case"squaremeters":case"squaremeter":return 9001;case"miles":case"mile":case"squaremile":case"squaremiles":return 9093;case"kilometers":case"kilometer":case"squarekilometers":case"squarekilometer":case"km":return 9036;case"yard":case"yd":case"yards":case"squareyards":case"squareyard":return 9096;case"feet":case"ft":case"foot":case"squarefeet":case"squarefoot":return 9002;case"nmi":case"nauticalmile":case"nauticalmiles":case"squarenauticalmile":case"squarenauticalmiles":return 9030}return null}function p(e){if(null==e)return null;const t=e.clone();return void 0!==e.cache._geVersion&&(t.cache._geVersion=e.cache._geVersion),t}function w(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e}function _(e){if(!e)return"";const t=/(a|A|hh?|HH?|mm?|ss?|SSS|S|.)/g;let s="";for(const r of e.match(t)||[])switch(r){case"SSS":case"m":case"mm":case"h":case"hh":case"H":case"HH":case"s":case"ss":s+=r;break;case"A":case"a":s+="a";break;default:s+=`'${r}'`}return s}class k{constructor(e,t,s,r){this._hour=e,this._minute=t,this._second=s,this._millisecond=r,this.declaredRootClass="esri.core.sql.timeonly"}get hour(){return this._hour}get minute(){return this._minute}get second(){return this._second}get millisecond(){return this._millisecond}equals(e){return e instanceof k&&e.hour===this.hour&&e.minute===this.minute&&e.second===this.second&&e.millisecond===this.millisecond}clone(){return new k(this.hour,this.minute,this.second,this.millisecond)}isValid(){return w(this.hour)&&w(this.minute)&&w(this.second)&&w(this.millisecond)&&this.hour>=0&&this.hour<24&&this.minute>=0&&this.minute<60&&this.second>=0&&this.second<60&&this.millisecond>=0&&this.millisecond<1e3}toString(){return`${this.hour.toString().padStart(2,"0")}:${this.minute.toString().padStart(2,"0")}:${this.second.toString().padStart(2,"0")}`+(this.millisecond>0?"."+this.millisecond.toString().padStart(3,"0"):"")}toSQLValue(){return this.toString()}toSQLWithKeyword(){return`time '${this.hour.toString().padStart(2,"0")}:${this.minute.toString().padStart(2,"0")}:${this.second.toString().padStart(2,"0")}${this.millisecond>0?"."+this.millisecond.toString().padStart(3,"0"):""}'`}toStorageString(){return`${this.hour.toString().padStart(2,"0")}:${this.minute.toString().padStart(2,"0")}:${this.second.toString().padStart(2,"0")}`}toFormat(e=null){return null===e||""===e?this.toString():(e=_(e))?s.local(1970,1,1,this._hour,this._minute,this._second,this._millisecond).toFormat(e,{locale:i(),numberingSystem:"latn"}):""}toNumber(){return this.millisecond+1e3*this.second+1e3*this.minute*60+60*this.hour*60*1e3}static fromParts(e,t,s,r){const n=new k(e,t,s,r);return n.isValid()?n:null}static fromReader(e){if(!e)return null;const t=e.split(":");return 3!==t.length?null:new k(parseInt(t[0],10),parseInt(t[1],10),parseInt(t[2],10),0)}static fromMilliseconds(e){if(e>864e5||e<0)return null;const t=Math.floor(e/1e3%60),s=Math.floor(e/6e4%60),r=Math.floor(e/36e5%24),n=Math.floor(e%1e3);return new k(r,s,t,n)}static fromDateJS(e){return new k(e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds())}static fromDateTime(e){return new k(e.hour,e.minute,e.second,e.millisecond)}static fromSqlTimeStampOffset(e){return this.fromDateTime(e.toDateTime())}static fromString(e,t=null){if(""===e)return null;if(null===e)return null;const r=[];t?(t=_(t))&&r.push(t):null!==t&&""!==t||(r.push("HH:mm:ss"),r.push("HH:mm:ss.SSS"),r.push("hh:mm:ss a"),r.push("hh:mm:ss.SSS a"),r.push("HH:mm"),r.push("hh:mm a"),r.push("H:mm"),r.push("h:mm a"),r.push("H:mm:ss"),r.push("h:mm:ss a"),r.push("H:mm:ss.SSS"),r.push("h:mm:ss.SSS a"));for(const t of r){const r=s.fromFormat(e,t);if(r.isValid)return new k(r.hour,r.minute,r.second,r.millisecond)}return null}plus(e,t){switch(e){case"days":case"years":case"months":return this.clone();case"hours":case"minutes":case"seconds":case"milliseconds":return k.fromDateTime(this.toUTCDateTime().plus({[e]:t}))}return null}toUTCDateTime(){return s.utc(1970,1,1,this.hour,this.minute,this.second,this.millisecond)}difference(e,t){switch(t.toLowerCase()){case"days":case"day":case"d":return this.toUTCDateTime().diff(e.toUTCDateTime(),"days").days;case"months":case"month":return this.toUTCDateTime().diff(e.toUTCDateTime(),"months").months;case"minutes":case"minute":case"m":return"M"===t?this.toUTCDateTime().diff(e.toUTCDateTime(),"months").months:this.toUTCDateTime().diff(e.toUTCDateTime(),"minutes").minutes;case"seconds":case"second":case"s":return this.toUTCDateTime().diff(e.toUTCDateTime(),"seconds").seconds;case"milliseconds":case"millisecond":case"ms":default:return this.toUTCDateTime().diff(e.toUTCDateTime(),"milliseconds").milliseconds;case"hours":case"hour":case"h":return this.toUTCDateTime().diff(e.toUTCDateTime(),"hours").hours;case"years":case"year":case"y":return this.toUTCDateTime().diff(e.toUTCDateTime(),"years").years}}}export{d as A,T as D,k as T,p as a,S as b,f as c,g as d,D as s};
