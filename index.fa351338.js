!function(){function t(t){return t&&t.__esModule?t.default:t}var e={};function n(t,e,n,r,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,s,"next",t)}function s(t){n(a,o,i,c,s,"throw",t)}c(void 0)}))}};var r={},o=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),a=new N(r||[]);return i._invoke=function(t,e,n){var r=f;return function(o,i){if(r===p)throw new Error("Generator is already running");if(r===y){if("throw"===o)throw i;return S()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=j(a,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var s=l(t,e,n);if("normal"===s.type){if(r=n.done?y:h,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=y,n.method="throw",n.arg=s.arg)}}}(t,n,a),i}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f="suspendedStart",h="suspendedYield",p="executing",y="completed",v={};function d(){}function m(){}function g(){}var _={};s(_,i,(function(){return this}));var w=Object.getPrototypeOf,b=w&&w(w(P([])));b&&b!==n&&r.call(b,i)&&(_=b);var L=g.prototype=d.prototype=Object.create(_);function x(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function n(o,i,a,c){var s=l(t[o],t,i);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(f).then((function(t){u.value=t,a(u)}),(function(t){return n("throw",t,a,c)}))}c(s.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function j(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,j(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function P(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:S}}function S(){return{value:e,done:!0}}return m.prototype=g,s(L,"constructor",g),s(g,"constructor",m),m.displayName=s(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s(t,c,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},x(E.prototype),s(E.prototype,a,(function(){return this})),t.AsyncIterator=E,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new E(u(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(L),s(L,c,"Generator"),s(L,i,(function(){return this})),s(L,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=P,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;k(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:P(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(r);try{regeneratorRuntime=o}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}var i="https://avatar-app.herokuapp.com/api/",a="characters/",c="",s=3,u=document.querySelector(".form"),l=document.querySelector(".screen"),f=document.querySelector("#previous"),h=document.querySelector("#next"),p=document.querySelector("#characterId");function y(){(function(){return v.apply(this,arguments)})().then((function(t){!function(t){if(null===t)return void alert("The number is too low or too high. Please, enter number 1 to 200");var e=t.bending.map((function(t){return t.name})).join(", ");c='<img class="screen__image" src="'.concat(t.image,'" alt="').concat(t.name,'" />\n        <ul class="screen__list list">\n          <li class="screen__item">\n            <p>Name: <span class="screen__info">').concat(t.name,'</span></p>\n          </li>\n          <li class="screen__item">\n            <p>Id: <span class="screen__info">').concat(t.id,'</span></p>\n          </li>\n          <li class="screen__item">\n            <p>Age: <span class="screen__info">').concat(t.age,'</span></p>\n          </li>\n          <li class="screen__item">\n            <p>Born: <span class="screen__info">').concat(t.born,'</span></p>\n          </li>\n          <li class="screen__item">\n            <p>Gender: <span class="screen__info">').concat(t.gender,'</span></p>\n          </li>\n          <li class="screen__item">\n            <p>Enthnicity: <span class="screen__info">').concat(t.ethnicity.name,'</span></p>\n          </li>\n          <li class="screen__item">\n            <p>Nationality: <span class="screen__info">').concat(t.nationality.name,'</span></p>\n          </li>\n          <li class="screen__item">\n            <p>\n              Bending:\n              <span class="screen__info">').concat(e,"</span>\n            </p>\n          </li>\n        </ul>")}(t),l.insertAdjacentHTML("beforeend",c)}))}function v(){return(v=t(e)(t(r).mark((function e(){var n,o;return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(i).concat(a).concat(s));case 3:return n=t.sent,t.next=6,n.json();case 6:return o=t.sent,t.abrupt("return",o);case 10:t.prev=10,t.t0=t.catch(0),alert("Please, enter Number Id",t.t0.message);case 13:case"end":return t.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function d(){c="",l.innerHTML=""}u.addEventListener("submit",(function(t){t.preventDefault(),d(),s=Number(t.currentTarget.elements.query.value),y()})),f.addEventListener("click",(function(){s-=1,console.log(s),p.value=s,d(),y()})),h.addEventListener("click",(function(){s+=1,console.log(s),p.value=s,d(),y()}))}();
//# sourceMappingURL=index.fa351338.js.map
