!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=419)}({152:function(e,t){e.exports='.sa-gamepad-container {\n  margin-right: 0.2rem;\n}\n\n.sa-gamepad-spacer {\n  display: flex;\n  width: 100%;\n  justify-content: flex-end;\n}\n\n.sa-gamepad-popup-outer {\n  /* above fullscreen */\n  z-index: 99999;\n}\n.sa-gamepad-popup {\n  box-sizing: border-box;\n  width: 700px;\n  max-height: min(800px, 85vh);\n  height: 100%;\n  max-width: 85%;\n  margin: 50px auto;\n  display: flex;\n  flex-direction: column;\n}\n.sa-gamepad-popup-content {\n  background-color: white;\n  padding: 1.5rem 2.25rem;\n  height: 100%;\n  overflow-y: auto;\n}\n\n.sa-gamepad-popup [class*="modal_header-item-title"] {\n  margin: 0 -20rem 0 0;\n}\n\n.sa-gamepad-cursor {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 9999;\n  user-select: none;\n  pointer-events: none;\n  will-change: transform;\n  image-rendering: optimizeSpeed;\n  image-rendering: crisp-edges;\n  image-rendering: pixelated;\n}\n.sa-gamepad-cursor-down {\n  filter: invert(100%);\n}\n\n.sa-gamepad-small .sa-gamepad-container[data-editor-mode="editor"] {\n  display: none !important;\n}\n\n.sa-gamepad-hide-cursor {\n  cursor: none;\n}\n\n.sa-gamepad-browser-support-warning {\n  font-weight: bold;\n  margin-bottom: 10px;\n}\n\n.sa-gamepad-store-settings {\n  display: none;\n}\n.sa-gamepad-store-settings > input {\n  margin-right: 4px;\n}\n.sa-gamepad-has-controller .sa-gamepad-store-settings {\n  display: block;\n}\n'},16:function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var l,u=[],c=!1,d=-1;function p(){c&&l&&(c=!1,l.length?u=l.concat(u):d=-1,u.length&&h())}function h(){if(!c){var e=a(p);c=!0;for(var t=u.length;t;){for(l=u,u=[];++d<t;)l&&l[d].run();d=-1,t=u.length}l=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function g(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new g(e,t)),1!==u.length||c||a(h)},g.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},24:function(e,t,n){"use strict";(function(e,n){function r(e,t,...n){if(!e)throw new TypeError(o(t,n))}function o(e,t){let n=0;return e.replace(/%[os]/gu,()=>i(t[n++]))}function i(e){return"object"!=typeof e||null===e?String(e):Object.prototype.toString.call(e)}let s;Object.defineProperty(t,"__esModule",{value:!0});const a="undefined"!=typeof window?window:"undefined"!=typeof self?self:void 0!==n?n:"undefined"!=typeof globalThis?globalThis:void 0;let l;class u{constructor(e,t){this.code=e,this.message=t}warn(...e){var t;try{if(l)return void l({...this,args:e});const n=(null!==(t=(new Error).stack)&&void 0!==t?t:"").replace(/^(?:.+?\n){2}/gu,"\n");console.warn(this.message,...e,n)}catch(e){}}}const c=new u("W01","Unable to initialize event under dispatching."),d=new u("W02","Assigning any falsy value to 'cancelBubble' property has no effect."),p=new u("W03","Assigning any truthy value to 'returnValue' property has no effect."),h=new u("W04","Unable to preventDefault on non-cancelable events."),g=new u("W05","Unable to preventDefault inside passive event listener invocation."),m=new u("W06","An event listener wasn't added because it has been added already: %o, %o"),f=new u("W07","The %o option value was abandoned because the event listener wasn't added as duplicated."),v=new u("W08","The 'callback' argument must be a function or an object that has 'handleEvent' method: %o"),y=new u("W09","Event attribute handler must be a function: %o");class w{static get NONE(){return b}static get CAPTURING_PHASE(){return A}static get AT_TARGET(){return E}static get BUBBLING_PHASE(){return T}constructor(e,t){Object.defineProperty(this,"isTrusted",{value:!1,enumerable:!0});const n=null!=t?t:{};C.set(this,{type:String(e),bubbles:Boolean(n.bubbles),cancelable:Boolean(n.cancelable),composed:Boolean(n.composed),target:null,currentTarget:null,stopPropagationFlag:!1,stopImmediatePropagationFlag:!1,canceledFlag:!1,inPassiveListenerFlag:!1,dispatchFlag:!1,timeStamp:Date.now()})}get type(){return P(this).type}get target(){return P(this).target}get srcElement(){return P(this).target}get currentTarget(){return P(this).currentTarget}composedPath(){const e=P(this).currentTarget;return e?[e]:[]}get NONE(){return b}get CAPTURING_PHASE(){return A}get AT_TARGET(){return E}get BUBBLING_PHASE(){return T}get eventPhase(){return P(this).dispatchFlag?2:0}stopPropagation(){P(this).stopPropagationFlag=!0}get cancelBubble(){return P(this).stopPropagationFlag}set cancelBubble(e){e?P(this).stopPropagationFlag=!0:d.warn()}stopImmediatePropagation(){const e=P(this);e.stopPropagationFlag=e.stopImmediatePropagationFlag=!0}get bubbles(){return P(this).bubbles}get cancelable(){return P(this).cancelable}get returnValue(){return!P(this).canceledFlag}set returnValue(e){e?p.warn():R(P(this))}preventDefault(){R(P(this))}get defaultPrevented(){return P(this).canceledFlag}get composed(){return P(this).composed}get isTrusted(){return!1}get timeStamp(){return P(this).timeStamp}initEvent(e,t=!1,n=!1){const r=P(this);r.dispatchFlag?c.warn():C.set(this,{...r,type:String(e),bubbles:Boolean(t),cancelable:Boolean(n),target:null,currentTarget:null,stopPropagationFlag:!1,stopImmediatePropagationFlag:!1,canceledFlag:!1})}}const b=0,A=1,E=2,T=3,C=new WeakMap;function P(e,t="this"){const n=C.get(e);return r(null!=n,"'%s' must be an object that Event constructor created, but got another one: %o",t,e),n}function R(e){e.inPassiveListenerFlag?g.warn():e.cancelable?e.canceledFlag=!0:h.warn()}Object.defineProperty(w,"NONE",{enumerable:!0}),Object.defineProperty(w,"CAPTURING_PHASE",{enumerable:!0}),Object.defineProperty(w,"AT_TARGET",{enumerable:!0}),Object.defineProperty(w,"BUBBLING_PHASE",{enumerable:!0});const O=Object.getOwnPropertyNames(w.prototype);for(let e=0;e<O.length;++e)"constructor"!==O[e]&&Object.defineProperty(w.prototype,O[e],{enumerable:!0});let _;void 0!==a&&void 0!==a.Event&&Object.setPrototypeOf(w.prototype,a.Event.prototype);const x={INDEX_SIZE_ERR:1,DOMSTRING_SIZE_ERR:2,HIERARCHY_REQUEST_ERR:3,WRONG_DOCUMENT_ERR:4,INVALID_CHARACTER_ERR:5,NO_DATA_ALLOWED_ERR:6,NO_MODIFICATION_ALLOWED_ERR:7,NOT_FOUND_ERR:8,NOT_SUPPORTED_ERR:9,INUSE_ATTRIBUTE_ERR:10,INVALID_STATE_ERR:11,SYNTAX_ERR:12,INVALID_MODIFICATION_ERR:13,NAMESPACE_ERR:14,INVALID_ACCESS_ERR:15,VALIDATION_ERR:16,TYPE_MISMATCH_ERR:17,SECURITY_ERR:18,NETWORK_ERR:19,ABORT_ERR:20,URL_MISMATCH_ERR:21,QUOTA_EXCEEDED_ERR:22,TIMEOUT_ERR:23,INVALID_NODE_TYPE_ERR:24,DATA_CLONE_ERR:25};function S(e){const t=Object.keys(x);for(let n=0;n<t.length;++n){const r=t[n],o=x[r];Object.defineProperty(e,r,{get:()=>o,configurable:!0,enumerable:!0})}}class k extends w{static wrap(e){return new(function e(t){const n=Object.getPrototypeOf(t);if(null==n)return k;let r=L.get(n);null==r&&(r=function(e,t){class n extends e{}const r=Object.keys(t);for(let e=0;e<r.length;++e)Object.defineProperty(n.prototype,r[e],j(t,r[e]));return n}(e(n),n),L.set(n,r));return r}(e))(e)}constructor(e){super(e.type,{bubbles:e.bubbles,cancelable:e.cancelable,composed:e.composed}),e.cancelBubble&&super.stopPropagation(),e.defaultPrevented&&super.preventDefault(),D.set(this,{original:e});const t=Object.keys(e);for(let n=0;n<t.length;++n){const r=t[n];r in this||Object.defineProperty(this,r,j(e,r))}}stopPropagation(){super.stopPropagation();const{original:e}=I(this);"stopPropagation"in e&&e.stopPropagation()}get cancelBubble(){return super.cancelBubble}set cancelBubble(e){super.cancelBubble=e;const{original:t}=I(this);"cancelBubble"in t&&(t.cancelBubble=e)}stopImmediatePropagation(){super.stopImmediatePropagation();const{original:e}=I(this);"stopImmediatePropagation"in e&&e.stopImmediatePropagation()}get returnValue(){return super.returnValue}set returnValue(e){super.returnValue=e;const{original:t}=I(this);"returnValue"in t&&(t.returnValue=e)}preventDefault(){super.preventDefault();const{original:e}=I(this);"preventDefault"in e&&e.preventDefault()}get timeStamp(){const{original:e}=I(this);return"timeStamp"in e?e.timeStamp:super.timeStamp}}const D=new WeakMap;function I(e){const t=D.get(e);return r(null!=t,"'this' is expected an Event object, but got",e),t}const L=new WeakMap;function j(e,t){const n=Object.getOwnPropertyDescriptor(e,t);return{get(){const e=I(this).original,n=e[t];return"function"==typeof n?n.bind(e):n},set(e){I(this).original[t]=e},configurable:n.configurable,enumerable:n.enumerable}}function F(e){return 1==(1&e.flags)}function N(e){return 2==(2&e.flags)}function B(e){return 4==(4&e.flags)}function M(e){return 8==(8&e.flags)}function U({callback:t},n,r){try{"function"==typeof t?t.call(n,r):"function"==typeof t.handleEvent&&t.handleEvent(r)}catch(t){!function(t){try{const n=t instanceof Error?t:new Error(i(t));if(s)return void s(n);if("function"==typeof dispatchEvent&&"function"==typeof ErrorEvent)dispatchEvent(new ErrorEvent("error",{error:n,message:n.message}));else if(void 0!==e&&"function"==typeof e.emit)return void e.emit("uncaughtException",n);console.error(n)}catch(e){}}(t)}}function Z({listeners:e},t,n){for(let r=0;r<e.length;++r)if(e[r].callback===t&&F(e[r])===n)return r;return-1}function H(e,t,n,r,o,i){let s;i&&(s=W.bind(null,e,t,n),i.addEventListener("abort",s));const a=function(e,t,n,r,o,i){return{callback:e,flags:(t?1:0)|(n?2:0)|(r?4:0),signal:o,signalListener:i}}(t,n,r,o,i,s);return e.cow?(e.cow=!1,e.listeners=[...e.listeners,a]):e.listeners.push(a),a}function W(e,t,n){const r=Z(e,t,n);return-1!==r&&G(e,r)}function G(e,t,n=!1){const r=e.listeners[t];return function(e){e.flags|=8}(r),r.signal&&r.signal.removeEventListener("abort",r.signalListener),e.cow&&!n?(e.cow=!1,e.listeners=e.listeners.filter((e,n)=>n!==t),!1):(e.listeners.splice(t,1),!0)}function V(e,t){var n;return null!==(n=e[t])&&void 0!==n?n:e[t]={attrCallback:void 0,attrListener:void 0,cow:!1,listeners:[]}}L.set(Object.prototype,k),void 0!==a&&void 0!==a.Event&&L.set(a.Event.prototype,k);class Y{constructor(){z.set(this,Object.create(null))}addEventListener(e,t,n){const r=K(this),{callback:o,capture:i,once:s,passive:a,signal:l,type:u}=function(e,t,n){var r;if(X(t),"object"==typeof n&&null!==n)return{type:String(e),callback:null!=t?t:void 0,capture:Boolean(n.capture),passive:Boolean(n.passive),once:Boolean(n.once),signal:null!==(r=n.signal)&&void 0!==r?r:void 0};return{type:String(e),callback:null!=t?t:void 0,capture:Boolean(n),passive:!1,once:!1,signal:void 0}}(e,t,n);if(null==o||(null==l?void 0:l.aborted))return;const c=V(r,u),d=Z(c,o,i);-1===d?H(c,o,i,a,s,l):function(e,t,n,r){m.warn(F(e)?"capture":"bubble",e.callback),N(e)!==t&&f.warn("passive");B(e)!==n&&f.warn("once");e.signal!==r&&f.warn("signal")}(c.listeners[d],a,s,l)}removeEventListener(e,t,n){const r=K(this),{callback:o,capture:i,type:s}=function(e,t,n){if(X(t),"object"==typeof n&&null!==n)return{type:String(e),callback:null!=t?t:void 0,capture:Boolean(n.capture)};return{type:String(e),callback:null!=t?t:void 0,capture:Boolean(n)}}(e,t,n),a=r[s];null!=o&&a&&W(a,o,i)}dispatchEvent(e){const t=K(this)[String(e.type)];if(null==t)return!0;const n=e instanceof w?e:k.wrap(e),r=P(n,"event");if(r.dispatchFlag)throw o="This event has been in dispatching.",a.DOMException?new a.DOMException(o,"InvalidStateError"):(null==_&&(_=class e extends Error{constructor(t){super(t),Error.captureStackTrace&&Error.captureStackTrace(this,e)}get code(){return 11}get name(){return"InvalidStateError"}},Object.defineProperties(_.prototype,{code:{enumerable:!0},name:{enumerable:!0}}),S(_),S(_.prototype)),new _(o));var o;if(r.dispatchFlag=!0,r.target=r.currentTarget=this,!r.stopPropagationFlag){const{cow:e,listeners:o}=t;t.cow=!0;for(let i=0;i<o.length;++i){const s=o[i];if(!M(s)&&(B(s)&&G(t,i,!e)&&(i-=1),r.inPassiveListenerFlag=N(s),U(s,this,n),r.inPassiveListenerFlag=!1,r.stopImmediatePropagationFlag))break}e||(t.cow=!1)}return r.target=null,r.currentTarget=null,r.stopImmediatePropagationFlag=!1,r.stopPropagationFlag=!1,r.dispatchFlag=!1,!r.canceledFlag}}const z=new WeakMap;function K(e,t="this"){const n=z.get(e);return r(null!=n,"'%s' must be an object that EventTarget constructor created, but got another one: %o",t,e),n}function X(e){if("function"!=typeof e&&("object"!=typeof e||null===e||"function"!=typeof e.handleEvent)){if(null!=e&&"object"!=typeof e)throw new TypeError(o(v.message,[e]));v.warn(e)}}const J=Object.getOwnPropertyNames(Y.prototype);for(let e=0;e<J.length;++e)"constructor"!==J[e]&&Object.defineProperty(Y.prototype,J[e],{enumerable:!0});function Q(e,t){var n,r;return null!==(r=null===(n=K(e,"target")[t])||void 0===n?void 0:n.attrCallback)&&void 0!==r?r:null}function $(e,t,n){null!=n&&"function"!=typeof n&&y.warn(n),"function"==typeof n||"object"==typeof n&&null!==n?function(e,t,n){const r=V(K(e,"target"),String(t));r.attrCallback=n,null==r.attrListener&&(r.attrListener=H(r,function(e){return function(t){const n=e.attrCallback;"function"==typeof n&&n.call(this,t)}}(r),!1,!1,!1,void 0))}(e,t,n):function(e,t){const n=K(e,"target")[String(t)];n&&n.attrListener&&(W(n,n.attrListener.callback,!1),n.attrCallback=n.attrListener=void 0)}(e,t)}function q(e,t,n){Object.defineProperty(e,"on"+t,{get(){return Q(this,t)},set(e){$(this,t,e)},configurable:!0,enumerable:!0})}void 0!==a&&void 0!==a.EventTarget&&Object.setPrototypeOf(Y.prototype,a.EventTarget.prototype),t.Event=w,t.EventTarget=Y,t.default=Y,t.defineCustomEventTarget=function(...e){class t extends Y{}for(let n=0;n<e.length;++n)q(t.prototype,e[n]);return t},t.defineEventAttribute=q,t.getEventAttributeValue=Q,t.setErrorHandler=function(e){r("function"==typeof e||void 0===e,"The error handler must be a function or undefined, but got %o.",e),s=e},t.setEventAttributeValue=$,t.setWarningHandler=function(e){r("function"==typeof e||void 0===e,"The warning handler must be a function or undefined, but got %o.",e),l=e}}).call(this,n(16),n(5))},419:function(e,t,n){"use strict";n.r(t);var r=n(24);let o=window.console;const i=[{type:"key",high:"ArrowRight",low:"ArrowLeft",deadZone:.5},{type:"key",high:"ArrowDown",low:"ArrowUp",deadZone:.5}],s=[{type:"key",high:"d",low:"a",deadZone:.5},{type:"key",high:"s",low:"w",deadZone:.5}],a=[{type:"virtual_cursor",high:"+x",low:"-x",sensitivity:.6,deadZone:.2},{type:"virtual_cursor",high:"-y",low:"+y",sensitivity:.6,deadZone:.2}],l=e=>{if("object"!=typeof e||!e)return o.warn("invalid mapping",e),{type:"key",high:null,low:null};const t=Object.assign({},e);if("key"===t.type)void 0===t.deadZone&&(t.deadZone=.5),void 0===t.high&&(t.high=""),void 0===t.low&&(t.low="");else if("mousedown"===t.type)void 0===t.deadZone&&(t.deadZone=.5);else{if("virtual_cursor"!==t.type)return o.warn("unknown mapping type",t.type),{type:"key",high:null,low:null};void 0===t.high&&(t.high=""),void 0===t.low&&(t.low=""),void 0===t.sensitivity&&(t.sensitivity=10),void 0===t.deadZone&&(t.deadZone=.5)}return t},u=(e,t)=>{for(;e.length<t;)e.push({type:"key",high:null,low:null});return e.length=t,e},c=e=>({usesArrows:e.has("ArrowUp")||e.has("ArrowDown")||e.has("ArrowRight")||e.has("ArrowLeft"),usesWASD:e.has("w")&&e.has("s")||e.has("a")&&e.has("d")}),d=e=>`${e.id} (${e.index})`;class p{constructor(e,t){this.gamepad=e,this.gamepadLib=t,this.buttonMappings=this.getDefaultButtonMappings().map(l),this.axesMappings=this.getDefaultAxisMappings().map(l)}getDefaultButtonMappings(){let e;if(this.gamepadLib.hints.importedSettings)e=this.gamepadLib.hints.importedSettings.buttons;else{const t=this.gamepadLib.hints.usedKeys,n=new Set,{usesArrows:r,usesWASD:o}=c(t);o&&(n.add("w"),n.add("a"),n.add("s"),n.add("d"));const i=["p","q","r"],s=[" ","Enter","e","f","z","x","c",...Array.from(t).filter(e=>1===e.length&&!i.includes(e))],a=e=>{for(const r of e)if(t.has(r)&&!n.has(r))return n.add(r),r;return null},l=()=>a(s),u=()=>a(i),d=()=>r||!o?"ArrowUp":"w",p=()=>r||!o?"ArrowDown":"s",h=()=>r||!o?"ArrowRight":"d",g=()=>r||!o?"ArrowLeft":"a",m=(()=>r&&t.has("ArrowUp")?"ArrowUp":o&&t.has("w")?"w":a(s))();let f=l(),v=l(),y=l();!m||f||v||y||(f=m,v=m,y=m),m&&f&&!v&&!y&&(v=m,y=f),e=[],e[0]={type:"key",high:m},e[1]={type:"key",high:f},e[2]={type:"key",high:v},e[3]={type:"key",high:y},e[4]={type:"mousedown"},e[5]={type:"mousedown"},e[6]={type:"mousedown"},e[7]={type:"mousedown"},e[9]={type:"key",high:u()},e[8]={type:"key",high:u()},e[10]={type:"key",high:null,low:null},e[11]={type:"key",high:null,low:null},e[12]={type:"key",high:d()},e[13]={type:"key",high:p()},e[14]={type:"key",high:g()},e[15]={type:"key",high:h()}}return u(e,this.gamepad.buttons.length)}getDefaultAxisMappings(){let e=[];if(this.gamepadLib.hints.importedSettings)e=this.gamepadLib.hints.importedSettings.axes;else if(4===this.gamepad.axes.length){const t=this.gamepadLib.hints.usedKeys,{usesArrows:n,usesWASD:r}=c(t);r?(e.push(s[0]),e.push(s[1])):n?(e.push(i[0]),e.push(i[1])):(e.push(a[0]),e.push(a[1])),e.push(a[0]),e.push(a[1])}return u(e,this.gamepad.axes.length)}}class h extends r.EventTarget{constructor(){super(),this.gamepads=new Map,this.handleConnect=this.handleConnect.bind(this),this.handleDisconnect=this.handleDisconnect.bind(this),this.update=this.update.bind(this),this.animationFrame=null,this.currentTime=null,this.deltaTime=0,this.virtualCursor={x:0,y:0,maxX:1/0,minX:-1/0,maxY:1/0,minY:-1/0,modified:!1},this._editor=null,this.connectCallbacks=[],this.hints={usedKeys:new Set,importedSettings:null,generated:!1},this.keysPressedThisFrame=new Set,this.oldKeysPressed=new Set,this.mouseDownThisFrame=!1,this.oldMouseDown=!1,this.addEventHandlers()}addEventHandlers(){window.addEventListener("gamepadconnected",this.handleConnect),window.addEventListener("gamepaddisconnected",this.handleDisconnect)}removeEventHandlers(){window.removeEventListener("gamepadconnected",this.handleConnect),window.removeEventListener("gamepaddisconnected",this.handleDisconnect)}gamepadConnected(){return this.gamepads.size>0?Promise.resolve():new Promise(e=>{this.connectCallbacks.push(e)})}ensureHintsGenerated(){this.hints.generated||(this.getHintsLazily&&Object.assign(this.hints,this.getHintsLazily()),this.hints.generated=!0)}handleConnect(e){this.ensureHintsGenerated();for(const e of this.connectCallbacks)e();this.connectCallbacks=[];const t=e.gamepad,n=d(t);o.log("connected",t);const r=new p(t,this);this.gamepads.set(n,r),null===this.animationFrame&&(this.animationFrame=requestAnimationFrame(this.update)),this.dispatchEvent(new CustomEvent("gamepadconnected",{detail:r}))}handleDisconnect(e){const t=e.gamepad,n=d(t);o.log("disconnected",t);const r=this.gamepads.get(n);this.gamepads.delete(n),this.dispatchEvent(new CustomEvent("gamepaddisconnected",{detail:r})),0===this.gamepads.size&&(cancelAnimationFrame(this.animationFrame),this.animationFrame=null,this.currentTime=null)}dispatchKey(e,t){t?this.dispatchEvent(new CustomEvent("keydown",{detail:e})):this.dispatchEvent(new CustomEvent("keyup",{detail:e}))}dispatchMouseDown(e){e?this.dispatchEvent(new CustomEvent("mousedown")):this.dispatchEvent(new CustomEvent("mouseup"))}dispatchMouseMove(e,t){this.dispatchEvent(new CustomEvent("mousemove",{detail:{x:e,y:t}}))}updateButton(e,t){if("key"===t.type)e>=t.deadZone?t.high&&this.keysPressedThisFrame.add(t.high):e<=-t.deadZone&&t.low&&this.keysPressedThisFrame.add(t.low);else if("mousedown"===t.type){Math.abs(e)>=t.deadZone&&(this.mouseDownThisFrame=!0)}else if("virtual_cursor"===t.type){const n=t.deadZone;let r;if(e>=n&&(r=t.high),e<=-n&&(r=t.low),r){const o=(Math.abs(e)-n)/(1-n),i=o*o*t.sensitivity*this.deltaTime;"+x"===r?this.virtualCursor.x+=i:"-x"===r?this.virtualCursor.x-=i:"+y"===r?this.virtualCursor.y+=i:"-y"===r&&(this.virtualCursor.y-=i),this.virtualCursor.modified=!0}}}update(e){this.oldKeysPressed=this.keysPressedThisFrame,this.oldMouseDown=this.mouseDownThisFrame,this.keysPressedThisFrame=new Set,this.mouseDownThisFrame=!1,null===this.currentTime?this.deltaTime=0:this.deltaTime=e-this.currentTime,this.deltaTime=Math.max(Math.min(this.deltaTime,1e3),0),this.currentTime=e,this.animationFrame=requestAnimationFrame(this.update);const t=navigator.getGamepads();for(const e of t){if(null===e)continue;const t=d(e),n=this.gamepads.get(t);for(let t=0;t<e.buttons.length;t++){const r=e.buttons[t].value,o=n.buttonMappings[t];this.updateButton(r,o)}for(let t=0;t<e.axes.length;t++){const r=e.axes[t],o=n.axesMappings[t];this.updateButton(r,o)}}this._editor&&this._editor.update(t);for(const e of this.keysPressedThisFrame)this.oldKeysPressed.has(e)||this.dispatchKey(e,!0);for(const e of this.oldKeysPressed)this.keysPressedThisFrame.has(e)||this.dispatchKey(e,!1);this.mouseDownThisFrame&&!this.oldMouseDown?this.dispatchMouseDown(!0):!this.mouseDownThisFrame&&this.oldMouseDown&&this.dispatchMouseDown(!1),this.virtualCursor.modified&&(this.virtualCursor.modified=!1,this.virtualCursor.x>this.virtualCursor.maxX&&(this.virtualCursor.x=this.virtualCursor.maxX),this.virtualCursor.x<this.virtualCursor.minX&&(this.virtualCursor.x=this.virtualCursor.minX),this.virtualCursor.y>this.virtualCursor.maxY&&(this.virtualCursor.y=this.virtualCursor.maxY),this.virtualCursor.y<this.virtualCursor.minY&&(this.virtualCursor.y=this.virtualCursor.minY),this.dispatchMouseMove(this.virtualCursor.x,this.virtualCursor.y))}editor(){throw new Error("removed")}}h.browserHasBrokenGamepadAPI=()=>!navigator.getGamepads||(!(!navigator.userAgent.includes("Firefox")||!navigator.userAgent.includes("Linux"))||!(!navigator.userAgent.includes("Firefox")||!navigator.userAgent.includes("Mac OS"))),h.setConsole=e=>o=e;var g=h;var m=async function(e){const t=e.vm;await new Promise(e=>{if(t.editingTarget)return e();t.runtime.once("PROJECT_LOADED",e)});const n=()=>null!==t.runtime._steppingInterval,r=e=>{switch(e){case"right arrow":return"ArrowRight";case"up arrow":return"ArrowUp";case"left arrow":return"ArrowLeft";case"down arrow":return"ArrowDown";case"enter":return"Enter";case"space":return" "}return e.toLowerCase().charAt(0)},o=()=>{const e=[t.runtime.getTargetForStage(),...t.runtime.targets].filter(e=>e.isOriginal).map(e=>e.blocks),n=new Set;for(const t of e)for(const e of Object.values(t._blocks))if("event_whenkeypressed"===e.opcode||"sensing_keyoptions"===e.opcode){if("sensing_keyoptions"===e.opcode&&!e.parent)continue;const t=e.fields.KEY_OPTION.value;n.add(r(t))}return n};g.setConsole(console);const i=new g,s=(()=>{const e=(()=>{const e=t.runtime.getTargetForStage().comments;for(const t of Object.values(e))if(t.text.includes(" // _gamepad_"))return t;return null})();if(!e)return null;const n=e.text.split("\n").find(e=>e.endsWith(" // _gamepad_"));if(!n)return console.warn("Gamepad comment does not contain valid line"),null;const r=n.substr(0,n.length-" // _gamepad_".length);let o;try{if(o=JSON.parse(r),!o||"object"!=typeof o||!Array.isArray(o.buttons)||!Array.isArray(o.axes))throw new Error("Invalid data")}catch(e){return console.warn("Gamepad comment has invalid JSON",e),null}return o})();i.getHintsLazily=()=>s?{importedSettings:s}:{usedKeys:o()};const a=t.runtime.renderer,l=a._xRight-a._xLeft,u=a._yTop-a._yBottom,c=a.canvas,d=document.createElement("img");let p;d.hidden=!0,d.className="sa-gamepad-cursor",d.src=(e=>{if("/active.png"===e)return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAIAAABvrngfAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAAgSURBVBhXY/z//z8DKmCC0kgAKsQIBhA2FlXEmMXAAAC+2gYLeDM0CAAAAABJRU5ErkJggg==";if("/close.svg"===e)return"data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9IkxheWVyIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDcuNDggNy40OCI+PHBhdGggZD0iTTMuNzQgNi40OFYxTTEgMy43NGg1LjQ4IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZmZmO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MnB4Ii8+PC9zdmc+Cg==";if("/cursor.png"===e)return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAIAAABvrngfAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAAVSURBVBhXYyAF/AcDCJsJQpEKGBgAjmQF/WBrfi0AAAAASUVORK5CYII=";if("/dot.svg"===e)return"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiIHZpZXdCb3g9IjAgMCAyLjExNyAyLjExNyI+PGNpcmNsZSBjeD0iMS4wNTgiIGN5PSIxLjA1OCIgcj0iMS4wNTgiIGZpbGw9InJlZCIvPjwvc3ZnPgo=";throw new Error("Unknown asset: "+e)})("/cursor.png");const h=e=>{d.hidden=!e,clearTimeout(p),e&&(document.body.classList.add("sa-gamepad-hide-cursor"),p=setTimeout(m,8e3))},m=()=>{h(!1)},f=e=>{h(!0),d.classList.toggle("sa-gamepad-cursor-down",e)};let v;if(document.addEventListener("mousemove",()=>{h(!1),document.body.classList.remove("sa-gamepad-hide-cursor")}),window.ResizeObserver){let e=l,t=u;new ResizeObserver(n=>{for(const r of n)e=r.contentRect.width,t=r.contentRect.height}).observe(c),v=()=>[e,t]}else v=()=>{const e=c.getBoundingClientRect();return[e.width,e.height]};let y=0,w=0;const b=e=>{if(!n())return;const[r,o]=v();t.postIOData("mouse",{...e,canvasWidth:r,canvasHeight:o,x:(y+l/2)*(r/l),y:o/u*(u/2-w)})},A=(e,r)=>{n()&&t.postIOData("keyboard",{key:e,isDown:r})};i.virtualCursor.maxX=a._xRight,i.virtualCursor.minX=a._xLeft,i.virtualCursor.maxY=a._yTop,i.virtualCursor.minY=a._yBottom,i.addEventListener("keydown",e=>A(e.detail,!0)),i.addEventListener("keyup",e=>A(e.detail,!1)),i.addEventListener("mousedown",()=>{f(!0),b({isDown:!0})}),i.addEventListener("mouseup",()=>{f(!1),b({isDown:!1})}),i.addEventListener("mousemove",e=>{y=e.detail.x,w=e.detail.y,((e,t)=>{h(!0);const n=l/2+e-3,r=u/2-t-3;d.style.transform=`translate(${n}px, ${r}px)`})(y,w),b({})}),e._overlays.appendChild(d)},f=n(152),v=n.n(f);window.ScaffoldingAddons={run:e=>{m(e),(e=>{const t=document.createElement("style");t.textContent=e,document.head.appendChild(t)})(v.a)}}},5:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n}});
// f8424df72ca2176534400939a28f34bfadb5da98f53f470e7bff595419bfcc95 =^..^=