(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Q1(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var zx={exports:{}},gd={},Bx={exports:{}},lt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yu=Symbol.for("react.element"),J1=Symbol.for("react.portal"),eE=Symbol.for("react.fragment"),tE=Symbol.for("react.strict_mode"),nE=Symbol.for("react.profiler"),iE=Symbol.for("react.provider"),rE=Symbol.for("react.context"),sE=Symbol.for("react.forward_ref"),oE=Symbol.for("react.suspense"),aE=Symbol.for("react.memo"),lE=Symbol.for("react.lazy"),Q_=Symbol.iterator;function uE(n){return n===null||typeof n!="object"?null:(n=Q_&&n[Q_]||n["@@iterator"],typeof n=="function"?n:null)}var Hx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Vx=Object.assign,Gx={};function cl(n,e,t){this.props=n,this.context=e,this.refs=Gx,this.updater=t||Hx}cl.prototype.isReactComponent={};cl.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};cl.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Wx(){}Wx.prototype=cl.prototype;function vg(n,e,t){this.props=n,this.context=e,this.refs=Gx,this.updater=t||Hx}var xg=vg.prototype=new Wx;xg.constructor=vg;Vx(xg,cl.prototype);xg.isPureReactComponent=!0;var J_=Array.isArray,Xx=Object.prototype.hasOwnProperty,yg={current:null},Yx={key:!0,ref:!0,__self:!0,__source:!0};function jx(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Xx.call(e,i)&&!Yx.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Yu,type:n,key:s,ref:o,props:r,_owner:yg.current}}function cE(n,e){return{$$typeof:Yu,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Sg(n){return typeof n=="object"&&n!==null&&n.$$typeof===Yu}function fE(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var e0=/\/+/g;function Gd(n,e){return typeof n=="object"&&n!==null&&n.key!=null?fE(""+n.key):e.toString(36)}function tf(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Yu:case J1:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Gd(o,0):i,J_(r)?(t="",n!=null&&(t=n.replace(e0,"$&/")+"/"),tf(r,e,t,"",function(u){return u})):r!=null&&(Sg(r)&&(r=cE(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(e0,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",J_(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Gd(s,a);o+=tf(s,e,t,l,r)}else if(l=uE(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Gd(s,a++),o+=tf(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ic(n,e,t){if(n==null)return n;var i=[],r=0;return tf(n,i,"","",function(s){return e.call(t,s,r++)}),i}function dE(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Yn={current:null},nf={transition:null},hE={ReactCurrentDispatcher:Yn,ReactCurrentBatchConfig:nf,ReactCurrentOwner:yg};function $x(){throw Error("act(...) is not supported in production builds of React.")}lt.Children={map:ic,forEach:function(n,e,t){ic(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return ic(n,function(){e++}),e},toArray:function(n){return ic(n,function(e){return e})||[]},only:function(n){if(!Sg(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};lt.Component=cl;lt.Fragment=eE;lt.Profiler=nE;lt.PureComponent=vg;lt.StrictMode=tE;lt.Suspense=oE;lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hE;lt.act=$x;lt.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=Vx({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=yg.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)Xx.call(e,l)&&!Yx.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Yu,type:n.type,key:r,ref:s,props:i,_owner:o}};lt.createContext=function(n){return n={$$typeof:rE,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:iE,_context:n},n.Consumer=n};lt.createElement=jx;lt.createFactory=function(n){var e=jx.bind(null,n);return e.type=n,e};lt.createRef=function(){return{current:null}};lt.forwardRef=function(n){return{$$typeof:sE,render:n}};lt.isValidElement=Sg;lt.lazy=function(n){return{$$typeof:lE,_payload:{_status:-1,_result:n},_init:dE}};lt.memo=function(n,e){return{$$typeof:aE,type:n,compare:e===void 0?null:e}};lt.startTransition=function(n){var e=nf.transition;nf.transition={};try{n()}finally{nf.transition=e}};lt.unstable_act=$x;lt.useCallback=function(n,e){return Yn.current.useCallback(n,e)};lt.useContext=function(n){return Yn.current.useContext(n)};lt.useDebugValue=function(){};lt.useDeferredValue=function(n){return Yn.current.useDeferredValue(n)};lt.useEffect=function(n,e){return Yn.current.useEffect(n,e)};lt.useId=function(){return Yn.current.useId()};lt.useImperativeHandle=function(n,e,t){return Yn.current.useImperativeHandle(n,e,t)};lt.useInsertionEffect=function(n,e){return Yn.current.useInsertionEffect(n,e)};lt.useLayoutEffect=function(n,e){return Yn.current.useLayoutEffect(n,e)};lt.useMemo=function(n,e){return Yn.current.useMemo(n,e)};lt.useReducer=function(n,e,t){return Yn.current.useReducer(n,e,t)};lt.useRef=function(n){return Yn.current.useRef(n)};lt.useState=function(n){return Yn.current.useState(n)};lt.useSyncExternalStore=function(n,e,t){return Yn.current.useSyncExternalStore(n,e,t)};lt.useTransition=function(){return Yn.current.useTransition()};lt.version="18.3.1";Bx.exports=lt;var Mt=Bx.exports;const pE=Q1(Mt);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mE=Mt,gE=Symbol.for("react.element"),_E=Symbol.for("react.fragment"),vE=Object.prototype.hasOwnProperty,xE=mE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,yE={key:!0,ref:!0,__self:!0,__source:!0};function qx(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)vE.call(e,i)&&!yE.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:gE,type:n,key:s,ref:o,props:r,_owner:xE.current}}gd.Fragment=_E;gd.jsx=qx;gd.jsxs=qx;zx.exports=gd;var K=zx.exports,hp={},Kx={exports:{}},Li={},Zx={exports:{}},Qx={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(D,$){var b=D.length;D.push($);e:for(;0<b;){var ie=b-1>>>1,Te=D[ie];if(0<r(Te,$))D[ie]=$,D[b]=Te,b=ie;else break e}}function t(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var $=D[0],b=D.pop();if(b!==$){D[0]=b;e:for(var ie=0,Te=D.length,Ie=Te>>>1;ie<Ie;){var j=2*(ie+1)-1,ne=D[j],de=j+1,le=D[de];if(0>r(ne,b))de<Te&&0>r(le,ne)?(D[ie]=le,D[de]=b,ie=de):(D[ie]=ne,D[j]=b,ie=j);else if(de<Te&&0>r(le,b))D[ie]=le,D[de]=b,ie=de;else break e}}return $}function r(D,$){var b=D.sortIndex-$.sortIndex;return b!==0?b:D.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,d=3,h=!1,g=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(D){for(var $=t(u);$!==null;){if($.callback===null)i(u);else if($.startTime<=D)i(u),$.sortIndex=$.expirationTime,e(l,$);else break;$=t(u)}}function S(D){if(_=!1,x(D),!g)if(t(l)!==null)g=!0,H(C);else{var $=t(u);$!==null&&Y(S,$.startTime-D)}}function C(D,$){g=!1,_&&(_=!1,p(R),R=-1),h=!0;var b=d;try{for(x($),f=t(l);f!==null&&(!(f.expirationTime>$)||D&&!T());){var ie=f.callback;if(typeof ie=="function"){f.callback=null,d=f.priorityLevel;var Te=ie(f.expirationTime<=$);$=n.unstable_now(),typeof Te=="function"?f.callback=Te:f===t(l)&&i(l),x($)}else i(l);f=t(l)}if(f!==null)var Ie=!0;else{var j=t(u);j!==null&&Y(S,j.startTime-$),Ie=!1}return Ie}finally{f=null,d=b,h=!1}}var w=!1,M=null,R=-1,N=5,y=-1;function T(){return!(n.unstable_now()-y<N)}function I(){if(M!==null){var D=n.unstable_now();y=D;var $=!0;try{$=M(!0,D)}finally{$?B():(w=!1,M=null)}}else w=!1}var B;if(typeof v=="function")B=function(){v(I)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,Z=X.port2;X.port1.onmessage=I,B=function(){Z.postMessage(null)}}else B=function(){m(I,0)};function H(D){M=D,w||(w=!0,B())}function Y(D,$){R=m(function(){D(n.unstable_now())},$)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(D){D.callback=null},n.unstable_continueExecution=function(){g||h||(g=!0,H(C))},n.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<D?Math.floor(1e3/D):5},n.unstable_getCurrentPriorityLevel=function(){return d},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(D){switch(d){case 1:case 2:case 3:var $=3;break;default:$=d}var b=d;d=$;try{return D()}finally{d=b}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(D,$){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var b=d;d=D;try{return $()}finally{d=b}},n.unstable_scheduleCallback=function(D,$,b){var ie=n.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?ie+b:ie):b=ie,D){case 1:var Te=-1;break;case 2:Te=250;break;case 5:Te=1073741823;break;case 4:Te=1e4;break;default:Te=5e3}return Te=b+Te,D={id:c++,callback:$,priorityLevel:D,startTime:b,expirationTime:Te,sortIndex:-1},b>ie?(D.sortIndex=b,e(u,D),t(l)===null&&D===t(u)&&(_?(p(R),R=-1):_=!0,Y(S,b-ie))):(D.sortIndex=Te,e(l,D),g||h||(g=!0,H(C))),D},n.unstable_shouldYield=T,n.unstable_wrapCallback=function(D){var $=d;return function(){var b=d;d=$;try{return D.apply(this,arguments)}finally{d=b}}}})(Qx);Zx.exports=Qx;var SE=Zx.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ME=Mt,Ri=SE;function ue(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Jx=new Set,_u={};function Ho(n,e){Wa(n,e),Wa(n+"Capture",e)}function Wa(n,e){for(_u[n]=e,n=0;n<e.length;n++)Jx.add(e[n])}var $r=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pp=Object.prototype.hasOwnProperty,EE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,t0={},n0={};function TE(n){return pp.call(n0,n)?!0:pp.call(t0,n)?!1:EE.test(n)?n0[n]=!0:(t0[n]=!0,!1)}function wE(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function AE(n,e,t,i){if(e===null||typeof e>"u"||wE(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function jn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var En={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){En[n]=new jn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];En[e]=new jn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){En[n]=new jn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){En[n]=new jn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){En[n]=new jn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){En[n]=new jn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){En[n]=new jn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){En[n]=new jn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){En[n]=new jn(n,5,!1,n.toLowerCase(),null,!1,!1)});var Mg=/[\-:]([a-z])/g;function Eg(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Mg,Eg);En[e]=new jn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Mg,Eg);En[e]=new jn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Mg,Eg);En[e]=new jn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){En[n]=new jn(n,1,!1,n.toLowerCase(),null,!1,!1)});En.xlinkHref=new jn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){En[n]=new jn(n,1,!1,n.toLowerCase(),null,!0,!0)});function Tg(n,e,t,i){var r=En.hasOwnProperty(e)?En[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(AE(e,t,r,i)&&(t=null),i||r===null?TE(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var ts=ME.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,rc=Symbol.for("react.element"),da=Symbol.for("react.portal"),ha=Symbol.for("react.fragment"),wg=Symbol.for("react.strict_mode"),mp=Symbol.for("react.profiler"),ey=Symbol.for("react.provider"),ty=Symbol.for("react.context"),Ag=Symbol.for("react.forward_ref"),gp=Symbol.for("react.suspense"),_p=Symbol.for("react.suspense_list"),Cg=Symbol.for("react.memo"),ds=Symbol.for("react.lazy"),ny=Symbol.for("react.offscreen"),i0=Symbol.iterator;function gl(n){return n===null||typeof n!="object"?null:(n=i0&&n[i0]||n["@@iterator"],typeof n=="function"?n:null)}var Vt=Object.assign,Wd;function Nl(n){if(Wd===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Wd=e&&e[1]||""}return`
`+Wd+n}var Xd=!1;function Yd(n,e){if(!n||Xd)return"";Xd=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Xd=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Nl(n):""}function CE(n){switch(n.tag){case 5:return Nl(n.type);case 16:return Nl("Lazy");case 13:return Nl("Suspense");case 19:return Nl("SuspenseList");case 0:case 2:case 15:return n=Yd(n.type,!1),n;case 11:return n=Yd(n.type.render,!1),n;case 1:return n=Yd(n.type,!0),n;default:return""}}function vp(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case ha:return"Fragment";case da:return"Portal";case mp:return"Profiler";case wg:return"StrictMode";case gp:return"Suspense";case _p:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case ty:return(n.displayName||"Context")+".Consumer";case ey:return(n._context.displayName||"Context")+".Provider";case Ag:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Cg:return e=n.displayName||null,e!==null?e:vp(n.type)||"Memo";case ds:e=n._payload,n=n._init;try{return vp(n(e))}catch{}}return null}function RE(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return vp(e);case 8:return e===wg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Os(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function iy(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function bE(n){var e=iy(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function sc(n){n._valueTracker||(n._valueTracker=bE(n))}function ry(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=iy(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Lf(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function xp(n,e){var t=e.checked;return Vt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function r0(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Os(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function sy(n,e){e=e.checked,e!=null&&Tg(n,"checked",e,!1)}function yp(n,e){sy(n,e);var t=Os(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Sp(n,e.type,t):e.hasOwnProperty("defaultValue")&&Sp(n,e.type,Os(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function s0(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Sp(n,e,t){(e!=="number"||Lf(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Il=Array.isArray;function Ra(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Os(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Mp(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ue(91));return Vt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function o0(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(ue(92));if(Il(t)){if(1<t.length)throw Error(ue(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Os(t)}}function oy(n,e){var t=Os(e.value),i=Os(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function a0(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function ay(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ep(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?ay(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var oc,ly=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(oc=oc||document.createElement("div"),oc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=oc.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function vu(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Yl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},PE=["Webkit","ms","Moz","O"];Object.keys(Yl).forEach(function(n){PE.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Yl[e]=Yl[n]})});function uy(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Yl.hasOwnProperty(n)&&Yl[n]?(""+e).trim():e+"px"}function cy(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=uy(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var LE=Vt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Tp(n,e){if(e){if(LE[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ue(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ue(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ue(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ue(62))}}function wp(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ap=null;function Rg(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Cp=null,ba=null,Pa=null;function l0(n){if(n=qu(n)){if(typeof Cp!="function")throw Error(ue(280));var e=n.stateNode;e&&(e=Sd(e),Cp(n.stateNode,n.type,e))}}function fy(n){ba?Pa?Pa.push(n):Pa=[n]:ba=n}function dy(){if(ba){var n=ba,e=Pa;if(Pa=ba=null,l0(n),e)for(n=0;n<e.length;n++)l0(e[n])}}function hy(n,e){return n(e)}function py(){}var jd=!1;function my(n,e,t){if(jd)return n(e,t);jd=!0;try{return hy(n,e,t)}finally{jd=!1,(ba!==null||Pa!==null)&&(py(),dy())}}function xu(n,e){var t=n.stateNode;if(t===null)return null;var i=Sd(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(ue(231,e,typeof t));return t}var Rp=!1;if($r)try{var _l={};Object.defineProperty(_l,"passive",{get:function(){Rp=!0}}),window.addEventListener("test",_l,_l),window.removeEventListener("test",_l,_l)}catch{Rp=!1}function DE(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var jl=!1,Df=null,Nf=!1,bp=null,NE={onError:function(n){jl=!0,Df=n}};function IE(n,e,t,i,r,s,o,a,l){jl=!1,Df=null,DE.apply(NE,arguments)}function UE(n,e,t,i,r,s,o,a,l){if(IE.apply(this,arguments),jl){if(jl){var u=Df;jl=!1,Df=null}else throw Error(ue(198));Nf||(Nf=!0,bp=u)}}function Vo(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function gy(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function u0(n){if(Vo(n)!==n)throw Error(ue(188))}function FE(n){var e=n.alternate;if(!e){if(e=Vo(n),e===null)throw Error(ue(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return u0(r),n;if(s===i)return u0(r),e;s=s.sibling}throw Error(ue(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(ue(189))}}if(t.alternate!==i)throw Error(ue(190))}if(t.tag!==3)throw Error(ue(188));return t.stateNode.current===t?n:e}function _y(n){return n=FE(n),n!==null?vy(n):null}function vy(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=vy(n);if(e!==null)return e;n=n.sibling}return null}var xy=Ri.unstable_scheduleCallback,c0=Ri.unstable_cancelCallback,OE=Ri.unstable_shouldYield,kE=Ri.unstable_requestPaint,Kt=Ri.unstable_now,zE=Ri.unstable_getCurrentPriorityLevel,bg=Ri.unstable_ImmediatePriority,yy=Ri.unstable_UserBlockingPriority,If=Ri.unstable_NormalPriority,BE=Ri.unstable_LowPriority,Sy=Ri.unstable_IdlePriority,_d=null,Tr=null;function HE(n){if(Tr&&typeof Tr.onCommitFiberRoot=="function")try{Tr.onCommitFiberRoot(_d,n,void 0,(n.current.flags&128)===128)}catch{}}var fr=Math.clz32?Math.clz32:WE,VE=Math.log,GE=Math.LN2;function WE(n){return n>>>=0,n===0?32:31-(VE(n)/GE|0)|0}var ac=64,lc=4194304;function Ul(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Uf(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Ul(a):(s&=o,s!==0&&(i=Ul(s)))}else o=t&~r,o!==0?i=Ul(o):s!==0&&(i=Ul(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-fr(e),r=1<<t,i|=n[t],e&=~r;return i}function XE(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function YE(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-fr(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=XE(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function Pp(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function My(){var n=ac;return ac<<=1,!(ac&4194240)&&(ac=64),n}function $d(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function ju(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-fr(e),n[e]=t}function jE(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-fr(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Pg(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-fr(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var yt=0;function Ey(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Ty,Lg,wy,Ay,Cy,Lp=!1,uc=[],Ts=null,ws=null,As=null,yu=new Map,Su=new Map,ps=[],$E="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function f0(n,e){switch(n){case"focusin":case"focusout":Ts=null;break;case"dragenter":case"dragleave":ws=null;break;case"mouseover":case"mouseout":As=null;break;case"pointerover":case"pointerout":yu.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Su.delete(e.pointerId)}}function vl(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=qu(e),e!==null&&Lg(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function qE(n,e,t,i,r){switch(e){case"focusin":return Ts=vl(Ts,n,e,t,i,r),!0;case"dragenter":return ws=vl(ws,n,e,t,i,r),!0;case"mouseover":return As=vl(As,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return yu.set(s,vl(yu.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Su.set(s,vl(Su.get(s)||null,n,e,t,i,r)),!0}return!1}function Ry(n){var e=mo(n.target);if(e!==null){var t=Vo(e);if(t!==null){if(e=t.tag,e===13){if(e=gy(t),e!==null){n.blockedOn=e,Cy(n.priority,function(){wy(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function rf(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Dp(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Ap=i,t.target.dispatchEvent(i),Ap=null}else return e=qu(t),e!==null&&Lg(e),n.blockedOn=t,!1;e.shift()}return!0}function d0(n,e,t){rf(n)&&t.delete(e)}function KE(){Lp=!1,Ts!==null&&rf(Ts)&&(Ts=null),ws!==null&&rf(ws)&&(ws=null),As!==null&&rf(As)&&(As=null),yu.forEach(d0),Su.forEach(d0)}function xl(n,e){n.blockedOn===e&&(n.blockedOn=null,Lp||(Lp=!0,Ri.unstable_scheduleCallback(Ri.unstable_NormalPriority,KE)))}function Mu(n){function e(r){return xl(r,n)}if(0<uc.length){xl(uc[0],n);for(var t=1;t<uc.length;t++){var i=uc[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Ts!==null&&xl(Ts,n),ws!==null&&xl(ws,n),As!==null&&xl(As,n),yu.forEach(e),Su.forEach(e),t=0;t<ps.length;t++)i=ps[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<ps.length&&(t=ps[0],t.blockedOn===null);)Ry(t),t.blockedOn===null&&ps.shift()}var La=ts.ReactCurrentBatchConfig,Ff=!0;function ZE(n,e,t,i){var r=yt,s=La.transition;La.transition=null;try{yt=1,Dg(n,e,t,i)}finally{yt=r,La.transition=s}}function QE(n,e,t,i){var r=yt,s=La.transition;La.transition=null;try{yt=4,Dg(n,e,t,i)}finally{yt=r,La.transition=s}}function Dg(n,e,t,i){if(Ff){var r=Dp(n,e,t,i);if(r===null)rh(n,e,i,Of,t),f0(n,i);else if(qE(r,n,e,t,i))i.stopPropagation();else if(f0(n,i),e&4&&-1<$E.indexOf(n)){for(;r!==null;){var s=qu(r);if(s!==null&&Ty(s),s=Dp(n,e,t,i),s===null&&rh(n,e,i,Of,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else rh(n,e,i,null,t)}}var Of=null;function Dp(n,e,t,i){if(Of=null,n=Rg(i),n=mo(n),n!==null)if(e=Vo(n),e===null)n=null;else if(t=e.tag,t===13){if(n=gy(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Of=n,null}function by(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(zE()){case bg:return 1;case yy:return 4;case If:case BE:return 16;case Sy:return 536870912;default:return 16}default:return 16}}var _s=null,Ng=null,sf=null;function Py(){if(sf)return sf;var n,e=Ng,t=e.length,i,r="value"in _s?_s.value:_s.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return sf=r.slice(n,1<i?1-i:void 0)}function of(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function cc(){return!0}function h0(){return!1}function Di(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?cc:h0,this.isPropagationStopped=h0,this}return Vt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=cc)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=cc)},persist:function(){},isPersistent:cc}),e}var fl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ig=Di(fl),$u=Vt({},fl,{view:0,detail:0}),JE=Di($u),qd,Kd,yl,vd=Vt({},$u,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ug,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==yl&&(yl&&n.type==="mousemove"?(qd=n.screenX-yl.screenX,Kd=n.screenY-yl.screenY):Kd=qd=0,yl=n),qd)},movementY:function(n){return"movementY"in n?n.movementY:Kd}}),p0=Di(vd),eT=Vt({},vd,{dataTransfer:0}),tT=Di(eT),nT=Vt({},$u,{relatedTarget:0}),Zd=Di(nT),iT=Vt({},fl,{animationName:0,elapsedTime:0,pseudoElement:0}),rT=Di(iT),sT=Vt({},fl,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),oT=Di(sT),aT=Vt({},fl,{data:0}),m0=Di(aT),lT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fT(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=cT[n])?!!e[n]:!1}function Ug(){return fT}var dT=Vt({},$u,{key:function(n){if(n.key){var e=lT[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=of(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?uT[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ug,charCode:function(n){return n.type==="keypress"?of(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?of(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),hT=Di(dT),pT=Vt({},vd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),g0=Di(pT),mT=Vt({},$u,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ug}),gT=Di(mT),_T=Vt({},fl,{propertyName:0,elapsedTime:0,pseudoElement:0}),vT=Di(_T),xT=Vt({},vd,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),yT=Di(xT),ST=[9,13,27,32],Fg=$r&&"CompositionEvent"in window,$l=null;$r&&"documentMode"in document&&($l=document.documentMode);var MT=$r&&"TextEvent"in window&&!$l,Ly=$r&&(!Fg||$l&&8<$l&&11>=$l),_0=" ",v0=!1;function Dy(n,e){switch(n){case"keyup":return ST.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ny(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var pa=!1;function ET(n,e){switch(n){case"compositionend":return Ny(e);case"keypress":return e.which!==32?null:(v0=!0,_0);case"textInput":return n=e.data,n===_0&&v0?null:n;default:return null}}function TT(n,e){if(pa)return n==="compositionend"||!Fg&&Dy(n,e)?(n=Py(),sf=Ng=_s=null,pa=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ly&&e.locale!=="ko"?null:e.data;default:return null}}var wT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function x0(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!wT[n.type]:e==="textarea"}function Iy(n,e,t,i){fy(i),e=kf(e,"onChange"),0<e.length&&(t=new Ig("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var ql=null,Eu=null;function AT(n){Xy(n,0)}function xd(n){var e=_a(n);if(ry(e))return n}function CT(n,e){if(n==="change")return e}var Uy=!1;if($r){var Qd;if($r){var Jd="oninput"in document;if(!Jd){var y0=document.createElement("div");y0.setAttribute("oninput","return;"),Jd=typeof y0.oninput=="function"}Qd=Jd}else Qd=!1;Uy=Qd&&(!document.documentMode||9<document.documentMode)}function S0(){ql&&(ql.detachEvent("onpropertychange",Fy),Eu=ql=null)}function Fy(n){if(n.propertyName==="value"&&xd(Eu)){var e=[];Iy(e,Eu,n,Rg(n)),my(AT,e)}}function RT(n,e,t){n==="focusin"?(S0(),ql=e,Eu=t,ql.attachEvent("onpropertychange",Fy)):n==="focusout"&&S0()}function bT(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return xd(Eu)}function PT(n,e){if(n==="click")return xd(e)}function LT(n,e){if(n==="input"||n==="change")return xd(e)}function DT(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var hr=typeof Object.is=="function"?Object.is:DT;function Tu(n,e){if(hr(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!pp.call(e,r)||!hr(n[r],e[r]))return!1}return!0}function M0(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function E0(n,e){var t=M0(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=M0(t)}}function Oy(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Oy(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function ky(){for(var n=window,e=Lf();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Lf(n.document)}return e}function Og(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function NT(n){var e=ky(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&Oy(t.ownerDocument.documentElement,t)){if(i!==null&&Og(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=E0(t,s);var o=E0(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var IT=$r&&"documentMode"in document&&11>=document.documentMode,ma=null,Np=null,Kl=null,Ip=!1;function T0(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ip||ma==null||ma!==Lf(i)||(i=ma,"selectionStart"in i&&Og(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Kl&&Tu(Kl,i)||(Kl=i,i=kf(Np,"onSelect"),0<i.length&&(e=new Ig("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=ma)))}function fc(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var ga={animationend:fc("Animation","AnimationEnd"),animationiteration:fc("Animation","AnimationIteration"),animationstart:fc("Animation","AnimationStart"),transitionend:fc("Transition","TransitionEnd")},eh={},zy={};$r&&(zy=document.createElement("div").style,"AnimationEvent"in window||(delete ga.animationend.animation,delete ga.animationiteration.animation,delete ga.animationstart.animation),"TransitionEvent"in window||delete ga.transitionend.transition);function yd(n){if(eh[n])return eh[n];if(!ga[n])return n;var e=ga[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in zy)return eh[n]=e[t];return n}var By=yd("animationend"),Hy=yd("animationiteration"),Vy=yd("animationstart"),Gy=yd("transitionend"),Wy=new Map,w0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xs(n,e){Wy.set(n,e),Ho(e,[n])}for(var th=0;th<w0.length;th++){var nh=w0[th],UT=nh.toLowerCase(),FT=nh[0].toUpperCase()+nh.slice(1);Xs(UT,"on"+FT)}Xs(By,"onAnimationEnd");Xs(Hy,"onAnimationIteration");Xs(Vy,"onAnimationStart");Xs("dblclick","onDoubleClick");Xs("focusin","onFocus");Xs("focusout","onBlur");Xs(Gy,"onTransitionEnd");Wa("onMouseEnter",["mouseout","mouseover"]);Wa("onMouseLeave",["mouseout","mouseover"]);Wa("onPointerEnter",["pointerout","pointerover"]);Wa("onPointerLeave",["pointerout","pointerover"]);Ho("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ho("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ho("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ho("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ho("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ho("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),OT=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fl));function A0(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,UE(i,e,void 0,n),n.currentTarget=null}function Xy(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;A0(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;A0(r,a,u),s=l}}}if(Nf)throw n=bp,Nf=!1,bp=null,n}function Pt(n,e){var t=e[zp];t===void 0&&(t=e[zp]=new Set);var i=n+"__bubble";t.has(i)||(Yy(e,n,2,!1),t.add(i))}function ih(n,e,t){var i=0;e&&(i|=4),Yy(t,n,i,e)}var dc="_reactListening"+Math.random().toString(36).slice(2);function wu(n){if(!n[dc]){n[dc]=!0,Jx.forEach(function(t){t!=="selectionchange"&&(OT.has(t)||ih(t,!1,n),ih(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[dc]||(e[dc]=!0,ih("selectionchange",!1,e))}}function Yy(n,e,t,i){switch(by(e)){case 1:var r=ZE;break;case 4:r=QE;break;default:r=Dg}t=r.bind(null,e,t,n),r=void 0,!Rp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function rh(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=mo(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}my(function(){var u=s,c=Rg(t),f=[];e:{var d=Wy.get(n);if(d!==void 0){var h=Ig,g=n;switch(n){case"keypress":if(of(t)===0)break e;case"keydown":case"keyup":h=hT;break;case"focusin":g="focus",h=Zd;break;case"focusout":g="blur",h=Zd;break;case"beforeblur":case"afterblur":h=Zd;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=p0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=tT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=gT;break;case By:case Hy:case Vy:h=rT;break;case Gy:h=vT;break;case"scroll":h=JE;break;case"wheel":h=yT;break;case"copy":case"cut":case"paste":h=oT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=g0}var _=(e&4)!==0,m=!_&&n==="scroll",p=_?d!==null?d+"Capture":null:d;_=[];for(var v=u,x;v!==null;){x=v;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,p!==null&&(S=xu(v,p),S!=null&&_.push(Au(v,S,x)))),m)break;v=v.return}0<_.length&&(d=new h(d,g,null,t,c),f.push({event:d,listeners:_}))}}if(!(e&7)){e:{if(d=n==="mouseover"||n==="pointerover",h=n==="mouseout"||n==="pointerout",d&&t!==Ap&&(g=t.relatedTarget||t.fromElement)&&(mo(g)||g[qr]))break e;if((h||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,h?(g=t.relatedTarget||t.toElement,h=u,g=g?mo(g):null,g!==null&&(m=Vo(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(h=null,g=u),h!==g)){if(_=p0,S="onMouseLeave",p="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(_=g0,S="onPointerLeave",p="onPointerEnter",v="pointer"),m=h==null?d:_a(h),x=g==null?d:_a(g),d=new _(S,v+"leave",h,t,c),d.target=m,d.relatedTarget=x,S=null,mo(c)===u&&(_=new _(p,v+"enter",g,t,c),_.target=x,_.relatedTarget=m,S=_),m=S,h&&g)t:{for(_=h,p=g,v=0,x=_;x;x=Xo(x))v++;for(x=0,S=p;S;S=Xo(S))x++;for(;0<v-x;)_=Xo(_),v--;for(;0<x-v;)p=Xo(p),x--;for(;v--;){if(_===p||p!==null&&_===p.alternate)break t;_=Xo(_),p=Xo(p)}_=null}else _=null;h!==null&&C0(f,d,h,_,!1),g!==null&&m!==null&&C0(f,m,g,_,!0)}}e:{if(d=u?_a(u):window,h=d.nodeName&&d.nodeName.toLowerCase(),h==="select"||h==="input"&&d.type==="file")var C=CT;else if(x0(d))if(Uy)C=LT;else{C=bT;var w=RT}else(h=d.nodeName)&&h.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(C=PT);if(C&&(C=C(n,u))){Iy(f,C,t,c);break e}w&&w(n,d,u),n==="focusout"&&(w=d._wrapperState)&&w.controlled&&d.type==="number"&&Sp(d,"number",d.value)}switch(w=u?_a(u):window,n){case"focusin":(x0(w)||w.contentEditable==="true")&&(ma=w,Np=u,Kl=null);break;case"focusout":Kl=Np=ma=null;break;case"mousedown":Ip=!0;break;case"contextmenu":case"mouseup":case"dragend":Ip=!1,T0(f,t,c);break;case"selectionchange":if(IT)break;case"keydown":case"keyup":T0(f,t,c)}var M;if(Fg)e:{switch(n){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else pa?Dy(n,t)&&(R="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(R="onCompositionStart");R&&(Ly&&t.locale!=="ko"&&(pa||R!=="onCompositionStart"?R==="onCompositionEnd"&&pa&&(M=Py()):(_s=c,Ng="value"in _s?_s.value:_s.textContent,pa=!0)),w=kf(u,R),0<w.length&&(R=new m0(R,n,null,t,c),f.push({event:R,listeners:w}),M?R.data=M:(M=Ny(t),M!==null&&(R.data=M)))),(M=MT?ET(n,t):TT(n,t))&&(u=kf(u,"onBeforeInput"),0<u.length&&(c=new m0("onBeforeInput","beforeinput",null,t,c),f.push({event:c,listeners:u}),c.data=M))}Xy(f,e)})}function Au(n,e,t){return{instance:n,listener:e,currentTarget:t}}function kf(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=xu(n,t),s!=null&&i.unshift(Au(n,s,r)),s=xu(n,e),s!=null&&i.push(Au(n,s,r))),n=n.return}return i}function Xo(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function C0(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=xu(t,s),l!=null&&o.unshift(Au(t,l,a))):r||(l=xu(t,s),l!=null&&o.push(Au(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var kT=/\r\n?/g,zT=/\u0000|\uFFFD/g;function R0(n){return(typeof n=="string"?n:""+n).replace(kT,`
`).replace(zT,"")}function hc(n,e,t){if(e=R0(e),R0(n)!==e&&t)throw Error(ue(425))}function zf(){}var Up=null,Fp=null;function Op(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var kp=typeof setTimeout=="function"?setTimeout:void 0,BT=typeof clearTimeout=="function"?clearTimeout:void 0,b0=typeof Promise=="function"?Promise:void 0,HT=typeof queueMicrotask=="function"?queueMicrotask:typeof b0<"u"?function(n){return b0.resolve(null).then(n).catch(VT)}:kp;function VT(n){setTimeout(function(){throw n})}function sh(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),Mu(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);Mu(e)}function Cs(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function P0(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var dl=Math.random().toString(36).slice(2),yr="__reactFiber$"+dl,Cu="__reactProps$"+dl,qr="__reactContainer$"+dl,zp="__reactEvents$"+dl,GT="__reactListeners$"+dl,WT="__reactHandles$"+dl;function mo(n){var e=n[yr];if(e)return e;for(var t=n.parentNode;t;){if(e=t[qr]||t[yr]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=P0(n);n!==null;){if(t=n[yr])return t;n=P0(n)}return e}n=t,t=n.parentNode}return null}function qu(n){return n=n[yr]||n[qr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function _a(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(ue(33))}function Sd(n){return n[Cu]||null}var Bp=[],va=-1;function Ys(n){return{current:n}}function Dt(n){0>va||(n.current=Bp[va],Bp[va]=null,va--)}function Ct(n,e){va++,Bp[va]=n.current,n.current=e}var ks={},Un=Ys(ks),Jn=Ys(!1),Lo=ks;function Xa(n,e){var t=n.type.contextTypes;if(!t)return ks;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function ei(n){return n=n.childContextTypes,n!=null}function Bf(){Dt(Jn),Dt(Un)}function L0(n,e,t){if(Un.current!==ks)throw Error(ue(168));Ct(Un,e),Ct(Jn,t)}function jy(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ue(108,RE(n)||"Unknown",r));return Vt({},t,i)}function Hf(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ks,Lo=Un.current,Ct(Un,n),Ct(Jn,Jn.current),!0}function D0(n,e,t){var i=n.stateNode;if(!i)throw Error(ue(169));t?(n=jy(n,e,Lo),i.__reactInternalMemoizedMergedChildContext=n,Dt(Jn),Dt(Un),Ct(Un,n)):Dt(Jn),Ct(Jn,t)}var kr=null,Md=!1,oh=!1;function $y(n){kr===null?kr=[n]:kr.push(n)}function XT(n){Md=!0,$y(n)}function js(){if(!oh&&kr!==null){oh=!0;var n=0,e=yt;try{var t=kr;for(yt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}kr=null,Md=!1}catch(r){throw kr!==null&&(kr=kr.slice(n+1)),xy(bg,js),r}finally{yt=e,oh=!1}}return null}var xa=[],ya=0,Vf=null,Gf=0,Fi=[],Oi=0,Do=null,Hr=1,Vr="";function so(n,e){xa[ya++]=Gf,xa[ya++]=Vf,Vf=n,Gf=e}function qy(n,e,t){Fi[Oi++]=Hr,Fi[Oi++]=Vr,Fi[Oi++]=Do,Do=n;var i=Hr;n=Vr;var r=32-fr(i)-1;i&=~(1<<r),t+=1;var s=32-fr(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Hr=1<<32-fr(e)+r|t<<r|i,Vr=s+n}else Hr=1<<s|t<<r|i,Vr=n}function kg(n){n.return!==null&&(so(n,1),qy(n,1,0))}function zg(n){for(;n===Vf;)Vf=xa[--ya],xa[ya]=null,Gf=xa[--ya],xa[ya]=null;for(;n===Do;)Do=Fi[--Oi],Fi[Oi]=null,Vr=Fi[--Oi],Fi[Oi]=null,Hr=Fi[--Oi],Fi[Oi]=null}var wi=null,Si=null,Ut=!1,or=null;function Ky(n,e){var t=Vi(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function N0(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,wi=n,Si=Cs(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,wi=n,Si=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Do!==null?{id:Hr,overflow:Vr}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Vi(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,wi=n,Si=null,!0):!1;default:return!1}}function Hp(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Vp(n){if(Ut){var e=Si;if(e){var t=e;if(!N0(n,e)){if(Hp(n))throw Error(ue(418));e=Cs(t.nextSibling);var i=wi;e&&N0(n,e)?Ky(i,t):(n.flags=n.flags&-4097|2,Ut=!1,wi=n)}}else{if(Hp(n))throw Error(ue(418));n.flags=n.flags&-4097|2,Ut=!1,wi=n}}}function I0(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;wi=n}function pc(n){if(n!==wi)return!1;if(!Ut)return I0(n),Ut=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Op(n.type,n.memoizedProps)),e&&(e=Si)){if(Hp(n))throw Zy(),Error(ue(418));for(;e;)Ky(n,e),e=Cs(e.nextSibling)}if(I0(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ue(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Si=Cs(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Si=null}}else Si=wi?Cs(n.stateNode.nextSibling):null;return!0}function Zy(){for(var n=Si;n;)n=Cs(n.nextSibling)}function Ya(){Si=wi=null,Ut=!1}function Bg(n){or===null?or=[n]:or.push(n)}var YT=ts.ReactCurrentBatchConfig;function Sl(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(ue(309));var i=t.stateNode}if(!i)throw Error(ue(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(ue(284));if(!t._owner)throw Error(ue(290,n))}return n}function mc(n,e){throw n=Object.prototype.toString.call(e),Error(ue(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function U0(n){var e=n._init;return e(n._payload)}function Qy(n){function e(p,v){if(n){var x=p.deletions;x===null?(p.deletions=[v],p.flags|=16):x.push(v)}}function t(p,v){if(!n)return null;for(;v!==null;)e(p,v),v=v.sibling;return null}function i(p,v){for(p=new Map;v!==null;)v.key!==null?p.set(v.key,v):p.set(v.index,v),v=v.sibling;return p}function r(p,v){return p=Ls(p,v),p.index=0,p.sibling=null,p}function s(p,v,x){return p.index=x,n?(x=p.alternate,x!==null?(x=x.index,x<v?(p.flags|=2,v):x):(p.flags|=2,v)):(p.flags|=1048576,v)}function o(p){return n&&p.alternate===null&&(p.flags|=2),p}function a(p,v,x,S){return v===null||v.tag!==6?(v=hh(x,p.mode,S),v.return=p,v):(v=r(v,x),v.return=p,v)}function l(p,v,x,S){var C=x.type;return C===ha?c(p,v,x.props.children,S,x.key):v!==null&&(v.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ds&&U0(C)===v.type)?(S=r(v,x.props),S.ref=Sl(p,v,x),S.return=p,S):(S=hf(x.type,x.key,x.props,null,p.mode,S),S.ref=Sl(p,v,x),S.return=p,S)}function u(p,v,x,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=ph(x,p.mode,S),v.return=p,v):(v=r(v,x.children||[]),v.return=p,v)}function c(p,v,x,S,C){return v===null||v.tag!==7?(v=Eo(x,p.mode,S,C),v.return=p,v):(v=r(v,x),v.return=p,v)}function f(p,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=hh(""+v,p.mode,x),v.return=p,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case rc:return x=hf(v.type,v.key,v.props,null,p.mode,x),x.ref=Sl(p,null,v),x.return=p,x;case da:return v=ph(v,p.mode,x),v.return=p,v;case ds:var S=v._init;return f(p,S(v._payload),x)}if(Il(v)||gl(v))return v=Eo(v,p.mode,x,null),v.return=p,v;mc(p,v)}return null}function d(p,v,x,S){var C=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return C!==null?null:a(p,v,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case rc:return x.key===C?l(p,v,x,S):null;case da:return x.key===C?u(p,v,x,S):null;case ds:return C=x._init,d(p,v,C(x._payload),S)}if(Il(x)||gl(x))return C!==null?null:c(p,v,x,S,null);mc(p,x)}return null}function h(p,v,x,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return p=p.get(x)||null,a(v,p,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case rc:return p=p.get(S.key===null?x:S.key)||null,l(v,p,S,C);case da:return p=p.get(S.key===null?x:S.key)||null,u(v,p,S,C);case ds:var w=S._init;return h(p,v,x,w(S._payload),C)}if(Il(S)||gl(S))return p=p.get(x)||null,c(v,p,S,C,null);mc(v,S)}return null}function g(p,v,x,S){for(var C=null,w=null,M=v,R=v=0,N=null;M!==null&&R<x.length;R++){M.index>R?(N=M,M=null):N=M.sibling;var y=d(p,M,x[R],S);if(y===null){M===null&&(M=N);break}n&&M&&y.alternate===null&&e(p,M),v=s(y,v,R),w===null?C=y:w.sibling=y,w=y,M=N}if(R===x.length)return t(p,M),Ut&&so(p,R),C;if(M===null){for(;R<x.length;R++)M=f(p,x[R],S),M!==null&&(v=s(M,v,R),w===null?C=M:w.sibling=M,w=M);return Ut&&so(p,R),C}for(M=i(p,M);R<x.length;R++)N=h(M,p,R,x[R],S),N!==null&&(n&&N.alternate!==null&&M.delete(N.key===null?R:N.key),v=s(N,v,R),w===null?C=N:w.sibling=N,w=N);return n&&M.forEach(function(T){return e(p,T)}),Ut&&so(p,R),C}function _(p,v,x,S){var C=gl(x);if(typeof C!="function")throw Error(ue(150));if(x=C.call(x),x==null)throw Error(ue(151));for(var w=C=null,M=v,R=v=0,N=null,y=x.next();M!==null&&!y.done;R++,y=x.next()){M.index>R?(N=M,M=null):N=M.sibling;var T=d(p,M,y.value,S);if(T===null){M===null&&(M=N);break}n&&M&&T.alternate===null&&e(p,M),v=s(T,v,R),w===null?C=T:w.sibling=T,w=T,M=N}if(y.done)return t(p,M),Ut&&so(p,R),C;if(M===null){for(;!y.done;R++,y=x.next())y=f(p,y.value,S),y!==null&&(v=s(y,v,R),w===null?C=y:w.sibling=y,w=y);return Ut&&so(p,R),C}for(M=i(p,M);!y.done;R++,y=x.next())y=h(M,p,R,y.value,S),y!==null&&(n&&y.alternate!==null&&M.delete(y.key===null?R:y.key),v=s(y,v,R),w===null?C=y:w.sibling=y,w=y);return n&&M.forEach(function(I){return e(p,I)}),Ut&&so(p,R),C}function m(p,v,x,S){if(typeof x=="object"&&x!==null&&x.type===ha&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case rc:e:{for(var C=x.key,w=v;w!==null;){if(w.key===C){if(C=x.type,C===ha){if(w.tag===7){t(p,w.sibling),v=r(w,x.props.children),v.return=p,p=v;break e}}else if(w.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ds&&U0(C)===w.type){t(p,w.sibling),v=r(w,x.props),v.ref=Sl(p,w,x),v.return=p,p=v;break e}t(p,w);break}else e(p,w);w=w.sibling}x.type===ha?(v=Eo(x.props.children,p.mode,S,x.key),v.return=p,p=v):(S=hf(x.type,x.key,x.props,null,p.mode,S),S.ref=Sl(p,v,x),S.return=p,p=S)}return o(p);case da:e:{for(w=x.key;v!==null;){if(v.key===w)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){t(p,v.sibling),v=r(v,x.children||[]),v.return=p,p=v;break e}else{t(p,v);break}else e(p,v);v=v.sibling}v=ph(x,p.mode,S),v.return=p,p=v}return o(p);case ds:return w=x._init,m(p,v,w(x._payload),S)}if(Il(x))return g(p,v,x,S);if(gl(x))return _(p,v,x,S);mc(p,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(t(p,v.sibling),v=r(v,x),v.return=p,p=v):(t(p,v),v=hh(x,p.mode,S),v.return=p,p=v),o(p)):t(p,v)}return m}var ja=Qy(!0),Jy=Qy(!1),Wf=Ys(null),Xf=null,Sa=null,Hg=null;function Vg(){Hg=Sa=Xf=null}function Gg(n){var e=Wf.current;Dt(Wf),n._currentValue=e}function Gp(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Da(n,e){Xf=n,Hg=Sa=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(Qn=!0),n.firstContext=null)}function $i(n){var e=n._currentValue;if(Hg!==n)if(n={context:n,memoizedValue:e,next:null},Sa===null){if(Xf===null)throw Error(ue(308));Sa=n,Xf.dependencies={lanes:0,firstContext:n}}else Sa=Sa.next=n;return e}var go=null;function Wg(n){go===null?go=[n]:go.push(n)}function eS(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Wg(e)):(t.next=r.next,r.next=t),e.interleaved=t,Kr(n,i)}function Kr(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var hs=!1;function Xg(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function tS(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Yr(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Rs(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,pt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Kr(n,t)}return r=i.interleaved,r===null?(e.next=e,Wg(i)):(e.next=r.next,r.next=e),i.interleaved=e,Kr(n,t)}function af(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Pg(n,t)}}function F0(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Yf(n,e,t,i){var r=n.updateQueue;hs=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,h=a.eventTime;if((i&d)===d){c!==null&&(c=c.next={eventTime:h,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=n,_=a;switch(d=e,h=t,_.tag){case 1:if(g=_.payload,typeof g=="function"){f=g.call(h,f,d);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=_.payload,d=typeof g=="function"?g.call(h,f,d):g,d==null)break e;f=Vt({},f,d);break e;case 2:hs=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else h={eventTime:h,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=h,l=f):c=c.next=h,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Io|=o,n.lanes=o,n.memoizedState=f}}function O0(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(ue(191,r));r.call(i)}}}var Ku={},wr=Ys(Ku),Ru=Ys(Ku),bu=Ys(Ku);function _o(n){if(n===Ku)throw Error(ue(174));return n}function Yg(n,e){switch(Ct(bu,e),Ct(Ru,n),Ct(wr,Ku),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ep(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Ep(e,n)}Dt(wr),Ct(wr,e)}function $a(){Dt(wr),Dt(Ru),Dt(bu)}function nS(n){_o(bu.current);var e=_o(wr.current),t=Ep(e,n.type);e!==t&&(Ct(Ru,n),Ct(wr,t))}function jg(n){Ru.current===n&&(Dt(wr),Dt(Ru))}var kt=Ys(0);function jf(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ah=[];function $g(){for(var n=0;n<ah.length;n++)ah[n]._workInProgressVersionPrimary=null;ah.length=0}var lf=ts.ReactCurrentDispatcher,lh=ts.ReactCurrentBatchConfig,No=0,Ht=null,on=null,mn=null,$f=!1,Zl=!1,Pu=0,jT=0;function Tn(){throw Error(ue(321))}function qg(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!hr(n[t],e[t]))return!1;return!0}function Kg(n,e,t,i,r,s){if(No=s,Ht=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,lf.current=n===null||n.memoizedState===null?ZT:QT,n=t(i,r),Zl){s=0;do{if(Zl=!1,Pu=0,25<=s)throw Error(ue(301));s+=1,mn=on=null,e.updateQueue=null,lf.current=JT,n=t(i,r)}while(Zl)}if(lf.current=qf,e=on!==null&&on.next!==null,No=0,mn=on=Ht=null,$f=!1,e)throw Error(ue(300));return n}function Zg(){var n=Pu!==0;return Pu=0,n}function gr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mn===null?Ht.memoizedState=mn=n:mn=mn.next=n,mn}function qi(){if(on===null){var n=Ht.alternate;n=n!==null?n.memoizedState:null}else n=on.next;var e=mn===null?Ht.memoizedState:mn.next;if(e!==null)mn=e,on=n;else{if(n===null)throw Error(ue(310));on=n,n={memoizedState:on.memoizedState,baseState:on.baseState,baseQueue:on.baseQueue,queue:on.queue,next:null},mn===null?Ht.memoizedState=mn=n:mn=mn.next=n}return mn}function Lu(n,e){return typeof e=="function"?e(n):e}function uh(n){var e=qi(),t=e.queue;if(t===null)throw Error(ue(311));t.lastRenderedReducer=n;var i=on,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((No&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,Ht.lanes|=c,Io|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,hr(i,e.memoizedState)||(Qn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Ht.lanes|=s,Io|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function ch(n){var e=qi(),t=e.queue;if(t===null)throw Error(ue(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);hr(s,e.memoizedState)||(Qn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function iS(){}function rS(n,e){var t=Ht,i=qi(),r=e(),s=!hr(i.memoizedState,r);if(s&&(i.memoizedState=r,Qn=!0),i=i.queue,Qg(aS.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||mn!==null&&mn.memoizedState.tag&1){if(t.flags|=2048,Du(9,oS.bind(null,t,i,r,e),void 0,null),gn===null)throw Error(ue(349));No&30||sS(t,e,r)}return r}function sS(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Ht.updateQueue,e===null?(e={lastEffect:null,stores:null},Ht.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function oS(n,e,t,i){e.value=t,e.getSnapshot=i,lS(e)&&uS(n)}function aS(n,e,t){return t(function(){lS(e)&&uS(n)})}function lS(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!hr(n,t)}catch{return!0}}function uS(n){var e=Kr(n,1);e!==null&&dr(e,n,1,-1)}function k0(n){var e=gr();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Lu,lastRenderedState:n},e.queue=n,n=n.dispatch=KT.bind(null,Ht,n),[e.memoizedState,n]}function Du(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Ht.updateQueue,e===null?(e={lastEffect:null,stores:null},Ht.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function cS(){return qi().memoizedState}function uf(n,e,t,i){var r=gr();Ht.flags|=n,r.memoizedState=Du(1|e,t,void 0,i===void 0?null:i)}function Ed(n,e,t,i){var r=qi();i=i===void 0?null:i;var s=void 0;if(on!==null){var o=on.memoizedState;if(s=o.destroy,i!==null&&qg(i,o.deps)){r.memoizedState=Du(e,t,s,i);return}}Ht.flags|=n,r.memoizedState=Du(1|e,t,s,i)}function z0(n,e){return uf(8390656,8,n,e)}function Qg(n,e){return Ed(2048,8,n,e)}function fS(n,e){return Ed(4,2,n,e)}function dS(n,e){return Ed(4,4,n,e)}function hS(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function pS(n,e,t){return t=t!=null?t.concat([n]):null,Ed(4,4,hS.bind(null,e,n),t)}function Jg(){}function mS(n,e){var t=qi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&qg(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function gS(n,e){var t=qi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&qg(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function _S(n,e,t){return No&21?(hr(t,e)||(t=My(),Ht.lanes|=t,Io|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,Qn=!0),n.memoizedState=t)}function $T(n,e){var t=yt;yt=t!==0&&4>t?t:4,n(!0);var i=lh.transition;lh.transition={};try{n(!1),e()}finally{yt=t,lh.transition=i}}function vS(){return qi().memoizedState}function qT(n,e,t){var i=Ps(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},xS(n))yS(e,t);else if(t=eS(n,e,t,i),t!==null){var r=Wn();dr(t,n,i,r),SS(t,e,i)}}function KT(n,e,t){var i=Ps(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(xS(n))yS(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,hr(a,o)){var l=e.interleaved;l===null?(r.next=r,Wg(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=eS(n,e,r,i),t!==null&&(r=Wn(),dr(t,n,i,r),SS(t,e,i))}}function xS(n){var e=n.alternate;return n===Ht||e!==null&&e===Ht}function yS(n,e){Zl=$f=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function SS(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Pg(n,t)}}var qf={readContext:$i,useCallback:Tn,useContext:Tn,useEffect:Tn,useImperativeHandle:Tn,useInsertionEffect:Tn,useLayoutEffect:Tn,useMemo:Tn,useReducer:Tn,useRef:Tn,useState:Tn,useDebugValue:Tn,useDeferredValue:Tn,useTransition:Tn,useMutableSource:Tn,useSyncExternalStore:Tn,useId:Tn,unstable_isNewReconciler:!1},ZT={readContext:$i,useCallback:function(n,e){return gr().memoizedState=[n,e===void 0?null:e],n},useContext:$i,useEffect:z0,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,uf(4194308,4,hS.bind(null,e,n),t)},useLayoutEffect:function(n,e){return uf(4194308,4,n,e)},useInsertionEffect:function(n,e){return uf(4,2,n,e)},useMemo:function(n,e){var t=gr();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=gr();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=qT.bind(null,Ht,n),[i.memoizedState,n]},useRef:function(n){var e=gr();return n={current:n},e.memoizedState=n},useState:k0,useDebugValue:Jg,useDeferredValue:function(n){return gr().memoizedState=n},useTransition:function(){var n=k0(!1),e=n[0];return n=$T.bind(null,n[1]),gr().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Ht,r=gr();if(Ut){if(t===void 0)throw Error(ue(407));t=t()}else{if(t=e(),gn===null)throw Error(ue(349));No&30||sS(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,z0(aS.bind(null,i,s,n),[n]),i.flags|=2048,Du(9,oS.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=gr(),e=gn.identifierPrefix;if(Ut){var t=Vr,i=Hr;t=(i&~(1<<32-fr(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Pu++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=jT++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},QT={readContext:$i,useCallback:mS,useContext:$i,useEffect:Qg,useImperativeHandle:pS,useInsertionEffect:fS,useLayoutEffect:dS,useMemo:gS,useReducer:uh,useRef:cS,useState:function(){return uh(Lu)},useDebugValue:Jg,useDeferredValue:function(n){var e=qi();return _S(e,on.memoizedState,n)},useTransition:function(){var n=uh(Lu)[0],e=qi().memoizedState;return[n,e]},useMutableSource:iS,useSyncExternalStore:rS,useId:vS,unstable_isNewReconciler:!1},JT={readContext:$i,useCallback:mS,useContext:$i,useEffect:Qg,useImperativeHandle:pS,useInsertionEffect:fS,useLayoutEffect:dS,useMemo:gS,useReducer:ch,useRef:cS,useState:function(){return ch(Lu)},useDebugValue:Jg,useDeferredValue:function(n){var e=qi();return on===null?e.memoizedState=n:_S(e,on.memoizedState,n)},useTransition:function(){var n=ch(Lu)[0],e=qi().memoizedState;return[n,e]},useMutableSource:iS,useSyncExternalStore:rS,useId:vS,unstable_isNewReconciler:!1};function ir(n,e){if(n&&n.defaultProps){e=Vt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Wp(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Vt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Td={isMounted:function(n){return(n=n._reactInternals)?Vo(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Wn(),r=Ps(n),s=Yr(i,r);s.payload=e,t!=null&&(s.callback=t),e=Rs(n,s,r),e!==null&&(dr(e,n,r,i),af(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Wn(),r=Ps(n),s=Yr(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Rs(n,s,r),e!==null&&(dr(e,n,r,i),af(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Wn(),i=Ps(n),r=Yr(t,i);r.tag=2,e!=null&&(r.callback=e),e=Rs(n,r,i),e!==null&&(dr(e,n,i,t),af(e,n,i))}};function B0(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Tu(t,i)||!Tu(r,s):!0}function MS(n,e,t){var i=!1,r=ks,s=e.contextType;return typeof s=="object"&&s!==null?s=$i(s):(r=ei(e)?Lo:Un.current,i=e.contextTypes,s=(i=i!=null)?Xa(n,r):ks),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Td,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function H0(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Td.enqueueReplaceState(e,e.state,null)}function Xp(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},Xg(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=$i(s):(s=ei(e)?Lo:Un.current,r.context=Xa(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Wp(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Td.enqueueReplaceState(r,r.state,null),Yf(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function qa(n,e){try{var t="",i=e;do t+=CE(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function fh(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Yp(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var ew=typeof WeakMap=="function"?WeakMap:Map;function ES(n,e,t){t=Yr(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Zf||(Zf=!0,nm=i),Yp(n,e)},t}function TS(n,e,t){t=Yr(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Yp(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Yp(n,e),typeof i!="function"&&(bs===null?bs=new Set([this]):bs.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function V0(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new ew;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=pw.bind(null,n,e,t),e.then(n,n))}function G0(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function W0(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Yr(-1,1),e.tag=2,Rs(t,e,1))),t.lanes|=1),n)}var tw=ts.ReactCurrentOwner,Qn=!1;function Bn(n,e,t,i){e.child=n===null?Jy(e,null,t,i):ja(e,n.child,t,i)}function X0(n,e,t,i,r){t=t.render;var s=e.ref;return Da(e,r),i=Kg(n,e,t,i,s,r),t=Zg(),n!==null&&!Qn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Zr(n,e,r)):(Ut&&t&&kg(e),e.flags|=1,Bn(n,e,i,r),e.child)}function Y0(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!a_(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,wS(n,e,s,i,r)):(n=hf(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:Tu,t(o,i)&&n.ref===e.ref)return Zr(n,e,r)}return e.flags|=1,n=Ls(s,i),n.ref=e.ref,n.return=e,e.child=n}function wS(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(Tu(s,i)&&n.ref===e.ref)if(Qn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(Qn=!0);else return e.lanes=n.lanes,Zr(n,e,r)}return jp(n,e,t,i,r)}function AS(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ct(Ea,mi),mi|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,Ct(Ea,mi),mi|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,Ct(Ea,mi),mi|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,Ct(Ea,mi),mi|=i;return Bn(n,e,r,t),e.child}function CS(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function jp(n,e,t,i,r){var s=ei(t)?Lo:Un.current;return s=Xa(e,s),Da(e,r),t=Kg(n,e,t,i,s,r),i=Zg(),n!==null&&!Qn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Zr(n,e,r)):(Ut&&i&&kg(e),e.flags|=1,Bn(n,e,t,r),e.child)}function j0(n,e,t,i,r){if(ei(t)){var s=!0;Hf(e)}else s=!1;if(Da(e,r),e.stateNode===null)cf(n,e),MS(e,t,i),Xp(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=$i(u):(u=ei(t)?Lo:Un.current,u=Xa(e,u));var c=t.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&H0(e,o,i,u),hs=!1;var d=e.memoizedState;o.state=d,Yf(e,i,o,r),l=e.memoizedState,a!==i||d!==l||Jn.current||hs?(typeof c=="function"&&(Wp(e,t,c,i),l=e.memoizedState),(a=hs||B0(e,t,a,i,d,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,tS(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:ir(e.type,a),o.props=u,f=e.pendingProps,d=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=$i(l):(l=ei(t)?Lo:Un.current,l=Xa(e,l));var h=t.getDerivedStateFromProps;(c=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&H0(e,o,i,l),hs=!1,d=e.memoizedState,o.state=d,Yf(e,i,o,r);var g=e.memoizedState;a!==f||d!==g||Jn.current||hs?(typeof h=="function"&&(Wp(e,t,h,i),g=e.memoizedState),(u=hs||B0(e,t,u,i,d,g,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),i=!1)}return $p(n,e,t,i,s,r)}function $p(n,e,t,i,r,s){CS(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&D0(e,t,!1),Zr(n,e,s);i=e.stateNode,tw.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=ja(e,n.child,null,s),e.child=ja(e,null,a,s)):Bn(n,e,a,s),e.memoizedState=i.state,r&&D0(e,t,!0),e.child}function RS(n){var e=n.stateNode;e.pendingContext?L0(n,e.pendingContext,e.pendingContext!==e.context):e.context&&L0(n,e.context,!1),Yg(n,e.containerInfo)}function $0(n,e,t,i,r){return Ya(),Bg(r),e.flags|=256,Bn(n,e,t,i),e.child}var qp={dehydrated:null,treeContext:null,retryLane:0};function Kp(n){return{baseLanes:n,cachePool:null,transitions:null}}function bS(n,e,t){var i=e.pendingProps,r=kt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),Ct(kt,r&1),n===null)return Vp(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Cd(o,i,0,null),n=Eo(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Kp(t),e.memoizedState=qp,n):e_(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return nw(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ls(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Ls(a,s):(s=Eo(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Kp(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=qp,i}return s=n.child,n=s.sibling,i=Ls(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function e_(n,e){return e=Cd({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function gc(n,e,t,i){return i!==null&&Bg(i),ja(e,n.child,null,t),n=e_(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function nw(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=fh(Error(ue(422))),gc(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Cd({mode:"visible",children:i.children},r,0,null),s=Eo(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ja(e,n.child,null,o),e.child.memoizedState=Kp(o),e.memoizedState=qp,s);if(!(e.mode&1))return gc(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ue(419)),i=fh(s,i,void 0),gc(n,e,o,i)}if(a=(o&n.childLanes)!==0,Qn||a){if(i=gn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Kr(n,r),dr(i,n,r,-1))}return o_(),i=fh(Error(ue(421))),gc(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=mw.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Si=Cs(r.nextSibling),wi=e,Ut=!0,or=null,n!==null&&(Fi[Oi++]=Hr,Fi[Oi++]=Vr,Fi[Oi++]=Do,Hr=n.id,Vr=n.overflow,Do=e),e=e_(e,i.children),e.flags|=4096,e)}function q0(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Gp(n.return,e,t)}function dh(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function PS(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Bn(n,e,i.children,t),i=kt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&q0(n,t,e);else if(n.tag===19)q0(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(Ct(kt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&jf(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),dh(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&jf(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}dh(e,!0,t,null,s);break;case"together":dh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function cf(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Zr(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Io|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(ue(153));if(e.child!==null){for(n=e.child,t=Ls(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Ls(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function iw(n,e,t){switch(e.tag){case 3:RS(e),Ya();break;case 5:nS(e);break;case 1:ei(e.type)&&Hf(e);break;case 4:Yg(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Ct(Wf,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Ct(kt,kt.current&1),e.flags|=128,null):t&e.child.childLanes?bS(n,e,t):(Ct(kt,kt.current&1),n=Zr(n,e,t),n!==null?n.sibling:null);Ct(kt,kt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return PS(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Ct(kt,kt.current),i)break;return null;case 22:case 23:return e.lanes=0,AS(n,e,t)}return Zr(n,e,t)}var LS,Zp,DS,NS;LS=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Zp=function(){};DS=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,_o(wr.current);var s=null;switch(t){case"input":r=xp(n,r),i=xp(n,i),s=[];break;case"select":r=Vt({},r,{value:void 0}),i=Vt({},i,{value:void 0}),s=[];break;case"textarea":r=Mp(n,r),i=Mp(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=zf)}Tp(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(_u.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r?.[u],i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(_u.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Pt("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};NS=function(n,e,t,i){t!==i&&(e.flags|=4)};function Ml(n,e){if(!Ut)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function wn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function rw(n,e,t){var i=e.pendingProps;switch(zg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wn(e),null;case 1:return ei(e.type)&&Bf(),wn(e),null;case 3:return i=e.stateNode,$a(),Dt(Jn),Dt(Un),$g(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(pc(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,or!==null&&(sm(or),or=null))),Zp(n,e),wn(e),null;case 5:jg(e);var r=_o(bu.current);if(t=e.type,n!==null&&e.stateNode!=null)DS(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ue(166));return wn(e),null}if(n=_o(wr.current),pc(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[yr]=e,i[Cu]=s,n=(e.mode&1)!==0,t){case"dialog":Pt("cancel",i),Pt("close",i);break;case"iframe":case"object":case"embed":Pt("load",i);break;case"video":case"audio":for(r=0;r<Fl.length;r++)Pt(Fl[r],i);break;case"source":Pt("error",i);break;case"img":case"image":case"link":Pt("error",i),Pt("load",i);break;case"details":Pt("toggle",i);break;case"input":r0(i,s),Pt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Pt("invalid",i);break;case"textarea":o0(i,s),Pt("invalid",i)}Tp(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&hc(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&hc(i.textContent,a,n),r=["children",""+a]):_u.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Pt("scroll",i)}switch(t){case"input":sc(i),s0(i,s,!0);break;case"textarea":sc(i),a0(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=zf)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ay(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[yr]=e,n[Cu]=i,LS(n,e,!1,!1),e.stateNode=n;e:{switch(o=wp(t,i),t){case"dialog":Pt("cancel",n),Pt("close",n),r=i;break;case"iframe":case"object":case"embed":Pt("load",n),r=i;break;case"video":case"audio":for(r=0;r<Fl.length;r++)Pt(Fl[r],n);r=i;break;case"source":Pt("error",n),r=i;break;case"img":case"image":case"link":Pt("error",n),Pt("load",n),r=i;break;case"details":Pt("toggle",n),r=i;break;case"input":r0(n,i),r=xp(n,i),Pt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Vt({},i,{value:void 0}),Pt("invalid",n);break;case"textarea":o0(n,i),r=Mp(n,i),Pt("invalid",n);break;default:r=i}Tp(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?cy(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ly(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&vu(n,l):typeof l=="number"&&vu(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(_u.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Pt("scroll",n):l!=null&&Tg(n,s,l,o))}switch(t){case"input":sc(n),s0(n,i,!1);break;case"textarea":sc(n),a0(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Os(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Ra(n,!!i.multiple,s,!1):i.defaultValue!=null&&Ra(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=zf)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return wn(e),null;case 6:if(n&&e.stateNode!=null)NS(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ue(166));if(t=_o(bu.current),_o(wr.current),pc(e)){if(i=e.stateNode,t=e.memoizedProps,i[yr]=e,(s=i.nodeValue!==t)&&(n=wi,n!==null))switch(n.tag){case 3:hc(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&hc(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[yr]=e,e.stateNode=i}return wn(e),null;case 13:if(Dt(kt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ut&&Si!==null&&e.mode&1&&!(e.flags&128))Zy(),Ya(),e.flags|=98560,s=!1;else if(s=pc(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(ue(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ue(317));s[yr]=e}else Ya(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;wn(e),s=!1}else or!==null&&(sm(or),or=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||kt.current&1?ln===0&&(ln=3):o_())),e.updateQueue!==null&&(e.flags|=4),wn(e),null);case 4:return $a(),Zp(n,e),n===null&&wu(e.stateNode.containerInfo),wn(e),null;case 10:return Gg(e.type._context),wn(e),null;case 17:return ei(e.type)&&Bf(),wn(e),null;case 19:if(Dt(kt),s=e.memoizedState,s===null)return wn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ml(s,!1);else{if(ln!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=jf(n),o!==null){for(e.flags|=128,Ml(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return Ct(kt,kt.current&1|2),e.child}n=n.sibling}s.tail!==null&&Kt()>Ka&&(e.flags|=128,i=!0,Ml(s,!1),e.lanes=4194304)}else{if(!i)if(n=jf(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Ml(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ut)return wn(e),null}else 2*Kt()-s.renderingStartTime>Ka&&t!==1073741824&&(e.flags|=128,i=!0,Ml(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Kt(),e.sibling=null,t=kt.current,Ct(kt,i?t&1|2:t&1),e):(wn(e),null);case 22:case 23:return s_(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?mi&1073741824&&(wn(e),e.subtreeFlags&6&&(e.flags|=8192)):wn(e),null;case 24:return null;case 25:return null}throw Error(ue(156,e.tag))}function sw(n,e){switch(zg(e),e.tag){case 1:return ei(e.type)&&Bf(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return $a(),Dt(Jn),Dt(Un),$g(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return jg(e),null;case 13:if(Dt(kt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(ue(340));Ya()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return Dt(kt),null;case 4:return $a(),null;case 10:return Gg(e.type._context),null;case 22:case 23:return s_(),null;case 24:return null;default:return null}}var _c=!1,Pn=!1,ow=typeof WeakSet=="function"?WeakSet:Set,Ce=null;function Ma(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Gt(n,e,i)}else t.current=null}function Qp(n,e,t){try{t()}catch(i){Gt(n,e,i)}}var K0=!1;function aw(n,e){if(Up=Ff,n=ky(),Og(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=n,d=null;t:for(;;){for(var h;f!==t||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(h=f.firstChild)!==null;)d=f,f=h;for(;;){if(f===n)break t;if(d===t&&++u===r&&(a=o),d===s&&++c===i&&(l=o),(h=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=h}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Fp={focusedElem:n,selectionRange:t},Ff=!1,Ce=e;Ce!==null;)if(e=Ce,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Ce=n;else for(;Ce!==null;){e=Ce;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var _=g.memoizedProps,m=g.memoizedState,p=e.stateNode,v=p.getSnapshotBeforeUpdate(e.elementType===e.type?_:ir(e.type,_),m);p.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ue(163))}}catch(S){Gt(e,e.return,S)}if(n=e.sibling,n!==null){n.return=e.return,Ce=n;break}Ce=e.return}return g=K0,K0=!1,g}function Ql(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Qp(e,t,s)}r=r.next}while(r!==i)}}function wd(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Jp(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function IS(n){var e=n.alternate;e!==null&&(n.alternate=null,IS(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[yr],delete e[Cu],delete e[zp],delete e[GT],delete e[WT])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function US(n){return n.tag===5||n.tag===3||n.tag===4}function Z0(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||US(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function em(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=zf));else if(i!==4&&(n=n.child,n!==null))for(em(n,e,t),n=n.sibling;n!==null;)em(n,e,t),n=n.sibling}function tm(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(tm(n,e,t),n=n.sibling;n!==null;)tm(n,e,t),n=n.sibling}var xn=null,rr=!1;function rs(n,e,t){for(t=t.child;t!==null;)FS(n,e,t),t=t.sibling}function FS(n,e,t){if(Tr&&typeof Tr.onCommitFiberUnmount=="function")try{Tr.onCommitFiberUnmount(_d,t)}catch{}switch(t.tag){case 5:Pn||Ma(t,e);case 6:var i=xn,r=rr;xn=null,rs(n,e,t),xn=i,rr=r,xn!==null&&(rr?(n=xn,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):xn.removeChild(t.stateNode));break;case 18:xn!==null&&(rr?(n=xn,t=t.stateNode,n.nodeType===8?sh(n.parentNode,t):n.nodeType===1&&sh(n,t),Mu(n)):sh(xn,t.stateNode));break;case 4:i=xn,r=rr,xn=t.stateNode.containerInfo,rr=!0,rs(n,e,t),xn=i,rr=r;break;case 0:case 11:case 14:case 15:if(!Pn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Qp(t,e,o),r=r.next}while(r!==i)}rs(n,e,t);break;case 1:if(!Pn&&(Ma(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Gt(t,e,a)}rs(n,e,t);break;case 21:rs(n,e,t);break;case 22:t.mode&1?(Pn=(i=Pn)||t.memoizedState!==null,rs(n,e,t),Pn=i):rs(n,e,t);break;default:rs(n,e,t)}}function Q0(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new ow),e.forEach(function(i){var r=gw.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Zi(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:xn=a.stateNode,rr=!1;break e;case 3:xn=a.stateNode.containerInfo,rr=!0;break e;case 4:xn=a.stateNode.containerInfo,rr=!0;break e}a=a.return}if(xn===null)throw Error(ue(160));FS(s,o,r),xn=null,rr=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Gt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)OS(e,n),e=e.sibling}function OS(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Zi(e,n),pr(n),i&4){try{Ql(3,n,n.return),wd(3,n)}catch(_){Gt(n,n.return,_)}try{Ql(5,n,n.return)}catch(_){Gt(n,n.return,_)}}break;case 1:Zi(e,n),pr(n),i&512&&t!==null&&Ma(t,t.return);break;case 5:if(Zi(e,n),pr(n),i&512&&t!==null&&Ma(t,t.return),n.flags&32){var r=n.stateNode;try{vu(r,"")}catch(_){Gt(n,n.return,_)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&sy(r,s),wp(a,o);var u=wp(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?cy(r,f):c==="dangerouslySetInnerHTML"?ly(r,f):c==="children"?vu(r,f):Tg(r,c,f,u)}switch(a){case"input":yp(r,s);break;case"textarea":oy(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var h=s.value;h!=null?Ra(r,!!s.multiple,h,!1):d!==!!s.multiple&&(s.defaultValue!=null?Ra(r,!!s.multiple,s.defaultValue,!0):Ra(r,!!s.multiple,s.multiple?[]:"",!1))}r[Cu]=s}catch(_){Gt(n,n.return,_)}}break;case 6:if(Zi(e,n),pr(n),i&4){if(n.stateNode===null)throw Error(ue(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(_){Gt(n,n.return,_)}}break;case 3:if(Zi(e,n),pr(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Mu(e.containerInfo)}catch(_){Gt(n,n.return,_)}break;case 4:Zi(e,n),pr(n);break;case 13:Zi(e,n),pr(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(i_=Kt())),i&4&&Q0(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(Pn=(u=Pn)||c,Zi(e,n),Pn=u):Zi(e,n),pr(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(Ce=n,c=n.child;c!==null;){for(f=Ce=c;Ce!==null;){switch(d=Ce,h=d.child,d.tag){case 0:case 11:case 14:case 15:Ql(4,d,d.return);break;case 1:Ma(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){i=d,t=d.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(_){Gt(i,t,_)}}break;case 5:Ma(d,d.return);break;case 22:if(d.memoizedState!==null){ev(f);continue}}h!==null?(h.return=d,Ce=h):ev(f)}c=c.sibling}e:for(c=null,f=n;;){if(f.tag===5){if(c===null){c=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=uy("display",o))}catch(_){Gt(n,n.return,_)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(_){Gt(n,n.return,_)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===n)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===n)break e;for(;f.sibling===null;){if(f.return===null||f.return===n)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Zi(e,n),pr(n),i&4&&Q0(n);break;case 21:break;default:Zi(e,n),pr(n)}}function pr(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(US(t)){var i=t;break e}t=t.return}throw Error(ue(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(vu(r,""),i.flags&=-33);var s=Z0(n);tm(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Z0(n);em(n,a,o);break;default:throw Error(ue(161))}}catch(l){Gt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function lw(n,e,t){Ce=n,kS(n)}function kS(n,e,t){for(var i=(n.mode&1)!==0;Ce!==null;){var r=Ce,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||_c;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Pn;a=_c;var u=Pn;if(_c=o,(Pn=l)&&!u)for(Ce=r;Ce!==null;)o=Ce,l=o.child,o.tag===22&&o.memoizedState!==null?tv(r):l!==null?(l.return=o,Ce=l):tv(r);for(;s!==null;)Ce=s,kS(s),s=s.sibling;Ce=r,_c=a,Pn=u}J0(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ce=s):J0(n)}}function J0(n){for(;Ce!==null;){var e=Ce;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Pn||wd(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Pn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:ir(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&O0(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}O0(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Mu(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ue(163))}Pn||e.flags&512&&Jp(e)}catch(d){Gt(e,e.return,d)}}if(e===n){Ce=null;break}if(t=e.sibling,t!==null){t.return=e.return,Ce=t;break}Ce=e.return}}function ev(n){for(;Ce!==null;){var e=Ce;if(e===n){Ce=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Ce=t;break}Ce=e.return}}function tv(n){for(;Ce!==null;){var e=Ce;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{wd(4,e)}catch(l){Gt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Gt(e,r,l)}}var s=e.return;try{Jp(e)}catch(l){Gt(e,s,l)}break;case 5:var o=e.return;try{Jp(e)}catch(l){Gt(e,o,l)}}}catch(l){Gt(e,e.return,l)}if(e===n){Ce=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ce=a;break}Ce=e.return}}var uw=Math.ceil,Kf=ts.ReactCurrentDispatcher,t_=ts.ReactCurrentOwner,Yi=ts.ReactCurrentBatchConfig,pt=0,gn=null,rn=null,Sn=0,mi=0,Ea=Ys(0),ln=0,Nu=null,Io=0,Ad=0,n_=0,Jl=null,Kn=null,i_=0,Ka=1/0,Fr=null,Zf=!1,nm=null,bs=null,vc=!1,vs=null,Qf=0,eu=0,im=null,ff=-1,df=0;function Wn(){return pt&6?Kt():ff!==-1?ff:ff=Kt()}function Ps(n){return n.mode&1?pt&2&&Sn!==0?Sn&-Sn:YT.transition!==null?(df===0&&(df=My()),df):(n=yt,n!==0||(n=window.event,n=n===void 0?16:by(n.type)),n):1}function dr(n,e,t,i){if(50<eu)throw eu=0,im=null,Error(ue(185));ju(n,t,i),(!(pt&2)||n!==gn)&&(n===gn&&(!(pt&2)&&(Ad|=t),ln===4&&ms(n,Sn)),ti(n,i),t===1&&pt===0&&!(e.mode&1)&&(Ka=Kt()+500,Md&&js()))}function ti(n,e){var t=n.callbackNode;YE(n,e);var i=Uf(n,n===gn?Sn:0);if(i===0)t!==null&&c0(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&c0(t),e===1)n.tag===0?XT(nv.bind(null,n)):$y(nv.bind(null,n)),HT(function(){!(pt&6)&&js()}),t=null;else{switch(Ey(i)){case 1:t=bg;break;case 4:t=yy;break;case 16:t=If;break;case 536870912:t=Sy;break;default:t=If}t=YS(t,zS.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function zS(n,e){if(ff=-1,df=0,pt&6)throw Error(ue(327));var t=n.callbackNode;if(Na()&&n.callbackNode!==t)return null;var i=Uf(n,n===gn?Sn:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Jf(n,i);else{e=i;var r=pt;pt|=2;var s=HS();(gn!==n||Sn!==e)&&(Fr=null,Ka=Kt()+500,Mo(n,e));do try{dw();break}catch(a){BS(n,a)}while(!0);Vg(),Kf.current=s,pt=r,rn!==null?e=0:(gn=null,Sn=0,e=ln)}if(e!==0){if(e===2&&(r=Pp(n),r!==0&&(i=r,e=rm(n,r))),e===1)throw t=Nu,Mo(n,0),ms(n,i),ti(n,Kt()),t;if(e===6)ms(n,i);else{if(r=n.current.alternate,!(i&30)&&!cw(r)&&(e=Jf(n,i),e===2&&(s=Pp(n),s!==0&&(i=s,e=rm(n,s))),e===1))throw t=Nu,Mo(n,0),ms(n,i),ti(n,Kt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(ue(345));case 2:oo(n,Kn,Fr);break;case 3:if(ms(n,i),(i&130023424)===i&&(e=i_+500-Kt(),10<e)){if(Uf(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Wn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=kp(oo.bind(null,n,Kn,Fr),e);break}oo(n,Kn,Fr);break;case 4:if(ms(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-fr(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Kt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*uw(i/1960))-i,10<i){n.timeoutHandle=kp(oo.bind(null,n,Kn,Fr),i);break}oo(n,Kn,Fr);break;case 5:oo(n,Kn,Fr);break;default:throw Error(ue(329))}}}return ti(n,Kt()),n.callbackNode===t?zS.bind(null,n):null}function rm(n,e){var t=Jl;return n.current.memoizedState.isDehydrated&&(Mo(n,e).flags|=256),n=Jf(n,e),n!==2&&(e=Kn,Kn=t,e!==null&&sm(e)),n}function sm(n){Kn===null?Kn=n:Kn.push.apply(Kn,n)}function cw(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!hr(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ms(n,e){for(e&=~n_,e&=~Ad,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-fr(e),i=1<<t;n[t]=-1,e&=~i}}function nv(n){if(pt&6)throw Error(ue(327));Na();var e=Uf(n,0);if(!(e&1))return ti(n,Kt()),null;var t=Jf(n,e);if(n.tag!==0&&t===2){var i=Pp(n);i!==0&&(e=i,t=rm(n,i))}if(t===1)throw t=Nu,Mo(n,0),ms(n,e),ti(n,Kt()),t;if(t===6)throw Error(ue(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,oo(n,Kn,Fr),ti(n,Kt()),null}function r_(n,e){var t=pt;pt|=1;try{return n(e)}finally{pt=t,pt===0&&(Ka=Kt()+500,Md&&js())}}function Uo(n){vs!==null&&vs.tag===0&&!(pt&6)&&Na();var e=pt;pt|=1;var t=Yi.transition,i=yt;try{if(Yi.transition=null,yt=1,n)return n()}finally{yt=i,Yi.transition=t,pt=e,!(pt&6)&&js()}}function s_(){mi=Ea.current,Dt(Ea)}function Mo(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,BT(t)),rn!==null)for(t=rn.return;t!==null;){var i=t;switch(zg(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Bf();break;case 3:$a(),Dt(Jn),Dt(Un),$g();break;case 5:jg(i);break;case 4:$a();break;case 13:Dt(kt);break;case 19:Dt(kt);break;case 10:Gg(i.type._context);break;case 22:case 23:s_()}t=t.return}if(gn=n,rn=n=Ls(n.current,null),Sn=mi=e,ln=0,Nu=null,n_=Ad=Io=0,Kn=Jl=null,go!==null){for(e=0;e<go.length;e++)if(t=go[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}go=null}return n}function BS(n,e){do{var t=rn;try{if(Vg(),lf.current=qf,$f){for(var i=Ht.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}$f=!1}if(No=0,mn=on=Ht=null,Zl=!1,Pu=0,t_.current=null,t===null||t.return===null){ln=1,Nu=e,rn=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=Sn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var h=G0(o);if(h!==null){h.flags&=-257,W0(h,o,a,s,e),h.mode&1&&V0(s,u,e),e=h,l=u;var g=e.updateQueue;if(g===null){var _=new Set;_.add(l),e.updateQueue=_}else g.add(l);break e}else{if(!(e&1)){V0(s,u,e),o_();break e}l=Error(ue(426))}}else if(Ut&&a.mode&1){var m=G0(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),W0(m,o,a,s,e),Bg(qa(l,a));break e}}s=l=qa(l,a),ln!==4&&(ln=2),Jl===null?Jl=[s]:Jl.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=ES(s,l,e);F0(s,p);break e;case 1:a=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(bs===null||!bs.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=TS(s,a,e);F0(s,S);break e}}s=s.return}while(s!==null)}GS(t)}catch(C){e=C,rn===t&&t!==null&&(rn=t=t.return);continue}break}while(!0)}function HS(){var n=Kf.current;return Kf.current=qf,n===null?qf:n}function o_(){(ln===0||ln===3||ln===2)&&(ln=4),gn===null||!(Io&268435455)&&!(Ad&268435455)||ms(gn,Sn)}function Jf(n,e){var t=pt;pt|=2;var i=HS();(gn!==n||Sn!==e)&&(Fr=null,Mo(n,e));do try{fw();break}catch(r){BS(n,r)}while(!0);if(Vg(),pt=t,Kf.current=i,rn!==null)throw Error(ue(261));return gn=null,Sn=0,ln}function fw(){for(;rn!==null;)VS(rn)}function dw(){for(;rn!==null&&!OE();)VS(rn)}function VS(n){var e=XS(n.alternate,n,mi);n.memoizedProps=n.pendingProps,e===null?GS(n):rn=e,t_.current=null}function GS(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=sw(t,e),t!==null){t.flags&=32767,rn=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{ln=6,rn=null;return}}else if(t=rw(t,e,mi),t!==null){rn=t;return}if(e=e.sibling,e!==null){rn=e;return}rn=e=n}while(e!==null);ln===0&&(ln=5)}function oo(n,e,t){var i=yt,r=Yi.transition;try{Yi.transition=null,yt=1,hw(n,e,t,i)}finally{Yi.transition=r,yt=i}return null}function hw(n,e,t,i){do Na();while(vs!==null);if(pt&6)throw Error(ue(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(ue(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(jE(n,s),n===gn&&(rn=gn=null,Sn=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||vc||(vc=!0,YS(If,function(){return Na(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Yi.transition,Yi.transition=null;var o=yt;yt=1;var a=pt;pt|=4,t_.current=null,aw(n,t),OS(t,n),NT(Fp),Ff=!!Up,Fp=Up=null,n.current=t,lw(t),kE(),pt=a,yt=o,Yi.transition=s}else n.current=t;if(vc&&(vc=!1,vs=n,Qf=r),s=n.pendingLanes,s===0&&(bs=null),HE(t.stateNode),ti(n,Kt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Zf)throw Zf=!1,n=nm,nm=null,n;return Qf&1&&n.tag!==0&&Na(),s=n.pendingLanes,s&1?n===im?eu++:(eu=0,im=n):eu=0,js(),null}function Na(){if(vs!==null){var n=Ey(Qf),e=Yi.transition,t=yt;try{if(Yi.transition=null,yt=16>n?16:n,vs===null)var i=!1;else{if(n=vs,vs=null,Qf=0,pt&6)throw Error(ue(331));var r=pt;for(pt|=4,Ce=n.current;Ce!==null;){var s=Ce,o=s.child;if(Ce.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Ce=u;Ce!==null;){var c=Ce;switch(c.tag){case 0:case 11:case 15:Ql(8,c,s)}var f=c.child;if(f!==null)f.return=c,Ce=f;else for(;Ce!==null;){c=Ce;var d=c.sibling,h=c.return;if(IS(c),c===u){Ce=null;break}if(d!==null){d.return=h,Ce=d;break}Ce=h}}}var g=s.alternate;if(g!==null){var _=g.child;if(_!==null){g.child=null;do{var m=_.sibling;_.sibling=null,_=m}while(_!==null)}}Ce=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ce=o;else e:for(;Ce!==null;){if(s=Ce,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ql(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,Ce=p;break e}Ce=s.return}}var v=n.current;for(Ce=v;Ce!==null;){o=Ce;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,Ce=x;else e:for(o=v;Ce!==null;){if(a=Ce,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:wd(9,a)}}catch(C){Gt(a,a.return,C)}if(a===o){Ce=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,Ce=S;break e}Ce=a.return}}if(pt=r,js(),Tr&&typeof Tr.onPostCommitFiberRoot=="function")try{Tr.onPostCommitFiberRoot(_d,n)}catch{}i=!0}return i}finally{yt=t,Yi.transition=e}}return!1}function iv(n,e,t){e=qa(t,e),e=ES(n,e,1),n=Rs(n,e,1),e=Wn(),n!==null&&(ju(n,1,e),ti(n,e))}function Gt(n,e,t){if(n.tag===3)iv(n,n,t);else for(;e!==null;){if(e.tag===3){iv(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(bs===null||!bs.has(i))){n=qa(t,n),n=TS(e,n,1),e=Rs(e,n,1),n=Wn(),e!==null&&(ju(e,1,n),ti(e,n));break}}e=e.return}}function pw(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Wn(),n.pingedLanes|=n.suspendedLanes&t,gn===n&&(Sn&t)===t&&(ln===4||ln===3&&(Sn&130023424)===Sn&&500>Kt()-i_?Mo(n,0):n_|=t),ti(n,e)}function WS(n,e){e===0&&(n.mode&1?(e=lc,lc<<=1,!(lc&130023424)&&(lc=4194304)):e=1);var t=Wn();n=Kr(n,e),n!==null&&(ju(n,e,t),ti(n,t))}function mw(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),WS(n,t)}function gw(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(ue(314))}i!==null&&i.delete(e),WS(n,t)}var XS;XS=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Jn.current)Qn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return Qn=!1,iw(n,e,t);Qn=!!(n.flags&131072)}else Qn=!1,Ut&&e.flags&1048576&&qy(e,Gf,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;cf(n,e),n=e.pendingProps;var r=Xa(e,Un.current);Da(e,t),r=Kg(null,e,i,n,r,t);var s=Zg();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ei(i)?(s=!0,Hf(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Xg(e),r.updater=Td,e.stateNode=r,r._reactInternals=e,Xp(e,i,n,t),e=$p(null,e,i,!0,s,t)):(e.tag=0,Ut&&s&&kg(e),Bn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(cf(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=vw(i),n=ir(i,n),r){case 0:e=jp(null,e,i,n,t);break e;case 1:e=j0(null,e,i,n,t);break e;case 11:e=X0(null,e,i,n,t);break e;case 14:e=Y0(null,e,i,ir(i.type,n),t);break e}throw Error(ue(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ir(i,r),jp(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ir(i,r),j0(n,e,i,r,t);case 3:e:{if(RS(e),n===null)throw Error(ue(387));i=e.pendingProps,s=e.memoizedState,r=s.element,tS(n,e),Yf(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=qa(Error(ue(423)),e),e=$0(n,e,i,t,r);break e}else if(i!==r){r=qa(Error(ue(424)),e),e=$0(n,e,i,t,r);break e}else for(Si=Cs(e.stateNode.containerInfo.firstChild),wi=e,Ut=!0,or=null,t=Jy(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ya(),i===r){e=Zr(n,e,t);break e}Bn(n,e,i,t)}e=e.child}return e;case 5:return nS(e),n===null&&Vp(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Op(i,r)?o=null:s!==null&&Op(i,s)&&(e.flags|=32),CS(n,e),Bn(n,e,o,t),e.child;case 6:return n===null&&Vp(e),null;case 13:return bS(n,e,t);case 4:return Yg(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=ja(e,null,i,t):Bn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ir(i,r),X0(n,e,i,r,t);case 7:return Bn(n,e,e.pendingProps,t),e.child;case 8:return Bn(n,e,e.pendingProps.children,t),e.child;case 12:return Bn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Ct(Wf,i._currentValue),i._currentValue=o,s!==null)if(hr(s.value,o)){if(s.children===r.children&&!Jn.current){e=Zr(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Yr(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Gp(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ue(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Gp(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Bn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Da(e,t),r=$i(r),i=i(r),e.flags|=1,Bn(n,e,i,t),e.child;case 14:return i=e.type,r=ir(i,e.pendingProps),r=ir(i.type,r),Y0(n,e,i,r,t);case 15:return wS(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ir(i,r),cf(n,e),e.tag=1,ei(i)?(n=!0,Hf(e)):n=!1,Da(e,t),MS(e,i,r),Xp(e,i,r,t),$p(null,e,i,!0,n,t);case 19:return PS(n,e,t);case 22:return AS(n,e,t)}throw Error(ue(156,e.tag))};function YS(n,e){return xy(n,e)}function _w(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vi(n,e,t,i){return new _w(n,e,t,i)}function a_(n){return n=n.prototype,!(!n||!n.isReactComponent)}function vw(n){if(typeof n=="function")return a_(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Ag)return 11;if(n===Cg)return 14}return 2}function Ls(n,e){var t=n.alternate;return t===null?(t=Vi(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function hf(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")a_(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case ha:return Eo(t.children,r,s,e);case wg:o=8,r|=8;break;case mp:return n=Vi(12,t,e,r|2),n.elementType=mp,n.lanes=s,n;case gp:return n=Vi(13,t,e,r),n.elementType=gp,n.lanes=s,n;case _p:return n=Vi(19,t,e,r),n.elementType=_p,n.lanes=s,n;case ny:return Cd(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case ey:o=10;break e;case ty:o=9;break e;case Ag:o=11;break e;case Cg:o=14;break e;case ds:o=16,i=null;break e}throw Error(ue(130,n==null?n:typeof n,""))}return e=Vi(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function Eo(n,e,t,i){return n=Vi(7,n,i,e),n.lanes=t,n}function Cd(n,e,t,i){return n=Vi(22,n,i,e),n.elementType=ny,n.lanes=t,n.stateNode={isHidden:!1},n}function hh(n,e,t){return n=Vi(6,n,null,e),n.lanes=t,n}function ph(n,e,t){return e=Vi(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function xw(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$d(0),this.expirationTimes=$d(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$d(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function l_(n,e,t,i,r,s,o,a,l){return n=new xw(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Vi(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xg(s),n}function yw(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:da,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function jS(n){if(!n)return ks;n=n._reactInternals;e:{if(Vo(n)!==n||n.tag!==1)throw Error(ue(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ei(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ue(171))}if(n.tag===1){var t=n.type;if(ei(t))return jy(n,t,e)}return e}function $S(n,e,t,i,r,s,o,a,l){return n=l_(t,i,!0,n,r,s,o,a,l),n.context=jS(null),t=n.current,i=Wn(),r=Ps(t),s=Yr(i,r),s.callback=e??null,Rs(t,s,r),n.current.lanes=r,ju(n,r,i),ti(n,i),n}function Rd(n,e,t,i){var r=e.current,s=Wn(),o=Ps(r);return t=jS(t),e.context===null?e.context=t:e.pendingContext=t,e=Yr(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Rs(r,e,o),n!==null&&(dr(n,r,o,s),af(n,r,o)),o}function ed(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function rv(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function u_(n,e){rv(n,e),(n=n.alternate)&&rv(n,e)}function Sw(){return null}var qS=typeof reportError=="function"?reportError:function(n){console.error(n)};function c_(n){this._internalRoot=n}bd.prototype.render=c_.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(ue(409));Rd(n,e,null,null)};bd.prototype.unmount=c_.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Uo(function(){Rd(null,n,null,null)}),e[qr]=null}};function bd(n){this._internalRoot=n}bd.prototype.unstable_scheduleHydration=function(n){if(n){var e=Ay();n={blockedOn:null,target:n,priority:e};for(var t=0;t<ps.length&&e!==0&&e<ps[t].priority;t++);ps.splice(t,0,n),t===0&&Ry(n)}};function f_(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Pd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function sv(){}function Mw(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=ed(o);s.call(u)}}var o=$S(e,i,n,0,null,!1,!1,"",sv);return n._reactRootContainer=o,n[qr]=o.current,wu(n.nodeType===8?n.parentNode:n),Uo(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=ed(l);a.call(u)}}var l=l_(n,0,!1,null,null,!1,!1,"",sv);return n._reactRootContainer=l,n[qr]=l.current,wu(n.nodeType===8?n.parentNode:n),Uo(function(){Rd(e,l,t,i)}),l}function Ld(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=ed(o);a.call(l)}}Rd(e,o,n,r)}else o=Mw(t,e,n,r,i);return ed(o)}Ty=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Ul(e.pendingLanes);t!==0&&(Pg(e,t|1),ti(e,Kt()),!(pt&6)&&(Ka=Kt()+500,js()))}break;case 13:Uo(function(){var i=Kr(n,1);if(i!==null){var r=Wn();dr(i,n,1,r)}}),u_(n,1)}};Lg=function(n){if(n.tag===13){var e=Kr(n,134217728);if(e!==null){var t=Wn();dr(e,n,134217728,t)}u_(n,134217728)}};wy=function(n){if(n.tag===13){var e=Ps(n),t=Kr(n,e);if(t!==null){var i=Wn();dr(t,n,e,i)}u_(n,e)}};Ay=function(){return yt};Cy=function(n,e){var t=yt;try{return yt=n,e()}finally{yt=t}};Cp=function(n,e,t){switch(e){case"input":if(yp(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Sd(i);if(!r)throw Error(ue(90));ry(i),yp(i,r)}}}break;case"textarea":oy(n,t);break;case"select":e=t.value,e!=null&&Ra(n,!!t.multiple,e,!1)}};hy=r_;py=Uo;var Ew={usingClientEntryPoint:!1,Events:[qu,_a,Sd,fy,dy,r_]},El={findFiberByHostInstance:mo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Tw={bundleType:El.bundleType,version:El.version,rendererPackageName:El.rendererPackageName,rendererConfig:El.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ts.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=_y(n),n===null?null:n.stateNode},findFiberByHostInstance:El.findFiberByHostInstance||Sw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xc.isDisabled&&xc.supportsFiber)try{_d=xc.inject(Tw),Tr=xc}catch{}}Li.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ew;Li.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!f_(e))throw Error(ue(200));return yw(n,e,null,t)};Li.createRoot=function(n,e){if(!f_(n))throw Error(ue(299));var t=!1,i="",r=qS;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=l_(n,1,!1,null,null,t,!1,i,r),n[qr]=e.current,wu(n.nodeType===8?n.parentNode:n),new c_(e)};Li.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(ue(188)):(n=Object.keys(n).join(","),Error(ue(268,n)));return n=_y(e),n=n===null?null:n.stateNode,n};Li.flushSync=function(n){return Uo(n)};Li.hydrate=function(n,e,t){if(!Pd(e))throw Error(ue(200));return Ld(null,n,e,!0,t)};Li.hydrateRoot=function(n,e,t){if(!f_(n))throw Error(ue(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=qS;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=$S(e,null,n,1,t??null,r,!1,s,o),n[qr]=e.current,wu(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new bd(e)};Li.render=function(n,e,t){if(!Pd(e))throw Error(ue(200));return Ld(null,n,e,!1,t)};Li.unmountComponentAtNode=function(n){if(!Pd(n))throw Error(ue(40));return n._reactRootContainer?(Uo(function(){Ld(null,null,n,!1,function(){n._reactRootContainer=null,n[qr]=null})}),!0):!1};Li.unstable_batchedUpdates=r_;Li.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Pd(t))throw Error(ue(200));if(n==null||n._reactInternals===void 0)throw Error(ue(38));return Ld(n,e,t,!1,i)};Li.version="18.3.1-next-f1338f8080-20240426";function KS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(KS)}catch(n){console.error(n)}}KS(),Kx.exports=Li;var ww=Kx.exports,ov=ww;hp.createRoot=ov.createRoot,hp.hydrateRoot=ov.hydrateRoot;function Or(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function ZS(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ai={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Iu={duration:.5,overwrite:!1,delay:0},d_,Mn,Ft,Gi=1e8,At=1/Gi,om=Math.PI*2,Aw=om/4,Cw=0,QS=Math.sqrt,Rw=Math.cos,bw=Math.sin,_n=function(e){return typeof e=="string"},Wt=function(e){return typeof e=="function"},Qr=function(e){return typeof e=="number"},h_=function(e){return typeof e>"u"},br=function(e){return typeof e=="object"},ni=function(e){return e!==!1},p_=function(){return typeof window<"u"},yc=function(e){return Wt(e)||_n(e)},JS=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},In=Array.isArray,Pw=/random\([^)]+\)/g,Lw=/,\s*/g,av=/(?:-?\.?\d|\.)+/gi,eM=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ta=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,mh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,tM=/[+-]=-?[.\d]+/,Dw=/[^,'"\[\]\s]+/gi,Nw=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,zt,_r,am,m_,bi={},td={},nM,iM=function(e){return(td=Za(e,bi))&&ai},g_=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Uu=function(e,t){return!t&&console.warn(e)},rM=function(e,t){return e&&(bi[e]=t)&&td&&(td[e]=t)||bi},Fu=function(){return 0},Iw={suppressEvents:!0,isStart:!0,kill:!1},pf={suppressEvents:!0,kill:!1},Uw={suppressEvents:!0},__={},Ds=[],lm={},sM,_i={},gh={},lv=30,mf=[],v_="",x_=function(e){var t=e[0],i,r;if(br(t)||Wt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=mf.length;r--&&!mf[r].targetTest(t););i=mf[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new CM(e[r],i)))||e.splice(r,1);return e},To=function(e){return e._gsap||x_(Wi(e))[0]._gsap},oM=function(e,t,i){return(i=e[t])&&Wt(i)?e[t]():h_(i)&&e.getAttribute&&e.getAttribute(t)||i},ii=function(e,t){return(e=e.split(",")).forEach(t)||e},qt=function(e){return Math.round(e*1e5)/1e5||0},Ot=function(e){return Math.round(e*1e7)/1e7||0},Ia=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},Fw=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},nd=function(){var e=Ds.length,t=Ds.slice(0),i,r;for(lm={},Ds.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},y_=function(e){return!!(e._initted||e._startAt||e.add)},aM=function(e,t,i,r){Ds.length&&!Mn&&nd(),e.render(t,i,!!(Mn&&t<0&&y_(e))),Ds.length&&!Mn&&nd()},lM=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Dw).length<2?t:_n(e)?e.trim():e},uM=function(e){return e},Pi=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Ow=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Za=function(e,t){for(var i in t)e[i]=t[i];return e},uv=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=br(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},id=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},tu=function(e){var t=e.parent||zt,i=e.keyframes?Ow(In(e.keyframes)):Pi;if(ni(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},kw=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},cM=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},Dd=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},zs=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},wo=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},zw=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},um=function(e,t,i,r){return e._startAt&&(Mn?e._startAt.revert(pf):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},Bw=function n(e){return!e||e._ts&&n(e.parent)},cv=function(e){return e._repeat?Qa(e._tTime,e=e.duration()+e._rDelay)*e:0},Qa=function(e,t){var i=Math.floor(e=Ot(e/t));return e&&i===e?i-1:i},rd=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Nd=function(e){return e._end=Ot(e._start+(e._tDur/Math.abs(e._ts||e._rts||At)||0))},Id=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Ot(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Nd(e),i._dirty||wo(i,e)),e},fM=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=rd(e.rawTime(),t),(!t._dur||Zu(0,t.totalDuration(),i)-t._tTime>At)&&t.render(i,!0)),wo(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-At}},Sr=function(e,t,i,r){return t.parent&&zs(t),t._start=Ot((Qr(i)?i:i||e!==zt?Ui(e,i,t):e._time)+t._delay),t._end=Ot(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),cM(e,t,"_first","_last",e._sort?"_start":0),cm(t)||(e._recent=t),r||fM(e,t),e._ts<0&&Id(e,e._tTime),e},dM=function(e,t){return(bi.ScrollTrigger||g_("scrollTrigger",t))&&bi.ScrollTrigger.create(t,e)},hM=function(e,t,i,r,s){if(M_(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!Mn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&sM!==xi.frame)return Ds.push(e),e._lazy=[s,r],1},Hw=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},cm=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Vw=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&Hw(e)&&!(!e._initted&&cm(e))||(e._ts<0||e._dp._ts<0)&&!cm(e))?0:1,a=e._rDelay,l=0,u,c,f;if(a&&e._repeat&&(l=Zu(0,e._tDur,t),c=Qa(l,a),e._yoyo&&c&1&&(o=1-o),c!==Qa(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Mn||r||e._zTime===At||!t&&e._zTime){if(!e._initted&&hM(e,t,r,i,l))return;for(f=e._zTime,e._zTime=t||(i?At:0),i||(i=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&um(e,t,i,!0),e._onUpdate&&!i&&Mi(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Mi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&zs(e,1),!i&&!Mn&&(Mi(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Gw=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Ja=function(e,t,i,r){var s=e._repeat,o=Ot(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Ot(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Id(e,e._tTime=e._tDur*a),e.parent&&Nd(e),i||wo(e.parent,e),e},fv=function(e){return e instanceof Zn?wo(e):Ja(e,e._dur)},Ww={_start:0,endTime:Fu,totalDuration:Fu},Ui=function n(e,t,i){var r=e.labels,s=e._recent||Ww,o=e.duration()>=Gi?s.endTime(!1):e._dur,a,l,u;return _n(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*(In(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},nu=function(e,t,i){var r=Qr(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ni(l.vars.inherit)&&l.parent;o.immediateRender=ni(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new nn(t[0],o,t[s+1])},$s=function(e,t){return e||e===0?t(e):t},Zu=function(e,t,i){return i<e?e:i>t?t:i},Dn=function(e,t){return!_n(e)||!(t=Nw.exec(e))?"":t[1]},Xw=function(e,t,i){return $s(i,function(r){return Zu(e,t,r)})},fm=[].slice,pM=function(e,t){return e&&br(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&br(e[0]))&&!e.nodeType&&e!==_r},Yw=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return _n(r)&&!t||pM(r,1)?(s=i).push.apply(s,Wi(r)):i.push(r)})||i},Wi=function(e,t,i){return Ft&&!t&&Ft.selector?Ft.selector(e):_n(e)&&!i&&(am||!el())?fm.call((t||m_).querySelectorAll(e),0):In(e)?Yw(e,i):pM(e)?fm.call(e,0):e?[e]:[]},dm=function(e){return e=Wi(e)[0]||Uu("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Wi(t,i.querySelectorAll?i:i===e?Uu("Invalid scope")||m_.createElement("div"):e)}},mM=function(e){return e.sort(function(){return .5-Math.random()})},gM=function(e){if(Wt(e))return e;var t=br(e)?e:{each:e},i=Ao(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=t.axis,c=r,f=r;return _n(r)?c=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],f=r[1]),function(d,h,g){var _=(g||t).length,m=o[_],p,v,x,S,C,w,M,R,N;if(!m){if(N=t.grid==="auto"?0:(t.grid||[1,Gi])[1],!N){for(M=-Gi;M<(M=g[N++].getBoundingClientRect().left)&&N<_;);N<_&&N--}for(m=o[_]=[],p=l?Math.min(N,_)*c-.5:r%N,v=N===Gi?0:l?_*f/N-.5:r/N|0,M=0,R=Gi,w=0;w<_;w++)x=w%N-p,S=v-(w/N|0),m[w]=C=u?Math.abs(u==="y"?S:x):QS(x*x+S*S),C>M&&(M=C),C<R&&(R=C);r==="random"&&mM(m),m.max=M-R,m.min=R,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(N>_?_-1:u?u==="y"?_/N:N:Math.max(N,_/N))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Dn(t.amount||t.each)||0,i=i&&_<0?sA(i):i}return _=(m[d]-m.min)/m.max||0,Ot(m.b+(i?i(_):_)*m.v)+m.u}},hm=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Ot(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(Qr(i)?0:Dn(i))}},_M=function(e,t){var i=In(e),r,s;return!i&&br(e)&&(r=i=e.radius||Gi,e.values?(e=Wi(e.values),(s=!Qr(e[0]))&&(r*=r)):e=hm(e.increment)),$s(t,i?Wt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=Gi,c=0,f=e.length,d,h;f--;)s?(d=e[f].x-a,h=e[f].y-l,d=d*d+h*h):d=Math.abs(e[f]-a),d<u&&(u=d,c=f);return c=!r||u<=r?e[c]:o,s||c===o||Qr(o)?c:c+Dn(o)}:hm(e))},vM=function(e,t,i,r){return $s(In(e)?!t:i===!0?!!(i=0):!r,function(){return In(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},jw=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},$w=function(e,t){return function(i){return e(parseFloat(i))+(t||Dn(i))}},qw=function(e,t,i){return yM(e,t,0,1,i)},xM=function(e,t,i){return $s(i,function(r){return e[~~t(r)]})},Kw=function n(e,t,i){var r=t-e;return In(e)?xM(e,n(0,e.length),t):$s(i,function(s){return(r+(s-e)%r)%r+e})},Zw=function n(e,t,i){var r=t-e,s=r*2;return In(e)?xM(e,n(0,e.length-1),t):$s(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Ou=function(e){return e.replace(Pw,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(Lw);return vM(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},yM=function(e,t,i,r,s){var o=t-e,a=r-i;return $s(s,function(l){return i+((l-e)/o*a||0)})},Qw=function n(e,t,i,r){var s=isNaN(e+t)?0:function(h){return(1-h)*e+h*t};if(!s){var o=_n(e),a={},l,u,c,f,d;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(In(e)&&!In(t)){for(c=[],f=e.length,d=f-2,u=1;u<f;u++)c.push(n(e[u-1],e[u]));f--,s=function(g){g*=f;var _=Math.min(d,~~g);return c[_](g-_)},i=t}else r||(e=Za(In(e)?[]:{},e));if(!c){for(l in t)S_.call(a,e,l,"get",t[l]);s=function(g){return w_(g,a)||(o?e.p:e)}}}return $s(i,s)},dv=function(e,t,i){var r=e.labels,s=Gi,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Mi=function(e,t,i){var r=e.vars,s=r[t],o=Ft,a=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&Ds.length&&nd(),a&&(Ft=a),c=l?s.apply(u,l):s.call(u),Ft=o,c},Ol=function(e){return zs(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Mn),e.progress()<1&&Mi(e,"onInterrupt"),e},wa,SM=[],MM=function(e){if(e)if(e=!e.name&&e.default||e,p_()||e.headless){var t=e.name,i=Wt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:Fu,render:w_,add:S_,kill:mA,modifier:pA,rawVars:0},o={targetTest:0,get:0,getSetter:T_,aliases:{},register:0};if(el(),e!==r){if(_i[t])return;Pi(r,Pi(id(e,s),o)),Za(r.prototype,Za(s,id(e,o))),_i[r.prop=t]=r,e.targetTest&&(mf.push(r),__[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}rM(t,r),e.register&&e.register(ai,r,ri)}else SM.push(e)},wt=255,kl={aqua:[0,wt,wt],lime:[0,wt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,wt],navy:[0,0,128],white:[wt,wt,wt],olive:[128,128,0],yellow:[wt,wt,0],orange:[wt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[wt,0,0],pink:[wt,192,203],cyan:[0,wt,wt],transparent:[wt,wt,wt,0]},_h=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*wt+.5|0},EM=function(e,t,i){var r=e?Qr(e)?[e>>16,e>>8&wt,e&wt]:0:kl.black,s,o,a,l,u,c,f,d,h,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),kl[e])r=kl[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&wt,r&wt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&wt,e&wt]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(av),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=_h(l+1/3,s,o),r[1]=_h(l,s,o),r[2]=_h(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(eM),i&&r.length<4&&(r[3]=1),r}else r=e.match(av)||kl.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/wt,o=r[1]/wt,a=r[2]/wt,f=Math.max(s,o,a),d=Math.min(s,o,a),c=(f+d)/2,f===d?l=u=0:(h=f-d,u=c>.5?h/(2-f-d):h/(f+d),l=f===s?(o-a)/h+(o<a?6:0):f===o?(a-s)/h+2:(s-o)/h+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},TM=function(e){var t=[],i=[],r=-1;return e.split(Ns).forEach(function(s){var o=s.match(Ta)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},hv=function(e,t,i){var r="",s=(e+r).match(Ns),o=t?"hsla(":"rgba(",a=0,l,u,c,f;if(!s)return e;if(s=s.map(function(d){return(d=EM(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),i&&(c=TM(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(Ns,"1").split(Ta),f=u.length-1;a<f;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(Ns),f=u.length-1;a<f;a++)r+=u[a]+s[a];return r+u[f]},Ns=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in kl)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),Jw=/hsl[a]?\(/,wM=function(e){var t=e.join(" "),i;if(Ns.lastIndex=0,Ns.test(t))return i=Jw.test(t),e[1]=hv(e[1],i),e[0]=hv(e[0],i,TM(e[1])),!0},ku,xi=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,f,d,h,g=function _(m){var p=n()-r,v=m===!0,x,S,C,w;if((p>e||p<0)&&(i+=p-t),r+=p,C=r-i,x=C-o,(x>0||v)&&(w=++f.frame,d=C-f.time*1e3,f.time=C=C/1e3,o+=x+(x>=s?4:s-x),S=1),v||(l=u(_)),S)for(h=0;h<a.length;h++)a[h](C,d,w,m)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){nM&&(!am&&p_()&&(_r=am=window,m_=_r.document||{},bi.gsap=ai,(_r.gsapVersions||(_r.gsapVersions=[])).push(ai.version),iM(td||_r.GreenSockGlobals||!_r.gsap&&_r||{}),SM.forEach(MM)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),u=c||function(m){return setTimeout(m,o-f.time*1e3+1|0)},ku=1,g(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),ku=0,u=Fu},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=f.time*1e3+s},add:function(m,p,v){var x=p?function(S,C,w,M){m(S,C,w,M),f.remove(x)}:m;return f.remove(m),a[v?"unshift":"push"](x),el(),x},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&h>=p&&h--},_listeners:a},f}(),el=function(){return!ku&&xi.wake()},ft={},eA=/^[\d.\-M][\d.\-,\s]/,tA=/["']/g,nA=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[r]=isNaN(u)?u.replace(tA,"").trim():+u,r=l.substr(a+1).trim();return t},iA=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},rA=function(e){var t=(e+"").split("("),i=ft[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[nA(t[1])]:iA(e).split(",").map(lM)):ft._CE&&eA.test(e)?ft._CE("",e):i},sA=function(e){return function(t){return 1-e(1-t)}},Ao=function(e,t){return e&&(Wt(e)?e:ft[e]||rA(e))||t},Go=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return ii(e,function(a){ft[a]=bi[a]=s,ft[o=a.toLowerCase()]=i;for(var l in s)ft[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ft[a+"."+l]=s[l]}),s},AM=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},vh=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/om*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*bw((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:AM(a);return s=om/s,l.config=function(u,c){return n(e,u,c)},l},xh=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:AM(i);return r.config=function(s){return n(e,s)},r};ii("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Go(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});ft.Linear.easeNone=ft.none=ft.Linear.easeIn;Go("Elastic",vh("in"),vh("out"),vh());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};Go("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Go("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});Go("Circ",function(n){return-(QS(1-n*n)-1)});Go("Sine",function(n){return n===1?1:-Rw(n*Aw)+1});Go("Back",xh("in"),xh("out"),xh());ft.SteppedEase=ft.steps=bi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-At;return function(a){return((r*Zu(0,o,a)|0)+s)*i}}};Iu.ease=ft["quad.out"];ii("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return v_+=n+","+n+"Params,"});var CM=function(e,t){this.id=Cw++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:oM,this.set=t?t.getSetter:T_},zu=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ja(this,+t.duration,1,1),this.data=t.data,Ft&&(this._ctx=Ft,Ft.data.push(this)),ku||xi.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Ja(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(el(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Id(this,i),!s._dp||s.parent||fM(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Sr(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===At||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),aM(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+cv(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+cv(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Qa(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-At?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?rd(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-At?0:this._rts,this.totalTime(Zu(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Nd(this),zw(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(el(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==At&&(this._tTime-=At)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=Ot(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Sr(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(ni(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?rd(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=Uw);var r=Mn;return Mn=i,y_(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Mn=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,fv(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,fv(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Ui(this,i),ni(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,ni(r)),this._dur||(this._zTime=-At),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-At:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-At,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-At)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(o){var a=Wt(i)?i:uM,l=function(){var c=r.then;r.then=null,s&&s(),Wt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=c),o(a),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){Ol(this)},n}();Pi(zu.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-At,_prom:0,_ps:!1,_rts:1});var Zn=function(n){ZS(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=ni(i.sortChildren),zt&&Sr(i.parent||zt,Or(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&dM(Or(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return nu(0,arguments,this),this},t.from=function(r,s,o){return nu(1,arguments,this),this},t.fromTo=function(r,s,o,a){return nu(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,tu(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new nn(r,s,Ui(this,o),1),this},t.call=function(r,s,o){return Sr(this,nn.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new nn(r,o,Ui(this,l)),this},t.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,tu(o).immediateRender=ni(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},t.staggerFromTo=function(r,s,o,a,l,u,c,f){return a.startAt=o,tu(a).immediateRender=ni(a.immediateRender),this.staggerTo(r,s,a,l,u,c,f)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:Ot(r),f=this._zTime<0!=r<0&&(this._initted||!u),d,h,g,_,m,p,v,x,S,C,w,M;if(this!==zt&&c>l&&r>=0&&(c=l),c!==this._tTime||o||f){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),d=c,S=this._start,x=this._ts,p=!x,f&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(w=this._yoyo,m=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(d=Ot(c%m),c===l?(_=this._repeat,d=u):(C=Ot(c/m),_=~~C,_&&_===C&&(d=u,_--),d>u&&(d=u)),C=Qa(this._tTime,m),!a&&this._tTime&&C!==_&&this._tTime-C*m-this._dur<=0&&(C=_),w&&_&1&&(d=u-d,M=1),_!==C&&!this._lock){var R=w&&C&1,N=R===(w&&_&1);if(_<C&&(R=!R),a=R?0:c%u?u:c,this._lock=1,this.render(a||(M?0:Ot(_*m)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&Mi(this,"onRepeat"),this.vars.repeatRefresh&&!M&&(this.invalidate()._lock=1,C=_),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,N&&(this._lock=2,a=R?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!M&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=Gw(this,Ot(a),Ot(d)),v&&(c-=d-(d=v._start))),this._tTime=c,this._time=d,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&c&&u&&!s&&!C&&(Mi(this,"onStart"),this._tTime!==c))return this;if(d>=a&&r>=0)for(h=this._first;h;){if(g=h._next,(h._act||d>=h._start)&&h._ts&&v!==h){if(h.parent!==this)return this.render(r,s,o);if(h.render(h._ts>0?(d-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(d-h._start)*h._ts,s,o),d!==this._time||!this._ts&&!p){v=0,g&&(c+=this._zTime=-At);break}}h=g}else{h=this._last;for(var y=r<0?r:d;h;){if(g=h._prev,(h._act||y<=h._end)&&h._ts&&v!==h){if(h.parent!==this)return this.render(r,s,o);if(h.render(h._ts>0?(y-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(y-h._start)*h._ts,s,o||Mn&&y_(h)),d!==this._time||!this._ts&&!p){v=0,g&&(c+=this._zTime=y?-At:At);break}}h=g}}if(v&&!s&&(this.pause(),v.render(d>=a?0:-At)._zTime=d>=a?1:-1,this._ts))return this._start=S,Nd(this),this.render(r,s,o);this._onUpdate&&!s&&Mi(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(S===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&zs(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(Mi(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(Qr(s)||(s=Ui(this,s,r)),!(r instanceof zu)){if(In(r))return r.forEach(function(a){return o.add(a,s)}),this;if(_n(r))return this.addLabel(r,s);if(Wt(r))r=nn.delayedCall(0,r);else return this}return this!==r?Sr(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Gi);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof nn?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return _n(r)?this.removeLabel(r):Wt(r)?this.killTweensOf(r):(r.parent===this&&Dd(this,r),r===this._recent&&(this._recent=this._last),wo(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ot(xi.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Ui(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=nn.delayedCall(0,s||Fu,o);return a.data="isPause",this._hasPause=1,Sr(this,a,Ui(this,r))},t.removePause=function(r){var s=this._first;for(r=Ui(this,r);s;)s._start===r&&s.data==="isPause"&&zs(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)xs!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Wi(r),l=this._first,u=Qr(s),c;l;)l instanceof nn?Fw(l._targets,a)&&(u?(!xs||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Ui(o,r),l=s,u=l.startAt,c=l.onStart,f=l.onStartParams,d=l.immediateRender,h,g=nn.to(o,Pi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||At,onStart:function(){if(o.pause(),!h){var m=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());g._dur!==m&&Ja(g,m,0,1).render(g._time,!0,!0),h=1}c&&c.apply(g,f||[])}},s));return d?g.render(0):g},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Pi({startAt:{time:Ui(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),dv(this,Ui(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),dv(this,Ui(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+At)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,u;for(r=Ot(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return wo(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),wo(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Gi,u,c,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Sr(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=Ot(c/o._ts),o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;Ja(o,o===zt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(zt._ts&&(aM(zt,rd(r,zt)),sM=xi.frame),xi.frame>=lv){lv+=Ai.autoSleep||120;var s=zt._first;if((!s||!s._ts)&&Ai.autoSleep&&xi._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||xi.sleep()}}},e}(zu);Pi(Zn.prototype,{_lock:0,_hasPause:0,_forcing:0});var oA=function(e,t,i,r,s,o,a){var l=new ri(this._pt,e,t,0,1,NM,null,s),u=0,c=0,f,d,h,g,_,m,p,v;for(l.b=i,l.e=r,i+="",r+="",(p=~r.indexOf("random("))&&(r=Ou(r)),o&&(v=[i,r],o(v,e,t),i=v[0],r=v[1]),d=i.match(mh)||[];f=mh.exec(r);)g=f[0],_=r.substring(u,f.index),h?h=(h+1)%5:_.substr(-5)==="rgba("&&(h=1),g!==d[c++]&&(m=parseFloat(d[c-1])||0,l._pt={_next:l._pt,p:_||c===1?_:",",s:m,c:g.charAt(1)==="="?Ia(m,g)-m:parseFloat(g)-m,m:h&&h<4?Math.round:0},u=mh.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(tM.test(r)||p)&&(l.e=0),this._pt=l,l},S_=function(e,t,i,r,s,o,a,l,u,c){Wt(r)&&(r=r(s||0,e,o));var f=e[t],d=i!=="get"?i:Wt(f)?u?e[t.indexOf("set")||!Wt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():f,h=Wt(f)?u?fA:LM:E_,g;if(_n(r)&&(~r.indexOf("random(")&&(r=Ou(r)),r.charAt(1)==="="&&(g=Ia(d,r)+(Dn(d)||0),(g||g===0)&&(r=g))),!c||d!==r||pm)return!isNaN(d*r)&&r!==""?(g=new ri(this._pt,e,t,+d||0,r-(d||0),typeof f=="boolean"?hA:DM,0,h),u&&(g.fp=u),a&&g.modifier(a,this,e),this._pt=g):(!f&&!(t in e)&&g_(t,r),oA.call(this,e,t,d,r,h,l||Ai.stringFilter,u))},aA=function(e,t,i,r,s){if(Wt(e)&&(e=iu(e,s,t,i,r)),!br(e)||e.style&&e.nodeType||In(e)||JS(e))return _n(e)?iu(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=iu(e[a],s,t,i,r);return o},RM=function(e,t,i,r,s,o){var a,l,u,c;if(_i[e]&&(a=new _i[e]).init(s,a.rawVars?t[e]:aA(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new ri(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==wa))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},xs,pm,M_=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,f=r.yoyoEase,d=r.keyframes,h=r.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,v=p&&p.data==="nested"?p.vars.targets:m,x=e._overwrite==="auto"&&!d_,S=e.timeline,C=r.easeReverse||f,w,M,R,N,y,T,I,B,X,Z,H,Y,D;if(S&&(!d||!s)&&(s="none"),e._ease=Ao(s,Iu.ease),e._rEase=C&&(Ao(C)||e._ease),e._from=!S&&!!r.runBackwards,e._from&&(e.ratio=1),!S||d&&!r.stagger){if(B=m[0]?To(m[0]).harness:0,Y=B&&r[B.prop],w=id(r,__),_&&(_._zTime<0&&_.progress(1),t<0&&c&&a&&!h?_.render(-1,!0):_.revert(c&&g?pf:Iw),_._lazy=0),o){if(zs(e._startAt=nn.set(m,Pi({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&ni(l),startAt:null,delay:0,onUpdate:u&&function(){return Mi(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Mn||!a&&!h)&&e._startAt.revert(pf),a&&g&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&g&&!_){if(t&&(a=!1),R=Pi({overwrite:!1,data:"isFromStart",lazy:a&&!_&&ni(l),immediateRender:a,stagger:0,parent:p},w),Y&&(R[B.prop]=Y),zs(e._startAt=nn.set(m,R)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Mn?e._startAt.revert(pf):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,At,At);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&ni(l)||l&&!g,M=0;M<m.length;M++){if(y=m[M],I=y._gsap||x_(m)[M]._gsap,e._ptLookup[M]=Z={},lm[I.id]&&Ds.length&&nd(),H=v===m?M:v.indexOf(y),B&&(X=new B).init(y,Y||w,e,H,v)!==!1&&(e._pt=N=new ri(e._pt,y,X.name,0,1,X.render,X,0,X.priority),X._props.forEach(function($){Z[$]=N}),X.priority&&(T=1)),!B||Y)for(R in w)_i[R]&&(X=RM(R,w,e,H,y,v))?X.priority&&(T=1):Z[R]=N=S_.call(e,y,R,"get",w[R],H,v,0,r.stringFilter);e._op&&e._op[M]&&e.kill(y,e._op[M]),x&&e._pt&&(xs=e,zt.killTweensOf(y,Z,e.globalTime(t)),D=!e.parent,xs=0),e._pt&&l&&(lm[I.id]=1)}T&&IM(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!D,d&&t<=0&&S.render(Gi,!0,!0)},lA=function(e,t,i,r,s,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,f,d,h;if(!u)for(u=e._ptCache[t]=[],d=e._ptLookup,h=e._targets.length;h--;){if(c=d[h][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return pm=1,e.vars[t]="+=0",M_(e,a),pm=0,l?Uu(t+" not eligible for reset. Try splitting into individual properties"):1;u.push(c)}for(h=u.length;h--;)f=u[h],c=f._pt||f,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=i-c.s,f.e&&(f.e=qt(i)+Dn(f.e)),f.b&&(f.b=c.s+Dn(f.b))},uA=function(e,t){var i=e[0]?To(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=Za({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},cA=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(In(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},iu=function(e,t,i,r,s){return Wt(e)?e.call(t,i,r,s):_n(e)&&~e.indexOf("random(")?Ou(e):e},bM=v_+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",PM={};ii(bM+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return PM[n]=1});var nn=function(n){ZS(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:tu(r))||this;var l=a.vars,u=l.duration,c=l.delay,f=l.immediateRender,d=l.stagger,h=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=r.parent||zt,v=(In(i)||JS(i)?Qr(i[0]):"length"in r)?[i]:Wi(i),x,S,C,w,M,R,N,y;if(a._targets=v.length?x_(v):Uu("GSAP target "+i+" not found. https://gsap.com",!Ai.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=h,g||d||yc(u)||yc(c)){r=a.vars;var T=r.easeReverse||r.yoyoEase;if(x=a.timeline=new Zn({data:"nested",defaults:_||{},targets:p&&p.data==="nested"?p.vars.targets:v}),x.kill(),x.parent=x._dp=Or(a),x._start=0,d||yc(u)||yc(c)){if(w=v.length,N=d&&gM(d),br(d))for(M in d)~bM.indexOf(M)&&(y||(y={}),y[M]=d[M]);for(S=0;S<w;S++)C=id(r,PM),C.stagger=0,T&&(C.easeReverse=T),y&&Za(C,y),R=v[S],C.duration=+iu(u,Or(a),S,R,v),C.delay=(+iu(c,Or(a),S,R,v)||0)-a._delay,!d&&w===1&&C.delay&&(a._delay=c=C.delay,a._start+=c,C.delay=0),x.to(R,C,N?N(S,R,v):0),x._ease=ft.none;x.duration()?u=c=0:a.timeline=0}else if(g){tu(Pi(x.vars.defaults,{ease:"none"})),x._ease=Ao(g.ease||r.ease||"none");var I=0,B,X,Z;if(In(g))g.forEach(function(H){return x.to(v,H,">")}),x.duration();else{C={};for(M in g)M==="ease"||M==="easeEach"||cA(M,g[M],C,g.easeEach);for(M in C)for(B=C[M].sort(function(H,Y){return H.t-Y.t}),I=0,S=0;S<B.length;S++)X=B[S],Z={ease:X.e,duration:(X.t-(S?B[S-1].t:0))/100*u},Z[M]=X.v,x.to(v,Z,I),I+=Z.duration;x.duration()<u&&x.to({},{duration:u-x.duration()})}}u||a.duration(u=x.duration())}else a.timeline=0;return h===!0&&!d_&&(xs=Or(a),zt.killTweensOf(v),xs=0),Sr(p,Or(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!u&&!g&&a._start===Ot(p._time)&&ni(f)&&Bw(Or(a))&&p.data!=="nested")&&(a._tTime=-At,a.render(Math.max(0,-c)||0)),m&&dM(Or(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,f=r>l-At&&!c?l:r<At?0:r,d,h,g,_,m,p,v,x;if(!u)Vw(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(d=f,x=this.timeline,this._repeat){if(_=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(_*100+r,s,o);if(d=Ot(f%_),f===l?(g=this._repeat,d=u):(m=Ot(f/_),g=~~m,g&&g===m?(d=u,g--):d>u&&(d=u)),p=this._yoyo&&g&1,p&&(d=u-d),m=Qa(this._tTime,_),d===a&&!o&&this._initted&&g===m)return this._tTime=f,this;g!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&d!==_&&this._initted&&(this._lock=o=1,this.render(Ot(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(hM(this,c?r:d,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._rEase){var S=d<a;if(S!==this._inv){var C=S?a:u-a;this._inv=S,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=C?(S?-1:1)/C:0,this._invScale=S?-this.ratio:1-this.ratio,this._invEase=S?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(d/u);if(this._from&&(this.ratio=v=1-v),this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&f&&!s&&!m&&(Mi(this,"onStart"),this._tTime!==f))return this;for(h=this._pt;h;)h.r(v,h.d),h=h._next;x&&x.render(r<0?r:x._dur*x._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&um(this,r,s,o),Mi(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Mi(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(c&&!this._onUpdate&&um(this,r,!0,!0),(r||!u)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&zs(this,1),!s&&!(c&&!a)&&(f||a||p)&&(Mi(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){ku||xi.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||M_(this,u),c=this._ease(u/this._dur),lA(this,r,s,o,a,c,u,l)?this.resetTo(r,s,o,a,1):(Id(this,0),this.parent||cM(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ol(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Mn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,xs&&xs.vars.overwrite!==!0)._first||Ol(this),this.parent&&o!==this.timeline.totalDuration()&&Ja(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Wi(r):a,u=this._ptLookup,c=this._pt,f,d,h,g,_,m,p;if((!s||s==="all")&&kw(a,l))return s==="all"&&(this._pt=0),Ol(this);for(f=this._op=this._op||[],s!=="all"&&(_n(s)&&(_={},ii(s,function(v){return _[v]=1}),s=_),s=uA(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){d=u[p],s==="all"?(f[p]=s,g=d,h={}):(h=f[p]=f[p]||{},g=s);for(_ in g)m=d&&d[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Dd(this,m,"_pt"),delete d[_]),h!=="all"&&(h[_]=1)}return this._initted&&!this._pt&&c&&Ol(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return nu(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return nu(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return zt.killTweensOf(r,s,o)},e}(zu);Pi(nn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ii("staggerTo,staggerFrom,staggerFromTo",function(n){nn[n]=function(){var e=new Zn,t=fm.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var E_=function(e,t,i){return e[t]=i},LM=function(e,t,i){return e[t](i)},fA=function(e,t,i,r){return e[t](r.fp,i)},dA=function(e,t,i){return e.setAttribute(t,i)},T_=function(e,t){return Wt(e[t])?LM:h_(e[t])&&e.setAttribute?dA:E_},DM=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},hA=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},NM=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},w_=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},pA=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},mA=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Dd(this,t,"_pt"):t.dep||(i=1),t=r;return!i},gA=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},IM=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},ri=function(){function n(t,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||DM,this.d=l||this,this.set=u||E_,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=gA,this.m=i,this.mt=s,this.tween=r},n}();ii(v_+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(n){return __[n]=1});bi.TweenMax=bi.TweenLite=nn;bi.TimelineLite=bi.TimelineMax=Zn;zt=new Zn({sortChildren:!1,defaults:Iu,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ai.stringFilter=wM;var Co=[],gf={},_A=[],pv=0,vA=0,yh=function(e){return(gf[e]||_A).map(function(t){return t()})},mm=function(){var e=Date.now(),t=[];e-pv>2&&(yh("matchMediaInit"),Co.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=_r.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),yh("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),pv=e,yh("matchMedia"))},UM=function(){function n(t,i){this.selector=i&&dm(i),this.data=[],this._r=[],this.isReverted=!1,this.id=vA++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){Wt(i)&&(s=r,r=i,i=Wt);var o=this,a=function(){var u=Ft,c=o.selector,f;return u&&u!==o&&u.data.push(o),s&&(o.selector=dm(s)),Ft=o,f=r.apply(o,arguments),Wt(f)&&o._r.push(f),Ft=u,o.selector=c,o.isReverted=!1,f};return o.last=a,i===Wt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=Ft;Ft=null,i(this),Ft=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof nn&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,f){return f.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof Zn?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof nn)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=Co.length;o--;)Co[o].id===this.id&&Co.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),xA=function(){function n(t){this.contexts=[],this.scope=t,Ft&&Ft.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){br(i)||(i={matches:i});var o=new UM(0,s||this.scope),a=o.conditions={},l,u,c;Ft&&!o.selector&&(o.selector=Ft.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=_r.matchMedia(i[u]),l&&(Co.indexOf(o)<0&&Co.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(mm):l.addEventListener("change",mm)));return c&&r(o,function(f){return o.add(null,f)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),sd={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return MM(r)})},timeline:function(e){return new Zn(e)},getTweensOf:function(e,t){return zt.getTweensOf(e,t)},getProperty:function(e,t,i,r){_n(e)&&(e=Wi(e)[0]);var s=To(e||{}).get,o=i?uM:lM;return i==="native"&&(i=""),e&&(t?o((_i[t]&&_i[t].get||s)(e,t,i,r)):function(a,l,u){return o((_i[a]&&_i[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=Wi(e),e.length>1){var r=e.map(function(c){return ai.quickSetter(c,t,i)}),s=r.length;return function(c){for(var f=s;f--;)r[f](c)}}e=e[0]||{};var o=_i[t],a=To(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var f=new o;wa._pt=0,f.init(e,i?c+i:c,wa,0,[e]),f.render(1,f),wa._pt&&w_(1,wa)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var r,s=ai.to(e,Pi((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,u,c){return s.resetTo(t,l,u,c)};return o.tween=s,o},isTweening:function(e){return zt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ao(e.ease,Iu.ease)),uv(Iu,e||{})},config:function(e){return uv(Ai,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!_i[a]&&!bi[a]&&Uu(t+" effect requires "+a+" plugin.")}),gh[t]=function(a,l,u){return i(Wi(a),Pi(l||{},s),u)},o&&(Zn.prototype[t]=function(a,l,u){return this.add(gh[t](a,br(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){ft[e]=Ao(t)},parseEase:function(e,t){return arguments.length?Ao(e,t):ft},getById:function(e){return zt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Zn(e),r,s;for(i.smoothChildTiming=ni(e.smoothChildTiming),zt.remove(i),i._dp=0,i._time=i._tTime=zt._time,r=zt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof nn&&r.vars.onComplete===r._targets[0]))&&Sr(i,r,r._start-r._delay),r=s;return Sr(zt,i,0),i},context:function(e,t){return e?new UM(e,t):Ft},matchMedia:function(e){return new xA(e)},matchMediaRefresh:function(){return Co.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||mm()},addEventListener:function(e,t){var i=gf[e]||(gf[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=gf[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:Kw,wrapYoyo:Zw,distribute:gM,random:vM,snap:_M,normalize:qw,getUnit:Dn,clamp:Xw,splitColor:EM,toArray:Wi,selector:dm,mapRange:yM,pipe:jw,unitize:$w,interpolate:Qw,shuffle:mM},install:iM,effects:gh,ticker:xi,updateRoot:Zn.updateRoot,plugins:_i,globalTimeline:zt,core:{PropTween:ri,globals:rM,Tween:nn,Timeline:Zn,Animation:zu,getCache:To,_removeLinkedListItem:Dd,reverting:function(){return Mn},context:function(e){return e&&Ft&&(Ft.data.push(e),e._ctx=Ft),Ft},suppressOverwrites:function(e){return d_=e}}};ii("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return sd[n]=nn[n]});xi.add(Zn.updateRoot);wa=sd.to({},{duration:0});var yA=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},SA=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=yA(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},Sh=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(_n(s)&&(l={},ii(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}SA(a,s)}}}},ai=sd.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)Mn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Sh("roundProps",hm),Sh("modifiers"),Sh("snap",_M))||sd;nn.version=Zn.version=ai.version="3.15.0";nM=1;p_()&&el();ft.Power0;ft.Power1;ft.Power2;ft.Power3;ft.Power4;ft.Linear;ft.Quad;ft.Cubic;ft.Quart;ft.Quint;ft.Strong;ft.Elastic;ft.Back;ft.SteppedEase;ft.Bounce;ft.Sine;ft.Expo;ft.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var mv,ys,Ua,A_,vo,gv,C_,MA=function(){return typeof window<"u"},Jr={},ao=180/Math.PI,Fa=Math.PI/180,Yo=Math.atan2,_v=1e8,R_=/([A-Z])/g,EA=/(left|right|width|margin|padding|x)/i,TA=/[\s,\(]\S/,Mr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},gm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},wA=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},AA=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},CA=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},RA=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},FM=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},OM=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},bA=function(e,t,i){return e.style[t]=i},PA=function(e,t,i){return e.style.setProperty(t,i)},LA=function(e,t,i){return e._gsap[t]=i},DA=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},NA=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},IA=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},Bt="transform",si=Bt+"Origin",UA=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in Jr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Mr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=zr(r,a)}):this.tfm[e]=o.x?o[e]:zr(r,e),e===si&&(this.tfm.zOrigin=o.zOrigin);else return Mr.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(Bt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(si,t,"")),e=Bt}(s||t)&&this.props.push(e,t,s[e])},kM=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},FA=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(R_,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=C_(),(!s||!s.isStart)&&!i[Bt]&&(kM(i),r.zOrigin&&i[si]&&(i[si]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},zM=function(e,t){var i={target:e,props:[],revert:FA,save:UA};return e._gsap||ai.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},BM,_m=function(e,t){var i=ys.createElementNS?ys.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ys.createElement(e);return i&&i.style?i:ys.createElement(e)},Ei=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(R_,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,tl(t)||t,1)||""},vv="O,Moz,ms,Ms,Webkit".split(","),tl=function(e,t,i){var r=t||vo,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(vv[o]+e in s););return o<0?null:(o===3?"ms":o>=0?vv[o]:"")+e},vm=function(){MA()&&window.document&&(mv=window,ys=mv.document,Ua=ys.documentElement,vo=_m("div")||{style:{}},_m("div"),Bt=tl(Bt),si=Bt+"Origin",vo.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",BM=!!tl("perspective"),C_=ai.core.reverting,A_=1)},xv=function(e){var t=e.ownerSVGElement,i=_m("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),Ua.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),Ua.removeChild(i),s},yv=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},HM=function(e){var t,i;try{t=e.getBBox()}catch{t=xv(e),i=1}return t&&(t.width||t.height)||i||(t=xv(e)),t&&!t.width&&!t.x&&!t.y?{x:+yv(e,["x","cx","x1"])||0,y:+yv(e,["y","cy","y1"])||0,width:0,height:0}:t},VM=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&HM(e))},Bs=function(e,t){if(t){var i=e.style,r;t in Jr&&t!==si&&(t=Bt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(R_,"-$1").toLowerCase())):i.removeAttribute(t)}},Ss=function(e,t,i,r,s,o){var a=new ri(e._pt,t,i,0,1,o?OM:FM);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},Sv={deg:1,rad:1,turn:1},OA={grid:1,flex:1},Hs=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=vo.style,l=EA.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),f=100,d=r==="px",h=r==="%",g,_,m,p;if(r===o||!s||Sv[r]||Sv[o])return s;if(o!=="px"&&!d&&(s=n(e,t,i,"px")),p=e.getCTM&&VM(e),(h||o==="%")&&(Jr[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[c],qt(h?s/g*f:s/100*g);if(a[l?"width":"height"]=f+(d?o:r),_=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===ys||!_.appendChild)&&(_=ys.body),m=_._gsap,m&&h&&m.width&&l&&m.time===xi.time&&!m.uncache)return qt(s/m.width*f);if(h&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=f+r,g=e[c],v?e.style[t]=v:Bs(e,t)}else(h||o==="%")&&!OA[Ei(_,"display")]&&(a.position=Ei(e,"position")),_===e&&(a.position="static"),_.appendChild(vo),g=vo[c],_.removeChild(vo),a.position="absolute";return l&&h&&(m=To(_),m.time=xi.time,m.width=_[c]),qt(d?g*s/f:g&&s?f/g*s:0)},zr=function(e,t,i,r){var s;return A_||vm(),t in Mr&&t!=="transform"&&(t=Mr[t],~t.indexOf(",")&&(t=t.split(",")[0])),Jr[t]&&t!=="transform"?(s=Hu(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:ad(Ei(e,si))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=od[t]&&od[t](e,t,i)||Ei(e,t)||oM(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Hs(e,t,s,i)+i:s},kA=function(e,t,i,r){if(!i||i==="none"){var s=tl(t,e,1),o=s&&Ei(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=Ei(e,"borderTopColor"))}var a=new ri(this._pt,e.style,t,0,1,NM),l=0,u=0,c,f,d,h,g,_,m,p,v,x,S,C;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=Ei(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=e.style[t],e.style[t]=r,r=Ei(e,t)||r,_?e.style[t]=_:Bs(e,t)),c=[i,r],wM(c),i=c[0],r=c[1],d=i.match(Ta)||[],C=r.match(Ta)||[],C.length){for(;f=Ta.exec(r);)m=f[0],v=r.substring(l,f.index),g?g=(g+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(g=1),m!==(_=d[u++]||"")&&(h=parseFloat(_)||0,S=_.substr((h+"").length),m.charAt(1)==="="&&(m=Ia(h,m)+S),p=parseFloat(m),x=m.substr((p+"").length),l=Ta.lastIndex-x.length,x||(x=x||Ai.units[t]||S,l===r.length&&(r+=x,a.e+=x)),S!==x&&(h=Hs(e,t,_,x)||0),a._pt={_next:a._pt,p:v||u===1?v:",",s:h,c:p-h,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?OM:FM;return tM.test(r)&&(a.e=0),this._pt=a,a},Mv={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},zA=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=Mv[i]||i,t[1]=Mv[r]||r,t.join(" ")},BA=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],Jr[a]&&(l=1,a=a==="transformOrigin"?si:Bt),Bs(i,a);l&&(Bs(i,Bt),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Hu(i,1),o.uncache=1,kM(r)))}},od={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new ri(e._pt,t,i,0,0,BA);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},Bu=[1,0,0,1,0,0],GM={},WM=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Ev=function(e){var t=Ei(e,Bt);return WM(t)?Bu:t.substr(7).match(eM).map(qt)},b_=function(e,t){var i=e._gsap||To(e),r=e.style,s=Ev(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Bu:s):(s===Bu&&!e.offsetParent&&e!==Ua&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,a=e.nextElementSibling,Ua.appendChild(e)),s=Ev(e),l?r.display=l:Bs(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):Ua.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},xm=function(e,t,i,r,s,o){var a=e._gsap,l=s||b_(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,f=a.xOffset||0,d=a.yOffset||0,h=l[0],g=l[1],_=l[2],m=l[3],p=l[4],v=l[5],x=t.split(" "),S=parseFloat(x[0])||0,C=parseFloat(x[1])||0,w,M,R,N;i?l!==Bu&&(M=h*m-g*_)&&(R=S*(m/M)+C*(-_/M)+(_*v-m*p)/M,N=S*(-g/M)+C*(h/M)-(h*v-g*p)/M,S=R,C=N):(w=HM(e),S=w.x+(~x[0].indexOf("%")?S/100*w.width:S),C=w.y+(~(x[1]||x[0]).indexOf("%")?C/100*w.height:C)),r||r!==!1&&a.smooth?(p=S-u,v=C-c,a.xOffset=f+(p*h+v*_)-p,a.yOffset=d+(p*g+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=C,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[si]="0px 0px",o&&(Ss(o,a,"xOrigin",u,S),Ss(o,a,"yOrigin",c,C),Ss(o,a,"xOffset",f,a.xOffset),Ss(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+C)},Hu=function(e,t){var i=e._gsap||new CM(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=Ei(e,si)||"0",c,f,d,h,g,_,m,p,v,x,S,C,w,M,R,N,y,T,I,B,X,Z,H,Y,D,$,b,ie,Te,Ie,j,ne;return c=f=d=_=m=p=v=x=S=0,h=g=1,i.svg=!!(e.getCTM&&VM(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Bt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Bt]!=="none"?l[Bt]:"")),r.scale=r.rotate=r.translate="none"),M=b_(e,i.svg),i.svg&&(i.uncache?(D=e.getBBox(),u=i.xOrigin-D.x+"px "+(i.yOrigin-D.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),xm(e,Y||u,!!Y||i.originIsAbsolute,i.smooth!==!1,M)),C=i.xOrigin||0,w=i.yOrigin||0,M!==Bu&&(T=M[0],I=M[1],B=M[2],X=M[3],c=Z=M[4],f=H=M[5],M.length===6?(h=Math.sqrt(T*T+I*I),g=Math.sqrt(X*X+B*B),_=T||I?Yo(I,T)*ao:0,v=B||X?Yo(B,X)*ao+_:0,v&&(g*=Math.abs(Math.cos(v*Fa))),i.svg&&(c-=C-(C*T+w*B),f-=w-(C*I+w*X))):(ne=M[6],Ie=M[7],b=M[8],ie=M[9],Te=M[10],j=M[11],c=M[12],f=M[13],d=M[14],R=Yo(ne,Te),m=R*ao,R&&(N=Math.cos(-R),y=Math.sin(-R),Y=Z*N+b*y,D=H*N+ie*y,$=ne*N+Te*y,b=Z*-y+b*N,ie=H*-y+ie*N,Te=ne*-y+Te*N,j=Ie*-y+j*N,Z=Y,H=D,ne=$),R=Yo(-B,Te),p=R*ao,R&&(N=Math.cos(-R),y=Math.sin(-R),Y=T*N-b*y,D=I*N-ie*y,$=B*N-Te*y,j=X*y+j*N,T=Y,I=D,B=$),R=Yo(I,T),_=R*ao,R&&(N=Math.cos(R),y=Math.sin(R),Y=T*N+I*y,D=Z*N+H*y,I=I*N-T*y,H=H*N-Z*y,T=Y,Z=D),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),h=qt(Math.sqrt(T*T+I*I+B*B)),g=qt(Math.sqrt(H*H+ne*ne)),R=Yo(Z,H),v=Math.abs(R)>2e-4?R*ao:0,S=j?1/(j<0?-j:j):0),i.svg&&(Y=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!WM(Ei(e,Bt)),Y&&e.setAttribute("transform",Y))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(h*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,v+=v<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=f-((i.yPercent=f&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=d+o,i.scaleX=qt(h),i.scaleY=qt(g),i.rotation=qt(_)+a,i.rotationX=qt(m)+a,i.rotationY=qt(p)+a,i.skewX=v+a,i.skewY=x+a,i.transformPerspective=S+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(r[si]=ad(u)),i.xOffset=i.yOffset=0,i.force3D=Ai.force3D,i.renderTransform=i.svg?VA:BM?XM:HA,i.uncache=0,i},ad=function(e){return(e=e.split(" "))[0]+" "+e[1]},Mh=function(e,t,i){var r=Dn(t);return qt(parseFloat(t)+parseFloat(Hs(e,"x",i+"px",r)))+r},HA=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,XM(e,t)},Zs="0deg",Tl="0px",Qs=") ",XM=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,f=i.rotationX,d=i.skewX,h=i.skewY,g=i.scaleX,_=i.scaleY,m=i.transformPerspective,p=i.force3D,v=i.target,x=i.zOrigin,S="",C=p==="auto"&&e&&e!==1||p===!0;if(x&&(f!==Zs||c!==Zs)){var w=parseFloat(c)*Fa,M=Math.sin(w),R=Math.cos(w),N;w=parseFloat(f)*Fa,N=Math.cos(w),o=Mh(v,o,M*N*-x),a=Mh(v,a,-Math.sin(w)*-x),l=Mh(v,l,R*N*-x+x)}m!==Tl&&(S+="perspective("+m+Qs),(r||s)&&(S+="translate("+r+"%, "+s+"%) "),(C||o!==Tl||a!==Tl||l!==Tl)&&(S+=l!==Tl||C?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Qs),u!==Zs&&(S+="rotate("+u+Qs),c!==Zs&&(S+="rotateY("+c+Qs),f!==Zs&&(S+="rotateX("+f+Qs),(d!==Zs||h!==Zs)&&(S+="skew("+d+", "+h+Qs),(g!==1||_!==1)&&(S+="scale("+g+", "+_+Qs),v.style[Bt]=S||"translate(0, 0)"},VA=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,f=i.scaleX,d=i.scaleY,h=i.target,g=i.xOrigin,_=i.yOrigin,m=i.xOffset,p=i.yOffset,v=i.forceCSS,x=parseFloat(o),S=parseFloat(a),C,w,M,R,N;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=Fa,u*=Fa,C=Math.cos(l)*f,w=Math.sin(l)*f,M=Math.sin(l-u)*-d,R=Math.cos(l-u)*d,u&&(c*=Fa,N=Math.tan(u-c),N=Math.sqrt(1+N*N),M*=N,R*=N,c&&(N=Math.tan(c),N=Math.sqrt(1+N*N),C*=N,w*=N)),C=qt(C),w=qt(w),M=qt(M),R=qt(R)):(C=f,R=d,w=M=0),(x&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(x=Hs(h,"x",o,"px"),S=Hs(h,"y",a,"px")),(g||_||m||p)&&(x=qt(x+g-(g*C+_*M)+m),S=qt(S+_-(g*w+_*R)+p)),(r||s)&&(N=h.getBBox(),x=qt(x+r/100*N.width),S=qt(S+s/100*N.height)),N="matrix("+C+","+w+","+M+","+R+","+x+","+S+")",h.setAttribute("transform",N),v&&(h.style[Bt]=N)},GA=function(e,t,i,r,s){var o=360,a=_n(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?ao:1),u=l-r,c=r+u+"deg",f,d;return a&&(f=s.split("_")[1],f==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),f==="cw"&&u<0?u=(u+o*_v)%o-~~(u/o)*o:f==="ccw"&&u>0&&(u=(u-o*_v)%o-~~(u/o)*o)),e._pt=d=new ri(e._pt,t,i,r,u,wA),d.e=c,d.u="deg",e._props.push(i),d},Tv=function(e,t){for(var i in t)e[i]=t[i];return e},WA=function(e,t,i){var r=Tv({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,f,d,h,g;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[Bt]=t,a=Hu(i,1),Bs(i,Bt),i.setAttribute("transform",u)):(u=getComputedStyle(i)[Bt],o[Bt]=t,a=Hu(i,1),o[Bt]=u);for(l in Jr)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(h=Dn(u),g=Dn(c),f=h!==g?Hs(i,l,u,g):parseFloat(u),d=parseFloat(c),e._pt=new ri(e._pt,a,l,f,d-f,gm),e._pt.u=g||0,e._props.push(l));Tv(a,r)};ii("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});od[e>1?"border"+n:n]=function(a,l,u,c,f){var d,h;if(arguments.length<4)return d=o.map(function(g){return zr(a,g,u)}),h=d.join(" "),h.split(d[0]).length===5?d[0]:h;d=(c+"").split(" "),h={},o.forEach(function(g,_){return h[g]=d[_]=d[_]||d[(_-1)/2|0]}),a.init(l,h,f)}});var YM={name:"css",register:vm,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,f,d,h,g,_,m,p,v,x,S,C,w,M,R,N;A_||vm(),this.styles=this.styles||zM(e),R=this.styles.props,this.tween=i;for(_ in t)if(_!=="autoRound"&&(c=t[_],!(_i[_]&&RM(_,t,i,r,e,s)))){if(h=typeof c,g=od[_],h==="function"&&(c=c.call(i,r,e,s),h=typeof c),h==="string"&&~c.indexOf("random(")&&(c=Ou(c)),g)g(this,e,_,c,i)&&(M=1);else if(_.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(_)+"").trim(),c+="",Ns.lastIndex=0,Ns.test(u)||(m=Dn(u),p=Dn(c),p?m!==p&&(u=Hs(e,_,u,p)+p):m&&(c+=m)),this.add(a,"setProperty",u,c,r,s,0,0,_),o.push(_),R.push(_,0,a[_]);else if(h!=="undefined"){if(l&&_ in l?(u=typeof l[_]=="function"?l[_].call(i,r,e,s):l[_],_n(u)&&~u.indexOf("random(")&&(u=Ou(u)),Dn(u+"")||u==="auto"||(u+=Ai.units[_]||Dn(zr(e,_))||""),(u+"").charAt(1)==="="&&(u=zr(e,_))):u=zr(e,_),d=parseFloat(u),v=h==="string"&&c.charAt(1)==="="&&c.substr(0,2),v&&(c=c.substr(2)),f=parseFloat(c),_ in Mr&&(_==="autoAlpha"&&(d===1&&zr(e,"visibility")==="hidden"&&f&&(d=0),R.push("visibility",0,a.visibility),Ss(this,a,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=Mr[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in Jr,x){if(this.styles.save(_),N=c,h==="string"&&c.substring(0,6)==="var(--"){if(c=Ei(e,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var y=e.style.perspective;e.style.perspective=c,c=Ei(e,"perspective"),y?e.style.perspective=y:Bs(e,"perspective")}f=parseFloat(c)}if(S||(C=e._gsap,C.renderTransform&&!t.parseTransform||Hu(e,t.parseTransform),w=t.smoothOrigin!==!1&&C.smooth,S=this._pt=new ri(this._pt,a,Bt,0,1,C.renderTransform,C,0,-1),S.dep=1),_==="scale")this._pt=new ri(this._pt,C,"scaleY",C.scaleY,(v?Ia(C.scaleY,v+f):f)-C.scaleY||0,gm),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){R.push(si,0,a[si]),c=zA(c),C.svg?xm(e,c,0,w,0,this):(p=parseFloat(c.split(" ")[2])||0,p!==C.zOrigin&&Ss(this,C,"zOrigin",C.zOrigin,p),Ss(this,a,_,ad(u),ad(c)));continue}else if(_==="svgOrigin"){xm(e,c,1,w,0,this);continue}else if(_ in GM){GA(this,C,_,d,v?Ia(d,v+c):c);continue}else if(_==="smoothOrigin"){Ss(this,C,"smooth",C.smooth,c);continue}else if(_==="force3D"){C[_]=c;continue}else if(_==="transform"){WA(this,c,e);continue}}else _ in a||(_=tl(_)||_);if(x||(f||f===0)&&(d||d===0)&&!TA.test(c)&&_ in a)m=(u+"").substr((d+"").length),f||(f=0),p=Dn(c)||(_ in Ai.units?Ai.units[_]:m),m!==p&&(d=Hs(e,_,u,p)),this._pt=new ri(this._pt,x?C:a,_,d,(v?Ia(d,v+f):f)-d,!x&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?RA:gm),this._pt.u=p||0,x&&N!==c?(this._pt.b=u,this._pt.e=N,this._pt.r=CA):m!==p&&p!=="%"&&(this._pt.b=u,this._pt.r=AA);else if(_ in a)kA.call(this,e,_,u,v?v+c:c);else if(_ in e)this.add(e,_,u||e[_],v?v+c:c,r,s);else if(_!=="parseTransform"){g_(_,c);continue}x||(_ in a?R.push(_,0,a[_]):typeof e[_]=="function"?R.push(_,2,e[_]()):R.push(_,1,u||e[_])),o.push(_)}}M&&IM(this)},render:function(e,t){if(t.tween._time||!C_())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:zr,aliases:Mr,getSetter:function(e,t,i){var r=Mr[t];return r&&r.indexOf(",")<0&&(t=r),t in Jr&&t!==si&&(e._gsap.x||zr(e,"x"))?i&&gv===i?t==="scale"?DA:LA:(gv=i||{})&&(t==="scale"?NA:IA):e.style&&!h_(e.style[t])?bA:~t.indexOf("-")?PA:T_(e,t)},core:{_removeProperty:Bs,_getMatrix:b_}};ai.utils.checkPrefix=tl;ai.core.getStyleSaver=zM;(function(n,e,t,i){var r=ii(n+","+e+","+t,function(s){Jr[s]=1});ii(e,function(s){Ai.units[s]="deg",GM[s]=1}),Mr[r[13]]=n+","+e,ii(i,function(s){var o=s.split(":");Mr[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ii("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Ai.units[n]="px"});ai.registerPlugin(YM);var Xt=ai.registerPlugin(YM)||ai;Xt.core.Tween;function hl(){const[n,e]=Mt.useState(()=>typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches);return Mt.useEffect(()=>{const t=window.matchMedia("(prefers-reduced-motion: reduce)"),i=r=>e(r.matches);return t.addEventListener("change",i),()=>t.removeEventListener("change",i)},[]),n}const XA=[{label:"Work",href:"#projects"},{label:"Skills",href:"#skills"},{label:"Process",href:"#process"},{label:"Contact",href:"#contact"}];function YA({href:n,label:e}){const t=Mt.useRef(null),i=hl();return Mt.useEffect(()=>{const r=t.current;if(!r||i)return;const s=.4,o=l=>{const u=r.getBoundingClientRect(),c=l.clientX-(u.left+u.width/2),f=l.clientY-(u.top+u.height/2);Xt.to(r,{x:c*s,y:f*s,duration:.4,ease:"power3.out"})},a=()=>{Xt.to(r,{x:0,y:0,duration:.6,ease:"elastic.out(1, 0.4)"})};return r.addEventListener("mousemove",o),r.addEventListener("mouseleave",a),()=>{r.removeEventListener("mousemove",o),r.removeEventListener("mouseleave",a)}},[i]),K.jsx("a",{ref:t,href:n,className:"magnetic-btn font-mono-label text-xs text-bone-dim transition-colors duration-300 hover:text-[#F54F1B] focus-visible:text-[#F54F1B] focus-visible:outline-none",children:e})}function jA(){return K.jsx("header",{className:"fixed inset-x-0 top-0 z-50 px-3 md:px-18 md:pt-0",children:K.jsxs("nav",{className:"mx-auto flex max-w-[1600px] items-center justify-between pb-[10px] rounded-full border border-line/80 bg-[#1E233D]/95 px-3 pt-3 pb-2 md:px-6 md:pt-4 md:pb-2 backdrop-blur-md",children:[K.jsxs("a",{href:"#hero",className:"font-display text-sm*2 md:text-lg tracking-tight text-bone leading-tight",children:["HAMZA",K.jsx("span",{className:"text-[#F54F1B]",children:"-"}),"ALI",K.jsx("span",{className:"text-[#F54F1B]",children:"."})]}),K.jsx("div",{className:"hidden items-center gap-6 md:flex",children:XA.map(n=>K.jsx(YA,{...n},n.href))}),K.jsx("a",{href:"https://instagram.com/hamzaaliofficial07/",className:"hidden font-mono-label text-xs text-bone md:inline-flex items-center gap-2 border border-line px-3 py-2 rounded-full transition-colors duration-300 hover:border-[#F54F1B] hover:text-[#F54F1B]",children:"Let's Talk"}),K.jsx("a",{href:"#contact",className:"font-mono-label text-xs text-bone md:hidden",children:"Menu"})]})})}function $A(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function qA(n,e,t){return e&&$A(n.prototype,e),n}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var yn,_f,yi,Ms,Es,Oa,jM,lo,ka,$M,Gr,tr,qM,KM=function(){return yn||typeof window<"u"&&(yn=window.gsap)&&yn.registerPlugin&&yn},ZM=1,Aa=[],ot=[],Ar=[],ru=Date.now,ym=function(e,t){return t},KA=function(){var e=ka.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,ot),r.push.apply(r,Ar),ot=i,Ar=r,ym=function(o,a){return t[o](a)}},Is=function(e,t){return~Ar.indexOf(e)&&Ar[Ar.indexOf(e)+1][t]},su=function(e){return!!~$M.indexOf(e)},On=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:r!==!1,capture:!!s})},Fn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},Sc="scrollLeft",Mc="scrollTop",Sm=function(){return Gr&&Gr.isPressed||ot.cache++},ld=function(e,t){var i=function r(s){if(s||s===0){ZM&&(yi.history.scrollRestoration="manual");var o=Gr&&Gr.isPressed;s=r.v=Math.round(s)||(Gr&&Gr.iOS?1:0),e(s),r.cacheID=ot.cache,o&&ym("ss",s)}else(t||ot.cache!==r.cacheID||ym("ref"))&&(r.cacheID=ot.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},Gn={s:Sc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:ld(function(n){return arguments.length?yi.scrollTo(n,an.sc()):yi.pageXOffset||Ms[Sc]||Es[Sc]||Oa[Sc]||0})},an={s:Mc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Gn,sc:ld(function(n){return arguments.length?yi.scrollTo(Gn.sc(),n):yi.pageYOffset||Ms[Mc]||Es[Mc]||Oa[Mc]||0})},qn=function(e,t){return(t&&t._ctx&&t._ctx.selector||yn.utils.toArray)(e)[0]||(typeof e=="string"&&yn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},ZA=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},Vs=function(e,t){var i=t.s,r=t.sc;su(e)&&(e=Ms.scrollingElement||Es);var s=ot.indexOf(e),o=r===an.sc?1:2;!~s&&(s=ot.push(e)-1),ot[s+o]||On(e,"scroll",Sm);var a=ot[s+o],l=a||(ot[s+o]=ld(Is(e,i),!0)||(su(e)?r:ld(function(u){return arguments.length?e[i]=u:e[i]})));return l.target=e,a||(l.smooth=yn.getProperty(e,"scrollBehavior")==="smooth"),l},Mm=function(e,t,i){var r=e,s=e,o=ru(),a=o,l=t||50,u=Math.max(500,l*3),c=function(g,_){var m=ru();_||m-o>l?(s=r,r=g,a=o,o=m):i?r+=g:r=s+(g-s)/(m-a)*(o-a)},f=function(){s=r=i?0:r,a=o=0},d=function(g){var _=a,m=s,p=ru();return(g||g===0)&&g!==r&&c(g),o===a||p-a>u?0:(r+(i?m:-m))/((i?p:o)-_)*1e3};return{update:c,reset:f,getVelocity:d}},wl=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},wv=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},QM=function(){ka=yn.core.globals().ScrollTrigger,ka&&ka.core&&KA()},JM=function(e){return yn=e||KM(),!_f&&yn&&typeof document<"u"&&document.body&&(yi=window,Ms=document,Es=Ms.documentElement,Oa=Ms.body,$M=[yi,Ms,Es,Oa],yn.utils.clamp,qM=yn.core.context||function(){},lo="onpointerenter"in Oa?"pointer":"mouse",jM=Qt.isTouch=yi.matchMedia&&yi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in yi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,tr=Qt.eventTypes=("ontouchstart"in Es?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Es?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return ZM=0},500),_f=1),ka||QM(),_f};Gn.op=an;ot.cache=0;var Qt=function(){function n(t){this.init(t)}var e=n.prototype;return e.init=function(i){_f||JM(yn)||console.warn("Please gsap.registerPlugin(Observer)"),ka||QM();var r=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,u=i.debounce,c=i.preventDefault,f=i.onStop,d=i.onStopDelay,h=i.ignore,g=i.wheelSpeed,_=i.event,m=i.onDragStart,p=i.onDragEnd,v=i.onDrag,x=i.onPress,S=i.onRelease,C=i.onRight,w=i.onLeft,M=i.onUp,R=i.onDown,N=i.onChangeX,y=i.onChangeY,T=i.onChange,I=i.onToggleX,B=i.onToggleY,X=i.onHover,Z=i.onHoverEnd,H=i.onMove,Y=i.ignoreCheck,D=i.isNormalizer,$=i.onGestureStart,b=i.onGestureEnd,ie=i.onWheel,Te=i.onEnable,Ie=i.onDisable,j=i.onClick,ne=i.scrollSpeed,de=i.capture,le=i.allowClicks,be=i.lockAxis,Ae=i.onLockAxis;this.target=a=qn(a)||Es,this.vars=i,h&&(h=yn.utils.toArray(h)),r=r||1e-9,s=s||0,g=g||1,ne=ne||1,o=o||"wheel,touch,pointer",u=u!==!1,l||(l=parseFloat(yi.getComputedStyle(Oa).lineHeight)||22);var Ye,We,Be,L,rt,He,ke,k=this,qe=0,Fe=0,P=i.passive||!c&&i.passive!==!1,E=Vs(a,Gn),G=Vs(a,an),ee=E(),re=G(),J=~o.indexOf("touch")&&!~o.indexOf("pointer")&&tr[0]==="pointerdown",we=su(a),ae=a.ownerDocument||Ms,ge=[0,0,0],fe=[0,0,0],q=0,oe=function(){return q=ru()},he=function(Le,dt){return(k.event=Le)&&h&&ZA(Le.target,h)||dt&&J&&Le.pointerType!=="touch"||Y&&Y(Le,dt)},Se=function(){k._vx.reset(),k._vy.reset(),We.pause(),f&&f(k)},me=function(){var Le=k.deltaX=wv(ge),dt=k.deltaY=wv(fe),ye=Math.abs(Le)>=r,Ge=Math.abs(dt)>=r;T&&(ye||Ge)&&T(k,Le,dt,ge,fe),ye&&(C&&k.deltaX>0&&C(k),w&&k.deltaX<0&&w(k),N&&N(k),I&&k.deltaX<0!=qe<0&&I(k),qe=k.deltaX,ge[0]=ge[1]=ge[2]=0),Ge&&(R&&k.deltaY>0&&R(k),M&&k.deltaY<0&&M(k),y&&y(k),B&&k.deltaY<0!=Fe<0&&B(k),Fe=k.deltaY,fe[0]=fe[1]=fe[2]=0),(L||Be)&&(H&&H(k),Be&&(m&&Be===1&&m(k),v&&v(k),Be=0),L=!1),He&&!(He=!1)&&Ae&&Ae(k),rt&&(ie(k),rt=!1),Ye=0},Ve=function(Le,dt,ye){ge[ye]+=Le,fe[ye]+=dt,k._vx.update(Le),k._vy.update(dt),u?Ye||(Ye=requestAnimationFrame(me)):me()},Pe=function(Le,dt){be&&!ke&&(k.axis=ke=Math.abs(Le)>Math.abs(dt)?"x":"y",He=!0),ke!=="y"&&(ge[2]+=Le,k._vx.update(Le,!0)),ke!=="x"&&(fe[2]+=dt,k._vy.update(dt,!0)),u?Ye||(Ye=requestAnimationFrame(me)):me()},tt=function(Le){if(!he(Le,1)){Le=wl(Le,c);var dt=Le.clientX,ye=Le.clientY,Ge=dt-k.x,Oe=ye-k.y,je=k.isDragging;k.x=dt,k.y=ye,(je||(Ge||Oe)&&(Math.abs(k.startX-dt)>=s||Math.abs(k.startY-ye)>=s))&&(Be||(Be=je?2:1),je||(k.isDragging=!0),Pe(Ge,Oe))}},U=k.onPress=function(Ue){he(Ue,1)||Ue&&Ue.button||(k.axis=ke=null,We.pause(),k.isPressed=!0,Ue=wl(Ue),qe=Fe=0,k.startX=k.x=Ue.clientX,k.startY=k.y=Ue.clientY,k._vx.reset(),k._vy.reset(),On(D?a:ae,tr[1],tt,P,!0),k.deltaX=k.deltaY=0,x&&x(k))},se=k.onRelease=function(Ue){if(!he(Ue,1)){Fn(D?a:ae,tr[1],tt,!0);var Le=!isNaN(k.y-k.startY),dt=k.isDragging,ye=dt&&(Math.abs(k.x-k.startX)>3||Math.abs(k.y-k.startY)>3),Ge=wl(Ue);!ye&&Le&&(k._vx.reset(),k._vy.reset(),c&&le&&yn.delayedCall(.08,function(){if(ru()-q>300&&!Ue.defaultPrevented){if(Ue.target.click)Ue.target.click();else if(ae.createEvent){var Oe=ae.createEvent("MouseEvents");Oe.initMouseEvent("click",!0,!0,yi,1,Ge.screenX,Ge.screenY,Ge.clientX,Ge.clientY,!1,!1,!1,!1,0,null),Ue.target.dispatchEvent(Oe)}}})),k.isDragging=k.isGesturing=k.isPressed=!1,f&&dt&&!D&&We.restart(!0),Be&&me(),p&&dt&&p(k),S&&S(k,ye)}},Q=function(Le){return Le.touches&&Le.touches.length>1&&(k.isGesturing=!0)&&$(Le,k.isDragging)},te=function(){return(k.isGesturing=!1)||b(k)},pe=function(Le){if(!he(Le)){var dt=E(),ye=G();Ve((dt-ee)*ne,(ye-re)*ne,1),ee=dt,re=ye,f&&We.restart(!0)}},_e=function(Le){if(!he(Le)){Le=wl(Le,c),ie&&(rt=!0);var dt=(Le.deltaMode===1?l:Le.deltaMode===2?yi.innerHeight:1)*g;Ve(Le.deltaX*dt,Le.deltaY*dt,0),f&&!D&&We.restart(!0)}},Ke=function(Le){if(!he(Le)){var dt=Le.clientX,ye=Le.clientY,Ge=dt-k.x,Oe=ye-k.y;k.x=dt,k.y=ye,L=!0,f&&We.restart(!0),(Ge||Oe)&&Pe(Ge,Oe)}},Et=function(Le){k.event=Le,X(k)},Nt=function(Le){k.event=Le,Z(k)},at=function(Le){return he(Le)||wl(Le,c)&&j(k)};We=k._dc=yn.delayedCall(d||.25,Se).pause(),k.deltaX=k.deltaY=0,k._vx=Mm(0,50,!0),k._vy=Mm(0,50,!0),k.scrollX=E,k.scrollY=G,k.isDragging=k.isGesturing=k.isPressed=!1,qM(this),k.enable=function(Ue){return k.isEnabled||(On(we?ae:a,"scroll",Sm),o.indexOf("scroll")>=0&&On(we?ae:a,"scroll",pe,P,de),o.indexOf("wheel")>=0&&On(a,"wheel",_e,P,de),(o.indexOf("touch")>=0&&jM||o.indexOf("pointer")>=0)&&(On(a,tr[0],U,P,de),On(ae,tr[2],se),On(ae,tr[3],se),le&&On(a,"click",oe,!0,!0),j&&On(a,"click",at),$&&On(ae,"gesturestart",Q),b&&On(ae,"gestureend",te),X&&On(a,lo+"enter",Et),Z&&On(a,lo+"leave",Nt),H&&On(a,lo+"move",Ke)),k.isEnabled=!0,k.isDragging=k.isGesturing=k.isPressed=L=Be=!1,k._vx.reset(),k._vy.reset(),ee=E(),re=G(),Ue&&Ue.type&&U(Ue),Te&&Te(k)),k},k.disable=function(){k.isEnabled&&(Aa.filter(function(Ue){return Ue!==k&&su(Ue.target)}).length||Fn(we?ae:a,"scroll",Sm),k.isPressed&&(k._vx.reset(),k._vy.reset(),Fn(D?a:ae,tr[1],tt,!0)),Fn(we?ae:a,"scroll",pe,de),Fn(a,"wheel",_e,de),Fn(a,tr[0],U,de),Fn(ae,tr[2],se),Fn(ae,tr[3],se),Fn(a,"click",oe,!0),Fn(a,"click",at),Fn(ae,"gesturestart",Q),Fn(ae,"gestureend",te),Fn(a,lo+"enter",Et),Fn(a,lo+"leave",Nt),Fn(a,lo+"move",Ke),k.isEnabled=k.isPressed=k.isDragging=!1,Ie&&Ie(k))},k.kill=k.revert=function(){k.disable();var Ue=Aa.indexOf(k);Ue>=0&&Aa.splice(Ue,1),Gr===k&&(Gr=0)},Aa.push(k),D&&su(a)&&(Gr=k),k.enable(_)},qA(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n}();Qt.version="3.15.0";Qt.create=function(n){return new Qt(n)};Qt.register=JM;Qt.getAll=function(){return Aa.slice()};Qt.getById=function(n){return Aa.filter(function(e){return e.vars.id===n})[0]};KM()&&yn.registerPlugin(Qt);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Re,ca,st,xt,vi,gt,P_,ud,Vu,ou,zl,Ec,Rn,Ud,Em,Hn,Av,Cv,fa,e1,Eh,t1,zn,Tm,n1,i1,fs,wm,L_,za,D_,au,Am,Th,Tc=1,bn=Date.now,wh=bn(),ji=0,Bl=0,Rv=function(e,t,i){var r=gi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},bv=function(e,t){return t&&(!gi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},QA=function n(){return Bl&&requestAnimationFrame(n)},Pv=function(){return Ud=1},Lv=function(){return Ud=0},vr=function(e){return e},Hl=function(e){return Math.round(e*1e5)/1e5||0},r1=function(){return typeof window<"u"},s1=function(){return Re||r1()&&(Re=window.gsap)&&Re.registerPlugin&&Re},Fo=function(e){return!!~P_.indexOf(e)},o1=function(e){return(e==="Height"?D_:st["inner"+e])||vi["client"+e]||gt["client"+e]},a1=function(e){return Is(e,"getBoundingClientRect")||(Fo(e)?function(){return Mf.width=st.innerWidth,Mf.height=D_,Mf}:function(){return Br(e)})},JA=function(e,t,i){var r=i.d,s=i.d2,o=i.a;return(o=Is(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?o1(s):e["client"+s])||0}},eC=function(e,t){return!t||~Ar.indexOf(e)?a1(e):function(){return Mf}},Er=function(e,t){var i=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(i="scroll"+r)&&(o=Is(e,i))?o()-a1(e)()[s]:Fo(e)?(vi[i]||gt[i])-o1(r):e[i]-e["offset"+r])},wc=function(e,t){for(var i=0;i<fa.length;i+=3)(!t||~t.indexOf(fa[i+1]))&&e(fa[i],fa[i+1],fa[i+2])},gi=function(e){return typeof e=="string"},Nn=function(e){return typeof e=="function"},Vl=function(e){return typeof e=="number"},uo=function(e){return typeof e=="object"},Al=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},jo=function(e,t,i){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return t(e,i)}):t(e,i);r&&r.totalTime&&(e.callbackAnimation=r)}},$o=Math.abs,l1="left",u1="top",N_="right",I_="bottom",Ro="width",bo="height",lu="Right",uu="Left",cu="Top",fu="Bottom",tn="padding",ki="margin",nl="Width",U_="Height",sn="px",zi=function(e){return st.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},tC=function(e){var t=zi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Dv=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Br=function(e,t){var i=t&&zi(e)[Em]!=="matrix(1, 0, 0, 1, 0, 0)"&&Re.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return i&&i.progress(0).kill(),r},cd=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},c1=function(e){var t=[],i=e.labels,r=e.duration(),s;for(s in i)t.push(i[s]/r);return t},nC=function(e){return function(t){return Re.utils.snap(c1(e),t)}},F_=function(e){var t=Re.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return i?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<i.length;a++)if(i[a]>=r)return i[a];return i[a-1]}else for(a=i.length,r+=o;a--;)if(i[a]<=r)return i[a];return i[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},iC=function(e){return function(t,i){return F_(c1(e))(t,i.direction)}},Ac=function(e,t,i,r){return i.split(",").forEach(function(s){return e(t,s,r)})},pn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:!r,capture:!!s})},hn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},Cc=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},Nv={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Rc={toggleActions:"play",anticipatePin:0},fd={top:0,left:0,center:.5,bottom:1,right:1},vf=function(e,t){if(gi(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in fd?fd[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},bc=function(e,t,i,r,s,o,a,l){var u=s.startColor,c=s.endColor,f=s.fontSize,d=s.indent,h=s.fontWeight,g=xt.createElement("div"),_=Fo(i)||Is(i,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=_?gt:i.tagName==="IFRAME"?i.contentDocument.body:i,v=e.indexOf("start")!==-1,x=v?u:c,S="border-color:"+x+";font-size:"+f+";color:"+x+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(S+=(r===an?N_:I_)+":"+(o+parseFloat(d))+"px;"),a&&(S+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=v,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=S,g.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+r.op.d2],xf(g,0,r,v),g},xf=function(e,t,i,r){var s={display:"block"},o=i[r?"os2":"p2"],a=i[r?"p2":"os2"];e._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+o+nl]=1,s["border"+a+nl]=0,s[i.p]=t+"px",Re.set(e,s)},it=[],Cm={},Gu,Iv=function(){return bn()-ji>34&&(Gu||(Gu=requestAnimationFrame(jr)))},qo=function(){(!zn||!zn.isPressed||zn.startX>gt.clientWidth)&&(ot.cache++,zn?Gu||(Gu=requestAnimationFrame(jr)):jr(),ji||ko("scrollStart"),ji=bn())},Ah=function(){i1=st.innerWidth,n1=st.innerHeight},Gl=function(e){ot.cache++,(e===!0||!Rn&&!t1&&!xt.fullscreenElement&&!xt.webkitFullscreenElement&&(!Tm||i1!==st.innerWidth||Math.abs(st.innerHeight-n1)>st.innerHeight*.25))&&ud.restart(!0)},Oo={},rC=[],f1=function n(){return hn(et,"scrollEnd",n)||xo(!0)},ko=function(e){return Oo[e]&&Oo[e].map(function(t){return t()})||rC},pi=[],d1=function(e){for(var t=0;t<pi.length;t+=5)(!e||pi[t+4]&&pi[t+4].query===e)&&(pi[t].style.cssText=pi[t+1],pi[t].getBBox&&pi[t].setAttribute("transform",pi[t+2]||""),pi[t+3].uncache=1)},h1=function(){return ot.forEach(function(e){return Nn(e)&&++e.cacheID&&(e.rec=e())})},O_=function(e,t){var i;for(Hn=0;Hn<it.length;Hn++)i=it[Hn],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));au=!0,t&&d1(t),t||ko("revert")},p1=function(e,t){ot.cache++,(t||!Vn)&&ot.forEach(function(i){return Nn(i)&&i.cacheID++&&(i.rec=0)}),gi(e)&&(st.history.scrollRestoration=L_=e)},Vn,Po=0,Uv,sC=function(){if(Uv!==Po){var e=Uv=Po;requestAnimationFrame(function(){return e===Po&&xo(!0)})}},m1=function(){gt.appendChild(za),D_=!zn&&za.offsetHeight||st.innerHeight,gt.removeChild(za)},Fv=function(e){return Vu(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},xo=function(e,t){if(vi=xt.documentElement,gt=xt.body,P_=[st,xt,vi,gt],ji&&!e&&!au){pn(et,"scrollEnd",f1);return}m1(),Vn=et.isRefreshing=!0,au||h1();var i=ko("refreshInit");e1&&et.sort(),t||O_(),ot.forEach(function(r){Nn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),it.slice(0).forEach(function(r){return r.refresh()}),au=!1,it.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),Am=1,Fv(!0),it.forEach(function(r){var s=Er(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),Fv(!1),Am=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),ot.forEach(function(r){Nn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),p1(L_,1),ud.pause(),Po++,Vn=2,jr(2),it.forEach(function(r){return Nn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),Vn=et.isRefreshing=!1,ko("refresh")},Rm=0,yf=1,du,jr=function(e){if(e===2||!Vn&&!au){et.isUpdating=!0,du&&du.update(0);var t=it.length,i=bn(),r=i-wh>=50,s=t&&it[0].scroll();if(yf=Rm>s?-1:1,Vn||(Rm=s),r&&(ji&&!Ud&&i-ji>200&&(ji=0,ko("scrollEnd")),zl=wh,wh=i),yf<0){for(Hn=t;Hn-- >0;)it[Hn]&&it[Hn].update(0,r);yf=1}else for(Hn=0;Hn<t;Hn++)it[Hn]&&it[Hn].update(0,r);et.isUpdating=!1}Gu=0},bm=[l1,u1,I_,N_,ki+fu,ki+lu,ki+cu,ki+uu,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Sf=bm.concat([Ro,bo,"boxSizing","max"+nl,"max"+U_,"position",ki,tn,tn+cu,tn+lu,tn+fu,tn+uu]),oC=function(e,t,i){Ba(i);var r=e._gsap;if(r.spacerIsNative)Ba(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Ch=function(e,t,i,r){if(!e._gsap.swappedIn){for(var s=bm.length,o=t.style,a=e.style,l;s--;)l=bm[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[I_]=a[N_]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Ro]=cd(e,Gn)+sn,o[bo]=cd(e,an)+sn,o[tn]=a[ki]=a[u1]=a[l1]="0",Ba(r),a[Ro]=a["max"+nl]=i[Ro],a[bo]=a["max"+U_]=i[bo],a[tn]=i[tn],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},aC=/([A-Z])/g,Ba=function(e){if(e){var t=e.t.style,i=e.length,r=0,s,o;for((e.t._gsap||Re.core.getCache(e.t)).uncache=1;r<i;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(aC,"-$1").toLowerCase())}},Pc=function(e){for(var t=Sf.length,i=e.style,r=[],s=0;s<t;s++)r.push(Sf[s],i[Sf[s]]);return r.t=e,r},lC=function(e,t,i){for(var r=[],s=e.length,o=i?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},Mf={left:0,top:0},Ov=function(e,t,i,r,s,o,a,l,u,c,f,d,h,g){Nn(e)&&(e=e(l)),gi(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?vf("0"+e.substr(3),i):0));var _=h?h.time():0,m,p,v;if(h&&h.seek(0),isNaN(e)||(e=+e),Vl(e))h&&(e=Re.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,d,e)),a&&xf(a,i,r,!0);else{Nn(t)&&(t=t(l));var x=(e||"0").split(" "),S,C,w,M;v=qn(t,l)||gt,S=Br(v)||{},(!S||!S.left&&!S.top)&&zi(v).display==="none"&&(M=v.style.display,v.style.display="block",S=Br(v),M?v.style.display=M:v.style.removeProperty("display")),C=vf(x[0],S[r.d]),w=vf(x[1]||"0",i),e=S[r.p]-u[r.p]-c+C+s-w,a&&xf(a,w,r,i-w<20||a._isStart&&w>20),i-=i-w}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var R=e+i,N=o._isStart;m="scroll"+r.d2,xf(o,R,r,N&&R>20||!N&&(f?Math.max(gt[m],vi[m]):o.parentNode[m])<=R+1),f&&(u=Br(a),f&&(o.style[r.op.p]=u[r.op.p]-r.op.m-o._offset+sn))}return h&&v&&(m=Br(v),h.seek(d),p=Br(v),h._caScrollDist=m[r.p]-p[r.p],e=e/h._caScrollDist*d),h&&h.seek(_),h?e:Math.round(e)},uC=/(webkit|moz|length|cssText|inset)/i,kv=function(e,t,i,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===gt){e._stOrig=s.cssText,a=zi(e);for(o in a)!+o&&!uC.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=r}else s.cssText=e._stOrig;Re.core.getCache(e).uncache=1,t.appendChild(e)}},g1=function(e,t,i){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,i&&i()),s=r,r=Math.round(o),r}},Lc=function(e,t,i){var r={};r[t.p]="+="+i,Re.set(e,r)},zv=function(e,t){var i=Vs(e,t),r="_scroll"+t.p2,s=function o(a,l,u,c,f){var d=o.tween,h=l.onComplete,g={};u=u||i();var _=g1(i,u,function(){d.kill(),o.tween=0});return f=c&&f||0,c=c||a-u,d&&d.kill(),l[r]=a,l.inherit=!1,l.modifiers=g,g[r]=function(){return _(u+c*d.ratio+f*d.ratio*d.ratio)},l.onUpdate=function(){ot.cache++,o.tween&&jr()},l.onComplete=function(){o.tween=0,h&&h.call(d)},d=o.tween=Re.to(e,l),d};return e[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},pn(e,"wheel",i.wheelHandler),et.isTouch&&pn(e,"touchmove",i.wheelHandler),s},et=function(){function n(t,i){ca||n.register(Re)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),wm(this),this.init(t,i)}var e=n.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Bl){this.update=this.refresh=this.kill=vr;return}i=Dv(gi(i)||Vl(i)||i.nodeType?{trigger:i}:i,Rc);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,u=s.onToggle,c=s.onRefresh,f=s.scrub,d=s.trigger,h=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,v=s.onSnapComplete,x=s.once,S=s.snap,C=s.pinReparent,w=s.pinSpacer,M=s.containerAnimation,R=s.fastScrollEnd,N=s.preventOverlaps,y=i.horizontal||i.containerAnimation&&i.horizontal!==!1?Gn:an,T=!f&&f!==0,I=qn(i.scroller||st),B=Re.core.getCache(I),X=Fo(I),Z=("pinType"in i?i.pinType:Is(I,"pinType")||X&&"fixed")==="fixed",H=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],Y=T&&i.toggleActions.split(" "),D="markers"in i?i.markers:Rc.markers,$=X?0:parseFloat(zi(I)["border"+y.p2+nl])||0,b=this,ie=i.onRefreshInit&&function(){return i.onRefreshInit(b)},Te=JA(I,X,y),Ie=eC(I,X),j=0,ne=0,de=0,le=Vs(I,y),be,Ae,Ye,We,Be,L,rt,He,ke,k,qe,Fe,P,E,G,ee,re,J,we,ae,ge,fe,q,oe,he,Se,me,Ve,Pe,tt,U,se,Q,te,pe,_e,Ke,Et,Nt;if(b._startClamp=b._endClamp=!1,b._dir=y,m*=45,b.scroller=I,b.scroll=M?M.time.bind(M):le,We=le(),b.vars=i,r=r||i.animation,"refreshPriority"in i&&(e1=1,i.refreshPriority===-9999&&(du=b)),B.tweenScroll=B.tweenScroll||{top:zv(I,an),left:zv(I,Gn)},b.tweenTo=be=B.tweenScroll[y.p],b.scrubDuration=function(ye){Q=Vl(ye)&&ye,Q?se?se.duration(ye):se=Re.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Q,paused:!0,onComplete:function(){return p&&p(b)}}):(se&&se.progress(1).kill(),se=0)},r&&(r.vars.lazy=!1,r._initted&&!b.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),b.animation=r.pause(),r.scrollTrigger=b,b.scrubDuration(f),tt=0,l||(l=r.vars.id)),S&&((!uo(S)||S.push)&&(S={snapTo:S}),"scrollBehavior"in gt.style&&Re.set(X?[gt,vi]:I,{scrollBehavior:"auto"}),ot.forEach(function(ye){return Nn(ye)&&ye.target===(X?xt.scrollingElement||vi:I)&&(ye.smooth=!1)}),Ye=Nn(S.snapTo)?S.snapTo:S.snapTo==="labels"?nC(r):S.snapTo==="labelsDirectional"?iC(r):S.directional!==!1?function(ye,Ge){return F_(S.snapTo)(ye,bn()-ne<500?0:Ge.direction)}:Re.utils.snap(S.snapTo),te=S.duration||{min:.1,max:2},te=uo(te)?ou(te.min,te.max):ou(te,te),pe=Re.delayedCall(S.delay||Q/2||.1,function(){var ye=le(),Ge=bn()-ne<500,Oe=be.tween;if((Ge||Math.abs(b.getVelocity())<10)&&!Oe&&!Ud&&j!==ye){var je=(ye-L)/E,Yt=r&&!T?r.totalProgress():je,Ze=Ge?0:(Yt-U)/(bn()-zl)*1e3||0,It=Re.utils.clamp(-je,1-je,$o(Ze/2)*Ze/.185),jt=je+(S.inertia===!1?0:It),Rt,Tt,vt=S,li=vt.onStart,bt=vt.onInterrupt,A=vt.onComplete;if(Rt=Ye(jt,b),Vl(Rt)||(Rt=jt),Tt=Math.max(0,Math.round(L+Rt*E)),ye<=rt&&ye>=L&&Tt!==ye){if(Oe&&!Oe._initted&&Oe.data<=$o(Tt-ye))return;S.inertia===!1&&(It=Rt-je),be(Tt,{duration:te($o(Math.max($o(jt-Yt),$o(Rt-Yt))*.185/Ze/.05||0)),ease:S.ease||"power3",data:$o(Tt-ye),onInterrupt:function(){return pe.restart(!0)&&bt&&jo(b,bt)},onComplete:function(){b.update(),j=le(),r&&!T&&(se?se.resetTo("totalProgress",Rt,r._tTime/r._tDur):r.progress(Rt)),tt=U=r&&!T?r.totalProgress():b.progress,v&&v(b),A&&jo(b,A)}},ye,It*E,Tt-ye-It*E),li&&jo(b,li,be.tween)}}else b.isActive&&j!==ye&&pe.restart(!0)}).pause()),l&&(Cm[l]=b),d=b.trigger=qn(d||h!==!0&&h),Nt=d&&d._gsap&&d._gsap.stRevert,Nt&&(Nt=Nt(b)),h=h===!0?d:qn(h),gi(a)&&(a={targets:d,className:a}),h&&(g===!1||g===ki||(g=!g&&h.parentNode&&h.parentNode.style&&zi(h.parentNode).display==="flex"?!1:tn),b.pin=h,Ae=Re.core.getCache(h),Ae.spacer?G=Ae.pinState:(w&&(w=qn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),Ae.spacerIsNative=!!w,w&&(Ae.spacerState=Pc(w))),Ae.spacer=J=w||xt.createElement("div"),J.classList.add("pin-spacer"),l&&J.classList.add("pin-spacer-"+l),Ae.pinState=G=Pc(h)),i.force3D!==!1&&Re.set(h,{force3D:!0}),b.spacer=J=Ae.spacer,Pe=zi(h),oe=Pe[g+y.os2],ae=Re.getProperty(h),ge=Re.quickSetter(h,y.a,sn),Ch(h,J,Pe),re=Pc(h)),D){Fe=uo(D)?Dv(D,Nv):Nv,k=bc("scroller-start",l,I,y,Fe,0),qe=bc("scroller-end",l,I,y,Fe,0,k),we=k["offset"+y.op.d2];var at=qn(Is(I,"content")||I);He=this.markerStart=bc("start",l,at,y,Fe,we,0,M),ke=this.markerEnd=bc("end",l,at,y,Fe,we,0,M),M&&(Et=Re.quickSetter([He,ke],y.a,sn)),!Z&&!(Ar.length&&Is(I,"fixedMarkers")===!0)&&(tC(X?gt:I),Re.set([k,qe],{force3D:!0}),Se=Re.quickSetter(k,y.a,sn),Ve=Re.quickSetter(qe,y.a,sn))}if(M){var Ue=M.vars.onUpdate,Le=M.vars.onUpdateParams;M.eventCallback("onUpdate",function(){b.update(0,0,1),Ue&&Ue.apply(M,Le||[])})}if(b.previous=function(){return it[it.indexOf(b)-1]},b.next=function(){return it[it.indexOf(b)+1]},b.revert=function(ye,Ge){if(!Ge)return b.kill(!0);var Oe=ye!==!1||!b.enabled,je=Rn;Oe!==b.isReverted&&(Oe&&(_e=Math.max(le(),b.scroll.rec||0),de=b.progress,Ke=r&&r.progress()),He&&[He,ke,k,qe].forEach(function(Yt){return Yt.style.display=Oe?"none":"block"}),Oe&&(Rn=b,b.update(Oe)),h&&(!C||!b.isActive)&&(Oe?oC(h,J,G):Ch(h,J,zi(h),he)),Oe||b.update(Oe),Rn=je,b.isReverted=Oe)},b.refresh=function(ye,Ge,Oe,je){if(!((Rn||!b.enabled)&&!Ge)){if(h&&ye&&ji){pn(n,"scrollEnd",f1);return}!Vn&&ie&&ie(b),Rn=b,be.tween&&!Oe&&(be.tween.kill(),be.tween=0),se&&se.pause(),_&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(nt){return nt.vars.immediateRender&&nt.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),b.isReverted||b.revert(!0,!0),b._subPinOffset=!1;var Yt=Te(),Ze=Ie(),It=M?M.duration():Er(I,y),jt=E<=.01||!E,Rt=0,Tt=je||0,vt=uo(Oe)?Oe.end:i.end,li=i.endTrigger||d,bt=uo(Oe)?Oe.start:i.start||(i.start===0||!d?0:h?"0 0":"0 100%"),A=b.pinnedContainer=i.pinnedContainer&&qn(i.pinnedContainer,b),O=d&&Math.max(0,it.indexOf(b))||0,V=O,W,F,ce,Ee,xe,ve,Ne,Xe,De,ct,ut,St,fn;for(D&&uo(Oe)&&(St=Re.getProperty(k,y.p),fn=Re.getProperty(qe,y.p));V-- >0;)ve=it[V],ve.end||ve.refresh(0,1)||(Rn=b),Ne=ve.pin,Ne&&(Ne===d||Ne===h||Ne===A)&&!ve.isReverted&&(ct||(ct=[]),ct.unshift(ve),ve.revert(!0,!0)),ve!==it[V]&&(O--,V--);for(Nn(bt)&&(bt=bt(b)),bt=Rv(bt,"start",b),L=Ov(bt,d,Yt,y,le(),He,k,b,Ze,$,Z,It,M,b._startClamp&&"_startClamp")||(h?-.001:0),Nn(vt)&&(vt=vt(b)),gi(vt)&&!vt.indexOf("+=")&&(~vt.indexOf(" ")?vt=(gi(bt)?bt.split(" ")[0]:"")+vt:(Rt=vf(vt.substr(2),Yt),vt=gi(bt)?bt:(M?Re.utils.mapRange(0,M.duration(),M.scrollTrigger.start,M.scrollTrigger.end,L):L)+Rt,li=d)),vt=Rv(vt,"end",b),rt=Math.max(L,Ov(vt||(li?"100% 0":It),li,Yt,y,le()+Rt,ke,qe,b,Ze,$,Z,It,M,b._endClamp&&"_endClamp"))||-.001,Rt=0,V=O;V--;)ve=it[V]||{},Ne=ve.pin,Ne&&ve.start-ve._pinPush<=L&&!M&&ve.end>0&&(W=ve.end-(b._startClamp?Math.max(0,ve.start):ve.start),(Ne===d&&ve.start-ve._pinPush<L||Ne===A)&&isNaN(bt)&&(Rt+=W*(1-ve.progress)),Ne===h&&(Tt+=W));if(L+=Rt,rt+=Rt,b._startClamp&&(b._startClamp+=Rt),b._endClamp&&!Vn&&(b._endClamp=rt||-.001,rt=Math.min(rt,Er(I,y))),E=rt-L||(L-=.01)&&.001,jt&&(de=Re.utils.clamp(0,1,Re.utils.normalize(L,rt,_e))),b._pinPush=Tt,He&&Rt&&(W={},W[y.a]="+="+Rt,A&&(W[y.p]="-="+le()),Re.set([He,ke],W)),h&&!(Am&&b.end>=Er(I,y)))W=zi(h),Ee=y===an,ce=le(),fe=parseFloat(ae(y.a))+Tt,!It&&rt>1&&(ut=(X?xt.scrollingElement||vi:I).style,ut={style:ut,value:ut["overflow"+y.a.toUpperCase()]},X&&zi(gt)["overflow"+y.a.toUpperCase()]!=="scroll"&&(ut.style["overflow"+y.a.toUpperCase()]="scroll")),Ch(h,J,W),re=Pc(h),F=Br(h,!0),Xe=Z&&Vs(I,Ee?Gn:an)(),g?(he=[g+y.os2,E+Tt+sn],he.t=J,V=g===tn?cd(h,y)+E+Tt:0,V&&(he.push(y.d,V+sn),J.style.flexBasis!=="auto"&&(J.style.flexBasis=V+sn)),Ba(he),A&&it.forEach(function(nt){nt.pin===A&&nt.vars.pinSpacing!==!1&&(nt._subPinOffset=!0)}),Z&&le(_e)):(V=cd(h,y),V&&J.style.flexBasis!=="auto"&&(J.style.flexBasis=V+sn)),Z&&(xe={top:F.top+(Ee?ce-L:Xe)+sn,left:F.left+(Ee?Xe:ce-L)+sn,boxSizing:"border-box",position:"fixed"},xe[Ro]=xe["max"+nl]=Math.ceil(F.width)+sn,xe[bo]=xe["max"+U_]=Math.ceil(F.height)+sn,xe[ki]=xe[ki+cu]=xe[ki+lu]=xe[ki+fu]=xe[ki+uu]="0",xe[tn]=W[tn],xe[tn+cu]=W[tn+cu],xe[tn+lu]=W[tn+lu],xe[tn+fu]=W[tn+fu],xe[tn+uu]=W[tn+uu],ee=lC(G,xe,C),Vn&&le(0)),r?(De=r._initted,Eh(1),r.render(r.duration(),!0,!0),q=ae(y.a)-fe+E+Tt,me=Math.abs(E-q)>1,Z&&me&&ee.splice(ee.length-2,2),r.render(0,!0,!0),De||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),Eh(0)):q=E,ut&&(ut.value?ut.style["overflow"+y.a.toUpperCase()]=ut.value:ut.style.removeProperty("overflow-"+y.a));else if(d&&le()&&!M)for(F=d.parentNode;F&&F!==gt;)F._pinOffset&&(L-=F._pinOffset,rt-=F._pinOffset),F=F.parentNode;ct&&ct.forEach(function(nt){return nt.revert(!1,!0)}),b.start=L,b.end=rt,We=Be=Vn?_e:le(),!M&&!Vn&&(We<_e&&le(_e),b.scroll.rec=0),b.revert(!1,!0),ne=bn(),pe&&(j=-1,pe.restart(!0)),Rn=0,r&&T&&(r._initted||Ke)&&r.progress()!==Ke&&r.progress(Ke||0,!0).render(r.time(),!0,!0),(jt||de!==b.progress||M||_||r&&!r._initted)&&(r&&!T&&(r._initted||de||r.vars.immediateRender!==!1)&&r.totalProgress(M&&L<-.001&&!de?Re.utils.normalize(L,rt,0):de,!0),b.progress=jt||(We-L)/E===de?0:de),h&&g&&(J._pinOffset=Math.round(b.progress*q)),se&&se.invalidate(),isNaN(St)||(St-=Re.getProperty(k,y.p),fn-=Re.getProperty(qe,y.p),Lc(k,y,St),Lc(He,y,St-(je||0)),Lc(qe,y,fn),Lc(ke,y,fn-(je||0))),jt&&!Vn&&b.update(),c&&!Vn&&!P&&(P=!0,c(b),P=!1)}},b.getVelocity=function(){return(le()-Be)/(bn()-zl)*1e3||0},b.endAnimation=function(){Al(b.callbackAnimation),r&&(se?se.progress(1):r.paused()?T||Al(r,b.direction<0,1):Al(r,r.reversed()))},b.labelToScroll=function(ye){return r&&r.labels&&(L||b.refresh()||L)+r.labels[ye]/r.duration()*E||0},b.getTrailing=function(ye){var Ge=it.indexOf(b),Oe=b.direction>0?it.slice(0,Ge).reverse():it.slice(Ge+1);return(gi(ye)?Oe.filter(function(je){return je.vars.preventOverlaps===ye}):Oe).filter(function(je){return b.direction>0?je.end<=L:je.start>=rt})},b.update=function(ye,Ge,Oe){if(!(M&&!Oe&&!ye)){var je=Vn===!0?_e:b.scroll(),Yt=ye?0:(je-L)/E,Ze=Yt<0?0:Yt>1?1:Yt||0,It=b.progress,jt,Rt,Tt,vt,li,bt,A,O;if(Ge&&(Be=We,We=M?le():je,S&&(U=tt,tt=r&&!T?r.totalProgress():Ze)),m&&h&&!Rn&&!Tc&&ji&&(!Ze&&L<je+(je-Be)/(bn()-zl)*m?Ze=1e-4:Ze===1&&rt>je+(je-Be)/(bn()-zl)*m&&(Ze=.9999)),Ze!==It&&b.enabled){if(jt=b.isActive=!!Ze&&Ze<1,Rt=!!It&&It<1,bt=jt!==Rt,li=bt||!!Ze!=!!It,b.direction=Ze>It?1:-1,b.progress=Ze,li&&!Rn&&(Tt=Ze&&!It?0:Ze===1?1:It===1?2:3,T&&(vt=!bt&&Y[Tt+1]!=="none"&&Y[Tt+1]||Y[Tt],O=r&&(vt==="complete"||vt==="reset"||vt in r))),N&&(bt||O)&&(O||f||!r)&&(Nn(N)?N(b):b.getTrailing(N).forEach(function(ce){return ce.endAnimation()})),T||(se&&!Rn&&!Tc?(se._dp._time-se._start!==se._time&&se.render(se._dp._time-se._start),se.resetTo?se.resetTo("totalProgress",Ze,r._tTime/r._tDur):(se.vars.totalProgress=Ze,se.invalidate().restart())):r&&r.totalProgress(Ze,!!(Rn&&(ne||ye)))),h){if(ye&&g&&(J.style[g+y.os2]=oe),!Z)ge(Hl(fe+q*Ze));else if(li){if(A=!ye&&Ze>It&&rt+1>je&&je+1>=Er(I,y),C)if(!ye&&(jt||A)){var V=Br(h,!0),W=je-L;kv(h,gt,V.top+(y===an?W:0)+sn,V.left+(y===an?0:W)+sn)}else kv(h,J);Ba(jt||A?ee:re),me&&Ze<1&&jt||ge(fe+(Ze===1&&!A?q:0))}}S&&!be.tween&&!Rn&&!Tc&&pe.restart(!0),a&&(bt||x&&Ze&&(Ze<1||!Th))&&Vu(a.targets).forEach(function(ce){return ce.classList[jt||x?"add":"remove"](a.className)}),o&&!T&&!ye&&o(b),li&&!Rn?(T&&(O&&(vt==="complete"?r.pause().totalProgress(1):vt==="reset"?r.restart(!0).pause():vt==="restart"?r.restart(!0):r[vt]()),o&&o(b)),(bt||!Th)&&(u&&bt&&jo(b,u),H[Tt]&&jo(b,H[Tt]),x&&(Ze===1?b.kill(!1,1):H[Tt]=0),bt||(Tt=Ze===1?1:3,H[Tt]&&jo(b,H[Tt]))),R&&!jt&&Math.abs(b.getVelocity())>(Vl(R)?R:2500)&&(Al(b.callbackAnimation),se?se.progress(1):Al(r,vt==="reverse"?1:!Ze,1))):T&&o&&!Rn&&o(b)}if(Ve){var F=M?je/M.duration()*(M._caScrollDist||0):je;Se(F+(k._isFlipped?1:0)),Ve(F)}Et&&Et(-je/M.duration()*(M._caScrollDist||0))}},b.enable=function(ye,Ge){b.enabled||(b.enabled=!0,pn(I,"resize",Gl),X||pn(I,"scroll",qo),ie&&pn(n,"refreshInit",ie),ye!==!1&&(b.progress=de=0,We=Be=j=le()),Ge!==!1&&b.refresh())},b.getTween=function(ye){return ye&&be?be.tween:se},b.setPositions=function(ye,Ge,Oe,je){if(M){var Yt=M.scrollTrigger,Ze=M.duration(),It=Yt.end-Yt.start;ye=Yt.start+It*ye/Ze,Ge=Yt.start+It*Ge/Ze}b.refresh(!1,!1,{start:bv(ye,Oe&&!!b._startClamp),end:bv(Ge,Oe&&!!b._endClamp)},je),b.update()},b.adjustPinSpacing=function(ye){if(he&&ye){var Ge=he.indexOf(y.d)+1;he[Ge]=parseFloat(he[Ge])+ye+sn,he[1]=parseFloat(he[1])+ye+sn,Ba(he)}},b.disable=function(ye,Ge){if(ye!==!1&&b.revert(!0,!0),b.enabled&&(b.enabled=b.isActive=!1,Ge||se&&se.pause(),_e=0,Ae&&(Ae.uncache=1),ie&&hn(n,"refreshInit",ie),pe&&(pe.pause(),be.tween&&be.tween.kill()&&(be.tween=0)),!X)){for(var Oe=it.length;Oe--;)if(it[Oe].scroller===I&&it[Oe]!==b)return;hn(I,"resize",Gl),X||hn(I,"scroll",qo)}},b.kill=function(ye,Ge){b.disable(ye,Ge),se&&!Ge&&se.kill(),l&&delete Cm[l];var Oe=it.indexOf(b);Oe>=0&&it.splice(Oe,1),Oe===Hn&&yf>0&&Hn--,Oe=0,it.forEach(function(je){return je.scroller===b.scroller&&(Oe=1)}),Oe||Vn||(b.scroll.rec=0),r&&(r.scrollTrigger=null,ye&&r.revert({kill:!1}),Ge||r.kill()),He&&[He,ke,k,qe].forEach(function(je){return je.parentNode&&je.parentNode.removeChild(je)}),du===b&&(du=0),h&&(Ae&&(Ae.uncache=1),Oe=0,it.forEach(function(je){return je.pin===h&&Oe++}),Oe||(Ae.spacer=0)),i.onKill&&i.onKill(b)},it.push(b),b.enable(!1,!1),Nt&&Nt(b),r&&r.add&&!E){var dt=b.update;b.update=function(){b.update=dt,ot.cache++,L||rt||b.refresh()},Re.delayedCall(.01,b.update),E=.01,L=rt=0}else b.refresh();h&&sC()},n.register=function(i){return ca||(Re=i||s1(),r1()&&window.document&&n.enable(),ca=Bl),ca},n.defaults=function(i){if(i)for(var r in i)Rc[r]=i[r];return Rc},n.disable=function(i,r){Bl=0,it.forEach(function(o){return o[r?"kill":"disable"](i)}),hn(st,"wheel",qo),hn(xt,"scroll",qo),clearInterval(Ec),hn(xt,"touchcancel",vr),hn(gt,"touchstart",vr),Ac(hn,xt,"pointerdown,touchstart,mousedown",Pv),Ac(hn,xt,"pointerup,touchend,mouseup",Lv),ud.kill(),wc(hn);for(var s=0;s<ot.length;s+=3)Cc(hn,ot[s],ot[s+1]),Cc(hn,ot[s],ot[s+2])},n.enable=function(){if(st=window,xt=document,vi=xt.documentElement,gt=xt.body,Re){if(Vu=Re.utils.toArray,ou=Re.utils.clamp,wm=Re.core.context||vr,Eh=Re.core.suppressOverwrites||vr,L_=st.history.scrollRestoration||"auto",Rm=st.pageYOffset||0,Re.core.globals("ScrollTrigger",n),gt){Bl=1,za=document.createElement("div"),za.style.height="100vh",za.style.position="absolute",m1(),QA(),Qt.register(Re),n.isTouch=Qt.isTouch,fs=Qt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Tm=Qt.isTouch===1,pn(st,"wheel",qo),P_=[st,xt,vi,gt],Re.matchMedia?(n.matchMedia=function(c){var f=Re.matchMedia(),d;for(d in c)f.add(d,c[d]);return f},Re.addEventListener("matchMediaInit",function(){h1(),O_()}),Re.addEventListener("matchMediaRevert",function(){return d1()}),Re.addEventListener("matchMedia",function(){xo(0,1),ko("matchMedia")}),Re.matchMedia().add("(orientation: portrait)",function(){return Ah(),Ah})):console.warn("Requires GSAP 3.11.0 or later"),Ah(),pn(xt,"scroll",qo);var i=gt.hasAttribute("style"),r=gt.style,s=r.borderTopStyle,o=Re.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=Br(gt),an.m=Math.round(a.top+an.sc())||0,Gn.m=Math.round(a.left+Gn.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),i||(gt.setAttribute("style",""),gt.removeAttribute("style")),Ec=setInterval(Iv,250),Re.delayedCall(.5,function(){return Tc=0}),pn(xt,"touchcancel",vr),pn(gt,"touchstart",vr),Ac(pn,xt,"pointerdown,touchstart,mousedown",Pv),Ac(pn,xt,"pointerup,touchend,mouseup",Lv),Em=Re.utils.checkPrefix("transform"),Sf.push(Em),ca=bn(),ud=Re.delayedCall(.2,xo).pause(),fa=[xt,"visibilitychange",function(){var c=st.innerWidth,f=st.innerHeight;xt.hidden?(Av=c,Cv=f):(Av!==c||Cv!==f)&&Gl()},xt,"DOMContentLoaded",xo,st,"load",xo,st,"resize",Gl],wc(pn),it.forEach(function(c){return c.enable(0,1)}),l=0;l<ot.length;l+=3)Cc(hn,ot[l],ot[l+1]),Cc(hn,ot[l],ot[l+2])}else if(xt){var u=function c(){n.enable(),xt.removeEventListener("DOMContentLoaded",c)};xt.addEventListener("DOMContentLoaded",u)}}},n.config=function(i){"limitCallbacks"in i&&(Th=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(Ec)||(Ec=r)&&setInterval(Iv,r),"ignoreMobileResize"in i&&(Tm=n.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(wc(hn)||wc(pn,i.autoRefreshEvents||"none"),t1=(i.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(i,r){var s=qn(i),o=ot.indexOf(s),a=Fo(s);~o&&ot.splice(o,a?6:2),r&&(a?Ar.unshift(st,r,gt,r,vi,r):Ar.unshift(s,r))},n.clearMatchMedia=function(i){it.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},n.isInViewport=function(i,r,s){var o=(gi(i)?qn(i):i).getBoundingClientRect(),a=o[s?Ro:bo]*r||0;return s?o.right-a>0&&o.left+a<st.innerWidth:o.bottom-a>0&&o.top+a<st.innerHeight},n.positionInViewport=function(i,r,s){gi(i)&&(i=qn(i));var o=i.getBoundingClientRect(),a=o[s?Ro:bo],l=r==null?a/2:r in fd?fd[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/st.innerWidth:(o.top+l)/st.innerHeight},n.killAll=function(i){if(it.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=Oo.killAll||[];Oo={},r.forEach(function(s){return s()})}},n}();et.version="3.15.0";et.saveStyles=function(n){return n?Vu(n).forEach(function(e){if(e&&e.style){var t=pi.indexOf(e);t>=0&&pi.splice(t,5),pi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Re.core.getCache(e),wm())}}):pi};et.revert=function(n,e){return O_(!n,e)};et.create=function(n,e){return new et(n,e)};et.refresh=function(n){return n?Gl(!0):(ca||et.register())&&xo(!0)};et.update=function(n){return++ot.cache&&jr(n===!0?2:0)};et.clearScrollMemory=p1;et.maxScroll=function(n,e){return Er(n,e?Gn:an)};et.getScrollFunc=function(n,e){return Vs(qn(n),e?Gn:an)};et.getById=function(n){return Cm[n]};et.getAll=function(){return it.filter(function(n){return n.vars.id!=="ScrollSmoother"})};et.isScrolling=function(){return!!ji};et.snapDirectional=F_;et.addEventListener=function(n,e){var t=Oo[n]||(Oo[n]=[]);~t.indexOf(e)||t.push(e)};et.removeEventListener=function(n,e){var t=Oo[n],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};et.batch=function(n,e){var t=[],i={},r=e.interval||.016,s=e.batchMax||1e9,o=function(u,c){var f=[],d=[],h=Re.delayedCall(r,function(){c(f,d),f=[],d=[]}).pause();return function(g){f.length||h.restart(!0),f.push(g.trigger),d.push(g),s<=f.length&&h.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&Nn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Nn(s)&&(s=s(),pn(et,"refresh",function(){return s=e.batchMax()})),Vu(n).forEach(function(l){var u={};for(a in i)u[a]=i[a];u.trigger=l,t.push(et.create(u))}),t};var Bv=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},Rh=function n(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Qt.isTouch?" pinch-zoom":""):"none",e===vi&&n(gt,t)},Dc={auto:1,scroll:1},cC=function(e){var t=e.event,i=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Re.core.getCache(s),a=bn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==gt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Dc[(l=zi(s)).overflowY]||Dc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!Fo(s)&&(Dc[(l=zi(s)).overflowY]||Dc[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},_1=function(e,t,i,r){return Qt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&cC,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&pn(xt,Qt.eventTypes[0],Vv,!1,!0)},onDisable:function(){return hn(xt,Qt.eventTypes[0],Vv,!0)}})},fC=/(input|label|select|textarea)/i,Hv,Vv=function(e){var t=fC.test(e.target.tagName);(t||Hv)&&(e._gsapAllow=!0,Hv=t)},dC=function(e){uo(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,u=qn(e.target)||vi,c=Re.core.globals().ScrollSmoother,f=c&&c.get(),d=fs&&(e.content&&qn(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),h=Vs(u,an),g=Vs(u,Gn),_=1,m=(Qt.isTouch&&st.visualViewport?st.visualViewport.scale*st.visualViewport.width:st.outerWidth)/st.innerWidth,p=0,v=Nn(r)?function(){return r(a)}:function(){return r||2.8},x,S,C=_1(u,e.type,!0,s),w=function(){return S=!1},M=vr,R=vr,N=function(){l=Er(u,an),R=ou(fs?1:0,l),i&&(M=ou(0,Er(u,Gn))),x=Po},y=function(){d._gsap.y=Hl(parseFloat(d._gsap.y)+h.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},T=function(){if(S){requestAnimationFrame(w);var D=Hl(a.deltaY/2),$=R(h.v-D);if(d&&$!==h.v+h.offset){h.offset=$-h.v;var b=Hl((parseFloat(d&&d._gsap.y)||0)-h.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+b+", 0, 1)",d._gsap.y=b+"px",h.cacheID=ot.cache,jr()}return!0}h.offset&&y(),S=!0},I,B,X,Z,H=function(){N(),I.isActive()&&I.vars.scrollY>l&&(h()>l?I.progress(1)&&h(l):I.resetTo("scrollY",l))};return d&&Re.set(d,{y:"+=0"}),e.ignoreCheck=function(Y){return fs&&Y.type==="touchmove"&&T()||_>1.05&&Y.type!=="touchstart"||a.isGesturing||Y.touches&&Y.touches.length>1},e.onPress=function(){S=!1;var Y=_;_=Hl((st.visualViewport&&st.visualViewport.scale||1)/m),I.pause(),Y!==_&&Rh(u,_>1.01?!0:i?!1:"x"),B=g(),X=h(),N(),x=Po},e.onRelease=e.onGestureStart=function(Y,D){if(h.offset&&y(),!D)Z.restart(!0);else{ot.cache++;var $=v(),b,ie;i&&(b=g(),ie=b+$*.05*-Y.velocityX/.227,$*=Bv(g,b,ie,Er(u,Gn)),I.vars.scrollX=M(ie)),b=h(),ie=b+$*.05*-Y.velocityY/.227,$*=Bv(h,b,ie,Er(u,an)),I.vars.scrollY=R(ie),I.invalidate().duration($).play(.01),(fs&&I.vars.scrollY>=l||b>=l-1)&&Re.to({},{onUpdate:H,duration:$})}o&&o(Y)},e.onWheel=function(){I._ts&&I.pause(),bn()-p>1e3&&(x=0,p=bn())},e.onChange=function(Y,D,$,b,ie){if(Po!==x&&N(),D&&i&&g(M(b[2]===D?B+(Y.startX-Y.x):g()+D-b[1])),$){h.offset&&y();var Te=ie[2]===$,Ie=Te?X+Y.startY-Y.y:h()+$-ie[1],j=R(Ie);Te&&Ie!==j&&(X+=j-Ie),h(j)}($||D)&&jr()},e.onEnable=function(){Rh(u,i?!1:"x"),et.addEventListener("refresh",H),pn(st,"resize",H),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=g.smooth=!1),C.enable()},e.onDisable=function(){Rh(u,!0),hn(st,"resize",H),et.removeEventListener("refresh",H),C.kill()},e.lockAxis=e.lockAxis!==!1,a=new Qt(e),a.iOS=fs,fs&&!h()&&h(1),fs&&Re.ticker.add(vr),Z=a._dc,I=Re.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:g1(h,h(),function(){return I.pause()})},onUpdate:jr,onComplete:Z.vars.onComplete}),a};et.sort=function(n){if(Nn(n))return it.sort(n);var e=st.pageYOffset||0;return et.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+st.innerHeight}),it.sort(n||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};et.observe=function(n){return new Qt(n)};et.normalizeScroll=function(n){if(typeof n>"u")return zn;if(n===!0&&zn)return zn.enable();if(n===!1){zn&&zn.kill(),zn=n;return}var e=n instanceof Qt?n:dC(n);return zn&&zn.target===e.target&&zn.kill(),Fo(e.target)&&(zn=e),e};et.core={_getVelocityProp:Mm,_inputObserver:_1,_scrollers:ot,_proxies:Ar,bridge:{ss:function(){ji||ko("scrollStart"),ji=bn()},ref:function(){return Rn}}};s1()&&Re.registerPlugin(et);const hC="/Portfolio/dist/assets/pfp-DvaCKBwK.jpeg";Xt.registerPlugin(et);function pC(){const n=Mt.useRef(null),e=Mt.useRef(null),t=Mt.useRef(null),i=hl();return Mt.useLayoutEffect(()=>{const r=Xt.context(()=>{Xt.fromTo(".hero-line",{yPercent:120,opacity:0},{yPercent:0,opacity:1,duration:i?.4:1.4,ease:"power4.out",stagger:.12,delay:.2}),Xt.fromTo(t.current,{opacity:0,y:20},{opacity:1,y:0,duration:1,ease:"power2.out",delay:.9}),!i&&window.matchMedia("(min-width: 768px)").matches&&Xt.to(".hero-copy",{yPercent:-30,opacity:0,ease:"none",scrollTrigger:{trigger:n.current,start:"top top",end:"80% top",scrub:.6}})},n);return()=>r.revert()},[i]),K.jsxs("section",{ref:n,id:"hero",className:"relative min-h-auto w-full overflow-hidden bg-[#1E233D] pb-20",children:[K.jsx("div",{className:"pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_45%,rgba(245,79,27,0.10),transparent_55%)]"}),K.jsxs("div",{className:"relative z-10 mx-auto grid mt-10 max-w-[1600px] grid-cols-1 items-center gap-6 px-4 pt-16 sm:px-6 md:mt-[4.5rem] md:grid-cols-2 md:gap-8 md:px-14 md:pt-0",children:[K.jsxs("div",{className:"hero-copy order-2 md:order-1",children:[K.jsx("h1",{ref:e,className:"top-5 -mt-4 font-display font-medium text-[12vw] leading-[1.15] tracking-tightest text-[#F54F1B] uppercase xs:text-[13vw] sm:text-[10vw] md:text-[8vw] lg:text-[9vw] xl:text-[10vw] break-words",children:K.jsx("span",{className:"block overflow-visible xs:flex flex-shrink-0 text-auto",children:K.jsx("span",{className:"block overflow-visible xs:overflow-hidden",children:K.jsx("span",{className:"hero-line block whitespace-nowrap text-transparent [-webkit-text-stroke:2px_#F54F1B] bg-gradient-to-r from-[#F54F1B] to-[#F54F1B] bg-[length:0%_100%] bg-no-repeat bg-left transition-[background-size] duration-500 hover:bg-[length:100%_100%] bg-clip-text",children:"HAMZA  ALI"})})})}),K.jsx("p",{ref:t,className:"mt-4 max-w-sm font-mono text-[11px] leading-relaxed text-bone-dim xs:text-xs",children:'Amid glowing monitor lights. I, "Hamza Ali", a digital merchant curates product pages by day, then transforms raw footage into cinematic stories by night. Seamlessly blending sales strategy with creative flow, they slice clips and color-grade frames for YouTube vlogs, turning everyday life and online hustle into a single, vibrant digital journey.'}),K.jsxs("div",{className:"mt-6 flex flex-wrap items-center gap-4 xs:gap-6",children:[K.jsxs("a",{href:"#projects",className:"group inline-flex items-center gap-2.5 border border-line px-4 py-2 font-mono-label text-[15px] text-bone transition-colors duration-300 hover:border-[#F54F1B] hover:text-[#F54F1B] xs:px-5 xs:py-2.5 xs:text-xs",children:["View Work",K.jsx("span",{className:"inline-block transition-transform duration-300 group-hover:translate-x-1",children:"→"})]}),K.jsx("span",{className:"font-mono text-[12px] text-bone-dim xs:text-xs",children:"Scroll to explore ↓"})]})]}),K.jsxs("div",{className:"relative order-1 w-full max-w-[28rem] justify-self-center overflow-hidden rounded-[1.5rem] border border-[#F54F1B]/20 bg-[#1E233D] transition-shadow duration-500 hover:shadow-[0_30px_140px_rgba(245,79,27,0.14)] xs:max-w-[28rem] xs:rounded-[2rem] md:order-2 md:max-w-[30rem]",children:[K.jsx("div",{className:"absolute inset-0 border-[1px] border-[#F54F1B]/10"}),K.jsx("div",{className:"relative flex items-center justify-center p-3 xs:p-4 md:p-6",children:K.jsxs("div",{className:"group relative w-full overflow-hidden rounded-[1.25rem] border border-[#F54F1B]/30 bg-[#1E233D]/10 shadow-[0_30px_80px_rgba(245,79,27,0.18)] transition-transform duration-500 hover:-translate-y-1 xs:rounded-[2rem] flex flex-col h-auto md:h-auto lg:h-auto xl:h-auto",children:[K.jsx("div",{className:"overflow-hidden h-[80%]",children:K.jsx("img",{src:hC,alt:"Muhammad Ali Abeer Khan",className:"w-full h-full object-cover object-[70%_10%] md:object-[45%_20%]"})}),K.jsxs("div",{className:"border-t border-line/70 bg-[#1E233D]/90 px-4 py-3 xs:px-5 xs:py-4",children:[K.jsxs("p",{className:"text-[10px] uppercase tracking-[0.1em] text-bone-dim font-mono-label xs:text-xs",children:["Hamza Ali ",K.jsx("span",{className:"text-[#F54F1B]",children:"—"})," A Professional Content Creator ",K.jsx("span",{className:"text-[#F54F1B]",children:"."})]}),K.jsxs("h2",{className:"mt-1 text-base font-semibold tracking-tight text-bone sm:text-xl md:mt-2",children:["Content Creator  ",K.jsx("span",{className:"text-[#F54F1B]",children:"|"}),"  Digital Marketer  ",K.jsx("span",{className:"text-[#F54F1B]",children:"|"}),"  Influencer",K.jsx("span",{className:"text-[#F54F1B]",children:" ."})]}),K.jsx("p",{className:"mt-1 text-[11px] leading-relaxed text-bone-dim xs:mt-2 xs:text-xs",children:"Began content creation in 2021, accumulating 5 years of experience. Active on YouTube, Instagram, Facebook, and TikTok with over 10K YouTube subscribers. Collaborated with 50+ brands in various sectors. Skilled in storytelling, scripting, video production, and social media content. Launched a UGC Content Creation Agency, successfully managing communication, campaigns, and project execution for 10–15+ brands."})]})]})})]})]}),K.jsx("div",{className:"absolute bottom-0 left-0 right-0 z-10 overflow-hidden border-t border-line py-3",children:K.jsx("div",{className:"animate-marquee flex w-max gap-10 whitespace-nowrap font-mono-label text-[10px] text-bone-dim",children:Array.from({length:2}).map((r,s)=>K.jsxs("span",{className:"flex gap-10",children:[K.jsx("span",{children:"DIGITAL MARKETING"}),K.jsx("span",{children:"·"}),K.jsx("span",{children:"INFLUENCER MARKETING"}),K.jsx("span",{children:"·"}),K.jsx("span",{children:"CONTENT CREATION"}),K.jsx("span",{children:"·"}),K.jsx("span",{children:"BRAND PROMOTION"}),K.jsx("span",{children:"·"}),K.jsx("span",{children:"PR MANAGEMENT"}),K.jsx("span",{children:"·"}),K.jsx("span",{children:"SOCIAL MEDIA MARKETING"}),K.jsx("span",{children:"."}),K.jsx("span",{children:"VIDEO EDITING"}),K.jsx("span",{children:"·"})]},s))})})]})}const mr="/Portfolio/dist/";Xt.registerPlugin(et);const mC=[{id:"01",title:"UGC — Agency",category:" Agency for UGC Content Creation",year:"2023-Present",span:"md:col-span-6",height:"md:h-[400px]",image:`${mr}assets/ugcAgency.jpg`,href:"https://www.instagram.com/agency_by_hamza"},{id:"02",title:"EDU GATE HUB — Educational Platform",category:"Promotional Video for EDU GATE HUB",year:"2026",span:"md:col-span-6",height:"md:h-[400px]",image:`${mr}assets/EdugateHub.jpeg`,video:`${mr}assets/client-01.mp4`},{id:"03",title:"OJIIZ — Verified job & recruitment platform",category:"Promotional Video for OJIIZ",year:"2026",span:"md:col-span-6",height:"md:h-[400px]",image:`${mr}assets/ojiiz.png`,video:`${mr}assets/client-02.mp4`},{id:"04",title:"Visa Bridge — Visa Consultancy",category:"Promotional Video for Visa Bridge",year:"2026",span:"md:col-span-6",height:"md:h-[400px]",image:`${mr}assets/visa-bridge.jpeg`,video:`${mr}assets/client-03.mp4`},{id:"05",title:"Content Creation — YouTube",category:"Content Creation",year:"2021—Present",span:"md:col-span-6",height:"md:h-[400px]",image:`${mr}assets/youtube.jpeg`,href:"https://www.youtube.com/@hamzarajputvlogs273"},{id:"06",title:"Content Creation — TikTok",category:"Content Creation",year:"2021—Present",span:"md:col-span-6",height:"md:h-[400px]",image:`${mr}assets/tiktok.png`,href:"https://www.tiktok.com/@hamzarajputvlogs"},{id:"07",title:"Content Creation — Instagram",category:"Content Creation",year:"2021—Present",span:"md:col-span-6",height:"md:h-[400px]",image:`${mr}assets/insta.jpeg`,href:"https://www.instagram.com/hamzaaliofficial07/"}],gC=["02","03","04"];function _C({project:n}){const e=Mt.useRef(null),t=Mt.useRef(null),i=hl(),r=gC.includes(n.id)&&!!n.video,s=()=>{!r||!t.current||(t.current.muted=!1,t.current.volume=1,t.current.play().catch(()=>{}))},o=l=>{if(i)return;const u=e.current.getBoundingClientRect(),c=(l.clientX-u.left)/u.width-.5,f=(l.clientY-u.top)/u.height-.5;Xt.to(e.current,{rotateX:f*-6,rotateY:c*8,scale:1.015,duration:.5,ease:"power2.out",transformPerspective:900})},a=()=>{r&&t.current&&(t.current.pause(),t.current.currentTime=0),Xt.to(e.current,{rotateX:0,rotateY:0,scale:1,duration:.7,ease:"power3.out"})};return K.jsxs("article",{ref:e,onMouseEnter:r?s:void 0,onMouseMove:o,onMouseLeave:a,className:`project-card group relative flex flex-col justify-end overflow-hidden rounded-2xl border border-[#F54F1B]/20 bg-[#1E233D] p-7 ${n.span} ${n.height} h-[340px] transition-colors duration-500 hover:border-[#F54F1B]/80 `,style:{transformStyle:"preserve-3d",willChange:"transform"},children:[K.jsx("div",{className:"pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(245,79,27,0.08),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"}),K.jsx("span",{className:"absolute right-7 top-7 font-mono text-xs text-bone-dim",children:n.id}),n.image&&K.jsx("img",{src:n.image,alt:n.title,className:`pointer-events-none absolute inset-0 h-full w-full object-cover rounded-2xl opacity-100 transition-opacity duration-500 ${r?"group-hover:opacity-0":""}`}),r&&K.jsx("video",{ref:t,className:"pointer-events-none absolute inset-0 h-full w-full object-cover rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100",src:n.video,muted:!1,loop:!0,playsInline:!0,preload:"metadata"}),K.jsxs("div",{className:`absolute left-7 right-7 bottom-7 z-10 flex flex-col gap-5 opacity-100 transition-opacity duration-300 ${r?"group-hover:opacity-0":""}`,children:[K.jsxs("div",{className:"rounded-2xl border border-[#F54F1B]/20 bg-[#1E233D]/40 p-4 backdrop-blur-sm",children:[K.jsx("p",{className:"font-mono-label mb-2 text-[11px] text-[#F54F1B]/80",children:n.category}),K.jsx("h3",{className:"font-display text-3xl text-bone md:text-4xl transition-all duration-300 group-hover:text-white group-hover:[text-shadow:0_0_8px_rgba(245,79,27,0.6),0_0_20px_rgba(245,79,27,0.3)]",children:n.title})]}),K.jsx("div",{className:"flex items-center gap-2 text-[10px] text-bone-dim",children:K.jsx("span",{className:"rounded-full border border-line px-2 py-1 bg-[#1E233D]/30",children:n.year})}),K.jsx("div",{className:`flex items-center gap-2 font-mono-label text-[10px] text-bone-dim ${r?"group-hover:text-[#F54F1B]":""}`,children:n.href?K.jsxs("a",{href:n.href,target:"_blank",rel:"noopener noreferrer",className:"hover:underline cursor-pointer",children:["View Project ",K.jsx("span",{children:"→"})]}):n.video?null:K.jsx("span",{className:"text-bone/80",children:"Coming Soon"})})]})]})}function vC(){const n=Mt.useRef(null),e=hl();return Mt.useLayoutEffect(()=>{const t=Xt.context(()=>{Xt.utils.toArray(".project-card").forEach((i,r)=>{Xt.fromTo(i,{y:e?0:60,opacity:0},{y:0,opacity:1,duration:.9,ease:"power3.out",scrollTrigger:{trigger:i,start:"top 88%"},delay:r%2*.08})})},n);return()=>t.revert()},[e]),K.jsx(K.Fragment,{children:K.jsxs("section",{ref:n,id:"projects",className:"relative mx-auto max-w-[1600px] px-6 pt-28 pb-10 md:px-14 md:pt-40 md:pb-24",children:[K.jsxs("div",{className:"mb-16 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end",children:[K.jsxs("div",{children:[K.jsx("p",{className:"font-mono-label mb-4 text-xs text-[#F54F1B]/80",children:"My Workings..."}),K.jsxs("h2",{className:"font-display text-display-lg text-bone",children:["Recent Projects",K.jsx("span",{className:"text-[#F54F1B]",children:"."})]})]}),K.jsx("p",{className:"max-w-xs font-mono text-xs leading-relaxed text-bone-dim",children:"A selection of my most recent work, showcasing a range of projects that highlight my content creation, video production, and creative direction skills. Each project reflects my commitment to delivering high-quality results and innovative solutions."})]}),K.jsx("div",{className:"grid grid-cols-1 gap-6 md:grid-cols-12",children:mC.map(t=>K.jsx(_C,{project:t},t.id))})]})})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const k_="169",xC=0,Gv=1,yC=2,v1=1,SC=2,Ur=3,Gs=0,oi=1,ar=2,Us=0,Ha=1,Wv=2,Xv=3,Yv=4,MC=5,ho=100,EC=101,TC=102,wC=103,AC=104,CC=200,RC=201,bC=202,PC=203,Pm=204,Lm=205,LC=206,DC=207,NC=208,IC=209,UC=210,FC=211,OC=212,kC=213,zC=214,Dm=0,Nm=1,Im=2,il=3,Um=4,Fm=5,Om=6,km=7,x1=0,BC=1,HC=2,Fs=0,VC=1,GC=2,WC=3,XC=4,YC=5,jC=6,$C=7,y1=300,rl=301,sl=302,zm=303,Bm=304,Fd=306,Hm=1e3,yo=1001,Vm=1002,Xi=1003,qC=1004,Nc=1005,Hi=1006,bh=1007,So=1008,es=1009,S1=1010,M1=1011,Wu=1012,z_=1013,zo=1014,Wr=1015,Qu=1016,B_=1017,H_=1018,ol=1020,E1=35902,T1=1021,w1=1022,ur=1023,A1=1024,C1=1025,Va=1026,al=1027,R1=1028,V_=1029,b1=1030,G_=1031,W_=1033,Ef=33776,Tf=33777,wf=33778,Af=33779,Gm=35840,Wm=35841,Xm=35842,Ym=35843,jm=36196,$m=37492,qm=37496,Km=37808,Zm=37809,Qm=37810,Jm=37811,eg=37812,tg=37813,ng=37814,ig=37815,rg=37816,sg=37817,og=37818,ag=37819,lg=37820,ug=37821,Cf=36492,cg=36494,fg=36495,P1=36283,dg=36284,hg=36285,pg=36286,KC=3200,ZC=3201,QC=0,JC=1,gs="",sr="srgb",qs="srgb-linear",X_="display-p3",Od="display-p3-linear",dd="linear",Lt="srgb",hd="rec709",pd="p3",Ko=7680,jv=519,eR=512,tR=513,nR=514,L1=515,iR=516,rR=517,sR=518,oR=519,$v=35044,qv="300 es",Xr=2e3,md=2001;class pl{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ph=Math.PI/180,mg=180/Math.PI;function Ju(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(An[n&255]+An[n>>8&255]+An[n>>16&255]+An[n>>24&255]+"-"+An[e&255]+An[e>>8&255]+"-"+An[e>>16&15|64]+An[e>>24&255]+"-"+An[t&63|128]+An[t>>8&255]+"-"+An[t>>16&255]+An[t>>24&255]+An[i&255]+An[i>>8&255]+An[i>>16&255]+An[i>>24&255]).toLowerCase()}function Ln(n,e,t){return Math.max(e,Math.min(t,n))}function aR(n,e){return(n%e+e)%e}function Lh(n,e,t){return(1-t)*n+t*e}function Cl(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function $n(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class $e{constructor(e=0,t=0){$e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ln(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Je{constructor(e,t,i,r,s,o,a,l,u){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],d=i[2],h=i[5],g=i[8],_=r[0],m=r[3],p=r[6],v=r[1],x=r[4],S=r[7],C=r[2],w=r[5],M=r[8];return s[0]=o*_+a*v+l*C,s[3]=o*m+a*x+l*w,s[6]=o*p+a*S+l*M,s[1]=u*_+c*v+f*C,s[4]=u*m+c*x+f*w,s[7]=u*p+c*S+f*M,s[2]=d*_+h*v+g*C,s[5]=d*m+h*x+g*w,s[8]=d*p+h*S+g*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,d=a*l-c*s,h=u*s-o*l,g=t*f+i*d+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*u-c*i)*_,e[2]=(a*i-r*o)*_,e[3]=d*_,e[4]=(c*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=h*_,e[7]=(i*l-u*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Dh.makeScale(e,t)),this}rotate(e){return this.premultiply(Dh.makeRotation(-e)),this}translate(e,t){return this.premultiply(Dh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Dh=new Je;function D1(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Xu(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function lR(){const n=Xu("canvas");return n.style.display="block",n}const Kv={};function Rf(n){n in Kv||(Kv[n]=!0,console.warn(n))}function uR(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function cR(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function fR(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Zv=new Je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Qv=new Je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Rl={[qs]:{transfer:dd,primaries:hd,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[sr]:{transfer:Lt,primaries:hd,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Od]:{transfer:dd,primaries:pd,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(Qv),fromReference:n=>n.applyMatrix3(Zv)},[X_]:{transfer:Lt,primaries:pd,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(Qv),fromReference:n=>n.applyMatrix3(Zv).convertLinearToSRGB()}},dR=new Set([qs,Od]),_t={enabled:!0,_workingColorSpace:qs,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!dR.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Rl[e].toReference,r=Rl[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Rl[n].primaries},getTransfer:function(n){return n===gs?dd:Rl[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(Rl[e].luminanceCoefficients)}};function Ga(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Nh(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Zo;class hR{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Zo===void 0&&(Zo=Xu("canvas")),Zo.width=e.width,Zo.height=e.height;const i=Zo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Zo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Xu("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ga(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ga(t[i]/255)*255):t[i]=Ga(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let pR=0;class N1{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pR++}),this.uuid=Ju(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ih(r[o].image)):s.push(Ih(r[o]))}else s=Ih(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ih(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?hR.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let mR=0;class Xn extends pl{constructor(e=Xn.DEFAULT_IMAGE,t=Xn.DEFAULT_MAPPING,i=yo,r=yo,s=Hi,o=So,a=ur,l=es,u=Xn.DEFAULT_ANISOTROPY,c=gs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mR++}),this.uuid=Ju(),this.name="",this.source=new N1(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==y1)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hm:e.x=e.x-Math.floor(e.x);break;case yo:e.x=e.x<0?0:1;break;case Vm:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hm:e.y=e.y-Math.floor(e.y);break;case yo:e.y=e.y<0?0:1;break;case Vm:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=y1;Xn.DEFAULT_ANISOTROPY=1;class Zt{constructor(e=0,t=0,i=0,r=1){Zt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],d=l[1],h=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(c-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(u+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,S=(h+1)/2,C=(p+1)/2,w=(c+d)/4,M=(f+_)/4,R=(g+m)/4;return x>S&&x>C?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=w/i,s=M/i):S>C?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=w/r,s=R/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=M/s,r=R/s),this.set(i,r,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(d-c)*(d-c));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(f-_)/v,this.z=(d-c)/v,this.w=Math.acos((u+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gR extends pl{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Zt(0,0,e,t),this.scissorTest=!1,this.viewport=new Zt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Xn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new N1(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bo extends gR{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class I1 extends Xn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Xi,this.minFilter=Xi,this.wrapR=yo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class _R extends Xn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Xi,this.minFilter=Xi,this.wrapR=yo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ec{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const d=s[o+0],h=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=h,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==d||u!==h||c!==g){let m=1-a;const p=l*d+u*h+c*g+f*_,v=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const C=Math.sqrt(x),w=Math.atan2(C,p*v);m=Math.sin(m*w)/C,a=Math.sin(a*w)/C}const S=a*v;if(l=l*m+d*S,u=u*m+h*S,c=c*m+g*S,f=f*m+_*S,m===1-a){const C=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=C,u*=C,c*=C,f*=C}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],d=s[o+1],h=s[o+2],g=s[o+3];return e[t]=a*g+c*f+l*h-u*d,e[t+1]=l*g+c*d+u*f-a*h,e[t+2]=u*g+c*h+a*d-l*f,e[t+3]=c*g-a*f-l*d-u*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),d=l(i/2),h=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*c*f+u*h*g,this._y=u*h*f-d*c*g,this._z=u*c*g+d*h*f,this._w=u*c*f-d*h*g;break;case"YXZ":this._x=d*c*f+u*h*g,this._y=u*h*f-d*c*g,this._z=u*c*g-d*h*f,this._w=u*c*f+d*h*g;break;case"ZXY":this._x=d*c*f-u*h*g,this._y=u*h*f+d*c*g,this._z=u*c*g+d*h*f,this._w=u*c*f-d*h*g;break;case"ZYX":this._x=d*c*f-u*h*g,this._y=u*h*f+d*c*g,this._z=u*c*g-d*h*f,this._w=u*c*f+d*h*g;break;case"YZX":this._x=d*c*f+u*h*g,this._y=u*h*f+d*c*g,this._z=u*c*g-d*h*f,this._w=u*c*f-d*h*g;break;case"XZY":this._x=d*c*f-u*h*g,this._y=u*h*f-d*c*g,this._z=u*c*g+d*h*f,this._w=u*c*f+d*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],f=t[10],d=i+a+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(c-l)*h,this._y=(s-u)*h,this._z=(o-r)*h}else if(i>a&&i>f){const h=2*Math.sqrt(1+i-a-f);this._w=(c-l)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+u)/h}else if(a>f){const h=2*Math.sqrt(1+a-i-f);this._w=(s-u)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(l+c)/h}else{const h=2*Math.sqrt(1+f-i-a);this._w=(o-r)/h,this._x=(s+u)/h,this._y=(l+c)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ln(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-t;return this._w=h*o+t*this._w,this._x=h*i+t*this._x,this._y=h*r+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-t)*c)/u,d=Math.sin(t*c)/u;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Jv.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Jv.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*u+o*f-a*c,this.y=i+l*c+a*u-s*f,this.z=r+l*f+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Uh.copy(this).projectOnVector(e),this.sub(Uh)}reflect(e){return this.sub(Uh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ln(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Uh=new z,Jv=new ec;class tc{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Qi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Qi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Qi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Qi):Qi.fromBufferAttribute(s,o),Qi.applyMatrix4(e.matrixWorld),this.expandByPoint(Qi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ic.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ic.copy(i.boundingBox)),Ic.applyMatrix4(e.matrixWorld),this.union(Ic)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qi),Qi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bl),Uc.subVectors(this.max,bl),Qo.subVectors(e.a,bl),Jo.subVectors(e.b,bl),ea.subVectors(e.c,bl),ss.subVectors(Jo,Qo),os.subVectors(ea,Jo),Js.subVectors(Qo,ea);let t=[0,-ss.z,ss.y,0,-os.z,os.y,0,-Js.z,Js.y,ss.z,0,-ss.x,os.z,0,-os.x,Js.z,0,-Js.x,-ss.y,ss.x,0,-os.y,os.x,0,-Js.y,Js.x,0];return!Fh(t,Qo,Jo,ea,Uc)||(t=[1,0,0,0,1,0,0,0,1],!Fh(t,Qo,Jo,ea,Uc))?!1:(Fc.crossVectors(ss,os),t=[Fc.x,Fc.y,Fc.z],Fh(t,Qo,Jo,ea,Uc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Pr=[new z,new z,new z,new z,new z,new z,new z,new z],Qi=new z,Ic=new tc,Qo=new z,Jo=new z,ea=new z,ss=new z,os=new z,Js=new z,bl=new z,Uc=new z,Fc=new z,eo=new z;function Fh(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){eo.fromArray(n,s);const a=r.x*Math.abs(eo.x)+r.y*Math.abs(eo.y)+r.z*Math.abs(eo.z),l=e.dot(eo),u=t.dot(eo),c=i.dot(eo);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const vR=new tc,Pl=new z,Oh=new z;class Y_{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):vR.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pl.subVectors(e,this.center);const t=Pl.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Pl,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Oh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pl.copy(e.center).add(Oh)),this.expandByPoint(Pl.copy(e.center).sub(Oh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Lr=new z,kh=new z,Oc=new z,as=new z,zh=new z,kc=new z,Bh=new z;class xR{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Lr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Lr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Lr.copy(this.origin).addScaledVector(this.direction,t),Lr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){kh.copy(e).add(t).multiplyScalar(.5),Oc.copy(t).sub(e).normalize(),as.copy(this.origin).sub(kh);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Oc),a=as.dot(this.direction),l=-as.dot(Oc),u=as.lengthSq(),c=Math.abs(1-o*o);let f,d,h,g;if(c>0)if(f=o*l-a,d=o*a-l,g=s*c,f>=0)if(d>=-g)if(d<=g){const _=1/c;f*=_,d*=_,h=f*(f+o*d+2*a)+d*(o*f+d+2*l)+u}else d=s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+u;else d=-s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+u;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+u):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),h=d*(d+2*l)+u):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+u);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(kh).addScaledVector(Oc,d),h}intersectSphere(e,t){Lr.subVectors(e.center,this.origin);const i=Lr.dot(this.direction),r=Lr.dot(Lr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),c>=0?(s=(e.min.y-d.y)*c,o=(e.max.y-d.y)*c):(s=(e.max.y-d.y)*c,o=(e.min.y-d.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Lr)!==null}intersectTriangle(e,t,i,r,s){zh.subVectors(t,e),kc.subVectors(i,e),Bh.crossVectors(zh,kc);let o=this.direction.dot(Bh),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;as.subVectors(this.origin,e);const l=a*this.direction.dot(kc.crossVectors(as,kc));if(l<0)return null;const u=a*this.direction.dot(zh.cross(as));if(u<0||l+u>o)return null;const c=-a*as.dot(Bh);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jt{constructor(e,t,i,r,s,o,a,l,u,c,f,d,h,g,_,m){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,f,d,h,g,_,m)}set(e,t,i,r,s,o,a,l,u,c,f,d,h,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=u,p[6]=c,p[10]=f,p[14]=d,p[3]=h,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ta.setFromMatrixColumn(e,0).length(),s=1/ta.setFromMatrixColumn(e,1).length(),o=1/ta.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*c,h=o*f,g=a*c,_=a*f;t[0]=l*c,t[4]=-l*f,t[8]=u,t[1]=h+g*u,t[5]=d-_*u,t[9]=-a*l,t[2]=_-d*u,t[6]=g+h*u,t[10]=o*l}else if(e.order==="YXZ"){const d=l*c,h=l*f,g=u*c,_=u*f;t[0]=d+_*a,t[4]=g*a-h,t[8]=o*u,t[1]=o*f,t[5]=o*c,t[9]=-a,t[2]=h*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*c,h=l*f,g=u*c,_=u*f;t[0]=d-_*a,t[4]=-o*f,t[8]=g+h*a,t[1]=h+g*a,t[5]=o*c,t[9]=_-d*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*c,h=o*f,g=a*c,_=a*f;t[0]=l*c,t[4]=g*u-h,t[8]=d*u+_,t[1]=l*f,t[5]=_*u+d,t[9]=h*u-g,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,h=o*u,g=a*l,_=a*u;t[0]=l*c,t[4]=_-d*f,t[8]=g*f+h,t[1]=f,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=h*f+g,t[10]=d-_*f}else if(e.order==="XZY"){const d=o*l,h=o*u,g=a*l,_=a*u;t[0]=l*c,t[4]=-f,t[8]=u*c,t[1]=d*f+_,t[5]=o*c,t[9]=h*f-g,t[2]=g*f-h,t[6]=a*c,t[10]=_*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yR,e,SR)}lookAt(e,t,i){const r=this.elements;return ci.subVectors(e,t),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),ls.crossVectors(i,ci),ls.lengthSq()===0&&(Math.abs(i.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),ls.crossVectors(i,ci)),ls.normalize(),zc.crossVectors(ci,ls),r[0]=ls.x,r[4]=zc.x,r[8]=ci.x,r[1]=ls.y,r[5]=zc.y,r[9]=ci.y,r[2]=ls.z,r[6]=zc.z,r[10]=ci.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],d=i[9],h=i[13],g=i[2],_=i[6],m=i[10],p=i[14],v=i[3],x=i[7],S=i[11],C=i[15],w=r[0],M=r[4],R=r[8],N=r[12],y=r[1],T=r[5],I=r[9],B=r[13],X=r[2],Z=r[6],H=r[10],Y=r[14],D=r[3],$=r[7],b=r[11],ie=r[15];return s[0]=o*w+a*y+l*X+u*D,s[4]=o*M+a*T+l*Z+u*$,s[8]=o*R+a*I+l*H+u*b,s[12]=o*N+a*B+l*Y+u*ie,s[1]=c*w+f*y+d*X+h*D,s[5]=c*M+f*T+d*Z+h*$,s[9]=c*R+f*I+d*H+h*b,s[13]=c*N+f*B+d*Y+h*ie,s[2]=g*w+_*y+m*X+p*D,s[6]=g*M+_*T+m*Z+p*$,s[10]=g*R+_*I+m*H+p*b,s[14]=g*N+_*B+m*Y+p*ie,s[3]=v*w+x*y+S*X+C*D,s[7]=v*M+x*T+S*Z+C*$,s[11]=v*R+x*I+S*H+C*b,s[15]=v*N+x*B+S*Y+C*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],d=e[10],h=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*f-r*u*f-s*a*d+i*u*d+r*a*h-i*l*h)+_*(+t*l*h-t*u*d+s*o*d-r*o*h+r*u*c-s*l*c)+m*(+t*u*f-t*a*h-s*o*f+i*o*h+s*a*c-i*u*c)+p*(-r*a*c-t*l*f+t*a*d+r*o*f-i*o*d+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],d=e[10],h=e[11],g=e[12],_=e[13],m=e[14],p=e[15],v=f*m*u-_*d*u+_*l*h-a*m*h-f*l*p+a*d*p,x=g*d*u-c*m*u-g*l*h+o*m*h+c*l*p-o*d*p,S=c*_*u-g*f*u+g*a*h-o*_*h-c*a*p+o*f*p,C=g*f*l-c*_*l-g*a*d+o*_*d+c*a*m-o*f*m,w=t*v+i*x+r*S+s*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/w;return e[0]=v*M,e[1]=(_*d*s-f*m*s-_*r*h+i*m*h+f*r*p-i*d*p)*M,e[2]=(a*m*s-_*l*s+_*r*u-i*m*u-a*r*p+i*l*p)*M,e[3]=(f*l*s-a*d*s-f*r*u+i*d*u+a*r*h-i*l*h)*M,e[4]=x*M,e[5]=(c*m*s-g*d*s+g*r*h-t*m*h-c*r*p+t*d*p)*M,e[6]=(g*l*s-o*m*s-g*r*u+t*m*u+o*r*p-t*l*p)*M,e[7]=(o*d*s-c*l*s+c*r*u-t*d*u-o*r*h+t*l*h)*M,e[8]=S*M,e[9]=(g*f*s-c*_*s-g*i*h+t*_*h+c*i*p-t*f*p)*M,e[10]=(o*_*s-g*a*s+g*i*u-t*_*u-o*i*p+t*a*p)*M,e[11]=(c*a*s-o*f*s-c*i*u+t*f*u+o*i*h-t*a*h)*M,e[12]=C*M,e[13]=(c*_*r-g*f*r+g*i*d-t*_*d-c*i*m+t*f*m)*M,e[14]=(g*a*r-o*_*r-g*i*l+t*_*l+o*i*m-t*a*m)*M,e[15]=(o*f*r-c*a*r+c*i*l-t*f*l-o*i*d+t*a*d)*M,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,f=a+a,d=s*u,h=s*c,g=s*f,_=o*c,m=o*f,p=a*f,v=l*u,x=l*c,S=l*f,C=i.x,w=i.y,M=i.z;return r[0]=(1-(_+p))*C,r[1]=(h+S)*C,r[2]=(g-x)*C,r[3]=0,r[4]=(h-S)*w,r[5]=(1-(d+p))*w,r[6]=(m+v)*w,r[7]=0,r[8]=(g+x)*M,r[9]=(m-v)*M,r[10]=(1-(d+_))*M,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ta.set(r[0],r[1],r[2]).length();const o=ta.set(r[4],r[5],r[6]).length(),a=ta.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ji.copy(this);const u=1/s,c=1/o,f=1/a;return Ji.elements[0]*=u,Ji.elements[1]*=u,Ji.elements[2]*=u,Ji.elements[4]*=c,Ji.elements[5]*=c,Ji.elements[6]*=c,Ji.elements[8]*=f,Ji.elements[9]*=f,Ji.elements[10]*=f,t.setFromRotationMatrix(Ji),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Xr){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r);let h,g;if(a===Xr)h=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===md)h=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Xr){const l=this.elements,u=1/(t-e),c=1/(i-r),f=1/(o-s),d=(t+e)*u,h=(i+r)*c;let g,_;if(a===Xr)g=(o+s)*f,_=-2*f;else if(a===md)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ta=new z,Ji=new Jt,yR=new z(0,0,0),SR=new z(1,1,1),ls=new z,zc=new z,ci=new z,ex=new Jt,tx=new ec;class Ti{constructor(e=0,t=0,i=0,r=Ti.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],d=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(Ln(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ln(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ln(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ln(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Ln(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-Ln(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ex.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ex,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return tx.setFromEuler(this),this.setFromQuaternion(tx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ti.DEFAULT_ORDER="XYZ";class U1{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let MR=0;const nx=new z,na=new ec,Dr=new Jt,Bc=new z,Ll=new z,ER=new z,TR=new ec,ix=new z(1,0,0),rx=new z(0,1,0),sx=new z(0,0,1),ox={type:"added"},wR={type:"removed"},ia={type:"childadded",child:null},Hh={type:"childremoved",child:null};class Ci extends pl{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:MR++}),this.uuid=Ju(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ci.DEFAULT_UP.clone();const e=new z,t=new Ti,i=new ec,r=new z(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Jt},normalMatrix:{value:new Je}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=Ci.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ci.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new U1,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return na.setFromAxisAngle(e,t),this.quaternion.multiply(na),this}rotateOnWorldAxis(e,t){return na.setFromAxisAngle(e,t),this.quaternion.premultiply(na),this}rotateX(e){return this.rotateOnAxis(ix,e)}rotateY(e){return this.rotateOnAxis(rx,e)}rotateZ(e){return this.rotateOnAxis(sx,e)}translateOnAxis(e,t){return nx.copy(e).applyQuaternion(this.quaternion),this.position.add(nx.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ix,e)}translateY(e){return this.translateOnAxis(rx,e)}translateZ(e){return this.translateOnAxis(sx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Dr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Bc.copy(e):Bc.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ll.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dr.lookAt(Ll,Bc,this.up):Dr.lookAt(Bc,Ll,this.up),this.quaternion.setFromRotationMatrix(Dr),r&&(Dr.extractRotation(r.matrixWorld),na.setFromRotationMatrix(Dr),this.quaternion.premultiply(na.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ox),ia.child=e,this.dispatchEvent(ia),ia.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wR),Hh.child=e,this.dispatchEvent(Hh),Hh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Dr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Dr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Dr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ox),ia.child=e,this.dispatchEvent(ia),ia.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ll,e,ER),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ll,TR,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),d=o(e.skeletons),h=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ci.DEFAULT_UP=new z(0,1,0);Ci.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ci.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const er=new z,Nr=new z,Vh=new z,Ir=new z,ra=new z,sa=new z,ax=new z,Gh=new z,Wh=new z,Xh=new z,Yh=new Zt,jh=new Zt,$h=new Zt;class lr{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),er.subVectors(e,t),r.cross(er);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){er.subVectors(r,t),Nr.subVectors(i,t),Vh.subVectors(e,t);const o=er.dot(er),a=er.dot(Nr),l=er.dot(Vh),u=Nr.dot(Nr),c=Nr.dot(Vh),f=o*u-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,h=(u*l-a*c)*d,g=(o*c-a*l)*d;return s.set(1-h-g,g,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ir)===null?!1:Ir.x>=0&&Ir.y>=0&&Ir.x+Ir.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Ir)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ir.x),l.addScaledVector(o,Ir.y),l.addScaledVector(a,Ir.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Yh.setScalar(0),jh.setScalar(0),$h.setScalar(0),Yh.fromBufferAttribute(e,t),jh.fromBufferAttribute(e,i),$h.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Yh,s.x),o.addScaledVector(jh,s.y),o.addScaledVector($h,s.z),o}static isFrontFacing(e,t,i,r){return er.subVectors(i,t),Nr.subVectors(e,t),er.cross(Nr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return er.subVectors(this.c,this.b),Nr.subVectors(this.a,this.b),er.cross(Nr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return lr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return lr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return lr.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return lr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return lr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;ra.subVectors(r,i),sa.subVectors(s,i),Gh.subVectors(e,i);const l=ra.dot(Gh),u=sa.dot(Gh);if(l<=0&&u<=0)return t.copy(i);Wh.subVectors(e,r);const c=ra.dot(Wh),f=sa.dot(Wh);if(c>=0&&f<=c)return t.copy(r);const d=l*f-c*u;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(ra,o);Xh.subVectors(e,s);const h=ra.dot(Xh),g=sa.dot(Xh);if(g>=0&&h<=g)return t.copy(s);const _=h*u-l*g;if(_<=0&&u>=0&&g<=0)return a=u/(u-g),t.copy(i).addScaledVector(sa,a);const m=c*g-h*f;if(m<=0&&f-c>=0&&h-g>=0)return ax.subVectors(s,r),a=(f-c)/(f-c+(h-g)),t.copy(r).addScaledVector(ax,a);const p=1/(m+_+d);return o=_*p,a=d*p,t.copy(i).addScaledVector(ra,o).addScaledVector(sa,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const F1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},us={h:0,s:0,l:0},Hc={h:0,s:0,l:0};function qh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ht{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=sr){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=_t.workingColorSpace){return this.r=e,this.g=t,this.b=i,_t.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=_t.workingColorSpace){if(e=aR(e,1),t=Ln(t,0,1),i=Ln(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=qh(o,s,e+1/3),this.g=qh(o,s,e),this.b=qh(o,s,e-1/3)}return _t.toWorkingColorSpace(this,r),this}setStyle(e,t=sr){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=sr){const i=F1[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ga(e.r),this.g=Ga(e.g),this.b=Ga(e.b),this}copyLinearToSRGB(e){return this.r=Nh(e.r),this.g=Nh(e.g),this.b=Nh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=sr){return _t.fromWorkingColorSpace(Cn.copy(this),e),Math.round(Ln(Cn.r*255,0,255))*65536+Math.round(Ln(Cn.g*255,0,255))*256+Math.round(Ln(Cn.b*255,0,255))}getHexString(e=sr){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.fromWorkingColorSpace(Cn.copy(this),t);const i=Cn.r,r=Cn.g,s=Cn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=_t.workingColorSpace){return _t.fromWorkingColorSpace(Cn.copy(this),t),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=sr){_t.fromWorkingColorSpace(Cn.copy(this),e);const t=Cn.r,i=Cn.g,r=Cn.b;return e!==sr?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(us),this.setHSL(us.h+e,us.s+t,us.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(us),e.getHSL(Hc);const i=Lh(us.h,Hc.h,t),r=Lh(us.s,Hc.s,t),s=Lh(us.l,Hc.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new ht;ht.NAMES=F1;let AR=0;class kd extends pl{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:AR++}),this.uuid=Ju(),this.name="",this.type="Material",this.blending=Ha,this.side=Gs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pm,this.blendDst=Lm,this.blendEquation=ho,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ht(0,0,0),this.blendAlpha=0,this.depthFunc=il,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ko,this.stencilZFail=Ko,this.stencilZPass=Ko,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ha&&(i.blending=this.blending),this.side!==Gs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Pm&&(i.blendSrc=this.blendSrc),this.blendDst!==Lm&&(i.blendDst=this.blendDst),this.blendEquation!==ho&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==il&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ko&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ko&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ko&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class hu extends kd{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=x1,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const en=new z,Vc=new $e;class Cr{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=$v,this.updateRanges=[],this.gpuType=Wr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Vc.fromBufferAttribute(this,t),Vc.applyMatrix3(e),this.setXY(t,Vc.x,Vc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyMatrix3(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Cl(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=$n(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Cl(t,this.array)),t}setX(e,t){return this.normalized&&(t=$n(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Cl(t,this.array)),t}setY(e,t){return this.normalized&&(t=$n(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Cl(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$n(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Cl(t,this.array)),t}setW(e,t){return this.normalized&&(t=$n(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=$n(t,this.array),i=$n(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=$n(t,this.array),i=$n(i,this.array),r=$n(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=$n(t,this.array),i=$n(i,this.array),r=$n(r,this.array),s=$n(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$v&&(e.usage=this.usage),e}}class O1 extends Cr{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class k1 extends Cr{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Rr extends Cr{constructor(e,t,i){super(new Float32Array(e),t,i)}}let CR=0;const Ii=new Jt,Kh=new Ci,oa=new z,fi=new tc,Dl=new tc,dn=new z;class Ks extends pl{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:CR++}),this.uuid=Ju(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(D1(e)?k1:O1)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ii.makeRotationFromQuaternion(e),this.applyMatrix4(Ii),this}rotateX(e){return Ii.makeRotationX(e),this.applyMatrix4(Ii),this}rotateY(e){return Ii.makeRotationY(e),this.applyMatrix4(Ii),this}rotateZ(e){return Ii.makeRotationZ(e),this.applyMatrix4(Ii),this}translate(e,t,i){return Ii.makeTranslation(e,t,i),this.applyMatrix4(Ii),this}scale(e,t,i){return Ii.makeScale(e,t,i),this.applyMatrix4(Ii),this}lookAt(e){return Kh.lookAt(e),Kh.updateMatrix(),this.applyMatrix4(Kh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(oa).negate(),this.translate(oa.x,oa.y,oa.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Rr(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];fi.setFromBufferAttribute(s),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Y_);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(fi.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Dl.setFromBufferAttribute(a),this.morphTargetsRelative?(dn.addVectors(fi.min,Dl.min),fi.expandByPoint(dn),dn.addVectors(fi.max,Dl.max),fi.expandByPoint(dn)):(fi.expandByPoint(Dl.min),fi.expandByPoint(Dl.max))}fi.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)dn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(dn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)dn.fromBufferAttribute(a,u),l&&(oa.fromBufferAttribute(e,u),dn.add(oa)),r=Math.max(r,i.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Cr(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new z,l[R]=new z;const u=new z,c=new z,f=new z,d=new $e,h=new $e,g=new $e,_=new z,m=new z;function p(R,N,y){u.fromBufferAttribute(i,R),c.fromBufferAttribute(i,N),f.fromBufferAttribute(i,y),d.fromBufferAttribute(s,R),h.fromBufferAttribute(s,N),g.fromBufferAttribute(s,y),c.sub(u),f.sub(u),h.sub(d),g.sub(d);const T=1/(h.x*g.y-g.x*h.y);isFinite(T)&&(_.copy(c).multiplyScalar(g.y).addScaledVector(f,-h.y).multiplyScalar(T),m.copy(f).multiplyScalar(h.x).addScaledVector(c,-g.x).multiplyScalar(T),a[R].add(_),a[N].add(_),a[y].add(_),l[R].add(m),l[N].add(m),l[y].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let R=0,N=v.length;R<N;++R){const y=v[R],T=y.start,I=y.count;for(let B=T,X=T+I;B<X;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const x=new z,S=new z,C=new z,w=new z;function M(R){C.fromBufferAttribute(r,R),w.copy(C);const N=a[R];x.copy(N),x.sub(C.multiplyScalar(C.dot(N))).normalize(),S.crossVectors(w,N);const T=S.dot(l[R])<0?-1:1;o.setXYZW(R,x.x,x.y,x.z,T)}for(let R=0,N=v.length;R<N;++R){const y=v[R],T=y.start,I=y.count;for(let B=T,X=T+I;B<X;B+=3)M(e.getX(B+0)),M(e.getX(B+1)),M(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Cr(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const r=new z,s=new z,o=new z,a=new z,l=new z,u=new z,c=new z,f=new z;if(e)for(let d=0,h=e.count;d<h;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,h=t.count;d<h;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)dn.fromBufferAttribute(e,t),dn.normalize(),e.setXYZ(t,dn.x,dn.y,dn.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,d=new u.constructor(l.length*c);let h=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?h=l[_]*a.data.stride+a.offset:h=l[_]*c;for(let p=0;p<c;p++)d[g++]=u[h++]}return new Cr(d,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ks,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const d=u[c],h=e(d,i);l.push(h)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,d=u.length;f<d;f++){const h=u[f];c.push(h.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let d=0,h=f.length;d<h;d++)c.push(f[d].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lx=new Jt,to=new xR,Gc=new Y_,ux=new z,Wc=new z,Xc=new z,Yc=new z,Zh=new z,jc=new z,cx=new z,$c=new z;class cr extends Ci{constructor(e=new Ks,t=new hu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){jc.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(Zh.fromBufferAttribute(f,e),o?jc.addScaledVector(Zh,c):jc.addScaledVector(Zh.sub(t),c))}t.add(jc)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Gc.copy(i.boundingSphere),Gc.applyMatrix4(s),to.copy(e.ray).recast(e.near),!(Gc.containsPoint(to.origin)===!1&&(to.intersectSphere(Gc,ux)===null||to.origin.distanceToSquared(ux)>(e.far-e.near)**2))&&(lx.copy(s).invert(),to.copy(e.ray).applyMatrix4(lx),!(i.boundingBox!==null&&to.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,to)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],v=Math.max(m.start,h.start),x=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let S=v,C=x;S<C;S+=3){const w=a.getX(S),M=a.getX(S+1),R=a.getX(S+2);r=qc(this,p,e,i,u,c,f,w,M,R),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const v=a.getX(m),x=a.getX(m+1),S=a.getX(m+2);r=qc(this,o,e,i,u,c,f,v,x,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],v=Math.max(m.start,h.start),x=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let S=v,C=x;S<C;S+=3){const w=S,M=S+1,R=S+2;r=qc(this,p,e,i,u,c,f,w,M,R),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const v=m,x=m+1,S=m+2;r=qc(this,o,e,i,u,c,f,v,x,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function RR(n,e,t,i,r,s,o,a){let l;if(e.side===oi?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Gs,a),l===null)return null;$c.copy(a),$c.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo($c);return u<t.near||u>t.far?null:{distance:u,point:$c.clone(),object:n}}function qc(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,Wc),n.getVertexPosition(l,Xc),n.getVertexPosition(u,Yc);const c=RR(n,e,t,i,Wc,Xc,Yc,cx);if(c){const f=new z;lr.getBarycoord(cx,Wc,Xc,Yc,f),r&&(c.uv=lr.getInterpolatedAttribute(r,a,l,u,f,new $e)),s&&(c.uv1=lr.getInterpolatedAttribute(s,a,l,u,f,new $e)),o&&(c.normal=lr.getInterpolatedAttribute(o,a,l,u,f,new z),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new z,materialIndex:0};lr.getNormal(Wc,Xc,Yc,d.normal),c.face=d,c.barycoord=f}return c}class nc extends Ks{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let d=0,h=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Rr(u,3)),this.setAttribute("normal",new Rr(c,3)),this.setAttribute("uv",new Rr(f,2));function g(_,m,p,v,x,S,C,w,M,R,N){const y=S/M,T=C/R,I=S/2,B=C/2,X=w/2,Z=M+1,H=R+1;let Y=0,D=0;const $=new z;for(let b=0;b<H;b++){const ie=b*T-B;for(let Te=0;Te<Z;Te++){const Ie=Te*y-I;$[_]=Ie*v,$[m]=ie*x,$[p]=X,u.push($.x,$.y,$.z),$[_]=0,$[m]=0,$[p]=w>0?1:-1,c.push($.x,$.y,$.z),f.push(Te/M),f.push(1-b/R),Y+=1}}for(let b=0;b<R;b++)for(let ie=0;ie<M;ie++){const Te=d+ie+Z*b,Ie=d+ie+Z*(b+1),j=d+(ie+1)+Z*(b+1),ne=d+(ie+1)+Z*b;l.push(Te,Ie,ne),l.push(Ie,j,ne),D+=6}a.addGroup(h,D,N),h+=D,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ll(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function kn(n){const e={};for(let t=0;t<n.length;t++){const i=ll(n[t]);for(const r in i)e[r]=i[r]}return e}function bR(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function z1(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:_t.workingColorSpace}const PR={clone:ll,merge:kn};var LR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,DR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ws extends kd{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=LR,this.fragmentShader=DR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ll(e.uniforms),this.uniformsGroups=bR(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class B1 extends Ci{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=Xr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const cs=new z,fx=new $e,dx=new $e;class Bi extends B1{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=mg*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ph*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return mg*2*Math.atan(Math.tan(Ph*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){cs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(cs.x,cs.y).multiplyScalar(-e/cs.z),cs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(cs.x,cs.y).multiplyScalar(-e/cs.z)}getViewSize(e,t){return this.getViewBounds(e,fx,dx),t.subVectors(dx,fx)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ph*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const aa=-90,la=1;class NR extends Ci{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Bi(aa,la,e,t);r.layers=this.layers,this.add(r);const s=new Bi(aa,la,e,t);s.layers=this.layers,this.add(s);const o=new Bi(aa,la,e,t);o.layers=this.layers,this.add(o);const a=new Bi(aa,la,e,t);a.layers=this.layers,this.add(a);const l=new Bi(aa,la,e,t);l.layers=this.layers,this.add(l);const u=new Bi(aa,la,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===Xr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===md)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(f,d,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class H1 extends Xn{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:rl,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class IR extends Bo{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new H1(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Hi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new nc(5,5,5),s=new Ws({name:"CubemapFromEquirect",uniforms:ll(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:oi,blending:Us});s.uniforms.tEquirect.value=t;const o=new cr(r,s),a=t.minFilter;return t.minFilter===So&&(t.minFilter=Hi),new NR(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Qh=new z,UR=new z,FR=new Je;class co{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Qh.subVectors(i,t).cross(UR.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Qh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||FR.getNormalMatrix(e),r=this.coplanarPoint(Qh).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const no=new Y_,Kc=new z;class V1{constructor(e=new co,t=new co,i=new co,r=new co,s=new co,o=new co){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Xr){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],f=r[6],d=r[7],h=r[8],g=r[9],_=r[10],m=r[11],p=r[12],v=r[13],x=r[14],S=r[15];if(i[0].setComponents(l-s,d-u,m-h,S-p).normalize(),i[1].setComponents(l+s,d+u,m+h,S+p).normalize(),i[2].setComponents(l+o,d+c,m+g,S+v).normalize(),i[3].setComponents(l-o,d-c,m-g,S-v).normalize(),i[4].setComponents(l-a,d-f,m-_,S-x).normalize(),t===Xr)i[5].setComponents(l+a,d+f,m+_,S+x).normalize();else if(t===md)i[5].setComponents(a,f,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),no.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),no.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(no)}intersectsSprite(e){return no.center.set(0,0,0),no.radius=.7071067811865476,no.applyMatrix4(e.matrixWorld),this.intersectsSphere(no)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Kc.x=r.normal.x>0?e.max.x:e.min.x,Kc.y=r.normal.y>0?e.max.y:e.min.y,Kc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Kc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function G1(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function OR(n){const e=new WeakMap;function t(a,l){const u=a.array,c=a.usage,f=u.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,u,c),a.onUploadCallback();let h;if(u instanceof Float32Array)h=n.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)h=n.SHORT;else if(u instanceof Uint32Array)h=n.UNSIGNED_INT;else if(u instanceof Int32Array)h=n.INT;else if(u instanceof Int8Array)h=n.BYTE;else if(u instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:h,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,u){const c=l.array,f=l.updateRanges;if(n.bindBuffer(u,a),f.length===0)n.bufferSubData(u,0,c);else{f.sort((h,g)=>h.start-g.start);let d=0;for(let h=1;h<f.length;h++){const g=f[d],_=f[h];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,f[d]=_)}f.length=d+1;for(let h=0,g=f.length;h<g;h++){const _=f[h];n.bufferSubData(u,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,t(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class ul extends Ks{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,d=t/l,h=[],g=[],_=[],m=[];for(let p=0;p<c;p++){const v=p*d-o;for(let x=0;x<u;x++){const S=x*f-s;g.push(S,-v,0),_.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){const x=v+u*p,S=v+u*(p+1),C=v+1+u*(p+1),w=v+1+u*p;h.push(x,S,w),h.push(S,C,w)}this.setIndex(h),this.setAttribute("position",new Rr(g,3)),this.setAttribute("normal",new Rr(_,3)),this.setAttribute("uv",new Rr(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ul(e.width,e.height,e.widthSegments,e.heightSegments)}}var kR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zR=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,BR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,HR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,VR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,GR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,WR=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,XR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,YR=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,jR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$R=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,KR=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ZR=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,QR=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,JR=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,eb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ib=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ob=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ab=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,lb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ub=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,cb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,db=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pb="gl_FragColor = linearToOutputTexel( gl_FragColor );",mb=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,_b=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,xb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Sb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Eb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ab=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Pb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Lb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Db=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ib=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ub=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Fb=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ob=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,kb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,jb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$b=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,eP=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tP=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,nP=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,iP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sP=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,oP=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,aP=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lP=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uP=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cP=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fP=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dP=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,hP=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pP=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mP=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gP=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_P=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vP=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xP=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,yP=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,SP=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,MP=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,EP=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,TP=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,wP=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,AP=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,CP=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,RP=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bP=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,PP=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,LP=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,DP=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,NP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,IP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,UP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,FP=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const OP=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kP=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BP=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VP=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,WP=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,XP=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,YP=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,jP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$P=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qP=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,KP=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ZP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,QP=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JP=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,n2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,r2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,s2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,o2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,l2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,c2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,d2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,h2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,p2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,m2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,g2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qe={alphahash_fragment:kR,alphahash_pars_fragment:zR,alphamap_fragment:BR,alphamap_pars_fragment:HR,alphatest_fragment:VR,alphatest_pars_fragment:GR,aomap_fragment:WR,aomap_pars_fragment:XR,batching_pars_vertex:YR,batching_vertex:jR,begin_vertex:$R,beginnormal_vertex:qR,bsdfs:KR,iridescence_fragment:ZR,bumpmap_pars_fragment:QR,clipping_planes_fragment:JR,clipping_planes_pars_fragment:eb,clipping_planes_pars_vertex:tb,clipping_planes_vertex:nb,color_fragment:ib,color_pars_fragment:rb,color_pars_vertex:sb,color_vertex:ob,common:ab,cube_uv_reflection_fragment:lb,defaultnormal_vertex:ub,displacementmap_pars_vertex:cb,displacementmap_vertex:fb,emissivemap_fragment:db,emissivemap_pars_fragment:hb,colorspace_fragment:pb,colorspace_pars_fragment:mb,envmap_fragment:gb,envmap_common_pars_fragment:_b,envmap_pars_fragment:vb,envmap_pars_vertex:xb,envmap_physical_pars_fragment:Pb,envmap_vertex:yb,fog_vertex:Sb,fog_pars_vertex:Mb,fog_fragment:Eb,fog_pars_fragment:Tb,gradientmap_pars_fragment:wb,lightmap_pars_fragment:Ab,lights_lambert_fragment:Cb,lights_lambert_pars_fragment:Rb,lights_pars_begin:bb,lights_toon_fragment:Lb,lights_toon_pars_fragment:Db,lights_phong_fragment:Nb,lights_phong_pars_fragment:Ib,lights_physical_fragment:Ub,lights_physical_pars_fragment:Fb,lights_fragment_begin:Ob,lights_fragment_maps:kb,lights_fragment_end:zb,logdepthbuf_fragment:Bb,logdepthbuf_pars_fragment:Hb,logdepthbuf_pars_vertex:Vb,logdepthbuf_vertex:Gb,map_fragment:Wb,map_pars_fragment:Xb,map_particle_fragment:Yb,map_particle_pars_fragment:jb,metalnessmap_fragment:$b,metalnessmap_pars_fragment:qb,morphinstance_vertex:Kb,morphcolor_vertex:Zb,morphnormal_vertex:Qb,morphtarget_pars_vertex:Jb,morphtarget_vertex:eP,normal_fragment_begin:tP,normal_fragment_maps:nP,normal_pars_fragment:iP,normal_pars_vertex:rP,normal_vertex:sP,normalmap_pars_fragment:oP,clearcoat_normal_fragment_begin:aP,clearcoat_normal_fragment_maps:lP,clearcoat_pars_fragment:uP,iridescence_pars_fragment:cP,opaque_fragment:fP,packing:dP,premultiplied_alpha_fragment:hP,project_vertex:pP,dithering_fragment:mP,dithering_pars_fragment:gP,roughnessmap_fragment:_P,roughnessmap_pars_fragment:vP,shadowmap_pars_fragment:xP,shadowmap_pars_vertex:yP,shadowmap_vertex:SP,shadowmask_pars_fragment:MP,skinbase_vertex:EP,skinning_pars_vertex:TP,skinning_vertex:wP,skinnormal_vertex:AP,specularmap_fragment:CP,specularmap_pars_fragment:RP,tonemapping_fragment:bP,tonemapping_pars_fragment:PP,transmission_fragment:LP,transmission_pars_fragment:DP,uv_pars_fragment:NP,uv_pars_vertex:IP,uv_vertex:UP,worldpos_vertex:FP,background_vert:OP,background_frag:kP,backgroundCube_vert:zP,backgroundCube_frag:BP,cube_vert:HP,cube_frag:VP,depth_vert:GP,depth_frag:WP,distanceRGBA_vert:XP,distanceRGBA_frag:YP,equirect_vert:jP,equirect_frag:$P,linedashed_vert:qP,linedashed_frag:KP,meshbasic_vert:ZP,meshbasic_frag:QP,meshlambert_vert:JP,meshlambert_frag:e2,meshmatcap_vert:t2,meshmatcap_frag:n2,meshnormal_vert:i2,meshnormal_frag:r2,meshphong_vert:s2,meshphong_frag:o2,meshphysical_vert:a2,meshphysical_frag:l2,meshtoon_vert:u2,meshtoon_frag:c2,points_vert:f2,points_frag:d2,shadow_vert:h2,shadow_frag:p2,sprite_vert:m2,sprite_frag:g2},Me={common:{diffuse:{value:new ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new ht(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},xr={basic:{uniforms:kn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:kn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new ht(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:kn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new ht(0)},specular:{value:new ht(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:kn([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:kn([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new ht(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:kn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:kn([Me.points,Me.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:kn([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:kn([Me.common,Me.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:kn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:kn([Me.sprite,Me.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:kn([Me.common,Me.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:kn([Me.lights,Me.fog,{color:{value:new ht(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};xr.physical={uniforms:kn([xr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new ht(0)},specularColor:{value:new ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const Zc={r:0,b:0,g:0},io=new Ti,_2=new Jt;function v2(n,e,t,i,r,s,o){const a=new ht(0);let l=s===!0?0:1,u,c,f=null,d=0,h=null;function g(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?t:e).get(x)),x}function _(v){let x=!1;const S=g(v);S===null?p(a,l):S&&S.isColor&&(p(S,1),x=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(v,x){const S=g(x);S&&(S.isCubeTexture||S.mapping===Fd)?(c===void 0&&(c=new cr(new nc(1,1,1),new Ws({name:"BackgroundCubeMaterial",uniforms:ll(xr.backgroundCube.uniforms),vertexShader:xr.backgroundCube.vertexShader,fragmentShader:xr.backgroundCube.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,w,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),io.copy(x.backgroundRotation),io.x*=-1,io.y*=-1,io.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(io.y*=-1,io.z*=-1),c.material.uniforms.envMap.value=S,c.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(_2.makeRotationFromEuler(io)),c.material.toneMapped=_t.getTransfer(S.colorSpace)!==Lt,(f!==S||d!==S.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,f=S,d=S.version,h=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(u===void 0&&(u=new cr(new ul(2,2),new Ws({name:"BackgroundMaterial",uniforms:ll(xr.background.uniforms),vertexShader:xr.background.vertexShader,fragmentShader:xr.background.fragmentShader,side:Gs,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=S,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.toneMapped=_t.getTransfer(S.colorSpace)!==Lt,S.matrixAutoUpdate===!0&&S.updateMatrix(),u.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||d!==S.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,f=S,d=S.version,h=n.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null))}function p(v,x){v.getRGB(Zc,z1(n)),i.buffers.color.setClear(Zc.r,Zc.g,Zc.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(a,l)},render:_,addToRenderList:m}}function x2(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(y,T,I,B,X){let Z=!1;const H=f(B,I,T);s!==H&&(s=H,u(s.object)),Z=h(y,B,I,X),Z&&g(y,B,I,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,S(y,T,I,B),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return n.createVertexArray()}function u(y){return n.bindVertexArray(y)}function c(y){return n.deleteVertexArray(y)}function f(y,T,I){const B=I.wireframe===!0;let X=i[y.id];X===void 0&&(X={},i[y.id]=X);let Z=X[T.id];Z===void 0&&(Z={},X[T.id]=Z);let H=Z[B];return H===void 0&&(H=d(l()),Z[B]=H),H}function d(y){const T=[],I=[],B=[];for(let X=0;X<t;X++)T[X]=0,I[X]=0,B[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:I,attributeDivisors:B,object:y,attributes:{},index:null}}function h(y,T,I,B){const X=s.attributes,Z=T.attributes;let H=0;const Y=I.getAttributes();for(const D in Y)if(Y[D].location>=0){const b=X[D];let ie=Z[D];if(ie===void 0&&(D==="instanceMatrix"&&y.instanceMatrix&&(ie=y.instanceMatrix),D==="instanceColor"&&y.instanceColor&&(ie=y.instanceColor)),b===void 0||b.attribute!==ie||ie&&b.data!==ie.data)return!0;H++}return s.attributesNum!==H||s.index!==B}function g(y,T,I,B){const X={},Z=T.attributes;let H=0;const Y=I.getAttributes();for(const D in Y)if(Y[D].location>=0){let b=Z[D];b===void 0&&(D==="instanceMatrix"&&y.instanceMatrix&&(b=y.instanceMatrix),D==="instanceColor"&&y.instanceColor&&(b=y.instanceColor));const ie={};ie.attribute=b,b&&b.data&&(ie.data=b.data),X[D]=ie,H++}s.attributes=X,s.attributesNum=H,s.index=B}function _(){const y=s.newAttributes;for(let T=0,I=y.length;T<I;T++)y[T]=0}function m(y){p(y,0)}function p(y,T){const I=s.newAttributes,B=s.enabledAttributes,X=s.attributeDivisors;I[y]=1,B[y]===0&&(n.enableVertexAttribArray(y),B[y]=1),X[y]!==T&&(n.vertexAttribDivisor(y,T),X[y]=T)}function v(){const y=s.newAttributes,T=s.enabledAttributes;for(let I=0,B=T.length;I<B;I++)T[I]!==y[I]&&(n.disableVertexAttribArray(I),T[I]=0)}function x(y,T,I,B,X,Z,H){H===!0?n.vertexAttribIPointer(y,T,I,X,Z):n.vertexAttribPointer(y,T,I,B,X,Z)}function S(y,T,I,B){_();const X=B.attributes,Z=I.getAttributes(),H=T.defaultAttributeValues;for(const Y in Z){const D=Z[Y];if(D.location>=0){let $=X[Y];if($===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&($=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&($=y.instanceColor)),$!==void 0){const b=$.normalized,ie=$.itemSize,Te=e.get($);if(Te===void 0)continue;const Ie=Te.buffer,j=Te.type,ne=Te.bytesPerElement,de=j===n.INT||j===n.UNSIGNED_INT||$.gpuType===z_;if($.isInterleavedBufferAttribute){const le=$.data,be=le.stride,Ae=$.offset;if(le.isInstancedInterleavedBuffer){for(let Ye=0;Ye<D.locationSize;Ye++)p(D.location+Ye,le.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Ye=0;Ye<D.locationSize;Ye++)m(D.location+Ye);n.bindBuffer(n.ARRAY_BUFFER,Ie);for(let Ye=0;Ye<D.locationSize;Ye++)x(D.location+Ye,ie/D.locationSize,j,b,be*ne,(Ae+ie/D.locationSize*Ye)*ne,de)}else{if($.isInstancedBufferAttribute){for(let le=0;le<D.locationSize;le++)p(D.location+le,$.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let le=0;le<D.locationSize;le++)m(D.location+le);n.bindBuffer(n.ARRAY_BUFFER,Ie);for(let le=0;le<D.locationSize;le++)x(D.location+le,ie/D.locationSize,j,b,ie*ne,ie/D.locationSize*le*ne,de)}}else if(H!==void 0){const b=H[Y];if(b!==void 0)switch(b.length){case 2:n.vertexAttrib2fv(D.location,b);break;case 3:n.vertexAttrib3fv(D.location,b);break;case 4:n.vertexAttrib4fv(D.location,b);break;default:n.vertexAttrib1fv(D.location,b)}}}}v()}function C(){R();for(const y in i){const T=i[y];for(const I in T){const B=T[I];for(const X in B)c(B[X].object),delete B[X];delete T[I]}delete i[y]}}function w(y){if(i[y.id]===void 0)return;const T=i[y.id];for(const I in T){const B=T[I];for(const X in B)c(B[X].object),delete B[X];delete T[I]}delete i[y.id]}function M(y){for(const T in i){const I=i[T];if(I[y.id]===void 0)continue;const B=I[y.id];for(const X in B)c(B[X].object),delete B[X];delete I[y.id]}}function R(){N(),o=!0,s!==r&&(s=r,u(s.object))}function N(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:N,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:M,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function y2(n,e,t){let i;function r(u){i=u}function s(u,c){n.drawArrays(i,u,c),t.update(c,i,1)}function o(u,c,f){f!==0&&(n.drawArraysInstanced(i,u,c,f),t.update(c,i,f))}function a(u,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,f);let h=0;for(let g=0;g<f;g++)h+=c[g];t.update(h,i,1)}function l(u,c,f,d){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<u.length;g++)o(u[g],c[g],d[g]);else{h.multiDrawArraysInstancedWEBGL(i,u,0,c,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=c[_];for(let _=0;_<d.length;_++)t.update(g,i,d[_])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function S2(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(M){return!(M!==ur&&i.convert(M)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(M){const R=M===Qu&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==es&&i.convert(M)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&M!==Wr&&!R)}function l(M){if(M==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const f=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const M=e.get("EXT_clip_control");M.clipControlEXT(M.LOWER_LEFT_EXT,M.ZERO_TO_ONE_EXT)}const h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:h,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:S,vertexTextures:C,maxSamples:w}}function M2(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new co,a=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||i!==0||r;return r=d,i=f.length,h},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=c(f,d,0)},this.setState=function(f,d,h){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?c(null):u();else{const v=s?0:i,x=v*4;let S=p.clippingState||null;l.value=S,S=c(g,d,x,h);for(let C=0;C!==x;++C)S[C]=t[C];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,d,h,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=h+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,S=h;x!==_;++x,S+=4)o.copy(f[x]).applyMatrix4(v,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function E2(n){let e=new WeakMap;function t(o,a){return a===zm?o.mapping=rl:a===Bm&&(o.mapping=sl),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===zm||a===Bm)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new IR(l.height);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class T2 extends B1{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ca=4,hx=[.125,.215,.35,.446,.526,.582],po=20,Jh=new T2,px=new ht;let ep=null,tp=0,np=0,ip=!1;const fo=(1+Math.sqrt(5))/2,ua=1/fo,mx=[new z(-fo,ua,0),new z(fo,ua,0),new z(-ua,0,fo),new z(ua,0,fo),new z(0,fo,-ua),new z(0,fo,ua),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)];class gx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){ep=this._renderer.getRenderTarget(),tp=this._renderer.getActiveCubeFace(),np=this._renderer.getActiveMipmapLevel(),ip=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ep,tp,np),this._renderer.xr.enabled=ip,e.scissorTest=!1,Qc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===rl||e.mapping===sl?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ep=this._renderer.getRenderTarget(),tp=this._renderer.getActiveCubeFace(),np=this._renderer.getActiveMipmapLevel(),ip=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Hi,minFilter:Hi,generateMipmaps:!1,type:Qu,format:ur,colorSpace:qs,depthBuffer:!1},r=_x(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_x(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=w2(s)),this._blurMaterial=A2(s,e,t)}return r}_compileMaterial(e){const t=new cr(this._lodPlanes[0],e);this._renderer.compile(t,Jh)}_sceneToCubeUV(e,t,i,r){const a=new Bi(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,d=c.toneMapping;c.getClearColor(px),c.toneMapping=Fs,c.autoClear=!1;const h=new hu({name:"PMREM.Background",side:oi,depthWrite:!1,depthTest:!1}),g=new cr(new nc,h);let _=!1;const m=e.background;m?m.isColor&&(h.color.copy(m),e.background=null,_=!0):(h.color.copy(px),_=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(a.up.set(0,l[p],0),a.lookAt(u[p],0,0)):v===1?(a.up.set(0,0,l[p]),a.lookAt(0,u[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,u[p]));const x=this._cubeSize;Qc(r,v*x,p>2?x:0,x,x),c.setRenderTarget(r),_&&c.render(g,a),c.render(e,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=d,c.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===rl||e.mapping===sl;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=xx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vx());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new cr(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Qc(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Jh)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=mx[(r-s-1)%mx.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new cr(this._lodPlanes[r],u),d=u.uniforms,h=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*po-1),_=s/g,m=isFinite(s)?1+Math.floor(c*_):po;m>po&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${po}`);const p=[];let v=0;for(let M=0;M<po;++M){const R=M/_,N=Math.exp(-R*R/2);p.push(N),M===0?v+=N:M<m&&(v+=2*N)}for(let M=0;M<p.length;M++)p[M]=p[M]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-i;const S=this._sizeLods[r],C=3*S*(r>x-Ca?r-x+Ca:0),w=4*(this._cubeSize-S);Qc(t,C,w,3*S,2*S),l.setRenderTarget(t),l.render(f,Jh)}}function w2(n){const e=[],t=[],i=[];let r=n;const s=n-Ca+1+hx.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Ca?l=hx[o-n+Ca-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,d=[c,c,f,c,f,f,c,c,f,f,c,f],h=6,g=6,_=3,m=2,p=1,v=new Float32Array(_*g*h),x=new Float32Array(m*g*h),S=new Float32Array(p*g*h);for(let w=0;w<h;w++){const M=w%3*2/3-1,R=w>2?0:-1,N=[M,R,0,M+2/3,R,0,M+2/3,R+1,0,M,R,0,M+2/3,R+1,0,M,R+1,0];v.set(N,_*g*w),x.set(d,m*g*w);const y=[w,w,w,w,w,w];S.set(y,p*g*w)}const C=new Ks;C.setAttribute("position",new Cr(v,_)),C.setAttribute("uv",new Cr(x,m)),C.setAttribute("faceIndex",new Cr(S,p)),e.push(C),r>Ca&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function _x(n,e,t){const i=new Bo(n,e,t);return i.texture.mapping=Fd,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Qc(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function A2(n,e,t){const i=new Float32Array(po),r=new z(0,1,0);return new Ws({name:"SphericalGaussianBlur",defines:{n:po,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:j_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Us,depthTest:!1,depthWrite:!1})}function vx(){return new Ws({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:j_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Us,depthTest:!1,depthWrite:!1})}function xx(){return new Ws({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:j_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Us,depthTest:!1,depthWrite:!1})}function j_(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function C2(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===zm||l===Bm,c=l===rl||l===sl;if(u||c){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new gx(n)),f=u?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const h=a.image;return u&&h&&h.height>0||c&&h&&r(h)?(t===null&&(t=new gx(n)),f=u?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function R2(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Rf("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function b2(n,e,t,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}d.removeEventListener("dispose",o),delete r[d.id];const h=s.get(d);h&&(e.remove(h),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)e.update(d[g],n.ARRAY_BUFFER);const h=f.morphAttributes;for(const g in h){const _=h[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],n.ARRAY_BUFFER)}}function u(f){const d=[],h=f.index,g=f.attributes.position;let _=0;if(h!==null){const v=h.array;_=h.version;for(let x=0,S=v.length;x<S;x+=3){const C=v[x+0],w=v[x+1],M=v[x+2];d.push(C,w,w,M,M,C)}}else if(g!==void 0){const v=g.array;_=g.version;for(let x=0,S=v.length/3-1;x<S;x+=3){const C=x+0,w=x+1,M=x+2;d.push(C,w,w,M,M,C)}}else return;const m=new(D1(d)?k1:O1)(d,1);m.version=_;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function c(f){const d=s.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function P2(n,e,t){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,h){n.drawElements(i,h,s,d*o),t.update(h,i,1)}function u(d,h,g){g!==0&&(n.drawElementsInstanced(i,h,s,d*o,g),t.update(h,i,g))}function c(d,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];t.update(m,i,1)}function f(d,h,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)u(d[p]/o,h[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,s,d,0,_,0,g);let p=0;for(let v=0;v<g;v++)p+=h[v];for(let v=0;v<_.length;v++)t.update(p,i,_[v])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function L2(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function D2(n,e,t){const i=new WeakMap,r=new Zt;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=c!==void 0?c.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let y=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var h=y;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),_===!0&&(S=2),m===!0&&(S=3);let C=a.attributes.position.count*S,w=1;C>e.maxTextureSize&&(w=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const M=new Float32Array(C*w*4*f),R=new I1(M,C,w,f);R.type=Wr,R.needsUpdate=!0;const N=S*4;for(let T=0;T<f;T++){const I=p[T],B=v[T],X=x[T],Z=C*w*4*T;for(let H=0;H<I.count;H++){const Y=H*N;g===!0&&(r.fromBufferAttribute(I,H),M[Z+Y+0]=r.x,M[Z+Y+1]=r.y,M[Z+Y+2]=r.z,M[Z+Y+3]=0),_===!0&&(r.fromBufferAttribute(B,H),M[Z+Y+4]=r.x,M[Z+Y+5]=r.y,M[Z+Y+6]=r.z,M[Z+Y+7]=0),m===!0&&(r.fromBufferAttribute(X,H),M[Z+Y+8]=r.x,M[Z+Y+9]=r.y,M[Z+Y+10]=r.z,M[Z+Y+11]=X.itemSize===4?r.w:1)}}d={count:f,texture:R,size:new $e(C,w)},i.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<u.length;m++)g+=u[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function N2(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}class W1 extends Xn{constructor(e,t,i,r,s,o,a,l,u,c=Va){if(c!==Va&&c!==al)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Va&&(i=zo),i===void 0&&c===al&&(i=ol),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Xi,this.minFilter=l!==void 0?l:Xi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const X1=new Xn,yx=new W1(1,1),Y1=new I1,j1=new _R,$1=new H1,Sx=[],Mx=[],Ex=new Float32Array(16),Tx=new Float32Array(9),wx=new Float32Array(4);function ml(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Sx[r];if(s===void 0&&(s=new Float32Array(r),Sx[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function un(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function cn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function zd(n,e){let t=Mx[e];t===void 0&&(t=new Int32Array(e),Mx[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function I2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function U2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;n.uniform2fv(this.addr,e),cn(t,e)}}function F2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(un(t,e))return;n.uniform3fv(this.addr,e),cn(t,e)}}function O2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;n.uniform4fv(this.addr,e),cn(t,e)}}function k2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(un(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),cn(t,e)}else{if(un(t,i))return;wx.set(i),n.uniformMatrix2fv(this.addr,!1,wx),cn(t,i)}}function z2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(un(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),cn(t,e)}else{if(un(t,i))return;Tx.set(i),n.uniformMatrix3fv(this.addr,!1,Tx),cn(t,i)}}function B2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(un(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),cn(t,e)}else{if(un(t,i))return;Ex.set(i),n.uniformMatrix4fv(this.addr,!1,Ex),cn(t,i)}}function H2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function V2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;n.uniform2iv(this.addr,e),cn(t,e)}}function G2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;n.uniform3iv(this.addr,e),cn(t,e)}}function W2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;n.uniform4iv(this.addr,e),cn(t,e)}}function X2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Y2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;n.uniform2uiv(this.addr,e),cn(t,e)}}function j2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;n.uniform3uiv(this.addr,e),cn(t,e)}}function $2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;n.uniform4uiv(this.addr,e),cn(t,e)}}function q2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(yx.compareFunction=L1,s=yx):s=X1,t.setTexture2D(e||s,r)}function K2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||j1,r)}function Z2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||$1,r)}function Q2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Y1,r)}function J2(n){switch(n){case 5126:return I2;case 35664:return U2;case 35665:return F2;case 35666:return O2;case 35674:return k2;case 35675:return z2;case 35676:return B2;case 5124:case 35670:return H2;case 35667:case 35671:return V2;case 35668:case 35672:return G2;case 35669:case 35673:return W2;case 5125:return X2;case 36294:return Y2;case 36295:return j2;case 36296:return $2;case 35678:case 36198:case 36298:case 36306:case 35682:return q2;case 35679:case 36299:case 36307:return K2;case 35680:case 36300:case 36308:case 36293:return Z2;case 36289:case 36303:case 36311:case 36292:return Q2}}function eL(n,e){n.uniform1fv(this.addr,e)}function tL(n,e){const t=ml(e,this.size,2);n.uniform2fv(this.addr,t)}function nL(n,e){const t=ml(e,this.size,3);n.uniform3fv(this.addr,t)}function iL(n,e){const t=ml(e,this.size,4);n.uniform4fv(this.addr,t)}function rL(n,e){const t=ml(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function sL(n,e){const t=ml(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function oL(n,e){const t=ml(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function aL(n,e){n.uniform1iv(this.addr,e)}function lL(n,e){n.uniform2iv(this.addr,e)}function uL(n,e){n.uniform3iv(this.addr,e)}function cL(n,e){n.uniform4iv(this.addr,e)}function fL(n,e){n.uniform1uiv(this.addr,e)}function dL(n,e){n.uniform2uiv(this.addr,e)}function hL(n,e){n.uniform3uiv(this.addr,e)}function pL(n,e){n.uniform4uiv(this.addr,e)}function mL(n,e,t){const i=this.cache,r=e.length,s=zd(t,r);un(i,s)||(n.uniform1iv(this.addr,s),cn(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||X1,s[o])}function gL(n,e,t){const i=this.cache,r=e.length,s=zd(t,r);un(i,s)||(n.uniform1iv(this.addr,s),cn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||j1,s[o])}function _L(n,e,t){const i=this.cache,r=e.length,s=zd(t,r);un(i,s)||(n.uniform1iv(this.addr,s),cn(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||$1,s[o])}function vL(n,e,t){const i=this.cache,r=e.length,s=zd(t,r);un(i,s)||(n.uniform1iv(this.addr,s),cn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Y1,s[o])}function xL(n){switch(n){case 5126:return eL;case 35664:return tL;case 35665:return nL;case 35666:return iL;case 35674:return rL;case 35675:return sL;case 35676:return oL;case 5124:case 35670:return aL;case 35667:case 35671:return lL;case 35668:case 35672:return uL;case 35669:case 35673:return cL;case 5125:return fL;case 36294:return dL;case 36295:return hL;case 36296:return pL;case 35678:case 36198:case 36298:case 36306:case 35682:return mL;case 35679:case 36299:case 36307:return gL;case 35680:case 36300:case 36308:case 36293:return _L;case 36289:case 36303:case 36311:case 36292:return vL}}class yL{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=J2(t.type)}}class SL{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=xL(t.type)}}class ML{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const rp=/(\w+)(\])?(\[|\.)?/g;function Ax(n,e){n.seq.push(e),n.map[e.id]=e}function EL(n,e,t){const i=n.name,r=i.length;for(rp.lastIndex=0;;){const s=rp.exec(i),o=rp.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Ax(t,u===void 0?new yL(a,n,e):new SL(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new ML(a),Ax(t,f)),t=f}}}class bf{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);EL(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Cx(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const TL=37297;let wL=0;function AL(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function CL(n){const e=_t.getPrimaries(_t.workingColorSpace),t=_t.getPrimaries(n);let i;switch(e===t?i="":e===pd&&t===hd?i="LinearDisplayP3ToLinearSRGB":e===hd&&t===pd&&(i="LinearSRGBToLinearDisplayP3"),n){case qs:case Od:return[i,"LinearTransferOETF"];case sr:case X_:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Rx(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+AL(n.getShaderSource(e),o)}else return r}function RL(n,e){const t=CL(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function bL(n,e){let t;switch(e){case VC:t="Linear";break;case GC:t="Reinhard";break;case WC:t="Cineon";break;case XC:t="ACESFilmic";break;case jC:t="AgX";break;case $C:t="Neutral";break;case YC:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Jc=new z;function PL(){_t.getLuminanceCoefficients(Jc);const n=Jc.x.toFixed(4),e=Jc.y.toFixed(4),t=Jc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function LL(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wl).join(`
`)}function DL(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function NL(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Wl(n){return n!==""}function bx(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Px(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const IL=/^[ \t]*#include +<([\w\d./]+)>/gm;function gg(n){return n.replace(IL,FL)}const UL=new Map;function FL(n,e){let t=Qe[e];if(t===void 0){const i=UL.get(e);if(i!==void 0)t=Qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return gg(t)}const OL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lx(n){return n.replace(OL,kL)}function kL(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Dx(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function zL(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===v1?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===SC?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ur&&(e="SHADOWMAP_TYPE_VSM"),e}function BL(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case rl:case sl:e="ENVMAP_TYPE_CUBE";break;case Fd:e="ENVMAP_TYPE_CUBE_UV";break}return e}function HL(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case sl:e="ENVMAP_MODE_REFRACTION";break}return e}function VL(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case x1:e="ENVMAP_BLENDING_MULTIPLY";break;case BC:e="ENVMAP_BLENDING_MIX";break;case HC:e="ENVMAP_BLENDING_ADD";break}return e}function GL(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function WL(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=zL(t),u=BL(t),c=HL(t),f=VL(t),d=GL(t),h=LL(t),g=DL(s),_=r.createProgram();let m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Wl).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Wl).join(`
`),p.length>0&&(p+=`
`)):(m=[Dx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wl).join(`
`),p=[Dx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fs?"#define TONE_MAPPING":"",t.toneMapping!==Fs?Qe.tonemapping_pars_fragment:"",t.toneMapping!==Fs?bL("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,RL("linearToOutputTexel",t.outputColorSpace),PL(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wl).join(`
`)),o=gg(o),o=bx(o,t),o=Px(o,t),a=gg(a),a=bx(a,t),a=Px(a,t),o=Lx(o),a=Lx(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===qv?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===qv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=v+m+o,S=v+p+a,C=Cx(r,r.VERTEX_SHADER,x),w=Cx(r,r.FRAGMENT_SHADER,S);r.attachShader(_,C),r.attachShader(_,w),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function M(T){if(n.debug.checkShaderErrors){const I=r.getProgramInfoLog(_).trim(),B=r.getShaderInfoLog(C).trim(),X=r.getShaderInfoLog(w).trim();let Z=!0,H=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,C,w);else{const Y=Rx(r,C,"vertex"),D=Rx(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+I+`
`+Y+`
`+D)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(B===""||X==="")&&(H=!1);H&&(T.diagnostics={runnable:Z,programLog:I,vertexShader:{log:B,prefix:m},fragmentShader:{log:X,prefix:p}})}r.deleteShader(C),r.deleteShader(w),R=new bf(r,_),N=NL(r,_)}let R;this.getUniforms=function(){return R===void 0&&M(this),R};let N;this.getAttributes=function(){return N===void 0&&M(this),N};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(_,TL)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=wL++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=w,this}let XL=0;class YL{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new jL(e),t.set(e,i)),i}}class jL{constructor(e){this.id=XL++,this.code=e,this.usedTimes=0}}function $L(n,e,t,i,r,s,o){const a=new U1,l=new YL,u=new Set,c=[],f=r.logarithmicDepthBuffer,d=r.reverseDepthBuffer,h=r.vertexTextures;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return u.add(y),y===0?"uv":`uv${y}`}function p(y,T,I,B,X){const Z=B.fog,H=X.geometry,Y=y.isMeshStandardMaterial?B.environment:null,D=(y.isMeshStandardMaterial?t:e).get(y.envMap||Y),$=D&&D.mapping===Fd?D.image.height:null,b=_[y.type];y.precision!==null&&(g=r.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));const ie=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Te=ie!==void 0?ie.length:0;let Ie=0;H.morphAttributes.position!==void 0&&(Ie=1),H.morphAttributes.normal!==void 0&&(Ie=2),H.morphAttributes.color!==void 0&&(Ie=3);let j,ne,de,le;if(b){const Ue=xr[b];j=Ue.vertexShader,ne=Ue.fragmentShader}else j=y.vertexShader,ne=y.fragmentShader,l.update(y),de=l.getVertexShaderID(y),le=l.getFragmentShaderID(y);const be=n.getRenderTarget(),Ae=X.isInstancedMesh===!0,Ye=X.isBatchedMesh===!0,We=!!y.map,Be=!!y.matcap,L=!!D,rt=!!y.aoMap,He=!!y.lightMap,ke=!!y.bumpMap,k=!!y.normalMap,qe=!!y.displacementMap,Fe=!!y.emissiveMap,P=!!y.metalnessMap,E=!!y.roughnessMap,G=y.anisotropy>0,ee=y.clearcoat>0,re=y.dispersion>0,J=y.iridescence>0,we=y.sheen>0,ae=y.transmission>0,ge=G&&!!y.anisotropyMap,fe=ee&&!!y.clearcoatMap,q=ee&&!!y.clearcoatNormalMap,oe=ee&&!!y.clearcoatRoughnessMap,he=J&&!!y.iridescenceMap,Se=J&&!!y.iridescenceThicknessMap,me=we&&!!y.sheenColorMap,Ve=we&&!!y.sheenRoughnessMap,Pe=!!y.specularMap,tt=!!y.specularColorMap,U=!!y.specularIntensityMap,se=ae&&!!y.transmissionMap,Q=ae&&!!y.thicknessMap,te=!!y.gradientMap,pe=!!y.alphaMap,_e=y.alphaTest>0,Ke=!!y.alphaHash,Et=!!y.extensions;let Nt=Fs;y.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(Nt=n.toneMapping);const at={shaderID:b,shaderType:y.type,shaderName:y.name,vertexShader:j,fragmentShader:ne,defines:y.defines,customVertexShaderID:de,customFragmentShaderID:le,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:Ye,batchingColor:Ye&&X._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&X.instanceColor!==null,instancingMorph:Ae&&X.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:be===null?n.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:qs,alphaToCoverage:!!y.alphaToCoverage,map:We,matcap:Be,envMap:L,envMapMode:L&&D.mapping,envMapCubeUVHeight:$,aoMap:rt,lightMap:He,bumpMap:ke,normalMap:k,displacementMap:h&&qe,emissiveMap:Fe,normalMapObjectSpace:k&&y.normalMapType===JC,normalMapTangentSpace:k&&y.normalMapType===QC,metalnessMap:P,roughnessMap:E,anisotropy:G,anisotropyMap:ge,clearcoat:ee,clearcoatMap:fe,clearcoatNormalMap:q,clearcoatRoughnessMap:oe,dispersion:re,iridescence:J,iridescenceMap:he,iridescenceThicknessMap:Se,sheen:we,sheenColorMap:me,sheenRoughnessMap:Ve,specularMap:Pe,specularColorMap:tt,specularIntensityMap:U,transmission:ae,transmissionMap:se,thicknessMap:Q,gradientMap:te,opaque:y.transparent===!1&&y.blending===Ha&&y.alphaToCoverage===!1,alphaMap:pe,alphaTest:_e,alphaHash:Ke,combine:y.combine,mapUv:We&&m(y.map.channel),aoMapUv:rt&&m(y.aoMap.channel),lightMapUv:He&&m(y.lightMap.channel),bumpMapUv:ke&&m(y.bumpMap.channel),normalMapUv:k&&m(y.normalMap.channel),displacementMapUv:qe&&m(y.displacementMap.channel),emissiveMapUv:Fe&&m(y.emissiveMap.channel),metalnessMapUv:P&&m(y.metalnessMap.channel),roughnessMapUv:E&&m(y.roughnessMap.channel),anisotropyMapUv:ge&&m(y.anisotropyMap.channel),clearcoatMapUv:fe&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:q&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:me&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&m(y.sheenRoughnessMap.channel),specularMapUv:Pe&&m(y.specularMap.channel),specularColorMapUv:tt&&m(y.specularColorMap.channel),specularIntensityMapUv:U&&m(y.specularIntensityMap.channel),transmissionMapUv:se&&m(y.transmissionMap.channel),thicknessMapUv:Q&&m(y.thicknessMap.channel),alphaMapUv:pe&&m(y.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(k||G),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!H.attributes.uv&&(We||pe),fog:!!Z,useFog:y.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:d,skinning:X.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:Ie,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:Nt,decodeVideoTexture:We&&y.map.isVideoTexture===!0&&_t.getTransfer(y.map.colorSpace)===Lt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ar,flipSided:y.side===oi,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Et&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Et&&y.extensions.multiDraw===!0||Ye)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return at.vertexUv1s=u.has(1),at.vertexUv2s=u.has(2),at.vertexUv3s=u.has(3),u.clear(),at}function v(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const I in y.defines)T.push(I),T.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(x(T,y),S(T,y),T.push(n.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function x(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function S(y,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.alphaToCoverage&&a.enable(20),y.push(a.mask)}function C(y){const T=_[y.type];let I;if(T){const B=xr[T];I=PR.clone(B.uniforms)}else I=y.uniforms;return I}function w(y,T){let I;for(let B=0,X=c.length;B<X;B++){const Z=c[B];if(Z.cacheKey===T){I=Z,++I.usedTimes;break}}return I===void 0&&(I=new WL(n,T,y,s),c.push(I)),I}function M(y){if(--y.usedTimes===0){const T=c.indexOf(y);c[T]=c[c.length-1],c.pop(),y.destroy()}}function R(y){l.remove(y)}function N(){l.dispose()}return{getParameters:p,getProgramCacheKey:v,getUniforms:C,acquireProgram:w,releaseProgram:M,releaseShaderCache:R,programs:c,dispose:N}}function qL(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function KL(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Nx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ix(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,d,h,g,_,m){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:h,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},n[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=h,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),e++,p}function a(f,d,h,g,_,m){const p=o(f,d,h,g,_,m);h.transmission>0?i.push(p):h.transparent===!0?r.push(p):t.push(p)}function l(f,d,h,g,_,m){const p=o(f,d,h,g,_,m);h.transmission>0?i.unshift(p):h.transparent===!0?r.unshift(p):t.unshift(p)}function u(f,d){t.length>1&&t.sort(f||KL),i.length>1&&i.sort(d||Nx),r.length>1&&r.sort(d||Nx)}function c(){for(let f=e,d=n.length;f<d;f++){const h=n[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function ZL(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Ix,n.set(i,[o])):r>=s.length?(o=new Ix,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function QL(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new ht};break;case"SpotLight":t={position:new z,direction:new z,color:new ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new ht,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new ht,groundColor:new ht};break;case"RectAreaLight":t={color:new ht,position:new z,halfWidth:new z,halfHeight:new z};break}return n[e.id]=t,t}}}function JL(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let eD=0;function tD(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function nD(n){const e=new QL,t=JL(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new z);const r=new z,s=new Jt,o=new Jt;function a(u){let c=0,f=0,d=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let h=0,g=0,_=0,m=0,p=0,v=0,x=0,S=0,C=0,w=0,M=0;u.sort(tD);for(let N=0,y=u.length;N<y;N++){const T=u[N],I=T.color,B=T.intensity,X=T.distance,Z=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)c+=I.r*B,f+=I.g*B,d+=I.b*B;else if(T.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(T.sh.coefficients[H],B);M++}else if(T.isDirectionalLight){const H=e.get(T);if(H.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const Y=T.shadow,D=t.get(T);D.shadowIntensity=Y.intensity,D.shadowBias=Y.bias,D.shadowNormalBias=Y.normalBias,D.shadowRadius=Y.radius,D.shadowMapSize=Y.mapSize,i.directionalShadow[h]=D,i.directionalShadowMap[h]=Z,i.directionalShadowMatrix[h]=T.shadow.matrix,v++}i.directional[h]=H,h++}else if(T.isSpotLight){const H=e.get(T);H.position.setFromMatrixPosition(T.matrixWorld),H.color.copy(I).multiplyScalar(B),H.distance=X,H.coneCos=Math.cos(T.angle),H.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),H.decay=T.decay,i.spot[_]=H;const Y=T.shadow;if(T.map&&(i.spotLightMap[C]=T.map,C++,Y.updateMatrices(T),T.castShadow&&w++),i.spotLightMatrix[_]=Y.matrix,T.castShadow){const D=t.get(T);D.shadowIntensity=Y.intensity,D.shadowBias=Y.bias,D.shadowNormalBias=Y.normalBias,D.shadowRadius=Y.radius,D.shadowMapSize=Y.mapSize,i.spotShadow[_]=D,i.spotShadowMap[_]=Z,S++}_++}else if(T.isRectAreaLight){const H=e.get(T);H.color.copy(I).multiplyScalar(B),H.halfWidth.set(T.width*.5,0,0),H.halfHeight.set(0,T.height*.5,0),i.rectArea[m]=H,m++}else if(T.isPointLight){const H=e.get(T);if(H.color.copy(T.color).multiplyScalar(T.intensity),H.distance=T.distance,H.decay=T.decay,T.castShadow){const Y=T.shadow,D=t.get(T);D.shadowIntensity=Y.intensity,D.shadowBias=Y.bias,D.shadowNormalBias=Y.normalBias,D.shadowRadius=Y.radius,D.shadowMapSize=Y.mapSize,D.shadowCameraNear=Y.camera.near,D.shadowCameraFar=Y.camera.far,i.pointShadow[g]=D,i.pointShadowMap[g]=Z,i.pointShadowMatrix[g]=T.shadow.matrix,x++}i.point[g]=H,g++}else if(T.isHemisphereLight){const H=e.get(T);H.skyColor.copy(T.color).multiplyScalar(B),H.groundColor.copy(T.groundColor).multiplyScalar(B),i.hemi[p]=H,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=d;const R=i.hash;(R.directionalLength!==h||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==v||R.numPointShadows!==x||R.numSpotShadows!==S||R.numSpotMaps!==C||R.numLightProbes!==M)&&(i.directional.length=h,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=S+C-w,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=M,R.directionalLength=h,R.pointLength=g,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=v,R.numPointShadows=x,R.numSpotShadows=S,R.numSpotMaps=C,R.numLightProbes=M,i.version=eD++)}function l(u,c){let f=0,d=0,h=0,g=0,_=0;const m=c.matrixWorldInverse;for(let p=0,v=u.length;p<v;p++){const x=u[p];if(x.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(x.isSpotLight){const S=i.spot[h];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),h++}else if(x.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const S=i.hemi[_];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function Ux(n){const e=new nD(n),t=[],i=[];function r(c){u.camera=c,t.length=0,i.length=0}function s(c){t.push(c)}function o(c){i.push(c)}function a(){e.setup(t)}function l(c){e.setupView(t,c)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function iD(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Ux(n),e.set(r,[a])):s>=o.length?(a=new Ux(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class rD extends kd{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=KC,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sD extends kd{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const oD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,aD=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function lD(n,e,t){let i=new V1;const r=new $e,s=new $e,o=new Zt,a=new rD({depthPacking:ZC}),l=new sD,u={},c=t.maxTextureSize,f={[Gs]:oi,[oi]:Gs,[ar]:ar},d=new Ws({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:oD,fragmentShader:aD}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const g=new Ks;g.setAttribute("position",new Cr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new cr(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=v1;let p=this.type;this.render=function(w,M,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const N=n.getRenderTarget(),y=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),I=n.state;I.setBlending(Us),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const B=p!==Ur&&this.type===Ur,X=p===Ur&&this.type!==Ur;for(let Z=0,H=w.length;Z<H;Z++){const Y=w[Z],D=Y.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const $=D.getFrameExtents();if(r.multiply($),s.copy(D.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/$.x),r.x=s.x*$.x,D.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/$.y),r.y=s.y*$.y,D.mapSize.y=s.y)),D.map===null||B===!0||X===!0){const ie=this.type!==Ur?{minFilter:Xi,magFilter:Xi}:{};D.map!==null&&D.map.dispose(),D.map=new Bo(r.x,r.y,ie),D.map.texture.name=Y.name+".shadowMap",D.camera.updateProjectionMatrix()}n.setRenderTarget(D.map),n.clear();const b=D.getViewportCount();for(let ie=0;ie<b;ie++){const Te=D.getViewport(ie);o.set(s.x*Te.x,s.y*Te.y,s.x*Te.z,s.y*Te.w),I.viewport(o),D.updateMatrices(Y,ie),i=D.getFrustum(),S(M,R,D.camera,Y,this.type)}D.isPointLightShadow!==!0&&this.type===Ur&&v(D,R),D.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(N,y,T)};function v(w,M){const R=e.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,h.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Bo(r.x,r.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(M,null,R,d,_,null),h.uniforms.shadow_pass.value=w.mapPass.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(M,null,R,h,_,null)}function x(w,M,R,N){let y=null;const T=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(T!==void 0)y=T;else if(y=R.isPointLight===!0?l:a,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const I=y.uuid,B=M.uuid;let X=u[I];X===void 0&&(X={},u[I]=X);let Z=X[B];Z===void 0&&(Z=y.clone(),X[B]=Z,M.addEventListener("dispose",C)),y=Z}if(y.visible=M.visible,y.wireframe=M.wireframe,N===Ur?y.side=M.shadowSide!==null?M.shadowSide:M.side:y.side=M.shadowSide!==null?M.shadowSide:f[M.side],y.alphaMap=M.alphaMap,y.alphaTest=M.alphaTest,y.map=M.map,y.clipShadows=M.clipShadows,y.clippingPlanes=M.clippingPlanes,y.clipIntersection=M.clipIntersection,y.displacementMap=M.displacementMap,y.displacementScale=M.displacementScale,y.displacementBias=M.displacementBias,y.wireframeLinewidth=M.wireframeLinewidth,y.linewidth=M.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const I=n.properties.get(y);I.light=R}return y}function S(w,M,R,N,y){if(w.visible===!1)return;if(w.layers.test(M.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===Ur)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);const B=e.update(w),X=w.material;if(Array.isArray(X)){const Z=B.groups;for(let H=0,Y=Z.length;H<Y;H++){const D=Z[H],$=X[D.materialIndex];if($&&$.visible){const b=x(w,$,N,y);w.onBeforeShadow(n,w,M,R,B,b,D),n.renderBufferDirect(R,null,B,b,w,D),w.onAfterShadow(n,w,M,R,B,b,D)}}}else if(X.visible){const Z=x(w,X,N,y);w.onBeforeShadow(n,w,M,R,B,Z,null),n.renderBufferDirect(R,null,B,Z,w,null),w.onAfterShadow(n,w,M,R,B,Z,null)}}const I=w.children;for(let B=0,X=I.length;B<X;B++)S(I[B],M,R,N,y)}function C(w){w.target.removeEventListener("dispose",C);for(const R in u){const N=u[R],y=w.target.uuid;y in N&&(N[y].dispose(),delete N[y])}}}const uD={[Dm]:Nm,[Im]:Om,[Um]:km,[il]:Fm,[Nm]:Dm,[Om]:Im,[km]:Um,[Fm]:il};function cD(n){function e(){let U=!1;const se=new Zt;let Q=null;const te=new Zt(0,0,0,0);return{setMask:function(pe){Q!==pe&&!U&&(n.colorMask(pe,pe,pe,pe),Q=pe)},setLocked:function(pe){U=pe},setClear:function(pe,_e,Ke,Et,Nt){Nt===!0&&(pe*=Et,_e*=Et,Ke*=Et),se.set(pe,_e,Ke,Et),te.equals(se)===!1&&(n.clearColor(pe,_e,Ke,Et),te.copy(se))},reset:function(){U=!1,Q=null,te.set(-1,0,0,0)}}}function t(){let U=!1,se=!1,Q=null,te=null,pe=null;return{setReversed:function(_e){se=_e},setTest:function(_e){_e?de(n.DEPTH_TEST):le(n.DEPTH_TEST)},setMask:function(_e){Q!==_e&&!U&&(n.depthMask(_e),Q=_e)},setFunc:function(_e){if(se&&(_e=uD[_e]),te!==_e){switch(_e){case Dm:n.depthFunc(n.NEVER);break;case Nm:n.depthFunc(n.ALWAYS);break;case Im:n.depthFunc(n.LESS);break;case il:n.depthFunc(n.LEQUAL);break;case Um:n.depthFunc(n.EQUAL);break;case Fm:n.depthFunc(n.GEQUAL);break;case Om:n.depthFunc(n.GREATER);break;case km:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}te=_e}},setLocked:function(_e){U=_e},setClear:function(_e){pe!==_e&&(n.clearDepth(_e),pe=_e)},reset:function(){U=!1,Q=null,te=null,pe=null}}}function i(){let U=!1,se=null,Q=null,te=null,pe=null,_e=null,Ke=null,Et=null,Nt=null;return{setTest:function(at){U||(at?de(n.STENCIL_TEST):le(n.STENCIL_TEST))},setMask:function(at){se!==at&&!U&&(n.stencilMask(at),se=at)},setFunc:function(at,Ue,Le){(Q!==at||te!==Ue||pe!==Le)&&(n.stencilFunc(at,Ue,Le),Q=at,te=Ue,pe=Le)},setOp:function(at,Ue,Le){(_e!==at||Ke!==Ue||Et!==Le)&&(n.stencilOp(at,Ue,Le),_e=at,Ke=Ue,Et=Le)},setLocked:function(at){U=at},setClear:function(at){Nt!==at&&(n.clearStencil(at),Nt=at)},reset:function(){U=!1,se=null,Q=null,te=null,pe=null,_e=null,Ke=null,Et=null,Nt=null}}}const r=new e,s=new t,o=new i,a=new WeakMap,l=new WeakMap;let u={},c={},f=new WeakMap,d=[],h=null,g=!1,_=null,m=null,p=null,v=null,x=null,S=null,C=null,w=new ht(0,0,0),M=0,R=!1,N=null,y=null,T=null,I=null,B=null;const X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,H=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(Y)[1]),Z=H>=1):Y.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),Z=H>=2);let D=null,$={};const b=n.getParameter(n.SCISSOR_BOX),ie=n.getParameter(n.VIEWPORT),Te=new Zt().fromArray(b),Ie=new Zt().fromArray(ie);function j(U,se,Q,te){const pe=new Uint8Array(4),_e=n.createTexture();n.bindTexture(U,_e),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ke=0;Ke<Q;Ke++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(se,0,n.RGBA,1,1,te,0,n.RGBA,n.UNSIGNED_BYTE,pe):n.texImage2D(se+Ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,pe);return _e}const ne={};ne[n.TEXTURE_2D]=j(n.TEXTURE_2D,n.TEXTURE_2D,1),ne[n.TEXTURE_CUBE_MAP]=j(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[n.TEXTURE_2D_ARRAY]=j(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ne[n.TEXTURE_3D]=j(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),de(n.DEPTH_TEST),s.setFunc(il),He(!1),ke(Gv),de(n.CULL_FACE),L(Us);function de(U){u[U]!==!0&&(n.enable(U),u[U]=!0)}function le(U){u[U]!==!1&&(n.disable(U),u[U]=!1)}function be(U,se){return c[U]!==se?(n.bindFramebuffer(U,se),c[U]=se,U===n.DRAW_FRAMEBUFFER&&(c[n.FRAMEBUFFER]=se),U===n.FRAMEBUFFER&&(c[n.DRAW_FRAMEBUFFER]=se),!0):!1}function Ae(U,se){let Q=d,te=!1;if(U){Q=f.get(se),Q===void 0&&(Q=[],f.set(se,Q));const pe=U.textures;if(Q.length!==pe.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let _e=0,Ke=pe.length;_e<Ke;_e++)Q[_e]=n.COLOR_ATTACHMENT0+_e;Q.length=pe.length,te=!0}}else Q[0]!==n.BACK&&(Q[0]=n.BACK,te=!0);te&&n.drawBuffers(Q)}function Ye(U){return h!==U?(n.useProgram(U),h=U,!0):!1}const We={[ho]:n.FUNC_ADD,[EC]:n.FUNC_SUBTRACT,[TC]:n.FUNC_REVERSE_SUBTRACT};We[wC]=n.MIN,We[AC]=n.MAX;const Be={[CC]:n.ZERO,[RC]:n.ONE,[bC]:n.SRC_COLOR,[Pm]:n.SRC_ALPHA,[UC]:n.SRC_ALPHA_SATURATE,[NC]:n.DST_COLOR,[LC]:n.DST_ALPHA,[PC]:n.ONE_MINUS_SRC_COLOR,[Lm]:n.ONE_MINUS_SRC_ALPHA,[IC]:n.ONE_MINUS_DST_COLOR,[DC]:n.ONE_MINUS_DST_ALPHA,[FC]:n.CONSTANT_COLOR,[OC]:n.ONE_MINUS_CONSTANT_COLOR,[kC]:n.CONSTANT_ALPHA,[zC]:n.ONE_MINUS_CONSTANT_ALPHA};function L(U,se,Q,te,pe,_e,Ke,Et,Nt,at){if(U===Us){g===!0&&(le(n.BLEND),g=!1);return}if(g===!1&&(de(n.BLEND),g=!0),U!==MC){if(U!==_||at!==R){if((m!==ho||x!==ho)&&(n.blendEquation(n.FUNC_ADD),m=ho,x=ho),at)switch(U){case Ha:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wv:n.blendFunc(n.ONE,n.ONE);break;case Xv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Yv:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Ha:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wv:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Xv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Yv:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}p=null,v=null,S=null,C=null,w.set(0,0,0),M=0,_=U,R=at}return}pe=pe||se,_e=_e||Q,Ke=Ke||te,(se!==m||pe!==x)&&(n.blendEquationSeparate(We[se],We[pe]),m=se,x=pe),(Q!==p||te!==v||_e!==S||Ke!==C)&&(n.blendFuncSeparate(Be[Q],Be[te],Be[_e],Be[Ke]),p=Q,v=te,S=_e,C=Ke),(Et.equals(w)===!1||Nt!==M)&&(n.blendColor(Et.r,Et.g,Et.b,Nt),w.copy(Et),M=Nt),_=U,R=!1}function rt(U,se){U.side===ar?le(n.CULL_FACE):de(n.CULL_FACE);let Q=U.side===oi;se&&(Q=!Q),He(Q),U.blending===Ha&&U.transparent===!1?L(Us):L(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),s.setFunc(U.depthFunc),s.setTest(U.depthTest),s.setMask(U.depthWrite),r.setMask(U.colorWrite);const te=U.stencilWrite;o.setTest(te),te&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),qe(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?de(n.SAMPLE_ALPHA_TO_COVERAGE):le(n.SAMPLE_ALPHA_TO_COVERAGE)}function He(U){N!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),N=U)}function ke(U){U!==xC?(de(n.CULL_FACE),U!==y&&(U===Gv?n.cullFace(n.BACK):U===yC?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):le(n.CULL_FACE),y=U}function k(U){U!==T&&(Z&&n.lineWidth(U),T=U)}function qe(U,se,Q){U?(de(n.POLYGON_OFFSET_FILL),(I!==se||B!==Q)&&(n.polygonOffset(se,Q),I=se,B=Q)):le(n.POLYGON_OFFSET_FILL)}function Fe(U){U?de(n.SCISSOR_TEST):le(n.SCISSOR_TEST)}function P(U){U===void 0&&(U=n.TEXTURE0+X-1),D!==U&&(n.activeTexture(U),D=U)}function E(U,se,Q){Q===void 0&&(D===null?Q=n.TEXTURE0+X-1:Q=D);let te=$[Q];te===void 0&&(te={type:void 0,texture:void 0},$[Q]=te),(te.type!==U||te.texture!==se)&&(D!==Q&&(n.activeTexture(Q),D=Q),n.bindTexture(U,se||ne[U]),te.type=U,te.texture=se)}function G(){const U=$[D];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ee(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function re(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function we(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ae(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ge(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function fe(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function q(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function oe(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function he(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Se(U){Te.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),Te.copy(U))}function me(U){Ie.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),Ie.copy(U))}function Ve(U,se){let Q=l.get(se);Q===void 0&&(Q=new WeakMap,l.set(se,Q));let te=Q.get(U);te===void 0&&(te=n.getUniformBlockIndex(se,U.name),Q.set(U,te))}function Pe(U,se){const te=l.get(se).get(U);a.get(se)!==te&&(n.uniformBlockBinding(se,te,U.__bindingPointIndex),a.set(se,te))}function tt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},D=null,$={},c={},f=new WeakMap,d=[],h=null,g=!1,_=null,m=null,p=null,v=null,x=null,S=null,C=null,w=new ht(0,0,0),M=0,R=!1,N=null,y=null,T=null,I=null,B=null,Te.set(0,0,n.canvas.width,n.canvas.height),Ie.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:de,disable:le,bindFramebuffer:be,drawBuffers:Ae,useProgram:Ye,setBlending:L,setMaterial:rt,setFlipSided:He,setCullFace:ke,setLineWidth:k,setPolygonOffset:qe,setScissorTest:Fe,activeTexture:P,bindTexture:E,unbindTexture:G,compressedTexImage2D:ee,compressedTexImage3D:re,texImage2D:oe,texImage3D:he,updateUBOMapping:Ve,uniformBlockBinding:Pe,texStorage2D:fe,texStorage3D:q,texSubImage2D:J,texSubImage3D:we,compressedTexSubImage2D:ae,compressedTexSubImage3D:ge,scissor:Se,viewport:me,reset:tt}}function Fx(n,e,t,i){const r=fD(i);switch(t){case T1:return n*e;case A1:return n*e;case C1:return n*e*2;case R1:return n*e/r.components*r.byteLength;case V_:return n*e/r.components*r.byteLength;case b1:return n*e*2/r.components*r.byteLength;case G_:return n*e*2/r.components*r.byteLength;case w1:return n*e*3/r.components*r.byteLength;case ur:return n*e*4/r.components*r.byteLength;case W_:return n*e*4/r.components*r.byteLength;case Ef:case Tf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case wf:case Af:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Wm:case Ym:return Math.max(n,16)*Math.max(e,8)/4;case Gm:case Xm:return Math.max(n,8)*Math.max(e,8)/2;case jm:case $m:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case qm:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Km:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Zm:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Qm:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Jm:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case eg:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case tg:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ng:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ig:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case rg:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case sg:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case og:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ag:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case lg:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ug:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Cf:case cg:case fg:return Math.ceil(n/4)*Math.ceil(e/4)*16;case P1:case dg:return Math.ceil(n/4)*Math.ceil(e/4)*8;case hg:case pg:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function fD(n){switch(n){case es:case S1:return{byteLength:1,components:1};case Wu:case M1:case Qu:return{byteLength:2,components:1};case B_:case H_:return{byteLength:2,components:4};case zo:case z_:case Wr:return{byteLength:4,components:1};case E1:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function dD(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new $e,c=new WeakMap;let f;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,E){return h?new OffscreenCanvas(P,E):Xu("canvas")}function _(P,E,G){let ee=1;const re=Fe(P);if((re.width>G||re.height>G)&&(ee=G/Math.max(re.width,re.height)),ee<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const J=Math.floor(ee*re.width),we=Math.floor(ee*re.height);f===void 0&&(f=g(J,we));const ae=E?g(J,we):f;return ae.width=J,ae.height=we,ae.getContext("2d").drawImage(P,0,0,J,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+J+"x"+we+")."),ae}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),P;return P}function m(P){return P.generateMipmaps&&P.minFilter!==Xi&&P.minFilter!==Hi}function p(P){n.generateMipmap(P)}function v(P,E,G,ee,re=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let J=E;if(E===n.RED&&(G===n.FLOAT&&(J=n.R32F),G===n.HALF_FLOAT&&(J=n.R16F),G===n.UNSIGNED_BYTE&&(J=n.R8)),E===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(J=n.R8UI),G===n.UNSIGNED_SHORT&&(J=n.R16UI),G===n.UNSIGNED_INT&&(J=n.R32UI),G===n.BYTE&&(J=n.R8I),G===n.SHORT&&(J=n.R16I),G===n.INT&&(J=n.R32I)),E===n.RG&&(G===n.FLOAT&&(J=n.RG32F),G===n.HALF_FLOAT&&(J=n.RG16F),G===n.UNSIGNED_BYTE&&(J=n.RG8)),E===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(J=n.RG8UI),G===n.UNSIGNED_SHORT&&(J=n.RG16UI),G===n.UNSIGNED_INT&&(J=n.RG32UI),G===n.BYTE&&(J=n.RG8I),G===n.SHORT&&(J=n.RG16I),G===n.INT&&(J=n.RG32I)),E===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(J=n.RGB8UI),G===n.UNSIGNED_SHORT&&(J=n.RGB16UI),G===n.UNSIGNED_INT&&(J=n.RGB32UI),G===n.BYTE&&(J=n.RGB8I),G===n.SHORT&&(J=n.RGB16I),G===n.INT&&(J=n.RGB32I)),E===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),G===n.UNSIGNED_INT&&(J=n.RGBA32UI),G===n.BYTE&&(J=n.RGBA8I),G===n.SHORT&&(J=n.RGBA16I),G===n.INT&&(J=n.RGBA32I)),E===n.RGB&&G===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),E===n.RGBA){const we=re?dd:_t.getTransfer(ee);G===n.FLOAT&&(J=n.RGBA32F),G===n.HALF_FLOAT&&(J=n.RGBA16F),G===n.UNSIGNED_BYTE&&(J=we===Lt?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function x(P,E){let G;return P?E===null||E===zo||E===ol?G=n.DEPTH24_STENCIL8:E===Wr?G=n.DEPTH32F_STENCIL8:E===Wu&&(G=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===zo||E===ol?G=n.DEPTH_COMPONENT24:E===Wr?G=n.DEPTH_COMPONENT32F:E===Wu&&(G=n.DEPTH_COMPONENT16),G}function S(P,E){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Xi&&P.minFilter!==Hi?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function C(P){const E=P.target;E.removeEventListener("dispose",C),M(E),E.isVideoTexture&&c.delete(E)}function w(P){const E=P.target;E.removeEventListener("dispose",w),N(E)}function M(P){const E=i.get(P);if(E.__webglInit===void 0)return;const G=P.source,ee=d.get(G);if(ee){const re=ee[E.__cacheKey];re.usedTimes--,re.usedTimes===0&&R(P),Object.keys(ee).length===0&&d.delete(G)}i.remove(P)}function R(P){const E=i.get(P);n.deleteTexture(E.__webglTexture);const G=P.source,ee=d.get(G);delete ee[E.__cacheKey],o.memory.textures--}function N(P){const E=i.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(E.__webglFramebuffer[ee]))for(let re=0;re<E.__webglFramebuffer[ee].length;re++)n.deleteFramebuffer(E.__webglFramebuffer[ee][re]);else n.deleteFramebuffer(E.__webglFramebuffer[ee]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[ee])}else{if(Array.isArray(E.__webglFramebuffer))for(let ee=0;ee<E.__webglFramebuffer.length;ee++)n.deleteFramebuffer(E.__webglFramebuffer[ee]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ee=0;ee<E.__webglColorRenderbuffer.length;ee++)E.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[ee]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const G=P.textures;for(let ee=0,re=G.length;ee<re;ee++){const J=i.get(G[ee]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(G[ee])}i.remove(P)}let y=0;function T(){y=0}function I(){const P=y;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),y+=1,P}function B(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function X(P,E){const G=i.get(P);if(P.isVideoTexture&&k(P),P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){const ee=P.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ie(G,P,E);return}}t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+E)}function Z(P,E){const G=i.get(P);if(P.version>0&&G.__version!==P.version){Ie(G,P,E);return}t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+E)}function H(P,E){const G=i.get(P);if(P.version>0&&G.__version!==P.version){Ie(G,P,E);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+E)}function Y(P,E){const G=i.get(P);if(P.version>0&&G.__version!==P.version){j(G,P,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+E)}const D={[Hm]:n.REPEAT,[yo]:n.CLAMP_TO_EDGE,[Vm]:n.MIRRORED_REPEAT},$={[Xi]:n.NEAREST,[qC]:n.NEAREST_MIPMAP_NEAREST,[Nc]:n.NEAREST_MIPMAP_LINEAR,[Hi]:n.LINEAR,[bh]:n.LINEAR_MIPMAP_NEAREST,[So]:n.LINEAR_MIPMAP_LINEAR},b={[eR]:n.NEVER,[oR]:n.ALWAYS,[tR]:n.LESS,[L1]:n.LEQUAL,[nR]:n.EQUAL,[sR]:n.GEQUAL,[iR]:n.GREATER,[rR]:n.NOTEQUAL};function ie(P,E){if(E.type===Wr&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Hi||E.magFilter===bh||E.magFilter===Nc||E.magFilter===So||E.minFilter===Hi||E.minFilter===bh||E.minFilter===Nc||E.minFilter===So)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,D[E.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,D[E.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,D[E.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,$[E.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,$[E.minFilter]),E.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,b[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Xi||E.minFilter!==Nc&&E.minFilter!==So||E.type===Wr&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Te(P,E){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",C));const ee=E.source;let re=d.get(ee);re===void 0&&(re={},d.set(ee,re));const J=B(E);if(J!==P.__cacheKey){re[J]===void 0&&(re[J]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,G=!0),re[J].usedTimes++;const we=re[P.__cacheKey];we!==void 0&&(re[P.__cacheKey].usedTimes--,we.usedTimes===0&&R(E)),P.__cacheKey=J,P.__webglTexture=re[J].texture}return G}function Ie(P,E,G){let ee=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ee=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ee=n.TEXTURE_3D);const re=Te(P,E),J=E.source;t.bindTexture(ee,P.__webglTexture,n.TEXTURE0+G);const we=i.get(J);if(J.version!==we.__version||re===!0){t.activeTexture(n.TEXTURE0+G);const ae=_t.getPrimaries(_t.workingColorSpace),ge=E.colorSpace===gs?null:_t.getPrimaries(E.colorSpace),fe=E.colorSpace===gs||ae===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);let q=_(E.image,!1,r.maxTextureSize);q=qe(E,q);const oe=s.convert(E.format,E.colorSpace),he=s.convert(E.type);let Se=v(E.internalFormat,oe,he,E.colorSpace,E.isVideoTexture);ie(ee,E);let me;const Ve=E.mipmaps,Pe=E.isVideoTexture!==!0,tt=we.__version===void 0||re===!0,U=J.dataReady,se=S(E,q);if(E.isDepthTexture)Se=x(E.format===al,E.type),tt&&(Pe?t.texStorage2D(n.TEXTURE_2D,1,Se,q.width,q.height):t.texImage2D(n.TEXTURE_2D,0,Se,q.width,q.height,0,oe,he,null));else if(E.isDataTexture)if(Ve.length>0){Pe&&tt&&t.texStorage2D(n.TEXTURE_2D,se,Se,Ve[0].width,Ve[0].height);for(let Q=0,te=Ve.length;Q<te;Q++)me=Ve[Q],Pe?U&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,me.width,me.height,oe,he,me.data):t.texImage2D(n.TEXTURE_2D,Q,Se,me.width,me.height,0,oe,he,me.data);E.generateMipmaps=!1}else Pe?(tt&&t.texStorage2D(n.TEXTURE_2D,se,Se,q.width,q.height),U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,q.width,q.height,oe,he,q.data)):t.texImage2D(n.TEXTURE_2D,0,Se,q.width,q.height,0,oe,he,q.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Pe&&tt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,se,Se,Ve[0].width,Ve[0].height,q.depth);for(let Q=0,te=Ve.length;Q<te;Q++)if(me=Ve[Q],E.format!==ur)if(oe!==null)if(Pe){if(U)if(E.layerUpdates.size>0){const pe=Fx(me.width,me.height,E.format,E.type);for(const _e of E.layerUpdates){const Ke=me.data.subarray(_e*pe/me.data.BYTES_PER_ELEMENT,(_e+1)*pe/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,_e,me.width,me.height,1,oe,Ke,0,0)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,me.width,me.height,q.depth,oe,me.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,Se,me.width,me.height,q.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?U&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,me.width,me.height,q.depth,oe,he,me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Q,Se,me.width,me.height,q.depth,0,oe,he,me.data)}else{Pe&&tt&&t.texStorage2D(n.TEXTURE_2D,se,Se,Ve[0].width,Ve[0].height);for(let Q=0,te=Ve.length;Q<te;Q++)me=Ve[Q],E.format!==ur?oe!==null?Pe?U&&t.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,me.width,me.height,oe,me.data):t.compressedTexImage2D(n.TEXTURE_2D,Q,Se,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?U&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,me.width,me.height,oe,he,me.data):t.texImage2D(n.TEXTURE_2D,Q,Se,me.width,me.height,0,oe,he,me.data)}else if(E.isDataArrayTexture)if(Pe){if(tt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,se,Se,q.width,q.height,q.depth),U)if(E.layerUpdates.size>0){const Q=Fx(q.width,q.height,E.format,E.type);for(const te of E.layerUpdates){const pe=q.data.subarray(te*Q/q.data.BYTES_PER_ELEMENT,(te+1)*Q/q.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,te,q.width,q.height,1,oe,he,pe)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,oe,he,q.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Se,q.width,q.height,q.depth,0,oe,he,q.data);else if(E.isData3DTexture)Pe?(tt&&t.texStorage3D(n.TEXTURE_3D,se,Se,q.width,q.height,q.depth),U&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,oe,he,q.data)):t.texImage3D(n.TEXTURE_3D,0,Se,q.width,q.height,q.depth,0,oe,he,q.data);else if(E.isFramebufferTexture){if(tt)if(Pe)t.texStorage2D(n.TEXTURE_2D,se,Se,q.width,q.height);else{let Q=q.width,te=q.height;for(let pe=0;pe<se;pe++)t.texImage2D(n.TEXTURE_2D,pe,Se,Q,te,0,oe,he,null),Q>>=1,te>>=1}}else if(Ve.length>0){if(Pe&&tt){const Q=Fe(Ve[0]);t.texStorage2D(n.TEXTURE_2D,se,Se,Q.width,Q.height)}for(let Q=0,te=Ve.length;Q<te;Q++)me=Ve[Q],Pe?U&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,oe,he,me):t.texImage2D(n.TEXTURE_2D,Q,Se,oe,he,me);E.generateMipmaps=!1}else if(Pe){if(tt){const Q=Fe(q);t.texStorage2D(n.TEXTURE_2D,se,Se,Q.width,Q.height)}U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,oe,he,q)}else t.texImage2D(n.TEXTURE_2D,0,Se,oe,he,q);m(E)&&p(ee),we.__version=J.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function j(P,E,G){if(E.image.length!==6)return;const ee=Te(P,E),re=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+G);const J=i.get(re);if(re.version!==J.__version||ee===!0){t.activeTexture(n.TEXTURE0+G);const we=_t.getPrimaries(_t.workingColorSpace),ae=E.colorSpace===gs?null:_t.getPrimaries(E.colorSpace),ge=E.colorSpace===gs||we===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const fe=E.isCompressedTexture||E.image[0].isCompressedTexture,q=E.image[0]&&E.image[0].isDataTexture,oe=[];for(let te=0;te<6;te++)!fe&&!q?oe[te]=_(E.image[te],!0,r.maxCubemapSize):oe[te]=q?E.image[te].image:E.image[te],oe[te]=qe(E,oe[te]);const he=oe[0],Se=s.convert(E.format,E.colorSpace),me=s.convert(E.type),Ve=v(E.internalFormat,Se,me,E.colorSpace),Pe=E.isVideoTexture!==!0,tt=J.__version===void 0||ee===!0,U=re.dataReady;let se=S(E,he);ie(n.TEXTURE_CUBE_MAP,E);let Q;if(fe){Pe&&tt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,se,Ve,he.width,he.height);for(let te=0;te<6;te++){Q=oe[te].mipmaps;for(let pe=0;pe<Q.length;pe++){const _e=Q[pe];E.format!==ur?Se!==null?Pe?U&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe,0,0,_e.width,_e.height,Se,_e.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe,Ve,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe,0,0,_e.width,_e.height,Se,me,_e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe,Ve,_e.width,_e.height,0,Se,me,_e.data)}}}else{if(Q=E.mipmaps,Pe&&tt){Q.length>0&&se++;const te=Fe(oe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,se,Ve,te.width,te.height)}for(let te=0;te<6;te++)if(q){Pe?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,oe[te].width,oe[te].height,Se,me,oe[te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ve,oe[te].width,oe[te].height,0,Se,me,oe[te].data);for(let pe=0;pe<Q.length;pe++){const Ke=Q[pe].image[te].image;Pe?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe+1,0,0,Ke.width,Ke.height,Se,me,Ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe+1,Ve,Ke.width,Ke.height,0,Se,me,Ke.data)}}else{Pe?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Se,me,oe[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ve,Se,me,oe[te]);for(let pe=0;pe<Q.length;pe++){const _e=Q[pe];Pe?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe+1,0,0,Se,me,_e.image[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe+1,Ve,Se,me,_e.image[te])}}}m(E)&&p(n.TEXTURE_CUBE_MAP),J.__version=re.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function ne(P,E,G,ee,re,J){const we=s.convert(G.format,G.colorSpace),ae=s.convert(G.type),ge=v(G.internalFormat,we,ae,G.colorSpace);if(!i.get(E).__hasExternalTextures){const q=Math.max(1,E.width>>J),oe=Math.max(1,E.height>>J);re===n.TEXTURE_3D||re===n.TEXTURE_2D_ARRAY?t.texImage3D(re,J,ge,q,oe,E.depth,0,we,ae,null):t.texImage2D(re,J,ge,q,oe,0,we,ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),ke(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,re,i.get(G).__webglTexture,0,He(E)):(re===n.TEXTURE_2D||re>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ee,re,i.get(G).__webglTexture,J),t.bindFramebuffer(n.FRAMEBUFFER,null)}function de(P,E,G){if(n.bindRenderbuffer(n.RENDERBUFFER,P),E.depthBuffer){const ee=E.depthTexture,re=ee&&ee.isDepthTexture?ee.type:null,J=x(E.stencilBuffer,re),we=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=He(E);ke(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae,J,E.width,E.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,J,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,J,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,we,n.RENDERBUFFER,P)}else{const ee=E.textures;for(let re=0;re<ee.length;re++){const J=ee[re],we=s.convert(J.format,J.colorSpace),ae=s.convert(J.type),ge=v(J.internalFormat,we,ae,J.colorSpace),fe=He(E);G&&ke(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,ge,E.width,E.height):ke(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,ge,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,ge,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function le(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),X(E.depthTexture,0);const ee=i.get(E.depthTexture).__webglTexture,re=He(E);if(E.depthTexture.format===Va)ke(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0);else if(E.depthTexture.format===al)ke(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function be(P){const E=i.get(P),G=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const ee=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ee){const re=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ee.removeEventListener("dispose",re)};ee.addEventListener("dispose",re),E.__depthDisposeCallback=re}E.__boundDepthTexture=ee}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");le(E.__webglFramebuffer,P)}else if(G){E.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[ee]),E.__webglDepthbuffer[ee]===void 0)E.__webglDepthbuffer[ee]=n.createRenderbuffer(),de(E.__webglDepthbuffer[ee],P,!1);else{const re=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=E.__webglDepthbuffer[ee];n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,re,n.RENDERBUFFER,J)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),de(E.__webglDepthbuffer,P,!1);else{const ee=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,re),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,re)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ae(P,E,G){const ee=i.get(P);E!==void 0&&ne(ee.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&be(P)}function Ye(P){const E=P.texture,G=i.get(P),ee=i.get(E);P.addEventListener("dispose",w);const re=P.textures,J=P.isWebGLCubeRenderTarget===!0,we=re.length>1;if(we||(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=E.version,o.memory.textures++),J){G.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[ae]=[];for(let ge=0;ge<E.mipmaps.length;ge++)G.__webglFramebuffer[ae][ge]=n.createFramebuffer()}else G.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let ae=0;ae<E.mipmaps.length;ae++)G.__webglFramebuffer[ae]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(we)for(let ae=0,ge=re.length;ae<ge;ae++){const fe=i.get(re[ae]);fe.__webglTexture===void 0&&(fe.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&ke(P)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ae=0;ae<re.length;ae++){const ge=re[ae];G.__webglColorRenderbuffer[ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[ae]);const fe=s.convert(ge.format,ge.colorSpace),q=s.convert(ge.type),oe=v(ge.internalFormat,fe,q,ge.colorSpace,P.isXRRenderTarget===!0),he=He(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,he,oe,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,G.__webglColorRenderbuffer[ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),de(G.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),ie(n.TEXTURE_CUBE_MAP,E);for(let ae=0;ae<6;ae++)if(E.mipmaps&&E.mipmaps.length>0)for(let ge=0;ge<E.mipmaps.length;ge++)ne(G.__webglFramebuffer[ae][ge],P,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ge);else ne(G.__webglFramebuffer[ae],P,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(E)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let ae=0,ge=re.length;ae<ge;ae++){const fe=re[ae],q=i.get(fe);t.bindTexture(n.TEXTURE_2D,q.__webglTexture),ie(n.TEXTURE_2D,fe),ne(G.__webglFramebuffer,P,fe,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,0),m(fe)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let ae=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ae=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ae,ee.__webglTexture),ie(ae,E),E.mipmaps&&E.mipmaps.length>0)for(let ge=0;ge<E.mipmaps.length;ge++)ne(G.__webglFramebuffer[ge],P,E,n.COLOR_ATTACHMENT0,ae,ge);else ne(G.__webglFramebuffer,P,E,n.COLOR_ATTACHMENT0,ae,0);m(E)&&p(ae),t.unbindTexture()}P.depthBuffer&&be(P)}function We(P){const E=P.textures;for(let G=0,ee=E.length;G<ee;G++){const re=E[G];if(m(re)){const J=P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,we=i.get(re).__webglTexture;t.bindTexture(J,we),p(J),t.unbindTexture()}}}const Be=[],L=[];function rt(P){if(P.samples>0){if(ke(P)===!1){const E=P.textures,G=P.width,ee=P.height;let re=n.COLOR_BUFFER_BIT;const J=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=i.get(P),ae=E.length>1;if(ae)for(let ge=0;ge<E.length;ge++)t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let ge=0;ge<E.length;ge++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(re|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(re|=n.STENCIL_BUFFER_BIT)),ae){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,we.__webglColorRenderbuffer[ge]);const fe=i.get(E[ge]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,fe,0)}n.blitFramebuffer(0,0,G,ee,0,0,G,ee,re,n.NEAREST),l===!0&&(Be.length=0,L.length=0,Be.push(n.COLOR_ATTACHMENT0+ge),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Be.push(J),L.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,L)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Be))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ae)for(let ge=0;ge<E.length;ge++){t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,we.__webglColorRenderbuffer[ge]);const fe=i.get(E[ge]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,fe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const E=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function He(P){return Math.min(r.maxSamples,P.samples)}function ke(P){const E=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function k(P){const E=o.render.frame;c.get(P)!==E&&(c.set(P,E),P.update())}function qe(P,E){const G=P.colorSpace,ee=P.format,re=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||G!==qs&&G!==gs&&(_t.getTransfer(G)===Lt?(ee!==ur||re!==es)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),E}function Fe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(u.width=P.naturalWidth||P.width,u.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(u.width=P.displayWidth,u.height=P.displayHeight):(u.width=P.width,u.height=P.height),u}this.allocateTextureUnit=I,this.resetTextureUnits=T,this.setTexture2D=X,this.setTexture2DArray=Z,this.setTexture3D=H,this.setTextureCube=Y,this.rebindTextures=Ae,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=rt,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=ke}function hD(n,e){function t(i,r=gs){let s;const o=_t.getTransfer(r);if(i===es)return n.UNSIGNED_BYTE;if(i===B_)return n.UNSIGNED_SHORT_4_4_4_4;if(i===H_)return n.UNSIGNED_SHORT_5_5_5_1;if(i===E1)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===S1)return n.BYTE;if(i===M1)return n.SHORT;if(i===Wu)return n.UNSIGNED_SHORT;if(i===z_)return n.INT;if(i===zo)return n.UNSIGNED_INT;if(i===Wr)return n.FLOAT;if(i===Qu)return n.HALF_FLOAT;if(i===T1)return n.ALPHA;if(i===w1)return n.RGB;if(i===ur)return n.RGBA;if(i===A1)return n.LUMINANCE;if(i===C1)return n.LUMINANCE_ALPHA;if(i===Va)return n.DEPTH_COMPONENT;if(i===al)return n.DEPTH_STENCIL;if(i===R1)return n.RED;if(i===V_)return n.RED_INTEGER;if(i===b1)return n.RG;if(i===G_)return n.RG_INTEGER;if(i===W_)return n.RGBA_INTEGER;if(i===Ef||i===Tf||i===wf||i===Af)if(o===Lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ef)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Tf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===wf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Af)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ef)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Tf)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===wf)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Af)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Gm||i===Wm||i===Xm||i===Ym)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Gm)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Wm)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Xm)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ym)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===jm||i===$m||i===qm)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===jm||i===$m)return o===Lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===qm)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Km||i===Zm||i===Qm||i===Jm||i===eg||i===tg||i===ng||i===ig||i===rg||i===sg||i===og||i===ag||i===lg||i===ug)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Km)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Zm)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Qm)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Jm)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===eg)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===tg)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ng)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ig)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===rg)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===sg)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===og)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ag)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===lg)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ug)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Cf||i===cg||i===fg)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Cf)return o===Lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===cg)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===fg)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===P1||i===dg||i===hg||i===pg)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Cf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===dg)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===hg)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===pg)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ol?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class pD extends Bi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Xl extends Ci{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mD={type:"move"};class sp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(u,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=c.position.distanceTo(f.position),h=.02,g=.005;u.inputState.pinching&&d>h+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=h-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(mD)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Xl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const gD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_D=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class vD{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Xn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ws({vertexShader:gD,fragmentShader:_D,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new cr(new ul(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xD extends pl{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,d=null,h=null,g=null;const _=new vD,m=t.getContextAttributes();let p=null,v=null;const x=[],S=[],C=new $e;let w=null;const M=new Bi;M.layers.enable(1),M.viewport=new Zt;const R=new Bi;R.layers.enable(2),R.viewport=new Zt;const N=[M,R],y=new pD;y.layers.enable(1),y.layers.enable(2);let T=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ne=x[j];return ne===void 0&&(ne=new sp,x[j]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(j){let ne=x[j];return ne===void 0&&(ne=new sp,x[j]=ne),ne.getGripSpace()},this.getHand=function(j){let ne=x[j];return ne===void 0&&(ne=new sp,x[j]=ne),ne.getHandSpace()};function B(j){const ne=S.indexOf(j.inputSource);if(ne===-1)return;const de=x[ne];de!==void 0&&(de.update(j.inputSource,j.frame,u||o),de.dispatchEvent({type:j.type,data:j.inputSource}))}function X(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",Z);for(let j=0;j<x.length;j++){const ne=S[j];ne!==null&&(S[j]=null,x[j].disconnect(ne))}T=null,I=null,_.reset(),e.setRenderTarget(p),h=null,d=null,f=null,r=null,v=null,Ie.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(j){u=j},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",X),r.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,ne),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),v=new Bo(h.framebufferWidth,h.framebufferHeight,{format:ur,type:es,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ne=null,de=null,le=null;m.depth&&(le=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=m.stencil?al:Va,de=m.stencil?ol:zo);const be={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(be),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Bo(d.textureWidth,d.textureHeight,{format:ur,type:es,depthTexture:new W1(d.textureWidth,d.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Ie.setContext(r),Ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Z(j){for(let ne=0;ne<j.removed.length;ne++){const de=j.removed[ne],le=S.indexOf(de);le>=0&&(S[le]=null,x[le].disconnect(de))}for(let ne=0;ne<j.added.length;ne++){const de=j.added[ne];let le=S.indexOf(de);if(le===-1){for(let Ae=0;Ae<x.length;Ae++)if(Ae>=S.length){S.push(de),le=Ae;break}else if(S[Ae]===null){S[Ae]=de,le=Ae;break}if(le===-1)break}const be=x[le];be&&be.connect(de)}}const H=new z,Y=new z;function D(j,ne,de){H.setFromMatrixPosition(ne.matrixWorld),Y.setFromMatrixPosition(de.matrixWorld);const le=H.distanceTo(Y),be=ne.projectionMatrix.elements,Ae=de.projectionMatrix.elements,Ye=be[14]/(be[10]-1),We=be[14]/(be[10]+1),Be=(be[9]+1)/be[5],L=(be[9]-1)/be[5],rt=(be[8]-1)/be[0],He=(Ae[8]+1)/Ae[0],ke=Ye*rt,k=Ye*He,qe=le/(-rt+He),Fe=qe*-rt;if(ne.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Fe),j.translateZ(qe),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),be[10]===-1)j.projectionMatrix.copy(ne.projectionMatrix),j.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const P=Ye+qe,E=We+qe,G=ke-Fe,ee=k+(le-Fe),re=Be*We/E*P,J=L*We/E*P;j.projectionMatrix.makePerspective(G,ee,re,J,P,E),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function $(j,ne){ne===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ne.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let ne=j.near,de=j.far;_.texture!==null&&(_.depthNear>0&&(ne=_.depthNear),_.depthFar>0&&(de=_.depthFar)),y.near=R.near=M.near=ne,y.far=R.far=M.far=de,(T!==y.near||I!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),T=y.near,I=y.far);const le=j.parent,be=y.cameras;$(y,le);for(let Ae=0;Ae<be.length;Ae++)$(be[Ae],le);be.length===2?D(y,M,R):y.projectionMatrix.copy(M.projectionMatrix),b(j,y,le)};function b(j,ne,de){de===null?j.matrix.copy(ne.matrixWorld):(j.matrix.copy(de.matrixWorld),j.matrix.invert(),j.matrix.multiply(ne.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ne.projectionMatrix),j.projectionMatrixInverse.copy(ne.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=mg*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=j)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let ie=null;function Te(j,ne){if(c=ne.getViewerPose(u||o),g=ne,c!==null){const de=c.views;h!==null&&(e.setRenderTargetFramebuffer(v,h.framebuffer),e.setRenderTarget(v));let le=!1;de.length!==y.cameras.length&&(y.cameras.length=0,le=!0);for(let Ae=0;Ae<de.length;Ae++){const Ye=de[Ae];let We=null;if(h!==null)We=h.getViewport(Ye);else{const L=f.getViewSubImage(d,Ye);We=L.viewport,Ae===0&&(e.setRenderTargetTextures(v,L.colorTexture,d.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(v))}let Be=N[Ae];Be===void 0&&(Be=new Bi,Be.layers.enable(Ae),Be.viewport=new Zt,N[Ae]=Be),Be.matrix.fromArray(Ye.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(Ye.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(We.x,We.y,We.width,We.height),Ae===0&&(y.matrix.copy(Be.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),le===!0&&y.cameras.push(Be)}const be=r.enabledFeatures;if(be&&be.includes("depth-sensing")){const Ae=f.getDepthInformation(de[0]);Ae&&Ae.isValid&&Ae.texture&&_.init(e,Ae,r.renderState)}}for(let de=0;de<x.length;de++){const le=S[de],be=x[de];le!==null&&be!==void 0&&be.update(le,ne,u||o)}ie&&ie(j,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),g=null}const Ie=new G1;Ie.setAnimationLoop(Te),this.setAnimationLoop=function(j){ie=j},this.dispose=function(){}}}const ro=new Ti,yD=new Jt;function SD(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,z1(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,v,x,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),c(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,v,x):p.isSpriteMaterial?u(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===oi&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===oi&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p),x=v.envMap,S=v.envMapRotation;x&&(m.envMap.value=x,ro.copy(S),ro.x*=-1,ro.y*=-1,ro.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ro.y*=-1,ro.z*=-1),m.envMapRotation.value.setFromMatrix4(yD.makeRotationFromEuler(ro)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===oi&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function MD(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const S=x.program;i.uniformBlockBinding(v,S)}function u(v,x){let S=r[v.id];S===void 0&&(g(v),S=c(v),r[v.id]=S,v.addEventListener("dispose",m));const C=x.program;i.updateUBOMapping(v,C);const w=e.render.frame;s[v.id]!==w&&(d(v),s[v.id]=w)}function c(v){const x=f();v.__bindingPointIndex=x;const S=n.createBuffer(),C=v.__size,w=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,C,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,S),S}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const x=r[v.id],S=v.uniforms,C=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let w=0,M=S.length;w<M;w++){const R=Array.isArray(S[w])?S[w]:[S[w]];for(let N=0,y=R.length;N<y;N++){const T=R[N];if(h(T,w,N,C)===!0){const I=T.__offset,B=Array.isArray(T.value)?T.value:[T.value];let X=0;for(let Z=0;Z<B.length;Z++){const H=B[Z],Y=_(H);typeof H=="number"||typeof H=="boolean"?(T.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,I+X,T.__data)):H.isMatrix3?(T.__data[0]=H.elements[0],T.__data[1]=H.elements[1],T.__data[2]=H.elements[2],T.__data[3]=0,T.__data[4]=H.elements[3],T.__data[5]=H.elements[4],T.__data[6]=H.elements[5],T.__data[7]=0,T.__data[8]=H.elements[6],T.__data[9]=H.elements[7],T.__data[10]=H.elements[8],T.__data[11]=0):(H.toArray(T.__data,X),X+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,I,T.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(v,x,S,C){const w=v.value,M=x+"_"+S;if(C[M]===void 0)return typeof w=="number"||typeof w=="boolean"?C[M]=w:C[M]=w.clone(),!0;{const R=C[M];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return C[M]=w,!0}else if(R.equals(w)===!1)return R.copy(w),!0}return!1}function g(v){const x=v.uniforms;let S=0;const C=16;for(let M=0,R=x.length;M<R;M++){const N=Array.isArray(x[M])?x[M]:[x[M]];for(let y=0,T=N.length;y<T;y++){const I=N[y],B=Array.isArray(I.value)?I.value:[I.value];for(let X=0,Z=B.length;X<Z;X++){const H=B[X],Y=_(H),D=S%C,$=D%Y.boundary,b=D+$;S+=$,b!==0&&C-b<Y.storage&&(S+=C-b),I.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=S,S+=Y.storage}}}const w=S%C;return w>0&&(S+=C-w),v.__size=S,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function p(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:p}}class ED{constructor(e={}){const{canvas:t=lR(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const h=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=sr,this.toneMapping=Fs,this.toneMappingExposure=1;const x=this;let S=!1,C=0,w=0,M=null,R=-1,N=null;const y=new Zt,T=new Zt;let I=null;const B=new ht(0);let X=0,Z=t.width,H=t.height,Y=1,D=null,$=null;const b=new Zt(0,0,Z,H),ie=new Zt(0,0,Z,H);let Te=!1;const Ie=new V1;let j=!1,ne=!1;const de=new Jt,le=new Jt,be=new z,Ae=new Zt,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function Be(){return M===null?Y:1}let L=i;function rt(A,O){return t.getContext(A,O)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${k_}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",pe,!1),t.addEventListener("webglcontextcreationerror",_e,!1),L===null){const O="webgl2";if(L=rt(O,A),L===null)throw rt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let He,ke,k,qe,Fe,P,E,G,ee,re,J,we,ae,ge,fe,q,oe,he,Se,me,Ve,Pe,tt,U;function se(){He=new R2(L),He.init(),Pe=new hD(L,He),ke=new S2(L,He,e,Pe),k=new cD(L),ke.reverseDepthBuffer&&k.buffers.depth.setReversed(!0),qe=new L2(L),Fe=new qL,P=new dD(L,He,k,Fe,ke,Pe,qe),E=new E2(x),G=new C2(x),ee=new OR(L),tt=new x2(L,ee),re=new b2(L,ee,qe,tt),J=new N2(L,re,ee,qe),Se=new D2(L,ke,P),q=new M2(Fe),we=new $L(x,E,G,He,ke,tt,q),ae=new SD(x,Fe),ge=new ZL,fe=new iD(He),he=new v2(x,E,G,k,J,d,l),oe=new lD(x,J,ke),U=new MD(L,qe,ke,k),me=new y2(L,He,qe),Ve=new P2(L,He,qe),qe.programs=we.programs,x.capabilities=ke,x.extensions=He,x.properties=Fe,x.renderLists=ge,x.shadowMap=oe,x.state=k,x.info=qe}se();const Q=new xD(x,L);this.xr=Q,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const A=He.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=He.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(A){A!==void 0&&(Y=A,this.setSize(Z,H,!1))},this.getSize=function(A){return A.set(Z,H)},this.setSize=function(A,O,V=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=A,H=O,t.width=Math.floor(A*Y),t.height=Math.floor(O*Y),V===!0&&(t.style.width=A+"px",t.style.height=O+"px"),this.setViewport(0,0,A,O)},this.getDrawingBufferSize=function(A){return A.set(Z*Y,H*Y).floor()},this.setDrawingBufferSize=function(A,O,V){Z=A,H=O,Y=V,t.width=Math.floor(A*V),t.height=Math.floor(O*V),this.setViewport(0,0,A,O)},this.getCurrentViewport=function(A){return A.copy(y)},this.getViewport=function(A){return A.copy(b)},this.setViewport=function(A,O,V,W){A.isVector4?b.set(A.x,A.y,A.z,A.w):b.set(A,O,V,W),k.viewport(y.copy(b).multiplyScalar(Y).round())},this.getScissor=function(A){return A.copy(ie)},this.setScissor=function(A,O,V,W){A.isVector4?ie.set(A.x,A.y,A.z,A.w):ie.set(A,O,V,W),k.scissor(T.copy(ie).multiplyScalar(Y).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(A){k.setScissorTest(Te=A)},this.setOpaqueSort=function(A){D=A},this.setTransparentSort=function(A){$=A},this.getClearColor=function(A){return A.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor.apply(he,arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha.apply(he,arguments)},this.clear=function(A=!0,O=!0,V=!0){let W=0;if(A){let F=!1;if(M!==null){const ce=M.texture.format;F=ce===W_||ce===G_||ce===V_}if(F){const ce=M.texture.type,Ee=ce===es||ce===zo||ce===Wu||ce===ol||ce===B_||ce===H_,xe=he.getClearColor(),ve=he.getClearAlpha(),Ne=xe.r,Xe=xe.g,De=xe.b;Ee?(h[0]=Ne,h[1]=Xe,h[2]=De,h[3]=ve,L.clearBufferuiv(L.COLOR,0,h)):(g[0]=Ne,g[1]=Xe,g[2]=De,g[3]=ve,L.clearBufferiv(L.COLOR,0,g))}else W|=L.COLOR_BUFFER_BIT}O&&(W|=L.DEPTH_BUFFER_BIT,L.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),V&&(W|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",pe,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),ge.dispose(),fe.dispose(),Fe.dispose(),E.dispose(),G.dispose(),J.dispose(),tt.dispose(),U.dispose(),we.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",dt),Q.removeEventListener("sessionend",ye),Ge.stop()};function te(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const A=qe.autoReset,O=oe.enabled,V=oe.autoUpdate,W=oe.needsUpdate,F=oe.type;se(),qe.autoReset=A,oe.enabled=O,oe.autoUpdate=V,oe.needsUpdate=W,oe.type=F}function _e(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ke(A){const O=A.target;O.removeEventListener("dispose",Ke),Et(O)}function Et(A){Nt(A),Fe.remove(A)}function Nt(A){const O=Fe.get(A).programs;O!==void 0&&(O.forEach(function(V){we.releaseProgram(V)}),A.isShaderMaterial&&we.releaseShaderCache(A))}this.renderBufferDirect=function(A,O,V,W,F,ce){O===null&&(O=Ye);const Ee=F.isMesh&&F.matrixWorld.determinant()<0,xe=vt(A,O,V,W,F);k.setMaterial(W,Ee);let ve=V.index,Ne=1;if(W.wireframe===!0){if(ve=re.getWireframeAttribute(V),ve===void 0)return;Ne=2}const Xe=V.drawRange,De=V.attributes.position;let ct=Xe.start*Ne,ut=(Xe.start+Xe.count)*Ne;ce!==null&&(ct=Math.max(ct,ce.start*Ne),ut=Math.min(ut,(ce.start+ce.count)*Ne)),ve!==null?(ct=Math.max(ct,0),ut=Math.min(ut,ve.count)):De!=null&&(ct=Math.max(ct,0),ut=Math.min(ut,De.count));const St=ut-ct;if(St<0||St===1/0)return;tt.setup(F,W,xe,V,ve);let fn,nt=me;if(ve!==null&&(fn=ee.get(ve),nt=Ve,nt.setIndex(fn)),F.isMesh)W.wireframe===!0?(k.setLineWidth(W.wireframeLinewidth*Be()),nt.setMode(L.LINES)):nt.setMode(L.TRIANGLES);else if(F.isLine){let ze=W.linewidth;ze===void 0&&(ze=1),k.setLineWidth(ze*Be()),F.isLineSegments?nt.setMode(L.LINES):F.isLineLoop?nt.setMode(L.LINE_LOOP):nt.setMode(L.LINE_STRIP)}else F.isPoints?nt.setMode(L.POINTS):F.isSprite&&nt.setMode(L.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)nt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(He.get("WEBGL_multi_draw"))nt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const ze=F._multiDrawStarts,vn=F._multiDrawCounts,mt=F._multiDrawCount,Ki=ve?ee.get(ve).bytesPerElement:1,Wo=Fe.get(W).currentProgram.getUniforms();for(let ui=0;ui<mt;ui++)Wo.setValue(L,"_gl_DrawID",ui),nt.render(ze[ui]/Ki,vn[ui])}else if(F.isInstancedMesh)nt.renderInstances(ct,St,F.count);else if(V.isInstancedBufferGeometry){const ze=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,vn=Math.min(V.instanceCount,ze);nt.renderInstances(ct,St,vn)}else nt.render(ct,St)};function at(A,O,V){A.transparent===!0&&A.side===ar&&A.forceSinglePass===!1?(A.side=oi,A.needsUpdate=!0,jt(A,O,V),A.side=Gs,A.needsUpdate=!0,jt(A,O,V),A.side=ar):jt(A,O,V)}this.compile=function(A,O,V=null){V===null&&(V=A),m=fe.get(V),m.init(O),v.push(m),V.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),A!==V&&A.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights();const W=new Set;return A.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ce=F.material;if(ce)if(Array.isArray(ce))for(let Ee=0;Ee<ce.length;Ee++){const xe=ce[Ee];at(xe,V,F),W.add(xe)}else at(ce,V,F),W.add(ce)}),v.pop(),m=null,W},this.compileAsync=function(A,O,V=null){const W=this.compile(A,O,V);return new Promise(F=>{function ce(){if(W.forEach(function(Ee){Fe.get(Ee).currentProgram.isReady()&&W.delete(Ee)}),W.size===0){F(A);return}setTimeout(ce,10)}He.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let Ue=null;function Le(A){Ue&&Ue(A)}function dt(){Ge.stop()}function ye(){Ge.start()}const Ge=new G1;Ge.setAnimationLoop(Le),typeof self<"u"&&Ge.setContext(self),this.setAnimationLoop=function(A){Ue=A,Q.setAnimationLoop(A),A===null?Ge.stop():Ge.start()},Q.addEventListener("sessionstart",dt),Q.addEventListener("sessionend",ye),this.render=function(A,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(O),O=Q.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,O,M),m=fe.get(A,v.length),m.init(O),v.push(m),le.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Ie.setFromProjectionMatrix(le),ne=this.localClippingEnabled,j=q.init(this.clippingPlanes,ne),_=ge.get(A,p.length),_.init(),p.push(_),Q.enabled===!0&&Q.isPresenting===!0){const ce=x.xr.getDepthSensingMesh();ce!==null&&Oe(ce,O,-1/0,x.sortObjects)}Oe(A,O,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(D,$),We=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,We&&he.addToRenderList(_,A),this.info.render.frame++,j===!0&&q.beginShadows();const V=m.state.shadowsArray;oe.render(V,A,O),j===!0&&q.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=_.opaque,F=_.transmissive;if(m.setupLights(),O.isArrayCamera){const ce=O.cameras;if(F.length>0)for(let Ee=0,xe=ce.length;Ee<xe;Ee++){const ve=ce[Ee];Yt(W,F,A,ve)}We&&he.render(A);for(let Ee=0,xe=ce.length;Ee<xe;Ee++){const ve=ce[Ee];je(_,A,ve,ve.viewport)}}else F.length>0&&Yt(W,F,A,O),We&&he.render(A),je(_,A,O);M!==null&&(P.updateMultisampleRenderTarget(M),P.updateRenderTargetMipmap(M)),A.isScene===!0&&A.onAfterRender(x,A,O),tt.resetDefaultState(),R=-1,N=null,v.pop(),v.length>0?(m=v[v.length-1],j===!0&&q.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Oe(A,O,V,W){if(A.visible===!1)return;if(A.layers.test(O.layers)){if(A.isGroup)V=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(O);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ie.intersectsSprite(A)){W&&Ae.setFromMatrixPosition(A.matrixWorld).applyMatrix4(le);const Ee=J.update(A),xe=A.material;xe.visible&&_.push(A,Ee,xe,V,Ae.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ie.intersectsObject(A))){const Ee=J.update(A),xe=A.material;if(W&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ae.copy(A.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Ae.copy(Ee.boundingSphere.center)),Ae.applyMatrix4(A.matrixWorld).applyMatrix4(le)),Array.isArray(xe)){const ve=Ee.groups;for(let Ne=0,Xe=ve.length;Ne<Xe;Ne++){const De=ve[Ne],ct=xe[De.materialIndex];ct&&ct.visible&&_.push(A,Ee,ct,V,Ae.z,De)}}else xe.visible&&_.push(A,Ee,xe,V,Ae.z,null)}}const ce=A.children;for(let Ee=0,xe=ce.length;Ee<xe;Ee++)Oe(ce[Ee],O,V,W)}function je(A,O,V,W){const F=A.opaque,ce=A.transmissive,Ee=A.transparent;m.setupLightsView(V),j===!0&&q.setGlobalState(x.clippingPlanes,V),W&&k.viewport(y.copy(W)),F.length>0&&Ze(F,O,V),ce.length>0&&Ze(ce,O,V),Ee.length>0&&Ze(Ee,O,V),k.buffers.depth.setTest(!0),k.buffers.depth.setMask(!0),k.buffers.color.setMask(!0),k.setPolygonOffset(!1)}function Yt(A,O,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[W.id]===void 0&&(m.state.transmissionRenderTarget[W.id]=new Bo(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?Qu:es,minFilter:So,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_t.workingColorSpace}));const ce=m.state.transmissionRenderTarget[W.id],Ee=W.viewport||y;ce.setSize(Ee.z,Ee.w);const xe=x.getRenderTarget();x.setRenderTarget(ce),x.getClearColor(B),X=x.getClearAlpha(),X<1&&x.setClearColor(16777215,.5),x.clear(),We&&he.render(V);const ve=x.toneMapping;x.toneMapping=Fs;const Ne=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),m.setupLightsView(W),j===!0&&q.setGlobalState(x.clippingPlanes,W),Ze(A,V,W),P.updateMultisampleRenderTarget(ce),P.updateRenderTargetMipmap(ce),He.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let De=0,ct=O.length;De<ct;De++){const ut=O[De],St=ut.object,fn=ut.geometry,nt=ut.material,ze=ut.group;if(nt.side===ar&&St.layers.test(W.layers)){const vn=nt.side;nt.side=oi,nt.needsUpdate=!0,It(St,V,W,fn,nt,ze),nt.side=vn,nt.needsUpdate=!0,Xe=!0}}Xe===!0&&(P.updateMultisampleRenderTarget(ce),P.updateRenderTargetMipmap(ce))}x.setRenderTarget(xe),x.setClearColor(B,X),Ne!==void 0&&(W.viewport=Ne),x.toneMapping=ve}function Ze(A,O,V){const W=O.isScene===!0?O.overrideMaterial:null;for(let F=0,ce=A.length;F<ce;F++){const Ee=A[F],xe=Ee.object,ve=Ee.geometry,Ne=W===null?Ee.material:W,Xe=Ee.group;xe.layers.test(V.layers)&&It(xe,O,V,ve,Ne,Xe)}}function It(A,O,V,W,F,ce){A.onBeforeRender(x,O,V,W,F,ce),A.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),F.onBeforeRender(x,O,V,W,A,ce),F.transparent===!0&&F.side===ar&&F.forceSinglePass===!1?(F.side=oi,F.needsUpdate=!0,x.renderBufferDirect(V,O,W,F,A,ce),F.side=Gs,F.needsUpdate=!0,x.renderBufferDirect(V,O,W,F,A,ce),F.side=ar):x.renderBufferDirect(V,O,W,F,A,ce),A.onAfterRender(x,O,V,W,F,ce)}function jt(A,O,V){O.isScene!==!0&&(O=Ye);const W=Fe.get(A),F=m.state.lights,ce=m.state.shadowsArray,Ee=F.state.version,xe=we.getParameters(A,F.state,ce,O,V),ve=we.getProgramCacheKey(xe);let Ne=W.programs;W.environment=A.isMeshStandardMaterial?O.environment:null,W.fog=O.fog,W.envMap=(A.isMeshStandardMaterial?G:E).get(A.envMap||W.environment),W.envMapRotation=W.environment!==null&&A.envMap===null?O.environmentRotation:A.envMapRotation,Ne===void 0&&(A.addEventListener("dispose",Ke),Ne=new Map,W.programs=Ne);let Xe=Ne.get(ve);if(Xe!==void 0){if(W.currentProgram===Xe&&W.lightsStateVersion===Ee)return Tt(A,xe),Xe}else xe.uniforms=we.getUniforms(A),A.onBeforeCompile(xe,x),Xe=we.acquireProgram(xe,ve),Ne.set(ve,Xe),W.uniforms=xe.uniforms;const De=W.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(De.clippingPlanes=q.uniform),Tt(A,xe),W.needsLights=bt(A),W.lightsStateVersion=Ee,W.needsLights&&(De.ambientLightColor.value=F.state.ambient,De.lightProbe.value=F.state.probe,De.directionalLights.value=F.state.directional,De.directionalLightShadows.value=F.state.directionalShadow,De.spotLights.value=F.state.spot,De.spotLightShadows.value=F.state.spotShadow,De.rectAreaLights.value=F.state.rectArea,De.ltc_1.value=F.state.rectAreaLTC1,De.ltc_2.value=F.state.rectAreaLTC2,De.pointLights.value=F.state.point,De.pointLightShadows.value=F.state.pointShadow,De.hemisphereLights.value=F.state.hemi,De.directionalShadowMap.value=F.state.directionalShadowMap,De.directionalShadowMatrix.value=F.state.directionalShadowMatrix,De.spotShadowMap.value=F.state.spotShadowMap,De.spotLightMatrix.value=F.state.spotLightMatrix,De.spotLightMap.value=F.state.spotLightMap,De.pointShadowMap.value=F.state.pointShadowMap,De.pointShadowMatrix.value=F.state.pointShadowMatrix),W.currentProgram=Xe,W.uniformsList=null,Xe}function Rt(A){if(A.uniformsList===null){const O=A.currentProgram.getUniforms();A.uniformsList=bf.seqWithValue(O.seq,A.uniforms)}return A.uniformsList}function Tt(A,O){const V=Fe.get(A);V.outputColorSpace=O.outputColorSpace,V.batching=O.batching,V.batchingColor=O.batchingColor,V.instancing=O.instancing,V.instancingColor=O.instancingColor,V.instancingMorph=O.instancingMorph,V.skinning=O.skinning,V.morphTargets=O.morphTargets,V.morphNormals=O.morphNormals,V.morphColors=O.morphColors,V.morphTargetsCount=O.morphTargetsCount,V.numClippingPlanes=O.numClippingPlanes,V.numIntersection=O.numClipIntersection,V.vertexAlphas=O.vertexAlphas,V.vertexTangents=O.vertexTangents,V.toneMapping=O.toneMapping}function vt(A,O,V,W,F){O.isScene!==!0&&(O=Ye),P.resetTextureUnits();const ce=O.fog,Ee=W.isMeshStandardMaterial?O.environment:null,xe=M===null?x.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:qs,ve=(W.isMeshStandardMaterial?G:E).get(W.envMap||Ee),Ne=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Xe=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),De=!!V.morphAttributes.position,ct=!!V.morphAttributes.normal,ut=!!V.morphAttributes.color;let St=Fs;W.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(St=x.toneMapping);const fn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,nt=fn!==void 0?fn.length:0,ze=Fe.get(W),vn=m.state.lights;if(j===!0&&(ne===!0||A!==N)){const Ni=A===N&&W.id===R;q.setState(W,A,Ni)}let mt=!1;W.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==vn.state.version||ze.outputColorSpace!==xe||F.isBatchedMesh&&ze.batching===!1||!F.isBatchedMesh&&ze.batching===!0||F.isBatchedMesh&&ze.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&ze.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&ze.instancing===!1||!F.isInstancedMesh&&ze.instancing===!0||F.isSkinnedMesh&&ze.skinning===!1||!F.isSkinnedMesh&&ze.skinning===!0||F.isInstancedMesh&&ze.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&ze.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&ze.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&ze.instancingMorph===!1&&F.morphTexture!==null||ze.envMap!==ve||W.fog===!0&&ze.fog!==ce||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==q.numPlanes||ze.numIntersection!==q.numIntersection)||ze.vertexAlphas!==Ne||ze.vertexTangents!==Xe||ze.morphTargets!==De||ze.morphNormals!==ct||ze.morphColors!==ut||ze.toneMapping!==St||ze.morphTargetsCount!==nt)&&(mt=!0):(mt=!0,ze.__version=W.version);let Ki=ze.currentProgram;mt===!0&&(Ki=jt(W,O,F));let Wo=!1,ui=!1,Bd=!1;const $t=Ki.getUniforms(),is=ze.uniforms;if(k.useProgram(Ki.program)&&(Wo=!0,ui=!0,Bd=!0),W.id!==R&&(R=W.id,ui=!0),Wo||N!==A){ke.reverseDepthBuffer?(de.copy(A.projectionMatrix),cR(de),fR(de),$t.setValue(L,"projectionMatrix",de)):$t.setValue(L,"projectionMatrix",A.projectionMatrix),$t.setValue(L,"viewMatrix",A.matrixWorldInverse);const Ni=$t.map.cameraPosition;Ni!==void 0&&Ni.setValue(L,be.setFromMatrixPosition(A.matrixWorld)),ke.logarithmicDepthBuffer&&$t.setValue(L,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&$t.setValue(L,"isOrthographic",A.isOrthographicCamera===!0),N!==A&&(N=A,ui=!0,Bd=!0)}if(F.isSkinnedMesh){$t.setOptional(L,F,"bindMatrix"),$t.setOptional(L,F,"bindMatrixInverse");const Ni=F.skeleton;Ni&&(Ni.boneTexture===null&&Ni.computeBoneTexture(),$t.setValue(L,"boneTexture",Ni.boneTexture,P))}F.isBatchedMesh&&($t.setOptional(L,F,"batchingTexture"),$t.setValue(L,"batchingTexture",F._matricesTexture,P),$t.setOptional(L,F,"batchingIdTexture"),$t.setValue(L,"batchingIdTexture",F._indirectTexture,P),$t.setOptional(L,F,"batchingColorTexture"),F._colorsTexture!==null&&$t.setValue(L,"batchingColorTexture",F._colorsTexture,P));const Hd=V.morphAttributes;if((Hd.position!==void 0||Hd.normal!==void 0||Hd.color!==void 0)&&Se.update(F,V,Ki),(ui||ze.receiveShadow!==F.receiveShadow)&&(ze.receiveShadow=F.receiveShadow,$t.setValue(L,"receiveShadow",F.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(is.envMap.value=ve,is.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&O.environment!==null&&(is.envMapIntensity.value=O.environmentIntensity),ui&&($t.setValue(L,"toneMappingExposure",x.toneMappingExposure),ze.needsLights&&li(is,Bd),ce&&W.fog===!0&&ae.refreshFogUniforms(is,ce),ae.refreshMaterialUniforms(is,W,Y,H,m.state.transmissionRenderTarget[A.id]),bf.upload(L,Rt(ze),is,P)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(bf.upload(L,Rt(ze),is,P),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&$t.setValue(L,"center",F.center),$t.setValue(L,"modelViewMatrix",F.modelViewMatrix),$t.setValue(L,"normalMatrix",F.normalMatrix),$t.setValue(L,"modelMatrix",F.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Ni=W.uniformsGroups;for(let Vd=0,Z1=Ni.length;Vd<Z1;Vd++){const Z_=Ni[Vd];U.update(Z_,Ki),U.bind(Z_,Ki)}}return Ki}function li(A,O){A.ambientLightColor.needsUpdate=O,A.lightProbe.needsUpdate=O,A.directionalLights.needsUpdate=O,A.directionalLightShadows.needsUpdate=O,A.pointLights.needsUpdate=O,A.pointLightShadows.needsUpdate=O,A.spotLights.needsUpdate=O,A.spotLightShadows.needsUpdate=O,A.rectAreaLights.needsUpdate=O,A.hemisphereLights.needsUpdate=O}function bt(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(A,O,V){Fe.get(A.texture).__webglTexture=O,Fe.get(A.depthTexture).__webglTexture=V;const W=Fe.get(A);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||He.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,O){const V=Fe.get(A);V.__webglFramebuffer=O,V.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(A,O=0,V=0){M=A,C=O,w=V;let W=!0,F=null,ce=!1,Ee=!1;if(A){const ve=Fe.get(A);if(ve.__useDefaultFramebuffer!==void 0)k.bindFramebuffer(L.FRAMEBUFFER,null),W=!1;else if(ve.__webglFramebuffer===void 0)P.setupRenderTarget(A);else if(ve.__hasExternalTextures)P.rebindTextures(A,Fe.get(A.texture).__webglTexture,Fe.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const De=A.depthTexture;if(ve.__boundDepthTexture!==De){if(De!==null&&Fe.has(De)&&(A.width!==De.image.width||A.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(A)}}const Ne=A.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Ee=!0);const Xe=Fe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Xe[O])?F=Xe[O][V]:F=Xe[O],ce=!0):A.samples>0&&P.useMultisampledRTT(A)===!1?F=Fe.get(A).__webglMultisampledFramebuffer:Array.isArray(Xe)?F=Xe[V]:F=Xe,y.copy(A.viewport),T.copy(A.scissor),I=A.scissorTest}else y.copy(b).multiplyScalar(Y).floor(),T.copy(ie).multiplyScalar(Y).floor(),I=Te;if(k.bindFramebuffer(L.FRAMEBUFFER,F)&&W&&k.drawBuffers(A,F),k.viewport(y),k.scissor(T),k.setScissorTest(I),ce){const ve=Fe.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+O,ve.__webglTexture,V)}else if(Ee){const ve=Fe.get(A.texture),Ne=O||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,ve.__webglTexture,V||0,Ne)}R=-1},this.readRenderTargetPixels=function(A,O,V,W,F,ce,Ee){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Fe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ee!==void 0&&(xe=xe[Ee]),xe){k.bindFramebuffer(L.FRAMEBUFFER,xe);try{const ve=A.texture,Ne=ve.format,Xe=ve.type;if(!ke.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ke.textureTypeReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=A.width-W&&V>=0&&V<=A.height-F&&L.readPixels(O,V,W,F,Pe.convert(Ne),Pe.convert(Xe),ce)}finally{const ve=M!==null?Fe.get(M).__webglFramebuffer:null;k.bindFramebuffer(L.FRAMEBUFFER,ve)}}},this.readRenderTargetPixelsAsync=async function(A,O,V,W,F,ce,Ee){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Fe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ee!==void 0&&(xe=xe[Ee]),xe){const ve=A.texture,Ne=ve.format,Xe=ve.type;if(!ke.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ke.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=A.width-W&&V>=0&&V<=A.height-F){k.bindFramebuffer(L.FRAMEBUFFER,xe);const De=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,De),L.bufferData(L.PIXEL_PACK_BUFFER,ce.byteLength,L.STREAM_READ),L.readPixels(O,V,W,F,Pe.convert(Ne),Pe.convert(Xe),0);const ct=M!==null?Fe.get(M).__webglFramebuffer:null;k.bindFramebuffer(L.FRAMEBUFFER,ct);const ut=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await uR(L,ut,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,De),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ce),L.deleteBuffer(De),L.deleteSync(ut),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,O=null,V=0){A.isTexture!==!0&&(Rf("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,A=arguments[1]);const W=Math.pow(2,-V),F=Math.floor(A.image.width*W),ce=Math.floor(A.image.height*W),Ee=O!==null?O.x:0,xe=O!==null?O.y:0;P.setTexture2D(A,0),L.copyTexSubImage2D(L.TEXTURE_2D,V,0,0,Ee,xe,F,ce),k.unbindTexture()},this.copyTextureToTexture=function(A,O,V=null,W=null,F=0){A.isTexture!==!0&&(Rf("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,A=arguments[1],O=arguments[2],F=arguments[3]||0,V=null);let ce,Ee,xe,ve,Ne,Xe;V!==null?(ce=V.max.x-V.min.x,Ee=V.max.y-V.min.y,xe=V.min.x,ve=V.min.y):(ce=A.image.width,Ee=A.image.height,xe=0,ve=0),W!==null?(Ne=W.x,Xe=W.y):(Ne=0,Xe=0);const De=Pe.convert(O.format),ct=Pe.convert(O.type);P.setTexture2D(O,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,O.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,O.unpackAlignment);const ut=L.getParameter(L.UNPACK_ROW_LENGTH),St=L.getParameter(L.UNPACK_IMAGE_HEIGHT),fn=L.getParameter(L.UNPACK_SKIP_PIXELS),nt=L.getParameter(L.UNPACK_SKIP_ROWS),ze=L.getParameter(L.UNPACK_SKIP_IMAGES),vn=A.isCompressedTexture?A.mipmaps[F]:A.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,vn.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,vn.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,xe),L.pixelStorei(L.UNPACK_SKIP_ROWS,ve),A.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,F,Ne,Xe,ce,Ee,De,ct,vn.data):A.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,F,Ne,Xe,vn.width,vn.height,De,vn.data):L.texSubImage2D(L.TEXTURE_2D,F,Ne,Xe,ce,Ee,De,ct,vn),L.pixelStorei(L.UNPACK_ROW_LENGTH,ut),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,St),L.pixelStorei(L.UNPACK_SKIP_PIXELS,fn),L.pixelStorei(L.UNPACK_SKIP_ROWS,nt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ze),F===0&&O.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),k.unbindTexture()},this.copyTextureToTexture3D=function(A,O,V=null,W=null,F=0){A.isTexture!==!0&&(Rf("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,W=arguments[1]||null,A=arguments[2],O=arguments[3],F=arguments[4]||0);let ce,Ee,xe,ve,Ne,Xe,De,ct,ut;const St=A.isCompressedTexture?A.mipmaps[F]:A.image;V!==null?(ce=V.max.x-V.min.x,Ee=V.max.y-V.min.y,xe=V.max.z-V.min.z,ve=V.min.x,Ne=V.min.y,Xe=V.min.z):(ce=St.width,Ee=St.height,xe=St.depth,ve=0,Ne=0,Xe=0),W!==null?(De=W.x,ct=W.y,ut=W.z):(De=0,ct=0,ut=0);const fn=Pe.convert(O.format),nt=Pe.convert(O.type);let ze;if(O.isData3DTexture)P.setTexture3D(O,0),ze=L.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)P.setTexture2DArray(O,0),ze=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,O.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,O.unpackAlignment);const vn=L.getParameter(L.UNPACK_ROW_LENGTH),mt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Ki=L.getParameter(L.UNPACK_SKIP_PIXELS),Wo=L.getParameter(L.UNPACK_SKIP_ROWS),ui=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,St.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,St.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ve),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ne),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Xe),A.isDataTexture||A.isData3DTexture?L.texSubImage3D(ze,F,De,ct,ut,ce,Ee,xe,fn,nt,St.data):O.isCompressedArrayTexture?L.compressedTexSubImage3D(ze,F,De,ct,ut,ce,Ee,xe,fn,St.data):L.texSubImage3D(ze,F,De,ct,ut,ce,Ee,xe,fn,nt,St),L.pixelStorei(L.UNPACK_ROW_LENGTH,vn),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,mt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ki),L.pixelStorei(L.UNPACK_SKIP_ROWS,Wo),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ui),F===0&&O.generateMipmaps&&L.generateMipmap(ze),k.unbindTexture()},this.initRenderTarget=function(A){Fe.get(A).__webglFramebuffer===void 0&&P.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?P.setTextureCube(A,0):A.isData3DTexture?P.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?P.setTexture2DArray(A,0):P.setTexture2D(A,0),k.unbindTexture()},this.resetState=function(){C=0,w=0,M=null,k.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===X_?"display-p3":"srgb",t.unpackColorSpace=_t.workingColorSpace===Od?"display-p3":"srgb"}}class $_{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new ht(e),this.near=t,this.far=i}clone(){return new $_(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class TD extends Ci{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ti,this.environmentIntensity=1,this.environmentRotation=new Ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ns{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,u;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),u=i[r]-o,u<0)a=r+1;else if(u>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const c=i[r],d=i[r+1]-c,h=(o-c)/d;return(r+h)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new $e:new z);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new z,r=[],s=[],o=[],a=new z,l=new Jt;for(let h=0;h<=e;h++){const g=h/e;r[h]=this.getTangentAt(g,new z)}s[0]=new z,o[0]=new z;let u=Number.MAX_VALUE;const c=Math.abs(r[0].x),f=Math.abs(r[0].y),d=Math.abs(r[0].z);c<=u&&(u=c,i.set(1,0,0)),f<=u&&(u=f,i.set(0,1,0)),d<=u&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let h=1;h<=e;h++){if(s[h]=s[h-1].clone(),o[h]=o[h-1].clone(),a.crossVectors(r[h-1],r[h]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ln(r[h-1].dot(r[h]),-1,1));s[h].applyMatrix4(l.makeRotationAxis(a,g))}o[h].crossVectors(r[h],s[h])}if(t===!0){let h=Math.acos(Ln(s[0].dot(s[e]),-1,1));h/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(h=-h);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],h*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class q1 extends ns{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new $e){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const c=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,h=u-this.aY;l=d*c-h*f+this.aX,u=d*f+h*c+this.aY}return i.set(l,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class wD extends q1{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function q_(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,u){r(o,a,u*(a-s),u*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,u,c,f){let d=(o-s)/u-(a-s)/(u+c)+(a-o)/c,h=(a-o)/c-(l-o)/(c+f)+(l-a)/f;d*=c,h*=c,r(o,a,d,h)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const ef=new z,op=new q_,ap=new q_,lp=new q_;class AD extends ns{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new z){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let u,c;this.closed||a>0?u=r[(a-1)%s]:(ef.subVectors(r[0],r[1]).add(r[0]),u=ef);const f=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?c=r[(a+2)%s]:(ef.subVectors(r[s-1],r[s-2]).add(r[s-1]),c=ef),this.curveType==="centripetal"||this.curveType==="chordal"){const h=this.curveType==="chordal"?.5:.25;let g=Math.pow(u.distanceToSquared(f),h),_=Math.pow(f.distanceToSquared(d),h),m=Math.pow(d.distanceToSquared(c),h);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),op.initNonuniformCatmullRom(u.x,f.x,d.x,c.x,g,_,m),ap.initNonuniformCatmullRom(u.y,f.y,d.y,c.y,g,_,m),lp.initNonuniformCatmullRom(u.z,f.z,d.z,c.z,g,_,m)}else this.curveType==="catmullrom"&&(op.initCatmullRom(u.x,f.x,d.x,c.x,this.tension),ap.initCatmullRom(u.y,f.y,d.y,c.y,this.tension),lp.initCatmullRom(u.z,f.z,d.z,c.z,this.tension));return i.set(op.calc(l),ap.calc(l),lp.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new z().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ox(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function CD(n,e){const t=1-n;return t*t*e}function RD(n,e){return 2*(1-n)*n*e}function bD(n,e){return n*n*e}function pu(n,e,t,i){return CD(n,e)+RD(n,t)+bD(n,i)}function PD(n,e){const t=1-n;return t*t*t*e}function LD(n,e){const t=1-n;return 3*t*t*n*e}function DD(n,e){return 3*(1-n)*n*n*e}function ND(n,e){return n*n*n*e}function mu(n,e,t,i,r){return PD(n,e)+LD(n,t)+DD(n,i)+ND(n,r)}class ID extends ns{constructor(e=new $e,t=new $e,i=new $e,r=new $e){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new $e){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(mu(e,r.x,s.x,o.x,a.x),mu(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class UD extends ns{constructor(e=new z,t=new z,i=new z,r=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new z){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(mu(e,r.x,s.x,o.x,a.x),mu(e,r.y,s.y,o.y,a.y),mu(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class FD extends ns{constructor(e=new $e,t=new $e){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new $e){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new $e){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Pf extends ns{constructor(e=new z,t=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new z){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class OD extends ns{constructor(e=new $e,t=new $e,i=new $e){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new $e){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(pu(e,r.x,s.x,o.x),pu(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class K1 extends ns{constructor(e=new z,t=new z,i=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new z){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(pu(e,r.x,s.x,o.x),pu(e,r.y,s.y,o.y),pu(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class kD extends ns{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new $e){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],u=r[o],c=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(Ox(a,l.x,u.x,c.x,f.x),Ox(a,l.y,u.y,c.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new $e().fromArray(r))}return this}}var zD=Object.freeze({__proto__:null,ArcCurve:wD,CatmullRomCurve3:AD,CubicBezierCurve:ID,CubicBezierCurve3:UD,EllipseCurve:q1,LineCurve:FD,LineCurve3:Pf,QuadraticBezierCurve:OD,QuadraticBezierCurve3:K1,SplineCurve:kD});class gu extends Ks{constructor(e=new K1(new z(-1,-1,0),new z(-1,1,0),new z(1,1,0)),t=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new z,l=new z,u=new $e;let c=new z;const f=[],d=[],h=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Rr(f,3)),this.setAttribute("normal",new Rr(d,3)),this.setAttribute("uv",new Rr(h,2));function _(){for(let x=0;x<t;x++)m(x);m(s===!1?t:0),v(),p()}function m(x){c=e.getPointAt(x/t,c);const S=o.normals[x],C=o.binormals[x];for(let w=0;w<=r;w++){const M=w/r*Math.PI*2,R=Math.sin(M),N=-Math.cos(M);l.x=N*S.x+R*C.x,l.y=N*S.y+R*C.y,l.z=N*S.z+R*C.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=c.x+i*l.x,a.y=c.y+i*l.y,a.z=c.z+i*l.z,f.push(a.x,a.y,a.z)}}function p(){for(let x=1;x<=t;x++)for(let S=1;S<=r;S++){const C=(r+1)*(x-1)+(S-1),w=(r+1)*x+(S-1),M=(r+1)*x+S,R=(r+1)*(x-1)+S;g.push(C,w,R),g.push(w,M,R)}}function v(){for(let x=0;x<=t;x++)for(let S=0;S<=r;S++)u.x=x/t,u.y=S/r,h.push(u.x,u.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new gu(new zD[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}const kx={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class BD{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,f){return u.push(c,f),this},this.removeHandler=function(c){const f=u.indexOf(c);return f!==-1&&u.splice(f,2),this},this.getHandler=function(c){for(let f=0,d=u.length;f<d;f+=2){const h=u[f],g=u[f+1];if(h.global&&(h.lastIndex=0),h.test(c))return g}return null}}}const HD=new BD;class K_{constructor(e){this.manager=e!==void 0?e:HD,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}K_.DEFAULT_MATERIAL_NAME="__DEFAULT";class VD extends K_{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=kx.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Xu("img");function l(){c(),kx.add(e,this),t&&t(this),s.manager.itemEnd(e)}function u(f){c(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class GD extends K_{constructor(e){super(e)}load(e,t,i,r){const s=new Xn,o=new VD(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:k_}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=k_);const di="/Portfolio/dist/",WD=[`${di}assets/brandMarketing.jpeg`,`${di}assets/contentCreating.jpeg`,`${di}assets/contentMarketing.jpeg`,`${di}assets/insta.jpeg`,`${di}assets/Digital Marketing.jpeg`,`${di}assets/facebook.jpeg`,`${di}assets/influencing.jpeg`,`${di}assets/content.jpeg`,`${di}assets/youtube.jpeg`,`${di}assets/PRManage.jpeg`,`${di}assets/Editing.jpeg`,`${di}assets/socialMedia.jpeg`,`${di}assets/tiktok.png`,""],hi={background:"#1E233D",lineColor:"#B0B0B0",lineOpacity:50,colors:["#FF6A00","#AB54F7","#EA3737","#0072E3","#00AA3C","#FFB200"],grid:4,speed:100,boost:100,fade:100,label:!0,labelText:"Press to Start",labelFill:"#FFFFFF",labelColor:"#F5F4F1",labelFont:{fontFamily:"Inter",fontSize:14,fontWeight:500}},up=2,cp=1.8,nr=1,_g=15,fp=.003,XD=.1,YD=1,dp=_g*nr*.95,jD=n=>typeof n=="string"?n:n?.src??"";function $D(n){const{images:e,colors:t,background:i=hi.background,lineColor:r=hi.lineColor,lineOpacity:s=hi.lineOpacity,grid:o=hi.grid,speed:a=hi.speed,boost:l=hi.boost,fade:u=hi.fade,label:c=hi.label,labelText:f=hi.labelText,labelFill:d=hi.labelFill,labelColor:h=hi.labelColor,labelFont:g=hi.labelFont,style:_}=n,m=Mt.useRef(null),p=Mt.useRef(null),v=Mt.useRef(null),x=Mt.useMemo(()=>{const w=(e??[]).map(jD).filter(Boolean);return w.length?w:WD},[e]),S=Mt.useMemo(()=>{const w=(t??[]).filter(Boolean);return w.length?w:hi.colors},[t]),C=Mt.useRef({speed:1,boost:1});return C.current={speed:Math.max(0,a)/100,boost:Math.max(0,l)/10},Mt.useEffect(()=>{const w=m.current,M=p.current;if(!w||!M)return;const R=new TD;R.background=new ht(i);const N=Math.min(dp*(1-Math.min(100,Math.max(0,u))/100),dp-.01);R.fog=new $_(new ht(i),N,dp);const y=new Bi(45,1,1,1e3);y.position.set(0,0,0);const T=new ED({canvas:M,antialias:!0,alpha:!1,powerPreference:"high-performance"});T.setPixelRatio(Math.min(window.devicePixelRatio||1,2));const I=new hu({color:new ht(r),transparent:!0,opacity:Math.min(100,Math.max(0,s))/100}),B=new GD;B.setCrossOrigin("anonymous");const X=[];let Z=0,H=0,Y=0,D=0,$=0,b=!1,ie=!0,Te=new Set;const Ie=up/2,j=cp/2,ne=Math.max(1,Math.round(o)),de=Math.max(1,Math.round(o)),le=up/ne,be=cp/de,Ae=new ul(le,nr),Ye=new ul(nr,be),We=new gu(new Pf(new z(0,0,0),new z(0,0,-nr)),1,fp,8),Be=new gu(new Pf(new z(0,0,0),new z(up,0,0)),1,fp,8),L=new gu(new Pf(new z(0,0,0),new z(0,cp,0)),1,fp,8),rt=S.map(fe=>new hu({color:new ht(fe),side:ar})),He=x.map(fe=>{const q=new hu({transparent:!0,opacity:0,side:ar});return B.load(fe,oe=>{if(!ie){oe.dispose();return}oe.minFilter=Hi,oe.generateMipmaps=!1,oe.colorSpace=sr,q.map=oe,q.needsUpdate=!0,X.push(q)},void 0,()=>{}),q}),ke=(fe,q,oe,he=0)=>{const Se=new cr(fe,I);return Se.position.set(q,oe,he),Se},k=[];{const fe=-nr/2;for(let q=0;q<ne;q++){const oe=-Ie+q*le+le/2;k.push({geo:Ae,pos:new z(oe,-j,fe),rot:new Ti(-Math.PI/2,0,0)}),k.push({geo:Ae,pos:new z(oe,j,fe),rot:new Ti(Math.PI/2,0,0)})}for(let q=0;q<de;q++){const oe=-j+q*be+be/2;k.push({geo:Ye,pos:new z(-Ie,oe,fe),rot:new Ti(0,Math.PI/2,0)}),k.push({geo:Ye,pos:new z(Ie,oe,fe),rot:new Ti(0,-Math.PI/2,0)})}}function qe(fe){const q=H%2===0;H++;const oe=fe.userData.slabs,he=new Set;for(let Se=0;Se<oe.length;Se++){const me=oe[Se];if(!q||Te.has(Se)||Math.random()>.5){me.visible=!1;continue}me.visible=!0,he.add(Se),me.material=He[Z%He.length],Z++}Te=he}function Fe(fe){const q=new Xl;q.position.z=fe;for(let he=0;he<=ne;he++){const Se=-Ie+he*le;q.add(ke(We,Se,-j)),q.add(ke(We,Se,j))}for(let he=1;he<de;he++){const Se=-j+he*be;q.add(ke(We,-Ie,Se)),q.add(ke(We,Ie,Se))}q.add(ke(Be,-Ie,-j)),q.add(ke(Be,-Ie,j)),q.add(ke(L,-Ie,-j)),q.add(ke(L,Ie,-j));const oe=k.map(he=>{const Se=new cr(he.geo,rt[0]);return Se.position.copy(he.pos),Se.rotation.copy(he.rot),Se.visible=!1,q.add(Se),Se});return q.userData.slabs=oe,qe(q),q}const P=[];for(let fe=0;fe<_g;fe++){const q=Fe(-fe*nr);R.add(q),P.push(q)}const E=()=>{const fe=Math.max(1,w.clientWidth),q=Math.max(1,w.clientHeight);y.aspect=fe/q,y.updateProjectionMatrix(),T.setSize(fe,q,!1)},G=new ResizeObserver(E);G.observe(w),E();const ee=fe=>{if(!ie)return;D=requestAnimationFrame(ee);const q=$?Math.min((fe-$)/1e3,1/30):1/60;$=fe;const oe=C.current;Y+=b?oe.boost:oe.speed;const he=-.05*Y;y.position.z+=XD*(he-y.position.z);const Se=_g*nr,me=y.position.z;for(const Ve of P)if(Ve.position.z>me+nr){let Pe=0;for(const tt of P)Pe=Math.min(Pe,tt.position.z);Ve.position.z=Pe-nr,qe(Ve)}else if(Ve.position.z<me-Se-nr){let Pe=-999999;for(const tt of P)Pe=Math.max(Pe,tt.position.z);Ve.position.z=Pe+nr,qe(Ve)}for(let Ve=X.length-1;Ve>=0;Ve--){const Pe=X[Ve];Pe.opacity=Math.min(1,Pe.opacity+q/YD),Pe.opacity>=1&&X.splice(Ve,1)}T.render(R,y)};D=requestAnimationFrame(ee);const re=fe=>{const q=v.current;if(!q)return;const oe=w.getBoundingClientRect(),he=oe.width>0?w.clientWidth/oe.width:1,Se=oe.height>0?w.clientHeight/oe.height:1;q.style.left=`${(fe.clientX-oe.left)*he}px`,q.style.top=`${(fe.clientY-oe.top)*Se}px`},J=()=>{const fe=v.current;fe&&(fe.style.opacity="1")},we=()=>{b=!1;const fe=v.current;fe&&(fe.style.opacity="0",fe.style.transform="translate(0%, -100%) scale(1)")},ae=()=>{b=!0;const fe=v.current;fe&&(fe.style.transform="translate(0%, -100%) scale(0.85)")},ge=()=>{b=!1;const fe=v.current;fe&&(fe.style.transform="translate(0%, -100%) scale(1)")};return w.addEventListener("pointermove",re),w.addEventListener("pointerenter",J),w.addEventListener("pointerleave",we),w.addEventListener("pointerdown",ae),window.addEventListener("pointerup",ge),()=>{ie=!1,cancelAnimationFrame(D),G.disconnect(),w.removeEventListener("pointermove",re),w.removeEventListener("pointerenter",J),w.removeEventListener("pointerleave",we),w.removeEventListener("pointerdown",ae),window.removeEventListener("pointerup",ge),Ae.dispose(),Ye.dispose(),We.dispose(),Be.dispose(),L.dispose();for(const fe of rt)fe.dispose();for(const fe of He)fe.map?.dispose(),fe.dispose();I.dispose(),T.dispose()}},[x,S,i,r,s,o,u]),K.jsxs("div",{ref:m,style:{..._,position:"relative",width:"100%",height:"100%",overflow:"hidden",cursor:c?"none":"default"},children:[K.jsx("canvas",{ref:p,style:{display:"block",width:"100%",height:"100%"}}),c&&K.jsx("div",{ref:v,style:{position:"absolute",top:0,left:0,transform:"translate(0%, -100%) scale(1)",pointerEvents:"none",opacity:0,background:d,borderRadius:9999,padding:"10px 20px",transition:"transform 0.1s ease, opacity 0.2s ease",whiteSpace:"nowrap",userSelect:"none",...g,color:h},children:f})]})}const qD={label:"Encrypt data"};function KD(n){return K.jsx($D,{...qD,...n})}Xt.registerPlugin(et);const ZD=[{phase:"Started Content Creation",period:"2021-Present",detail:"I began my content creation journey in 2021, experimenting with video creation, storytelling, and social media."},{phase:"Built My Social Presence",period:"2021–2023",detail:"I started building and managing my presence across YouTube, Instagram, Facebook, and TikTok, consistently creating and publishing content."},{phase:"Expanded My Skills",period:"2023–2025",detail:"As my experience grew, I worked with multiple brands and explored different content categories, including food, restaurants, travel, lifestyle, products, fashion, and UGC. During this period, I also developed skills in video editing, scripting, thumbnails, social media management, analytics, content strategy, and brand promotion."},{phase:"Digital Marketing Certification",period:"2023-2025",detail:"To strengthen my understanding of the business and marketing side of content, I completed a Digital Marketing Certification from Aptech."},{phase:"Launched UGC Content Creation Agency",period:"2023-Present",detail:"After developing experience as a creator and gaining digital marketing knowledge, I launched my own UGC Content Creation Agency. Agency Growth: I have successfully worked with 10–15+ brands through my agency, helping them create UGC content, video advertisements, and social media campaigns."},{phase:"Current Progress of Content Creation and UGC Agency",period:"2021-Present",detail:"Started my content creation journey in 2021 and have built around 5 years of experience. I create content across YouTube, Instagram, Facebook, and TikTok, with 10K+ YouTube subscribers. Worked with 50+ brands across food, restaurants, travel, lifestyle, products, fashion, and UGC. Experienced in storytelling, scripting, video creation, editing, thumbnails, and social media content."},{phase:"University Journey",period:"2026",detail:"I have now started my university journey at IoBM, pursuing Accounting & Finance (ACF) while continuing to manage my agency and create content alongside my studies. Today, I continue to work as a Content Creator and Agency Founder, combining creativity, digital marketing, business knowledge, and practical industry experience."}];function QD(){const n=Mt.useRef(null),e=Mt.useRef(null),t=hl();return Mt.useLayoutEffect(()=>{const i=Xt.context(()=>{e.current&&Xt.fromTo(e.current,{scaleY:0},{scaleY:1,ease:"none",transformOrigin:"top",scrollTrigger:{trigger:n.current,start:"top 60%",end:"bottom 80%",scrub:.5}}),Xt.utils.toArray(".timeline-row").forEach(r=>{Xt.fromTo(r,{opacity:0,y:t?0:40,scale:t?1:.97},{opacity:1,y:0,scale:1,duration:.9,ease:"power3.out",scrollTrigger:{trigger:r,start:"top 82%"}})})},n);return()=>i.revert()},[t]),K.jsxs("section",{ref:n,id:"process",className:"relative mx-auto max-w-[1200px] px-6 py-28 md:px-14 md:py-40",children:[K.jsx("p",{className:"font-mono-label mb-4 text-xs text-[#F54F1B]/80",children:"Trajectory"}),K.jsxs("h2",{className:"mb-20 font-display text-display-lg text-bone",children:["My Journey",K.jsx("span",{className:"text-[#F54F1B]",children:"."})]}),K.jsxs("div",{className:"relative pl-10 md:pl-16",children:[K.jsx("div",{className:"absolute left-0 top-0 h-full w-px bg-line md:left-0"}),K.jsx("div",{ref:e,className:"absolute left-0 top-0 h-full w-px bg-gradient-to-b from-[#F54F1B] to-[#F54F1B] md:left-0"}),K.jsx("div",{className:"flex flex-col gap-16 md:gap-24",children:ZD.map(i=>K.jsxs("div",{className:"timeline-row relative",children:[K.jsx("span",{className:"absolute -left-[42px] top-1 h-2.5 w-2.5 rounded-full bg-[#F54F1B] md:-left-[66px]"}),K.jsx("p",{className:"font-mono-label mb-2 text-[10px] text-bone-dim",children:i.period}),K.jsx("h3",{className:"font-display text-2xl text-bone md:text-3xl",children:i.phase}),K.jsx("p",{className:"mt-3 max-w-lg font-mono text-sm leading-relaxed text-bone-dim",children:i.detail})]},i.phase))})]})]})}Xt.registerPlugin(et);const JD=[{label:"Youtube",href:"https://youtube.com/@hamzarajputvlogs273/"},{label:"Instagram",href:"https://instagram.com/hamzaaliofficial07/"},{label:"Tiktok",href:" https://www.tiktok.com/@hamzarajputvlogs/"},{label:"Facebook",href:" https://www.facebook.com/share/1Um2Sv5NKS/"}];function e3(){const n=Mt.useRef(null),e=hl();return Mt.useLayoutEffect(()=>{const t=Xt.context(()=>{Xt.fromTo(".contact-reveal",{opacity:0,y:e?0:50},{opacity:1,y:0,duration:1.1,ease:"power3.out",stagger:.1,scrollTrigger:{trigger:n.current,start:"top 75%"}})},n);return()=>t.revert()},[e]),K.jsxs("section",{ref:n,id:"contact",className:"relative flex min-h-[40vh] flex-col justify-between overflow-hidden border-t border-line bg-[#1E233D] px-6 py-20 md:px-14",children:[K.jsx("div",{className:"pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(245,79,27,0.06),transparent_60%)]"}),K.jsxs("a",{href:"https://instagram.com/agency_by_hamza",target:"_blank",rel:"noreferrer",className:"contact-reveal group relative z-10 mx-auto block w-fit text-center",children:[K.jsxs("span",{className:"font-display text-[clamp(11vw,15vw,13vw)] leading-[1.05] tracking-tightest text-bone transition-colors duration-500 group-hover:text-[#F54F1B]",children:["LET'S  WORK",K.jsx("br",{}),"TOGETHER"]}),K.jsx("span",{className:"mt-6 block h-[2px] w-full origin-left scale-x-0 bg-[#F54F1B] transition-transform duration-700 ease-cinematic group-hover:scale-x-100"})]}),K.jsxs("div",{className:"contact-reveal relative z-10 mt-20 flex flex-col items-center justify-between gap-8 border-t border-line pt-8 font-mono-label text-[10px] text-bone-dim md:flex-row",children:[K.jsx("span",{children:"© HAMZA ALI"}),K.jsx("div",{className:"flex flex-wrap items-center justify-center gap-6",children:JD.map(t=>{const i=t.href.startsWith("mailto:");return K.jsx("a",{href:t.href,target:i?void 0:"_blank",rel:i?void 0:"noreferrer",className:"transition-colors duration-300 hover:text-[#F54F1B]",children:t.label},t.label)})}),K.jsx("span",{children:"Karachi · Remote Worldwide"})]})]})}const t3=[{label:"Digital Marketing",iconUrl:"/Portfolio/dist/assets/Digital Marketing.jpeg"},{label:"Influencer Marketing",iconUrl:"/Portfolio/dist/assets/influencing.jpeg"},{label:"Social Media Management",iconUrl:"/Portfolio/dist/assets/content.jpeg"},{label:"PR Management",iconUrl:"/Portfolio/dist/assets/PRManage.jpeg"},{label:"Content Creation",iconUrl:"/Portfolio/dist/assets/contentCreating.jpeg"},{label:"Content Strategy",iconUrl:"/Portfolio/dist/assets/contentMarketing.jpeg"},{label:"Social Media Marketing",iconUrl:"/Portfolio/dist/assets/socialMedia.jpeg"},{label:"Brand Promotion",iconUrl:"/Portfolio/dist/assets/BrandMarketing.jpeg"},{label:"Market Research",iconUrl:"/Portfolio/dist/assets/MarketResearch.jpeg"},{label:"Video Editing",iconUrl:"/Portfolio/dist/assets/Editing.jpeg"}];function n3(){return K.jsx("section",{id:"skills",className:"relative mx-auto max-w-[1600px] px-6 pt-28 pb-10 md:px-14 md:pt-20 md:pb-10",children:K.jsxs("div",{className:"rounded-[2rem] border border-[#F54F1B]/20 bg-[#1E233D]/70 p-8 backdrop-blur-xl",children:[K.jsxs("div",{className:"mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between",children:[K.jsxs("div",{children:[K.jsx("p",{className:"font-mono-label mb-4 text-xs text-[#F54F1B]/80 width-max-content",children:"Skills"}),K.jsxs("h3",{className:"font-display text-display-lg text-bone",children:["Core Skills",K.jsx("span",{className:"text-[#F54F1B]",children:"."})]})]}),K.jsx("p",{className:"max-w-xl font-mono text-xs leading-relaxed text-bone-dim",children:"I have a diverse skill set that spans across various domains, including digital marketing,video editing, brand promotion and designing. My expertise lies in creating impactful strategies, developing creative-content, and crafting visually appealing designs that resonate with audiences. I am constantly learning and adapting to new technologies and trends to stay ahead in the ever-evolving digital landscape."})]}),K.jsx("div",{className:"grid gap-3 sm:grid-cols-2 lg:grid-cols-3 pt-6",children:t3.map(n=>K.jsx("div",{className:"rounded-2xl border border-[#F54F1B]/40 bg-[#1E233D] px-5 py-4 text-sm font-medium text-bone transition hover:border-[#F54F1B] hover:bg-[#25294D]",children:K.jsxs("div",{className:"flex items-center gap-3",children:[K.jsx("img",{src:n.iconUrl,alt:`${n.label} logo`,className:"h-10 w-10 rounded-lg border border-[#F54F1B]/40 object-contain",loading:"lazy"}),K.jsx("span",{children:n.label})]})},n.label))})]})})}class i3 extends Mt.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){console.error("3D scene failed to mount:",e)}render(){return this.state.hasError?K.jsx("div",{className:"flex h-full w-full items-center justify-center",children:K.jsx("div",{className:"h-40 w-40 rounded-full border border-[#F54F1B]/40 bg-[#F54F1B]/5"})}):this.props.children}}function r3(){return K.jsxs("div",{className:"relative bg-[#1E233D]",children:[K.jsx("div",{className:"grain-overlay"}),K.jsx(jA,{}),K.jsxs("main",{children:[K.jsx(i3,{children:K.jsx(pC,{})}),K.jsx(vC,{}),K.jsx(n3,{}),K.jsx(KD,{}),K.jsx(QD,{}),K.jsx(e3,{})]})]})}hp.createRoot(document.getElementById("root")).render(K.jsx(pE.StrictMode,{children:K.jsx(r3,{})}));
