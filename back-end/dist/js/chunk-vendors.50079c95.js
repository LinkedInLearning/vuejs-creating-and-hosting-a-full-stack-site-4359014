"use strict";(self["webpackChunkfront_end"]=self["webpackChunkfront_end"]||[]).push([[998],{9662:function(e,t,n){var r=n(614),o=n(6330),i=TypeError;e.exports=function(e){if(r(e))return e;throw new i(o(e)+" is not a function")}},6077:function(e,t,n){var r=n(614),o=String,i=TypeError;e.exports=function(e){if("object"==typeof e||r(e))return e;throw new i("Can't set "+o(e)+" as a prototype")}},5787:function(e,t,n){var r=n(7976),o=TypeError;e.exports=function(e,t){if(r(t,e))return e;throw new o("Incorrect invocation")}},9670:function(e,t,n){var r=n(111),o=String,i=TypeError;e.exports=function(e){if(r(e))return e;throw new i(o(e)+" is not an object")}},3013:function(e){e.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(e,t,n){var r,o,i,s=n(3013),a=n(9781),c=n(7854),u=n(614),l=n(111),d=n(2597),f=n(648),h=n(6330),p=n(8880),m=n(8052),g=n(7045),v=n(7976),y=n(9518),b=n(7674),_=n(5112),w=n(9711),E=n(9909),I=E.enforce,S=E.get,T=c.Int8Array,O=T&&T.prototype,k=c.Uint8ClampedArray,R=k&&k.prototype,C=T&&y(T),A=O&&y(O),P=Object.prototype,N=c.TypeError,x=_("toStringTag"),D=w("TYPED_ARRAY_TAG"),L="TypedArrayConstructor",M=s&&!!b&&"Opera"!==f(c.opera),U=!1,j={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},F={BigInt64Array:8,BigUint64Array:8},B=function(e){if(!l(e))return!1;var t=f(e);return"DataView"===t||d(j,t)||d(F,t)},$=function(e){var t=y(e);if(l(t)){var n=S(t);return n&&d(n,L)?n[L]:$(t)}},V=function(e){if(!l(e))return!1;var t=f(e);return d(j,t)||d(F,t)},H=function(e){if(V(e))return e;throw new N("Target is not a typed array")},z=function(e){if(u(e)&&(!b||v(C,e)))return e;throw new N(h(e)+" is not a typed array constructor")},W=function(e,t,n,r){if(a){if(n)for(var o in j){var i=c[o];if(i&&d(i.prototype,e))try{delete i.prototype[e]}catch(s){try{i.prototype[e]=t}catch(u){}}}A[e]&&!n||m(A,e,n?t:M&&O[e]||t,r)}},q=function(e,t,n){var r,o;if(a){if(b){if(n)for(r in j)if(o=c[r],o&&d(o,e))try{delete o[e]}catch(i){}if(C[e]&&!n)return;try{return m(C,e,n?t:M&&C[e]||t)}catch(i){}}for(r in j)o=c[r],!o||o[e]&&!n||m(o,e,t)}};for(r in j)o=c[r],i=o&&o.prototype,i?I(i)[L]=o:M=!1;for(r in F)o=c[r],i=o&&o.prototype,i&&(I(i)[L]=o);if((!M||!u(C)||C===Function.prototype)&&(C=function(){throw new N("Incorrect invocation")},M))for(r in j)c[r]&&b(c[r],C);if((!M||!A||A===P)&&(A=C.prototype,M))for(r in j)c[r]&&b(c[r].prototype,A);if(M&&y(R)!==A&&b(R,A),a&&!d(A,x))for(r in U=!0,g(A,x,{configurable:!0,get:function(){return l(this)?this[D]:void 0}}),j)c[r]&&p(c[r],D,r);e.exports={NATIVE_ARRAY_BUFFER_VIEWS:M,TYPED_ARRAY_TAG:U&&D,aTypedArray:H,aTypedArrayConstructor:z,exportTypedArrayMethod:W,exportTypedArrayStaticMethod:q,getTypedArrayConstructor:$,isView:B,isTypedArray:V,TypedArray:C,TypedArrayPrototype:A}},7745:function(e,t,n){var r=n(6244);e.exports=function(e,t){var n=0,o=r(t),i=new e(o);while(o>n)i[n]=t[n++];return i}},1318:function(e,t,n){var r=n(5656),o=n(1400),i=n(6244),s=function(e){return function(t,n,s){var a,c=r(t),u=i(c),l=o(s,u);if(e&&n!==n){while(u>l)if(a=c[l++],a!==a)return!0}else for(;u>l;l++)if((e||l in c)&&c[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:s(!0),indexOf:s(!1)}},3658:function(e,t,n){var r=n(9781),o=n(3157),i=TypeError,s=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=a?function(e,t){if(o(e)&&!s(e,"length").writable)throw new i("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},1843:function(e,t,n){var r=n(6244);e.exports=function(e,t){for(var n=r(e),o=new t(n),i=0;i<n;i++)o[i]=e[n-i-1];return o}},1572:function(e,t,n){var r=n(6244),o=n(9303),i=RangeError;e.exports=function(e,t,n,s){var a=r(e),c=o(n),u=c<0?a+c:c;if(u>=a||u<0)throw new i("Incorrect index");for(var l=new t(a),d=0;d<a;d++)l[d]=d===u?s:e[d];return l}},4326:function(e,t,n){var r=n(1702),o=r({}.toString),i=r("".slice);e.exports=function(e){return i(o(e),8,-1)}},648:function(e,t,n){var r=n(1694),o=n(614),i=n(4326),s=n(5112),a=s("toStringTag"),c=Object,u="Arguments"===i(function(){return arguments}()),l=function(e,t){try{return e[t]}catch(n){}};e.exports=r?i:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=l(t=c(e),a))?n:u?i(t):"Object"===(r=i(t))&&o(t.callee)?"Arguments":r}},9920:function(e,t,n){var r=n(2597),o=n(3887),i=n(1236),s=n(3070);e.exports=function(e,t,n){for(var a=o(t),c=s.f,u=i.f,l=0;l<a.length;l++){var d=a[l];r(e,d)||n&&r(n,d)||c(e,d,u(t,d))}}},8544:function(e,t,n){var r=n(7293);e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},8880:function(e,t,n){var r=n(9781),o=n(3070),i=n(9114);e.exports=r?function(e,t,n){return o.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},9114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},7045:function(e,t,n){var r=n(6339),o=n(3070);e.exports=function(e,t,n){return n.get&&r(n.get,t,{getter:!0}),n.set&&r(n.set,t,{setter:!0}),o.f(e,t,n)}},8052:function(e,t,n){var r=n(614),o=n(3070),i=n(6339),s=n(3072);e.exports=function(e,t,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:t;if(r(n)&&i(n,u,a),a.global)c?e[t]=n:s(t,n);else{try{a.unsafe?e[t]&&(c=!0):delete e[t]}catch(l){}c?e[t]=n:o.f(e,t,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},3072:function(e,t,n){var r=n(7854),o=Object.defineProperty;e.exports=function(e,t){try{o(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},5117:function(e,t,n){var r=n(6330),o=TypeError;e.exports=function(e,t){if(!delete e[t])throw new o("Cannot delete property "+r(t)+" of "+r(e))}},9781:function(e,t,n){var r=n(7293);e.exports=!r((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(e){var t="object"==typeof document&&document.all,n="undefined"==typeof t&&void 0!==t;e.exports={all:t,IS_HTMLDDA:n}},317:function(e,t,n){var r=n(7854),o=n(111),i=r.document,s=o(i)&&o(i.createElement);e.exports=function(e){return s?i.createElement(e):{}}},7207:function(e){var t=TypeError,n=9007199254740991;e.exports=function(e){if(e>n)throw t("Maximum allowed index exceeded");return e}},3678:function(e){e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},8113:function(e){e.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7392:function(e,t,n){var r,o,i=n(7854),s=n(8113),a=i.process,c=i.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),o=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(o=+r[1]))),e.exports=o},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},1060:function(e,t,n){var r=n(1702),o=Error,i=r("".replace),s=function(e){return String(new o(e).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(s);e.exports=function(e,t){if(c&&"string"==typeof e&&!o.prepareStackTrace)while(t--)e=i(e,a,"");return e}},2109:function(e,t,n){var r=n(7854),o=n(1236).f,i=n(8880),s=n(8052),a=n(3072),c=n(9920),u=n(4705);e.exports=function(e,t){var n,l,d,f,h,p,m=e.target,g=e.global,v=e.stat;if(l=g?r:v?r[m]||a(m,{}):(r[m]||{}).prototype,l)for(d in t){if(h=t[d],e.dontCallGetSet?(p=o(l,d),f=p&&p.value):f=l[d],n=u(g?d:m+(v?".":"#")+d,e.forced),!n&&void 0!==f){if(typeof h==typeof f)continue;c(h,f)}(e.sham||f&&f.sham)&&i(h,"sham",!0),s(l,d,h,e)}}},7293:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},4374:function(e,t,n){var r=n(7293);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},6916:function(e,t,n){var r=n(4374),o=Function.prototype.call;e.exports=r?o.bind(o):function(){return o.apply(o,arguments)}},6530:function(e,t,n){var r=n(9781),o=n(2597),i=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,a=o(i,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&s(i,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},5668:function(e,t,n){var r=n(1702),o=n(9662);e.exports=function(e,t,n){try{return r(o(Object.getOwnPropertyDescriptor(e,t)[n]))}catch(i){}}},1702:function(e,t,n){var r=n(4374),o=Function.prototype,i=o.call,s=r&&o.bind.bind(i,i);e.exports=r?s:function(e){return function(){return i.apply(e,arguments)}}},5005:function(e,t,n){var r=n(7854),o=n(614),i=function(e){return o(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?i(r[e]):r[e]&&r[e][t]}},8173:function(e,t,n){var r=n(9662),o=n(8554);e.exports=function(e,t){var n=e[t];return o(n)?void 0:r(n)}},7854:function(e,t,n){var r=function(e){return e&&e.Math===Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||this||Function("return this")()},2597:function(e,t,n){var r=n(1702),o=n(7908),i=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return i(o(e),t)}},3501:function(e){e.exports={}},4664:function(e,t,n){var r=n(9781),o=n(7293),i=n(317);e.exports=!r&&!o((function(){return 7!==Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,n){var r=n(1702),o=n(7293),i=n(4326),s=Object,a=r("".split);e.exports=o((function(){return!s("z").propertyIsEnumerable(0)}))?function(e){return"String"===i(e)?a(e,""):s(e)}:s},9587:function(e,t,n){var r=n(614),o=n(111),i=n(7674);e.exports=function(e,t,n){var s,a;return i&&r(s=t.constructor)&&s!==n&&o(a=s.prototype)&&a!==n.prototype&&i(e,a),e}},2788:function(e,t,n){var r=n(1702),o=n(614),i=n(5465),s=r(Function.toString);o(i.inspectSource)||(i.inspectSource=function(e){return s(e)}),e.exports=i.inspectSource},9909:function(e,t,n){var r,o,i,s=n(4811),a=n(7854),c=n(111),u=n(8880),l=n(2597),d=n(5465),f=n(6200),h=n(3501),p="Object already initialized",m=a.TypeError,g=a.WeakMap,v=function(e){return i(e)?o(e):r(e,{})},y=function(e){return function(t){var n;if(!c(t)||(n=o(t)).type!==e)throw new m("Incompatible receiver, "+e+" required");return n}};if(s||d.state){var b=d.state||(d.state=new g);b.get=b.get,b.has=b.has,b.set=b.set,r=function(e,t){if(b.has(e))throw new m(p);return t.facade=e,b.set(e,t),t},o=function(e){return b.get(e)||{}},i=function(e){return b.has(e)}}else{var _=f("state");h[_]=!0,r=function(e,t){if(l(e,_))throw new m(p);return t.facade=e,u(e,_,t),t},o=function(e){return l(e,_)?e[_]:{}},i=function(e){return l(e,_)}}e.exports={set:r,get:o,has:i,enforce:v,getterFor:y}},3157:function(e,t,n){var r=n(4326);e.exports=Array.isArray||function(e){return"Array"===r(e)}},4067:function(e,t,n){var r=n(648);e.exports=function(e){var t=r(e);return"BigInt64Array"===t||"BigUint64Array"===t}},614:function(e,t,n){var r=n(4154),o=r.all;e.exports=r.IS_HTMLDDA?function(e){return"function"==typeof e||e===o}:function(e){return"function"==typeof e}},4705:function(e,t,n){var r=n(7293),o=n(614),i=/#|\.prototype\./,s=function(e,t){var n=c[a(e)];return n===l||n!==u&&(o(t)?r(t):!!t)},a=s.normalize=function(e){return String(e).replace(i,".").toLowerCase()},c=s.data={},u=s.NATIVE="N",l=s.POLYFILL="P";e.exports=s},8554:function(e){e.exports=function(e){return null===e||void 0===e}},111:function(e,t,n){var r=n(614),o=n(4154),i=o.all;e.exports=o.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:r(e)||e===i}:function(e){return"object"==typeof e?null!==e:r(e)}},1913:function(e){e.exports=!1},2190:function(e,t,n){var r=n(5005),o=n(614),i=n(7976),s=n(3307),a=Object;e.exports=s?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return o(t)&&i(t.prototype,a(e))}},6244:function(e,t,n){var r=n(7466);e.exports=function(e){return r(e.length)}},6339:function(e,t,n){var r=n(1702),o=n(7293),i=n(614),s=n(2597),a=n(9781),c=n(6530).CONFIGURABLE,u=n(2788),l=n(9909),d=l.enforce,f=l.get,h=String,p=Object.defineProperty,m=r("".slice),g=r("".replace),v=r([].join),y=a&&!o((function(){return 8!==p((function(){}),"length",{value:8}).length})),b=String(String).split("String"),_=e.exports=function(e,t,n){"Symbol("===m(h(t),0,7)&&(t="["+g(h(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!s(e,"name")||c&&e.name!==t)&&(a?p(e,"name",{value:t,configurable:!0}):e.name=t),y&&n&&s(n,"arity")&&e.length!==n.arity&&p(e,"length",{value:n.arity});try{n&&s(n,"constructor")&&n.constructor?a&&p(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(o){}var r=d(e);return s(r,"source")||(r.source=v(b,"string"==typeof t?t:"")),e};Function.prototype.toString=_((function(){return i(this)&&f(this).source||u(this)}),"toString")},4758:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},6277:function(e,t,n){var r=n(1340);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},3070:function(e,t,n){var r=n(9781),o=n(4664),i=n(3353),s=n(9670),a=n(4948),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,d="enumerable",f="configurable",h="writable";t.f=r?i?function(e,t,n){if(s(e),t=a(t),s(n),"function"===typeof e&&"prototype"===t&&"value"in n&&h in n&&!n[h]){var r=l(e,t);r&&r[h]&&(e[t]=n.value,n={configurable:f in n?n[f]:r[f],enumerable:d in n?n[d]:r[d],writable:!1})}return u(e,t,n)}:u:function(e,t,n){if(s(e),t=a(t),s(n),o)try{return u(e,t,n)}catch(r){}if("get"in n||"set"in n)throw new c("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},1236:function(e,t,n){var r=n(9781),o=n(6916),i=n(5296),s=n(9114),a=n(5656),c=n(4948),u=n(2597),l=n(4664),d=Object.getOwnPropertyDescriptor;t.f=r?d:function(e,t){if(e=a(e),t=c(t),l)try{return d(e,t)}catch(n){}if(u(e,t))return s(!o(i.f,e,t),e[t])}},8006:function(e,t,n){var r=n(6324),o=n(748),i=o.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,i)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},9518:function(e,t,n){var r=n(2597),o=n(614),i=n(7908),s=n(6200),a=n(8544),c=s("IE_PROTO"),u=Object,l=u.prototype;e.exports=a?u.getPrototypeOf:function(e){var t=i(e);if(r(t,c))return t[c];var n=t.constructor;return o(n)&&t instanceof n?n.prototype:t instanceof u?l:null}},7976:function(e,t,n){var r=n(1702);e.exports=r({}.isPrototypeOf)},6324:function(e,t,n){var r=n(1702),o=n(2597),i=n(5656),s=n(1318).indexOf,a=n(3501),c=r([].push);e.exports=function(e,t){var n,r=i(e),u=0,l=[];for(n in r)!o(a,n)&&o(r,n)&&c(l,n);while(t.length>u)o(r,n=t[u++])&&(~s(l,n)||c(l,n));return l}},5296:function(e,t){var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!n.call({1:2},1);t.f=o?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},7674:function(e,t,n){var r=n(5668),o=n(9670),i=n(6077);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.prototype,"__proto__","set"),e(n,[]),t=n instanceof Array}catch(s){}return function(n,r){return o(n),i(r),t?e(n,r):n.__proto__=r,n}}():void 0)},2140:function(e,t,n){var r=n(6916),o=n(614),i=n(111),s=TypeError;e.exports=function(e,t){var n,a;if("string"===t&&o(n=e.toString)&&!i(a=r(n,e)))return a;if(o(n=e.valueOf)&&!i(a=r(n,e)))return a;if("string"!==t&&o(n=e.toString)&&!i(a=r(n,e)))return a;throw new s("Can't convert object to primitive value")}},3887:function(e,t,n){var r=n(5005),o=n(1702),i=n(8006),s=n(5181),a=n(9670),c=o([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=i.f(a(e)),n=s.f;return n?c(t,n(e)):t}},4488:function(e,t,n){var r=n(8554),o=TypeError;e.exports=function(e){if(r(e))throw new o("Can't call method on "+e);return e}},6200:function(e,t,n){var r=n(2309),o=n(9711),i=r("keys");e.exports=function(e){return i[e]||(i[e]=o(e))}},5465:function(e,t,n){var r=n(7854),o=n(3072),i="__core-js_shared__",s=r[i]||o(i,{});e.exports=s},2309:function(e,t,n){var r=n(1913),o=n(5465);(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.33.0",mode:r?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.33.0/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(e,t,n){var r=n(7392),o=n(7293),i=n(7854),s=i.String;e.exports=!!Object.getOwnPropertySymbols&&!o((function(){var e=Symbol("symbol detection");return!s(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},1400:function(e,t,n){var r=n(9303),o=Math.max,i=Math.min;e.exports=function(e,t){var n=r(e);return n<0?o(n+t,0):i(n,t)}},4599:function(e,t,n){var r=n(7593),o=TypeError;e.exports=function(e){var t=r(e,"number");if("number"==typeof t)throw new o("Can't convert number to bigint");return BigInt(t)}},5656:function(e,t,n){var r=n(8361),o=n(4488);e.exports=function(e){return r(o(e))}},9303:function(e,t,n){var r=n(4758);e.exports=function(e){var t=+e;return t!==t||0===t?0:r(t)}},7466:function(e,t,n){var r=n(9303),o=Math.min;e.exports=function(e){return e>0?o(r(e),9007199254740991):0}},7908:function(e,t,n){var r=n(4488),o=Object;e.exports=function(e){return o(r(e))}},7593:function(e,t,n){var r=n(6916),o=n(111),i=n(2190),s=n(8173),a=n(2140),c=n(5112),u=TypeError,l=c("toPrimitive");e.exports=function(e,t){if(!o(e)||i(e))return e;var n,c=s(e,l);if(c){if(void 0===t&&(t="default"),n=r(c,e,t),!o(n)||i(n))return n;throw new u("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},4948:function(e,t,n){var r=n(7593),o=n(2190);e.exports=function(e){var t=r(e,"string");return o(t)?t:t+""}},1694:function(e,t,n){var r=n(5112),o=r("toStringTag"),i={};i[o]="z",e.exports="[object z]"===String(i)},1340:function(e,t,n){var r=n(648),o=String;e.exports=function(e){if("Symbol"===r(e))throw new TypeError("Cannot convert a Symbol value to a string");return o(e)}},6330:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},9711:function(e,t,n){var r=n(1702),o=0,i=Math.random(),s=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+s(++o+i,36)}},3307:function(e,t,n){var r=n(6293);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(e,t,n){var r=n(9781),o=n(7293);e.exports=r&&o((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},8053:function(e){var t=TypeError;e.exports=function(e,n){if(e<n)throw new t("Not enough arguments");return e}},4811:function(e,t,n){var r=n(7854),o=n(614),i=r.WeakMap;e.exports=o(i)&&/native code/.test(String(i))},5112:function(e,t,n){var r=n(7854),o=n(2309),i=n(2597),s=n(9711),a=n(6293),c=n(3307),u=r.Symbol,l=o("wks"),d=c?u["for"]||u:u&&u.withoutSetter||s;e.exports=function(e){return i(l,e)||(l[e]=a&&i(u,e)?u[e]:d("Symbol."+e)),l[e]}},7658:function(e,t,n){var r=n(2109),o=n(7908),i=n(6244),s=n(3658),a=n(7207),c=n(7293),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},d=u||!l();r({target:"Array",proto:!0,arity:1,forced:d},{push:function(e){var t=o(this),n=i(t),r=arguments.length;a(n+r);for(var c=0;c<r;c++)t[n]=arguments[c],n++;return s(t,n),n}})},541:function(e,t,n){var r=n(2109),o=n(7908),i=n(6244),s=n(3658),a=n(5117),c=n(7207),u=1!==[].unshift(0),l=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}},d=u||!l();r({target:"Array",proto:!0,arity:1,forced:d},{unshift:function(e){var t=o(this),n=i(t),r=arguments.length;if(r){c(n+r);var u=n;while(u--){var l=u+r;u in t?t[l]=t[u]:a(t,l)}for(var d=0;d<r;d++)t[d]=arguments[d]}return s(t,n+r)}})},1439:function(e,t,n){var r=n(1843),o=n(260),i=o.aTypedArray,s=o.exportTypedArrayMethod,a=o.getTypedArrayConstructor;s("toReversed",(function(){return r(i(this),a(this))}))},7585:function(e,t,n){var r=n(260),o=n(1702),i=n(9662),s=n(7745),a=r.aTypedArray,c=r.getTypedArrayConstructor,u=r.exportTypedArrayMethod,l=o(r.TypedArrayPrototype.sort);u("toSorted",(function(e){void 0!==e&&i(e);var t=a(this),n=s(c(t),t);return l(n,e)}))},5315:function(e,t,n){var r=n(1572),o=n(260),i=n(4067),s=n(9303),a=n(4599),c=o.aTypedArray,u=o.getTypedArrayConstructor,l=o.exportTypedArrayMethod,d=!!function(){try{new Int8Array(1)["with"](2,{valueOf:function(){throw 8}})}catch(e){return 8===e}}();l("with",{with:function(e,t){var n=c(this),o=s(e),l=i(n)?a(t):+t;return r(n,u(n),o,l)}}["with"],!d)},2801:function(e,t,n){var r=n(2109),o=n(7854),i=n(5005),s=n(9114),a=n(3070).f,c=n(2597),u=n(5787),l=n(9587),d=n(6277),f=n(3678),h=n(1060),p=n(9781),m=n(1913),g="DOMException",v=i("Error"),y=i(g),b=function(){u(this,_);var e=arguments.length,t=d(e<1?void 0:arguments[0]),n=d(e<2?void 0:arguments[1],"Error"),r=new y(t,n),o=new v(t);return o.name=g,a(r,"stack",s(1,h(o.stack,1))),l(r,this,b),r},_=b.prototype=y.prototype,w="stack"in new v(g),E="stack"in new y(1,2),I=y&&p&&Object.getOwnPropertyDescriptor(o,g),S=!!I&&!(I.writable&&I.configurable),T=w&&!S&&!E;r({global:!0,constructor:!0,forced:m||T},{DOMException:T?b:y});var O=i(g),k=O.prototype;if(k.constructor!==O)for(var R in m||a(k,"constructor",s(1,O)),f)if(c(f,R)){var C=f[R],A=C.s;c(O,A)||a(O,A,s(6,C.c))}},6229:function(e,t,n){var r=n(8052),o=n(1702),i=n(1340),s=n(8053),a=URLSearchParams,c=a.prototype,u=o(c.append),l=o(c["delete"]),d=o(c.forEach),f=o([].push),h=new a("a=1&a=2&b=3");h["delete"]("a",1),h["delete"]("b",void 0),h+""!=="a=2"&&r(c,"delete",(function(e){var t=arguments.length,n=t<2?void 0:arguments[1];if(t&&void 0===n)return l(this,e);var r=[];d(this,(function(e,t){f(r,{key:t,value:e})})),s(t,1);var o,a=i(e),c=i(n),h=0,p=0,m=!1,g=r.length;while(h<g)o=r[h++],m||o.key===a?(m=!0,l(this,o.key)):p++;while(p<g)o=r[p++],o.key===a&&o.value===c||u(this,o.key,o.value)}),{enumerable:!0,unsafe:!0})},7330:function(e,t,n){var r=n(8052),o=n(1702),i=n(1340),s=n(8053),a=URLSearchParams,c=a.prototype,u=o(c.getAll),l=o(c.has),d=new a("a=1");!d.has("a",2)&&d.has("a",void 0)||r(c,"has",(function(e){var t=arguments.length,n=t<2?void 0:arguments[1];if(t&&void 0===n)return l(this,e);var r=u(this,e);s(t,1);var o=i(n),a=0;while(a<r.length)if(r[a++]===o)return!0;return!1}),{enumerable:!0,unsafe:!0})},2062:function(e,t,n){var r=n(9781),o=n(1702),i=n(7045),s=URLSearchParams.prototype,a=o(s.forEach);r&&!("size"in s)&&i(s,"size",{get:function(){var e=0;return a(this,(function(){e++})),e},configurable:!0,enumerable:!0})},223:function(e,t,n){n.d(t,{BH:function(){return S},L:function(){return a},LL:function(){return k},Pz:function(){return I},ZR:function(){return O},aH:function(){return E},b$:function(){return f},eu:function(){return m},hl:function(){return p},m9:function(){return B},ne:function(){return M},pd:function(){return L},q4:function(){return w},ru:function(){return d},tV:function(){return c},uI:function(){return l},vZ:function(){return P},w1:function(){return h},xO:function(){return x},xb:function(){return A},z$:function(){return u},zd:function(){return D}});n(2801),n(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=63&o|128):55296===(64512&o)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(o=65536+((1023&o)<<10)+(1023&e.charCodeAt(++r)),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=63&o|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=63&o|128)}return t},o=function(e){const t=[];let n=0,r=0;while(n<e.length){const o=e[n++];if(o<128)t[r++]=String.fromCharCode(o);else if(o>191&&o<224){const i=e[n++];t[r++]=String.fromCharCode((31&o)<<6|63&i)}else if(o>239&&o<365){const i=e[n++],s=e[n++],a=e[n++],c=((7&o)<<18|(63&i)<<12|(63&s)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const i=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&o)<<12|(63&i)<<6|63&s)}}return t.join("")},i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<e.length;o+=3){const t=e[o],i=o+1<e.length,s=i?e[o+1]:0,a=o+2<e.length,c=a?e[o+2]:0,u=t>>2,l=(3&t)<<4|s>>4;let d=(15&s)<<2|c>>6,f=63&c;a||(f=64,i||(d=64)),r.push(n[u],n[l],n[d],n[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):o(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<e.length;){const t=n[e.charAt(o++)],i=o<e.length,s=i?n[e.charAt(o)]:0;++o;const a=o<e.length,c=a?n[e.charAt(o)]:64;++o;const u=o<e.length,l=u?n[e.charAt(o)]:64;if(++o,null==t||null==s||null==c||null==l)throw Error();const d=t<<2|s>>4;if(r.push(d),64!==c){const e=s<<4&240|c>>2;if(r.push(e),64!==l){const e=c<<6&192|l;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},s=function(e){const t=r(e);return i.encodeByteArray(t,!0)},a=function(e){return s(e).replace(/\./g,"")},c=function(e){try{return i.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function l(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(u())}function d(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function f(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function h(){const e=u();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function p(){try{return"object"===typeof indexedDB}catch(e){return!1}}function m(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var e;t((null===(e=o.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}function g(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v=()=>g().__FIREBASE_DEFAULTS__,y=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",BASE_URL:"/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},b=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&c(e[1]);return t&&JSON.parse(t)},_=()=>{try{return v()||y()||b()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},w=e=>{var t,n;return null===(n=null===(t=_())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},E=()=>{var e;return null===(e=_())||void 0===e?void 0:e.config},I=e=>{var t;return null===(t=_())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class S{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const T="FirebaseError";class O extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=T,Object.setPrototypeOf(this,O.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,k.prototype.create)}}class k{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,o=this.errors[e],i=o?R(o,n):"Error",s=`${this.serviceName}: ${i} (${r}).`,a=new O(r,s,n);return a}}function R(e,t){return e.replace(C,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const C=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function P(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const o of n){if(!r.includes(o))return!1;const n=e[o],i=t[o];if(N(n)&&N(i)){if(!P(n,i))return!1}else if(n!==i)return!1}for(const o of r)if(!n.includes(o))return!1;return!0}function N(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function x(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function D(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function L(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(e,t){const n=new U(e,t);return n.subscribe.bind(n)}class U{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=j(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=F),void 0===r.error&&(r.error=F),void 0===r.complete&&(r.complete=F);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),o}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function j(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function F(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function B(e){return e&&e._delegate?e._delegate:e}},4870:function(e,t,n){n.d(t,{Bj:function(){return i},Fl:function(){return We},IU:function(){return Ae},Jd:function(){return S},PG:function(){return Oe},SU:function(){return $e},Um:function(){return Ie},WL:function(){return He},X$:function(){return R},X3:function(){return Ce},XI:function(){return je},Xl:function(){return Pe},dq:function(){return Me},iH:function(){return Ue},j:function(){return O},lk:function(){return T},nZ:function(){return a},qj:function(){return Ee},qq:function(){return _},yT:function(){return Re}});n(7658);var r=n(7139);let o;class i{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=o,!e&&o&&(this.index=(o.scopes||(o.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=o;try{return o=this,e()}finally{o=t}}else 0}on(){o=this}off(){o=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0,this._active=!1}}}function s(e,t=o){t&&t.active&&t.effects.push(e)}function a(){return o}const c=e=>{const t=new Set(e);return t.w=0,t.n=0,t},u=e=>(e.w&m)>0,l=e=>(e.n&m)>0,d=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=m},f=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const o=t[r];u(o)&&!l(o)?o.delete(e):t[n++]=o,o.w&=~m,o.n&=~m}t.length=n}},h=new WeakMap;let p=0,m=1;const g=30;let v;const y=Symbol(""),b=Symbol("");class _{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,s(this,n)}run(){if(!this.active)return this.fn();let e=v,t=E;while(e){if(e===this)return;e=e.parent}try{return this.parent=v,v=this,E=!0,m=1<<++p,p<=g?d(this):w(this),this.fn()}finally{p<=g&&f(this),m=1<<--p,v=this.parent,E=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){v===this?this.deferStop=!0:this.active&&(w(this),this.onStop&&this.onStop(),this.active=!1)}}function w(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let E=!0;const I=[];function S(){I.push(E),E=!1}function T(){const e=I.pop();E=void 0===e||e}function O(e,t,n){if(E&&v){let t=h.get(e);t||h.set(e,t=new Map);let r=t.get(n);r||t.set(n,r=c());const o=void 0;k(r,o)}}function k(e,t){let n=!1;p<=g?l(e)||(e.n|=m,n=!u(e)):n=!e.has(v),n&&(e.add(v),v.deps.push(e))}function R(e,t,n,o,i,s){const a=h.get(e);if(!a)return;let u=[];if("clear"===t)u=[...a.values()];else if("length"===n&&(0,r.kJ)(e)){const e=Number(o);a.forEach(((t,n)=>{("length"===n||n>=e)&&u.push(t)}))}else switch(void 0!==n&&u.push(a.get(n)),t){case"add":(0,r.kJ)(e)?(0,r.S0)(n)&&u.push(a.get("length")):(u.push(a.get(y)),(0,r._N)(e)&&u.push(a.get(b)));break;case"delete":(0,r.kJ)(e)||(u.push(a.get(y)),(0,r._N)(e)&&u.push(a.get(b)));break;case"set":(0,r._N)(e)&&u.push(a.get(y));break}if(1===u.length)u[0]&&C(u[0]);else{const e=[];for(const t of u)t&&e.push(...t);C(c(e))}}function C(e,t){const n=(0,r.kJ)(e)?e:[...e];for(const r of n)r.computed&&A(r,t);for(const r of n)r.computed||A(r,t)}function A(e,t){(e!==v||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const P=(0,r.fY)("__proto__,__v_isRef,__isVue"),N=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(r.yk)),x=F(),D=F(!1,!0),L=F(!0),M=U();function U(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=Ae(this);for(let t=0,o=this.length;t<o;t++)O(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(Ae)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){S();const n=Ae(this)[t].apply(this,e);return T(),n}})),e}function j(e){const t=Ae(this);return O(t,"has",e),t.hasOwnProperty(e)}function F(e=!1,t=!1){return function(n,o,i){if("__v_isReactive"===o)return!e;if("__v_isReadonly"===o)return e;if("__v_isShallow"===o)return t;if("__v_raw"===o&&i===(e?t?be:ye:t?ve:ge).get(n))return n;const s=(0,r.kJ)(n);if(!e){if(s&&(0,r.RI)(M,o))return Reflect.get(M,o,i);if("hasOwnProperty"===o)return j}const a=Reflect.get(n,o,i);return((0,r.yk)(o)?N.has(o):P(o))?a:(e||O(n,"get",o),t?a:Me(a)?s&&(0,r.S0)(o)?a:a.value:(0,r.Kn)(a)?e?Se(a):Ee(a):a)}}const B=V(),$=V(!0);function V(e=!1){return function(t,n,o,i){let s=t[n];if(ke(s)&&Me(s)&&!Me(o))return!1;if(!e&&(Re(o)||ke(o)||(s=Ae(s),o=Ae(o)),!(0,r.kJ)(t)&&Me(s)&&!Me(o)))return s.value=o,!0;const a=(0,r.kJ)(t)&&(0,r.S0)(n)?Number(n)<t.length:(0,r.RI)(t,n),c=Reflect.set(t,n,o,i);return t===Ae(i)&&(a?(0,r.aU)(o,s)&&R(t,"set",n,o,s):R(t,"add",n,o)),c}}function H(e,t){const n=(0,r.RI)(e,t),o=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&R(e,"delete",t,void 0,o),i}function z(e,t){const n=Reflect.has(e,t);return(0,r.yk)(t)&&N.has(t)||O(e,"has",t),n}function W(e){return O(e,"iterate",(0,r.kJ)(e)?"length":y),Reflect.ownKeys(e)}const q={get:x,set:B,deleteProperty:H,has:z,ownKeys:W},J={get:L,set(e,t){return!0},deleteProperty(e,t){return!0}},K=(0,r.l7)({},q,{get:D,set:$}),G=e=>e,X=e=>Reflect.getPrototypeOf(e);function Y(e,t,n=!1,r=!1){e=e["__v_raw"];const o=Ae(e),i=Ae(t);n||(t!==i&&O(o,"get",t),O(o,"get",i));const{has:s}=X(o),a=r?G:n?xe:Ne;return s.call(o,t)?a(e.get(t)):s.call(o,i)?a(e.get(i)):void(e!==o&&e.get(t))}function Z(e,t=!1){const n=this["__v_raw"],r=Ae(n),o=Ae(e);return t||(e!==o&&O(r,"has",e),O(r,"has",o)),e===o?n.has(e):n.has(e)||n.has(o)}function Q(e,t=!1){return e=e["__v_raw"],!t&&O(Ae(e),"iterate",y),Reflect.get(e,"size",e)}function ee(e){e=Ae(e);const t=Ae(this),n=X(t),r=n.has.call(t,e);return r||(t.add(e),R(t,"add",e,e)),this}function te(e,t){t=Ae(t);const n=Ae(this),{has:o,get:i}=X(n);let s=o.call(n,e);s||(e=Ae(e),s=o.call(n,e));const a=i.call(n,e);return n.set(e,t),s?(0,r.aU)(t,a)&&R(n,"set",e,t,a):R(n,"add",e,t),this}function ne(e){const t=Ae(this),{has:n,get:r}=X(t);let o=n.call(t,e);o||(e=Ae(e),o=n.call(t,e));const i=r?r.call(t,e):void 0,s=t.delete(e);return o&&R(t,"delete",e,void 0,i),s}function re(){const e=Ae(this),t=0!==e.size,n=void 0,r=e.clear();return t&&R(e,"clear",void 0,void 0,n),r}function oe(e,t){return function(n,r){const o=this,i=o["__v_raw"],s=Ae(i),a=t?G:e?xe:Ne;return!e&&O(s,"iterate",y),i.forEach(((e,t)=>n.call(r,a(e),a(t),o)))}}function ie(e,t,n){return function(...o){const i=this["__v_raw"],s=Ae(i),a=(0,r._N)(s),c="entries"===e||e===Symbol.iterator&&a,u="keys"===e&&a,l=i[e](...o),d=n?G:t?xe:Ne;return!t&&O(s,"iterate",u?b:y),{next(){const{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:c?[d(e[0]),d(e[1])]:d(e),done:t}},[Symbol.iterator](){return this}}}}function se(e){return function(...t){return"delete"!==e&&this}}function ae(){const e={get(e){return Y(this,e)},get size(){return Q(this)},has:Z,add:ee,set:te,delete:ne,clear:re,forEach:oe(!1,!1)},t={get(e){return Y(this,e,!1,!0)},get size(){return Q(this)},has:Z,add:ee,set:te,delete:ne,clear:re,forEach:oe(!1,!0)},n={get(e){return Y(this,e,!0)},get size(){return Q(this,!0)},has(e){return Z.call(this,e,!0)},add:se("add"),set:se("set"),delete:se("delete"),clear:se("clear"),forEach:oe(!0,!1)},r={get(e){return Y(this,e,!0,!0)},get size(){return Q(this,!0)},has(e){return Z.call(this,e,!0)},add:se("add"),set:se("set"),delete:se("delete"),clear:se("clear"),forEach:oe(!0,!0)},o=["keys","values","entries",Symbol.iterator];return o.forEach((o=>{e[o]=ie(o,!1,!1),n[o]=ie(o,!0,!1),t[o]=ie(o,!1,!0),r[o]=ie(o,!0,!0)})),[e,n,t,r]}const[ce,ue,le,de]=ae();function fe(e,t){const n=t?e?de:le:e?ue:ce;return(t,o,i)=>"__v_isReactive"===o?!e:"__v_isReadonly"===o?e:"__v_raw"===o?t:Reflect.get((0,r.RI)(n,o)&&o in t?n:t,o,i)}const he={get:fe(!1,!1)},pe={get:fe(!1,!0)},me={get:fe(!0,!1)};const ge=new WeakMap,ve=new WeakMap,ye=new WeakMap,be=new WeakMap;function _e(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function we(e){return e["__v_skip"]||!Object.isExtensible(e)?0:_e((0,r.W7)(e))}function Ee(e){return ke(e)?e:Te(e,!1,q,he,ge)}function Ie(e){return Te(e,!1,K,pe,ve)}function Se(e){return Te(e,!0,J,me,ye)}function Te(e,t,n,o,i){if(!(0,r.Kn)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const s=i.get(e);if(s)return s;const a=we(e);if(0===a)return e;const c=new Proxy(e,2===a?o:n);return i.set(e,c),c}function Oe(e){return ke(e)?Oe(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function ke(e){return!(!e||!e["__v_isReadonly"])}function Re(e){return!(!e||!e["__v_isShallow"])}function Ce(e){return Oe(e)||ke(e)}function Ae(e){const t=e&&e["__v_raw"];return t?Ae(t):e}function Pe(e){return(0,r.Nj)(e,"__v_skip",!0),e}const Ne=e=>(0,r.Kn)(e)?Ee(e):e,xe=e=>(0,r.Kn)(e)?Se(e):e;function De(e){E&&v&&(e=Ae(e),k(e.dep||(e.dep=c())))}function Le(e,t){e=Ae(e);const n=e.dep;n&&C(n)}function Me(e){return!(!e||!0!==e.__v_isRef)}function Ue(e){return Fe(e,!1)}function je(e){return Fe(e,!0)}function Fe(e,t){return Me(e)?e:new Be(e,t)}class Be{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ae(e),this._value=t?e:Ne(e)}get value(){return De(this),this._value}set value(e){const t=this.__v_isShallow||Re(e)||ke(e);e=t?e:Ae(e),(0,r.aU)(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Ne(e),Le(this,e))}}function $e(e){return Me(e)?e.value:e}const Ve={get:(e,t,n)=>$e(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const o=e[t];return Me(o)&&!Me(n)?(o.value=n,!0):Reflect.set(e,t,n,r)}};function He(e){return Oe(e)?e:new Proxy(e,Ve)}class ze{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this["__v_isReadonly"]=!1,this._dirty=!0,this.effect=new _(e,(()=>{this._dirty||(this._dirty=!0,Le(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const e=Ae(this);return De(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function We(e,t,n=!1){let o,i;const s=(0,r.mf)(e);s?(o=e,i=r.dG):(o=e.get,i=e.set);const a=new ze(o,i,s||!i,n);return a}},3396:function(e,t,n){n.d(t,{$d:function(){return s},FN:function(){return pn},Fl:function(){return xn},HY:function(){return xt},JJ:function(){return st},Ko:function(){return Le},P$:function(){return te},Q6:function(){return ae},U2:function(){return re},Us:function(){return kt},Wm:function(){return Zt},Y3:function(){return y},Y8:function(){return Y},YP:function(){return W},_:function(){return Yt},aZ:function(){return ce},f3:function(){return at},h:function(){return Dn},iD:function(){return zt},ic:function(){return Ie},kq:function(){return rn},nJ:function(){return Q},nK:function(){return se},up:function(){return Pe},w5:function(){return L},wg:function(){return Ft}});n(7658),n(541);var r=n(4870),o=n(7139);function i(e,t,n,r){let o;try{o=r?e(...r):e()}catch(i){a(i,t,n)}return o}function s(e,t,n,r){if((0,o.mf)(e)){const s=i(e,t,n,r);return s&&(0,o.tI)(s)&&s.catch((e=>{a(e,t,n)})),s}const c=[];for(let o=0;o<e.length;o++)c.push(s(e[o],t,n,r));return c}function a(e,t,n,r=!0){const o=t?t.vnode:null;if(t){let r=t.parent;const o=t.proxy,s=n;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,o,s))return;r=r.parent}const a=t.appContext.config.errorHandler;if(a)return void i(a,null,10,[e,o,s])}c(e,n,o,r)}function c(e,t,n,r=!0){console.error(e)}let u=!1,l=!1;const d=[];let f=0;const h=[];let p=null,m=0;const g=Promise.resolve();let v=null;function y(e){const t=v||g;return e?t.then(this?e.bind(this):e):t}function b(e){let t=f+1,n=d.length;while(t<n){const r=t+n>>>1,o=O(d[r]);o<e?t=r+1:n=r}return t}function _(e){d.length&&d.includes(e,u&&e.allowRecurse?f+1:f)||(null==e.id?d.push(e):d.splice(b(e.id),0,e),w())}function w(){u||l||(l=!0,v=g.then(R))}function E(e){const t=d.indexOf(e);t>f&&d.splice(t,1)}function I(e){(0,o.kJ)(e)?h.push(...e):p&&p.includes(e,e.allowRecurse?m+1:m)||h.push(e),w()}function S(e,t=(u?f+1:0)){for(0;t<d.length;t++){const e=d[t];e&&e.pre&&(d.splice(t,1),t--,e())}}function T(e){if(h.length){const e=[...new Set(h)];if(h.length=0,p)return void p.push(...e);for(p=e,p.sort(((e,t)=>O(e)-O(t))),m=0;m<p.length;m++)p[m]();p=null,m=0}}const O=e=>null==e.id?1/0:e.id,k=(e,t)=>{const n=O(e)-O(t);if(0===n){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function R(e){l=!1,u=!0,d.sort(k);o.dG;try{for(f=0;f<d.length;f++){const e=d[f];e&&!1!==e.active&&i(e,null,14)}}finally{f=0,d.length=0,T(e),u=!1,v=null,(d.length||h.length)&&R(e)}}function C(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||o.kT;let i=n;const a=t.startsWith("update:"),c=a&&t.slice(7);if(c&&c in r){const e=`${"modelValue"===c?"model":c}Modifiers`,{number:t,trim:s}=r[e]||o.kT;s&&(i=n.map((e=>(0,o.HD)(e)?e.trim():e))),t&&(i=n.map(o.h5))}let u;let l=r[u=(0,o.hR)(t)]||r[u=(0,o.hR)((0,o._A)(t))];!l&&a&&(l=r[u=(0,o.hR)((0,o.rs)(t))]),l&&s(l,e,6,i);const d=r[u+"Once"];if(d){if(e.emitted){if(e.emitted[u])return}else e.emitted={};e.emitted[u]=!0,s(d,e,6,i)}}function A(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(void 0!==i)return i;const s=e.emits;let a={},c=!1;if(!(0,o.mf)(e)){const r=e=>{const n=A(e,t,!0);n&&(c=!0,(0,o.l7)(a,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return s||c?((0,o.kJ)(s)?s.forEach((e=>a[e]=null)):(0,o.l7)(a,s),(0,o.Kn)(e)&&r.set(e,a),a):((0,o.Kn)(e)&&r.set(e,null),null)}function P(e,t){return!(!e||!(0,o.F7)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,o.RI)(e,t[0].toLowerCase()+t.slice(1))||(0,o.RI)(e,(0,o.rs)(t))||(0,o.RI)(e,t))}let N=null,x=null;function D(e){const t=N;return N=e,x=e&&e.type.__scopeId||null,t}function L(e,t=N,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&Vt(-1);const o=D(t);let i;try{i=e(...n)}finally{D(o),r._d&&Vt(1)}return i};return r._n=!0,r._c=!0,r._d=!0,r}function M(e){const{type:t,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[c],slots:u,attrs:l,emit:d,render:f,renderCache:h,data:p,setupState:m,ctx:g,inheritAttrs:v}=e;let y,b;const _=D(e);try{if(4&n.shapeFlag){const e=i||r;y=on(f.call(e,e,h,s,m,p,g)),b=l}else{const e=t;0,y=on(e.length>1?e(s,{attrs:l,slots:u,emit:d}):e(s,null)),b=t.props?l:U(l)}}catch(E){Ut.length=0,a(E,e,1),y=Zt(Lt)}let w=y;if(b&&!1!==v){const e=Object.keys(b),{shapeFlag:t}=w;e.length&&7&t&&(c&&e.some(o.tR)&&(b=j(b,c)),w=tn(w,b))}return n.dirs&&(w=tn(w),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&(w.transition=n.transition),y=w,D(_),y}const U=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,o.F7)(n))&&((t||(t={}))[n]=e[n]);return t},j=(e,t)=>{const n={};for(const r in e)(0,o.tR)(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function F(e,t,n){const{props:r,children:o,component:i}=e,{props:s,children:a,patchFlag:c}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!o&&!a||a&&a.$stable)||r!==s&&(r?!s||B(r,s,u):!!s);if(1024&c)return!0;if(16&c)return r?B(r,s,u):!!s;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(s[n]!==r[n]&&!P(u,n))return!0}}return!1}function B(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let o=0;o<r.length;o++){const i=r[o];if(t[i]!==e[i]&&!P(n,i))return!0}return!1}function $({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const V=e=>e.__isSuspense;function H(e,t){t&&t.pendingBranch?(0,o.kJ)(e)?t.effects.push(...e):t.effects.push(e):I(e)}const z={};function W(e,t,n){return q(e,t,n)}function q(e,t,{immediate:n,deep:a,flush:c,onTrack:u,onTrigger:l}=o.kT){var d;const f=(0,r.nZ)()===(null==(d=hn)?void 0:d.scope)?hn:null;let h,p,m=!1,g=!1;if((0,r.dq)(e)?(h=()=>e.value,m=(0,r.yT)(e)):(0,r.PG)(e)?(h=()=>e,a=!0):(0,o.kJ)(e)?(g=!0,m=e.some((e=>(0,r.PG)(e)||(0,r.yT)(e))),h=()=>e.map((e=>(0,r.dq)(e)?e.value:(0,r.PG)(e)?G(e):(0,o.mf)(e)?i(e,f,2):void 0))):h=(0,o.mf)(e)?t?()=>i(e,f,2):()=>{if(!f||!f.isUnmounted)return p&&p(),s(e,f,3,[y])}:o.dG,t&&a){const e=h;h=()=>G(e())}let v,y=e=>{p=I.onStop=()=>{i(e,f,4)}};if(In){if(y=o.dG,t?n&&s(t,f,3,[h(),g?[]:void 0,y]):h(),"sync"!==c)return o.dG;{const e=Mn();v=e.__watcherHandles||(e.__watcherHandles=[])}}let b=g?new Array(e.length).fill(z):z;const w=()=>{if(I.active)if(t){const e=I.run();(a||m||(g?e.some(((e,t)=>(0,o.aU)(e,b[t]))):(0,o.aU)(e,b)))&&(p&&p(),s(t,f,3,[e,b===z?void 0:g&&b[0]===z?[]:b,y]),b=e)}else I.run()};let E;w.allowRecurse=!!t,"sync"===c?E=w:"post"===c?E=()=>Ot(w,f&&f.suspense):(w.pre=!0,f&&(w.id=f.uid),E=()=>_(w));const I=new r.qq(h,E);t?n?w():b=I.run():"post"===c?Ot(I.run.bind(I),f&&f.suspense):I.run();const S=()=>{I.stop(),f&&f.scope&&(0,o.Od)(f.scope.effects,I)};return v&&v.push(S),S}function J(e,t,n){const r=this.proxy,i=(0,o.HD)(e)?e.includes(".")?K(r,e):()=>r[e]:e.bind(r,r);let s;(0,o.mf)(t)?s=t:(s=t.handler,n=t);const a=hn;yn(this);const c=q(i,s.bind(r),n);return a?yn(a):bn(),c}function K(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function G(e,t){if(!(0,o.Kn)(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),(0,r.dq)(e))G(e.value,t);else if((0,o.kJ)(e))for(let n=0;n<e.length;n++)G(e[n],t);else if((0,o.DM)(e)||(0,o._N)(e))e.forEach((e=>{G(e,t)}));else if((0,o.PO)(e))for(const n in e)G(e[n],t);return e}function X(e,t,n,o){const i=e.dirs,a=t&&t.dirs;for(let c=0;c<i.length;c++){const u=i[c];a&&(u.oldValue=a[c].value);let l=u.dir[o];l&&((0,r.Jd)(),s(l,n,8,[e.el,u,e,t]),(0,r.lk)())}}function Y(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return we((()=>{e.isMounted=!0})),Se((()=>{e.isUnmounting=!0})),e}const Z=[Function,Array],Q={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Z,onEnter:Z,onAfterEnter:Z,onEnterCancelled:Z,onBeforeLeave:Z,onLeave:Z,onAfterLeave:Z,onLeaveCancelled:Z,onBeforeAppear:Z,onAppear:Z,onAfterAppear:Z,onAppearCancelled:Z},ee={name:"BaseTransition",props:Q,setup(e,{slots:t}){const n=pn(),o=Y();let i;return()=>{const s=t.default&&ae(t.default(),!0);if(!s||!s.length)return;let a=s[0];if(s.length>1){let e=!1;for(const t of s)if(t.type!==Lt){0,a=t,e=!0;break}}const c=(0,r.IU)(e),{mode:u}=c;if(o.isLeaving)return oe(a);const l=ie(a);if(!l)return oe(a);const d=re(l,c,o,n);se(l,d);const f=n.subTree,h=f&&ie(f);let p=!1;const{getTransitionKey:m}=l.type;if(m){const e=m();void 0===i?i=e:e!==i&&(i=e,p=!0)}if(h&&h.type!==Lt&&(!Jt(l,h)||p)){const e=re(h,c,o,n);if(se(h,e),"out-in"===u)return o.isLeaving=!0,e.afterLeave=()=>{o.isLeaving=!1,!1!==n.update.active&&n.update()},oe(a);"in-out"===u&&l.type!==Lt&&(e.delayLeave=(e,t,n)=>{const r=ne(o,h);r[String(h.key)]=h,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete d.delayedLeave},d.delayedLeave=n})}return a}}},te=ee;function ne(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function re(e,t,n,r){const{appear:i,mode:a,persisted:c=!1,onBeforeEnter:u,onEnter:l,onAfterEnter:d,onEnterCancelled:f,onBeforeLeave:h,onLeave:p,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:v,onAppear:y,onAfterAppear:b,onAppearCancelled:_}=t,w=String(e.key),E=ne(n,e),I=(e,t)=>{e&&s(e,r,9,t)},S=(e,t)=>{const n=t[1];I(e,t),(0,o.kJ)(e)?e.every((e=>e.length<=1))&&n():e.length<=1&&n()},T={mode:a,persisted:c,beforeEnter(t){let r=u;if(!n.isMounted){if(!i)return;r=v||u}t._leaveCb&&t._leaveCb(!0);const o=E[w];o&&Jt(e,o)&&o.el._leaveCb&&o.el._leaveCb(),I(r,[t])},enter(e){let t=l,r=d,o=f;if(!n.isMounted){if(!i)return;t=y||l,r=b||d,o=_||f}let s=!1;const a=e._enterCb=t=>{s||(s=!0,I(t?o:r,[e]),T.delayedLeave&&T.delayedLeave(),e._enterCb=void 0)};t?S(t,[e,a]):a()},leave(t,r){const o=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();I(h,[t]);let i=!1;const s=t._leaveCb=n=>{i||(i=!0,r(),I(n?g:m,[t]),t._leaveCb=void 0,E[o]===e&&delete E[o])};E[o]=e,p?S(p,[t,s]):s()},clone(e){return re(e,t,n,r)}};return T}function oe(e){if(le(e))return e=tn(e),e.children=null,e}function ie(e){return le(e)?e.children?e.children[0]:void 0:e}function se(e,t){6&e.shapeFlag&&e.component?se(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ae(e,t=!1,n){let r=[],o=0;for(let i=0;i<e.length;i++){let s=e[i];const a=null==n?s.key:String(n)+String(null!=s.key?s.key:i);s.type===xt?(128&s.patchFlag&&o++,r=r.concat(ae(s.children,t,a))):(t||s.type!==Lt)&&r.push(null!=a?tn(s,{key:a}):s)}if(o>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function ce(e,t){return(0,o.mf)(e)?(()=>(0,o.l7)({name:e.name},t,{setup:e}))():e}const ue=e=>!!e.type.__asyncLoader;const le=e=>e.type.__isKeepAlive;RegExp,RegExp;function de(e,t){return(0,o.kJ)(e)?e.some((e=>de(e,t))):(0,o.HD)(e)?e.split(",").includes(t):!!(0,o.Kj)(e)&&e.test(t)}function fe(e,t){pe(e,"a",t)}function he(e,t){pe(e,"da",t)}function pe(e,t,n=hn){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(ye(t,r,n),n){let e=n.parent;while(e&&e.parent)le(e.parent.vnode)&&me(r,t,n,e),e=e.parent}}function me(e,t,n,r){const i=ye(t,e,r,!0);Te((()=>{(0,o.Od)(r[t],i)}),n)}function ge(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function ve(e){return 128&e.shapeFlag?e.ssContent:e}function ye(e,t,n=hn,o=!1){if(n){const i=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;(0,r.Jd)(),yn(n);const i=s(t,n,e,o);return bn(),(0,r.lk)(),i});return o?i.unshift(a):i.push(a),a}}const be=e=>(t,n=hn)=>(!In||"sp"===e)&&ye(e,((...e)=>t(...e)),n),_e=be("bm"),we=be("m"),Ee=be("bu"),Ie=be("u"),Se=be("bum"),Te=be("um"),Oe=be("sp"),ke=be("rtg"),Re=be("rtc");function Ce(e,t=hn){ye("ec",e,t)}const Ae="components";function Pe(e,t){return xe(Ae,e,!0,t)||e}const Ne=Symbol.for("v-ndc");function xe(e,t,n=!0,r=!1){const i=N||hn;if(i){const n=i.type;if(e===Ae){const e=Pn(n,!1);if(e&&(e===t||e===(0,o._A)(t)||e===(0,o.kC)((0,o._A)(t))))return n}const s=De(i[e]||n[e],t)||De(i.appContext[e],t);return!s&&r?n:s}}function De(e,t){return e&&(e[t]||e[(0,o._A)(t)]||e[(0,o.kC)((0,o._A)(t))])}function Le(e,t,n,r){let i;const s=n&&n[r];if((0,o.kJ)(e)||(0,o.HD)(e)){i=new Array(e.length);for(let n=0,r=e.length;n<r;n++)i[n]=t(e[n],n,void 0,s&&s[n])}else if("number"===typeof e){0,i=new Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,s&&s[n])}else if((0,o.Kn)(e))if(e[Symbol.iterator])i=Array.from(e,((e,n)=>t(e,n,void 0,s&&s[n])));else{const n=Object.keys(e);i=new Array(n.length);for(let r=0,o=n.length;r<o;r++){const o=n[r];i[r]=t(e[o],o,r,s&&s[r])}}else i=[];return n&&(n[r]=i),i}const Me=e=>e?_n(e)?An(e)||e.proxy:Me(e.parent):null,Ue=(0,o.l7)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Me(e.parent),$root:e=>Me(e.root),$emit:e=>e.emit,$options:e=>qe(e),$forceUpdate:e=>e.f||(e.f=()=>_(e.update)),$nextTick:e=>e.n||(e.n=y.bind(e.proxy)),$watch:e=>J.bind(e)}),je=(e,t)=>e!==o.kT&&!e.__isScriptSetup&&(0,o.RI)(e,t),Fe={get({_:e},t){const{ctx:n,setupState:i,data:s,props:a,accessCache:c,type:u,appContext:l}=e;let d;if("$"!==t[0]){const r=c[t];if(void 0!==r)switch(r){case 1:return i[t];case 2:return s[t];case 4:return n[t];case 3:return a[t]}else{if(je(i,t))return c[t]=1,i[t];if(s!==o.kT&&(0,o.RI)(s,t))return c[t]=2,s[t];if((d=e.propsOptions[0])&&(0,o.RI)(d,t))return c[t]=3,a[t];if(n!==o.kT&&(0,o.RI)(n,t))return c[t]=4,n[t];$e&&(c[t]=0)}}const f=Ue[t];let h,p;return f?("$attrs"===t&&(0,r.j)(e,"get",t),f(e)):(h=u.__cssModules)&&(h=h[t])?h:n!==o.kT&&(0,o.RI)(n,t)?(c[t]=4,n[t]):(p=l.config.globalProperties,(0,o.RI)(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:r,setupState:i,ctx:s}=e;return je(i,t)?(i[t]=n,!0):r!==o.kT&&(0,o.RI)(r,t)?(r[t]=n,!0):!(0,o.RI)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(s[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:s}},a){let c;return!!n[a]||e!==o.kT&&(0,o.RI)(e,a)||je(t,a)||(c=s[0])&&(0,o.RI)(c,a)||(0,o.RI)(r,a)||(0,o.RI)(Ue,a)||(0,o.RI)(i.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,o.RI)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Be(e){return(0,o.kJ)(e)?e.reduce(((e,t)=>(e[t]=null,e)),{}):e}let $e=!0;function Ve(e){const t=qe(e),n=e.proxy,i=e.ctx;$e=!1,t.beforeCreate&&ze(t.beforeCreate,e,"bc");const{data:s,computed:a,methods:c,watch:u,provide:l,inject:d,created:f,beforeMount:h,mounted:p,beforeUpdate:m,updated:g,activated:v,deactivated:y,beforeDestroy:b,beforeUnmount:_,destroyed:w,unmounted:E,render:I,renderTracked:S,renderTriggered:T,errorCaptured:O,serverPrefetch:k,expose:R,inheritAttrs:C,components:A,directives:P,filters:N}=t,x=null;if(d&&He(d,i,x),c)for(const r in c){const e=c[r];(0,o.mf)(e)&&(i[r]=e.bind(n))}if(s){0;const t=s.call(n,n);0,(0,o.Kn)(t)&&(e.data=(0,r.qj)(t))}if($e=!0,a)for(const r in a){const e=a[r],t=(0,o.mf)(e)?e.bind(n,n):(0,o.mf)(e.get)?e.get.bind(n,n):o.dG;0;const s=!(0,o.mf)(e)&&(0,o.mf)(e.set)?e.set.bind(n):o.dG,c=xn({get:t,set:s});Object.defineProperty(i,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:e=>c.value=e})}if(u)for(const r in u)We(u[r],i,n,r);if(l){const e=(0,o.mf)(l)?l.call(n):l;Reflect.ownKeys(e).forEach((t=>{st(t,e[t])}))}function D(e,t){(0,o.kJ)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(f&&ze(f,e,"c"),D(_e,h),D(we,p),D(Ee,m),D(Ie,g),D(fe,v),D(he,y),D(Ce,O),D(Re,S),D(ke,T),D(Se,_),D(Te,E),D(Oe,k),(0,o.kJ)(R))if(R.length){const t=e.exposed||(e.exposed={});R.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});I&&e.render===o.dG&&(e.render=I),null!=C&&(e.inheritAttrs=C),A&&(e.components=A),P&&(e.directives=P)}function He(e,t,n=o.dG){(0,o.kJ)(e)&&(e=Ye(e));for(const i in e){const n=e[i];let s;s=(0,o.Kn)(n)?"default"in n?at(n.from||i,n.default,!0):at(n.from||i):at(n),(0,r.dq)(s)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:e=>s.value=e}):t[i]=s}}function ze(e,t,n){s((0,o.kJ)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function We(e,t,n,r){const i=r.includes(".")?K(n,r):()=>n[r];if((0,o.HD)(e)){const n=t[e];(0,o.mf)(n)&&W(i,n)}else if((0,o.mf)(e))W(i,e.bind(n));else if((0,o.Kn)(e))if((0,o.kJ)(e))e.forEach((e=>We(e,t,n,r)));else{const r=(0,o.mf)(e.handler)?e.handler.bind(n):t[e.handler];(0,o.mf)(r)&&W(i,r,e)}else 0}function qe(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:a}}=e.appContext,c=s.get(t);let u;return c?u=c:i.length||n||r?(u={},i.length&&i.forEach((e=>Je(u,e,a,!0))),Je(u,t,a)):u=t,(0,o.Kn)(t)&&s.set(t,u),u}function Je(e,t,n,r=!1){const{mixins:o,extends:i}=t;i&&Je(e,i,n,!0),o&&o.forEach((t=>Je(e,t,n,!0)));for(const s in t)if(r&&"expose"===s);else{const r=Ke[s]||n&&n[s];e[s]=r?r(e[s],t[s]):t[s]}return e}const Ke={data:Ge,props:et,emits:et,methods:Qe,computed:Qe,beforeCreate:Ze,created:Ze,beforeMount:Ze,mounted:Ze,beforeUpdate:Ze,updated:Ze,beforeDestroy:Ze,beforeUnmount:Ze,destroyed:Ze,unmounted:Ze,activated:Ze,deactivated:Ze,errorCaptured:Ze,serverPrefetch:Ze,components:Qe,directives:Qe,watch:tt,provide:Ge,inject:Xe};function Ge(e,t){return t?e?function(){return(0,o.l7)((0,o.mf)(e)?e.call(this,this):e,(0,o.mf)(t)?t.call(this,this):t)}:t:e}function Xe(e,t){return Qe(Ye(e),Ye(t))}function Ye(e){if((0,o.kJ)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ze(e,t){return e?[...new Set([].concat(e,t))]:t}function Qe(e,t){return e?(0,o.l7)(Object.create(null),e,t):t}function et(e,t){return e?(0,o.kJ)(e)&&(0,o.kJ)(t)?[...new Set([...e,...t])]:(0,o.l7)(Object.create(null),Be(e),Be(null!=t?t:{})):t}function tt(e,t){if(!e)return t;if(!t)return e;const n=(0,o.l7)(Object.create(null),e);for(const r in t)n[r]=Ze(e[r],t[r]);return n}function nt(){return{app:null,config:{isNativeTag:o.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let rt=0;function ot(e,t){return function(n,r=null){(0,o.mf)(n)||(n=(0,o.l7)({},n)),null==r||(0,o.Kn)(r)||(r=null);const i=nt();const s=new Set;let a=!1;const c=i.app={_uid:rt++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:Un,get config(){return i.config},set config(e){0},use(e,...t){return s.has(e)||(e&&(0,o.mf)(e.install)?(s.add(e),e.install(c,...t)):(0,o.mf)(e)&&(s.add(e),e(c,...t))),c},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),c},component(e,t){return t?(i.components[e]=t,c):i.components[e]},directive(e,t){return t?(i.directives[e]=t,c):i.directives[e]},mount(o,s,u){if(!a){0;const l=Zt(n,r);return l.appContext=i,s&&t?t(l,o):e(l,o,u),a=!0,c._container=o,o.__vue_app__=c,An(l.component)||l.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return i.provides[e]=t,c},runWithContext(e){it=c;try{return e()}finally{it=null}}};return c}}let it=null;function st(e,t){if(hn){let n=hn.provides;const r=hn.parent&&hn.parent.provides;r===n&&(n=hn.provides=Object.create(r)),n[e]=t}else 0}function at(e,t,n=!1){const r=hn||N;if(r||it){const i=r?null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:it._context.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&(0,o.mf)(t)?t.call(r&&r.proxy):t}else 0}function ct(e,t,n,i=!1){const s={},a={};(0,o.Nj)(a,Kt,1),e.propsDefaults=Object.create(null),lt(e,t,s,a);for(const r in e.propsOptions[0])r in s||(s[r]=void 0);n?e.props=i?s:(0,r.Um)(s):e.type.props?e.props=s:e.props=a,e.attrs=a}function ut(e,t,n,i){const{props:s,attrs:a,vnode:{patchFlag:c}}=e,u=(0,r.IU)(s),[l]=e.propsOptions;let d=!1;if(!(i||c>0)||16&c){let r;lt(e,t,s,a)&&(d=!0);for(const i in u)t&&((0,o.RI)(t,i)||(r=(0,o.rs)(i))!==i&&(0,o.RI)(t,r))||(l?!n||void 0===n[i]&&void 0===n[r]||(s[i]=dt(l,u,i,void 0,e,!0)):delete s[i]);if(a!==u)for(const e in a)t&&(0,o.RI)(t,e)||(delete a[e],d=!0)}else if(8&c){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let i=n[r];if(P(e.emitsOptions,i))continue;const c=t[i];if(l)if((0,o.RI)(a,i))c!==a[i]&&(a[i]=c,d=!0);else{const t=(0,o._A)(i);s[t]=dt(l,u,t,c,e,!1)}else c!==a[i]&&(a[i]=c,d=!0)}}d&&(0,r.X$)(e,"set","$attrs")}function lt(e,t,n,i){const[s,a]=e.propsOptions;let c,u=!1;if(t)for(let r in t){if((0,o.Gg)(r))continue;const l=t[r];let d;s&&(0,o.RI)(s,d=(0,o._A)(r))?a&&a.includes(d)?(c||(c={}))[d]=l:n[d]=l:P(e.emitsOptions,r)||r in i&&l===i[r]||(i[r]=l,u=!0)}if(a){const t=(0,r.IU)(n),i=c||o.kT;for(let r=0;r<a.length;r++){const c=a[r];n[c]=dt(s,t,c,i[c],e,!(0,o.RI)(i,c))}}return u}function dt(e,t,n,r,i,s){const a=e[n];if(null!=a){const e=(0,o.RI)(a,"default");if(e&&void 0===r){const e=a.default;if(a.type!==Function&&!a.skipFactory&&(0,o.mf)(e)){const{propsDefaults:o}=i;n in o?r=o[n]:(yn(i),r=o[n]=e.call(null,t),bn())}else r=e}a[0]&&(s&&!e?r=!1:!a[1]||""!==r&&r!==(0,o.rs)(n)||(r=!0))}return r}function ft(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const s=e.props,a={},c=[];let u=!1;if(!(0,o.mf)(e)){const r=e=>{u=!0;const[n,r]=ft(e,t,!0);(0,o.l7)(a,n),r&&c.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!s&&!u)return(0,o.Kn)(e)&&r.set(e,o.Z6),o.Z6;if((0,o.kJ)(s))for(let d=0;d<s.length;d++){0;const e=(0,o._A)(s[d]);ht(e)&&(a[e]=o.kT)}else if(s){0;for(const e in s){const t=(0,o._A)(e);if(ht(t)){const n=s[e],r=a[t]=(0,o.kJ)(n)||(0,o.mf)(n)?{type:n}:(0,o.l7)({},n);if(r){const e=gt(Boolean,r.type),n=gt(String,r.type);r[0]=e>-1,r[1]=n<0||e<n,(e>-1||(0,o.RI)(r,"default"))&&c.push(t)}}}}const l=[a,c];return(0,o.Kn)(e)&&r.set(e,l),l}function ht(e){return"$"!==e[0]}function pt(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:null===e?"null":""}function mt(e,t){return pt(e)===pt(t)}function gt(e,t){return(0,o.kJ)(t)?t.findIndex((t=>mt(t,e))):(0,o.mf)(t)&&mt(t,e)?0:-1}const vt=e=>"_"===e[0]||"$stable"===e,yt=e=>(0,o.kJ)(e)?e.map(on):[on(e)],bt=(e,t,n)=>{if(t._n)return t;const r=L(((...e)=>yt(t(...e))),n);return r._c=!1,r},_t=(e,t,n)=>{const r=e._ctx;for(const i in e){if(vt(i))continue;const n=e[i];if((0,o.mf)(n))t[i]=bt(i,n,r);else if(null!=n){0;const e=yt(n);t[i]=()=>e}}},wt=(e,t)=>{const n=yt(t);e.slots.default=()=>n},Et=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=(0,r.IU)(t),(0,o.Nj)(t,"_",n)):_t(t,e.slots={})}else e.slots={},t&&wt(e,t);(0,o.Nj)(e.slots,Kt,1)},It=(e,t,n)=>{const{vnode:r,slots:i}=e;let s=!0,a=o.kT;if(32&r.shapeFlag){const e=t._;e?n&&1===e?s=!1:((0,o.l7)(i,t),n||1!==e||delete i._):(s=!t.$stable,_t(t,i)),a=t}else t&&(wt(e,t),a={default:1});if(s)for(const o in i)vt(o)||o in a||delete i[o]};function St(e,t,n,s,a=!1){if((0,o.kJ)(e))return void e.forEach(((e,r)=>St(e,t&&((0,o.kJ)(t)?t[r]:t),n,s,a)));if(ue(s)&&!a)return;const c=4&s.shapeFlag?An(s.component)||s.component.proxy:s.el,u=a?null:c,{i:l,r:d}=e;const f=t&&t.r,h=l.refs===o.kT?l.refs={}:l.refs,p=l.setupState;if(null!=f&&f!==d&&((0,o.HD)(f)?(h[f]=null,(0,o.RI)(p,f)&&(p[f]=null)):(0,r.dq)(f)&&(f.value=null)),(0,o.mf)(d))i(d,l,12,[u,h]);else{const t=(0,o.HD)(d),i=(0,r.dq)(d);if(t||i){const r=()=>{if(e.f){const n=t?(0,o.RI)(p,d)?p[d]:h[d]:d.value;a?(0,o.kJ)(n)&&(0,o.Od)(n,c):(0,o.kJ)(n)?n.includes(c)||n.push(c):t?(h[d]=[c],(0,o.RI)(p,d)&&(p[d]=h[d])):(d.value=[c],e.k&&(h[e.k]=d.value))}else t?(h[d]=u,(0,o.RI)(p,d)&&(p[d]=u)):i&&(d.value=u,e.k&&(h[e.k]=u))};u?(r.id=-1,Ot(r,n)):r()}else 0}}function Tt(){}const Ot=H;function kt(e){return Rt(e)}function Rt(e,t){Tt();const n=(0,o.E9)();n.__VUE__=!0;const{insert:i,remove:s,patchProp:a,createElement:c,createText:u,createComment:l,setText:d,setElementText:f,parentNode:h,nextSibling:p,setScopeId:m=o.dG,insertStaticContent:g}=e,v=(e,t,n,r=null,o=null,i=null,s=!1,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Jt(e,t)&&(r=Q(e),J(e,o,i,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:u,ref:l,shapeFlag:d}=t;switch(u){case Dt:y(e,t,n,r);break;case Lt:b(e,t,n,r);break;case Mt:null==e&&w(t,n,r,s);break;case xt:D(e,t,n,r,o,i,s,a,c);break;default:1&d?k(e,t,n,r,o,i,s,a,c):6&d?L(e,t,n,r,o,i,s,a,c):(64&d||128&d)&&u.process(e,t,n,r,o,i,s,a,c,te)}null!=l&&o&&St(l,e&&e.ref,i,t||e,!t)},y=(e,t,n,r)=>{if(null==e)i(t.el=u(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&d(n,t.children)}},b=(e,t,n,r)=>{null==e?i(t.el=l(t.children||""),n,r):t.el=e.el},w=(e,t,n,r)=>{[e.el,e.anchor]=g(e.children,t,n,r,e.el,e.anchor)},I=({el:e,anchor:t},n,r)=>{let o;while(e&&e!==t)o=p(e),i(e,n,r),e=o;i(t,n,r)},O=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=p(e),s(e),e=n;s(t)},k=(e,t,n,r,o,i,s,a,c)=>{s=s||"svg"===t.type,null==e?R(t,n,r,o,i,s,a,c):P(e,t,o,i,s,a,c)},R=(e,t,n,r,s,u,l,d)=>{let h,p;const{type:m,props:g,shapeFlag:v,transition:y,dirs:b}=e;if(h=e.el=c(e.type,u,g&&g.is,g),8&v?f(h,e.children):16&v&&A(e.children,h,null,r,s,u&&"foreignObject"!==m,l,d),b&&X(e,null,r,"created"),C(h,e,e.scopeId,l,r),g){for(const t in g)"value"===t||(0,o.Gg)(t)||a(h,t,null,g[t],u,e.children,r,s,Z);"value"in g&&a(h,"value",null,g.value),(p=g.onVnodeBeforeMount)&&un(p,r,e)}b&&X(e,null,r,"beforeMount");const _=(!s||s&&!s.pendingBranch)&&y&&!y.persisted;_&&y.beforeEnter(h),i(h,t,n),((p=g&&g.onVnodeMounted)||_||b)&&Ot((()=>{p&&un(p,r,e),_&&y.enter(h),b&&X(e,null,r,"mounted")}),s)},C=(e,t,n,r,o)=>{if(n&&m(e,n),r)for(let i=0;i<r.length;i++)m(e,r[i]);if(o){let n=o.subTree;if(t===n){const t=o.vnode;C(e,t,t.scopeId,t.slotScopeIds,o.parent)}}},A=(e,t,n,r,o,i,s,a,c=0)=>{for(let u=c;u<e.length;u++){const c=e[u]=a?sn(e[u]):on(e[u]);v(null,c,t,n,r,o,i,s,a)}},P=(e,t,n,r,i,s,c)=>{const u=t.el=e.el;let{patchFlag:l,dynamicChildren:d,dirs:h}=t;l|=16&e.patchFlag;const p=e.props||o.kT,m=t.props||o.kT;let g;n&&Ct(n,!1),(g=m.onVnodeBeforeUpdate)&&un(g,n,t,e),h&&X(t,e,n,"beforeUpdate"),n&&Ct(n,!0);const v=i&&"foreignObject"!==t.type;if(d?N(e.dynamicChildren,d,u,n,r,v,s):c||H(e,t,u,null,n,r,v,s,!1),l>0){if(16&l)x(u,t,p,m,n,r,i);else if(2&l&&p.class!==m.class&&a(u,"class",null,m.class,i),4&l&&a(u,"style",p.style,m.style,i),8&l){const o=t.dynamicProps;for(let t=0;t<o.length;t++){const s=o[t],c=p[s],l=m[s];l===c&&"value"!==s||a(u,s,c,l,i,e.children,n,r,Z)}}1&l&&e.children!==t.children&&f(u,t.children)}else c||null!=d||x(u,t,p,m,n,r,i);((g=m.onVnodeUpdated)||h)&&Ot((()=>{g&&un(g,n,t,e),h&&X(t,e,n,"updated")}),r)},N=(e,t,n,r,o,i,s)=>{for(let a=0;a<t.length;a++){const c=e[a],u=t[a],l=c.el&&(c.type===xt||!Jt(c,u)||70&c.shapeFlag)?h(c.el):n;v(c,u,l,null,r,o,i,s,!0)}},x=(e,t,n,r,i,s,c)=>{if(n!==r){if(n!==o.kT)for(const u in n)(0,o.Gg)(u)||u in r||a(e,u,n[u],null,c,t.children,i,s,Z);for(const u in r){if((0,o.Gg)(u))continue;const l=r[u],d=n[u];l!==d&&"value"!==u&&a(e,u,d,l,c,t.children,i,s,Z)}"value"in r&&a(e,"value",n.value,r.value)}},D=(e,t,n,r,o,s,a,c,l)=>{const d=t.el=e?e.el:u(""),f=t.anchor=e?e.anchor:u("");let{patchFlag:h,dynamicChildren:p,slotScopeIds:m}=t;m&&(c=c?c.concat(m):m),null==e?(i(d,n,r),i(f,n,r),A(t.children,n,f,o,s,a,c,l)):h>0&&64&h&&p&&e.dynamicChildren?(N(e.dynamicChildren,p,n,o,s,a,c),(null!=t.key||o&&t===o.subTree)&&At(e,t,!0)):H(e,t,n,f,o,s,a,c,l)},L=(e,t,n,r,o,i,s,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?o.ctx.activate(t,n,r,s,c):U(t,n,r,o,i,s,c):j(e,t,c)},U=(e,t,n,r,o,i,s)=>{const a=e.component=fn(e,r,o);if(le(e)&&(a.ctx.renderer=te),Sn(a),a.asyncDep){if(o&&o.registerDep(a,B),!e.el){const e=a.subTree=Zt(Lt);b(null,e,t,n)}}else B(a,e,t,n,o,i,s)},j=(e,t,n)=>{const r=t.component=e.component;if(F(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void V(r,t,n);r.next=t,E(r.update),r.update()}else t.el=e.el,r.vnode=t},B=(e,t,n,i,s,a,c)=>{const u=()=>{if(e.isMounted){let t,{next:n,bu:r,u:i,parent:u,vnode:l}=e,d=n;0,Ct(e,!1),n?(n.el=l.el,V(e,n,c)):n=l,r&&(0,o.ir)(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&un(t,u,n,l),Ct(e,!0);const f=M(e);0;const p=e.subTree;e.subTree=f,v(p,f,h(p.el),Q(p),e,s,a),n.el=f.el,null===d&&$(e,f.el),i&&Ot(i,s),(t=n.props&&n.props.onVnodeUpdated)&&Ot((()=>un(t,u,n,l)),s)}else{let r;const{el:c,props:u}=t,{bm:l,m:d,parent:f}=e,h=ue(t);if(Ct(e,!1),l&&(0,o.ir)(l),!h&&(r=u&&u.onVnodeBeforeMount)&&un(r,f,t),Ct(e,!0),c&&re){const n=()=>{e.subTree=M(e),re(c,e.subTree,e,s,null)};h?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{0;const r=e.subTree=M(e);0,v(null,r,n,i,e,s,a),t.el=r.el}if(d&&Ot(d,s),!h&&(r=u&&u.onVnodeMounted)){const e=t;Ot((()=>un(r,f,e)),s)}(256&t.shapeFlag||f&&ue(f.vnode)&&256&f.vnode.shapeFlag)&&e.a&&Ot(e.a,s),e.isMounted=!0,t=n=i=null}},l=e.effect=new r.qq(u,(()=>_(d)),e.scope),d=e.update=()=>l.run();d.id=e.uid,Ct(e,!0),d()},V=(e,t,n)=>{t.component=e;const o=e.vnode.props;e.vnode=t,e.next=null,ut(e,t.props,o,n),It(e,t.children,n),(0,r.Jd)(),S(),(0,r.lk)()},H=(e,t,n,r,o,i,s,a,c=!1)=>{const u=e&&e.children,l=e?e.shapeFlag:0,d=t.children,{patchFlag:h,shapeFlag:p}=t;if(h>0){if(128&h)return void W(u,d,n,r,o,i,s,a,c);if(256&h)return void z(u,d,n,r,o,i,s,a,c)}8&p?(16&l&&Z(u,o,i),d!==u&&f(n,d)):16&l?16&p?W(u,d,n,r,o,i,s,a,c):Z(u,o,i,!0):(8&l&&f(n,""),16&p&&A(d,n,r,o,i,s,a,c))},z=(e,t,n,r,i,s,a,c,u)=>{e=e||o.Z6,t=t||o.Z6;const l=e.length,d=t.length,f=Math.min(l,d);let h;for(h=0;h<f;h++){const r=t[h]=u?sn(t[h]):on(t[h]);v(e[h],r,n,null,i,s,a,c,u)}l>d?Z(e,i,s,!0,!1,f):A(t,n,r,i,s,a,c,u,f)},W=(e,t,n,r,i,s,a,c,u)=>{let l=0;const d=t.length;let f=e.length-1,h=d-1;while(l<=f&&l<=h){const r=e[l],o=t[l]=u?sn(t[l]):on(t[l]);if(!Jt(r,o))break;v(r,o,n,null,i,s,a,c,u),l++}while(l<=f&&l<=h){const r=e[f],o=t[h]=u?sn(t[h]):on(t[h]);if(!Jt(r,o))break;v(r,o,n,null,i,s,a,c,u),f--,h--}if(l>f){if(l<=h){const e=h+1,o=e<d?t[e].el:r;while(l<=h)v(null,t[l]=u?sn(t[l]):on(t[l]),n,o,i,s,a,c,u),l++}}else if(l>h)while(l<=f)J(e[l],i,s,!0),l++;else{const p=l,m=l,g=new Map;for(l=m;l<=h;l++){const e=t[l]=u?sn(t[l]):on(t[l]);null!=e.key&&g.set(e.key,l)}let y,b=0;const _=h-m+1;let w=!1,E=0;const I=new Array(_);for(l=0;l<_;l++)I[l]=0;for(l=p;l<=f;l++){const r=e[l];if(b>=_){J(r,i,s,!0);continue}let o;if(null!=r.key)o=g.get(r.key);else for(y=m;y<=h;y++)if(0===I[y-m]&&Jt(r,t[y])){o=y;break}void 0===o?J(r,i,s,!0):(I[o-m]=l+1,o>=E?E=o:w=!0,v(r,t[o],n,null,i,s,a,c,u),b++)}const S=w?Pt(I):o.Z6;for(y=S.length-1,l=_-1;l>=0;l--){const e=m+l,o=t[e],f=e+1<d?t[e+1].el:r;0===I[l]?v(null,o,n,f,i,s,a,c,u):w&&(y<0||l!==S[y]?q(o,n,f,2):y--)}}},q=(e,t,n,r,o=null)=>{const{el:s,type:a,transition:c,children:u,shapeFlag:l}=e;if(6&l)return void q(e.component.subTree,t,n,r);if(128&l)return void e.suspense.move(t,n,r);if(64&l)return void a.move(e,t,n,te);if(a===xt){i(s,t,n);for(let e=0;e<u.length;e++)q(u[e],t,n,r);return void i(e.anchor,t,n)}if(a===Mt)return void I(e,t,n);const d=2!==r&&1&l&&c;if(d)if(0===r)c.beforeEnter(s),i(s,t,n),Ot((()=>c.enter(s)),o);else{const{leave:e,delayLeave:r,afterLeave:o}=c,a=()=>i(s,t,n),u=()=>{e(s,(()=>{a(),o&&o()}))};r?r(s,a,u):u()}else i(s,t,n)},J=(e,t,n,r=!1,o=!1)=>{const{type:i,props:s,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:d,dirs:f}=e;if(null!=a&&St(a,null,n,e,!0),256&l)return void t.ctx.deactivate(e);const h=1&l&&f,p=!ue(e);let m;if(p&&(m=s&&s.onVnodeBeforeUnmount)&&un(m,t,e),6&l)Y(e.component,n,r);else{if(128&l)return void e.suspense.unmount(n,r);h&&X(e,null,t,"beforeUnmount"),64&l?e.type.remove(e,t,n,o,te,r):u&&(i!==xt||d>0&&64&d)?Z(u,t,n,!1,!0):(i===xt&&384&d||!o&&16&l)&&Z(c,t,n),r&&K(e)}(p&&(m=s&&s.onVnodeUnmounted)||h)&&Ot((()=>{m&&un(m,t,e),h&&X(e,null,t,"unmounted")}),n)},K=e=>{const{type:t,el:n,anchor:r,transition:o}=e;if(t===xt)return void G(n,r);if(t===Mt)return void O(e);const i=()=>{s(n),o&&!o.persisted&&o.afterLeave&&o.afterLeave()};if(1&e.shapeFlag&&o&&!o.persisted){const{leave:t,delayLeave:r}=o,s=()=>t(n,i);r?r(e.el,i,s):s()}else i()},G=(e,t)=>{let n;while(e!==t)n=p(e),s(e),e=n;s(t)},Y=(e,t,n)=>{const{bum:r,scope:i,update:s,subTree:a,um:c}=e;r&&(0,o.ir)(r),i.stop(),s&&(s.active=!1,J(a,e,t,n)),c&&Ot(c,t),Ot((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},Z=(e,t,n,r=!1,o=!1,i=0)=>{for(let s=i;s<e.length;s++)J(e[s],t,n,r,o)},Q=e=>6&e.shapeFlag?Q(e.component.subTree):128&e.shapeFlag?e.suspense.next():p(e.anchor||e.el),ee=(e,t,n)=>{null==e?t._vnode&&J(t._vnode,null,null,!0):v(t._vnode||null,e,t,null,null,null,n),S(),T(),t._vnode=e},te={p:v,um:J,m:q,r:K,mt:U,mc:A,pc:H,pbc:N,n:Q,o:e};let ne,re;return t&&([ne,re]=t(te)),{render:ee,hydrate:ne,createApp:ot(ee,ne)}}function Ct({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function At(e,t,n=!1){const r=e.children,i=t.children;if((0,o.kJ)(r)&&(0,o.kJ)(i))for(let o=0;o<r.length;o++){const e=r[o];let t=i[o];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=i[o]=sn(i[o]),t.el=e.el),n||At(e,t)),t.type===Dt&&(t.el=e.el)}}function Pt(e){const t=e.slice(),n=[0];let r,o,i,s,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(o=n[n.length-1],e[o]<c){t[r]=o,n.push(r);continue}i=0,s=n.length-1;while(i<s)a=i+s>>1,e[n[a]]<c?i=a+1:s=a;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}i=n.length,s=n[i-1];while(i-- >0)n[i]=s,s=t[s];return n}const Nt=e=>e.__isTeleport;const xt=Symbol.for("v-fgt"),Dt=Symbol.for("v-txt"),Lt=Symbol.for("v-cmt"),Mt=Symbol.for("v-stc"),Ut=[];let jt=null;function Ft(e=!1){Ut.push(jt=e?null:[])}function Bt(){Ut.pop(),jt=Ut[Ut.length-1]||null}let $t=1;function Vt(e){$t+=e}function Ht(e){return e.dynamicChildren=$t>0?jt||o.Z6:null,Bt(),$t>0&&jt&&jt.push(e),e}function zt(e,t,n,r,o,i){return Ht(Yt(e,t,n,r,o,i,!0))}function Wt(e,t,n,r,o){return Ht(Zt(e,t,n,r,o,!0))}function qt(e){return!!e&&!0===e.__v_isVNode}function Jt(e,t){return e.type===t.type&&e.key===t.key}const Kt="__vInternal",Gt=({key:e})=>null!=e?e:null,Xt=({ref:e,ref_key:t,ref_for:n})=>("number"===typeof e&&(e=""+e),null!=e?(0,o.HD)(e)||(0,r.dq)(e)||(0,o.mf)(e)?{i:N,r:e,k:t,f:!!n}:e:null);function Yt(e,t=null,n=null,r=0,i=null,s=(e===xt?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Gt(t),ref:t&&Xt(t),scopeId:x,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:N};return c?(an(u,n),128&s&&e.normalize(u)):n&&(u.shapeFlag|=(0,o.HD)(n)?8:16),$t>0&&!a&&jt&&(u.patchFlag>0||6&s)&&32!==u.patchFlag&&jt.push(u),u}const Zt=Qt;function Qt(e,t=null,n=null,i=0,s=null,a=!1){if(e&&e!==Ne||(e=Lt),qt(e)){const r=tn(e,t,!0);return n&&an(r,n),$t>0&&!a&&jt&&(6&r.shapeFlag?jt[jt.indexOf(e)]=r:jt.push(r)),r.patchFlag|=-2,r}if(Nn(e)&&(e=e.__vccOpts),t){t=en(t);let{class:e,style:n}=t;e&&!(0,o.HD)(e)&&(t.class=(0,o.C_)(e)),(0,o.Kn)(n)&&((0,r.X3)(n)&&!(0,o.kJ)(n)&&(n=(0,o.l7)({},n)),t.style=(0,o.j5)(n))}const c=(0,o.HD)(e)?1:V(e)?128:Nt(e)?64:(0,o.Kn)(e)?4:(0,o.mf)(e)?2:0;return Yt(e,t,n,i,s,c,a,!0)}function en(e){return e?(0,r.X3)(e)||Kt in e?(0,o.l7)({},e):e:null}function tn(e,t,n=!1){const{props:r,ref:i,patchFlag:s,children:a}=e,c=t?cn(r||{},t):r,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Gt(c),ref:t&&t.ref?n&&i?(0,o.kJ)(i)?i.concat(Xt(t)):[i,Xt(t)]:Xt(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==xt?-1===s?16:16|s:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&tn(e.ssContent),ssFallback:e.ssFallback&&tn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return u}function nn(e=" ",t=0){return Zt(Dt,null,e,t)}function rn(e="",t=!1){return t?(Ft(),Wt(Lt,null,e)):Zt(Lt,null,e)}function on(e){return null==e||"boolean"===typeof e?Zt(Lt):(0,o.kJ)(e)?Zt(xt,null,e.slice()):"object"===typeof e?sn(e):Zt(Dt,null,String(e))}function sn(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:tn(e)}function an(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if((0,o.kJ)(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),an(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||Kt in t?3===r&&N&&(1===N.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=N}}else(0,o.mf)(t)?(t={default:t,_ctx:N},n=32):(t=String(t),64&r?(n=16,t=[nn(t)]):n=8);e.children=t,e.shapeFlag|=n}function cn(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=(0,o.C_)([t.class,r.class]));else if("style"===e)t.style=(0,o.j5)([t.style,r.style]);else if((0,o.F7)(e)){const n=t[e],i=r[e];!i||n===i||(0,o.kJ)(n)&&n.includes(i)||(t[e]=n?[].concat(n,i):i)}else""!==e&&(t[e]=r[e])}return t}function un(e,t,n,r=null){s(e,t,7,[n,r])}const ln=nt();let dn=0;function fn(e,t,n){const i=e.type,s=(t?t.appContext:e.appContext)||ln,a={uid:dn++,vnode:e,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ft(i,s),emitsOptions:A(i,s),emit:null,emitted:null,propsDefaults:o.kT,inheritAttrs:i.inheritAttrs,ctx:o.kT,data:o.kT,props:o.kT,attrs:o.kT,slots:o.kT,refs:o.kT,setupState:o.kT,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=C.bind(null,a),e.ce&&e.ce(a),a}let hn=null;const pn=()=>hn||N;let mn,gn,vn="__VUE_INSTANCE_SETTERS__";(gn=(0,o.E9)()[vn])||(gn=(0,o.E9)()[vn]=[]),gn.push((e=>hn=e)),mn=e=>{gn.length>1?gn.forEach((t=>t(e))):gn[0](e)};const yn=e=>{mn(e),e.scope.on()},bn=()=>{hn&&hn.scope.off(),mn(null)};function _n(e){return 4&e.vnode.shapeFlag}let wn,En,In=!1;function Sn(e,t=!1){In=t;const{props:n,children:r}=e.vnode,o=_n(e);ct(e,n,o,t),Et(e,r);const i=o?Tn(e,t):void 0;return In=!1,i}function Tn(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=(0,r.Xl)(new Proxy(e.ctx,Fe));const{setup:s}=n;if(s){const n=e.setupContext=s.length>1?Cn(e):null;yn(e),(0,r.Jd)();const c=i(s,e,0,[e.props,n]);if((0,r.lk)(),bn(),(0,o.tI)(c)){if(c.then(bn,bn),t)return c.then((n=>{On(e,n,t)})).catch((t=>{a(t,e,0)}));e.asyncDep=c}else On(e,c,t)}else kn(e,t)}function On(e,t,n){(0,o.mf)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,o.Kn)(t)&&(e.setupState=(0,r.WL)(t)),kn(e,n)}function kn(e,t,n){const i=e.type;if(!e.render){if(!t&&wn&&!i.render){const t=i.template||qe(e).template;if(t){0;const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:s,compilerOptions:a}=i,c=(0,o.l7)((0,o.l7)({isCustomElement:n,delimiters:s},r),a);i.render=wn(t,c)}}e.render=i.render||o.dG,En&&En(e)}yn(e),(0,r.Jd)(),Ve(e),(0,r.lk)(),bn()}function Rn(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return(0,r.j)(e,"get","$attrs"),t[n]}}))}function Cn(e){const t=t=>{e.exposed=t||{}};return{get attrs(){return Rn(e)},slots:e.slots,emit:e.emit,expose:t}}function An(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy((0,r.WL)((0,r.Xl)(e.exposed)),{get(t,n){return n in t?t[n]:n in Ue?Ue[n](e):void 0},has(e,t){return t in e||t in Ue}}))}function Pn(e,t=!0){return(0,o.mf)(e)?e.displayName||e.name:e.name||t&&e.__name}function Nn(e){return(0,o.mf)(e)&&"__vccOpts"in e}const xn=(e,t)=>(0,r.Fl)(e,t,In);function Dn(e,t,n){const r=arguments.length;return 2===r?(0,o.Kn)(t)&&!(0,o.kJ)(t)?qt(t)?Zt(e,null,[t]):Zt(e,t):Zt(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&qt(n)&&(n=[n]),Zt(e,t,n))}const Ln=Symbol.for("v-scx"),Mn=()=>{{const e=at(Ln);return e}};const Un="3.3.4"},9242:function(e,t,n){n.d(t,{ri:function(){return ce}});n(7658);var r=n(7139),o=n(3396),i=n(4870);const s="http://www.w3.org/2000/svg",a="undefined"!==typeof document?document:null,c=a&&a.createElement("template"),u={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const o=t?a.createElementNS(s,e):a.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&o.setAttribute("multiple",r.multiple),o},createText:e=>a.createTextNode(e),createComment:e=>a.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>a.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,o,i){const s=n?n.previousSibling:t.lastChild;if(o&&(o===i||o.nextSibling)){while(1)if(t.insertBefore(o.cloneNode(!0),n),o===i||!(o=o.nextSibling))break}else{c.innerHTML=r?`<svg>${e}</svg>`:e;const o=c.content;if(r){const e=o.firstChild;while(e.firstChild)o.appendChild(e.firstChild);o.removeChild(e)}t.insertBefore(o,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function l(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function d(e,t,n){const o=e.style,i=(0,r.HD)(n);if(n&&!i){if(t&&!(0,r.HD)(t))for(const e in t)null==n[e]&&h(o,e,"");for(const e in n)h(o,e,n[e])}else{const r=o.display;i?t!==n&&(o.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(o.display=r)}}const f=/\s*!important$/;function h(e,t,n){if((0,r.kJ)(n))n.forEach((n=>h(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const o=g(e,t);f.test(n)?e.setProperty((0,r.rs)(o),n.replace(f,""),"important"):e[o]=n}}const p=["Webkit","Moz","ms"],m={};function g(e,t){const n=m[t];if(n)return n;let o=(0,r._A)(t);if("filter"!==o&&o in e)return m[t]=o;o=(0,r.kC)(o);for(let r=0;r<p.length;r++){const n=p[r]+o;if(n in e)return m[t]=n}return t}const v="http://www.w3.org/1999/xlink";function y(e,t,n,o,i){if(o&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(v,t.slice(6,t.length)):e.setAttributeNS(v,t,n);else{const o=(0,r.Pq)(t);null==n||o&&!(0,r.yA)(n)?e.removeAttribute(t):e.setAttribute(t,o?"":n)}}function b(e,t,n,o,i,s,a){if("innerHTML"===t||"textContent"===t)return o&&a(o,i,s),void(e[t]=null==n?"":n);const c=e.tagName;if("value"===t&&"PROGRESS"!==c&&!c.includes("-")){e._value=n;const r="OPTION"===c?e.getAttribute("value"):e.value,o=null==n?"":n;return r!==o&&(e.value=o),void(null==n&&e.removeAttribute(t))}let u=!1;if(""===n||null==n){const o=typeof e[t];"boolean"===o?n=(0,r.yA)(n):null==n&&"string"===o?(n="",u=!0):"number"===o&&(n=0,u=!0)}try{e[t]=n}catch(l){0}u&&e.removeAttribute(t)}function _(e,t,n,r){e.addEventListener(t,n,r)}function w(e,t,n,r){e.removeEventListener(t,n,r)}function E(e,t,n,r,o=null){const i=e._vei||(e._vei={}),s=i[t];if(r&&s)s.value=r;else{const[n,a]=S(t);if(r){const s=i[t]=R(r,o);_(e,n,s,a)}else s&&(w(e,n,s,a),i[t]=void 0)}}const I=/(?:Once|Passive|Capture)$/;function S(e){let t;if(I.test(e)){let n;t={};while(n=e.match(I))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}const n=":"===e[2]?e.slice(3):(0,r.rs)(e.slice(2));return[n,t]}let T=0;const O=Promise.resolve(),k=()=>T||(O.then((()=>T=0)),T=Date.now());function R(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();(0,o.$d)(C(e,n.value),t,5,[e])};return n.value=e,n.attached=k(),n}function C(e,t){if((0,r.kJ)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const A=/^on[a-z]/,P=(e,t,n,o,i=!1,s,a,c,u)=>{"class"===t?l(e,o,i):"style"===t?d(e,n,o):(0,r.F7)(t)?(0,r.tR)(t)||E(e,t,n,o,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):N(e,t,o,i))?b(e,t,o,s,a,c,u):("true-value"===t?e._trueValue=o:"false-value"===t&&(e._falseValue=o),y(e,t,o,i))};function N(e,t,n,o){return o?"innerHTML"===t||"textContent"===t||!!(t in e&&A.test(t)&&(0,r.mf)(n)):"spellcheck"!==t&&"draggable"!==t&&"translate"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!A.test(t)||!(0,r.HD)(n))&&t in e))))}"undefined"!==typeof HTMLElement&&HTMLElement;const x="transition",D="animation",L=(e,{slots:t})=>(0,o.h)(o.P$,B(e),t);L.displayName="Transition";const M={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},U=L.props=(0,r.l7)({},o.nJ,M),j=(e,t=[])=>{(0,r.kJ)(e)?e.forEach((e=>e(...t))):e&&e(...t)},F=e=>!!e&&((0,r.kJ)(e)?e.some((e=>e.length>1)):e.length>1);function B(e){const t={};for(const r in e)r in M||(t[r]=e[r]);if(!1===e.css)return t;const{name:n="v",type:o,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:u=s,appearActiveClass:l=a,appearToClass:d=c,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,m=$(i),g=m&&m[0],v=m&&m[1],{onBeforeEnter:y,onEnter:b,onEnterCancelled:_,onLeave:w,onLeaveCancelled:E,onBeforeAppear:I=y,onAppear:S=b,onAppearCancelled:T=_}=t,O=(e,t,n)=>{z(e,t?d:c),z(e,t?l:a),n&&n()},k=(e,t)=>{e._isLeaving=!1,z(e,f),z(e,p),z(e,h),t&&t()},R=e=>(t,n)=>{const r=e?S:b,i=()=>O(t,e,n);j(r,[t,i]),W((()=>{z(t,e?u:s),H(t,e?d:c),F(r)||J(t,o,g,i)}))};return(0,r.l7)(t,{onBeforeEnter(e){j(y,[e]),H(e,s),H(e,a)},onBeforeAppear(e){j(I,[e]),H(e,u),H(e,l)},onEnter:R(!1),onAppear:R(!0),onLeave(e,t){e._isLeaving=!0;const n=()=>k(e,t);H(e,f),Y(),H(e,h),W((()=>{e._isLeaving&&(z(e,f),H(e,p),F(w)||J(e,o,v,n))})),j(w,[e,n])},onEnterCancelled(e){O(e,!1),j(_,[e])},onAppearCancelled(e){O(e,!0),j(T,[e])},onLeaveCancelled(e){k(e),j(E,[e])}})}function $(e){if(null==e)return null;if((0,r.Kn)(e))return[V(e.enter),V(e.leave)];{const t=V(e);return[t,t]}}function V(e){const t=(0,r.He)(e);return t}function H(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e._vtc||(e._vtc=new Set)).add(t)}function z(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function W(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let q=0;function J(e,t,n,r){const o=e._endId=++q,i=()=>{o===e._endId&&r()};if(n)return setTimeout(i,n);const{type:s,timeout:a,propCount:c}=K(e,t);if(!s)return r();const u=s+"end";let l=0;const d=()=>{e.removeEventListener(u,f),i()},f=t=>{t.target===e&&++l>=c&&d()};setTimeout((()=>{l<c&&d()}),a+1),e.addEventListener(u,f)}function K(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),o=r(`${x}Delay`),i=r(`${x}Duration`),s=G(o,i),a=r(`${D}Delay`),c=r(`${D}Duration`),u=G(a,c);let l=null,d=0,f=0;t===x?s>0&&(l=x,d=s,f=i.length):t===D?u>0&&(l=D,d=u,f=c.length):(d=Math.max(s,u),l=d>0?s>u?x:D:null,f=l?l===x?i.length:c.length:0);const h=l===x&&/\b(transform|all)(,|$)/.test(r(`${x}Property`).toString());return{type:l,timeout:d,propCount:f,hasTransform:h}}function G(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map(((t,n)=>X(t)+X(e[n]))))}function X(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function Y(){return document.body.offsetHeight}const Z=new WeakMap,Q=new WeakMap,ee={name:"TransitionGroup",props:(0,r.l7)({},U,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=(0,o.FN)(),r=(0,o.Y8)();let s,a;return(0,o.ic)((()=>{if(!s.length)return;const t=e.moveClass||`${e.name||"v"}-move`;if(!oe(s[0].el,n.vnode.el,t))return;s.forEach(te),s.forEach(ne);const r=s.filter(re);Y(),r.forEach((e=>{const n=e.el,r=n.style;H(n,t),r.transform=r.webkitTransform=r.transitionDuration="";const o=n._moveCb=e=>{e&&e.target!==n||e&&!/transform$/.test(e.propertyName)||(n.removeEventListener("transitionend",o),n._moveCb=null,z(n,t))};n.addEventListener("transitionend",o)}))})),()=>{const c=(0,i.IU)(e),u=B(c);let l=c.tag||o.HY;s=a,a=t.default?(0,o.Q6)(t.default()):[];for(let e=0;e<a.length;e++){const t=a[e];null!=t.key&&(0,o.nK)(t,(0,o.U2)(t,u,r,n))}if(s)for(let e=0;e<s.length;e++){const t=s[e];(0,o.nK)(t,(0,o.U2)(t,u,r,n)),Z.set(t,t.el.getBoundingClientRect())}return(0,o.Wm)(l,null,a)}}};ee.props;function te(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function ne(e){Q.set(e,e.el.getBoundingClientRect())}function re(e){const t=Z.get(e),n=Q.get(e),r=t.left-n.left,o=t.top-n.top;if(r||o){const t=e.el.style;return t.transform=t.webkitTransform=`translate(${r}px,${o}px)`,t.transitionDuration="0s",e}}function oe(e,t,n){const r=e.cloneNode();e._vtc&&e._vtc.forEach((e=>{e.split(/\s+/).forEach((e=>e&&r.classList.remove(e)))})),n.split(/\s+/).forEach((e=>e&&r.classList.add(e))),r.style.display="none";const o=1===t.nodeType?t:t.parentNode;o.appendChild(r);const{hasTransform:i}=K(r);return o.removeChild(r),i}const ie=(0,r.l7)({patchProp:P},u);let se;function ae(){return se||(se=(0,o.Us)(ie))}const ce=(...e)=>{const t=ae().createApp(...e);const{mount:n}=t;return t.mount=e=>{const o=ue(e);if(!o)return;const i=t._component;(0,r.mf)(i)||i.render||i.template||(i.template=o.innerHTML),o.innerHTML="";const s=n(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),s},t};function ue(e){if((0,r.HD)(e)){const t=document.querySelector(e);return t}return e}},7139:function(e,t,n){n.d(t,{C_:function(){return Z},DM:function(){return v},E9:function(){return z},F7:function(){return u},Gg:function(){return A},HD:function(){return w},He:function(){return V},Kj:function(){return b},Kn:function(){return I},NO:function(){return a},Nj:function(){return B},Od:function(){return f},PO:function(){return R},Pq:function(){return ee},RI:function(){return p},S0:function(){return C},W7:function(){return k},WV:function(){return re},Z6:function(){return i},_A:function(){return x},_N:function(){return g},aU:function(){return j},dG:function(){return s},e1:function(){return q},fY:function(){return r},h5:function(){return $},hR:function(){return U},hq:function(){return oe},ir:function(){return F},j5:function(){return J},kC:function(){return M},kJ:function(){return m},kT:function(){return o},l7:function(){return d},mf:function(){return _},rs:function(){return L},tI:function(){return S},tR:function(){return l},yA:function(){return te},yk:function(){return E},zw:function(){return ie}});n(7658);function r(e,t){const n=Object.create(null),r=e.split(",");for(let o=0;o<r.length;o++)n[r[o]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}const o={},i=[],s=()=>{},a=()=>!1,c=/^on[^a-z]/,u=e=>c.test(e),l=e=>e.startsWith("onUpdate:"),d=Object.assign,f=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},h=Object.prototype.hasOwnProperty,p=(e,t)=>h.call(e,t),m=Array.isArray,g=e=>"[object Map]"===O(e),v=e=>"[object Set]"===O(e),y=e=>"[object Date]"===O(e),b=e=>"[object RegExp]"===O(e),_=e=>"function"===typeof e,w=e=>"string"===typeof e,E=e=>"symbol"===typeof e,I=e=>null!==e&&"object"===typeof e,S=e=>I(e)&&_(e.then)&&_(e.catch),T=Object.prototype.toString,O=e=>T.call(e),k=e=>O(e).slice(8,-1),R=e=>"[object Object]"===O(e),C=e=>w(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,A=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),P=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},N=/-(\w)/g,x=P((e=>e.replace(N,((e,t)=>t?t.toUpperCase():"")))),D=/\B([A-Z])/g,L=P((e=>e.replace(D,"-$1").toLowerCase())),M=P((e=>e.charAt(0).toUpperCase()+e.slice(1))),U=P((e=>e?`on${M(e)}`:"")),j=(e,t)=>!Object.is(e,t),F=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},B=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},$=e=>{const t=parseFloat(e);return isNaN(t)?e:t},V=e=>{const t=w(e)?Number(e):NaN;return isNaN(t)?e:t};let H;const z=()=>H||(H="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{});const W="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console",q=r(W);function J(e){if(m(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],o=w(r)?Y(r):J(r);if(o)for(const e in o)t[e]=o[e]}return t}return w(e)||I(e)?e:void 0}const K=/;(?![^(]*\))/g,G=/:([^]+)/,X=/\/\*[^]*?\*\//g;function Y(e){const t={};return e.replace(X,"").split(K).forEach((e=>{if(e){const n=e.split(G);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function Z(e){let t="";if(w(e))t=e;else if(m(e))for(let n=0;n<e.length;n++){const r=Z(e[n]);r&&(t+=r+" ")}else if(I(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Q="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ee=r(Q);function te(e){return!!e||""===e}function ne(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=re(e[r],t[r]);return n}function re(e,t){if(e===t)return!0;let n=y(e),r=y(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=E(e),r=E(t),n||r)return e===t;if(n=m(e),r=m(t),n||r)return!(!n||!r)&&ne(e,t);if(n=I(e),r=I(t),n||r){if(!n||!r)return!1;const o=Object.keys(e).length,i=Object.keys(t).length;if(o!==i)return!1;for(const n in e){const r=e.hasOwnProperty(n),o=t.hasOwnProperty(n);if(r&&!o||!r&&o||!re(e[n],t[n]))return!1}}return String(e)===String(t)}function oe(e,t){return e.findIndex((e=>re(e,t)))}const ie=e=>w(e)?e:null==e?"":m(e)||I(e)&&(e.toString===T||!_(e.toString))?JSON.stringify(e,se,2):String(e),se=(e,t)=>t&&t.__v_isRef?se(e,t.value):g(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:v(t)?{[`Set(${t.size})`]:[...t.values()]}:!I(t)||m(t)||R(t)?t:String(t)},89:function(e,t){t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[r,o]of t)n[r]=o;return n}},7077:function(e,t,n){n.d(t,{Jn:function(){return me},qX:function(){return de},Xd:function(){return le},Mq:function(){return ve},ZF:function(){return ge},KN:function(){return ye}});n(7658);var r=n(7142),o=n(5168),i=n(223);n(2801);const s=(e,t)=>t.some((t=>e instanceof t));let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const d=new WeakMap,f=new WeakMap,h=new WeakMap,p=new WeakMap,m=new WeakMap;function g(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",o),e.removeEventListener("error",i)},o=()=>{t(E(e.result)),r()},i=()=>{n(e.error),r()};e.addEventListener("success",o),e.addEventListener("error",i)}));return t.then((t=>{t instanceof IDBCursor&&d.set(t,e)})).catch((()=>{})),m.set(t,e),t}function v(e){if(f.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",i),e.removeEventListener("abort",i)},o=()=>{t(),r()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",o),e.addEventListener("error",i),e.addEventListener("abort",i)}));f.set(e,t)}let y={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return f.get(e);if("objectStoreNames"===t)return e.objectStoreNames||h.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return E(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function b(e){y=e(y)}function _(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(e)?function(...t){return e.apply(I(this),t),E(d.get(this))}:function(...t){return E(e.apply(I(this),t))}:function(t,...n){const r=e.call(I(this),t,...n);return h.set(r,t.sort?t.sort():[t]),E(r)}}function w(e){return"function"===typeof e?_(e):(e instanceof IDBTransaction&&v(e),s(e,u())?new Proxy(e,y):e)}function E(e){if(e instanceof IDBRequest)return g(e);if(p.has(e))return p.get(e);const t=w(e);return t!==e&&(p.set(e,t),m.set(t,e)),t}const I=e=>m.get(e);function S(e,t,{blocked:n,upgrade:r,blocking:o,terminated:i}={}){const s=indexedDB.open(e,t),a=E(s);return r&&s.addEventListener("upgradeneeded",(e=>{r(E(s.result),e.oldVersion,e.newVersion,E(s.transaction))})),n&&s.addEventListener("blocked",(()=>n())),a.then((e=>{i&&e.addEventListener("close",(()=>i())),o&&e.addEventListener("versionchange",(()=>o()))})).catch((()=>{})),a}const T=["get","getKey","getAll","getAllKeys","count"],O=["put","add","delete","clear"],k=new Map;function R(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(k.get(t))return k.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,o=O.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!o&&!T.includes(n))return;const i=async function(e,...t){const i=this.transaction(e,o?"readwrite":"readonly");let s=i.store;return r&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),o&&i.done]))[0]};return k.set(t,i),i}b((e=>({...e,get:(t,n,r)=>R(t,n)||e.get(t,n,r),has:(t,n)=>!!R(t,n)||e.has(t,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class C{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(A(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function A(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const P="@firebase/app",N="0.9.0",x=new o.Yd("@firebase/app"),D="@firebase/app-compat",L="@firebase/analytics-compat",M="@firebase/analytics",U="@firebase/app-check-compat",j="@firebase/app-check",F="@firebase/auth",B="@firebase/auth-compat",$="@firebase/database",V="@firebase/database-compat",H="@firebase/functions",z="@firebase/functions-compat",W="@firebase/installations",q="@firebase/installations-compat",J="@firebase/messaging",K="@firebase/messaging-compat",G="@firebase/performance",X="@firebase/performance-compat",Y="@firebase/remote-config",Z="@firebase/remote-config-compat",Q="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/firestore-compat",re="firebase",oe="9.15.0",ie="[DEFAULT]",se={[P]:"fire-core",[D]:"fire-core-compat",[M]:"fire-analytics",[L]:"fire-analytics-compat",[j]:"fire-app-check",[U]:"fire-app-check-compat",[F]:"fire-auth",[B]:"fire-auth-compat",[$]:"fire-rtdb",[V]:"fire-rtdb-compat",[H]:"fire-fn",[z]:"fire-fn-compat",[W]:"fire-iid",[q]:"fire-iid-compat",[J]:"fire-fcm",[K]:"fire-fcm-compat",[G]:"fire-perf",[X]:"fire-perf-compat",[Y]:"fire-rc",[Z]:"fire-rc-compat",[Q]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat","fire-js":"fire-js",[re]:"fire-js-all"},ae=new Map,ce=new Map;function ue(e,t){try{e.container.addComponent(t)}catch(n){x.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function le(e){const t=e.name;if(ce.has(t))return x.debug(`There were multiple attempts to register component ${t}.`),!1;ce.set(t,e);for(const n of ae.values())ue(n,e);return!0}function de(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const fe={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},he=new i.LL("app","Firebase",fe);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pe{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw he.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me=oe;function ge(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const o=Object.assign({name:ie,automaticDataCollectionEnabled:!1},t),s=o.name;if("string"!==typeof s||!s)throw he.create("bad-app-name",{appName:String(s)});if(n||(n=(0,i.aH)()),!n)throw he.create("no-options");const a=ae.get(s);if(a){if((0,i.vZ)(n,a.options)&&(0,i.vZ)(o,a.config))return a;throw he.create("duplicate-app",{appName:s})}const c=new r.H0(s);for(const r of ce.values())c.addComponent(r);const u=new pe(n,o,c);return ae.set(s,u),u}function ve(e=ie){const t=ae.get(e);if(!t&&e===ie)return ge();if(!t)throw he.create("no-app",{appName:e});return t}function ye(e,t,n){var o;let i=null!==(o=se[e])&&void 0!==o?o:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void x.warn(e.join(" "))}le(new r.wA(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const be="firebase-heartbeat-database",_e=1,we="firebase-heartbeat-store";let Ee=null;function Ie(){return Ee||(Ee=S(be,_e,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(we)}}}).catch((e=>{throw he.create("idb-open",{originalErrorMessage:e.message})}))),Ee}async function Se(e){try{const t=await Ie();return t.transaction(we).objectStore(we).get(Oe(e))}catch(t){if(t instanceof i.ZR)x.warn(t.message);else{const e=he.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});x.warn(e.message)}}}async function Te(e,t){try{const n=await Ie(),r=n.transaction(we,"readwrite"),o=r.objectStore(we);return await o.put(t,Oe(e)),r.done}catch(n){if(n instanceof i.ZR)x.warn(n.message);else{const e=he.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});x.warn(e.message)}}}function Oe(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ke=1024,Re=2592e6;class Ce{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ne(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=Ae();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=Re})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Ae(),{heartbeatsToSend:t,unsentEntries:n}=Pe(this._heartbeatsCache.heartbeats),r=(0,i.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Ae(){const e=new Date;return e.toISOString().substring(0,10)}function Pe(e,t=ke){const n=[];let r=e.slice();for(const o of e){const e=n.find((e=>e.agent===o.agent));if(e){if(e.dates.push(o.date),xe(n)>t){e.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),xe(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ne{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,i.hl)()&&(0,i.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Se(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Te(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Te(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function xe(e){return(0,i.L)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(e){le(new r.wA("platform-logger",(e=>new C(e)),"PRIVATE")),le(new r.wA("heartbeat",(e=>new Ce(e)),"PRIVATE")),ye(P,N,e),ye(P,N,"esm2017"),ye("fire-js","")}De("")},7142:function(e,t,n){n.d(t,{H0:function(){return u},wA:function(){return o}});var r=n(223);class o{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(r)return null;throw o}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:i})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=i){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=i){return this.instances.has(e)}getOptions(e=i){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[o,i]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(o);n===e&&i.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),o=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;o.add(e),this.onInitCallbacks.set(r,o);const i=this.instances.get(r);return i&&e(i,r),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const o of n)try{o(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=i){return this.component?this.component.multipleInstances?e:i:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===i?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new s(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},5168:function(e,t,n){n.d(t,{Yd:function(){return u},in:function(){return o}});n(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r=[];var o;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(o||(o={}));const i={debug:o.DEBUG,verbose:o.VERBOSE,info:o.INFO,warn:o.WARN,error:o.ERROR,silent:o.SILENT},s=o.INFO,a={[o.DEBUG]:"log",[o.VERBOSE]:"log",[o.INFO]:"info",[o.WARN]:"warn",[o.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),o=a[t];if(!o)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[o](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in o))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?i[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,o.DEBUG,...e),this._logHandler(this,o.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,o.VERBOSE,...e),this._logHandler(this,o.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,o.INFO,...e),this._logHandler(this,o.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,o.WARN,...e),this._logHandler(this,o.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,o.ERROR,...e),this._logHandler(this,o.ERROR,...e)}}},4161:function(e,t,n){n.d(t,{Z:function(){return Ft}});n(1439),n(7585),n(5315),n(7658);function r(e,t){return function(){return e.apply(t,arguments)}}const{toString:o}=Object.prototype,{getPrototypeOf:i}=Object,s=(e=>t=>{const n=o.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),a=e=>(e=e.toLowerCase(),t=>s(t)===e),c=e=>t=>typeof t===e,{isArray:u}=Array,l=c("undefined");function d(e){return null!==e&&!l(e)&&null!==e.constructor&&!l(e.constructor)&&m(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const f=a("ArrayBuffer");function h(e){let t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&f(e.buffer),t}const p=c("string"),m=c("function"),g=c("number"),v=e=>null!==e&&"object"===typeof e,y=e=>!0===e||!1===e,b=e=>{if("object"!==s(e))return!1;const t=i(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},_=a("Date"),w=a("File"),E=a("Blob"),I=a("FileList"),S=e=>v(e)&&m(e.pipe),T=e=>{let t;return e&&("function"===typeof FormData&&e instanceof FormData||m(e.append)&&("formdata"===(t=s(e))||"object"===t&&m(e.toString)&&"[object FormData]"===e.toString()))},O=a("URLSearchParams"),k=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function R(e,t,{allOwnKeys:n=!1}={}){if(null===e||"undefined"===typeof e)return;let r,o;if("object"!==typeof e&&(e=[e]),u(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let s;for(r=0;r<i;r++)s=o[r],t.call(null,e[s],s,e)}}function C(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,o=n.length;while(o-- >0)if(r=n[o],t===r.toLowerCase())return r;return null}const A=(()=>"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:global)(),P=e=>!l(e)&&e!==A;function N(){const{caseless:e}=P(this)&&this||{},t={},n=(n,r)=>{const o=e&&C(t,r)||r;b(t[o])&&b(n)?t[o]=N(t[o],n):b(n)?t[o]=N({},n):u(n)?t[o]=n.slice():t[o]=n};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&R(arguments[r],n);return t}const x=(e,t,n,{allOwnKeys:o}={})=>(R(t,((t,o)=>{n&&m(t)?e[o]=r(t,n):e[o]=t}),{allOwnKeys:o}),e),D=e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),L=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},M=(e,t,n,r)=>{let o,s,a;const c={};if(t=t||{},null==e)return t;do{o=Object.getOwnPropertyNames(e),s=o.length;while(s-- >0)a=o[s],r&&!r(a,e,t)||c[a]||(t[a]=e[a],c[a]=!0);e=!1!==n&&i(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},U=(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},j=e=>{if(!e)return null;if(u(e))return e;let t=e.length;if(!g(t))return null;const n=new Array(t);while(t-- >0)n[t]=e[t];return n},F=(e=>t=>e&&t instanceof e)("undefined"!==typeof Uint8Array&&i(Uint8Array)),B=(e,t)=>{const n=e&&e[Symbol.iterator],r=n.call(e);let o;while((o=r.next())&&!o.done){const n=o.value;t.call(e,n[0],n[1])}},$=(e,t)=>{let n;const r=[];while(null!==(n=e.exec(t)))r.push(n);return r},V=a("HTMLFormElement"),H=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),z=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),W=a("RegExp"),q=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};R(n,((n,o)=>{let i;!1!==(i=t(n,o,e))&&(r[o]=i||n)})),Object.defineProperties(e,r)},J=e=>{q(e,((t,n)=>{if(m(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];m(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},K=(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return u(e)?r(e):r(String(e).split(t)),n},G=()=>{},X=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Y="abcdefghijklmnopqrstuvwxyz",Z="0123456789",Q={DIGIT:Z,ALPHA:Y,ALPHA_DIGIT:Y+Y.toUpperCase()+Z},ee=(e=16,t=Q.ALPHA_DIGIT)=>{let n="";const{length:r}=t;while(e--)n+=t[Math.random()*r|0];return n};function te(e){return!!(e&&m(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])}const ne=e=>{const t=new Array(10),n=(e,r)=>{if(v(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const o=u(e)?[]:{};return R(e,((e,t)=>{const i=n(e,r+1);!l(i)&&(o[t]=i)})),t[r]=void 0,o}}return e};return n(e,0)},re=a("AsyncFunction"),oe=e=>e&&(v(e)||m(e))&&m(e.then)&&m(e.catch);var ie={isArray:u,isArrayBuffer:f,isBuffer:d,isFormData:T,isArrayBufferView:h,isString:p,isNumber:g,isBoolean:y,isObject:v,isPlainObject:b,isUndefined:l,isDate:_,isFile:w,isBlob:E,isRegExp:W,isFunction:m,isStream:S,isURLSearchParams:O,isTypedArray:F,isFileList:I,forEach:R,merge:N,extend:x,trim:k,stripBOM:D,inherits:L,toFlatObject:M,kindOf:s,kindOfTest:a,endsWith:U,toArray:j,forEachEntry:B,matchAll:$,isHTMLForm:V,hasOwnProperty:z,hasOwnProp:z,reduceDescriptors:q,freezeMethods:J,toObjectSet:K,toCamelCase:H,noop:G,toFiniteNumber:X,findKey:C,global:A,isContextDefined:P,ALPHABET:Q,generateString:ee,isSpecCompliantForm:te,toJSONObject:ne,isAsyncFn:re,isThenable:oe};n(541);function se(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}ie.inherits(se,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:ie.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const ae=se.prototype,ce={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{ce[e]={value:e}})),Object.defineProperties(se,ce),Object.defineProperty(ae,"isAxiosError",{value:!0}),se.from=(e,t,n,r,o,i)=>{const s=Object.create(ae);return ie.toFlatObject(e,s,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),se.call(s,e.message,t,n,r,o),s.cause=e,s.name=e.name,i&&Object.assign(s,i),s};var ue=se,le=null;function de(e){return ie.isPlainObject(e)||ie.isArray(e)}function fe(e){return ie.endsWith(e,"[]")?e.slice(0,-2):e}function he(e,t,n){return e?e.concat(t).map((function(e,t){return e=fe(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}function pe(e){return ie.isArray(e)&&!e.some(de)}const me=ie.toFlatObject(ie,{},null,(function(e){return/^is[A-Z]/.test(e)}));function ge(e,t,n){if(!ie.isObject(e))throw new TypeError("target must be an object");t=t||new(le||FormData),n=ie.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!ie.isUndefined(t[e])}));const r=n.metaTokens,o=n.visitor||l,i=n.dots,s=n.indexes,a=n.Blob||"undefined"!==typeof Blob&&Blob,c=a&&ie.isSpecCompliantForm(t);if(!ie.isFunction(o))throw new TypeError("visitor must be a function");function u(e){if(null===e)return"";if(ie.isDate(e))return e.toISOString();if(!c&&ie.isBlob(e))throw new ue("Blob is not supported. Use a Buffer instead.");return ie.isArrayBuffer(e)||ie.isTypedArray(e)?c&&"function"===typeof Blob?new Blob([e]):Buffer.from(e):e}function l(e,n,o){let a=e;if(e&&!o&&"object"===typeof e)if(ie.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(ie.isArray(e)&&pe(e)||(ie.isFileList(e)||ie.endsWith(n,"[]"))&&(a=ie.toArray(e)))return n=fe(n),a.forEach((function(e,r){!ie.isUndefined(e)&&null!==e&&t.append(!0===s?he([n],r,i):null===s?n:n+"[]",u(e))})),!1;return!!de(e)||(t.append(he(o,n,i),u(e)),!1)}const d=[],f=Object.assign(me,{defaultVisitor:l,convertValue:u,isVisitable:de});function h(e,n){if(!ie.isUndefined(e)){if(-1!==d.indexOf(e))throw Error("Circular reference detected in "+n.join("."));d.push(e),ie.forEach(e,(function(e,r){const i=!(ie.isUndefined(e)||null===e)&&o.call(t,e,ie.isString(r)?r.trim():r,n,f);!0===i&&h(e,n?n.concat(r):[r])})),d.pop()}}if(!ie.isObject(e))throw new TypeError("data must be an object");return h(e),t}var ve=ge;function ye(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function be(e,t){this._pairs=[],e&&ve(e,this,t)}const _e=be.prototype;_e.append=function(e,t){this._pairs.push([e,t])},_e.toString=function(e){const t=e?function(t){return e.call(this,t,ye)}:ye;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var we=be;function Ee(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ie(e,t,n){if(!t)return e;const r=n&&n.encode||Ee,o=n&&n.serialize;let i;if(i=o?o(t,n):ie.isURLSearchParams(t)?t.toString():new we(t,n).toString(r),i){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}class Se{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){ie.forEach(this.handlers,(function(t){null!==t&&e(t)}))}}var Te=Se,Oe={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ke=(n(6229),n(7330),n(2062),"undefined"!==typeof URLSearchParams?URLSearchParams:we),Re="undefined"!==typeof FormData?FormData:null,Ce="undefined"!==typeof Blob?Blob:null;const Ae=(()=>{let e;return("undefined"===typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&("undefined"!==typeof window&&"undefined"!==typeof document)})(),Pe=(()=>"undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"===typeof self.importScripts)();var Ne={isBrowser:!0,classes:{URLSearchParams:ke,FormData:Re,Blob:Ce},isStandardBrowserEnv:Ae,isStandardBrowserWebWorkerEnv:Pe,protocols:["http","https","file","blob","url","data"]};function xe(e,t){return ve(e,new Ne.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return Ne.isNode&&ie.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}function De(e){return ie.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}function Le(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}function Me(e){function t(e,n,r,o){let i=e[o++];const s=Number.isFinite(+i),a=o>=e.length;if(i=!i&&ie.isArray(r)?r.length:i,a)return ie.hasOwnProp(r,i)?r[i]=[r[i],n]:r[i]=n,!s;r[i]&&ie.isObject(r[i])||(r[i]=[]);const c=t(e,n,r[i],o);return c&&ie.isArray(r[i])&&(r[i]=Le(r[i])),!s}if(ie.isFormData(e)&&ie.isFunction(e.entries)){const n={};return ie.forEachEntry(e,((e,r)=>{t(De(e),r,n,0)})),n}return null}var Ue=Me;function je(e,t,n){if(ie.isString(e))try{return(t||JSON.parse)(e),ie.trim(e)}catch(r){if("SyntaxError"!==r.name)throw r}return(n||JSON.stringify)(e)}const Fe={transitional:Oe,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,o=ie.isObject(e);o&&ie.isHTMLForm(e)&&(e=new FormData(e));const i=ie.isFormData(e);if(i)return r&&r?JSON.stringify(Ue(e)):e;if(ie.isArrayBuffer(e)||ie.isBuffer(e)||ie.isStream(e)||ie.isFile(e)||ie.isBlob(e))return e;if(ie.isArrayBufferView(e))return e.buffer;if(ie.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return xe(e,this.formSerializer).toString();if((s=ie.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return ve(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),je(e)):e}],transformResponse:[function(e){const t=this.transitional||Fe.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(e&&ie.isString(e)&&(n&&!this.responseType||r)){const n=t&&t.silentJSONParsing,i=!n&&r;try{return JSON.parse(e)}catch(o){if(i){if("SyntaxError"===o.name)throw ue.from(o,ue.ERR_BAD_RESPONSE,this,null,this.response);throw o}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ne.classes.FormData,Blob:Ne.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};ie.forEach(["delete","get","head","post","put","patch"],(e=>{Fe.headers[e]={}}));var Be=Fe;const $e=ie.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var Ve=e=>{const t={};let n,r,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),r=e.substring(o+1).trim(),!n||t[n]&&$e[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t};const He=Symbol("internals");function ze(e){return e&&String(e).trim().toLowerCase()}function We(e){return!1===e||null==e?e:ie.isArray(e)?e.map(We):String(e)}function qe(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;while(r=n.exec(e))t[r[1]]=r[2];return t}const Je=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Ke(e,t,n,r,o){return ie.isFunction(r)?r.call(this,t,n):(o&&(t=n),ie.isString(t)?ie.isString(r)?-1!==t.indexOf(r):ie.isRegExp(r)?r.test(t):void 0:void 0)}function Ge(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}function Xe(e,t){const n=ie.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,o){return this[r].call(this,t,e,n,o)},configurable:!0})}))}class Ye{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function o(e,t,n){const o=ze(t);if(!o)throw new Error("header name must be a non-empty string");const i=ie.findKey(r,o);(!i||void 0===r[i]||!0===n||void 0===n&&!1!==r[i])&&(r[i||t]=We(e))}const i=(e,t)=>ie.forEach(e,((e,n)=>o(e,n,t)));return ie.isPlainObject(e)||e instanceof this.constructor?i(e,t):ie.isString(e)&&(e=e.trim())&&!Je(e)?i(Ve(e),t):null!=e&&o(t,e,n),this}get(e,t){if(e=ze(e),e){const n=ie.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return qe(e);if(ie.isFunction(t))return t.call(this,e,n);if(ie.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=ze(e),e){const n=ie.findKey(this,e);return!(!n||void 0===this[n]||t&&!Ke(this,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function o(e){if(e=ze(e),e){const o=ie.findKey(n,e);!o||t&&!Ke(n,n[o],o,t)||(delete n[o],r=!0)}}return ie.isArray(e)?e.forEach(o):o(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;while(n--){const o=t[n];e&&!Ke(this,this[o],o,e,!0)||(delete this[o],r=!0)}return r}normalize(e){const t=this,n={};return ie.forEach(this,((r,o)=>{const i=ie.findKey(n,o);if(i)return t[i]=We(r),void delete t[o];const s=e?Ge(o):String(o).trim();s!==o&&delete t[o],t[s]=We(r),n[s]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return ie.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&ie.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=this[He]=this[He]={accessors:{}},n=t.accessors,r=this.prototype;function o(e){const t=ze(e);n[t]||(Xe(r,e),n[t]=!0)}return ie.isArray(e)?e.forEach(o):o(e),this}}Ye.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),ie.reduceDescriptors(Ye.prototype,(({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[n]=e}}})),ie.freezeMethods(Ye);var Ze=Ye;function Qe(e,t){const n=this||Be,r=t||n,o=Ze.from(r.headers);let i=r.data;return ie.forEach(e,(function(e){i=e.call(n,i,o.normalize(),t?t.status:void 0)})),o.normalize(),i}function et(e){return!(!e||!e.__CANCEL__)}function tt(e,t,n){ue.call(this,null==e?"canceled":e,ue.ERR_CANCELED,t,n),this.name="CanceledError"}ie.inherits(tt,ue,{__CANCEL__:!0});var nt=tt;n(2801);function rt(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new ue("Request failed with status code "+n.status,[ue.ERR_BAD_REQUEST,ue.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}var ot=Ne.isStandardBrowserEnv?function(){return{write:function(e,t,n,r,o,i){const s=[];s.push(e+"="+encodeURIComponent(t)),ie.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),ie.isString(r)&&s.push("path="+r),ie.isString(o)&&s.push("domain="+o),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function it(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function st(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function at(e,t){return e&&!it(t)?st(e,t):t}var ct=Ne.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=ie.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return function(){return!0}}();function ut(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function lt(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o,i=0,s=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),u=r[s];o||(o=c),n[i]=a,r[i]=c;let l=s,d=0;while(l!==i)d+=n[l++],l%=e;if(i=(i+1)%e,i===s&&(s=(s+1)%e),c-o<t)return;const f=u&&c-u;return f?Math.round(1e3*d/f):void 0}}var dt=lt;function ft(e,t){let n=0;const r=dt(50,250);return o=>{const i=o.loaded,s=o.lengthComputable?o.total:void 0,a=i-n,c=r(a),u=i<=s;n=i;const l={loaded:i,total:s,progress:s?i/s:void 0,bytes:a,rate:c||void 0,estimated:c&&s&&u?(s-i)/c:void 0,event:o};l[t?"download":"upload"]=!0,e(l)}}const ht="undefined"!==typeof XMLHttpRequest;var pt=ht&&function(e){return new Promise((function(t,n){let r=e.data;const o=Ze.from(e.headers).normalize(),i=e.responseType;let s,a;function c(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}ie.isFormData(r)&&(Ne.isStandardBrowserEnv||Ne.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.getContentType(/^\s*multipart\/form-data/)?ie.isString(a=o.getContentType())&&o.setContentType(a.replace(/^\s*(multipart\/form-data);+/,"$1")):o.setContentType("multipart/form-data"));let u=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(t+":"+n))}const l=at(e.baseURL,e.url);function d(){if(!u)return;const r=Ze.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),o=i&&"text"!==i&&"json"!==i?u.response:u.responseText,s={data:o,status:u.status,statusText:u.statusText,headers:r,config:e,request:u};rt((function(e){t(e),c()}),(function(e){n(e),c()}),s),u=null}if(u.open(e.method.toUpperCase(),Ie(l,e.params,e.paramsSerializer),!0),u.timeout=e.timeout,"onloadend"in u?u.onloadend=d:u.onreadystatechange=function(){u&&4===u.readyState&&(0!==u.status||u.responseURL&&0===u.responseURL.indexOf("file:"))&&setTimeout(d)},u.onabort=function(){u&&(n(new ue("Request aborted",ue.ECONNABORTED,e,u)),u=null)},u.onerror=function(){n(new ue("Network Error",ue.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const r=e.transitional||Oe;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new ue(t,r.clarifyTimeoutError?ue.ETIMEDOUT:ue.ECONNABORTED,e,u)),u=null},Ne.isStandardBrowserEnv){const t=(e.withCredentials||ct(l))&&e.xsrfCookieName&&ot.read(e.xsrfCookieName);t&&o.set(e.xsrfHeaderName,t)}void 0===r&&o.setContentType(null),"setRequestHeader"in u&&ie.forEach(o.toJSON(),(function(e,t){u.setRequestHeader(t,e)})),ie.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),i&&"json"!==i&&(u.responseType=e.responseType),"function"===typeof e.onDownloadProgress&&u.addEventListener("progress",ft(e.onDownloadProgress,!0)),"function"===typeof e.onUploadProgress&&u.upload&&u.upload.addEventListener("progress",ft(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=t=>{u&&(n(!t||t.type?new nt(null,e,u):t),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const f=ut(l);f&&-1===Ne.protocols.indexOf(f)?n(new ue("Unsupported protocol "+f+":",ue.ERR_BAD_REQUEST,e)):u.send(r||null)}))};const mt={http:le,xhr:pt};ie.forEach(mt,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(n){}Object.defineProperty(e,"adapterName",{value:t})}}));const gt=e=>`- ${e}`,vt=e=>ie.isFunction(e)||null===e||!1===e;var yt={getAdapter:e=>{e=ie.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let i=0;i<t;i++){let t;if(n=e[i],r=n,!vt(n)&&(r=mt[(t=String(n)).toLowerCase()],void 0===r))throw new ue(`Unknown adapter '${t}'`);if(r)break;o[t||"#"+i]=r}if(!r){const e=Object.entries(o).map((([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build")));let n=t?e.length>1?"since :\n"+e.map(gt).join("\n"):" "+gt(e[0]):"as no adapter specified";throw new ue("There is no suitable adapter to dispatch the request "+n,"ERR_NOT_SUPPORT")}return r},adapters:mt};function bt(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new nt(null,e)}function _t(e){bt(e),e.headers=Ze.from(e.headers),e.data=Qe.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);const t=yt.getAdapter(e.adapter||Be.adapter);return t(e).then((function(t){return bt(e),t.data=Qe.call(e,e.transformResponse,t),t.headers=Ze.from(t.headers),t}),(function(t){return et(t)||(bt(e),t&&t.response&&(t.response.data=Qe.call(e,e.transformResponse,t.response),t.response.headers=Ze.from(t.response.headers))),Promise.reject(t)}))}const wt=e=>e instanceof Ze?e.toJSON():e;function Et(e,t){t=t||{};const n={};function r(e,t,n){return ie.isPlainObject(e)&&ie.isPlainObject(t)?ie.merge.call({caseless:n},e,t):ie.isPlainObject(t)?ie.merge({},t):ie.isArray(t)?t.slice():t}function o(e,t,n){return ie.isUndefined(t)?ie.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function i(e,t){if(!ie.isUndefined(t))return r(void 0,t)}function s(e,t){return ie.isUndefined(t)?ie.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function a(n,o,i){return i in t?r(n,o):i in e?r(void 0,n):void 0}const c={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(e,t)=>o(wt(e),wt(t),!0)};return ie.forEach(Object.keys(Object.assign({},e,t)),(function(r){const i=c[r]||o,s=i(e[r],t[r],r);ie.isUndefined(s)&&i!==a||(n[r]=s)})),n}const It="1.5.1",St={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{St[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const Tt={};function Ot(e,t,n){if("object"!==typeof e)throw new ue("options must be an object",ue.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;while(o-- >0){const i=r[o],s=t[i];if(s){const t=e[i],n=void 0===t||s(t,i,e);if(!0!==n)throw new ue("option "+i+" must be "+n,ue.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new ue("Unknown option "+i,ue.ERR_BAD_OPTION)}}St.transitional=function(e,t,n){function r(e,t){return"[Axios v"+It+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,o,i)=>{if(!1===e)throw new ue(r(o," has been removed"+(t?" in "+t:"")),ue.ERR_DEPRECATED);return t&&!Tt[o]&&(Tt[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,i)}};var kt={assertOptions:Ot,validators:St};const Rt=kt.validators;class Ct{constructor(e){this.defaults=e,this.interceptors={request:new Te,response:new Te}}request(e,t){"string"===typeof e?(t=t||{},t.url=e):t=e||{},t=Et(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:o}=t;void 0!==n&&kt.assertOptions(n,{silentJSONParsing:Rt.transitional(Rt.boolean),forcedJSONParsing:Rt.transitional(Rt.boolean),clarifyTimeoutError:Rt.transitional(Rt.boolean)},!1),null!=r&&(ie.isFunction(r)?t.paramsSerializer={serialize:r}:kt.assertOptions(r,{encode:Rt.function,serialize:Rt.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let i=o&&ie.merge(o.common,o[t.method]);o&&ie.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=Ze.concat(i,o);const s=[];let a=!0;this.interceptors.request.forEach((function(e){"function"===typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,s.unshift(e.fulfilled,e.rejected))}));const c=[];let u;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let l,d=0;if(!a){const e=[_t.bind(this),void 0];e.unshift.apply(e,s),e.push.apply(e,c),l=e.length,u=Promise.resolve(t);while(d<l)u=u.then(e[d++],e[d++]);return u}l=s.length;let f=t;d=0;while(d<l){const e=s[d++],t=s[d++];try{f=e(f)}catch(h){t.call(this,h);break}}try{u=_t.call(this,f)}catch(h){return Promise.reject(h)}d=0,l=c.length;while(d<l)u=u.then(c[d++],c[d++]);return u}getUri(e){e=Et(this.defaults,e);const t=at(e.baseURL,e.url);return Ie(t,e.params,e.paramsSerializer)}}ie.forEach(["delete","get","head","options"],(function(e){Ct.prototype[e]=function(t,n){return this.request(Et(n||{},{method:e,url:t,data:(n||{}).data}))}})),ie.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(Et(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}Ct.prototype[e]=t(),Ct.prototype[e+"Form"]=t(!0)}));var At=Ct;class Pt{constructor(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;while(t-- >0)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,o){n.reason||(n.reason=new nt(e,r,o),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;const t=new Pt((function(t){e=t}));return{token:t,cancel:e}}}var Nt=Pt;function xt(e){return function(t){return e.apply(null,t)}}function Dt(e){return ie.isObject(e)&&!0===e.isAxiosError}const Lt={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Lt).forEach((([e,t])=>{Lt[t]=e}));var Mt=Lt;function Ut(e){const t=new At(e),n=r(At.prototype.request,t);return ie.extend(n,At.prototype,t,{allOwnKeys:!0}),ie.extend(n,t,null,{allOwnKeys:!0}),n.create=function(t){return Ut(Et(e,t))},n}const jt=Ut(Be);jt.Axios=At,jt.CanceledError=nt,jt.CancelToken=Nt,jt.isCancel=et,jt.VERSION=It,jt.toFormData=ve,jt.AxiosError=ue,jt.Cancel=jt.CanceledError,jt.all=function(e){return Promise.all(e)},jt.spread=xt,jt.isAxiosError=Dt,jt.mergeConfig=Et,jt.AxiosHeaders=Ze,jt.formToJSON=e=>Ue(ie.isHTMLForm(e)?new FormData(e):e),jt.getAdapter=yt.getAdapter,jt.HttpStatusCode=Mt,jt.default=jt;var Ft=jt},7795:function(e,t,n){n.d(t,{ZF:function(){return r.ZF}});var r=n(7077),o="firebase",i="9.15.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KN)(o,i,"app")},1450:function(e,t,n){n.d(t,{v0:function(){return Sr},JB:function(){return gt},Aj:function(){return _t},oo:function(){return mt},P6:function(){return vt},w7:function(){return wt}});n(7658),n(6229),n(7330),n(2062);var r=n(223),o=n(7077),i=n(5168);n(541);function s(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}Object.create;Object.create;"function"===typeof SuppressedError&&SuppressedError;var a=n(7142);function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,l=new r.LL("auth","Firebase",c()),d=new i.Yd("@firebase/auth");function f(e,...t){d.logLevel<=i["in"].ERROR&&d.error(`Auth (${o.Jn}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(e,...t){throw g(e,...t)}function p(e,...t){return g(e,...t)}function m(e,t,n){const o=Object.assign(Object.assign({},u()),{[t]:n}),i=new r.LL("auth","Firebase",o);return i.create(t,{appName:e.name})}function g(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return l.create(e,...t)}function v(e,t,...n){if(!e)throw g(t,...n)}function y(e){const t="INTERNAL ASSERTION FAILED: "+e;throw f(t),new Error(t)}function b(e,t){e||y(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _=new Map;function w(e){b(e instanceof Function,"Expected a class definition");let t=_.get(e);return t?(b(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,_.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(e,t){const n=(0,o.qX)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),o=n.getOptions();if((0,r.vZ)(o,null!==t&&void 0!==t?t:{}))return e;h(e,"already-initialized")}const i=n.initialize({options:t});return i}function I(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(w);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function T(){return"http:"===O()||"https:"===O()}function O(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(T()||(0,r.ru)()||"connection"in navigator))||navigator.onLine}function R(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e,t){this.shortDelay=e,this.longDelay=t,b(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,r.uI)()||(0,r.b$)()}get(){return k()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(e,t){b(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void y("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void y("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void y("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},x=new C(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function L(e,t,n,o,i={}){return M(e,i,(async()=>{let i={},s={};o&&("GET"===t?s=o:i={body:JSON.stringify(o)});const a=(0,r.xO)(Object.assign({key:e.config.apiKey},s)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),P.fetch()(j(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},i))}))}async function M(e,t,n){e._canInitEmulator=!1;const o=Object.assign(Object.assign({},N),t);try{const t=new F(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const i=await r.json();if("needConfirmation"in i)throw B(e,"account-exists-with-different-credential",i);if(r.ok&&!("errorMessage"in i))return i;{const t=r.ok?i.errorMessage:i.error.message,[n,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw B(e,"credential-already-in-use",i);if("EMAIL_EXISTS"===n)throw B(e,"email-already-in-use",i);if("USER_DISABLED"===n)throw B(e,"user-disabled",i);const a=o[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw m(e,a,s);h(e,a)}}catch(i){if(i instanceof r.ZR)throw i;h(e,"network-request-failed")}}async function U(e,t,n,r,o={}){const i=await L(e,t,n,r,o);return"mfaPendingCredential"in i&&h(e,"multi-factor-auth-required",{_serverResponse:i}),i}function j(e,t,n,r){const o=`${t}${n}?${r}`;return e.config.emulator?A(e.config,o):`${e.config.apiScheme}://${o}`}class F{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(p(this.auth,"network-request-failed"))),x.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function B(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const o=p(e,t,r);return o.customData._tokenResponse=n,o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $(e,t){return L(e,"POST","/v1/accounts:delete",t)}async function V(e,t){return L(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z(e,t=!1){const n=(0,r.m9)(e),o=await n.getIdToken(t),i=q(o);v(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"===typeof i.firebase?i.firebase:void 0,a=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:i,token:o,authTime:H(W(i.auth_time)),issuedAtTime:H(W(i.iat)),expirationTime:H(W(i.exp)),signInProvider:a||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function W(e){return 1e3*Number(e)}function q(e){const[t,n,o]=e.split(".");if(void 0===t||void 0===n||void 0===o)return f("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,r.tV)(n);return e?JSON.parse(e):(f("Failed to decode base64 JWT payload"),null)}catch(i){return f("Caught error parsing JWT payload as JSON",null===i||void 0===i?void 0:i.toString()),null}}function J(e){const t=q(e);return v(t,"internal-error"),v("undefined"!==typeof t.exp,"internal-error"),v("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K(e,t,n=!1){if(n)return t;try{return await t}catch(o){throw o instanceof r.ZR&&G(o)&&e.auth.currentUser===e&&await e.auth.signOut(),o}}function G({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=H(this.lastLoginAt),this.creationTime=H(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z(e){var t;const n=e.auth,r=await e.getIdToken(),o=await K(e,V(n,{idToken:r}));v(null===o||void 0===o?void 0:o.users.length,n,"internal-error");const i=o.users[0];e._notifyReloadListener(i);const s=(null===(t=i.providerUserInfo)||void 0===t?void 0:t.length)?te(i.providerUserInfo):[],a=ee(e.providerData,s),c=e.isAnonymous,u=!(e.email&&i.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Y(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(e,d)}async function Q(e){const t=(0,r.m9)(e);await Z(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ee(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function te(e){return e.map((e=>{var{providerId:t}=e,n=s(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ne(e,t){const n=await M(e,{},(async()=>{const n=(0,r.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:i}=e.config,s=j(e,o,"/v1/token",`key=${i}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",P.fetch()(s,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){v(e.idToken,"internal-error"),v("undefined"!==typeof e.idToken,"internal-error"),v("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):J(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return v(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:o}=await ne(e,t);this.updateTokensAndExpiration(n,r,Number(o))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:o}=t,i=new re;return n&&(v("string"===typeof n,"internal-error",{appName:e}),i.refreshToken=n),r&&(v("string"===typeof r,"internal-error",{appName:e}),i.accessToken=r),o&&(v("number"===typeof o,"internal-error",{appName:e}),i.expirationTime=o),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new re,this.toJSON())}_performRefresh(){return y("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(e,t){v("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class ie{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,o=s(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new X(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Y(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await K(this,this.stsTokenManager.getToken(this.auth,e));return v(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return z(this,e)}reload(){return Q(this)}_assign(e){this!==e&&(v(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new ie(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){v(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Z(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await K(this,$(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,o,i,s,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,d=null!==(r=t.email)&&void 0!==r?r:void 0,f=null!==(o=t.phoneNumber)&&void 0!==o?o:void 0,h=null!==(i=t.photoURL)&&void 0!==i?i:void 0,p=null!==(s=t.tenantId)&&void 0!==s?s:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:b,emailVerified:_,isAnonymous:w,providerData:E,stsTokenManager:I}=t;v(b&&I,e,"internal-error");const S=re.fromJSON(this.name,I);v("string"===typeof b,e,"internal-error"),oe(l,e.name),oe(d,e.name),v("boolean"===typeof _,e,"internal-error"),v("boolean"===typeof w,e,"internal-error"),oe(f,e.name),oe(h,e.name),oe(p,e.name),oe(m,e.name),oe(g,e.name),oe(y,e.name);const T=new ie({uid:b,auth:e,email:d,emailVerified:_,displayName:l,isAnonymous:w,photoURL:h,phoneNumber:f,tenantId:p,stsTokenManager:S,createdAt:g,lastLoginAt:y});return E&&Array.isArray(E)&&(T.providerData=E.map((e=>Object.assign({},e)))),m&&(T._redirectEventId=m),T}static async _fromIdTokenResponse(e,t,n=!1){const r=new re;r.updateFromServerResponse(t);const o=new ie({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Z(o),o}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}se.type="NONE";const ae=se;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(e,t,n){return`firebase:${e}:${t}:${n}`}class ue{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:o}=this.auth;this.fullUserKey=ce(this.userKey,r.apiKey,o),this.fullPersistenceKey=ce("persistence",r.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ie._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ue(w(ae),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let o=r[0]||w(ae);const i=ce(n,e.config.apiKey,e.name);let s=null;for(const u of t)try{const t=await u._get(i);if(t){const n=ie._fromJSON(e,t);u!==o&&(s=n),o=u;break}}catch(c){}const a=r.filter((e=>e._shouldAllowMigration));return o._shouldAllowMigration&&a.length?(o=a[0],s&&await o._set(i,s.toJSON()),await Promise.all(t.map((async e=>{if(e!==o)try{await e._remove(i)}catch(c){}}))),new ue(o,e,n)):new ue(o,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(pe(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(de(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ge(t))return"Blackberry";if(ve(t))return"Webos";if(fe(t))return"Safari";if((t.includes("chrome/")||he(t))&&!t.includes("edge/"))return"Chrome";if(me(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function de(e=(0,r.z$)()){return/firefox\//i.test(e)}function fe(e=(0,r.z$)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function he(e=(0,r.z$)()){return/crios\//i.test(e)}function pe(e=(0,r.z$)()){return/iemobile/i.test(e)}function me(e=(0,r.z$)()){return/android/i.test(e)}function ge(e=(0,r.z$)()){return/blackberry/i.test(e)}function ve(e=(0,r.z$)()){return/webos/i.test(e)}function ye(e=(0,r.z$)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function be(e=(0,r.z$)()){var t;return ye(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function _e(){return(0,r.w1)()&&10===document.documentMode}function we(e=(0,r.z$)()){return ye(e)||me(e)||ve(e)||ge(e)||/windows phone/i.test(e)||pe(e)}function Ee(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(e,t=[]){let n;switch(e){case"Browser":n=le((0,r.z$)());break;case"Worker":n=`${le((0,r.z$)())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${o.Jn}/${i}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{const r=e(t);n(r)}catch(o){r(o)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ke(this),this.idTokenSubscription=new ke(this),this.beforeStateQueue=new Se(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=w(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ue.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(o){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null===r||void 0===r?void 0:r._redirectEventId,s=await this.tryRedirectSignIn(e);n&&n!==i||!(null===s||void 0===s?void 0:s.user)||(r=s.user,o=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(i)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return v(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Z(e)}catch(t){if("auth/network-request-failed"!==(null===t||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=R()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,r.m9)(e):null;return t&&v(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&v(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(w(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r.LL("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&w(e)||this._popupRedirectResolver;v(t,this,"argument-error"),this.redirectPersistenceManager=await ue.create(this,[w(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const o="function"===typeof t?t:t.next.bind(t),i=this._isInitialized?Promise.resolve():this._initializationPromise;return v(i,this,"internal-error"),i.then((()=>o(this.currentUser))),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return v(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ie(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function Oe(e){return(0,r.m9)(e)}class ke{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,r.ne)((e=>this.observer=e))}get next(){return v(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Re(e,t,n){const r=Oe(e);v(r._canInitEmulator,r,"emulator-config-failed"),v(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const o=!!(null===n||void 0===n?void 0:n.disableWarnings),i=Ce(t),{host:s,port:a}=Ae(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${i}//${s}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:o})}),o||Ne()}function Ce(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Ae(e){const t=Ce(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(r);if(o){const e=o[1];return{host:e,port:Pe(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Pe(t)}}}function Pe(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Ne(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return y("not implemented")}_getIdTokenResponse(e){return y("not implemented")}_linkToIdToken(e,t){return y("not implemented")}_getReauthenticationResolver(e){return y("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function De(e,t){return L(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Le(e,t){return U(e,"POST","/v1/accounts:signInWithPassword",D(e,t))}async function Me(e,t){return L(e,"POST","/v1/accounts:sendOobCode",D(e,t))}async function Ue(e,t){return Me(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function je(e,t){return U(e,"POST","/v1/accounts:signInWithEmailLink",D(e,t))}async function Fe(e,t){return U(e,"POST","/v1/accounts:signInWithEmailLink",D(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be extends xe{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Be(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Be(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Le(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return je(e,{email:this._email,oobCode:this._password});default:h(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return De(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Fe(e,{idToken:t,email:this._email,oobCode:this._password});default:h(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $e(e,t){return U(e,"POST","/v1/accounts:signInWithIdp",D(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ve="http://localhost";class He extends xe{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new He(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):h("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,o=s(t,["providerId","signInMethod"]);if(!n||!r)return null;const i=new He(n,r);return i.idToken=o.idToken||void 0,i.accessToken=o.accessToken||void 0,i.secret=o.secret,i.nonce=o.nonce,i.pendingToken=o.pendingToken||null,i}_getIdTokenResponse(e){const t=this.buildRequest();return $e(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,$e(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,$e(e,t)}buildRequest(){const e={requestUri:Ve,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,r.xO)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ze(e,t){return L(e,"POST","/v1/accounts:sendVerificationCode",D(e,t))}async function We(e,t){return U(e,"POST","/v1/accounts:signInWithPhoneNumber",D(e,t))}async function qe(e,t){const n=await U(e,"POST","/v1/accounts:signInWithPhoneNumber",D(e,t));if(n.temporaryProof)throw B(e,"account-exists-with-different-credential",n);return n}const Je={["USER_NOT_FOUND"]:"user-not-found"};async function Ke(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return U(e,"POST","/v1/accounts:signInWithPhoneNumber",D(e,n),Je)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge extends xe{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Ge({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Ge({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return We(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return qe(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Ke(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:o}=e;return n||t||r||o?new Ge({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:o}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ye(e){const t=(0,r.zd)((0,r.pd)(e))["link"],n=t?(0,r.zd)((0,r.pd)(t))["deep_link_id"]:null,o=(0,r.zd)((0,r.pd)(e))["deep_link_id"],i=o?(0,r.zd)((0,r.pd)(o))["link"]:null;return i||o||n||t||e}class Ze{constructor(e){var t,n,o,i,s,a;const c=(0,r.zd)((0,r.pd)(e)),u=null!==(t=c["apiKey"])&&void 0!==t?t:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,d=Xe(null!==(o=c["mode"])&&void 0!==o?o:null);v(u&&l&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=l,this.continueUrl=null!==(i=c["continueUrl"])&&void 0!==i?i:null,this.languageCode=null!==(s=c["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=Ye(e);try{return new Ze(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qe{constructor(){this.providerId=Qe.PROVIDER_ID}static credential(e,t){return Be._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Ze.parseLink(t);return v(n,"argument-error"),Be._fromEmailAndCode(e,n.code,n.tenantId)}}Qe.PROVIDER_ID="password",Qe.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Qe.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class et{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt extends et{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nt extends tt{constructor(){super("facebook.com")}static credential(e){return He._fromParams({providerId:nt.PROVIDER_ID,signInMethod:nt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nt.credentialFromTaggedObject(e)}static credentialFromError(e){return nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return nt.credential(e.oauthAccessToken)}catch(t){return null}}}nt.FACEBOOK_SIGN_IN_METHOD="facebook.com",nt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rt extends tt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return He._fromParams({providerId:rt.PROVIDER_ID,signInMethod:rt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return rt.credentialFromTaggedObject(e)}static credentialFromError(e){return rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return rt.credential(t,n)}catch(r){return null}}}rt.GOOGLE_SIGN_IN_METHOD="google.com",rt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ot extends tt{constructor(){super("github.com")}static credential(e){return He._fromParams({providerId:ot.PROVIDER_ID,signInMethod:ot.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ot.credentialFromTaggedObject(e)}static credentialFromError(e){return ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return ot.credential(e.oauthAccessToken)}catch(t){return null}}}ot.GITHUB_SIGN_IN_METHOD="github.com",ot.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class it extends tt{constructor(){super("twitter.com")}static credential(e,t){return He._fromParams({providerId:it.PROVIDER_ID,signInMethod:it.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return it.credentialFromTaggedObject(e)}static credentialFromError(e){return it.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return it.credential(t,n)}catch(r){return null}}}it.TWITTER_SIGN_IN_METHOD="twitter.com",it.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class st{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const o=await ie._fromIdTokenResponse(e,n,r),i=at(n),s=new st({user:o,providerId:i,_tokenResponse:n,operationType:t});return s}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=at(n);return new st({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function at(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ct extends r.ZR{constructor(e,t,n,r){var o;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,ct.prototype),this.customData={appName:e.name,tenantId:null!==(o=e.tenantId)&&void 0!==o?o:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new ct(e,t,n,r)}}function ut(e,t,n,r){const o="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return o.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw ct._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lt(e,t,n=!1){const r=await K(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return st._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function dt(e,t,n=!1){const{auth:r}=e,o="reauthenticate";try{const i=await K(e,ut(r,o,t,e),n);v(i.idToken,r,"internal-error");const s=q(i.idToken);v(s,r,"internal-error");const{sub:a}=s;return v(e.uid===a,r,"user-mismatch"),st._forOperation(e,o,i)}catch(i){throw"auth/user-not-found"===(null===i||void 0===i?void 0:i.code)&&h(r,"user-mismatch"),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ft(e,t,n=!1){const r="signIn",o=await ut(e,r,t),i=await st._fromIdTokenResponse(e,r,o);return n||await e._updateCurrentUser(i.user),i}async function ht(e,t){return ft(Oe(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function pt(e,t,n){var r;v((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),v("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(v(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(v(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function mt(e,t,n){const o=(0,r.m9)(e),i={requestType:"EMAIL_SIGNIN",email:t};v(n.handleCodeInApp,o,"argument-error"),n&&pt(o,i,n),await Ue(o,i)}function gt(e,t){const n=Ze.parseLink(t);return"EMAIL_SIGNIN"===(null===n||void 0===n?void 0:n.operation)}async function vt(e,t,n){const o=(0,r.m9)(e),i=Qe.credentialWithLink(t,n||S());return v(i._tenantId===(o.tenantId||null),o,"tenant-id-mismatch"),ht(o,i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(e,t,n,o){return(0,r.m9)(e).onIdTokenChanged(t,n,o)}function bt(e,t,n){return(0,r.m9)(e).beforeAuthStateChanged(t,n)}function _t(e,t,n,o){return(0,r.m9)(e).onAuthStateChanged(t,n,o)}function wt(e){return(0,r.m9)(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Et(e,t){return L(e,"POST","/v2/accounts/mfaEnrollment:start",D(e,t))}function It(e,t){return L(e,"POST","/v2/accounts/mfaEnrollment:finalize",D(e,t))}new WeakMap;const St="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(St,"1"),this.storage.removeItem(St),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(){const e=(0,r.z$)();return fe(e)||ye(e)}const kt=1e3,Rt=10;class Ct extends Tt{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ot()&&Ee(),this.fallbackToPolling=we(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},o=this.storage.getItem(n);_e()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Rt):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),kt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ct.type="LOCAL";const At=Ct;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt extends Tt{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Pt.type="SESSION";const Nt=Pt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Dt(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:o}=t.data,i=this.handlersMap[r];if(!(null===i||void 0===i?void 0:i.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(i).map((async e=>e(t.origin,o))),a=await xt(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Lt(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dt.receivers=[];class Mt{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let o,i;return new Promise(((s,a)=>{const c=Lt("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);i={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),o=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(o),s(t.data.response);break;default:clearTimeout(u),clearTimeout(o),a(new Error("invalid_response"));break}}},this.handlers.add(i),r.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{i&&this.removeMessageHandler(i)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(){return window}function jt(e){Ut().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(){return"undefined"!==typeof Ut()["WorkerGlobalScope"]&&"function"===typeof Ut()["importScripts"]}async function Bt(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function $t(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function Vt(){return Ft()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ht="firebaseLocalStorageDb",zt=1,Wt="firebaseLocalStorage",qt="fbase_key";class Jt{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Kt(e,t){return e.transaction([Wt],t?"readwrite":"readonly").objectStore(Wt)}function Gt(){const e=indexedDB.deleteDatabase(Ht);return new Jt(e).toPromise()}function Xt(){const e=indexedDB.open(Ht,zt);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Wt,{keyPath:qt})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Wt)?t(n):(n.close(),await Gt(),t(await Xt()))}))}))}async function Yt(e,t,n){const r=Kt(e,!0).put({[qt]:t,value:n});return new Jt(r).toPromise()}async function Zt(e,t){const n=Kt(e,!1).get(t),r=await new Jt(n).toPromise();return void 0===r?null:r.value}function Qt(e,t){const n=Kt(e,!0).delete(t);return new Jt(n).toPromise()}const en=800,tn=3;class nn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Xt()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>tn)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ft()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Dt._getInstance(Vt()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await Bt(),!this.activeServiceWorker)return;this.sender=new Mt(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&$t()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Xt();return await Yt(e,St,"1"),await Qt(e,St),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Yt(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>Zt(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Qt(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Kt(e,!1).getAll();return new Jt(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:o}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(o)&&(this.notifyListeners(r,o),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),en)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}nn.type="LOCAL";const rn=nn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(e,t){return L(e,"POST","/v2/accounts/mfaSignIn:start",D(e,t))}function sn(e,t){return L(e,"POST","/v2/accounts/mfaSignIn:finalize",D(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function an(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function cn(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=p("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",an().appendChild(r)}))}function un(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
un("rcb"),new C(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ln="recaptcha";async function dn(e,t,n){var r;const o=await n.verify();try{let i;if(v("string"===typeof o,e,"argument-error"),v(n.type===ln,e,"argument-error"),i="string"===typeof t?{phoneNumber:t}:t,"session"in i){const t=i.session;if("phoneNumber"in i){v("enroll"===t.type,e,"internal-error");const n=await Et(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,recaptchaToken:o}});return n.phoneSessionInfo.sessionInfo}{v("signin"===t.type,e,"internal-error");const n=(null===(r=i.multiFactorHint)||void 0===r?void 0:r.uid)||i.multiFactorUid;v(n,e,"missing-multi-factor-info");const s=await on(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:o}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await ze(e,{phoneNumber:i.phoneNumber,recaptchaToken:o});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fn{constructor(e){this.providerId=fn.PROVIDER_ID,this.auth=Oe(e)}verifyPhoneNumber(e,t){return dn(this.auth,e,(0,r.m9)(t))}static credential(e,t){return Ge._fromVerification(e,t)}static credentialFromResult(e){const t=e;return fn.credentialFromTaggedObject(t)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Ge._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function hn(e,t){return t?w(t):(v(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fn.PROVIDER_ID="phone",fn.PHONE_SIGN_IN_METHOD="phone";class pn extends xe{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return $e(e,this._buildIdpRequest())}_linkToIdToken(e,t){return $e(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return $e(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function mn(e){return ft(e.auth,new pn(e),e.bypassAuthState)}function gn(e){const{auth:t,user:n}=e;return v(n,t,"internal-error"),dt(n,new pn(e),e.bypassAuthState)}async function vn(e){const{auth:t,user:n}=e;return v(n,t,"internal-error"),lt(n,new pn(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e,t,n,r,o=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:o,error:i,type:s}=e;if(i)return void this.reject(i);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:o||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return mn;case"linkViaPopup":case"linkViaRedirect":return vn;case"reauthViaPopup":case"reauthViaRedirect":return gn;default:h(this.auth,"internal-error")}}resolve(e){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn=new C(2e3,1e4);class _n extends yn{constructor(e,t,n,r,o){super(e,t,r,o),this.provider=n,this.authWindow=null,this.pollId=null,_n.currentPopupAction&&_n.currentPopupAction.cancel(),_n.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return v(e,this.auth,"internal-error"),e}async onExecution(){b(1===this.filter.length,"Popup operations only handle one event");const e=Lt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(p(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_n.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,bn.get())};e()}}_n.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const wn="pendingRedirect",En=new Map;class In extends yn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=En.get(this.auth._key());if(!e){try{const t=await Sn(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}En.set(this.auth._key(),e)}return this.bypassAuthState||En.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Sn(e,t){const n=kn(t),r=On(e);if(!await r._isAvailable())return!1;const o="true"===await r._get(n);return await r._remove(n),o}function Tn(e,t){En.set(e._key(),t)}function On(e){return w(e._redirectPersistence)}function kn(e){return ce(wn,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rn(e,t,n=!1){const r=Oe(e),o=hn(r,t),i=new In(r,o,n),s=await i.execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Cn=6e5;class An{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!xn(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Nn(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(p(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Cn&&this.cachedEventUids.clear(),this.cachedEventUids.has(Pn(e))}saveEventToCache(e){this.cachedEventUids.add(Pn(e)),this.lastProcessedEventTime=Date.now()}}function Pn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Nn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function xn(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Nn(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dn(e,t={}){return L(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Mn=/^https?/;async function Un(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Dn(e);for(const r of t)try{if(jn(r))return}catch(n){}h(e,"unauthorized-domain")}function jn(e){const t=S(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return""===o.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&o.hostname===r}if(!Mn.test(n))return!1;if(Ln.test(e))return r===e;const o=e.replace(/\./g,"\\."),i=new RegExp("^(.+\\."+o+"|"+o+")$","i");return i.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn=new C(3e4,6e4);function Bn(){const e=Ut().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function $n(e){return new Promise(((t,n)=>{var r,o,i;function s(){Bn(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Bn(),n(p(e,"network-request-failed"))},timeout:Fn.get()})}if(null===(o=null===(r=Ut().gapi)||void 0===r?void 0:r.iframes)||void 0===o?void 0:o.Iframe)t(gapi.iframes.getContext());else{if(!(null===(i=Ut().gapi)||void 0===i?void 0:i.load)){const t=un("iframefcb");return Ut()[t]=()=>{gapi.load?s():n(p(e,"network-request-failed"))},cn(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}s()}})).catch((e=>{throw Vn=null,e}))}let Vn=null;function Hn(e){return Vn=Vn||$n(e),Vn}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn=new C(5e3,15e3),Wn="__/auth/iframe",qn="emulator/auth/iframe",Jn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Kn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Gn(e){const t=e.config;v(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?A(t,qn):`https://${e.config.authDomain}/${Wn}`,i={apiKey:t.apiKey,appName:e.name,v:o.Jn},s=Kn.get(e.config.apiHost);s&&(i.eid=s);const a=e._getFrameworks();return a.length&&(i.fw=a.join(",")),`${n}?${(0,r.xO)(i).slice(1)}`}async function Xn(e){const t=await Hn(e),n=Ut().gapi;return v(n,e,"internal-error"),t.open({where:document.body,url:Gn(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Jn,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const o=p(e,"network-request-failed"),i=Ut().setTimeout((()=>{r(o)}),zn.get());function s(){Ut().clearTimeout(i),n(t)}t.ping(s).then(s,(()=>{r(o)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Zn=500,Qn=600,er="_blank",tr="http://localhost";class nr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function rr(e,t,n,o=Zn,i=Qn){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-o)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Yn),{width:o.toString(),height:i.toString(),top:s,left:a}),l=(0,r.z$)().toLowerCase();n&&(c=he(l)?er:n),de(l)&&(t=t||tr,u.scrollbars="yes");const d=Object.entries(u).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(be(l)&&"_self"!==c)return or(t||"",c),new nr(null);const f=window.open(t||"",c,d);v(f,e,"popup-blocked");try{f.focus()}catch(h){}return new nr(f)}function or(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir="__/auth/handler",sr="emulator/auth/handler";function ar(e,t,n,i,s,a){v(e.config.authDomain,e,"auth-domain-config-required"),v(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:o.Jn,eventId:s};if(t instanceof et){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",(0,r.xb)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof tt){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];return`${cr(e)}?${(0,r.xO)(u).slice(1)}`}function cr({config:e}){return e.emulator?A(e,sr):`https://${e.authDomain}/${ir}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur="webStorageSupport";class lr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Nt,this._completeRedirectFn=Rn,this._overrideRedirectResult=Tn}async _openPopup(e,t,n,r){var o;b(null===(o=this.eventManagers[e._key()])||void 0===o?void 0:o.manager,"_initialize() not called before _openPopup()");const i=ar(e,t,n,S(),r);return rr(e,i,Lt())}async _openRedirect(e,t,n,r){return await this._originValidation(e),jt(ar(e,t,n,S(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(b(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await Xn(e),n=new An(e);return t.register("authEvent",(t=>{v(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(ur,{type:ur},(n=>{var r;const o=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[ur];void 0!==o&&t(!!o),h(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Un(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return we()||fe()||ye()}}const dr=lr;class fr{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return y("unexpected MultiFactorSessionType")}}}class hr extends fr{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new hr(e)}_finalizeEnroll(e,t,n){return It(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return sn(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class pr{constructor(){}static assertion(e){return hr._fromCredential(e)}}pr.FACTOR_ID="phone";var mr="@firebase/auth",gr="0.21.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null===t||void 0===t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yr(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function br(e){(0,o.Xd)(new a.wA("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),{apiKey:i,authDomain:s}=r.options;return((t,r)=>{v(i&&!i.includes(":"),"invalid-api-key",{appName:t.name}),v(!(null===s||void 0===s?void 0:s.includes(":")),"argument-error",{appName:t.name});const o={apiKey:i,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ie(e)},a=new Te(t,r,o);return I(a,n),a})(r,o)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,o.Xd)(new a.wA("auth-internal",(e=>{const t=Oe(e.getProvider("auth").getImmediate());return(e=>new vr(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,o.KN)(mr,gr,yr(e)),(0,o.KN)(mr,gr,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r=300,wr=(0,r.Pz)("authIdTokenMaxAge")||_r;let Er=null;const Ir=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>wr)return;const o=null===n||void 0===n?void 0:n.token;Er!==o&&(Er=o,await fetch(e,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function Sr(e=(0,o.Mq)()){const t=(0,o.qX)(e,"auth");if(t.isInitialized())return t.getImmediate();const n=E(e,{popupRedirectResolver:dr,persistence:[rn,At,Nt]}),i=(0,r.Pz)("authTokenSyncURL");if(i){const e=Ir(i);bt(n,e,(()=>e(n.currentUser))),yt(n,(t=>e(t)))}const s=(0,r.q4)("auth");return s&&Re(n,`http://${s}`),n}br("Browser")},2483:function(e,t,n){n.d(t,{PO:function(){return F},p7:function(){return tt}});n(7658),n(541);var r=n(3396),o=n(4870);
/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
const i="undefined"!==typeof window;function s(e){return e.__esModule||"Module"===e[Symbol.toStringTag]}const a=Object.assign;function c(e,t){const n={};for(const r in t){const o=t[r];n[r]=l(o)?o.map(e):e(o)}return n}const u=()=>{},l=Array.isArray;const d=/\/$/,f=e=>e.replace(d,"");function h(e,t,n="/"){let r,o={},i="",s="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),i=t.slice(c+1,a>-1?a:t.length),o=e(i)),a>-1&&(r=r||t.slice(0,a),s=t.slice(a,t.length)),r=w(null!=r?r:t,n),{fullPath:r+(i&&"?")+i+s,path:r,query:o,hash:s}}function p(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function m(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function g(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&v(t.matched[r],n.matched[o])&&y(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function v(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function y(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!b(e[n],t[n]))return!1;return!0}function b(e,t){return l(e)?_(e,t):l(t)?_(t,e):e===t}function _(e,t){return l(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function w(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),o=r[r.length-1];".."!==o&&"."!==o||r.push("");let i,s,a=n.length-1;for(i=0;i<r.length;i++)if(s=r[i],"."!==s){if(".."!==s)break;a>1&&a--}return n.slice(0,a).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var E,I;(function(e){e["pop"]="pop",e["push"]="push"})(E||(E={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(I||(I={}));function S(e){if(!e)if(i){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),f(e)}const T=/^[^#]+#/;function O(e,t){return e.replace(T,"#")+t}function k(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const R=()=>({left:window.pageXOffset,top:window.pageYOffset});function C(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const o="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=k(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function A(e,t){const n=history.state?history.state.position-t:-1;return n+e}const P=new Map;function N(e,t){P.set(e,t)}function x(e){const t=P.get(e);return P.delete(e),t}let D=()=>location.protocol+"//"+location.host;function L(e,t){const{pathname:n,search:r,hash:o}=t,i=e.indexOf("#");if(i>-1){let t=o.includes(e.slice(i))?e.slice(i).length:1,n=o.slice(t);return"/"!==n[0]&&(n="/"+n),m(n,"")}const s=m(n,e);return s+r+o}function M(e,t,n,r){let o=[],i=[],s=null;const c=({state:i})=>{const a=L(e,location),c=n.value,u=t.value;let l=0;if(i){if(n.value=a,t.value=i,s&&s===c)return void(s=null);l=u?i.position-u.position:0}else r(a);o.forEach((e=>{e(n.value,c,{delta:l,type:E.pop,direction:l?l>0?I.forward:I.back:I.unknown})}))};function u(){s=n.value}function l(e){o.push(e);const t=()=>{const t=o.indexOf(e);t>-1&&o.splice(t,1)};return i.push(t),t}function d(){const{history:e}=window;e.state&&e.replaceState(a({},e.state,{scroll:R()}),"")}function f(){for(const e of i)e();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:u,listen:l,destroy:f}}function U(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?R():null}}function j(e){const{history:t,location:n}=window,r={value:L(e,n)},o={value:t.state};function i(r,i,s){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:D()+e+r;try{t[s?"replaceState":"pushState"](i,"",c),o.value=i}catch(u){console.error(u),n[s?"replace":"assign"](c)}}function s(e,n){const s=a({},t.state,U(o.value.back,e,o.value.forward,!0),n,{position:o.value.position});i(e,s,!0),r.value=e}function c(e,n){const s=a({},o.value,t.state,{forward:e,scroll:R()});i(s.current,s,!0);const c=a({},U(r.value,e,null),{position:s.position+1},n);i(e,c,!1),r.value=e}return o.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:o,push:c,replace:s}}function F(e){e=S(e);const t=j(e),n=M(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const o=a({location:"",base:e,go:r,createHref:O.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function B(e){return"string"===typeof e||e&&"object"===typeof e}function $(e){return"string"===typeof e||"symbol"===typeof e}const V={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},H=Symbol("");var z;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(z||(z={}));function W(e,t){return a(new Error,{type:e,[H]:!0},t)}function q(e,t){return e instanceof Error&&H in e&&(null==t||!!(e.type&t))}const J="[^/]+?",K={sensitive:!1,strict:!1,start:!0,end:!0},G=/[.+*?^${}()[\]/\\]/g;function X(e,t){const n=a({},K,t),r=[];let o=n.start?"^":"";const i=[];for(const a of e){const e=a.length?[]:[90];n.strict&&!a.length&&(o+="/");for(let t=0;t<a.length;t++){const r=a[t];let s=40+(n.sensitive?.25:0);if(0===r.type)t||(o+="/"),o+=r.value.replace(G,"\\$&"),s+=40;else if(1===r.type){const{value:e,repeatable:n,optional:c,regexp:u}=r;i.push({name:e,repeatable:n,optional:c});const l=u||J;if(l!==J){s+=10;try{new RegExp(`(${l})`)}catch(d){throw new Error(`Invalid custom RegExp for param "${e}" (${l}): `+d.message)}}let f=n?`((?:${l})(?:/(?:${l}))*)`:`(${l})`;t||(f=c&&a.length<2?`(?:/${f})`:"/"+f),c&&(f+="?"),o+=f,s+=20,c&&(s+=-8),n&&(s+=-20),".*"===l&&(s+=-50)}e.push(s)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const s=new RegExp(o,n.sensitive?"":"i");function c(e){const t=e.match(s),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",o=i[r-1];n[o.name]=e&&o.repeatable?e.split("/"):e}return n}function u(t){let n="",r=!1;for(const o of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of o)if(0===e.type)n+=e.value;else if(1===e.type){const{value:i,repeatable:s,optional:a}=e,c=i in t?t[i]:"";if(l(c)&&!s)throw new Error(`Provided param "${i}" is an array but it is not repeatable (* or + modifiers)`);const u=l(c)?c.join("/"):c;if(!u){if(!a)throw new Error(`Missing required param "${i}"`);o.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n||"/"}return{re:s,score:r,keys:i,parse:c,stringify:u}}function Y(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function Z(e,t){let n=0;const r=e.score,o=t.score;while(n<r.length&&n<o.length){const e=Y(r[n],o[n]);if(e)return e;n++}if(1===Math.abs(o.length-r.length)){if(Q(r))return 1;if(Q(o))return-1}return o.length-r.length}function Q(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const ee={type:0,value:""},te=/[a-zA-Z0-9_]/;function ne(e){if(!e)return[[]];if("/"===e)return[[ee]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${u}": ${e}`)}let n=0,r=n;const o=[];let i;function s(){i&&o.push(i),i=[]}let a,c=0,u="",l="";function d(){u&&(0===n?i.push({type:0,value:u}):1===n||2===n||3===n?(i.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),u="")}function f(){u+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&d(),s()):":"===a?(d(),n=1):f();break;case 4:f(),n=r;break;case 1:"("===a?n=2:te.test(a)?f():(d(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:d(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${u}"`),d(),s(),o}function re(e,t,n){const r=X(ne(e.path),n);const o=a(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf===!t.record.aliasOf&&t.children.push(o),o}function oe(e,t){const n=[],r=new Map;function o(e){return r.get(e)}function i(e,n,r){const o=!r,c=se(e);c.aliasOf=r&&r.record;const d=le(t,e),f=[c];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)f.push(a({},c,{components:r?r.record.components:c.components,path:e,aliasOf:r?r.record:c}))}let h,p;for(const t of f){const{path:a}=t;if(n&&"/"!==a[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(a&&r+a)}if(h=re(t,n,d),r?r.alias.push(h):(p=p||h,p!==h&&p.alias.push(h),o&&e.name&&!ce(h)&&s(e.name)),c.children){const e=c.children;for(let t=0;t<e.length;t++)i(e[t],h,r&&r.children[t])}r=r||h,(h.record.components&&Object.keys(h.record.components).length||h.record.name||h.record.redirect)&&l(h)}return p?()=>{s(p)}:u}function s(e){if($(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(s),t.alias.forEach(s))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(s),e.alias.forEach(s))}}function c(){return n}function l(e){let t=0;while(t<n.length&&Z(e,n[t])>=0&&(e.record.path!==n[t].record.path||!de(e,n[t])))t++;n.splice(t,0,e),e.record.name&&!ce(e)&&r.set(e.record.name,e)}function d(e,t){let o,i,s,c={};if("name"in e&&e.name){if(o=r.get(e.name),!o)throw W(1,{location:e});0,s=o.record.name,c=a(ie(t.params,o.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params&&ie(e.params,o.keys.map((e=>e.name)))),i=o.stringify(c)}else if("path"in e)i=e.path,o=n.find((e=>e.re.test(i))),o&&(c=o.parse(i),s=o.record.name);else{if(o=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!o)throw W(1,{location:e,currentLocation:t});s=o.record.name,c=a({},t.params,e.params),i=o.stringify(c)}const u=[];let l=o;while(l)u.unshift(l.record),l=l.parent;return{name:s,path:i,params:c,matched:u,meta:ue(u)}}return t=le({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>i(e))),{addRoute:i,resolve:d,removeRoute:s,getRoutes:c,getRecordMatcher:o}}function ie(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function se(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:ae(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function ae(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="object"===typeof n?n[r]:n;return t}function ce(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function ue(e){return e.reduce(((e,t)=>a(e,t.meta)),{})}function le(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function de(e,t){return t.children.some((t=>t===e||de(e,t)))}const fe=/#/g,he=/&/g,pe=/\//g,me=/=/g,ge=/\?/g,ve=/\+/g,ye=/%5B/g,be=/%5D/g,_e=/%5E/g,we=/%60/g,Ee=/%7B/g,Ie=/%7C/g,Se=/%7D/g,Te=/%20/g;function Oe(e){return encodeURI(""+e).replace(Ie,"|").replace(ye,"[").replace(be,"]")}function ke(e){return Oe(e).replace(Ee,"{").replace(Se,"}").replace(_e,"^")}function Re(e){return Oe(e).replace(ve,"%2B").replace(Te,"+").replace(fe,"%23").replace(he,"%26").replace(we,"`").replace(Ee,"{").replace(Se,"}").replace(_e,"^")}function Ce(e){return Re(e).replace(me,"%3D")}function Ae(e){return Oe(e).replace(fe,"%23").replace(ge,"%3F")}function Pe(e){return null==e?"":Ae(e).replace(pe,"%2F")}function Ne(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function xe(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let o=0;o<r.length;++o){const e=r[o].replace(ve," "),n=e.indexOf("="),i=Ne(n<0?e:e.slice(0,n)),s=n<0?null:Ne(e.slice(n+1));if(i in t){let e=t[i];l(e)||(e=t[i]=[e]),e.push(s)}else t[i]=s}return t}function De(e){let t="";for(let n in e){const r=e[n];if(n=Ce(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const o=l(r)?r.map((e=>e&&Re(e))):[r&&Re(r)];o.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function Le(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=l(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}const Me=Symbol(""),Ue=Symbol(""),je=Symbol(""),Fe=Symbol(""),Be=Symbol("");function $e(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Ve(e,t,n,r,o){const i=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise(((s,a)=>{const c=e=>{!1===e?a(W(4,{from:n,to:t})):e instanceof Error?a(e):B(e)?a(W(2,{from:t,to:e})):(i&&r.enterCallbacks[o]===i&&"function"===typeof e&&i.push(e),s())},u=e.call(r&&r.instances[o],t,n,c);let l=Promise.resolve(u);e.length<3&&(l=l.then(c)),l.catch((e=>a(e)))}))}function He(e,t,n,r){const o=[];for(const i of e){0;for(const e in i.components){let a=i.components[e];if("beforeRouteEnter"===t||i.instances[e])if(ze(a)){const s=a.__vccOpts||a,c=s[t];c&&o.push(Ve(c,n,r,i,e))}else{let c=a();0,o.push((()=>c.then((o=>{if(!o)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${i.path}"`));const a=s(o)?o.default:o;i.components[e]=a;const c=a.__vccOpts||a,u=c[t];return u&&Ve(u,n,r,i,e)()}))))}}}return o}function ze(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function We(e){const t=(0,r.f3)(je),n=(0,r.f3)(Fe),i=(0,r.Fl)((()=>t.resolve((0,o.SU)(e.to)))),s=(0,r.Fl)((()=>{const{matched:e}=i.value,{length:t}=e,r=e[t-1],o=n.matched;if(!r||!o.length)return-1;const s=o.findIndex(v.bind(null,r));if(s>-1)return s;const a=Xe(e[t-2]);return t>1&&Xe(r)===a&&o[o.length-1].path!==a?o.findIndex(v.bind(null,e[t-2])):s})),a=(0,r.Fl)((()=>s.value>-1&&Ge(n.params,i.value.params))),c=(0,r.Fl)((()=>s.value>-1&&s.value===n.matched.length-1&&y(n.params,i.value.params)));function l(n={}){return Ke(n)?t[(0,o.SU)(e.replace)?"replace":"push"]((0,o.SU)(e.to)).catch(u):Promise.resolve()}return{route:i,href:(0,r.Fl)((()=>i.value.href)),isActive:a,isExactActive:c,navigate:l}}const qe=(0,r.aZ)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:We,setup(e,{slots:t}){const n=(0,o.qj)(We(e)),{options:i}=(0,r.f3)(je),s=(0,r.Fl)((()=>({[Ye(e.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Ye(e.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const o=t.default&&t.default(n);return e.custom?o:(0,r.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},o)}}}),Je=qe;function Ke(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ge(e,t){for(const n in t){const r=t[n],o=e[n];if("string"===typeof r){if(r!==o)return!1}else if(!l(o)||o.length!==r.length||r.some(((e,t)=>e!==o[t])))return!1}return!0}function Xe(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ye=(e,t,n)=>null!=e?e:null!=t?t:n,Ze=(0,r.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const i=(0,r.f3)(Be),s=(0,r.Fl)((()=>e.route||i.value)),c=(0,r.f3)(Ue,0),u=(0,r.Fl)((()=>{let e=(0,o.SU)(c);const{matched:t}=s.value;let n;while((n=t[e])&&!n.components)e++;return e})),l=(0,r.Fl)((()=>s.value.matched[u.value]));(0,r.JJ)(Ue,(0,r.Fl)((()=>u.value+1))),(0,r.JJ)(Me,l),(0,r.JJ)(Be,s);const d=(0,o.iH)();return(0,r.YP)((()=>[d.value,l.value,e.name]),(([e,t,n],[r,o,i])=>{t&&(t.instances[n]=e,o&&o!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=o.leaveGuards),t.updateGuards.size||(t.updateGuards=o.updateGuards))),!e||!t||o&&v(t,o)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const o=s.value,i=e.name,c=l.value,u=c&&c.components[i];if(!u)return Qe(n.default,{Component:u,route:o});const f=c.props[i],h=f?!0===f?o.params:"function"===typeof f?f(o):f:null,p=e=>{e.component.isUnmounted&&(c.instances[i]=null)},m=(0,r.h)(u,a({},h,t,{onVnodeUnmounted:p,ref:d}));return Qe(n.default,{Component:m,route:o})||m}}});function Qe(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const et=Ze;function tt(e){const t=oe(e.routes,e),n=e.parseQuery||xe,s=e.stringifyQuery||De,d=e.history;const f=$e(),m=$e(),v=$e(),y=(0,o.XI)(V);let b=V;i&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const _=c.bind(null,(e=>""+e)),w=c.bind(null,Pe),I=c.bind(null,Ne);function S(e,n){let r,o;return $(e)?(r=t.getRecordMatcher(e),o=n):o=e,t.addRoute(o,r)}function T(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function O(){return t.getRoutes().map((e=>e.record))}function k(e){return!!t.getRecordMatcher(e)}function P(e,r){if(r=a({},r||y.value),"string"===typeof e){const o=h(n,e,r.path),i=t.resolve({path:o.path},r),s=d.createHref(o.fullPath);return a(o,i,{params:I(i.params),hash:Ne(o.hash),redirectedFrom:void 0,href:s})}let o;if("path"in e)o=a({},e,{path:h(n,e.path,r.path).path});else{const t=a({},e.params);for(const e in t)null==t[e]&&delete t[e];o=a({},e,{params:w(t)}),r.params=w(r.params)}const i=t.resolve(o,r),c=e.hash||"";i.params=_(I(i.params));const u=p(s,a({},e,{hash:ke(c),path:i.path})),l=d.createHref(u);return a({fullPath:u,hash:c,query:s===De?Le(e.query):e.query||{}},i,{redirectedFrom:void 0,href:l})}function D(e){return"string"===typeof e?h(n,e,y.value.path):a({},e)}function L(e,t){if(b!==e)return W(8,{from:t,to:e})}function M(e){return F(e)}function U(e){return M(a(D(e),{replace:!0}))}function j(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=D(r):{path:r},r.params={}),a({query:e.query,hash:e.hash,params:"path"in r?{}:e.params},r)}}function F(e,t){const n=b=P(e),r=y.value,o=e.state,i=e.force,c=!0===e.replace,u=j(n);if(u)return F(a(D(u),{state:"object"===typeof u?a({},o,u.state):o,force:i,replace:c}),t||n);const l=n;let d;return l.redirectedFrom=t,!i&&g(s,r,n)&&(d=W(16,{to:l,from:r}),re(r,r,!0,!1)),(d?Promise.resolve(d):z(l,r)).catch((e=>q(e)?q(e,2)?e:ne(e):ee(e,l,r))).then((e=>{if(e){if(q(e,2))return F(a({replace:c},D(e.to),{state:"object"===typeof e.to?a({},o,e.to.state):o,force:i}),t||l)}else e=K(l,r,!0,c,o);return J(l,r,e),e}))}function B(e,t){const n=L(e,t);return n?Promise.reject(n):Promise.resolve()}function H(e){const t=ae.values().next().value;return t&&"function"===typeof t.runWithContext?t.runWithContext(e):e()}function z(e,t){let n;const[r,o,i]=nt(e,t);n=He(r.reverse(),"beforeRouteLeave",e,t);for(const a of r)a.leaveGuards.forEach((r=>{n.push(Ve(r,e,t))}));const s=B.bind(null,e,t);return n.push(s),ue(n).then((()=>{n=[];for(const r of f.list())n.push(Ve(r,e,t));return n.push(s),ue(n)})).then((()=>{n=He(o,"beforeRouteUpdate",e,t);for(const r of o)r.updateGuards.forEach((r=>{n.push(Ve(r,e,t))}));return n.push(s),ue(n)})).then((()=>{n=[];for(const r of i)if(r.beforeEnter)if(l(r.beforeEnter))for(const o of r.beforeEnter)n.push(Ve(o,e,t));else n.push(Ve(r.beforeEnter,e,t));return n.push(s),ue(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=He(i,"beforeRouteEnter",e,t),n.push(s),ue(n)))).then((()=>{n=[];for(const r of m.list())n.push(Ve(r,e,t));return n.push(s),ue(n)})).catch((e=>q(e,8)?e:Promise.reject(e)))}function J(e,t,n){v.list().forEach((r=>H((()=>r(e,t,n)))))}function K(e,t,n,r,o){const s=L(e,t);if(s)return s;const c=t===V,u=i?history.state:{};n&&(r||c?d.replace(e.fullPath,a({scroll:c&&u&&u.scroll},o)):d.push(e.fullPath,o)),y.value=e,re(e,t,n,c),ne()}let G;function X(){G||(G=d.listen(((e,t,n)=>{if(!ce.listening)return;const r=P(e),o=j(r);if(o)return void F(a(o,{replace:!0}),r).catch(u);b=r;const s=y.value;i&&N(A(s.fullPath,n.delta),R()),z(r,s).catch((e=>q(e,12)?e:q(e,2)?(F(e.to,r).then((e=>{q(e,20)&&!n.delta&&n.type===E.pop&&d.go(-1,!1)})).catch(u),Promise.reject()):(n.delta&&d.go(-n.delta,!1),ee(e,r,s)))).then((e=>{e=e||K(r,s,!1),e&&(n.delta&&!q(e,8)?d.go(-n.delta,!1):n.type===E.pop&&q(e,20)&&d.go(-1,!1)),J(r,s,e)})).catch(u)})))}let Y,Z=$e(),Q=$e();function ee(e,t,n){ne(e);const r=Q.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function te(){return Y&&y.value!==V?Promise.resolve():new Promise(((e,t)=>{Z.add([e,t])}))}function ne(e){return Y||(Y=!e,X(),Z.list().forEach((([t,n])=>e?n(e):t())),Z.reset()),e}function re(t,n,o,s){const{scrollBehavior:a}=e;if(!i||!a)return Promise.resolve();const c=!o&&x(A(t.fullPath,0))||(s||!o)&&history.state&&history.state.scroll||null;return(0,r.Y3)().then((()=>a(t,n,c))).then((e=>e&&C(e))).catch((e=>ee(e,t,n)))}const ie=e=>d.go(e);let se;const ae=new Set,ce={currentRoute:y,listening:!0,addRoute:S,removeRoute:T,hasRoute:k,getRoutes:O,resolve:P,options:e,push:M,replace:U,go:ie,back:()=>ie(-1),forward:()=>ie(1),beforeEach:f.add,beforeResolve:m.add,afterEach:v.add,onError:Q.add,isReady:te,install(e){const t=this;e.component("RouterLink",Je),e.component("RouterView",et),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,o.SU)(y)}),i&&!se&&y.value===V&&(se=!0,M(d.location).catch((e=>{0})));const n={};for(const o in V)Object.defineProperty(n,o,{get:()=>y.value[o],enumerable:!0});e.provide(je,t),e.provide(Fe,(0,o.Um)(n)),e.provide(Be,y);const r=e.unmount;ae.add(e),e.unmount=function(){ae.delete(e),ae.size<1&&(b=V,G&&G(),G=null,y.value=V,se=!1,Y=!1),r()}}};function ue(e){return e.reduce(((e,t)=>e.then((()=>H(t)))),Promise.resolve())}return ce}function nt(e,t){const n=[],r=[],o=[],i=Math.max(t.matched.length,e.matched.length);for(let s=0;s<i;s++){const i=t.matched[s];i&&(e.matched.find((e=>v(e,i)))?r.push(i):n.push(i));const a=e.matched[s];a&&(t.matched.find((e=>v(e,a)))||o.push(a))}return[n,r,o]}}}]);
//# sourceMappingURL=chunk-vendors.50079c95.js.map