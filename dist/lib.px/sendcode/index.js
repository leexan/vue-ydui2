/*! vue-ydui2 v1.2.6 by wzf/vue-ydui2 (c) 2019 Licensed MIT */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ydui=e():t.ydui=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="/dist/",e(0)}({0:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.SendCode=void 0;var o=n(221),i=r(o);e.SendCode=i.default},1:function(t,e){t.exports=function(t,e,n,r){var o,i=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(o=t,i=t.default);var s="function"==typeof i?i.options:i;if(e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),n&&(s._scopeId=n),r){var l=s.computed||(s.computed={});Object.keys(r).forEach(function(t){var e=r[t];l[t]=function(){return e}})}return{esModule:o,exports:i,options:s}}},2:function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},3:function(t,e,n){function r(t){for(var e=0;e<t.length;e++){var n=t[e],r=c[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(i(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var a=[],o=0;o<n.parts.length;o++)a.push(i(n.parts[o]));c[n.id]={id:n.id,refs:1,parts:a}}}}function o(){var t=document.createElement("style");return t.type="text/css",u.appendChild(t),t}function i(t){var e,n,r=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(r){if(g)return b;r.parentNode.removeChild(r)}if(y){var i=p++;r=f||(f=o()),e=a.bind(null,r,i,!1),n=a.bind(null,r,i,!0)}else r=o(),e=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}function a(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=h(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function s(t,e){var n=e.css,r=e.media,o=e.sourceMap;if(r&&t.setAttribute("media",r),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var l="undefined"!=typeof document,d=n(4),c={},u=l&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,g=!1,b=function(){},y="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){g=n;var o=d(t,e);return r(o),function(e){for(var n=[],i=0;i<o.length;i++){var a=o[i],s=c[a.id];s.refs--,n.push(s)}e?(o=d(t,e),r(o)):o=[];for(var i=0;i<n.length;i++){var s=n[i];if(0===s.refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete c[s.id]}}}};var h=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},4:function(t,e){t.exports=function(t,e){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=i[0],s=i[1],l=i[2],d=i[3],c={id:t+":"+o,css:s,media:l,sourceMap:d};r[a]?r[a].parts.push(c):n.push(r[a]={id:a,parts:[c]})}return n}},5:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){var t=function(t){t.preventDefault(),t.stopPropagation()},e=!1;return{lock:function(n){e||(e=!0,(n||document).addEventListener("touchmove",t))},unlock:function(n){e=!1,(n||document).removeEventListener("touchmove",t)}}}(),r=function(){return{lock:function(t){o&&d(t||document.body,"g-fix-ios-prevent-scroll")},unlock:function(t){o&&c(t||document.body,"g-fix-ios-prevent-scroll")}}}(),o=!!(window.navigator&&window.navigator.userAgent||"").match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),i=function(t){var e=/^#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?$/,n=/^[rR][gG][bB][aA]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){3}\s*(\.|\d+\.)?\d+\s*\)$/,r=/^[rR][gG][bB]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){2}(25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/;return e.test(t)||n.test(t)||r.test(t)},a=function(t){for(var e=t;e&&"HTML"!==e.tagName&&"BODY"!==e.tagName&&1===e.nodeType;){var n=document.defaultView.getComputedStyle(e).overflowY;if("scroll"===n||"auto"===n)return e;e=e.parentNode}return window},s=function(t,e){var n=t===window?document.body.offsetHeight:t.offsetHeight,r=t===window?0:t.getBoundingClientRect().top,o=e.getBoundingClientRect().top-r,i=o+e.offsetHeight;return o>=0&&o<n||i>0&&i<=n},l=function(t,e){return e=e||"",!(0===e.replace(/\s/g,"").length||!t)&&new RegExp(" "+e+" ").test(" "+t.className+" ")},d=function(t,e){l(t,e)||(t.className=""===t.className?e:t.className+" "+e)},c=function(t,e){if(l(t,e)){for(var n=" "+t.className.replace(/[\t\r\n]/g,"")+" ";n.indexOf(" "+e+" ")>=0;)n=n.replace(" "+e+" "," ");t.className=n.replace(/^\s+|\s+$/g,"")}},u=function(t){function e(n,r,o){if(n===r)return void("function"==typeof i&&i());var a=n+o>r?r:n+o;n>r&&(a=n-o<r?r:n-o),t===window?window.scrollTo(a,a):t.scrollTop=a,window.requestAnimationFrame(function(){return e(a,r,o)})}var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments[2],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,i=arguments[4];window.requestAnimationFrame||(window.requestAnimationFrame=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)});var a=Math.abs(n-r),s=Math.ceil(a/o*50);e(n,r,s)};e.pageScroll=n,e.preventScroll=r,e.isIOS=o,e.isColor=i,e.getScrollview=a,e.checkInview=s,e.addClass=d,e.removeClass=c,e.scrollTop=u},23:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(5);e.default={name:"yd-button",props:{disabled:Boolean,actionType:{validator:function(t){return["button","submit","reset"].indexOf(t)>-1},default:"button"},type:{validator:function(t){return["primary","danger","warning","hollow","disabled"].indexOf(t)>-1},default:"primary"},size:{validator:function(t){return["mini","small","large"].indexOf(t)>-1}},bgcolor:{validator:function(t){return!t||(0,r.isColor)(t)}},color:{validator:function(t){return!t||(0,r.isColor)(t)}},shape:{validator:function(t){return["square","circle","angle"].indexOf(t)>-1},default:"square"},loading:{type:Boolean,default:!1},loadingColor:{validator:function(t){return!t||(0,r.isColor)(t)},default:"#FFF"},loadingTxt:String},computed:{rollingClasses:function(){var t="";return t="mini"===this.size?"yd-btn-rolling-mini":this.size&&"small"!==this.size?"yd-btn-rolling-large":"yd-btn-rolling-small"},classes:function(){var t="";t="mini"===this.size?"yd-btn-mini":"large"===this.size?"yd-btn-block":"yd-btn";var e=" yd-btn-"+this.type;this.bgcolor&&(e=""),this.disabled&&(e=" yd-btn-disabled");var n="";return n="angle"===this.shape?" yd-btn-angle":"circle"===this.shape?" yd-btn-circle":"",t+e+n}}}},28:function(t,e,n){e=t.exports=n(2)(),e.push([t.id,'@-webkit-keyframes yd-kf-rolling{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes yd-kf-rolling{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.yd-button{padding:0 12px}.yd-btn{text-align:center;position:relative;border:none;pointer-events:auto;-webkit-user-select:none;-ms-user-select:none;user-select:none;height:30px;font-size:12px;display:inline-block;padding:0 10px;box-sizing:content-box;border-radius:2px;white-space:nowrap}.yd-btn-loading{width:100%;height:100%;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;pointer-events:none;position:absolute;top:0;left:0;z-index:0}.yd-btn-block{border:none;width:100%;display:block;font-size:15px;height:45px;margin-top:0;border-radius:3px}.yd-btn-block,.yd-btn-mini{text-align:center;position:relative;pointer-events:auto;-webkit-user-select:none;-ms-user-select:none;user-select:none}.yd-btn-mini{border:none;font-size:10px;border-radius:2px;white-space:nowrap;vertical-align:middle;padding:0 10px;height:22px}.yd-btn-primary{color:#fff}.yd-btn-primary:not(.yd-btn-loading){background-color:#04be02}.yd-btn-primary:not(.yd-btn-loading):active{background-color:#04ab02}.yd-btn-danger{color:#fff}.yd-btn-danger:not(.yd-btn-loading){background-color:#ef4f4f}.yd-btn-danger:not(.yd-btn-loading):active{background-color:#d74747}.yd-btn-warning{color:#fff}.yd-btn-warning:not(.yd-btn-loading){background-color:#ffb400}.yd-btn-warning:not(.yd-btn-loading):active{background-color:#e6a200}.yd-btn-disabled{background-color:#ccc;color:#f0f0f0;pointer-events:none}.yd-btn-disabled:active{background-color:#b8b8b8}.yd-btn-hollow{color:#454545;border:1px solid #eaeaea}.yd-btn-hollow:not(.yd-btn-loading){background-color:#fff}.yd-btn-hollow:not(.yd-btn-loading):active{background-color:#f7f7f7}.yd-btn-hollow.yd-btn-mini{border:none}.yd-btn-hollow.yd-btn-mini:after{position:absolute;z-index:2;top:-50%;left:-50%;content:"";width:200%;height:200%;-webkit-transform:scale(.5);transform:scale(.5);border:1px solid #ccc;border-radius:4px}.yd-btn-hollow .yd-btn-rolling>i,.yd-btn-hollow .yd-btn-rolling>i:after{border:1px solid #ccc;border-top-color:transparent}.yd-btn-circle{border-radius:200px}.yd-btn-angle{border-radius:0}.yd-btn-angle.yd-btn-hollow.yd-btn-mini:after{border-radius:0!important}.yd-btn-rolling{position:relative}.yd-btn-rolling-mini{width:10px;height:10px}.yd-btn-rolling-mini>i{margin-left:-5px;margin-top:-5px}.yd-btn-rolling-small{width:12px;height:12px}.yd-btn-rolling-small>i{margin-left:-6px;margin-top:-6px}.yd-btn-rolling-large{width:18px;height:18px}.yd-btn-rolling-large>i{margin-left:-9px;margin-top:-9px}.yd-btn-rolling>i,.yd-btn-rolling>i:after{width:inherit;height:inherit;border:1px solid #fff;position:absolute;border-top-color:transparent;border-radius:50%}.yd-btn-rolling>i{top:50%;left:50%;-webkit-animation:yd-kf-rolling .5s linear infinite;animation:yd-kf-rolling .5s linear infinite}.yd-btn-rolling>i:after{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.hairline .yd-btn-block:not(.hairline .yd-btn-mini){border:.5px solid #dedede}',""])},29:function(t,e,n){n(34);var r=n(1)(n(23),n(32),null,null);t.exports=r.exports},32:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{class:t.classes,style:{backgroundColor:t.bgcolor,color:t.color},attrs:{disabled:t.disabled||t.loading,type:t.actionType}},[t.loading?n("span",{staticClass:"yd-btn-loading"},[n("span",{staticClass:"yd-btn-rolling",class:t.rollingClasses,style:{marginRight:t.loadingTxt?"8px":"0"}},[n("i")]),t._v(" "),"large"===t.size?[t._v(t._s(t.loadingTxt))]:t._e()],2):t._e(),t._v(" "),n("span",{style:{visibility:t.loading?"hidden":""}},[t._t("default")],2)])},staticRenderFns:[]}},34:function(t,e,n){var r=n(28);"string"==typeof r&&(r=[[t.id,r,""]]),r.locals&&(t.exports=r.locals);n(3)("8591b358",r,!0)},100:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(29),i=r(o);e.default={name:"yd-sendcode",extends:i.default,components:{"yd-sendcode-button":i.default},data:function(){return{tmpStr:this.initStr,timer:null,start:!1,runSecond:this.second,lastSecond:0}},props:{initStr:{type:String,default:"获取短信验证码"},second:{default:60,validator:function(t){return/^\d*$/.test(t)}},runStr:{type:String,default:"{%s}秒后重新获取"},resetStr:{type:String,default:"重新获取验证码"},value:{type:Boolean,default:!1},storageKey:{type:String}},methods:{run:function(){var t=this,e=this.lastSecond,n=e?e:this.runSecond;if(this.storageKey){var r=(new Date).getTime()+1e3*n;window.sessionStorage.setItem(this.storageKey,r)}e||(this.tmpStr=this.getStr(n)),this.timer=setInterval(function(){n--,t.tmpStr=t.getStr(n),n<=0&&t.timeout()},1e3)},timeout:function(){this.tmpStr=this.resetStr,this.start=!1,this.$emit("input",!1),clearInterval(this.timer)},getStr:function(t){return this.runStr.replace(/\{([^{]*?)%s(.*?)\}/g,t)}},watch:{value:function(t){this.start=t,t?this.run():(clearInterval(this.timer),this.tmpStr=this.initStr,this.storageKey&&(window.sessionStorage.removeItem(this.storageKey),this.lastSecond=0))}},created:function(){var t=~~((window.sessionStorage.getItem(this.storageKey)-(new Date).getTime())/1e3);t>0&&this.storageKey&&(this.$emit("input",!0),this.tmpStr=this.getStr(t),this.lastSecond=t)},beforeDestroy:function(){!this.storageKey&&this.timeout()}}},221:function(t,e,n){var r=n(1)(n(100),n(251),null,null);t.exports=r.exports},251:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("yd-sendcode-button",{class:t.start?"btn-disabled":"",style:{backgroundColor:t.bgcolor,color:t.color},attrs:{size:t.size,type:t.type,"action-type":t.actionType,disabled:t.start}},[t._v(t._s(t.tmpStr)+"\n")])},staticRenderFns:[]}}})});