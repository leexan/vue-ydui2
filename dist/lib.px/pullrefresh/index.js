/*! vue-ydui2 v1.2.6 by wzf/vue-ydui2 (c) 2019 Licensed MIT */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ydui=e():t.ydui=e()}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return t[i].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="/dist/",e(0)}({0:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.PullRefresh=void 0;var r=n(210),o=i(r);e.PullRefresh=o.default},1:function(t,e){t.exports=function(t,e,n,i){var r,o=t=t||{},f=typeof t.default;"object"!==f&&"function"!==f||(r=t,o=t.default);var a="function"==typeof o?o.options:o;if(e&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns),n&&(a._scopeId=n),i){var s=a.computed||(a.computed={});Object.keys(i).forEach(function(t){var e=i[t];s[t]=function(){return e}})}return{esModule:r,exports:o,options:a}}},2:function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(i[o]=!0)}for(r=0;r<e.length;r++){var f=e[r];"number"==typeof f[0]&&i[f[0]]||(n&&!f[2]?f[2]=n:n&&(f[2]="("+f[2]+") and ("+n+")"),t.push(f))}},t}},3:function(t,e,n){function i(t){for(var e=0;e<t.length;e++){var n=t[e],i=l[n.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](n.parts[r]);for(;r<n.parts.length;r++)i.parts.push(o(n.parts[r]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{for(var f=[],r=0;r<n.parts.length;r++)f.push(o(n.parts[r]));l[n.id]={id:n.id,refs:1,parts:f}}}}function r(){var t=document.createElement("style");return t.type="text/css",d.appendChild(t),t}function o(t){var e,n,i=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(i){if(c)return p;i.parentNode.removeChild(i)}if(F){var o=u++;i=T||(T=r()),e=f.bind(null,i,o,!1),n=f.bind(null,i,o,!0)}else i=r(),e=a.bind(null,i),n=function(){i.parentNode.removeChild(i)};return e(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;e(t=i)}else n()}}function f(t,e,n,i){var r=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=h(e,r);else{var o=document.createTextNode(r),f=t.childNodes;f[e]&&t.removeChild(f[e]),f.length?t.insertBefore(o,f[e]):t.appendChild(o)}}function a(t,e){var n=e.css,i=e.media,r=e.sourceMap;if(i&&t.setAttribute("media",i),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var s="undefined"!=typeof document,v=n(4),l={},d=s&&(document.head||document.getElementsByTagName("head")[0]),T=null,u=0,c=!1,p=function(){},F="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){c=n;var r=v(t,e);return i(r),function(e){for(var n=[],o=0;o<r.length;o++){var f=r[o],a=l[f.id];a.refs--,n.push(a)}e?(r=v(t,e),i(r)):r=[];for(var o=0;o<n.length;o++){var a=n[o];if(0===a.refs){for(var s=0;s<a.parts.length;s++)a.parts[s]();delete l[a.id]}}}};var h=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},4:function(t,e){t.exports=function(t,e){for(var n=[],i={},r=0;r<e.length;r++){var o=e[r],f=o[0],a=o[1],s=o[2],v=o[3],l={id:t+":"+r,css:a,media:s,sourceMap:v};i[f]?i[f].parts.push(l):n.push(i[f]={id:f,parts:[l]})}return n}},5:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){var t=function(t){t.preventDefault(),t.stopPropagation()},e=!1;return{lock:function(n){e||(e=!0,(n||document).addEventListener("touchmove",t))},unlock:function(n){e=!1,(n||document).removeEventListener("touchmove",t)}}}(),i=function(){return{lock:function(t){r&&v(t||document.body,"g-fix-ios-prevent-scroll")},unlock:function(t){r&&l(t||document.body,"g-fix-ios-prevent-scroll")}}}(),r=!!(window.navigator&&window.navigator.userAgent||"").match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),o=function(t){var e=/^#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?$/,n=/^[rR][gG][bB][aA]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){3}\s*(\.|\d+\.)?\d+\s*\)$/,i=/^[rR][gG][bB]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){2}(25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/;return e.test(t)||n.test(t)||i.test(t)},f=function(t){for(var e=t;e&&"HTML"!==e.tagName&&"BODY"!==e.tagName&&1===e.nodeType;){var n=document.defaultView.getComputedStyle(e).overflowY;if("scroll"===n||"auto"===n)return e;e=e.parentNode}return window},a=function(t,e){var n=t===window?document.body.offsetHeight:t.offsetHeight,i=t===window?0:t.getBoundingClientRect().top,r=e.getBoundingClientRect().top-i,o=r+e.offsetHeight;return r>=0&&r<n||o>0&&o<=n},s=function(t,e){return e=e||"",!(0===e.replace(/\s/g,"").length||!t)&&new RegExp(" "+e+" ").test(" "+t.className+" ")},v=function(t,e){s(t,e)||(t.className=""===t.className?e:t.className+" "+e)},l=function(t,e){if(s(t,e)){for(var n=" "+t.className.replace(/[\t\r\n]/g,"")+" ";n.indexOf(" "+e+" ")>=0;)n=n.replace(" "+e+" "," ");t.className=n.replace(/^\s+|\s+$/g,"")}},d=function(t){function e(n,i,r){if(n===i)return void("function"==typeof o&&o());var f=n+r>i?i:n+r;n>i&&(f=n-r<i?i:n-r),t===window?window.scrollTo(f,f):t.scrollTop=f,window.requestAnimationFrame(function(){return e(f,i,r)})}var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,o=arguments[4];window.requestAnimationFrame||(window.requestAnimationFrame=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)});var f=Math.abs(n-i),a=Math.ceil(f/r*50);e(n,i,a)};e.pageScroll=n,e.preventScroll=i,e.isIOS=r,e.isColor=o,e.getScrollview=f,e.checkInview=a,e.addClass=v,e.removeClass=l,e.scrollTop=d},89:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(5);e.default={name:"yd-pullrefresh",props:{callback:{type:Function},stopDrag:{type:Boolean,default:!1},pullText:{type:String,default:"下拉刷新"},dropText:{type:String,default:"松开加载"},loadingText:{type:String,default:"加载中..."},showInitTip:{type:Boolean,default:!0}},data:function(){return{showHelpTag:!1,dragTip:{statusText:this.pullText,animationTiming:"",translate:0,distance:36,iconRotate:0,loadingIcon:""},touches:{loading:!1,startClientY:0,moveOffset:0,isDraging:!1},limitSpeed:0,isDragToUp:!1}},methods:{init:function(){this.offsetTop=this.$refs.dragBox.getBoundingClientRect().top,this.bindEvents(),this.$on("ydui.pullrefresh.finishLoad",this.resetParams),this.showHelp()},showHelp:function(){if(this.showInitTip){var t="PULLREFRESH-TIP",e=window.localStorage;e.setItem(t,1)}},bindEvents:function(){var t=this.$refs.dragBox;t.addEventListener("touchstart",this.touchStartHandler),t.addEventListener("touchmove",this.touchMoveHandler),t.addEventListener("touchend",this.touchEndHandler),document.body.addEventListener("touchmove",this.stopDragEvent,{passive:!1})},unbindEvents:function(){var t=this.$refs.dragBox;t.removeEventListener("touchstart",this.touchStartHandler),t.removeEventListener("touchmove",this.touchMoveHandler),t.removeEventListener("touchend",this.touchEndHandler),document.body.removeEventListener("touchmove",this.stopDragEvent,{passive:!1})},stopDragEvent:function(t){this.touches.isDraging&&t.preventDefault()},getScrollTop:function(t){return t===window?Math.max(window.pageYOffset||0,document.documentElement.scrollTop):t.scrollTop},touchStartHandler:function(t){if(!this.stopDrag)return this.touches.loading?void t.preventDefault():void(this.scrollview.scrollTop>0||this.$refs.dragBox.getBoundingClientRect().top<this.offsetTop||(this.touches.startClientX=t.touches[0].clientX,this.touches.startClientY=t.touches[0].clientY))},touchMoveHandler:function(t){var e=this.touches;if(!this.stopDrag&&!this.isDragToUp){if(this.touches.loading)return void t.preventDefault();if(this.scrollview.scrollTop>0)return this.dragTip.translate=0,void this.resetParams();var n=t.touches[0].clientY,i=t.touches[0].clientX;if(n-e.startClientY<0)return void(this.isDragToUp=!0);if(!(e.startClientY>n||this.$refs.dragBox.getBoundingClientRect().top<this.offsetTop)){0===this.getScrollTop(this.scrollview)&&t.preventDefault(),e.isDraging=!0;var r=180*Math.atan2(Math.abs(n-e.startClientY),Math.abs(i-e.startClientX))/Math.PI;if(!(90-r>45)){var o=n-e.startClientY;o>=this.dragTip.distance&&(this.dragTip.statusText=this.dropText,o=this.dragTip.distance),this.dragTip.iconRotate=o/.25,this.limitSpeed+=5,this.limitSpeed<o&&(o=this.limitSpeed),e.moveOffset=this.dragTip.translate=o}}}},touchEndHandler:function(t){if(!this.stopDrag){this.isDragToUp=!1;var e=this.touches;if(e.loading)return void t.preventDefault();if(!(this.$refs.dragBox.getBoundingClientRect().top<this.offsetTop))return this.dragTip.animationTiming="yd-pullrefresh-animation-timing",e.moveOffset>=this.dragTip.distance?(this.dragTip.statusText=this.loadingText,this.dragTip.loadingIcon="yd-pullrefresh-loading",void this.triggerLoad()):void this.resetParams()}},triggerLoad:function(){this.touches.loading=!0,this.callback&&this.callback()},resetParams:function(){var t=this;this.dragTip.translate=0,setTimeout(function(){var e=t.touches,n=t.dragTip;e.isDraging=!1,e.loading=!1,n.animationTiming="",e.moveOffset=0,n.translate=0,n.statusText=t.pullText,n.loadingIcon="",n.iconRotate=0,t.limitSpeed=0},200)}},mounted:function(){this.scrollview=(0,i.getScrollview)(this.$el),this.$nextTick(this.init)},beforeDestroy:function(){this.unbindEvents()}}},135:function(t,e,n){e=t.exports=n(2)(),e.push([t.id,'@-webkit-keyframes yd-kf-backrotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(-1turn);transform:rotate(-1turn)}}@keyframes yd-kf-backrotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(-1turn);transform:rotate(-1turn)}}.yd-pullrefresh-animation-timing{-webkit-transition:-webkit-transform .2s;transition:-webkit-transform .2s;transition:transform .2s;transition:transform .2s,-webkit-transform .2s}.yd-pullrefresh-dragtip{pointer-events:none;position:absolute;top:-36px;left:0;z-index:996;-webkit-transform:translate(0);transform:translate(0);width:100%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:#6e6e6e;font-size:14px;height:36px;text-align:center;background-color:rgba(240,250,250,.9)}.yd-pullrefresh-dragtip,.yd-pullrefresh-dragtip-icon{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.yd-pullrefresh-dragtip-icon{height:100%}.yd-pullrefresh-dragtip-icon>i{width:14px;height:14px;background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAABa1BMVEVTfvH///9TfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFAPDq2AAAAeHRSTlMAAAECAwQGBwkLDQ8QERMUFRkiIyYnLS4vMjM1Njc4OTpAQUJDREVGTVJWXmBiZmdoaWpxc3V8f4GCg4SGiIyNj5aXmZqbnJ+go6SlpqmqrK+wub2/wMHCxMXJzM3P0tPU1djd3t/n6Orr7O7w8fP09fb3+Pn6/f5+D/4+AAABqklEQVQ4y43V+T8CQRQA8GklUeQmhESuHBHJUY5EIWeHECGrcpVV++eb2Z3Y2d22eT+9mfm2n880894AQIRpKnDxVCh/sanD+c7/aS8PdDoCOqPfvCRu3c1VKaOOFC+P3LJBlAQ1h3m1uB8UpJRan/FaOX3i39jaj5fw+OeIJ6nzQ1y4crXhGeP43qfk63/UwQnjxDCxS4ufU9DeNzQqLTBAFn1y2vKIBi9WoAivnAZR/tqtJTG1lWFaHNKUmF6i1K0tRWpDWZLRliINoWykjhRo0ztMYqBuQGpHv3FR0TV07q1U9AzSO0BFM5BG6GgO0nU6ikpkhY5y9DQPqY9+W2E6ek7/Z/noj2CM/mCF6xKnouIlHKWiwtW+ZmqjGV8XpmLBLNWUHXm+Ep+VlGHJVkMaYuhLO/WKG4b+GC2yZqJlsCotAxhPhcqaBrJGtKjYW39akAEA6rS3dr/YxCN6CQWTuGkmXBY802gP4bndBiClYKDaiisP0e3NwEGyWG3NqwwgKWzwFbUGn52QnJbms+ExAjWqeIwyHhN5BxRPXLbAc+xNcK5Hdl1+ASkP8ND4fLD1AAAAAElFTkSuQmCC") no-repeat;display:inline-block;background-size:14px 14px;margin-right:6px}.yd-pullrefresh-dragtip-icon>i.yd-pullrefresh-loading{background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAABcVBMVEVTfvH///9TfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvFTfvG7eWgbAAAAenRSTlMAAAECAwQGBwkKCw0PEBETFBUZIiMmJy0uLzIzNTY3ODk6QEFCQ0RFRktNUlZeYGJmZ2hpanFzdXyBgoOEhoiMjY+Wl5mam5yfoKOkpqmqrK+wuLm6vb/AwcLExcnMzc/S09TV2N3e3+fo6uvs7vDx8/T19vf4+fr9/naKfqcAAAGISURBVDjLjZVVW0JBEEBXDLC7FbsVuzDAwO7E7sAORDi/3od7/T72Ajrztjvn4c7dmTNKaZHV7t2+eQ5/BI4Xewq1TFKSdmxZ+yIqTvszEqCNx1jjcTAtDpq9RLy4qIpBK27NXPh81TM+OecPmufvNgva8mYk9ly55o2jafYdYMuuo40hAA5qtCrzPCF20vUPKH0BCPbalCXKfOl6WZnXAPcV6q8wUB/AQ7H6H3WGgc9qJUB3AfqVAHUCHNok6DxArRKg9ldgX0nQegCXCB0FwjkidAM4UyL0CliWoY/AmAz9AoZlaEiOPgFueVlLMnRT/rPc8idokD+s/RXwi1CjCeuUuLWP/mjtTneRNjADCcmCJyL+rqgxDDoTkGn7ANOC4U5ZAQhka8oIxFOGYx2ADquI+mJqKz8HwPuv3vI9hsSXU6Kl2WpK88CVZ96k1s+bdzPJuoorf1UcuVybmvAuHH7+qnnEFiv4SDzB3zVL18aQQ7aMroayEu4tY8XdPRMKnPi6Syzt8gMGxsBO8KgZSQAAAABJRU5ErkJggg==") no-repeat;background-size:14px 14px;-webkit-animation:yd-kf-backrotate .5s linear infinite;animation:yd-kf-backrotate .5s linear infinite}.yd-pullrefresh-draghelp{width:100%;height:100%;position:fixed;top:0;left:0;z-index:500;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.yd-pullrefresh-draghelp>div{width:114px;height:114px;background-color:rgba(0,0,0,.8)}.yd-pullrefresh-draghelp>div:before{content:"\\E60D";font-family:YDUI-INLAY;font-size:44px;text-align:center;color:#fff;display:block;padding-top:18px}.yd-pullrefresh-draghelp>div>span{text-align:center;color:#fff;font-size:14px;display:block;padding-top:10px}',""])},210:function(t,e,n){n(326);var i=n(1)(n(89),n(271),null,null);t.exports=i.exports},271:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{ref:"dragBox"},[t._t("default"),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.touches.isDraging,expression:"touches.isDraging"}],ref:"dragTip",staticClass:"yd-pullrefresh-dragtip",class:t.dragTip.animationTiming,style:{transform:"translate3d(0, "+t.dragTip.translate+"px, 0)"}},[n("span",{staticClass:"yd-pullrefresh-dragtip-icon"},[n("i",{class:t.dragTip.loadingIcon,style:{transform:"rotate("+t.dragTip.iconRotate+"deg)"}}),t._v("\n                "+t._s(t.dragTip.statusText)+"\n            ")])])],2),t._v(" "),t.showHelpTag?n("div",{staticClass:"yd-pullrefresh-draghelp",on:{click:function(e){t.showHelpTag=!1}}},[t._m(0)]):t._e()])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span",[t._v("下拉更新")])])}]}},326:function(t,e,n){var i=n(135);"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);n(3)("650e08b4",i,!0)}})});