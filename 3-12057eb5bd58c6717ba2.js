(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{209:function(e,t,n){"use strict";n(238)("link",function(e){return function(t){return e(this,"a","href",t)}})},235:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},o=s(n(0)),r=s(n(57)),a=s(n(4));function s(e){return e&&e.__esModule?e:{default:e}}var l=(0,r.default)({}),u=l.Provider,c=l.Consumer;t.withMDXComponents=function(e){return function(t){var n=t.components,r=function(e,t){var n={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}(t,["components"]);return o.default.createElement(c,null,function(t){return o.default.createElement(e,i({components:n||t},r))})}};var d=function(e){var t=e.components,n=e.children;return o.default.createElement(u,{value:t},n)};d.propTypes={components:a.default.object.isRequired,children:a.default.element.isRequired},t.default=d},284:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MDXScopeProvider=t.withMDXScope=void 0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},o=r(n(0));function r(e){return e&&e.__esModule?e:{default:e}}var a=(0,r(n(57)).default)({}),s=a.Provider,l=a.Consumer;t.withMDXScope=function(e){return function(t){var n=t.scope,r=function(e,t){var n={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}(t,["scope"]);return o.default.createElement(l,null,function(t){return o.default.createElement(e,i({scope:n||t},r))})}};t.MDXScopeProvider=function(e){var t=e.__mdxScope,n=e.children;return o.default.createElement(s,{value:t},n)}},304:function(e,t,n){"use strict";var i=n(235),o=n(284);t.a=Object(o.withMDXScope)(Object(i.withMDXComponents)(({scope:e={},components:t={},children:n,...i})=>{const o={components:t,props:i,...e},r=Object.keys(o),a=r.map(e=>o[e]);return new Function("_fn",...r,`${n}`)({},...a)({components:t,...i})}))},305:function(e,t,n){"use strict";var i=n(6),o=n(18),r=n(30),a=n(17),s=[].sort,l=[1,2,3];i(i.P+i.F*(a(function(){l.sort(void 0)})||!a(function(){l.sort(null)})||!n(14)(s)),"Array",{sort:function(e){return void 0===e?s.call(r(this)):s.call(r(this),o(e))}})},306:function(e,t,n){"use strict";var i=n(6),o=n(29),r=n(307),a="".endsWith;i(i.P+i.F*n(308)("endsWith"),"String",{endsWith:function(e){var t=r(this,e,"endsWith"),n=arguments.length>1?arguments[1]:void 0,i=o(t.length),s=void 0===n?i:Math.min(o(n),i),l=String(e);return a?a.call(t,l,s):t.slice(s-l.length,s)===l}})},307:function(e,t,n){var i=n(84),o=n(28);e.exports=function(e,t,n){if(i(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(o(e))}},308:function(e,t,n){var i=n(3)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[i]=!1,!"/./"[e](t)}catch(e){}}return!0}},309:function(e,t,n){"use strict";var i=n(6),o=n(54)(!0);i(i.P,"Array",{includes:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),n(55)("includes")},310:function(e,t,n){"use strict";var i=n(6),o=n(307);i(i.P+i.F*n(308)("includes"),"String",{includes:function(e){return!!~o(this,e,"includes").indexOf(e,arguments.length>1?arguments[1]:void 0)}})},311:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=u(n(150)),r=u(n(472)),a=u(n(147)),s=u(n(473)),l=u(n(146));function u(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default),i(t,[{key:"attached",value:function(){this.keyboardFocusManager_=new s.default(this,"button").setCircularLength(this.tabs.length).start()}},{key:"addTab",value:function(e,t){o.default.isNumber(t)?this.tabs.splice(t,0,e):this.tabs.push(e),this.tabs=this.tabs}},{key:"addTabByName",value:function(e,t,n){if(o.default.isString(e)){var i={label:e,disabled:t};o.default.isDef(t)||(i.disabled=!1),this.addTab(i,n)}}},{key:"created",value:function(){this.lastState_={tab:this.tab},this.on(t.Events.CHANGE_REQUEST,this.defaultChangeRequestFn_,!0)}},{key:"defaultChangeRequestFn_",value:function(e){this.setState_(e.state)}},{key:"dispatchRequest_",value:function(e){this.emit(t.Events.CHANGE_REQUEST,{lastState:this.lastState_,state:e,totalTabs:this.tabs.length})}},{key:"disposed",value:function(){this.keyboardFocusManager_.dispose(),this.keyboardFocusManager_=null}},{key:"findFirstAvailableIndex_",value:function(){if(!this.disabled)for(var e=0;e<this.tabs.length;e++)if(!this.tabs[e].disabled)return e;return-1}},{key:"onClickItem",value:function(e){var t=e.delegateTarget;e.preventDefault();var n=parseInt(t.getAttribute("data-index"));this.dispatchRequest_({tab:n})}},{key:"removeTab",value:function(e){if(o.default.isNumber(e)&&e>-1&&e<this.tabs.length){var t=this.tabs.splice(e,1);return this.tabs=this.tabs,t[0]}}},{key:"setState_",value:function(e){this.tab=e.tab,this.lastState_=e}},{key:"setTabDisabled",value:function(e,t){o.default.isNumber(e)&&o.default.isBoolean(t)&&(this.tabs[e].disabled=t,this.tabs=this.tabs)}},{key:"syncTabs",value:function(){this.keyboardFocusManager_&&this.keyboardFocusManager_.setCircularLength(this.tabs.length)}},{key:"toggleTabDisabled",value:function(e){o.default.isNumber(e)&&e>=0&&e<this.tabs.length&&(this.tabs[e].disabled=!this.tabs[e].disabled,e===this.tab&&(this.tab=this.findFirstAvailableIndex_()),this.tabs=this.tabs)}}]),t}();l.default.register(c,r.default),c.Events={CHANGE_REQUEST:"changeRequest"},c.TYPES={NONE:"none",PILLS:"pills",TABS:"tabs"},c.STATE={disabled:{validator:o.default.isBoolean,value:!1},tab:{validator:o.default.isNumber,valueFn:"findFirstAvailableIndex_"},tabs:{validator:function(e){return e.every(function(e){return!!e.label})},value:[]},type:{validator:function(e){return e.toUpperCase()in c.TYPES},value:c.TYPES.TABS}},t.default=c},312:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ClayTooltip=void 0;var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=f(n(147)),r=f(n(146)),a=n(313),s=n(148),l=n(170),u=n(150),c=n(166),d=f(n(475));function f(e){return e&&e.__esModule?e:{default:e}}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var b=function e(){h(this,e)},g=function(e){function t(e,n,i){if(h(this,t),!e)throw new Error("Use ClayTooltip.init to initialize ClayTooltip");return function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n,i))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default),i(t,[{key:"created",value:function(){this._eventHandler=new l.EventHandler}},{key:"attached",value:function(){this.addListener("transitionend",this._handleTransitionEnd,!0),this.visible||(this.element.style.display="none")}},{key:"rendered",value:function(){if(this._target){var e=a.Align.align(this.element,this._target,this.position);this.alignedPosition!==e&&(this.alignedPosition=e)}}},{key:"detached",value:function(){this._eventHandler.removeAllListeners()}},{key:"disposed",value:function(){this._eventHandler.removeAllListeners()}},{key:"_getContent",value:function(e){var t=e.getAttribute("title");if(t)e.setAttribute("data-title",t),e.setAttribute("data-restore-title","true"),e.removeAttribute("title");else if("svg"===e.tagName){var n=e.querySelector("title");n&&(e.setAttribute("data-title",n.innerHTML),e.setAttribute("data-restore-title","true"),n.remove())}return e.getAttribute("data-title")}},{key:"_handleMouseClick",value:function(e){this._restoreTitle(e.delegateTarget),this._isTransitioning=!0,this.visible=!1}},{key:"_handleMouseEnter",value:function(e){var t=this._getContent(e.delegateTarget);this._target=e.delegateTarget,this._content=t,this.visible||(this.element.style.display="block"),this._isTransitioning=!0,this.visible=!0}},{key:"_handleMouseEnterTooltip",value:function(){this._isTransitioning&&(this.visible=!0)}},{key:"_handleMouseLeave",value:function(e){this.visible&&(this._restoreTitle(e.delegateTarget),this._isTransitioning=!0,this.visible=!1)}},{key:"_handleTransitionEnd",value:function(){this._isTransitioning=!1,this.visible||(this.element.style.display="none")}},{key:"_restoreTitle",value:function(e){var t=e.getAttribute("data-title"),n=e.getAttribute("data-restore-title");if(t&&"true"===n){if("svg"===e.tagName){var i=document.createElement("title");i.innerHTML=t,e.appendChild(i)}else e.setAttribute("title",t);e.removeAttribute("data-restore-title")}}},{key:"setterClassMapFn_",value:function(e){return u.object.mixin(this.valueClassMapFn_(),e)}},{key:"syncSelectors",value:function(e,t){if(e){var n=Array.isArray(t)?t:[],i=e.reduce(function(e,t){return-1===e.indexOf(t)&&e.push(t),e},n);this._eventHandler.removeAllListeners();for(var o=0,r=i.length;o<r;o++){var a=i[o];this._eventHandler.add(c.dom.delegate(document,"blur",a,this._handleMouseLeave.bind(this)),c.dom.delegate(document,"click",a,this._handleMouseClick.bind(this)),c.dom.delegate(document,"focus",a,this._handleMouseEnter.bind(this)),c.dom.delegate(document,"mouseenter",a,this._handleMouseEnter.bind(this)),c.dom.delegate(document,"mouseleave",a,this._handleMouseLeave.bind(this)))}}}},{key:"syncVisible",value:function(){}},{key:"valueClassMapFn_",value:function(){var e;return p(e={},a.Align.TopLeft,"clay-tooltip-top-left"),p(e,a.Align.TopCenter,"clay-tooltip-top"),p(e,a.Align.TopRight,"clay-tooltip-top-right"),p(e,a.Align.BottomLeft,"clay-tooltip-bottom-left"),p(e,a.Align.BottomCenter,"clay-tooltip-bottom"),p(e,a.Align.BottomRight,"clay-tooltip-bottom-right"),p(e,a.Align.RightCenter,"clay-tooltip-right"),p(e,a.Align.LeftCenter,"clay-tooltip-left"),e}}],[{key:"init",value:function(e,n){return this._instance||(this._instance=new t(new b,e,n)),this._instance}}]),t}();g.STATE={_content:s.Config.any().value("").internal(),alignedPosition:{validator:a.Align.isValidPosition},elementClasses:s.Config.string(),classMap:{setter:"setterClassMapFn_",validator:u.core.isObject,valueFn:"valueClassMapFn_"},position:{validator:a.Align.isValidPosition,value:a.Align.Top},selectors:s.Config.array().value(["[data-title]","[title]"]),visible:s.Config.bool().value(!1)},r.default.register(g,d.default),t.ClayTooltip=g,t.default=g},316:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(n(150)),o=a(n(166)),r=a(n(148));function a(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=function(e){function t(n){s(this,t);var i=l(this,e.call(this,n));return i.listener_=o.default.on(i.selector,"click",function(e){return i.initialize(e)}),i}return u(t,e),t.prototype.disposeInternal=function(){this.listener_.dispose(),this.listener_=null,this.clipboardAction_&&(this.clipboardAction_.dispose(),this.clipboardAction_=null)},t.prototype.initialize=function(e){this.clipboardAction_&&(this.clipboardAction_=null),this.clipboardAction_=new d({host:this,action:this.action(e.delegateTarget),target:this.target(e.delegateTarget),text:this.text(e.delegateTarget),trigger:e.delegateTarget})},t}(r.default);c.STATE={action:{validator:i.default.isFunction,value:function(e){return e.getAttribute("data-action")}},selector:{value:"[data-clipboard]",validator:i.default.isString},target:{validator:i.default.isFunction,value:function(e){return document.querySelector(e.getAttribute("data-target"))}},text:{validator:i.default.isFunction,value:function(e){return e.getAttribute("data-text")}}};var d=function(e){function t(n){s(this,t);var i=l(this,e.call(this,n));return i.text?i.selectValue():i.target&&i.selectTarget(),i}return u(t,e),t.prototype.clearSelection=function(){this.target&&this.target.blur(),window.getSelection().removeAllRanges()},t.prototype.copyText=function(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)},t.prototype.disposeInternal=function(){this.removeFakeElement(),e.prototype.disposeInternal.call(this)},t.prototype.handleResult=function(e){e?this.host.emit("success",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)}):this.host.emit("error",{action:this.action,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})},t.prototype.removeFakeElement=function(){this.fake&&o.default.exitDocument(this.fake),this.removeFakeHandler&&this.removeFakeHandler.removeListener()},t.prototype.selectTarget=function(){if("INPUT"===this.target.nodeName||"TEXTAREA"===this.target.nodeName)this.target.select(),this.selectedText=this.target.value;else{var e=document.createRange(),t=window.getSelection();e.selectNodeContents(this.target),t.addRange(e),this.selectedText=t.toString()}this.copyText()},t.prototype.selectValue=function(){this.removeFakeElement(),this.removeFakeHandler=o.default.once(document,"click",this.removeFakeElement.bind(this)),this.fake=document.createElement("textarea"),this.fake.style.position="fixed",this.fake.style.left="-9999px",this.fake.setAttribute("readonly",""),this.fake.value=this.text,this.selectedText=this.text,o.default.enterDocument(this.fake),this.fake.select(),this.copyText()},t}(r.default);d.STATE={action:{value:"copy",validator:function(e){return"copy"===e||"cut"===e}},host:{validator:function(e){return e instanceof c}},selectedText:{validator:i.default.isString},target:{validator:i.default.isElement},text:{validator:i.default.isString},trigger:{validator:i.default.isElement}},t.default=c},472:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.templates=t.Tabs=void 0;var i,o=a(n(147)),r=a(n(146));function a(e){return e&&e.__esModule?e:{default:e}}goog.loadModule(function(e){goog.module("Tabs.incrementaldom");goog.require("soy"),goog.require("soydata");goog.require("goog.i18n.bidi"),goog.require("goog.asserts"),goog.require("goog.string");var t=goog.require("incrementaldom"),n=t.elementOpen,o=t.elementClose,r=(t.elementVoid,t.elementOpenStart),a=t.elementOpenEnd,s=t.text,l=t.attr;function u(e,t,i){var u;if(e.tabs.length>0){n("ul",null,null,"class","nav "+("none"!=e.type?"nav-"+e.type:"")+" "+(null==(u=e.elementClasses)?"":u),"role","tablist");for(var c=e.tabs,d=c.length,f=0;f<d;f++){var p=c[f],h=null!=e.disabled&&e.disabled||p.disabled,b=e.tab==f;r("li"),l("class",(h?"disabled":"")+" "+(b?"active":"")),l("data-index",f),h||b||l("data-onclick","onClickItem"),l("role","presentation"),a(),r("button"),l("aria-disabled",h?"true":"false"),l("aria-expanded",b?"true":"false"),l("data-unfocusable",h?"true":"false"),l("data-toggle","tab"),h&&l("disabled",""),l("ref","tab-"+f),l("role","tab"),l("type","button"),a();var g=p.label;"function"==typeof g?g():null!=g&&s(g),o("button"),o("li")}o("ul")}}return e.render=u,goog.DEBUG&&(u.soyTemplateName="Tabs.render"),e.render.params=["tab","tabs","disabled","elementClasses","type"],e.render.types={tab:"any",tabs:"any",disabled:"any",elementClasses:"any",type:"any"},e.templates=i=e,e});var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default),t}();r.default.register(s,i),t.Tabs=s,t.templates=i,t.default=i},473:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=o(n(150));function o(e){return e&&e.__esModule?e:{default:e}}var r=function(e){function t(n,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this));return o.component_=n,o.selector_=i||"*",o.handleKey_=o.handleKey_.bind(o),o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.buildRef_=function(e,t){return e+t},t.prototype.disposeInternal=function(){e.prototype.disposeInternal.call(this),this.stop(),this.component_=null,this.selector_=null},t.prototype.getNextFocusable_=function(e,t,n){var i=t,o=void 0,r=void 0;do{t=this.increment_(t,n),r=this.buildRef_(e,t),o=this.component_.refs[r]}while(this.isFocusable_(o)&&t!==i);return o?r:null},t.prototype.handleKey_=function(e){var n=this.focusHandler_&&this.focusHandler_(e);this.focusHandler_&&!0!==n||(n=this.handleKeyDefault_(e));var o=n;i.default.isElement(n)||(n=this.component_.refs[n]),n&&(n.focus(),this.emit(t.EVENT_FOCUSED,{element:n,ref:i.default.isString(o)?o:null}))},t.prototype.handleKeyDefault_=function(e){var n=e.delegateTarget.getAttribute("ref"),i=t.REF_REGEX.exec(n);if(i){var o=parseInt(i[1],10),r=n.substr(0,n.length-i[1].length);switch(e.keyCode){case 37:case 38:return this.getNextFocusable_(r,o,-1);case 39:case 40:return this.getNextFocusable_(r,o,1)}}},t.prototype.increment_=function(e,t){var n=this.circularLength_;return e+=t,i.default.isNumber(n)&&(e<0?e=n-1:e>=n&&(e=0)),e},t.prototype.isFocusable_=function(e){return e&&"true"===e.getAttribute("data-unfocusable")},t.prototype.setCircularLength=function(e){return this.circularLength_=e,this},t.prototype.setFocusHandler=function(e){return this.focusHandler_=e,this},t.prototype.start=function(){return this.handle_||(this.handle_=this.component_.delegate("keydown",this.selector_,this.handleKey_)),this},t.prototype.stop=function(){return this.handle_&&(this.handle_.removeListener(),this.handle_=null),this},t}(o(n(170)).default);r.EVENT_FOCUSED="focused",r.REF_REGEX=/.+-(\d+)$/,t.default=r},475:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.templates=t.ClayTooltip=void 0;var i,o=a(n(147)),r=a(n(146));function a(e){return e&&e.__esModule?e:{default:e}}goog.loadModule(function(e){var t=goog.require("soy");goog.require("soydata");goog.module("ClayTooltip.incrementaldom"),goog.require("goog.soy.data.SanitizedContent");var n=goog.require("incrementaldom");goog.require("soy.asserts");var o=goog.require("soy.idom"),r=function(e,i,r){i=r||i,e=e||{};var a=t.asserts.assertType(null==e._content||goog.isFunction(e._content)||goog.isString(e._content)||e._content instanceof goog.soy.data.SanitizedContent,"_content",e._content,"!goog.soy.data.SanitizedContent|function()|null|string|undefined"),s=t.asserts.assertType(null==e.alignedPosition||goog.isNumber(e.alignedPosition),"alignedPosition",e.alignedPosition,"null|number|undefined"),l=e.classMap,u=t.asserts.assertType(null==e.elementClasses||goog.isString(e.elementClasses)||e.elementClasses instanceof goog.soy.data.SanitizedContent,"elementClasses",e.elementClasses,"!goog.soy.data.SanitizedContent|null|string|undefined"),c=t.asserts.assertType(null==e.position||goog.isNumber(e.position),"position",e.position,"null|number|undefined"),d=t.asserts.assertType(null==e.visible||goog.isBoolean(e.visible)||1===e.visible||0===e.visible,"visible",e.visible,"boolean|null|undefined"),f=null!=s?s:c,p=null!=f?(l||["clay-tooltip-top-left","clay-tooltip-top","clay-tooltip-top-right","clay-tooltip-bottom-left","clay-tooltip-bottom","clay-tooltip-bottom-right","clay-tooltip-right","clay-tooltip-left"])[f]:"clay-tooltip-bottom";n.elementOpenStart("div"),n.attr("class","tooltip fade "+p+(u?" "+u:"")+(d?" show":"")),n.attr("data-onmouseenter","_handleMouseEnterTooltip"),n.attr("data-onmouseleave","_handleMouseLeave"),n.attr("role","tooltip"),n.elementOpenEnd(),n.elementOpenStart("div"),n.attr("class","arrow"),n.elementOpenEnd(),n.elementClose("div"),n.elementOpenStart("div"),n.attr("class","tooltip-inner"),n.elementOpenEnd(),o.print(a),n.elementClose("div"),n.elementClose("div")};return e.render=r,goog.DEBUG&&(r.soyTemplateName="ClayTooltip.render"),e.render.params=["_content","alignedPosition","classMap","elementClasses","position","visible"],e.render.types={_content:"html|string",alignedPosition:"number",classMap:"?",elementClasses:"string",position:"number",visible:"bool"},e.templates=i=e,e});var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default),t}();r.default.register(s,i),t.ClayTooltip=s,t.templates=i,t.default=i}}]);
//# sourceMappingURL=3-12057eb5bd58c6717ba2.js.map