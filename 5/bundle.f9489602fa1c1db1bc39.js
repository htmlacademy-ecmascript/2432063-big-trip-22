(()=>{var e={10:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var s=n(537),i=n.n(s),r=n(645),a=n.n(r)()(i());a.push([e.id,".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n","",{version:3,sources:["webpack://./src/framework/view/abstract-view.css"],names:[],mappings:"AAAA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE;;IAEE,wBAAwB;EAC1B;;EAEA;;;;;IAKE,2BAA2B;EAC7B;;EAEA;;;;IAIE,0BAA0B;EAC5B;AACF",sourcesContent:[".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n"],sourceRoot:""}]);const o=a},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",s=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),s&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),s&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,s,i,r){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(s)for(var o=0;o<this.length;o++){var l=this[o][0];null!=l&&(a[l]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);s&&a[u[0]]||(void 0!==r&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=r),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),i&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=i):u[4]="".concat(i)),t.push(u))}},t}},537:e=>{"use strict";e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var s=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),r="/*# ".concat(i," */");return[t].concat([r]).join("\n")}return[t].join("\n")}},484:function(e){e.exports=function(){"use strict";var e=6e4,t=36e5,n="millisecond",s="second",i="minute",r="hour",a="day",o="week",l="month",c="quarter",u="year",d="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},m=function(e,t,n){var s=String(e);return!s||s.length>=t?e:""+Array(t+1-s.length).join(n)+e},_={s:m,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),s=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+m(s,2,"0")+":"+m(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var s=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(s,l),r=n-i<0,a=t.clone().add(s+(r?-1:1),l);return+(-(s+(n-i)/(r?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:u,w:o,d:a,D:d,h:r,m:i,s,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",b={};b[y]=h;var g="$isDayjsObject",$=function(e){return e instanceof A||!(!e||!e[g])},M=function e(t,n,s){var i;if(!t)return y;if("string"==typeof t){var r=t.toLowerCase();b[r]&&(i=r),n&&(b[r]=n,i=r);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var o=t.name;b[o]=t,i=o}return!s&&i&&(y=i),i||!s&&y},w=function(e,t){if($(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new A(n)},x=_;x.l=M,x.i=$,x.w=function(e,t){return w(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var A=function(){function h(e){this.$L=M(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[g]=!0}var m=h.prototype;return m.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(x.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var s=t.match(p);if(s){var i=s[2]-1||0,r=(s[7]||"0").substring(0,3);return n?new Date(Date.UTC(s[1],i,s[3]||1,s[4]||0,s[5]||0,s[6]||0,r)):new Date(s[1],i,s[3]||1,s[4]||0,s[5]||0,s[6]||0,r)}}return new Date(t)}(e),this.init()},m.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},m.$utils=function(){return x},m.isValid=function(){return!(this.$d.toString()===f)},m.isSame=function(e,t){var n=w(e);return this.startOf(t)<=n&&n<=this.endOf(t)},m.isAfter=function(e,t){return w(e)<this.startOf(t)},m.isBefore=function(e,t){return this.endOf(t)<w(e)},m.$g=function(e,t,n){return x.u(e)?this[t]:this.set(n,e)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(e,t){var n=this,c=!!x.u(t)||t,f=x.p(e),p=function(e,t){var s=x.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return c?s:s.endOf(a)},v=function(e,t){return x.w(n.toDate()[e].apply(n.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},h=this.$W,m=this.$M,_=this.$D,y="set"+(this.$u?"UTC":"");switch(f){case u:return c?p(1,0):p(31,11);case l:return c?p(1,m):p(0,m+1);case o:var b=this.$locale().weekStart||0,g=(h<b?h+7:h)-b;return p(c?_-g:_+(6-g),m);case a:case d:return v(y+"Hours",0);case r:return v(y+"Minutes",1);case i:return v(y+"Seconds",2);case s:return v(y+"Milliseconds",3);default:return this.clone()}},m.endOf=function(e){return this.startOf(e,!1)},m.$set=function(e,t){var o,c=x.p(e),f="set"+(this.$u?"UTC":""),p=(o={},o[a]=f+"Date",o[d]=f+"Date",o[l]=f+"Month",o[u]=f+"FullYear",o[r]=f+"Hours",o[i]=f+"Minutes",o[s]=f+"Seconds",o[n]=f+"Milliseconds",o)[c],v=c===a?this.$D+(t-this.$W):t;if(c===l||c===u){var h=this.clone().set(d,1);h.$d[p](v),h.init(),this.$d=h.set(d,Math.min(this.$D,h.daysInMonth())).$d}else p&&this.$d[p](v);return this.init(),this},m.set=function(e,t){return this.clone().$set(e,t)},m.get=function(e){return this[x.p(e)]()},m.add=function(n,c){var d,f=this;n=Number(n);var p=x.p(c),v=function(e){var t=w(f);return x.w(t.date(t.date()+Math.round(e*n)),f)};if(p===l)return this.set(l,this.$M+n);if(p===u)return this.set(u,this.$y+n);if(p===a)return v(1);if(p===o)return v(7);var h=(d={},d[i]=e,d[r]=t,d[s]=1e3,d)[p]||1,m=this.$d.getTime()+n*h;return x.w(m,this)},m.subtract=function(e,t){return this.add(-1*e,t)},m.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var s=e||"YYYY-MM-DDTHH:mm:ssZ",i=x.z(this),r=this.$H,a=this.$m,o=this.$M,l=n.weekdays,c=n.months,u=n.meridiem,d=function(e,n,i,r){return e&&(e[n]||e(t,s))||i[n].slice(0,r)},p=function(e){return x.s(r%12||12,e,"0")},h=u||function(e,t,n){var s=e<12?"AM":"PM";return n?s.toLowerCase():s};return s.replace(v,(function(e,s){return s||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return x.s(t.$y,4,"0");case"M":return o+1;case"MM":return x.s(o+1,2,"0");case"MMM":return d(n.monthsShort,o,c,3);case"MMMM":return d(c,o);case"D":return t.$D;case"DD":return x.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(n.weekdaysMin,t.$W,l,2);case"ddd":return d(n.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(r);case"HH":return x.s(r,2,"0");case"h":return p(1);case"hh":return p(2);case"a":return h(r,a,!0);case"A":return h(r,a,!1);case"m":return String(a);case"mm":return x.s(a,2,"0");case"s":return String(t.$s);case"ss":return x.s(t.$s,2,"0");case"SSS":return x.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(n,d,f){var p,v=this,h=x.p(d),m=w(n),_=(m.utcOffset()-this.utcOffset())*e,y=this-m,b=function(){return x.m(v,m)};switch(h){case u:p=b()/12;break;case l:p=b();break;case c:p=b()/3;break;case o:p=(y-_)/6048e5;break;case a:p=(y-_)/864e5;break;case r:p=y/t;break;case i:p=y/e;break;case s:p=y/1e3;break;default:p=y}return f?p:x.a(p)},m.daysInMonth=function(){return this.endOf(l).$D},m.$locale=function(){return b[this.$L]},m.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),s=M(e,t,!0);return s&&(n.$L=s),n},m.clone=function(){return x.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},h}(),S=A.prototype;return w.prototype=S,[["$ms",n],["$s",s],["$m",i],["$H",r],["$W",a],["$M",l],["$y",u],["$D",d]].forEach((function(e){S[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),w.extend=function(e,t){return e.$i||(e(t,A,w),e.$i=!0),w},w.locale=M,w.isDayjs=$,w.unix=function(e){return w(1e3*e)},w.en=b[y],w.Ls=b,w.p={},w}()},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,s=0;s<t.length;s++)if(t[s].identifier===e){n=s;break}return n}function s(e,s){for(var r={},a=[],o=0;o<e.length;o++){var l=e[o],c=s.base?l[0]+s.base:l[0],u=r[c]||0,d="".concat(c," ").concat(u);r[c]=u+1;var f=n(d),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==f)t[f].references++,t[f].updater(p);else{var v=i(p,s);s.byIndex=o,t.splice(o,0,{identifier:d,updater:v,references:1})}a.push(d)}return a}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var r=s(e=e||[],i=i||{});return function(e){e=e||[];for(var a=0;a<r.length;a++){var o=n(r[a]);t[o].references--}for(var l=s(e,i),c=0;c<r.length;c++){var u=n(r[c]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}r=l}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var s=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var s="";n.supports&&(s+="@supports (".concat(n.supports,") {")),n.media&&(s+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(s+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),s+=n.css,i&&(s+="}"),n.media&&(s+="}"),n.supports&&(s+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(s+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(s,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(s){var i=t[s];if(void 0!==i)return i.exports;var r=t[s]={id:s,exports:{}};return e[s].call(r.exports,r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{"use strict";function e(e,t,n="beforeend"){if(!(e instanceof y))throw new Error("Can render only components");if(null===t)throw new Error("Container element doesn't exist");t.insertAdjacentElement(n,e.element)}function t(e,t){if(!(e instanceof y&&t instanceof y))throw new Error("Can replace only components");const n=e.element,s=t.element,i=s.parentElement;if(null===i)throw new Error("Parent element doesn't exist");i.replaceChild(n,s)}var s=n(379),i=n.n(s),r=n(795),a=n.n(r),o=n(569),l=n.n(o),c=n(565),u=n.n(c),d=n(216),f=n.n(d),p=n(589),v=n.n(p),h=n(10),m={};m.styleTagTransform=v(),m.setAttributes=u(),m.insert=l().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=f(),i()(h.Z,m),h.Z&&h.Z.locals&&h.Z.locals;const _="shake";class y{#e=null;constructor(){if(new.target===y)throw new Error("Can't instantiate AbstractView, only concrete one.")}get element(){return this.#e||(this.#e=function(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}(this.template)),this.#e}get template(){throw new Error("Abstract method not implemented: get template")}removeElement(){this.#e=null}shake(e){this.element.classList.add(_),setTimeout((()=>{this.element.classList.remove(_),e?.()}),600)}}var b=n(484),g=n.n(b);const $=e=>`0${e}`.slice(-2),M=e=>{const t=new Date(Date.parse(e));return $(t.getHours())},w=e=>{const t=new Date(Date.parse(e));return $(t.getMinutes())},x=e=>e[Math.floor(Math.random()*e.length)];class A extends y{#t=null;#n=null;#s=null;#i=null;constructor({destinations:e,point:t,offer:n,onPointClick:s}){super(),this.#t=t,this.#n=n,this.#s=e,this.#i=s,this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#r)}get template(){return((e,t,n)=>{const{dateFrom:s,dateTo:i,basePrice:r,type:a,isFavorite:o,destination:l}=t,c=o?"active":"",{title:u,price:d}=(f=a,n.find((()=>a===f))).offers[0];var f;const{name:p}=(t=>e.find((({id:e})=>e===t)))(l);return`\n    <ul class="trip-events__list">\n      <li class="trip-events__item">\n        <div class="event">\n          <time class="event__date" datetime=${s}> ${v=s,v?g()(v).format("MMM DD"):""}</time>\n            <div class="event__type">\n                  <img class="event__type-icon" width="42" height="42" src="img/icons/${a.toLowerCase()}.png" alt="Event type icon">\n                </div>\n                <h3 class="event__title">${a} ${p}</h3>\n                <div class="event__schedule">\n                  <p class="event__time">\n                    <time class="event__start-time" datetime="${s}"> ${M(s)}:\n                    ${w(s)}</time>\n                    &mdash;\n                    <time class="event__end-time" datetime="${i}">${M(i)}:${w(i)}</time>\n                  </p>\n                  <p class="event__duration">${((e,t)=>{const n=Date.parse(t)-Date.parse(e),s=Math.floor(n/1e3/60%60),i=Math.floor(n/36e5%24),r=Math.floor(n/864e5);return[r?`${$(r)}D`:"",i?`${$(i)}H`:"",s?`${$(s)}M`:""].join(" ")})(s,i)}</p>\n                </div>\n                <p class="event__price">\n                  &euro;&nbsp;<span class="event__price-value">${r+d}</span>\n                </p>\n                <h4 class="visually-hidden">Offers:</h4>\n                <ul class="event__selected-offers">\n                  <li class="event__offer">\n                    <span class="event__offer-title">${u}</span>\n                    &plus;&euro;&nbsp;\n                    <span class="event__offer-price">${d}</span>\n                  </li>\n                </ul>\n                <button class="event__favorite-btn event__favorite-btn--${c}" type="button">\n                  <span class="visually-hidden">Add to favorite</span>\n                  <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n                    <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n                  </svg>\n                </button>\n                <button class="event__rollup-btn" type="button">\n                  <span class="visually-hidden">Open event</span>\n                </button>\n              </div>\n            </li>\n           </ul>\n`;var v})(this.#s,this.#t,this.#n)}#r=e=>{e.preventDefault(),this.#i()}}class S extends y{get template(){return'<form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n    <div class="trip-sort__item  trip-sort__item--day">\n      <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day" checked>\n      <label class="trip-sort__btn" for="sort-day">Day</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--event">\n      <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>\n      <label class="trip-sort__btn" for="sort-event">Event</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--time">\n      <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">\n      <label class="trip-sort__btn" for="sort-time">Time</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--price">\n      <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price">\n      <label class="trip-sort__btn" for="sort-price">Price</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--offer">\n      <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>\n      <label class="trip-sort__btn" for="sort-offer">Offers</label>\n    </div>\n  </form>'}}const k=["Taxi","Bus","Train","Ship","Drive","Flight","Check-in","Sightseeing","Restaurant"];class C extends y{#s=null;#a=null;constructor({destinations:e,onSaveEdit:t}){super(),this.#s=e,this.#a=t,this.element.querySelector(".event__save-btn").addEventListener("click",this.#o)}get template(){return(e=>{const t=t=>e.find((({id:e})=>e===t)),{description:n}=t("dest1"),{src:s}=t("dest1").pictures[0];let i=" ";for(let e=0;e<4;e++)i+=`<img class="event__photo" src="${s}"></img>`;return`\n     <form class="event event--edit" action="#" method="post">\n          <header class="event__header">\n            <div class="event__type-wrapper">\n              <label class="event__type  event__type-btn" for="event-type-toggle-1">\n                <span class="visually-hidden">Choose event type</span>\n                <img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon">\n              </label>\n              <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n              <div class="event__type-list">\n                <fieldset class="event__type-group">\n                  <legend class="visually-hidden">Event type</legend>\n\n                  ${Object.entries(k).map((([,e])=>`<div class="event__type-item">\n    <input id="event-type-${e.toLowerCase()}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${e.toLowerCase()}">\n    <label class="event__type-label  event__type-label--${e.toLowerCase()}" for="event-type-taxi-1">${e}</label>\n    </div>`)).join(" ")}\n\n                </fieldset>\n              </div>\n            </div>\n\n            <div class="event__field-group  event__field-group--destination">\n              <label class="event__label  event__type-output" for="event-destination-1">\n                Flight\n              </label>\n              <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="Geneva" list="destination-list-1">\n              <datalist id="destination-list-1">\n                <option value="Amsterdam"></option>\n                <option value="Geneva"></option>\n                <option value="Chamonix"></option>\n              </datalist>\n            </div>\n\n            <div class="event__field-group  event__field-group--time">\n              <label class="visually-hidden" for="event-start-time-1">From</label>\n              <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="19/03/19 00:00">\n              &mdash;\n              <label class="visually-hidden" for="event-end-time-1">To</label>\n              <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="19/03/19 00:00">\n            </div>\n\n            <div class="event__field-group  event__field-group--price">\n              <label class="event__label" for="event-price-1">\n                <span class="visually-hidden">Price</span>\n                &euro;\n              </label>\n              <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="">\n            </div>\n\n            <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n            <button class="event__reset-btn" type="reset">Cancel</button>\n          </header>\n          <section class="event__details">\n            <section class="event__section  event__section--offers">\n              <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n              <div class="event__available-offers">\n                <div class="event__offer-selector">\n                  <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" checked>\n                  <label class="event__offer-label" for="event-offer-luggage-1">\n                    <span class="event__offer-title">Add luggage</span>\n                    &plus;&euro;&nbsp;\n                    <span class="event__offer-price">30</span>\n                  </label>\n                </div>\n\n                <div class="event__offer-selector">\n                  <input class="event__offer-checkbox  visually-hidden" id="event-offer-comfort-1" type="checkbox" name="event-offer-comfort" checked>\n                  <label class="event__offer-label" for="event-offer-comfort-1">\n                    <span class="event__offer-title">Switch to comfort class</span>\n                    &plus;&euro;&nbsp;\n                    <span class="event__offer-price">100</span>\n                  </label>\n                </div>\n\n                <div class="event__offer-selector">\n                  <input class="event__offer-checkbox  visually-hidden" id="event-offer-meal-1" type="checkbox" name="event-offer-meal">\n                  <label class="event__offer-label" for="event-offer-meal-1">\n                    <span class="event__offer-title">Add meal</span>\n                    &plus;&euro;&nbsp;\n                    <span class="event__offer-price">15</span>\n                  </label>\n                </div>\n\n                <div class="event__offer-selector">\n                  <input class="event__offer-checkbox  visually-hidden" id="event-offer-seats-1" type="checkbox" name="event-offer-seats">\n                  <label class="event__offer-label" for="event-offer-seats-1">\n                    <span class="event__offer-title">Choose seats</span>\n                    &plus;&euro;&nbsp;\n                    <span class="event__offer-price">5</span>\n                  </label>\n                </div>\n\n                <div class="event__offer-selector">\n                  <input class="event__offer-checkbox  visually-hidden" id="event-offer-train-1" type="checkbox" name="event-offer-train">\n                  <label class="event__offer-label" for="event-offer-train-1">\n                    <span class="event__offer-title">Travel by train</span>\n                    &plus;&euro;&nbsp;\n                    <span class="event__offer-price">40</span>\n                  </label>\n                </div>\n              </div>\n            </section>\n\n            <section class="event__section  event__section--destination">\n              <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n              <p class="event__destination-description">${n}</p>\n\n              <div class="event__photos-container">\n                <div class="event__photos-tape">\n                  ${i}\n                </div>\n              </div>\n            </section>\n          </section>\n        </form>\n    `})(this.#s)}#o=e=>{e.preventDefault(),this.#a()}}const D=["Amsterdam","Chamonix","Geneva","Sofia"],E=["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Cras aliquet varius magna, non porta ligula feugiat eget.","Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra.","Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.","Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.","Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat.","Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus."],T=[{id:"001",basePrice:1100,dateFrom:"2019-07-10T22:55:56.845Z",dateTo:"2019-07-11T11:22:13.375Z",destination:"dest1",isFavorite:!1,offers:["offer1","offer2"],type:x(k)},{id:"002",basePrice:2100,dateFrom:"2019-07-12T22:55:56.845Z",dateTo:"2019-07-13T11:22:13.375Z",destination:"dest2",isFavorite:!0,offers:["offer3"],type:x(k)},{id:"003",basePrice:3100,dateFrom:"2019-07-14T22:55:56.845Z",dateTo:"2019-07-18T11:22:13.375Z",destination:"dest3",isFavorite:!1,offers:[""],type:x(k)}],P=[{id:"dest1",description:x(E),name:x(D),pictures:[{src:`https://loremflickr.com/248/152?random=${Math.random()}`,description:"Chamonix parliament building"}]},{id:"dest2",description:x(E),name:x(D),pictures:[{src:`https://loremflickr.com/248/152?random=${Math.random()}`,description:"Chamonix parliament building"}]},{id:"dest3",description:x(E),name:x(D),pictures:[{src:`https://loremflickr.com/248/152?random=${Math.random()}`,description:"Chamonix parliament building"}]}],O=()=>x(T),L=[...P],F=document.querySelector(".page-header").querySelector(".trip-controls__filters"),I=document.querySelector(".trip-events"),B=new class{#l=null;constructor(){this.#l=Array.from({length:3},O)}get points(){return this.#l}},H=new class{#c=null;constructor(e){this.#c=e}get byType(){return this.#c}}([{type:"Train",offers:[{id:"offer1",title:"Add luggage",price:30}]},{type:"Bus",offers:[{id:"offer2",title:"Switch to comfort class",price:100}]},{type:"Taxi",offers:[{id:"offer3",title:"Upgrade to a business class",price:320}]},{type:"Ship",offers:[{id:"offer3",title:"Add meal",price:15}]},{type:"Drive",offers:[{id:"offer3",title:"Choose seats",price:5}]},{type:"Flight",offers:[{id:"offer3",title:"Travel by train",price:40}]},{type:"Check-in",offers:[{id:"offer3",title:"Upgrade to a business class",price:320}]},{type:"Restaurant",offers:[{id:"offer3",title:"Upgrade to a business class",price:320}]},{type:"Sightseeing",offers:[{id:"offer3",title:"Upgrade to a business class",price:320}]}]),j=new class{#s=null;constructor(e){this.#s=e}get byId(){return this.#s}}(L),Z=new class{#u;#d;#f;#p;#v;#s;constructor({boardContainer:e,listPointsTripModel:t,offersModel:n,destinationsModel:s}){this.#u=e,this.#d=t,this.#f=n,this.#p=s}init(){this.#v=[...this.#d.points],this.#f=[...this.#f.byType],this.#s=[...this.#p.byId],e(new S,this.#u);for(let e=0;e<=this.#v.length;e++)this.#h(this.#s,this.#v[e],this.#f)}#h(n,s,i){const r=e=>{"Escape"===e.key&&(e.preventDefault(),l(),document.removeEventListener("keydown",r))},a=new A({destinations:n,point:s,offer:i,onPointClick:()=>{t(o,a),document.addEventListener("keydown",r)}}),o=new C({destinations:n,onSaveEdit:()=>{l(),document.removeEventListener("keydown",r)}});function l(){t(a,o)}e(a,this.#u)}}({boardContainer:I,listPointsTripModel:B,offersModel:H,destinationsModel:j});e(new class extends y{get template(){return'\n<form class="trip-filters" action="#" method="get">\n<div class="trip-filters__filter">\n  <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked>\n  <label class="trip-filters__filter-label" for="filter-everything">Everything</label>\n</div>\n\n<div class="trip-filters__filter">\n  <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">\n  <label class="trip-filters__filter-label" for="filter-future">Future</label>\n</div>\n\n<div class="trip-filters__filter">\n  <input id="filter-present" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="present">\n  <label class="trip-filters__filter-label" for="filter-present">Present</label>\n</div>\n\n<div class="trip-filters__filter">\n  <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past">\n  <label class="trip-filters__filter-label" for="filter-past">Past</label>\n</div>\n\n<button class="visually-hidden" type="submit">Accept filter</button>\n</form>\n'}},F),Z.init()})()})();
//# sourceMappingURL=bundle.f9489602fa1c1db1bc39.js.map