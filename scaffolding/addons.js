!function(e){var t={};function n(s){if(t[s])return t[s].exports;var i=t[s]={i:s,l:!1,exports:{}};return e[s].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(s,i,function(t){return e[t]}.bind(null,i));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=419)}({152:function(e,t){e.exports='.sa-gamepad-container {\n  margin-right: 0.2rem;\n}\n\n.sa-gamepad-spacer {\n  display: flex;\n  width: 100%;\n  justify-content: flex-end;\n}\n\n.sa-gamepad-popup-outer {\n  /* above fullscreen */\n  z-index: 99999;\n}\n.sa-gamepad-popup {\n  box-sizing: border-box;\n  width: 700px;\n  max-height: min(800px, 85vh);\n  height: 100%;\n  max-width: 85%;\n  margin: 50px auto;\n  display: flex;\n  flex-direction: column;\n}\n.sa-gamepad-popup-content {\n  background-color: white;\n  padding: 1.5rem 2.25rem;\n  height: 100%;\n  overflow-y: auto;\n}\n\n.sa-gamepad-popup [class*="modal_header-item-title"] {\n  margin: 0 -20rem 0 0;\n}\n\n.sa-gamepad-cursor {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 9999;\n  user-select: none;\n  pointer-events: none;\n  will-change: transform;\n  image-rendering: optimizeSpeed;\n  image-rendering: crisp-edges;\n  image-rendering: pixelated;\n}\n.sa-gamepad-cursor-down {\n  filter: invert(100%);\n}\n\n.sa-gamepad-small .sa-gamepad-container[data-editor-mode="editor"] {\n  display: none !important;\n}\n\n.sa-gamepad-hide-cursor {\n  cursor: none;\n}\n\n.sa-gamepad-browser-support-warning {\n  font-weight: bold;\n  margin-bottom: 10px;\n}\n\n.sa-gamepad-store-settings {\n  display: none;\n}\n.sa-gamepad-store-settings > input {\n  margin-right: 4px;\n}\n.sa-gamepad-has-controller .sa-gamepad-store-settings {\n  display: block;\n}\n'},37:function(e,t,n){"use strict";t.a=class{constructor(){this._events={}}addEventListener(e,t){this._events[e]||(this._events[e]=[]),this._events[e].push(t)}removeEventListener(e,t){const n=this._events[e];n&&(this._events[e]=n.filter(e=>e!==t))}dispatchEvent(e){const t=this._events[e.type];if(t)for(const n of t)n(e)}}},419:function(e,t,n){"use strict";n.r(t);var s=n(37);let i=window.console;const r=[{type:"key",high:"ArrowRight",low:"ArrowLeft",deadZone:.5},{type:"key",high:"ArrowDown",low:"ArrowUp",deadZone:.5}],o=[{type:"key",high:"d",low:"a",deadZone:.5},{type:"key",high:"s",low:"w",deadZone:.5}],a=[{type:"virtual_cursor",high:"+x",low:"-x",sensitivity:.6,deadZone:.2},{type:"virtual_cursor",high:"-y",low:"+y",sensitivity:.6,deadZone:.2}],d=e=>{if("object"!=typeof e||!e)return i.warn("invalid mapping",e),{type:"key",high:null,low:null};const t=Object.assign({},e);if("key"===t.type)void 0===t.deadZone&&(t.deadZone=.5),void 0===t.high&&(t.high=""),void 0===t.low&&(t.low="");else if("mousedown"===t.type)void 0===t.deadZone&&(t.deadZone=.5);else{if("virtual_cursor"!==t.type)return i.warn("unknown mapping type",t.type),{type:"key",high:null,low:null};void 0===t.high&&(t.high=""),void 0===t.low&&(t.low=""),void 0===t.sensitivity&&(t.sensitivity=10),void 0===t.deadZone&&(t.deadZone=.5)}return t},u=(e,t)=>{for(;e.length<t;)e.push({type:"key",high:null,low:null});return e.length=t,e},h=e=>({usesArrows:e.has("ArrowUp")||e.has("ArrowDown")||e.has("ArrowRight")||e.has("ArrowLeft"),usesWASD:e.has("w")&&e.has("s")||e.has("a")&&e.has("d")}),c=e=>"".concat(e.id," (").concat(e.index,")");class l{constructor(e,t){this.gamepad=e,this.gamepadLib=t,this.buttonMappings=this.getDefaultButtonMappings().map(d),this.axesMappings=this.getDefaultAxisMappings().map(d)}getDefaultButtonMappings(){let e;if(this.gamepadLib.hints.importedSettings)e=this.gamepadLib.hints.importedSettings.buttons;else{const t=this.gamepadLib.hints.usedKeys,n=new Set,{usesArrows:s,usesWASD:i}=h(t);i&&(n.add("w"),n.add("a"),n.add("s"),n.add("d"));const r=["p","q","r"],o=[" ","Enter","e","f","z","x","c",...Array.from(t).filter(e=>1===e.length&&!r.includes(e))],a=e=>{for(const s of e)if(t.has(s)&&!n.has(s))return n.add(s),s;return null},d=()=>a(o),u=()=>a(r),c=()=>s||!i?"ArrowUp":"w",l=()=>s||!i?"ArrowDown":"s",p=()=>s||!i?"ArrowRight":"d",m=()=>s||!i?"ArrowLeft":"a",g=(()=>s&&t.has("ArrowUp")?"ArrowUp":i&&t.has("w")?"w":a(o))();let y=d(),v=d(),w=d();!g||y||v||w||(y=g,v=g,w=g),g&&y&&!v&&!w&&(v=g,w=y),e=[],e[0]={type:"key",high:g},e[1]={type:"key",high:y},e[2]={type:"key",high:v},e[3]={type:"key",high:w},e[4]={type:"mousedown"},e[5]={type:"mousedown"},e[6]={type:"mousedown"},e[7]={type:"mousedown"},e[9]={type:"key",high:u()},e[8]={type:"key",high:u()},e[10]={type:"key",high:null,low:null},e[11]={type:"key",high:null,low:null},e[12]={type:"key",high:c()},e[13]={type:"key",high:l()},e[14]={type:"key",high:m()},e[15]={type:"key",high:p()}}return u(e,this.gamepad.buttons.length)}getDefaultAxisMappings(){let e=[];if(this.gamepadLib.hints.importedSettings)e=this.gamepadLib.hints.importedSettings.axes;else if(4===this.gamepad.axes.length){const t=this.gamepadLib.hints.usedKeys,{usesArrows:n,usesWASD:s}=h(t);s?(e.push(o[0]),e.push(o[1])):n?(e.push(r[0]),e.push(r[1])):(e.push(a[0]),e.push(a[1])),e.push(a[0]),e.push(a[1])}return u(e,this.gamepad.axes.length)}}class p extends s.a{constructor(){super(),this.gamepads=new Map,this.handleConnect=this.handleConnect.bind(this),this.handleDisconnect=this.handleDisconnect.bind(this),this.update=this.update.bind(this),this.animationFrame=null,this.currentTime=null,this.deltaTime=0,this.virtualCursor={x:0,y:0,maxX:1/0,minX:-1/0,maxY:1/0,minY:-1/0,modified:!1},this._editor=null,this.connectCallbacks=[],this.hints={usedKeys:new Set,importedSettings:null,generated:!1},this.keysPressedThisFrame=new Set,this.oldKeysPressed=new Set,this.mouseDownThisFrame=!1,this.oldMouseDown=!1,this.addEventHandlers()}addEventHandlers(){window.addEventListener("gamepadconnected",this.handleConnect),window.addEventListener("gamepaddisconnected",this.handleDisconnect)}removeEventHandlers(){window.removeEventListener("gamepadconnected",this.handleConnect),window.removeEventListener("gamepaddisconnected",this.handleDisconnect)}gamepadConnected(){return this.gamepads.size>0?Promise.resolve():new Promise(e=>{this.connectCallbacks.push(e)})}ensureHintsGenerated(){this.hints.generated||(this.getHintsLazily&&Object.assign(this.hints,this.getHintsLazily()),this.hints.generated=!0)}handleConnect(e){this.ensureHintsGenerated();for(const e of this.connectCallbacks)e();this.connectCallbacks=[];const t=e.gamepad,n=c(t);i.log("connected",t);const s=new l(t,this);this.gamepads.set(n,s),null===this.animationFrame&&(this.animationFrame=requestAnimationFrame(this.update)),this.dispatchEvent(new CustomEvent("gamepadconnected",{detail:s}))}handleDisconnect(e){const t=e.gamepad,n=c(t);i.log("disconnected",t);const s=this.gamepads.get(n);this.gamepads.delete(n),this.dispatchEvent(new CustomEvent("gamepaddisconnected",{detail:s})),0===this.gamepads.size&&(cancelAnimationFrame(this.animationFrame),this.animationFrame=null,this.currentTime=null)}dispatchKey(e,t){t?this.dispatchEvent(new CustomEvent("keydown",{detail:e})):this.dispatchEvent(new CustomEvent("keyup",{detail:e}))}dispatchMouseDown(e){e?this.dispatchEvent(new CustomEvent("mousedown")):this.dispatchEvent(new CustomEvent("mouseup"))}dispatchMouseMove(e,t){this.dispatchEvent(new CustomEvent("mousemove",{detail:{x:e,y:t}}))}updateButton(e,t){if("key"===t.type)e>=t.deadZone?t.high&&this.keysPressedThisFrame.add(t.high):e<=-t.deadZone&&t.low&&this.keysPressedThisFrame.add(t.low);else if("mousedown"===t.type){Math.abs(e)>=t.deadZone&&(this.mouseDownThisFrame=!0)}else if("virtual_cursor"===t.type){const n=t.deadZone;let s;if(e>=n&&(s=t.high),e<=-n&&(s=t.low),s){const i=(Math.abs(e)-n)/(1-n),r=i*i*t.sensitivity*this.deltaTime;"+x"===s?this.virtualCursor.x+=r:"-x"===s?this.virtualCursor.x-=r:"+y"===s?this.virtualCursor.y+=r:"-y"===s&&(this.virtualCursor.y-=r),this.virtualCursor.modified=!0}}}update(e){this.oldKeysPressed=this.keysPressedThisFrame,this.oldMouseDown=this.mouseDownThisFrame,this.keysPressedThisFrame=new Set,this.mouseDownThisFrame=!1,null===this.currentTime?this.deltaTime=0:this.deltaTime=e-this.currentTime,this.deltaTime=Math.max(Math.min(this.deltaTime,1e3),0),this.currentTime=e,this.animationFrame=requestAnimationFrame(this.update);const t=navigator.getGamepads();for(const e of t){if(null===e)continue;const t=c(e),n=this.gamepads.get(t);for(let t=0;t<e.buttons.length;t++){const s=e.buttons[t].value,i=n.buttonMappings[t];this.updateButton(s,i)}for(let t=0;t<e.axes.length;t++){const s=e.axes[t],i=n.axesMappings[t];this.updateButton(s,i)}}this._editor&&this._editor.update(t);for(const e of this.keysPressedThisFrame)this.oldKeysPressed.has(e)||this.dispatchKey(e,!0);for(const e of this.oldKeysPressed)this.keysPressedThisFrame.has(e)||this.dispatchKey(e,!1);this.mouseDownThisFrame&&!this.oldMouseDown?this.dispatchMouseDown(!0):!this.mouseDownThisFrame&&this.oldMouseDown&&this.dispatchMouseDown(!1),this.virtualCursor.modified&&(this.virtualCursor.modified=!1,this.virtualCursor.x>this.virtualCursor.maxX&&(this.virtualCursor.x=this.virtualCursor.maxX),this.virtualCursor.x<this.virtualCursor.minX&&(this.virtualCursor.x=this.virtualCursor.minX),this.virtualCursor.y>this.virtualCursor.maxY&&(this.virtualCursor.y=this.virtualCursor.maxY),this.virtualCursor.y<this.virtualCursor.minY&&(this.virtualCursor.y=this.virtualCursor.minY),this.dispatchMouseMove(this.virtualCursor.x,this.virtualCursor.y))}editor(){throw new Error("removed")}}p.browserHasBrokenGamepadAPI=()=>!navigator.getGamepads||(!(!navigator.userAgent.includes("Firefox")||!navigator.userAgent.includes("Linux"))||!(!navigator.userAgent.includes("Firefox")||!navigator.userAgent.includes("Mac OS"))),p.setConsole=e=>i=e;var m=p;function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w=async function(e){const t=e.vm;await new Promise(e=>{if(t.editingTarget)return e();t.runtime.once("PROJECT_LOADED",e)});const n=()=>null!==t.runtime._steppingInterval,s=e=>{switch(e){case"right arrow":return"ArrowRight";case"up arrow":return"ArrowUp";case"left arrow":return"ArrowLeft";case"down arrow":return"ArrowDown";case"enter":return"Enter";case"space":return" "}return e.toLowerCase().charAt(0)},i=()=>{const e=[t.runtime.getTargetForStage(),...t.runtime.targets].filter(e=>e.isOriginal).map(e=>e.blocks),n=new Set;for(const t of e)for(const e of Object.values(t._blocks))if("event_whenkeypressed"===e.opcode||"sensing_keyoptions"===e.opcode){if("sensing_keyoptions"===e.opcode&&!e.parent)continue;const t=e.fields.KEY_OPTION.value;n.add(s(t))}return n};m.setConsole(console);const r=new m,o=(()=>{const e=(()=>{const e=t.runtime.getTargetForStage().comments;for(const t of Object.values(e))if(t.text.includes(" // _gamepad_"))return t;return null})();if(!e)return null;const n=e.text.split("\n").find(e=>e.endsWith(" // _gamepad_"));if(!n)return console.warn("Gamepad comment does not contain valid line"),null;const s=n.substr(0,n.length-" // _gamepad_".length);let i;try{if(i=JSON.parse(s),!i||"object"!=typeof i||!Array.isArray(i.buttons)||!Array.isArray(i.axes))throw new Error("Invalid data")}catch(e){return console.warn("Gamepad comment has invalid JSON",e),null}return i})();r.getHintsLazily=()=>o?{importedSettings:o}:{usedKeys:i()};const a=t.runtime.renderer,d=a._xRight-a._xLeft,u=a._yTop-a._yBottom,h=a.canvas,c=document.createElement("img");let l;c.hidden=!0,c.className="sa-gamepad-cursor",c.src=(e=>{if("/active.png"===e)return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAIAAABvrngfAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAAgSURBVBhXY/z//z8DKmCC0kgAKsQIBhA2FlXEmMXAAAC+2gYLeDM0CAAAAABJRU5ErkJggg==";if("/close.svg"===e)return"data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9IkxheWVyIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDcuNDggNy40OCI+PHBhdGggZD0iTTMuNzQgNi40OFYxTTEgMy43NGg1LjQ4IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZmZmO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MnB4Ii8+PC9zdmc+Cg==";if("/cursor.png"===e)return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAIAAABvrngfAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAAVSURBVBhXYyAF/AcDCJsJQpEKGBgAjmQF/WBrfi0AAAAASUVORK5CYII=";if("/dot.svg"===e)return"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiIHZpZXdCb3g9IjAgMCAyLjExNyAyLjExNyI+PGNpcmNsZSBjeD0iMS4wNTgiIGN5PSIxLjA1OCIgcj0iMS4wNTgiIGZpbGw9InJlZCIvPjwvc3ZnPgo=";throw new Error("Unknown asset: ".concat(e))})("/cursor.png");const p=e=>{c.hidden=!e,clearTimeout(l),e&&(document.body.classList.add("sa-gamepad-hide-cursor"),l=setTimeout(g,8e3))},g=()=>{p(!1)},v=e=>{p(!0),c.classList.toggle("sa-gamepad-cursor-down",e)};let w;if(document.addEventListener("mousemove",()=>{p(!1),document.body.classList.remove("sa-gamepad-hide-cursor")}),window.ResizeObserver){let e=d,t=u;new ResizeObserver(n=>{for(const s of n)e=s.contentRect.width,t=s.contentRect.height}).observe(h),w=()=>[e,t]}else w=()=>{const e=h.getBoundingClientRect();return[e.width,e.height]};let A=0,f=0;const b=e=>{if(!n())return;const[s,i]=w();t.postIOData("mouse",y(y({},e),{},{canvasWidth:s,canvasHeight:i,x:(A+d/2)*(s/d),y:i/u*(u/2-f)}))},x=(e,s)=>{n()&&t.postIOData("keyboard",{key:e,isDown:s})};r.virtualCursor.maxX=a._xRight,r.virtualCursor.minX=a._xLeft,r.virtualCursor.maxY=a._yTop,r.virtualCursor.minY=a._yBottom,r.addEventListener("keydown",e=>x(e.detail,!0)),r.addEventListener("keyup",e=>x(e.detail,!1)),r.addEventListener("mousedown",()=>{v(!0),b({isDown:!0})}),r.addEventListener("mouseup",()=>{v(!1),b({isDown:!1})}),r.addEventListener("mousemove",e=>{A=e.detail.x,f=e.detail.y,((e,t)=>{p(!0);const n=d/2+e-3,s=u/2-t-3;c.style.transform="translate(".concat(n,"px, ").concat(s,"px)")})(A,f),b({})}),e._overlays.appendChild(c)},A=n(152),f=n.n(A);var b=e=>{w(e),(e=>{const t=document.createElement("style");t.textContent=e,document.head.appendChild(t)})(f.a)};var x=e=>{const t=e._canvas,n=e.vm,s=n.runtime.ioDevices.mouse;let i=!1;const r=(t,i)=>{const{movementX:r,movementY:o}=t,{width:a,height:d}=e.layersRect,u=s._clientX+r,h=s._clientY-o;if(s._clientX=u,s._scratchX=Math.round(s.runtime.stageWidth*(u/a-.5)),s._clientY=h,s._scratchY=Math.round(s.runtime.stageWidth*(h/d-.5)),"boolean"==typeof i){const e={button:t.button,isDown:i};n.postIOData("mouse",e)}};document.addEventListener("mousedown",e=>{t.contains(e.target)&&(e.stopPropagation(),i?r(e,!0):t.requestPointerLock())},!0),document.addEventListener("mouseup",e=>{e.stopPropagation(),i?r(e,!1):t.contains(e.target)&&t.requestPointerLock()},!0),document.addEventListener("mousemove",e=>{e.stopPropagation(),i&&r(e)},!0),e.addEventListener("PROJECT_RUN_START",()=>{i||t.requestPointerLock()}),document.addEventListener("pointerlockchange",()=>{i=document.pointerLockElement===t}),document.addEventListener("pointerlockerror",e=>{console.error("Pointer lock error",e)});const o=n.runtime._step;n.runtime._step=function(...t){const n=o.call(this,...t),{width:i,height:r}=e.layersRect;return s._clientX=i/2,s._clientY=r/2,s._scratchX=0,s._scratchY=0,n}};window.ScaffoldingAddons={run:(e,t)=>{t.gamepad&&b(e),t.pointerlock&&x(e)}}}});
// 6ad2a2c1980c33f0da6b89aa1a4c69962f45a80d5767d7732fcc6e554fb75e00 =^..^=