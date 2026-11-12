(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))s(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(u){if(u.ep)return;u.ep=!0;const f=i(u);fetch(u.href,f)}})();var Sh={exports:{}},cl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gv;function Qy(){if(gv)return cl;gv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,u,f){var d=null;if(f!==void 0&&(d=""+f),u.key!==void 0&&(d=""+u.key),"key"in u){f={};for(var h in u)h!=="key"&&(f[h]=u[h])}else f=u;return u=f.ref,{$$typeof:o,type:s,key:d,ref:u!==void 0?u:null,props:f}}return cl.Fragment=e,cl.jsx=i,cl.jsxs=i,cl}var _v;function Jy(){return _v||(_v=1,Sh.exports=Qy()),Sh.exports}var Qt=Jy(),xh={exports:{}},ue={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vv;function jy(){if(vv)return ue;vv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),S=Symbol.for("react.view_transition"),E=Symbol.iterator;function T(w){return w===null||typeof w!="object"?null:(w=E&&w[E]||w["@@iterator"],typeof w=="function"?w:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,M={};function D(w,J,St){this.props=w,this.context=J,this.refs=M,this.updater=St||N}D.prototype.isReactComponent={},D.prototype.setState=function(w,J){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,J,"setState")},D.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function z(){}z.prototype=D.prototype;function L(w,J,St){this.props=w,this.context=J,this.refs=M,this.updater=St||N}var I=L.prototype=new z;I.constructor=L,y(I,D.prototype),I.isPureReactComponent=!0;var O=Array.isArray;function x(){}var C={H:null,A:null,T:null,S:null},W=Object.prototype.hasOwnProperty;function F(w,J,St){var yt=St.ref;return{$$typeof:o,type:w,key:J,ref:yt!==void 0?yt:null,props:St}}function H(w,J){return F(w.type,J,w.props)}function $(w){return typeof w=="object"&&w!==null&&w.$$typeof===o}function ct(w){var J={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(St){return J[St]})}var X=/\/+/g;function it(w,J){return typeof w=="object"&&w!==null&&w.key!=null?ct(""+w.key):J.toString(36)}function q(w){switch(w.status){case"fulfilled":return w.value;case"rejected":throw w.reason;default:switch(typeof w.status=="string"?w.then(x,x):(w.status="pending",w.then(function(J){w.status==="pending"&&(w.status="fulfilled",w.value=J)},function(J){w.status==="pending"&&(w.status="rejected",w.reason=J)})),w.status){case"fulfilled":return w.value;case"rejected":throw w.reason}}throw w}function k(w,J,St,yt,Et){var Ft=typeof w;(Ft==="undefined"||Ft==="boolean")&&(w=null);var ee=!1;if(w===null)ee=!0;else switch(Ft){case"bigint":case"string":case"number":ee=!0;break;case"object":switch(w.$$typeof){case o:case e:ee=!0;break;case v:return ee=w._init,k(ee(w._payload),J,St,yt,Et)}}if(ee)return Et=Et(w),ee=yt===""?"."+it(w,0):yt,O(Et)?(St="",ee!=null&&(St=ee.replace(X,"$&/")+"/"),k(Et,J,St,"",function(xe){return xe})):Et!=null&&($(Et)&&(Et=H(Et,St+(Et.key==null||w&&w.key===Et.key?"":(""+Et.key).replace(X,"$&/")+"/")+ee)),J.push(Et)),1;ee=0;var Mt=yt===""?".":yt+":";if(O(w))for(var Ht=0;Ht<w.length;Ht++)yt=w[Ht],Ft=Mt+it(yt,Ht),ee+=k(yt,J,St,Ft,Et);else if(Ht=T(w),typeof Ht=="function")for(w=Ht.call(w),Ht=0;!(yt=w.next()).done;)yt=yt.value,Ft=Mt+it(yt,Ht++),ee+=k(yt,J,St,Ft,Et);else if(Ft==="object"){if(typeof w.then=="function")return k(q(w),J,St,yt,Et);throw J=String(w),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return ee}function ut(w,J,St){if(w==null)return w;var yt=[],Et=0;return k(w,yt,"","",function(Ft){return J.call(St,Ft,Et++)}),yt}function tt(w){if(w._status===-1){var J=w._result,St=J();St.then(function(yt){(w._status===0||w._status===-1)&&(w._status=1,w._result=yt,St.status===void 0&&(St.status="fulfilled",St.value=yt))},function(yt){(w._status===0||w._status===-1)&&(w._status=2,w._result=yt,St.status===void 0&&(St.status="rejected",St.reason=yt))}),w._status===-1&&(w._status=0,w._result=St)}if(w._status===1)return w._result.default;throw w._result}var ft=typeof reportError=="function"?reportError:function(w){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof w=="object"&&w!==null&&typeof w.message=="string"?String(w.message):String(w),error:w});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",w);return}console.error(w)};function xt(w){var J=C.T,St={};St.types=J!==null?J.types:null,C.T=St;try{var yt=w(),Et=C.S;Et!==null&&Et(St,yt),typeof yt=="object"&&yt!==null&&typeof yt.then=="function"&&yt.then(x,ft)}catch(Ft){ft(Ft)}finally{J!==null&&St.types!==null&&(J.types=St.types),C.T=J}}function Vt(w){var J=C.T;if(J!==null){var St=J.types;St===null?J.types=[w]:St.indexOf(w)===-1&&St.push(w)}else xt(Vt.bind(null,w))}var te={map:ut,forEach:function(w,J,St){ut(w,function(){J.apply(this,arguments)},St)},count:function(w){var J=0;return ut(w,function(){J++}),J},toArray:function(w){return ut(w,function(J){return J})||[]},only:function(w){if(!$(w))throw Error("React.Children.only expected to receive a single React element child.");return w}};return ue.Activity=g,ue.Children=te,ue.Component=D,ue.Fragment=i,ue.Profiler=u,ue.PureComponent=L,ue.StrictMode=s,ue.Suspense=p,ue.ViewTransition=S,ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,ue.__COMPILER_RUNTIME={__proto__:null,c:function(w){return C.H.useMemoCache(w)}},ue.addTransitionType=Vt,ue.cache=function(w){return function(){return w.apply(null,arguments)}},ue.cacheSignal=function(){return null},ue.cloneElement=function(w,J,St){if(w==null)throw Error("The argument must be a React element, but you passed "+w+".");var yt=y({},w.props),Et=w.key;if(J!=null)for(Ft in J.key!==void 0&&(Et=""+J.key),J)!W.call(J,Ft)||Ft==="key"||Ft==="__self"||Ft==="__source"||Ft==="ref"&&J.ref===void 0||(yt[Ft]=J[Ft]);var Ft=arguments.length-2;if(Ft===1)yt.children=St;else if(1<Ft){for(var ee=Array(Ft),Mt=0;Mt<Ft;Mt++)ee[Mt]=arguments[Mt+2];yt.children=ee}return F(w.type,Et,yt)},ue.createContext=function(w){return w={$$typeof:d,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null},w.Provider=w,w.Consumer={$$typeof:f,_context:w},w},ue.createElement=function(w,J,St){var yt,Et={},Ft=null;if(J!=null)for(yt in J.key!==void 0&&(Ft=""+J.key),J)W.call(J,yt)&&yt!=="key"&&yt!=="__self"&&yt!=="__source"&&(Et[yt]=J[yt]);var ee=arguments.length-2;if(ee===1)Et.children=St;else if(1<ee){for(var Mt=Array(ee),Ht=0;Ht<ee;Ht++)Mt[Ht]=arguments[Ht+2];Et.children=Mt}if(w&&w.defaultProps)for(yt in ee=w.defaultProps,ee)Et[yt]===void 0&&(Et[yt]=ee[yt]);return F(w,Ft,Et)},ue.createRef=function(){return{current:null}},ue.forwardRef=function(w){return{$$typeof:h,render:w}},ue.isValidElement=$,ue.lazy=function(w){return{$$typeof:v,_payload:{_status:-1,_result:w},_init:tt}},ue.memo=function(w,J){return{$$typeof:m,type:w,compare:J===void 0?null:J}},ue.startTransition=xt,ue.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},ue.use=function(w){return C.H.use(w)},ue.useActionState=function(w,J,St){return C.H.useActionState(w,J,St)},ue.useCallback=function(w,J){return C.H.useCallback(w,J)},ue.useContext=function(w){return C.H.useContext(w)},ue.useDebugValue=function(){},ue.useDeferredValue=function(w,J){return C.H.useDeferredValue(w,J)},ue.useEffect=function(w,J){return C.H.useEffect(w,J)},ue.useEffectEvent=function(w){return C.H.useEffectEvent(w)},ue.useId=function(){return C.H.useId()},ue.useImperativeHandle=function(w,J,St){return C.H.useImperativeHandle(w,J,St)},ue.useInsertionEffect=function(w,J){return C.H.useInsertionEffect(w,J)},ue.useLayoutEffect=function(w,J){return C.H.useLayoutEffect(w,J)},ue.useMemo=function(w,J){return C.H.useMemo(w,J)},ue.useOptimistic=function(w,J){return C.H.useOptimistic(w,J)},ue.useReducer=function(w,J,St){return C.H.useReducer(w,J,St)},ue.useRef=function(w){return C.H.useRef(w)},ue.useState=function(w){return C.H.useState(w)},ue.useSyncExternalStore=function(w,J,St){return C.H.useSyncExternalStore(w,J,St)},ue.useTransition=function(){return C.H.useTransition()},ue.version="19.3.1",ue}var Sv;function Xp(){return Sv||(Sv=1,xh.exports=jy()),xh.exports}var ii=Xp(),Mh={exports:{}},fl={},yh={exports:{}},Eh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xv;function $y(){return xv||(xv=1,(function(o){function e(q,k){var ut=q.length;q.push(k);t:for(;0<ut;){var tt=ut-1>>>1,ft=q[tt];if(0<u(ft,k))q[tt]=k,q[ut]=ft,ut=tt;else break t}}function i(q){return q.length===0?null:q[0]}function s(q){if(q.length===0)return null;var k=q[0],ut=q.pop();if(ut!==k){q[0]=ut;t:for(var tt=0,ft=q.length,xt=ft>>>1;tt<xt;){var Vt=2*(tt+1)-1,te=q[Vt],w=Vt+1,J=q[w];if(0>u(te,ut))w<ft&&0>u(J,te)?(q[tt]=J,q[w]=ut,tt=w):(q[tt]=te,q[Vt]=ut,tt=Vt);else if(w<ft&&0>u(J,ut))q[tt]=J,q[w]=ut,tt=w;else break t}}return k}function u(q,k){var ut=q.sortIndex-k.sortIndex;return ut!==0?ut:q.id-k.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var p=[],m=[],v=1,g=null,S=3,E=!1,T=!1,N=!1,y=!1,M=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function L(q){for(var k=i(m);k!==null;){if(k.callback===null)s(m);else if(k.startTime<=q)s(m),k.sortIndex=k.expirationTime,e(p,k);else break;k=i(m)}}function I(q){if(N=!1,L(q),!T)if(i(p)!==null)T=!0,O||(O=!0,$());else{var k=i(m);k!==null&&it(I,k.startTime-q)}}var O=!1,x=-1,C=5,W=-1;function F(){return y?!0:!(o.unstable_now()-W<C)}function H(){if(y=!1,O){var q=o.unstable_now();W=q;var k=!0;try{t:{T=!1,N&&(N=!1,D(x),x=-1),E=!0;var ut=S;try{e:{for(L(q),g=i(p);g!==null&&!(g.expirationTime>q&&F());){var tt=g.callback;if(typeof tt=="function"){g.callback=null,S=g.priorityLevel;var ft=tt(g.expirationTime<=q);if(q=o.unstable_now(),typeof ft=="function"){g.callback=ft,L(q),k=!0;break e}g===i(p)&&s(p),L(q)}else s(p);g=i(p)}if(g!==null)k=!0;else{var xt=i(m);xt!==null&&it(I,xt.startTime-q),k=!1}}break t}finally{g=null,S=ut,E=!1}k=void 0}}finally{k?$():O=!1}}}var $;if(typeof z=="function")$=function(){z(H)};else if(typeof MessageChannel<"u"){var ct=new MessageChannel,X=ct.port2;ct.port1.onmessage=H,$=function(){X.postMessage(null)}}else $=function(){M(H,0)};function it(q,k){x=M(function(){q(o.unstable_now())},k)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(q){q.callback=null},o.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<q?Math.floor(1e3/q):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(q){switch(S){case 1:case 2:case 3:var k=3;break;default:k=S}var ut=S;S=k;try{return q()}finally{S=ut}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(q,k){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var ut=S;S=q;try{return k()}finally{S=ut}},o.unstable_scheduleCallback=function(q,k,ut){var tt=o.unstable_now();switch(typeof ut=="object"&&ut!==null?(ut=ut.delay,ut=typeof ut=="number"&&0<ut?tt+ut:tt):ut=tt,q){case 1:var ft=-1;break;case 2:ft=250;break;case 5:ft=1073741823;break;case 4:ft=1e4;break;default:ft=5e3}return ft=ut+ft,q={id:v++,callback:k,priorityLevel:q,startTime:ut,expirationTime:ft,sortIndex:-1},ut>tt?(q.sortIndex=ut,e(m,q),i(p)===null&&q===i(m)&&(N?(D(x),x=-1):N=!0,it(I,ut-tt))):(q.sortIndex=ft,e(p,q),T||E||(T=!0,O||(O=!0,$()))),q},o.unstable_shouldYield=F,o.unstable_wrapCallback=function(q){var k=S;return function(){var ut=S;S=k;try{return q.apply(this,arguments)}finally{S=ut}}}})(Eh)),Eh}var Mv;function tE(){return Mv||(Mv=1,yh.exports=$y()),yh.exports}var Th={exports:{}},In={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yv;function eE(){if(yv)return In;yv=1;var o=Xp();function e(v){var g="https://react.dev/errors/"+v;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)g+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+v+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},u=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),d=Symbol.for("react.optimistic_key");function h(v,g,S){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:E==null?null:E===d?d:""+E,children:v,containerInfo:g,implementation:S}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(v,g){if(v==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return In.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,In.browser=function(v){return{$$typeof:f,_reason:v}},In.createPortal=function(v,g){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return h(v,g,null,S)},In.flushSync=function(v){var g=p.T,S=s.p;try{if(p.T=null,s.p=2,v)return v()}finally{p.T=g,s.p=S,s.d.f()}},In.preconnect=function(v,g){typeof v=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(v,g))},In.prefetchDNS=function(v){typeof v=="string"&&s.d.D(v)},In.preinit=function(v,g){if(typeof v=="string"&&g&&typeof g.as=="string"){var S=g.as,E=m(S,g.crossOrigin),T=typeof g.integrity=="string"?g.integrity:void 0,N=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;S==="style"?s.d.S(v,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:E,integrity:T,fetchPriority:N}):S==="script"&&s.d.X(v,{crossOrigin:E,integrity:T,fetchPriority:N,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},In.preinitModule=function(v,g){if(typeof v=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var S=m(g.as,g.crossOrigin);s.d.M(v,{crossOrigin:S,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}}else g==null&&s.d.M(v)},In.preload=function(v,g){if(typeof v=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var S=g.as,E=m(S,g.crossOrigin);s.d.L(v,S,{crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},In.preloadModule=function(v,g){if(typeof v=="string")if(g){var S=m(g.as,g.crossOrigin);s.d.m(v,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:S,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}else s.d.m(v)},In.requestFormReset=function(v){s.d.r(v)},In.unstable_batchedUpdates=function(v,g){return v(g)},In.useFormState=function(v,g,S){return p.H.useFormState(v,g,S)},In.useFormStatus=function(){return p.H.useHostTransitionStatus()},In.version="19.3.1",In}var Ev;function nE(){if(Ev)return Th.exports;Ev=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Th.exports=eE(),Th.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tv;function iE(){if(Tv)return fl;Tv=1;var o=tE(),e=Xp(),i=nE();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){for(var n=t,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(t=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(f(t)!==t)throw Error(s(188))}function m(t){var n=t.alternate;if(!n){if(n=f(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var l=a.return;if(l===null)break;var c=l.alternate;if(c===null){if(r=l.return,r!==null){a=r;continue}break}if(l.child===c.child){for(c=l.child;c;){if(c===a)return p(l),t;if(c===r)return p(l),n;c=c.sibling}throw Error(s(188))}if(a.return!==r.return)a=l,r=c;else{for(var _=!1,A=l.child;A;){if(A===a){_=!0,a=l,r=c;break}if(A===r){_=!0,r=l,a=c;break}A=A.sibling}if(!_){for(A=c.child;A;){if(A===a){_=!0,a=c,r=l;break}if(A===r){_=!0,r=c,a=l;break}A=A.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}function g(t,n,a,r,l,c){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,r,l,c)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&g(t.child,n,a,r,l,c))return!0;t=t.sibling}return!1}function S(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function E(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function T(t){var n=[null,null],a=S(t);return a===null||N(n,t,a.child,{foundSelf:!1}),n}function N(t,n,a,r){for(;a!==null;){if(a===n)r.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(r.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&N(t,n,a.child,r))return!0;a=a.sibling}return!1}function y(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(s(559))}}var M=null,D=null;function z(t,n,a){return t===a?!0:t===n?(M=t,!0):!1}function L(t,n,a){return t===a?(D=t,!1):t===n?(D!==null&&(M=t),!0):!1}function I(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function O(t,n,a){for(var r=0,l=t;l;l=a(l))r++;l=0;for(var c=n;c;c=a(c))l++;for(;0<r-l;)t=a(t),r--;for(;0<l-r;)n=a(n),l--;for(;r--;){if(t===n||n!==null&&t===n.alternate)return t;t=a(t),n=a(n)}return null}var x=Object.assign,C=Symbol.for("react.element"),W=Symbol.for("react.transitional.element"),F=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),$=Symbol.for("react.strict_mode"),ct=Symbol.for("react.profiler"),X=Symbol.for("react.consumer"),it=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),ut=Symbol.for("react.suspense_list"),tt=Symbol.for("react.memo"),ft=Symbol.for("react.lazy"),xt=Symbol.for("react.activity"),Vt=Symbol.for("react.legacy_hidden"),te=Symbol.for("react.memo_cache_sentinel"),w=Symbol.for("react.view_transition"),J=Symbol.for("react.recoverable"),St=Symbol.iterator;function yt(t){return t===null||typeof t!="object"?null:(t=St&&t[St]||t["@@iterator"],typeof t=="function"?t:null)}var Et=Symbol.for("react.client.reference");function Ft(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Et?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case H:return"Fragment";case ct:return"Profiler";case $:return"StrictMode";case k:return"Suspense";case ut:return"SuspenseList";case xt:return"Activity";case w:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case F:return"Portal";case it:return t.displayName||"Context";case X:return(t._context.displayName||"Context")+".Consumer";case q:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case tt:return n=t.displayName||null,n!==null?n:Ft(t.type)||"Memo";case ft:n=t._payload,t=t._init;try{return Ft(t(n))}catch{}}return null}var ee=Array.isArray,Mt=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ht=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,xe={pending:!1,data:null,method:null,action:null},ge=[],Je=-1;function Ie(t){return{current:t}}function Ne(t){0>Je||(t.current=ge[Je],ge[Je]=null,Je--)}function ne(t,n){Je++,ge[Je]=t.current,t.current=n}var cn=Ie(null),je=Ie(null),fn=Ie(null),Cn=Ie(null);function wn(t,n){switch(ne(fn,n),ne(je,t),ne(cn,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?b_(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=b_(n),t=A_(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Ne(cn),ne(cn,t)}function Y(){Ne(cn),Ne(je),Ne(fn)}function Fn(t){var n=t.memoizedState;n!==null&&(Gs._currentValue=n.memoizedState,ne(Cn,t)),n=cn.current;var a=A_(n,t.type);n!==a&&(ne(je,t),ne(cn,a))}function Fe(t){je.current===t&&(Ne(cn),Ne(je)),Cn.current===t&&(Ne(Cn),Gs._currentValue=xe)}var ke,Pt;function We(t){if(ke===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ke=n&&n[1]||"",Pt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ke+t+Pt}var jt=!1;function re(t,n){if(!t||jt)return"";jt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(zt){var Z=zt}Reflect.construct(t,[],_t)}else{try{_t.call()}catch(zt){Z=zt}_t=!1;try{var rt=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),_t=!0,new t}finally{_t&&(rt!==void 0?Object.defineProperty(t.prototype,"props",rt):delete t.prototype.props)}}}else{try{throw Error()}catch(zt){Z=zt}(_t=t())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(zt){if(zt&&Z&&typeof zt.stack=="string")return[zt.stack,Z.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=r.DetermineComponentFrameRoot(),_=c[0],A=c[1];if(_&&A){var P=_.split(`
`),Q=A.split(`
`);for(l=r=0;r<P.length&&!P[r].includes("DetermineComponentFrameRoot");)r++;for(;l<Q.length&&!Q[l].includes("DetermineComponentFrameRoot");)l++;if(r===P.length||l===Q.length)for(r=P.length-1,l=Q.length-1;1<=r&&0<=l&&P[r]!==Q[l];)l--;for(;1<=r&&0<=l;r--,l--)if(P[r]!==Q[l]){if(r!==1||l!==1)do if(r--,l--,0>l||P[r]!==Q[l]){var st=`
`+P[r].replace(" at new "," at ");return t.displayName&&st.includes("<anonymous>")&&(st=st.replace("<anonymous>",t.displayName)),st}while(1<=r&&0<=l);break}}}finally{jt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?We(a):""}function U(t,n){switch(t.tag){case 26:case 27:case 5:return We(t.type);case 16:return We("Lazy");case 13:return t.child!==n&&n!==null?We("Suspense Fallback"):We("Suspense");case 19:return We("SuspenseList");case 0:case 15:return re(t.type,!1);case 11:return re(t.type.render,!1);case 1:return re(t.type,!0);case 31:return We("Activity");case 30:return We("ViewTransition");default:return""}}function b(t){try{var n="",a=null;do n+=U(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var et=Object.prototype.hasOwnProperty,bt=o.unstable_scheduleCallback,vt=o.unstable_cancelCallback,wt=o.unstable_shouldYield,Lt=o.unstable_requestPaint,dt=o.unstable_now,mt=o.unstable_getCurrentPriorityLevel,Dt=o.unstable_ImmediatePriority,B=o.unstable_UserBlockingPriority,pt=o.unstable_NormalPriority,ht=o.unstable_LowPriority,Nt=o.unstable_IdlePriority,At=o.log,Ut=o.unstable_setDisableYieldValue,Kt=null,$t=null;function Tt(t){if(typeof At=="function"&&Ut(t),$t&&typeof $t.setStrictMode=="function")try{$t.setStrictMode(Kt,t)}catch{}}var kt=Math.clz32?Math.clz32:Ue,fe=Math.log,Bt=Math.LN2;function Ue(t){return t>>>=0,t===0?32:31-(fe(t)/Bt|0)|0}var tn=256,oi=262144,Mr=4194304;function Ui(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ts(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var l=0,c=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var A=r&134217727;return A!==0?(r=A&~c,r!==0?l=Ui(r):(_&=A,_!==0?l=Ui(_):a||(a=A&~t,a!==0&&(l=Ui(a))))):(A=r&~c,A!==0?l=Ui(A):_!==0?l=Ui(_):a||(a=r&~t,a!==0&&(l=Ui(a)))),l===0?0:n!==0&&n!==l&&(n&c)===0&&(c=l&-l,a=n&-n,c>=a||c===32&&(a&4194048)!==0)?n:l}function za(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function _o(t,n){(n&8)!==0&&(n|=n&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=n;0<a;){var r=31-kt(a),l=1<<r;n|=t[r],a&=~l}return n}function ha(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function es(){var t=Mr;return Mr<<=1,(Mr&62914560)===0&&(Mr=4194304),t}function ns(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Ba(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function is(t,n,a,r,l,c){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var A=t.entanglements,P=t.expirationTimes,Q=t.hiddenUpdates;for(a=_&~a;0<a;){var st=31-kt(a),_t=1<<st;A[st]=0,P[st]=-1;var Z=Q[st];if(Z!==null)for(Q[st]=null,st=0;st<Z.length;st++){var rt=Z[st];rt!==null&&(rt.lane&=-536870913)}a&=~_t}r!==0&&vo(t,r,0),c!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=c&~(_&~n))}function vo(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-kt(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function So(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-kt(a),l=1<<r;l&n|t[r]&n&&(t[r]|=n),a&=~l}}function Fa(t,n){var a=n&-n;return a=(a&42)!==0?1:xo(a),(a&(t.suspendedLanes|n))!==0?0:a}function xo(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function as(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Mo(){var t=Ht.p;return t!==0?t:(t=window.event,t===void 0?32:uv(t.type))}function Ll(t,n){var a=Ht.p;try{return Ht.p=t,n()}finally{Ht.p=a}}var Li=Math.random().toString(36).slice(2),vn="__reactFiber$"+Li,Dn="__reactProps$"+Li,R="__reactContainer$"+Li,G="__reactEvents$"+Li,lt="__reactListeners$"+Li,nt="__reactHandles$"+Li,at="__reactResources$"+Li,Rt="__reactMarker$"+Li,Xt="__reactLoad$"+Li;function Ct(t){delete t[vn],delete t[Dn],delete t[lt],delete t[nt]}function It(t){var n;if(n=t[vn])return n;for(var a=t.parentNode;a;){if(n=a[R]||a[vn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=X_(t);t!==null;){if(a=t[vn])return a;t=X_(t)}return n}t=a,a=t.parentNode}return null}function qt(t){if(t=t[vn]||t[R]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function ie(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function de(t){var n=t[at];return n||(n=t[at]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Ot(t){t[Rt]=!0}function ve(t){t[Xt]=void 0}var en=new Set,He={};function Re(t,n){nn(t,n),nn(t+"Capture",n)}function nn(t,n){for(He[t]=n,t=0;t<n.length;t++)en.add(n[t])}var Yt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),yn={},we={};function pa(t){return et.call(we,t)?!0:et.call(yn,t)?!1:Yt.test(t)?we[t]=!0:(yn[t]=!0,!1)}var se=!1;function yr(){var t=se;return se=!1,t}function li(t,n,a){if(pa(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,a)}}function Si(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,a)}}function he(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,r)}}function Le(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Jn(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Qe(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,c=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return l.call(this)},set:function(_){a=""+_,c.call(this,_)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function rn(t){if(!t._valueTracker){var n=Jn(t)?"checked":"value";t._valueTracker=Qe(t,n,""+t[n])}}function xi(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=Jn(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}var Ol=/[\n"\\]/g;function Mi(t){return t.replace(Ol,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Kc(t,n,a,r,l,c,_,A){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Le(n)):t.value!==""+Le(n)&&(t.value=""+Le(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?_==="number"&&t.value==n?Qc(t,Le(t.value)):Qc(t,Le(n)):a!=null?Qc(t,Le(a)):r!=null&&t.removeAttribute("value"),l==null&&c!=null&&(t.defaultChecked=!!c),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+Le(A):t.removeAttribute("name")}function pm(t,n,a,r,l,c,_,A){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.type=c),n!=null||a!=null){if(!(c!=="submit"&&c!=="reset"||n!=null)){rn(t);return}a=a!=null?""+Le(a):"",n=n!=null?""+Le(n):a,A||n===t.value||(t.value=n),t.defaultValue=n}r=r??l,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=A?t.checked:!!r,t.defaultChecked=!!r,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),rn(t)}function Qc(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function rs(t,n,a,r){if(t=t.options,n){n={};for(var l=0;l<a.length;l++)n["$"+a[l]]=!0;for(a=0;a<t.length;a++)l=n.hasOwnProperty("$"+t[a].value),t[a].selected!==l&&(t[a].selected=l),l&&r&&(t[a].defaultSelected=!0)}else{for(a=""+Le(a),n=null,l=0;l<t.length;l++){if(t[l].value===a){t[l].selected=!0,r&&(t[l].defaultSelected=!0);return}n!==null||t[l].disabled||(n=t[l])}n!==null&&(n.selected=!0)}}function mm(t,n,a){if(n!=null&&(n=""+Le(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Le(a):""}function gm(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(ee(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=Le(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),rn(t)}function ss(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var vx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function _m(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||vx.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function vm(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="",se=!0);for(var l in n)r=n[l],n.hasOwnProperty(l)&&a[l]!==r&&(_m(t,l,r),se=!0)}else for(var c in n)n.hasOwnProperty(c)&&_m(t,c,n[c])}function Jc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),xx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Pl(t){return xx.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ki(){}var jc=null;function $c(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var os=null,ls=null;function Sm(t){var n=qt(t);if(n&&(t=n.stateNode)){var a=t[Dn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Kc(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Mi(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var l=r[Dn]||null;if(!l)throw Error(s(90));Kc(r,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&xi(r)}break t;case"textarea":mm(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&rs(t,!!a.multiple,n,!1)}}}var tf=!1;function xm(t,n,a){if(tf)return t(n,a);tf=!0;try{var r=t(n);return r}finally{if(tf=!1,(os!==null||ls!==null)&&(Pu(),os&&(n=os,t=ls,ls=os=null,Sm(n),t)))for(n=0;n<t.length;n++)Sm(t[n])}}function yo(t,n){var a=t.stateNode;if(a===null)return null;var r=a[Dn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ma=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ef=!1;if(ma)try{var Eo={};Object.defineProperty(Eo,"passive",{get:function(){ef=!0}}),window.addEventListener("test",Eo,Eo),window.removeEventListener("test",Eo,Eo)}catch{ef=!1}var Ha=null,nf=null,Il=null;function Mm(){if(Il)return Il;var t,n=nf,a=n.length,r,l="value"in Ha?Ha.value:Ha.textContent,c=l.length;for(t=0;t<a&&n[t]===l[t];t++);var _=a-t;for(r=1;r<=_&&n[a-r]===l[c-r];r++);return Il=l.slice(t,1<r?1-r:void 0)}function zl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Bl(){return!0}function ym(){return!1}function kn(t){function n(a,r,l,c,_){this._reactName=a,this._targetInst=l,this.type=r,this.nativeEvent=c,this.target=_,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(a=t[A],this[A]=a?a(c):c[A]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Bl:ym,this.isPropagationStopped=ym,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Bl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Bl)},persist:function(){},isPersistent:Bl}),n}var Ga={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fl=kn(Ga),To=x({},Ga,{view:0,detail:0}),Mx=kn(To),af,rf,bo,Hl=x({},To,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:of,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==bo&&(bo&&t.type==="mousemove"?(af=t.screenX-bo.screenX,rf=t.screenY-bo.screenY):rf=af=0,bo=t),af)},movementY:function(t){return"movementY"in t?t.movementY:rf}}),Em=kn(Hl),yx=x({},Hl,{dataTransfer:0}),Ex=kn(yx),Tx=x({},To,{relatedTarget:0}),sf=kn(Tx),bx=x({},Ga,{animationName:0,elapsedTime:0,pseudoElement:0}),Ax=kn(bx),Rx=x({},Ga,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Cx=kn(Rx),wx=x({},Ga,{data:0}),Tm=kn(wx),Dx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ux={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lx(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Ux[t])?!!n[t]:!1}function of(){return Lx}var Ox=x({},To,{key:function(t){if(t.key){var n=Dx[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=zl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Nx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:of,charCode:function(t){return t.type==="keypress"?zl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?zl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Px=kn(Ox),Ix=x({},Hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bm=kn(Ix),zx=x({},Ga,{submitter:0}),Bx=kn(zx),Fx=x({},To,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:of}),Hx=kn(Fx),Gx=x({},Ga,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vx=kn(Gx),Xx=x({},Hl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),kx=kn(Xx),Wx=x({},Ga,{newState:0,oldState:0,source:0}),qx=kn(Wx),Yx=[9,13,27,32],lf=ma&&"CompositionEvent"in window,Ao=null;ma&&"documentMode"in document&&(Ao=document.documentMode);var Zx=ma&&"TextEvent"in window&&!Ao,Am=ma&&(!lf||Ao&&8<Ao&&11>=Ao),Rm=" ",Cm=!1;function wm(t,n){switch(t){case"keyup":return Yx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var us=!1;function Kx(t,n){switch(t){case"compositionend":return Dm(n);case"keypress":return n.which!==32?null:(Cm=!0,Rm);case"textInput":return t=n.data,t===Rm&&Cm?null:t;default:return null}}function Qx(t,n){if(us)return t==="compositionend"||!lf&&wm(t,n)?(t=Mm(),Il=nf=Ha=null,us=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Am&&n.locale!=="ko"?null:n.data;default:return null}}var Jx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nm(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Jx[t.type]:n==="textarea"}function Um(t,n,a,r){os?ls?ls.push(r):ls=[r]:os=r,n=Gu(n,"onChange"),0<n.length&&(a=new Fl("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var Ro=null,Co=null;function jx(t){S_(t,0)}function Gl(t){var n=ie(t);if(xi(n))return t}function Lm(t,n){if(t==="change")return n}var Om=!1;if(ma){var uf;if(ma){var cf="oninput"in document;if(!cf){var Pm=document.createElement("div");Pm.setAttribute("oninput","return;"),cf=typeof Pm.oninput=="function"}uf=cf}else uf=!1;Om=uf&&(!document.documentMode||9<document.documentMode)}function Im(){Ro&&(Ro.detachEvent("onpropertychange",zm),Co=Ro=null)}function zm(t){if(t.propertyName==="value"&&Gl(Co)){var n=[];Um(n,Co,t,$c(t)),xm(jx,n)}}function $x(t,n,a){t==="focusin"?(Im(),Ro=n,Co=a,Ro.attachEvent("onpropertychange",zm)):t==="focusout"&&Im()}function tM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Gl(Co)}function eM(t,n){if(t==="click")return Gl(n)}function nM(t,n){if(t==="input"||t==="change")return Gl(n)}function iM(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ui=typeof Object.is=="function"?Object.is:iM;function wo(t,n){if(ui(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var l=a[r];if(!et.call(n,l)||!ui(t[l],n[l]))return!1}return!0}function ff(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Bm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Fm(t,n){var a=Bm(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Bm(a)}}function Hm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Hm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Gm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=ff(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=ff(t.document)}return n}function df(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var aM=ma&&"documentMode"in document&&11>=document.documentMode,cs=null,hf=null,Do=null,pf=!1;function Vm(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;pf||cs==null||cs!==ff(r)||(r=cs,"selectionStart"in r&&df(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Do&&wo(Do,r)||(Do=r,r=Gu(hf,"onSelect"),0<r.length&&(n=new Fl("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=cs)))}function Er(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var fs={animationend:Er("Animation","AnimationEnd"),animationiteration:Er("Animation","AnimationIteration"),animationstart:Er("Animation","AnimationStart"),transitionrun:Er("Transition","TransitionRun"),transitionstart:Er("Transition","TransitionStart"),transitioncancel:Er("Transition","TransitionCancel"),transitionend:Er("Transition","TransitionEnd")},mf={},Xm={};ma&&(Xm=document.createElement("div").style,"AnimationEvent"in window||(delete fs.animationend.animation,delete fs.animationiteration.animation,delete fs.animationstart.animation),"TransitionEvent"in window||delete fs.transitionend.transition);function Tr(t){if(mf[t])return mf[t];if(!fs[t])return t;var n=fs[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Xm)return mf[t]=n[a];return t}var km=Tr("animationend"),Wm=Tr("animationiteration"),qm=Tr("animationstart"),rM=Tr("transitionrun"),sM=Tr("transitionstart"),oM=Tr("transitioncancel"),Ym=Tr("transitionend"),Zm=new Map,gf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");gf.push("scrollEnd");function Oi(t,n){Zm.set(t,n),Re(n,[t])}var lM=0;function ga(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=Bi.identifierPrefix;var a=lM++;return t="_"+t+"t_"+a.toString(32)+"_",n.autoName=t}function Km(t){if(t==null||typeof t=="string")return t;var n=null,a=Ns;if(a!==null)for(var r=0;r<a.length;r++){var l=t[a[r]];if(l!=null){if(l==="none")return"none";n=n==null?l:n+(" "+l)}}return n??t.default}function _a(t,n){return t=Km(t),n=Km(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var Vl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},yi=[],ds=0,_f=0;function Xl(){for(var t=ds,n=_f=ds=0;n<t;){var a=yi[n];yi[n++]=null;var r=yi[n];yi[n++]=null;var l=yi[n];yi[n++]=null;var c=yi[n];if(yi[n++]=null,r!==null&&l!==null){var _=r.pending;_===null?l.next=l:(l.next=_.next,_.next=l),r.pending=l}c!==0&&Qm(a,l,c)}}function kl(t,n,a,r){yi[ds++]=t,yi[ds++]=n,yi[ds++]=a,yi[ds++]=r,_f|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function vf(t,n,a,r){return kl(t,n,a,r),Wl(t)}function br(t,n){return kl(t,null,null,n),Wl(t)}function Qm(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var l=!1,c=t.return;c!==null;)c.childLanes|=a,r=c.alternate,r!==null&&(r.childLanes|=a),c.tag===22&&(t=c.stateNode,t===null||t._visibility&1||(l=!0)),t=c,c=c.return;return t.tag===3?(c=t.stateNode,l&&n!==null&&(l=31-kt(a),t=c.hiddenUpdates,r=t[l],r===null?t[l]=[n]:r.push(n),n.lane=a|536870912),c):null}function Wl(t){if(50<jo)throw jo=0,Ou=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var hs={};function uM(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(t,n,a,r){return new uM(t,n,a,r)}function Sf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function va(t,n){var a=t.alternate;return a===null?(a=jn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Jm(t,n){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function ql(t,n,a,r,l,c){var _=0;if(r=t,typeof r=="function")Sf(r)&&(_=1);else if(typeof r=="string")_=zy(t,a,cn.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(r){case xt:return t=jn(31,a,n,l),t.elementType=xt,t.lanes=c,t;case H:return Ar(a.children,l,c,n);case $:_=8,l|=24;break;case ct:return t=jn(12,a,n,l|2),t.elementType=ct,t.lanes=c,t;case k:return t=jn(13,a,n,l),t.elementType=k,t.lanes=c,t;case ut:return t=jn(19,a,n,l),t.elementType=ut,t.lanes=c,t;case Vt:case w:return t=l|32,t=jn(30,a,n,t),t.elementType=w,t.lanes=c,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case it:_=10;break t;case X:_=9;break t;case q:_=11;break t;case tt:_=14;break t;case ft:_=16,r=null;break t}_=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=jn(_,a,n,l),n.elementType=t,n.type=r,n.lanes=c,n}function Ar(t,n,a,r){return t=jn(7,t,r,n),t.lanes=a,t}function xf(t,n,a){return t=jn(6,t,null,n),t.lanes=a,t}function jm(t){var n=jn(18,null,null,0);return n.stateNode=t,n}function Mf(t,n,a){return n=jn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var $m=new WeakMap;function Ei(t,n){if(typeof t=="object"&&t!==null){var a=$m.get(t);return a!==void 0?a:(n={value:t,source:n,stack:b(n)},$m.set(t,n),n)}return{value:t,source:n,stack:b(n)}}var ps=[],ms=0,Yl=null,No=0,Ti=[],bi=0,Va=null,Qi=1,Ji="";function Sa(t,n){ps[ms++]=No,ps[ms++]=Yl,Yl=t,No=n}function tg(t,n,a){Ti[bi++]=Qi,Ti[bi++]=Ji,Ti[bi++]=Va,Va=t;var r=Qi;t=Ji;var l=32-kt(r)-1;r&=~(1<<l),a+=1;var c=32-kt(n)+l;if(30<c){var _=l-l%5;c=(r&(1<<_)-1).toString(32),r>>=_,l-=_,Qi=1<<32-kt(n)+l|a<<l|r,Ji=c+t}else Qi=1<<c|a<<l|r,Ji=t}function Zl(t){t.return!==null&&(Sa(t,1),tg(t,1,0))}function yf(t){for(;t===Yl;)Yl=ps[--ms],ps[ms]=null,No=ps[--ms],ps[ms]=null;for(;t===Va;)Va=Ti[--bi],Ti[bi]=null,Ji=Ti[--bi],Ti[bi]=null,Qi=Ti[--bi],Ti[bi]=null}function eg(t,n){Ti[bi++]=Qi,Ti[bi++]=Ji,Ti[bi++]=Va,Qi=n.id,Ji=n.overflow,Va=t}var En=null,Ze=null,Se=!1,Xa=null,Ai=!1,Ef=Error(s(519));function ka(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Uo(Ei(n,t)),Ef}function ng(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[vn]=t,n[Dn]=r,a){case"dialog":ye("cancel",n),ye("close",n);break;case"iframe":case"object":case"embed":ye("load",n);break;case"video":case"audio":for(a=0;a<tl.length;a++)ye(tl[a],n);break;case"source":ye("error",n);break;case"img":case"image":case"link":ye("error",n),ye("load",n);break;case"details":ye("toggle",n);break;case"input":ye("invalid",n),pm(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":ye("invalid",n);break;case"textarea":ye("invalid",n),gm(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||E_(n.textContent,a)?(r.popover!=null&&(ye("beforetoggle",n),ye("toggle",n)),r.onScroll!=null&&ye("scroll",n),r.onScrollEnd!=null&&ye("scrollend",n),r.onClick!=null&&(n.onclick=Ki),n=!0):n=!1,n||ka(t,!0)}function Kl(t){for(En=t.return;En;)switch(En.tag){case 5:case 31:case 13:Ai=!1;return;case 27:case 3:Ai=!0;return;default:En=En.return}}function gs(t){if(t!==En)return!1;if(!Se)return Kl(t),Se=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||$d(t.type,t.memoizedProps)),a=!a),a&&Ze&&ka(t),Kl(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Ze=V_(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Ze=V_(t)}else n===27?(n=Ze,sr(t.type)?(t=lh,lh=null,Ze=t):Ze=n):Ze=En?Ci(t.stateNode.nextSibling):null;return!0}function Rr(){Ze=En=null,Se=!1}function Tf(){var t=Xa;return t!==null&&(ei===null?ei=t:ei.push.apply(ei,t),Xa=null),t}function Uo(t){Xa===null?Xa=[t]:Xa.push(t)}var bf=Ie(null),Cr=null,xa=null;function Wa(t,n,a){ne(bf,n._currentValue),n._currentValue=a}function Ma(t){t._currentValue=bf.current,Ne(bf)}function Ql(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function Af(t,n,a,r){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var c=l.dependencies;if(c!==null){var _=l.child;c=c.firstContext;t:for(;c!==null;){var A=c;c=l;for(var P=0;P<n.length;P++)if(A.context===n[P]){c.lanes|=a,A=c.alternate,A!==null&&(A.lanes|=a),Ql(c.return,a,t),r||(_=null);break t}c=A.next}}else if(l.tag===18){if(_=l.return,_===null)throw Error(s(341));_.lanes|=a,c=_.alternate,c!==null&&(c.lanes|=a),Ql(_,a,t),_=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=a,_=l.alternate,_!==null&&(_.lanes|=a),Ql(l.return,a,t),_=l.child,_=_!==null?_.sibling:null):_=l.child;if(_!==null)_.return=l;else for(_=l;_!==null;){if(_===t){_=null;break}if(l=_.sibling,l!==null){l.return=_.return,_=l;break}_=_.return}l=_}}function wr(t,n,a,r){t=null;for(var l=n,c=!1;l!==null;){if(!c){if((l.flags&524288)!==0)c=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var _=l.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var A=l.type;ui(l.pendingProps.value,_.value)||(t!==null?t.push(A):t=[A])}}else if(l===Cn.current){if(_=l.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(Gs):t=[Gs])}l=l.return}return t!==null&&Af(n,t,a,r),n.flags|=262144,t!==null}function Jl(t){for(t=t.firstContext;t!==null;){if(!ui(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Dr(t){Cr=t,xa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Nn(t){return ig(Cr,t)}function jl(t,n){return Cr===null&&Dr(t),ig(t,n)}function ig(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},xa===null){if(t===null)throw Error(s(308));xa=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else xa=xa.next=n;return a}var cM=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},fM=o.unstable_scheduleCallback,dM=o.unstable_NormalPriority,hn={$$typeof:it,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Rf(){return{controller:new cM,data:new Map,refCount:0}}function Lo(t){t.refCount--,t.refCount===0&&fM(dM,function(){t.controller.abort()})}function ag(t,n){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<n.length;t++){var r=n[t];a.indexOf(r)===-1&&a.push(r)}}}var Oo=null;function hM(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var Po=null,Cf=0,Nr=0,_s=null;function pM(t,n){if(Po===null){var a=Po=[];Cf=0,Nr=kd(),_s={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Cf++,n.then(rg,rg),n}function rg(){if(--Cf===0&&(Oo=null,Po!==null)){_s!==null&&(_s.status="fulfilled");var t=Po;Po=null,Nr=0,_s=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function mM(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var l=0;l<a.length;l++)(0,a[l])(n)},function(l){for(r.status="rejected",r.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),r}var sg=Mt.S;Mt.S=function(t,n){if(j0=dt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&pM(t,n),Oo!==null)for(var a=Ps;a!==null;)ag(a,Oo),a=a.next;if(a=t.types,a!==null){for(var r=Ps;r!==null;)ag(r,a),r=r.next;if(Nr!==0){r=Oo,r===null&&(r=Oo=[]);for(var l=0;l<a.length;l++){var c=a[l];r.indexOf(c)===-1&&r.push(c)}}}sg!==null&&sg(t,n)};var Ur=Ie(null);function wf(){var t=Ur.current;return t!==null?t:Ye.pooledCache}function $l(t,n){n===null?ne(Ur,Ur.current):ne(Ur,n.pool)}function og(){var t=wf();return t===null?null:{parent:hn._currentValue,pool:t}}var vs=Error(s(460)),Df=Error(s(474)),tu=Error(s(542)),eu={then:function(){}};function lg(t){return t=t.status,t==="fulfilled"||t==="rejected"}function ug(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Ki,Ki),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,fg(t),t===void 0&&!("reason"in n)?Error(s(600)):t;default:if(typeof n.status=="string")n.then(Ki,Ki);else{if(t=Ye,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var l=n;l.status="fulfilled",l.value=r}},function(r){if(n.status==="pending"){var l=n;l.status="rejected",l.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,fg(t),t}throw Or=n,vs}}function Lr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Or=a,vs):a}}var Or=null;function cg(){if(Or===null)throw Error(s(459));var t=Or;return Or=null,t}function fg(t){if(t===vs||t===tu)throw Error(s(483))}var Ss=null,Io=0;function nu(t){var n=Io;return Io+=1,Ss===null&&(Ss=[]),ug(Ss,t,n)}function qa(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function iu(t,n){throw n.$$typeof===C?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function dg(t){function n(K,V){if(t){var j=K.deletions;j===null?(K.deletions=[V],K.flags|=16):j.push(V)}}function a(K,V){if(!t)return null;for(;V!==null;)n(K,V),V=V.sibling;return null}function r(K){for(var V=new Map;K!==null;)K.key===null?V.set(K.index,K):V.set(K.key,K),K=K.sibling;return V}function l(K,V){return K=va(K,V),K.index=0,K.sibling=null,K}function c(K,V,j){return K.index=j,t?(j=K.alternate,j!==null?(j=j.index,j<V?(K.flags|=2,V):j):(K.flags|=134217730,V)):(K.flags|=1048576,V)}function _(K){return t&&K.alternate===null&&(K.flags|=134217730),K}function A(K,V,j,gt){return V===null||V.tag!==6?(V=xf(j,K.mode,gt),V.return=K,V):(V=l(V,j),V.return=K,V)}function P(K,V,j,gt){var Wt=j.type;return Wt===H?(K=st(K,V,j.props.children,gt,j.key),qa(K,j),K):V!==null&&(V.elementType===Wt||typeof Wt=="object"&&Wt!==null&&Wt.$$typeof===ft&&Lr(Wt)===V.type)?(V=l(V,j.props),qa(V,j),V.return=K,V):(V=ql(j.type,j.key,j.props,null,K.mode,gt),qa(V,j),V.return=K,V)}function Q(K,V,j,gt){return V===null||V.tag!==4||V.stateNode.containerInfo!==j.containerInfo||V.stateNode.implementation!==j.implementation?(V=Mf(j,K.mode,gt),V.return=K,V):(V=l(V,j.children||[]),V.return=K,V)}function st(K,V,j,gt,Wt){return V===null||V.tag!==7?(V=Ar(j,K.mode,gt,Wt),V.return=K,V):(V=l(V,j),V.return=K,V)}function _t(K,V,j){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=xf(""+V,K.mode,j),V.return=K,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case W:return j=ql(V.type,V.key,V.props,null,K.mode,j),qa(j,V),j.return=K,j;case F:return V=Mf(V,K.mode,j),V.return=K,V;case ft:return V=Lr(V),_t(K,V,j)}if(ee(V)||yt(V))return V=Ar(V,K.mode,j,null),V.return=K,V;if(typeof V.then=="function")return _t(K,nu(V),j);if(V.$$typeof===it)return _t(K,jl(K,V),j);iu(K,V)}return null}function Z(K,V,j,gt){var Wt=V!==null?V.key:null;if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return Wt!==null?null:A(K,V,""+j,gt);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case W:return j.key===Wt?P(K,V,j,gt):null;case F:return j.key===Wt?Q(K,V,j,gt):null;case ft:return j=Lr(j),Z(K,V,j,gt)}if(ee(j)||yt(j))return Wt!==null?null:st(K,V,j,gt,null);if(typeof j.then=="function")return Z(K,V,nu(j),gt);if(j.$$typeof===it)return Z(K,V,jl(K,j),gt);iu(K,j)}return null}function rt(K,V,j,gt,Wt){if(typeof gt=="string"&&gt!==""||typeof gt=="number"||typeof gt=="bigint")return K=K.get(j)||null,A(V,K,""+gt,Wt);if(typeof gt=="object"&&gt!==null){switch(gt.$$typeof){case W:return K=K.get(gt.key===null?j:gt.key)||null,P(V,K,gt,Wt);case F:return K=K.get(gt.key===null?j:gt.key)||null,Q(V,K,gt,Wt);case ft:return gt=Lr(gt),rt(K,V,j,gt,Wt)}if(ee(gt)||yt(gt))return K=K.get(j)||null,st(V,K,gt,Wt,null);if(typeof gt.then=="function")return rt(K,V,j,nu(gt),Wt);if(gt.$$typeof===it)return rt(K,V,j,jl(V,gt),Wt);iu(V,gt)}return null}function zt(K,V,j,gt){for(var Wt=null,Te=null,Jt=V,ae=V=0,gn=null;Jt!==null&&ae<j.length;ae++){Jt.index>ae?(gn=Jt,Jt=null):gn=Jt.sibling;var De=Z(K,Jt,j[ae],gt);if(De===null){Jt===null&&(Jt=gn);break}t&&Jt&&De.alternate===null&&n(K,Jt),V=c(De,V,ae),Te===null?Wt=De:Te.sibling=De,Te=De,Jt=gn}if(ae===j.length)return a(K,Jt),Se&&Sa(K,ae),Wt;if(Jt===null){for(;ae<j.length;ae++)Jt=_t(K,j[ae],gt),Jt!==null&&(V=c(Jt,V,ae),Te===null?Wt=Jt:Te.sibling=Jt,Te=Jt);return Se&&Sa(K,ae),Wt}for(Jt=r(Jt);ae<j.length;ae++)gn=rt(Jt,K,ae,j[ae],gt),gn!==null&&(t&&(De=gn.alternate,De!==null&&Jt.delete(De.key===null?ae:De.key)),V=c(gn,V,ae),Te===null?Wt=gn:Te.sibling=gn,Te=gn);return t&&Jt.forEach(function(fr){return n(K,fr)}),Se&&Sa(K,ae),Wt}function Zt(K,V,j,gt){if(j==null)throw Error(s(151));for(var Wt=null,Te=null,Jt=V,ae=V=0,gn=null,De=j.next();Jt!==null&&!De.done;ae++,De=j.next()){Jt.index>ae?(gn=Jt,Jt=null):gn=Jt.sibling;var fr=Z(K,Jt,De.value,gt);if(fr===null){Jt===null&&(Jt=gn);break}t&&Jt&&fr.alternate===null&&n(K,Jt),V=c(fr,V,ae),Te===null?Wt=fr:Te.sibling=fr,Te=fr,Jt=gn}if(De.done)return a(K,Jt),Se&&Sa(K,ae),Wt;if(Jt===null){for(;!De.done;ae++,De=j.next())De=_t(K,De.value,gt),De!==null&&(V=c(De,V,ae),Te===null?Wt=De:Te.sibling=De,Te=De);return Se&&Sa(K,ae),Wt}for(Jt=r(Jt);!De.done;ae++,De=j.next())De=rt(Jt,K,ae,De.value,gt),De!==null&&(t&&(gn=De.alternate,gn!==null&&Jt.delete(gn.key===null?ae:gn.key)),V=c(De,V,ae),Te===null?Wt=De:Te.sibling=De,Te=De);return t&&Jt.forEach(function(Ky){return n(K,Ky)}),Se&&Sa(K,ae),Wt}function me(K,V,j,gt){if(typeof j=="object"&&j!==null&&j.type===H&&j.key===null&&j.props.ref===void 0&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case W:t:{for(var Wt=j.key;V!==null;){if(V.key===Wt){if(Wt=j.type,Wt===H){if(V.tag===7){a(K,V.sibling),gt=l(V,j.props.children),qa(gt,j),gt.return=K,K=gt;break t}}else if(V.elementType===Wt||typeof Wt=="object"&&Wt!==null&&Wt.$$typeof===ft&&Lr(Wt)===V.type){a(K,V.sibling),gt=l(V,j.props),qa(gt,j),gt.return=K,K=gt;break t}a(K,V);break}else n(K,V);V=V.sibling}j.type===H?(gt=Ar(j.props.children,K.mode,gt,j.key),qa(gt,j),gt.return=K,K=gt):(gt=ql(j.type,j.key,j.props,null,K.mode,gt),qa(gt,j),gt.return=K,K=gt)}return _(K);case F:t:{for(Wt=j.key;V!==null;){if(V.key===Wt)if(V.tag===4&&V.stateNode.containerInfo===j.containerInfo&&V.stateNode.implementation===j.implementation){a(K,V.sibling),gt=l(V,j.children||[]),gt.return=K,K=gt;break t}else{a(K,V);break}else n(K,V);V=V.sibling}gt=Mf(j,K.mode,gt),gt.return=K,K=gt}return _(K);case ft:return j=Lr(j),me(K,V,j,gt)}if(ee(j))return zt(K,V,j,gt);if(yt(j)){if(Wt=yt(j),typeof Wt!="function")throw Error(s(150));return j=Wt.call(j),Zt(K,V,j,gt)}if(typeof j.then=="function")return me(K,V,nu(j),gt);if(j.$$typeof===it)return me(K,V,jl(K,j),gt);iu(K,j)}return typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint"?(j=""+j,V!==null&&V.tag===6?(a(K,V.sibling),gt=l(V,j),gt.return=K,K=gt):(a(K,V),gt=xf(j,K.mode,gt),gt.return=K,K=gt),_(K)):a(K,V)}return function(K,V,j,gt){try{Io=0;var Wt=me(K,V,j,gt);return Ss=null,Wt}catch(Jt){if(Jt===vs||Jt===tu)throw Jt;var Te=jn(29,Jt,null,K.mode);return Te.lanes=gt,Te.return=K,Te}finally{}}}var Pr=dg(!0),hg=dg(!1),Ya=!1;function Nf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Uf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Za(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ka(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Oe&2)!==0){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,n=Wl(t),Qm(t,null,a),n}return kl(t,r,n,a),Wl(t)}function zo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,So(t,a)}}function Lf(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var l=null,c=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};c===null?l=c=_:c=c.next=_,a=a.next}while(a!==null);c===null?l=c=n:c=c.next=n}else l=c=n;a={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:c,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Of=!1;function Bo(){if(Of){var t=_s;if(t!==null)throw t}}function Fo(t,n,a,r){Of=!1;var l=t.updateQueue;Ya=!1;var c=l.firstBaseUpdate,_=l.lastBaseUpdate,A=l.shared.pending;if(A!==null){l.shared.pending=null;var P=A,Q=P.next;P.next=null,_===null?c=Q:_.next=Q,_=P;var st=t.alternate;st!==null&&(st=st.updateQueue,A=st.lastBaseUpdate,A!==_&&(A===null?st.firstBaseUpdate=Q:A.next=Q,st.lastBaseUpdate=P))}if(c!==null){var _t=l.baseState;_=0,st=Q=P=null,A=c;do{var Z=A.lane&-536870913,rt=Z!==A.lane;if(rt?(Ee&Z)===Z:(r&Z)===Z){Z!==0&&Z===Nr&&(Of=!0),st!==null&&(st=st.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var zt=t,Zt=A;Z=n;var me=a;switch(Zt.tag){case 1:if(zt=Zt.payload,typeof zt=="function"){_t=zt.call(me,_t,Z);break t}_t=zt;break t;case 3:zt.flags=zt.flags&-65537|128;case 0:if(zt=Zt.payload,Z=typeof zt=="function"?zt.call(me,_t,Z):zt,Z==null)break t;_t=x({},_t,Z);break t;case 2:Ya=!0}}Z=A.callback,Z!==null&&(t.flags|=64,rt&&(t.flags|=8192),rt=l.callbacks,rt===null?l.callbacks=[Z]:rt.push(Z))}else rt={lane:Z,tag:A.tag,payload:A.payload,callback:A.callback,next:null},st===null?(Q=st=rt,P=_t):st=st.next=rt,_|=Z;if(A=A.next,A===null){if(A=l.shared.pending,A===null)break;rt=A,A=rt.next,rt.next=null,l.lastBaseUpdate=rt,l.shared.pending=null}}while(!0);st===null&&(P=_t),l.baseState=P,l.firstBaseUpdate=Q,l.lastBaseUpdate=st,c===null&&(l.shared.lanes=0),nr|=_,t.lanes=_,t.memoizedState=_t}}function pg(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function mg(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)pg(a[t],n)}var Qa=Ie(null),au=Ie(0);function gg(t,n){t=Aa,ne(au,t),ne(Qa,n),Aa=t|n.baseLanes}function Pf(){ne(au,Aa),ne(Qa,Qa.current)}function If(){Aa=au.current,Ne(Qa),Ne(au)}var Un=Ie(null),Hn=null;function Ja(t){var n=t.alternate;ne(Ln,Ln.current&1),ne(Un,t),Hn===null&&(n===null||Qa.current!==null||n.memoizedState!==null)&&(Hn=t)}function zf(t){ne(Ln,Ln.current),ne(Un,t),Hn===null&&(Hn=t)}function _g(t){t.tag===22?(ne(Ln,Ln.current),ne(Un,t),Hn===null&&(Hn=t)):ja()}function ja(){ne(Ln,Ln.current),ne(Un,Un.current)}function ci(t){Ne(Un),Hn===t&&(Hn=null),Ne(Ln)}var Ln=Ie(0);function Ho(t,n){ne(Un,Un.current),ne(Ln,n)}function Bf(t){Ne(Ln),Ne(Un),Hn===t&&(Hn=null)}function ru(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||sh(a)||oh(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ya=0,pe=null,qe=null,pn=null,su=!1,xs=!1,Ir=!1,ou=0,Go=0,Ms=null,gM=0;function sn(){throw Error(s(321))}function Ff(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ui(t[a],n[a]))return!1;return!0}function Hf(t,n,a,r,l,c){return ya=c,pe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Mt.H=t===null||t.memoizedState===null?t0:e0,Ir=!1,c=a(r,l),Ir=!1,xs&&(c=Sg(n,a,r,l)),vg(t),c}function vg(t){Mt.H=pu;var n=qe!==null&&qe.next!==null;if(ya=0,pn=qe=pe=null,su=!1,Go=0,Ms=null,n)throw Error(s(300));t===null||mn||(t=t.dependencies,t!==null&&Jl(t)&&(mn=!0))}function Sg(t,n,a,r){pe=t;var l=0;do{if(xs&&(Ms=null),Go=0,xs=!1,25<=l)throw Error(s(301));if(l+=1,pn=qe=null,t.updateQueue!=null){var c=t.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}Mt.H=TM,c=n(a,r)}while(xs);return c}function _M(){var t=Mt.H,n=t.useState()[0];return n=typeof n.then=="function"?Vo(n):n,t=t.useState()[0],(qe!==null?qe.memoizedState:null)!==t&&(pe.flags|=1024),n}function Gf(){var t=ou!==0;return ou=0,t}function Vf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Xf(t){if(su){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}su=!1}ya=0,pn=qe=pe=null,xs=!1,Go=ou=0,Ms=null}function Wn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?pe.memoizedState=pn=t:pn=pn.next=t,pn}function dn(){if(qe===null){var t=pe.alternate;t=t!==null?t.memoizedState:null}else t=qe.next;var n=pn===null?pe.memoizedState:pn.next;if(n!==null)pn=n,qe=t;else{if(t===null)throw pe.alternate===null?Error(s(467)):Error(s(310));qe=t,t={memoizedState:qe.memoizedState,baseState:qe.baseState,baseQueue:qe.baseQueue,queue:qe.queue,next:null},pn===null?pe.memoizedState=pn=t:pn=pn.next=t}return pn}function lu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Vo(t){var n=Go;return Go+=1,Ms===null&&(Ms=[]),t=ug(Ms,t,n),n=pe,(pn===null?n.memoizedState:pn.next)===null&&(n=n.alternate,Mt.H=n===null||n.memoizedState===null?t0:e0),t}function uu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Vo(t);if(t.$$typeof===J)return;if(t.$$typeof===it)return Nn(t)}throw Error(s(438,String(t)))}function kf(t){var n=null,a=pe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=pe.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=lu(),pe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=te;return n.index++,a}function Ea(t,n){return typeof n=="function"?n(t):n}function cu(t){var n=dn();return Wf(n,qe,t)}function Wf(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var l=t.baseQueue,c=r.pending;if(c!==null){if(l!==null){var _=l.next;l.next=c.next,c.next=_}n.baseQueue=l=c,r.pending=null}if(c=t.baseState,l===null)t.memoizedState=c;else{n=l.next;var A=_=null,P=null,Q=n,st=!1;do{var _t=Q.lane&-536870913;if(_t!==Q.lane?(Ee&_t)===_t:(ya&_t)===_t){var Z=Q.revertLane;if(Z===0)P!==null&&(P=P.next={lane:0,revertLane:0,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),_t===Nr&&(st=!0);else if((ya&Z)===Z){Q=Q.next,Z===Nr&&(st=!0);continue}else _t={lane:0,revertLane:Q.revertLane,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},P===null?(A=P=_t,_=c):P=P.next=_t,pe.lanes|=Z,nr|=Z;_t=Q.action,Ir&&a(c,_t),c=Q.hasEagerState?Q.eagerState:a(c,_t)}else Z={lane:_t,revertLane:Q.revertLane,gesture:Q.gesture,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},P===null?(A=P=Z,_=c):P=P.next=Z,pe.lanes|=_t,nr|=_t;Q=Q.next}while(Q!==null&&Q!==n);if(P===null?_=c:P.next=A,!ui(c,t.memoizedState)&&(mn=!0,st&&(a=_s,a!==null)))throw a;t.memoizedState=c,t.baseState=_,t.baseQueue=P,r.lastRenderedState=c}return l===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function qf(t){var n=dn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,l=a.pending,c=n.memoizedState;if(l!==null){a.pending=null;var _=l=l.next;do c=t(c,_.action),_=_.next;while(_!==l);ui(c,n.memoizedState)||(mn=!0),n.memoizedState=c,n.baseQueue===null&&(n.baseState=c),a.lastRenderedState=c}return[c,r]}function xg(t,n,a){var r=pe,l=dn(),c=Se;if(c){if(a===void 0)throw Error(s(407));a=a()}else a=n();var _=!ui((qe||l).memoizedState,a);if(_&&(l.memoizedState=a,mn=!0),l=l.queue,Kf(Eg.bind(null,r,l,t),[t]),t=l.getSnapshot!==n||_||pn!==null&&(pn.memoizedState.tag&1)!==0,ys(t?9:8,{destroy:void 0},yg.bind(null,r,l,a,n),null),t){if(r.flags|=2048,Ye===null)throw Error(s(349));c||(ya&127)!==0||Mg(r,n,a)}return a}function Mg(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=pe.updateQueue,n===null?(n=lu(),pe.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function yg(t,n,a,r){n.value=a,n.getSnapshot=r,Tg(n)&&bg(t)}function Eg(t,n,a){return a(function(){Tg(n)&&bg(t)})}function Tg(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ui(t,a)}catch{return!0}}function bg(t){var n=br(t,2);n!==null&&ni(n,t,2)}function Yf(t){var n=Wn();if(typeof t=="function"){var a=t;if(t=a(),Ir){Tt(!0);try{a()}finally{Tt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:t},n}function Ag(t,n,a,r){return t.baseState=a,Wf(t,qe,typeof r=="function"?r:Ea)}function vM(t,n,a,r,l){if(hu(t))throw Error(s(485));if(t=n.action,t!==null){var c={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){c.listeners.push(_)}};Mt.T!==null?a(!0):c.isTransition=!1,r(c),a=n.pending,a===null?(c.next=n.pending=c,Rg(n,c)):(c.next=a.next,n.pending=a.next=c)}}function Rg(t,n){var a=n.action,r=n.payload,l=t.state;if(n.isTransition){var c=Mt.T,_={};_.types=c!==null?c.types:null,Mt.T=_;try{var A=a(l,r),P=Mt.S;P!==null&&P(_,A),Cg(t,n,A)}catch(Q){Zf(t,n,Q)}finally{c!==null&&_.types!==null&&(c.types=_.types),Mt.T=c}}else try{c=a(l,r),Cg(t,n,c)}catch(Q){Zf(t,n,Q)}}function Cg(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){wg(t,n,r)},function(r){return Zf(t,n,r)}):wg(t,n,a)}function wg(t,n,a){n.status="fulfilled",n.value=a,Dg(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Rg(t,a)))}function Zf(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,Dg(n),n=n.next;while(n!==r)}t.action=null}function Dg(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Ng(t,n){return n}function Ug(t,n){if(Se){var a=Ye.formState;if(a!==null){t:{var r=pe;if(Se){if(Ze){e:{for(var l=Ze,c=Ai;l.nodeType!==8;){if(!c){l=null;break e}if(l=Ci(l.nextSibling),l===null){l=null;break e}}c=l.data,l=c==="F!"||c==="F"?l:null}if(l){Ze=Ci(l.nextSibling),r=l.data==="F!";break t}}ka(r)}r=!1}r&&(n=a[0])}}return a=Wn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ng,lastRenderedState:n},a.queue=r,a=Jg.bind(null,pe,r),r.dispatch=a,r=Yf(!1),c=td.bind(null,pe,!1,r.queue),r=Wn(),l={state:n,dispatch:null,action:t,pending:null},r.queue=l,a=vM.bind(null,pe,l,c,a),l.dispatch=a,r.memoizedState=t,[n,a,!1]}function Lg(t){var n=dn();return Og(n,qe,t)}function Og(t,n,a){if(n=Wf(t,n,Ng)[0],t=cu(Ea)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=Vo(n)}catch(_){throw _===vs?tu:_}else r=n;n=dn();var l=n.queue,c=l.dispatch;return a!==n.memoizedState&&(pe.flags|=2048,ys(9,{destroy:void 0},SM.bind(null,l,a),null)),[r,c,t]}function SM(t,n){t.action=n}function Pg(t){var n=dn(),a=qe;if(a!==null)return Og(n,a,t);dn(),n=n.memoizedState,a=dn();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function ys(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=pe.updateQueue,n===null&&(n=lu(),pe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function Ig(){return dn().memoizedState}function fu(t,n,a,r){var l=Wn();pe.flags|=t,l.memoizedState=ys(1|n,{destroy:void 0},a,r===void 0?null:r)}function du(t,n,a,r){var l=dn();r=r===void 0?null:r;var c=l.memoizedState.inst;qe!==null&&r!==null&&Ff(r,qe.memoizedState.deps)?l.memoizedState=ys(n,c,a,r):(pe.flags|=t,l.memoizedState=ys(1|n,c,a,r))}function zg(t,n){fu(8390656,8,t,n)}function Kf(t,n){du(2048,8,t,n)}function xM(t){pe.flags|=4;var n=pe.updateQueue;if(n===null)n=lu(),pe.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Bg(t){var n=dn().memoizedState;return xM({ref:n,nextImpl:t}),function(){if((Oe&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Fg(t,n){return du(4,2,t,n)}function Hg(t,n){return du(4,4,t,n)}function Gg(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Vg(t,n,a){a=a!=null?a.concat([t]):null,du(4,4,Gg.bind(null,n,t),a)}function Qf(){}function Xg(t,n){var a=dn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Ff(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function kg(t,n){var a=dn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Ff(n,r[1]))return r[0];if(r=t(),Ir){Tt(!0);try{t()}finally{Tt(!1)}}return a.memoizedState=[r,n],r}function Jf(t,n,a){return a===void 0||(ya&1073741824)!==0&&(Ee&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=t_(),pe.lanes|=t,nr|=t,a)}function Wg(t,n,a,r){return ui(a,n)?a:Qa.current!==null?(t=Jf(t,a,r),ui(t,n)||(mn=!0),t):(ya&106)===0||(ya&1073741824)!==0&&(Ee&261930)===0?(mn=!0,t.memoizedState=a):(t=t_(),pe.lanes|=t,nr|=t,n)}function qg(t,n,a,r,l){var c=Ht.p;Ht.p=c!==0&&8>c?c:8;var _=Mt.T,A={};A.types=_!==null?_.types:null,Mt.T=A,td(t,!1,n,a);try{var P=l(),Q=Mt.S;if(Q!==null&&Q(A,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var st=mM(P,r);Xo(t,n,st,pi(t))}else Xo(t,n,r,pi(t))}catch(_t){Xo(t,n,{then:function(){},status:"rejected",reason:_t},pi())}finally{Ht.p=c,_!==null&&A.types!==null&&(_.types=A.types),Mt.T=_}}function MM(){}function jf(t,n,a,r){if(t.tag!==5)throw Error(s(476));var l=Yg(t).queue;qg(t,l,n,xe,a===null?MM:function(){return Zg(t),a(r)})}function Yg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:xe,baseState:xe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:xe},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Zg(t){var n=Yg(t);n.next===null&&(n=t.alternate.memoizedState),Xo(t,n.next.queue,{},pi())}function $f(){return Nn(Gs)}function Kg(){return dn().memoizedState}function Qg(){return dn().memoizedState}function yM(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=pi();t=Za(a);var r=Ka(n,t,a);r!==null&&(ni(r,n,a),zo(r,n,a)),n={cache:Rf()},t.payload=n;return}n=n.return}}function EM(t,n,a){var r=pi();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},hu(t)?jg(n,a):(a=vf(t,n,a,r),a!==null&&(ni(a,t,r),$g(a,n,r)))}function Jg(t,n,a){var r=pi();Xo(t,n,a,r)}function Xo(t,n,a,r){var l={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(hu(t))jg(n,l);else{var c=t.alternate;if(t.lanes===0&&(c===null||c.lanes===0)&&(c=n.lastRenderedReducer,c!==null))try{var _=n.lastRenderedState,A=c(_,a);if(l.hasEagerState=!0,l.eagerState=A,ui(A,_))return kl(t,n,l,0),Ye===null&&Xl(),!1}catch{}finally{}if(a=vf(t,n,l,r),a!==null)return ni(a,t,r),$g(a,n,r),!0}return!1}function td(t,n,a,r){if(r={lane:2,revertLane:kd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},hu(t)){if(n)throw Error(s(479))}else n=vf(t,a,r,2),n!==null&&ni(n,t,2)}function hu(t){var n=t.alternate;return t===pe||n!==null&&n===pe}function jg(t,n){xs=su=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function $g(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,So(t,a)}}var pu={readContext:Nn,use:uu,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useLayoutEffect:sn,useInsertionEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useSyncExternalStore:sn,useId:sn,useHostTransitionStatus:sn,useFormState:sn,useActionState:sn,useOptimistic:sn,useMemoCache:sn,useCacheRefresh:sn,useEffectEvent:sn},t0={readContext:Nn,use:uu,useCallback:function(t,n){return Wn().memoizedState=[t,n===void 0?null:n],t},useContext:Nn,useEffect:zg,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,fu(4194308,4,Gg.bind(null,n,t),a)},useLayoutEffect:function(t,n){return fu(4194308,4,t,n)},useInsertionEffect:function(t,n){fu(4,2,t,n)},useMemo:function(t,n){var a=Wn();n=n===void 0?null:n;var r=t();if(Ir){Tt(!0);try{t()}finally{Tt(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=Wn();if(a!==void 0){var l=a(n);if(Ir){Tt(!0);try{a(n)}finally{Tt(!1)}}}else l=n;return r.memoizedState=r.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},r.queue=t,t=t.dispatch=EM.bind(null,pe,t),[r.memoizedState,t]},useRef:function(t){var n=Wn();return t={current:t},n.memoizedState=t},useState:function(t){t=Yf(t);var n=t.queue,a=Jg.bind(null,pe,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Qf,useDeferredValue:function(t,n){var a=Wn();return Jf(a,t,n)},useTransition:function(){var t=Yf(!1);return t=qg.bind(null,pe,t.queue,!0,!1),Wn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=pe,l=Wn();if(Se){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Ye===null)throw Error(s(349));(Ee&127)!==0||Mg(r,n,a)}l.memoizedState=a;var c={value:a,getSnapshot:n};return l.queue=c,zg(Eg.bind(null,r,c,t),[t]),r.flags|=2048,ys(9,{destroy:void 0},yg.bind(null,r,c,a,n),null),a},useId:function(){var t=Wn(),n=Ye.identifierPrefix;if(Se){var a=Ji,r=Qi;a=(r&~(1<<32-kt(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=ou++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=gM++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:$f,useFormState:Ug,useActionState:Ug,useOptimistic:function(t){var n=Wn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=td.bind(null,pe,!0,a),a.dispatch=n,[t,n]},useMemoCache:kf,useCacheRefresh:function(){return Wn().memoizedState=yM.bind(null,pe)},useEffectEvent:function(t){var n=Wn(),a={impl:t};return n.memoizedState=a,function(){if((Oe&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},e0={readContext:Nn,use:uu,useCallback:Xg,useContext:Nn,useEffect:Kf,useImperativeHandle:Vg,useInsertionEffect:Fg,useLayoutEffect:Hg,useMemo:kg,useReducer:cu,useRef:Ig,useState:function(){return cu(Ea)},useDebugValue:Qf,useDeferredValue:function(t,n){var a=dn();return Wg(a,qe.memoizedState,t,n)},useTransition:function(){var t=cu(Ea)[0],n=dn().memoizedState;return[typeof t=="boolean"?t:Vo(t),n]},useSyncExternalStore:xg,useId:Kg,useHostTransitionStatus:$f,useFormState:Lg,useActionState:Lg,useOptimistic:function(t,n){var a=dn();return Ag(a,qe,t,n)},useMemoCache:kf,useCacheRefresh:Qg,useEffectEvent:Bg},TM={readContext:Nn,use:uu,useCallback:Xg,useContext:Nn,useEffect:Kf,useImperativeHandle:Vg,useInsertionEffect:Fg,useLayoutEffect:Hg,useMemo:kg,useReducer:qf,useRef:Ig,useState:function(){return qf(Ea)},useDebugValue:Qf,useDeferredValue:function(t,n){var a=dn();return qe===null?Jf(a,t,n):Wg(a,qe.memoizedState,t,n)},useTransition:function(){var t=qf(Ea)[0],n=dn().memoizedState;return[typeof t=="boolean"?t:Vo(t),n]},useSyncExternalStore:xg,useId:Kg,useHostTransitionStatus:$f,useFormState:Pg,useActionState:Pg,useOptimistic:function(t,n){var a=dn();return qe!==null?Ag(a,qe,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:kf,useCacheRefresh:Qg,useEffectEvent:Bg};function ed(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:x({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var nd={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=pi(),l=Za(r);l.payload=n,a!=null&&(l.callback=a),n=Ka(t,l,r),n!==null&&(ni(n,t,r),zo(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=pi(),l=Za(r);l.tag=1,l.payload=n,a!=null&&(l.callback=a),n=Ka(t,l,r),n!==null&&(ni(n,t,r),zo(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=pi(),r=Za(a);r.tag=2,n!=null&&(r.callback=n),n=Ka(t,r,a),n!==null&&(ni(n,t,a),zo(n,t,a))}};function n0(t,n,a,r,l,c,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,c,_):n.prototype&&n.prototype.isPureReactComponent?!wo(a,r)||!wo(l,c):!0}function i0(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&nd.enqueueReplaceState(n,n.state,null)}function zr(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=x({},a));for(var l in t)a[l]===void 0&&(a[l]=t[l])}return a}function a0(t){Vl(t)}function r0(t){console.error(t)}function s0(t){Vl(t)}function mu(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function o0(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function id(t,n,a){return a=Za(a),a.tag=3,a.payload={element:null},a.callback=function(){mu(t,n)},a}function l0(t){return t=Za(t),t.tag=3,t}function u0(t,n,a,r){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var c=r.value;t.payload=function(){return l(c)},t.callback=function(){o0(n,a,r)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){o0(n,a,r),typeof l!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var A=r.stack;this.componentDidCatch(r.value,{componentStack:A!==null?A:""})})}function bM(t,n,a,r,l){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&wr(n,a,l,!0),a=Un.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Hn===null?Iu():a.alternate===null&&on===0&&(on=3),a.flags&=-257,a.flags|=65536,a.lanes=l,r===eu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Gd(t,r,l)),!1;case 22:return a.flags|=65536,r===eu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Gd(t,r,l)),!1}throw Error(s(435,a.tag))}return Gd(t,r,l),Iu(),!1}if(Se)return n=Un.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,r!==Ef&&(t=Error(s(422),{cause:r}),Uo(Ei(t,a)))):(r!==Ef&&(n=Error(s(423),{cause:r}),Uo(Ei(n,a))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,r=Ei(r,a),l=id(t.stateNode,r,l),Lf(t,l),on!==4&&(on=2)),!1;var c=Error(s(520),{cause:r});if(c=Ei(c,a),Jo===null?Jo=[c]:Jo.push(c),on!==4&&(on=2),n===null)return!0;r=Ei(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=l&-l,a.lanes|=t,t=id(a.stateNode,r,t),Lf(a,t),!1;case 1:if(n=a.type,c=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(ir===null||!ir.has(c))))return a.flags|=65536,l&=-l,a.lanes|=l,l=l0(l),u0(l,t,a,r),Lf(a,l),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var ad=Error(s(461)),mn=!1;function Sn(t,n,a,r){n.child=t===null?hg(n,null,a,r):Pr(n,t.child,a,r)}function c0(t,n,a,r,l){a=a.render;var c=n.ref;if("ref"in r){var _={};for(var A in r)A!=="ref"&&(_[A]=r[A])}else _=r;return Dr(n),r=Hf(t,n,a,_,c,l),A=Gf(),t!==null&&!mn?(Vf(t,n,l),Ta(t,n,l)):(Se&&A&&Zl(n),n.flags|=1,Sn(t,n,r,l),n.child)}function f0(t,n,a,r,l){if(t===null){var c=a.type;return typeof c=="function"&&!Sf(c)&&c.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=c,d0(t,n,c,r,l)):(t=ql(a.type,null,r,n,n.mode,l),t.ref=n.ref,t.return=n,n.child=t)}if(c=t.child,!dd(t,l)){var _=c.memoizedProps;if(a=a.compare,a=a!==null?a:wo,a(_,r)&&t.ref===n.ref)return Ta(t,n,l)}return n.flags|=1,t=va(c,r),t.ref=n.ref,t.return=n,n.child=t}function d0(t,n,a,r,l){if(t!==null){var c=t.memoizedProps;if(wo(c,r)&&t.ref===n.ref)if(mn=!1,n.pendingProps=r=c,dd(t,l))(t.flags&131072)!==0&&(mn=!0);else return n.lanes=t.lanes,Ta(t,n,l)}return rd(t,n,a,r,l)}function h0(t,n,a,r){var l=r.children,c=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(c=c!==null?c.baseLanes|a:a,t!==null){for(r=n.child=t.child,l=0;r!==null;)l=l|r.lanes|r.childLanes,r=r.sibling;r=l&~c}else r=0,n.child=null;return p0(t,n,c,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&$l(n,c!==null?c.cachePool:null),c!==null?gg(n,c):Pf(),_g(n);else return r=n.lanes=536870912,p0(t,n,c!==null?c.baseLanes|a:a,a,r)}else c!==null?($l(n,c.cachePool),gg(n,c),ja(),n.memoizedState=null):(t!==null&&$l(n,null),Pf(),ja());return Sn(t,n,l,a),n.child}function ko(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function p0(t,n,a,r,l){var c=wf();return c=c===null?null:{parent:hn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&$l(n,null),Pf(),_g(n),t!==null&&wr(t,n,r,!0),n.childLanes=l,null}function gu(t,n){return n=_u({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function m0(t,n,a){return Pr(n,t.child,null,a),t=gu(n,n.pendingProps),t.flags|=2,ci(n),n.memoizedState=null,t}function AM(t,n,a){var r=n.pendingProps,l=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Se){if(r.mode==="hidden")return t=gu(n,r),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},ko(null,t);if(zf(n),(t=Ze)?(t=G_(t,Ai),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Va!==null?{id:Qi,overflow:Ji}:null,retryLane:536870912,hydrationErrors:null},a=jm(t),a.return=n,n.child=a,En=n,Ze=null)):t=null,t===null)throw ka(n);return n.lanes=536870912,null}return gu(n,r)}var c=t.memoizedState;if(c!==null){var _=c.dehydrated;if(zf(n),l)if(n.flags&256)n.flags&=-257,n=m0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(mn||wr(t,n,a,!1),l=(a&t.childLanes)!==0,mn||l){if(Qa.current===null){if(r=Ye,r!==null&&(_=Fa(r,a),_!==0&&_!==c.retryLane))throw c.retryLane=_,br(t,_),ni(r,t,_),ad;Iu()}n=m0(t,n,a)}else t=c.treeContext,Ze=Ci(_.nextSibling),En=n,Se=!0,Xa=null,Ai=!1,t!==null&&eg(n,t),n=gu(n,r),n.flags|=134221824;return n}return t=va(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Es(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function rd(t,n,a,r,l){return Dr(n),a=Hf(t,n,a,r,void 0,l),r=Gf(),t!==null&&!mn?(Vf(t,n,l),Ta(t,n,l)):(Se&&r&&Zl(n),n.flags|=1,Sn(t,n,a,l),n.child)}function g0(t,n,a,r,l,c){return Dr(n),n.updateQueue=null,a=Sg(n,r,a,l),vg(t),r=Gf(),t!==null&&!mn?(Vf(t,n,c),Ta(t,n,c)):(Se&&r&&Zl(n),n.flags|=1,Sn(t,n,a,c),n.child)}function _0(t,n,a,r,l){if(Dr(n),n.stateNode===null){var c=hs,_=a.contextType;typeof _=="object"&&_!==null&&(c=Nn(_)),c=new a(r,c),n.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=nd,n.stateNode=c,c._reactInternals=n,c=n.stateNode,c.props=r,c.state=n.memoizedState,c.refs={},Nf(n),_=a.contextType,c.context=typeof _=="object"&&_!==null?Nn(_):hs,c.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(ed(n,a,_,r),c.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(_=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),_!==c.state&&nd.enqueueReplaceState(c,c.state,null),Fo(n,r,c,l),Bo(),c.state=n.memoizedState),typeof c.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){c=n.stateNode;var A=n.memoizedProps,P=zr(a,A);c.props=P;var Q=c.context,st=a.contextType;_=hs,typeof st=="object"&&st!==null&&(_=Nn(st));var _t=a.getDerivedStateFromProps;st=typeof _t=="function"||typeof c.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,st||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(A||Q!==_)&&i0(n,c,r,_),Ya=!1;var Z=n.memoizedState;c.state=Z,Fo(n,r,c,l),Bo(),Q=n.memoizedState,A||Z!==Q||Ya?(typeof _t=="function"&&(ed(n,a,_t,r),Q=n.memoizedState),(P=Ya||n0(n,a,P,r,Z,Q,_))?(st||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(n.flags|=4194308)):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=Q),c.props=r,c.state=Q,c.context=_,r=P):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{c=n.stateNode,Uf(t,n),_=n.memoizedProps,st=zr(a,_),c.props=st,_t=n.pendingProps,Z=c.context,Q=a.contextType,P=hs,typeof Q=="object"&&Q!==null&&(P=Nn(Q)),A=a.getDerivedStateFromProps,(Q=typeof A=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(_!==_t||Z!==P)&&i0(n,c,r,P),Ya=!1,Z=n.memoizedState,c.state=Z,Fo(n,r,c,l),Bo();var rt=n.memoizedState;_!==_t||Z!==rt||Ya||t!==null&&t.dependencies!==null&&Jl(t.dependencies)?(typeof A=="function"&&(ed(n,a,A,r),rt=n.memoizedState),(st=Ya||n0(n,a,st,r,Z,rt,P)||t!==null&&t.dependencies!==null&&Jl(t.dependencies))?(Q||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,rt,P),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,rt,P)),typeof c.componentDidUpdate=="function"&&(n.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof c.componentDidUpdate!="function"||_===t.memoizedProps&&Z===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&Z===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=rt),c.props=r,c.state=rt,c.context=P,r=st):(typeof c.componentDidUpdate!="function"||_===t.memoizedProps&&Z===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&Z===t.memoizedState||(n.flags|=1024),r=!1)}return c=r,Es(t,n),r=(n.flags&128)!==0,c||r?(c=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:c.render(),n.flags|=1,t!==null&&r?(n.child=Pr(n,t.child,null,l),n.child=Pr(n,null,a,l)):Sn(t,n,a,l),n.memoizedState=c.state,t=n.child):t=Ta(t,n,l),t}function v0(t,n,a,r){return Rr(),n.flags|=256,Sn(t,n,a,r),n.child}var sd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function od(t){return{baseLanes:t,cachePool:og()}}function ld(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=hi),t}function S0(t,n,a){var r=n.pendingProps,l=!1,c=(n.flags&128)!==0,_;if((_=c)||(_=t!==null&&t.memoizedState===null?!1:(Ln.current&2)!==0),_&&(l=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(Se){if(l?Ja(n):ja(),(t=Ze)?(t=G_(t,Ai),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Va!==null?{id:Qi,overflow:Ji}:null,retryLane:536870912,hydrationErrors:null},a=jm(t),a.return=n,n.child=a,En=n,Ze=null)):t=null,t===null)throw ka(n);return oh(t)?n.lanes=32:n.lanes=536870912,null}return c=r.children,r=r.fallback,l?(ja(),l=n.mode,c=_u({mode:"hidden",children:c},l),r=Ar(r,l,a,null),c.return=n,r.return=n,c.sibling=r,n.child=c,r=n.child,r.memoizedState=od(a),r.childLanes=ld(t,_,a),n.memoizedState=sd,ko(null,r)):(Ja(n),ud(n,c))}var A=t.memoizedState;if(A!==null){var P=A.dehydrated;if(P!==null)return RM(t,n,c,_,r,P,A,a)}return l?(ja(),l=r.fallback,c=n.mode,A=t.child,P=A.sibling,r=va(A,{mode:"hidden",children:r.children}),r.subtreeFlags=A.subtreeFlags&1206910976,P!==null?l=va(P,l):(l=Ar(l,c,a,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,ko(null,r),r=n.child,l=t.child.memoizedState,l===null?l=od(a):(c=l.cachePool,c!==null?(A=hn._currentValue,c=c.parent!==A?{parent:A,pool:A}:c):c=og(),l={baseLanes:l.baseLanes|a,cachePool:c}),r.memoizedState=l,r.childLanes=ld(t,_,a),n.memoizedState=sd,ko(t.child,r)):(Ja(n),a=t.child,t=a.sibling,a=va(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function ud(t,n){return n=_u({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function _u(t,n){return t=jn(22,t,null,n),t.lanes=0,t}function vu(t,n,a){return Pr(n,t.child,null,a),t=ud(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function RM(t,n,a,r,l,c,_,A){if(a)return n.flags&256?(Ja(n),n.flags&=-257,vu(t,n,A)):n.memoizedState!==null?(ja(),n.child=t.child,n.flags|=128,null):(ja(),c=l.fallback,_=n.mode,l=_u({mode:"visible",children:l.children},_),c=Ar(c,_,A,null),c.flags|=2,l.return=n,c.return=n,l.sibling=c,n.child=l,Pr(n,t.child,null,A),l=n.child,l.memoizedState=od(A),l.childLanes=ld(t,r,A),n.memoizedState=sd,ko(null,l));if(Ja(n),oh(c)){if(r=c.nextSibling&&c.nextSibling.dataset,r)var P=r.dgst;return r=P,r!==""&&(l=Error(s(419)),l.stack="",l.digest=r,Uo({value:l,source:null,stack:null})),vu(t,n,A)}if(mn||wr(t,n,A,!1),r=(A&t.childLanes)!==0,mn||r){if(Qa.current!==null)return vu(t,n,A);if(r=Ye,r!==null&&(l=Fa(r,A),l!==0&&l!==_.retryLane))throw _.retryLane=l,br(t,l),ni(r,t,l),ad;return sh(c)||Iu(),vu(t,n,A)}return sh(c)?(n.flags|=192,n.child=t.child,null):(t=_.treeContext,Ze=Ci(c.nextSibling),En=n,Se=!0,Xa=null,Ai=!1,t!==null&&eg(n,t),n=ud(n,l.children),n.flags|=134221824,n)}function x0(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),Ql(t.return,n,a)}function M0(t){for(var n=null;t!==null;){var a=t.alternate;a!==null&&ru(a)===null&&(n=t),t=t.sibling}return n}function Su(t,n,a,r,l,c){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:l,treeForkCount:c}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=r,_.tail=a,_.tailMode=l,_.treeForkCount=c)}function cd(t){var n=t.child;for(t.child=null;n!==null;){var a=n.sibling;n.sibling=t.child,t.child=n,n=a}}function fd(t,n,a){var r=n.pendingProps,l=r.revealOrder,c=r.tail;r=r.children;var _=Ln.current;if(n.flags&128)return Ho(n,_),null;var A=(_&2)!==0;if(A?(_=_&1|2,n.flags|=128):_&=1,Ho(n,_),l==="backwards"&&t!==null?(cd(t),Sn(t,n,r,a),cd(t)):Sn(t,n,r,a),r=Se?No:0,!A&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&x0(t,a,n);else if(t.tag===19)x0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(l){case"backwards":a=M0(n.child),a===null?(l=n.child,n.child=null):(l=a.sibling,a.sibling=null,cd(n)),Su(n,!0,l,null,c,r);break;case"unstable_legacy-backwards":for(a=null,l=n.child,n.child=null;l!==null;){if(t=l.alternate,t!==null&&ru(t)===null){n.child=l;break}t=l.sibling,l.sibling=a,a=l,l=t}Su(n,!0,a,null,c,r);break;case"together":Su(n,!1,null,null,void 0,r);break;case"independent":n.memoizedState=null;break;default:a=M0(n.child),a===null?(l=n.child,n.child=null):(l=a.sibling,a.sibling=null),Su(n,!1,l,a,c,r)}return n.child}function y0(t,n,a){var r=n.pendingProps;return Wa(n,n.type,r.value),Sn(t,n,r.children,a),n.child}function Ta(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),nr|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(wr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=va(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=va(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function dd(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Jl(t)))}function CM(t,n,a){switch(n.tag){case 3:wn(n,n.stateNode.containerInfo),Wa(n,hn,t.memoizedState.cache),Rr();break;case 27:case 5:Fn(n);break;case 4:wn(n,n.stateNode.containerInfo);break;case 10:Wa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,zf(n),null;break;case 13:var r=n.memoizedState;if(r!==null){if(r.dehydrated!==null)return Ja(n),n.flags|=128,null;r=wr(t,n,a,!1);var l=n.child.childLanes;return r||(a&l)!==0?S0(t,n,a):(Ja(n),t=Ta(t,n,a),t!==null?t.sibling:null)}Ja(n);break;case 19:if(n.flags&128)return fd(t,n,a);if(l=(t.flags&128)!==0,r=(a&n.childLanes)!==0,r||(wr(t,n,a,!1),r=(a&n.childLanes)!==0),l){if(r)return fd(t,n,a);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Ho(n,Ln.current),r)break;return null;case 22:return n.lanes=0,h0(t,n,a,n.pendingProps);case 24:Wa(n,hn,t.memoizedState.cache)}return Ta(t,n,a)}function E0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)mn=!0;else{if(!dd(t,a)&&(n.flags&128)===0)return mn=!1,CM(t,n,a);mn=(t.flags&131072)!==0}else mn=!1,Se&&(n.flags&1048576)!==0&&tg(n,No,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=Lr(n.elementType),n.type=t,typeof t=="function")Sf(t)?(r=zr(t,r),n.tag=1,n=_0(null,n,t,r,a)):(n.tag=0,n=rd(null,n,t,r,a));else{if(t!=null){var l=t.$$typeof;if(l===q){n.tag=11,n=c0(null,n,t,r,a);break t}else if(l===tt){n.tag=14,n=f0(null,n,t,r,a);break t}else if(l===it){n.tag=10,n.type=t,n=y0(null,n,a);break t}}throw n=Ft(t)||t,Error(s(306,n,""))}}return n;case 0:return rd(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,l=zr(r,n.pendingProps),_0(t,n,r,l,a);case 3:t:{if(wn(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var c=n.memoizedState;l=c.element,Uf(t,n),Fo(n,r,null,a);var _=n.memoizedState;if(r=_.cache,Wa(n,hn,r),r!==c.cache&&Af(n,[hn],a,!0),Bo(),r=_.element,c.isDehydrated)if(c={element:r,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=v0(t,n,r,a);break t}else if(r!==l){l=Ei(Error(s(424)),n),Uo(l),n=v0(t,n,r,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ze=Ci(t.firstChild),En=n,Se=!0,Xa=null,Ai=!0,a=hg(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(Rr(),r===l){n=Ta(t,n,a);break t}Sn(t,n,r,a)}n=n.child}return n;case 26:return Es(t,n),t===null?(a=Z_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Se||(n.stateNode=R_(n.type,n.pendingProps,fn.current,n)):n.memoizedState=Z_(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Fn(n),t===null&&Se&&(r=n.stateNode=k_(n.type,n.pendingProps,fn.current),En=n,Ai=!0,l=Ze,sr(n.type)?(lh=l,Ze=Ci(r.firstChild)):Ze=l),Sn(t,n,n.pendingProps.children,a),Es(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Se&&((l=r=Ze)&&(r=yy(r,n.type,n.pendingProps,Ai),r!==null?(n.stateNode=r,En=n,Ze=Ci(r.firstChild),Ai=!1,l=!0):l=!1),l||ka(n)),Fn(n),l=n.type,c=n.pendingProps,_=t!==null?t.memoizedProps:null,r=c.children,$d(l,c)?r=null:_!==null&&$d(l,_)&&(n.flags|=32),n.memoizedState!==null&&(l=Hf(t,n,_M,null,null,a),Gs._currentValue=l),Es(t,n),Sn(t,n,r,a),n.child;case 6:return t===null&&Se&&((t=a=Ze)&&(a=Ey(a,n.pendingProps,Ai),a!==null?(n.stateNode=a,En=n,Ze=null,t=!0):t=!1),t||ka(n)),null;case 13:return S0(t,n,a);case 4:return wn(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=Pr(n,null,r,a):Sn(t,n,r,a),n.child;case 11:return c0(t,n,n.type,n.pendingProps,a);case 7:return r=n.pendingProps,Es(t,n),Sn(t,n,r,a),n.child;case 8:return Sn(t,n,n.pendingProps.children,a),n.child;case 12:return Sn(t,n,n.pendingProps.children,a),n.child;case 10:return y0(t,n,a);case 9:return l=n.type._context,r=n.pendingProps.children,Dr(n),l=Nn(l),r=r(l),n.flags|=1,Sn(t,n,r,a),n.child;case 14:return f0(t,n,n.type,n.pendingProps,a);case 15:return d0(t,n,n.type,n.pendingProps,a);case 19:return fd(t,n,a);case 31:return AM(t,n,a);case 22:return h0(t,n,a,n.pendingProps);case 24:return Dr(n),r=Nn(hn),t===null?(l=wf(),l===null&&(l=Ye,c=Rf(),l.pooledCache=c,c.refCount++,c!==null&&(l.pooledCacheLanes|=a),l=c),n.memoizedState={parent:r,cache:l},Nf(n),Wa(n,hn,l)):((t.lanes&a)!==0&&(Uf(t,n),Fo(n,null,null,a),Bo()),l=t.memoizedState,c=n.memoizedState,l.parent!==r?(l={parent:r,cache:r},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),Wa(n,hn,r)):(r=c.cache,Wa(n,hn,r),r!==l.cache&&Af(n,[hn],a,!0))),Sn(t,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=n.pendingProps,r.name!=null&&r.name!=="auto"?n.flags|=t===null?18882560:18874368:Se&&Zl(n),t!==null&&t.memoizedProps.name!==r.name?n.flags|=4194816:Es(t,n),Sn(t,n,r.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ba(t){t.flags|=4}function hd(t,n,a,r,l){var c;if((c=(t.mode&32)!==0)&&(c=a===null?j_(n,r):j_(n,r)&&(r.src!==a.src||r.srcSet!==a.srcSet)),c){if(t.flags|=16777216,(l&335544128)===l)if(t.stateNode.complete)t.flags|=8192;else if(a_())t.flags|=8192;else throw Or=eu,Df}else t.flags&=-16777217}function T0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!$_(n))if(a_())t.flags|=8192;else throw Or=eu,Df}function xu(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?es():536870912,t.lanes|=n,Cs|=n)}function Wo(t,n){if(!Se)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null;break;default:for(n=t.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null}}function Ke(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var l=t.child;l!==null;)a|=l.lanes|l.childLanes,r|=l.subtreeFlags&1206910976,r|=l.flags&1206910976,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)a|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function wM(t,n,a){var r=n.pendingProps;switch(yf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(n),null;case 1:return Ke(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Ma(hn),Y(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(gs(n)?ba(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Tf())),Ke(n),null;case 26:var l=n.type,c=n.memoizedState;return t===null?(ba(n),c!==null?(Ke(n),T0(n,c)):(Ke(n),hd(n,l,null,r,a))):c?c!==t.memoizedState?(ba(n),Ke(n),T0(n,c)):(Ke(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&ba(n),Ke(n),hd(n,l,t,r,a)),null;case 27:if(Fe(n),a=fn.current,l=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ba(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ke(n),n.subtreeFlags&=-33554433,null}t=cn.current,gs(n)?ng(n):(t=k_(l,r,a),n.stateNode=t,ba(n))}return Ke(n),n.subtreeFlags&=-33554433,null;case 5:if(Fe(n),l=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ba(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ke(n),n.subtreeFlags&=-33554433,null}if(c=cn.current,gs(n))ng(n);else{var _=nl(fn.current);switch(c){case 1:c=_.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:c=_.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":c=_.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":c=_.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":c=_.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof r.is=="string"?_.createElement("select",{is:r.is}):_.createElement("select"),r.multiple?c.multiple=!0:r.size&&(c.size=r.size);break;default:c=typeof r.is=="string"?_.createElement(l,{is:r.is}):_.createElement(l)}}c[vn]=n,c[Dn]=r;t:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)c.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break t;for(;_.sibling===null;){if(_.return===null||_.return===n)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=c;t:switch(Pn(c,l,r),l){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&ba(n)}}return Ke(n),n.subtreeFlags&=-33554433,hd(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&ba(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=fn.current,gs(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,l=En,l!==null)switch(l.tag){case 27:case 5:r=l.memoizedProps}t[vn]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||E_(t.nodeValue,a)),t||ka(n,!0)}else t=nl(t).createTextNode(r),t[vn]=n,n.stateNode=t}return Ke(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=gs(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[vn]=n}else Rr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),t=!1}else a=Tf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ci(n),n):(ci(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Ke(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=gs(n),r!==null&&r.dehydrated!==null){if(t===null){if(!l)throw Error(s(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[vn]=n}else Rr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),l=!1}else l=Tf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),l=!0;if(!l)return n.flags&256?(ci(n),n):(ci(n),null)}return ci(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,l=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(l=r.alternate.memoizedState.cachePool.pool),c=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==l&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),xu(n,n.updateQueue),Ke(n),null);case 4:return Y(),t===null&&Zd(n.stateNode.containerInfo),n.flags|=67108864,Ke(n),null;case 10:return Ma(n.type),Ke(n),null;case 19:if(Bf(n),r=n.memoizedState,r===null)return Ke(n),null;if(l=(n.flags&128)!==0,c=r.rendering,c===null)if(l)Wo(r,!1);else{if(on!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(c=ru(t),c!==null){for(n.flags|=128,Wo(r,!1),t=c.updateQueue,n.updateQueue=t,xu(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Jm(a,t),a=a.sibling;return Ho(n,Ln.current&1|2),Se&&Sa(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&dt()>Uu&&(n.flags|=128,l=!0,Wo(r,!1),n.lanes=4194304)}else{if(!l)if(t=ru(c),t!==null){if(n.flags|=128,l=!0,t=t.updateQueue,n.updateQueue=t,xu(n,t),Wo(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!c.alternate&&!Se)return Ke(n),null}else 2*dt()-r.renderingStartTime>Uu&&a!==536870912&&(n.flags|=128,l=!0,Wo(r,!1),n.lanes=4194304);r.isBackwards?(c.sibling=n.child,n.child=c):(t=r.last,t!==null?t.sibling=c:n.child=c,r.last=c)}if(r.tail!==null){t=r.tail;t:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return r.rendering=t,r.tail=t.sibling,r.renderingStartTime=dt(),t.sibling=null,c=Ln.current,c=l?c&1|2:c&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!a||Se?Ho(n,c):(a=c,ne(Un,n),ne(Ln,a),Hn===null&&(Hn=n)),Se&&Sa(n,r.treeForkCount),t}return Ke(n),null;case 22:case 23:return ci(n),If(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Ke(n),n.subtreeFlags&6&&(n.flags|=8192)):Ke(n),a=n.updateQueue,a!==null&&xu(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&Ne(Ur),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ma(hn),Ke(n),null;case 25:return null;case 30:return n.flags|=33554432,Ke(n),null}throw Error(s(156,n.tag))}function DM(t,n){switch(yf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ma(hn),Y(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Fe(n),null;case 31:if(n.memoizedState!==null){if(ci(n),n.alternate===null)throw Error(s(340));Rr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ci(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Rr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Bf(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return Y(),null;case 10:return Ma(n.type),null;case 22:case 23:return ci(n),If(),t!==null&&Ne(Ur),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ma(hn),null;case 25:return null;default:return null}}function b0(t,n){switch(yf(n),n.tag){case 3:Ma(hn),Y();break;case 26:case 27:case 5:Fe(n);break;case 4:Y();break;case 31:n.memoizedState!==null&&ci(n);break;case 13:ci(n);break;case 19:Bf(n);break;case 10:Ma(n.type);break;case 22:case 23:ci(n),If(),t!==null&&Ne(Ur);break;case 24:Ma(hn)}}function qo(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var l=r.next;a=l;do{if((a.tag&t)===t){r=void 0;var c=a.create,_=a.inst;r=c(),_.destroy=r}a=a.next}while(a!==l)}}catch(A){Ve(n,n.return,A)}}function $a(t,n,a){try{var r=n.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var c=l.next;r=c;do{if((r.tag&t)===t){var _=r.inst,A=_.destroy;if(A!==void 0){_.destroy=void 0,l=n;var P=a,Q=A;try{Q()}catch(st){Ve(l,P,st)}}}r=r.next}while(r!==c)}}catch(st){Ve(n,n.return,st)}}function A0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{mg(n,a)}catch(r){Ve(t,t.return,r)}}}function R0(t,n,a){a.props=zr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){Ve(t,n,r)}}function ji(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:var l=t.stateNode,c=ga(t.memoizedProps,l);(l.ref===null||l.ref.name!==c)&&(l.ref=O_(c)),r=l.ref;break;case 7:if(t.stateNode===null){var _=new mi(t);g(t.child,!1,xy,_,void 0,void 0),t.stateNode=_}r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(A){Ve(t,n,A)}}function On(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(l){Ve(t,n,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){Ve(t,n,l)}else a.current=null}function Mu(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var a=0;a<n.length;a++)H_(t.stateNode,n[a])}function C0(t){for(var n=t.return;n!==null&&(md(n)&&H_(t.stateNode,n.stateNode),!pd(n));)n=n.return}function Yo(t){for(var n=t.return;n!==null&&(md(n)&&My(t.stateNode,n.stateNode),!pd(n));)n=n.return}function pd(t){return t.tag===5||t.tag===3||t.tag===27}function md(t){return t&&t.tag===7&&t.stateNode!==null}function gd(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(l){Ve(t,t.return,l)}}function _d(t,n,a){try{var r=t.stateNode;ny(r,t.type,a,n),r[Dn]=n}catch(l){Ve(t,t.return,l)}}function w0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&sr(t.type)||t.tag===4}function vd(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||w0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&sr(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Sd(t,n,a,r){var l=t.tag;if(l===5||l===6)l=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(l,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(l),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ki)),Mu(t,r),se=!0;else if(l!==4&&(l===27&&(Mu(t,r),r=null,sr(t.type)&&(a=t.stateNode,n=null)),t=t.child,t!==null))for(Sd(t,n,a,r),t=t.sibling;t!==null;)Sd(t,n,a,r),t=t.sibling}function yu(t,n,a,r){var l=t.tag;if(l===5||l===6)l=t.stateNode,n?a.insertBefore(l,n):a.appendChild(l),Mu(t,r),se=!0;else if(l!==4&&(l===27&&(Mu(t,r),r=null,sr(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(yu(t,n,a,r),t=t.sibling;t!==null;)yu(t,n,a,r),t=t.sibling}function D0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,l=n.attributes;l.length;)n.removeAttributeNode(l[0]);Pn(n,r,a),n[vn]=t,n[Dn]=a}catch(c){Ve(t,t.return,c)}}var Eu=!1,fi=null;function N0(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(Eu=!0)}var $i=null;function U0(){var t=$i;return $i=null,t}var $n=0;function Ts(t,n,a,r,l){return $n=0,L0(t.child,n,a,r,l)}function L0(t,n,a,r,l){for(var c=!1;t!==null;){if(t.tag===5){var _=t.stateNode;if(r!==null){var A=nh(_);r.push(A),A.view&&(c=!0)}else c||nh(_).view&&(c=!0);Eu=!0,U_(_,$n===0?n:n+"_"+$n,a),$n++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&l||L0(t.child,n,a,r,l)&&(c=!0));t=t.sibling}return c}function ta(t,n){for(;t!==null;)t.tag===5?L_(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||ta(t.child,n)),t=t.sibling}function Tu(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(Tu(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var a=n.name;n=_a(n.default,n.share),n!=="none"&&(Ts(t,a,n,null,!1)||ta(t.child,!1))}t=t.sibling}}function xd(t,n){if(t.tag===30){var a=t.stateNode,r=t.memoizedProps,l=ga(r,a),c=_a(r.default,a.paired?r.share:r.enter);c!=="none"?Ts(t,l,c,null,!1)?(Tu(t),a.paired||n||Us(t,r.onEnter)):ta(t.child,!1):Tu(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)xd(t,n),t=t.sibling;else Tu(t)}function Md(t){if(fi!==null&&fi.size!==0){var n=fi;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,r=a.name;if(r!=null&&r!=="auto"){var l=n.get(r);if(l!==void 0){var c=_a(a.default,a.share);if(c!=="none"&&(Ts(t,r,c,null,!1)?(c=t.stateNode,l.paired=c,c.paired=l,Us(t,a.onShare)):ta(t.child,!1)),n.delete(r),n.size===0)break}}}Md(t)}t=t.sibling}}}function yd(t){if(t.tag===30){var n=t.memoizedProps,a=ga(n,t.stateNode),r=fi!==null?fi.get(a):void 0,l=_a(n.default,r!==void 0?n.share:n.exit);l!=="none"&&(Ts(t,a,l,null,!1)?r!==void 0?(l=t.stateNode,r.paired=l,l.paired=r,fi.delete(a),Us(t,n.onShare)):Us(t,n.onExit):ta(t.child,!1)),fi!==null&&Md(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)yd(t),t=t.sibling;else fi!==null&&Md(t)}function O0(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,a=ga(n,t.stateNode);n=_a(n.default,n.update),t.flags&=-5,n!=="none"&&Ts(t,a,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&O0(t);t=t.sibling}}function Ed(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,ta(t.child,!1))}Ed(t)}t=t.sibling}}function bu(t){if(t.tag===30)t.stateNode.paired=null,ta(t.child,!1),Ed(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)bu(t),t=t.sibling;else Ed(t)}function P0(t){for(t=t.child;t!==null;)t.tag===30?ta(t.child,!1):(t.subtreeFlags&33554432)!==0&&P0(t),t=t.sibling}function Td(t,n,a,r,l,c,_){for(var A=!1;n!==null;){if(n.tag===5){var P=n.stateNode;if(c!==null&&$n<c.length){var Q=c[$n],st=nh(P);(Q.view||st.view)&&(A=!0);var _t;if(_t=(t.flags&4)===0)if(st.clip)_t=!0;else{_t=Q.rect;var Z=st.rect;_t=_t.y!==Z.y||_t.x!==Z.x||_t.height!==Z.height||_t.width!==Z.width}_t&&(t.flags|=4),st.abs?st=!Q.abs:(Q=Q.rect,st=st.rect,st=Q.height!==st.height||Q.width!==st.width),st&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&U_(P,$n===0?a:a+"_"+$n,l),A&&(t.flags&4)!==0||($i===null&&($i=[]),$i.push(P,$n===0?r:r+"_"+$n,n.memoizedProps)),$n++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&_?t.flags|=n.flags&32:Td(t,n.child,a,r,l,c,_)&&(A=!0));n=n.sibling}return A}function I0(t,n){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,r=t.stateNode,l=ga(a,r),c=_a(a.default,a.update),_;_=t.memoizedState,t.memoizedState=null,r=t;var A=t.child;$n=0,l=Td(r,A,l,l,c,_,!1),(t.flags&4)!==0&&l&&Us(t,a.onUpdate)}else(t.subtreeFlags&33554432)!==0&&I0(t);t=t.sibling}}var Tn=!1,ze=!1,ea=!1,bd=!1,z0=typeof WeakSet=="function"?WeakSet:Set,bn=null,na=!1,Zo=!1,Au=!1,Ad=!1;function NM(t,n,a){if(t=t.containerInfo,Jd=Vs,t=Gm(t),df(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var c=l.anchorOffset,_=l.focusNode;l=l.focusOffset;try{r.nodeType,_.nodeType}catch{r=null;break t}var A=0,P=-1,Q=-1,st=0,_t=0,Z=t,rt=null;e:for(;;){for(var zt;Z!==r||c!==0&&Z.nodeType!==3||(P=A+c),Z!==_||l!==0&&Z.nodeType!==3||(Q=A+l),Z.nodeType===3&&(A+=Z.nodeValue.length),(zt=Z.firstChild)!==null;)rt=Z,Z=zt;for(;;){if(Z===t)break e;if(rt===r&&++st===c&&(P=A),rt===_&&++_t===l&&(Q=A),(zt=Z.nextSibling)!==null)break;Z=rt,rt=Z.parentNode}Z=zt}r=P===-1||Q===-1?null:{start:P,end:Q}}else r=null}r=r||{start:0,end:0}}else r=null;for(jd={focusedElem:t,selectionRange:r},Vs=!1,a=(a&335544064)===a,bn=n,n=a?9270:1024;bn!==null;){if(t=bn,a&&(r=t.deletions,r!==null))for(c=0;c<r.length;c++)a&&yd(r[c]);if(t.alternate===null&&(t.flags&2)!==0)a&&N0(t),Ru(a);else{if(t.tag===22){if(r=t.alternate,t.memoizedState!==null){r!==null&&r.memoizedState===null&&a&&yd(r),Ru(a);continue}else if(r!==null&&r.memoizedState!==null){a&&N0(t),Ru(a);continue}}r=t.child,(t.subtreeFlags&n)!==0&&r!==null?(r.return=t,bn=r):(a&&O0(t),Ru(a))}}fi=null}function Ru(t){for(;bn!==null;){var n=bn,a=t,r=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((l&1024)!==0&&r!==null){a=void 0,l=r.memoizedProps,r=r.memoizedState;var c=n.stateNode;try{var _=zr(n.type,l);a=c.getSnapshotBeforeUpdate(_,r),c.__reactInternalSnapshotBeforeUpdate=a}catch(A){Ve(n,n.return,A)}}break;case 3:if((l&1024)!==0){if(r=n.stateNode.containerInfo,a=r.nodeType,a===9)rh(r);else if(a===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":rh(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&r!==null&&(a=ga(r.memoizedProps,r.stateNode),l=n.memoizedProps,l=_a(l.default,l.update),l!=="none"&&Ts(r,a,l,r.memoizedState=[],!0));break;default:if((l&1024)!==0)throw Error(s(163))}if(r=n.sibling,r!==null){r.return=n.return,bn=r;break}bn=n.return}}function B0(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:ia(t,a),r&4&&qo(5,a);break;case 1:if(ia(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){Ve(a,a.return,_)}else{var l=zr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(l,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){Ve(a,a.return,_)}}r&64&&A0(a),r&512&&ji(a,a.return);break;case 3:if(ia(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{mg(t,n)}catch(_){Ve(a,a.return,_)}}break;case 27:n===null&&r&4&&D0(a);case 26:case 5:ia(t,a),n===null&&r&4&&gd(a),r&512&&ji(a,a.return);break;case 12:ia(t,a);break;case 31:ia(t,a),r&4&&V0(t,a);break;case 13:ia(t,a),r&4&&X0(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=XM.bind(null,a),Ty(t,a))));break;case 22:if(r=a.memoizedState!==null||Tn,!r){var c=n!==null&&n.memoizedState!==null||ze;n=Tn,l=ze,Tn=r,(ze=c)&&!l?(r=2,(a.subtreeFlags&8772)!==0&&(r|=1),zi(t,a,r)):ia(t,a),Tn=n,ze=l}break;case 30:ia(t,a),r&512&&ji(a,a.return);break;case 7:r&512&&ji(a,a.return);default:ia(t,a)}}function Rd(t,n){for(t=t.child;t!==null;)F0(t,n),t=t.sibling}function F0(t,n){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(n){var r=a.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var l=t.stateNode,c=t.memoizedProps.style,_=c!=null&&c.hasOwnProperty("display")?c.display:null;l.style.display=_==null||typeof _=="boolean"?"":(""+_).trim()}}catch(P){Ve(t,t.return,P)}Cd(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,se=!0}catch(P){Ve(t,t.return,P)}break;case 18:try{var A=t.stateNode;n?N_(A,!0):N_(t.stateNode,!1)}catch(P){Ve(t,t.return,P)}break;case 22:case 23:t.memoizedState===null&&Rd(t,n);break;default:Rd(t,n)}}function Cd(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var a=t,r=n;switch(a.tag){case 4:F0(a,r);break t;case 22:a.memoizedState===null&&Cd(a,r);break t;default:Cd(a,r)}}t=t.sibling}}function H0(t){var n=t.alternate;n!==null&&(t.alternate=null,H0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Ct(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var $e=null,ti=!1;function Pi(t,n,a){for(a=a.child;a!==null;)G0(t,n,a),a=a.sibling}function G0(t,n,a){if($t&&typeof $t.onCommitFiberUnmount=="function")try{$t.onCommitFiberUnmount(Kt,a)}catch{}switch(a.tag){case 26:ze||On(a,n),Pi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!ze&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ze||On(a,n),Yo(a);var r=$e,l=ti;sr(a.type)&&($e=a.stateNode,ti=!1),Pi(t,n,a),W_(a.stateNode,a.type,a.memoizedProps),$e=r,ti=l;break;case 5:ze||On(a,n),Yo(a);case 6:if(a.tag===6&&Yo(a),r=$e,l=ti,$e=null,Pi(t,n,a),$e=r,ti=l,$e!==null)if(ti)try{($e.nodeType===9?$e.body:$e.nodeName==="HTML"?$e.ownerDocument.body:$e).removeChild(a.stateNode),se=!0}catch(c){Ve(a,n,c)}else try{$e.removeChild(a.stateNode),se=!0}catch(c){Ve(a,n,c)}break;case 18:$e!==null&&(ti?(t=$e,D_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Xs(t)):D_($e,a.stateNode));break;case 4:r=$e,l=ti,$e=a.stateNode.containerInfo,ti=!0,Pi(t,n,a),$e=r,ti=l;break;case 0:case 11:case 14:case 15:$a(2,a,n),ze||$a(4,a,n),Pi(t,n,a);break;case 1:ze||(On(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&R0(a,n,r)),Pi(t,n,a);break;case 21:Pi(t,n,a);break;case 22:ze=(r=ze)||a.memoizedState!==null,Pi(t,n,a),ze=r;break;case 30:On(a,n),Pi(t,n,a);break;case 7:ze||On(a,n),Pi(t,n,a);break;default:Pi(t,n,a)}}function V0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Xs(t)}catch(a){Ve(n,n.return,a)}}}function X0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Xs(t)}catch(a){Ve(n,n.return,a)}}function UM(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new z0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new z0),n;default:throw Error(s(435,t.tag))}}function Cu(t,n){var a=UM(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var l=kM.bind(null,t,r);r.then(l,l)}})}function qn(t,n,a){var r=n.deletions;if(r!==null)for(var l=0;l<r.length;l++){var c=r[l],_=t,A=n,P=A;t:for(;P!==null;){switch(P.tag){case 27:if(sr(P.type)){$e=P.stateNode,ti=!1;break t}break;case 5:$e=P.stateNode,ti=!1;break t;case 3:case 4:$e=P.stateNode.containerInfo,ti=!0;break t}P=P.return}if($e===null)throw Error(s(160));G0(_,A,c),$e=null,ti=!1,_=c.alternate,_!==null&&(_.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)k0(n,t,a),n=n.sibling}var Ii=null;function k0(t,n,a){var r=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(l&4&&(r=t.updateQueue,r=r!==null?r.events:null,r!==null))for(var c=0;c<r.length;c++){var _=r[c];_.ref.impl=_.nextImpl}qn(n,t,a),Yn(t),l&4&&($a(3,t,t.return),qo(3,t),$a(5,t,t.return));break;case 1:qn(n,t,a),Yn(t),l&512&&(ze||r===null||On(r,r.return)),l&64&&Tn&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(c=Ii,qn(n,t,a),Yn(t),l&512&&(ze||r===null||On(r,r.return)),l&4)if(l=r!==null?r.memoizedState:null,a=t.memoizedState,r===null)if(a===null)if(t.stateNode===null)if(Tn)t.stateNode=R_(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,a=t.memoizedProps,l=c.ownerDocument||c;e:switch(n){case"title":r=l.getElementsByTagName("title")[0],(!r||r[Rt]||r[vn]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(n),l.head.insertBefore(r,l.querySelector("head > title"))),Pn(r,n,a),r[vn]=t,Ot(r),n=r;break t;case"link":if(c=J_("link","href",l).get(n+(a.href||""))){for(_=0;_<c.length;_++)if(r=c[_],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(_,1);break e}}r=l.createElement(n),Pn(r,n,a),l.head.appendChild(r);break;case"meta":if(c=J_("meta","content",l).get(n+(a.content||""))){for(_=0;_<c.length;_++)if(r=c[_],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(_,1);break e}}r=l.createElement(n),Pn(r,n,a),l.head.appendChild(r);break;default:throw Error(s(468,n))}r[vn]=t,Ot(r),n=r}t.stateNode=n}else Tn||dh(c,t.type,t.stateNode);else t.stateNode=Q_(c,a,t.memoizedProps);else l!==a?(l===null?(n=r.stateNode,n===null||ze||n.parentNode.removeChild(n)):l.count--,a===null?Tn||dh(c,t.type,t.stateNode):Q_(c,a,t.memoizedProps)):a===null&&t.stateNode!==null&&_d(t,t.memoizedProps,r.memoizedProps);break;case 27:qn(n,t,a),Yn(t),l&512&&(ze||r===null||On(r,r.return)),r!==null&&l&4&&_d(t,t.memoizedProps,r.memoizedProps);break;case 5:if(c=ea,ea=!1,qn(n,t,a),ea=c,Yn(t),l&512&&(ze||r===null||On(r,r.return)),t.flags&32){n=t.stateNode;try{ss(n,""),se=!0}catch(st){Ve(t,t.return,st)}}l&4&&t.stateNode!=null&&(n=t.memoizedProps,_d(t,n,r!==null?r.memoizedProps:n)),l&1024&&(bd=!0);break;case 6:if(qn(n,t,a),Yn(t),l&4){if(t.stateNode===null)throw Error(s(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n,se=!0}catch(st){Ve(t,t.return,st)}}break;case 3:if(se=!1,Xu=null,c=Ii,Ii=il(n.containerInfo),qn(n,t,a),Ii=c,Yn(t),l&4&&r!==null&&r.memoizedState.isDehydrated)try{Xs(n.containerInfo)}catch(st){Ve(t,t.return,st)}bd&&(bd=!1,W0(t)),se=!1;break;case 4:l=ea,ea=Tn,r=yr(),c=Ii,Ii=il(t.stateNode.containerInfo),qn(n,t,a),Yn(t),Ii=c,se&&Zo&&(Au=!0),se=r,ea=l;break;case 12:qn(n,t,a),Yn(t);break;case 31:qn(n,t,a),Yn(t),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Cu(t,n)));break;case 13:qn(n,t,a),Yn(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Nu=dt()),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Cu(t,n)));break;case 22:c=t.memoizedState!==null,_=r!==null&&r.memoizedState!==null;var A=Tn,P=ze,Q=ea;Tn=A||c,ea=Q||c,ze=P||_,qn(n,t,a),ze=P,ea=Q,Tn=A,Yn(t),l&8192&&(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,!c||r===null||_||Tn||ze||(n=_||ze,a=Tn,r=ze,Tn=c||Tn,ze=n,tr(t,2),Tn=a,ze=r),!c&&ea||Rd(t,c)),l&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Cu(t,a))));break;case 19:qn(n,t,a),Yn(t),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Cu(t,n)));break;case 30:l&512&&(ze||r===null||On(r,r.return)),l=yr(),c=Zo,_=(a&335544064)===a,A=t.memoizedProps,Zo=_&&_a(A.default,A.update)!=="none",qn(n,t,a),Yn(t),_&&r!==null&&se&&(t.flags|=4),Zo=c,se=l;break;case 21:break;case 7:l&512&&(ze||r===null||On(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=t);default:qn(n,t,a),Yn(t)}}function Yn(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(w0(r)){a=r;break}r=r.return}r=null;for(var l=t.return;l!==null;){if(md(l)){var c=l.stateNode;r===null?r=[c]:r.push(c)}if(pd(l))break;l=l.return}var _=r;if(a==null)throw Error(s(160));switch(a.tag){case 27:var A=a.stateNode,P=vd(t);yu(t,P,A,_);break;case 5:var Q=a.stateNode;a.flags&32&&(ss(Q,""),a.flags&=-33);var st=vd(t);yu(t,st,Q,_);break;case 3:case 4:var _t=a.stateNode.containerInfo,Z=vd(t);Sd(t,Z,_t,_);break;default:throw Error(s(161))}}catch(rt){Ve(t,t.return,rt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function W0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;W0(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Vs=!0,n.reset(),Vs=!1),t=t.sibling}}function bs(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)q0(n,t),n=n.sibling;else I0(n)}function q0(t,n){var a=t.alternate;if(a===null)xd(t,!1);else switch(t.tag){case 3:if(Ad=na=!1,U0(),bs(n,t),!na&&!Au){if(t=$i,t!==null)for(var r=0;r<t.length;r+=3){a=t[r];var l=t[r+1];L_(a,t[r+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Ad=!0}$i=null;break;case 5:bs(n,t);break;case 4:r=na,na=!1,bs(n,t),na&&(Au=!0),na=r;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?xd(t,!1):bs(n,t));break;case 30:r=na,l=U0(),na=!1,bs(n,t),na&&(t.flags|=4);var c=t.memoizedProps,_=t.stateNode;n=ga(c,_),_=ga(a.memoizedProps,_);var A=_a(c.default,c.update);A==="none"?n=!1:(c=a.memoizedState,a.memoizedState=null,a=t.child,$n=0,n=Td(t,a,n,_,A,c,!0),$n!==(c===null?0:c.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(Us(t,t.memoizedProps.onUpdate),$i=l):l!==null&&(l.push.apply(l,$i),$i=l),na=(t.flags&32)!==0?!0:r;break;default:bs(n,t)}}function ia(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)B0(t,n.alternate,n),n=n.sibling}function tr(t,n){for(t=t.child;t!==null;){var a=t,r=n;switch(a.tag){case 0:case 11:case 14:case 15:$a(4,a,a.return),tr(a,r);break;case 1:On(a,a.return);var l=a.stateNode;typeof l.componentWillUnmount=="function"&&R0(a,a.return,l),tr(a,r);break;case 27:(r&2)!==0&&W_(a.stateNode,a.type,a.memoizedProps);case 5:On(a,a.return),a.tag!==5&&a.tag!==27||Yo(a),tr(a,r);break;case 6:Yo(a);break;case 26:On(a,a.return),l=a.stateNode,a.memoizedState!==null||l===null||ze||l.parentNode.removeChild(l),tr(a,r);break;case 22:a.memoizedState===null&&tr(a,r);break;case 30:On(a,a.return),tr(a,r);break;case 7:On(a,a.return);default:tr(a,r)}t=t.sibling}}function zi(t,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var r=n.alternate,l=t,c=n,_=c.flags,A=(a&1)!==0;switch(c.tag){case 0:case 11:case 15:zi(l,c,a),qo(4,c);break;case 1:if(zi(l,c,a),r=c,l=r.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(st){Ve(r,r.return,st)}if(r=c,l=r.updateQueue,l!==null){var P=r.stateNode;try{var Q=l.shared.hiddenCallbacks;if(Q!==null)for(l.shared.hiddenCallbacks=null,l=0;l<Q.length;l++)pg(Q[l],P)}catch(st){Ve(r,r.return,st)}}A&&_&64&&A0(c),ji(c,c.return);break;case 27:(a&2)!==0&&D0(c);case 5:c.tag!==5&&c.tag!==27||C0(c),zi(l,c,a),A&&r===null&&_&4&&gd(c),ji(c,c.return);break;case 6:C0(c);break;case 26:P=c.stateNode,c.memoizedState!==null||P===null||Tn||dh(il(P.ownerDocument),c.type,P),zi(l,c,a),A&&r===null&&_&4&&gd(c),ji(c,c.return);break;case 12:zi(l,c,a);break;case 31:zi(l,c,a),A&&_&4&&V0(l,c);break;case 13:zi(l,c,a),A&&_&4&&X0(l,c);break;case 22:c.memoizedState===null&&zi(l,c,a),ji(c,c.return);break;case 30:zi(l,c,a),ji(c,c.return);break;case 7:ji(c,c.return);default:zi(l,c,a)}n=n.sibling}}function wd(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Lo(a))}function Dd(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Lo(t))}function Ri(t,n,a,r){var l=(a&335544064)===a;if(n.subtreeFlags&(l?10262:10256))for(n=n.child;n!==null;)Y0(t,n,a,r),n=n.sibling;else l&&P0(n)}function Y0(t,n,a,r){var l=(a&335544064)===a;l&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&bu(n);var c=n.flags;switch(n.tag){case 0:case 11:case 15:Ri(t,n,a,r),c&2048&&qo(9,n);break;case 1:Ri(t,n,a,r);break;case 3:Ri(t,n,a,r),l&&Ad&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),c&2048&&(c=null,n.alternate!==null&&(c=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==c&&(n.refCount++,c!=null&&Lo(c)));break;case 12:if(c&2048){Ri(t,n,a,r),c=n.stateNode;try{var _=n.memoizedProps,A=_.id,P=_.onPostCommit;typeof P=="function"&&P(A,n.alternate===null?"mount":"update",c.passiveEffectDuration,-0)}catch(Q){Ve(n,n.return,Q)}}else Ri(t,n,a,r);break;case 31:Ri(t,n,a,r);break;case 13:Ri(t,n,a,r);break;case 23:break;case 22:_=n.stateNode,A=n.alternate,n.memoizedState!==null?(l&&A!==null&&A.memoizedState===null&&bu(A),_._visibility&2?Ri(t,n,a,r):Ko(t,n)):(l&&A!==null&&A.memoizedState!==null&&bu(n),_._visibility&2?Ri(t,n,a,r):(_._visibility|=2,As(t,n,a,r,(n.subtreeFlags&10256)!==0||!1))),c&2048&&wd(A,n);break;case 24:Ri(t,n,a,r),c&2048&&Dd(n.alternate,n);break;case 30:l&&(c=n.alternate,c!==null&&(ta(c.child,!0),ta(n.child,!0))),Ri(t,n,a,r);break;default:Ri(t,n,a,r)}}function As(t,n,a,r,l){for(l=l&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var c=t,_=n,A=a,P=r,Q=_.flags;switch(_.tag){case 0:case 11:case 15:As(c,_,A,P,l),qo(8,_);break;case 23:break;case 22:var st=_.stateNode;_.memoizedState!==null?st._visibility&2?As(c,_,A,P,l):Ko(c,_):(st._visibility|=2,As(c,_,A,P,l)),l&&Q&2048&&wd(_.alternate,_);break;case 24:As(c,_,A,P,l),l&&Q&2048&&Dd(_.alternate,_);break;default:As(c,_,A,P,l)}n=n.sibling}}function Ko(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,l=r.flags;switch(r.tag){case 22:Ko(a,r),l&2048&&wd(r.alternate,r);break;case 24:Ko(a,r),l&2048&&Dd(r.alternate,r);break;default:Ko(a,r)}n=n.sibling}}var Br=8192;function Fr(t,n,a){if(t.subtreeFlags&Br)for(t=t.child;t!==null;)Z0(t,n,a),t=t.sibling}function Z0(t,n,a){switch(t.tag){case 26:Fr(t,n,a),t.flags&Br&&(t.memoizedState!==null?By(a,Ii,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&ev(a,t)));break;case 5:Fr(t,n,a),t.flags&Br&&(t=t.stateNode,(n&335544128)===n&&ev(a,t));break;case 3:case 4:var r=Ii;Ii=il(t.stateNode.containerInfo),Fr(t,n,a),Ii=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=Br,Br=16777216,Fr(t,n,a),Br=r):Fr(t,n,a));break;case 30:if((t.flags&Br)!==0&&(r=t.memoizedProps.name,r!=null&&r!=="auto")){var l=t.stateNode;l.paired=null,fi===null&&(fi=new Map),fi.set(r,l)}Fr(t,n,a);break;default:Fr(t,n,a)}}function K0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Qo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];bn=r,J0(r,t)}K0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Q0(t),t=t.sibling}function Q0(t){switch(t.tag){case 0:case 11:case 15:Qo(t),t.flags&2048&&$a(9,t,t.return);break;case 3:Qo(t);break;case 12:Qo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,wu(t)):Qo(t);break;default:Qo(t)}}function wu(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];bn=r,J0(r,t)}K0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:$a(8,n,n.return),wu(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,wu(n));break;default:wu(n)}t=t.sibling}}function J0(t,n){for(;bn!==null;){var a=bn;switch(a.tag){case 0:case 11:case 15:$a(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Lo(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,bn=r;else t:for(a=t;bn!==null;){r=bn;var l=r.sibling,c=r.return;if(H0(r),r===a){bn=null;break t}if(l!==null){l.return=c,bn=l;break t}bn=c}}}var LM={getCacheForType:function(t){var n=Nn(hn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Nn(hn).controller.signal}},OM=typeof WeakMap=="function"?WeakMap:Map,Oe=0,Ye=null,Me=null,Ee=0,Ge=0,di=null,er=!1,Rs=!1,Nd=!1,Aa=0,on=0,nr=0,Hr=0,Du=0,hi=0,Cs=0,Jo=null,ei=null,Ud=!1,Nu=0,j0=0,Uu=1/0,Lu=null,ir=null,an=0,Bi=null,Gr=null,aa=0,Ld=0,Od=null,$0=null,ws=null,Ds=null,Ns=null,jo=0,Ou=null;function pi(){return(Oe&2)!==0&&Ee!==0?Ee&-Ee:Mt.T!==null?kd():Mo()}function t_(){if(hi===0)if((Ee&536870912)===0||Se){var t=oi;oi<<=1,(oi&3932160)===0&&(oi=262144),hi=t}else hi=536870912;return t=Un.current,t!==null&&(t.flags|=32),hi}function Us(t,n){if(n!=null){var a=t.stateNode,r=a.ref;r===null&&(r=a.ref=O_(ga(t.memoizedProps,a))),Ds===null&&(Ds=[]),Ds.push(n.bind(null,r))}}function ni(t,n,a){(t===Ye&&(Ge===2||Ge===9)||t.cancelPendingCommit!==null)&&(Ls(t,0),ar(t,Ee,hi,!1)),Ba(t,a),((Oe&2)===0||t!==Ye)&&(t===Ye&&((Oe&2)===0&&(Hr|=a),on===4&&ar(t,Ee,hi,!1)),ra(t))}function e_(t,n,a){if((Oe&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||za(t,n),l=r?zM(t,n):Id(t,n,!0),c=r;do{if(l===0){Rs&&!r&&ar(t,n,0,!1);break}else{if(a=t.current.alternate,c&&!PM(a)){l=Id(t,n,!1),c=!1;continue}if(l===2){if(c=n,t.errorRecoveryDisabledLanes&c)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var A=t;l=Jo;var P=A.current.memoizedState.isDehydrated;if(P&&(Ls(A,_).flags|=256),_=Id(A,_,!1),_!==2&&_!==6){if(Nd&&!P){A.errorRecoveryDisabledLanes|=c,Hr|=c,l=4;break t}c=ei,ei=l,c!==null&&(ei===null?ei=c:ei.push.apply(ei,c))}l=_}if(c=!1,l!==2)continue}}if(l===1){Ls(t,0),ar(t,n,0,!0);break}t:{switch(r=t,c=l,c){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:ar(r,n,hi,!er);break t;case 2:ei=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(l=Nu+300-dt(),10<l)){if(ar(r,n,hi,!er),ts(r,0,!0)!==0)break t;aa=n,r.timeoutHandle=eh(n_.bind(null,r,a,ei,Lu,Ud,n,hi,Hr,Cs,er,c,"Throttled",-0,0),l);break t}n_(r,a,ei,Lu,Ud,n,hi,Hr,Cs,er,c,null,-0,0)}}break}while(!0);ra(t)}function n_(t,n,a,r,l,c,_,A,P,Q,st,_t,Z,rt){t.timeoutHandle=-1;var zt=n.subtreeFlags,Zt=(c&335544064)===c;if(_t=null,(Zt||zt&8192||(zt&16785408)===16785408)&&(_t={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ki},fi=null,Z0(n,c,_t),Zt&&(zt=_t,Zt=t.containerInfo,Zt=(Zt.nodeType===9?Zt:Zt.ownerDocument).__reactViewTransition,Zt!=null&&(zt.count++,zt.waitingForViewTransition=!0,zt=sl.bind(zt),Zt.finished.then(zt,zt))),zt=(c&62914560)===c?Nu-dt():(c&4194048)===c?j0-dt():0,zt=Fy(_t,zt),zt!==null)){aa=c,t.cancelPendingCommit=zt(c_.bind(null,t,n,c,a,r,l,_,A,P,Q,st,_t,null,Z,rt)),ar(t,c,_,!Q);return}c_(t,n,c,a,r,l,_,A,P,Q,st,_t)}function PM(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var l=a[r],c=l.getSnapshot;l=l.value;try{if(!ui(c(),l))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ar(t,n,a,r){n=_o(t,n),n&=~Du,n&=~Hr,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var l=n;0<l;){var c=31-kt(l),_=1<<c;r[c]=-1,l&=~_}a!==0&&vo(t,a,n)}function Pu(){return(Oe&6)===0?($o(0),!1):!0}function Pd(){if(Me!==null){if(Ge===0)var t=Me.return;else t=Me,xa=Cr=null,Xf(t),Ss=null,Io=0,t=Me;for(;t!==null;)b0(t.alternate,t),t=t.return;Me=null}}function Ls(t,n){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,ry(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),aa=0,Pd(),Ye=t,Me=a=va(t.current,null),Ee=n,Ge=0,di=null,er=!1,Rs=za(t,n),Nd=!1,Cs=hi=Du=Hr=nr=on=0,ei=Jo=null,Ud=!1,Aa=_o(t,n),Xl(),a}function i_(t,n){pe=null,Mt.H=pu,n===vs||n===tu?(n=cg(),Ge=3):n===Df?(n=cg(),Ge=4):Ge=n===ad?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,di=n,Me===null&&(on=1,mu(t,Ei(n,t.current)))}function a_(){var t=Un.current;return t===null?!0:(Ee&4194048)===Ee?Hn===null:(Ee&62914560)===Ee||(Ee&536870912)!==0?t===Hn:!1}function r_(){var t=Mt.H;return Mt.H=pu,t===null?pu:t}function s_(){var t=Mt.A;return Mt.A=LM,t}function Iu(){on=4,er||(Ee&4194048)!==Ee&&Un.current!==null||(Rs=!0),(nr&134217727)===0&&(Hr&134217727)===0||Ye===null||ar(Ye,Ee,hi,!1)}function Id(t,n,a){var r=Oe;Oe|=2;var l=r_(),c=s_();(Ye!==t||Ee!==n)&&(Lu=null,Ls(t,n)),n=!1;var _=on;t:do try{if(Ge!==0&&Me!==null){var A=Me,P=di;switch(Ge){case 8:Pd(),_=6;break t;case 3:case 2:case 9:case 6:Un.current===null&&(n=!0);var Q=Ge;if(Ge=0,di=null,Os(t,A,P,Q),a&&Rs){_=0;break t}break;default:Q=Ge,Ge=0,di=null,Os(t,A,P,Q)}}IM(),_=on;break}catch(st){i_(t,st)}while(!0);return n&&t.shellSuspendCounter++,xa=Cr=null,Oe=r,Mt.H=l,Mt.A=c,Me===null&&(Ye=null,Ee=0,Xl()),_}function IM(){for(;Me!==null;)o_(Me)}function zM(t,n){var a=Oe;Oe|=2;var r=r_(),l=s_();Ye!==t||Ee!==n?(Lu=null,Uu=dt()+500,Ls(t,n)):Rs=za(t,n);t:do try{if(Ge!==0&&Me!==null){n=Me;var c=di;e:switch(Ge){case 1:Ge=0,di=null,Os(t,n,c,1);break;case 2:case 9:if(lg(c)){Ge=0,di=null,l_(n);break}n=function(){Ge!==2&&Ge!==9||Ye!==t||(Ge=7),ra(t)},c.then(n,n);break t;case 3:Ge=7;break t;case 4:Ge=5;break t;case 7:lg(c)?(Ge=0,di=null,l_(n)):(Ge=0,di=null,Os(t,n,c,7));break;case 5:var _=null;switch(Me.tag){case 26:_=Me.memoizedState;case 5:case 27:var A=Me;if(_?$_(_):A.stateNode.complete){Ge=0,di=null;var P=A.sibling;if(P!==null)Me=P;else{var Q=A.return;Q!==null?(Me=Q,zu(Q)):Me=null}break e}}Ge=0,di=null,Os(t,n,c,5);break;case 6:Ge=0,di=null,Os(t,n,c,6);break;case 8:Pd(),on=6;break t;default:throw Error(s(462))}}BM();break}catch(st){i_(t,st)}while(!0);return xa=Cr=null,Mt.H=r,Mt.A=l,Oe=a,Me!==null?0:(Ye=null,Ee=0,Xl(),on)}function BM(){for(;Me!==null&&!wt();)o_(Me)}function o_(t){var n=E0(t.alternate,t,Aa);t.memoizedProps=t.pendingProps,n===null?zu(t):Me=n}function l_(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=g0(a,n,n.pendingProps,n.type,void 0,Ee);break;case 11:n=g0(a,n,n.pendingProps,n.type.render,n.ref,Ee);break;case 5:Xf(n);var r=n;r===En&&(Se?(Kl(r),r.tag===5&&r.stateNode!=null&&(Ze=r.stateNode)):(Kl(r),Se=!0));default:b0(a,n),n=Me=Jm(n,Aa),n=E0(a,n,Aa)}t.memoizedProps=t.pendingProps,n===null?zu(t):Me=n}function Os(t,n,a,r){xa=Cr=null,Xf(n),Ss=null,Io=0;var l=n.return;try{if(bM(t,l,n,a,Ee)){on=1,mu(t,Ei(a,t.current)),Me=null;return}}catch(c){if(l!==null)throw Me=l,c;on=1,mu(t,Ei(a,t.current)),Me=null;return}n.flags&32768?(Se||r===1?t=!0:Rs||(Ee&536870912)!==0?t=!1:(er=t=!0,(r===2||r===9||r===3||r===6)&&(r=Un.current,r!==null&&r.tag===13&&(r.flags|=16384))),u_(n,t)):zu(n)}function zu(t){var n=t;do{if((n.flags&32768)!==0){u_(n,er);return}t=n.return;var a=wM(n.alternate,n,Aa);if(a!==null){Me=a;return}if(n=n.sibling,n!==null){Me=n;return}Me=n=t}while(n!==null);on===0&&(on=5)}function u_(t,n){do{var a=DM(t.alternate,t);if(a!==null){a.flags&=32767,Me=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Me=t;return}Me=t=a}while(t!==null);on=6,Me=null}function c_(t,n,a,r,l,c,_,A,P,Q,st,_t){t.cancelPendingCommit=null;do Bu();while(an!==0);if((Oe&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));t===Ye&&(Me=Ye=null,Ee=0),Gr=n,Bi=t,aa=a,Od=l,$0=r,FM(t,n,a,_,A,P,_t)}}function FM(t,n,a,r,l,c,_){var A=n.lanes|n.childLanes;if(Ld=A,A|=_f,is(t,a,A,r,l,c),Ds=null,(a&335544064)===a?(Ns=hM(t),r=10262):(Ns=null,r=10256),(n.subtreeFlags&r)!==0||(n.flags&r)!==0?(t.callbackNode=null,t.callbackPriority=0,WM(pt,function(){return Hd(),null})):(t.callbackNode=null,t.callbackPriority=0),Eu=!1,r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=Mt.T,Mt.T=null,l=Ht.p,Ht.p=2,c=Oe,Oe|=4;try{NM(t,n,a)}finally{Oe=c,Ht.p=l,Mt.T=r}}an=1,Eu?ws=fy(_,t.containerInfo,Ns,zd,Bd,GM,Fd,Hd,HM):(zd(),Bd(),Fd())}function HM(t){if(an!==0){var n=Bi.onRecoverableError;n(t,{componentStack:null})}}function GM(){an===3&&(an=0,q0(Gr,Bi),an=4)}function zd(){if(an===1){an=0;var t=Bi,n=Gr,a=aa,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=Mt.T,Mt.T=null;var l=Ht.p;Ht.p=2;var c=Oe;Oe|=4;try{Zo=Au=!1,k0(n,t,a),a=jd;var _=Gm(t.containerInfo),A=a.focusedElem,P=a.selectionRange;if(_!==A&&A&&A.ownerDocument&&Hm(A.ownerDocument.documentElement,A)){if(P!==null&&df(A)){var Q=P.start,st=P.end;if(st===void 0&&(st=Q),"selectionStart"in A)A.selectionStart=Q,A.selectionEnd=Math.min(st,A.value.length);else{var _t=A.ownerDocument||document,Z=_t&&_t.defaultView||window;if(Z.getSelection){var rt=Z.getSelection(),zt=A.textContent.length,Zt=Math.min(P.start,zt),me=P.end===void 0?Zt:Math.min(P.end,zt);!rt.extend&&Zt>me&&(_=me,me=Zt,Zt=_);var K=Fm(A,Zt),V=Fm(A,me);if(K&&V&&(rt.rangeCount!==1||rt.anchorNode!==K.node||rt.anchorOffset!==K.offset||rt.focusNode!==V.node||rt.focusOffset!==V.offset)){var j=_t.createRange();j.setStart(K.node,K.offset),rt.removeAllRanges(),Zt>me?(rt.addRange(j),rt.extend(V.node,V.offset)):(j.setEnd(V.node,V.offset),rt.addRange(j))}}}}for(_t=[],rt=A;rt=rt.parentNode;)rt.nodeType===1&&_t.push({element:rt,left:rt.scrollLeft,top:rt.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<_t.length;A++){var gt=_t[A];gt.element.scrollLeft=gt.left,gt.element.scrollTop=gt.top}}Vs=!!Jd,jd=Jd=null}finally{Oe=c,Ht.p=l,Mt.T=r}}t.current=n,an=2}}function Bd(){if(an===2){an=0;var t=Bi,n=Gr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=Mt.T,Mt.T=null;var r=Ht.p;Ht.p=2;var l=Oe;Oe|=4;try{B0(t,n.alternate,n)}finally{Oe=l,Ht.p=r,Mt.T=a}}an=3}}function Fd(){if(an===4||an===3){an=0;var t=ws;ws=null,Lt();var n=Bi,a=Gr,r=aa,l=$0,c=(r&335544064)===r?10262:10256;if((a.subtreeFlags&c)!==0||(a.flags&c)!==0?an=5:(an=0,Gr=Bi=null,f_(n,n.pendingLanes)),c=n.pendingLanes,c===0&&(ir=null),as(r),a=a.stateNode,$t&&typeof $t.onCommitFiberRoot=="function")try{$t.onCommitFiberRoot(Kt,a,void 0,(a.current.flags&128)===128)}catch{}if(l!==null){a=Mt.T,c=Ht.p,Ht.p=2,Mt.T=null;try{for(var _=n.onRecoverableError,A=0;A<l.length;A++){var P=l[A];_(P.value,{componentStack:P.stack})}}finally{Mt.T=a,Ht.p=c}}if(l=Ds,_=Ns,Ns=null,l!==null&&(Ds=null,_===null&&(_=[]),t!==null))for(P=0;P<l.length;P++)a=(0,l[P])(_),a!==void 0&&t.finished.finally(a);(aa&3)!==0&&Bu(),ra(n),c=n.pendingLanes,(r&261930)!==0&&(c&42)!==0?n===Ou?jo++:(jo=0,Ou=n):(jo=0,Ou=null),$o(0)}}function f_(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Lo(n)))}function Bu(){return ws!==null&&(ws.skipTransition(),ws=null),zd(),Bd(),Fd(),Hd()}function Hd(){if(an!==5)return!1;var t=Bi,n=Ld;Ld=0;var a=as(aa),r=Mt.T,l=Ht.p;try{Ht.p=32>a?32:a,Mt.T=null,a=Od,Od=null;var c=Bi,_=aa;if(an=0,Gr=Bi=null,aa=0,(Oe&6)!==0)throw Error(s(331));var A=Oe;if(Oe|=4,Q0(c.current),Y0(c,c.current,_,a),Oe=A,$o(0,!1),$t&&typeof $t.onPostCommitFiberRoot=="function")try{$t.onPostCommitFiberRoot(Kt,c)}catch{}return!0}finally{Ht.p=l,Mt.T=r,f_(t,n)}}function d_(t,n,a){n=Ei(a,n),n=id(t.stateNode,n,2),t=Ka(t,n,2),t!==null&&(Ba(t,2),ra(t))}function Ve(t,n,a){if(t.tag===3)d_(t,t,a);else for(;n!==null;){if(n.tag===3){d_(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ir===null||!ir.has(r))){t=Ei(a,t),a=l0(2),r=Ka(n,a,2),r!==null&&(u0(a,r,n,t),Ba(r,2),ra(r));break}}n=n.return}}function Gd(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new OM;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(a)||(Nd=!0,l.add(a),t=VM.bind(null,t,n,a),n.then(t,t))}function VM(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ye===t&&(Ee&a)===a&&((on===4||on===3&&(Ee&62914560)===Ee&&300>dt()-Nu)&&(Oe&2)===0?Ls(t,0):Du|=a,Cs===Ee&&(Cs=0)),ra(t)}function h_(t,n){n===0&&(n=es()),t=br(t,n),t!==null&&(Ba(t,n),ra(t))}function XM(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),h_(t,a)}function kM(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,l=t.memoizedState;l!==null&&(a=l.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),h_(t,a)}function WM(t,n){return bt(t,n)}var Ps=null,Is=null,Vd=!1,Fu=!1,Xd=!1,rr=0;function ra(t){t!==Is&&t.next===null&&(Is===null?Ps=Is=t:Is=Is.next=t),Fu=!0,Vd||(Vd=!0,YM())}function $o(t,n){if(!Xd&&Fu){Xd=!0;do for(var a=!1,r=Ps;r!==null;){if(t!==0){var l=r.pendingLanes;if(l===0)var c=0;else{var _=r.suspendedLanes,A=r.pingedLanes;c=(1<<31-kt(42|t)+1)-1,c&=l&~(_&~A),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(a=!0,__(r,c))}else c=Ee,c=ts(r,r===Ye?c:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(c&3)===0||za(r,c)||(a=!0,__(r,c));r=r.next}while(a);Xd=!1}}function qM(){p_()}function p_(){Fu=Vd=!1;var t=0;rr!==0&&ay()&&(t=rr);for(var n=dt(),a=null,r=Ps;r!==null;){var l=r.next,c=m_(r,n);c===0?(r.next=null,a===null?Ps=l:a.next=l,l===null&&(Is=a)):(a=r,(t!==0||(c&3)!==0)&&(Fu=!0)),r=l}an!==0&&an!==5||$o(t),rr!==0&&(rr=0)}function m_(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,l=t.expirationTimes,c=t.pendingLanes&-62914561;0<c;){var _=31-kt(c),A=1<<_,P=l[_];P===-1?((A&a)===0||(A&r)!==0)&&(l[_]=ha(A,n)):P<=n&&(t.expiredLanes|=A),c&=~A}if(n=Ye,a=Ee,a=ts(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(Ge===2||Ge===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&vt(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||za(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&vt(r),as(a)){case 2:case 8:a=B;break;case 32:a=pt;break;case 268435456:a=Nt;break;default:a=pt}return r=g_.bind(null,t),a=bt(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&vt(r),t.callbackPriority=2,t.callbackNode=null,2}function g_(t,n){if(an!==0&&an!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Bu()&&t.callbackNode!==a)return null;var r=Ee;return r=ts(t,t===Ye?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(e_(t,r,n),m_(t,dt()),t.callbackNode!=null&&t.callbackNode===a?g_.bind(null,t):null)}function __(t,n){if(Bu())return null;e_(t,n,!0)}function YM(){sy(function(){(Oe&6)!==0?bt(Dt,qM):p_()})}function kd(){if(rr===0){var t=Nr;t===0&&(t=tn,tn<<=1,(tn&261888)===0&&(tn=256)),rr=t}return rr}function v_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Pl(t)}function ZM(t,n,a,r,l){if(n==="submit"&&a&&a.stateNode===l){var c=v_((l[Dn]||null).action),_=r.submitter;_&&(n=(n=_[Dn]||null)?v_(n.formAction):_.getAttribute("formAction"),n!==null&&(c=n,_=null));var A=new Fl("action","action",null,r,l);t.push({event:A,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(rr!==0){var P=new FormData(l,_);jf(a,{pending:!0,data:P,method:l.method,action:c},null,P)}}else typeof c=="function"&&(A.preventDefault(),P=new FormData(l,_),jf(a,{pending:!0,data:P,method:l.method,action:c},c,P))},currentTarget:l}]})}}for(var Wd=0;Wd<gf.length;Wd++){var qd=gf[Wd],KM=qd.toLowerCase(),QM=qd[0].toUpperCase()+qd.slice(1);Oi(KM,"on"+QM)}Oi(km,"onAnimationEnd"),Oi(Wm,"onAnimationIteration"),Oi(qm,"onAnimationStart"),Oi("dblclick","onDoubleClick"),Oi("focusin","onFocus"),Oi("focusout","onBlur"),Oi(rM,"onTransitionRun"),Oi(sM,"onTransitionStart"),Oi(oM,"onTransitionCancel"),Oi(Ym,"onTransitionEnd"),nn("onMouseEnter",["mouseout","mouseover"]),nn("onMouseLeave",["mouseout","mouseover"]),nn("onPointerEnter",["pointerout","pointerover"]),nn("onPointerLeave",["pointerout","pointerover"]),Re("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Re("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Re("onBeforeInput",["compositionend","keypress","textInput","paste"]),Re("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Re("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Re("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var tl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),JM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(tl));function S_(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],l=r.event;r=r.listeners;t:{var c=void 0;if(n)for(var _=r.length-1;0<=_;_--){var A=r[_],P=A.instance,Q=A.currentTarget;if(A=A.listener,P!==c&&l.isPropagationStopped())break t;c=A,l.currentTarget=Q;try{c(l)}catch(st){Vl(st)}l.currentTarget=null,c=P}else for(_=0;_<r.length;_++){if(A=r[_],P=A.instance,Q=A.currentTarget,A=A.listener,P!==c&&l.isPropagationStopped())break t;c=A,l.currentTarget=Q;try{c(l)}catch(st){Vl(st)}l.currentTarget=null,c=P}}}}function ye(t,n){var a=n[G];a===void 0&&(a=n[G]=new Set);var r=t+"__bubble";a.has(r)||(x_(n,t,2,!1),a.add(r))}function Yd(t,n,a){var r=0;n&&(r|=4),x_(a,t,r,n)}var Hu="_reactListening"+Math.random().toString(36).slice(2);function Zd(t){if(!t[Hu]){t[Hu]=!0,en.forEach(function(a){a!=="selectionchange"&&(JM.has(a)||Yd(a,!1,t),Yd(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Hu]||(n[Hu]=!0,Yd("selectionchange",!1,n))}}function x_(t,n,a,r){switch(uv(n)){case 2:var l=Xy;break;case 8:l=ky;break;default:l=ph}a=l.bind(null,n,a,t),l=void 0,!ef||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?t.addEventListener(n,a,{capture:!0,passive:l}):t.addEventListener(n,a,!0):l!==void 0?t.addEventListener(n,a,{passive:l}):t.addEventListener(n,a,!1)}function Kd(t,n,a,r,l){var c=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var _=r.tag;if(_===3||_===4){var A=r.stateNode.containerInfo;if(A===l)break;if(_===4)for(_=r.return;_!==null;){var P=_.tag;if((P===3||P===4)&&_.stateNode.containerInfo===l)return;_=_.return}for(;A!==null;){if(_=It(A),_===null)return;if(P=_.tag,P===5||P===6||P===26||P===27){r=c=_;continue t}A=A.parentNode}}r=r.return}xm(function(){var Q=c,st=$c(a),_t=[];t:{var Z=Zm.get(t);if(Z!==void 0){var rt=Fl,zt=t;switch(t){case"keypress":if(zl(a)===0)break t;case"keydown":case"keyup":rt=Px;break;case"focusin":zt="focus",rt=sf;break;case"focusout":zt="blur",rt=sf;break;case"beforeblur":case"afterblur":rt=sf;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":rt=Em;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":rt=Ex;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":rt=Hx;break;case km:case Wm:case qm:rt=Ax;break;case Ym:rt=Vx;break;case"scroll":case"scrollend":rt=Mx;break;case"wheel":rt=kx;break;case"copy":case"cut":case"paste":rt=Cx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":rt=bm;break;case"submit":rt=Bx;break;case"toggle":case"beforetoggle":rt=qx}var Zt=(n&4)!==0,me=!Zt&&(t==="scroll"||t==="scrollend"),K=Zt?Z!==null?Z+"Capture":null:Z;Zt=[];for(var V=Q,j;V!==null;){var gt=V;if(j=gt.stateNode,gt=gt.tag,gt!==5&&gt!==26&&gt!==27||j===null||K===null||(gt=yo(V,K),gt!=null&&Zt.push(el(V,gt,j))),me)break;V=V.return}0<Zt.length&&(Z=new rt(Z,zt,null,a,st),_t.push({event:Z,listeners:Zt}))}}if((n&7)===0){t:{if(rt=t==="mouseover"||t==="pointerover",Z=t==="mouseout"||t==="pointerout",rt&&a!==jc&&(zt=a.relatedTarget||a.fromElement)&&(It(zt)||zt[R]))break t;(Z||rt)&&(zt=st.window===st?st:(rt=st.ownerDocument)?rt.defaultView||rt.parentWindow:window,Z?(rt=a.relatedTarget||a.toElement,Z=Q,rt=rt?It(rt):null,rt!==null&&(me=f(rt),Zt=rt.tag,rt!==me||Zt!==5&&Zt!==27&&Zt!==6)&&(rt=null)):(Z=null,rt=Q),Z!==rt&&(Zt=Em,gt="onMouseLeave",K="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(Zt=bm,gt="onPointerLeave",K="onPointerEnter",V="pointer"),me=Z==null?zt:ie(Z),j=rt==null?zt:ie(rt),zt=new Zt(gt,V+"leave",Z,a,st),zt.target=me,zt.relatedTarget=j,gt=null,It(st)===Q&&(Zt=new Zt(K,V+"enter",rt,a,st),Zt.target=j,Zt.relatedTarget=me,gt=Zt),me=gt,Zt=Z&&rt?O(Z,rt,jM):null,Z!==null&&M_(_t,zt,Z,Zt,!1),rt!==null&&me!==null&&M_(_t,me,rt,Zt,!0)))}t:{if(Z=Q?ie(Q):window,rt=Z.nodeName&&Z.nodeName.toLowerCase(),rt==="select"||rt==="input"&&Z.type==="file")var Wt=Lm;else if(Nm(Z))if(Om)Wt=nM;else{Wt=tM;var Te=$x}else rt=Z.nodeName,!rt||rt.toLowerCase()!=="input"||Z.type!=="checkbox"&&Z.type!=="radio"?Q&&Jc(Q.elementType)&&(Wt=Lm):Wt=eM;if(Wt&&(Wt=Wt(t,Q))){Um(_t,Wt,a,st);break t}Te&&Te(t,Z,Q)}switch(Te=Q?ie(Q):window,t){case"focusin":(Nm(Te)||Te.contentEditable==="true")&&(cs=Te,hf=Q,Do=null);break;case"focusout":Do=hf=cs=null;break;case"mousedown":pf=!0;break;case"contextmenu":case"mouseup":case"dragend":pf=!1,Vm(_t,a,st);break;case"selectionchange":if(aM)break;case"keydown":case"keyup":Vm(_t,a,st)}var Jt;if(lf)t:{switch(t){case"compositionstart":var ae="onCompositionStart";break t;case"compositionend":ae="onCompositionEnd";break t;case"compositionupdate":ae="onCompositionUpdate";break t}ae=void 0}else us?wm(t,a)&&(ae="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ae="onCompositionStart");ae&&(Am&&a.locale!=="ko"&&(us||ae!=="onCompositionStart"?ae==="onCompositionEnd"&&us&&(Jt=Mm()):(Ha=st,nf="value"in Ha?Ha.value:Ha.textContent,us=!0)),Te=Gu(Q,ae),0<Te.length&&(ae=new Tm(ae,t,null,a,st),_t.push({event:ae,listeners:Te}),Jt?ae.data=Jt:(Jt=Dm(a),Jt!==null&&(ae.data=Jt)))),(Jt=Zx?Kx(t,a):Qx(t,a))&&(ae=Gu(Q,"onBeforeInput"),0<ae.length&&(Te=new Tm("onBeforeInput","beforeinput",null,a,st),_t.push({event:Te,listeners:ae}),Te.data=Jt)),ZM(_t,t,Q,a,st)}S_(_t,n)})}function el(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Gu(t,n){for(var a=n+"Capture",r=[];t!==null;){var l=t,c=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||c===null||(l=yo(t,a),l!=null&&r.unshift(el(t,l,c)),l=yo(t,n),l!=null&&r.push(el(t,l,c))),t.tag===3)return r;t=t.return}return[]}function jM(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function M_(t,n,a,r,l){for(var c=n._reactName,_=[];a!==null&&a!==r;){var A=a,P=A.alternate,Q=A.stateNode;if(A=A.tag,P!==null&&P===r)break;A!==5&&A!==26&&A!==27||Q===null||(P=Q,l?(Q=yo(a,c),Q!=null&&_.unshift(el(a,Q,P))):l||(Q=yo(a,c),Q!=null&&_.push(el(a,Q,P)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var $M=/\r\n?/g,ty=/\u0000|\uFFFD/g;function y_(t){return(typeof t=="string"?t:""+t).replace($M,`
`).replace(ty,"")}function E_(t,n){return n=y_(n),y_(t)===n}function Xe(t,n,a,r,l,c){switch(a){case"children":if(typeof r=="string")n==="body"||n==="textarea"&&r===""||ss(t,r);else if(typeof r=="number"||typeof r=="bigint")n!=="body"&&ss(t,""+r);else return;break;case"className":Si(t,"class",r);break;case"tabIndex":Si(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Si(t,a,r);break;case"style":vm(t,r,c);return;case"data":if(n!=="object"){Si(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Pl(r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(a==="formAction"?(n!=="input"&&Xe(t,n,"name",l.name,l,null),Xe(t,n,"formEncType",l.formEncType,l,null),Xe(t,n,"formMethod",l.formMethod,l,null),Xe(t,n,"formTarget",l.formTarget,l,null)):(Xe(t,n,"encType",l.encType,l,null),Xe(t,n,"method",l.method,l,null),Xe(t,n,"target",l.target,l,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Pl(r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=Ki);return;case"onScroll":r!=null&&ye("scroll",t);return;case"onScrollEnd":r!=null&&ye("scrollend",t);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(l.children!=null)throw Error(s(60));(c!=null?c.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=Pl(r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":ye("beforetoggle",t),ye("toggle",t),li(t,"popover",r);break;case"xlinkActuate":he(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":he(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":he(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":he(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":he(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":he(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":he(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":he(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":he(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":li(t,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=Sx.get(a)||a,li(t,a,r);else return}se=!0}function Qd(t,n,a,r,l,c){switch(a){case"style":vm(t,r,c);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(l.children!=null)throw Error(s(60));(c!=null?c.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"children":if(typeof r=="string")ss(t,r);else if(typeof r=="number"||typeof r=="bigint")ss(t,""+r);else return;break;case"onScroll":r!=null&&ye("scroll",t);return;case"onScrollEnd":r!=null&&ye("scrollend",t);return;case"onClick":r!=null&&(t.onclick=Ki);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!He.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),c=a.slice(2,l?a.length-7:void 0),n=t[Dn]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(c,n,l),typeof r=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(c,r,l);break t}se=!0,a in t?t[a]=r:r===!0?t.setAttribute(a,""):li(t,a,r)}return}se=!0}function Pn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ye("error",t),ye("load",t);var r=!1,l=!1,c;for(c in a)if(a.hasOwnProperty(c)){var _=a[c];if(_!=null)switch(c){case"src":r=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xe(t,n,c,_,a,null)}}l&&Xe(t,n,"srcSet",a.srcSet,a,null),r&&Xe(t,n,"src",a.src,a,null);return;case"input":ye("invalid",t);var A=c=_=l=null,P=null,Q=null;for(r in a)if(a.hasOwnProperty(r)){var st=a[r];if(st!=null)switch(r){case"name":l=st;break;case"type":_=st;break;case"checked":P=st;break;case"defaultChecked":Q=st;break;case"value":c=st;break;case"defaultValue":A=st;break;case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(s(137,n));break;default:Xe(t,n,r,st,a,null)}}pm(t,c,A,P,Q,_,l,!1);return;case"select":ye("invalid",t),r=_=c=null;for(l in a)if(a.hasOwnProperty(l)&&(A=a[l],A!=null))switch(l){case"value":c=A;break;case"defaultValue":_=A;break;case"multiple":r=A;default:Xe(t,n,l,A,a,null)}n=c,a=_,t.multiple=!!r,n!=null?rs(t,!!r,n,!1):a!=null&&rs(t,!!r,a,!0);return;case"textarea":ye("invalid",t),c=l=r=null;for(_ in a)if(a.hasOwnProperty(_)&&(A=a[_],A!=null))switch(_){case"value":r=A;break;case"defaultValue":l=A;break;case"children":c=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:Xe(t,n,_,A,a,null)}gm(t,r,l,c);return;case"option":for(P in a)if(a.hasOwnProperty(P)&&(r=a[P],r!=null))switch(P){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Xe(t,n,P,r,a,null)}return;case"dialog":ye("beforetoggle",t),ye("toggle",t),ye("cancel",t),ye("close",t);break;case"iframe":case"object":ye("load",t);break;case"video":case"audio":for(r=0;r<tl.length;r++)ye(tl[r],t);break;case"image":ye("error",t),ye("load",t);break;case"details":ye("toggle",t);break;case"embed":case"source":case"link":ye("error",t),ye("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in a)if(a.hasOwnProperty(Q)&&(r=a[Q],r!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xe(t,n,Q,r,a,null)}return;default:if(Jc(n)){for(st in a)a.hasOwnProperty(st)&&(r=a[st],r!==void 0&&Qd(t,n,st,r,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(r=a[A],r!=null&&Xe(t,n,A,r,a,null))}var ey={};function ny(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,c=null,_=null,A=null,P=null,Q=null,st=null;for(rt in a){var _t=a[rt];if(a.hasOwnProperty(rt)&&_t!=null)switch(rt){case"checked":break;case"value":break;case"defaultValue":P=_t;default:r.hasOwnProperty(rt)||Xe(t,n,rt,null,r,_t)}}for(var Z in r){var rt=r[Z];if(_t=a[Z],r.hasOwnProperty(Z)&&(rt!=null||_t!=null))switch(Z){case"type":rt!==_t&&(se=!0),c=rt;break;case"name":rt!==_t&&(se=!0),l=rt;break;case"checked":rt!==_t&&(se=!0),Q=rt;break;case"defaultChecked":rt!==_t&&(se=!0),st=rt;break;case"value":rt!==_t&&(se=!0),_=rt;break;case"defaultValue":rt!==_t&&(se=!0),A=rt;break;case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(s(137,n));break;default:rt!==_t&&Xe(t,n,Z,rt,r,_t)}}Kc(t,_,A,P,Q,st,c,l);return;case"select":rt=_=A=Z=null;for(c in a)if(P=a[c],a.hasOwnProperty(c)&&P!=null)switch(c){case"value":break;case"multiple":rt=P;default:r.hasOwnProperty(c)||Xe(t,n,c,null,r,P)}for(l in r)if(c=r[l],P=a[l],r.hasOwnProperty(l)&&(c!=null||P!=null))switch(l){case"value":c!==P&&(se=!0),Z=c;break;case"defaultValue":c!==P&&(se=!0),A=c;break;case"multiple":c!==P&&(se=!0),_=c;default:c!==P&&Xe(t,n,l,c,r,P)}n=A,a=_,r=rt,Z!=null?rs(t,!!a,Z,!1):!!r!=!!a&&(n!=null?rs(t,!!a,n,!0):rs(t,!!a,a?[]:"",!1));return;case"textarea":rt=Z=null;for(A in a)if(l=a[A],a.hasOwnProperty(A)&&l!=null&&!r.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Xe(t,n,A,null,r,l)}for(_ in r)if(l=r[_],c=a[_],r.hasOwnProperty(_)&&(l!=null||c!=null))switch(_){case"value":l!==c&&(se=!0),Z=l;break;case"defaultValue":l!==c&&(se=!0),rt=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(s(91));break;default:l!==c&&Xe(t,n,_,l,r,c)}mm(t,Z,rt);return;case"option":for(var zt in a)if(Z=a[zt],a.hasOwnProperty(zt)&&Z!=null&&!r.hasOwnProperty(zt))switch(zt){case"selected":t.selected=!1;break;default:Xe(t,n,zt,null,r,Z)}for(P in r)if(Z=r[P],rt=a[P],r.hasOwnProperty(P)&&Z!==rt&&(Z!=null||rt!=null))switch(P){case"selected":Z!==rt&&(se=!0),t.selected=Z&&typeof Z!="function"&&typeof Z!="symbol";break;default:Xe(t,n,P,Z,r,rt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Zt in a)Z=a[Zt],a.hasOwnProperty(Zt)&&Z!=null&&!r.hasOwnProperty(Zt)&&Xe(t,n,Zt,null,r,Z);for(Q in r)if(Z=r[Q],rt=a[Q],r.hasOwnProperty(Q)&&Z!==rt&&(Z!=null||rt!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(s(137,n));break;default:Xe(t,n,Q,Z,r,rt)}return;default:if(Jc(n)){for(var me in a)Z=a[me],a.hasOwnProperty(me)&&Z!==void 0&&!r.hasOwnProperty(me)&&Qd(t,n,me,void 0,r,Z);for(st in r)Z=r[st],rt=a[st],!r.hasOwnProperty(st)||Z===rt||Z===void 0&&rt===void 0||Qd(t,n,st,Z,r,rt);return}}for(var K in a)Z=a[K],a.hasOwnProperty(K)&&Z!=null&&!r.hasOwnProperty(K)&&Xe(t,n,K,null,r,Z);for(_t in r)Z=r[_t],rt=a[_t],!r.hasOwnProperty(_t)||Z===rt||Z==null&&rt==null||Xe(t,n,_t,Z,r,rt)}function T_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function iy(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var l=a[r],c=l.transferSize,_=l.initiatorType,A=l.duration;if(c&&A&&T_(_)){for(_=0,A=l.responseEnd,r+=1;r<a.length;r++){var P=a[r],Q=P.startTime;if(Q>A)break;var st=P.transferSize,_t=P.initiatorType;st&&T_(_t)&&(P=P.responseEnd,_+=st*(P<A?1:(A-Q)/(P-Q)))}if(--r,n+=8*(c+_)/(l.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Jd=null,jd=null;function nl(t){return t.nodeType===9?t:t.ownerDocument}function b_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function A_(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function R_(t,n,a,r){return a=nl(a).createElement(t),a[vn]=r,a[Dn]=n,Pn(a,t,n),Ot(a),a}function $d(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var th=null;function ay(){var t=window.event;return t&&t.type==="popstate"?t===th?!1:(th=t,!0):(th=null,!1)}var eh=typeof setTimeout=="function"?setTimeout:void 0,ry=typeof clearTimeout=="function"?clearTimeout:void 0,C_=typeof Promise=="function"?Promise:void 0,w_=typeof requestAnimationFrame=="function"?requestAnimationFrame:eh,sy=typeof queueMicrotask=="function"?queueMicrotask:typeof C_<"u"?function(t){return C_.resolve(null).then(t).catch(oy)}:eh;function oy(t){setTimeout(function(){throw t})}function sr(t){return t==="head"}function D_(t,n){var a=n,r=0;do{var l=a.nextSibling;if(t.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(l),Xs(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")uh(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,uh(a);for(var c=a.firstChild;c;){var _=c.nextSibling,A=c.nodeName;c[Rt]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&c.rel.toLowerCase()==="stylesheet"||a.removeChild(c),c=_}}else a==="body"&&uh(t.ownerDocument.body);a=l}while(a);Xs(n)}function N_(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function U_(t,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(n=t.getClientRects(),n.length===1)var r=1;else for(var l=r=0;l<n.length;l++){var c=n[l];0<c.width&&0<c.height&&r++}r===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function L_(t,n){t=t.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(a=n.display,t.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?t.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function ly(t,n,a){return a=a.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function nh(t){var n=t.getBoundingClientRect(),a=getComputedStyle(t);return ly(n,a,t)}function uy(t){return t.documentElement.clientHeight}function cy(t){this.addEventListener("load",t),this.addEventListener("error",t)}function fy(t,n,a,r,l,c,_,A,P){var Q=n.nodeType===9?n:n.ownerDocument;try{var st=Q.startViewTransition({update:function(){var Z=Q.defaultView,rt=Z.navigation&&Z.navigation.transition,zt=Q.fonts.status;r();var Zt=[];if(zt==="loaded"&&(uy(Q),Q.fonts.status==="loading"&&Zt.push(Q.fonts.ready)),zt=Zt.length,t!==null)for(var me=t.suspenseyImages,K=0,V=0;V<me.length;V++){var j=me[V];if(!j.complete){var gt=j.getBoundingClientRect();if(0<gt.bottom&&0<gt.right&&gt.top<Z.innerHeight&&gt.left<Z.innerWidth){if(K+=tv(j),K>ku){Zt.length=zt;break}j=new Promise(cy.bind(j)),Zt.push(j)}}}if(0<Zt.length)return Z=Promise.race([Promise.all(Zt),new Promise(function(Wt){return setTimeout(Wt,500)})]).then(l,l),(rt?Promise.allSettled([rt.finished,Z]):Z).then(c,c);if(l(),rt)return rt.finished.then(c,c);c()},types:a});Q.__reactViewTransition=st;var _t=[];return st.ready.then(function(){for(var Z=Q.documentElement.getAnimations({subtree:!0}),rt=0;rt<Z.length;rt++){var zt=Z[rt],Zt=zt.effect,me=Zt.pseudoElement;if(me!=null&&me.startsWith("::view-transition")){_t.push(zt),zt=Zt.getKeyframes();for(var K=me=void 0,V=!0,j=0;j<zt.length;j++){var gt=zt[j],Wt=gt.width;if(me===void 0)me=Wt;else if(me!==Wt){V=!1;break}if(Wt=gt.height,K===void 0)K=Wt;else if(K!==Wt){V=!1;break}delete gt.width,delete gt.height,gt.transform==="none"&&delete gt.transform}V&&me!==void 0&&K!==void 0&&(Zt.setKeyframes(zt),V=getComputedStyle(Zt.target,Zt.pseudoElement),V.width!==me||V.height!==K)&&(V=zt[0],V.width=me,V.height=K,V=zt[zt.length-1],V.width=me,V.height=K,Zt.setKeyframes(zt))}}_()},function(Z){Q.__reactViewTransition===st&&(Q.__reactViewTransition=null);try{if(typeof Z=="object"&&Z!==null)switch(Z.name){case"InvalidStateError":(Z.message==="View transition was skipped because document visibility state is hidden."||Z.message==="Skipping view transition because document visibility state has become hidden."||Z.message==="Skipping view transition because viewport size changed."||Z.message==="Transition was aborted because of invalid state")&&(Z=null)}Z!==null&&P(Z)}finally{r(),l(),_()}}),st.finished.finally(function(){for(var Z=0;Z<_t.length;Z++)_t[Z].cancel();Q.__reactViewTransition===st&&(Q.__reactViewTransition=null),A()}),st}catch{return r(),l(),_(),null}}function Vr(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}Vr.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:x({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},Vr.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,a=t.getAnimations({subtree:!0}),r=[],l=0;l<a.length;l++){var c=a[l].effect;c!==null&&c.target===t&&c.pseudoElement===n&&r.push(a[l])}return r},Vr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function O_(t){return{name:t,group:new Vr("group",t),imagePair:new Vr("image-pair",t),old:new Vr("old",t),new:new Vr("new",t)}}function mi(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}mi.prototype.addEventListener=function(t,n,a){var r=null,l=null;if(!(a!=null&&typeof a!="boolean"&&(r=a.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var c=this._eventListeners;if(I_(c,t,n,a)===-1){var _=this,A=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(A=function(P){_.removeEventListener(t,n,a),typeof n=="function"?n.call(this,P):n.handleEvent(P)}),r!==null&&(l=_.removeEventListener.bind(_,t,n,a),r.addEventListener("abort",l,{once:!0}),l=r.removeEventListener.bind(r,"abort",l)),r=zs(a),c.push({type:t,listener:n,optionsOrUseCapture:a,attachedListener:A,cleanup:l}),g(this._fragmentFiber.child,!1,dy,t,A,r)}this._eventListeners=c}};function dy(t,n,a,r){return y(t).addEventListener(n,a,r),!1}mi.prototype.removeEventListener=function(t,n,a){var r=this._eventListeners;if(r!==null&&(n=I_(r,t,n,a),n!==-1)){var l=r[n];a=l.attachedListener;var c=l.cleanup;l=zs(l.optionsOrUseCapture),g(this._fragmentFiber.child,!1,hy,t,a,l),r.splice(n,1),c!==null&&c()}};function hy(t,n,a,r){return y(t).removeEventListener(n,a,r),!1}function zs(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function P_(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function I_(t,n,a,r){if(t.length===0)return-1;r=P_(r);for(var l=0;l<t.length;l++){var c=t[l];if(c.type===n&&c.listener===a&&P_(c.optionsOrUseCapture)===r)return l}return-1}mi.prototype.dispatchEvent=function(t){var n=S(this._fragmentFiber);if(n===null)return!0;n=y(n);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var r=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var l=0;l<a.length;l++){var c=a[l];r.addEventListener(c.type,c.attachedListener,zs(c.optionsOrUseCapture))}if(n.appendChild(r),t=r.dispatchEvent(t),a)for(l=0;l<a.length;l++)c=a[l],r.removeEventListener(c.type,c.attachedListener,zs(c.optionsOrUseCapture));return n.removeChild(r),t}return n.dispatchEvent(t)},mi.prototype.focus=function(t){g(this._fragmentFiber.child,!0,z_,t,void 0,void 0)};function z_(t,n){return t.tag===6?!1:(t=y(t),by(t,n))}mi.prototype.focusLast=function(t){var n=[];g(this._fragmentFiber.child,!0,ih,n,void 0,void 0);for(var a=n.length-1;0<=a&&!z_(n[a],t);a--);};function ih(t,n){return n.push(t),!1}mi.prototype.blur=function(){var t=S(this._fragmentFiber);t!==null&&(t=y(t),t=nl(t).activeElement,t!==null&&g(this._fragmentFiber.child,!1,py,t,void 0,void 0))};function py(t,n){return t.tag===6?!1:(t=y(t),t===n||t.contains(n)?(n.blur(),!0):!1)}mi.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),g(this._fragmentFiber.child,!1,my,t,void 0,void 0)};function my(t,n){return t.tag===6||(t=y(t),n.observe(t)),!1}mi.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),g(this._fragmentFiber.child,!1,gy,t,void 0,void 0);for(var a=n=0;a<Fi.length;a++){var r=Fi[a];r.fragmentInstance===this&&r.observer===t?t.unobserve(r.instance):Fi[n++]=r}Fi.length=n}};function gy(t,n){return t.tag===6||(t=y(t),n.unobserve(t)),!1}var Fi=[],ah=!1;function _y(t,n,a){Fi.push({fragmentInstance:t,observer:n,instance:a}),ah||(ah=!0,Ay(function(){ah=!1;var r=Fi;Fi=[];for(var l=0;l<r.length;l++){var c=r[l];c.observer.unobserve(c.instance)}}))}mi.prototype.getClientRects=function(){var t=[];return g(this._fragmentFiber.child,!1,vy,t,void 0,void 0),t};function vy(t,n){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),n.push.apply(n,a.getClientRects())}else t=y(t),n.push.apply(n,t.getClientRects());return!1}mi.prototype.getRootNode=function(t){var n=S(this._fragmentFiber);return n===null?this:y(n).getRootNode(t)},mi.prototype.compareDocumentPosition=function(t){var n=S(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];g(this._fragmentFiber.child,!1,ih,a,void 0,void 0);var r=y(n);if(a.length===0){if(a=r,E(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var l=r=a.compareDocumentPosition(t);return a===t?l=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=T(n)[1],a===null?l=Node.DOCUMENT_POSITION_PRECEDING:(t=y(a).compareDocumentPosition(t),l=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=y(a[0]),l=y(a[a.length-1]);var c=E(this._fragmentFiber)?n.parentElement:r;if(c==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=c.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,c=c.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var _=n.compareDocumentPosition(t),A=l.compareDocumentPosition(t),P=_&Node.DOCUMENT_POSITION_CONTAINED_BY||A&Node.DOCUMENT_POSITION_CONTAINED_BY;return A=r&&c&&_&Node.DOCUMENT_POSITION_FOLLOWING&&A&Node.DOCUMENT_POSITION_PRECEDING,n=r&&n===t||c&&l===t||P||A?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&n===t||!c&&l===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:_,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Sy(n,this._fragmentFiber,a[0],a[a.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Sy(t,n,a,r,l){var c=It(l);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!c)t:{for(;c!==null;){if(c.tag===7&&(c===n||c.alternate===n)){a=!0;break t}c=c.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(c===null)return c=l.ownerDocument,l===c||l===c.documentElement||l===c.body;t:{for(c=n,n=S(n);c!==null;){if(!(c.tag!==5&&c.tag!==3&&c.tag!==27||c!==n&&c.alternate!==n)){c=!0;break t}c=c.return}c=!1}return c}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!c)&&!(n=c===a)&&(n=O(a,c,I),n===null?n=!1:(g(n,!0,z,c,a),c=M,M=null,n=c!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!c)&&!(n=c===r)&&(n=O(r,c,I),n===null?n=!1:(g(n,!0,L,c,r),c=M,D=M=null,n=c!==null)),n):!1}function B_(t,n){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}mi.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(s(566));var n=[];g(this._fragmentFiber.child,!1,ih,n,void 0,void 0);var a=t!==!1;if(n.length===0){var r=T(this._fragmentFiber);if(r=a?r[1]||r[0]||S(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){t=y(r),B_(t,a);return}if(r=y(r),r.nodeType!==9){if(r.nodeType===11){a="host"in r?r.host:null,a!==null&&a.scrollIntoView(t);return}r.scrollIntoView(t)}}for(r=a?n.length-1:0;r!==(a?-1:n.length);){var l=n[r];l.tag===6?(l=y(l),B_(l,a)):y(l).scrollIntoView(t),r+=a?-1:1}};function xy(t,n){return t=y(t),F_(t,n),!1}function F_(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function H_(t,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var l=a[r];t.addEventListener(l.type,l.attachedListener,zs(l.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(c){for(var _=0,A=0;A<Fi.length;A++){var P=Fi[A];(P.fragmentInstance!==n||P.observer!==c||P.instance!==t)&&(Fi[_++]=P)}Fi.length=_,c.observe(t)}),F_(t,n))}function My(t,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var l=a[r];t.removeEventListener(l.type,l.attachedListener,zs(l.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(c){typeof c.rootMargin=="string"?_y(n,c,t):c.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function rh(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":rh(a),Ct(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function yy(t,n,a,r){for(;t.nodeType===1;){var l=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Rt])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(c=t.getAttribute("rel"),c==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(c!==l.rel||t.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(c=t.getAttribute("src"),(c!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&c&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var c=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===c)return t}else return t;if(t=Ci(t.nextSibling),t===null)break}return null}function Ey(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Ci(t.nextSibling),t===null))return null;return t}function G_(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ci(t.nextSibling),t===null))return null;return t}function sh(t){return t.data==="$?"||t.data==="$~"}function oh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Ty(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function Ci(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var lh=null;function V_(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Ci(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function X_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function by(t,n){function a(){r=!0}if(t.ownerDocument.activeElement===t)return!0;var r=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return r}function Ay(t){w_(function(){w_(function(n){return t(n)})})}function k_(t,n,a){switch(n=nl(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function W_(t,n,a){for(var r in a){var l=a[r];a.hasOwnProperty(r)&&l!=null&&Xe(t,n,r,null,ey,l)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Ki&&(t.onclick=null),Ct(t)}function uh(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ct(t)}var wi=new Map,q_=new Set;function il(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var Ra=Ht.d;Ht.d={f:Ry,r:Cy,D:wy,C:Dy,L:Ny,m:Uy,X:Oy,S:Ly,M:Py};function Ry(){var t=Ra.f(),n=Pu();return t||n}function Cy(t){var n=qt(t);n!==null&&n.tag===5&&n.type==="form"?Zg(n):Ra.r(t)}var Bs=typeof document>"u"?null:document;function Y_(t,n,a){var r=Bs;if(r&&typeof n=="string"&&n){var l=Mi(n);l='link[rel="'+t+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),q_.has(l)||(q_.add(l),t={rel:t,crossOrigin:a,href:n},r.querySelector(l)===null&&(n=r.createElement("link"),Pn(n,"link",t),Ot(n),r.head.appendChild(n)))}}function wy(t){Ra.D(t),Y_("dns-prefetch",t,null)}function Dy(t,n){Ra.C(t,n),Y_("preconnect",t,n)}function Ny(t,n,a){Ra.L(t,n,a);var r=Bs;if(r&&t&&n){var l='link[rel="preload"][as="'+Mi(n)+'"]';n==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+Mi(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+Mi(a.imageSizes)+'"]')):l+='[href="'+Mi(t)+'"]';var c=l;switch(n){case"style":c=Fs(t);break;case"script":c=Hs(t)}if(!(wi.has(c)||(t=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),wi.set(c,t),r.querySelector(l)!==null||n==="style"&&r.querySelector(al(c))||n==="script"&&r.querySelector(rl(c))))){var _=r.createElement("link");Pn(_,"link",t),n==="style"&&(_[Xt]=!0,_.onload=_.onerror=function(){ve(_)}),Ot(_),r.head.appendChild(_)}}}function Uy(t,n){Ra.m(t,n);var a=Bs;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+Mi(r)+'"][href="'+Mi(t)+'"]',c=l;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Hs(t)}if(!wi.has(c)&&(t=x({rel:"modulepreload",href:t},n),wi.set(c,t),a.querySelector(l)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(rl(c)))return}r=a.createElement("link"),Pn(r,"link",t),Ot(r),a.head.appendChild(r)}}}function Ly(t,n,a){Ra.S(t,n,a);var r=Bs;if(r&&t){var l=de(r).hoistableStyles,c=Fs(t);n=n||"default";var _=l.get(c);if(!_){var A={loading:0,preload:null};if(_=r.querySelector(al(c)))A.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":n},a),(a=wi.get(c))&&ch(t,a);var P=_=r.createElement("link");Ot(P),Pn(P,"link",t),P._p=new Promise(function(Q,st){P.onload=Q,P.onerror=st}),P.addEventListener("load",function(){A.loading|=1}),P.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Vu(_,n,r)}_={type:"stylesheet",instance:_,count:1,state:A},l.set(c,_)}}}function Oy(t,n){Ra.X(t,n);var a=Bs;if(a&&t){var r=de(a).hoistableScripts,l=Hs(t),c=r.get(l);c||(c=a.querySelector(rl(l)),c||(t=x({src:t,async:!0},n),(n=wi.get(l))&&fh(t,n),c=a.createElement("script"),Ot(c),Pn(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(l,c))}}function Py(t,n){Ra.M(t,n);var a=Bs;if(a&&t){var r=de(a).hoistableScripts,l=Hs(t),c=r.get(l);c||(c=a.querySelector(rl(l)),c||(t=x({src:t,async:!0,type:"module"},n),(n=wi.get(l))&&fh(t,n),c=a.createElement("script"),Ot(c),Pn(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(l,c))}}function Z_(t,n,a,r){var l=(l=fn.current)?il(l):null;if(!l)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Fs(a.href),n=de(l).hoistableStyles,r=n.get(a),r||(r={type:"style",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Fs(a.href);var c=de(l).hoistableStyles,_=c.get(t);if(_||(l=l.ownerDocument||l,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(t,_),(c=l.querySelector(al(t)))?c._p||(_.instance=c,_.state.loading=5):(c=wi.get(t),c||(c={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},wi.set(t,c)),Iy(l,t,c,_.state))),n&&r===null)throw Error(s(528,""));return _}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Hs(a),n=de(l).hoistableScripts,r=n.get(a),r||(r={type:"script",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Fs(t){return'href="'+Mi(t)+'"'}function al(t){return'link[rel="stylesheet"]['+t+"]"}function K_(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function Iy(t,n,a,r){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Xt]!==!0){r.loading=1;return}}else n=t.createElement("link"),n[Xt]=!0,n.onload=n.onerror=ve.bind(null,n),Pn(n,"link",a),Ot(n),t.head.appendChild(n);r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2})}function Hs(t){return'[src="'+Mi(t)+'"]'}function rl(t){return"script[async]"+t}function Q_(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+Mi(a.href)+'"]');if(r)return n.instance=r,Ot(r),r;var l=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),Ot(r),Pn(r,"style",l),Vu(r,a.precedence,t),n.instance=r;case"stylesheet":l=Fs(a.href);var c=t.querySelector(al(l));if(c)return n.state.loading|=4,n.instance=c,Ot(c),c;r=K_(a),(l=wi.get(l))&&ch(r,l),c=(t.ownerDocument||t).createElement("link"),Ot(c);var _=c;return _._p=new Promise(function(A,P){_.onload=A,_.onerror=P}),Pn(c,"link",r),n.state.loading|=4,Vu(c,a.precedence,t),n.instance=c;case"script":return c=Hs(a.src),(l=t.querySelector(rl(c)))?(n.instance=l,Ot(l),l):(r=a,(l=wi.get(c))&&(r=x({},a),fh(r,l)),t=t.ownerDocument||t,l=t.createElement("script"),Ot(l),Pn(l,"link",r),t.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Vu(r,a.precedence,t));return n.instance}function Vu(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=r.length?r[r.length-1]:null,c=l,_=0;_<r.length;_++){var A=r[_];if(A.dataset.precedence===n)c=A;else if(c!==l)break}c?c.parentNode.insertBefore(t,c.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function ch(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function fh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Xu=null;function J_(t,n,a){if(Xu===null){var r=new Map,l=Xu=new Map;l.set(a,r)}else l=Xu,r=l.get(a),r||(r=new Map,l.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),l=0;l<a.length;l++){var c=a[l];if(!(c[Rt]||c[vn]||t==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var _=c.getAttribute(n)||"";_=t+_;var A=r.get(_);A?A.push(c):r.set(_,[c])}}return r}function dh(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function zy(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function j_(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function $_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function tv(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function ev(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=tv(n),t.suspenseyImages.push(n)),t=Hy.bind(t),n.decode().then(t,t))}function By(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=Fs(r.href),c=n.querySelector(al(l));if(c){n=c._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=sl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=c,Ot(c);return}c=n.ownerDocument||n,r=K_(r),(l=wi.get(l))&&ch(r,l),c=c.createElement("link"),Ot(c);var _=c;_._p=new Promise(function(A,P){_.onload=A,_.onerror=P}),Pn(c,"link",r),a.instance=c}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=sl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var ku=0;function Fy(t,n){return t.stylesheets&&t.count===0&&qu(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&qu(t,t.stylesheets),t.unsuspend){var c=t.unsuspend;t.unsuspend=null,c()}},6e4+n);0<t.imgBytes&&ku===0&&(ku=62500*iy());var l=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&qu(t,t.stylesheets),t.unsuspend)){var c=t.unsuspend;t.unsuspend=null,c()}},(t.imgBytes>ku?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(l)}}:null}function nv(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)qu(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function sl(){this.count--,nv(this)}function Hy(){this.imgCount--,nv(this)}var Wu=null;function qu(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Wu=new Map,n.forEach(Gy,t),Wu=null,sl.call(t))}function Gy(t,n){if(!(n.state.loading&4)){var a=Wu.get(t);if(a)var r=a.get(null);else{a=new Map,Wu.set(t,a);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<l.length;c++){var _=l[c];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),r=_)}r&&a.set(null,r)}l=n.instance,_=l.getAttribute("data-precedence"),c=a.get(_)||r,c===r&&a.set(null,l),a.set(_,l),this.count++,r=sl.bind(this),l.addEventListener("load",r),l.addEventListener("error",r),c?c.parentNode.insertBefore(l,c.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),n.state.loading|=4}}var Gs={$$typeof:it,Provider:null,Consumer:null,_currentValue:xe,_currentValue2:xe,_threadCount:0};function Vy(t,n,a,r,l,c,_,A,P){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ns(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ns(0),this.hiddenUpdates=ns(null),this.identifierPrefix=r,this.onUncaughtError=l,this.onCaughtError=c,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=P,this.transitionTypes=null,this.incompleteTransitions=new Map}function iv(t,n,a,r,l,c,_,A,P,Q,st,_t){return t=new Vy(t,n,a,_,P,Q,st,_t,A),n=1,c===!0&&(n|=24),c=jn(3,null,null,n),t.current=c,c.stateNode=t,n=Rf(),n.refCount++,t.pooledCache=n,n.refCount++,c.memoizedState={element:r,isDehydrated:a,cache:n},Nf(c),t}function av(t){return t?(t=hs,t):hs}function rv(t,n,a,r,l,c){l=av(l),r.context===null?r.context=l:r.pendingContext=l,r=Za(n),r.payload={element:a},c=c===void 0?null:c,c!==null&&(r.callback=c),a=Ka(t,r,n),a!==null&&(ni(a,t,n),zo(a,t,n))}function sv(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function hh(t,n){sv(t,n),(t=t.alternate)&&sv(t,n)}function ov(t){if(t.tag===13||t.tag===31){var n=br(t,67108864);n!==null&&ni(n,t,67108864),hh(t,67108864)}}function lv(t){if(t.tag===13||t.tag===31){var n=pi();n=xo(n);var a=br(t,n);a!==null&&ni(a,t,n),hh(t,n)}}var Vs=!0;function Xy(t,n,a,r){var l=Mt.T;Mt.T=null;var c=Ht.p;try{Ht.p=2,ph(t,n,a,r)}finally{Ht.p=c,Mt.T=l}}function ky(t,n,a,r){var l=Mt.T;Mt.T=null;var c=Ht.p;try{Ht.p=8,ph(t,n,a,r)}finally{Ht.p=c,Mt.T=l}}function ph(t,n,a,r){if(Vs){var l=mh(r);if(l===null)Kd(t,n,r,Yu,a),cv(t,r);else if(qy(l,t,n,a,r))r.stopPropagation();else if(cv(t,r),n&4&&-1<Wy.indexOf(t)){for(;l!==null;){var c=qt(l);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var _=Ui(c.pendingLanes);if(_!==0){var A=c;for(A.pendingLanes|=2,A.entangledLanes|=2;_;){var P=1<<31-kt(_);A.entanglements[1]|=P,_&=~P}ra(c),(Oe&6)===0&&(Uu=dt()+500,$o(0))}}break;case 31:case 13:A=br(c,2),A!==null&&ni(A,c,2),Pu(),hh(c,2)}if(c=mh(r),c===null&&Kd(t,n,r,Yu,a),c===l)break;l=c}l!==null&&r.stopPropagation()}else Kd(t,n,r,null,a)}}function mh(t){return t=$c(t),gh(t)}var Yu=null;function gh(t){if(Yu=null,t=It(t),t!==null){var n=f(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Yu=t,null}function uv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(mt()){case Dt:return 2;case B:return 8;case pt:case ht:return 32;case Nt:return 268435456;default:return 32}default:return 32}}var _h=!1,or=null,lr=null,ur=null,ol=new Map,ll=new Map,cr=[],Wy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function cv(t,n){switch(t){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":lr=null;break;case"mouseover":case"mouseout":ur=null;break;case"pointerover":case"pointerout":ol.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ll.delete(n.pointerId)}}function ul(t,n,a,r,l,c){return t===null||t.nativeEvent!==c?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:c,targetContainers:[l]},n!==null&&(n=qt(n),n!==null&&ov(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),t)}function qy(t,n,a,r,l){switch(n){case"focusin":return or=ul(or,t,n,a,r,l),!0;case"dragenter":return lr=ul(lr,t,n,a,r,l),!0;case"mouseover":return ur=ul(ur,t,n,a,r,l),!0;case"pointerover":var c=l.pointerId;return ol.set(c,ul(ol.get(c)||null,t,n,a,r,l)),!0;case"gotpointercapture":return c=l.pointerId,ll.set(c,ul(ll.get(c)||null,t,n,a,r,l)),!0}return!1}function fv(t){var n=It(t.target);if(n!==null){var a=f(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Ll(t.priority,function(){lv(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,Ll(t.priority,function(){lv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Zu(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=mh(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);jc=r,a.target.dispatchEvent(r),jc=null}else return n=qt(a),n!==null&&ov(n),t.blockedOn=a,!1;n.shift()}return!0}function dv(t,n,a){Zu(t)&&a.delete(n)}function Yy(){_h=!1,or!==null&&Zu(or)&&(or=null),lr!==null&&Zu(lr)&&(lr=null),ur!==null&&Zu(ur)&&(ur=null),ol.forEach(dv),ll.forEach(dv)}function Ku(t,n){t.blockedOn===n&&(t.blockedOn=null,_h||(_h=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Yy)))}var Qu=null;function hv(t){Qu!==t&&(Qu=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Qu===t&&(Qu=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],l=t[n+2];if(typeof r!="function"){if(gh(r||a)===null)continue;break}var c=qt(a);c!==null&&(t.splice(n,3),n-=3,jf(c,{pending:!0,data:l,method:a.method,action:r},r,l))}}))}function Xs(t){function n(P){return Ku(P,t)}or!==null&&Ku(or,t),lr!==null&&Ku(lr,t),ur!==null&&Ku(ur,t),ol.forEach(n),ll.forEach(n);for(var a=0;a<cr.length;a++){var r=cr[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<cr.length&&(a=cr[0],a.blockedOn===null);)fv(a),a.blockedOn===null&&cr.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var l=a[r],c=a[r+1],_=l[Dn]||null;if(typeof c=="function")_||hv(a);else if(_){var A=null;if(c&&c.hasAttribute("formAction")){if(l=c,_=c[Dn]||null)A=_.formAction;else if(gh(l)!==null)continue}else A=_.action;typeof A=="function"?a[r+1]=A:(a.splice(r,3),r-=3),hv(a)}}}function pv(){function t(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(_){return l=_})},focusReset:"manual",scroll:"manual"})}function n(){l!==null&&(l(),l=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,l=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),l!==null&&(l(),l=null)}}}function vh(t){this._internalRoot=t}Ju.prototype.render=vh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=pi();rv(a,r,t,n,null,null)},Ju.prototype.unmount=vh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;rv(t.current,2,null,t,null,null),Pu(),n[R]=null}};function Ju(t){this._internalRoot=t}Ju.prototype.unstable_scheduleHydration=function(t){if(t){var n=Mo();t={blockedOn:null,target:t,priority:n};for(var a=0;a<cr.length&&n!==0&&n<cr[a].priority;a++);cr.splice(a,0,t),a===0&&fv(t)}};var mv=e.version;if(mv!=="19.3.1")throw Error(s(527,mv,"19.3.1"));Ht.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=m(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var Zy={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:Mt,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ju=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ju.isDisabled&&ju.supportsFiber)try{Kt=ju.inject(Zy),$t=ju}catch{}}return fl.createRoot=function(t,n){if(!u(t))throw Error(s(299));var a=!1,r="",l=a0,c=r0,_=s0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=iv(t,1,!1,null,null,a,r,null,l,c,_,pv),t[R]=n.current,Zd(t),new vh(n)},fl.hydrateRoot=function(t,n,a){if(!u(t))throw Error(s(299));var r=!1,l="",c=a0,_=r0,A=s0,P=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(P=a.formState)),n=iv(t,1,!0,n,a??null,r,l,P,c,_,A,pv),n.context=av(null),a=n.current,r=pi(),r=xo(r),l=Za(r),l.callback=null,Ka(a,l,r),a=r,n.current.lanes=a,Ba(n,a),ra(n),t[R]=n.current,Zd(t),new Ju(n)},fl.version="19.3.1",fl}var bv;function aE(){if(bv)return Mh.exports;bv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Mh.exports=iE(),Mh.exports}var rE=aE();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kp="187",sE=0,Av=1,oE=2,bc=1,lE=2,vl=3,Qr=0,Kn=1,La=2,Yr=0,xl=1,Lc=2,Rv=3,Cv=4,uE=5,io=100,cE=101,fE=102,dE=103,hE=104,pE=200,mE=201,gE=202,_E=203,CS=204,wS=205,vE=206,SE=207,xE=208,ME=209,yE=210,EE=211,TE=212,bE=213,AE=214,tp=0,ep=1,np=2,El=3,ip=4,ap=5,rp=6,sp=7,DS=0,RE=1,CE=2,qi=0,Wp=1,qp=2,Yp=3,Xc=4,Zp=5,kc=6,Wc=7,NS=300,so=301,Tl=302,bh=303,Ah=304,op=1e3,Oa=1001,lp=1002,zn=1003,wE=1004,$u=1005,ai=1006,Rh=1007,Pa=1008,Ni=1009,US=1010,LS=1011,bl=1012,Kp=1013,da=1014,ca=1015,ri=1016,Qp=1017,Jp=1018,oo=1020,OS=35902,PS=35899,IS=1021,zS=1022,fa=1023,xr=1026,Sr=1027,BS=1028,jp=1029,Jr=1030,$p=1031,tm=1033,Ac=33776,Rc=33777,Cc=33778,wc=33779,up=35840,cp=35841,fp=35842,dp=35843,hp=36196,pp=37492,mp=37496,gp=37488,_p=37489,Oc=37490,vp=37491,Sp=37808,xp=37809,Mp=37810,yp=37811,Ep=37812,Tp=37813,bp=37814,Ap=37815,Rp=37816,Cp=37817,wp=37818,Dp=37819,Np=37820,Up=37821,Lp=36492,Op=36494,Pp=36495,Ip=36283,zp=36284,Pc=36285,Bp=36286,DE=3200,wv=0,NE=1,vr="",vi="srgb",Ic="srgb-linear",zc="linear",Be="srgb",Ch=7680,UE=519,LE=512,OE=513,PE=514,FS=515,IE=516,zE=517,HS=518,GS=519,BE=35044,Dv="300 es",Wi=2e3,Bc=2001;function FE(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Al(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function HE(){const o=Al("canvas");return o.style.display="block",o}const Nv={};function Uv(...o){const e="THREE."+o.shift();console.log(e,...o)}function VS(o){const e=o[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function oe(...o){o=VS(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...o)}}function Pe(...o){o=VS(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...o)}}function Dc(...o){const e=o.join(" ");e in Nv||(Nv[e]=!0,oe(...o))}function GE(o,e,i){return new Promise(function(s,u){function f(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:u();break;case o.TIMEOUT_EXPIRED:setTimeout(f,i);break;default:s()}}setTimeout(f,i)})}const VE={[tp]:tp,[np]:rp,[ip]:ip,[El]:ap,[ep]:ep,[rp]:np,[sp]:sp,[ap]:El};class $r{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const u=s[e];if(u!==void 0){const f=u.indexOf(i);f!==-1&&u.splice(f,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const u=s.slice(0);for(let f=0,d=u.length;f<d;f++)u[f].call(this,e);e.target=null}}}const Gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Lv=1234567;const Ml=Math.PI/180,Rl=180/Math.PI;function ho(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Gn[o&255]+Gn[o>>8&255]+Gn[o>>16&255]+Gn[o>>24&255]+"-"+Gn[e&255]+Gn[e>>8&255]+"-"+Gn[e>>16&15|64]+Gn[e>>24&255]+"-"+Gn[i&63|128]+Gn[i>>8&255]+"-"+Gn[i>>16&255]+Gn[i>>24&255]+Gn[s&255]+Gn[s>>8&255]+Gn[s>>16&255]+Gn[s>>24&255]).toLowerCase()}function Ae(o,e,i){return Math.max(e,Math.min(i,o))}function em(o,e){return(o%e+e)%e}function XE(o,e,i,s,u){return s+(o-e)*(u-s)/(i-e)}function kE(o,e,i){return o!==e?(i-o)/(e-o):0}function yl(o,e,i){return(1-i)*o+i*e}function WE(o,e,i,s){return yl(o,e,1-Math.exp(-i*s))}function qE(o,e=1){return e-Math.abs(em(o,e*2)-e)}function YE(o,e,i){return o<=e?0:o>=i?1:(o=(o-e)/(i-e),o*o*(3-2*o))}function ZE(o,e,i){return o<=e?0:o>=i?1:(o=(o-e)/(i-e),o*o*o*(o*(o*6-15)+10))}function KE(o,e){return o+Math.floor(Math.random()*(e-o+1))}function QE(o,e){return o+Math.random()*(e-o)}function JE(o){return o*(.5-Math.random())}function jE(o){o!==void 0&&(Lv=o);let e=Lv+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function $E(o){return o*Ml}function tT(o){return o*Rl}function eT(o){return o>0&&Number.isInteger(o)&&2**Math.round(Math.log2(o))===o}function nT(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function XS(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function iT(o,e,i,s,u){const f=Math.cos,d=Math.sin,h=f(i/2),p=d(i/2),m=f((e+s)/2),v=d((e+s)/2),g=f((e-s)/2),S=d((e-s)/2),E=f((s-e)/2),T=d((s-e)/2);switch(u){case"XYX":o.set(h*v,p*g,p*S,h*m);break;case"YZY":o.set(p*S,h*v,p*g,h*m);break;case"ZXZ":o.set(p*g,p*S,h*v,h*m);break;case"XZX":o.set(h*v,p*T,p*E,h*m);break;case"YXY":o.set(p*E,h*v,p*T,h*m);break;case"ZYZ":o.set(p*T,p*E,h*v,h*m);break;default:oe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+u)}}function nm(o){switch(o.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function kS(o,e){if(e.constructor===Float32Array)return o;const i=nm(e);if(i===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(o/i,-1)}function WS(o,e){if(e.constructor===Float32Array)return o;const i=nm(e);if(i===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(o*i)}const Zr={DEG2RAD:Ml,RAD2DEG:Rl,generateUUID:ho,clamp:Ae,euclideanModulo:em,mapLinear:XE,inverseLerp:kE,lerp:yl,damp:WE,pingpong:qE,smoothstep:YE,smootherstep:ZE,randInt:KE,randFloat:QE,randFloatSpread:JE,seededRandom:jE,degToRad:$E,radToDeg:tT,isPowerOfTwo:eT,ceilPowerOfTwo:nT,floorPowerOfTwo:XS,setQuaternionFromProperEuler:iT,normalize:WS,denormalize:kS},cm=class cm{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,u=e.elements;return this.x=u[0]*i+u[3]*s+u[6],this.y=u[1]*i+u[4]*s+u[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Ae(this.x,e.x,i.x),this.y=Ae(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Ae(this.x,e,i),this.y=Ae(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ae(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Ae(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),u=Math.sin(i),f=this.x-e.x,d=this.y-e.y;return this.x=f*s-d*u+e.x,this.y=f*u+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};cm.prototype.isVector2=!0;let le=cm;class po{constructor(e=0,i=0,s=0,u=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=u}static slerpFlat(e,i,s,u,f,d,h){let p=s[u+0],m=s[u+1],v=s[u+2],g=s[u+3],S=f[d+0],E=f[d+1],T=f[d+2],N=f[d+3];if(g!==N||p!==S||m!==E||v!==T){let y=p*S+m*E+v*T+g*N;y<0&&(S=-S,E=-E,T=-T,N=-N,y=-y);let M=1-h;if(y<.9995){const D=Math.acos(y),z=Math.sin(D);M=Math.sin(M*D)/z,h=Math.sin(h*D)/z,p=p*M+S*h,m=m*M+E*h,v=v*M+T*h,g=g*M+N*h}else{p=p*M+S*h,m=m*M+E*h,v=v*M+T*h,g=g*M+N*h;const D=1/Math.sqrt(p*p+m*m+v*v+g*g);p*=D,m*=D,v*=D,g*=D}}e[i]=p,e[i+1]=m,e[i+2]=v,e[i+3]=g}static multiplyQuaternionsFlat(e,i,s,u,f,d){const h=s[u],p=s[u+1],m=s[u+2],v=s[u+3],g=f[d],S=f[d+1],E=f[d+2],T=f[d+3];return e[i]=h*T+v*g+p*E-m*S,e[i+1]=p*T+v*S+m*g-h*E,e[i+2]=m*T+v*E+h*S-p*g,e[i+3]=v*T-h*g-p*S-m*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,u){return this._x=e,this._y=i,this._z=s,this._w=u,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,u=e._y,f=e._z,d=e._order,h=Math.cos,p=Math.sin,m=h(s/2),v=h(u/2),g=h(f/2),S=p(s/2),E=p(u/2),T=p(f/2);switch(d){case"XYZ":this._x=S*v*g+m*E*T,this._y=m*E*g-S*v*T,this._z=m*v*T+S*E*g,this._w=m*v*g-S*E*T;break;case"YXZ":this._x=S*v*g+m*E*T,this._y=m*E*g-S*v*T,this._z=m*v*T-S*E*g,this._w=m*v*g+S*E*T;break;case"ZXY":this._x=S*v*g-m*E*T,this._y=m*E*g+S*v*T,this._z=m*v*T+S*E*g,this._w=m*v*g-S*E*T;break;case"ZYX":this._x=S*v*g-m*E*T,this._y=m*E*g+S*v*T,this._z=m*v*T-S*E*g,this._w=m*v*g+S*E*T;break;case"YZX":this._x=S*v*g+m*E*T,this._y=m*E*g+S*v*T,this._z=m*v*T-S*E*g,this._w=m*v*g-S*E*T;break;case"XZY":this._x=S*v*g-m*E*T,this._y=m*E*g-S*v*T,this._z=m*v*T+S*E*g,this._w=m*v*g+S*E*T;break;default:oe("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,u=Math.sin(s);return this._x=e.x*u,this._y=e.y*u,this._z=e.z*u,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],u=i[4],f=i[8],d=i[1],h=i[5],p=i[9],m=i[2],v=i[6],g=i[10],S=s+h+g;if(S>0){const E=.5/Math.sqrt(S+1);this._w=.25/E,this._x=(v-p)*E,this._y=(f-m)*E,this._z=(d-u)*E}else if(s>h&&s>g){const E=2*Math.sqrt(1+s-h-g);this._w=(v-p)/E,this._x=.25*E,this._y=(u+d)/E,this._z=(f+m)/E}else if(h>g){const E=2*Math.sqrt(1+h-s-g);this._w=(f-m)/E,this._x=(u+d)/E,this._y=.25*E,this._z=(p+v)/E}else{const E=2*Math.sqrt(1+g-s-h);this._w=(d-u)/E,this._x=(f+m)/E,this._y=(p+v)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ae(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const u=Math.min(1,i/s);return this.slerp(e,u),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,u=e._y,f=e._z,d=e._w,h=i._x,p=i._y,m=i._z,v=i._w;return this._x=s*v+d*h+u*m-f*p,this._y=u*v+d*p+f*h-s*m,this._z=f*v+d*m+s*p-u*h,this._w=d*v-s*h-u*p-f*m,this._onChangeCallback(),this}slerp(e,i){let s=e._x,u=e._y,f=e._z,d=e._w,h=this.dot(e);h<0&&(s=-s,u=-u,f=-f,d=-d,h=-h);let p=1-i;if(h<.9995){const m=Math.acos(h),v=Math.sin(m);p=Math.sin(p*m)/v,i=Math.sin(i*m)/v,this._x=this._x*p+s*i,this._y=this._y*p+u*i,this._z=this._z*p+f*i,this._w=this._w*p+d*i,this._onChangeCallback()}else this._x=this._x*p+s*i,this._y=this._y*p+u*i,this._z=this._z*p+f*i,this._w=this._w*p+d*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),u=Math.sqrt(1-s),f=Math.sqrt(s);return this.set(u*Math.sin(e),u*Math.cos(e),f*Math.sin(i),f*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const fm=class fm{constructor(e=0,i=0,s=0){this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Ov.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Ov.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,u=this.z,f=e.elements;return this.x=f[0]*i+f[3]*s+f[6]*u,this.y=f[1]*i+f[4]*s+f[7]*u,this.z=f[2]*i+f[5]*s+f[8]*u,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,u=this.z,f=e.elements,d=1/(f[3]*i+f[7]*s+f[11]*u+f[15]);return this.x=(f[0]*i+f[4]*s+f[8]*u+f[12])*d,this.y=(f[1]*i+f[5]*s+f[9]*u+f[13])*d,this.z=(f[2]*i+f[6]*s+f[10]*u+f[14])*d,this}applyQuaternion(e){const i=this.x,s=this.y,u=this.z,f=e.x,d=e.y,h=e.z,p=e.w,m=2*(d*u-h*s),v=2*(h*i-f*u),g=2*(f*s-d*i);return this.x=i+p*m+d*g-h*v,this.y=s+p*v+h*m-f*g,this.z=u+p*g+f*v-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,u=this.z,f=e.elements;return this.x=f[0]*i+f[4]*s+f[8]*u,this.y=f[1]*i+f[5]*s+f[9]*u,this.z=f[2]*i+f[6]*s+f[10]*u,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Ae(this.x,e.x,i.x),this.y=Ae(this.y,e.y,i.y),this.z=Ae(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Ae(this.x,e,i),this.y=Ae(this.y,e,i),this.z=Ae(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ae(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,u=e.y,f=e.z,d=i.x,h=i.y,p=i.z;return this.x=u*p-f*h,this.y=f*d-s*p,this.z=s*h-u*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return wh.copy(this).projectOnVector(e),this.sub(wh)}reflect(e){return this.sub(wh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Ae(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,u=this.z-e.z;return i*i+s*s+u*u}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const u=Math.sin(i)*e;return this.x=u*Math.sin(s),this.y=Math.cos(i)*e,this.z=u*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),u=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=u,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};fm.prototype.isVector3=!0;let ot=fm;const wh=new ot,Ov=new po,dm=class dm{constructor(e,i,s,u,f,d,h,p,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,u,f,d,h,p,m)}set(e,i,s,u,f,d,h,p,m){const v=this.elements;return v[0]=e,v[1]=u,v[2]=h,v[3]=i,v[4]=f,v[5]=p,v[6]=s,v[7]=d,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,u=i.elements,f=this.elements,d=s[0],h=s[3],p=s[6],m=s[1],v=s[4],g=s[7],S=s[2],E=s[5],T=s[8],N=u[0],y=u[3],M=u[6],D=u[1],z=u[4],L=u[7],I=u[2],O=u[5],x=u[8];return f[0]=d*N+h*D+p*I,f[3]=d*y+h*z+p*O,f[6]=d*M+h*L+p*x,f[1]=m*N+v*D+g*I,f[4]=m*y+v*z+g*O,f[7]=m*M+v*L+g*x,f[2]=S*N+E*D+T*I,f[5]=S*y+E*z+T*O,f[8]=S*M+E*L+T*x,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],u=e[2],f=e[3],d=e[4],h=e[5],p=e[6],m=e[7],v=e[8];return i*d*v-i*h*m-s*f*v+s*h*p+u*f*m-u*d*p}invert(){const e=this.elements,i=e[0],s=e[1],u=e[2],f=e[3],d=e[4],h=e[5],p=e[6],m=e[7],v=e[8],g=v*d-h*m,S=h*p-v*f,E=m*f-d*p,T=i*g+s*S+u*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const N=1/T;return e[0]=g*N,e[1]=(u*m-v*s)*N,e[2]=(h*s-u*d)*N,e[3]=S*N,e[4]=(v*i-u*p)*N,e[5]=(u*f-h*i)*N,e[6]=E*N,e[7]=(s*p-m*i)*N,e[8]=(d*i-s*f)*N,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,u,f,d,h){const p=Math.cos(f),m=Math.sin(f);return this.set(s*p,s*m,-s*(p*d+m*h)+d+e,-u*m,u*p,-u*(-m*d+p*h)+h+i,0,0,1),this}scale(e,i){return Dc("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Dh.makeScale(e,i)),this}rotate(e){return Dc("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Dh.makeRotation(-e)),this}translate(e,i){return Dc("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Dh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let u=0;u<9;u++)if(i[u]!==s[u])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};dm.prototype.isMatrix3=!0;let ce=dm;const Dh=new ce,Pv=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Iv=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function aT(){const o={enabled:!0,workingColorSpace:Ic,spaces:{},convert:function(u,f,d){return this.enabled===!1||f===d||!f||!d||(this.spaces[f].transfer===Be&&(u.r=Ia(u.r),u.g=Ia(u.g),u.b=Ia(u.b)),this.spaces[f].primaries!==this.spaces[d].primaries&&(u.applyMatrix3(this.spaces[f].toXYZ),u.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Be&&(u.r=ro(u.r),u.g=ro(u.g),u.b=ro(u.b))),u},workingToColorSpace:function(u,f){return this.convert(u,this.workingColorSpace,f)},colorSpaceToWorking:function(u,f){return this.convert(u,f,this.workingColorSpace)},getPrimaries:function(u){return this.spaces[u].primaries},getTransfer:function(u){return u===vr?zc:this.spaces[u].transfer},getToneMappingMode:function(u){return this.spaces[u].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(u,f=this.workingColorSpace){return u.fromArray(this.spaces[f].luminanceCoefficients)},define:function(u){Object.assign(this.spaces,u)},_getMatrix:function(u,f,d){return u.copy(this.spaces[d].fromXYZ).multiply(this.spaces[f].toXYZ)},_getDrawingBufferColorSpace:function(u){return this.spaces[u].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(u=this.workingColorSpace){return this.spaces[u].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Ic]:{primaries:e,whitePoint:s,transfer:zc,toXYZ:Pv,fromXYZ:Iv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:vi},outputColorSpaceConfig:{drawingBufferColorSpace:vi}},[vi]:{primaries:e,whitePoint:s,transfer:Be,toXYZ:Pv,fromXYZ:Iv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:vi}}}),o}const be=aT();function Ia(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ro(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let ks;class rT{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{ks===void 0&&(ks=Al("canvas")),ks.width=e.width,ks.height=e.height;const u=ks.getContext("2d");e instanceof ImageData?u.putImageData(e,0,0):u.drawImage(e,0,0,e.width,e.height),s=ks}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Al("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const u=s.getImageData(0,0,e.width,e.height),f=u.data;for(let d=0;d<f.length;d++)f[d]=Ia(f[d]/255)*255;return s.putImageData(u,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ia(i[s]/255)*255):i[s]=Ia(i[s]);return{data:i,width:e.width,height:e.height}}else return oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let sT=0;class im{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:sT++}),this.uuid=ho(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width||0,i.height||0,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},u=this.data;if(u!==null){let f;if(Array.isArray(u)){f=[];for(let d=0,h=u.length;d<h;d++)u[d].isDataTexture?f.push(Nh(u[d].image)):f.push(Nh(u[d]))}else f=Nh(u);s.url=f}return i||(e.images[this.uuid]=s),s}}function Nh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?rT.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(oe("Texture: Unable to serialize Texture."),{})}let oT=0;const Uh=new ot;class Xn extends $r{constructor(e=Xn.DEFAULT_IMAGE,i=Xn.DEFAULT_MAPPING,s=Oa,u=Oa,f=ai,d=Pa,h=fa,p=Ni,m=Xn.DEFAULT_ANISOTROPY,v=vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oT++}),this.uuid=ho(),this.name="",this.source=new im(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=u,this.magFilter=f,this.minFilter=d,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Uh).x}get height(){return this.source.getSize(Uh).y}get depth(){return this.source.getSize(Uh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){oe(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const u=this[i];if(u===void 0){oe(`Texture.setValues(): property '${i}' does not exist.`);continue}u&&s&&u.isVector2&&s.isVector2||u&&s&&u.isVector3&&s.isVector3||u&&s&&u.isMatrix3&&s.isMatrix3?u.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==NS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case op:e.x=e.x-Math.floor(e.x);break;case Oa:e.x=e.x<0?0:1;break;case lp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case op:e.y=e.y-Math.floor(e.y);break;case Oa:e.y=e.y<0?0:1;break;case lp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=NS;Xn.DEFAULT_ANISOTROPY=1;const hm=class hm{constructor(e=0,i=0,s=0,u=1){this.x=e,this.y=i,this.z=s,this.w=u}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,u){return this.x=e,this.y=i,this.z=s,this.w=u,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,u=this.z,f=this.w,d=e.elements;return this.x=d[0]*i+d[4]*s+d[8]*u+d[12]*f,this.y=d[1]*i+d[5]*s+d[9]*u+d[13]*f,this.z=d[2]*i+d[6]*s+d[10]*u+d[14]*f,this.w=d[3]*i+d[7]*s+d[11]*u+d[15]*f,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,u,f;const p=e.elements,m=p[0],v=p[4],g=p[8],S=p[1],E=p[5],T=p[9],N=p[2],y=p[6],M=p[10];if(Math.abs(v-S)<.01&&Math.abs(g-N)<.01&&Math.abs(T-y)<.01){if(Math.abs(v+S)<.1&&Math.abs(g+N)<.1&&Math.abs(T+y)<.1&&Math.abs(m+E+M-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const z=(m+1)/2,L=(E+1)/2,I=(M+1)/2,O=(v+S)/4,x=(g+N)/4,C=(T+y)/4;return z>L&&z>I?z<.01?(s=0,u=.707106781,f=.707106781):(s=Math.sqrt(z),u=O/s,f=x/s):L>I?L<.01?(s=.707106781,u=0,f=.707106781):(u=Math.sqrt(L),s=O/u,f=C/u):I<.01?(s=.707106781,u=.707106781,f=0):(f=Math.sqrt(I),s=x/f,u=C/f),this.set(s,u,f,i),this}let D=Math.sqrt((y-T)*(y-T)+(g-N)*(g-N)+(S-v)*(S-v));return Math.abs(D)<.001&&(D=1),this.x=(y-T)/D,this.y=(g-N)/D,this.z=(S-v)/D,this.w=Math.acos((m+E+M-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Ae(this.x,e.x,i.x),this.y=Ae(this.y,e.y,i.y),this.z=Ae(this.z,e.z,i.z),this.w=Ae(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Ae(this.x,e,i),this.y=Ae(this.y,e,i),this.z=Ae(this.z,e,i),this.w=Ae(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ae(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};hm.prototype.isVector4=!0;let ln=hm;class lT extends $r{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ai,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new ln(0,0,e,i),this.scissorTest=!1,this.viewport=new ln(0,0,e,i),this.textures=[];const u=s.count;for(let f=0;f<u;f++)this.textures[f]=new Xn({width:e,height:i,depth:s.depth}),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveColorBuffer=s.resolveColorBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.storeMultisampledColorBuffer=s.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=s.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=s.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:ai,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(i.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let u=0,f=this.textures.length;u<f;u++)this.textures[u].image.width=e,this.textures[u].image.height=i,this.textures[u].image.depth=s,this.textures[u].isData3DTexture!==!0&&(this.textures[u].isArrayTexture=this.textures[u].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const u=Object.assign({},e.textures[i].image);this.textures[i].source=new im(u)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const i=e.depthTexture.clone();i.renderTarget=null,this.depthTexture=i}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class si extends lT{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class qS extends Xn{constructor(e=null,i=1,s=1,u=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:u},this.magFilter=zn,this.minFilter=zn,this.wrapR=Oa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class uT extends Xn{constructor(e=null,i=1,s=1,u=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:u},this.magFilter=zn,this.minFilter=zn,this.wrapR=Oa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Vc=class Vc{constructor(e,i,s,u,f,d,h,p,m,v,g,S,E,T,N,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,u,f,d,h,p,m,v,g,S,E,T,N,y)}set(e,i,s,u,f,d,h,p,m,v,g,S,E,T,N,y){const M=this.elements;return M[0]=e,M[4]=i,M[8]=s,M[12]=u,M[1]=f,M[5]=d,M[9]=h,M[13]=p,M[2]=m,M[6]=v,M[10]=g,M[14]=S,M[3]=E,M[7]=T,M[11]=N,M[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vc().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,s=e.elements,u=1/Ws.setFromMatrixColumn(e,0).length(),f=1/Ws.setFromMatrixColumn(e,1).length(),d=1/Ws.setFromMatrixColumn(e,2).length();return i[0]=s[0]*u,i[1]=s[1]*u,i[2]=s[2]*u,i[3]=0,i[4]=s[4]*f,i[5]=s[5]*f,i[6]=s[6]*f,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,u=e.y,f=e.z,d=Math.cos(s),h=Math.sin(s),p=Math.cos(u),m=Math.sin(u),v=Math.cos(f),g=Math.sin(f);if(e.order==="XYZ"){const S=d*v,E=d*g,T=h*v,N=h*g;i[0]=p*v,i[4]=-p*g,i[8]=m,i[1]=E+T*m,i[5]=S-N*m,i[9]=-h*p,i[2]=N-S*m,i[6]=T+E*m,i[10]=d*p}else if(e.order==="YXZ"){const S=p*v,E=p*g,T=m*v,N=m*g;i[0]=S+N*h,i[4]=T*h-E,i[8]=d*m,i[1]=d*g,i[5]=d*v,i[9]=-h,i[2]=E*h-T,i[6]=N+S*h,i[10]=d*p}else if(e.order==="ZXY"){const S=p*v,E=p*g,T=m*v,N=m*g;i[0]=S-N*h,i[4]=-d*g,i[8]=T+E*h,i[1]=E+T*h,i[5]=d*v,i[9]=N-S*h,i[2]=-d*m,i[6]=h,i[10]=d*p}else if(e.order==="ZYX"){const S=d*v,E=d*g,T=h*v,N=h*g;i[0]=p*v,i[4]=T*m-E,i[8]=S*m+N,i[1]=p*g,i[5]=N*m+S,i[9]=E*m-T,i[2]=-m,i[6]=h*p,i[10]=d*p}else if(e.order==="YZX"){const S=d*p,E=d*m,T=h*p,N=h*m;i[0]=p*v,i[4]=N-S*g,i[8]=T*g+E,i[1]=g,i[5]=d*v,i[9]=-h*v,i[2]=-m*v,i[6]=E*g+T,i[10]=S-N*g}else if(e.order==="XZY"){const S=d*p,E=d*m,T=h*p,N=h*m;i[0]=p*v,i[4]=-g,i[8]=m*v,i[1]=S*g+N,i[5]=d*v,i[9]=E*g-T,i[2]=T*g-E,i[6]=h*v,i[10]=N*g+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cT,e,fT)}lookAt(e,i,s){const u=this.elements;return gi.subVectors(e,i),gi.lengthSq()===0&&(gi.z=1),gi.normalize(),dr.crossVectors(s,gi),dr.lengthSq()===0&&(Math.abs(s.z)===1?gi.x+=1e-4:gi.z+=1e-4,gi.normalize(),dr.crossVectors(s,gi)),dr.normalize(),tc.crossVectors(gi,dr),u[0]=dr.x,u[4]=tc.x,u[8]=gi.x,u[1]=dr.y,u[5]=tc.y,u[9]=gi.y,u[2]=dr.z,u[6]=tc.z,u[10]=gi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,u=i.elements,f=this.elements,d=s[0],h=s[4],p=s[8],m=s[12],v=s[1],g=s[5],S=s[9],E=s[13],T=s[2],N=s[6],y=s[10],M=s[14],D=s[3],z=s[7],L=s[11],I=s[15],O=u[0],x=u[4],C=u[8],W=u[12],F=u[1],H=u[5],$=u[9],ct=u[13],X=u[2],it=u[6],q=u[10],k=u[14],ut=u[3],tt=u[7],ft=u[11],xt=u[15];return f[0]=d*O+h*F+p*X+m*ut,f[4]=d*x+h*H+p*it+m*tt,f[8]=d*C+h*$+p*q+m*ft,f[12]=d*W+h*ct+p*k+m*xt,f[1]=v*O+g*F+S*X+E*ut,f[5]=v*x+g*H+S*it+E*tt,f[9]=v*C+g*$+S*q+E*ft,f[13]=v*W+g*ct+S*k+E*xt,f[2]=T*O+N*F+y*X+M*ut,f[6]=T*x+N*H+y*it+M*tt,f[10]=T*C+N*$+y*q+M*ft,f[14]=T*W+N*ct+y*k+M*xt,f[3]=D*O+z*F+L*X+I*ut,f[7]=D*x+z*H+L*it+I*tt,f[11]=D*C+z*$+L*q+I*ft,f[15]=D*W+z*ct+L*k+I*xt,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],u=e[8],f=e[12],d=e[1],h=e[5],p=e[9],m=e[13],v=e[2],g=e[6],S=e[10],E=e[14],T=e[3],N=e[7],y=e[11],M=e[15],D=p*E-m*S,z=h*E-m*g,L=h*S-p*g,I=d*E-m*v,O=d*S-p*v,x=d*g-h*v;return i*(N*D-y*z+M*L)-s*(T*D-y*I+M*O)+u*(T*z-N*I+M*x)-f*(T*L-N*O+y*x)}determinantAffine(){const e=this.elements,i=e[0],s=e[4],u=e[8],f=e[1],d=e[5],h=e[9],p=e[2],m=e[6],v=e[10];return i*(d*v-h*m)-s*(f*v-h*p)+u*(f*m-d*p)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const u=this.elements;return e.isVector3?(u[12]=e.x,u[13]=e.y,u[14]=e.z):(u[12]=e,u[13]=i,u[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],u=e[2],f=e[3],d=e[4],h=e[5],p=e[6],m=e[7],v=e[8],g=e[9],S=e[10],E=e[11],T=e[12],N=e[13],y=e[14],M=e[15],D=i*h-s*d,z=i*p-u*d,L=i*m-f*d,I=s*p-u*h,O=s*m-f*h,x=u*m-f*p,C=v*N-g*T,W=v*y-S*T,F=v*M-E*T,H=g*y-S*N,$=g*M-E*N,ct=S*M-E*y,X=D*ct-z*$+L*H+I*F-O*W+x*C;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const it=1/X;return e[0]=(h*ct-p*$+m*H)*it,e[1]=(u*$-s*ct-f*H)*it,e[2]=(N*x-y*O+M*I)*it,e[3]=(S*O-g*x-E*I)*it,e[4]=(p*F-d*ct-m*W)*it,e[5]=(i*ct-u*F+f*W)*it,e[6]=(y*L-T*x-M*z)*it,e[7]=(v*x-S*L+E*z)*it,e[8]=(d*$-h*F+m*C)*it,e[9]=(s*F-i*$-f*C)*it,e[10]=(T*O-N*L+M*D)*it,e[11]=(g*L-v*O-E*D)*it,e[12]=(h*W-d*H-p*C)*it,e[13]=(i*H-s*W+u*C)*it,e[14]=(N*z-T*I-y*D)*it,e[15]=(v*I-g*z+S*D)*it,this}scale(e){const i=this.elements,s=e.x,u=e.y,f=e.z;return i[0]*=s,i[4]*=u,i[8]*=f,i[1]*=s,i[5]*=u,i[9]*=f,i[2]*=s,i[6]*=u,i[10]*=f,i[3]*=s,i[7]*=u,i[11]*=f,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],u=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,u))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),u=Math.sin(i),f=1-s,d=e.x,h=e.y,p=e.z,m=f*d,v=f*h;return this.set(m*d+s,m*h-u*p,m*p+u*h,0,m*h+u*p,v*h+s,v*p-u*d,0,m*p-u*h,v*p+u*d,f*p*p+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,u,f,d){return this.set(1,s,f,0,e,1,d,0,i,u,1,0,0,0,0,1),this}compose(e,i,s){const u=this.elements,f=i._x,d=i._y,h=i._z,p=i._w,m=f+f,v=d+d,g=h+h,S=f*m,E=f*v,T=f*g,N=d*v,y=d*g,M=h*g,D=p*m,z=p*v,L=p*g,I=s.x,O=s.y,x=s.z;return u[0]=(1-(N+M))*I,u[1]=(E+L)*I,u[2]=(T-z)*I,u[3]=0,u[4]=(E-L)*O,u[5]=(1-(S+M))*O,u[6]=(y+D)*O,u[7]=0,u[8]=(T+z)*x,u[9]=(y-D)*x,u[10]=(1-(S+N))*x,u[11]=0,u[12]=e.x,u[13]=e.y,u[14]=e.z,u[15]=1,this}decompose(e,i,s){const u=this.elements;e.x=u[12],e.y=u[13],e.z=u[14];const f=this.determinantAffine();if(f===0)return s.set(1,1,1),i.identity(),this;let d=Ws.set(u[0],u[1],u[2]).length();const h=Ws.set(u[4],u[5],u[6]).length(),p=Ws.set(u[8],u[9],u[10]).length();f<0&&(d=-d),Hi.copy(this);const m=1/d,v=1/h,g=1/p;return Hi.elements[0]*=m,Hi.elements[1]*=m,Hi.elements[2]*=m,Hi.elements[4]*=v,Hi.elements[5]*=v,Hi.elements[6]*=v,Hi.elements[8]*=g,Hi.elements[9]*=g,Hi.elements[10]*=g,i.setFromRotationMatrix(Hi),s.x=d,s.y=h,s.z=p,this}makePerspective(e,i,s,u,f,d,h=Wi,p=!1){const m=this.elements,v=2*f/(i-e),g=2*f/(s-u),S=(i+e)/(i-e),E=(s+u)/(s-u);let T,N;if(p)T=f/(d-f),N=d*f/(d-f);else if(h===Wi)T=-(d+f)/(d-f),N=-2*d*f/(d-f);else if(h===Bc)T=-d/(d-f),N=-d*f/(d-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=v,m[4]=0,m[8]=S,m[12]=0,m[1]=0,m[5]=g,m[9]=E,m[13]=0,m[2]=0,m[6]=0,m[10]=T,m[14]=N,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,s,u,f,d,h=Wi,p=!1){const m=this.elements,v=2/(i-e),g=2/(s-u),S=-(i+e)/(i-e),E=-(s+u)/(s-u);let T,N;if(p)T=1/(d-f),N=d/(d-f);else if(h===Wi)T=-2/(d-f),N=-(d+f)/(d-f);else if(h===Bc)T=-1/(d-f),N=-f/(d-f);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=v,m[4]=0,m[8]=0,m[12]=S,m[1]=0,m[5]=g,m[9]=0,m[13]=E,m[2]=0,m[6]=0,m[10]=T,m[14]=N,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let u=0;u<16;u++)if(i[u]!==s[u])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}};Vc.prototype.isMatrix4=!0;let un=Vc;const Ws=new ot,Hi=new un,cT=new ot(0,0,0),fT=new ot(1,1,1),dr=new ot,tc=new ot,gi=new ot,zv=new un,Bv=new po;class jr{constructor(e=0,i=0,s=0,u=jr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=u}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,u=this._order){return this._x=e,this._y=i,this._z=s,this._order=u,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const u=e.elements,f=u[0],d=u[4],h=u[8],p=u[1],m=u[5],v=u[9],g=u[2],S=u[6],E=u[10];switch(i){case"XYZ":this._y=Math.asin(Ae(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,E),this._z=Math.atan2(-d,f)):(this._x=Math.atan2(S,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,E),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-g,f),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-g,E),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(p,f));break;case"ZYX":this._y=Math.asin(-Ae(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(S,E),this._z=Math.atan2(p,f)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(Ae(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-g,f)):(this._x=0,this._y=Math.atan2(h,E));break;case"XZY":this._z=Math.asin(-Ae(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(S,m),this._y=Math.atan2(h,f)):(this._x=Math.atan2(-v,E),this._y=0);break;default:oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return zv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zv,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Bv.setFromEuler(this),this.setFromQuaternion(Bv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jr.DEFAULT_ORDER="XYZ";class YS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let dT=0;const Fv=new ot,qs=new po,Ca=new un,ec=new ot,dl=new ot,hT=new ot,pT=new po,Hv=new ot(1,0,0),Gv=new ot(0,1,0),Vv=new ot(0,0,1),Xv={type:"added"},mT={type:"removed"},Ys={type:"childadded",child:null},Lh={type:"childremoved",child:null};class Qn extends $r{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dT++}),this.uuid=ho(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qn.DEFAULT_UP.clone();const e=new ot,i=new jr,s=new po,u=new ot(1,1,1);function f(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(f),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:u},modelViewMatrix:{value:new un},normalMatrix:{value:new ce}}),this.matrix=new un,this.matrixWorld=new un,this.matrixAutoUpdate=Qn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new YS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return qs.setFromAxisAngle(e,i),this.quaternion.multiply(qs),this}rotateOnWorldAxis(e,i){return qs.setFromAxisAngle(e,i),this.quaternion.premultiply(qs),this}rotateX(e){return this.rotateOnAxis(Hv,e)}rotateY(e){return this.rotateOnAxis(Gv,e)}rotateZ(e){return this.rotateOnAxis(Vv,e)}translateOnAxis(e,i){return Fv.copy(e).applyQuaternion(this.quaternion),this.position.add(Fv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Hv,e)}translateY(e){return this.translateOnAxis(Gv,e)}translateZ(e){return this.translateOnAxis(Vv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ca.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?ec.copy(e):ec.set(e,i,s);const u=this.parent;this.updateWorldMatrix(!0,!1),dl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ca.lookAt(dl,ec,this.up):Ca.lookAt(ec,dl,this.up),this.quaternion.setFromRotationMatrix(Ca),u&&(Ca.extractRotation(u.matrixWorld),qs.setFromRotationMatrix(Ca),this.quaternion.premultiply(qs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Pe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xv),Ys.child=e,this.dispatchEvent(Ys),Ys.child=null):Pe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(mT),Lh.child=e,this.dispatchEvent(Lh),Lh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ca.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ca.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ca),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xv),Ys.child=e,this.dispatchEvent(Ys),Ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,u=this.children.length;s<u;s++){const d=this.children[s].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const u=this.children;for(let f=0,d=u.length;f<d;f++)u[f].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dl,e,hT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dl,pT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const i=this.children;for(let s=0,u=i.length;s<u;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,u=i.length;s<u;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,u=e.z,f=this.matrix.elements;f[12]+=i-f[0]*i-f[4]*s-f[8]*u,f[13]+=s-f[1]*i-f[5]*s-f[9]*u,f[14]+=u-f[2]*i-f[6]*s-f[10]*u}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,u=i.length;s<u;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i,s=!1){const u=this.parent;if(e===!0&&u!==null&&u.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),i===!0){const f=this.children;for(let d=0,h=f.length;d<h;d++)f[d].updateWorldMatrix(!1,!0,s)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const u={};u.uuid=this.uuid,u.type=this.type,u.name=this.name,u.castShadow=this.castShadow,u.receiveShadow=this.receiveShadow,u.visible=this.visible,u.frustumCulled=this.frustumCulled,u.renderOrder=this.renderOrder,u.static=this.static,u.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(u.userData=this.userData),u.layers=this.layers.mask,u.matrix=this.matrix.toArray(),u.up=this.up.toArray(),this.pivot!==null&&(u.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(u.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(u.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(u.type="InstancedMesh",u.count=this.count,u.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(u.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(u.type="BatchedMesh",u.perObjectFrustumCulled=this.perObjectFrustumCulled,u.sortObjects=this.sortObjects,u.drawRanges=this._drawRanges,u.reservedRanges=this._reservedRanges,u.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),u.instanceInfo=this._instanceInfo.map(h=>({...h})),u.availableInstanceIds=this._availableInstanceIds.slice(),u.availableGeometryIds=this._availableGeometryIds.slice(),u.nextIndexStart=this._nextIndexStart,u.nextVertexStart=this._nextVertexStart,u.geometryCount=this._geometryCount,u.maxInstanceCount=this._maxInstanceCount,u.maxVertexCount=this._maxVertexCount,u.maxIndexCount=this._maxIndexCount,u.geometryInitialized=this._geometryInitialized,u.matricesTexture=this._matricesTexture.toJSON(e),u.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(u.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(u.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(u.boundingBox=this.boundingBox.toJSON()));function f(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?u.background=this.background.toJSON():this.background.isTexture&&(u.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(u.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){u.geometry=f(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,v=p.length;m<v;m++){const g=p[m];f(e.shapes,g)}else f(e.shapes,p)}}if(this.isSkinnedMesh&&(u.bindMode=this.bindMode,u.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(e.skeletons,this.skeleton),u.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(f(e.materials,this.material[p]));u.material=h}else u.material=f(e.materials,this.material);if(this.children.length>0){u.children=[];for(let h=0;h<this.children.length;h++)u.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){u.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];u.animations.push(f(e.animations,p))}}if(i){const h=d(e.geometries),p=d(e.materials),m=d(e.textures),v=d(e.images),g=d(e.shapes),S=d(e.skeletons),E=d(e.animations),T=d(e.nodes);h.length>0&&(s.geometries=h),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),v.length>0&&(s.images=v),g.length>0&&(s.shapes=g),S.length>0&&(s.skeletons=S),E.length>0&&(s.animations=E),T.length>0&&(s.nodes=T)}return s.object=u,s;function d(h){const p=[];for(const m in h){const v=h[m];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const u=e.children[s];this.add(u.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Qn.DEFAULT_UP=new ot(0,1,0);Qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class nc extends Qn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gT={type:"move"};class Oh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ot,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ot),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ot,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ot,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let u=null,f=null,d=null;const h=this._targetRay,p=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const N of e.hand.values()){const y=i.getJointPose(N,s),M=this._getHandJoint(m,N);y!==null&&(M.matrix.fromArray(y.transform.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale),M.matrixWorldNeedsUpdate=!0,M.jointRadius=y.radius),M.visible=y!==null}const v=m.joints["index-finger-tip"],g=m.joints["thumb-tip"],S=v.position.distanceTo(g.position),E=.02,T=.005;m.inputState.pinching&&S>E+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&S<=E-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(f=i.getPose(e.gripSpace,s),f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,f.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(f.linearVelocity)):p.hasLinearVelocity=!1,f.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(f.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(u=i.getPose(e.targetRaySpace,s),u===null&&f!==null&&(u=f),u!==null&&(h.matrix.fromArray(u.transform.matrix),h.matrix.decompose(h.position,h.quaternion,h.scale),h.matrixWorldNeedsUpdate=!0,u.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(u.linearVelocity)):h.hasLinearVelocity=!1,u.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(u.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(gT)))}return h!==null&&(h.visible=u!==null),p!==null&&(p.visible=f!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new nc;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const ZS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hr={h:0,s:0,l:0},ic={h:0,s:0,l:0};function Ph(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Ce{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const u=e;u&&u.isColor?this.copy(u):typeof u=="number"?this.setHex(u):typeof u=="string"&&this.setStyle(u)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=vi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,be.colorSpaceToWorking(this,i),this}setRGB(e,i,s,u=be.workingColorSpace){return this.r=e,this.g=i,this.b=s,be.colorSpaceToWorking(this,u),this}setHSL(e,i,s,u=be.workingColorSpace){if(e=em(e,1),i=Ae(i,0,1),s=Ae(s,0,1),i===0)this.r=this.g=this.b=s;else{const f=s<=.5?s*(1+i):s+i-s*i,d=2*s-f;this.r=Ph(d,f,e+1/3),this.g=Ph(d,f,e),this.b=Ph(d,f,e-1/3)}return be.colorSpaceToWorking(this,u),this}setStyle(e,i=vi){function s(f){f!==void 0&&parseFloat(f)<1&&oe("Color: Alpha component of "+e+" will be ignored.")}let u;if(u=/^(\w+)\(([^\)]*)\)/.exec(e)){let f;const d=u[1],h=u[2];switch(d){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(h))return s(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,i);if(f=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(h))return s(f[4]),this.setRGB(Math.min(100,parseFloat(f[1]))/100,Math.min(100,parseFloat(f[2]))/100,Math.min(100,parseFloat(f[3]))/100,i);break;case"hsl":case"hsla":if(f=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(h))return s(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,i);break;default:oe("Color: Unknown color model "+e)}}else if(u=/^\#([A-Fa-f\d]+)$/.exec(e)){const f=u[1],d=f.length;if(d===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(f,16),i);oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=vi){const s=ZS[e.toLowerCase()];return s!==void 0?this.setHex(s,i):oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ia(e.r),this.g=Ia(e.g),this.b=Ia(e.b),this}copyLinearToSRGB(e){return this.r=ro(e.r),this.g=ro(e.g),this.b=ro(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vi){return be.workingToColorSpace(Vn.copy(this),e),Math.round(Ae(Vn.r*255,0,255))*65536+Math.round(Ae(Vn.g*255,0,255))*256+Math.round(Ae(Vn.b*255,0,255))}getHexString(e=vi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=be.workingColorSpace){be.workingToColorSpace(Vn.copy(this),i);const s=Vn.r,u=Vn.g,f=Vn.b,d=Math.max(s,u,f),h=Math.min(s,u,f);let p,m;const v=(h+d)/2;if(h===d)p=0,m=0;else{const g=d-h;switch(m=v<=.5?g/(d+h):g/(2-d-h),d){case s:p=(u-f)/g+(u<f?6:0);break;case u:p=(f-s)/g+2;break;case f:p=(s-u)/g+4;break}p/=6}return e.h=p,e.s=m,e.l=v,e}getRGB(e,i=be.workingColorSpace){return be.workingToColorSpace(Vn.copy(this),i),e.r=Vn.r,e.g=Vn.g,e.b=Vn.b,e}getStyle(e=vi){be.workingToColorSpace(Vn.copy(this),e);const i=Vn.r,s=Vn.g,u=Vn.b;return e!==vi?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${u.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(u*255)})`}offsetHSL(e,i,s){return this.getHSL(hr),this.setHSL(hr.h+e,hr.s+i,hr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(hr),e.getHSL(ic);const s=yl(hr.h,ic.h,i),u=yl(hr.s,ic.s,i),f=yl(hr.l,ic.l,i);return this.setHSL(s,u,f),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,u=this.b,f=e.elements;return this.r=f[0]*i+f[3]*s+f[6]*u,this.g=f[1]*i+f[4]*s+f[7]*u,this.b=f[2]*i+f[5]*s+f[8]*u,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vn=new Ce;Ce.NAMES=ZS;class _T extends Qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jr,this.environmentIntensity=1,this.environmentRotation=new jr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),i.object.backgroundBlurriness=this.backgroundBlurriness,i.object.backgroundIntensity=this.backgroundIntensity,i.object.backgroundRotation=this.backgroundRotation.toArray(),i.object.environmentIntensity=this.environmentIntensity,i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Gi=new ot,wa=new ot,Ih=new ot,Da=new ot,Zs=new ot,Ks=new ot,kv=new ot,zh=new ot,Bh=new ot,Fh=new ot,Hh=new ln,Gh=new ln,Vh=new ln;class ki{constructor(e=new ot,i=new ot,s=new ot){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,u){u.subVectors(s,i),Gi.subVectors(e,i),u.cross(Gi);const f=u.lengthSq();return f>0?u.multiplyScalar(1/Math.sqrt(f)):u.set(0,0,0)}static getBarycoord(e,i,s,u,f){Gi.subVectors(u,i),wa.subVectors(s,i),Ih.subVectors(e,i);const d=Gi.dot(Gi),h=Gi.dot(wa),p=Gi.dot(Ih),m=wa.dot(wa),v=wa.dot(Ih),g=d*m-h*h;if(g===0)return f.set(0,0,0),null;const S=1/g,E=(m*p-h*v)*S,T=(d*v-h*p)*S;return f.set(1-E-T,T,E)}static containsPoint(e,i,s,u){return this.getBarycoord(e,i,s,u,Da)===null?!1:Da.x>=0&&Da.y>=0&&Da.x+Da.y<=1}static getInterpolation(e,i,s,u,f,d,h,p){return this.getBarycoord(e,i,s,u,Da)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(f,Da.x),p.addScaledVector(d,Da.y),p.addScaledVector(h,Da.z),p)}static getInterpolatedAttribute(e,i,s,u,f,d){return Hh.setScalar(0),Gh.setScalar(0),Vh.setScalar(0),Hh.fromBufferAttribute(e,i),Gh.fromBufferAttribute(e,s),Vh.fromBufferAttribute(e,u),d.setScalar(0),d.addScaledVector(Hh,f.x),d.addScaledVector(Gh,f.y),d.addScaledVector(Vh,f.z),d}static isFrontFacing(e,i,s,u){return Gi.subVectors(s,i),wa.subVectors(e,i),Gi.cross(wa).dot(u)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,u){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[u]),this}setFromAttributeAndIndices(e,i,s,u){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,u),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gi.subVectors(this.c,this.b),wa.subVectors(this.a,this.b),Gi.cross(wa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ki.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return ki.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,u,f){return ki.getInterpolation(e,this.a,this.b,this.c,i,s,u,f)}containsPoint(e){return ki.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ki.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,u=this.b,f=this.c;let d,h;Zs.subVectors(u,s),Ks.subVectors(f,s),zh.subVectors(e,s);const p=Zs.dot(zh),m=Ks.dot(zh);if(p<=0&&m<=0)return i.copy(s);Bh.subVectors(e,u);const v=Zs.dot(Bh),g=Ks.dot(Bh);if(v>=0&&g<=v)return i.copy(u);const S=p*g-v*m;if(S<=0&&p>=0&&v<=0&&p-v>0)return d=p/(p-v),i.copy(s).addScaledVector(Zs,d);Fh.subVectors(e,f);const E=Zs.dot(Fh),T=Ks.dot(Fh);if(T>=0&&E<=T)return i.copy(f);const N=E*m-p*T;if(N<=0&&m>=0&&T<=0)return h=m/(m-T),i.copy(s).addScaledVector(Ks,h);const y=v*T-E*g;if(y<=0&&g-v>=0&&E-T>=0)return kv.subVectors(f,u),h=(g-v)/(g-v+(E-T)),i.copy(u).addScaledVector(kv,h);const M=1/(y+N+S);return d=N*M,h=S*M,i.copy(s).addScaledVector(Zs,d).addScaledVector(Ks,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class wl{constructor(e=new ot(1/0,1/0,1/0),i=new ot(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Vi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Vi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Vi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const f=s.getAttribute("position");if(i===!0&&f!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let d=0,h=f.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,Vi):Vi.fromBufferAttribute(f,d),Vi.applyMatrix4(e.matrixWorld),this.expandByPoint(Vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ac.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),ac.copy(s.boundingBox)),ac.applyMatrix4(e.matrixWorld),this.union(ac)}const u=e.children;for(let f=0,d=u.length;f<d;f++)this.expandByObject(u[f],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vi),Vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(hl),rc.subVectors(this.max,hl),Qs.subVectors(e.a,hl),Js.subVectors(e.b,hl),js.subVectors(e.c,hl),pr.subVectors(Js,Qs),mr.subVectors(js,Js),Xr.subVectors(Qs,js);let i=[0,-pr.z,pr.y,0,-mr.z,mr.y,0,-Xr.z,Xr.y,pr.z,0,-pr.x,mr.z,0,-mr.x,Xr.z,0,-Xr.x,-pr.y,pr.x,0,-mr.y,mr.x,0,-Xr.y,Xr.x,0];return!Xh(i,Qs,Js,js,rc)||(i=[1,0,0,0,1,0,0,0,1],!Xh(i,Qs,Js,js,rc))?!1:(sc.crossVectors(pr,mr),i=[sc.x,sc.y,sc.z],Xh(i,Qs,Js,js,rc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Na[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Na[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Na[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Na[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Na[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Na[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Na[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Na[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Na),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Na=[new ot,new ot,new ot,new ot,new ot,new ot,new ot,new ot],Vi=new ot,ac=new wl,Qs=new ot,Js=new ot,js=new ot,pr=new ot,mr=new ot,Xr=new ot,hl=new ot,rc=new ot,sc=new ot,kr=new ot;function Xh(o,e,i,s,u){for(let f=0,d=o.length-3;f<=d;f+=3){kr.fromArray(o,f);const h=u.x*Math.abs(kr.x)+u.y*Math.abs(kr.y)+u.z*Math.abs(kr.z),p=e.dot(kr),m=i.dot(kr),v=s.dot(kr);if(Math.max(-Math.max(p,m,v),Math.min(p,m,v))>h)return!1}return!0}const _n=new ot,oc=new le;let vT=0;class Kr extends $r{constructor(e,i,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vT++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=BE,this.updateRanges=[],this.gpuType=ca,this.version=0,this._normalizationScale=e!==void 0?nm(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let u=0,f=this.itemSize;u<f;u++)this.array[e+u]=i.array[s+u];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)oc.fromBufferAttribute(this,i),oc.applyMatrix3(e),this.setXY(i,oc.x,oc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix3(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix4(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyNormalMatrix(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.transformDirection(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=this._denormalize(s)),s}setComponent(e,i,s){return this.normalized&&(s=this._normalize(s)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=this._denormalize(i)),i}setX(e,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=this._denormalize(i)),i}setY(e,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=this._denormalize(i)),i}setZ(e,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=this._denormalize(i)),i}setW(e,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,u){return e*=this.itemSize,this.normalized&&(i=this._normalize(i),s=this._normalize(s),u=this._normalize(u)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=u,this}setXYZW(e,i,s,u,f){return e*=this.itemSize,this.normalized&&(i=this._normalize(i),s=this._normalize(s),u=this._normalize(u),f=this._normalize(f)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=u,this.array[e+3]=f,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const i=this._normalizationScale;return i!==void 0?Math.max(e/i,-1):kS(e,this.array)}_normalize(e){const i=this._normalizationScale;return i!==void 0?Math.round(e*i):WS(e,this.array)}}class KS extends Kr{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class QS extends Kr{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Rn extends Kr{constructor(e,i,s){super(new Float32Array(e),i,s)}}const ST=new wl,pl=new ot,kh=new ot;class qc{constructor(e=new ot,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):ST.setFromPoints(e).getCenter(s);let u=0;for(let f=0,d=e.length;f<d;f++)u=Math.max(u,s.distanceToSquared(e[f]));return this.radius=Math.sqrt(u),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pl.subVectors(e,this.center);const i=pl.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),u=(s-this.radius)*.5;this.center.addScaledVector(pl,u/s),this.radius+=u}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pl.copy(e.center).add(kh)),this.expandByPoint(pl.copy(e.center).sub(kh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let xT=0;const Di=new un,Wh=new Qn,$s=new ot,_i=new wl,ml=new wl,An=new ot;class Zi extends $r{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xT++}),this.uuid=ho(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(FE(e)?QS:KS)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const f=new ce().getNormalMatrix(e);s.applyNormalMatrix(f),s.needsUpdate=!0}const u=this.attributes.tangent;return u!==void 0&&(u.transformDirection(e),u.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Di.makeRotationFromQuaternion(e),this.applyMatrix4(Di),this}rotateX(e){return Di.makeRotationX(e),this.applyMatrix4(Di),this}rotateY(e){return Di.makeRotationY(e),this.applyMatrix4(Di),this}rotateZ(e){return Di.makeRotationZ(e),this.applyMatrix4(Di),this}translate(e,i,s){return Di.makeTranslation(e,i,s),this.applyMatrix4(Di),this}scale(e,i,s){return Di.makeScale(e,i,s),this.applyMatrix4(Di),this}lookAt(e){return Wh.lookAt(e),Wh.updateMatrix(),this.applyMatrix4(Wh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($s).negate(),this.translate($s.x,$s.y,$s.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let u=0,f=e.length;u<f;u++){const d=e[u];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Rn(s,3))}else{const s=Math.min(e.length,i.count);for(let u=0;u<s;u++){const f=e[u];i.setXYZ(u,f.x,f.y,f.z||0)}e.length>i.count&&oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ot(-1/0,-1/0,-1/0),new ot(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,u=i.length;s<u;s++){const f=i[s];_i.setFromBufferAttribute(f),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,_i.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,_i.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint(_i.min),this.boundingBox.expandByPoint(_i.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ot,1/0);return}if(e){const s=this.boundingSphere.center;if(_i.setFromBufferAttribute(e),i)for(let f=0,d=i.length;f<d;f++){const h=i[f];ml.setFromBufferAttribute(h),this.morphTargetsRelative?(An.addVectors(_i.min,ml.min),_i.expandByPoint(An),An.addVectors(_i.max,ml.max),_i.expandByPoint(An)):(_i.expandByPoint(ml.min),_i.expandByPoint(ml.max))}_i.getCenter(s);let u=0;for(let f=0,d=e.count;f<d;f++)An.fromBufferAttribute(e,f),u=Math.max(u,s.distanceToSquared(An));if(i)for(let f=0,d=i.length;f<d;f++){const h=i[f],p=this.morphTargetsRelative;for(let m=0,v=h.count;m<v;m++)An.fromBufferAttribute(h,m),p&&($s.fromBufferAttribute(e,m),An.add($s)),u=Math.max(u,s.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(u),isNaN(this.boundingSphere.radius)&&Pe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Pe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,u=i.normal,f=i.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==s.count)&&(d=new Kr(new Float32Array(4*s.count),4),this.setAttribute("tangent",d));const h=[],p=[],m=new Uint8Array(s.count);for(let W=0;W<s.count;W++)h[W]=new ot,p[W]=new ot;const v=new ot,g=new ot,S=new ot,E=new le,T=new le,N=new le,y=new ot,M=new ot;function D(W,F,H){m[W]=m[F]=m[H]=1,v.fromBufferAttribute(s,W),g.fromBufferAttribute(s,F),S.fromBufferAttribute(s,H),E.fromBufferAttribute(f,W),T.fromBufferAttribute(f,F),N.fromBufferAttribute(f,H),g.sub(v),S.sub(v),T.sub(E),N.sub(E);const $=1/(T.x*N.y-N.x*T.y);isFinite($)&&(y.copy(g).multiplyScalar(N.y).addScaledVector(S,-T.y).multiplyScalar($),M.copy(S).multiplyScalar(T.x).addScaledVector(g,-N.x).multiplyScalar($),h[W].add(y),h[F].add(y),h[H].add(y),p[W].add(M),p[F].add(M),p[H].add(M))}let z=this.groups;z.length===0&&(z=[{start:0,count:e.count}]);for(let W=0,F=z.length;W<F;++W){const H=z[W],$=H.start,ct=H.count;for(let X=$,it=$+ct;X<it;X+=3)D(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const L=new ot,I=new ot,O=new ot,x=new ot;function C(W){O.fromBufferAttribute(u,W),x.copy(O);const F=h[W];L.copy(F),L.sub(O.multiplyScalar(O.dot(F))).normalize(),I.crossVectors(x,F);const $=I.dot(p[W])<0?-1:1;d.setXYZW(W,L.x,L.y,L.z,$)}for(let W=0,F=s.count;W<F;++W)m[W]&&C(W);this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==i.count)s=new Kr(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let S=0,E=s.count;S<E;S++)s.setXYZ(S,0,0,0);const u=new ot,f=new ot,d=new ot,h=new ot,p=new ot,m=new ot,v=new ot,g=new ot;if(e)for(let S=0,E=e.count;S<E;S+=3){const T=e.getX(S+0),N=e.getX(S+1),y=e.getX(S+2);u.fromBufferAttribute(i,T),f.fromBufferAttribute(i,N),d.fromBufferAttribute(i,y),v.subVectors(d,f),g.subVectors(u,f),v.cross(g),h.fromBufferAttribute(s,T),p.fromBufferAttribute(s,N),m.fromBufferAttribute(s,y),h.add(v),p.add(v),m.add(v),s.setXYZ(T,h.x,h.y,h.z),s.setXYZ(N,p.x,p.y,p.z),s.setXYZ(y,m.x,m.y,m.z)}else for(let S=0,E=i.count;S<E;S+=3)u.fromBufferAttribute(i,S+0),f.fromBufferAttribute(i,S+1),d.fromBufferAttribute(i,S+2),v.subVectors(d,f),g.subVectors(u,f),v.cross(g),s.setXYZ(S+0,v.x,v.y,v.z),s.setXYZ(S+1,v.x,v.y,v.z),s.setXYZ(S+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)An.fromBufferAttribute(e,i),An.normalize(),e.setXYZ(i,An.x,An.y,An.z)}toNonIndexed(){function e(h,p){const m=h.array,v=h.itemSize,g=h.normalized,S=new m.constructor(p.length*v);let E=0,T=0;for(let N=0,y=p.length;N<y;N++){h.isInterleavedBufferAttribute?E=p[N]*h.data.stride+h.offset:E=p[N]*v;for(let M=0;M<v;M++)S[T++]=m[E++]}return new Kr(S,v,g)}if(this.index===null)return oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Zi,s=this.index.array,u=this.attributes;for(const h in u){const p=u[h],m=e(p,s);i.setAttribute(h,m)}const f=this.morphAttributes;for(const h in f){const p=[],m=f[h];for(let v=0,g=m.length;v<g;v++){const S=m[v],E=e(S,s);p.push(E)}i.morphAttributes[h]=p}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,p=d.length;h<p;h++){const m=d[h];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const p in s){const m=s[p];e.data.attributes[p]=m.toJSON(e.data)}const u={};let f=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],v=[];for(let g=0,S=m.length;g<S;g++){const E=m[g];v.push(E.toJSON(e.data))}v.length>0&&(u[p]=v,f=!0)}f&&(e.data.morphAttributes=u,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const u=e.attributes;for(const m in u){const v=u[m];this.setAttribute(m,v.clone(i))}const f=e.morphAttributes;for(const m in f){const v=[],g=f[m];for(let S=0,E=g.length;S<E;S++)v.push(g[S].clone(i));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,v=d.length;m<v;m++){const g=d[m];this.addGroup(g.start,g.count,g.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qh=new ot,MT=new ot,yT=new ce;class _r{constructor(e=new ot(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,u){return this.normal.set(e,i,s),this.constant=u,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const u=qh.subVectors(s,i).cross(MT.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(u,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,s=!0){const u=e.delta(qh),f=this.normal.dot(u);if(f===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const d=-(e.start.dot(this.normal)+this.constant)/f;return s===!0&&(d<0||d>1)?null:i.copy(e.start).addScaledVector(u,d)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||yT.getNormalMatrix(e),u=this.coplanarPoint(qh).applyMatrix4(e),f=this.normal.applyMatrix3(s).normalize();return this.constant=-u.dot(f),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let ET=0;class Dl extends $r{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ET++}),this.uuid=ho(),this.name="",this.type="Material",this.blending=xl,this.side=Qr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=CS,this.blendDst=wS,this.blendEquation=io,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=El,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=UE,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ch,this.stencilZFail=Ch,this.stencilZPass=Ch,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){oe(`Material: parameter '${i}' has value of undefined.`);continue}const u=this[i];if(u===void 0){oe(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}u&&u.isColor?u.set(s):u&&u.isVector2&&s&&s.isVector2||u&&u.isEuler&&s&&s.isEuler||u&&u.isVector3&&s&&s.isVector3?u.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,s.blending=this.blending,s.side=this.side,s.shadowSide=this.shadowSide,s.vertexColors=this.vertexColors,s.opacity=this.opacity,s.transparent=this.transparent,s.blendSrc=this.blendSrc,s.blendDst=this.blendDst,s.blendEquation=this.blendEquation,s.blendSrcAlpha=this.blendSrcAlpha,s.blendDstAlpha=this.blendDstAlpha,s.blendEquationAlpha=this.blendEquationAlpha,s.blendColor=this.blendColor.getHex(),s.blendAlpha=this.blendAlpha,s.depthFunc=this.depthFunc,s.depthTest=this.depthTest,s.depthWrite=this.depthWrite,s.colorWrite=this.colorWrite,s.clipIntersection=this.clipIntersection,s.clipShadows=this.clipShadows,s.stencilWriteMask=this.stencilWriteMask,s.stencilFunc=this.stencilFunc,s.stencilRef=this.stencilRef,s.stencilFuncMask=this.stencilFuncMask,s.stencilFail=this.stencilFail,s.stencilZFail=this.stencilZFail,s.stencilZPass=this.stencilZPass,s.stencilWrite=this.stencilWrite,s.polygonOffset=this.polygonOffset,s.polygonOffsetFactor=this.polygonOffsetFactor,s.polygonOffsetUnits=this.polygonOffsetUnits,s.dithering=this.dithering,s.alphaTest=this.alphaTest,s.alphaHash=this.alphaHash,s.alphaToCoverage=this.alphaToCoverage,s.premultipliedAlpha=this.premultipliedAlpha,s.forceSinglePass=this.forceSinglePass,s.allowOverride=this.allowOverride,s.visible=this.visible,s.toneMapped=this.toneMapped,s.name=this.name,this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(s.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(s.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(s.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(s.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(s.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(s.clippingPlanes=this.clippingPlanes.map(f=>f.toJSON())),this.rotation!==void 0&&(s.rotation=this.rotation),this.depthPacking!==void 0&&(s.depthPacking=this.depthPacking),this.linewidth!==void 0&&(s.linewidth=this.linewidth),this.linecap!==void 0&&(s.linecap=this.linecap),this.linejoin!==void 0&&(s.linejoin=this.linejoin),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.wireframe!==void 0&&(s.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(s.flatShading=this.flatShading),this.fog!==void 0&&(s.fog=this.fog),Object.keys(this.userData).length>0&&(s.userData=this.userData);function u(f){const d=[];for(const h in f){const p=f[h];delete p.metadata,d.push(p)}return d}if(i){const f=u(e.textures),d=u(e.images);f.length>0&&(s.textures=f),d.length>0&&(s.images=d)}return s}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ce().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(s=>new _r().fromJSON(s))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new le().fromArray(s)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new le().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=i[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const u=i.length;s=new Array(u);for(let f=0;f!==u;++f)s[f]=i[f].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ua=new ot,Yh=new ot,lc=new ot,uc=new ot;class JS{constructor(e=new ot,i=new ot(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ua)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ua.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ua.copy(this.origin).addScaledVector(this.direction,i),Ua.distanceToSquared(e))}distanceSqToSegment(e,i,s,u){Yh.copy(e).add(i).multiplyScalar(.5),lc.copy(i).sub(e).normalize(),uc.copy(this.origin).sub(Yh);const f=e.distanceTo(i)*.5,d=-this.direction.dot(lc),h=uc.dot(this.direction),p=-uc.dot(lc),m=uc.lengthSq(),v=Math.abs(1-d*d);let g,S,E,T;if(v>0)if(g=d*p-h,S=d*h-p,T=f*v,g>=0)if(S>=-T)if(S<=T){const N=1/v;g*=N,S*=N,E=g*(g+d*S+2*h)+S*(d*g+S+2*p)+m}else S=f,g=Math.max(0,-(d*S+h)),E=-g*g+S*(S+2*p)+m;else S=-f,g=Math.max(0,-(d*S+h)),E=-g*g+S*(S+2*p)+m;else S<=-T?(g=Math.max(0,-(-d*f+h)),S=g>0?-f:Math.min(Math.max(-f,-p),f),E=-g*g+S*(S+2*p)+m):S<=T?(g=0,S=Math.min(Math.max(-f,-p),f),E=S*(S+2*p)+m):(g=Math.max(0,-(d*f+h)),S=g>0?f:Math.min(Math.max(-f,-p),f),E=-g*g+S*(S+2*p)+m);else S=d>0?-f:f,g=Math.max(0,-(d*S+h)),E=-g*g+S*(S+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,g),u&&u.copy(Yh).addScaledVector(lc,S),E}intersectSphere(e,i){if(e.radius<0)return null;Ua.subVectors(e.center,this.origin);const s=Ua.dot(this.direction),u=Ua.dot(Ua)-s*s,f=e.radius*e.radius;if(u>f)return null;const d=Math.sqrt(f-u),h=s-d,p=s+d;return p<0?null:h<0?this.at(p,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,u,f,d,h,p;const m=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,S=this.origin;return m>=0?(s=(e.min.x-S.x)*m,u=(e.max.x-S.x)*m):(s=(e.max.x-S.x)*m,u=(e.min.x-S.x)*m),v>=0?(f=(e.min.y-S.y)*v,d=(e.max.y-S.y)*v):(f=(e.max.y-S.y)*v,d=(e.min.y-S.y)*v),s>d||f>u||((f>s||isNaN(s))&&(s=f),(d<u||isNaN(u))&&(u=d),g>=0?(h=(e.min.z-S.z)*g,p=(e.max.z-S.z)*g):(h=(e.max.z-S.z)*g,p=(e.min.z-S.z)*g),s>p||h>u)||((h>s||s!==s)&&(s=h),(p<u||u!==u)&&(u=p),u<0)?null:this.at(s>=0?s:u,i)}intersectsBox(e){return this.intersectBox(e,Ua)!==null}intersectTriangle(e,i,s,u,f){const d=this.origin,h=this.direction,p=h.x,m=h.y,v=h.z,g=e.x-d.x,S=e.y-d.y,E=e.z-d.z,T=i.x-d.x,N=i.y-d.y,y=i.z-d.z,M=s.x-d.x,D=s.y-d.y,z=s.z-d.z,L=Math.abs(p),I=Math.abs(m),O=Math.abs(v);let x,C,W,F,H,$,ct,X,it,q,k,ut;if(L>=I&&L>=O?(W=p,$=g,it=T,ut=M,p>=0?(x=m,C=v,F=S,H=E,ct=N,X=y,q=D,k=z):(x=v,C=m,F=E,H=S,ct=y,X=N,q=z,k=D)):I>=O?(W=m,$=S,it=N,ut=D,m>=0?(x=v,C=p,F=E,H=g,ct=y,X=T,q=z,k=M):(x=p,C=v,F=g,H=E,ct=T,X=y,q=M,k=z)):(W=v,$=E,it=y,ut=z,v>=0?(x=p,C=m,F=g,H=S,ct=T,X=N,q=M,k=D):(x=m,C=p,F=S,H=g,ct=N,X=T,q=D,k=M)),W===0)return null;const tt=x/W,ft=C/W,xt=1/W,Vt=F-tt*$,te=H-ft*$,w=ct-tt*it,J=X-ft*it,St=q-tt*ut,yt=k-ft*ut,Et=St*J-yt*w,Ft=Vt*yt-te*St,ee=w*te-J*Vt;if(u){if(Et<0||Ft<0||ee<0)return null}else if((Et<0||Ft<0||ee<0)&&(Et>0||Ft>0||ee>0))return null;const Mt=Et+Ft+ee;if(Mt===0)return null;const Ht=xt*(Et*$+Ft*it+ee*ut);return(Mt>0?Ht<0:Ht>0)?null:this.at(Ht/Mt,f)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jS extends Dl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jr,this.combine=DS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wv=new un,Wr=new JS,cc=new qc,qv=new ot,fc=new ot,dc=new ot,hc=new ot,Zh=new ot,pc=new ot,Yv=new ot,mc=new ot;class Yi extends Qn{constructor(e=new Zi,i=new jS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const u=i[s[0]];if(u!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,d=u.length;f<d;f++){const h=u[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=f}}}}getVertexPosition(e,i){const s=this.geometry,u=s.attributes.position,f=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(u,e);const h=this.morphTargetInfluences;if(f&&h){pc.set(0,0,0);for(let p=0,m=f.length;p<m;p++){const v=h[p],g=f[p];v!==0&&(Zh.fromBufferAttribute(g,e),d?pc.addScaledVector(Zh,v):pc.addScaledVector(Zh.sub(i),v))}i.add(pc)}return i}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,i){const s=this.geometry,u=this.material,f=this.matrixWorld;u!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),cc.copy(s.boundingSphere),cc.applyMatrix4(f),Wr.copy(e.ray).recast(e.near),!(cc.containsPoint(Wr.origin)===!1&&(Wr.intersectSphere(cc,qv)===null||Wr.origin.distanceToSquared(qv)>(e.far-e.near)**2))&&(Wv.copy(f).invert(),Wr.copy(e.ray).applyMatrix4(Wv),!(s.boundingBox!==null&&Wr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Wr)))}_computeIntersections(e,i,s){let u;const f=this.geometry,d=this.material,h=f.index,p=f.attributes.position,m=f.attributes.uv,v=f.attributes.uv1,g=f.attributes.normal,S=f.groups,E=f.drawRange;if(h!==null)if(Array.isArray(d))for(let T=0,N=S.length;T<N;T++){const y=S[T],M=d[y.materialIndex],D=Math.max(y.start,E.start),z=Math.min(h.count,Math.min(y.start+y.count,E.start+E.count));for(let L=D,I=z;L<I;L+=3){const O=h.getX(L),x=h.getX(L+1),C=h.getX(L+2);u=gc(this,M,e,s,m,v,g,O,x,C),u&&(u.faceIndex=Math.floor(L/3),u.face.materialIndex=y.materialIndex,i.push(u))}}else{const T=Math.max(0,E.start),N=Math.min(h.count,E.start+E.count);for(let y=T,M=N;y<M;y+=3){const D=h.getX(y),z=h.getX(y+1),L=h.getX(y+2);u=gc(this,d,e,s,m,v,g,D,z,L),u&&(u.faceIndex=Math.floor(y/3),i.push(u))}}else if(p!==void 0)if(Array.isArray(d))for(let T=0,N=S.length;T<N;T++){const y=S[T],M=d[y.materialIndex],D=Math.max(y.start,E.start),z=Math.min(p.count,Math.min(y.start+y.count,E.start+E.count));for(let L=D,I=z;L<I;L+=3){const O=L,x=L+1,C=L+2;u=gc(this,M,e,s,m,v,g,O,x,C),u&&(u.faceIndex=Math.floor(L/3),u.face.materialIndex=y.materialIndex,i.push(u))}}else{const T=Math.max(0,E.start),N=Math.min(p.count,E.start+E.count);for(let y=T,M=N;y<M;y+=3){const D=y,z=y+1,L=y+2;u=gc(this,d,e,s,m,v,g,D,z,L),u&&(u.faceIndex=Math.floor(y/3),i.push(u))}}}}function TT(o,e,i,s,u,f,d,h){let p;if(e.side===Kn?p=s.intersectTriangle(d,f,u,!0,h):p=s.intersectTriangle(u,f,d,e.side===Qr,h),p===null)return null;mc.copy(h),mc.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(mc);return m<i.near||m>i.far?null:{distance:m,point:mc.clone(),object:o}}function gc(o,e,i,s,u,f,d,h,p,m){o.getVertexPosition(h,fc),o.getVertexPosition(p,dc),o.getVertexPosition(m,hc);const v=TT(o,e,i,s,fc,dc,hc,Yv);if(v){const g=new ot;ki.getBarycoord(Yv,fc,dc,hc,g),u&&(v.uv=ki.getInterpolatedAttribute(u,h,p,m,g,new le)),f&&(v.uv1=ki.getInterpolatedAttribute(f,h,p,m,g,new le)),d&&(v.normal=ki.getInterpolatedAttribute(d,h,p,m,g,new ot),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const S={a:h,b:p,c:m,normal:new ot,materialIndex:0};ki.getNormal(fc,dc,hc,S.normal),v.face=S,v.barycoord=g}return v}class bT extends Xn{constructor(e=null,i=1,s=1,u,f,d,h,p,m=zn,v=zn,g,S){super(null,d,h,p,m,v,u,f,g,S),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const qr=new qc,AT=new le(.5,.5),_c=new ot;class Fc{constructor(e=new _r,i=new _r,s=new _r,u=new _r,f=new _r,d=new _r){this.planes=[e,i,s,u,f,d]}set(e,i,s,u,f,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(s),h[3].copy(u),h[4].copy(f),h[5].copy(d),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Wi,s=!1){const u=this.planes,f=e.elements,d=f[0],h=f[1],p=f[2],m=f[3],v=f[4],g=f[5],S=f[6],E=f[7],T=f[8],N=f[9],y=f[10],M=f[11],D=f[12],z=f[13],L=f[14],I=f[15];if(u[0].setComponents(m-d,E-v,M-T,I-D).normalize(),u[1].setComponents(m+d,E+v,M+T,I+D).normalize(),u[2].setComponents(m+h,E+g,M+N,I+z).normalize(),u[3].setComponents(m-h,E-g,M-N,I-z).normalize(),s)u[4].setComponents(p,S,y,L).normalize(),u[5].setComponents(m-p,E-S,M-y,I-L).normalize();else if(u[4].setComponents(m-p,E-S,M-y,I-L).normalize(),i===Wi)u[5].setComponents(m+p,E+S,M+y,I+L).normalize();else if(i===Bc)u[5].setComponents(p,S,y,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),qr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qr)}intersectsSprite(e){qr.center.set(0,0,0);const i=AT.distanceTo(e.center);return qr.radius=.7071067811865476+i,qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(qr)}intersectsSphere(e){const i=this.planes,s=e.center,u=-e.radius;for(let f=0;f<6;f++)if(i[f].distanceToPoint(s)<u)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const u=i[s];if(_c.x=u.normal.x>0?e.max.x:e.min.x,_c.y=u.normal.y>0?e.max.y:e.min.y,_c.z=u.normal.z>0?e.max.z:e.min.z,u.distanceToPoint(_c)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Zv=new un;class am{constructor(){this.coordinateSystem=Wi,this._frustums=[],this._count=0}setFromArrayCamera(e){const i=e.cameras,s=this._frustums;for(let u=0;u<i.length;u++){const f=i[u];Zv.multiplyMatrices(f.projectionMatrix,f.matrixWorldInverse),s[u]===void 0&&(s[u]=new Fc),s[u].setFromProjectionMatrix(Zv,f.coordinateSystem,f.reversedDepth)}return this._count=i.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const i=this._frustums;for(let s=0;s<this._count;s++)if(i[s].intersectsObject(e))return!0;return!1}intersectsSprite(e){const i=this._frustums;for(let s=0;s<this._count;s++)if(i[s].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const i=this._frustums;for(let s=0;s<this._count;s++)if(i[s].intersectsSphere(e))return!0;return!1}intersectsBox(e){const i=this._frustums;for(let s=0;s<this._count;s++)if(i[s].intersectsBox(e))return!0;return!1}containsPoint(e){const i=this._frustums;for(let s=0;s<this._count;s++)if(i[s].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const i=this._frustums,s=e._frustums;for(let u=0;u<e._count;u++)i[u]===void 0&&(i[u]=new Fc),i[u].copy(s[u]);return this._count=e._count,this}clone(){return new am().copy(this)}}class RT extends Dl{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Kv=new un,Fp=new JS,vc=new qc,Sc=new ot;class CT extends Qn{constructor(e=new Zi,i=new RT){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,i){const s=this.geometry,u=this.matrixWorld,f=e.params.Points.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),vc.copy(s.boundingSphere),vc.applyMatrix4(u),vc.radius+=f,e.ray.intersectsSphere(vc)===!1)return;Kv.copy(u).invert(),Fp.copy(e.ray).applyMatrix4(Kv);const h=f/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,m=s.index,g=s.attributes.position;if(m!==null){const S=Math.max(0,d.start),E=Math.min(m.count,d.start+d.count);for(let T=S,N=E;T<N;T++){const y=m.getX(T);Sc.fromBufferAttribute(g,y),Qv(Sc,y,p,u,e,i,this)}}else{const S=Math.max(0,d.start),E=Math.min(g.count,d.start+d.count);for(let T=S,N=E;T<N;T++)Sc.fromBufferAttribute(g,T),Qv(Sc,T,p,u,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const u=i[s[0]];if(u!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,d=u.length;f<d;f++){const h=u[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=f}}}}}function Qv(o,e,i,s,u,f,d){const h=Fp.distanceSqToPoint(o);if(h<i){const p=new ot;Fp.closestPointToPoint(o,p),p.applyMatrix4(s);const m=u.ray.origin.distanceTo(p);if(m<u.near||m>u.far)return;f.push({distance:m,distanceToRay:Math.sqrt(h),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:d})}}class $S extends Xn{constructor(e=[],i=so,s,u,f,d,h,p,m,v){super(e,i,s,u,f,d,h,p,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class lo extends Xn{constructor(e,i,s=da,u,f,d,h=zn,p=zn,m,v=xr,g=1){if(v!==xr&&v!==Sr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:i,depth:g};super(S,u,f,d,h,p,v,s,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new im(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return i.compareFunction=this.compareFunction,i}}class tx extends lo{constructor(e,i=da,s=so,u,f,d=zn,h=zn,p,m=xr){const v={width:e,height:e,depth:1},g=[v,v,v,v,v,v];super(e,e,i,s,u,f,d,h,p,m),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ex extends Xn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Nl extends Zi{constructor(e=1,i=1,s=1,u=1,f=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:u,heightSegments:f,depthSegments:d};const h=this;u=Math.floor(u),f=Math.floor(f),d=Math.floor(d);const p=[],m=[],v=[],g=[];let S=0,E=0;T("z","y","x",-1,-1,s,i,e,d,f,0),T("z","y","x",1,-1,s,i,-e,d,f,1),T("x","z","y",1,1,e,s,i,u,d,2),T("x","z","y",1,-1,e,s,-i,u,d,3),T("x","y","z",1,-1,e,i,s,u,f,4),T("x","y","z",-1,-1,e,i,-s,u,f,5),this.setIndex(p),this.setAttribute("position",new Rn(m,3)),this.setAttribute("normal",new Rn(v,3)),this.setAttribute("uv",new Rn(g,2));function T(N,y,M,D,z,L,I,O,x,C,W){const F=L/x,H=I/C,$=L/2,ct=I/2,X=O/2,it=x+1,q=C+1;let k=0,ut=0;const tt=new ot;for(let ft=0;ft<q;ft++){const xt=ft*H-ct;for(let Vt=0;Vt<it;Vt++){const te=Vt*F-$;tt[N]=te*D,tt[y]=xt*z,tt[M]=X,m.push(tt.x,tt.y,tt.z),tt[N]=0,tt[y]=0,tt[M]=O>0?1:-1,v.push(tt.x,tt.y,tt.z),g.push(Vt/x),g.push(1-ft/C),k+=1}}for(let ft=0;ft<C;ft++)for(let xt=0;xt<x;xt++){const Vt=S+xt+it*ft,te=S+xt+it*(ft+1),w=S+(xt+1)+it*(ft+1),J=S+(xt+1)+it*ft;p.push(Vt,te,J),p.push(te,w,J),ut+=6}h.addGroup(E,ut,W),E+=ut,S+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class uo extends Zi{constructor(e=1,i=1,s=1,u=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:u};const f=e/2,d=i/2,h=Math.floor(s),p=Math.floor(u),m=h+1,v=p+1,g=e/h,S=i/p,E=[],T=[],N=[],y=[];for(let M=0;M<v;M++){const D=M*S-d;for(let z=0;z<m;z++){const L=z*g-f;T.push(L,-D,0),N.push(0,0,1),y.push(z/h),y.push(1-M/p)}}for(let M=0;M<p;M++)for(let D=0;D<h;D++){const z=D+m*M,L=D+m*(M+1),I=D+1+m*(M+1),O=D+1+m*M;E.push(z,L,O),E.push(L,I,O)}this.setIndex(E),this.setAttribute("position",new Rn(T,3)),this.setAttribute("normal",new Rn(N,3)),this.setAttribute("uv",new Rn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uo(e.width,e.height,e.widthSegments,e.heightSegments)}}class rm extends Zi{constructor(e=1,i=32,s=16,u=0,f=Math.PI*2,d=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:u,phiLength:f,thetaStart:d,thetaLength:h},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const p=Math.min(d+h,Math.PI);let m=0;const v=[],g=new ot,S=new ot,E=[],T=[],N=[],y=[];for(let M=0;M<=s;M++){const D=[],z=M/s,L=d+z*h,I=e*Math.cos(L),O=Math.sqrt(e*e-I*I);let x=0;M===0&&d===0?x=.5/i:M===s&&p===Math.PI&&(x=-.5/i);for(let C=0;C<=i;C++){const W=C/i,F=u+W*f;g.x=-O*Math.cos(F),g.y=I,g.z=O*Math.sin(F),T.push(g.x,g.y,g.z),S.copy(g).normalize(),N.push(S.x,S.y,S.z),y.push(W+x,1-z),D.push(m++)}v.push(D)}for(let M=0;M<s;M++)for(let D=0;D<i;D++){const z=v[M][D+1],L=v[M][D],I=v[M+1][D],O=v[M+1][D+1];(M!==0||d>0)&&E.push(z,L,O),(M!==s-1||p<Math.PI)&&E.push(L,I,O)}this.setIndex(E),this.setAttribute("position",new Rn(T,3)),this.setAttribute("normal",new Rn(N,3)),this.setAttribute("uv",new Rn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rm(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function co(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const u=o[i][s];if(Jv(u))u.isRenderTargetTexture?(oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=u.clone();else if(Array.isArray(u))if(Jv(u[0])){const f=[];for(let d=0,h=u.length;d<h;d++)f[d]=u[d].clone();e[i][s]=f}else e[i][s]=u.slice();else e[i][s]=u}}return e}function Zn(o){const e={};for(let i=0;i<o.length;i++){const s=co(o[i]);for(const u in s)e[u]=s[u]}return e}function Jv(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function wT(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function nx(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:be.workingColorSpace}const Cl={clone:co,merge:Zn};var DT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,NT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bn extends Dl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=DT,this.fragmentShader=NT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=co(e.uniforms),this.uniformsGroups=wT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const u in this.uniforms){const d=this.uniforms[u].value;d&&d.isTexture?i.uniforms[u]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[u]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[u]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[u]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[u]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[u]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[u]={type:"m4",value:d.toArray()}:i.uniforms[u]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const u in this.extensions)this.extensions[u]===!0&&(s[u]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const s in e.uniforms){const u=e.uniforms[s];switch(this.uniforms[s]={},u.type){case"t":this.uniforms[s].value=i[u.value]||null;break;case"c":this.uniforms[s].value=new Ce().setHex(u.value);break;case"v2":this.uniforms[s].value=new le().fromArray(u.value);break;case"v3":this.uniforms[s].value=new ot().fromArray(u.value);break;case"v4":this.uniforms[s].value=new ln().fromArray(u.value);break;case"m3":this.uniforms[s].value=new ce().fromArray(u.value);break;case"m4":this.uniforms[s].value=new un().fromArray(u.value);break;default:this.uniforms[s].value=u.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)this.extensions[s]=e.extensions[s];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class ix extends Bn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class UT extends Dl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=DE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class LT extends Dl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Kh={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(jv(o)||(this.files[o]=e))},get:function(o){if(this.enabled!==!1&&!jv(o))return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};function jv(o){try{const e=o.slice(o.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class OT{constructor(e,i,s){const u=this;let f=!1,d=0,h=0,p;const m=[];this.onStart=void 0,this.onLoad=e,this.onProgress=i,this.onError=s,this._abortController=null,this.itemStart=function(v){h++,f===!1&&u.onStart!==void 0&&u.onStart(v,d,h),f=!0},this.itemEnd=function(v){d++,u.onProgress!==void 0&&u.onProgress(v,d,h),d===h&&(f=!1,u.onLoad!==void 0&&u.onLoad())},this.itemError=function(v){u.onError!==void 0&&u.onError(v)},this.resolveURL=function(v){return v=v.normalize("NFC"),p?p(v):v},this.setURLModifier=function(v){return p=v,this},this.addHandler=function(v,g){return m.push(v,g),this},this.removeHandler=function(v){const g=m.indexOf(v);return g!==-1&&m.splice(g,2),this},this.getHandler=function(v){for(let g=0,S=m.length;g<S;g+=2){const E=m[g],T=m[g+1];if(E.global&&(E.lastIndex=0),E.test(v))return T}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const PT=new OT;let sm=class{constructor(e){this.manager=e!==void 0?e:PT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,i){const s=this;return new Promise(function(u,f){s.load(e,u,i,f)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};sm.DEFAULT_MATERIAL_NAME="__DEFAULT";const to=new WeakMap;class IT extends sm{constructor(e){super(e)}load(e,i,s,u){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const f=this,d=Kh.get(`image:${e}`);if(d!==void 0){if(d.complete===!0)f.manager.itemStart(e),setTimeout(function(){i&&i(d),f.manager.itemEnd(e)},0);else{let g=to.get(d);g===void 0&&(g=[],to.set(d,g)),g.push({onLoad:i,onError:u})}return d}const h=Al("img");function p(){v(),i&&i(this);const g=to.get(this)||[];for(let S=0;S<g.length;S++){const E=g[S];E.onLoad&&E.onLoad(this)}to.delete(this),f.manager.itemEnd(e)}function m(g){v(),u&&u(g),Kh.remove(`image:${e}`);const S=to.get(this)||[];for(let E=0;E<S.length;E++){const T=S[E];T.onError&&T.onError(g)}to.delete(this),f.manager.itemError(e),f.manager.itemEnd(e)}function v(){h.removeEventListener("load",p,!1),h.removeEventListener("error",m,!1)}return h.addEventListener("load",p,!1),h.addEventListener("error",m,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),Kh.add(`image:${e}`,h),f.manager.itemStart(e),h.fetchPriority=this.priority,h.src=e,h}}class zT extends sm{constructor(e){super(e)}load(e,i,s,u){const f=new Xn,d=new IT(this.manager);return d.setPriority(this.priority),d.setCache(this.cache),d.setCrossOrigin(this.crossOrigin),d.setPath(this.path),d.load(e,function(h){f.image=h,f.needsUpdate=!0,i!==void 0&&i(f)},s,u),f}}const xc=new ot,Mc=new po,sa=new ot;class ax extends Qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new un,this.projectionMatrix=new un,this.projectionMatrixInverse=new un,this.coordinateSystem=Wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(xc,Mc,sa),sa.x===1&&sa.y===1&&sa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xc,Mc,sa.set(1,1,1)).invert()}updateWorldMatrix(e,i,s=!1){super.updateWorldMatrix(e,i,s),this.matrixWorld.decompose(xc,Mc,sa),sa.x===1&&sa.y===1&&sa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xc,Mc,sa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const gr=new ot,$v=new le,tS=new le;class Xi extends ax{constructor(e=50,i=1,s=.1,u=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=u,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Rl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ml*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rl*2*Math.atan(Math.tan(Ml*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){gr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(gr.x,gr.y).multiplyScalar(-e/gr.z),gr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(gr.x,gr.y).multiplyScalar(-e/gr.z)}getViewSize(e,i){return this.getViewBounds(e,$v,tS),i.subVectors(tS,$v)}setViewOffset(e,i,s,u,f,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=u,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Ml*.5*this.fov)/this.zoom,s=2*i,u=this.aspect*s,f=-.5*u;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,m=d.fullHeight;f+=d.offsetX*u/p,i-=d.offsetY*s/m,u*=d.width/p,s*=d.height/m}const h=this.filmOffset;h!==0&&(f+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+u,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class rx extends ax{constructor(e=-1,i=1,s=1,u=-1,f=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=u,this.near=f,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,u,f,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=u,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,u=(this.top+this.bottom)/2;let f=s-e,d=s+e,h=u+i,p=u-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=m*this.view.offsetX,d=f+m*this.view.width,h-=v*this.view.offsetY,p=h-v*this.view.height}this.projectionMatrix.makeOrthographic(f,d,h,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const eo=-90,no=1;class Hp extends Qn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const u=new Xi(eo,no,e,i);u.layers=this.layers,this.add(u);const f=new Xi(eo,no,e,i);f.layers=this.layers,this.add(f);const d=new Xi(eo,no,e,i);d.layers=this.layers,this.add(d);const h=new Xi(eo,no,e,i);h.layers=this.layers,this.add(h);const p=new Xi(eo,no,e,i);p.layers=this.layers,this.add(p);const m=new Xi(eo,no,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,u,f,d,h,p]=i;for(const m of i)this.remove(m);if(e===Wi)s.up.set(0,1,0),s.lookAt(1,0,0),u.up.set(0,1,0),u.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Bc)s.up.set(0,-1,0),s.lookAt(-1,0,0),u.up.set(0,-1,0),u.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:u}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[f,d,h,p,m,v]=this.children,g=e.getRenderTarget(),S=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const N=s.texture.mipmapsAutoUpdate;s.texture.mipmapsAutoUpdate=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(s,0,u),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,f),e.setRenderTarget(s,1,u),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(s,2,u),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(s,3,u),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(s,4,u),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),s.texture.mipmapsAutoUpdate=N,e.setRenderTarget(s,5,u),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,v),e.setRenderTarget(g,S,E),e.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class BT extends Xi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class sx{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=FT.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function FT(){this._document.hidden===!1&&this.reset()}function eS(o,e,i,s){const u=HT(s);switch(i){case IS:return o*e;case BS:return o*e/u.components*u.byteLength;case jp:return o*e/u.components*u.byteLength;case Jr:return o*e*2/u.components*u.byteLength;case $p:return o*e*2/u.components*u.byteLength;case zS:return o*e*3/u.components*u.byteLength;case fa:return o*e*4/u.components*u.byteLength;case tm:return o*e*4/u.components*u.byteLength;case Ac:case Rc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Cc:case wc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case cp:case dp:return Math.max(o,16)*Math.max(e,8)/4;case up:case fp:return Math.max(o,8)*Math.max(e,8)/2;case hp:case pp:case gp:case _p:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case mp:case Oc:case vp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Sp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case xp:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Mp:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case yp:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Ep:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Tp:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case bp:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Ap:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Rp:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Cp:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case wp:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Dp:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Np:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Up:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Lp:case Op:case Pp:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Ip:case zp:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Pc:case Bp:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function HT(o){switch(o){case Ni:case US:return{byteLength:1,components:1};case bl:case LS:case ri:return{byteLength:2,components:1};case Qp:case Jp:return{byteLength:2,components:4};case da:case Kp:case ca:return{byteLength:4,components:1};case OS:case PS:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kp}}));typeof window<"u"&&(window.__THREE__?oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ox(){let o=null,e=!1,i=null,s=null;function u(f,d){s=o.requestAnimationFrame(u),i(f,d)}return{start:function(){e!==!0&&i!==null&&o!==null&&(s=o.requestAnimationFrame(u),e=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(f){i=f},setContext:function(f){o=f}}}function GT(o){const e=new WeakMap;function i(h,p){const m=h.array,v=h.usage,g=m.byteLength,S=o.createBuffer();o.bindBuffer(p,S),o.bufferData(p,m,v),h.onUploadCallback();let E;if(m instanceof Float32Array)E=o.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)E=o.HALF_FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?E=o.HALF_FLOAT:E=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)E=o.SHORT;else if(m instanceof Uint32Array)E=o.UNSIGNED_INT;else if(m instanceof Int32Array)E=o.INT;else if(m instanceof Int8Array)E=o.BYTE;else if(m instanceof Uint8Array)E=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)E=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:S,type:E,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:g}}function s(h,p,m){const v=p.array,g=p.updateRanges;if(o.bindBuffer(m,h),g.length===0)o.bufferSubData(m,0,v);else{g.sort((E,T)=>E.start-T.start);let S=0;for(let E=1;E<g.length;E++){const T=g[S],N=g[E];N.start<=T.start+T.count+1?T.count=Math.max(T.count,N.start+N.count-T.start):(++S,g[S]=N)}g.length=S+1;for(let E=0,T=g.length;E<T;E++){const N=g[E];o.bufferSubData(m,N.start*v.BYTES_PER_ELEMENT,v,N.start,N.count)}p.clearUpdateRanges()}p.onUploadCallback()}function u(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function f(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);p&&(o.deleteBuffer(p.buffer),e.delete(h))}function d(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=e.get(h);(!v||v.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=e.get(h);if(m===void 0)e.set(h,i(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,h,p),m.version=h.version}}return{get:u,remove:f,update:d}}var VT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,XT=`#ifdef USE_ALPHAHASH
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
#endif`,kT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,WT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,YT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ZT=`#ifdef USE_AOMAP
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
#endif`,KT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,QT=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,JT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$T=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,eb=`#ifdef USE_IRIDESCENCE
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
#endif`,nb=`#ifdef USE_BUMPMAP
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
#endif`,ib=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ab=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ob=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,lb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ub=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,cb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,fb=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,db=`vec3 transformedNormal = objectNormal;
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
#endif`,hb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_b="gl_FragColor = linearToOutputTexel( gl_FragColor );",vb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,xb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Mb=`#ifdef USE_ENVMAP
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
#endif`,yb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Eb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Tb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ab=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cb=`#ifdef USE_GRADIENTMAP
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
}`,wb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Db=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ub=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,Lb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Ob=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ib=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,Fb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Hb=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Gb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Vb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xb=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,kb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Jb=`#if defined( USE_POINTS_UV )
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
#endif`,jb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$b=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,eA=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iA=`#ifdef USE_MORPHTARGETS
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
#endif`,aA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,sA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,oA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,cA=`#ifdef USE_NORMALMAP
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
#endif`,fA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,_A=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,SA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,MA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,EA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,TA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,bA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,AA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,RA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,CA=`#ifdef USE_SKINNING
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
#endif`,wA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,DA=`#ifdef USE_SKINNING
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
#endif`,NA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,UA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,LA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,OA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,PA=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,IA=`#ifdef USE_TRANSMISSION
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
#endif`,zA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,BA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,FA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,HA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const GA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,VA=`uniform sampler2D t2D;
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
}`,XA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kA=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YA=`#include <common>
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
}`,ZA=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,KA=`#define DISTANCE
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
}`,QA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,JA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$A=`uniform float scale;
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
}`,t1=`uniform vec3 diffuse;
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
}`,e1=`#include <common>
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
}`,n1=`uniform vec3 diffuse;
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
}`,i1=`#define LAMBERT
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
}`,a1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,r1=`#define MATCAP
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
}`,s1=`#define MATCAP
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
}`,o1=`#define NORMAL
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
}`,l1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,u1=`#define PHONG
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
}`,c1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,f1=`#define STANDARD
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
}`,d1=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,h1=`#define TOON
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
}`,p1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,m1=`uniform float size;
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
}`,g1=`uniform vec3 diffuse;
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
}`,_1=`#include <common>
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
}`,v1=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,S1=`uniform float rotation;
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
}`,x1=`uniform vec3 diffuse;
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
}`,_e={alphahash_fragment:VT,alphahash_pars_fragment:XT,alphamap_fragment:kT,alphamap_pars_fragment:WT,alphatest_fragment:qT,alphatest_pars_fragment:YT,aomap_fragment:ZT,aomap_pars_fragment:KT,batching_pars_vertex:QT,batching_vertex:JT,begin_vertex:jT,beginnormal_vertex:$T,bsdfs:tb,iridescence_fragment:eb,bumpmap_pars_fragment:nb,clipping_planes_fragment:ib,clipping_planes_pars_fragment:ab,clipping_planes_pars_vertex:rb,clipping_planes_vertex:sb,color_fragment:ob,color_pars_fragment:lb,color_pars_vertex:ub,color_vertex:cb,common:fb,defaultnormal_vertex:db,displacementmap_pars_vertex:hb,displacementmap_vertex:pb,emissivemap_fragment:mb,emissivemap_pars_fragment:gb,colorspace_fragment:_b,colorspace_pars_fragment:vb,envmap_fragment:Sb,envmap_common_pars_fragment:xb,envmap_pars_fragment:Mb,envmap_pars_vertex:yb,envmap_physical_pars_fragment:Lb,envmap_vertex:Eb,fog_vertex:Tb,fog_pars_vertex:bb,fog_fragment:Ab,fog_pars_fragment:Rb,gradientmap_pars_fragment:Cb,lightmap_pars_fragment:wb,lights_lambert_fragment:Db,lights_lambert_pars_fragment:Nb,lights_pars_begin:Ub,lights_toon_fragment:Ob,lights_toon_pars_fragment:Pb,lights_phong_fragment:Ib,lights_phong_pars_fragment:zb,lights_physical_fragment:Bb,lights_physical_pars_fragment:Fb,lights_fragment_begin:Hb,lights_fragment_maps:Gb,lights_fragment_end:Vb,lightprobes_pars_fragment:Xb,logdepthbuf_fragment:kb,logdepthbuf_pars_fragment:Wb,logdepthbuf_pars_vertex:qb,logdepthbuf_vertex:Yb,map_fragment:Zb,map_pars_fragment:Kb,map_particle_fragment:Qb,map_particle_pars_fragment:Jb,metalnessmap_fragment:jb,metalnessmap_pars_fragment:$b,morphinstance_vertex:tA,morphcolor_vertex:eA,morphnormal_vertex:nA,morphtarget_pars_vertex:iA,morphtarget_vertex:aA,normal_fragment_begin:rA,normal_fragment_maps:sA,normal_pars_fragment:oA,normal_pars_vertex:lA,normal_vertex:uA,normalmap_pars_fragment:cA,clearcoat_normal_fragment_begin:fA,clearcoat_normal_fragment_maps:dA,clearcoat_pars_fragment:hA,iridescence_pars_fragment:pA,opaque_fragment:mA,packing:gA,premultiplied_alpha_fragment:_A,project_vertex:vA,dithering_fragment:SA,dithering_pars_fragment:xA,roughnessmap_fragment:MA,roughnessmap_pars_fragment:yA,shadowmap_pars_fragment:EA,shadowmap_pars_vertex:TA,shadowmap_vertex:bA,shadowmask_pars_fragment:AA,skinbase_vertex:RA,skinning_pars_vertex:CA,skinning_vertex:wA,skinnormal_vertex:DA,specularmap_fragment:NA,specularmap_pars_fragment:UA,tonemapping_fragment:LA,tonemapping_pars_fragment:OA,transmission_fragment:PA,transmission_pars_fragment:IA,uv_pars_fragment:zA,uv_pars_vertex:BA,uv_vertex:FA,worldpos_vertex:HA,background_vert:GA,background_frag:VA,backgroundCube_vert:XA,backgroundCube_frag:kA,cube_vert:WA,cube_frag:qA,depth_vert:YA,depth_frag:ZA,distance_vert:KA,distance_frag:QA,equirect_vert:JA,equirect_frag:jA,linedashed_vert:$A,linedashed_frag:t1,meshbasic_vert:e1,meshbasic_frag:n1,meshlambert_vert:i1,meshlambert_frag:a1,meshmatcap_vert:r1,meshmatcap_frag:s1,meshnormal_vert:o1,meshnormal_frag:l1,meshphong_vert:u1,meshphong_frag:c1,meshphysical_vert:f1,meshphysical_frag:d1,meshtoon_vert:h1,meshtoon_frag:p1,points_vert:m1,points_frag:g1,shadow_vert:_1,shadow_frag:v1,sprite_vert:S1,sprite_frag:x1},Gt={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},ua={basic:{uniforms:Zn([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.fog]),vertexShader:_e.meshbasic_vert,fragmentShader:_e.meshbasic_frag},lambert:{uniforms:Zn([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new Ce(0)},envMapIntensity:{value:1}}]),vertexShader:_e.meshlambert_vert,fragmentShader:_e.meshlambert_frag},phong:{uniforms:Zn([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:_e.meshphong_vert,fragmentShader:_e.meshphong_frag},standard:{uniforms:Zn([Gt.common,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.roughnessmap,Gt.metalnessmap,Gt.fog,Gt.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag},toon:{uniforms:Zn([Gt.common,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.gradientmap,Gt.fog,Gt.lights,{emissive:{value:new Ce(0)}}]),vertexShader:_e.meshtoon_vert,fragmentShader:_e.meshtoon_frag},matcap:{uniforms:Zn([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,{matcap:{value:null}}]),vertexShader:_e.meshmatcap_vert,fragmentShader:_e.meshmatcap_frag},points:{uniforms:Zn([Gt.points,Gt.fog]),vertexShader:_e.points_vert,fragmentShader:_e.points_frag},dashed:{uniforms:Zn([Gt.common,Gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_e.linedashed_vert,fragmentShader:_e.linedashed_frag},depth:{uniforms:Zn([Gt.common,Gt.displacementmap]),vertexShader:_e.depth_vert,fragmentShader:_e.depth_frag},normal:{uniforms:Zn([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,{opacity:{value:1}}]),vertexShader:_e.meshnormal_vert,fragmentShader:_e.meshnormal_frag},sprite:{uniforms:Zn([Gt.sprite,Gt.fog]),vertexShader:_e.sprite_vert,fragmentShader:_e.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_e.background_vert,fragmentShader:_e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:_e.backgroundCube_vert,fragmentShader:_e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_e.cube_vert,fragmentShader:_e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_e.equirect_vert,fragmentShader:_e.equirect_frag},distance:{uniforms:Zn([Gt.common,Gt.displacementmap,{referencePosition:{value:new ot},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_e.distance_vert,fragmentShader:_e.distance_frag},shadow:{uniforms:Zn([Gt.lights,Gt.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:_e.shadow_vert,fragmentShader:_e.shadow_frag}};ua.physical={uniforms:Zn([ua.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ce},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag};const yc={r:0,b:0,g:0},M1=new un,lx=new ce;lx.set(-1,0,0,0,1,0,0,0,1);function y1(o,e,i,s,u,f){const d=new Ce(0);let h=u===!0?0:1,p,m,v=null,g=0,S=null;function E(D){let z=D.isScene===!0?D.background:null;if(z&&z.isTexture){const L=D.backgroundBlurriness>0;z=e.get(z,L)}return z}function T(D){let z=!1;const L=E(D);L===null?y(d,h):L&&L.isColor&&(y(L,1),z=!0);const I=o.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,f):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,f),(o.autoClear||z)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function N(D,z){const L=E(z);L&&L.isCubeTexture?(m===void 0&&(m=new Yi(new Nl(1,1,1),new Bn({name:"BackgroundCubeMaterial",uniforms:co(ua.backgroundCube.uniforms),vertexShader:ua.backgroundCube.vertexShader,fragmentShader:ua.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(I,O,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),m.material.uniforms.envMap.value=L,m.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(M1.makeRotationFromEuler(z.backgroundRotation)).transpose(),L.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(lx),m.material.toneMapped=be.getTransfer(L.colorSpace)!==Be,(v!==L||g!==L.version||S!==o.toneMapping)&&(m.material.needsUpdate=!0,v=L,g=L.version,S=o.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null)):L&&L.isTexture&&(p===void 0&&(p=new Yi(new uo(2,2),new Bn({name:"BackgroundMaterial",uniforms:co(ua.background.uniforms),vertexShader:ua.background.vertexShader,fragmentShader:ua.background.fragmentShader,side:Qr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(p)),p.material.uniforms.t2D.value=L,p.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,p.material.toneMapped=be.getTransfer(L.colorSpace)!==Be,L.matrixAutoUpdate===!0&&L.updateMatrix(),p.material.uniforms.uvTransform.value.copy(L.matrix),(v!==L||g!==L.version||S!==o.toneMapping)&&(p.material.needsUpdate=!0,v=L,g=L.version,S=o.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null))}function y(D,z){D.getRGB(yc,nx(o)),i.buffers.color.setClear(yc.r,yc.g,yc.b,z,f)}function M(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(D,z=1){d.set(D),h=z,y(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(D){h=D,y(d,h)},render:T,addToRenderList:N,dispose:M}}function E1(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},u=S(null);let f=u,d=!1;function h(H,$,ct,X,it){let q=!1;const k=g(H,X,ct,$);f!==k&&(f=k,m(f.object)),q=E(H,X,ct,it),q&&T(H,X,ct,it),it!==null&&e.update(it,o.ELEMENT_ARRAY_BUFFER),(q||d)&&(d=!1,L(H,$,ct,X),it!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(it).buffer))}function p(){return o.createVertexArray()}function m(H){return o.bindVertexArray(H)}function v(H){return o.deleteVertexArray(H)}function g(H,$,ct,X){const it=X.wireframe===!0;let q=s[$.id];q===void 0&&(q={},s[$.id]=q);const k=H.isInstancedMesh===!0?H.id:0;let ut=q[k];ut===void 0&&(ut={},q[k]=ut);let tt=ut[ct.id];tt===void 0&&(tt={},ut[ct.id]=tt);let ft=tt[it];return ft===void 0&&(ft=S(p()),tt[it]=ft),ft}function S(H){const $=[],ct=[],X=[];for(let it=0;it<i;it++)$[it]=0,ct[it]=0,X[it]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:ct,attributeDivisors:X,object:H,attributes:{},index:null}}function E(H,$,ct,X){const it=f.attributes,q=$.attributes;let k=0;const ut=ct.getAttributes();for(const tt in ut)if(ut[tt].location>=0){const xt=it[tt];let Vt=q[tt];if(Vt===void 0&&(tt==="instanceMatrix"&&H.instanceMatrix&&(Vt=H.instanceMatrix),tt==="instanceColor"&&H.instanceColor&&(Vt=H.instanceColor)),xt===void 0||xt.attribute!==Vt||Vt&&xt.data!==Vt.data)return!0;k++}return f.attributesNum!==k||f.index!==X}function T(H,$,ct,X){const it={},q=$.attributes;let k=0;const ut=ct.getAttributes();for(const tt in ut)if(ut[tt].location>=0){let xt=q[tt];xt===void 0&&(tt==="instanceMatrix"&&H.instanceMatrix&&(xt=H.instanceMatrix),tt==="instanceColor"&&H.instanceColor&&(xt=H.instanceColor));const Vt={};Vt.attribute=xt,xt&&xt.data&&(Vt.data=xt.data),it[tt]=Vt,k++}f.attributes=it,f.attributesNum=k,f.index=X}function N(){const H=f.newAttributes;for(let $=0,ct=H.length;$<ct;$++)H[$]=0}function y(H){M(H,0)}function M(H,$){const ct=f.newAttributes,X=f.enabledAttributes,it=f.attributeDivisors;ct[H]=1,X[H]===0&&(o.enableVertexAttribArray(H),X[H]=1),it[H]!==$&&(o.vertexAttribDivisor(H,$),it[H]=$)}function D(){const H=f.newAttributes,$=f.enabledAttributes;for(let ct=0,X=$.length;ct<X;ct++)$[ct]!==H[ct]&&(o.disableVertexAttribArray(ct),$[ct]=0)}function z(H,$,ct,X,it,q,k){k===!0?o.vertexAttribIPointer(H,$,ct,it,q):o.vertexAttribPointer(H,$,ct,X,it,q)}function L(H,$,ct,X){N();const it=X.attributes,q=ct.getAttributes(),k=$.defaultAttributeValues;for(const ut in q){const tt=q[ut];if(tt.location>=0){let ft=it[ut];if(ft===void 0&&(ut==="instanceMatrix"&&H.instanceMatrix&&(ft=H.instanceMatrix),ut==="instanceColor"&&H.instanceColor&&(ft=H.instanceColor)),ft!==void 0){const xt=ft.normalized,Vt=ft.itemSize,te=e.get(ft);if(te===void 0)continue;const w=te.buffer,J=te.type,St=te.bytesPerElement,yt=J===o.INT||J===o.UNSIGNED_INT||ft.gpuType===Kp;if(ft.isInterleavedBufferAttribute){const Et=ft.data,Ft=Et.isInterleavedBuffer===!0?Et.stride:Et.itemSize,ee=ft.offset;if(Et.isInstancedInterleavedBuffer||Et.isInstancedBufferAttribute){for(let Mt=0;Mt<tt.locationSize;Mt++)M(tt.location+Mt,Et.meshPerAttribute);H.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let Mt=0;Mt<tt.locationSize;Mt++)y(tt.location+Mt);o.bindBuffer(o.ARRAY_BUFFER,w);for(let Mt=0;Mt<tt.locationSize;Mt++)z(tt.location+Mt,Vt/tt.locationSize,J,xt,Ft*St,(ee+Vt/tt.locationSize*Mt)*St,yt)}else{if(ft.isInstancedBufferAttribute){for(let Et=0;Et<tt.locationSize;Et++)M(tt.location+Et,ft.meshPerAttribute);H.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let Et=0;Et<tt.locationSize;Et++)y(tt.location+Et);o.bindBuffer(o.ARRAY_BUFFER,w);for(let Et=0;Et<tt.locationSize;Et++)z(tt.location+Et,Vt/tt.locationSize,J,xt,Vt*St,Vt/tt.locationSize*Et*St,yt)}}else if(k!==void 0){const xt=k[ut];if(xt!==void 0)switch(xt.length){case 2:o.vertexAttrib2fv(tt.location,xt);break;case 3:o.vertexAttrib3fv(tt.location,xt);break;case 4:o.vertexAttrib4fv(tt.location,xt);break;default:o.vertexAttrib1fv(tt.location,xt)}}}}D()}function I(){W();for(const H in s){const $=s[H];for(const ct in $){const X=$[ct];for(const it in X){const q=X[it];for(const k in q)v(q[k].object),delete q[k];delete X[it]}}delete s[H]}}function O(H){if(s[H.id]===void 0)return;const $=s[H.id];for(const ct in $){const X=$[ct];for(const it in X){const q=X[it];for(const k in q)v(q[k].object),delete q[k];delete X[it]}}delete s[H.id]}function x(H){for(const $ in s){const ct=s[$];for(const X in ct){const it=ct[X];if(it[H.id]===void 0)continue;const q=it[H.id];for(const k in q)v(q[k].object),delete q[k];delete it[H.id]}}}function C(H){for(const $ in s){const ct=s[$],X=H.isInstancedMesh===!0?H.id:0,it=ct[X];if(it!==void 0){for(const q in it){const k=it[q];for(const ut in k)v(k[ut].object),delete k[ut];delete it[q]}delete ct[X],Object.keys(ct).length===0&&delete s[$]}}}function W(){F(),d=!0,f!==u&&(f=u,m(f.object))}function F(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:h,reset:W,resetDefaultState:F,dispose:I,releaseStatesOfGeometry:O,releaseStatesOfObject:C,releaseStatesOfProgram:x,initAttributes:N,enableAttribute:y,disableUnusedAttributes:D}}function T1(o,e,i){let s;function u(p){s=p}function f(p,m){o.drawArrays(s,p,m),i.update(m,s,1)}function d(p,m,v){v!==0&&(o.drawArraysInstanced(s,p,m,v),i.update(m,s,v))}function h(p,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,m,0,v);let S=0;for(let E=0;E<v;E++)S+=m[E];i.update(S,s,1)}this.setMode=u,this.render=f,this.renderInstances=d,this.renderMultiDraw=h}function b1(o,e,i,s){let u;function f(){if(u!==void 0)return u;if(e.has("EXT_texture_filter_anisotropic")===!0){const x=e.get("EXT_texture_filter_anisotropic");u=o.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else u=0;return u}function d(x){return!(x!==fa&&s.convert(x)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(x){const C=x===ri&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==Ni&&x!==ca&&!C&&s.convert(x)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE))}function p(x){if(x==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const v=p(m);v!==m&&(oe("WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const g=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),S=i.logarithmicDepthBuffer===!0&&g===!1;i.reversedDepthBuffer===!0&&g===!1&&oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),i.logarithmicDepthBuffer===!0&&g===!0&&oe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const E=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),N=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),M=o.getParameter(o.MAX_VERTEX_ATTRIBS),D=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),z=o.getParameter(o.MAX_VARYING_VECTORS),L=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),I=o.getParameter(o.MAX_SAMPLES),O=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:S,reversedDepthBuffer:g,maxTextures:E,maxVertexTextures:T,maxTextureSize:N,maxCubemapSize:y,maxAttributes:M,maxVertexUniforms:D,maxVaryings:z,maxFragmentUniforms:L,maxSamples:I,samples:O}}function A1(o){const e=this;let i=null,s=0,u=!1,f=!1;const d=new _r,h=new ce,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,S){const E=g.length!==0||S||s!==0||u;return u=S,s=g.length,E},this.beginShadows=function(){f=!0,v(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(g,S){i=v(g,S,0)},this.setState=function(g,S,E){const T=g.clippingPlanes,N=g.clipIntersection,y=g.clipShadows,M=o.get(g);if(!u||T===null||T.length===0||f&&!y)f?v(null):m();else{const D=f?0:s,z=D*4;let L=M.clippingState||null;p.value=L,L=v(T,S,z,E);for(let I=0;I!==z;++I)L[I]=i[I];M.clippingState=L,this.numIntersection=N?this.numPlanes:0,this.numPlanes+=D}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(g,S,E,T){const N=g!==null?g.length:0;let y=null;if(N!==0){if(y=p.value,T!==!0||y===null){const M=E+N*4,D=S.matrixWorldInverse;h.getNormalMatrix(D),(y===null||y.length<M)&&(y=new Float32Array(M));for(let z=0,L=E;z!==N;++z,L+=4)d.copy(g[z]).applyMatrix4(D,h),d.normal.toArray(y,L),y[L+3]=d.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=N,e.numIntersection=0,y}}class om extends si{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},u=[s,s,s,s,s,s];this.texture=new $S(u),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},u=new Nl(5,5,5),f=new Bn({name:"CubemapFromEquirect",uniforms:co(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Kn,blending:Yr});f.uniforms.tEquirect.value=i;const d=new Yi(u,f),h=i.minFilter;return i.minFilter===Pa&&(i.minFilter=ai),new Hp(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,s=!0,u=!0){const f=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,s,u);e.setRenderTarget(f)}}const nS=256,R1=3,C1=20,ux=256,cx=16,w1=3,D1=new ot,N1=new Ce;class Hc{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Hp(1,10,null),this._boxMesh=new Yi(new Nl(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,i=0,s=.1,u=100,f={}){const{size:d=256,position:h=D1}=f,p=this._renderer;this._setSize(d);const m=this._allocateTarget(),v=this._getSourceTarget(!0);i>0&&(v.texture.mipmapsAutoUpdate=!1);const g=p.autoClear,S=p.autoClearColor,E=p.autoClearDepth,T=p.autoClearStencil,N=e.background;p.autoClear=!0,p.autoClearColor=!0,p.autoClearDepth=!0,p.autoClearStencil=!0,N===null&&(e.background=p.getClearColor(N1));const y=new Hp(s,u,v);return y.position.copy(h),y.update(p,e),p.autoClear=g,p.autoClearColor=S,p.autoClearDepth=E,p.autoClearStencil=T,e.background=N,i>0&&(v.texture.mipmapsAutoUpdate=!0,this._blur(m,i)),this._applyPMREM(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rS(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=aS(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,i){return i>0?1-Math.sqrt(1-e/i):0}_setSize(e){this._cubeSize=Math.max(nS,XS(e))}_fromTexture(e,i){e.mapping===so||e.mapping===Tl?this._setSize(e.image.length===0?nS:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const s=i||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(s),s}_allocateTarget(){const e=this._cubeSize,i=iS(e,!1,!1),s=Math.log2(e)-R1;for(let u=0;u<=s;u++)i.texture.mipmaps.push({width:e>>u,height:e>>u});return i.texture.name="PMREM",i.texture.isPMREMTexture=!0,i}_getSourceTarget(e=!1){const i=this._cubeSize,s=this._sourceTarget;return(s===null||s.width!==i||e&&s.depthBuffer===!1)&&(s!==null&&s.dispose(),this._sourceTarget=iS(i,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,i,s){const u=this._boxMesh,f=this._cubeCamera;u.material=s,f.renderTarget=e,f.activeMipmapLevel=i;const d=e.width>>i;e.viewport.set(0,0,d,d),f.update(this._renderer,u),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let i;e.mapping===so||e.mapping===Tl?(this._cubemapMaterial===null&&(this._cubemapMaterial=rS()),i=this._cubemapMaterial,i.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=aS()),i=this._equirectMaterial),i.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,i)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=U1(),this._integrationMaterial=L1());const i=this._cubeSize,s=e.texture.mipmaps.length-1,u=this._ggxMaterial.uniforms;u.envMap.value=this._sourceTarget.texture;const f=this._integrationMaterial.uniforms;f.envMap.value=this._sourceTarget.texture,f.sourceLod.value=Math.log2(i/cx);for(let d=0;d<=s;d++){const h=Hc.lodToRoughness(d,s);if(d>s-w1)f.roughness.value=h,this._renderCube(e,d,this._integrationMaterial);else{const p=h>0?Math.log2(i)+.5*Math.log2(6/(ux*Math.pow(h,4)))+.5:0;u.roughness.value=h,u.lodBias.value=p,this._renderCube(e,d,this._ggxMaterial)}}}_blur(e,i){this._blurMaterial===null&&(this._blurMaterial=O1());const s=this._blurMaterial,u=s.uniforms,f=this._sourceTarget;u.sigma.value=Math.min(i,Math.PI)/Math.SQRT2,u.envMap.value=f.texture,this._renderCube(e,0,s),u.envMap.value=e.texture,this._renderCube(f,0,s)}}function iS(o,e,i){return new om(o,{minFilter:Pa,generateMipmaps:e,type:ri,colorSpace:Ic,depthBuffer:i})}function Ul(o,e,i){return new Bn({name:o,uniforms:e,vertexShader:_e.cube_vert,fragmentShader:i,side:Kn,blending:Yr,depthTest:!1,depthWrite:!1})}function U1(){return Ul("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${ux}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function L1(){return Ul("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:cx}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function O1(){return Ul("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${C1}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function aS(){return Ul("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function rS(){return Ul("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function P1(o){let e=new WeakMap,i=new WeakMap,s=null;function u(S,E=!1){return S==null?null:E?d(S):f(S)}function f(S){if(S&&S.isTexture){const E=S.mapping;if(E===bh||E===Ah)if(e.has(S)){const T=e.get(S).texture;return h(T,S.mapping)}else{const T=S.image;if(T&&T.height>0){const N=new om(T.height);return N.fromEquirectangularTexture(o,S),e.set(S,N),S.addEventListener("dispose",m),h(N.texture,S.mapping)}else return null}}return S}function d(S){if(S&&S.isTexture&&S.isPMREMTexture!==!0){const E=S.mapping,T=E===bh||E===Ah,N=E===so||E===Tl;if(T||N){let y=i.get(S);const M=y!==void 0?y.texture.pmremVersion:0;if(S.isRenderTargetTexture&&S.pmremVersion!==M)return s===null&&(s=new Hc(o)),y=T?s.fromEquirectangular(S,y):s.fromCubemap(S,y),y.texture.pmremVersion=S.pmremVersion,i.set(S,y),y.texture;if(y!==void 0)return y.texture;{const D=S.image;return T&&D&&D.height>0||N&&D&&p(D)?(s===null&&(s=new Hc(o)),y=T?s.fromEquirectangular(S):s.fromCubemap(S),y.texture.pmremVersion=S.pmremVersion,i.set(S,y),S.addEventListener("dispose",v),y.texture):null}}}return S}function h(S,E){return E===bh?S.mapping=so:E===Ah&&(S.mapping=Tl),S}function p(S){let E=0;const T=6;for(let N=0;N<T;N++)S[N]!==void 0&&E++;return E===T}function m(S){const E=S.target;E.removeEventListener("dispose",m);const T=e.get(E);T!==void 0&&(e.delete(E),T.dispose())}function v(S){const E=S.target;E.removeEventListener("dispose",v);const T=i.get(E);T!==void 0&&(i.delete(E),T.dispose())}function g(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:u,dispose:g}}function I1(o){const e={};function i(s){if(e[s]!==void 0)return e[s];const u=o.getExtension(s);return e[s]=u,u}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const u=i(s);return u===null&&Dc("WebGLRenderer: "+s+" extension not supported."),u}}}function z1(o,e,i,s){const u={},f=new WeakMap,d=new FinalizationRegistry(T=>delete u[T]);function h(T){p(T.target)}function p(T){T.index!==null&&e.remove(T.index);for(const y in T.attributes)e.remove(T.attributes[y]);T.removeEventListener("dispose",h),delete u[T.id],d.unregister(T);const N=f.get(T);N&&(e.remove(N),f.delete(T)),s.releaseStatesOfGeometry(T),T.isInstancedBufferGeometry===!0&&delete T._maxInstanceCount,i.memory.geometries--}function m(T,N){return u[N.id]!==void 0||(N.addEventListener("dispose",h),u[N.id]=new WeakRef(N),d.register(N,N.id,N),i.memory.geometries++),N}function v(T){const N=T.attributes;for(const y in N)e.update(N[y],o.ARRAY_BUFFER)}function g(T){const N=T.index,y=T.attributes.position;let M=0;if(y===void 0)return;const D=N!==null?N.array.length:y.array.length/3-1,z=y.count>=65535?QS:KS,L=new z(Math.ceil(D/3)*6,1),I=L.array;if(N!==null){const x=N.array;M=N.version;for(let C=0,W=0;C<D;C+=3){const F=x[C+0],H=x[C+1],$=x[C+2];I[W++]=F,I[W++]=H,I[W++]=H,I[W++]=$,I[W++]=$,I[W++]=F}}else{M=y.version;for(let x=0,C=0;x<D;x+=3){const W=x+0,F=x+1,H=x+2;I[C++]=W,I[C++]=F,I[C++]=F,I[C++]=H,I[C++]=H,I[C++]=W}}L.version=M;const O=f.get(T);O&&e.remove(O),f.set(T,L)}function S(T){const N=f.get(T);if(N){const y=T.index;y!==null&&N.version<y.version&&g(T)}else g(T);return f.get(T)}function E(){for(const T in u){const N=u[T].deref();N!==void 0&&p(N)}}return{get:m,update:v,getWireframeAttribute:S,dispose:E}}function B1(o,e,i){let s;function u(g){s=g}let f,d;function h(g){f=g.type,d=g.bytesPerElement}function p(g,S){o.drawElements(s,S,f,g*d),i.update(S,s,1)}function m(g,S,E){E!==0&&(o.drawElementsInstanced(s,S,f,g*d,E),i.update(S,s,E))}function v(g,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,f,g,0,E);let N=0;for(let y=0;y<E;y++)N+=S[y];i.update(N,s,1)}this.setMode=u,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=v}function F1(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(f,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(f/3);break;case o.LINES:i.lines+=h*(f/2);break;case o.LINE_STRIP:i.lines+=h*(f-1);break;case o.LINE_LOOP:i.lines+=h*f;break;case o.POINTS:i.points+=h*f;break;default:Pe("WebGLInfo: Unknown draw mode:",d);break}}function u(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:u,update:s}}function H1(o,e,i){const s=new WeakMap,u=new ln;function f(d,h,p){const m=d.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=v!==void 0?v.length:0;let S=s.get(h);if(S===void 0||S.count!==g){let F=function(){C.dispose(),s.delete(h),h.removeEventListener("dispose",F)};var E=F;S!==void 0&&S.texture.dispose();const T=h.morphAttributes.position!==void 0,N=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,M=h.morphAttributes.position||[],D=h.morphAttributes.normal||[],z=h.morphAttributes.color||[];let L=0;T===!0&&(L=1),N===!0&&(L=2),y===!0&&(L=3);let I=h.attributes.position.count*L,O=1;I>e.maxTextureSize&&(O=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const x=new Float32Array(I*O*4*g),C=new qS(x,I,O,g);C.type=ca,C.needsUpdate=!0;const W=L*4;for(let H=0;H<g;H++){const $=M[H],ct=D[H],X=z[H],it=I*O*4*H;for(let q=0;q<$.count;q++){const k=q*W;T===!0&&(u.fromBufferAttribute($,q),x[it+k+0]=u.x,x[it+k+1]=u.y,x[it+k+2]=u.z,x[it+k+3]=0),N===!0&&(u.fromBufferAttribute(ct,q),x[it+k+4]=u.x,x[it+k+5]=u.y,x[it+k+6]=u.z,x[it+k+7]=0),y===!0&&(u.fromBufferAttribute(X,q),x[it+k+8]=u.x,x[it+k+9]=u.y,x[it+k+10]=u.z,x[it+k+11]=X.itemSize===4?u.w:1)}}S={count:g,texture:C,size:new le(I,O)},s.set(h,S),h.addEventListener("dispose",F)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let T=0;for(let y=0;y<m.length;y++)T+=m[y];const N=h.morphTargetsRelative?1:1-T;p.getUniforms().setValue(o,"morphTargetBaseInfluence",N),p.getUniforms().setValue(o,"morphTargetInfluences",m)}p.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),p.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:f}}function G1(o,e,i,s,u){let f=new WeakMap;function d(m){const v=u.render.frame,g=m.geometry,S=e.get(m,g);if(f.get(S)!==v&&(e.update(S),f.set(S,v)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),f.get(m)!==v&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),f.set(m,v))),m.isSkinnedMesh){const E=m.skeleton;f.get(E)!==v&&(E.update(),f.set(E,v))}return S}function h(){f=new WeakMap}function p(m){const v=m.target;v.removeEventListener("dispose",p),s.releaseStatesOfObject(v),i.remove(v.instanceMatrix),v.instanceColor!==null&&i.remove(v.instanceColor)}return{update:d,dispose:h}}const V1={[Wp]:"LINEAR_TONE_MAPPING",[qp]:"REINHARD_TONE_MAPPING",[Yp]:"CINEON_TONE_MAPPING",[Xc]:"ACES_FILMIC_TONE_MAPPING",[kc]:"AGX_TONE_MAPPING",[Wc]:"NEUTRAL_TONE_MAPPING",[Zp]:"CUSTOM_TONE_MAPPING"};function X1(o,e,i,s,u,f){const d=new si(e,i,{type:o,depthBuffer:u,stencilBuffer:f,samples:s?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let h=null,p=null,m=null;const v=new Zi;v.setAttribute("position",new Rn([-1,3,0,-1,-1,0,3,-1,0],3)),v.setAttribute("uv",new Rn([0,2,0,0,2,0],2));const g=new ix({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),S=new Yi(v,g),E=new rx(-1,1,1,-1,0,1);let T=null,N=null,y=!1,M,D=null,z=[],L=!1;this.setSize=function(I,O){d.setSize(I,O),h!==null&&h.setSize(I,O),p!==null&&p.setSize(I,O);for(let x=0;x<z.length;x++){const C=z[x];C.setSize&&C.setSize(I,O)}},this.setEffects=function(I){z=I,L=z.length>0&&z[0].isRenderPass===!0;const O=d.width,x=d.height;z.length>0&&h===null&&(h=new si(O,x,{type:ri,depthBuffer:!1,stencilBuffer:!1}),p=new si(O,x,{type:ri,depthBuffer:!1,stencilBuffer:!1}));const C=u===!0&&z.some(W=>W.needsDepthTexture===!0);C!==(d.depthTexture!==null)&&(C===!0&&m===null&&(m=new lo(O,x),f===!0&&(m.format=Sr,m.type=oo)),d.dispose(),d.depthTexture=C?m:null,d.resolveDepthBuffer=C,d.storeMultisampledDepthBuffer=C);for(let W=0;W<z.length;W++){const F=z[W];F.setSize&&F.setSize(O,x),C&&F.needsDepthTexture===!0&&F.setDepthTexture&&F.setDepthTexture(m)}},this.begin=function(I,O){if(y||I.toneMapping===qi&&z.length===0)return!1;if(D=O,O!==null){const x=O.width,C=O.height;(d.width!==x||d.height!==C)&&this.setSize(x,C)}return L===!1&&I.setRenderTarget(d),M=I.toneMapping,I.toneMapping=qi,!0},this.hasRenderPass=function(){return L},this.end=function(I,O){I.toneMapping=M,y=!0;let x=d,C=h;for(let W=0;W<z.length;W++){const F=z[W];F.enabled!==!1&&(F.render(I,C,x,O),F.needsSwap!==!1&&(x=C,C=C===h?p:h))}if(T!==I.outputColorSpace||N!==I.toneMapping){T=I.outputColorSpace,N=I.toneMapping,g.defines={},be.getTransfer(T)===Be&&(g.defines.SRGB_TRANSFER="");const W=V1[N];W&&(g.defines[W]=""),g.needsUpdate=!0}g.uniforms.tDiffuse.value=x.texture,I.setRenderTarget(D),I.render(S,E),D=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){d.dispose(),h!==null&&h.dispose(),p!==null&&p.dispose(),v.dispose(),g.dispose()}}const fx=new Xn,dx=new lo(1,1),hx=new tx(1),px=new qS,mx=new uT,gx=new $S,sS=[],oS=[],lS=new Float32Array(16),uS=new Float32Array(9),cS=new Float32Array(4);function mo(o,e,i){const s=o[0];if(s<=0||s>0)return o;const u=e*i;let f=sS[u];if(f===void 0&&(f=new Float32Array(u),sS[u]=f),e!==0){s.toArray(f,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(f,h)}return f}function xn(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function Mn(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function Yc(o,e){let i=oS[e];i===void 0&&(i=new Int32Array(e),oS[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function k1(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function W1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;o.uniform2fv(this.addr,e),Mn(i,e)}}function q1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(xn(i,e))return;o.uniform3fv(this.addr,e),Mn(i,e)}}function Y1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;o.uniform4fv(this.addr,e),Mn(i,e)}}function Z1(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(xn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),Mn(i,e)}else{if(xn(i,s))return;cS.set(s),o.uniformMatrix2fv(this.addr,!1,cS),Mn(i,s)}}function K1(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(xn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),Mn(i,e)}else{if(xn(i,s))return;uS.set(s),o.uniformMatrix3fv(this.addr,!1,uS),Mn(i,s)}}function Q1(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(xn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),Mn(i,e)}else{if(xn(i,s))return;lS.set(s),o.uniformMatrix4fv(this.addr,!1,lS),Mn(i,s)}}function J1(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function j1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;o.uniform2iv(this.addr,e),Mn(i,e)}}function $1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(xn(i,e))return;o.uniform3iv(this.addr,e),Mn(i,e)}}function tR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;o.uniform4iv(this.addr,e),Mn(i,e)}}function eR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function nR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;o.uniform2uiv(this.addr,e),Mn(i,e)}}function iR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(xn(i,e))return;o.uniform3uiv(this.addr,e),Mn(i,e)}}function aR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;o.uniform4uiv(this.addr,e),Mn(i,e)}}function Zc(o){return o.version===0&&(o.compareFunction=GS,o.needsUpdate=!0),o}function rR(o,e,i){const s=this.cache,u=i.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u);let f;this.type===o.SAMPLER_2D_SHADOW?f=Zc(dx):f=fx,i.setTexture2D(e||f,u)}function sR(o,e,i){const s=this.cache,u=i.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),i.setTexture3D(e||mx,u)}function oR(o,e,i){const s=this.cache,u=i.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u);let f;this.type===o.SAMPLER_CUBE_SHADOW?f=Zc(hx):f=gx,i.setTextureCube(e||f,u)}function lR(o,e,i){const s=this.cache,u=i.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),i.setTexture2DArray(e||px,u)}function uR(o){switch(o){case 5126:return k1;case 35664:return W1;case 35665:return q1;case 35666:return Y1;case 35674:return Z1;case 35675:return K1;case 35676:return Q1;case 5124:case 35670:return J1;case 35667:case 35671:return j1;case 35668:case 35672:return $1;case 35669:case 35673:return tR;case 5125:return eR;case 36294:return nR;case 36295:return iR;case 36296:return aR;case 35678:case 36198:case 36298:case 36306:case 35682:return rR;case 35679:case 36299:case 36307:return sR;case 35680:case 36300:case 36308:case 36293:return oR;case 36289:case 36303:case 36311:case 36292:return lR}}function cR(o,e){o.uniform1fv(this.addr,e)}function fR(o,e){const i=mo(e,this.size,2);o.uniform2fv(this.addr,i)}function dR(o,e){const i=mo(e,this.size,3);o.uniform3fv(this.addr,i)}function hR(o,e){const i=mo(e,this.size,4);o.uniform4fv(this.addr,i)}function pR(o,e){const i=mo(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function mR(o,e){const i=mo(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function gR(o,e){const i=mo(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function _R(o,e){o.uniform1iv(this.addr,e)}function vR(o,e){o.uniform2iv(this.addr,e)}function SR(o,e){o.uniform3iv(this.addr,e)}function xR(o,e){o.uniform4iv(this.addr,e)}function MR(o,e){o.uniform1uiv(this.addr,e)}function yR(o,e){o.uniform2uiv(this.addr,e)}function ER(o,e){o.uniform3uiv(this.addr,e)}function TR(o,e){o.uniform4uiv(this.addr,e)}function bR(o,e,i){const s=this.cache,u=e.length,f=Yc(i,u);xn(s,f)||(o.uniform1iv(this.addr,f),Mn(s,f));let d;this.type===o.SAMPLER_2D_SHADOW?d=Zc(dx):d=fx;for(let h=0;h!==u;++h)i.setTexture2D(e[h]||d,f[h])}function AR(o,e,i){const s=this.cache,u=e.length,f=Yc(i,u);xn(s,f)||(o.uniform1iv(this.addr,f),Mn(s,f));for(let d=0;d!==u;++d)i.setTexture3D(e[d]||mx,f[d])}function RR(o,e,i){const s=this.cache,u=e.length,f=Yc(i,u);xn(s,f)||(o.uniform1iv(this.addr,f),Mn(s,f));let d;this.type===o.SAMPLER_CUBE_SHADOW?d=Zc(hx):d=gx;for(let h=0;h!==u;++h)i.setTextureCube(e[h]||d,f[h])}function CR(o,e,i){const s=this.cache,u=e.length,f=Yc(i,u);xn(s,f)||(o.uniform1iv(this.addr,f),Mn(s,f));for(let d=0;d!==u;++d)i.setTexture2DArray(e[d]||px,f[d])}function wR(o){switch(o){case 5126:return cR;case 35664:return fR;case 35665:return dR;case 35666:return hR;case 35674:return pR;case 35675:return mR;case 35676:return gR;case 5124:case 35670:return _R;case 35667:case 35671:return vR;case 35668:case 35672:return SR;case 35669:case 35673:return xR;case 5125:return MR;case 36294:return yR;case 36295:return ER;case 36296:return TR;case 35678:case 36198:case 36298:case 36306:case 35682:return bR;case 35679:case 36299:case 36307:return AR;case 35680:case 36300:case 36308:case 36293:return RR;case 36289:case 36303:case 36311:case 36292:return CR}}class DR{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=uR(i.type)}}class NR{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=wR(i.type)}}class UR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const u=this.seq;for(let f=0,d=u.length;f!==d;++f){const h=u[f];h.setValue(e,i[h.id],s)}}}const Qh=/(\w+)(\])?(\[|\.)?/g;function fS(o,e){o.seq.push(e),o.map[e.id]=e}function LR(o,e,i){const s=o.name,u=s.length;for(Qh.lastIndex=0;;){const f=Qh.exec(s),d=Qh.lastIndex;let h=f[1];const p=f[2]==="]",m=f[3];if(p&&(h=h|0),m===void 0||m==="["&&d+2===u){fS(i,m===void 0?new DR(h,o,e):new NR(h,o,e));break}else{let g=i.map[h];g===void 0&&(g=new UR(h),fS(i,g)),i=g}}}class Nc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const h=e.getActiveUniform(i,d),p=e.getUniformLocation(i,h.name);LR(h,p,this)}const u=[],f=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?u.push(d):f.push(d);u.length>0&&(this.seq=u.concat(f))}setValue(e,i,s,u){const f=this.map[i];f!==void 0&&f.setValue(e,s,u)}setOptional(e,i,s){const u=i[s];u!==void 0&&this.setValue(e,s,u)}static upload(e,i,s,u){for(let f=0,d=i.length;f!==d;++f){const h=i[f],p=s[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,u)}}static seqWithValue(e,i){const s=[];for(let u=0,f=e.length;u!==f;++u){const d=e[u];d.id in i&&s.push(d)}return s}}function dS(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const OR=37297;let PR=0;function IR(o,e){const i=o.split(`
`),s=[],u=Math.max(e-6,0),f=Math.min(e+6,i.length);for(let d=u;d<f;d++){const h=d+1;s.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}const hS=new ce;function zR(o){be._getMatrix(hS,be.workingColorSpace,o);const e=`mat3( ${hS.elements.map(i=>i.toFixed(4))} )`;switch(be.getTransfer(o)){case zc:return[e,"LinearTransferOETF"];case Be:return[e,"sRGBTransferOETF"];default:return oe("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function pS(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),f=(o.getShaderInfoLog(e)||"").trim();if(s&&f==="")return"";const d=/ERROR: 0:(\d+)/.exec(f);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+f+`

`+IR(o.getShaderSource(e),h)}else return f}function BR(o,e){const i=zR(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( ${i[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const FR={[Wp]:"Linear",[qp]:"Reinhard",[Yp]:"Cineon",[Xc]:"ACESFilmic",[kc]:"AgX",[Wc]:"Neutral",[Zp]:"Custom"};function HR(o,e){const i=FR[e];return i===void 0?(oe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Ec=new ot;function GR(){be.getLuminanceCoefficients(Ec);const o=Ec.x.toFixed(4),e=Ec.y.toFixed(4),i=Ec.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function VR(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sl).join(`
`)}function XR(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function kR(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let u=0;u<s;u++){const f=o.getActiveAttrib(e,u),d=f.name;let h=1;f.type===o.FLOAT_MAT2&&(h=2),f.type===o.FLOAT_MAT3&&(h=3),f.type===o.FLOAT_MAT4&&(h=4),i[d]={type:f.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function Sl(o){return o!==""}function mS(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function gS(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const WR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gp(o){return o.replace(WR,qR)}function qR(o,e){const i=_e[e];if(i===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Gp(i)}const YR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _S(o){return o.replace(YR,ZR)}function ZR(o,e,i,s){let u="";for(let f=parseInt(e);f<parseInt(i);f++)u+=s.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return u}function vS(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const KR={[bc]:"SHADOWMAP_TYPE_PCF",[vl]:"SHADOWMAP_TYPE_VSM"};function QR(o){return KR[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const JR={[Tl]:"ENVMAP_MODE_REFRACTION"};function jR(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":JR[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const $R={[DS]:"ENVMAP_BLENDING_MULTIPLY",[RE]:"ENVMAP_BLENDING_MIX",[CE]:"ENVMAP_BLENDING_ADD"};function tC(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":$R[o.combine]||"ENVMAP_BLENDING_NONE"}function eC(o,e,i,s){const u=o.getContext(),f=i.defines;let d=i.vertexShader,h=i.fragmentShader;const p=QR(i),m=i.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",v=jR(i),g=tC(i),S=VR(i),E=XR(f),T=u.createProgram();let N,y,M=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(N=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Sl).join(`
`),N.length>0&&(N+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Sl).join(`
`),y.length>0&&(y+=`
`)):(N=[vS(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+i.diffuseRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sl).join(`
`),y=[vS(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+v:"",i.envMap?"#define "+g:"",i.envMapPMREM?"#define ENVMAP_MAX_LOD "+i.envMapMaxLod+".0":"",i.envMapPMREM?"#define ENVMAP_SIZE "+i.envMapSize+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",i.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==qi?"#define TONE_MAPPING":"",i.toneMapping!==qi?_e.tonemapping_pars_fragment:"",i.toneMapping!==qi?HR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",_e.colorspace_pars_fragment,BR("linearToOutputTexel",i.outputColorSpace),GR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Sl).join(`
`)),d=Gp(d),d=mS(d,i),d=gS(d,i),h=Gp(h),h=mS(h,i),h=gS(h,i),d=_S(d),h=_S(h),i.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,N=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+N,y=["#define varying in",i.glslVersion===Dv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Dv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const D=M+N+d,z=M+y+h,L=dS(u,u.VERTEX_SHADER,D),I=dS(u,u.FRAGMENT_SHADER,z);u.attachShader(T,L),u.attachShader(T,I),i.index0AttributeName!==void 0?u.bindAttribLocation(T,0,i.index0AttributeName):i.hasPositionAttribute===!0&&u.bindAttribLocation(T,0,"position"),u.linkProgram(T);function O(F){if(o.debug.checkShaderErrors){const H=u.getProgramInfoLog(T)||"",$=u.getShaderInfoLog(L)||"",ct=u.getShaderInfoLog(I)||"",X=H.trim(),it=$.trim(),q=ct.trim();let k=!0,ut=!0;if(u.getProgramParameter(T,u.LINK_STATUS)===!1)if(k=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(u,T,L,I);else{const tt=pS(u,L,"vertex"),ft=pS(u,I,"fragment");Pe("WebGLProgram: Shader Error "+u.getError()+" - VALIDATE_STATUS "+u.getProgramParameter(T,u.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+X+`
`+tt+`
`+ft)}else X!==""?oe("WebGLProgram: Program Info Log:",X):(it===""||q==="")&&(ut=!1);ut&&(F.diagnostics={runnable:k,programLog:X,vertexShader:{log:it,prefix:N},fragmentShader:{log:q,prefix:y}})}u.deleteShader(L),u.deleteShader(I),x=new Nc(u,T),C=kR(u,T)}let x;this.getUniforms=function(){return x===void 0&&O(this),x};let C;this.getAttributes=function(){return C===void 0&&O(this),C};let W=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return W===!1&&(W=u.getProgramParameter(T,OR)),W},this.destroy=function(){s.releaseStatesOfProgram(this),u.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=PR++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=L,this.fragmentShader=I,this}let nC=0;class iC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,s){const u=this._getShaderCacheForMaterial(e);return u.has(i)===!1&&(u.add(i),i.usedTimes++),u.has(s)===!1&&(u.add(s),s.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new aC(e),i.set(e,s)),s}}class aC{constructor(e){this.id=nC++,this.code=e,this.usedTimes=0}}function rC(o){return o===Jr||o===Oc||o===Pc}function sC(o,e,i,s,u,f){const d=new YS,h=new iC,p=new Set,m=[],v=new Map,g=s.logarithmicDepthBuffer,S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(x){return p.add(x),x===0?"uv":`uv${x}`}function T(x,C,W,F,H,$){const ct=F.fog,X=H.geometry,it=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?F.environment:null,q=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,k=e.get(x.envMap||it,q),ut=S[x.type];let tt=s.precision;x.precision!==null&&(tt=s.getMaxPrecision(x.precision),tt!==x.precision&&oe("WebGLProgram.getParameters:",x.precision,"not supported, using",tt,"instead."));const ft=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,xt=ft!==void 0?ft.length:0;let Vt=0;X.morphAttributes.position!==void 0&&(Vt=1),X.morphAttributes.normal!==void 0&&(Vt=2),X.morphAttributes.color!==void 0&&(Vt=3);let te,w,J,St;if(ut){const Bt=ua[ut];te=Bt.vertexShader,w=Bt.fragmentShader}else{te=x.vertexShader,w=x.fragmentShader;const Bt=h.getVertexShaderStage(x),Ue=h.getFragmentShaderStage(x);h.update(x,Bt,Ue),J=Bt.id,St=Ue.id}const yt=o.getRenderTarget(),Et=o.state.buffers.depth.getReversed(),Ft=H.isInstancedMesh===!0,ee=H.isBatchedMesh===!0,Mt=!!x.map,Ht=!!x.matcap,xe=!!k,ge=xe&&k.isPMREMTexture===!0,Je=!!x.aoMap,Ie=!!x.lightMap,Ne=!!x.bumpMap&&x.wireframe===!1,ne=!!x.normalMap,cn=!!x.displacementMap,je=!!x.emissiveMap,fn=!!x.metalnessMap,Cn=!!x.roughnessMap,wn=x.anisotropy>0,Y=x.clearcoat>0,Fn=x.diffuseRoughness>0,Fe=x.dispersion>0,ke=x.retroreflectivity>0,Pt=x.iridescence>0,We=x.sheen>0,jt=x.transmission>0,re=wn&&!!x.anisotropyMap,U=Y&&!!x.clearcoatMap,b=Y&&!!x.clearcoatNormalMap,et=Y&&!!x.clearcoatRoughnessMap,bt=Fn&&!!x.diffuseRoughnessMap,vt=Pt&&!!x.iridescenceMap,wt=Pt&&!!x.iridescenceThicknessMap,Lt=We&&!!x.sheenColorMap,dt=We&&!!x.sheenRoughnessMap,mt=!!x.specularMap,Dt=!!x.specularColorMap,B=!!x.specularIntensityMap,pt=jt&&!!x.transmissionMap,ht=jt&&!!x.thicknessMap,Nt=!!x.gradientMap,At=!!x.alphaMap,Ut=x.alphaTest>0,Kt=!!x.alphaHash,$t=!!x.extensions;let Tt=qi;x.toneMapped&&(yt===null||yt.isXRRenderTarget===!0)&&(Tt=o.toneMapping);const kt=ge?k.isCompressedCubeTexture?k.image[0].mipmaps:k.mipmaps:null,fe={shaderID:ut,shaderType:x.type,shaderName:x.name,vertexShader:te,fragmentShader:w,defines:x.defines,customVertexShaderID:J,customFragmentShaderID:St,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:tt,batching:ee,batchingColor:ee&&H._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&H.instanceColor!==null,instancingMorph:Ft&&H.morphTexture!==null,outputColorSpace:yt===null?o.outputColorSpace:yt.isXRRenderTarget===!0?yt.texture.colorSpace:be.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Mt,matcap:Ht,envMap:xe,envMapMode:xe&&k.mapping,envMapPMREM:ge,envMapMaxLod:ge?kt.length-1:null,envMapSize:ge?kt[0].width:null,aoMap:Je,lightMap:Ie,bumpMap:Ne,normalMap:ne,displacementMap:cn,emissiveMap:je,normalMapObjectSpace:ne&&x.normalMapType===NE,normalMapTangentSpace:ne&&x.normalMapType===wv,packedNormalMap:ne&&x.normalMapType===wv&&rC(x.normalMap.format),metalnessMap:fn,roughnessMap:Cn,anisotropy:wn,anisotropyMap:re,clearcoat:Y,clearcoatMap:U,clearcoatNormalMap:b,clearcoatRoughnessMap:et,diffuseRoughness:Fn,diffuseRoughnessMap:bt,dispersion:Fe,retroreflection:ke,iridescence:Pt,iridescenceMap:vt,iridescenceThicknessMap:wt,sheen:We,sheenColorMap:Lt,sheenRoughnessMap:dt,specularMap:mt,specularColorMap:Dt,specularIntensityMap:B,transmission:jt,transmissionMap:pt,thicknessMap:ht,gradientMap:Nt,opaque:x.transparent===!1&&x.blending===xl&&x.alphaToCoverage===!1,alphaMap:At,alphaTest:Ut,alphaHash:Kt,combine:x.combine,mapUv:Mt&&E(x.map.channel),aoMapUv:Je&&E(x.aoMap.channel),lightMapUv:Ie&&E(x.lightMap.channel),bumpMapUv:Ne&&E(x.bumpMap.channel),normalMapUv:ne&&E(x.normalMap.channel),displacementMapUv:cn&&E(x.displacementMap.channel),emissiveMapUv:je&&E(x.emissiveMap.channel),metalnessMapUv:fn&&E(x.metalnessMap.channel),roughnessMapUv:Cn&&E(x.roughnessMap.channel),anisotropyMapUv:re&&E(x.anisotropyMap.channel),clearcoatMapUv:U&&E(x.clearcoatMap.channel),clearcoatNormalMapUv:b&&E(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&E(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:bt&&E(x.diffuseRoughnessMap.channel),iridescenceMapUv:vt&&E(x.iridescenceMap.channel),iridescenceThicknessMapUv:wt&&E(x.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&E(x.sheenColorMap.channel),sheenRoughnessMapUv:dt&&E(x.sheenRoughnessMap.channel),specularMapUv:mt&&E(x.specularMap.channel),specularColorMapUv:Dt&&E(x.specularColorMap.channel),specularIntensityMapUv:B&&E(x.specularIntensityMap.channel),transmissionMapUv:pt&&E(x.transmissionMap.channel),thicknessMapUv:ht&&E(x.thicknessMap.channel),alphaMapUv:At&&E(x.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(ne||wn),vertexNormals:!!X.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!X.attributes.uv&&(Mt||At),fog:!!ct,useFog:x.fog===!0,fogExp2:!!ct&&ct.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||X.attributes.normal===void 0&&ne===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Et,skinning:H.isSkinnedMesh===!0,hasPositionAttribute:X.attributes.position!==void 0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:xt,morphTextureStride:Vt,numSunLights:C.sun.length,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numSunLightShadows:C.sunShadowMap.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:$.filter(Bt=>Bt.texture!==null).length,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:x.dithering,shadowMapEnabled:o.shadowMap.enabled&&W.length>0,shadowMapType:o.shadowMap.type,toneMapping:Tt,decodeVideoTexture:Mt&&x.map.isVideoTexture===!0&&be.getTransfer(x.map.colorSpace)===Be,decodeVideoTextureEmissive:je&&x.emissiveMap.isVideoTexture===!0&&be.getTransfer(x.emissiveMap.colorSpace)===Be,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===La,flipSided:x.side===Kn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:$t&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($t&&x.extensions.multiDraw===!0||ee)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return fe.vertexUv1s=p.has(1),fe.vertexUv2s=p.has(2),fe.vertexUv3s=p.has(3),p.clear(),fe}function N(x){const C=[];if(x.shaderID?C.push(x.shaderID):(C.push(x.customVertexShaderID),C.push(x.customFragmentShaderID)),x.defines!==void 0)for(const W in x.defines)C.push(W),C.push(x.defines[W]);return x.isRawShaderMaterial===!1&&(y(C,x),M(C,x),C.push(o.outputColorSpace)),C.push(x.customProgramCacheKey),C.join()}function y(x,C){x.push(C.precision),x.push(C.outputColorSpace),x.push(C.envMapMode),x.push(C.envMapPMREM),x.push(C.envMapMaxLod),x.push(C.envMapSize),x.push(C.mapUv),x.push(C.alphaMapUv),x.push(C.lightMapUv),x.push(C.aoMapUv),x.push(C.bumpMapUv),x.push(C.normalMapUv),x.push(C.displacementMapUv),x.push(C.emissiveMapUv),x.push(C.metalnessMapUv),x.push(C.roughnessMapUv),x.push(C.anisotropyMapUv),x.push(C.clearcoatMapUv),x.push(C.clearcoatNormalMapUv),x.push(C.clearcoatRoughnessMapUv),x.push(C.diffuseRoughnessMapUv),x.push(C.iridescenceMapUv),x.push(C.iridescenceThicknessMapUv),x.push(C.sheenColorMapUv),x.push(C.sheenRoughnessMapUv),x.push(C.specularMapUv),x.push(C.specularColorMapUv),x.push(C.specularIntensityMapUv),x.push(C.transmissionMapUv),x.push(C.thicknessMapUv),x.push(C.combine),x.push(C.fogExp2),x.push(C.sizeAttenuation),x.push(C.morphTargetsCount),x.push(C.numSunLights),x.push(C.numDirLights),x.push(C.numPointLights),x.push(C.numSpotLights),x.push(C.numSpotLightMaps),x.push(C.numHemiLights),x.push(C.numRectAreaLights),x.push(C.numSunLightShadows),x.push(C.numDirLightShadows),x.push(C.numPointLightShadows),x.push(C.numSpotLightShadows),x.push(C.numSpotLightShadowsWithMaps),x.push(C.numLightProbes),x.push(C.numLightProbeGrids),x.push(C.shadowMapType),x.push(C.toneMapping),x.push(C.numClippingPlanes),x.push(C.numClipIntersection),x.push(C.depthPacking)}function M(x,C){d.disableAll(),C.instancing&&d.enable(0),C.instancingColor&&d.enable(1),C.instancingMorph&&d.enable(2),C.matcap&&d.enable(3),C.envMap&&d.enable(4),C.normalMapObjectSpace&&d.enable(5),C.normalMapTangentSpace&&d.enable(6),C.clearcoat&&d.enable(7),C.iridescence&&d.enable(8),C.alphaTest&&d.enable(9),C.vertexColors&&d.enable(10),C.vertexAlphas&&d.enable(11),C.vertexUv1s&&d.enable(12),C.vertexUv2s&&d.enable(13),C.vertexUv3s&&d.enable(14),C.vertexTangents&&d.enable(15),C.anisotropy&&d.enable(16),C.alphaHash&&d.enable(17),C.batching&&d.enable(18),C.dispersion&&d.enable(19),C.retroreflection&&d.enable(24),C.diffuseRoughness&&d.enable(25),C.batchingColor&&d.enable(20),C.gradientMap&&d.enable(21),C.packedNormalMap&&d.enable(22),C.vertexNormals&&d.enable(23),x.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reversedDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),C.numLightProbeGrids>0&&d.enable(22),C.hasPositionAttribute&&d.enable(23),x.push(d.mask)}function D(x){const C=S[x.type];let W;if(C){const F=ua[C];W=Cl.clone(F.uniforms)}else W=x.uniforms;return W}function z(x,C){let W=v.get(C);return W!==void 0?++W.usedTimes:(W=new eC(o,C,x,u),m.push(W),v.set(C,W)),W}function L(x){if(--x.usedTimes===0){const C=m.indexOf(x);m[C]=m[m.length-1],m.pop(),v.delete(x.cacheKey),x.destroy()}}function I(x){h.remove(x)}function O(){h.dispose()}return{getParameters:T,getProgramCacheKey:N,getUniforms:D,acquireProgram:z,releaseProgram:L,releaseShaderCache:I,programs:m,dispose:O}}function oC(){let o=new WeakMap;function e(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function s(d){o.delete(d)}function u(d,h,p){o.get(d)[h]=p}function f(){o=new WeakMap}return{has:e,get:i,remove:s,update:u,dispose:f}}function lC(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.materialVariant!==e.materialVariant?o.materialVariant-e.materialVariant:o.z!==e.z?o.z-e.z:o.id-e.id}function SS(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function xS(){const o=[];let e=0;const i=[],s=[],u=[];function f(){e=0,i.length=0,s.length=0,u.length=0}function d(S){let E=0;return S.isInstancedMesh&&(E+=2),S.isSkinnedMesh&&(E+=1),E}function h(S,E,T,N,y,M){let D=o[e];return D===void 0?(D={id:S.id,object:S,geometry:E,material:T,materialVariant:d(S),groupOrder:N,renderOrder:S.renderOrder,z:y,group:M},o[e]=D):(D.id=S.id,D.object=S,D.geometry=E,D.material=T,D.materialVariant=d(S),D.groupOrder=N,D.renderOrder=S.renderOrder,D.z=y,D.group=M),e++,D}function p(S,E,T,N,y,M,D){D.reversedDepth===!0&&(y=-y);const z=h(S,E,T,N,y,M);T.transmission>0?s.push(z):T.transparent===!0?u.push(z):i.push(z)}function m(S,E,T,N,y,M){const D=h(S,E,T,N,y,M);T.transmission>0?s.unshift(D):T.transparent===!0?u.unshift(D):i.unshift(D)}function v(S,E){i.length>1&&i.sort(S||lC),s.length>1&&s.sort(E||SS),u.length>1&&u.sort(E||SS)}function g(){for(let S=e,E=o.length;S<E;S++){const T=o[S];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:s,transparent:u,init:f,push:p,unshift:m,finish:g,sort:v}}function uC(){let o=new WeakMap;function e(s,u){const f=o.get(s);let d;return f===void 0?(d=new xS,o.set(s,[d])):u>=f.length?(d=new xS,f.push(d)):d=f[u],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function cC(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"SunLight":case"DirectionalLight":i={direction:new ot,color:new Ce};break;case"SpotLight":i={position:new ot,direction:new ot,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ot,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ot,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":i={color:new Ce,position:new ot,halfWidth:new ot,halfHeight:new ot};break}return o[e.id]=i,i}}}function fC(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let dC=0;function hC(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function pC(o){const e=new cC,i=fC(),s={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new ot);const u=new ot,f=new un,d=new un;function h(m){let v=0,g=0,S=0;for(let $=0;$<9;$++)s.probe[$].set(0,0,0);let E=0,T=0,N=0,y=0,M=0,D=0,z=0,L=0,I=0,O=0,x=0,C=0,W=0,F=0;m.sort(hC);for(let $=0,ct=m.length;$<ct;$++){const X=m[$],it=X.color,q=X.intensity,k=X.distance;let ut=null;if(X.shadow&&X.shadow.map&&(X.shadow.map.texture.format===Jr?ut=X.shadow.map.texture:ut=X.shadow.map.depthTexture||X.shadow.map.texture),X.isAmbientLight)v+=it.r*q,g+=it.g*q,S+=it.b*q;else if(X.isLightProbe){for(let tt=0;tt<9;tt++)s.probe[tt].addScaledVector(X.sh.coefficients[tt],q);F++}else if(X.isSunLight){const tt=e.get(X);if(tt.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const ft=X.shadow,xt=i.get(X);xt.shadowIntensity=ft.intensity,xt.shadowBias=ft.bias,xt.shadowNormalBias=ft.normalBias,xt.shadowRadius=ft.radius,xt.shadowMapSize.copy(ft.mapSize).multiply(ft.getFrameExtents()),s.sunShadow[T]=xt,s.sunShadowMap[T]=ut;const Vt=ft.getViewportCount();for(let te=0;te<Vt;te++)s.sunShadowMatrix[N+te]=ft.getMatrix(te),s.sunShadowCascade[N+te]=ft._cascadeData[te];N+=Vt,T++}s.sun[E]=tt,E++}else if(X.isDirectionalLight){const tt=e.get(X);if(tt.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const ft=X.shadow,xt=i.get(X);xt.shadowIntensity=ft.intensity,xt.shadowBias=ft.bias,xt.shadowNormalBias=ft.normalBias,xt.shadowRadius=ft.radius,xt.shadowMapSize=ft.mapSize,s.directionalShadow[y]=xt,s.directionalShadowMap[y]=ut,s.directionalShadowMatrix[y]=X.shadow.matrix,I++}s.directional[y]=tt,y++}else if(X.isSpotLight){const tt=e.get(X);tt.position.setFromMatrixPosition(X.matrixWorld),tt.color.copy(it).multiplyScalar(q),tt.distance=k,tt.coneCos=Math.cos(X.angle),tt.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),tt.decay=X.decay,s.spot[D]=tt;const ft=X.shadow;if(X.map&&(s.spotLightMap[C]=X.map,C++,ft.updateMatrices(X),X.castShadow&&W++),s.spotLightMatrix[D]=ft.matrix,X.castShadow){const xt=i.get(X);xt.shadowIntensity=ft.intensity,xt.shadowBias=ft.bias,xt.shadowNormalBias=ft.normalBias,xt.shadowRadius=ft.radius,xt.shadowMapSize=ft.mapSize,s.spotShadow[D]=xt,s.spotShadowMap[D]=ut,x++}D++}else if(X.isRectAreaLight){const tt=e.get(X);tt.color.copy(it).multiplyScalar(q),tt.halfWidth.set(X.width*.5,0,0),tt.halfHeight.set(0,X.height*.5,0),s.rectArea[z]=tt,z++}else if(X.isPointLight){const tt=e.get(X);if(tt.color.copy(X.color).multiplyScalar(X.intensity),tt.distance=X.distance,tt.decay=X.decay,X.castShadow){const ft=X.shadow,xt=i.get(X);xt.shadowIntensity=ft.intensity,xt.shadowBias=ft.bias,xt.shadowNormalBias=ft.normalBias,xt.shadowRadius=ft.radius,xt.shadowMapSize=ft.mapSize,xt.shadowCameraNear=ft.camera.near,xt.shadowCameraFar=ft.camera.far,s.pointShadow[M]=xt,s.pointShadowMap[M]=ut,s.pointShadowMatrix[M]=X.shadow.matrix,O++}s.point[M]=tt,M++}else if(X.isHemisphereLight){const tt=e.get(X);tt.skyColor.copy(X.color).multiplyScalar(q),tt.groundColor.copy(X.groundColor).multiplyScalar(q),s.hemi[L]=tt,L++}}z>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Gt.LTC_FLOAT_1,s.rectAreaLTC2=Gt.LTC_FLOAT_2):(s.rectAreaLTC1=Gt.LTC_HALF_1,s.rectAreaLTC2=Gt.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=g,s.ambient[2]=S;const H=s.hash;(H.sunLength!==E||H.directionalLength!==y||H.pointLength!==M||H.spotLength!==D||H.rectAreaLength!==z||H.hemiLength!==L||H.numSunShadows!==T||H.numDirectionalShadows!==I||H.numPointShadows!==O||H.numSpotShadows!==x||H.numSpotMaps!==C||H.numLightProbes!==F)&&(s.sun.length=E,s.directional.length=y,s.spot.length=D,s.rectArea.length=z,s.point.length=M,s.hemi.length=L,s.sunShadow.length=T,s.sunShadowMap.length=T,s.sunShadowMatrix.length=N,s.sunShadowCascade.length=N,s.directionalShadow.length=I,s.directionalShadowMap.length=I,s.directionalShadowMatrix.length=I,s.pointShadow.length=O,s.pointShadowMap.length=O,s.pointShadowMatrix.length=O,s.spotShadow.length=x,s.spotShadowMap.length=x,s.spotLightMatrix.length=x+C-W,s.spotLightMap.length=C,s.numSpotLightShadowsWithMaps=W,s.numLightProbes=F,H.sunLength=E,H.directionalLength=y,H.pointLength=M,H.spotLength=D,H.rectAreaLength=z,H.hemiLength=L,H.numSunShadows=T,H.numDirectionalShadows=I,H.numPointShadows=O,H.numSpotShadows=x,H.numSpotMaps=C,H.numLightProbes=F,s.version=dC++)}function p(m,v){let g=0,S=0,E=0,T=0,N=0,y=0;const M=v.matrixWorldInverse;for(let D=0,z=m.length;D<z;D++){const L=m[D];if(L.isSunLight){const I=s.sun[g];I.direction.setFromMatrixPosition(L.matrixWorld),I.direction.transformDirection(M),g++}else if(L.isDirectionalLight){const I=s.directional[S];I.direction.setFromMatrixPosition(L.matrixWorld),u.setFromMatrixPosition(L.target.matrixWorld),I.direction.sub(u),I.direction.transformDirection(M),S++}else if(L.isSpotLight){const I=s.spot[T];I.position.setFromMatrixPosition(L.matrixWorld),I.position.applyMatrix4(M),I.direction.setFromMatrixPosition(L.matrixWorld),u.setFromMatrixPosition(L.target.matrixWorld),I.direction.sub(u),I.direction.transformDirection(M),T++}else if(L.isRectAreaLight){const I=s.rectArea[N];I.position.setFromMatrixPosition(L.matrixWorld),I.position.applyMatrix4(M),d.identity(),f.copy(L.matrixWorld),f.premultiply(M),d.extractRotation(f),I.halfWidth.set(L.width*.5,0,0),I.halfHeight.set(0,L.height*.5,0),I.halfWidth.applyMatrix4(d),I.halfHeight.applyMatrix4(d),N++}else if(L.isPointLight){const I=s.point[E];I.position.setFromMatrixPosition(L.matrixWorld),I.position.applyMatrix4(M),E++}else if(L.isHemisphereLight){const I=s.hemi[y];I.direction.setFromMatrixPosition(L.matrixWorld),I.direction.transformDirection(M),y++}}}return{setup:h,setupView:p,state:s}}function MS(o){const e=new pC(o),i=[],s=[],u=[];function f(g){v.camera=g,i.length=0,s.length=0,u.length=0}function d(g){g.isLightProbeGrid?u.push(g):i.push(g)}function h(g){s.push(g)}function p(){e.setup(i),u.sort((g,S)=>g.priority-S.priority||g.id-S.id)}function m(g){e.setupView(i,g)}const v={lightsArray:i,shadowsArray:s,lightProbeGridArray:u,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:f,state:v,setupLights:p,setupLightsView:m,pushLight:d,pushShadow:h}}function mC(o){let e=new WeakMap;function i(u,f=0){const d=e.get(u);let h;return d===void 0?(h=new MS(o),e.set(u,[h])):f>=d.length?(h=new MS(o),d.push(h)):h=d[f],h}function s(){e=new WeakMap}return{get:i,dispose:s}}const gC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_C=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,vC=[new ot(1,0,0),new ot(-1,0,0),new ot(0,1,0),new ot(0,-1,0),new ot(0,0,1),new ot(0,0,-1)],SC=[new ot(0,-1,0),new ot(0,-1,0),new ot(0,0,1),new ot(0,0,-1),new ot(0,-1,0),new ot(0,-1,0)],yS=new un,gl=new ot,Jh=new ot;function xC(o,e,i){let s=new Fc;const u=new le,f=new le,d=new ln,h=new UT,p=new LT,m={},v=i.maxTextureSize,g={[Qr]:Kn,[Kn]:Qr,[La]:La},S=new Bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:gC,fragmentShader:_C}),E=S.clone();E.defines.HORIZONTAL_PASS=1;const T=new Zi;T.setAttribute("position",new Kr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const N=new Yi(T,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bc;let M=this.type;this.render=function(O,x,C){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||O.length===0)return;this.type===lE&&(oe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=bc);const W=o.getRenderTarget(),F=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),$=o.state;$.setBlending(Yr),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const ct=M!==this.type;ct&&x.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(it=>it.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,it=O.length;X<it;X++){const q=O[X],k=q.shadow;if(k===void 0){oe("WebGLShadowMap:",q,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;u.copy(k.mapSize);const ut=k.getFrameExtents();u.multiply(ut),f.copy(k.mapSize),(u.x>v||u.y>v)&&(u.x>v&&(f.x=Math.floor(v/ut.x),u.x=f.x*ut.x,k.mapSize.x=f.x),u.y>v&&(f.y=Math.floor(v/ut.y),u.y=f.y*ut.y,k.mapSize.y=f.y));const tt=o.state.buffers.depth.getReversed();if(k.camera._reversedDepth=tt,k.map===null||ct===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===vl){if(q.isPointLight){oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new si(u.x,u.y,{format:Jr,type:ri,minFilter:ai,magFilter:ai,generateMipmaps:!1}),k.map.texture.name=q.name+".shadowMap",k.map.depthTexture=new lo(u.x,u.y,ca),k.map.depthTexture.name=q.name+".shadowMapDepth",k.map.depthTexture.format=xr,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=zn,k.map.depthTexture.magFilter=zn}else q.isPointLight?(k.map=new om(u.x),k.map.depthTexture=new tx(u.x,da)):(k.map=new si(u.x,u.y),k.map.depthTexture=new lo(u.x,u.y,da)),k.map.depthTexture.name=q.name+".shadowMap",k.map.depthTexture.format=xr,this.type===bc?(k.map.depthTexture.compareFunction=tt?HS:FS,k.map.depthTexture.minFilter=ai,k.map.depthTexture.magFilter=ai):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=zn,k.map.depthTexture.magFilter=zn);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==u.x||k.map.height!==u.y)&&k.map.setSize(u.x,u.y);const ft=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();q.isPointLight!==!0&&k.updateMatrices(q,C);const xt=(k.camera.layers.mask&4294967294)!==0?k.camera.layers:C.layers;for(let Vt=0;Vt<ft;Vt++){const te=k.getCamera(Vt);if(q.isPointLight){const w=k.camera,J=k.matrix,St=q.distance||w.far;St!==w.far&&(w.far=St,w.updateProjectionMatrix()),gl.setFromMatrixPosition(q.matrixWorld),w.position.copy(gl),Jh.copy(w.position),Jh.add(vC[Vt]),w.up.copy(SC[Vt]),w.lookAt(Jh),w.updateMatrixWorld(),J.makeTranslation(-gl.x,-gl.y,-gl.z),yS.multiplyMatrices(w.projectionMatrix,w.matrixWorldInverse),k._frustum.setFromProjectionMatrix(yS,w.coordinateSystem,w.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)o.setRenderTarget(k.map,Vt),o.clear();else{Vt===0&&(o.setRenderTarget(k.map),o.clear());const w=k.getViewport(Vt);d.set(f.x*w.x,f.y*w.y,f.x*w.z,f.y*w.w),$.viewport(d)}s=k.getFrustum(Vt),L(x,C,te,q,xt,this.type)}k.isPointLightShadow!==!0&&this.type===vl&&D(k,C),k.needsUpdate=!1}M=this.type,y.needsUpdate=!1,o.setRenderTarget(W,F,H)};function D(O,x){const C=e.update(N);S.defines.VSM_SAMPLES!==O.blurSamples&&(S.defines.VSM_SAMPLES=O.blurSamples,E.defines.VSM_SAMPLES=O.blurSamples,S.needsUpdate=!0,E.needsUpdate=!0),O.mapPass===null?O.mapPass=new si(u.x,u.y,{format:Jr,type:ri}):(O.mapPass.width!==O.map.width||O.mapPass.height!==O.map.height)&&O.mapPass.setSize(O.map.width,O.map.height),S.uniforms.shadow_pass.value=O.map.depthTexture,S.uniforms.resolution.value.set(O.map.width,O.map.height),S.uniforms.radius.value=O.radius,o.setRenderTarget(O.mapPass),o.clear(),o.renderBufferDirect(x,null,C,S,N,null),E.uniforms.shadow_pass.value=O.mapPass.texture,E.uniforms.resolution.value.set(O.map.width,O.map.height),E.uniforms.radius.value=O.radius,o.setRenderTarget(O.map),o.clear(),o.renderBufferDirect(x,null,C,E,N,null)}function z(O,x,C,W){let F=null;const H=C.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(H!==void 0)F=H;else if(F=C.isPointLight===!0?p:h,o.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){const $=F.uuid,ct=x.uuid;let X=m[$];X===void 0&&(X={},m[$]=X);let it=X[ct];it===void 0&&(it=F.clone(),X[ct]=it,x.addEventListener("dispose",I)),F=it}if(F.visible=x.visible,F.wireframe=x.wireframe,W===vl?F.side=x.shadowSide!==null?x.shadowSide:x.side:F.side=x.shadowSide!==null?x.shadowSide:g[x.side],F.alphaMap=x.alphaMap,F.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,F.map=x.map,F.clipShadows=x.clipShadows,F.clippingPlanes=x.clippingPlanes,F.clipIntersection=x.clipIntersection,F.displacementMap=x.displacementMap,F.displacementScale=x.displacementScale,F.displacementBias=x.displacementBias,F.wireframeLinewidth=x.wireframeLinewidth,F.linewidth=x.linewidth,C.isPointLight===!0&&F.isMeshDistanceMaterial===!0){const $=o.properties.get(F);$.light=C}return F}function L(O,x,C,W,F,H){if(O.visible===!1)return;if(O.layers.test(F)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&H===vl)&&(!O.frustumCulled||O.intersectsFrustum(s))){O.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,O.matrixWorld);const X=e.update(O),it=O.material;if(Array.isArray(it)){const q=X.groups;for(let k=0,ut=q.length;k<ut;k++){const tt=q[k],ft=it[tt.materialIndex];if(ft&&ft.visible){const xt=z(O,ft,W,H);O.onBeforeShadow(o,O,x,C,X,xt,tt),o.renderBufferDirect(C,null,X,xt,O,tt),O.onAfterShadow(o,O,x,C,X,xt,tt)}}}else if(it.visible){const q=z(O,it,W,H);O.onBeforeShadow(o,O,x,C,X,q,null),o.renderBufferDirect(C,null,X,q,O,null),O.onAfterShadow(o,O,x,C,X,q,null)}}const ct=O.children;for(let X=0,it=ct.length;X<it;X++)L(ct[X],x,C,W,F,H)}function I(O){O.target.removeEventListener("dispose",I);for(const C in m){const W=m[C],F=O.target.uuid;F in W&&(W[F].dispose(),delete W[F])}}}function MC(o,e){function i(){let B=!1;const pt=new ln;let ht=null;const Nt=new ln(0,0,0,0);return{setMask:function(At){ht!==At&&!B&&(o.colorMask(At,At,At,At),ht=At)},setLocked:function(At){B=At},setClear:function(At,Ut,Kt,$t,Tt){Tt===!0&&(At*=$t,Ut*=$t,Kt*=$t),pt.set(At,Ut,Kt,$t),Nt.equals(pt)===!1&&(o.clearColor(At,Ut,Kt,$t),Nt.copy(pt))},reset:function(){B=!1,ht=null,Nt.set(-1,0,0,0)}}}function s(){let B=!1,pt=!1,ht=null,Nt=null,At=null;return{setReversed:function(Ut){if(pt!==Ut){const Kt=e.get("EXT_clip_control");Ut?Kt.clipControlEXT(Kt.LOWER_LEFT_EXT,Kt.ZERO_TO_ONE_EXT):Kt.clipControlEXT(Kt.LOWER_LEFT_EXT,Kt.NEGATIVE_ONE_TO_ONE_EXT),pt=Ut;const $t=At;At=null,this.setClear($t)}},getReversed:function(){return pt},setTest:function(Ut){Ut?Et(o.DEPTH_TEST):Ft(o.DEPTH_TEST)},setMask:function(Ut){ht!==Ut&&!B&&(o.depthMask(Ut),ht=Ut)},setFunc:function(Ut){if(pt&&(Ut=VE[Ut]),Nt!==Ut){switch(Ut){case tp:o.depthFunc(o.NEVER);break;case ep:o.depthFunc(o.ALWAYS);break;case np:o.depthFunc(o.LESS);break;case El:o.depthFunc(o.LEQUAL);break;case ip:o.depthFunc(o.EQUAL);break;case ap:o.depthFunc(o.GEQUAL);break;case rp:o.depthFunc(o.GREATER);break;case sp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Nt=Ut}},setLocked:function(Ut){B=Ut},setClear:function(Ut){At!==Ut&&(At=Ut,pt&&(Ut=1-Ut),o.clearDepth(Ut))},reset:function(){B=!1,ht=null,Nt=null,At=null,pt=!1}}}function u(){let B=!1,pt=null,ht=null,Nt=null,At=null,Ut=null,Kt=null,$t=null,Tt=null;return{setTest:function(kt){B||(kt?Et(o.STENCIL_TEST):Ft(o.STENCIL_TEST))},setMask:function(kt){pt!==kt&&!B&&(o.stencilMask(kt),pt=kt)},setFunc:function(kt,fe,Bt){(ht!==kt||Nt!==fe||At!==Bt)&&(o.stencilFunc(kt,fe,Bt),ht=kt,Nt=fe,At=Bt)},setOp:function(kt,fe,Bt){(Ut!==kt||Kt!==fe||$t!==Bt)&&(o.stencilOp(kt,fe,Bt),Ut=kt,Kt=fe,$t=Bt)},setLocked:function(kt){B=kt},setClear:function(kt){Tt!==kt&&(o.clearStencil(kt),Tt=kt)},reset:function(){B=!1,pt=null,ht=null,Nt=null,At=null,Ut=null,Kt=null,$t=null,Tt=null}}}const f=new i,d=new s,h=new u;let p={};const m=new WeakMap;let v={},g={},S={},E=new WeakMap,T=[],N=null,y=!1,M=null,D=null,z=null,L=null,I=null,O=null,x=null,C=new Ce(0,0,0),W=0,F=!1,H=null,$=null,ct=null,X=null,it=null;const q=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,ut=0;const tt=o.getParameter(o.VERSION);tt.indexOf("WebGL")!==-1?(ut=parseFloat(/^WebGL (\d)/.exec(tt)[1]),k=ut>=1):tt.indexOf("OpenGL ES")!==-1&&(ut=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),k=ut>=2);let ft=null,xt={};const Vt=o.getParameter(o.SCISSOR_BOX),te=o.getParameter(o.VIEWPORT),w=new ln().fromArray(Vt),J=new ln().fromArray(te);function St(B,pt,ht,Nt){const At=new Uint8Array(4),Ut=o.createTexture();o.bindTexture(B,Ut),o.texParameteri(B,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(B,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Kt=0;Kt<ht;Kt++)B===o.TEXTURE_3D||B===o.TEXTURE_2D_ARRAY?o.texImage3D(pt,0,o.RGBA,1,1,Nt,0,o.RGBA,o.UNSIGNED_BYTE,At):o.texImage2D(pt+Kt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,At);return Ut}const yt={};yt[o.TEXTURE_2D]=St(o.TEXTURE_2D,o.TEXTURE_2D,1),yt[o.TEXTURE_CUBE_MAP]=St(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[o.TEXTURE_2D_ARRAY]=St(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),yt[o.TEXTURE_3D]=St(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),d.setClear(1),h.setClear(0),Et(o.DEPTH_TEST),d.setFunc(El),Ne(!1),ne(Av),Et(o.CULL_FACE),Je(Yr);function Et(B){v[B]!==!0&&(o.enable(B),v[B]=!0)}function Ft(B){v[B]!==!1&&(o.disable(B),v[B]=!1)}function ee(B,pt){return S[B]!==pt?(o.bindFramebuffer(B,pt),S[B]=pt,B===o.DRAW_FRAMEBUFFER&&(S[o.FRAMEBUFFER]=pt),B===o.FRAMEBUFFER&&(S[o.DRAW_FRAMEBUFFER]=pt),!0):!1}function Mt(B,pt){let ht=T,Nt=!1;if(B){ht=E.get(pt),ht===void 0&&(ht=[],E.set(pt,ht));const At=B.textures;if(ht.length!==At.length||ht[0]!==o.COLOR_ATTACHMENT0){for(let Ut=0,Kt=At.length;Ut<Kt;Ut++)ht[Ut]=o.COLOR_ATTACHMENT0+Ut;ht.length=At.length,Nt=!0}}else ht[0]!==o.BACK&&(ht[0]=o.BACK,Nt=!0);Nt&&o.drawBuffers(ht)}function Ht(B){return N!==B?(o.useProgram(B),N=B,!0):!1}const xe={[io]:o.FUNC_ADD,[cE]:o.FUNC_SUBTRACT,[fE]:o.FUNC_REVERSE_SUBTRACT};xe[dE]=o.MIN,xe[hE]=o.MAX;const ge={[pE]:o.ZERO,[mE]:o.ONE,[gE]:o.SRC_COLOR,[CS]:o.SRC_ALPHA,[yE]:o.SRC_ALPHA_SATURATE,[xE]:o.DST_COLOR,[vE]:o.DST_ALPHA,[_E]:o.ONE_MINUS_SRC_COLOR,[wS]:o.ONE_MINUS_SRC_ALPHA,[ME]:o.ONE_MINUS_DST_COLOR,[SE]:o.ONE_MINUS_DST_ALPHA,[EE]:o.CONSTANT_COLOR,[TE]:o.ONE_MINUS_CONSTANT_COLOR,[bE]:o.CONSTANT_ALPHA,[AE]:o.ONE_MINUS_CONSTANT_ALPHA};function Je(B,pt,ht,Nt,At,Ut,Kt,$t,Tt,kt){if(B===Yr){y===!0&&(Ft(o.BLEND),y=!1);return}if(y===!1&&(Et(o.BLEND),y=!0),B!==uE){if(B!==M||kt!==F){if((D!==io||I!==io)&&(o.blendEquation(o.FUNC_ADD),D=io,I=io),kt)switch(B){case xl:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Lc:o.blendFunc(o.ONE,o.ONE);break;case Rv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Cv:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Pe("WebGLState: Invalid blending: ",B);break}else switch(B){case xl:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Lc:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Rv:Pe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Cv:Pe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pe("WebGLState: Invalid blending: ",B);break}z=null,L=null,O=null,x=null,C.set(0,0,0),W=0,M=B,F=kt}return}At=At||pt,Ut=Ut||ht,Kt=Kt||Nt,(pt!==D||At!==I)&&(o.blendEquationSeparate(xe[pt],xe[At]),D=pt,I=At),(ht!==z||Nt!==L||Ut!==O||Kt!==x)&&(o.blendFuncSeparate(ge[ht],ge[Nt],ge[Ut],ge[Kt]),z=ht,L=Nt,O=Ut,x=Kt),($t.equals(C)===!1||Tt!==W)&&(o.blendColor($t.r,$t.g,$t.b,Tt),C.copy($t),W=Tt),M=B,F=!1}function Ie(B,pt){B.side===La?Ft(o.CULL_FACE):Et(o.CULL_FACE);let ht=B.side===Kn;pt&&(ht=!ht),Ne(ht),B.blending===xl&&B.transparent===!1?Je(Yr):Je(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),d.setFunc(B.depthFunc),d.setTest(B.depthTest),d.setMask(B.depthWrite),f.setMask(B.colorWrite);const Nt=B.stencilWrite;h.setTest(Nt),Nt&&(h.setMask(B.stencilWriteMask),h.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),h.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),je(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?Et(o.SAMPLE_ALPHA_TO_COVERAGE):Ft(o.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(B){H!==B&&(B?o.frontFace(o.CW):o.frontFace(o.CCW),H=B)}function ne(B){B!==sE?(Et(o.CULL_FACE),B!==$&&(B===Av?o.cullFace(o.BACK):B===oE?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ft(o.CULL_FACE),$=B}function cn(B){B!==ct&&(k&&o.lineWidth(B),ct=B)}function je(B,pt,ht){B?(Et(o.POLYGON_OFFSET_FILL),(X!==pt||it!==ht)&&(X=pt,it=ht,d.getReversed()&&(pt=-pt,ht=-ht),o.polygonOffset(pt,ht))):Ft(o.POLYGON_OFFSET_FILL)}function fn(B){B?Et(o.SCISSOR_TEST):Ft(o.SCISSOR_TEST)}function Cn(B){B===void 0&&(B=o.TEXTURE0+q-1),ft!==B&&(o.activeTexture(B),ft=B)}function wn(B,pt,ht){ht===void 0&&(ft===null?ht=o.TEXTURE0+q-1:ht=ft);let Nt=xt[ht];Nt===void 0&&(Nt={type:void 0,texture:void 0},xt[ht]=Nt),(Nt.type!==B||Nt.texture!==pt)&&(ft!==ht&&(o.activeTexture(ht),ft=ht),o.bindTexture(B,pt||yt[B]),Nt.type=B,Nt.texture=pt)}function Y(){const B=xt[ft];B!==void 0&&B.type!==void 0&&(o.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Fn(){try{o.compressedTexImage2D(...arguments)}catch(B){Pe("WebGLState:",B)}}function Fe(){try{o.compressedTexImage3D(...arguments)}catch(B){Pe("WebGLState:",B)}}function ke(){try{o.texSubImage2D(...arguments)}catch(B){Pe("WebGLState:",B)}}function Pt(){try{o.texSubImage3D(...arguments)}catch(B){Pe("WebGLState:",B)}}function We(){try{o.compressedTexSubImage2D(...arguments)}catch(B){Pe("WebGLState:",B)}}function jt(){try{o.compressedTexSubImage3D(...arguments)}catch(B){Pe("WebGLState:",B)}}function re(){try{o.texStorage2D(...arguments)}catch(B){Pe("WebGLState:",B)}}function U(){try{o.texStorage3D(...arguments)}catch(B){Pe("WebGLState:",B)}}function b(){try{o.texImage2D(...arguments)}catch(B){Pe("WebGLState:",B)}}function et(){try{o.texImage3D(...arguments)}catch(B){Pe("WebGLState:",B)}}function bt(B){return g[B]!==void 0?g[B]:o.getParameter(B)}function vt(B,pt){g[B]!==pt&&(o.pixelStorei(B,pt),g[B]=pt)}function wt(B){w.equals(B)===!1&&(o.scissor(B.x,B.y,B.z,B.w),w.copy(B))}function Lt(B){J.equals(B)===!1&&(o.viewport(B.x,B.y,B.z,B.w),J.copy(B))}function dt(B,pt){let ht=m.get(pt);ht===void 0&&(ht=new WeakMap,m.set(pt,ht));let Nt=ht.get(B);Nt===void 0&&(Nt=o.getUniformBlockIndex(pt,B.name),o.uniformBlockBinding(pt,Nt,Nt),ht.set(B,Nt))}function mt(B,pt,ht){const At=m.get(pt).get(B);p[At]!==ht&&(o.bindBufferBase(o.UNIFORM_BUFFER,At,ht),p[At]=ht)}function Dt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),v={},g={},ft=null,xt={},S={},p={},E=new WeakMap,T=[],N=null,y=!1,M=null,D=null,z=null,L=null,I=null,O=null,x=null,C=new Ce(0,0,0),W=0,F=!1,H=null,$=null,ct=null,X=null,it=null,w.set(0,0,o.canvas.width,o.canvas.height),J.set(0,0,o.canvas.width,o.canvas.height),f.reset(),d.reset(),h.reset()}return{buffers:{color:f,depth:d,stencil:h},enable:Et,disable:Ft,bindFramebuffer:ee,drawBuffers:Mt,useProgram:Ht,setBlending:Je,setMaterial:Ie,setFlipSided:Ne,setCullFace:ne,setLineWidth:cn,setPolygonOffset:je,setScissorTest:fn,activeTexture:Cn,bindTexture:wn,unbindTexture:Y,compressedTexImage2D:Fn,compressedTexImage3D:Fe,texImage2D:b,texImage3D:et,pixelStorei:vt,getParameter:bt,updateUBOMapping:dt,uniformBlockBinding:mt,texStorage2D:re,texStorage3D:U,texSubImage2D:ke,texSubImage3D:Pt,compressedTexSubImage2D:We,compressedTexSubImage3D:jt,scissor:wt,viewport:Lt,reset:Dt}}function yC(o,e,i,s,u,f,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new le,v=new WeakMap,g=new Set;let S;const E=new WeakMap,T=new Set,N=new FinalizationRegistry(U=>T.delete(U));let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(U,b){return y?new OffscreenCanvas(U,b):Al("canvas")}function D(U,b,et){let bt=1;const vt=re(U);if((vt.width>et||vt.height>et)&&(bt=et/Math.max(vt.width,vt.height)),bt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const wt=Math.floor(bt*vt.width),Lt=Math.floor(bt*vt.height);S===void 0&&(S=M(wt,Lt));const dt=b?M(wt,Lt):S;return dt.width=wt,dt.height=Lt,dt.getContext("2d").drawImage(U,0,0,wt,Lt),oe("WebGLRenderer: Texture has been resized from ("+vt.width+"x"+vt.height+") to ("+wt+"x"+Lt+")."),dt}else return"data"in U&&oe("WebGLRenderer: Image in DataTexture is too big ("+vt.width+"x"+vt.height+")."),U;return U}function z(U){return U.generateMipmaps}function L(U){o.generateMipmap(U)}function I(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function O(U,b,et,bt,vt,wt=!1){if(U!==null){if(o[U]!==void 0)return o[U];oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Lt;bt&&(Lt=e.get("EXT_texture_norm16"),Lt||oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let dt=b;if(b===o.RED&&(et===o.FLOAT&&(dt=o.R32F),et===o.HALF_FLOAT&&(dt=o.R16F),et===o.UNSIGNED_BYTE&&(dt=o.R8),et===o.UNSIGNED_SHORT&&Lt&&(dt=Lt.R16_EXT),et===o.SHORT&&Lt&&(dt=Lt.R16_SNORM_EXT)),b===o.RED_INTEGER&&(et===o.UNSIGNED_BYTE&&(dt=o.R8UI),et===o.UNSIGNED_SHORT&&(dt=o.R16UI),et===o.UNSIGNED_INT&&(dt=o.R32UI),et===o.BYTE&&(dt=o.R8I),et===o.SHORT&&(dt=o.R16I),et===o.INT&&(dt=o.R32I)),b===o.RG&&(et===o.FLOAT&&(dt=o.RG32F),et===o.HALF_FLOAT&&(dt=o.RG16F),et===o.UNSIGNED_BYTE&&(dt=o.RG8),et===o.UNSIGNED_SHORT&&Lt&&(dt=Lt.RG16_EXT),et===o.SHORT&&Lt&&(dt=Lt.RG16_SNORM_EXT)),b===o.RG_INTEGER&&(et===o.UNSIGNED_BYTE&&(dt=o.RG8UI),et===o.UNSIGNED_SHORT&&(dt=o.RG16UI),et===o.UNSIGNED_INT&&(dt=o.RG32UI),et===o.BYTE&&(dt=o.RG8I),et===o.SHORT&&(dt=o.RG16I),et===o.INT&&(dt=o.RG32I)),b===o.RGB_INTEGER&&(et===o.UNSIGNED_BYTE&&(dt=o.RGB8UI),et===o.UNSIGNED_SHORT&&(dt=o.RGB16UI),et===o.UNSIGNED_INT&&(dt=o.RGB32UI),et===o.BYTE&&(dt=o.RGB8I),et===o.SHORT&&(dt=o.RGB16I),et===o.INT&&(dt=o.RGB32I)),b===o.RGBA_INTEGER&&(et===o.UNSIGNED_BYTE&&(dt=o.RGBA8UI),et===o.UNSIGNED_SHORT&&(dt=o.RGBA16UI),et===o.UNSIGNED_INT&&(dt=o.RGBA32UI),et===o.BYTE&&(dt=o.RGBA8I),et===o.SHORT&&(dt=o.RGBA16I),et===o.INT&&(dt=o.RGBA32I)),b===o.RGB&&(et===o.UNSIGNED_SHORT&&Lt&&(dt=Lt.RGB16_EXT),et===o.SHORT&&Lt&&(dt=Lt.RGB16_SNORM_EXT),et===o.UNSIGNED_INT_5_9_9_9_REV&&(dt=o.RGB9_E5),et===o.UNSIGNED_INT_10F_11F_11F_REV&&(dt=o.R11F_G11F_B10F)),b===o.RGBA){const mt=wt?zc:be.getTransfer(vt);et===o.FLOAT&&(dt=o.RGBA32F),et===o.HALF_FLOAT&&(dt=o.RGBA16F),et===o.UNSIGNED_BYTE&&(dt=mt===Be?o.SRGB8_ALPHA8:o.RGBA8),et===o.UNSIGNED_SHORT&&Lt&&(dt=Lt.RGBA16_EXT),et===o.SHORT&&Lt&&(dt=Lt.RGBA16_SNORM_EXT),et===o.UNSIGNED_SHORT_4_4_4_4&&(dt=o.RGBA4),et===o.UNSIGNED_SHORT_5_5_5_1&&(dt=o.RGB5_A1)}return(dt===o.R16F||dt===o.R32F||dt===o.RG16F||dt===o.RG32F||dt===o.RGBA16F||dt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),dt}function x(U,b){let et;return U?b===null||b===da||b===oo?et=o.DEPTH24_STENCIL8:b===ca?et=o.DEPTH32F_STENCIL8:b===bl&&(et=o.DEPTH24_STENCIL8,oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===da||b===oo?et=o.DEPTH_COMPONENT24:b===ca?et=o.DEPTH_COMPONENT32F:b===bl&&(et=o.DEPTH_COMPONENT16),et}function C(U,b){return z(U)===!0||U.isFramebufferTexture&&U.minFilter!==zn&&U.minFilter!==ai?Math.log2(Math.max(b.width,b.height))+1:U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?b.mipmaps.length:1}function W(U){const b=new WeakRef(U);s.get(U).__ref=b,T.add(b),N.register(U,b,b)}function F(U){const b=s.get(U).__ref;b!==void 0&&(T.delete(b),N.unregister(b))}function H(U){ct(U.target)}function $(U){X(U.target)}function ct(U){U.removeEventListener("dispose",H),F(U),q(U),U.isVideoTexture&&v.delete(U),U.isHTMLTexture&&g.delete(U)}function X(U){U.removeEventListener("dispose",$),F(U),ut(U)}function it(){for(const U of T){const b=U.deref();b!==void 0&&(b.isRenderTarget===!0?X(b):ct(b))}T.clear(),g.clear()}function q(U){const b=s.get(U);if(b.__webglInit===void 0)return;const et=U.source,bt=E.get(et);if(bt){const vt=bt[b.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&k(U),Object.keys(bt).length===0&&E.delete(et)}s.remove(U)}function k(U){const b=s.get(U);o.deleteTexture(b.__webglTexture);const et=U.source,bt=E.get(et);delete bt[b.__cacheKey],d.memory.textures--}function ut(U){const b=s.get(U);b.__depthDisposeCallback&&b.__depthDisposeCallback();const et=U.depthTexture;if(et&&et.renderTarget===U&&ct(et),U.isWebGLCubeRenderTarget)for(let vt=0;vt<6;vt++){if(Array.isArray(b.__webglFramebuffer[vt]))for(let wt=0;wt<b.__webglFramebuffer[vt].length;wt++)o.deleteFramebuffer(b.__webglFramebuffer[vt][wt]);else o.deleteFramebuffer(b.__webglFramebuffer[vt]);b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer[vt])}else{if(Array.isArray(b.__webglFramebuffer))for(let vt=0;vt<b.__webglFramebuffer.length;vt++)o.deleteFramebuffer(b.__webglFramebuffer[vt]);else o.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&o.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let vt=0;vt<b.__webglColorRenderbuffer.length;vt++)b.__webglColorRenderbuffer[vt]&&o.deleteRenderbuffer(b.__webglColorRenderbuffer[vt]);b.__webglDepthRenderbuffer&&o.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const bt=U.textures;for(let vt=0,wt=bt.length;vt<wt;vt++){const Lt=s.get(bt[vt]);Lt.__webglTexture&&(o.deleteTexture(Lt.__webglTexture),d.memory.textures--),s.remove(bt[vt])}s.remove(U)}let tt=0;function ft(){tt=0}function xt(){return tt}function Vt(U){tt=U}function te(){const U=tt;return U>=u.maxTextures&&oe("WebGLTextures: Trying to use "+(U+1)+" texture units while this GPU supports only "+u.maxTextures),tt+=1,U}function w(U){const b=[];return b.push(U.wrapS),b.push(U.wrapT),b.push(U.wrapR||0),b.push(U.magFilter),b.push(U.minFilter),b.push(U.anisotropy),b.push(U.internalFormat),b.push(U.format),b.push(U.type),b.push(U.generateMipmaps),b.push(U.mipmapsAutoUpdate),b.push(U.premultiplyAlpha),b.push(U.flipY),b.push(U.unpackAlignment),b.push(U.colorSpace),b.join()}function J(U,b){const et=s.get(U);if(U.isVideoTexture&&We(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&et.__version!==U.version){const bt=U.image;if(bt===null)oe("WebGLRenderer: Texture marked for update but no image data found.");else if(bt.complete===!1)oe("WebGLRenderer: Texture marked for update but image is incomplete");else{Ie(et,U,b);return}}else U.isExternalTexture&&(et.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,et.__webglTexture,o.TEXTURE0+b)}function St(U,b){const et=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&et.__version!==U.version){Ie(et,U,b);return}else U.isExternalTexture&&(et.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,et.__webglTexture,o.TEXTURE0+b)}function yt(U,b){const et=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&et.__version!==U.version){Ie(et,U,b);return}i.bindTexture(o.TEXTURE_3D,et.__webglTexture,o.TEXTURE0+b)}function Et(U,b){const et=s.get(U);if(U.version>0&&et.__version!==U.version){Ne(et,U,b);return}i.bindTexture(o.TEXTURE_CUBE_MAP,et.__webglTexture,o.TEXTURE0+b)}const Ft={[op]:o.REPEAT,[Oa]:o.CLAMP_TO_EDGE,[lp]:o.MIRRORED_REPEAT},ee={[zn]:o.NEAREST,[wE]:o.NEAREST_MIPMAP_NEAREST,[$u]:o.NEAREST_MIPMAP_LINEAR,[ai]:o.LINEAR,[Rh]:o.LINEAR_MIPMAP_NEAREST,[Pa]:o.LINEAR_MIPMAP_LINEAR},Mt={[LE]:o.NEVER,[GS]:o.ALWAYS,[OE]:o.LESS,[FS]:o.LEQUAL,[PE]:o.EQUAL,[HS]:o.GEQUAL,[IE]:o.GREATER,[zE]:o.NOTEQUAL};function Ht(U,b){if(b.type===ca&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===ai||b.magFilter===Rh||b.magFilter===$u||b.magFilter===Pa||b.minFilter===ai||b.minFilter===Rh||b.minFilter===$u||b.minFilter===Pa)&&oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,Ft[b.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,Ft[b.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,Ft[b.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,ee[b.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,ee[b.minFilter]),b.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,Mt[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===zn||b.minFilter!==$u&&b.minFilter!==Pa||b.type===ca&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const et=e.get("EXT_texture_filter_anisotropic");o.texParameterf(U,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,u.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function xe(U,b){let et=!1;U.__webglInit===void 0&&(U.__webglInit=!0,b.addEventListener("dispose",H),W(b));const bt=b.source;let vt=E.get(bt);vt===void 0&&(vt={},E.set(bt,vt));const wt=w(b);if(wt!==U.__cacheKey){vt[wt]===void 0&&(vt[wt]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,et=!0),vt[wt].usedTimes++;const Lt=vt[U.__cacheKey];Lt!==void 0&&(vt[U.__cacheKey].usedTimes--,Lt.usedTimes===0&&k(b)),U.__cacheKey=wt,U.__webglTexture=vt[wt].texture}return et}function ge(U,b,et){return Math.floor(Math.floor(U/et)/b)}function Je(U,b,et,bt){const wt=U.updateRanges;if(wt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,b.width,b.height,et,bt,b.data);else{wt.sort((B,pt)=>B.start-pt.start);let Lt=0;for(let B=1;B<wt.length;B++){const pt=wt[Lt],ht=wt[B],Nt=pt.start+pt.count,At=ge(ht.start,b.width,4),Ut=ge(pt.start,b.width,4);ht.start<=Nt+1&&At===Ut&&ge(ht.start+ht.count-1,b.width,4)===At?pt.count=Math.max(pt.count,ht.start+ht.count-pt.start):(++Lt,wt[Lt]=ht)}wt.length=Lt+1;const dt=i.getParameter(o.UNPACK_ROW_LENGTH),mt=i.getParameter(o.UNPACK_SKIP_PIXELS),Dt=i.getParameter(o.UNPACK_SKIP_ROWS);i.pixelStorei(o.UNPACK_ROW_LENGTH,b.width);for(let B=0,pt=wt.length;B<pt;B++){const ht=wt[B],Nt=Math.floor(ht.start/4),At=Math.ceil(ht.count/4),Ut=Nt%b.width,Kt=Math.floor(Nt/b.width),$t=At,Tt=1;i.pixelStorei(o.UNPACK_SKIP_PIXELS,Ut),i.pixelStorei(o.UNPACK_SKIP_ROWS,Kt),i.texSubImage2D(o.TEXTURE_2D,0,Ut,Kt,$t,Tt,et,bt,b.data)}U.clearUpdateRanges(),i.pixelStorei(o.UNPACK_ROW_LENGTH,dt),i.pixelStorei(o.UNPACK_SKIP_PIXELS,mt),i.pixelStorei(o.UNPACK_SKIP_ROWS,Dt)}}function Ie(U,b,et){let bt=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(bt=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&(bt=o.TEXTURE_3D);const vt=xe(U,b),wt=b.source;i.bindTexture(bt,U.__webglTexture,o.TEXTURE0+et);const Lt=s.get(wt);if(wt.version!==Lt.__version||vt===!0){if(i.activeTexture(o.TEXTURE0+et),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const Tt=be.getPrimaries(be.workingColorSpace),kt=b.colorSpace===vr?null:be.getPrimaries(b.colorSpace),fe=b.colorSpace===vr||Tt===kt?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe)}i.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment);let mt=D(b.image,!1,u.maxTextureSize);mt=jt(b,mt);const Dt=f.convert(b.format,b.colorSpace),B=f.convert(b.type);let pt=O(b.internalFormat,Dt,B,b.normalized,b.colorSpace,b.isVideoTexture);Ht(bt,b);let ht;const Nt=b.mipmaps,At=b.isVideoTexture!==!0,Ut=Lt.__version===void 0||vt===!0,Kt=wt.dataReady,$t=C(b,mt);if(b.isDepthTexture)pt=x(b.format===Sr,b.type),Ut&&(At?i.texStorage2D(o.TEXTURE_2D,1,pt,mt.width,mt.height):i.texImage2D(o.TEXTURE_2D,0,pt,mt.width,mt.height,0,Dt,B,null));else if(b.isDataTexture)if(Nt.length>0){At&&Ut&&i.texStorage2D(o.TEXTURE_2D,$t,pt,Nt[0].width,Nt[0].height);for(let Tt=0,kt=Nt.length;Tt<kt;Tt++)ht=Nt[Tt],At?Kt&&i.texSubImage2D(o.TEXTURE_2D,Tt,0,0,ht.width,ht.height,Dt,B,ht.data):i.texImage2D(o.TEXTURE_2D,Tt,pt,ht.width,ht.height,0,Dt,B,ht.data);b.generateMipmaps=!1}else At?(Ut&&i.texStorage2D(o.TEXTURE_2D,$t,pt,mt.width,mt.height),Kt&&Je(b,mt,Dt,B)):i.texImage2D(o.TEXTURE_2D,0,pt,mt.width,mt.height,0,Dt,B,mt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){At&&Ut&&i.texStorage3D(o.TEXTURE_2D_ARRAY,$t,pt,Nt[0].width,Nt[0].height,mt.depth);for(let Tt=0,kt=Nt.length;Tt<kt;Tt++)if(ht=Nt[Tt],b.format!==fa)if(Dt!==null)if(At){if(Kt)if(b.layerUpdates.size>0){const fe=eS(ht.width,ht.height,b.format,b.type);for(const Bt of b.layerUpdates){const Ue=ht.data.subarray(Bt*fe/ht.data.BYTES_PER_ELEMENT,(Bt+1)*fe/ht.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Tt,0,0,Bt,ht.width,ht.height,1,Dt,Ue)}}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Tt,0,0,0,ht.width,ht.height,mt.depth,Dt,ht.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Tt,pt,ht.width,ht.height,mt.depth,0,ht.data,0,0);else oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else At?Kt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Tt,0,0,0,ht.width,ht.height,mt.depth,Dt,B,ht.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Tt,pt,ht.width,ht.height,mt.depth,0,Dt,B,ht.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{At&&Ut&&i.texStorage2D(o.TEXTURE_2D,$t,pt,Nt[0].width,Nt[0].height);for(let Tt=0,kt=Nt.length;Tt<kt;Tt++)ht=Nt[Tt],b.format!==fa?Dt!==null?At?Kt&&i.compressedTexSubImage2D(o.TEXTURE_2D,Tt,0,0,ht.width,ht.height,Dt,ht.data):i.compressedTexImage2D(o.TEXTURE_2D,Tt,pt,ht.width,ht.height,0,ht.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):At?Kt&&i.texSubImage2D(o.TEXTURE_2D,Tt,0,0,ht.width,ht.height,Dt,B,ht.data):i.texImage2D(o.TEXTURE_2D,Tt,pt,ht.width,ht.height,0,Dt,B,ht.data)}else if(b.isDataArrayTexture)if(At){if(Ut&&i.texStorage3D(o.TEXTURE_2D_ARRAY,$t,pt,mt.width,mt.height,mt.depth),Kt)if(b.layerUpdates.size>0){const Tt=eS(mt.width,mt.height,b.format,b.type);for(const kt of b.layerUpdates){const fe=mt.data.subarray(kt*Tt/mt.data.BYTES_PER_ELEMENT,(kt+1)*Tt/mt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,kt,mt.width,mt.height,1,Dt,B,fe)}b.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,mt.width,mt.height,mt.depth,Dt,B,mt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,pt,mt.width,mt.height,mt.depth,0,Dt,B,mt.data);else if(b.isData3DTexture)At?(Ut&&i.texStorage3D(o.TEXTURE_3D,$t,pt,mt.width,mt.height,mt.depth),Kt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,mt.width,mt.height,mt.depth,Dt,B,mt.data)):i.texImage3D(o.TEXTURE_3D,0,pt,mt.width,mt.height,mt.depth,0,Dt,B,mt.data);else if(b.isFramebufferTexture){if(Ut)if(At)i.texStorage2D(o.TEXTURE_2D,$t,pt,mt.width,mt.height);else{let Tt=mt.width,kt=mt.height;for(let fe=0;fe<$t;fe++)i.texImage2D(o.TEXTURE_2D,fe,pt,Tt,kt,0,Dt,B,null),Tt>>=1,kt>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in o){const Tt=o.canvas;if(Tt.hasAttribute("layoutsubtree")||Tt.setAttribute("layoutsubtree","true"),mt.parentNode!==Tt){Tt.appendChild(mt),g.add(b),Tt.onpaint=kt=>{const fe=kt.changedElements;for(const Bt of g)fe.includes(Bt.image)&&(Bt.needsUpdate=!0)},Tt.requestPaint();return}if(o.texElementImage2D.length===3)o.texElementImage2D(o.TEXTURE_2D,o.RGBA8,mt);else{const fe=o.RGBA,Bt=o.RGBA,Ue=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,0,fe,Bt,Ue,mt)}o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(Nt.length>0){if(At&&Ut){const Tt=re(Nt[0]);i.texStorage2D(o.TEXTURE_2D,$t,pt,Tt.width,Tt.height)}for(let Tt=0,kt=Nt.length;Tt<kt;Tt++)ht=Nt[Tt],At?Kt&&i.texSubImage2D(o.TEXTURE_2D,Tt,0,0,Dt,B,ht):i.texImage2D(o.TEXTURE_2D,Tt,pt,Dt,B,ht);b.generateMipmaps=!1}else if(At){if(Ut){const Tt=re(mt);i.texStorage2D(o.TEXTURE_2D,$t,pt,Tt.width,Tt.height)}Kt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Dt,B,mt)}else i.texImage2D(o.TEXTURE_2D,0,pt,Dt,B,mt);z(b)&&b.mipmapsAutoUpdate===!0&&L(bt),Lt.__version=wt.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function Ne(U,b,et){if(b.image.length!==6)return;const bt=xe(U,b),vt=b.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+et);const wt=s.get(vt);if(vt.version!==wt.__version||bt===!0){i.activeTexture(o.TEXTURE0+et);const Lt=be.getPrimaries(be.workingColorSpace),dt=b.colorSpace===vr?null:be.getPrimaries(b.colorSpace),mt=b.colorSpace===vr||Lt===dt?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);const Dt=b.isCompressedTexture||b.image[0].isCompressedTexture,B=b.image[0]&&b.image[0].isDataTexture,pt=[];for(let Bt=0;Bt<6;Bt++)!Dt&&!B?pt[Bt]=D(b.image[Bt],!0,u.maxCubemapSize):pt[Bt]=B?b.image[Bt].image:b.image[Bt],pt[Bt]=jt(b,pt[Bt]);const ht=pt[0],Nt=f.convert(b.format,b.colorSpace),At=f.convert(b.type);let Ut=O(b.internalFormat,Nt,At,b.normalized,b.colorSpace);const Kt=b.isVideoTexture!==!0,$t=wt.__version===void 0||bt===!0,Tt=vt.dataReady;let kt=C(b,ht);Ht(o.TEXTURE_CUBE_MAP,b);let fe;if(b.isDepthTexture){if(Ut=x(b.format===Sr,b.type),$t)if(Kt)i.texStorage2D(o.TEXTURE_CUBE_MAP,1,Ut,ht.width,ht.height);else for(let Bt=0;Bt<6;Bt++)i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Bt,0,Ut,ht.width,ht.height,0,Nt,At,null)}else if(Dt){Kt&&$t&&i.texStorage2D(o.TEXTURE_CUBE_MAP,kt,Ut,ht.width,ht.height);for(let Bt=0;Bt<6;Bt++){fe=pt[Bt].mipmaps;for(let Ue=0;Ue<fe.length;Ue++){const tn=fe[Ue];b.format!==fa?Nt!==null?Kt?Tt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Bt,Ue,0,0,tn.width,tn.height,Nt,tn.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Bt,Ue,Ut,tn.width,tn.height,0,tn.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Kt?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Bt,Ue,0,0,tn.width,tn.height,Nt,At,tn.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Bt,Ue,Ut,tn.width,tn.height,0,Nt,At,tn.data)}}}else{if(fe=b.mipmaps,Kt&&$t){fe.length>0&&kt++;const Bt=re(pt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,kt,Ut,Bt.width,Bt.height)}for(let Bt=0;Bt<6;Bt++)if(B){Kt?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Bt,0,0,0,pt[Bt].width,pt[Bt].height,Nt,At,pt[Bt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Bt,0,Ut,pt[Bt].width,pt[Bt].height,0,Nt,At,pt[Bt].data);for(let Ue=0;Ue<fe.length;Ue++){const oi=fe[Ue].image[Bt].image;Kt?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Bt,Ue+1,0,0,oi.width,oi.height,Nt,At,oi.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Bt,Ue+1,Ut,oi.width,oi.height,0,Nt,At,oi.data)}}else{Kt?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Bt,0,0,0,Nt,At,pt[Bt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Bt,0,Ut,Nt,At,pt[Bt]);for(let Ue=0;Ue<fe.length;Ue++){const tn=fe[Ue];Kt?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Bt,Ue+1,0,0,Nt,At,tn.image[Bt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Bt,Ue+1,Ut,Nt,At,tn.image[Bt])}}}z(b)&&b.mipmapsAutoUpdate===!0&&L(o.TEXTURE_CUBE_MAP),wt.__version=vt.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function ne(U,b,et,bt,vt,wt){const Lt=f.convert(et.format,et.colorSpace),dt=f.convert(et.type),mt=O(et.internalFormat,Lt,dt,et.normalized,et.colorSpace),Dt=s.get(b),B=s.get(et);if(B.__renderTarget=b,!Dt.__hasExternalTextures){const pt=Math.max(1,b.width>>wt),ht=Math.max(1,b.height>>wt);vt===o.TEXTURE_3D||vt===o.TEXTURE_2D_ARRAY?i.texImage3D(vt,wt,mt,pt,ht,b.depth,0,Lt,dt,null):i.texImage2D(vt,wt,mt,pt,ht,0,Lt,dt,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),Pt(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,bt,vt,B.__webglTexture,0,ke(b)):(vt===o.TEXTURE_2D||vt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,bt,vt,B.__webglTexture,wt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function cn(U,b,et){if(o.bindRenderbuffer(o.RENDERBUFFER,U),b.depthBuffer){const bt=b.depthTexture,vt=bt&&bt.isDepthTexture?bt.type:null,wt=x(b.stencilBuffer,vt),Lt=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;Pt(b)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ke(b),wt,b.width,b.height):et?o.renderbufferStorageMultisample(o.RENDERBUFFER,ke(b),wt,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,wt,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Lt,o.RENDERBUFFER,U)}else{const bt=b.textures;for(let vt=0;vt<bt.length;vt++){const wt=bt[vt],Lt=f.convert(wt.format,wt.colorSpace),dt=f.convert(wt.type),mt=O(wt.internalFormat,Lt,dt,wt.normalized,wt.colorSpace);Pt(b)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ke(b),mt,b.width,b.height):et?o.renderbufferStorageMultisample(o.RENDERBUFFER,ke(b),mt,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,mt,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function je(U,b,et){const bt=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const vt=s.get(b.depthTexture);vt.__renderTarget=b;const wt=bt?b.depthTexture.image[0]:b.depthTexture.image;(!vt.__webglTexture||wt.width!==b.width||wt.height!==b.height)&&(wt.width=b.width,wt.height=b.height,b.depthTexture.needsUpdate=!0),bt?Et(b.depthTexture,0):J(b.depthTexture,0);const Lt=vt.__webglTexture,dt=ke(b),mt=bt?o.TEXTURE_CUBE_MAP_POSITIVE_X+et:o.TEXTURE_2D,Dt=b.depthTexture.format===Sr?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(b.depthTexture.format===xr)Pt(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Dt,mt,Lt,0,dt):o.framebufferTexture2D(o.FRAMEBUFFER,Dt,mt,Lt,0);else if(b.depthTexture.format===Sr)Pt(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Dt,mt,Lt,0,dt):o.framebufferTexture2D(o.FRAMEBUFFER,Dt,mt,Lt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function fn(U){const b=s.get(U),et=U.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==U.depthTexture){const bt=U.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),bt){const vt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,bt.removeEventListener("dispose",vt)};bt.addEventListener("dispose",vt),b.__depthDisposeCallback=vt}b.__boundDepthTexture=bt}if(U.depthTexture&&!b.__autoAllocateDepthBuffer)if(et)for(let bt=0;bt<6;bt++)je(b.__webglFramebuffer[bt],U,bt);else U.texture.mipmaps.length>0?je(b.__webglFramebuffer[0],U,0):je(b.__webglFramebuffer,U,0);else if(et){b.__webglDepthbuffer=[];for(let bt=0;bt<6;bt++)if(i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[bt]),b.__webglDepthbuffer[bt]===void 0)b.__webglDepthbuffer[bt]=o.createRenderbuffer(),cn(b.__webglDepthbuffer[bt],U,!1);else{const vt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,wt=b.__webglDepthbuffer[bt];o.bindRenderbuffer(o.RENDERBUFFER,wt),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,wt)}}else if(U.texture.mipmaps.length>0?i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=o.createRenderbuffer(),cn(b.__webglDepthbuffer,U,!1);else{const vt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,wt=b.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,wt),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,wt)}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Cn(U,b,et){const bt=s.get(U);b!==void 0&&ne(bt.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),et!==void 0&&fn(U)}function wn(U){const b=U.texture,et=s.get(U),bt=s.get(b);U.addEventListener("dispose",$),W(U);const vt=U.textures,wt=U.isWebGLCubeRenderTarget===!0,Lt=vt.length>1;if(Lt||(bt.__webglTexture===void 0&&(bt.__webglTexture=o.createTexture()),bt.__version=b.version,d.memory.textures++),wt){et.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(b.mipmaps.length>0){et.__webglFramebuffer[dt]=[];for(let mt=0;mt<b.mipmaps.length;mt++)et.__webglFramebuffer[dt][mt]=o.createFramebuffer()}else et.__webglFramebuffer[dt]=o.createFramebuffer()}else{if(b.mipmaps.length>0){et.__webglFramebuffer=[];for(let dt=0;dt<b.mipmaps.length;dt++)et.__webglFramebuffer[dt]=o.createFramebuffer()}else et.__webglFramebuffer=o.createFramebuffer();if(Lt)for(let dt=0,mt=vt.length;dt<mt;dt++){const Dt=s.get(vt[dt]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=o.createTexture(),d.memory.textures++)}if(U.samples>0&&Pt(U)===!1){et.__webglMultisampledFramebuffer=o.createFramebuffer(),et.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let dt=0;dt<vt.length;dt++){const mt=vt[dt];et.__webglColorRenderbuffer[dt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,et.__webglColorRenderbuffer[dt]);const Dt=f.convert(mt.format,mt.colorSpace),B=f.convert(mt.type),pt=O(mt.internalFormat,Dt,B,mt.normalized,mt.colorSpace,U.isXRRenderTarget===!0),ht=ke(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,ht,pt,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+dt,o.RENDERBUFFER,et.__webglColorRenderbuffer[dt])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(et.__webglDepthRenderbuffer=o.createRenderbuffer(),cn(et.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(wt){i.bindTexture(o.TEXTURE_CUBE_MAP,bt.__webglTexture),Ht(o.TEXTURE_CUBE_MAP,b);for(let dt=0;dt<6;dt++)if(b.mipmaps.length>0)for(let mt=0;mt<b.mipmaps.length;mt++)ne(et.__webglFramebuffer[dt][mt],U,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+dt,mt);else ne(et.__webglFramebuffer[dt],U,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);z(b)?L(o.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&o.texParameteri(o.TEXTURE_CUBE_MAP,o.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),i.unbindTexture()}else if(Lt){for(let dt=0,mt=vt.length;dt<mt;dt++){const Dt=vt[dt],B=s.get(Dt);let pt=o.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(pt=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(pt,B.__webglTexture),Ht(pt,Dt),ne(et.__webglFramebuffer,U,Dt,o.COLOR_ATTACHMENT0+dt,pt,0),z(Dt)&&L(pt)}i.unbindTexture()}else{let dt=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(dt=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(dt,bt.__webglTexture),Ht(dt,b),b.mipmaps.length>0)for(let mt=0;mt<b.mipmaps.length;mt++)ne(et.__webglFramebuffer[mt],U,b,o.COLOR_ATTACHMENT0,dt,mt);else ne(et.__webglFramebuffer,U,b,o.COLOR_ATTACHMENT0,dt,0);z(b)?L(dt):b.mipmaps.length>0&&o.texParameteri(dt,o.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),i.unbindTexture()}U.depthBuffer&&fn(U)}function Y(U){const b=U.textures;for(let et=0,bt=b.length;et<bt;et++){const vt=b[et];if(z(vt)&&vt.mipmapsAutoUpdate===!0){const wt=I(U),Lt=s.get(vt).__webglTexture;i.bindTexture(wt,Lt),L(wt),i.unbindTexture()}}}const Fn=[];function Fe(U){if(U.samples>0){if(Pt(U)===!1){const b=U.textures,et=U.width,bt=U.height;let vt=o.COLOR_BUFFER_BIT;const wt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Lt=s.get(U),dt=b.length>1;if(dt)for(let Dt=0;Dt<b.length;Dt++)i.bindFramebuffer(o.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Lt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),U.texture.mipmaps.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let Dt=0;Dt<b.length;Dt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(vt|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(vt|=o.STENCIL_BUFFER_BIT)),dt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Lt.__webglColorRenderbuffer[Dt]);const B=s.get(b[Dt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,B,0)}o.blitFramebuffer(0,0,et,bt,0,0,et,bt,vt,o.NEAREST),p===!0&&(Fn.length=0,Fn.push(o.COLOR_ATTACHMENT0+Dt),U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&Fn.push(wt),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Fn))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),dt)for(let Dt=0;Dt<b.length;Dt++){i.bindFramebuffer(o.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.RENDERBUFFER,Lt.__webglColorRenderbuffer[Dt]);const B=s.get(b[Dt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Lt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.TEXTURE_2D,B,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&p){const b=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[b])}}}function ke(U){return Math.min(u.maxSamples,U.samples)}function Pt(U){const b=s.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function We(U){const b=d.render.frame;v.get(U)!==b&&(v.set(U,b),U.update())}function jt(U,b){const et=U.colorSpace,bt=U.format,vt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||et!==Ic&&et!==vr&&(be.getTransfer(et)===Be?(bt!==fa||vt!==Ni)&&oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pe("WebGLTextures: Unsupported texture color space:",et)),b}function re(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(m.width=U.naturalWidth||U.width,m.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(m.width=U.displayWidth,m.height=U.displayHeight):(m.width=U.width,m.height=U.height),m}this.allocateTextureUnit=te,this.resetTextureUnits=ft,this.getTextureUnits=xt,this.setTextureUnits=Vt,this.setTexture2D=J,this.setTexture2DArray=St,this.setTexture3D=yt,this.setTextureCube=Et,this.rebindTextures=Cn,this.setupRenderTarget=wn,this.updateRenderTargetMipmap=Y,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=fn,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=Pt,this.dispose=it}function EC(o,e){function i(s,u=vr){let f;const d=be.getTransfer(u);if(s===Ni)return o.UNSIGNED_BYTE;if(s===Qp)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Jp)return o.UNSIGNED_SHORT_5_5_5_1;if(s===OS)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===PS)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===US)return o.BYTE;if(s===LS)return o.SHORT;if(s===bl)return o.UNSIGNED_SHORT;if(s===Kp)return o.INT;if(s===da)return o.UNSIGNED_INT;if(s===ca)return o.FLOAT;if(s===ri)return o.HALF_FLOAT;if(s===IS)return o.ALPHA;if(s===zS)return o.RGB;if(s===fa)return o.RGBA;if(s===xr)return o.DEPTH_COMPONENT;if(s===Sr)return o.DEPTH_STENCIL;if(s===BS)return o.RED;if(s===jp)return o.RED_INTEGER;if(s===Jr)return o.RG;if(s===$p)return o.RG_INTEGER;if(s===tm)return o.RGBA_INTEGER;if(s===Ac||s===Rc||s===Cc||s===wc)if(d===Be)if(f=e.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(s===Ac)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Rc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Cc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===wc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=e.get("WEBGL_compressed_texture_s3tc"),f!==null){if(s===Ac)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Rc)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Cc)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===wc)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===up||s===cp||s===fp||s===dp)if(f=e.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(s===up)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===cp)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===fp)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===dp)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===hp||s===pp||s===mp||s===gp||s===_p||s===Oc||s===vp)if(f=e.get("WEBGL_compressed_texture_etc"),f!==null){if(s===hp||s===pp)return d===Be?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(s===mp)return d===Be?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC;if(s===gp)return f.COMPRESSED_R11_EAC;if(s===_p)return f.COMPRESSED_SIGNED_R11_EAC;if(s===Oc)return f.COMPRESSED_RG11_EAC;if(s===vp)return f.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Sp||s===xp||s===Mp||s===yp||s===Ep||s===Tp||s===bp||s===Ap||s===Rp||s===Cp||s===wp||s===Dp||s===Np||s===Up)if(f=e.get("WEBGL_compressed_texture_astc"),f!==null){if(s===Sp)return d===Be?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===xp)return d===Be?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Mp)return d===Be?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===yp)return d===Be?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ep)return d===Be?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Tp)return d===Be?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===bp)return d===Be?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ap)return d===Be?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Rp)return d===Be?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Cp)return d===Be?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===wp)return d===Be?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Dp)return d===Be?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Np)return d===Be?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Up)return d===Be?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Lp||s===Op||s===Pp)if(f=e.get("EXT_texture_compression_bptc"),f!==null){if(s===Lp)return d===Be?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Op)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Pp)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ip||s===zp||s===Pc||s===Bp)if(f=e.get("EXT_texture_compression_rgtc"),f!==null){if(s===Ip)return f.COMPRESSED_RED_RGTC1_EXT;if(s===zp)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Pc)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Bp)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===oo?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const TC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bC=`
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

}`;class AC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new ex(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new Bn({vertexShader:TC,fragmentShader:bC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Yi(new uo(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class RC extends $r{constructor(e,i){super();const s=this;let u=null,f=1,d=null,h="local-floor",p=1,m=null,v=null,g=null,S=null,E=null,T=null;const N=typeof XRWebGLBinding<"u",y=new AC,M={},D=i.getContextAttributes();let z=null,L=null;const I=[],O=[],x=new le;let C=null,W=null;const F=new Xi;F.viewport=new ln;const H=new Xi;H.viewport=new ln;const $=[F,H],ct=new BT;let X=null,it=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(w){let J=I[w];return J===void 0&&(J=new Oh,I[w]=J),J.getTargetRaySpace()},this.getControllerGrip=function(w){let J=I[w];return J===void 0&&(J=new Oh,I[w]=J),J.getGripSpace()},this.getHand=function(w){let J=I[w];return J===void 0&&(J=new Oh,I[w]=J),J.getHandSpace()};function q(w){const J=O.indexOf(w.inputSource);if(J===-1)return;const St=I[J];St!==void 0&&(St.update(w.inputSource,w.frame,m||d),St.dispatchEvent({type:w.type,data:w.inputSource}))}function k(){u.removeEventListener("select",q),u.removeEventListener("selectstart",q),u.removeEventListener("selectend",q),u.removeEventListener("squeeze",q),u.removeEventListener("squeezestart",q),u.removeEventListener("squeezeend",q),u.removeEventListener("end",k),u.removeEventListener("inputsourceschange",ut);for(let w=0;w<I.length;w++){const J=O[w];J!==null&&(O[w]=null,I[w].disconnect(J))}X=null,it=null,y.reset();for(const w in M)delete M[w];if(e.setRenderTarget(z),E=null,S=null,g=null,u=null,L=null,te.stop(),s.isPresenting=!1,e.setPixelRatio(C),e.setSize(x.width,x.height,!1),W!==null){const w=W.camera;w.fov=W.fov,w.zoom=W.zoom,w.updateProjectionMatrix(),W=null}s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(w){f=w,s.isPresenting===!0&&oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(w){h=w,s.isPresenting===!0&&oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(w){m=w},this.getBaseLayer=function(){return S!==null?S:E},this.getBinding=function(){return g===null&&N&&(g=new XRWebGLBinding(u,i)),g},this.getFrame=function(){return T},this.getSession=function(){return u},this.setSession=async function(w){if(u=w,u!==null){if(z=e.getRenderTarget(),u.addEventListener("select",q),u.addEventListener("selectstart",q),u.addEventListener("selectend",q),u.addEventListener("squeeze",q),u.addEventListener("squeezestart",q),u.addEventListener("squeezeend",q),u.addEventListener("end",k),u.addEventListener("inputsourceschange",ut),D.xrCompatible!==!0&&await i.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(x),N&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,yt=null,Et=null;D.depth&&(Et=D.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,St=D.stencil?Sr:xr,yt=D.stencil?oo:da);const Ft={colorFormat:i.RGBA8,depthFormat:Et,scaleFactor:f};g=this.getBinding(),S=g.createProjectionLayer(Ft),u.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),L=new si(S.textureWidth,S.textureHeight,{format:fa,type:Ni,depthTexture:new lo(S.textureWidth,S.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1,storeMultisampledDepthBuffer:S.ignoreDepthValues===!1,storeMultisampledStencilBuffer:S.ignoreDepthValues===!1})}else{const St={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:f};E=new XRWebGLLayer(u,i,St),u.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),L=new si(E.framebufferWidth,E.framebufferHeight,{format:fa,type:Ni,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1,storeMultisampledDepthBuffer:E.ignoreDepthValues===!1,storeMultisampledStencilBuffer:E.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(p),m=null,d=await u.requestReferenceSpace(h),te.setContext(u),te.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(u!==null)return u.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function ut(w){for(let J=0;J<w.removed.length;J++){const St=w.removed[J],yt=O.indexOf(St);yt>=0&&(O[yt]=null,I[yt].disconnect(St))}for(let J=0;J<w.added.length;J++){const St=w.added[J];let yt=O.indexOf(St);if(yt===-1){for(let Ft=0;Ft<I.length;Ft++)if(Ft>=O.length){O.push(St),yt=Ft;break}else if(O[Ft]===null){O[Ft]=St,yt=Ft;break}if(yt===-1)break}const Et=I[yt];Et&&Et.connect(St)}}function tt(w,J){J===null?w.matrixWorld.copy(w.matrix):w.matrixWorld.multiplyMatrices(J.matrixWorld,w.matrix),w.matrixWorldInverse.copy(w.matrixWorld).invert()}this.updateCamera=function(w){if(u===null)return;let J=w.near,St=w.far;y.texture!==null&&(y.depthNear>0&&(J=y.depthNear),y.depthFar>0&&(St=y.depthFar)),ct.near=H.near=F.near=J,ct.far=H.far=F.far=St,(X!==ct.near||it!==ct.far)&&(u.updateRenderState({depthNear:ct.near,depthFar:ct.far}),X=ct.near,it=ct.far),ct.layers.mask=w.layers.mask|6,F.layers.mask=ct.layers.mask&-5,H.layers.mask=ct.layers.mask&-3;const yt=w.parent,Et=ct.cameras;tt(ct,yt);for(let Ft=0;Ft<Et.length;Ft++)tt(Et[Ft],yt);ct.projectionMatrix.copy(F.projectionMatrix),ct.projectionMatrixInverse.copy(F.projectionMatrixInverse),W===null&&w.isPerspectiveCamera&&(W={camera:w,fov:w.fov,zoom:w.zoom}),ft(w,ct,yt)};function ft(w,J,St){St===null?w.matrix.copy(J.matrixWorld):(w.matrix.copy(St.matrixWorld),w.matrix.invert(),w.matrix.multiply(J.matrixWorld)),w.matrix.decompose(w.position,w.quaternion,w.scale),w.updateMatrixWorld(!0),w.projectionMatrix.copy(J.projectionMatrix),w.projectionMatrixInverse.copy(J.projectionMatrixInverse),w.isPerspectiveCamera&&(w.fov=Rl*2*Math.atan(1/w.projectionMatrix.elements[5]),w.zoom=1)}this.getCamera=function(){return ct},this.getFoveation=function(){if(!(S===null&&E===null))return p},this.setFoveation=function(w){p=w,S!==null&&(S.fixedFoveation=w),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=w)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(ct)},this.getCameraTexture=function(w){return M[w]};let xt=null;function Vt(w,J){if(v=J.getViewerPose(m||d),T=J,v!==null){const St=v.views;E!==null&&(e.setRenderTargetFramebuffer(L,E.framebuffer),e.setRenderTarget(L));let yt=!1;St.length!==ct.cameras.length&&(ct.cameras.length=0,yt=!0);for(let Mt=0;Mt<St.length;Mt++){const Ht=St[Mt];let xe=null;if(E!==null)xe=E.getViewport(Ht);else{const Je=g.getViewSubImage(S,Ht);xe=Je.viewport,Mt===0&&(e.setRenderTargetTextures(L,Je.colorTexture,Je.depthStencilTexture),e.setRenderTarget(L))}let ge=$[Mt];ge===void 0&&(ge=new Xi,ge.layers.enable(Mt),ge.viewport=new ln,$[Mt]=ge),ge.matrix.fromArray(Ht.transform.matrix),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.projectionMatrix.fromArray(Ht.projectionMatrix),ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(),ge.viewport.set(xe.x,xe.y,xe.width,xe.height),Mt===0&&(ct.matrix.copy(ge.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale)),yt===!0&&ct.cameras.push(ge)}const Et=u.enabledFeatures;if(Et&&Et.includes("depth-sensing")&&u.depthUsage=="gpu-optimized"&&N){g=s.getBinding();const Mt=g.getDepthInformation(St[0]);Mt&&Mt.isValid&&Mt.texture&&y.init(Mt,u.renderState)}if(Et&&Et.includes("camera-access")&&N){e.state.unbindTexture(),g=s.getBinding();for(let Mt=0;Mt<St.length;Mt++){const Ht=St[Mt].camera;if(Ht){let xe=M[Ht];xe||(xe=new ex,M[Ht]=xe);const ge=g.getCameraImage(Ht);xe.sourceTexture=ge}}}}for(let St=0;St<I.length;St++){const yt=O[St],Et=I[St];yt!==null&&Et!==void 0&&Et.update(yt,J,m||d)}xt&&xt(w,J),J.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:J}),T=null}const te=new ox;te.setAnimationLoop(Vt),this.setAnimationLoop=function(w){xt=w},this.dispose=function(){}}}const CC=new un,_x=new ce;_x.set(-1,0,0,0,1,0,0,0,1);function wC(o,e){function i(y,M){y.matrixAutoUpdate===!0&&y.updateMatrix(),M.value.copy(y.matrix)}function s(y,M){M.color.getRGB(y.fogColor.value,nx(o)),M.isFog?(y.fogNear.value=M.near,y.fogFar.value=M.far):M.isFogExp2&&(y.fogDensity.value=M.density)}function u(y,M,D,z,L){M.isNodeMaterial?M.uniformsNeedUpdate=!1:M.isMeshBasicMaterial?f(y,M):M.isMeshLambertMaterial?(f(y,M),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)):M.isMeshToonMaterial?(f(y,M),g(y,M)):M.isMeshPhongMaterial?(f(y,M),v(y,M),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)):M.isMeshStandardMaterial?(f(y,M),S(y,M),M.isMeshPhysicalMaterial&&E(y,M,L)):M.isMeshMatcapMaterial?(f(y,M),T(y,M)):M.isMeshDepthMaterial?f(y,M):M.isMeshDistanceMaterial?(f(y,M),N(y,M)):M.isMeshNormalMaterial?f(y,M):M.isLineBasicMaterial?(d(y,M),M.isLineDashedMaterial&&h(y,M)):M.isPointsMaterial?p(y,M,D,z):M.isSpriteMaterial?m(y,M):M.isShadowMaterial?(y.color.value.copy(M.color),y.opacity.value=M.opacity):M.isShaderMaterial&&(M.uniformsNeedUpdate=!1)}function f(y,M){y.opacity.value=M.opacity,M.color&&y.diffuse.value.copy(M.color),M.emissive&&y.emissive.value.copy(M.emissive).multiplyScalar(M.emissiveIntensity),M.map&&(y.map.value=M.map,i(M.map,y.mapTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,i(M.alphaMap,y.alphaMapTransform)),M.bumpMap&&(y.bumpMap.value=M.bumpMap,i(M.bumpMap,y.bumpMapTransform),y.bumpScale.value=M.bumpScale,M.side===Kn&&(y.bumpScale.value*=-1)),M.normalMap&&(y.normalMap.value=M.normalMap,i(M.normalMap,y.normalMapTransform),y.normalScale.value.copy(M.normalScale),M.side===Kn&&y.normalScale.value.negate()),M.displacementMap&&(y.displacementMap.value=M.displacementMap,i(M.displacementMap,y.displacementMapTransform),y.displacementScale.value=M.displacementScale,y.displacementBias.value=M.displacementBias),M.emissiveMap&&(y.emissiveMap.value=M.emissiveMap,i(M.emissiveMap,y.emissiveMapTransform)),M.specularMap&&(y.specularMap.value=M.specularMap,i(M.specularMap,y.specularMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest);const D=e.get(M),z=D.envMap,L=D.envMapRotation;z&&(y.envMap.value=z,y.envMapRotation.value.setFromMatrix4(CC.makeRotationFromEuler(L)).transpose(),z.isCubeTexture&&z.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(_x),y.reflectivity.value=M.reflectivity,y.ior.value=M.ior,y.refractionRatio.value=M.refractionRatio),M.lightMap&&(y.lightMap.value=M.lightMap,y.lightMapIntensity.value=M.lightMapIntensity,i(M.lightMap,y.lightMapTransform)),M.aoMap&&(y.aoMap.value=M.aoMap,y.aoMapIntensity.value=M.aoMapIntensity,i(M.aoMap,y.aoMapTransform))}function d(y,M){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,M.map&&(y.map.value=M.map,i(M.map,y.mapTransform))}function h(y,M){y.dashSize.value=M.dashSize,y.totalSize.value=M.dashSize+M.gapSize,y.scale.value=M.scale}function p(y,M,D,z){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,y.size.value=M.size*D,y.scale.value=z*.5,M.map&&(y.map.value=M.map,i(M.map,y.uvTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,i(M.alphaMap,y.alphaMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest)}function m(y,M){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,y.rotation.value=M.rotation,M.map&&(y.map.value=M.map,i(M.map,y.mapTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,i(M.alphaMap,y.alphaMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest)}function v(y,M){y.specular.value.copy(M.specular),y.shininess.value=Math.max(M.shininess,1e-4)}function g(y,M){M.gradientMap&&(y.gradientMap.value=M.gradientMap)}function S(y,M){y.metalness.value=M.metalness,M.metalnessMap&&(y.metalnessMap.value=M.metalnessMap,i(M.metalnessMap,y.metalnessMapTransform)),y.roughness.value=M.roughness,M.roughnessMap&&(y.roughnessMap.value=M.roughnessMap,i(M.roughnessMap,y.roughnessMapTransform)),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)}function E(y,M,D){y.ior.value=M.ior,M.diffuseRoughness>0&&(y.diffuseRoughness.value=M.diffuseRoughness,M.diffuseRoughnessMap&&(y.diffuseRoughnessMap.value=M.diffuseRoughnessMap,i(M.diffuseRoughnessMap,y.diffuseRoughnessMapTransform))),M.sheen>0&&(y.sheenColor.value.copy(M.sheenColor).multiplyScalar(M.sheen),y.sheenRoughness.value=M.sheenRoughness,M.sheenColorMap&&(y.sheenColorMap.value=M.sheenColorMap,i(M.sheenColorMap,y.sheenColorMapTransform)),M.sheenRoughnessMap&&(y.sheenRoughnessMap.value=M.sheenRoughnessMap,i(M.sheenRoughnessMap,y.sheenRoughnessMapTransform))),M.clearcoat>0&&(y.clearcoat.value=M.clearcoat,y.clearcoatRoughness.value=M.clearcoatRoughness,M.clearcoatMap&&(y.clearcoatMap.value=M.clearcoatMap,i(M.clearcoatMap,y.clearcoatMapTransform)),M.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=M.clearcoatRoughnessMap,i(M.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),M.clearcoatNormalMap&&(y.clearcoatNormalMap.value=M.clearcoatNormalMap,i(M.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(M.clearcoatNormalScale),M.side===Kn&&y.clearcoatNormalScale.value.negate())),M.dispersion>0&&(y.dispersion.value=M.dispersion),M.retroreflectivity>0&&(y.retroreflectivity.value=M.retroreflectivity),M.iridescence>0&&(y.iridescence.value=M.iridescence,y.iridescenceIOR.value=M.iridescenceIOR,y.iridescenceThicknessMinimum.value=M.iridescenceThicknessMinimum,y.iridescenceThicknessMaximum.value=M.iridescenceThicknessMaximum,M.iridescenceMap&&(y.iridescenceMap.value=M.iridescenceMap,i(M.iridescenceMap,y.iridescenceMapTransform)),M.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=M.iridescenceThicknessMap,i(M.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),M.transmission>0&&(y.transmission.value=M.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),M.transmissionMap&&(y.transmissionMap.value=M.transmissionMap,i(M.transmissionMap,y.transmissionMapTransform)),y.thickness.value=M.thickness,M.thicknessMap&&(y.thicknessMap.value=M.thicknessMap,i(M.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=M.attenuationDistance,y.attenuationColor.value.copy(M.attenuationColor)),M.anisotropy>0&&(y.anisotropyVector.value.set(M.anisotropy*Math.cos(M.anisotropyRotation),M.anisotropy*Math.sin(M.anisotropyRotation)),M.anisotropyMap&&(y.anisotropyMap.value=M.anisotropyMap,i(M.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=M.specularIntensity,y.specularColor.value.copy(M.specularColor),M.specularColorMap&&(y.specularColorMap.value=M.specularColorMap,i(M.specularColorMap,y.specularColorMapTransform)),M.specularIntensityMap&&(y.specularIntensityMap.value=M.specularIntensityMap,i(M.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,M){M.matcap&&(y.matcap.value=M.matcap)}function N(y,M){const D=e.get(M).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:u}}function DC(o,e,i,s){let u={},f={};function d(D,z){const L=z.program;s.uniformBlockBinding(D,L,u[D.id])}function h(D,z){let L=u[D.id];L===void 0&&(T(D),L=p(D),u[D.id]=L,D.addEventListener("dispose",y));const I=z.program;s.updateUBOMapping(D,I);const O=e.render.frame;f[D.id]!==O&&(m(D),f[D.id]=O)}function p(D){const z=o.createBuffer(),L=D.__size,I=D.usage;return o.bindBuffer(o.UNIFORM_BUFFER,z),o.bufferData(o.UNIFORM_BUFFER,L,I),o.bindBuffer(o.UNIFORM_BUFFER,null),z}function m(D){const z=u[D.id],L=D.uniforms,I=D.__cache;o.bindBuffer(o.UNIFORM_BUFFER,z);for(let O=0,x=L.length;O<x;O++){const C=L[O];if(Array.isArray(C))for(let W=0,F=C.length;W<F;W++)v(C[W],O,W,I);else v(C,O,0,I)}o.bindBuffer(o.UNIFORM_BUFFER,null)}function v(D,z,L,I){if(S(D,z,L,I)===!0){const O=D.__offset,x=D.value;if(Array.isArray(x)){let C=0;for(let W=0;W<x.length;W++){const F=x[W],H=N(F,!0);g(F,D.__data,C),C+=H.storage/Float32Array.BYTES_PER_ELEMENT}}else g(x,D.__data,0);o.bufferSubData(o.UNIFORM_BUFFER,O,D.__data)}}function g(D,z,L){typeof D=="number"||typeof D=="boolean"?z[L]=D:D.isMatrix3?(z[L]=D.elements[0],z[L+1]=D.elements[1],z[L+2]=D.elements[2],z[L+3]=0,z[L+4]=D.elements[3],z[L+5]=D.elements[4],z[L+6]=D.elements[5],z[L+7]=0,z[L+8]=D.elements[6],z[L+9]=D.elements[7],z[L+10]=D.elements[8],z[L+11]=0):ArrayBuffer.isView(D)?z.set(D.subarray(0,z.length-L),L):D.toArray(z,L)}function S(D,z,L,I){const O=D.value,x=z+"_"+L;if(Array.isArray(O)){I[x]===void 0&&(I[x]=[]);const C=I[x];let W=!1;for(let F=0;F<O.length;F++)E(O[F],C,F)===!0&&(W=!0);return W}return E(O,I,x)}function E(D,z,L){if(z[L]===void 0)return typeof D=="number"||typeof D=="boolean"?z[L]=D:ArrayBuffer.isView(D)?z[L]=D.slice():z[L]=D.clone(),!0;{const I=z[L];if(typeof D=="number"||typeof D=="boolean"){if(I!==D)return z[L]=D,!0}else{if(ArrayBuffer.isView(D))return!0;if(I.equals(D)===!1)return I.copy(D),!0}}return!1}function T(D){const z=D.uniforms;let L=0;const I=16;for(let x=0,C=z.length;x<C;x++){const W=Array.isArray(z[x])?z[x]:[z[x]];for(let F=0,H=W.length;F<H;F++){const $=W[F],ct=Array.isArray($.value)?$.value:[$.value],X=Array.isArray(z[x])||Array.isArray($.value);let it=L;for(let k=0,ut=ct.length;k<ut;k++){const tt=ct[k],ft=N(tt,X),xt=L%I,Vt=xt%ft.boundary,te=xt+Vt;L+=Vt,te!==0&&I-te<ft.storage&&(L+=I-te),k===0&&(it=L),L+=ft.storage}const q=$.type==="int"?Int32Array:$.type==="uint"?Uint32Array:Float32Array;$.__data=new q((L-it)/Float32Array.BYTES_PER_ELEMENT),$.__offset=it}}const O=L%I;return O>0&&(L+=I-O),D.__size=L,D.__cache={},this}function N(D,z){const L={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(L.boundary=4,L.storage=4):D.isVector2?(L.boundary=8,L.storage=8):D.isVector3||D.isColor?(L.boundary=16,L.storage=12):D.isVector4?(L.boundary=16,L.storage=16):D.isMatrix3?(L.boundary=16,L.storage=48):D.isMatrix4?(L.boundary=16,L.storage=64):D.isTexture?oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(D)?(L.boundary=16,L.storage=D.byteLength):oe("WebGLRenderer: Unsupported uniform value type.",D),z===!0&&(L.boundary=16,L.storage=Math.ceil(L.storage/16)*16),L}function y(D){const z=D.target;z.removeEventListener("dispose",y),o.deleteBuffer(u[z.id]),delete u[z.id],delete f[z.id]}function M(){for(const D in u)o.deleteBuffer(u[D]);u={},f={}}return{bind:d,update:h,dispose:M}}const NC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let oa=null;function UC(){return oa===null&&(oa=new bT(NC,16,16,Jr,ri),oa.name="DFG_LUT",oa.minFilter=ai,oa.magFilter=ai,oa.wrapS=Oa,oa.wrapT=Oa,oa.generateMipmaps=!1,oa.needsUpdate=!0),oa}class LC{constructor(e={}){const{canvas:i=HE(),context:s=null,depth:u=!0,stencil:f=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:S=!1,outputBufferType:E=Ni}=e;this.isWebGLRenderer=!0;let T;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=s.getContextAttributes().alpha}else T=d;const N=E,y=new Set([tm,$p,jp]),M=new Set([Ni,da,bl,oo,Qp,Jp]),D=new Uint32Array(4),z=new Int32Array(4),L={textures:[],min:[],max:[],resolution:[]};let I=null,O=null;const x=[],C=[];let W=null;this.domElement=i,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const F=this;let H=!1,$=null,ct=null,X=null,it=null;this._outputColorSpace=vi;let q=0,k=0,ut=null,tt=-1,ft=null;const xt=new ln,Vt=new ln;let te=null;const w=new Ce(0);let J=0,St=i.width,yt=i.height,Et=1,Ft=null,ee=null;const Mt=new ln(0,0,St,yt),Ht=new ln(0,0,St,yt);let xe=!1;const ge=new Fc,Je=new am;let Ie=!1,Ne=!1;const ne=new un,cn=new ot,je=new ln,fn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Cn=!1;function wn(){return ut===null?Et:1}let Y=s;function Fn(R,G){return i.getContext(R,G)}let Fe,ke,Pt,We,jt,re,U,b,et,bt,vt,wt,Lt,dt,mt,Dt,B,pt,ht,Nt,At,Ut,Kt;try{const R={alpha:!0,depth:u,stencil:f,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${kp}`),i.addEventListener("webglcontextlost",kt,!1),i.addEventListener("webglcontextrestored",fe,!1),i.addEventListener("webglcontextcreationerror",Bt,!1),Y===null){const G="webgl2";if(Y=Fn(G,R),Y===null)throw Fn(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}$t()}catch(R){throw i.removeEventListener("webglcontextlost",kt,!1),i.removeEventListener("webglcontextrestored",fe,!1),i.removeEventListener("webglcontextcreationerror",Bt,!1),Pe("WebGLRenderer: "+R.message),R}function $t(){Fe=new I1(Y),Fe.init(),At=new EC(Y,Fe),ke=new b1(Y,Fe,e,At),Pt=new MC(Y,Fe),ke.reversedDepthBuffer&&S&&Pt.buffers.depth.setReversed(!0),ct=Y.createFramebuffer(),X=Y.createFramebuffer(),it=Y.createFramebuffer(),We=new F1(Y),jt=new oC,re=new yC(Y,Fe,Pt,jt,ke,At,We),U=new P1(F),b=new GT(Y),Ut=new E1(Y,b),et=new z1(Y,b,We,Ut),bt=new G1(Y,et,b,Ut,We),pt=new H1(Y,ke,re),mt=new A1(jt),vt=new sC(F,U,Fe,ke,Ut,mt),wt=new wC(F,jt),Lt=new uC,dt=new mC(Fe),B=new y1(F,U,Pt,bt,T,p),Dt=new xC(F,bt,ke),Kt=new DC(Y,We,ke,Pt),ht=new T1(Y,Fe,We),Nt=new B1(Y,Fe,We),We.programs=vt.programs,F.capabilities=ke,F.extensions=Fe,F.properties=jt,F.renderLists=Lt,F.shadowMap=Dt,F.state=Pt,F.info=We}N!==Ni&&(W=new X1(N,i.width,i.height,h,u,f));const Tt=new RC(F,Y);this.xr=Tt,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const R=Fe.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Fe.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Et},this.setPixelRatio=function(R){R!==void 0&&(Et=R,this.setSize(St,yt,!1))},this.getSize=function(R){return R.set(St,yt)},this.setSize=function(R,G,lt=!0){if(Tt.isPresenting){oe("WebGLRenderer: Can't change size while VR device is presenting.");return}St=R,yt=G,i.width=Math.floor(R*Et),i.height=Math.floor(G*Et),lt===!0&&(i.style.width=R+"px",i.style.height=G+"px"),W!==null&&W.setSize(i.width,i.height),this.setViewport(0,0,R,G)},this.getDrawingBufferSize=function(R){return R.set(St*Et,yt*Et).floor()},this.setDrawingBufferSize=function(R,G,lt){St=R,yt=G,Et=lt,i.width=Math.floor(R*lt),i.height=Math.floor(G*lt),this.setViewport(0,0,R,G)},this.setEffects=function(R){if(N===Ni){Pe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let G=0;G<R.length;G++)if(R[G].isOutputPass===!0){oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}W.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(xt)},this.getViewport=function(R){return R.copy(Mt)},this.setViewport=function(R,G,lt,nt){R.isVector4?Mt.set(R.x,R.y,R.z,R.w):Mt.set(R,G,lt,nt),Pt.viewport(xt.copy(Mt).multiplyScalar(wn()).round())},this.getScissor=function(R){return R.copy(Ht)},this.setScissor=function(R,G,lt,nt){R.isVector4?Ht.set(R.x,R.y,R.z,R.w):Ht.set(R,G,lt,nt),Pt.scissor(Vt.copy(Ht).multiplyScalar(wn()).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(R){Pt.setScissorTest(xe=R)},this.setOpaqueSort=function(R){Ft=R},this.setTransparentSort=function(R){ee=R},this.getClearColor=function(R){return R.copy(B.getClearColor())},this.setClearColor=function(){B.setClearColor(...arguments)},this.getClearAlpha=function(){return B.getClearAlpha()},this.setClearAlpha=function(){B.setClearAlpha(...arguments)},this.clear=function(R=!0,G=!0,lt=!0){let nt=0;if(R){let at=!1;if(ut!==null){const Rt=ut.texture.format;at=y.has(Rt)}if(at){const Rt=ut.texture.type,Xt=M.has(Rt),Ct=B.getClearColor(),It=B.getClearAlpha(),qt=Ct.r,ie=Ct.g,de=Ct.b;Xt?(D[0]=qt,D[1]=ie,D[2]=de,D[3]=It,Y.clearBufferuiv(Y.COLOR,0,D)):(z[0]=qt,z[1]=ie,z[2]=de,z[3]=It,Y.clearBufferiv(Y.COLOR,0,z))}else nt|=Y.COLOR_BUFFER_BIT}G&&(nt|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),lt&&(nt|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),nt!==0&&Y.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),$=R},this.dispose=function(){i.removeEventListener("webglcontextlost",kt,!1),i.removeEventListener("webglcontextrestored",fe,!1),i.removeEventListener("webglcontextcreationerror",Bt,!1),B.dispose(),Lt.dispose(),dt.dispose(),re.dispose(),jt.dispose(),U.dispose(),bt.dispose(),et.dispose(),Ut.dispose(),Kt.dispose(),vt.dispose(),Tt.dispose(),Tt.removeEventListener("sessionstart",za),Tt.removeEventListener("sessionend",_o),ha.stop()};function kt(R){R.preventDefault(),Uv("WebGLRenderer: Context Lost."),H=!0}function fe(){Uv("WebGLRenderer: Context Restored."),H=!1;const R=We.autoReset,G=Dt.enabled,lt=Dt.autoUpdate,nt=Dt.needsUpdate,at=Dt.type;$t(),We.autoReset=R,Dt.enabled=G,Dt.autoUpdate=lt,Dt.needsUpdate=nt,Dt.type=at}function Bt(R){Pe("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ue(R){const G=R.target;G.removeEventListener("dispose",Ue),tn(G)}function tn(R){oi(R),jt.remove(R)}function oi(R){const G=jt.get(R).programs;G!==void 0&&(G.forEach(function(lt){vt.releaseProgram(lt)}),R.isShaderMaterial&&vt.releaseShaderCache(R))}this.renderBufferDirect=function(R,G,lt,nt,at,Rt){G===null&&(G=fn);const Xt=at.isMesh&&at.matrixWorld.determinantAffine()<0,Ct=Ll(R,G,lt,nt,at);Pt.setMaterial(nt,Xt);let It=lt.index,qt=1;if(nt.wireframe===!0){if(It=et.getWireframeAttribute(lt),It===void 0)return;qt=2}const ie=lt.drawRange,de=lt.attributes.position;let Ot=ie.start*qt,ve=(ie.start+ie.count)*qt;Rt!==null&&(Ot=Math.max(Ot,Rt.start*qt),ve=Math.min(ve,(Rt.start+Rt.count)*qt)),It!==null?(Ot=Math.max(Ot,0),ve=Math.min(ve,It.count)):de!=null&&(Ot=Math.max(Ot,0),ve=Math.min(ve,de.count));const en=ve-Ot;if(en<0||en===1/0)return;Ut.setup(at,nt,Ct,lt,It);let He,Re=ht;if(It!==null&&(He=b.get(It),Re=Nt,Re.setIndex(He)),at.isMesh)nt.wireframe===!0?(Pt.setLineWidth(nt.wireframeLinewidth*wn()),Re.setMode(Y.LINES)):Re.setMode(Y.TRIANGLES);else if(at.isLine){let nn=nt.linewidth;nn===void 0&&(nn=1),Pt.setLineWidth(nn*wn()),at.isLineSegments?Re.setMode(Y.LINES):at.isLineLoop?Re.setMode(Y.LINE_LOOP):Re.setMode(Y.LINE_STRIP)}else at.isPoints?Re.setMode(Y.POINTS):at.isSprite&&Re.setMode(Y.TRIANGLES);if(at.isBatchedMesh)if(Fe.get("WEBGL_multi_draw"))Re.renderMultiDraw(at._multiDrawStarts,at._multiDrawCounts,at._multiDrawCount);else{const nn=at._multiDrawStarts,Yt=at._multiDrawCounts,yn=at._multiDrawCount,we=It?b.get(It).bytesPerElement:1,pa=jt.get(nt).currentProgram.getUniforms();for(let se=0;se<yn;se++)pa.setValue(Y,"_gl_DrawID",se),Re.render(nn[se]/we,Yt[se])}else if(at.isInstancedMesh)Re.renderInstances(Ot,en,at.count);else if(lt.isInstancedBufferGeometry){const nn=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,Yt=Math.min(lt.instanceCount,nn);Re.renderInstances(Ot,en,Yt)}else Re.render(Ot,en)};function Mr(R,G,lt,nt){$!==null&&R.isNodeMaterial&&$.setObject(nt,R),Ie===!0&&mt.setState(R,lt,!1),R.transparent===!0&&R.side===La&&R.forceSinglePass===!1?(R.side=Kn,R.needsUpdate=!0,Fa(R,G,nt),R.side=Qr,R.needsUpdate=!0,Fa(R,G,nt),R.side=La):Fa(R,G,nt)}this.compile=function(R,G,lt=null){lt===null&&(lt=R),$!==null&&$.renderStart(R,G,lt),O=dt.get(lt),O.init(G),C.push(O),lt.traverseVisible(function(at){at.isLight&&at.layers.test(G.layers)&&(O.pushLight(at),at.castShadow&&O.pushShadow(at))}),R!==lt&&R.traverseVisible(function(at){at.isLight&&at.layers.test(G.layers)&&(O.pushLight(at),at.castShadow&&O.pushShadow(at))}),O.setupLights(),$!==null&&$.updateLights(O.state.lightsArray),Ne=this.localClippingEnabled,Ie=mt.init(this.clippingPlanes,Ne),Ie===!0&&mt.setGlobalState(this.clippingPlanes,G),$!==null&&Dt.render(O.state.shadowsArray,lt,G);const nt=new Set;return R.traverse(function(at){if(!(at.isMesh||at.isPoints||at.isLine||at.isSprite))return;const Rt=at.material;if(Rt)if(Array.isArray(Rt))for(let Xt=0;Xt<Rt.length;Xt++){const Ct=Rt[Xt];Mr(Ct,lt,G,at),nt.add(Ct)}else Mr(Rt,lt,G,at),nt.add(Rt)}),O=C.pop(),$!==null&&$.renderEnd(),nt},this.compileAsync=function(R,G,lt=null){const nt=this.compile(R,G,lt);return new Promise(at=>{function Rt(){if(nt.forEach(function(Xt){const It=jt.get(Xt).currentProgram;(It===void 0||It.isReady())&&nt.delete(Xt)}),nt.size===0){at(R);return}setTimeout(Rt,10)}Fe.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let Ui=null;function ts(R){Ui&&Ui(R)}function za(){ha.stop()}function _o(){ha.start()}const ha=new ox;ha.setAnimationLoop(ts),typeof self<"u"&&ha.setContext(self),this.setAnimationLoop=function(R){Ui=R,Tt.setAnimationLoop(R),R===null?ha.stop():ha.start()},Tt.addEventListener("sessionstart",za),Tt.addEventListener("sessionend",_o),this.render=function(R,G){if(G!==void 0&&G.isCamera!==!0){Pe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;$!==null&&$.renderStart(R,G);const lt=Tt.enabled===!0&&Tt.isPresenting===!0,nt=W!==null&&(ut===null||lt)&&W.begin(F,ut);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Tt.enabled===!0&&Tt.isPresenting===!0&&(W===null||W.isCompositing()===!1)&&(Tt.cameraAutoUpdate===!0&&Tt.updateCamera(G),G=Tt.getCamera()),R.isScene===!0&&R.onBeforeRender(F,R,G,ut),O=dt.get(R,C.length),O.init(G),O.state.textureUnits=re.getTextureUnits(),C.push(O),ne.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),G.isArrayCamera?Je.setFromArrayCamera(G):ge.setFromProjectionMatrix(ne,Wi,G.reversedDepth),Ne=this.localClippingEnabled,Ie=mt.init(this.clippingPlanes,Ne),I=Lt.get(R,x.length),I.init(),x.push(I),this.info.render.frame++,Tt.enabled===!0&&Tt.isPresenting===!0){const Xt=F.xr.getDepthSensingMesh();Xt!==null&&es(Xt,G,-1/0,F.sortObjects)}es(R,G,0,F.sortObjects),I.finish(),$!==null&&$.updateLights(O.state.lightsArray),F.sortObjects===!0&&I.sort(Ft,ee),Cn=Tt.enabled===!1||Tt.isPresenting===!1||Tt.hasDepthSensing()===!1,Cn&&B.addToRenderList(I,R),this.info.autoReset===!0&&this.info.reset(),Ie===!0&&mt.beginShadows();const at=O.state.shadowsArray;if(Dt.render(at,R,G),Ie===!0&&mt.endShadows(),(nt&&W.hasRenderPass())===!1){const Xt=I.opaque,Ct=I.transmissive;if(O.setupLights(),G.isArrayCamera){const It=G.cameras;if(Ct.length>0)for(let qt=0,ie=It.length;qt<ie;qt++){const de=It[qt];Ba(Xt,Ct,R,de)}Cn&&B.render(R);for(let qt=0,ie=It.length;qt<ie;qt++){const de=It[qt];ns(I,R,de,de.viewport)}}else Ct.length>0&&Ba(Xt,Ct,R,G),Cn&&B.render(R),ns(I,R,G)}ut!==null&&k===0&&(re.updateMultisampleRenderTarget(ut),re.updateRenderTargetMipmap(ut)),nt&&W.end(F),R.isScene===!0&&R.onAfterRender(F,R,G),Ut.resetDefaultState(),tt=-1,ft=null,C.pop(),C.length>0?(O=C[C.length-1],re.setTextureUnits(O.state.textureUnits),Ie===!0&&mt.setGlobalState(F.clippingPlanes,O.state.camera)):O=null,x.pop(),x.length>0?I=x[x.length-1]:I=null,$!==null&&$.renderEnd()};function es(R,G,lt,nt){if(R.visible===!1)return;if(R.layers.test(G.layers)){if(R.isGroup)lt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(G);else if(R.isLight)O.pushLight(R),R.castShadow&&O.pushShadow(R);else if(R.isSprite){const Xt=G.isArrayCamera?Je:ge;if(!R.frustumCulled||R.intersectsFrustum(Xt)){nt&&je.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ne);const Ct=bt.update(R),It=R.material;It.visible&&I.push(R,Ct,It,lt,je.z,null,G)}}else if(R.isMesh||R.isLine||R.isPoints){const Xt=G.isArrayCamera?Je:ge;if(!R.frustumCulled||R.intersectsFrustum(Xt)){const Ct=bt.update(R),It=R.material;if(nt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),je.copy(R.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),je.copy(Ct.boundingSphere.center)),je.applyMatrix4(R.matrixWorld).applyMatrix4(ne)),Array.isArray(It)){const qt=Ct.groups;for(let ie=0,de=qt.length;ie<de;ie++){const Ot=qt[ie],ve=It[Ot.materialIndex];ve&&ve.visible&&I.push(R,Ct,ve,lt,je.z,Ot,G)}}else It.visible&&I.push(R,Ct,It,lt,je.z,null,G)}}}const Rt=R.children;for(let Xt=0,Ct=Rt.length;Xt<Ct;Xt++)es(Rt[Xt],G,lt,nt)}function ns(R,G,lt,nt){const{opaque:at,transmissive:Rt,transparent:Xt}=R;O.setupLightsView(lt),Ie===!0&&mt.setGlobalState(F.clippingPlanes,lt),nt&&Pt.viewport(xt.copy(nt)),at.length>0&&is(at,G,lt),Rt.length>0&&is(Rt,G,lt),Xt.length>0&&is(Xt,G,lt),Pt.buffers.depth.setTest(!0),Pt.buffers.depth.setMask(!0),Pt.buffers.color.setMask(!0),Pt.setPolygonOffset(!1)}function Ba(R,G,lt,nt){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[nt.id]===void 0){const Ot=Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float");O.state.transmissionRenderTarget[nt.id]=new si(1,1,{generateMipmaps:!0,type:Ot?ri:Ni,minFilter:Pa,samples:Math.max(4,ke.samples),stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:be.workingColorSpace})}const Rt=O.state.transmissionRenderTarget[nt.id],Xt=nt.viewport||xt;Rt.setSize(Xt.z*F.transmissionResolutionScale,Xt.w*F.transmissionResolutionScale);const Ct=F.getRenderTarget(),It=F.getActiveCubeFace(),qt=F.getActiveMipmapLevel();F.setRenderTarget(Rt),F.getClearColor(w),J=F.getClearAlpha(),J<1&&F.setClearColor(16777215,.5),F.clear(),Cn&&B.render(lt);const ie=F.toneMapping;F.toneMapping=qi;const de=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),O.setupLightsView(nt),Ie===!0&&mt.setGlobalState(F.clippingPlanes,nt),is(R,lt,nt),re.updateMultisampleRenderTarget(Rt),re.updateRenderTargetMipmap(Rt),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let ve=0,en=G.length;ve<en;ve++){const He=G[ve],{object:Re,geometry:nn,material:Yt,group:yn}=He;if(Yt.side===La&&Re.layers.test(nt.layers)){const we=Yt.side;Yt.side=Kn,Yt.needsUpdate=!0,vo(Re,lt,nt,nn,Yt,yn),Yt.side=we,Yt.needsUpdate=!0,Ot=!0}}Ot===!0&&(re.updateMultisampleRenderTarget(Rt),re.updateRenderTargetMipmap(Rt))}F.setRenderTarget(Ct,It,qt),F.setClearColor(w,J),de!==void 0&&(nt.viewport=de),F.toneMapping=ie}function is(R,G,lt){const nt=G.isScene===!0?G.overrideMaterial:null;for(let at=0,Rt=R.length;at<Rt;at++){const Xt=R[at],{object:Ct,geometry:It,group:qt}=Xt;let ie=Xt.material;ie.allowOverride===!0&&nt!==null&&(ie=nt),Ct.layers.test(lt.layers)&&vo(Ct,G,lt,It,ie,qt)}}function vo(R,G,lt,nt,at,Rt){$!==null&&at.isNodeMaterial&&$.setObject(R,at),R.onBeforeRender(F,G,lt,nt,at,Rt),R.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),at.onBeforeRender(F,G,lt,nt,R,Rt),at.transparent===!0&&at.side===La&&at.forceSinglePass===!1?(at.side=Kn,at.needsUpdate=!0,F.renderBufferDirect(lt,G,nt,at,R,Rt),at.side=Qr,at.needsUpdate=!0,F.renderBufferDirect(lt,G,nt,at,R,Rt),at.side=La):F.renderBufferDirect(lt,G,nt,at,R,Rt),R.onAfterRender(F,G,lt,nt,at,Rt)}function So(R){let G=0;for(const lt of R)lt.texture!==null&&G++;return G}function Fa(R,G,lt){G.isScene!==!0&&(G=fn);const nt=jt.get(R),at=O.state.lights,Rt=O.state.shadowsArray,Xt=at.state.version,Ct=vt.getParameters(R,at.state,Rt,G,lt,O.state.lightProbeGridArray),It=vt.getProgramCacheKey(Ct);let qt=nt.programs;nt.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?G.environment:null,nt.fog=G.fog;const ie=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;nt.envMap=U.get(R.envMap||nt.environment,ie),nt.envMapRotation=nt.environment!==null&&R.envMap===null?G.environmentRotation:R.envMapRotation,qt===void 0&&(R.addEventListener("dispose",Ue),qt=new Map,nt.programs=qt,nt.programVariants=new Map);let de=qt.get(It);if(de!==void 0){if(nt.currentProgram===de&&nt.lightsStateVersion===Xt)return Mo(R,Ct),de}else Ct.uniforms=vt.getUniforms(R),$!==null&&R.isNodeMaterial&&$.build(R,lt,Ct),R.onBeforeCompile(Ct,F),de=vt.acquireProgram(Ct,It),qt.set(It,de),nt.uniforms=Ct.uniforms;const Ot=nt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ot.clippingPlanes=mt.uniform),Mo(R,Ct),nt.needsLights=vn(R),nt.lightsStateVersion=Xt,nt.needsLights&&(Ot.ambientLightColor.value=at.state.ambient,Ot.lightProbe.value=at.state.probe,Ot.sunLights.value=at.state.sun,Ot.sunLightShadows.value=at.state.sunShadow,Ot.directionalLights.value=at.state.directional,Ot.directionalLightShadows.value=at.state.directionalShadow,Ot.spotLights.value=at.state.spot,Ot.spotLightShadows.value=at.state.spotShadow,Ot.rectAreaLights.value=at.state.rectArea,Ot.ltc_1.value=at.state.rectAreaLTC1,Ot.ltc_2.value=at.state.rectAreaLTC2,Ot.pointLights.value=at.state.point,Ot.pointLightShadows.value=at.state.pointShadow,Ot.hemisphereLights.value=at.state.hemi,Ot.sunShadowMatrix.value=at.state.sunShadowMatrix,Ot.sunShadowCascade.value=at.state.sunShadowCascade,Ot.directionalShadowMatrix.value=at.state.directionalShadowMatrix,Ot.spotLightMatrix.value=at.state.spotLightMatrix,Ot.spotLightMap.value=at.state.spotLightMap,Ot.pointShadowMatrix.value=at.state.pointShadowMatrix),nt.numLightProbeGrids=So(O.state.lightProbeGridArray),nt.currentProgram=de,nt.uniformsList=null,de}function xo(R,G,lt,nt,at){const Rt=jt.get(R),Xt=Rt.currentProgram.id+","+nt+","+at;let Ct=Rt.programVariants.get(Xt);return Ct===void 0?(Ct=Fa(R,G,lt),Rt.programVariants.set(Xt,Ct)):(Rt.currentProgram=Ct,Rt.uniformsList=null,Rt.outputColorSpace=nt,Rt.toneMapping=at),Ct}function as(R){if(R.uniformsList===null){const G=R.currentProgram.getUniforms();R.uniformsList=Nc.seqWithValue(G.seq,R.uniforms)}return R.uniformsList}function Mo(R,G){const lt=jt.get(R);lt.outputColorSpace=G.outputColorSpace,lt.batching=G.batching,lt.batchingColor=G.batchingColor,lt.instancing=G.instancing,lt.instancingColor=G.instancingColor,lt.instancingMorph=G.instancingMorph,lt.skinning=G.skinning,lt.morphTargets=G.morphTargets,lt.morphNormals=G.morphNormals,lt.morphColors=G.morphColors,lt.morphTargetsCount=G.morphTargetsCount,lt.numClippingPlanes=G.numClippingPlanes,lt.numIntersection=G.numClipIntersection,lt.vertexAlphas=G.vertexAlphas,lt.vertexTangents=G.vertexTangents,lt.toneMapping=G.toneMapping}function Ll(R,G,lt,nt,at){G.isScene!==!0&&(G=fn),re.resetTextureUnits();const Rt=G.fog,Xt=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial?G.environment:null,Ct=ut===null?F.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:be.workingColorSpace,It=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial&&!nt.envMap||nt.isMeshPhongMaterial&&!nt.envMap,qt=U.get(nt.envMap||Xt,It),ie=nt.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,de=!!lt.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),Ot=!!lt.morphAttributes.position,ve=!!lt.morphAttributes.normal,en=!!lt.morphAttributes.color;let He=qi;nt.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(He=F.toneMapping);const Re=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,nn=Re!==void 0?Re.length:0,Yt=jt.get(nt),yn=O.state.lights;if(Ie===!0&&(Ne===!0||R!==ft)){const Qe=R===ft&&nt.id===tt;mt.setState(nt,R,Qe)}let we=!1,pa=!1;nt.version===Yt.__version?Yt.needsLights&&Yt.lightsStateVersion!==yn.state.version||at.isBatchedMesh&&Yt.batching===!1||!at.isBatchedMesh&&Yt.batching===!0||at.isBatchedMesh&&Yt.batchingColor===!0&&at._colorsTexture===null||at.isBatchedMesh&&Yt.batchingColor===!1&&at._colorsTexture!==null||at.isInstancedMesh&&Yt.instancing===!1||!at.isInstancedMesh&&Yt.instancing===!0||at.isSkinnedMesh&&Yt.skinning===!1||!at.isSkinnedMesh&&Yt.skinning===!0||at.isInstancedMesh&&Yt.instancingColor===!0&&at.instanceColor===null||at.isInstancedMesh&&Yt.instancingColor===!1&&at.instanceColor!==null||at.isInstancedMesh&&Yt.instancingMorph===!0&&at.morphTexture===null||at.isInstancedMesh&&Yt.instancingMorph===!1&&at.morphTexture!==null||Yt.envMap!==qt||nt.fog===!0&&Yt.fog!==Rt||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==mt.numPlanes||Yt.numIntersection!==mt.numIntersection)||Yt.vertexAlphas!==ie||Yt.vertexTangents!==de||Yt.morphTargets!==Ot||Yt.morphNormals!==ve||Yt.morphColors!==en||Yt.morphTargetsCount!==nn||Yt.numLightProbeGrids!==So(O.state.lightProbeGridArray)?we=!0:(Yt.outputColorSpace!==Ct||Yt.toneMapping!==He)&&(pa=!0):(we=!0,Yt.__version=nt.version);let se=Yt.currentProgram;(we===!0||pa===!0)&&(se=pa===!0?xo(nt,G,at,Ct,He):Fa(nt,G,at),$&&nt.isNodeMaterial&&$.onUpdateProgram(nt,se,Yt));let yr=!1,li=!1,Si=!1;const he=se.getUniforms(),Le=Yt.uniforms;if(Pt.useProgram(se.program)&&(yr=!0,li=!0,Si=!0),nt.id!==tt&&(tt=nt.id,li=!0),yr||ft!==R){Pt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),he.setValue(Y,"projectionMatrix",R.projectionMatrix),he.setValue(Y,"viewMatrix",R.matrixWorldInverse);const rn=he.map.cameraPosition;rn!==void 0&&rn.setValue(Y,cn.setFromMatrixPosition(R.matrixWorld)),ke.logarithmicDepthBuffer&&he.setValue(Y,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&he.setValue(Y,"isOrthographic",R.isOrthographicCamera===!0),ft!==R&&(ft=R,li=!0,Si=!0)}if(Yt.needsLights&&(yn.state.sunShadowMap.length>0&&he.setValue(Y,"sunShadowMap",yn.state.sunShadowMap,re),yn.state.directionalShadowMap.length>0&&he.setValue(Y,"directionalShadowMap",yn.state.directionalShadowMap,re),yn.state.spotShadowMap.length>0&&he.setValue(Y,"spotShadowMap",yn.state.spotShadowMap,re),yn.state.pointShadowMap.length>0&&he.setValue(Y,"pointShadowMap",yn.state.pointShadowMap,re)),at.isSkinnedMesh){he.setOptional(Y,at,"bindMatrix"),he.setOptional(Y,at,"bindMatrixInverse");const Qe=at.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),he.setValue(Y,"boneTexture",Qe.boneTexture,re))}at.isBatchedMesh&&(he.setOptional(Y,at,"batchingTexture"),he.setValue(Y,"batchingTexture",at._matricesTexture,re),he.setOptional(Y,at,"batchingIdTexture"),he.setValue(Y,"batchingIdTexture",at._indirectTexture,re),he.setOptional(Y,at,"batchingColorTexture"),at._colorsTexture!==null&&he.setValue(Y,"batchingColorTexture",at._colorsTexture,re));const Jn=lt.morphAttributes;if((Jn.position!==void 0||Jn.normal!==void 0||Jn.color!==void 0)&&pt.update(at,lt,se),(li||Yt.receiveShadow!==at.receiveShadow)&&(Yt.receiveShadow=at.receiveShadow,he.setValue(Y,"receiveShadow",at.receiveShadow)),(nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial)&&nt.envMap===null&&G.environment!==null&&(Le.envMapIntensity.value=G.environmentIntensity),Le.dfgLUT!==void 0&&(Le.dfgLUT.value=UC()),li){if(he.setValue(Y,"toneMappingExposure",F.toneMappingExposure),Yt.needsLights&&Li(Le,Si),Rt&&nt.fog===!0&&wt.refreshFogUniforms(Le,Rt),wt.refreshMaterialUniforms(Le,nt,Et,yt,O.state.transmissionRenderTarget[R.id]),Yt.needsLights&&Yt.numLightProbeGrids>0){const Qe=L;let rn=0;for(const xi of O.state.lightProbeGridArray)xi.texture!==null&&(Qe.textures[rn]=xi.texture,Qe.min[rn]=xi.boundingBox.min,Qe.max[rn]=xi.boundingBox.max,Qe.resolution[rn]=xi.resolution,rn++);for(const xi in Qe)Qe[xi].length=rn;Le.probesSH.value=Qe.textures,Le.probesMin.value=Qe.min,Le.probesMax.value=Qe.max,Le.probesResolution.value=Qe.resolution}Nc.upload(Y,as(Yt),Le,re)}if(nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(Nc.upload(Y,as(Yt),Le,re),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&he.setValue(Y,"center",at.center),he.setValue(Y,"modelViewMatrix",at.modelViewMatrix),he.setValue(Y,"normalMatrix",at.normalMatrix),he.setValue(Y,"modelMatrix",at.matrixWorld),nt.uniformsGroups!==void 0){const Qe=nt.uniformsGroups;for(let rn=0,xi=Qe.length;rn<xi;rn++){const Ol=Qe[rn];Kt.update(Ol,se),Kt.bind(Ol,se)}}return se}function Li(R,G){R.ambientLightColor.needsUpdate=G,R.lightProbe.needsUpdate=G,R.sunLights.needsUpdate=G,R.sunLightShadows.needsUpdate=G,R.directionalLights.needsUpdate=G,R.directionalLightShadows.needsUpdate=G,R.pointLights.needsUpdate=G,R.pointLightShadows.needsUpdate=G,R.spotLights.needsUpdate=G,R.spotLightShadows.needsUpdate=G,R.rectAreaLights.needsUpdate=G,R.hemisphereLights.needsUpdate=G}function vn(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return ut},this.setRenderTargetTextures=function(R,G,lt){const nt=jt.get(R);nt.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,nt.__autoAllocateDepthBuffer===!1&&(nt.__useRenderToTexture=!1),jt.get(R.texture).__webglTexture=G,jt.get(R.depthTexture).__webglTexture=nt.__autoAllocateDepthBuffer?void 0:lt,nt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,G){const lt=jt.get(R);lt.__webglFramebuffer=G,lt.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(R,G=0,lt=0){ut=R,q=G,k=lt;let nt=null,at=!1,Rt=!1;if(R){const Ct=jt.get(R);if(Ct.__useDefaultFramebuffer!==void 0){Pt.bindFramebuffer(Y.FRAMEBUFFER,Ct.__webglFramebuffer),xt.copy(R.viewport),Vt.copy(R.scissor),te=R.scissorTest,Pt.viewport(xt),Pt.scissor(Vt),Pt.setScissorTest(te),tt=-1;return}else if(Ct.__webglFramebuffer===void 0)re.setupRenderTarget(R);else if(Ct.__hasExternalTextures)re.rebindTextures(R,jt.get(R.texture).__webglTexture,jt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const ie=R.depthTexture;if(Ct.__boundDepthTexture!==ie){if(ie!==null&&jt.has(ie)&&(R.width!==ie.image.width||R.height!==ie.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");re.setupDepthRenderbuffer(R)}}const It=R.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(Rt=!0);const qt=jt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(qt[G])?nt=qt[G][lt]:nt=qt[G],at=!0):R.samples>0&&re.useMultisampledRTT(R)===!1?nt=jt.get(R).__webglMultisampledFramebuffer:Array.isArray(qt)?nt=qt[lt]:nt=qt,xt.copy(R.viewport),Vt.copy(R.scissor),te=R.scissorTest}else xt.copy(Mt).multiplyScalar(Et).floor(),Vt.copy(Ht).multiplyScalar(Et).floor(),te=xe;if(lt!==0&&(nt=ct),Pt.bindFramebuffer(Y.FRAMEBUFFER,nt)&&Pt.drawBuffers(R,nt),Pt.viewport(xt),Pt.scissor(Vt),Pt.setScissorTest(te),at){const Ct=jt.get(R.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ct.__webglTexture,lt)}else if(Rt){const Ct=G;for(let It=0;It<R.textures.length;It++){const qt=jt.get(R.textures[It]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+It,qt.__webglTexture,lt,Ct)}}else if(R!==null&&lt!==0){const Ct=jt.get(R.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Ct.__webglTexture,lt)}tt=-1};function Dn(R){const G=jt.get(R);return(G.__readFormat!==R.format||G.__readType!==R.type)&&(G.__readFormat=R.format,G.__readType=R.type,G.__formatReadable=ke.textureFormatReadable(R.format),G.__typeReadable=ke.textureTypeReadable(R.type)),G}this.readRenderTargetPixels=function(R,G,lt,nt,at,Rt,Xt,Ct=0){if(!(R&&R.isWebGLRenderTarget)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=jt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Xt!==void 0&&(It=It[Xt],Array.isArray(It)&&(It=It[0])),It){Pt.bindFramebuffer(Y.FRAMEBUFFER,It);try{const qt=R.textures[Ct],ie=qt.format,de=qt.type;R.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Ct);const Ot=Dn(qt);if(Ot.__formatReadable===!1){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ot.__typeReadable===!1){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=R.width-nt&&lt>=0&&lt<=R.height-at&&Y.readPixels(G,lt,nt,at,At.convert(ie),At.convert(de),Rt)}finally{const qt=ut!==null?jt.get(ut).__webglFramebuffer:null;Pt.bindFramebuffer(Y.FRAMEBUFFER,qt)}}},this.readRenderTargetPixelsAsync=async function(R,G,lt,nt,at,Rt,Xt,Ct=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=jt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Xt!==void 0&&(It=It[Xt],Array.isArray(It)&&(It=It[0])),It)if(G>=0&&G<=R.width-nt&&lt>=0&&lt<=R.height-at){Pt.bindFramebuffer(Y.FRAMEBUFFER,It);const qt=R.textures[Ct],ie=qt.format,de=qt.type;R.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Ct);const Ot=Dn(qt);if(Ot.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ot.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ve=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,ve),Y.bufferData(Y.PIXEL_PACK_BUFFER,Rt.byteLength,Y.STREAM_READ),Y.readPixels(G,lt,nt,at,At.convert(ie),At.convert(de),0),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null);const en=ut!==null?jt.get(ut).__webglFramebuffer:null;Pt.bindFramebuffer(Y.FRAMEBUFFER,en);const He=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await GE(Y,He,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,ve),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,Rt),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null),Y.deleteBuffer(ve),Y.deleteSync(He),Rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,G=null,lt=0){const nt=Math.pow(2,-lt),at=Math.floor(R.image.width*nt),Rt=Math.floor(R.image.height*nt),Xt=G!==null?G.x:0,Ct=G!==null?G.y:0;re.setTexture2D(R,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,lt,0,0,Xt,Ct,at,Rt),Pt.unbindTexture()},this.copyTextureToTexture=function(R,G,lt=null,nt=null,at=0,Rt=0){let Xt,Ct,It,qt,ie,de,Ot,ve,en;const He=R.isCompressedTexture?R.mipmaps[Rt]:R.image;if(lt!==null)Xt=lt.max.x-lt.min.x,Ct=lt.max.y-lt.min.y,It=lt.isBox3?lt.max.z-lt.min.z:1,qt=lt.min.x,ie=lt.min.y,de=lt.isBox3?lt.min.z:0;else{const he=Math.pow(2,-at);Xt=Math.floor(He.width*he),Ct=Math.floor(He.height*he),R.isDataArrayTexture?It=He.depth:R.isData3DTexture?It=Math.floor(He.depth*he):It=1,qt=0,ie=0,de=0}nt!==null?(Ot=nt.x,ve=nt.y,en=nt.z):(Ot=0,ve=0,en=0);const Re=At.convert(G.format),nn=At.convert(G.type);let Yt;G.isData3DTexture?(re.setTexture3D(G,0),Yt=Y.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(re.setTexture2DArray(G,0),Yt=Y.TEXTURE_2D_ARRAY):(re.setTexture2D(G,0),Yt=Y.TEXTURE_2D),Pt.activeTexture(Y.TEXTURE0),Pt.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,G.flipY),Pt.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),Pt.pixelStorei(Y.UNPACK_ALIGNMENT,G.unpackAlignment);const yn=Pt.getParameter(Y.UNPACK_ROW_LENGTH),we=Pt.getParameter(Y.UNPACK_IMAGE_HEIGHT),pa=Pt.getParameter(Y.UNPACK_SKIP_PIXELS),se=Pt.getParameter(Y.UNPACK_SKIP_ROWS),yr=Pt.getParameter(Y.UNPACK_SKIP_IMAGES);Pt.pixelStorei(Y.UNPACK_ROW_LENGTH,He.width),Pt.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,He.height),Pt.pixelStorei(Y.UNPACK_SKIP_PIXELS,qt),Pt.pixelStorei(Y.UNPACK_SKIP_ROWS,ie),Pt.pixelStorei(Y.UNPACK_SKIP_IMAGES,de);const li=R.isDataArrayTexture||R.isData3DTexture,Si=G.isDataArrayTexture||G.isData3DTexture;if(R.isDepthTexture){const he=jt.get(R),Le=jt.get(G),Jn=jt.get(he.__renderTarget),Qe=jt.get(Le.__renderTarget);Pt.bindFramebuffer(Y.READ_FRAMEBUFFER,Jn.__webglFramebuffer),Pt.bindFramebuffer(Y.DRAW_FRAMEBUFFER,Qe.__webglFramebuffer);for(let rn=0;rn<It;rn++)li&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,jt.get(R).__webglTexture,at,de+rn),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,jt.get(G).__webglTexture,Rt,en+rn)),Y.blitFramebuffer(qt,ie,qt+Xt,ie+Ct,Ot,ve,Ot+Xt,ve+Ct,Y.DEPTH_BUFFER_BIT,Y.NEAREST);Pt.bindFramebuffer(Y.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(at!==0||R.isRenderTargetTexture||jt.has(R)){const he=jt.get(R),Le=jt.get(G);Pt.bindFramebuffer(Y.READ_FRAMEBUFFER,X),Pt.bindFramebuffer(Y.DRAW_FRAMEBUFFER,it);for(let Jn=0;Jn<It;Jn++)li?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,he.__webglTexture,at,de+Jn):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,he.__webglTexture,at),Si?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Le.__webglTexture,Rt,en+Jn):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Le.__webglTexture,Rt),at!==0?Y.blitFramebuffer(qt,ie,qt+Xt,ie+Ct,Ot,ve,Ot+Xt,ve+Ct,Y.COLOR_BUFFER_BIT,Y.NEAREST):Si?Y.copyTexSubImage3D(Yt,Rt,Ot,ve,en+Jn,qt,ie,Xt,Ct):Y.copyTexSubImage2D(Yt,Rt,Ot,ve,qt,ie,Xt,Ct);Pt.bindFramebuffer(Y.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else Si?R.isDataTexture||R.isData3DTexture?Y.texSubImage3D(Yt,Rt,Ot,ve,en,Xt,Ct,It,Re,nn,He.data):G.isCompressedArrayTexture?Y.compressedTexSubImage3D(Yt,Rt,Ot,ve,en,Xt,Ct,It,Re,He.data):Y.texSubImage3D(Yt,Rt,Ot,ve,en,Xt,Ct,It,Re,nn,He):R.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,Rt,Ot,ve,Xt,Ct,Re,nn,He.data):R.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,Rt,Ot,ve,He.width,He.height,Re,He.data):Y.texSubImage2D(Y.TEXTURE_2D,Rt,Ot,ve,Xt,Ct,Re,nn,He);Pt.pixelStorei(Y.UNPACK_ROW_LENGTH,yn),Pt.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,we),Pt.pixelStorei(Y.UNPACK_SKIP_PIXELS,pa),Pt.pixelStorei(Y.UNPACK_SKIP_ROWS,se),Pt.pixelStorei(Y.UNPACK_SKIP_IMAGES,yr),Rt===0&&G.generateMipmaps===!0&&G.mipmapsAutoUpdate===!0&&Y.generateMipmap(Yt),Pt.unbindTexture()},this.initRenderTarget=function(R){jt.get(R).__webglFramebuffer===void 0&&re.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?re.setTextureCube(R,0):R.isData3DTexture?re.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?re.setTexture2DArray(R,0):re.setTexture2D(R,0),Pt.unbindTexture()},this.resetState=function(){q=0,k=0,ut=null,Pt.reset(),Ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=be._getDrawingBufferColorSpace(e),i.unpackColorSpace=be._getUnpackColorSpace()}}const Uc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class go{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const OC=new rx(-1,1,1,-1,0,1);class PC extends Zi{constructor(){super(),this.setAttribute("position",new Rn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Rn([0,2,0,0,2,0],2))}}const IC=new PC;class lm{constructor(e){this._mesh=new Yi(IC,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,OC)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class zC extends go{constructor(e,i="tDiffuse"){super(),this.textureID=i,this.uniforms=null,this.material=null,e instanceof Bn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Cl.clone(e.uniforms),this.material=new Bn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new lm(this.material)}render(e,i,s){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=s.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class ES extends go{constructor(e,i){super(),this.scene=e,this.camera=i,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,i,s){const u=e.getContext(),f=e.state;f.buffers.color.setMask(!1),f.buffers.depth.setMask(!1),f.buffers.color.setLocked(!0),f.buffers.depth.setLocked(!0);let d,h;this.inverse?(d=0,h=1):(d=1,h=0),f.buffers.stencil.setTest(!0),f.buffers.stencil.setOp(u.REPLACE,u.REPLACE,u.REPLACE),f.buffers.stencil.setFunc(u.ALWAYS,d,4294967295),f.buffers.stencil.setClear(h),f.buffers.stencil.setLocked(!0),e.setRenderTarget(s),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),f.buffers.color.setLocked(!1),f.buffers.depth.setLocked(!1),f.buffers.color.setMask(!0),f.buffers.depth.setMask(!0),f.buffers.stencil.setLocked(!1),f.buffers.stencil.setFunc(u.EQUAL,1,4294967295),f.buffers.stencil.setOp(u.KEEP,u.KEEP,u.KEEP),f.buffers.stencil.setLocked(!0)}}class BC extends go{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class FC{constructor(e,i){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),i===void 0){const s=e.getSize(new le);this._width=s.width,this._height=s.height,i=new si(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ri}),i.texture.name="EffectComposer.rt1"}else this._width=i.width,this._height=i.height;this.renderTarget1=i,this.renderTarget2=i.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new zC(Uc),this.copyPass.material.blending=Yr,this.timer=new sx}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,i){this.passes.splice(i,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const i=this.passes.indexOf(e);i!==-1&&this.passes.splice(i,1)}isLastEnabledPass(e){for(let i=e+1;i<this.passes.length;i++)if(this.passes[i].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const i=this.renderer.getRenderTarget();let s=!1;for(let u=0,f=this.passes.length;u<f;u++){const d=this.passes[u];if(d.enabled!==!1){if(d.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(u),d.render(this.renderer,this.writeBuffer,this.readBuffer,e,s),d.needsSwap){if(s){const h=this.renderer.getContext(),p=this.renderer.state.buffers.stencil;p.setFunc(h.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),p.setFunc(h.EQUAL,1,4294967295)}this.swapBuffers()}ES!==void 0&&(d instanceof ES?s=!0:d instanceof BC&&(s=!1))}}this.renderer.setRenderTarget(i)}reset(e){if(e===void 0){const i=this.renderer.getSize(new le);this._pixelRatio=this.renderer.getPixelRatio(),this._width=i.width,this._height=i.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,i){this._width=e,this._height=i;const s=this._width*this._pixelRatio,u=this._height*this._pixelRatio;this.renderTarget1.setSize(s,u),this.renderTarget2.setSize(s,u);for(let f=0;f<this.passes.length;f++)this.passes[f].setSize(s,u)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class HC extends go{constructor(e,i,s=null,u=null,f=null){super(),this.scene=e,this.camera=i,this.overrideMaterial=s,this.clearColor=u,this.clearAlpha=f,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ce}render(e,i,s){const u=e.autoClear;e.autoClear=!1;let f,d;this.overrideMaterial!==null&&(d=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(f=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:s),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(f),this.overrideMaterial!==null&&(this.scene.overrideMaterial=d),e.autoClear=u}}const GC={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ce(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class fo extends go{constructor(e,i=1,s,u){super(),this.strength=i,this.radius=s,this.threshold=u,this.resolution=e!==void 0?new le(e.x,e.y):new le(256,256),this.clearColor=new Ce(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let f=Math.round(this.resolution.x/2),d=Math.round(this.resolution.y/2);this.renderTargetBright=new si(f,d,{type:ri,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let v=0;v<this.nMips;v++){const g=new si(f,d,{type:ri,depthBuffer:!1});g.texture.name="UnrealBloomPass.h"+v,g.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(g);const S=new si(f,d,{type:ri,depthBuffer:!1});S.texture.name="UnrealBloomPass.v"+v,S.texture.generateMipmaps=!1,this.renderTargetsVertical.push(S),f=Math.round(f/2),d=Math.round(d/2)}const h=GC;this.highPassUniforms=Cl.clone(h.uniforms),this.highPassUniforms.luminosityThreshold.value=u,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Bn({uniforms:this.highPassUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader}),this.separableBlurMaterials=[];const p=[6,10,14,18,22];f=Math.round(this.resolution.x/2),d=Math.round(this.resolution.y/2);for(let v=0;v<this.nMips;v++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(p[v])),this.separableBlurMaterials[v].uniforms.invSize.value=new le(1/f,1/d),f=Math.round(f/2),d=Math.round(d/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=i,this.compositeMaterial.uniforms.bloomRadius.value=.1;const m=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=m,this.bloomTintColors=[new ot(1,1,1),new ot(1,1,1),new ot(1,1,1),new ot(1,1,1),new ot(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Cl.clone(Uc.uniforms),this.blendMaterial=new Bn({uniforms:this.copyUniforms,vertexShader:Uc.vertexShader,fragmentShader:Uc.fragmentShader,premultipliedAlpha:!0,blending:Lc,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ce,this._oldClearAlpha=1,this._basic=new jS,this._fsQuad=new lm(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,i){let s=Math.round(e/2),u=Math.round(i/2);this.renderTargetBright.setSize(s,u);for(let f=0;f<this.nMips;f++)this.renderTargetsHorizontal[f].setSize(s,u),this.renderTargetsVertical[f].setSize(s,u),this.separableBlurMaterials[f].uniforms.invSize.value=new le(1/s,1/u),s=Math.round(s/2),u=Math.round(u/2)}render(e,i,s,u,f){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const d=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),f&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=s.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=s.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let h=this.renderTargetBright;for(let p=0;p<this.nMips;p++)this._fsQuad.material=this.separableBlurMaterials[p],this.separableBlurMaterials[p].uniforms.colorTexture.value=h.texture,this.separableBlurMaterials[p].uniforms.direction.value=fo.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[p]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[p].uniforms.colorTexture.value=this.renderTargetsHorizontal[p].texture,this.separableBlurMaterials[p].uniforms.direction.value=fo.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[p]),e.clear(),this._fsQuad.render(e),h=this.renderTargetsVertical[p];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,f&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(s),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=d}_getSeparableBlurMaterial(e){const i=[],s=e/3;for(let d=0;d<e;d++)i.push(.39894*Math.exp(-.5*d*d/(s*s))/s);const u=[],f=[];for(let d=1;d<e;d+=2){const h=i[d],p=d+1<e?i[d+1]:0,m=h+p;u.push((d*h+(d+1)*p)/m),f.push(m)}return new Bn({defines:{KERNEL_PAIRS:u.length},uniforms:{colorTexture:{value:null},invSize:{value:new le(.5,.5)},direction:{value:new le(.5,.5)},centerWeight:{value:i[0]},gaussianOffsets:{value:u},gaussianWeights:{value:f}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Bn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}fo.BlurDirectionX=new le(1,0);fo.BlurDirectionY=new le(0,1);const Tc={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class VC extends go{constructor(){super(),this.isOutputPass=!0,this.uniforms=Cl.clone(Tc.uniforms),this.material=new ix({name:Tc.name,uniforms:this.uniforms,vertexShader:Tc.vertexShader,fragmentShader:Tc.fragmentShader}),this._fsQuad=new lm(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,i,s){this.uniforms.tDiffuse.value=s.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},be.getTransfer(this._outputColorSpace)===Be&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Wp?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===qp?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Yp?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Xc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===kc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Wc?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Zp&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const XC={output:{toneMapping:"none",exposure:1},ground:{blackLevel:.012,linearGain:.7,highlightGain:1.2,gain:1,edgeFade:.08},points:{sampleStep:3,maxCount:18e4,minLuminance:.12,contrastToBackground:1.5,backgroundOffset:.04,boostBase:.2,boostByLuminance:.2,sizeBase:.2,sizeByLuminance:.1,minPixelSize:.1,softness:1,heightBase:.3,heightByLuminance:8,heightJitter:1,twinkle:{depth:.56,speedBase:.8,speedRange:3.5}},clouds:{baseColor:[.004,.005,.009],cityGlow:[.3,.22,.16],glowBlur:7,fadeNear:[30,140],layers:[{y:70,cover:.6,opacity:.45,wind:[.0032,.0011],seed:3.1},{y:150,cover:.66,opacity:.3,wind:[.0045,-7e-4],seed:17.4}]},sky:{horizonLift:1.6,horizonTint:[0,.004,.02],zenith:[0,0,.004],starDensity:.999,starBrightness:.2,twinkle:{depth:.08,speedBase:.35,speedRange:.45}},fog:{color:[.006,.01,.026],distance:5200},bloom:{strength:.5,radius:.3,threshold:.4}},ao=30,Gc=3e3,Vp=2e3,jh=6,$h=1100,kC=Zr.degToRad(-24),WC=Zr.degToRad(-7),qC=Zr.degToRad(18),YC=Zr.degToRad(12),ZC=.25*ao,KC={none:qi,aces:Xc,agx:kc,neutral:Wc},_l=o=>new ot(...o),um=`
  uniform vec3 uFogColor;
  uniform float uFogDensity;
  float fogAmount(float dist) {
    return clamp(1.0 - exp(-pow(dist * uFogDensity, 1.6)), 0.0, 1.0);
  }
  vec3 applyFog(vec3 c, float dist) {
    return mix(c, uFogColor, fogAmount(dist));
  }
`,TS=`
  varying vec2 vUv;
  varying vec3 vWorld;
  void main() {
    vUv = uv;
    vec4 w = modelMatrix * vec4(position, 1.0);
    vWorld = w.xyz;
    gl_Position = projectionMatrix * viewMatrix * w;
  }
`,QC=`
  uniform sampler2D uMap;
  uniform float uScale;
  uniform float uBlackLevel;
  uniform float uLinearGain;
  uniform float uHighlightGain;
  uniform float uGain;
  uniform float uEdgeFade;
  ${um}
  varying vec2 vUv;
  varying vec3 vWorld;
  void main() {
    vec2 uv = (vUv - 0.5) * uScale + 0.5;
    vec3 c = vec3(0.0);
    if (all(greaterThan(uv, vec2(0.0))) && all(lessThan(uv, vec2(1.0)))) {
      c = texture2D(uMap, uv).rgb;
      // 写真の端をなめらかに消す
      float edge = smoothstep(0.0, uEdgeFade, uv.x) * smoothstep(1.0, 1.0 - uEdgeFade, uv.x)
                 * smoothstep(0.0, uEdgeFade, uv.y) * smoothstep(1.0, 1.0 - uEdgeFade, uv.y);
      // 暗いかすみを黒に落とし、明るい街明かりほど強める(2乗の項)
      c = max(c - uBlackLevel, 0.0);
      c = (c * uLinearGain + c * c * uHighlightGain) * uGain * edge;
    }
    c = applyFog(c, distance(vWorld, cameraPosition));
    gl_FragColor = vec4(c, 1.0);
  }
`,JC=`
  attribute vec3 aColor;   // 写真の色(リニア)
  attribute float aLum;    // 写真の明るさ 0〜1
  attribute float aSeed;   // 粒ごとの乱数(またたきをずらす)
  uniform float uTime;
  uniform float uProj;         // 距離 1 のときの「1 ユニット = 何 px」
  uniform float uPixelRatio;
  uniform float uCell;         // 粒の元になった画素の間隔(ユニット)
  uniform float uBoostBase;
  uniform float uBoostByLum;
  uniform float uSizeBase;
  uniform float uSizeByLum;
  uniform float uMinPixelSize;
  uniform float uTwinkleDepth;
  uniform float uTwinkleSpeedBase;
  uniform float uTwinkleSpeedRange;
  varying vec3 vColor;
  varying float vAlpha;
  varying float vDist;
  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mv;
    vDist = -mv.z;

    // またたき:(1 - depth) 〜 1 の間で明るさを揺らす
    float wave = 0.5 + 0.5 * sin(uTime * (uTwinkleSpeedBase + aSeed * uTwinkleSpeedRange) + aSeed * 62.83);
    float twinkle = 1.0 - uTwinkleDepth * wave;

    // 明るさの増幅:明るい粒ほど強く
    float boost = uBoostBase + aLum * uBoostByLum;
    vColor = aColor * boost * twinkle;

    // 大きさ:明るい粒ほど大きく。最小サイズ未満は、その分暗くして光の総量を保つ
    float size = uCell * (uSizeBase + aLum * uSizeByLum) * uProj / vDist;
    vAlpha = clamp(size / uMinPixelSize, 0.0, 1.0);
    gl_PointSize = max(size, uMinPixelSize) * uPixelRatio;
  }
`,jC=`
  uniform float uSoftness;
  ${um}
  varying vec3 vColor;
  varying float vAlpha;
  varying float vDist;
  void main() {
    // 中心が明るく外へなめらかに消える丸い光
    vec2 p = gl_PointCoord - 0.5;
    float a = exp(-dot(p, p) * uSoftness) * vAlpha;
    // 加算合成なので、霧の中では色を暗くして消す
    gl_FragColor = vec4(vColor * (1.0 - fogAmount(vDist)), a);
  }
`,$C=`
  uniform sampler2D uMap;
  uniform float uTime;
  uniform vec2 uWind;
  uniform float uCover;
  uniform float uOpacity;
  uniform vec2 uImgSize;
  uniform float uSeed;
  uniform vec3 uBaseColor;
  uniform vec3 uCityGlow;
  uniform float uGlowBlur;
  uniform vec2 uFadeNear;
  ${um}
  varying vec2 vUv;
  varying vec3 vWorld;

  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float noise(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1, 0)), u.x),
               mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), u.x), u.y);
  }
  float fbm(vec2 p) {
    float v = 0.0, a = 0.5;
    mat2 r = mat2(0.8, -0.6, 0.6, 0.8);
    for (int i = 0; i < 6; i++) { v += a * noise(p); p = r * p * 2.03 + 11.7; a *= 0.5; }
    return v;
  }
  void main() {
    // 雲の形(風で流れ、ゆっくり形も変わる)
    vec2 p = vWorld.xz * 0.0011 + uWind * uTime + uSeed;
    float n = fbm(p + 0.6 * fbm(p * 0.7 + uTime * 0.004));
    float dens = smoothstep(uCover, uCover + 0.28, n);
    if (dens < 0.003) discard;

    // 真下の街明かり(ぼかした写真)で雲の底を照らす
    vec2 uv = vec2(vWorld.x / uImgSize.x + 0.5, 0.5 - vWorld.z / uImgSize.y);
    vec3 glow = vec3(0.0);
    if (all(greaterThan(uv, vec2(0.0))) && all(lessThan(uv, vec2(1.0)))) {
      glow = texture2D(uMap, uv, uGlowBlur).rgb;
    }
    vec3 col = uBaseColor + glow * uCityGlow;

    float dist = distance(vWorld, cameraPosition);
    float a = dens * uOpacity * smoothstep(uFadeNear.x, uFadeNear.y, dist);
    gl_FragColor = vec4(applyFog(col, dist), a);
  }
`,t3=`
  varying vec3 vDir;
  void main() {
    vDir = normalize(position);
    vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    gl_Position = p.xyww; // 常に一番奥に描く
  }
`,e3=`
  uniform vec3 uFogColor;
  uniform float uTime;
  uniform float uHorizonLift;
  uniform vec3 uHorizonTint;
  uniform vec3 uZenith;
  uniform float uStarDensity;
  uniform float uStarBrightness;
  uniform float uStarTwinkleDepth;
  uniform float uStarTwinkleSpeedBase;
  uniform float uStarTwinkleSpeedRange;
  varying vec3 vDir;
  float hash(vec3 p) { return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453); }
  void main() {
    float h = vDir.y; // 上向き成分(0 = 地平線、1 = 真上)
    vec3 horizon = uFogColor * uHorizonLift + uHorizonTint;
    vec3 c = mix(horizon, uZenith, smoothstep(-0.02, 0.35, h));
    c = mix(uFogColor, c, smoothstep(-0.08, 0.0, h)); // 地平線より下は霧の色
    // 星(地平線近くでは消す)
    float s = hash(floor(vDir * 420.0));
    float star = step(uStarDensity, s) * smoothstep(0.02, 0.2, h);
    // 星ごとに周期と位相をずらし、消えない明るさの範囲でゆっくり瞬かせる
    float seed = hash(floor(vDir * 420.0) + vec3(17.3, 43.7, 9.1));
    float wave = 0.5 + 0.5 * sin(uTime * (uStarTwinkleSpeedBase + seed * uStarTwinkleSpeedRange) + seed * 6.2831853);
    star *= 1.0 - uStarTwinkleDepth * wave;
    c += vec3(star) * uStarBrightness;
    gl_FragColor = vec4(c, 1.0);
  }
`;function n3(o,e){const i=e.sampleStep,s=Math.floor(o.width/i),u=Math.floor(o.height/i),f=document.createElement("canvas");f.width=s,f.height=u;const d=f.getContext("2d",{willReadFrequently:!0});d.drawImage(o,0,0,s,u);const h=d.getImageData(0,0,s,u).data,p=Math.max(8,Math.floor(s/24)),m=Math.max(8,Math.floor(u/24)),v=document.createElement("canvas");v.width=p,v.height=m;const g=v.getContext("2d",{willReadFrequently:!0});g.imageSmoothingQuality="high",g.drawImage(o,0,0,p,m);const S=g.getImageData(0,0,p,m).data,E=(x,C)=>{const W=(Math.min(m-1,Math.floor(C/u*m))*p+Math.min(p-1,Math.floor(x/s*p)))*4;return(.2126*S[W]+.7152*S[W+1]+.0722*S[W+2])/255},T=[];for(let x=0;x<u;x++)for(let C=0;C<s;C++){const W=(x*s+C)*4,F=h[W]/255,H=h[W+1]/255,$=h[W+2]/255,ct=.2126*F+.7152*H+.0722*$;ct<e.minLuminance||ct<E(C,x)*e.contrastToBackground+e.backgroundOffset||T.push(C,x,F,H,$,ct)}const N=T.length/6,y=Math.min(1,e.maxCount/Math.max(1,N)),M=[],D=[],z=[],L=[],I=Gc/s;for(let x=0;x<N;x++){if(Math.random()>y)continue;const C=x*6,W=T[C],F=T[C+1],H=T[C+2],$=T[C+3],ct=T[C+4],X=T[C+5],it=(Math.random()-.5)*I,q=(Math.random()-.5)*I;M.push(((W+.5)/s-.5)*Gc+it,e.heightBase+X*X*e.heightByLuminance+Math.random()*e.heightJitter,((F+.5)/u-.5)*Vp+q),D.push(Math.pow(H,2.2),Math.pow($,2.2),Math.pow(ct,2.2)),z.push(X),L.push(Math.random())}const O=new Zi;return O.setAttribute("position",new Rn(M,3)),O.setAttribute("aColor",new Rn(D,3)),O.setAttribute("aLum",new Rn(z,1)),O.setAttribute("aSeed",new Rn(L,1)),{geometry:O,cell:I}}function i3(o,{imageUrl:e,onReady:i,onTelemetry:s,lighting:u=XC}){const f=u,d=new LC({antialias:!0,powerPreference:"high-performance"});d.setPixelRatio(Math.min(window.devicePixelRatio,2)),d.setClearColor(0),d.toneMapping=KC[f.output.toneMapping]??qi,d.toneMappingExposure=f.output.exposure,o.appendChild(d.domElement);const h=new _T,p=new Xi(64,1,1,6e4),m={uFogColor:{value:_l(f.fog.color)},uFogDensity:{value:1/f.fog.distance}},v=new Yi(new rm(3e4,48,24),new Bn({vertexShader:t3,fragmentShader:e3,side:Kn,depthWrite:!1,uniforms:{...m,uTime:{value:0},uHorizonLift:{value:f.sky.horizonLift},uHorizonTint:{value:_l(f.sky.horizonTint)},uZenith:{value:_l(f.sky.zenith)},uStarDensity:{value:f.sky.starDensity},uStarBrightness:{value:f.sky.starBrightness},uStarTwinkleDepth:{value:f.sky.twinkle.depth},uStarTwinkleSpeedBase:{value:f.sky.twinkle.speedBase},uStarTwinkleSpeedRange:{value:f.sky.twinkle.speedRange}}}));v.renderOrder=-1,h.add(v);const g={time:0,angle:Math.PI*.15,altitude:11.2*ao,targetAltitude:11.2*ao,speed:1,look:new le,lookTarget:new le,pointsMat:null,clouds:[]};let S=!1,E=null;new zT().load(e,W=>{if(S){W.dispose();return}E=W,W.colorSpace=vi,W.anisotropy=d.capabilities.getMaxAnisotropy(),W.generateMipmaps=!0,W.minFilter=Pa;const F=new Yi(new uo(Gc*jh,Vp*jh),new Bn({vertexShader:TS,fragmentShader:QC,uniforms:{...m,uMap:{value:W},uScale:{value:jh},uBlackLevel:{value:f.ground.blackLevel},uLinearGain:{value:f.ground.linearGain},uHighlightGain:{value:f.ground.highlightGain},uGain:{value:f.ground.gain},uEdgeFade:{value:f.ground.edgeFade}}}));F.rotation.x=-Math.PI/2,h.add(F);const H=f.points,{geometry:$,cell:ct}=n3(W.image,H),X=new Bn({vertexShader:JC,fragmentShader:jC,transparent:!0,depthWrite:!1,blending:Lc,uniforms:{...m,uTime:{value:0},uProj:{value:1e3},uPixelRatio:{value:d.getPixelRatio()},uCell:{value:ct},uBoostBase:{value:H.boostBase},uBoostByLum:{value:H.boostByLuminance},uSizeBase:{value:H.sizeBase},uSizeByLum:{value:H.sizeByLuminance},uMinPixelSize:{value:H.minPixelSize},uSoftness:{value:H.softness},uTwinkleDepth:{value:H.twinkle.depth},uTwinkleSpeedBase:{value:H.twinkle.speedBase},uTwinkleSpeedRange:{value:H.twinkle.speedRange}}}),it=new CT($,X);it.frustumCulled=!1,h.add(it),g.pointsMat=X,N();const q=f.clouds;for(const k of q.layers){const ut=new Bn({vertexShader:TS,fragmentShader:$C,transparent:!0,depthWrite:!1,uniforms:{...m,uMap:{value:W},uTime:{value:0},uWind:{value:new le(...k.wind)},uCover:{value:k.cover},uOpacity:{value:k.opacity},uImgSize:{value:new le(Gc,Vp)},uSeed:{value:k.seed},uBaseColor:{value:_l(q.baseColor)},uCityGlow:{value:_l(q.cityGlow)},uGlowBlur:{value:q.glowBlur},uFadeNear:{value:new le(...q.fadeNear)}}}),tt=new Yi(new uo(24e3,24e3),ut);tt.rotation.x=-Math.PI/2,tt.position.y=k.y,tt.renderOrder=2,h.add(tt),g.clouds.push(ut)}i==null||i()});const T=new FC(d);T.addPass(new HC(h,p)),T.addPass(new fo(new le(1,1),f.bloom.strength,f.bloom.radius,f.bloom.threshold)),T.addPass(new VC);function N(){const W=o.clientWidth,F=o.clientHeight;d.setSize(W,F),T.setSize(W,F),p.aspect=W/F,p.updateProjectionMatrix(),g.pointsMat&&(g.pointsMat.uniforms.uProj.value=F/(2*Math.tan(Zr.degToRad(p.fov/2))))}const y=new ResizeObserver(N);y.observe(o),N();function M(W){W.preventDefault(),g.targetAltitude=Zr.clamp(g.targetAltitude*Math.exp(W.deltaY*.0012),4*ao,40*ao)}function D(W){W.key==="ArrowUp"&&(g.speed=Math.min(g.speed*1.5,40)),W.key==="ArrowDown"&&(g.speed=Math.max(g.speed/1.5,.25))}window.addEventListener("keydown",D),window.addEventListener("wheel",M,{passive:!1});const z=new sx,L=new ot,I=new ot;let O=0,x=0;function C(){O=requestAnimationFrame(C),z.update();const W=Math.min(z.getDelta(),.1);g.time+=W;const F=g.time;g.altitude+=(g.targetAltitude-g.altitude)*(1-Math.exp(-W*1.5)),g.look.lerp(g.lookTarget,1-Math.exp(-W*3)),g.angle+=ZC*g.speed*W/$h;const H=g.angle,$=Math.sin(F*1.7)*.25+Math.sin(F*3.1+1.3)*.12+Math.sin(F*.43)*.6;p.position.set(Math.cos(H)*$h,g.altitude+$,Math.sin(H)*$h);const ct=-g.look.x*qC,X=kC-g.look.y*YC;L.set(-Math.cos(H),0,-Math.sin(H)).applyAxisAngle(Qn.DEFAULT_UP,ct),I.copy(p.position).addScaledVector(L,Math.cos(X)),I.y+=Math.sin(X),p.up.set(0,1,0),p.lookAt(I),p.rotateZ(WC+Math.sin(F*.9)*.004+Math.sin(F*2.3)*.002),v.position.copy(p.position),v.material.uniforms.uTime.value=F,g.pointsMat&&(g.pointsMat.uniforms.uTime.value=F);for(const it of g.clouds)it.uniforms.uTime.value=F;T.render(),x+=W,x>.25&&s&&(x=0,s({altitudeM:g.altitude/ao*1e3,speedKmh:900*g.speed,heading:(Zr.radToDeg(Math.atan2(-Math.sin(H),-Math.cos(H)))%360+360)%360}))}return C(),{setLook(W,F){g.lookTarget.set(W,F)},dispose(){S=!0,cancelAnimationFrame(O),y.disconnect(),window.removeEventListener("keydown",D),window.removeEventListener("wheel",M),h.traverse(W=>{var F,H;(F=W.geometry)==null||F.dispose(),(H=W.material)==null||H.dispose()}),E==null||E.dispose(),T.dispose(),d.dispose(),d.domElement.remove()}}}const a3="/night-flight/assets/ISS073-E-659216-BcyVjBJn.jpeg",bS={london:{name:"London",imageUrl:a3,imageId:"ISS073-E-659216"}},AS="london",RS=o=>Math.max(-1,Math.min(1,o));function r3(o,{sensitivity:e=2.2,smoothing:i=.08,onChange:s}={}){const[u,f]=ii.useState({x:0,y:0}),[d,h]=ii.useState(!1),p=ii.useRef(s);return ii.useEffect(()=>{p.current=s}),ii.useEffect(()=>{const m=o.current;if(!m)return;let v=0,g=0,S=0,E=0,T=null,N=0;const y=(O,x)=>{var C;v=RS(O),g=RS(x),(C=p.current)==null||C.call(p,v,g)},M=O=>{O.button===0&&(T={id:O.pointerId,x:O.clientX,y:O.clientY},m.setPointerCapture(O.pointerId),h(!0))},D=O=>{if(!T||O.pointerId!==T.id)return;const x=(O.clientX-T.x)/window.innerWidth*e,C=(O.clientY-T.y)/window.innerHeight*e;T.x=O.clientX,T.y=O.clientY,y(v-x,g-C)},z=O=>{!T||O.pointerId!==T.id||(T=null,h(!1))},L=()=>y(0,0),I=()=>{const O=S+(v-S)*i,x=E+(g-E)*i;(Math.abs(O-S)>1e-4||Math.abs(x-E)>1e-4)&&(S=O,E=x,f({x:S,y:E})),N=requestAnimationFrame(I)};return m.addEventListener("pointerdown",M),m.addEventListener("pointermove",D),m.addEventListener("pointerup",z),m.addEventListener("pointercancel",z),m.addEventListener("dblclick",L),I(),()=>{cancelAnimationFrame(N),m.removeEventListener("pointerdown",M),m.removeEventListener("pointermove",D),m.removeEventListener("pointerup",z),m.removeEventListener("pointercancel",z),m.removeEventListener("dblclick",L)}},[o,e,i]),{look:u,dragging:d}}function s3(){const[o,e]=ii.useState({w:window.innerWidth,h:window.innerHeight});return ii.useEffect(()=>{const i=()=>e({w:window.innerWidth,h:window.innerHeight});return window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)},[]),o}function la({r:o,...e}){return Qt.jsx("rect",{x:o.x,y:o.y,width:o.w,height:o.h,rx:o.rx,ry:o.ry,...e})}function o3({head:o={x:0,y:0}}){const{w:e,h:i}=s3(),s=Math.min(i*.74,e*1.05),u=s*.7,f=e/2-o.x*e*.012,d=i/2-o.y*i*.012,h={x:f-u/2,y:d-s/2,w:u,h:s,rx:u*.44,ry:s*.3},p=s*.02,m={x:h.x-p,y:h.y-p,w:u+p*2,h:s+p*2,rx:h.rx+p,ry:h.ry+p},v={x:h.x-u*.012-o.x*4,y:h.y-s*.01-o.y*4,w:u*1.024,h:s*1.02,rx:h.rx*1.02,ry:h.ry*1.02};return Qt.jsxs("svg",{className:"aircraft-window",width:e,height:i,viewBox:`0 0 ${e} ${i}`,"aria-hidden":"true",children:[Qt.jsxs("defs",{children:[Qt.jsxs("linearGradient",{id:"aw-wall",x1:"0",y1:"0",x2:"1",y2:"1",children:[Qt.jsx("stop",{offset:"0",className:"aircraft-window__stop aircraft-window__stop--wall-light"}),Qt.jsx("stop",{offset:"0.5",className:"aircraft-window__stop aircraft-window__stop--wall-mid"}),Qt.jsx("stop",{offset:"1",className:"aircraft-window__stop aircraft-window__stop--wall-dark"})]}),Qt.jsxs("radialGradient",{id:"aw-wall-light",cx:"0.5",cy:"0.15",r:"0.9",children:[Qt.jsx("stop",{offset:"0",className:"aircraft-window__stop aircraft-window__stop--cabin-light"}),Qt.jsx("stop",{offset:"1",className:"aircraft-window__stop aircraft-window__stop--transparent"})]}),Qt.jsxs("linearGradient",{id:"aw-bezel",x1:"0",y1:"0",x2:"1",y2:"1",children:[Qt.jsx("stop",{offset:"0",className:"aircraft-window__stop aircraft-window__stop--bezel-light"}),Qt.jsx("stop",{offset:"0.45",className:"aircraft-window__stop aircraft-window__stop--bezel-mid"}),Qt.jsx("stop",{offset:"1",className:"aircraft-window__stop aircraft-window__stop--bezel-dark"})]}),Qt.jsxs("linearGradient",{id:"aw-reflect",x1:"0",y1:"0",x2:"1",y2:"1",children:[Qt.jsx("stop",{offset:"0",className:"aircraft-window__stop aircraft-window__stop--reflect-cool"}),Qt.jsx("stop",{offset:"0.35",className:"aircraft-window__stop aircraft-window__stop--transparent"}),Qt.jsx("stop",{offset:"0.7",className:"aircraft-window__stop aircraft-window__stop--transparent"}),Qt.jsx("stop",{offset:"1",className:"aircraft-window__stop aircraft-window__stop--reflect-warm"})]}),Qt.jsxs("mask",{id:"aw-wall-mask",children:[Qt.jsx("rect",{width:e,height:i,fill:"#fff"}),Qt.jsx(la,{r:m,fill:"#000"})]}),Qt.jsxs("mask",{id:"aw-bezel-mask",children:[Qt.jsx(la,{r:m,fill:"#fff"}),Qt.jsx(la,{r:h,fill:"#000"})]}),Qt.jsx("clipPath",{id:"aw-glass-clip",children:Qt.jsx(la,{r:h})}),Qt.jsx("filter",{id:"aw-blur-lg",x:"-20%",y:"-20%",width:"140%",height:"140%",children:Qt.jsx("feGaussianBlur",{stdDeviation:s*.03})}),Qt.jsx("filter",{id:"aw-blur-sm",x:"-20%",y:"-20%",width:"140%",height:"140%",children:Qt.jsx("feGaussianBlur",{stdDeviation:s*.006})})]}),Qt.jsxs("g",{className:"aircraft-window__glass",clipPath:"url(#aw-glass-clip)",children:[Qt.jsx(la,{r:h,className:"aircraft-window__depth",strokeWidth:s*.07,filter:"url(#aw-blur-lg)"}),Qt.jsx(la,{r:v,className:"aircraft-window__pane",filter:"url(#aw-blur-sm)"}),Qt.jsx(la,{r:h,className:"aircraft-window__reflection"}),Qt.jsx("circle",{className:"aircraft-window__breather-hole",cx:f,cy:h.y+s*.9,r:Math.max(1.5,s*.0035)})]}),Qt.jsxs("g",{className:"aircraft-window__bezel",mask:"url(#aw-bezel-mask)",children:[Qt.jsx(la,{r:m,className:"aircraft-window__bezel-surface"}),Qt.jsx(la,{r:h,className:"aircraft-window__bezel-shadow",strokeWidth:p*.5,filter:"url(#aw-blur-sm)"})]}),Qt.jsxs("g",{className:"aircraft-window__wall",mask:"url(#aw-wall-mask)",children:[Qt.jsx("rect",{width:e,height:i,className:"aircraft-window__wall-surface"}),Qt.jsx("rect",{width:e,height:i,className:"aircraft-window__wall-light"}),Qt.jsx(la,{r:m,className:"aircraft-window__wall-shadow",strokeWidth:p*.8,filter:"url(#aw-blur-lg)"})]})]})}function l3({hidden:o,children:e}){return Qt.jsx("div",{className:`loader${o?" loader--hidden":""}`,children:e})}function u3({title:o,subtitle:e}){return Qt.jsxs("header",{className:"hud hud--top",children:[Qt.jsx("span",{className:"hud__title",children:o}),Qt.jsx("span",{className:"hud__subtitle",children:e})]})}function c3({telemetry:o,hint:e}){if(!o)return null;const i=[{label:"ALT",value:`${Math.round(o.altitudeM).toLocaleString("en-GB")} m`},{label:"GS",value:`${Math.round(o.speedKmh).toLocaleString("en-GB")} km/h`},{label:"HDG",value:`${String(Math.round(o.heading)%360).padStart(3,"0")}°`}];return Qt.jsxs("footer",{className:"hud hud--bottom",children:[Qt.jsx("dl",{className:"hud__stats",children:i.map(s=>Qt.jsxs("div",{className:"hud__stat",children:[Qt.jsx("dt",{className:"hud__label",children:s.label}),Qt.jsx("dd",{className:"hud__value",children:s.value})]},s.label))}),Qt.jsx("p",{className:"hud__hint",children:e})]})}function f3({locationId:o=AS}){const e=bS[o]??bS[AS],i=`Night Flight ${e.name}`,s=ii.useRef(null),u=ii.useRef(null),f=ii.useRef(null),[d,h]=ii.useState(!1),[p,m]=ii.useState(null),{look:v,dragging:g}=r3(s,{onChange:(S,E)=>{var T;return(T=f.current)==null?void 0:T.setLook(S,E)}});return ii.useEffect(()=>{h(!1),m(null),document.title=i;const S=i3(u.current,{imageUrl:e.imageUrl,onReady:()=>h(!0),onTelemetry:m});return f.current=S,()=>{f.current=null,S.dispose()}},[e,i]),Qt.jsxs("main",{ref:s,className:`flight${g?" flight--dragging":""}`,children:[Qt.jsx("div",{ref:u,className:"flight__viewport"}),Qt.jsx(o3,{head:v}),Qt.jsx(u3,{title:i,subtitle:e.imageId}),Qt.jsx(c3,{telemetry:p,hint:"Drag to look around / Double-click to reset view / Scroll to adjust altitude / ↑↓ to adjust speed"}),Qt.jsxs(l3,{hidden:d,children:["Descending into ",e.name,"…"]})]})}rE.createRoot(document.getElementById("root")).render(Qt.jsx(ii.StrictMode,{children:Qt.jsx(f3,{})}));
