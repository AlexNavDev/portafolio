(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Sd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ru={exports:{}},no={},Iu={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rr=Symbol.for("react.element"),kd=Symbol.for("react.portal"),Ed=Symbol.for("react.fragment"),Cd=Symbol.for("react.strict_mode"),_d=Symbol.for("react.profiler"),zd=Symbol.for("react.provider"),jd=Symbol.for("react.context"),Pd=Symbol.for("react.forward_ref"),Nd=Symbol.for("react.suspense"),$d=Symbol.for("react.memo"),Ld=Symbol.for("react.lazy"),os=Symbol.iterator;function Td(e){return e===null||typeof e!="object"?null:(e=os&&e[os]||e["@@iterator"],typeof e=="function"?e:null)}var Du={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Fu=Object.assign,Au={};function Bn(e,t,n){this.props=e,this.context=t,this.refs=Au,this.updater=n||Du}Bn.prototype.isReactComponent={};Bn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Bn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Vu(){}Vu.prototype=Bn.prototype;function oa(e,t,n){this.props=e,this.context=t,this.refs=Au,this.updater=n||Du}var la=oa.prototype=new Vu;la.constructor=oa;Fu(la,Bn.prototype);la.isPureReactComponent=!0;var ls=Array.isArray,Bu=Object.prototype.hasOwnProperty,aa={current:null},Hu={key:!0,ref:!0,__self:!0,__source:!0};function Uu(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)Bu.call(t,r)&&!Hu.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var s=Array(a),c=0;c<a;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Rr,type:e,key:o,ref:l,props:i,_owner:aa.current}}function Md(e,t){return{$$typeof:Rr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function sa(e){return typeof e=="object"&&e!==null&&e.$$typeof===Rr}function Od(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var as=/\/+/g;function jo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Od(""+e.key):t.toString(36)}function ui(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Rr:case kd:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+jo(l,0):r,ls(i)?(n="",e!=null&&(n=e.replace(as,"$&/")+"/"),ui(i,t,n,"",function(c){return c})):i!=null&&(sa(i)&&(i=Md(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(as,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",ls(e))for(var a=0;a<e.length;a++){o=e[a];var s=r+jo(o,a);l+=ui(o,t,n,s,i)}else if(s=Td(e),typeof s=="function")for(e=s.call(e),a=0;!(o=e.next()).done;)o=o.value,s=r+jo(o,a++),l+=ui(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Ur(e,t,n){if(e==null)return e;var r=[],i=0;return ui(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Rd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var pe={current:null},ci={transition:null},Id={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:ci,ReactCurrentOwner:aa};M.Children={map:Ur,forEach:function(e,t,n){Ur(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ur(e,function(){t++}),t},toArray:function(e){return Ur(e,function(t){return t})||[]},only:function(e){if(!sa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=Bn;M.Fragment=Ed;M.Profiler=_d;M.PureComponent=oa;M.StrictMode=Cd;M.Suspense=Nd;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Id;M.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Fu({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=aa.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)Bu.call(t,s)&&!Hu.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var c=0;c<s;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Rr,type:e.type,key:i,ref:o,props:r,_owner:l}};M.createContext=function(e){return e={$$typeof:jd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:zd,_context:e},e.Consumer=e};M.createElement=Uu;M.createFactory=function(e){var t=Uu.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:Pd,render:e}};M.isValidElement=sa;M.lazy=function(e){return{$$typeof:Ld,_payload:{_status:-1,_result:e},_init:Rd}};M.memo=function(e,t){return{$$typeof:$d,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=ci.transition;ci.transition={};try{e()}finally{ci.transition=t}};M.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};M.useCallback=function(e,t){return pe.current.useCallback(e,t)};M.useContext=function(e){return pe.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return pe.current.useDeferredValue(e)};M.useEffect=function(e,t){return pe.current.useEffect(e,t)};M.useId=function(){return pe.current.useId()};M.useImperativeHandle=function(e,t,n){return pe.current.useImperativeHandle(e,t,n)};M.useInsertionEffect=function(e,t){return pe.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return pe.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return pe.current.useMemo(e,t)};M.useReducer=function(e,t,n){return pe.current.useReducer(e,t,n)};M.useRef=function(e){return pe.current.useRef(e)};M.useState=function(e){return pe.current.useState(e)};M.useSyncExternalStore=function(e,t,n){return pe.current.useSyncExternalStore(e,t,n)};M.useTransition=function(){return pe.current.useTransition()};M.version="18.2.0";Iu.exports=M;var oe=Iu.exports;const je=Sd(oe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dd=oe,Fd=Symbol.for("react.element"),Ad=Symbol.for("react.fragment"),Vd=Object.prototype.hasOwnProperty,Bd=Dd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Hd={key:!0,ref:!0,__self:!0,__source:!0};function Wu(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Vd.call(t,r)&&!Hd.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Fd,type:e,key:o,ref:l,props:i,_owner:Bd.current}}no.Fragment=Ad;no.jsx=Wu;no.jsxs=Wu;Ru.exports=no;var g=Ru.exports,il={},Qu={exports:{}},$e={},Yu={exports:{}},Gu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,P){var N=_.length;_.push(P);e:for(;0<N;){var D=N-1>>>1,F=_[D];if(0<i(F,P))_[D]=P,_[N]=F,N=D;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var P=_[0],N=_.pop();if(N!==P){_[0]=N;e:for(var D=0,F=_.length,Ht=F>>>1;D<Ht;){var Ve=2*(D+1)-1,ht=_[Ve],Ee=Ve+1,nt=_[Ee];if(0>i(ht,N))Ee<F&&0>i(nt,ht)?(_[D]=nt,_[Ee]=N,D=Ee):(_[D]=ht,_[Ve]=N,D=Ve);else if(Ee<F&&0>i(nt,N))_[D]=nt,_[Ee]=N,D=Ee;else break e}}return P}function i(_,P){var N=_.sortIndex-P.sortIndex;return N!==0?N:_.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],c=[],h=1,m=null,p=3,y=!1,w=!1,k=!1,L=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(_){for(var P=n(c);P!==null;){if(P.callback===null)r(c);else if(P.startTime<=_)r(c),P.sortIndex=P.expirationTime,t(s,P);else break;P=n(c)}}function v(_){if(k=!1,f(_),!w)if(n(s)!==null)w=!0,Qn(C);else{var P=n(c);P!==null&&Bt(v,P.startTime-_)}}function C(_,P){w=!1,k&&(k=!1,d(j),j=-1),y=!0;var N=p;try{for(f(P),m=n(s);m!==null&&(!(m.expirationTime>P)||_&&!ke());){var D=m.callback;if(typeof D=="function"){m.callback=null,p=m.priorityLevel;var F=D(m.expirationTime<=P);P=e.unstable_now(),typeof F=="function"?m.callback=F:m===n(s)&&r(s),f(P)}else r(s);m=n(s)}if(m!==null)var Ht=!0;else{var Ve=n(c);Ve!==null&&Bt(v,Ve.startTime-P),Ht=!1}return Ht}finally{m=null,p=N,y=!1}}var E=!1,x=null,j=-1,A=5,T=-1;function ke(){return!(e.unstable_now()-T<A)}function At(){if(x!==null){var _=e.unstable_now();T=_;var P=!0;try{P=x(!0,_)}finally{P?Vt():(E=!1,x=null)}}else E=!1}var Vt;if(typeof u=="function")Vt=function(){u(At)};else if(typeof MessageChannel<"u"){var Br=new MessageChannel,_o=Br.port2;Br.port1.onmessage=At,Vt=function(){_o.postMessage(null)}}else Vt=function(){L(At,0)};function Qn(_){x=_,E||(E=!0,Vt())}function Bt(_,P){j=L(function(){_(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){w||y||(w=!0,Qn(C))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(_){switch(p){case 1:case 2:case 3:var P=3;break;default:P=p}var N=p;p=P;try{return _()}finally{p=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,P){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var N=p;p=_;try{return P()}finally{p=N}},e.unstable_scheduleCallback=function(_,P,N){var D=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?D+N:D):N=D,_){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=N+F,_={id:h++,callback:P,priorityLevel:_,startTime:N,expirationTime:F,sortIndex:-1},N>D?(_.sortIndex=N,t(c,_),n(s)===null&&_===n(c)&&(k?(d(j),j=-1):k=!0,Bt(v,N-D))):(_.sortIndex=F,t(s,_),w||y||(w=!0,Qn(C))),_},e.unstable_shouldYield=ke,e.unstable_wrapCallback=function(_){var P=p;return function(){var N=p;p=P;try{return _.apply(this,arguments)}finally{p=N}}}})(Gu);Yu.exports=Gu;var Ud=Yu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ku=oe,Ne=Ud;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Xu=new Set,vr={};function ln(e,t){Nn(e,t),Nn(e+"Capture",t)}function Nn(e,t){for(vr[e]=t,e=0;e<t.length;e++)Xu.add(t[e])}var ut=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ol=Object.prototype.hasOwnProperty,Wd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ss={},us={};function Qd(e){return ol.call(us,e)?!0:ol.call(ss,e)?!1:Wd.test(e)?us[e]=!0:(ss[e]=!0,!1)}function Yd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Gd(e,t,n,r){if(t===null||typeof t>"u"||Yd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function me(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){le[e]=new me(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];le[t]=new me(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){le[e]=new me(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){le[e]=new me(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){le[e]=new me(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){le[e]=new me(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){le[e]=new me(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){le[e]=new me(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){le[e]=new me(e,5,!1,e.toLowerCase(),null,!1,!1)});var ua=/[\-:]([a-z])/g;function ca(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ua,ca);le[t]=new me(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ua,ca);le[t]=new me(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ua,ca);le[t]=new me(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){le[e]=new me(e,1,!1,e.toLowerCase(),null,!1,!1)});le.xlinkHref=new me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){le[e]=new me(e,1,!1,e.toLowerCase(),null,!0,!0)});function da(e,t,n,r){var i=le.hasOwnProperty(t)?le[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Gd(t,n,i,r)&&(n=null),r||i===null?Qd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var pt=Ku.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Wr=Symbol.for("react.element"),cn=Symbol.for("react.portal"),dn=Symbol.for("react.fragment"),fa=Symbol.for("react.strict_mode"),ll=Symbol.for("react.profiler"),Zu=Symbol.for("react.provider"),Ju=Symbol.for("react.context"),pa=Symbol.for("react.forward_ref"),al=Symbol.for("react.suspense"),sl=Symbol.for("react.suspense_list"),ma=Symbol.for("react.memo"),wt=Symbol.for("react.lazy"),qu=Symbol.for("react.offscreen"),cs=Symbol.iterator;function Gn(e){return e===null||typeof e!="object"?null:(e=cs&&e[cs]||e["@@iterator"],typeof e=="function"?e:null)}var G=Object.assign,Po;function nr(e){if(Po===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Po=t&&t[1]||""}return`
`+Po+e}var No=!1;function $o(e,t){if(!e||No)return"";No=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,a=o.length-1;1<=l&&0<=a&&i[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==o[a]){var s=`
`+i[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{No=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?nr(e):""}function Kd(e){switch(e.tag){case 5:return nr(e.type);case 16:return nr("Lazy");case 13:return nr("Suspense");case 19:return nr("SuspenseList");case 0:case 2:case 15:return e=$o(e.type,!1),e;case 11:return e=$o(e.type.render,!1),e;case 1:return e=$o(e.type,!0),e;default:return""}}function ul(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case dn:return"Fragment";case cn:return"Portal";case ll:return"Profiler";case fa:return"StrictMode";case al:return"Suspense";case sl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ju:return(e.displayName||"Context")+".Consumer";case Zu:return(e._context.displayName||"Context")+".Provider";case pa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ma:return t=e.displayName||null,t!==null?t:ul(e.type)||"Memo";case wt:t=e._payload,e=e._init;try{return ul(e(t))}catch{}}return null}function Xd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ul(t);case 8:return t===fa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Mt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function bu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Zd(e){var t=bu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Qr(e){e._valueTracker||(e._valueTracker=Zd(e))}function ec(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=bu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ji(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function cl(e,t){var n=t.checked;return G({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ds(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Mt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function tc(e,t){t=t.checked,t!=null&&da(e,"checked",t,!1)}function dl(e,t){tc(e,t);var n=Mt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?fl(e,t.type,n):t.hasOwnProperty("defaultValue")&&fl(e,t.type,Mt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function fs(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function fl(e,t,n){(t!=="number"||ji(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var rr=Array.isArray;function En(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Mt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function pl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return G({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ps(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(rr(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Mt(n)}}function nc(e,t){var n=Mt(t.value),r=Mt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ms(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function rc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ml(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?rc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Yr,ic=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Yr=Yr||document.createElement("div"),Yr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Yr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function yr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ar={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Jd=["Webkit","ms","Moz","O"];Object.keys(ar).forEach(function(e){Jd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ar[t]=ar[e]})});function oc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ar.hasOwnProperty(e)&&ar[e]?(""+t).trim():t+"px"}function lc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=oc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var qd=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function hl(e,t){if(t){if(qd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function gl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vl=null;function ha(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var yl=null,Cn=null,_n=null;function hs(e){if(e=Fr(e)){if(typeof yl!="function")throw Error(S(280));var t=e.stateNode;t&&(t=ao(t),yl(e.stateNode,e.type,t))}}function ac(e){Cn?_n?_n.push(e):_n=[e]:Cn=e}function sc(){if(Cn){var e=Cn,t=_n;if(_n=Cn=null,hs(e),t)for(e=0;e<t.length;e++)hs(t[e])}}function uc(e,t){return e(t)}function cc(){}var Lo=!1;function dc(e,t,n){if(Lo)return e(t,n);Lo=!0;try{return uc(e,t,n)}finally{Lo=!1,(Cn!==null||_n!==null)&&(cc(),sc())}}function wr(e,t){var n=e.stateNode;if(n===null)return null;var r=ao(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var wl=!1;if(ut)try{var Kn={};Object.defineProperty(Kn,"passive",{get:function(){wl=!0}}),window.addEventListener("test",Kn,Kn),window.removeEventListener("test",Kn,Kn)}catch{wl=!1}function bd(e,t,n,r,i,o,l,a,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var sr=!1,Pi=null,Ni=!1,xl=null,ef={onError:function(e){sr=!0,Pi=e}};function tf(e,t,n,r,i,o,l,a,s){sr=!1,Pi=null,bd.apply(ef,arguments)}function nf(e,t,n,r,i,o,l,a,s){if(tf.apply(this,arguments),sr){if(sr){var c=Pi;sr=!1,Pi=null}else throw Error(S(198));Ni||(Ni=!0,xl=c)}}function an(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function fc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function gs(e){if(an(e)!==e)throw Error(S(188))}function rf(e){var t=e.alternate;if(!t){if(t=an(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return gs(i),e;if(o===r)return gs(i),t;o=o.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function pc(e){return e=rf(e),e!==null?mc(e):null}function mc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=mc(e);if(t!==null)return t;e=e.sibling}return null}var hc=Ne.unstable_scheduleCallback,vs=Ne.unstable_cancelCallback,of=Ne.unstable_shouldYield,lf=Ne.unstable_requestPaint,X=Ne.unstable_now,af=Ne.unstable_getCurrentPriorityLevel,ga=Ne.unstable_ImmediatePriority,gc=Ne.unstable_UserBlockingPriority,$i=Ne.unstable_NormalPriority,sf=Ne.unstable_LowPriority,vc=Ne.unstable_IdlePriority,ro=null,et=null;function uf(e){if(et&&typeof et.onCommitFiberRoot=="function")try{et.onCommitFiberRoot(ro,e,void 0,(e.current.flags&128)===128)}catch{}}var Ye=Math.clz32?Math.clz32:ff,cf=Math.log,df=Math.LN2;function ff(e){return e>>>=0,e===0?32:31-(cf(e)/df|0)|0}var Gr=64,Kr=4194304;function ir(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Li(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?r=ir(a):(o&=l,o!==0&&(r=ir(o)))}else l=n&~i,l!==0?r=ir(l):o!==0&&(r=ir(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ye(t),i=1<<n,r|=e[n],t&=~i;return r}function pf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Ye(o),a=1<<l,s=i[l];s===-1?(!(a&n)||a&r)&&(i[l]=pf(a,t)):s<=t&&(e.expiredLanes|=a),o&=~a}}function Sl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function yc(){var e=Gr;return Gr<<=1,!(Gr&4194240)&&(Gr=64),e}function To(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ir(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ye(t),e[t]=n}function hf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ye(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function va(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ye(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var I=0;function wc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var xc,ya,Sc,kc,Ec,kl=!1,Xr=[],_t=null,zt=null,jt=null,xr=new Map,Sr=new Map,St=[],gf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ys(e,t){switch(e){case"focusin":case"focusout":_t=null;break;case"dragenter":case"dragleave":zt=null;break;case"mouseover":case"mouseout":jt=null;break;case"pointerover":case"pointerout":xr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sr.delete(t.pointerId)}}function Xn(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Fr(t),t!==null&&ya(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function vf(e,t,n,r,i){switch(t){case"focusin":return _t=Xn(_t,e,t,n,r,i),!0;case"dragenter":return zt=Xn(zt,e,t,n,r,i),!0;case"mouseover":return jt=Xn(jt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return xr.set(o,Xn(xr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Sr.set(o,Xn(Sr.get(o)||null,e,t,n,r,i)),!0}return!1}function Cc(e){var t=Yt(e.target);if(t!==null){var n=an(t);if(n!==null){if(t=n.tag,t===13){if(t=fc(n),t!==null){e.blockedOn=t,Ec(e.priority,function(){Sc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function di(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=El(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);vl=r,n.target.dispatchEvent(r),vl=null}else return t=Fr(n),t!==null&&ya(t),e.blockedOn=n,!1;t.shift()}return!0}function ws(e,t,n){di(e)&&n.delete(t)}function yf(){kl=!1,_t!==null&&di(_t)&&(_t=null),zt!==null&&di(zt)&&(zt=null),jt!==null&&di(jt)&&(jt=null),xr.forEach(ws),Sr.forEach(ws)}function Zn(e,t){e.blockedOn===t&&(e.blockedOn=null,kl||(kl=!0,Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority,yf)))}function kr(e){function t(i){return Zn(i,e)}if(0<Xr.length){Zn(Xr[0],e);for(var n=1;n<Xr.length;n++){var r=Xr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(_t!==null&&Zn(_t,e),zt!==null&&Zn(zt,e),jt!==null&&Zn(jt,e),xr.forEach(t),Sr.forEach(t),n=0;n<St.length;n++)r=St[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<St.length&&(n=St[0],n.blockedOn===null);)Cc(n),n.blockedOn===null&&St.shift()}var zn=pt.ReactCurrentBatchConfig,Ti=!0;function wf(e,t,n,r){var i=I,o=zn.transition;zn.transition=null;try{I=1,wa(e,t,n,r)}finally{I=i,zn.transition=o}}function xf(e,t,n,r){var i=I,o=zn.transition;zn.transition=null;try{I=4,wa(e,t,n,r)}finally{I=i,zn.transition=o}}function wa(e,t,n,r){if(Ti){var i=El(e,t,n,r);if(i===null)Ho(e,t,r,Mi,n),ys(e,r);else if(vf(i,e,t,n,r))r.stopPropagation();else if(ys(e,r),t&4&&-1<gf.indexOf(e)){for(;i!==null;){var o=Fr(i);if(o!==null&&xc(o),o=El(e,t,n,r),o===null&&Ho(e,t,r,Mi,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ho(e,t,r,null,n)}}var Mi=null;function El(e,t,n,r){if(Mi=null,e=ha(r),e=Yt(e),e!==null)if(t=an(e),t===null)e=null;else if(n=t.tag,n===13){if(e=fc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Mi=e,null}function _c(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(af()){case ga:return 1;case gc:return 4;case $i:case sf:return 16;case vc:return 536870912;default:return 16}default:return 16}}var Et=null,xa=null,fi=null;function zc(){if(fi)return fi;var e,t=xa,n=t.length,r,i="value"in Et?Et.value:Et.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return fi=i.slice(e,1<r?1-r:void 0)}function pi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zr(){return!0}function xs(){return!1}function Le(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Zr:xs,this.isPropagationStopped=xs,this}return G(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zr)},persist:function(){},isPersistent:Zr}),t}var Hn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sa=Le(Hn),Dr=G({},Hn,{view:0,detail:0}),Sf=Le(Dr),Mo,Oo,Jn,io=G({},Dr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ka,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jn&&(Jn&&e.type==="mousemove"?(Mo=e.screenX-Jn.screenX,Oo=e.screenY-Jn.screenY):Oo=Mo=0,Jn=e),Mo)},movementY:function(e){return"movementY"in e?e.movementY:Oo}}),Ss=Le(io),kf=G({},io,{dataTransfer:0}),Ef=Le(kf),Cf=G({},Dr,{relatedTarget:0}),Ro=Le(Cf),_f=G({},Hn,{animationName:0,elapsedTime:0,pseudoElement:0}),zf=Le(_f),jf=G({},Hn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Pf=Le(jf),Nf=G({},Hn,{data:0}),ks=Le(Nf),$f={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Tf[e])?!!t[e]:!1}function ka(){return Mf}var Of=G({},Dr,{key:function(e){if(e.key){var t=$f[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=pi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Lf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ka,charCode:function(e){return e.type==="keypress"?pi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?pi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Rf=Le(Of),If=G({},io,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Es=Le(If),Df=G({},Dr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ka}),Ff=Le(Df),Af=G({},Hn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vf=Le(Af),Bf=G({},io,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Hf=Le(Bf),Uf=[9,13,27,32],Ea=ut&&"CompositionEvent"in window,ur=null;ut&&"documentMode"in document&&(ur=document.documentMode);var Wf=ut&&"TextEvent"in window&&!ur,jc=ut&&(!Ea||ur&&8<ur&&11>=ur),Cs=" ",_s=!1;function Pc(e,t){switch(e){case"keyup":return Uf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fn=!1;function Qf(e,t){switch(e){case"compositionend":return Nc(t);case"keypress":return t.which!==32?null:(_s=!0,Cs);case"textInput":return e=t.data,e===Cs&&_s?null:e;default:return null}}function Yf(e,t){if(fn)return e==="compositionend"||!Ea&&Pc(e,t)?(e=zc(),fi=xa=Et=null,fn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return jc&&t.locale!=="ko"?null:t.data;default:return null}}var Gf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Gf[e.type]:t==="textarea"}function $c(e,t,n,r){ac(r),t=Oi(t,"onChange"),0<t.length&&(n=new Sa("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var cr=null,Er=null;function Kf(e){Bc(e,0)}function oo(e){var t=hn(e);if(ec(t))return e}function Xf(e,t){if(e==="change")return t}var Lc=!1;if(ut){var Io;if(ut){var Do="oninput"in document;if(!Do){var js=document.createElement("div");js.setAttribute("oninput","return;"),Do=typeof js.oninput=="function"}Io=Do}else Io=!1;Lc=Io&&(!document.documentMode||9<document.documentMode)}function Ps(){cr&&(cr.detachEvent("onpropertychange",Tc),Er=cr=null)}function Tc(e){if(e.propertyName==="value"&&oo(Er)){var t=[];$c(t,Er,e,ha(e)),dc(Kf,t)}}function Zf(e,t,n){e==="focusin"?(Ps(),cr=t,Er=n,cr.attachEvent("onpropertychange",Tc)):e==="focusout"&&Ps()}function Jf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return oo(Er)}function qf(e,t){if(e==="click")return oo(t)}function bf(e,t){if(e==="input"||e==="change")return oo(t)}function e1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Xe=typeof Object.is=="function"?Object.is:e1;function Cr(e,t){if(Xe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ol.call(t,i)||!Xe(e[i],t[i]))return!1}return!0}function Ns(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $s(e,t){var n=Ns(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ns(n)}}function Mc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Mc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Oc(){for(var e=window,t=ji();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ji(e.document)}return t}function Ca(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function t1(e){var t=Oc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Mc(n.ownerDocument.documentElement,n)){if(r!==null&&Ca(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=$s(n,o);var l=$s(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var n1=ut&&"documentMode"in document&&11>=document.documentMode,pn=null,Cl=null,dr=null,_l=!1;function Ls(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_l||pn==null||pn!==ji(r)||(r=pn,"selectionStart"in r&&Ca(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),dr&&Cr(dr,r)||(dr=r,r=Oi(Cl,"onSelect"),0<r.length&&(t=new Sa("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=pn)))}function Jr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var mn={animationend:Jr("Animation","AnimationEnd"),animationiteration:Jr("Animation","AnimationIteration"),animationstart:Jr("Animation","AnimationStart"),transitionend:Jr("Transition","TransitionEnd")},Fo={},Rc={};ut&&(Rc=document.createElement("div").style,"AnimationEvent"in window||(delete mn.animationend.animation,delete mn.animationiteration.animation,delete mn.animationstart.animation),"TransitionEvent"in window||delete mn.transitionend.transition);function lo(e){if(Fo[e])return Fo[e];if(!mn[e])return e;var t=mn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Rc)return Fo[e]=t[n];return e}var Ic=lo("animationend"),Dc=lo("animationiteration"),Fc=lo("animationstart"),Ac=lo("transitionend"),Vc=new Map,Ts="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rt(e,t){Vc.set(e,t),ln(t,[e])}for(var Ao=0;Ao<Ts.length;Ao++){var Vo=Ts[Ao],r1=Vo.toLowerCase(),i1=Vo[0].toUpperCase()+Vo.slice(1);Rt(r1,"on"+i1)}Rt(Ic,"onAnimationEnd");Rt(Dc,"onAnimationIteration");Rt(Fc,"onAnimationStart");Rt("dblclick","onDoubleClick");Rt("focusin","onFocus");Rt("focusout","onBlur");Rt(Ac,"onTransitionEnd");Nn("onMouseEnter",["mouseout","mouseover"]);Nn("onMouseLeave",["mouseout","mouseover"]);Nn("onPointerEnter",["pointerout","pointerover"]);Nn("onPointerLeave",["pointerout","pointerover"]);ln("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ln("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ln("onBeforeInput",["compositionend","keypress","textInput","paste"]);ln("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ln("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ln("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var or="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),o1=new Set("cancel close invalid load scroll toggle".split(" ").concat(or));function Ms(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,nf(r,t,void 0,e),e.currentTarget=null}function Bc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,c=a.currentTarget;if(a=a.listener,s!==o&&i.isPropagationStopped())break e;Ms(i,a,c),o=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,c=a.currentTarget,a=a.listener,s!==o&&i.isPropagationStopped())break e;Ms(i,a,c),o=s}}}if(Ni)throw e=xl,Ni=!1,xl=null,e}function B(e,t){var n=t[$l];n===void 0&&(n=t[$l]=new Set);var r=e+"__bubble";n.has(r)||(Hc(t,e,2,!1),n.add(r))}function Bo(e,t,n){var r=0;t&&(r|=4),Hc(n,e,r,t)}var qr="_reactListening"+Math.random().toString(36).slice(2);function _r(e){if(!e[qr]){e[qr]=!0,Xu.forEach(function(n){n!=="selectionchange"&&(o1.has(n)||Bo(n,!1,e),Bo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[qr]||(t[qr]=!0,Bo("selectionchange",!1,t))}}function Hc(e,t,n,r){switch(_c(t)){case 1:var i=wf;break;case 4:i=xf;break;default:i=wa}n=i.bind(null,t,n,e),i=void 0,!wl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ho(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;l=l.return}for(;a!==null;){if(l=Yt(a),l===null)return;if(s=l.tag,s===5||s===6){r=o=l;continue e}a=a.parentNode}}r=r.return}dc(function(){var c=o,h=ha(n),m=[];e:{var p=Vc.get(e);if(p!==void 0){var y=Sa,w=e;switch(e){case"keypress":if(pi(n)===0)break e;case"keydown":case"keyup":y=Rf;break;case"focusin":w="focus",y=Ro;break;case"focusout":w="blur",y=Ro;break;case"beforeblur":case"afterblur":y=Ro;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Ss;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Ef;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Ff;break;case Ic:case Dc:case Fc:y=zf;break;case Ac:y=Vf;break;case"scroll":y=Sf;break;case"wheel":y=Hf;break;case"copy":case"cut":case"paste":y=Pf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Es}var k=(t&4)!==0,L=!k&&e==="scroll",d=k?p!==null?p+"Capture":null:p;k=[];for(var u=c,f;u!==null;){f=u;var v=f.stateNode;if(f.tag===5&&v!==null&&(f=v,d!==null&&(v=wr(u,d),v!=null&&k.push(zr(u,v,f)))),L)break;u=u.return}0<k.length&&(p=new y(p,w,null,n,h),m.push({event:p,listeners:k}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",p&&n!==vl&&(w=n.relatedTarget||n.fromElement)&&(Yt(w)||w[ct]))break e;if((y||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,y?(w=n.relatedTarget||n.toElement,y=c,w=w?Yt(w):null,w!==null&&(L=an(w),w!==L||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=c),y!==w)){if(k=Ss,v="onMouseLeave",d="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(k=Es,v="onPointerLeave",d="onPointerEnter",u="pointer"),L=y==null?p:hn(y),f=w==null?p:hn(w),p=new k(v,u+"leave",y,n,h),p.target=L,p.relatedTarget=f,v=null,Yt(h)===c&&(k=new k(d,u+"enter",w,n,h),k.target=f,k.relatedTarget=L,v=k),L=v,y&&w)t:{for(k=y,d=w,u=0,f=k;f;f=sn(f))u++;for(f=0,v=d;v;v=sn(v))f++;for(;0<u-f;)k=sn(k),u--;for(;0<f-u;)d=sn(d),f--;for(;u--;){if(k===d||d!==null&&k===d.alternate)break t;k=sn(k),d=sn(d)}k=null}else k=null;y!==null&&Os(m,p,y,k,!1),w!==null&&L!==null&&Os(m,L,w,k,!0)}}e:{if(p=c?hn(c):window,y=p.nodeName&&p.nodeName.toLowerCase(),y==="select"||y==="input"&&p.type==="file")var C=Xf;else if(zs(p))if(Lc)C=bf;else{C=Jf;var E=Zf}else(y=p.nodeName)&&y.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(C=qf);if(C&&(C=C(e,c))){$c(m,C,n,h);break e}E&&E(e,p,c),e==="focusout"&&(E=p._wrapperState)&&E.controlled&&p.type==="number"&&fl(p,"number",p.value)}switch(E=c?hn(c):window,e){case"focusin":(zs(E)||E.contentEditable==="true")&&(pn=E,Cl=c,dr=null);break;case"focusout":dr=Cl=pn=null;break;case"mousedown":_l=!0;break;case"contextmenu":case"mouseup":case"dragend":_l=!1,Ls(m,n,h);break;case"selectionchange":if(n1)break;case"keydown":case"keyup":Ls(m,n,h)}var x;if(Ea)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else fn?Pc(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(jc&&n.locale!=="ko"&&(fn||j!=="onCompositionStart"?j==="onCompositionEnd"&&fn&&(x=zc()):(Et=h,xa="value"in Et?Et.value:Et.textContent,fn=!0)),E=Oi(c,j),0<E.length&&(j=new ks(j,e,null,n,h),m.push({event:j,listeners:E}),x?j.data=x:(x=Nc(n),x!==null&&(j.data=x)))),(x=Wf?Qf(e,n):Yf(e,n))&&(c=Oi(c,"onBeforeInput"),0<c.length&&(h=new ks("onBeforeInput","beforeinput",null,n,h),m.push({event:h,listeners:c}),h.data=x))}Bc(m,t)})}function zr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Oi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=wr(e,n),o!=null&&r.unshift(zr(e,o,i)),o=wr(e,t),o!=null&&r.push(zr(e,o,i))),e=e.return}return r}function sn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Os(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,c=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&c!==null&&(a=c,i?(s=wr(n,o),s!=null&&l.unshift(zr(n,s,a))):i||(s=wr(n,o),s!=null&&l.push(zr(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var l1=/\r\n?/g,a1=/\u0000|\uFFFD/g;function Rs(e){return(typeof e=="string"?e:""+e).replace(l1,`
`).replace(a1,"")}function br(e,t,n){if(t=Rs(t),Rs(e)!==t&&n)throw Error(S(425))}function Ri(){}var zl=null,jl=null;function Pl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Nl=typeof setTimeout=="function"?setTimeout:void 0,s1=typeof clearTimeout=="function"?clearTimeout:void 0,Is=typeof Promise=="function"?Promise:void 0,u1=typeof queueMicrotask=="function"?queueMicrotask:typeof Is<"u"?function(e){return Is.resolve(null).then(e).catch(c1)}:Nl;function c1(e){setTimeout(function(){throw e})}function Uo(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),kr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);kr(t)}function Pt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ds(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Un=Math.random().toString(36).slice(2),be="__reactFiber$"+Un,jr="__reactProps$"+Un,ct="__reactContainer$"+Un,$l="__reactEvents$"+Un,d1="__reactListeners$"+Un,f1="__reactHandles$"+Un;function Yt(e){var t=e[be];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ct]||n[be]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ds(e);e!==null;){if(n=e[be])return n;e=Ds(e)}return t}e=n,n=e.parentNode}return null}function Fr(e){return e=e[be]||e[ct],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function hn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function ao(e){return e[jr]||null}var Ll=[],gn=-1;function It(e){return{current:e}}function U(e){0>gn||(e.current=Ll[gn],Ll[gn]=null,gn--)}function V(e,t){gn++,Ll[gn]=e.current,e.current=t}var Ot={},ce=It(Ot),we=It(!1),en=Ot;function $n(e,t){var n=e.type.contextTypes;if(!n)return Ot;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function xe(e){return e=e.childContextTypes,e!=null}function Ii(){U(we),U(ce)}function Fs(e,t,n){if(ce.current!==Ot)throw Error(S(168));V(ce,t),V(we,n)}function Uc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(S(108,Xd(e)||"Unknown",i));return G({},n,r)}function Di(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ot,en=ce.current,V(ce,e),V(we,we.current),!0}function As(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=Uc(e,t,en),r.__reactInternalMemoizedMergedChildContext=e,U(we),U(ce),V(ce,e)):U(we),V(we,n)}var ot=null,so=!1,Wo=!1;function Wc(e){ot===null?ot=[e]:ot.push(e)}function p1(e){so=!0,Wc(e)}function Dt(){if(!Wo&&ot!==null){Wo=!0;var e=0,t=I;try{var n=ot;for(I=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ot=null,so=!1}catch(i){throw ot!==null&&(ot=ot.slice(e+1)),hc(ga,Dt),i}finally{I=t,Wo=!1}}return null}var vn=[],yn=0,Fi=null,Ai=0,Me=[],Oe=0,tn=null,lt=1,at="";function Wt(e,t){vn[yn++]=Ai,vn[yn++]=Fi,Fi=e,Ai=t}function Qc(e,t,n){Me[Oe++]=lt,Me[Oe++]=at,Me[Oe++]=tn,tn=e;var r=lt;e=at;var i=32-Ye(r)-1;r&=~(1<<i),n+=1;var o=32-Ye(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,lt=1<<32-Ye(t)+i|n<<i|r,at=o+e}else lt=1<<o|n<<i|r,at=e}function _a(e){e.return!==null&&(Wt(e,1),Qc(e,1,0))}function za(e){for(;e===Fi;)Fi=vn[--yn],vn[yn]=null,Ai=vn[--yn],vn[yn]=null;for(;e===tn;)tn=Me[--Oe],Me[Oe]=null,at=Me[--Oe],Me[Oe]=null,lt=Me[--Oe],Me[Oe]=null}var Pe=null,ze=null,W=!1,Qe=null;function Yc(e,t){var n=Re(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Vs(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Pe=e,ze=Pt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Pe=e,ze=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=tn!==null?{id:lt,overflow:at}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Re(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Pe=e,ze=null,!0):!1;default:return!1}}function Tl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ml(e){if(W){var t=ze;if(t){var n=t;if(!Vs(e,t)){if(Tl(e))throw Error(S(418));t=Pt(n.nextSibling);var r=Pe;t&&Vs(e,t)?Yc(r,n):(e.flags=e.flags&-4097|2,W=!1,Pe=e)}}else{if(Tl(e))throw Error(S(418));e.flags=e.flags&-4097|2,W=!1,Pe=e}}}function Bs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Pe=e}function ei(e){if(e!==Pe)return!1;if(!W)return Bs(e),W=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Pl(e.type,e.memoizedProps)),t&&(t=ze)){if(Tl(e))throw Gc(),Error(S(418));for(;t;)Yc(e,t),t=Pt(t.nextSibling)}if(Bs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ze=Pt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ze=null}}else ze=Pe?Pt(e.stateNode.nextSibling):null;return!0}function Gc(){for(var e=ze;e;)e=Pt(e.nextSibling)}function Ln(){ze=Pe=null,W=!1}function ja(e){Qe===null?Qe=[e]:Qe.push(e)}var m1=pt.ReactCurrentBatchConfig;function Ue(e,t){if(e&&e.defaultProps){t=G({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Vi=It(null),Bi=null,wn=null,Pa=null;function Na(){Pa=wn=Bi=null}function $a(e){var t=Vi.current;U(Vi),e._currentValue=t}function Ol(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function jn(e,t){Bi=e,Pa=wn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ve=!0),e.firstContext=null)}function De(e){var t=e._currentValue;if(Pa!==e)if(e={context:e,memoizedValue:t,next:null},wn===null){if(Bi===null)throw Error(S(308));wn=e,Bi.dependencies={lanes:0,firstContext:e}}else wn=wn.next=e;return t}var Gt=null;function La(e){Gt===null?Gt=[e]:Gt.push(e)}function Kc(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,La(t)):(n.next=i.next,i.next=n),t.interleaved=n,dt(e,r)}function dt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var xt=!1;function Ta(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function st(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Nt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,O&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,dt(e,n)}return i=r.interleaved,i===null?(t.next=t,La(r)):(t.next=i.next,i.next=t),r.interleaved=t,dt(e,n)}function mi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,va(e,n)}}function Hs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Hi(e,t,n,r){var i=e.updateQueue;xt=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var s=a,c=s.next;s.next=null,l===null?o=c:l.next=c,l=s;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==l&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=s))}if(o!==null){var m=i.baseState;l=0,h=c=s=null,a=o;do{var p=a.lane,y=a.eventTime;if((r&p)===p){h!==null&&(h=h.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,k=a;switch(p=t,y=n,k.tag){case 1:if(w=k.payload,typeof w=="function"){m=w.call(y,m,p);break e}m=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=k.payload,p=typeof w=="function"?w.call(y,m,p):w,p==null)break e;m=G({},m,p);break e;case 2:xt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else y={eventTime:y,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=y,s=m):h=h.next=y,l|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(h===null&&(s=m),i.baseState=s,i.firstBaseUpdate=c,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);rn|=l,e.lanes=l,e.memoizedState=m}}function Us(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var Zc=new Ku.Component().refs;function Rl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:G({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var uo={isMounted:function(e){return(e=e._reactInternals)?an(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=fe(),i=Lt(e),o=st(r,i);o.payload=t,n!=null&&(o.callback=n),t=Nt(e,o,i),t!==null&&(Ge(t,e,i,r),mi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=fe(),i=Lt(e),o=st(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Nt(e,o,i),t!==null&&(Ge(t,e,i,r),mi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=fe(),r=Lt(e),i=st(n,r);i.tag=2,t!=null&&(i.callback=t),t=Nt(e,i,r),t!==null&&(Ge(t,e,r,n),mi(t,e,r))}};function Ws(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Cr(n,r)||!Cr(i,o):!0}function Jc(e,t,n){var r=!1,i=Ot,o=t.contextType;return typeof o=="object"&&o!==null?o=De(o):(i=xe(t)?en:ce.current,r=t.contextTypes,o=(r=r!=null)?$n(e,i):Ot),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=uo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Qs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&uo.enqueueReplaceState(t,t.state,null)}function Il(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Zc,Ta(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=De(o):(o=xe(t)?en:ce.current,i.context=$n(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Rl(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&uo.enqueueReplaceState(i,i.state,null),Hi(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function qn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var a=i.refs;a===Zc&&(a=i.refs={}),l===null?delete a[o]:a[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function ti(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ys(e){var t=e._init;return t(e._payload)}function qc(e){function t(d,u){if(e){var f=d.deletions;f===null?(d.deletions=[u],d.flags|=16):f.push(u)}}function n(d,u){if(!e)return null;for(;u!==null;)t(d,u),u=u.sibling;return null}function r(d,u){for(d=new Map;u!==null;)u.key!==null?d.set(u.key,u):d.set(u.index,u),u=u.sibling;return d}function i(d,u){return d=Tt(d,u),d.index=0,d.sibling=null,d}function o(d,u,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<u?(d.flags|=2,u):f):(d.flags|=2,u)):(d.flags|=1048576,u)}function l(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,u,f,v){return u===null||u.tag!==6?(u=Jo(f,d.mode,v),u.return=d,u):(u=i(u,f),u.return=d,u)}function s(d,u,f,v){var C=f.type;return C===dn?h(d,u,f.props.children,v,f.key):u!==null&&(u.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===wt&&Ys(C)===u.type)?(v=i(u,f.props),v.ref=qn(d,u,f),v.return=d,v):(v=xi(f.type,f.key,f.props,null,d.mode,v),v.ref=qn(d,u,f),v.return=d,v)}function c(d,u,f,v){return u===null||u.tag!==4||u.stateNode.containerInfo!==f.containerInfo||u.stateNode.implementation!==f.implementation?(u=qo(f,d.mode,v),u.return=d,u):(u=i(u,f.children||[]),u.return=d,u)}function h(d,u,f,v,C){return u===null||u.tag!==7?(u=Jt(f,d.mode,v,C),u.return=d,u):(u=i(u,f),u.return=d,u)}function m(d,u,f){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Jo(""+u,d.mode,f),u.return=d,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Wr:return f=xi(u.type,u.key,u.props,null,d.mode,f),f.ref=qn(d,null,u),f.return=d,f;case cn:return u=qo(u,d.mode,f),u.return=d,u;case wt:var v=u._init;return m(d,v(u._payload),f)}if(rr(u)||Gn(u))return u=Jt(u,d.mode,f,null),u.return=d,u;ti(d,u)}return null}function p(d,u,f,v){var C=u!==null?u.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return C!==null?null:a(d,u,""+f,v);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Wr:return f.key===C?s(d,u,f,v):null;case cn:return f.key===C?c(d,u,f,v):null;case wt:return C=f._init,p(d,u,C(f._payload),v)}if(rr(f)||Gn(f))return C!==null?null:h(d,u,f,v,null);ti(d,f)}return null}function y(d,u,f,v,C){if(typeof v=="string"&&v!==""||typeof v=="number")return d=d.get(f)||null,a(u,d,""+v,C);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Wr:return d=d.get(v.key===null?f:v.key)||null,s(u,d,v,C);case cn:return d=d.get(v.key===null?f:v.key)||null,c(u,d,v,C);case wt:var E=v._init;return y(d,u,f,E(v._payload),C)}if(rr(v)||Gn(v))return d=d.get(f)||null,h(u,d,v,C,null);ti(u,v)}return null}function w(d,u,f,v){for(var C=null,E=null,x=u,j=u=0,A=null;x!==null&&j<f.length;j++){x.index>j?(A=x,x=null):A=x.sibling;var T=p(d,x,f[j],v);if(T===null){x===null&&(x=A);break}e&&x&&T.alternate===null&&t(d,x),u=o(T,u,j),E===null?C=T:E.sibling=T,E=T,x=A}if(j===f.length)return n(d,x),W&&Wt(d,j),C;if(x===null){for(;j<f.length;j++)x=m(d,f[j],v),x!==null&&(u=o(x,u,j),E===null?C=x:E.sibling=x,E=x);return W&&Wt(d,j),C}for(x=r(d,x);j<f.length;j++)A=y(x,d,j,f[j],v),A!==null&&(e&&A.alternate!==null&&x.delete(A.key===null?j:A.key),u=o(A,u,j),E===null?C=A:E.sibling=A,E=A);return e&&x.forEach(function(ke){return t(d,ke)}),W&&Wt(d,j),C}function k(d,u,f,v){var C=Gn(f);if(typeof C!="function")throw Error(S(150));if(f=C.call(f),f==null)throw Error(S(151));for(var E=C=null,x=u,j=u=0,A=null,T=f.next();x!==null&&!T.done;j++,T=f.next()){x.index>j?(A=x,x=null):A=x.sibling;var ke=p(d,x,T.value,v);if(ke===null){x===null&&(x=A);break}e&&x&&ke.alternate===null&&t(d,x),u=o(ke,u,j),E===null?C=ke:E.sibling=ke,E=ke,x=A}if(T.done)return n(d,x),W&&Wt(d,j),C;if(x===null){for(;!T.done;j++,T=f.next())T=m(d,T.value,v),T!==null&&(u=o(T,u,j),E===null?C=T:E.sibling=T,E=T);return W&&Wt(d,j),C}for(x=r(d,x);!T.done;j++,T=f.next())T=y(x,d,j,T.value,v),T!==null&&(e&&T.alternate!==null&&x.delete(T.key===null?j:T.key),u=o(T,u,j),E===null?C=T:E.sibling=T,E=T);return e&&x.forEach(function(At){return t(d,At)}),W&&Wt(d,j),C}function L(d,u,f,v){if(typeof f=="object"&&f!==null&&f.type===dn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Wr:e:{for(var C=f.key,E=u;E!==null;){if(E.key===C){if(C=f.type,C===dn){if(E.tag===7){n(d,E.sibling),u=i(E,f.props.children),u.return=d,d=u;break e}}else if(E.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===wt&&Ys(C)===E.type){n(d,E.sibling),u=i(E,f.props),u.ref=qn(d,E,f),u.return=d,d=u;break e}n(d,E);break}else t(d,E);E=E.sibling}f.type===dn?(u=Jt(f.props.children,d.mode,v,f.key),u.return=d,d=u):(v=xi(f.type,f.key,f.props,null,d.mode,v),v.ref=qn(d,u,f),v.return=d,d=v)}return l(d);case cn:e:{for(E=f.key;u!==null;){if(u.key===E)if(u.tag===4&&u.stateNode.containerInfo===f.containerInfo&&u.stateNode.implementation===f.implementation){n(d,u.sibling),u=i(u,f.children||[]),u.return=d,d=u;break e}else{n(d,u);break}else t(d,u);u=u.sibling}u=qo(f,d.mode,v),u.return=d,d=u}return l(d);case wt:return E=f._init,L(d,u,E(f._payload),v)}if(rr(f))return w(d,u,f,v);if(Gn(f))return k(d,u,f,v);ti(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,u!==null&&u.tag===6?(n(d,u.sibling),u=i(u,f),u.return=d,d=u):(n(d,u),u=Jo(f,d.mode,v),u.return=d,d=u),l(d)):n(d,u)}return L}var Tn=qc(!0),bc=qc(!1),Ar={},tt=It(Ar),Pr=It(Ar),Nr=It(Ar);function Kt(e){if(e===Ar)throw Error(S(174));return e}function Ma(e,t){switch(V(Nr,t),V(Pr,e),V(tt,Ar),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ml(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ml(t,e)}U(tt),V(tt,t)}function Mn(){U(tt),U(Pr),U(Nr)}function e0(e){Kt(Nr.current);var t=Kt(tt.current),n=ml(t,e.type);t!==n&&(V(Pr,e),V(tt,n))}function Oa(e){Pr.current===e&&(U(tt),U(Pr))}var Q=It(0);function Ui(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Qo=[];function Ra(){for(var e=0;e<Qo.length;e++)Qo[e]._workInProgressVersionPrimary=null;Qo.length=0}var hi=pt.ReactCurrentDispatcher,Yo=pt.ReactCurrentBatchConfig,nn=0,Y=null,q=null,ee=null,Wi=!1,fr=!1,$r=0,h1=0;function ae(){throw Error(S(321))}function Ia(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Xe(e[n],t[n]))return!1;return!0}function Da(e,t,n,r,i,o){if(nn=o,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,hi.current=e===null||e.memoizedState===null?w1:x1,e=n(r,i),fr){o=0;do{if(fr=!1,$r=0,25<=o)throw Error(S(301));o+=1,ee=q=null,t.updateQueue=null,hi.current=S1,e=n(r,i)}while(fr)}if(hi.current=Qi,t=q!==null&&q.next!==null,nn=0,ee=q=Y=null,Wi=!1,t)throw Error(S(300));return e}function Fa(){var e=$r!==0;return $r=0,e}function Je(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?Y.memoizedState=ee=e:ee=ee.next=e,ee}function Fe(){if(q===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=q.next;var t=ee===null?Y.memoizedState:ee.next;if(t!==null)ee=t,q=e;else{if(e===null)throw Error(S(310));q=e,e={memoizedState:q.memoizedState,baseState:q.baseState,baseQueue:q.baseQueue,queue:q.queue,next:null},ee===null?Y.memoizedState=ee=e:ee=ee.next=e}return ee}function Lr(e,t){return typeof t=="function"?t(e):t}function Go(e){var t=Fe(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=q,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=l=null,s=null,c=o;do{var h=c.lane;if((nn&h)===h)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(a=s=m,l=r):s=s.next=m,Y.lanes|=h,rn|=h}c=c.next}while(c!==null&&c!==o);s===null?l=r:s.next=a,Xe(r,t.memoizedState)||(ve=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Y.lanes|=o,rn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ko(e){var t=Fe(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Xe(o,t.memoizedState)||(ve=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function t0(){}function n0(e,t){var n=Y,r=Fe(),i=t(),o=!Xe(r.memoizedState,i);if(o&&(r.memoizedState=i,ve=!0),r=r.queue,Aa(o0.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ee!==null&&ee.memoizedState.tag&1){if(n.flags|=2048,Tr(9,i0.bind(null,n,r,i,t),void 0,null),ne===null)throw Error(S(349));nn&30||r0(n,t,i)}return i}function r0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function i0(e,t,n,r){t.value=n,t.getSnapshot=r,l0(t)&&a0(e)}function o0(e,t,n){return n(function(){l0(t)&&a0(e)})}function l0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Xe(e,n)}catch{return!0}}function a0(e){var t=dt(e,1);t!==null&&Ge(t,e,1,-1)}function Gs(e){var t=Je();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Lr,lastRenderedState:e},t.queue=e,e=e.dispatch=y1.bind(null,Y,e),[t.memoizedState,e]}function Tr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function s0(){return Fe().memoizedState}function gi(e,t,n,r){var i=Je();Y.flags|=e,i.memoizedState=Tr(1|t,n,void 0,r===void 0?null:r)}function co(e,t,n,r){var i=Fe();r=r===void 0?null:r;var o=void 0;if(q!==null){var l=q.memoizedState;if(o=l.destroy,r!==null&&Ia(r,l.deps)){i.memoizedState=Tr(t,n,o,r);return}}Y.flags|=e,i.memoizedState=Tr(1|t,n,o,r)}function Ks(e,t){return gi(8390656,8,e,t)}function Aa(e,t){return co(2048,8,e,t)}function u0(e,t){return co(4,2,e,t)}function c0(e,t){return co(4,4,e,t)}function d0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function f0(e,t,n){return n=n!=null?n.concat([e]):null,co(4,4,d0.bind(null,t,e),n)}function Va(){}function p0(e,t){var n=Fe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ia(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function m0(e,t){var n=Fe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ia(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function h0(e,t,n){return nn&21?(Xe(n,t)||(n=yc(),Y.lanes|=n,rn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ve=!0),e.memoizedState=n)}function g1(e,t){var n=I;I=n!==0&&4>n?n:4,e(!0);var r=Yo.transition;Yo.transition={};try{e(!1),t()}finally{I=n,Yo.transition=r}}function g0(){return Fe().memoizedState}function v1(e,t,n){var r=Lt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},v0(e))y0(t,n);else if(n=Kc(e,t,n,r),n!==null){var i=fe();Ge(n,e,r,i),w0(n,t,r)}}function y1(e,t,n){var r=Lt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(v0(e))y0(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,a=o(l,n);if(i.hasEagerState=!0,i.eagerState=a,Xe(a,l)){var s=t.interleaved;s===null?(i.next=i,La(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=Kc(e,t,i,r),n!==null&&(i=fe(),Ge(n,e,r,i),w0(n,t,r))}}function v0(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function y0(e,t){fr=Wi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function w0(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,va(e,n)}}var Qi={readContext:De,useCallback:ae,useContext:ae,useEffect:ae,useImperativeHandle:ae,useInsertionEffect:ae,useLayoutEffect:ae,useMemo:ae,useReducer:ae,useRef:ae,useState:ae,useDebugValue:ae,useDeferredValue:ae,useTransition:ae,useMutableSource:ae,useSyncExternalStore:ae,useId:ae,unstable_isNewReconciler:!1},w1={readContext:De,useCallback:function(e,t){return Je().memoizedState=[e,t===void 0?null:t],e},useContext:De,useEffect:Ks,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,gi(4194308,4,d0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return gi(4194308,4,e,t)},useInsertionEffect:function(e,t){return gi(4,2,e,t)},useMemo:function(e,t){var n=Je();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Je();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=v1.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var t=Je();return e={current:e},t.memoizedState=e},useState:Gs,useDebugValue:Va,useDeferredValue:function(e){return Je().memoizedState=e},useTransition:function(){var e=Gs(!1),t=e[0];return e=g1.bind(null,e[1]),Je().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Y,i=Je();if(W){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),ne===null)throw Error(S(349));nn&30||r0(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Ks(o0.bind(null,r,o,e),[e]),r.flags|=2048,Tr(9,i0.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Je(),t=ne.identifierPrefix;if(W){var n=at,r=lt;n=(r&~(1<<32-Ye(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=$r++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=h1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},x1={readContext:De,useCallback:p0,useContext:De,useEffect:Aa,useImperativeHandle:f0,useInsertionEffect:u0,useLayoutEffect:c0,useMemo:m0,useReducer:Go,useRef:s0,useState:function(){return Go(Lr)},useDebugValue:Va,useDeferredValue:function(e){var t=Fe();return h0(t,q.memoizedState,e)},useTransition:function(){var e=Go(Lr)[0],t=Fe().memoizedState;return[e,t]},useMutableSource:t0,useSyncExternalStore:n0,useId:g0,unstable_isNewReconciler:!1},S1={readContext:De,useCallback:p0,useContext:De,useEffect:Aa,useImperativeHandle:f0,useInsertionEffect:u0,useLayoutEffect:c0,useMemo:m0,useReducer:Ko,useRef:s0,useState:function(){return Ko(Lr)},useDebugValue:Va,useDeferredValue:function(e){var t=Fe();return q===null?t.memoizedState=e:h0(t,q.memoizedState,e)},useTransition:function(){var e=Ko(Lr)[0],t=Fe().memoizedState;return[e,t]},useMutableSource:t0,useSyncExternalStore:n0,useId:g0,unstable_isNewReconciler:!1};function On(e,t){try{var n="",r=t;do n+=Kd(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Xo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Dl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var k1=typeof WeakMap=="function"?WeakMap:Map;function x0(e,t,n){n=st(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Gi||(Gi=!0,Gl=r),Dl(e,t)},n}function S0(e,t,n){n=st(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Dl(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Dl(e,t),typeof r!="function"&&($t===null?$t=new Set([this]):$t.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Xs(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new k1;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=I1.bind(null,e,t,n),t.then(e,e))}function Zs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Js(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=st(-1,1),t.tag=2,Nt(n,t,1))),n.lanes|=1),e)}var E1=pt.ReactCurrentOwner,ve=!1;function de(e,t,n,r){t.child=e===null?bc(t,null,n,r):Tn(t,e.child,n,r)}function qs(e,t,n,r,i){n=n.render;var o=t.ref;return jn(t,i),r=Da(e,t,n,r,o,i),n=Fa(),e!==null&&!ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ft(e,t,i)):(W&&n&&_a(t),t.flags|=1,de(e,t,r,i),t.child)}function bs(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Ka(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,k0(e,t,o,r,i)):(e=xi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Cr,n(l,r)&&e.ref===t.ref)return ft(e,t,i)}return t.flags|=1,e=Tt(o,r),e.ref=t.ref,e.return=t,t.child=e}function k0(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Cr(o,r)&&e.ref===t.ref)if(ve=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(ve=!0);else return t.lanes=e.lanes,ft(e,t,i)}return Fl(e,t,n,r,i)}function E0(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(Sn,_e),_e|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,V(Sn,_e),_e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,V(Sn,_e),_e|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,V(Sn,_e),_e|=r;return de(e,t,i,n),t.child}function C0(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Fl(e,t,n,r,i){var o=xe(n)?en:ce.current;return o=$n(t,o),jn(t,i),n=Da(e,t,n,r,o,i),r=Fa(),e!==null&&!ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ft(e,t,i)):(W&&r&&_a(t),t.flags|=1,de(e,t,n,i),t.child)}function eu(e,t,n,r,i){if(xe(n)){var o=!0;Di(t)}else o=!1;if(jn(t,i),t.stateNode===null)vi(e,t),Jc(t,n,r),Il(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=De(c):(c=xe(n)?en:ce.current,c=$n(t,c));var h=n.getDerivedStateFromProps,m=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==c)&&Qs(t,l,r,c),xt=!1;var p=t.memoizedState;l.state=p,Hi(t,r,l,i),s=t.memoizedState,a!==r||p!==s||we.current||xt?(typeof h=="function"&&(Rl(t,n,h,r),s=t.memoizedState),(a=xt||Ws(t,n,a,r,p,s,c))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=c,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Xc(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Ue(t.type,a),l.props=c,m=t.pendingProps,p=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=De(s):(s=xe(n)?en:ce.current,s=$n(t,s));var y=n.getDerivedStateFromProps;(h=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==m||p!==s)&&Qs(t,l,r,s),xt=!1,p=t.memoizedState,l.state=p,Hi(t,r,l,i);var w=t.memoizedState;a!==m||p!==w||we.current||xt?(typeof y=="function"&&(Rl(t,n,y,r),w=t.memoizedState),(c=xt||Ws(t,n,c,r,p,w,s)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,w,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,w,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),l.props=r,l.state=w,l.context=s,r=c):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Al(e,t,n,r,o,i)}function Al(e,t,n,r,i,o){C0(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&As(t,n,!1),ft(e,t,o);r=t.stateNode,E1.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Tn(t,e.child,null,o),t.child=Tn(t,null,a,o)):de(e,t,a,o),t.memoizedState=r.state,i&&As(t,n,!0),t.child}function _0(e){var t=e.stateNode;t.pendingContext?Fs(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Fs(e,t.context,!1),Ma(e,t.containerInfo)}function tu(e,t,n,r,i){return Ln(),ja(i),t.flags|=256,de(e,t,n,r),t.child}var Vl={dehydrated:null,treeContext:null,retryLane:0};function Bl(e){return{baseLanes:e,cachePool:null,transitions:null}}function z0(e,t,n){var r=t.pendingProps,i=Q.current,o=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),V(Q,i&1),e===null)return Ml(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=mo(l,r,0,null),e=Jt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Bl(n),t.memoizedState=Vl,e):Ba(t,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return C1(e,t,l,r,a,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,a=i.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Tt(i,s),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Tt(a,o):(o=Jt(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?Bl(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=Vl,r}return o=e.child,e=o.sibling,r=Tt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ba(e,t){return t=mo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ni(e,t,n,r){return r!==null&&ja(r),Tn(t,e.child,null,n),e=Ba(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function C1(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=Xo(Error(S(422))),ni(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=mo({mode:"visible",children:r.children},i,0,null),o=Jt(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Tn(t,e.child,null,l),t.child.memoizedState=Bl(l),t.memoizedState=Vl,o);if(!(t.mode&1))return ni(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(S(419)),r=Xo(o,r,void 0),ni(e,t,l,r)}if(a=(l&e.childLanes)!==0,ve||a){if(r=ne,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,dt(e,i),Ge(r,e,i,-1))}return Ga(),r=Xo(Error(S(421))),ni(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=D1.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ze=Pt(i.nextSibling),Pe=t,W=!0,Qe=null,e!==null&&(Me[Oe++]=lt,Me[Oe++]=at,Me[Oe++]=tn,lt=e.id,at=e.overflow,tn=t),t=Ba(t,r.children),t.flags|=4096,t)}function nu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ol(e.return,t,n)}function Zo(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function j0(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(de(e,t,r.children,n),r=Q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&nu(e,n,t);else if(e.tag===19)nu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(V(Q,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ui(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Zo(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ui(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Zo(t,!0,n,null,o);break;case"together":Zo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function vi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ft(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),rn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=Tt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Tt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function _1(e,t,n){switch(t.tag){case 3:_0(t),Ln();break;case 5:e0(t);break;case 1:xe(t.type)&&Di(t);break;case 4:Ma(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;V(Vi,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(V(Q,Q.current&1),t.flags|=128,null):n&t.child.childLanes?z0(e,t,n):(V(Q,Q.current&1),e=ft(e,t,n),e!==null?e.sibling:null);V(Q,Q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return j0(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),V(Q,Q.current),r)break;return null;case 22:case 23:return t.lanes=0,E0(e,t,n)}return ft(e,t,n)}var P0,Hl,N0,$0;P0=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Hl=function(){};N0=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Kt(tt.current);var o=null;switch(n){case"input":i=cl(e,i),r=cl(e,r),o=[];break;case"select":i=G({},i,{value:void 0}),r=G({},r,{value:void 0}),o=[];break;case"textarea":i=pl(e,i),r=pl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ri)}hl(n,r);var l;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(vr.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var s=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&s!==a&&(s!=null||a!=null))if(c==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(o||(o=[]),o.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(o=o||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(vr.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&B("scroll",e),o||a===s||(o=[])):(o=o||[]).push(c,s))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};$0=function(e,t,n,r){n!==r&&(t.flags|=4)};function bn(e,t){if(!W)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function se(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function z1(e,t,n){var r=t.pendingProps;switch(za(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(t),null;case 1:return xe(t.type)&&Ii(),se(t),null;case 3:return r=t.stateNode,Mn(),U(we),U(ce),Ra(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ei(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Qe!==null&&(Zl(Qe),Qe=null))),Hl(e,t),se(t),null;case 5:Oa(t);var i=Kt(Nr.current);if(n=t.type,e!==null&&t.stateNode!=null)N0(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return se(t),null}if(e=Kt(tt.current),ei(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[be]=t,r[jr]=o,e=(t.mode&1)!==0,n){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(i=0;i<or.length;i++)B(or[i],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":ds(r,o),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},B("invalid",r);break;case"textarea":ps(r,o),B("invalid",r)}hl(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&br(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&br(r.textContent,a,e),i=["children",""+a]):vr.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&B("scroll",r)}switch(n){case"input":Qr(r),fs(r,o,!0);break;case"textarea":Qr(r),ms(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ri)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=rc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[be]=t,e[jr]=r,P0(e,t,!1,!1),t.stateNode=e;e:{switch(l=gl(n,r),n){case"dialog":B("cancel",e),B("close",e),i=r;break;case"iframe":case"object":case"embed":B("load",e),i=r;break;case"video":case"audio":for(i=0;i<or.length;i++)B(or[i],e);i=r;break;case"source":B("error",e),i=r;break;case"img":case"image":case"link":B("error",e),B("load",e),i=r;break;case"details":B("toggle",e),i=r;break;case"input":ds(e,r),i=cl(e,r),B("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=G({},r,{value:void 0}),B("invalid",e);break;case"textarea":ps(e,r),i=pl(e,r),B("invalid",e);break;default:i=r}hl(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="style"?lc(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&ic(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&yr(e,s):typeof s=="number"&&yr(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(vr.hasOwnProperty(o)?s!=null&&o==="onScroll"&&B("scroll",e):s!=null&&da(e,o,s,l))}switch(n){case"input":Qr(e),fs(e,r,!1);break;case"textarea":Qr(e),ms(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Mt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?En(e,!!r.multiple,o,!1):r.defaultValue!=null&&En(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ri)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return se(t),null;case 6:if(e&&t.stateNode!=null)$0(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=Kt(Nr.current),Kt(tt.current),ei(t)){if(r=t.stateNode,n=t.memoizedProps,r[be]=t,(o=r.nodeValue!==n)&&(e=Pe,e!==null))switch(e.tag){case 3:br(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&br(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[be]=t,t.stateNode=r}return se(t),null;case 13:if(U(Q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(W&&ze!==null&&t.mode&1&&!(t.flags&128))Gc(),Ln(),t.flags|=98560,o=!1;else if(o=ei(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(S(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(S(317));o[be]=t}else Ln(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;se(t),o=!1}else Qe!==null&&(Zl(Qe),Qe=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Q.current&1?b===0&&(b=3):Ga())),t.updateQueue!==null&&(t.flags|=4),se(t),null);case 4:return Mn(),Hl(e,t),e===null&&_r(t.stateNode.containerInfo),se(t),null;case 10:return $a(t.type._context),se(t),null;case 17:return xe(t.type)&&Ii(),se(t),null;case 19:if(U(Q),o=t.memoizedState,o===null)return se(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)bn(o,!1);else{if(b!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Ui(e),l!==null){for(t.flags|=128,bn(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return V(Q,Q.current&1|2),t.child}e=e.sibling}o.tail!==null&&X()>Rn&&(t.flags|=128,r=!0,bn(o,!1),t.lanes=4194304)}else{if(!r)if(e=Ui(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),bn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!W)return se(t),null}else 2*X()-o.renderingStartTime>Rn&&n!==1073741824&&(t.flags|=128,r=!0,bn(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=X(),t.sibling=null,n=Q.current,V(Q,r?n&1|2:n&1),t):(se(t),null);case 22:case 23:return Ya(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?_e&1073741824&&(se(t),t.subtreeFlags&6&&(t.flags|=8192)):se(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function j1(e,t){switch(za(t),t.tag){case 1:return xe(t.type)&&Ii(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Mn(),U(we),U(ce),Ra(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Oa(t),null;case 13:if(U(Q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));Ln()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U(Q),null;case 4:return Mn(),null;case 10:return $a(t.type._context),null;case 22:case 23:return Ya(),null;case 24:return null;default:return null}}var ri=!1,ue=!1,P1=typeof WeakSet=="function"?WeakSet:Set,z=null;function xn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){K(e,t,r)}else n.current=null}function Ul(e,t,n){try{n()}catch(r){K(e,t,r)}}var ru=!1;function N1(e,t){if(zl=Ti,e=Oc(),Ca(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,c=0,h=0,m=e,p=null;t:for(;;){for(var y;m!==n||i!==0&&m.nodeType!==3||(a=l+i),m!==o||r!==0&&m.nodeType!==3||(s=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(y=m.firstChild)!==null;)p=m,m=y;for(;;){if(m===e)break t;if(p===n&&++c===i&&(a=l),p===o&&++h===r&&(s=l),(y=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=y}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(jl={focusedElem:e,selectionRange:n},Ti=!1,z=t;z!==null;)if(t=z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,z=e;else for(;z!==null;){t=z;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var k=w.memoizedProps,L=w.memoizedState,d=t.stateNode,u=d.getSnapshotBeforeUpdate(t.elementType===t.type?k:Ue(t.type,k),L);d.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(v){K(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,z=e;break}z=t.return}return w=ru,ru=!1,w}function pr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ul(t,n,o)}i=i.next}while(i!==r)}}function fo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Wl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function L0(e){var t=e.alternate;t!==null&&(e.alternate=null,L0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[be],delete t[jr],delete t[$l],delete t[d1],delete t[f1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function T0(e){return e.tag===5||e.tag===3||e.tag===4}function iu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||T0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ql(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ri));else if(r!==4&&(e=e.child,e!==null))for(Ql(e,t,n),e=e.sibling;e!==null;)Ql(e,t,n),e=e.sibling}function Yl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Yl(e,t,n),e=e.sibling;e!==null;)Yl(e,t,n),e=e.sibling}var re=null,We=!1;function vt(e,t,n){for(n=n.child;n!==null;)M0(e,t,n),n=n.sibling}function M0(e,t,n){if(et&&typeof et.onCommitFiberUnmount=="function")try{et.onCommitFiberUnmount(ro,n)}catch{}switch(n.tag){case 5:ue||xn(n,t);case 6:var r=re,i=We;re=null,vt(e,t,n),re=r,We=i,re!==null&&(We?(e=re,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):re.removeChild(n.stateNode));break;case 18:re!==null&&(We?(e=re,n=n.stateNode,e.nodeType===8?Uo(e.parentNode,n):e.nodeType===1&&Uo(e,n),kr(e)):Uo(re,n.stateNode));break;case 4:r=re,i=We,re=n.stateNode.containerInfo,We=!0,vt(e,t,n),re=r,We=i;break;case 0:case 11:case 14:case 15:if(!ue&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Ul(n,t,l),i=i.next}while(i!==r)}vt(e,t,n);break;case 1:if(!ue&&(xn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){K(n,t,a)}vt(e,t,n);break;case 21:vt(e,t,n);break;case 22:n.mode&1?(ue=(r=ue)||n.memoizedState!==null,vt(e,t,n),ue=r):vt(e,t,n);break;default:vt(e,t,n)}}function ou(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new P1),t.forEach(function(r){var i=F1.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Be(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:re=a.stateNode,We=!1;break e;case 3:re=a.stateNode.containerInfo,We=!0;break e;case 4:re=a.stateNode.containerInfo,We=!0;break e}a=a.return}if(re===null)throw Error(S(160));M0(o,l,i),re=null,We=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(c){K(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)O0(t,e),t=t.sibling}function O0(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Be(t,e),Ze(e),r&4){try{pr(3,e,e.return),fo(3,e)}catch(k){K(e,e.return,k)}try{pr(5,e,e.return)}catch(k){K(e,e.return,k)}}break;case 1:Be(t,e),Ze(e),r&512&&n!==null&&xn(n,n.return);break;case 5:if(Be(t,e),Ze(e),r&512&&n!==null&&xn(n,n.return),e.flags&32){var i=e.stateNode;try{yr(i,"")}catch(k){K(e,e.return,k)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&tc(i,o),gl(a,l);var c=gl(a,o);for(l=0;l<s.length;l+=2){var h=s[l],m=s[l+1];h==="style"?lc(i,m):h==="dangerouslySetInnerHTML"?ic(i,m):h==="children"?yr(i,m):da(i,h,m,c)}switch(a){case"input":dl(i,o);break;case"textarea":nc(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?En(i,!!o.multiple,y,!1):p!==!!o.multiple&&(o.defaultValue!=null?En(i,!!o.multiple,o.defaultValue,!0):En(i,!!o.multiple,o.multiple?[]:"",!1))}i[jr]=o}catch(k){K(e,e.return,k)}}break;case 6:if(Be(t,e),Ze(e),r&4){if(e.stateNode===null)throw Error(S(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(k){K(e,e.return,k)}}break;case 3:if(Be(t,e),Ze(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{kr(t.containerInfo)}catch(k){K(e,e.return,k)}break;case 4:Be(t,e),Ze(e);break;case 13:Be(t,e),Ze(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Wa=X())),r&4&&ou(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(ue=(c=ue)||h,Be(t,e),ue=c):Be(t,e),Ze(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(z=e,h=e.child;h!==null;){for(m=z=h;z!==null;){switch(p=z,y=p.child,p.tag){case 0:case 11:case 14:case 15:pr(4,p,p.return);break;case 1:xn(p,p.return);var w=p.stateNode;if(typeof w.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(k){K(r,n,k)}}break;case 5:xn(p,p.return);break;case 22:if(p.memoizedState!==null){au(m);continue}}y!==null?(y.return=p,z=y):au(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{i=m.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=m.stateNode,s=m.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=oc("display",l))}catch(k){K(e,e.return,k)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(k){K(e,e.return,k)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Be(t,e),Ze(e),r&4&&ou(e);break;case 21:break;default:Be(t,e),Ze(e)}}function Ze(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(T0(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(yr(i,""),r.flags&=-33);var o=iu(e);Yl(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=iu(e);Ql(e,a,l);break;default:throw Error(S(161))}}catch(s){K(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function $1(e,t,n){z=e,R0(e)}function R0(e,t,n){for(var r=(e.mode&1)!==0;z!==null;){var i=z,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||ri;if(!l){var a=i.alternate,s=a!==null&&a.memoizedState!==null||ue;a=ri;var c=ue;if(ri=l,(ue=s)&&!c)for(z=i;z!==null;)l=z,s=l.child,l.tag===22&&l.memoizedState!==null?su(i):s!==null?(s.return=l,z=s):su(i);for(;o!==null;)z=o,R0(o),o=o.sibling;z=i,ri=a,ue=c}lu(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,z=o):lu(e)}}function lu(e){for(;z!==null;){var t=z;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ue||fo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ue)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ue(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Us(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Us(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&kr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}ue||t.flags&512&&Wl(t)}catch(p){K(t,t.return,p)}}if(t===e){z=null;break}if(n=t.sibling,n!==null){n.return=t.return,z=n;break}z=t.return}}function au(e){for(;z!==null;){var t=z;if(t===e){z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,z=n;break}z=t.return}}function su(e){for(;z!==null;){var t=z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{fo(4,t)}catch(s){K(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){K(t,i,s)}}var o=t.return;try{Wl(t)}catch(s){K(t,o,s)}break;case 5:var l=t.return;try{Wl(t)}catch(s){K(t,l,s)}}}catch(s){K(t,t.return,s)}if(t===e){z=null;break}var a=t.sibling;if(a!==null){a.return=t.return,z=a;break}z=t.return}}var L1=Math.ceil,Yi=pt.ReactCurrentDispatcher,Ha=pt.ReactCurrentOwner,Ie=pt.ReactCurrentBatchConfig,O=0,ne=null,J=null,ie=0,_e=0,Sn=It(0),b=0,Mr=null,rn=0,po=0,Ua=0,mr=null,ge=null,Wa=0,Rn=1/0,rt=null,Gi=!1,Gl=null,$t=null,ii=!1,Ct=null,Ki=0,hr=0,Kl=null,yi=-1,wi=0;function fe(){return O&6?X():yi!==-1?yi:yi=X()}function Lt(e){return e.mode&1?O&2&&ie!==0?ie&-ie:m1.transition!==null?(wi===0&&(wi=yc()),wi):(e=I,e!==0||(e=window.event,e=e===void 0?16:_c(e.type)),e):1}function Ge(e,t,n,r){if(50<hr)throw hr=0,Kl=null,Error(S(185));Ir(e,n,r),(!(O&2)||e!==ne)&&(e===ne&&(!(O&2)&&(po|=n),b===4&&kt(e,ie)),Se(e,r),n===1&&O===0&&!(t.mode&1)&&(Rn=X()+500,so&&Dt()))}function Se(e,t){var n=e.callbackNode;mf(e,t);var r=Li(e,e===ne?ie:0);if(r===0)n!==null&&vs(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&vs(n),t===1)e.tag===0?p1(uu.bind(null,e)):Wc(uu.bind(null,e)),u1(function(){!(O&6)&&Dt()}),n=null;else{switch(wc(r)){case 1:n=ga;break;case 4:n=gc;break;case 16:n=$i;break;case 536870912:n=vc;break;default:n=$i}n=U0(n,I0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function I0(e,t){if(yi=-1,wi=0,O&6)throw Error(S(327));var n=e.callbackNode;if(Pn()&&e.callbackNode!==n)return null;var r=Li(e,e===ne?ie:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Xi(e,r);else{t=r;var i=O;O|=2;var o=F0();(ne!==e||ie!==t)&&(rt=null,Rn=X()+500,Zt(e,t));do try{O1();break}catch(a){D0(e,a)}while(!0);Na(),Yi.current=o,O=i,J!==null?t=0:(ne=null,ie=0,t=b)}if(t!==0){if(t===2&&(i=Sl(e),i!==0&&(r=i,t=Xl(e,i))),t===1)throw n=Mr,Zt(e,0),kt(e,r),Se(e,X()),n;if(t===6)kt(e,r);else{if(i=e.current.alternate,!(r&30)&&!T1(i)&&(t=Xi(e,r),t===2&&(o=Sl(e),o!==0&&(r=o,t=Xl(e,o))),t===1))throw n=Mr,Zt(e,0),kt(e,r),Se(e,X()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:Qt(e,ge,rt);break;case 3:if(kt(e,r),(r&130023424)===r&&(t=Wa+500-X(),10<t)){if(Li(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){fe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Nl(Qt.bind(null,e,ge,rt),t);break}Qt(e,ge,rt);break;case 4:if(kt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Ye(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=X()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*L1(r/1960))-r,10<r){e.timeoutHandle=Nl(Qt.bind(null,e,ge,rt),r);break}Qt(e,ge,rt);break;case 5:Qt(e,ge,rt);break;default:throw Error(S(329))}}}return Se(e,X()),e.callbackNode===n?I0.bind(null,e):null}function Xl(e,t){var n=mr;return e.current.memoizedState.isDehydrated&&(Zt(e,t).flags|=256),e=Xi(e,t),e!==2&&(t=ge,ge=n,t!==null&&Zl(t)),e}function Zl(e){ge===null?ge=e:ge.push.apply(ge,e)}function T1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Xe(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function kt(e,t){for(t&=~Ua,t&=~po,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ye(t),r=1<<n;e[n]=-1,t&=~r}}function uu(e){if(O&6)throw Error(S(327));Pn();var t=Li(e,0);if(!(t&1))return Se(e,X()),null;var n=Xi(e,t);if(e.tag!==0&&n===2){var r=Sl(e);r!==0&&(t=r,n=Xl(e,r))}if(n===1)throw n=Mr,Zt(e,0),kt(e,t),Se(e,X()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Qt(e,ge,rt),Se(e,X()),null}function Qa(e,t){var n=O;O|=1;try{return e(t)}finally{O=n,O===0&&(Rn=X()+500,so&&Dt())}}function on(e){Ct!==null&&Ct.tag===0&&!(O&6)&&Pn();var t=O;O|=1;var n=Ie.transition,r=I;try{if(Ie.transition=null,I=1,e)return e()}finally{I=r,Ie.transition=n,O=t,!(O&6)&&Dt()}}function Ya(){_e=Sn.current,U(Sn)}function Zt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,s1(n)),J!==null)for(n=J.return;n!==null;){var r=n;switch(za(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ii();break;case 3:Mn(),U(we),U(ce),Ra();break;case 5:Oa(r);break;case 4:Mn();break;case 13:U(Q);break;case 19:U(Q);break;case 10:$a(r.type._context);break;case 22:case 23:Ya()}n=n.return}if(ne=e,J=e=Tt(e.current,null),ie=_e=t,b=0,Mr=null,Ua=po=rn=0,ge=mr=null,Gt!==null){for(t=0;t<Gt.length;t++)if(n=Gt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}Gt=null}return e}function D0(e,t){do{var n=J;try{if(Na(),hi.current=Qi,Wi){for(var r=Y.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Wi=!1}if(nn=0,ee=q=Y=null,fr=!1,$r=0,Ha.current=null,n===null||n.return===null){b=1,Mr=t,J=null;break}e:{var o=e,l=n.return,a=n,s=t;if(t=ie,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,h=a,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var y=Zs(l);if(y!==null){y.flags&=-257,Js(y,l,a,o,t),y.mode&1&&Xs(o,c,t),t=y,s=c;var w=t.updateQueue;if(w===null){var k=new Set;k.add(s),t.updateQueue=k}else w.add(s);break e}else{if(!(t&1)){Xs(o,c,t),Ga();break e}s=Error(S(426))}}else if(W&&a.mode&1){var L=Zs(l);if(L!==null){!(L.flags&65536)&&(L.flags|=256),Js(L,l,a,o,t),ja(On(s,a));break e}}o=s=On(s,a),b!==4&&(b=2),mr===null?mr=[o]:mr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var d=x0(o,s,t);Hs(o,d);break e;case 1:a=s;var u=o.type,f=o.stateNode;if(!(o.flags&128)&&(typeof u.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&($t===null||!$t.has(f)))){o.flags|=65536,t&=-t,o.lanes|=t;var v=S0(o,a,t);Hs(o,v);break e}}o=o.return}while(o!==null)}V0(n)}catch(C){t=C,J===n&&n!==null&&(J=n=n.return);continue}break}while(!0)}function F0(){var e=Yi.current;return Yi.current=Qi,e===null?Qi:e}function Ga(){(b===0||b===3||b===2)&&(b=4),ne===null||!(rn&268435455)&&!(po&268435455)||kt(ne,ie)}function Xi(e,t){var n=O;O|=2;var r=F0();(ne!==e||ie!==t)&&(rt=null,Zt(e,t));do try{M1();break}catch(i){D0(e,i)}while(!0);if(Na(),O=n,Yi.current=r,J!==null)throw Error(S(261));return ne=null,ie=0,b}function M1(){for(;J!==null;)A0(J)}function O1(){for(;J!==null&&!of();)A0(J)}function A0(e){var t=H0(e.alternate,e,_e);e.memoizedProps=e.pendingProps,t===null?V0(e):J=t,Ha.current=null}function V0(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=j1(n,t),n!==null){n.flags&=32767,J=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{b=6,J=null;return}}else if(n=z1(n,t,_e),n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);b===0&&(b=5)}function Qt(e,t,n){var r=I,i=Ie.transition;try{Ie.transition=null,I=1,R1(e,t,n,r)}finally{Ie.transition=i,I=r}return null}function R1(e,t,n,r){do Pn();while(Ct!==null);if(O&6)throw Error(S(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(hf(e,o),e===ne&&(J=ne=null,ie=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ii||(ii=!0,U0($i,function(){return Pn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ie.transition,Ie.transition=null;var l=I;I=1;var a=O;O|=4,Ha.current=null,N1(e,n),O0(n,e),t1(jl),Ti=!!zl,jl=zl=null,e.current=n,$1(n),lf(),O=a,I=l,Ie.transition=o}else e.current=n;if(ii&&(ii=!1,Ct=e,Ki=i),o=e.pendingLanes,o===0&&($t=null),uf(n.stateNode),Se(e,X()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Gi)throw Gi=!1,e=Gl,Gl=null,e;return Ki&1&&e.tag!==0&&Pn(),o=e.pendingLanes,o&1?e===Kl?hr++:(hr=0,Kl=e):hr=0,Dt(),null}function Pn(){if(Ct!==null){var e=wc(Ki),t=Ie.transition,n=I;try{if(Ie.transition=null,I=16>e?16:e,Ct===null)var r=!1;else{if(e=Ct,Ct=null,Ki=0,O&6)throw Error(S(331));var i=O;for(O|=4,z=e.current;z!==null;){var o=z,l=o.child;if(z.flags&16){var a=o.deletions;if(a!==null){for(var s=0;s<a.length;s++){var c=a[s];for(z=c;z!==null;){var h=z;switch(h.tag){case 0:case 11:case 15:pr(8,h,o)}var m=h.child;if(m!==null)m.return=h,z=m;else for(;z!==null;){h=z;var p=h.sibling,y=h.return;if(L0(h),h===c){z=null;break}if(p!==null){p.return=y,z=p;break}z=y}}}var w=o.alternate;if(w!==null){var k=w.child;if(k!==null){w.child=null;do{var L=k.sibling;k.sibling=null,k=L}while(k!==null)}}z=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,z=l;else e:for(;z!==null;){if(o=z,o.flags&2048)switch(o.tag){case 0:case 11:case 15:pr(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,z=d;break e}z=o.return}}var u=e.current;for(z=u;z!==null;){l=z;var f=l.child;if(l.subtreeFlags&2064&&f!==null)f.return=l,z=f;else e:for(l=u;z!==null;){if(a=z,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:fo(9,a)}}catch(C){K(a,a.return,C)}if(a===l){z=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,z=v;break e}z=a.return}}if(O=i,Dt(),et&&typeof et.onPostCommitFiberRoot=="function")try{et.onPostCommitFiberRoot(ro,e)}catch{}r=!0}return r}finally{I=n,Ie.transition=t}}return!1}function cu(e,t,n){t=On(n,t),t=x0(e,t,1),e=Nt(e,t,1),t=fe(),e!==null&&(Ir(e,1,t),Se(e,t))}function K(e,t,n){if(e.tag===3)cu(e,e,n);else for(;t!==null;){if(t.tag===3){cu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&($t===null||!$t.has(r))){e=On(n,e),e=S0(t,e,1),t=Nt(t,e,1),e=fe(),t!==null&&(Ir(t,1,e),Se(t,e));break}}t=t.return}}function I1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=fe(),e.pingedLanes|=e.suspendedLanes&n,ne===e&&(ie&n)===n&&(b===4||b===3&&(ie&130023424)===ie&&500>X()-Wa?Zt(e,0):Ua|=n),Se(e,t)}function B0(e,t){t===0&&(e.mode&1?(t=Kr,Kr<<=1,!(Kr&130023424)&&(Kr=4194304)):t=1);var n=fe();e=dt(e,t),e!==null&&(Ir(e,t,n),Se(e,n))}function D1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),B0(e,n)}function F1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),B0(e,n)}var H0;H0=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||we.current)ve=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ve=!1,_1(e,t,n);ve=!!(e.flags&131072)}else ve=!1,W&&t.flags&1048576&&Qc(t,Ai,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;vi(e,t),e=t.pendingProps;var i=$n(t,ce.current);jn(t,n),i=Da(null,t,r,e,i,n);var o=Fa();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,xe(r)?(o=!0,Di(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ta(t),i.updater=uo,t.stateNode=i,i._reactInternals=t,Il(t,r,e,n),t=Al(null,t,r,!0,o,n)):(t.tag=0,W&&o&&_a(t),de(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(vi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=V1(r),e=Ue(r,e),i){case 0:t=Fl(null,t,r,e,n);break e;case 1:t=eu(null,t,r,e,n);break e;case 11:t=qs(null,t,r,e,n);break e;case 14:t=bs(null,t,r,Ue(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ue(r,i),Fl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ue(r,i),eu(e,t,r,i,n);case 3:e:{if(_0(t),e===null)throw Error(S(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Xc(e,t),Hi(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=On(Error(S(423)),t),t=tu(e,t,r,n,i);break e}else if(r!==i){i=On(Error(S(424)),t),t=tu(e,t,r,n,i);break e}else for(ze=Pt(t.stateNode.containerInfo.firstChild),Pe=t,W=!0,Qe=null,n=bc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ln(),r===i){t=ft(e,t,n);break e}de(e,t,r,n)}t=t.child}return t;case 5:return e0(t),e===null&&Ml(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Pl(r,i)?l=null:o!==null&&Pl(r,o)&&(t.flags|=32),C0(e,t),de(e,t,l,n),t.child;case 6:return e===null&&Ml(t),null;case 13:return z0(e,t,n);case 4:return Ma(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Tn(t,null,r,n):de(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ue(r,i),qs(e,t,r,i,n);case 7:return de(e,t,t.pendingProps,n),t.child;case 8:return de(e,t,t.pendingProps.children,n),t.child;case 12:return de(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,V(Vi,r._currentValue),r._currentValue=l,o!==null)if(Xe(o.value,l)){if(o.children===i.children&&!we.current){t=ft(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=st(-1,n&-n),s.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?s.next=s:(s.next=h.next,h.next=s),c.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Ol(o.return,n,t),a.lanes|=n;break}s=s.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(S(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Ol(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}de(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,jn(t,n),i=De(i),r=r(i),t.flags|=1,de(e,t,r,n),t.child;case 14:return r=t.type,i=Ue(r,t.pendingProps),i=Ue(r.type,i),bs(e,t,r,i,n);case 15:return k0(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ue(r,i),vi(e,t),t.tag=1,xe(r)?(e=!0,Di(t)):e=!1,jn(t,n),Jc(t,r,i),Il(t,r,i,n),Al(null,t,r,!0,e,n);case 19:return j0(e,t,n);case 22:return E0(e,t,n)}throw Error(S(156,t.tag))};function U0(e,t){return hc(e,t)}function A1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Re(e,t,n,r){return new A1(e,t,n,r)}function Ka(e){return e=e.prototype,!(!e||!e.isReactComponent)}function V1(e){if(typeof e=="function")return Ka(e)?1:0;if(e!=null){if(e=e.$$typeof,e===pa)return 11;if(e===ma)return 14}return 2}function Tt(e,t){var n=e.alternate;return n===null?(n=Re(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function xi(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")Ka(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case dn:return Jt(n.children,i,o,t);case fa:l=8,i|=8;break;case ll:return e=Re(12,n,t,i|2),e.elementType=ll,e.lanes=o,e;case al:return e=Re(13,n,t,i),e.elementType=al,e.lanes=o,e;case sl:return e=Re(19,n,t,i),e.elementType=sl,e.lanes=o,e;case qu:return mo(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Zu:l=10;break e;case Ju:l=9;break e;case pa:l=11;break e;case ma:l=14;break e;case wt:l=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=Re(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Jt(e,t,n,r){return e=Re(7,e,r,t),e.lanes=n,e}function mo(e,t,n,r){return e=Re(22,e,r,t),e.elementType=qu,e.lanes=n,e.stateNode={isHidden:!1},e}function Jo(e,t,n){return e=Re(6,e,null,t),e.lanes=n,e}function qo(e,t,n){return t=Re(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function B1(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=To(0),this.expirationTimes=To(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=To(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Xa(e,t,n,r,i,o,l,a,s){return e=new B1(e,t,n,a,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Re(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ta(o),e}function H1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:cn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function W0(e){if(!e)return Ot;e=e._reactInternals;e:{if(an(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(xe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(xe(n))return Uc(e,n,t)}return t}function Q0(e,t,n,r,i,o,l,a,s){return e=Xa(n,r,!0,e,i,o,l,a,s),e.context=W0(null),n=e.current,r=fe(),i=Lt(n),o=st(r,i),o.callback=t??null,Nt(n,o,i),e.current.lanes=i,Ir(e,i,r),Se(e,r),e}function ho(e,t,n,r){var i=t.current,o=fe(),l=Lt(i);return n=W0(n),t.context===null?t.context=n:t.pendingContext=n,t=st(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Nt(i,t,l),e!==null&&(Ge(e,i,l,o),mi(e,i,l)),l}function Zi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function du(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Za(e,t){du(e,t),(e=e.alternate)&&du(e,t)}function U1(){return null}var Y0=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ja(e){this._internalRoot=e}go.prototype.render=Ja.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));ho(e,t,null,null)};go.prototype.unmount=Ja.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;on(function(){ho(null,e,null,null)}),t[ct]=null}};function go(e){this._internalRoot=e}go.prototype.unstable_scheduleHydration=function(e){if(e){var t=kc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<St.length&&t!==0&&t<St[n].priority;n++);St.splice(n,0,e),n===0&&Cc(e)}};function qa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function vo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function fu(){}function W1(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=Zi(l);o.call(c)}}var l=Q0(t,r,e,0,null,!1,!1,"",fu);return e._reactRootContainer=l,e[ct]=l.current,_r(e.nodeType===8?e.parentNode:e),on(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Zi(s);a.call(c)}}var s=Xa(e,0,!1,null,null,!1,!1,"",fu);return e._reactRootContainer=s,e[ct]=s.current,_r(e.nodeType===8?e.parentNode:e),on(function(){ho(t,s,n,r)}),s}function yo(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var a=i;i=function(){var s=Zi(l);a.call(s)}}ho(t,l,e,i)}else l=W1(n,t,e,i,r);return Zi(l)}xc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ir(t.pendingLanes);n!==0&&(va(t,n|1),Se(t,X()),!(O&6)&&(Rn=X()+500,Dt()))}break;case 13:on(function(){var r=dt(e,1);if(r!==null){var i=fe();Ge(r,e,1,i)}}),Za(e,1)}};ya=function(e){if(e.tag===13){var t=dt(e,134217728);if(t!==null){var n=fe();Ge(t,e,134217728,n)}Za(e,134217728)}};Sc=function(e){if(e.tag===13){var t=Lt(e),n=dt(e,t);if(n!==null){var r=fe();Ge(n,e,t,r)}Za(e,t)}};kc=function(){return I};Ec=function(e,t){var n=I;try{return I=e,t()}finally{I=n}};yl=function(e,t,n){switch(t){case"input":if(dl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ao(r);if(!i)throw Error(S(90));ec(r),dl(r,i)}}}break;case"textarea":nc(e,n);break;case"select":t=n.value,t!=null&&En(e,!!n.multiple,t,!1)}};uc=Qa;cc=on;var Q1={usingClientEntryPoint:!1,Events:[Fr,hn,ao,ac,sc,Qa]},er={findFiberByHostInstance:Yt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Y1={bundleType:er.bundleType,version:er.version,rendererPackageName:er.rendererPackageName,rendererConfig:er.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=pc(e),e===null?null:e.stateNode},findFiberByHostInstance:er.findFiberByHostInstance||U1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var oi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!oi.isDisabled&&oi.supportsFiber)try{ro=oi.inject(Y1),et=oi}catch{}}$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q1;$e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qa(t))throw Error(S(200));return H1(e,t,null,n)};$e.createRoot=function(e,t){if(!qa(e))throw Error(S(299));var n=!1,r="",i=Y0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Xa(e,1,!1,null,null,n,!1,r,i),e[ct]=t.current,_r(e.nodeType===8?e.parentNode:e),new Ja(t)};$e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=pc(t),e=e===null?null:e.stateNode,e};$e.flushSync=function(e){return on(e)};$e.hydrate=function(e,t,n){if(!vo(t))throw Error(S(200));return yo(null,e,t,!0,n)};$e.hydrateRoot=function(e,t,n){if(!qa(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=Y0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Q0(t,null,e,1,n??null,i,!1,o,l),e[ct]=t.current,_r(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new go(t)};$e.render=function(e,t,n){if(!vo(t))throw Error(S(200));return yo(null,e,t,!1,n)};$e.unmountComponentAtNode=function(e){if(!vo(e))throw Error(S(40));return e._reactRootContainer?(on(function(){yo(null,null,e,!1,function(){e._reactRootContainer=null,e[ct]=null})}),!0):!1};$e.unstable_batchedUpdates=Qa;$e.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!vo(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return yo(e,t,n,!1,r)};$e.version="18.2.0-next-9e3b772b8-20220608";function G0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(G0)}catch(e){console.error(e)}}G0(),Qu.exports=$e;var G1=Qu.exports,pu=G1;il.createRoot=pu.createRoot,il.hydrateRoot=pu.hydrateRoot;var ye=function(){return ye=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},ye.apply(this,arguments)};function Ji(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var H="-ms-",gr="-moz-",R="-webkit-",K0="comm",wo="rule",ba="decl",K1="@import",X0="@keyframes",X1="@layer",Z0=Math.abs,es=String.fromCharCode,Jl=Object.assign;function Z1(e,t){return te(e,0)^45?(((t<<2^te(e,0))<<2^te(e,1))<<2^te(e,2))<<2^te(e,3):0}function J0(e){return e.trim()}function it(e,t){return(e=t.exec(e))?e[0]:e}function $(e,t,n){return e.replace(t,n)}function Si(e,t,n){return e.indexOf(t,n)}function te(e,t){return e.charCodeAt(t)|0}function In(e,t,n){return e.slice(t,n)}function qe(e){return e.length}function q0(e){return e.length}function lr(e,t){return t.push(e),e}function J1(e,t){return e.map(t).join("")}function mu(e,t){return e.filter(function(n){return!it(n,t)})}var xo=1,Dn=1,b0=0,Ae=0,Z=0,Wn="";function So(e,t,n,r,i,o,l,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:xo,column:Dn,length:l,return:"",siblings:a}}function yt(e,t){return Jl(So("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function un(e){for(;e.root;)e=yt(e.root,{children:[e]});lr(e,e.siblings)}function q1(){return Z}function b1(){return Z=Ae>0?te(Wn,--Ae):0,Dn--,Z===10&&(Dn=1,xo--),Z}function Ke(){return Z=Ae<b0?te(Wn,Ae++):0,Dn++,Z===10&&(Dn=1,xo++),Z}function qt(){return te(Wn,Ae)}function ki(){return Ae}function ko(e,t){return In(Wn,e,t)}function ql(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ep(e){return xo=Dn=1,b0=qe(Wn=e),Ae=0,[]}function tp(e){return Wn="",e}function bo(e){return J0(ko(Ae-1,bl(e===91?e+2:e===40?e+1:e)))}function np(e){for(;(Z=qt())&&Z<33;)Ke();return ql(e)>2||ql(Z)>3?"":" "}function rp(e,t){for(;--t&&Ke()&&!(Z<48||Z>102||Z>57&&Z<65||Z>70&&Z<97););return ko(e,ki()+(t<6&&qt()==32&&Ke()==32))}function bl(e){for(;Ke();)switch(Z){case e:return Ae;case 34:case 39:e!==34&&e!==39&&bl(Z);break;case 40:e===41&&bl(e);break;case 92:Ke();break}return Ae}function ip(e,t){for(;Ke()&&e+Z!==57;)if(e+Z===84&&qt()===47)break;return"/*"+ko(t,Ae-1)+"*"+es(e===47?e:Ke())}function op(e){for(;!ql(qt());)Ke();return ko(e,Ae)}function lp(e){return tp(Ei("",null,null,null,[""],e=ep(e),0,[0],e))}function Ei(e,t,n,r,i,o,l,a,s){for(var c=0,h=0,m=l,p=0,y=0,w=0,k=1,L=1,d=1,u=0,f="",v=i,C=o,E=r,x=f;L;)switch(w=u,u=Ke()){case 40:if(w!=108&&te(x,m-1)==58){Si(x+=$(bo(u),"&","&\f"),"&\f",Z0(c?a[c-1]:0))!=-1&&(d=-1);break}case 34:case 39:case 91:x+=bo(u);break;case 9:case 10:case 13:case 32:x+=np(w);break;case 92:x+=rp(ki()-1,7);continue;case 47:switch(qt()){case 42:case 47:lr(ap(ip(Ke(),ki()),t,n,s),s);break;default:x+="/"}break;case 123*k:a[c++]=qe(x)*d;case 125*k:case 59:case 0:switch(u){case 0:case 125:L=0;case 59+h:d==-1&&(x=$(x,/\f/g,"")),y>0&&qe(x)-m&&lr(y>32?gu(x+";",r,n,m-1,s):gu($(x," ","")+";",r,n,m-2,s),s);break;case 59:x+=";";default:if(lr(E=hu(x,t,n,c,h,i,a,f,v=[],C=[],m,o),o),u===123)if(h===0)Ei(x,t,E,E,v,o,m,a,C);else switch(p===99&&te(x,3)===110?100:p){case 100:case 108:case 109:case 115:Ei(e,E,E,r&&lr(hu(e,E,E,0,0,i,a,f,i,v=[],m,C),C),i,C,m,a,r?v:C);break;default:Ei(x,E,E,E,[""],C,0,a,C)}}c=h=y=0,k=d=1,f=x="",m=l;break;case 58:m=1+qe(x),y=w;default:if(k<1){if(u==123)--k;else if(u==125&&k++==0&&b1()==125)continue}switch(x+=es(u),u*k){case 38:d=h>0?1:(x+="\f",-1);break;case 44:a[c++]=(qe(x)-1)*d,d=1;break;case 64:qt()===45&&(x+=bo(Ke())),p=qt(),h=m=qe(f=x+=op(ki())),u++;break;case 45:w===45&&qe(x)==2&&(k=0)}}return o}function hu(e,t,n,r,i,o,l,a,s,c,h,m){for(var p=i-1,y=i===0?o:[""],w=q0(y),k=0,L=0,d=0;k<r;++k)for(var u=0,f=In(e,p+1,p=Z0(L=l[k])),v=e;u<w;++u)(v=J0(L>0?y[u]+" "+f:$(f,/&\f/g,y[u])))&&(s[d++]=v);return So(e,t,n,i===0?wo:a,s,c,h,m)}function ap(e,t,n,r){return So(e,t,n,K0,es(q1()),In(e,2,-2),0,r)}function gu(e,t,n,r,i){return So(e,t,n,ba,In(e,0,r),In(e,r+1,-1),r,i)}function ed(e,t,n){switch(Z1(e,t)){case 5103:return R+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return R+e+e;case 4789:return gr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return R+e+gr+e+H+e+e;case 5936:switch(te(e,t+11)){case 114:return R+e+H+$(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return R+e+H+$(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return R+e+H+$(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return R+e+H+e+e;case 6165:return R+e+H+"flex-"+e+e;case 5187:return R+e+$(e,/(\w+).+(:[^]+)/,R+"box-$1$2"+H+"flex-$1$2")+e;case 5443:return R+e+H+"flex-item-"+$(e,/flex-|-self/g,"")+(it(e,/flex-|baseline/)?"":H+"grid-row-"+$(e,/flex-|-self/g,""))+e;case 4675:return R+e+H+"flex-line-pack"+$(e,/align-content|flex-|-self/g,"")+e;case 5548:return R+e+H+$(e,"shrink","negative")+e;case 5292:return R+e+H+$(e,"basis","preferred-size")+e;case 6060:return R+"box-"+$(e,"-grow","")+R+e+H+$(e,"grow","positive")+e;case 4554:return R+$(e,/([^-])(transform)/g,"$1"+R+"$2")+e;case 6187:return $($($(e,/(zoom-|grab)/,R+"$1"),/(image-set)/,R+"$1"),e,"")+e;case 5495:case 3959:return $(e,/(image-set\([^]*)/,R+"$1$`$1");case 4968:return $($(e,/(.+:)(flex-)?(.*)/,R+"box-pack:$3"+H+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+R+e+e;case 4200:if(!it(e,/flex-|baseline/))return H+"grid-column-align"+In(e,t)+e;break;case 2592:case 3360:return H+$(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,it(r.props,/grid-\w+-end/)})?~Si(e+(n=n[t].value),"span",0)?e:H+$(e,"-start","")+e+H+"grid-row-span:"+(~Si(n,"span",0)?it(n,/\d+/):+it(n,/\d+/)-+it(e,/\d+/))+";":H+$(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return it(r.props,/grid-\w+-start/)})?e:H+$($(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return $(e,/(.+)-inline(.+)/,R+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(qe(e)-1-t>6)switch(te(e,t+1)){case 109:if(te(e,t+4)!==45)break;case 102:return $(e,/(.+:)(.+)-([^]+)/,"$1"+R+"$2-$3$1"+gr+(te(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Si(e,"stretch",0)?ed($(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return $(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,l,a,s,c){return H+i+":"+o+c+(l?H+i+"-span:"+(a?s:+s-+o)+c:"")+e});case 4949:if(te(e,t+6)===121)return $(e,":",":"+R)+e;break;case 6444:switch(te(e,te(e,14)===45?18:11)){case 120:return $(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+R+(te(e,14)===45?"inline-":"")+"box$3$1"+R+"$2$3$1"+H+"$2box$3")+e;case 100:return $(e,":",":"+H)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return $(e,"scroll-","scroll-snap-")+e}return e}function qi(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function sp(e,t,n,r){switch(e.type){case X1:if(e.children.length)break;case K1:case ba:return e.return=e.return||e.value;case K0:return"";case X0:return e.return=e.value+"{"+qi(e.children,r)+"}";case wo:if(!qe(e.value=e.props.join(",")))return""}return qe(n=qi(e.children,r))?e.return=e.value+"{"+n+"}":""}function up(e){var t=q0(e);return function(n,r,i,o){for(var l="",a=0;a<t;a++)l+=e[a](n,r,i,o)||"";return l}}function cp(e){return function(t){t.root||(t=t.return)&&e(t)}}function dp(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case ba:e.return=ed(e.value,e.length,n);return;case X0:return qi([yt(e,{value:$(e.value,"@","@"+R)})],r);case wo:if(e.length)return J1(n=e.props,function(i){switch(it(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":un(yt(e,{props:[$(i,/:(read-\w+)/,":"+gr+"$1")]})),un(yt(e,{props:[i]})),Jl(e,{props:mu(n,r)});break;case"::placeholder":un(yt(e,{props:[$(i,/:(plac\w+)/,":"+R+"input-$1")]})),un(yt(e,{props:[$(i,/:(plac\w+)/,":"+gr+"$1")]})),un(yt(e,{props:[$(i,/:(plac\w+)/,H+"input-$1")]})),un(yt(e,{props:[i]})),Jl(e,{props:mu(n,r)});break}return""})}}var fp={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ce={},Fn=typeof process<"u"&&Ce!==void 0&&(Ce.REACT_APP_SC_ATTR||Ce.SC_ATTR)||"data-styled",td="active",nd="data-styled-version",Eo="6.1.8",ts=`/*!sc*/
`,ns=typeof window<"u"&&"HTMLElement"in window,pp=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ce!==void 0&&Ce.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ce.REACT_APP_SC_DISABLE_SPEEDY!==""?Ce.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ce.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ce!==void 0&&Ce.SC_DISABLE_SPEEDY!==void 0&&Ce.SC_DISABLE_SPEEDY!==""&&Ce.SC_DISABLE_SPEEDY!=="false"&&Ce.SC_DISABLE_SPEEDY),Co=Object.freeze([]),An=Object.freeze({});function mp(e,t,n){return n===void 0&&(n=An),e.theme!==n.theme&&e.theme||t||n.theme}var rd=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),hp=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,gp=/(^-|-$)/g;function vu(e){return e.replace(hp,"-").replace(gp,"")}var vp=/(a)(d)/gi,li=52,yu=function(e){return String.fromCharCode(e+(e>25?39:97))};function ea(e){var t,n="";for(t=Math.abs(e);t>li;t=t/li|0)n=yu(t%li)+n;return(yu(t%li)+n).replace(vp,"$1-$2")}var el,id=5381,kn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},od=function(e){return kn(id,e)};function yp(e){return ea(od(e)>>>0)}function wp(e){return e.displayName||e.name||"Component"}function tl(e){return typeof e=="string"&&!0}var ld=typeof Symbol=="function"&&Symbol.for,ad=ld?Symbol.for("react.memo"):60115,xp=ld?Symbol.for("react.forward_ref"):60112,Sp={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},kp={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},sd={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ep=((el={})[xp]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},el[ad]=sd,el);function wu(e){return("type"in(t=e)&&t.type.$$typeof)===ad?sd:"$$typeof"in e?Ep[e.$$typeof]:Sp;var t}var Cp=Object.defineProperty,_p=Object.getOwnPropertyNames,xu=Object.getOwnPropertySymbols,zp=Object.getOwnPropertyDescriptor,jp=Object.getPrototypeOf,Su=Object.prototype;function ud(e,t,n){if(typeof t!="string"){if(Su){var r=jp(t);r&&r!==Su&&ud(e,r,n)}var i=_p(t);xu&&(i=i.concat(xu(t)));for(var o=wu(e),l=wu(t),a=0;a<i.length;++a){var s=i[a];if(!(s in kp||n&&n[s]||l&&s in l||o&&s in o)){var c=zp(t,s);try{Cp(e,s,c)}catch{}}}}return e}function Vn(e){return typeof e=="function"}function rs(e){return typeof e=="object"&&"styledComponentId"in e}function Xt(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function ku(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Or(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ta(e,t,n){if(n===void 0&&(n=!1),!n&&!Or(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=ta(e[r],t[r]);else if(Or(t))for(var r in t)e[r]=ta(e[r],t[r]);return e}function is(e,t){Object.defineProperty(e,"toString",{value:t})}function Vr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Pp=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Vr(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var l=i;l<o;l++)this.groupSizes[l]=0}for(var a=this.indexOfGroup(t+1),s=(l=0,n.length);l<s;l++)this.tag.insertRule(a,n[l])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,l=i;l<o;l++)n+="".concat(this.tag.getRule(l)).concat(ts);return n},e}(),Ci=new Map,bi=new Map,_i=1,ai=function(e){if(Ci.has(e))return Ci.get(e);for(;bi.has(_i);)_i++;var t=_i++;return Ci.set(e,t),bi.set(t,e),t},Np=function(e,t){_i=t+1,Ci.set(e,t),bi.set(t,e)},$p="style[".concat(Fn,"][").concat(nd,'="').concat(Eo,'"]'),Lp=new RegExp("^".concat(Fn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Tp=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},Mp=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(ts),i=[],o=0,l=r.length;o<l;o++){var a=r[o].trim();if(a){var s=a.match(Lp);if(s){var c=0|parseInt(s[1],10),h=s[2];c!==0&&(Np(h,c),Tp(e,h,s[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(a)}}};function Op(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var cd=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var s=Array.from(a.querySelectorAll("style[".concat(Fn,"]")));return s[s.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Fn,td),r.setAttribute(nd,Eo);var l=Op();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},Rp=function(){function e(t){this.element=cd(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var l=r[i];if(l.ownerNode===n)return l}throw Vr(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Ip=function(){function e(t){this.element=cd(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Dp=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Eu=ns,Fp={isServer:!ns,useCSSOMInjection:!pp},dd=function(){function e(t,n,r){t===void 0&&(t=An),n===void 0&&(n={});var i=this;this.options=ye(ye({},Fp),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&ns&&Eu&&(Eu=!1,function(o){for(var l=document.querySelectorAll($p),a=0,s=l.length;a<s;a++){var c=l[a];c&&c.getAttribute(Fn)!==td&&(Mp(o,c),c.parentNode&&c.parentNode.removeChild(c))}}(this)),is(this,function(){return function(o){for(var l=o.getTag(),a=l.length,s="",c=function(m){var p=function(d){return bi.get(d)}(m);if(p===void 0)return"continue";var y=o.names.get(p),w=l.getGroup(m);if(y===void 0||w.length===0)return"continue";var k="".concat(Fn,".g").concat(m,'[id="').concat(p,'"]'),L="";y!==void 0&&y.forEach(function(d){d.length>0&&(L+="".concat(d,","))}),s+="".concat(w).concat(k,'{content:"').concat(L,'"}').concat(ts)},h=0;h<a;h++)c(h);return s}(i)})}return e.registerId=function(t){return ai(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(ye(ye({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new Dp(i):r?new Rp(i):new Ip(i)}(this.options),new Pp(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(ai(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(ai(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(ai(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Ap=/&/g,Vp=/^\s*\/\/.*$/gm;function fd(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=fd(n.children,t)),n})}function Bp(e){var t,n,r,i=e===void 0?An:e,o=i.options,l=o===void 0?An:o,a=i.plugins,s=a===void 0?Co:a,c=function(p,y,w){return w.startsWith(n)&&w.endsWith(n)&&w.replaceAll(n,"").length>0?".".concat(t):p},h=s.slice();h.push(function(p){p.type===wo&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(Ap,n).replace(r,c))}),l.prefix&&h.push(dp),h.push(sp);var m=function(p,y,w,k){y===void 0&&(y=""),w===void 0&&(w=""),k===void 0&&(k="&"),t=k,n=y,r=new RegExp("\\".concat(n,"\\b"),"g");var L=p.replace(Vp,""),d=lp(w||y?"".concat(w," ").concat(y," { ").concat(L," }"):L);l.namespace&&(d=fd(d,l.namespace));var u=[];return qi(d,up(h.concat(cp(function(f){return u.push(f)})))),u};return m.hash=s.length?s.reduce(function(p,y){return y.name||Vr(15),kn(p,y.name)},id).toString():"",m}var Hp=new dd,na=Bp(),pd=je.createContext({shouldForwardProp:void 0,styleSheet:Hp,stylis:na});pd.Consumer;je.createContext(void 0);function Cu(){return oe.useContext(pd)}var Up=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=na);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,is(this,function(){throw Vr(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=na),this.name+t.hash},e}(),Wp=function(e){return e>="A"&&e<="Z"};function _u(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Wp(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var md=function(e){return e==null||e===!1||e===""},hd=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!md(o)&&(Array.isArray(o)&&o.isCss||Vn(o)?r.push("".concat(_u(i),":"),o,";"):Or(o)?r.push.apply(r,Ji(Ji(["".concat(i," {")],hd(o),!1),["}"],!1)):r.push("".concat(_u(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in fp||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function bt(e,t,n,r){if(md(e))return[];if(rs(e))return[".".concat(e.styledComponentId)];if(Vn(e)){if(!Vn(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return bt(i,t,n,r)}var o;return e instanceof Up?n?(e.inject(n,r),[e.getName(r)]):[e]:Or(e)?hd(e):Array.isArray(e)?Array.prototype.concat.apply(Co,e.map(function(l){return bt(l,t,n,r)})):[e.toString()]}function Qp(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Vn(n)&&!rs(n))return!1}return!0}var Yp=od(Eo),Gp=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Qp(t),this.componentId=n,this.baseHash=kn(Yp,n),this.baseStyle=r,dd.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Xt(i,this.staticRulesId);else{var o=ku(bt(this.rules,t,n,r)),l=ea(kn(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,l)){var a=r(o,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,a)}i=Xt(i,l),this.staticRulesId=l}else{for(var s=kn(this.baseHash,r.hash),c="",h=0;h<this.rules.length;h++){var m=this.rules[h];if(typeof m=="string")c+=m;else if(m){var p=ku(bt(m,t,n,r));s=kn(s,p+h),c+=p}}if(c){var y=ea(s>>>0);n.hasNameForId(this.componentId,y)||n.insertRules(this.componentId,y,r(c,".".concat(y),void 0,this.componentId)),i=Xt(i,y)}}return i},e}(),gd=je.createContext(void 0);gd.Consumer;var nl={};function Kp(e,t,n){var r=rs(e),i=e,o=!tl(e),l=t.attrs,a=l===void 0?Co:l,s=t.componentId,c=s===void 0?function(v,C){var E=typeof v!="string"?"sc":vu(v);nl[E]=(nl[E]||0)+1;var x="".concat(E,"-").concat(yp(Eo+E+nl[E]));return C?"".concat(C,"-").concat(x):x}(t.displayName,t.parentComponentId):s,h=t.displayName,m=h===void 0?function(v){return tl(v)?"styled.".concat(v):"Styled(".concat(wp(v),")")}(e):h,p=t.displayName&&t.componentId?"".concat(vu(t.displayName),"-").concat(t.componentId):t.componentId||c,y=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,w=t.shouldForwardProp;if(r&&i.shouldForwardProp){var k=i.shouldForwardProp;if(t.shouldForwardProp){var L=t.shouldForwardProp;w=function(v,C){return k(v,C)&&L(v,C)}}else w=k}var d=new Gp(n,p,r?i.componentStyle:void 0);function u(v,C){return function(E,x,j){var A=E.attrs,T=E.componentStyle,ke=E.defaultProps,At=E.foldedComponentIds,Vt=E.styledComponentId,Br=E.target,_o=je.useContext(gd),Qn=Cu(),Bt=E.shouldForwardProp||Qn.shouldForwardProp,_=mp(x,_o,ke)||An,P=function(ht,Ee,nt){for(var Yn,Ut=ye(ye({},Ee),{className:void 0,theme:nt}),zo=0;zo<ht.length;zo+=1){var Hr=Vn(Yn=ht[zo])?Yn(Ut):Yn;for(var gt in Hr)Ut[gt]=gt==="className"?Xt(Ut[gt],Hr[gt]):gt==="style"?ye(ye({},Ut[gt]),Hr[gt]):Hr[gt]}return Ee.className&&(Ut.className=Xt(Ut.className,Ee.className)),Ut}(A,x,_),N=P.as||Br,D={};for(var F in P)P[F]===void 0||F[0]==="$"||F==="as"||F==="theme"&&P.theme===_||(F==="forwardedAs"?D.as=P.forwardedAs:Bt&&!Bt(F,N)||(D[F]=P[F]));var Ht=function(ht,Ee){var nt=Cu(),Yn=ht.generateAndInjectStyles(Ee,nt.styleSheet,nt.stylis);return Yn}(T,P),Ve=Xt(At,Vt);return Ht&&(Ve+=" "+Ht),P.className&&(Ve+=" "+P.className),D[tl(N)&&!rd.has(N)?"class":"className"]=Ve,D.ref=j,oe.createElement(N,D)}(f,v,C)}u.displayName=m;var f=je.forwardRef(u);return f.attrs=y,f.componentStyle=d,f.displayName=m,f.shouldForwardProp=w,f.foldedComponentIds=r?Xt(i.foldedComponentIds,i.styledComponentId):"",f.styledComponentId=p,f.target=r?i.target:e,Object.defineProperty(f,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=r?function(C){for(var E=[],x=1;x<arguments.length;x++)E[x-1]=arguments[x];for(var j=0,A=E;j<A.length;j++)ta(C,A[j],!0);return C}({},i.defaultProps,v):v}}),is(f,function(){return".".concat(f.styledComponentId)}),o&&ud(f,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),f}function zu(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var ju=function(e){return Object.assign(e,{isCss:!0})};function Xp(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Vn(e)||Or(e))return ju(bt(zu(Co,Ji([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?bt(r):ju(bt(zu(r,t)))}function ra(e,t,n){if(n===void 0&&(n=An),!t)throw Vr(1,t);var r=function(i){for(var o=[],l=1;l<arguments.length;l++)o[l-1]=arguments[l];return e(t,n,Xp.apply(void 0,Ji([i],o,!1)))};return r.attrs=function(i){return ra(e,t,ye(ye({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return ra(e,t,ye(ye({},n),i))},r}var vd=function(e){return ra(Kp,e)},Te=vd;rd.forEach(function(e){Te[e]=vd(e)});const Ft={primary:"#09101a",secondary:"#1f2b3e",tertiary:"#374357",fourth:"#acc2ef",fifth:"#cee8ff",white:"#e0e0e0",colorBorder:"#5a93b0"},{primary:si,fourth:Zp,fifth:Jp,white:he,colorBorder:Pu}=Ft,qp=Te.header`
  width: 100%;
  height: 5rem;
  background-color: ${si};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 5;
  transition: background 0.7s ease;

  @media (width >= 1024px) {
    width: 20%;
    align-items: flex-start;
    background-color: transparent;
  }

  @media (width >= 1800px) {
    width: calc(1800px - 1440px);
  }

  .logo {
    font-size: 1.5rem;
    margin-left: 1rem;
    color: ${he};
    font-family: "Stardos Stencil", system-ui;

    button {
      background-color: transparent;
      width: 100%;
      height: 6.25rem;
      border: none;
      outline: none;
      font-family: "Stardos Stencil", system-ui;
      color: ${he};
      font-size: 0.9em;
    }

    @media (width >= 1024px) {
      width: 100%;
      height: 5rem;
      margin-left: 0;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background-color: ${si};
      border-bottom: 1px solid ${he};
    }
  }

  nav {
    width: 100%;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(9, 16, 26, 0.7);
    backdrop-filter: blur(10px);

    @media (width >= 1024px) {
      height: 100vh;
      justify-content: flex-start;
      animation: none;
      align-items: flex-start;
    }

    .container__day {
      width: 90%;
      padding-top: 1rem;
      display: flex;
      flex-direction: column;

      @media (width >= 1024px) {
        width: 100%;
        padding-top: 2rem;
      }

      p {
        font-size: 1.1em;
        color: ${he};
        letter-spacing: 3px;
        text-align: center;
      }

      p:last-child {
        padding: 1rem;
        text-transform: capitalize;
        color: ${he};
        text-shadow: 0 0 0.625rem ${si}, 0 0 0.125rem ${he},
          0 0 0.625rem ${he}, 0 0 0.375rem ${he}, 0 0 1.25rem ${he},
          0 0 1.25rem ${he}, 0 0 0.0625rem ${he}, 0 0 0.75rem ${he};

        @media (width >= 1024px) {
          border-bottom: 2px solid ${Pu};
        }
      }
    }

    animation: ${e=>e.$toggle?"star 0.5s ease 0s 1 normal forwards":"end 0.5s ease 0s 1 normal forwards"};

    @keyframes star {
      0% {
        transform: scaleX(0);
      }

      100% {
        transform: scaleX(1);
      }
    }

    @keyframes end {
      0% {
        transform: scaleY(1);
      }

      100% {
        transform: scaleY(0);
      }
    }

    ul {
      width: 90%;

      @media (width >= 1024px) {
        width: 100%;
      }
      li {
        button {
          background-color: transparent;
          width: 100%;
          height: 6.25rem;
          border: none;
          outline: none;
          border-bottom: 2px solid ${Pu};
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: ${he};
          letter-spacing: 1px;

          .icon {
            width: 2.5rem;
            height: 2.5rem;
            padding: 0.3rem;
            margin-bottom: 0.5rem;
            border-radius: 50%;
            color: ${Zp};
            transition: color, background 0.3s ease;

            @media (width >= 1024px) {
              &.active {
                color: ${si};
                background-color: ${Jp};
              }
            }
          }
        }
      }
    }
  }

  .menu-hamburger {
    font-size: 2.6rem;
    margin-right: 1rem;
    color: ${he};

    @media (width >= 1024px) {
      display: none;
    }
  }
`;var yd={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Nu=je.createContext&&je.createContext(yd),bp=["attr","size","title"];function e2(e,t){if(e==null)return{};var n=t2(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function t2(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function eo(){return eo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},eo.apply(this,arguments)}function $u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function to(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?$u(Object(n),!0).forEach(function(r){n2(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$u(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function n2(e,t,n){return t=r2(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r2(e){var t=i2(e,"string");return typeof t=="symbol"?t:String(t)}function i2(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function wd(e){return e&&e.map((t,n)=>je.createElement(t.tag,to({key:n},t.attr),wd(t.child)))}function mt(e){return t=>je.createElement(o2,eo({attr:to({},e.attr)},t),wd(e.child))}function o2(e){var t=n=>{var{attr:r,size:i,title:o}=e,l=e2(e,bp),a=i||n.size||"1em",s;return n.className&&(s=n.className),e.className&&(s=(s?s+" ":"")+e.className),je.createElement("svg",eo({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:s,style:to(to({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),o&&je.createElement("title",null,o),e.children)};return Nu!==void 0?je.createElement(Nu.Consumer,null,n=>t(n)):t(yd)}function l2(e){return mt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M18 18V20H6V18H18ZM21 11V13H3V11H21ZM18 4V6H6V4H18Z"},child:[]}]})(e)}function a2(e){return mt({tag:"svg",attr:{viewBox:"0 0 1024 1024",fill:"currentColor",fillRule:"evenodd"},child:[{tag:"path",attr:{d:"M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"},child:[]}]})(e)}function s2(e){return mt({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(e)}function u2(e){return mt({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(e)}function c2(e){return mt({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M384 121.941V128H256V0h6.059c6.365 0 12.47 2.529 16.971 7.029l97.941 97.941A24.005 24.005 0 0 1 384 121.941zM248 160c-13.2 0-24-10.8-24-24V0H24C10.745 0 0 10.745 0 24v464c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24V160H248zM123.206 400.505a5.4 5.4 0 0 1-7.633.246l-64.866-60.812a5.4 5.4 0 0 1 0-7.879l64.866-60.812a5.4 5.4 0 0 1 7.633.246l19.579 20.885a5.4 5.4 0 0 1-.372 7.747L101.65 336l40.763 35.874a5.4 5.4 0 0 1 .372 7.747l-19.579 20.884zm51.295 50.479l-27.453-7.97a5.402 5.402 0 0 1-3.681-6.692l61.44-211.626a5.402 5.402 0 0 1 6.692-3.681l27.452 7.97a5.4 5.4 0 0 1 3.68 6.692l-61.44 211.626a5.397 5.397 0 0 1-6.69 3.681zm160.792-111.045l-64.866 60.812a5.4 5.4 0 0 1-7.633-.246l-19.58-20.885a5.4 5.4 0 0 1 .372-7.747L284.35 336l-40.763-35.874a5.4 5.4 0 0 1-.372-7.747l19.58-20.885a5.4 5.4 0 0 1 7.633-.246l64.866 60.812a5.4 5.4 0 0 1-.001 7.879z"},child:[]}]})(e)}function d2(e){return mt({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"},child:[]}]})(e)}function f2(e){return mt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.63 214.63l-45.25-45.25c-6-6-14.14-9.37-22.63-9.37H384V80c0-26.51-21.49-48-48-48H176c-26.51 0-48 21.49-48 48v80H77.25c-8.49 0-16.62 3.37-22.63 9.37L9.37 214.63c-6 6-9.37 14.14-9.37 22.63V320h128v-16c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v16h128v-16c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v16h128v-82.75c0-8.48-3.37-16.62-9.37-22.62zM320 160H192V96h128v64zm64 208c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16v-16H192v16c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16v-16H0v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96H384v16z"},child:[]}]})(e)}function p2(e){return mt({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"},child:[]}]})(e)}const m2=()=>{const[e,t]=oe.useState({day:"",message:""});return oe.useEffect(()=>{(()=>{const r=new Date,i=r.toLocaleDateString("es-MX",{weekday:"long"}),o=r.getHours();o>=7&&o<=12&&t({...e,day:i,message:"Buenos dias, espero estés teniendo un buen"}),o>12&&o<=18&&t({...e,day:i,message:"Buenas tardes, espero estés teniendo un buen"}),o>=18&&t({...e,day:i,message:"Buenas noches, espero estés teniendo un buen"})})()},[]),{getDay:e}},xd=()=>{const[e,t]=oe.useState(""),n=r=>{const i=document.getElementById(r);i&&i.scrollIntoView({behavior:"smooth"})};return oe.useEffect(()=>{const r=()=>{const i=window.scrollY,o=document.querySelectorAll("section[id]");let l="";o.forEach(a=>{const s=a.getBoundingClientRect().top+window.scrollY,c=s+a.clientHeight;i>=s&&i<c&&(l=a.id)}),t(l)};return window.addEventListener("scroll",r),()=>{window.removeEventListener("scroll",r)}},[]),{handleGetName:n,currentElementId:e}},h2=()=>{const{getDay:e}=m2(),[t,n]=oe.useState(!1),{handleGetName:r,currentElementId:i}=xd(),o=()=>{n(!t)};return g.jsxs(qp,{$toggle:t,children:[g.jsx("div",{className:"logo",children:g.jsxs("button",{onClick:()=>r("home"),children:[g.jsx("span",{children:"«"})," AlexNavDev ",g.jsx("span",{children:"/»"})]})}),g.jsxs("nav",{children:[g.jsxs("div",{className:"container__day",children:[g.jsx("p",{children:e.message}),g.jsxs("p",{children:[e.day,"."]})]}),g.jsxs("ul",{children:[g.jsx("li",{onClick:()=>n(!1),children:g.jsxs("button",{onClick:()=>r("home"),children:[g.jsx(d2,{className:`icon ${i=="home"?"active":""}`}),"Inicio"]})}),g.jsx("li",{onClick:()=>n(!1),children:g.jsxs("button",{onClick:()=>r("about"),children:[g.jsx(p2,{className:`icon ${i=="section-about"?"active":""}`}),"Sobre mí"]})}),g.jsx("li",{onClick:()=>n(!1),children:g.jsxs("button",{onClick:()=>r("tools"),children:[g.jsx(f2,{className:`icon ${i=="section-tools"?"active":""}`}),"Habilidades"]})}),g.jsx("li",{onClick:()=>n(!1),children:g.jsxs("button",{onClick:()=>r("projects"),children:[g.jsx(c2,{className:`icon ${i=="section-projects"?"active":""}`}),"Proyectos"]})})]})]}),g.jsx("div",{className:"menu-hamburger",onClick:o,children:t?g.jsx(a2,{}):g.jsx(l2,{})})]})},{primary:Lu,tertiary:g2,white:Tu}=Ft,v2=Te.section`
  width: 100%;
  height: 100dvh;
  position: relative;

  h2 {
    margin-bottom: 1.2rem;
    background-color: rgba(0, 0, 0, 0.8);
    font-family: "Stardos Stencil", system-ui;
    font-size: 2.5em;
    color: ${Tu};
    text-align: center;
    letter-spacing: 0.3rem;
    text-shadow: 5px 0px 20px rgba(255, 255, 255, 0.8),
      -5px 0px 20px rgba(255, 255, 255, 0.8);

    @media (width >= 1024px) {
      padding: 1rem;
    }
  }

  .image-divider {
    padding: 5rem 0 1rem 0;

    svg {
      width: 100%;
      height: 1.875rem;
      fill: ${Lu};

      @media (width >= 1024px) {
        height: 3.125rem;
      }
    }

    @media (width >= 1024px) {
      padding: 0;
    }
  }

  .container__about {
    width: 100%;
    display: flex;
    align-items: center;
    background-color: rgba(9, 16, 26, 0.7);
    box-shadow: 0 0 10px 3px ${g2};
    backdrop-filter: blur(15px);
    transition: background, box-shadow 0.6s ease-in;

    @media (width >= 768px) {
      width: 80%;
      height: 50vh;
      margin: 8rem auto 0 auto;
      border-radius: 1.25rem;
    }

    @media (width >= 1024px) {
      width: 90%;
      height: 70vh;
      margin: 4rem auto 0 auto;
    }

    @media (width >= 1440px) {
      justify-content: space-evenly;
    }

    .container__info {
      @media (width >= 678px) {
        height: 350px;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      @media (width >= 1024px) {
        width: 60%;
        height: auto;
      }

      @media (width >= 1440px) {
        width: 50%;
      }

      p {
        padding: 0.8rem 1.5em;
        line-height: 1.5rem;
        letter-spacing: 0.0813rem;
        font-weight: 100;
        color: ${Tu};
        text-shadow: 1px 2px 5px ${Lu};

        @media (width >= 768px) {
          font-size: 1.1rem;
        }

        @media (width >= 1024px) {
          line-height: 1.5rem;
          font-weight: 400;
        }

        @media (width >= 1440px) {
          font-size: 1.3em;
          line-height: 2rem;
        }
      }
    }

    figure {
      display: none;

      @media (width >= 1024px) {
        width: 15.625rem;
        height: 15.625rem;
        display: inline-flex;
        background-color: rgba(0, 0, 0, 0.6);
        border-radius: 50%;

        img {
          width: 100%;
          filter: drop-shadow(0 0 5px #fff);
        }
      }

      @media (width >= 1440px) {
        width: 23.75rem;
        height: 23.75rem;
      }
    }
  }
`,y2="/portafolio/assets/user-IFWW8kIV.svg",w2=()=>g.jsxs(v2,{id:"section-about",children:[g.jsx("div",{className:"image-divider",id:"about",children:g.jsx("svg",{preserveAspectRatio:"none",viewBox:"0 0 1200 120",xmlns:"http://www.w3.org/2000/svg",children:g.jsx("path",{d:"M1200 120L0 16.48V0h1200v120z"})})}),g.jsx("h2",{children:" Sobre mí"}),g.jsxs("div",{className:"container__about",children:[g.jsxs("div",{className:"container__info",children:[g.jsx("p",{children:"Me considero una persona autodidacta, con gusto por la tecnología, programación y el diseño web. En estos momentos sumergiendome en el fascinante mundo de JavaScript."}),g.jsx("p",{children:"Aprovecho mi pasión por aprender y mi curiosidad por la tecnología para adquirir conocimientos en programación y aplicarlos al desarrollo web."}),g.jsx("p",{children:"Busco mejorar mis habilidades en JavaScript mientras trabajo en proyectos prácticos que me permitan experimentar y fortalecer mis capacidades."})]}),g.jsx("figure",{children:g.jsx("img",{src:y2,alt:"imagen demostrativa",loading:"lazy"})})]})]}),x2="/portafolio/assets/background-card-BOwIfAcu.svg",{primary:rl,secondary:S2,white:He}=Ft,k2=Te.section`
  width: 100%;
  height: 100dvh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding-top: 5rem;

  @media (width >= 1024px) {
    font-size: 1.125rem;
  }

  .wrapper {
    perspective: 1000px;

    .card {
      width: 21.875rem;
      height: 26.875rem;
      background-color: rgba(31, 43, 62, 0.8);
      backdrop-filter: blur(5px);
      position: relative;
      overflow: hidden;
      border-radius: 0.625rem;

      @media (width >= 768px) {
        width: 43.75rem;
        height: 25rem;
      }

      &::before {
        content: "";
        width: 21.875rem;
        height: 9.375rem;
        position: absolute;
        top: -5rem;
        right: 0;
        border-radius: 50%;
        background-color: ${rl};

        @media (width >= 768px) {
          width: 9.375rem;
          height: 9.375rem;
          top: -1.875rem;
          left: -1.875rem;
        }
      }

      &::after {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        background-image: url(${x2});
        background-size: cover;
        opacity: 0.4;
        z-index: -1;
      }

      h1 {
        font-family: "Stardos Stencil", system-ui;
        font-size: 2em;
        color: ${He};
        text-align: center;
        position: relative;

        @media (width >= 768px) {
          text-align: left;
          padding: 32px 16px;
        }
      }

      .card__body {
        width: 100%;
        height: 21.25rem;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;

        @media (width >= 768px) {
          height: 243px;
          padding-bottom: 112px;
          flex-direction: row;
        }

        .information {
          @media (width >= 768px) {
            height: 9.375rem;
          }

          p {
            width: 100%;
            text-align: center;
            color: ${He};
            font-size: 1em;
            letter-spacing: 0.1rem;
            border-radius: 0.625rem;
            margin: 1rem 0;
          }

          :first-child {
            span {
              font-size: 1.2em;
              color: #fff;
              text-shadow: 0 0 8px #00b7ff, 0 0 2px #00b7ff, 0 0 10px #00b7ff,
                0 0 6px #00b7ff, 0 0 20px #00b7ff, 0 0 20px #00b7ff,
                0 0 1px #00b7ff, 0 0 12px #00b7ff;
            }
          }

          :nth-child(2) {
            font-size: 1.1em;
            text-shadow: 0 0 10px ${rl}, 0 0 2px ${He},
              0 0 10px ${He}, 0 0 6px ${He}, 0 0 20px ${He},
              0 0 20px ${He}, 0 0 1px ${He}, 0 0 12px ${He};
          }
        }

        .photo {
          filter: drop-shadow(0 0 0.625rem #fff);

          figure {
            width: 9.375rem;
            height: 9.375rem;
            clip-path: polygon(
              25% 0%,
              75% 0%,
              100% 50%,
              75% 100%,
              25% 100%,
              0% 50%
            );
            position: relative;

            img {
              width: 100%;
              height: 100%;
              object-fit: contain;
              background-color: ${S2};
            }
          }
        }
        button {
          width: 9.375rem;
          height: 2.1875rem;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          outline-style: none;
          border-radius: 0.5rem;
          background-color: ${rl};
          box-shadow: 0.0625rem 0.0625rem 0.3125rem 0.125rem ${He};
          color: ${He};
          transition: transform 3s ease;

          @media (width >= 768px) {
            position: absolute;
            bottom: 6.875rem;
            left: 9.0625rem;
          }

          @media (width >= 1024px) {
            font-size: 0.9em;
          }

          &:active {
            box-shadow: none;
            transform: scale(0.9);
          }
        }
      }

      .card__footer {
        height: 2.9rem;
        position: relative;

        @media (width >= 768px) {
          height: 3.1rem;
        }

        img {
          width: 100%;
          height: 100%;
          position: absolute;
          bottom: 0;
          object-fit: cover;
        }

        img:first-child {
          @media (width >= 768px) {
            left: -0.625rem;
          }
        }

        img:last-child {
          transform: scaleX(-1);

          @media (width >= 768px) {
            width: 43.75rem;
            bottom: 15.625rem;
            transform: rotateZ(270deg) translateY(20.5rem);
          }
        }
      }
    }
  }
`,E2=Te.div`
  width: 100%;
  height: 65px;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;

  @media (width >= 1024px) {
    width: 60%;
    border-radius: 10px;
  }

  figure {
    width: 50px;
    height: 50px;
    cursor: pointer;
    border-radius: 30%;
    box-shadow: 0px 6px 5px -5px #fff;
    display: grid;
    place-items: center;

    a {
      width: 35px;
      height: 35px;
      background-color: transparent;
      display: initial;
      font-size: 2rem;
      color: #000;

      svg {
        width: 35px;
        height: 35px;
        border-radius: 50%;
      }
    }

    button {
      width: 35px;
      height: 35px;
      outline-style: none;
      border: none;
      background-color: transparent;
      transition: transform 3s ease;
      font-size: 2rem;

      &:active {
        box-shadow: none;
        transform: scale(0.9);
      }
    }

    img {
      width: 100%;
    }
  }
`,C2="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20xmlns='http://www.w3.org/2000/svg'%20fill-rule='evenodd'%20clip-rule='evenodd'%3e%3cpath%20d='M3%2024h19v-23h-1v22h-18v1zm17-24h-18v22h18v-22zm-1%201h-16v20h16v-20zm-2%2016h-12v1h12v-1zm0-3h-12v1h12v-1zm0-3h-12v1h12v-1zm-7.348-3.863l.948.3c-.145.529-.387.922-.725%201.178-.338.257-.767.385-1.287.385-.643%200-1.171-.22-1.585-.659-.414-.439-.621-1.04-.621-1.802%200-.806.208-1.432.624-1.878.416-.446.963-.669%201.642-.669.592%200%201.073.175%201.443.525.221.207.386.505.496.892l-.968.231c-.057-.251-.177-.449-.358-.594-.182-.146-.403-.218-.663-.218-.359%200-.65.129-.874.386-.223.258-.335.675-.335%201.252%200%20.613.11%201.049.331%201.308.22.26.506.39.858.39.26%200%20.484-.082.671-.248.187-.165.322-.425.403-.779zm3.023%201.78l-1.731-4.842h1.06l1.226%203.584%201.186-3.584h1.037l-1.734%204.842h-1.044z'/%3e%3c/svg%3e",{primary:_2,fourth:z2,fifth:j2}=Ft,P2=Te.div`
  position: absolute;
  bottom: 4.375rem;

  p {
    width: 17.5rem;
    height: 3.125rem;
    background-color: ${j2};
    color: ${_2};
    margin-bottom: 1.25rem;
    text-shadow: 1px 1px 2px ${z2};
    letter-spacing: 1px;
    border-radius: 8px;
    text-align: center;
    padding: 0.8rem 0;
    animation: animationEmail 2s ease 0s 1 normal forwards;
  }

  @keyframes animationEmail {
    0% {
      animation-timing-function: ease-out;
      transform: scale(1);
      transform-origin: center center;
    }

    10% {
      animation-timing-function: ease-in;
      transform: scale(0.91);
    }

    17% {
      animation-timing-function: ease-out;
      transform: scale(0.98);
    }

    33% {
      animation-timing-function: ease-in;
      transform: scale(0.87);
    }

    45% {
      animation-timing-function: ease-out;
      transform: scale(1);
    }
  }
`,N2=({message:e})=>g.jsx(P2,{children:g.jsx("p",{children:e})});function $2(e){return mt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"},child:[]}]})(e)}const L2="/portafolio/assets/CV-Alejandro-Cx4AH-CC.pdf",T2=({handleVisibleEmail:e,isVisibleEmail:t})=>g.jsxs(E2,{children:[g.jsx("figure",{children:g.jsx("a",{href:"https://github.com/AlexNavDev",target:"_blank",children:g.jsx(s2,{})})}),g.jsx("figure",{children:g.jsx("a",{href:"https://www.linkedin.com/in/alejandro-navarro-dev/",target:"_blank",children:g.jsx(u2,{})})}),g.jsx("figure",{children:g.jsx("button",{onClick:e,children:g.jsx($2,{})})}),g.jsx("figure",{children:g.jsx("a",{href:L2,target:"_blank",children:g.jsx("img",{src:C2,alt:"logo CV",loading:"lazy"})})}),t&&g.jsx(N2,{message:"Email copiado al portapapeles"})]}),M2="/portafolio/assets/foto-BomFLIYo.png",Mu="data:image/svg+xml,%3csvg%20viewBox='0%200%20700%2068'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_18_69)'%3e%3cpath%20d='M2.38419e-05%204.76837e-07L700%2058.6613V68H2.38419e-05V4.76837e-07Z'%20fill='%2309101a'/%3e%3c/g%3e%3c/svg%3e",O2=()=>{const[e,t]=oe.useState(!1),n=async()=>{try{await navigator.clipboard.writeText("navarro.alejandro@outlook.es"),t(!0)}catch(r){console.log(r)}};return oe.useEffect(()=>{const r=setTimeout(()=>{t(!1)},3e3);return()=>{clearInterval(r)}},[e]),{handleVisibleEmail:n,isVisibleEmail:e}},R2=({wrapperRef:e,cardRef:t})=>{oe.useEffect(()=>{const n=o=>{const l=e.current,a=t.current;if(a&&l){a.style.transition="none";const{width:s,height:c}=l.getBoundingClientRect(),h=s/2,m=c/2,{pageX:p,pageY:y}=o,w=(p-h)/h*10,k=(y-m)/m*10;a.style.transform=`rotateX(${w}deg) rotateY(${k}deg)`}},r=()=>{const o=t.current;o&&(o.style.transition="transform .5s ease-in-out",o.style.transform="rotateX(0deg) rotateY(0deg)")},i=e.current;return i&&(i.addEventListener("mousemove",n),i.addEventListener("mouseleave",r)),()=>{i&&(i.removeEventListener("mousemove",n),i.removeEventListener("mouseleave",r))}},[e,t])},I2=()=>{const{handleVisibleEmail:e,isVisibleEmail:t}=O2(),n=oe.useRef(null),r=oe.useRef(null);R2({wrapperRef:n,cardRef:r});const{handleGetName:i,currentElementId:o}=xd();return g.jsxs(k2,{id:"home",children:[g.jsx("div",{className:"wrapper",ref:n,children:g.jsxs("div",{className:"card",ref:r,children:[g.jsxs("h1",{children:[g.jsx("span",{children:"«¡"}),"Hola mundo",g.jsx("span",{children:"!»"})]}),g.jsxs("div",{className:"card__body",children:[g.jsxs("div",{className:"information",children:[g.jsxs("p",{children:["Mi nombre es ",g.jsx("span",{children:"Alejandro Navarro"})]}),g.jsx("p",{children:"Desarrollador Frontend"})]}),g.jsx("div",{className:"photo",children:g.jsx("figure",{children:g.jsx("img",{src:M2,alt:"Foto Alejandro"})})}),g.jsxs("button",{onClick:()=>i("projects"),children:[g.jsx("p",{className:`icon ${o=="section-projects"?"active":""}`}),"Ver Proyectos"]})]}),g.jsxs("div",{className:"card__footer",children:[g.jsx("img",{src:Mu,alt:"imagen-divisora"}),g.jsx("img",{src:Mu,alt:"imagen-divisora"})]})]})}),g.jsx(T2,{handleVisibleEmail:e,isVisibleEmail:t})]})},{secondary:D2,white:Ou}=Ft,F2=Te.div`
  position: relative;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem 0;
  padding: 0.5rem 0;
  transform: scale(0.9);

  @media (width >= 768px) {
    width: 80%;
    height: 40.5rem;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 4rem;
    gap: 2rem 3rem;
  }

  @media (width >= 1024px) {
    width: 100%;
    height: auto;
    overflow: visible;
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    grid-template-rows: repeat(2, 1fr) 0.2fr repeat(4, 1fr) 0.2fr repeat(2, 1fr);
    grid-column-gap: 0;
    grid-row-gap: 0;
  }

  figure {
    width: 8.125rem;
    height: 8.125rem;
    background-color: ${D2};
    box-shadow: 2px 2px 10px ${Ou};
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border: 2px solid rgba(255, 255, 255, 0.28);
    border-radius: 10px;
    position: relative;
    opacity: 0.8;
    transition: transform 0.3s ease-in-out;

    @media (width >= 768px) {
      width: 9.375rem;
      height: 9.375rem;
    }

    &:first-child {
      grid-area: 1 / 1 / 3 / 3;
    }

    &:nth-child(2) {
      grid-area: 1 / 4 / 3 / 6;
    }

    &:nth-child(3) {
      grid-area: 1 / 7 / 3 / 9;
    }

    &:nth-child(4) {
      grid-area: 1/ 10 / 3 / 12;
    }

    &:nth-child(5) {
      grid-area: 5 / 1 / 7 / 3;
    }
    &:nth-child(6) {
      display: none;

      @media (width >= 1024px) {
        width: 100%;
        height: 90%;
        opacity: 1;
        display: flex;
        background-color: rgba(0, 0, 0, 0.6);
        padding: 0.5rem;
        backdrop-filter: blur(15px);
        grid-area: 4 / 4 / 8 / 9;
        transform: none;

        &:hover {
          transform: none;
        }
      }

      @media (width >= 1440px) {
        height: 100%;
      }
    }
    &:nth-child(7) {
      grid-area: 5 / 10 / 7 / 12;
    }
    &:nth-child(8) {
      grid-area: 9 / 2 / 11 / 4;
    }

    &:nth-child(9) {
      grid-area: 9 / 5 / 11 / 7;
    }

    &:nth-child(10) {
      grid-area: 9 / 8 / 11 / 10;
    }

    &:hover {
      opacity: 1;
      border: 2px solid rgba(255, 255, 255, 0.5);
      transform: scale(1.1);

      & img {
        filter: drop-shadow(0 0 5px #fff);
      }
    }

    svg {
      width: 9.375rem;
      height: 9.375rem;
      position: absolute;
      top: -0.9375rem;
      left: 0;
      opacity: 0.7;
    }

    img {
      width: 50%;
      z-index: 1;
    }

    figcaption {
      width: 100%;
      font-family: "Stardos Stencil", system-ui;
      text-align: center;
      color: ${Ou};
      padding: 3px 0;
      border-radius: 5px;
      text-transform: capitalize;
      letter-spacing: 2px;

      @media (width >= 768px) {
        font-size: 1.2rem;
      }
    }
  }
`,{primary:A2,white:V2}=Ft,B2=Te.section`
  width: 100%;
  min-height: 100vh;
  position: relative;

  h2 {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    font-family: "Stardos Stencil", system-ui;
    font-size: 2.5em;
    color: ${V2};
    text-align: center;
    letter-spacing: 0.3rem;
    text-shadow: 5px 0px 20px rgba(255, 255, 255, 0.8),
      -5px 0px 20px rgba(255, 255, 255, 0.8);

    @media (width >= 1024px) {
      padding: 1rem;
    }
  }

  .image-divider {
    padding: 5rem 0 1rem 0;

    svg {
      width: 100%;
      height: 1.875rem;
      fill: ${A2};

      @media (width >= 1024px) {
        height: 3.125rem;
      }
    }

    @media (width >= 1024px) {
      padding: 0;
    }
  }
`,H2="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2032%2032'%3e%3ctitle%3efile_type_html%3c/title%3e%3cpolygon%20points='5.902%2027.201%203.655%202%2028.345%202%2026.095%2027.197%2015.985%2030%205.902%2027.201'%20style='fill:%23e44f26'/%3e%3cpolygon%20points='16%2027.858%2024.17%2025.593%2026.092%204.061%2016%204.061%2016%2027.858'%20style='fill:%23f1662a'/%3e%3cpolygon%20points='16%2013.407%2011.91%2013.407%2011.628%2010.242%2016%2010.242%2016%207.151%2015.989%207.151%208.25%207.151%208.324%207.981%209.083%2016.498%2016%2016.498%2016%2013.407'%20style='fill:%23ebebeb'/%3e%3cpolygon%20points='16%2021.434%2015.986%2021.438%2012.544%2020.509%2012.324%2018.044%2010.651%2018.044%209.221%2018.044%209.654%2022.896%2015.986%2024.654%2016%2024.65%2016%2021.434'%20style='fill:%23ebebeb'/%3e%3cpolygon%20points='15.989%2013.407%2015.989%2016.498%2019.795%2016.498%2019.437%2020.507%2015.989%2021.437%2015.989%2024.653%2022.326%2022.896%2022.372%2022.374%2023.098%2014.237%2023.174%2013.407%2022.341%2013.407%2015.989%2013.407'%20style='fill:%23fff'/%3e%3cpolygon%20points='15.989%207.151%2015.989%209.071%2015.989%2010.235%2015.989%2010.242%2023.445%2010.242%2023.445%2010.242%2023.455%2010.242%2023.517%209.548%2023.658%207.981%2023.732%207.151%2015.989%207.151'%20style='fill:%23fff'/%3e%3c/svg%3e",U2="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2032%2032'%3e%3ctitle%3efile_type_css%3c/title%3e%3cpolygon%20points='5.902%2027.201%203.656%202%2028.344%202%2026.095%2027.197%2015.985%2030%205.902%2027.201'%20style='fill:%231572b6'/%3e%3cpolygon%20points='16%2027.858%2024.17%2025.593%2026.092%204.061%2016%204.061%2016%2027.858'%20style='fill:%2333a9dc'/%3e%3cpolygon%20points='16%2013.191%2020.09%2013.191%2020.372%2010.026%2016%2010.026%2016%206.935%2016.011%206.935%2023.75%206.935%2023.676%207.764%2022.917%2016.282%2016%2016.282%2016%2013.191'%20style='fill:%23fff'/%3e%3cpolygon%20points='16.019%2021.218%2016.005%2021.222%2012.563%2020.292%2012.343%2017.827%2010.67%2017.827%209.24%2017.827%209.673%2022.68%2016.004%2024.438%2016.019%2024.434%2016.019%2021.218'%20style='fill:%23ebebeb'/%3e%3cpolygon%20points='19.827%2016.151%2019.455%2020.29%2016.008%2021.22%2016.008%2024.436%2022.344%2022.68%2022.391%2022.158%2022.928%2016.151%2019.827%2016.151'%20style='fill:%23fff'/%3e%3cpolygon%20points='16.011%206.935%2016.011%208.855%2016.011%2010.018%2016.011%2010.026%208.555%2010.026%208.555%2010.026%208.545%2010.026%208.483%209.331%208.342%207.764%208.268%206.935%2016.011%206.935'%20style='fill:%23ebebeb'/%3e%3cpolygon%20points='16%2013.191%2016%2015.111%2016%2016.274%2016%2016.282%2012.611%2016.282%2012.611%2016.282%2012.601%2016.282%2012.539%2015.587%2012.399%2014.02%2012.325%2013.191%2016%2013.191'%20style='fill:%23ebebeb'/%3e%3c/svg%3e",W2="/portafolio/assets/sass-D-hA8Vbr.svg",Q2="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20aria-label='JavaScript'%20role='img'%20viewBox='0%200%20512%20512'%3e%3crect%20width='512'%20height='512'%20rx='15%25'%20fill='%23f7df1e'/%3e%3cpath%20d='m324,370c10,17%2024,29%2047,29%2020,0%2033,-10%2033,-24%200,-16%20-13,-22%20-35,-32l-12,-5c-35,-15%20-58,-33%20-58,-72%200,-36%2027,-64%2070,-64%2031,0%2053,11%2068,39l-37,24c-8,-15%20-17,-21%20-31,-21%20-14,0%20-23,9%20-23,21%200,14%209,20%2030,29l12,5c41,18%2064,35%2064,76%200,43%20-34,67%20-80,67%20-45,0%20-74,-21%20-88,-49zm-170,4c8,13%2014,25%2031,25%2016,0%2026,-6%2026,-30V203h48v164c0,50%20-29,72%20-72,72%20-39,0%20-61,-20%20-72,-44z'/%3e%3c/svg%3e",Y2="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20128%20128'%20enable-background='new%200%200%20128%20128'%3e%3cg%20fill='%2361DAFB'%3e%3ccircle%20cx='64'%20cy='64'%20r='11.4'/%3e%3cpath%20d='M107.3%2045.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4%201.1-4.8%201.5-7.1%202.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7%200-15.9%205.2-24.9%2013.9-9-8.7-17.9-13.9-24.9-13.9-2.4%200-4.5.5-6.4%201.6-6.4%203.7-8.7%2013-6.6%2026.1.4%202.3.9%204.7%201.5%207.1-2.4.7-4.7%201.4-6.9%202.3-12.5%204.8-19.3%2011.4-19.3%2018.8s6.9%2014%2019.3%2018.8c2.2.8%204.5%201.6%206.9%202.3-.6%202.4-1.1%204.8-1.5%207.1-2.1%2013.2.2%2022.5%206.6%2026.1%201.9%201.1%204%201.6%206.4%201.6%207.1%200%2016-5.2%2024.9-13.9%209%208.7%2017.9%2013.9%2024.9%2013.9%202.4%200%204.5-.5%206.4-1.6%206.4-3.7%208.7-13%206.6-26.1-.4-2.3-.9-4.7-1.5-7.1%202.4-.7%204.7-1.4%206.9-2.3%2012.5-4.8%2019.3-11.4%2019.3-18.8s-6.8-14-19.3-18.8zm-14.8-30.5c4.1%202.4%205.5%209.8%203.8%2020.3-.3%202.1-.8%204.3-1.4%206.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13%207.4-7.3%2014.9-12.3%2021-12.3%201.3%200%202.5.3%203.5.9zm-11.2%2059.3c-1.8%203.2-3.9%206.4-6.1%209.6-3.7.3-7.4.4-11.2.4-3.9%200-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10%201.6-3.3%203.4-6.7%205.3-10%201.8-3.2%203.9-6.4%206.1-9.6%203.7-.3%207.4-.4%2011.2-.4%203.9%200%207.6.1%2011.2.4%202.2%203.2%204.2%206.4%206%209.6%201.9%203.3%203.7%206.7%205.3%2010-1.7%203.3-3.4%206.6-5.3%2010zm8.3-3.3c1.5%203.5%202.7%206.9%203.8%2010.3-3.4.8-7%201.4-10.8%201.9%201.2-1.9%202.5-3.9%203.6-6%201.2-2.1%202.3-4.2%203.4-6.2zm-25.6%2027.1c-2.4-2.6-4.7-5.4-6.9-8.3%202.3.1%204.6.2%206.9.2%202.3%200%204.6-.1%206.9-.2-2.2%202.9-4.5%205.7-6.9%208.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9%201.1-3.3%202.3-6.8%203.8-10.3%201.1%202%202.2%204.1%203.4%206.1%201.2%202.2%202.4%204.1%203.6%206.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3%203.4-.8%207-1.4%2010.8-1.9-1.2%201.9-2.5%203.9-3.6%206-1.2%202.1-2.3%204.2-3.4%206.2zm25.6-27.1c2.4%202.6%204.7%205.4%206.9%208.3-2.3-.1-4.6-.2-6.9-.2-2.3%200-4.6.1-6.9.2%202.2-2.9%204.5-5.7%206.9-8.3zm22.2%2021l-3.6-6c3.8.5%207.4%201.1%2010.8%201.9-1.1%203.3-2.3%206.8-3.8%2010.3-1.1-2.1-2.2-4.2-3.4-6.2zm-54.5-16.2c-1.7-10.5-.3-17.9%203.8-20.3%201-.6%202.2-.9%203.5-.9%206%200%2013.5%204.9%2021%2012.3-3.5%203.8-7%208.2-10.4%2013-5.8.5-11.3%201.4-16.5%202.5-.6-2.3-1-4.5-1.4-6.6zm-24.7%2029c0-4.7%205.7-9.7%2015.7-13.4%202-.8%204.2-1.5%206.4-2.1%201.6%205%203.6%2010.3%206%2015.6-2.4%205.3-4.5%2010.5-6%2015.5-13.8-4-22.1-10-22.1-15.6zm28.5%2049.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3%201.4-6.6%205.2%201.2%2010.7%202%2016.5%202.5%203.4%204.8%206.9%209.1%2010.4%2013-7.4%207.3-14.9%2012.3-21%2012.3-1.3%200-2.5-.3-3.5-.9zm60.8-20.3c1.7%2010.5.3%2017.9-3.8%2020.3-1%20.6-2.2.9-3.5.9-6%200-13.5-4.9-21-12.3%203.5-3.8%207-8.2%2010.4-13%205.8-.5%2011.3-1.4%2016.5-2.5.6%202.3%201%204.5%201.4%206.6zm9-15.6c-2%20.8-4.2%201.5-6.4%202.1-1.6-5-3.6-10.3-6-15.6%202.4-5.3%204.5-10.5%206-15.5%2013.8%204%2022.1%2010%2022.1%2015.6%200%204.7-5.8%209.7-15.7%2013.4z'/%3e%3c/g%3e%3c/svg%3e",G2="/portafolio/assets/desarrolloWeb-Brgl6fqc.svg",K2="data:image/svg+xml,%3csvg%20fill='none'%20height='512'%20viewBox='0%200%20512%20512'%20width='512'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20fill='%233178c6'%20height='512'%20rx='50'%20width='512'/%3e%3crect%20fill='%233178c6'%20height='512'%20rx='50'%20width='512'/%3e%3cpath%20clip-rule='evenodd'%20d='m316.939%20407.424v50.061c8.138%204.172%2017.763%207.3%2028.875%209.386s22.823%203.129%2035.135%203.129c11.999%200%2023.397-1.147%2034.196-3.442%2010.799-2.294%2020.268-6.075%2028.406-11.342%208.138-5.266%2014.581-12.15%2019.328-20.65s7.121-19.007%207.121-31.522c0-9.074-1.356-17.026-4.069-23.857s-6.625-12.906-11.738-18.225c-5.112-5.319-11.242-10.091-18.389-14.315s-15.207-8.213-24.18-11.967c-6.573-2.712-12.468-5.345-17.685-7.9-5.217-2.556-9.651-5.163-13.303-7.822-3.652-2.66-6.469-5.476-8.451-8.448-1.982-2.973-2.974-6.336-2.974-10.091%200-3.441.887-6.544%202.661-9.308s4.278-5.136%207.512-7.118c3.235-1.981%207.199-3.52%2011.894-4.615%204.696-1.095%209.912-1.642%2015.651-1.642%204.173%200%208.581.313%2013.224.938%204.643.626%209.312%201.591%2014.008%202.894%204.695%201.304%209.259%202.947%2013.694%204.928%204.434%201.982%208.529%204.276%2012.285%206.884v-46.776c-7.616-2.92-15.937-5.084-24.962-6.492s-19.381-2.112-31.066-2.112c-11.895%200-23.163%201.278-33.805%203.833s-20.006%206.544-28.093%2011.967c-8.086%205.424-14.476%2012.333-19.171%2020.729-4.695%208.395-7.043%2018.433-7.043%2030.114%200%2014.914%204.304%2027.638%2012.912%2038.172%208.607%2010.533%2021.675%2019.45%2039.204%2026.751%206.886%202.816%2013.303%205.579%2019.25%208.291s11.086%205.528%2015.415%208.448c4.33%202.92%207.747%206.101%2010.252%209.543%202.504%203.441%203.756%207.352%203.756%2011.733%200%203.233-.783%206.231-2.348%208.995s-3.939%205.162-7.121%207.196-7.147%203.624-11.894%204.771c-4.748%201.148-10.303%201.721-16.668%201.721-10.851%200-21.597-1.903-32.24-5.71-10.642-3.806-20.502-9.516-29.579-17.13zm-84.159-123.342h64.22v-41.082h-179v41.082h63.906v182.918h50.874z'%20fill='%23fff'%20fill-rule='evenodd'/%3e%3c/svg%3e",X2="/portafolio/assets/styled-components-DKzb2EQN.svg",Z2="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20fill='none'%20viewBox='0%200%2054%2033'%3e%3cg%20clip-path='url(%23prefix__clip0)'%3e%3cpath%20fill='%2338bdf8'%20fill-rule='evenodd'%20d='M27%200c-7.2%200-11.7%203.6-13.5%2010.8%202.7-3.6%205.85-4.95%209.45-4.05%202.054.513%203.522%202.004%205.147%203.653C30.744%2013.09%2033.808%2016.2%2040.5%2016.2c7.2%200%2011.7-3.6%2013.5-10.8-2.7%203.6-5.85%204.95-9.45%204.05-2.054-.513-3.522-2.004-5.147-3.653C36.756%203.11%2033.692%200%2027%200zM13.5%2016.2C6.3%2016.2%201.8%2019.8%200%2027c2.7-3.6%205.85-4.95%209.45-4.05%202.054.514%203.522%202.004%205.147%203.653C17.244%2029.29%2020.308%2032.4%2027%2032.4c7.2%200%2011.7-3.6%2013.5-10.8-2.7%203.6-5.85%204.95-9.45%204.05-2.054-.513-3.522-2.004-5.147-3.653C23.256%2019.31%2020.192%2016.2%2013.5%2016.2z'%20clip-rule='evenodd'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='prefix__clip0'%3e%3cpath%20fill='%23fff'%20d='M0%200h54v32.4H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",J2="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2032%2032'%3e%3ctitle%3efile_type_git%3c/title%3e%3cpath%20d='M29.472,14.753,17.247,2.528a1.8,1.8,0,0,0-2.55,0L12.158,5.067l3.22,3.22a2.141,2.141,0,0,1,2.712,2.73l3.1,3.1a2.143,2.143,0,1,1-1.285,1.21l-2.895-2.895v7.617a2.141,2.141,0,1,1-1.764-.062V12.3a2.146,2.146,0,0,1-1.165-2.814L10.911,6.314,2.528,14.7a1.8,1.8,0,0,0,0,2.551L14.753,29.472a1.8,1.8,0,0,0,2.55,0L29.472,17.3a1.8,1.8,0,0,0,0-2.551'%20style='fill:%23dd4c35'/%3e%3cpath%20d='M12.158,5.067l3.22,3.22a2.141,2.141,0,0,1,2.712,2.73l3.1,3.1a2.143,2.143,0,1,1-1.285,1.21l-2.895-2.895v7.617a2.141,2.141,0,1,1-1.764-.062V12.3a2.146,2.146,0,0,1-1.165-2.814L10.911,6.314'%20style='fill:%23fff'/%3e%3c/svg%3e",q2=[{name:"html",title:"Lenguaje de marcado que se utiliza para el desarrollo de páginas de Internet.",url:H2},{name:"css",title:"Hoja de estilo en cascada.",url:U2},{name:"sass",title:"Preprocesador CSS de código abierto que amplía las capacidades del CSS estándar.",url:W2},{name:"javascript",title:"Lenguaje de programación que se utiliza para hacer páginas web interactivas",url:Q2},{name:"react",title:"Es una libreria para crear interfaces de usuario móviles y web",url:Y2},{name:"desarrolloWeb",title:"Desarrollo Frontend",url:G2},{name:"typescript",title:"Lenguaje de programación de alto nivel que se basa en JavaScript, pero agrega características de tipado estático.",url:K2},{name:"styled-Components",title:"Biblioteca de CSS en línea para React que permite escribir estilos de componentes de manera más intuitiva y modular.",url:X2},{name:"tailwind",title:"Biblioteca de CSS que proporciona una amplia variedad de clases utilitarias predefinidas.",url:Z2},{name:"git",title:"Biblioteca de CSS que proporciona una amplia variedad de clases utilitarias predefinidas.",url:J2}],b2=({title:e,name:t,url:n})=>g.jsxs("figure",{title:e,children:[g.jsx("img",{src:n,alt:t,loading:"lazy"}),g.jsxs("figcaption",{children:[" ",t]})]}),em=()=>g.jsxs(B2,{id:"section-tools",children:[g.jsx("div",{className:"image-divider",id:"tools",children:g.jsx("svg",{preserveAspectRatio:"none",viewBox:"0 0 1200 120",xmlns:"http://www.w3.org/2000/svg",children:g.jsx("path",{d:"M1200 120L0 16.48V0h1200v120z"})})}),g.jsx("h2",{children:"Habilidades"}),g.jsx(F2,{children:q2.map(({title:e,name:t,url:n})=>g.jsx(b2,{title:e,name:t,url:n},t))})]}),{primary:ia,fourth:tm,white:zi}=Ft,nm=Te.section`
  width: 100%;
  height: auto;
  position: relative;

  .image-divider {
    padding: 5rem 0 1rem 0;

    svg {
      width: 100%;
      height: 1.875rem;
      fill: ${ia};

      @media (width >= 1024px) {
        height: 3.125rem;
      }
    }

    @media (width >= 1024px) {
      padding: 0;
    }
  }

  h2 {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    font-family: "Stardos Stencil", system-ui;
    font-size: 2.5em;
    color: ${zi};
    text-align: center;
    letter-spacing: 0.3rem;
    text-shadow: 5px 0px 20px rgba(255, 255, 255, 0.8),
      -5px 0px 20px rgba(255, 255, 255, 0.8);

    @media (width >= 1024px) {
      padding: 1rem;
    }
  }

  article {
    .cards__container {
      margin: 0 auto;
      display: grid;
      place-items: center;
      gap: 1rem;

      @media (width >= 768px) {
        width: 100%;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      }
    }
  }

  .activeR {
    animation: visible 1.5s ease-in-out;

    @keyframes visible {
      0% {
        opacity: 0;
      }
      85% {
        opacity: 1;
      }
    }
  }

  .activeT {
    animation: visiblet 1.5s ease-in;

    @keyframes visiblet {
      0% {
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
    }
  }
`,rm=Te.div`
  margin: 0 auto;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (width >= 1024px) {
    width: 95%;
    justify-content: center;
    gap: 0 15rem;
  }

  button {
    width: 7.5rem;
    height: 2.1875rem;
    outline-style: none;
    border-radius: 0.5rem;
    background-color: ${ia};
    box-shadow: 1px 1px 5px 2px ${zi};
    color: ${zi};
    transition: transform 3s ease;

    &:active {
      box-shadow: none;
      transform: scale(0.9);
    }
  }

  .active-button {
    background-color: ${tm};
    box-shadow: 1px 1px 5px 5px ${zi};
    color: ${ia};
  }
`,im="/portafolio/assets/store-C6P2lKCE.jpg",om="/portafolio/assets/storemovil-Dw7Urapr.jpg",lm="/portafolio/assets/meal-CHzYB14F.jpg",am="/portafolio/assets/mealmovil-CzxQY0bA.jpg",sm="/portafolio/assets/pokemon-B3Vl19zZ.jpg",um="/portafolio/assets/pokemonmovil-B4i9ztG2.jpg",cm="/portafolio/assets/password-DqY1IL5y.jpg",dm="/portafolio/assets/passwordmovil-kn_Zc0jl.jpg",fm="/portafolio/assets/quiz-CnpuZn2f.jpg",pm="/portafolio/assets/quizmovil-CATlTBds.jpg",mm="/portafolio/assets/taskify-BS5D4OjG.jpg",hm="/portafolio/assets/taskifymovil-DMR0NPNr.jpg",gm="/portafolio/assets/cv-DHDn6JeQ.jpg",vm={react:[{idProject:1,name:"Fake-Store",info:"Esta página fue diseñada en Mobile First, simulando una tienda online con categorías de productos y un carrito de compras. Permite filtrar productos por categorías y agregar los favoritos al carrito. En una ventana modal, se muestra una lista de productos donde es posible ajustar las cantidades de compra.",api:"Los datos se consumen desde https://fakestoreapi.com",tech:"Desarrollada utilizando fetch async await, useReducer, custom hooks y Tailwind CSS.",imageMovil:om,image:im,url:"https://alexnavdev.github.io/react-fake-store/",developed:"react"},{idProject:2,name:"Meals-Recipes",info:"Esta página fue diseñada en Mobile First, se puede buscar recetas de cocina ya sea por nombre, ingrediente o por un filtro de categorías, las recetas preferidas se pueden agregar a favoritos que a su vez se almacena en localStorage.",api:"Los datos se consumen desde la página web en su versión gratuita. https://themealdb.com",tech:"Desarrollada con fetch async await, styled-components y custom hooks.",imageMovil:am,image:lm,url:"https://alexnavdev.github.io/react-meal-recipes/",developed:"react"},{idProject:3,name:"Poke-Api",info:"Esta página fu e diseñada en Mobile First, se puede realizar una búsqueda por nombre o id del pokemon, se puede realizar un filtro por el tipo de pokemon y su poder. Los pokemones deseados se pueden agregar a la sección favoritos que a su vez se almacena en localStorage.",api:"Los datos se consumen desde https://pokeapi.com",tech:"Desarrollada con fetch async await, styled-components, custom hooks y context.",imageMovil:um,image:sm,url:"https://alexnavdev.github.io/react-poke-api/",developed:"react"},{idProject:4,name:"Pass-Generator",info:"Esta página fue diseñada en Mobile First, se trata de generar un password con las opciones letras minúsculas, mayúsculas, numeros o simbolos, tambien cuenta con la opción que el password empieze con la primera letra en mayúscula.",imageMovil:dm,image:cm,api:"",tech:"Desarrollada con styled-components, custom hooks.",url:"https://alexnavdev.github.io/react-password-generator/",developed:"react"},{idProject:5,name:"Quiz",info:"Esta página fue diseñada en Mobile First, en este juego se tienen cuatro categorías a eligir o se puede elegir una categoria random, el juego finaliza al terminar las cuatro categorías consecutivamente y al final se almacena el nombre o alias del jugador en localStorage.",api:"",tech:"Desarrollada con styled-components, custom hooks y context.",imageMovil:pm,image:fm,url:"https://alexnavdev.github.io/react-quiz/",developed:"react"}],typescript:[{idProject:1,name:"Tastify-App",info:"Esta página fue diseñada en Mobile First,esta aplicación ayuda a gestionar las tareas diarias evitando caracteres especiales y limitando cada tarea a cincuenta caracteres, ademas alerta sobre tareas repetidas, permite editar, eliminar y filtrar tareas por prioridad, las tareas guardan persistencia en localStorage.",api:"",tech:"Desarrollada con Tailwind CSS y custom hooks.",imageMovil:hm,image:mm,url:"https://alexnavdev.github.io/typescript-app-taskify/",developed:"typescript"},{idProject:2,name:"CV-Application",info:"Esta página está diseñada exclusivamente para la vista de escritorio. Te brinda la oportunidad de completar un Curriculum Vitae con un diseño previamente creado, permitiéndote ingresar tus datos de manera sencilla. Además, tienes la opción de personalizar el color de tu CV de acuerdo a tus preferencias. Si lo deseas, también puedes imprimir o guardar el archivo resultante como un PDF.",api:"",tech:"Desarrollada con Tailwind CSS y custom hooks.",imageMovil:"",image:gm,url:"https://alexnavdev.github.io/typescript-cv-maker/",developed:"typescript"}]},{primary:ym,secondary:wm,white:tr}=Ft,xm=Te.div`
  width: 20rem;
  height: 33.125rem;
  perspective: 2000px;
  will-change: transform;
  view-timeline-name: --revealing-image;
  view-timeline-axis: block;
  animation: linear reveal both;
  animation-timeline: --revealing-image;
  animation-range: entry 25% cover 30%;

  @keyframes reveal {
    0% {
      opacity: 0;
      clip-path: inset(45% 20% 45% 20%);
    }

    100% {
      opacity: 1;
      clip-path: inset(0% 0% 0% 0%);
    }
  }

  @media (width >= 768px) {
    width: 21.875rem;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 26.875rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.9);
    transition: all 550ms cubic-bezier(0.1, 0.22, 0.8, 1.13);
    transform-style: preserve-3d;

    .flip-card-front,
    .flip-card-back {
      position: absolute;
      width: 100%;
      height: 100%;
    }

    .flip-card-front {
      background-color: rgba(0, 0, 0, 0.7);
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;

        @media (width >= 1024px) {
          object-fit: cover;
        }
      }
    }

    .flip-card-back {
      transform: rotateY(180deg);
      backface-visibility: hidden;

      &:before {
        content: "";
        position: absolute;
        top: -0.125rem;
        left: -0.125rem;
        right: -0.125rem;
        bottom: -0.125rem;
        transform: skew(3deg, 3deg);
        background: linear-gradient(315deg, #1f2b3e, #374357);
        z-index: -1;
      }

      &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 50%;
        height: 100%;
        background: rgb(255, 255, 255, 0.05);
        pointer-events: none;
      }

      .flip-card-back-content {
        height: 100%;
        background-color: ${ym};
        font-size: 1.25rem;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;

        h3 {
          font-family: "Stardos Stencil", system-ui;
          color: ${tr};
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 1.3em;
          text-shadow: 5px 0px 20px rgba(255, 255, 255, 0.8),
            -5px 0px 20px rgba(255, 255, 255, 0.8);
        }

        p {
          width: 100%;
          padding: 0.3rem;
          font-size: 0.85em;
          word-spacing: 0.3rem;
          font-weight: 400;
          color: ${tr};
          text-shadow: 1px 1px 20px #5583e0;
        }

        p:nth-child(3) {
          text-align: center;
          color: ${tr};
          background-color: transparent;
        }
        p:nth-child(4) {
          text-align: center;
          color: ${tr};
          background-color: transparent;
        }
      }
    }
  }

  .active {
    transform: rotateX(180deg) rotateY(360deg) rotateZ(180deg);

    .flip-card-front {
      transform-style: preserve-3d;
      backface-visibility: hidden;
    }
  }

  .flip-card-footer {
    height: 4rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);

    button,
    a {
      width: 7.5rem;
      height: 2.1875rem;
      font-size: 0.9em;
      letter-spacing: 1px;
      border-radius: 0.5rem;
      background-color: ${wm};
      color: ${tr};

      @media (width >= 1024px) {
        width: 8.75rem;
        height: 2.5rem;
      }
    }

    button {
      border: none;
    }

    a {
      display: grid;
      place-items: center;
    }
  }
`,Sm=e=>{const{index:t,idProject:n,name:r,info:i,api:o,tech:l,imageMovil:a,image:s,url:c}=e,[h,m]=oe.useState(!1),p=y=>{t+1==y&&m(!h)};return g.jsx(g.Fragment,{children:g.jsxs(xm,{children:[g.jsxs("div",{className:`flip-card-inner ${h?"active":""}`,children:[g.jsx("div",{className:"flip-card-front",children:g.jsxs("picture",{children:[g.jsx("source",{media:"(min-width:1024px)",srcSet:s,sizes:""}),g.jsx("img",{src:a||s,loading:"lazy",alt:"imagen de proyecto"})]})}),g.jsx("div",{className:"flip-card-back ",children:g.jsxs("div",{className:"flip-card-back-content",children:[g.jsx("h3",{children:r}),g.jsx("p",{children:i}),g.jsx("p",{children:g.jsx("em",{children:l})}),o&&g.jsx("p",{children:o})]})})]}),g.jsxs("div",{className:"flip-card-footer",children:[g.jsx("button",{onClick:()=>p(n),children:"Descripción"}),g.jsx("a",{href:c,target:"_blank",children:"Ver página"})]})]})})},km=()=>{const[e,t]=oe.useState("react");return g.jsxs(nm,{id:"section-projects",children:[g.jsx("div",{className:"image-divider",id:"projects",children:g.jsx("svg",{preserveAspectRatio:"none",viewBox:"0 0 1200 120",xmlns:"http://www.w3.org/2000/svg",children:g.jsx("path",{d:"M1200 120L0 16.48V0h1200v120z"})})}),g.jsx("h2",{children:"Proyectos"}),g.jsxs(rm,{children:[g.jsx("button",{className:`${e==="react"?"active-button":""}`,onClick:()=>t("react"),children:g.jsx("span",{children:"React"})}),g.jsx("button",{className:`${e==="typescript"?"active-button":""}`,onClick:()=>t("typescript"),children:g.jsx("span",{children:"Typescript"})})]}),g.jsx("article",{children:g.jsx("div",{className:`cards__container ${e==="react"?"activeR":"activeT"}`,children:vm[e].map((n,r)=>g.jsx(Sm,{...n,index:r},n.idProject))})})]})},Em=Te.main`
  @media (width >= 1024px) {
    width: 80%;
    margin-left: 20%;
  }

  @media (width >= 1800px) {
    width: calc(1800px - 20%);
  }
`,Cm=()=>g.jsxs(Em,{children:[g.jsx(I2,{}),g.jsx(w2,{}),g.jsx(em,{}),g.jsx(km,{})]}),_m="/portafolio/assets/background-Cy6qhD4d.jpg",zm=Te.div`
  width: 100%;
  max-width: 1800px;
  margin: auto;
  background: rgba(0, 0, 0, 0.9);

  @media (width >= 1024px) {
    display: flex;
  }

  &::before {
    content: "";
    position: fixed;
    max-width: 1800px;
    margin: auto;
    inset: 0;
    background-image: url(${_m});
    background-position: center;
    background-size: cover;
    opacity: 0.5;
  }
`;function jm(){return g.jsxs(zm,{children:[g.jsx(h2,{}),g.jsx(Cm,{})]})}il.createRoot(document.getElementById("root")).render(g.jsx(je.StrictMode,{children:g.jsx(jm,{})}));
