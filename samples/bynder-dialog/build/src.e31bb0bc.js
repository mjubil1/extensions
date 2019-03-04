// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"../node_modules/contentful-ui-extensions-sdk/dist/cf-extension-api.js":[function(require,module,exports) {
var define;
parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"pBGv":[function(require,module,exports) {

var t,e,n=module.exports={};function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===r||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}function u(t){if(e===clearTimeout)return clearTimeout(t);if((e===o||!e)&&clearTimeout)return e=clearTimeout,clearTimeout(t);try{return e(t)}catch(n){try{return e.call(null,t)}catch(n){return e.call(this,t)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:r}catch(n){t=r}try{e="function"==typeof clearTimeout?clearTimeout:o}catch(n){e=o}}();var c,s=[],l=!1,a=-1;function f(){l&&c&&(l=!1,c.length?s=c.concat(s):a=-1,s.length&&h())}function h(){if(!l){var t=i(f);l=!0;for(var e=s.length;e;){for(c=s,s=[];++a<e;)c&&c[a].run();a=-1,e=s.length}c=null,l=!1,u(t)}}function m(t,e){this.fun=t,this.array=e}function p(){}n.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];s.push(new m(t,e)),1!==s.length||l||i(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=p,n.addListener=p,n.once=p,n.off=p,n.removeListener=p,n.removeAllListeners=p,n.emit=p,n.prependListener=p,n.prependOnceListener=p,n.listeners=function(t){return[]},n.binding=function(t){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(t){throw new Error("process.chdir is not supported")},n.umask=function(){return 0};
},{}],"Zt7E":[function(require,module,exports) {
var define;
var global = arguments[3];
var process = require("process");
var t,e=arguments[3],r=require("process");!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof t&&t.amd?t(r):e.ES6Promise=r()}(this,function(){"use strict";function t(t){return"function"==typeof t}var n=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},o=0,i=void 0,s=void 0,u=function(t,e){p[o]=t,p[o+1]=e,2===(o+=2)&&(s?s(_):w())};var c="undefined"!=typeof window?window:void 0,a=c||{},f=a.MutationObserver||a.WebKitMutationObserver,l="undefined"==typeof self&&void 0!==r&&"[object process]"==={}.toString.call(r),h="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function v(){var t=setTimeout;return function(){return t(_,1)}}var p=new Array(1e3);function _(){for(var t=0;t<o;t+=2){(0,p[t])(p[t+1]),p[t]=void 0,p[t+1]=void 0}o=0}var d,y,m,b,w=void 0;function g(t,e){var r=this,n=new this.constructor(S);void 0===n[j]&&N(n);var o=r._state;if(o){var i=arguments[o-1];u(function(){return K(o,n,i,r._result)})}else k(r,n,t,e);return n}function A(t){if(t&&"object"==typeof t&&t.constructor===this)return t;var e=new this(S);return O(e,t),e}l?w=function(){return r.nextTick(_)}:f?(y=0,m=new f(_),b=document.createTextNode(""),m.observe(b,{characterData:!0}),w=function(){b.data=y=++y%2}):h?((d=new MessageChannel).port1.onmessage=_,w=function(){return d.port2.postMessage(0)}):w=void 0===c&&"function"==typeof require?function(){try{var t=Function("return this")().require("vertx");return void 0!==(i=t.runOnLoop||t.runOnContext)?function(){i(_)}:v()}catch(e){return v()}}():v();var j=Math.random().toString(36).substring(2);function S(){}var E=void 0,T=1,M=2,P={error:null};function x(t){try{return t.then}catch(e){return P.error=e,P}}function C(e,r,n){r.constructor===e.constructor&&n===g&&r.constructor.resolve===A?function(t,e){e._state===T?F(t,e._result):e._state===M?Y(t,e._result):k(e,void 0,function(e){return O(t,e)},function(e){return Y(t,e)})}(e,r):n===P?(Y(e,P.error),P.error=null):void 0===n?F(e,r):t(n)?function(t,e,r){u(function(t){var n=!1,o=function(t,e,r,n){try{t.call(e,r,n)}catch(o){return o}}(r,e,function(r){n||(n=!0,e!==r?O(t,r):F(t,r))},function(e){n||(n=!0,Y(t,e))},t._label);!n&&o&&(n=!0,Y(t,o))},t)}(e,r,n):F(e,r)}function O(t,e){var r,n;t===e?Y(t,new TypeError("You cannot resolve a promise with itself")):(n=typeof(r=e),null===r||"object"!==n&&"function"!==n?F(t,e):C(t,e,x(e)))}function q(t){t._onerror&&t._onerror(t._result),D(t)}function F(t,e){t._state===E&&(t._result=e,t._state=T,0!==t._subscribers.length&&u(D,t))}function Y(t,e){t._state===E&&(t._state=M,t._result=e,u(q,t))}function k(t,e,r,n){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+T]=r,o[i+M]=n,0===i&&t._state&&u(D,t)}function D(t){var e=t._subscribers,r=t._state;if(0!==e.length){for(var n=void 0,o=void 0,i=t._result,s=0;s<e.length;s+=3)n=e[s],o=e[s+r],n?K(r,n,o,i):o(i);t._subscribers.length=0}}function K(e,r,n,o){var i=t(n),s=void 0,u=void 0,c=void 0,a=void 0;if(i){if((s=function(t,e){try{return t(e)}catch(r){return P.error=r,P}}(n,o))===P?(a=!0,u=s.error,s.error=null):c=!0,r===s)return void Y(r,new TypeError("A promises callback cannot return that same promise."))}else s=o,c=!0;r._state!==E||(i&&c?O(r,s):a?Y(r,u):e===T?F(r,s):e===M&&Y(r,s))}var L=0;function N(t){t[j]=L++,t._state=void 0,t._result=void 0,t._subscribers=[]}var U=function(){function t(t,e){this._instanceConstructor=t,this.promise=new t(S),this.promise[j]||N(this.promise),n(e)?(this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?F(this.promise,this._result):(this.length=this.length||0,this._enumerate(e),0===this._remaining&&F(this.promise,this._result))):Y(this.promise,new Error("Array Methods must be provided an Array"))}return t.prototype._enumerate=function(t){for(var e=0;this._state===E&&e<t.length;e++)this._eachEntry(t[e],e)},t.prototype._eachEntry=function(t,e){var r=this._instanceConstructor,n=r.resolve;if(n===A){var o=x(t);if(o===g&&t._state!==E)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(r===W){var i=new r(S);C(i,t,o),this._willSettleAt(i,e)}else this._willSettleAt(new r(function(e){return e(t)}),e)}else this._willSettleAt(n(t),e)},t.prototype._settledAt=function(t,e,r){var n=this.promise;n._state===E&&(this._remaining--,t===M?Y(n,r):this._result[e]=r),0===this._remaining&&F(n,this._result)},t.prototype._willSettleAt=function(t,e){var r=this;k(t,void 0,function(t){return r._settledAt(T,e,t)},function(t){return r._settledAt(M,e,t)})},t}();var W=function(){function e(t){this[j]=L++,this._result=this._state=void 0,this._subscribers=[],S!==t&&("function"!=typeof t&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof e?function(t,e){try{e(function(e){O(t,e)},function(e){Y(t,e)})}catch(r){Y(t,r)}}(this,t):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return e.prototype.catch=function(t){return this.then(null,t)},e.prototype.finally=function(e){var r=this.constructor;return t(e)?this.then(function(t){return r.resolve(e()).then(function(){return t})},function(t){return r.resolve(e()).then(function(){throw t})}):this.then(e,e)},e}();return W.prototype.then=g,W.all=function(t){return new U(this,t).promise},W.race=function(t){var e=this;return n(t)?new e(function(r,n){for(var o=t.length,i=0;i<o;i++)e.resolve(t[i]).then(r,n)}):new e(function(t,e){return e(new TypeError("You must pass an array to race."))})},W.resolve=A,W.reject=function(t){var e=new this(S);return Y(e,t),e},W._setScheduler=function(t){s=t},W._setAsap=function(t){u=t},W._asap=u,W.polyfill=function(){var t=void 0;if(void 0!==e)t=e;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(o){throw new Error("polyfill failed because global object is unavailable in this environment")}var r=t.Promise;if(r){var n=null;try{n=Object.prototype.toString.call(r.resolve())}catch(o){}if("[object Promise]"===n&&!r.cast)return}t.Promise=W},W.Promise=W,W});
},{"process":"pBGv"}],"HrMX":[function(require,module,exports) {
function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t){return o(t)||r(t)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function r(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function o(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function i(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?u(e):n}function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function c(t,e,n){return(c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=a(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function a(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=f(t)););return t}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function p(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function h(t,e,n){return e&&y(t.prototype,e),n&&y(t,n),t}var b=function(){function t(){p(this,t),this._id=0,this._listeners={}}return h(t,[{key:"dispatch",value:function(){for(var t in this._listeners){var e;(e=this._listeners)[t].apply(e,arguments)}}},{key:"attach",value:function(t){var e=this;if("function"!=typeof t)throw new Error("listener function expected");var n=this._id++;return this._listeners[n]=t,function(){return delete e._listeners[n]}}}]),t}(),v="__private__memoized__arguments__",_=function(t){function n(){var t;p(this,n);for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];if(!r.length)throw new Error("Initial value to be memoized expected");return(t=i(this,f(n).call(this)))[v]=r,t}return l(n,b),h(n,[{key:"dispatch",value:function(){for(var t,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];this[v]=r,(t=c(f(n.prototype),"dispatch",this)).call.apply(t,[this].concat(r))}},{key:"attach",value:function(t){var r=c(f(n.prototype),"attach",this).call(this,t);return t.apply(void 0,e(this[v])),r}}]),n}();module.exports={Signal:b,MemoizedSignal:_};
},{}],"sCMk":[function(require,module,exports) {
function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function r(e,r,t){return r&&n(e.prototype,r),t&&n(e,t),e}function t(e){return i(e)||s(e)||a()}function a(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function s(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function i(e){if(Array.isArray(e)){for(var n=0,r=new Array(e.length);n<e.length;n++)r[n]=e[n];return r}}var o=require("es6-promise"),l=o.Promise,u=require("./signal"),c=u.Signal;function d(e,n){e.addEventListener("message",function r(a){var s=a.data;"connect"===s.method&&(e.removeEventListener("message",r),n.apply(void 0,t(s.params)))})}module.exports=function(e,n){d(e,function(r,t){var a=new f(r.id,e);n(a,r,t)})};var f=function(){function n(r,t){var a=this;e(this,n),this._messageHandlers={},this._responseHandlers={},this._send=h(r,t.parent),t.addEventListener("message",function(e){a._handleMessage(e.data)})}return r(n,[{key:"call",value:function(e){for(var n=this,r=arguments.length,t=new Array(r>1?r-1:0),a=1;a<r;a++)t[a-1]=arguments[a];var s=this._send(e,t);return new l(function(e,r){n._responseHandlers[s]={resolve:e,reject:r}})}},{key:"send",value:function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),t=1;t<n;t++)r[t-1]=arguments[t];this._send(e,r)}},{key:"addHandler",value:function(e,n){return e in this._messageHandlers||(this._messageHandlers[e]=new c),this._messageHandlers[e].attach(n)}},{key:"_handleMessage",value:function(e){if(e.method){var n=e.method,r=e.params,a=this._messageHandlers[n];a&&a.dispatch.apply(a,t(r))}else{var s=e.id,i=this._responseHandlers[s];if(!i)return;"result"in e?i.resolve(e.result):"error"in e&&i.reject(e.error),delete this._responseHandlers[s]}}}]),n}();function h(e,n){var r=0;return function(t,a){var s=r++;return n.postMessage({source:e,id:s,method:t,params:a},"*"),s}}
},{"es6-promise":"Zt7E","./signal":"HrMX"}],"Mq5l":[function(require,module,exports) {
var e=require("es6-promise"),n=e.Promise,r=require("./channel");function t(){var e={};return e.promise=new n(function(n){e.resolve=n}),e}module.exports=function(e,n){var o=t(),i=t();return i.promise.then(function(n){var r=e.document;r.addEventListener("focus",function(){return n.send("setActive",!0)},!0),r.addEventListener("blur",function(){return n.send("setActive",!1)},!0)}),r(e,function(r,t,s){i.resolve(r);var u=n(r,t,e);s.forEach(function(e){r._handleMessage(e)}),o.resolve(u)}),function(e){o.promise.then(e)}};
},{"es6-promise":"Zt7E","./channel":"sCMk"}],"GnXy":[function(require,module,exports) {
function e(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function a(e,a){for(var n=0;n<a.length;n++){var i=a[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(e,n,i){return n&&a(e.prototype,n),i&&a(e,i),e}var i=require("./signal"),l=i.MemoizedSignal;module.exports=function(){function a(n,i){var t=this;e(this,a),this.id=i.id,this.locale=i.locale,this.type=i.type,this.validations=i.validations,this._value=i.value,this._valueSignal=new l(this._value),this._isDisabledSignal=new l(void 0),this._schemaErrorsChangedSignal=new l(void 0),this._channel=n,n.addHandler("valueChanged",function(e,a,n){e!==t.id||a&&a!==t.locale||(t._value=n,t._valueSignal.dispatch(n))}),n.addHandler("isDisabledChanged",function(e){t._isDisabledSignal.dispatch(e)}),n.addHandler("schemaErrorsChanged",function(e){t._schemaErrorsChangedSignal.dispatch(e)})}return n(a,[{key:"getValue",value:function(){return this._value}},{key:"setValue",value:function(e){return this._value=e,this._valueSignal.dispatch(e),this._channel.call("setValue",this.id,this.locale,e)}},{key:"removeValue",value:function(){return this._value=void 0,this._channel.call("removeValue",this.id,this.locale)}},{key:"setInvalid",value:function(e){return this._channel.call("setInvalid",e,this.locale)}},{key:"onValueChanged",value:function(e){return this._valueSignal.attach(e)}},{key:"onIsDisabledChanged",value:function(e){return this._isDisabledSignal.attach(e)}},{key:"onSchemaErrorsChanged",value:function(e){return this._schemaErrorsChangedSignal.attach(e)}}]),a}();
},{"./signal":"HrMX"}],"daBI":[function(require,module,exports) {
function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var l=0;l<t.length;l++){var a=t[l];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function l(e,l,a){return l&&t(e.prototype,l),a&&t(e,a),e}var a=require("./field-locale");function i(e,t){if(!e._fieldLocales[t])throw new Error('Unknown locale "'.concat(t,'" for field "').concat(e.id,'"'))}module.exports=function(){function t(l,n,o){var u=this;e(this,t),this.id=n.id,this.locales=n.locales,this.type=n.type,this.validations=n.validations,this._defaultLocale=o,this._fieldLocales={},this.locales.forEach(function(e){var t=n.values[e];u._fieldLocales[e]=new a(l,{id:u.id,locale:e,value:t})}),i(this,o)}return l(t,[{key:"getValue",value:function(e){return this._getFieldLocale(e).getValue()}},{key:"setValue",value:function(e,t){return this._getFieldLocale(t).setValue(e)}},{key:"removeValue",value:function(e){return this.setValue(void 0,e)}},{key:"onValueChanged",value:function(e,t){return t||(t=e,e=void 0),this._getFieldLocale(e).onValueChanged(t)}},{key:"onIsDisabledChanged",value:function(e,t){return t||(t=e,e=void 0),this._getFieldLocale(e).onIsDisabledChanged(t)}},{key:"_getFieldLocale",value:function(e){return i(this,e=e||this._defaultLocale),this._fieldLocales[e]}}]),t}();
},{"./field-locale":"GnXy"}],"XV20":[function(require,module,exports) {
module.exports=function(e,t){var n=e.document,i=e.MutationObserver,r=function(){c.updateHeight()},u=new i(r),o=null,s=!1,c={startAutoResizer:function(){if(c.updateHeight(),s)return;s=!0,u.observe(n.body,{attributes:!0,childList:!0,subtree:!0,characterData:!0}),e.addEventListener("resize",r)},stopAutoResizer:function(){if(!s)return;s=!1,u.disconnect(),e.removeEventListener("resize",r)},updateHeight:function(e){null==e&&(e=Math.ceil(n.documentElement.getBoundingClientRect().height));e!==o&&(t.send("setHeight",e),o=e)}};return c};
},{}],"97BZ":[function(require,module,exports) {
var n=require("./signal"),e=n.MemoizedSignal;module.exports=function(n,r,t,i){var u=r.sys,a=new e(u);return n.addHandler("sysChanged",function(n){u=n,a.dispatch(u)}),{getSys:function(){return u},onSysChanged:function(n){return a.attach(n)},fields:t.reduce(function(n,e){return n[e.id]=i(e),n},{})}};
},{"./signal":"HrMX"}],"iabO":[function(require,module,exports) {
var e=["getContentType","getEntry","getEntrySnapshots","getAsset","getPublishedEntries","getPublishedAssets","getContentTypes","getEntries","getAssets","createContentType","createEntry","createAsset","updateContentType","updateEntry","updateAsset","deleteContentType","deleteEntry","deleteAsset","publishEntry","publishAsset","unpublishEntry","unpublishAsset","archiveEntry","archiveAsset","unarchiveEntry","unarchiveAsset","processAsset","getUsers"];module.exports=function(t){var s={};return e.forEach(function(e){s[e]=function(){for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return t.call("callSpaceMethod",e,n)}}),s};
},{}],"6GEt":[function(require,module,exports) {
function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(t)}module.exports=function(t){return{openAlert:e.bind(null,"alert"),openConfirm:e.bind(null,"confirm"),openPrompt:e.bind(null,"prompt"),openExtension:e.bind(null,"extension"),selectSingleEntry:l.bind(null,"Entry",!1),selectSingleAsset:l.bind(null,"Asset",!1),selectMultipleEntries:l.bind(null,"Entry",!0),selectMultipleAssets:l.bind(null,"Asset",!0)};function e(n,e){return t.call("openDialog",n,o(e))}function l(n,e,l){return(l=o(l)).entityType=n,l.multiple=e,t.call("openDialog","entitySelector",l)}function o(t){return"object"===n(t)&&null!==t&&!Array.isArray(t)?t:{}}};
},{}],"Y2Q9":[function(require,module,exports) {
function t(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),o.forEach(function(e){n(t,e,r[e])})}return t}function n(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}module.exports=function(n){return{openEntry:function(e,r){return n.call("navigateToContentEntity",t({},r,{entityType:"Entry",id:e}))},openNewEntry:function(e,r){return n.call("navigateToContentEntity",t({},r,{entityType:"Entry",id:null,contentTypeId:e}))},openAsset:function(e,r){return n.call("navigateToContentEntity",t({},r,{entityType:"Asset",id:e}))},openNewAsset:function(e){return n.call("navigateToContentEntity",t({},e,{entityType:"Asset",id:null}))}}};
},{}],"CHnp":[function(require,module,exports) {
module.exports={LOCATION_ENTRY_FIELD:"entry-field",LOCATION_ENTRY_FIELD_SIDEBAR:"entry-field-sidebar",LOCATION_ENTRY_SIDEBAR:"entry-sidebar",LOCATION_DIALOG:"dialog"};
},{}],"LVu9":[function(require,module,exports) {
var e;function r(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.forEach(function(r){n(e,r,t[r])})}return e}function n(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}var t=require("./field"),o=require("./field-locale"),i=require("./window"),u=require("./entry"),a=require("./space"),c=require("./dialogs"),l=require("./navigator"),s=require("./locations"),f=[d,y,p],O=(n(e={},s.LOCATION_ENTRY_FIELD,f),n(e,s.LOCATION_ENTRY_FIELD_SIDEBAR,f),n(e,s.LOCATION_ENTRY_SIDEBAR,[d,y]),n(e,s.LOCATION_DIALOG,[d,b]),e);function d(e,r,n){var t=r.user,o=r.parameters,u=r.locales;return{location:{is:function(e){return(r.location||s.LOCATION_ENTRY_FIELD)===e}},user:t,parameters:o,locales:{available:u.available,default:u.default,names:u.names},space:a(e),window:i(n,e),dialogs:c(e),navigator:l(e),notifier:{success:function(r){return e.send("notify",{type:"success",message:r})},error:function(r){return e.send("notify",{type:"error",message:r})}}}}function y(e,r){var n=r.locales,o=r.contentType,i=r.entry,a=r.fieldInfo;return{contentType:o,entry:u(e,i,a,function(r){return new t(e,r,n.default)})}}function p(e,r){var n=r.field;return{field:new o(e,n)}}function b(e){return{close:function(r){return e.send("closeDialog",r)}}}module.exports=function(e,n,t){return(O[n.location]||f).reduce(function(o,i){return r({},o,i(e,n,t))},{})};
},{"./field":"daBI","./field-locale":"GnXy","./window":"XV20","./entry":"97BZ","./space":"iabO","./dialogs":"6GEt","./navigator":"Y2Q9","./locations":"CHnp"}],"Focm":[function(require,module,exports) {
var i=require("./initialize"),e=require("./api"),r=require("./locations");module.exports={init:i(window,e),locations:r};
},{"./initialize":"Mq5l","./api":"LVu9","./locations":"CHnp"}]},{},["Focm"], "contentfulExtension")

},{}],"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"index.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"index.js":[function(require,module,exports) {
"use strict";

var _contentfulUiExtensionsSdk = require("contentful-ui-extensions-sdk");

require("./index.css");

(0, _contentfulUiExtensionsSdk.init)(function (api) {
  console.log("alex"); // console.log(
  //   "test",
  //   api.location(),
  //   api.location.is(locations.LOCATION_ENTRY_FIELD)
  // )

  if (api.location.is(_contentfulUiExtensionsSdk.locations.LOCATION_ENTRY_FIELD)) {
    console.log("field");
  }

  if (api.location.is(_contentfulUiExtensionsSdk.locations.LOCATION_DIALOG)) {
    console.log("dialog");
  }

  if (api.location.is(_contentfulUiExtensionsSdk.locations.LOCATION_ENTRY_SIDEBAR)) {
    console.log("sidebar");
  }

  if (api.location.is(_contentfulUiExtensionsSdk.locations.LOCATION_ENTRY_FIELD_SIDEBAR)) {
    console.log("field sidebar");
  }

  var assetsListsContainer = document.getElementById("selection");
  var assetsList = document.getElementById("importedAssets");
  renderIds(api.field.getValue());
  var isOpen = false;
  document.addEventListener("BynderAddMedia", function (e) {
    isOpen = false;
    var assetIds = e.detail.map(function (asset) {
      return asset.id;
    });
    renderIds(assetIds);
    api.field.setValue(assetIds);
    api.window.updateHeight();
  });
  document.getElementById("bynder-compactview").addEventListener("click", function () {// if (!isOpen) {
    //   isOpen = true
    //   api.window.updateHeight(500)
    // }
  });

  function renderIds(ids) {
    if (!Array.isArray(ids) || ids.length < 1) {
      assetsListsContainer.style.display = "none";
      api.window.updateHeight();
      return;
    }

    assetsList.innerHTML = '<ul style="clear:both">';
    ids.map(function (item) {
      assetsList.innerHTML += "<li>" + item + "</li>";
    });
    assetsList.innerHTML += "</ul>";
    assetsListsContainer.style.display = "block";
    api.window.updateHeight();
  }
});
},{"contentful-ui-extensions-sdk":"../node_modules/contentful-ui-extensions-sdk/dist/cf-extension-api.js","./index.css":"index.css"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57746" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.map