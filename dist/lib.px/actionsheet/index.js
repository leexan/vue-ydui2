/*! vue-ydui2 v1.2.6 by wzf/vue-ydui2 (c) 2019 Licensed MIT */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ydui=t():e.ydui=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="/dist/",t(0)}({0:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.ActionSheet=void 0;var i=n(161),r=o(i);t.ActionSheet=r.default},1:function(e,t){e.exports=function(e,t,n,o){var i,r=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(i=e,r=e.default);var a="function"==typeof r?r.options:r;if(t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),n&&(a._scopeId=n),o){var c=a.computed||(a.computed={});Object.keys(o).forEach(function(e){var t=o[e];c[e]=function(){return t}})}return{esModule:i,exports:r,options:a}}},2:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(o[r]=!0)}for(i=0;i<t.length;i++){var s=t[i];"number"==typeof s[0]&&o[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},3:function(e,t,n){function o(e){for(var t=0;t<e.length;t++){var n=e[t],o=u[n.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](n.parts[i]);for(;i<n.parts.length;i++)o.parts.push(r(n.parts[i]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{for(var s=[],i=0;i<n.parts.length;i++)s.push(r(n.parts[i]));u[n.id]={id:n.id,refs:1,parts:s}}}}function i(){var e=document.createElement("style");return e.type="text/css",f.appendChild(e),e}function r(e){var t,n,o=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(o){if(h)return m;o.parentNode.removeChild(o)}if(v){var r=p++;o=d||(d=i()),t=s.bind(null,o,r,!1),n=s.bind(null,o,r,!0)}else o=i(),t=a.bind(null,o),n=function(){o.parentNode.removeChild(o)};return t(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;t(e=o)}else n()}}function s(e,t,n,o){var i=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=g(t,i);else{var r=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(r,s[t]):e.appendChild(r)}}function a(e,t){var n=t.css,o=t.media,i=t.sourceMap;if(o&&e.setAttribute("media",o),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document,l=n(4),u={},f=c&&(document.head||document.getElementsByTagName("head")[0]),d=null,p=0,h=!1,m=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){h=n;var i=l(e,t);return o(i),function(t){for(var n=[],r=0;r<i.length;r++){var s=i[r],a=u[s.id];a.refs--,n.push(a)}t?(i=l(e,t),o(i)):i=[];for(var r=0;r<n.length;r++){var a=n[r];if(0===a.refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete u[a.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},4:function(e,t){e.exports=function(e,t){for(var n=[],o={},i=0;i<t.length;i++){var r=t[i],s=r[0],a=r[1],c=r[2],l=r[3],u={id:e+":"+i,css:a,media:c,sourceMap:l};o[s]?o[s].parts.push(u):n.push(o[s]={id:s,parts:[u]})}return n}},5:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e=function(e){e.preventDefault(),e.stopPropagation()},t=!1;return{lock:function(n){t||(t=!0,(n||document).addEventListener("touchmove",e))},unlock:function(n){t=!1,(n||document).removeEventListener("touchmove",e)}}}(),o=function(){return{lock:function(e){i&&l(e||document.body,"g-fix-ios-prevent-scroll")},unlock:function(e){i&&u(e||document.body,"g-fix-ios-prevent-scroll")}}}(),i=!!(window.navigator&&window.navigator.userAgent||"").match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),r=function(e){var t=/^#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?$/,n=/^[rR][gG][bB][aA]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){3}\s*(\.|\d+\.)?\d+\s*\)$/,o=/^[rR][gG][bB]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){2}(25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/;return t.test(e)||n.test(e)||o.test(e)},s=function(e){for(var t=e;t&&"HTML"!==t.tagName&&"BODY"!==t.tagName&&1===t.nodeType;){var n=document.defaultView.getComputedStyle(t).overflowY;if("scroll"===n||"auto"===n)return t;t=t.parentNode}return window},a=function(e,t){var n=e===window?document.body.offsetHeight:e.offsetHeight,o=e===window?0:e.getBoundingClientRect().top,i=t.getBoundingClientRect().top-o,r=i+t.offsetHeight;return i>=0&&i<n||r>0&&r<=n},c=function(e,t){return t=t||"",!(0===t.replace(/\s/g,"").length||!e)&&new RegExp(" "+t+" ").test(" "+e.className+" ")},l=function(e,t){c(e,t)||(e.className=""===e.className?t:e.className+" "+t)},u=function(e,t){if(c(e,t)){for(var n=" "+e.className.replace(/[\t\r\n]/g,"")+" ";n.indexOf(" "+t+" ")>=0;)n=n.replace(" "+t+" "," ");e.className=n.replace(/^\s+|\s+$/g,"")}},f=function(e){function t(n,o,i){if(n===o)return void("function"==typeof r&&r());var s=n+i>o?o:n+i;n>o&&(s=n-i<o?o:n-i),e===window?window.scrollTo(s,s):e.scrollTop=s,window.requestAnimationFrame(function(){return t(s,o,i)})}var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=arguments[2],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,r=arguments[4];window.requestAnimationFrame||(window.requestAnimationFrame=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(e){return window.setTimeout(e,1e3/60)});var s=Math.abs(n-o),a=Math.ceil(s/i*50);t(n,o,a)};t.pageScroll=n,t.preventScroll=o,t.isIOS=i,t.isColor=r,t.getScrollview=s,t.checkInview=a,t.addClass=l,t.removeClass=u,t.scrollTop=f},8:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(5);t.default={name:"yd-mask",data:function(){return{show:this.value}},props:{value:{type:Boolean,default:!1},bgcolor:{type:String,default:"#000"},zindex:{default:1500},opacity:{default:.5},animated:{type:Boolean,default:!0}},watch:{value:function(e){var t=this;this.show=e,o.isIOS&&(e?(0,o.addClass)(this.scrollView,"g-fix-ios-overflow-scrolling-bug"):setTimeout(function(){(0,o.removeClass)(t.scrollView,"g-fix-ios-overflow-scrolling-bug")},200))}},computed:{styles:function(){var e={"z-index":this.zindex,"background-color":this.bgcolor};return this.show&&(e.opacity=this.opacity,e["pointer-events"]="auto"),e}},mounted:function(){this.scrollView=(0,o.getScrollview)(this.$el)},beforeDestroy:function(){o.isIOS&&(0,o.removeClass)(this.scrollView,"g-fix-ios-overflow-scrolling-bug")}}},9:function(e,t,n){t=e.exports=n(2)(),t.push([e.id,".yd-mask{position:fixed;bottom:0;right:0;left:0;top:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;pointer-events:none;-webkit-transition:opacity .2s ease-in;transition:opacity .2s ease-in;opacity:0}",""])},10:function(e,t,n){n(12);var o=n(1)(n(8),n(11),null,null);e.exports=o.exports},11:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"yd-mask",style:e.styles},[e._t("default")],2)},staticRenderFns:[]}},12:function(e,t,n){var o=n(9);"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);n(3)("5e6e0bf2",o,!0)},40:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(5),r=n(10),s=o(r);t.default={name:"yd-actionsheet",components:{"yd-mask":s.default},data:function(){return{show:this.value}},props:{value:{type:Boolean,default:!1},items:{type:Array,required:!0},cancel:String,maskerOpacity:{validator:function(e){return/^([0]|[1-9]\d*)?(\.\d*)?$/.test(e)},default:.5}},watch:{value:function(e){i.isIOS&&(e?i.pageScroll.lock():i.pageScroll.unlock()),this.show=e}},methods:{itemClick:function(e){e&&("function"==typeof e.callback&&e.callback(e),!e.stay&&this.close())},close:function(){this.$emit("input",!1)}},destroyed:function(){this.close(),i.pageScroll.unlock()}}},124:function(e,t,n){t=e.exports=n(2)(),t.push([e.id,'.yd-actionsheet{text-align:center;position:fixed;bottom:0;left:0;width:100%;z-index:1502;background-color:#efeff4;-webkit-transform:translateY(100%);transform:translateY(100%);-webkit-transition:-webkit-transform .2s;transition:-webkit-transform .2s;transition:transform .2s;transition:transform .2s,-webkit-transform .2s}.yd-actionsheet-active{-webkit-transform:translate(0);transform:translate(0)}.yd-actionsheet-item{display:block;position:relative;font-size:14px;color:#555;height:50px;line-height:50px;background-color:#fff}.yd-actionsheet-item:after{height:1px;position:absolute;z-index:2;bottom:0;left:0;content:"";width:100%;background-image:-webkit-gradient(linear,left bottom,left top,color-stop(50%,#ececec),color-stop(50%,transparent));background-image:-webkit-linear-gradient(bottom,#ececec 50%,transparent 0);background-image:linear-gradient(0deg,#ececec 50%,transparent 0)}.yd-actionsheet-action{display:block;margin-top:7px;font-size:14px;color:#555;height:50px;line-height:50px;background-color:#fff}',""])},161:function(e,t,n){n(315);var o=n(1)(n(40),n(242),null,null);e.exports=o.exports},242:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("yd-mask",{attrs:{opacity:e.maskerOpacity},nativeOn:{click:function(t){return e.close(t)}},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}}),e._v(" "),n("div",{staticClass:"yd-actionsheet",class:e.show?"yd-actionsheet-active":""},[e._l(e.items,function(t,o){return n("a",{key:o,staticClass:"yd-actionsheet-item",attrs:{href:"javascript:;"},on:{click:function(n){return n.stopPropagation(),e.itemClick(t)}}},[e._v(e._s(t.label))])}),e._v(" "),e.cancel?n("a",{staticClass:"yd-actionsheet-action",attrs:{href:"javascript:;"},on:{click:function(t){return t.stopPropagation(),e.close(t)}}},[e._v(e._s(e.cancel))]):e._e()],2)],1)},staticRenderFns:[]}},315:function(e,t,n){var o=n(124);"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);n(3)("2bef2738",o,!0)}})});