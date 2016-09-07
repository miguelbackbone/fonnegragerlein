/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-appearance-audio-backgroundblendmode-backgroundcliptext-bgsizecover-borderradius-boxshadow-boxsizing-canvas-checked-cssanimations-csscalc-csscolumns-cssfilters-cssgradients-csspointerevents-csstransforms-csstransforms3d-csstransitions-cssvhunit-cssvmaxunit-cssvminunit-cssvwunit-displaytable-ellipsis-eventlistener-flash-flexbox-flexwrap-hashchange-hiddenscroll-inlinesvg-json-lastchild-lowbandwidth-multiplebgs-nthchild-opacity-preserve3d-smil-svg-svgasimg-svgclippaths-svgfilters-svgforeignobject-textshadow-touchevents-video-videoautoplay-videoloop-videopreload-setclasses !*/
!function(e,t,A){function n(e,t){return typeof e===t}function o(){var e,t,A,o,i,r,a;for(var s in T)if(T.hasOwnProperty(s)){if(e=[],t=T[s],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(A=0;A<t.options.aliases.length;A++)e.push(t.options.aliases[A].toLowerCase());for(o=n(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)r=e[i],a=r.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=o),y.push((o?"":"no-")+a.join("-"))}}function i(e){var t=b.className,A=Modernizr._config.classPrefix||"";if(E&&(t=t.baseVal),Modernizr._config.enableJSClass){var n=new RegExp("(^|\\s)"+A+"no-js(\\s|$)");t=t.replace(n,"$1"+A+"js$2")}Modernizr._config.enableClasses&&(t+=" "+A+e.join(" "+A),E?b.className.baseVal=t:b.className=t)}function r(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):E?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function a(){var e=t.body;return e||(e=r(E?"svg":"body"),e.fake=!0),e}function s(e,t){return e-1===t||e===t||e+1===t}function d(e,t){if("object"==typeof e)for(var A in e)F(e,A)&&d(A,e[A]);else{e=e.toLowerCase();var n=e.split("."),o=Modernizr[n[0]];if(2==n.length&&(o=o[n[1]]),"undefined"!=typeof o)return Modernizr;t="function"==typeof t?t():t,1==n.length?Modernizr[n[0]]=t:(!Modernizr[n[0]]||Modernizr[n[0]]instanceof Boolean||(Modernizr[n[0]]=new Boolean(Modernizr[n[0]])),Modernizr[n[0]][n[1]]=t),i([(t&&0!=t?"":"no-")+n.join("-")]),Modernizr._trigger(e,t)}return Modernizr}function l(e,A,n,o){var i,s,d,l,c="modernizr",u=r("div"),p=a();if(parseInt(n,10))for(;n--;)d=r("div"),d.id=o?o[n]:c+(n+1),u.appendChild(d);return i=r("style"),i.type="text/css",i.id="s"+c,(p.fake?p:u).appendChild(i),p.appendChild(u),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),u.id=c,p.fake&&(p.style.background="",p.style.overflow="hidden",l=b.style.overflow,b.style.overflow="hidden",b.appendChild(p)),s=A(u,e),p.fake?(p.parentNode.removeChild(p),b.style.overflow=l,b.offsetHeight):u.parentNode.removeChild(u),!!s}function c(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,A){return t+A.toUpperCase()}).replace(/^-/,"")}function u(e,t){return!!~(""+e).indexOf(t)}function p(e,t){return function(){return e.apply(t,arguments)}}function f(e,t,A){var o;for(var i in e)if(e[i]in t)return A===!1?e[i]:(o=t[e[i]],n(o,"function")?p(o,A||t):o);return!1}function h(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(t,n){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(h(t[o]),n))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+h(t[o])+":"+n+")");return i=i.join(" or "),l("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return A}function g(e,t,o,i){function a(){d&&(delete V.style,delete V.modElem)}if(i=n(i,"undefined")?!1:i,!n(o,"undefined")){var s=m(e,o);if(!n(s,"undefined"))return s}for(var d,l,p,f,h,g=["modernizr","tspan","samp"];!V.style&&g.length;)d=!0,V.modElem=r(g.shift()),V.style=V.modElem.style;for(p=e.length,l=0;p>l;l++)if(f=e[l],h=V.style[f],u(f,"-")&&(f=c(f)),V.style[f]!==A){if(i||n(o,"undefined"))return a(),"pfx"==t?f:!0;try{V.style[f]=o}catch(v){}if(V.style[f]!=h)return a(),"pfx"==t?f:!0}return a(),!1}function v(e,t,A,o,i){var r=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+N.join(r+" ")+r).split(" ");return n(t,"string")||n(t,"undefined")?g(a,t,o,i):(a=(e+" "+Q.join(r+" ")+r).split(" "),f(a,t,A))}function w(e,t,n){return v(e,A,A,t,n)}var y=[],T=[],x={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var A=this;setTimeout(function(){t(A[e])},0)},addTest:function(e,t,A){T.push({name:e,fn:t,options:A})},addAsyncTest:function(e){T.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=x,Modernizr=new Modernizr,Modernizr.addTest("eventlistener","addEventListener"in e),Modernizr.addTest("json","JSON"in e&&"parse"in JSON&&"stringify"in JSON),Modernizr.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),Modernizr.addTest("lowbandwidth",function(){var e=navigator.connection||{type:0};return 3==e.type||4==e.type||/^[23]g$/.test(e.type)}),Modernizr.addTest("svgfilters",function(){var t=!1;try{t="SVGFEColorMatrixElement"in e&&2==SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE}catch(A){}return t});var b=t.documentElement,E="svg"===b.nodeName.toLowerCase();Modernizr.addTest("canvas",function(){var e=r("canvas");return!(!e.getContext||!e.getContext("2d"))}),Modernizr.addTest("video",function(){var e=r("video"),t=!1;try{(t=!!e.canPlayType)&&(t=new Boolean(t),t.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),t.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),t.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),t.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),t.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(A){}return t}),Modernizr.addTest("multiplebgs",function(){var e=r("a").style;return e.cssText="background:url(https://),url(https://),red url(https://)",/(url\s*\(.*?){3}/.test(e.background)}),Modernizr.addTest("csspointerevents",function(){var e=r("a").style;return e.cssText="pointer-events:auto","auto"===e.pointerEvents}),Modernizr.addTest("preserve3d",function(){var e=r("a"),t=r("a");e.style.cssText="display: block; transform-style: preserve-3d; transform-origin: right; transform: rotateY(40deg);",t.style.cssText="display: block; width: 9px; height: 1px; background: #000; transform-origin: right; transform: rotateY(40deg);",e.appendChild(t),b.appendChild(e);var A=t.getBoundingClientRect();return b.removeChild(e),A.width&&A.width<4}),Modernizr.addTest("inlinesvg",function(){var e=r("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)}),Modernizr.addTest("videoloop","loop"in r("video")),Modernizr.addTest("videopreload","preload"in r("video")),Modernizr.addTest("audio",function(){var e=r("audio"),t=!1;try{(t=!!e.canPlayType)&&(t=new Boolean(t),t.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),t.mp3=e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/,""),t.opus=e.canPlayType('audio/ogg; codecs="opus"')||e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/,""),t.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),t.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(A){}return t});var R=function(){function e(e,t){var o;return e?(t&&"string"!=typeof t||(t=r(t||"div")),e="on"+e,o=e in t,!o&&n&&(t.setAttribute||(t=r("div")),t.setAttribute(e,""),o="function"==typeof t[e],t[e]!==A&&(t[e]=A),t.removeAttribute(e)),o):!1}var n=!("onblur"in t.documentElement);return e}();x.hasEvent=R,Modernizr.addTest("hashchange",function(){return R("hashchange",e)===!1?!1:t.documentMode===A||t.documentMode>7});var C=x._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];x._prefixes=C,Modernizr.addTest("csscalc",function(){var e="width:",t="calc(10px);",A=r("a");return A.style.cssText=e+C.join(t+e),!!A.style.length}),Modernizr.addTest("cssgradients",function(){for(var e,t="background-image:",A="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="",o=0,i=C.length-1;i>o;o++)e=0===o?"to ":"",n+=t+C[o]+"linear-gradient("+e+"left top, #9f9, white);";Modernizr._config.usePrefixes&&(n+=t+"-webkit-"+A);var a=r("a"),s=a.style;return s.cssText=n,(""+s.backgroundImage).indexOf("gradient")>-1}),Modernizr.addTest("opacity",function(){var e=r("a").style;return e.cssText=C.join("opacity:.55;"),/^0.55$/.test(e.opacity)});var S="CSS"in e&&"supports"in e.CSS,B="supportsCSS"in e;Modernizr.addTest("supports",S||B);var G={}.toString;Modernizr.addTest("svgclippaths",function(){return!!t.createElementNS&&/SVGClipPath/.test(G.call(t.createElementNS("http://www.w3.org/2000/svg","clipPath")))}),Modernizr.addTest("svgforeignobject",function(){return!!t.createElementNS&&/SVGForeignObject/.test(G.call(t.createElementNS("http://www.w3.org/2000/svg","foreignObject")))}),Modernizr.addTest("smil",function(){return!!t.createElementNS&&/SVGAnimate/.test(G.call(t.createElementNS("http://www.w3.org/2000/svg","animate")))});var F;!function(){var e={}.hasOwnProperty;F=n(e,"undefined")||n(e.call,"undefined")?function(e,t){return t in e&&n(e.constructor.prototype[t],"undefined")}:function(t,A){return e.call(t,A)}}(),x._l={},x.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},x._trigger=function(e,t){if(this._l[e]){var A=this._l[e];setTimeout(function(){var e,n;for(e=0;e<A.length;e++)(n=A[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){x.addTest=d}),Modernizr.addAsyncTest(function(){var A,n,o=function(e){b.contains(e)||b.appendChild(e)},i=function(e){e.fake&&e.parentNode&&e.parentNode.removeChild(e)},s=function(e,t){var A=!!e;if(A&&(A=new Boolean(A),A.blocked="blocked"===e),d("flash",function(){return A}),t&&f.contains(t)){for(;t.parentNode!==f;)t=t.parentNode;f.removeChild(t)}};try{n="ActiveXObject"in e&&"Pan"in new e.ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(l){}if(A=!("plugins"in navigator&&"Shockwave Flash"in navigator.plugins||n),A||E)s(!1);else{var c,u,p=r("embed"),f=a();if(p.type="application/x-shockwave-flash",f.appendChild(p),!("Pan"in p||n))return o(f),s("blocked",p),void i(f);c=function(){return o(f),b.contains(f)?(b.contains(p)?(u=p.style.cssText,""!==u?s("blocked",p):s(!0,p)):s("blocked"),void i(f)):(f=t.body||f,p=r("embed"),p.type="application/x-shockwave-flash",f.appendChild(p),setTimeout(c,1e3))},setTimeout(c,10)}}),Modernizr.addTest("svgasimg",t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")),Modernizr.addAsyncTest(function(){function e(r){o++,clearTimeout(t);var a=r&&"playing"===r.type||0!==i.currentTime;return!a&&n>o?void(t=setTimeout(e,A)):(i.removeEventListener("playing",e,!1),d("videoautoplay",a),void i.parentNode.removeChild(i))}var t,A=200,n=5,o=0,i=r("video"),a=i.style;if(!(Modernizr.video&&"autoplay"in i))return void d("videoautoplay",!1);a.position="absolute",a.height=0,a.width=0;try{if(Modernizr.video.ogg)i.src="data:video/ogg;base64,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";else{if(!Modernizr.video.h264)return void d("videoautoplay",!1);i.src="data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAAAs1tZGF0AAACrgYF//+q3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0OCByMjYwMSBhMGNkN2QzIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxNSAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTMgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MzoweDExMyBtZT1oZXggc3VibWU9NyBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0xIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MSA4eDhkY3Q9MSBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0tMiB0aHJlYWRzPTEgbG9va2FoZWFkX3RocmVhZHM9MSBzbGljZWRfdGhyZWFkcz0wIG5yPTAgZGVjaW1hdGU9MSBpbnRlcmxhY2VkPTAgYmx1cmF5X2NvbXBhdD0wIGNvbnN0cmFpbmVkX2ludHJhPTAgYmZyYW1lcz0zIGJfcHlyYW1pZD0yIGJfYWRhcHQ9MSBiX2JpYXM9MCBkaXJlY3Q9MSB3ZWlnaHRiPTEgb3Blbl9nb3A9MCB3ZWlnaHRwPTIga2V5aW50PTI1MCBrZXlpbnRfbWluPTEwIHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NDAgcmM9Y3JmIG1idHJlZT0xIGNyZj0yMy4wIHFjb21wPTAuNjAgcXBtaW49MCBxcG1heD02OSBxcHN0ZXA9NCBpcF9yYXRpbz0xLjQwIGFxPTE6MS4wMACAAAAAD2WIhAA3//728P4FNjuZQQAAAu5tb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAAAZAABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACGHRyYWsAAABcdGtoZAAAAAMAAAAAAAAAAAAAAAEAAAAAAAAAZAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAgAAAAIAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAAGQAAAAAAAEAAAAAAZBtZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAACgAAAAEAFXEAAAAAAAtaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAFZpZGVvSGFuZGxlcgAAAAE7bWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAAA+3N0YmwAAACXc3RzZAAAAAAAAAABAAAAh2F2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAgACAEgAAABIAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAxYXZjQwFkAAr/4QAYZ2QACqzZX4iIhAAAAwAEAAADAFA8SJZYAQAGaOvjyyLAAAAAGHN0dHMAAAAAAAAAAQAAAAEAAAQAAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAABRzdHN6AAAAAAAAAsUAAAABAAAAFHN0Y28AAAAAAAAAAQAAADAAAABidWR0YQAAAFptZXRhAAAAAAAAACFoZGxyAAAAAAAAAABtZGlyYXBwbAAAAAAAAAAAAAAAAC1pbHN0AAAAJal0b28AAAAdZGF0YQAAAAEAAAAATGF2ZjU2LjQwLjEwMQ=="}}catch(s){return void d("videoautoplay",!1)}i.setAttribute("autoplay",""),i.style.cssText="display:none",b.appendChild(i),setTimeout(function(){i.addEventListener("playing",e,!1),t=setTimeout(e,A)},0)});var k=x.testStyles=l;Modernizr.addTest("hiddenscroll",function(){return k("#modernizr {width:100px;height:100px;overflow:scroll}",function(e){return e.offsetWidth===e.clientWidth})}),Modernizr.addTest("touchevents",function(){var A;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)A=!0;else{var n=["@media (",C.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");k(n,function(e){A=9===e.offsetTop})}return A}),Modernizr.addTest("checked",function(){return k("#modernizr {position:absolute} #modernizr input {margin-left:10px} #modernizr :checked {margin-left:20px;display:block}",function(e){var t=r("input");return t.setAttribute("type","checkbox"),t.setAttribute("checked","checked"),e.appendChild(t),20===t.offsetLeft})}),k("#modernizr{display: table; direction: ltr}#modernizr div{display: table-cell; padding: 10px}",function(e){var t,A=e.childNodes;t=A[0].offsetLeft<A[1].offsetLeft,Modernizr.addTest("displaytable",t,{aliases:["display-table"]})},2),k("#modernizr div {width:100px} #modernizr :last-child{width:200px;display:block}",function(e){Modernizr.addTest("lastchild",e.lastChild.offsetWidth>e.firstChild.offsetWidth)},2),k("#modernizr div {width:1px} #modernizr div:nth-child(2n) {width:2px;}",function(e){for(var t=e.getElementsByTagName("div"),A=!0,n=0;5>n;n++)A=A&&t[n].offsetWidth===n%2+1;Modernizr.addTest("nthchild",A)},5),k("#modernizr { height: 50vh; }",function(t){var A=parseInt(e.innerHeight/2,10),n=parseInt((e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).height,10);Modernizr.addTest("cssvhunit",n==A)}),k("#modernizr1{width: 50vmax}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",function(t){var A=t.childNodes[2],n=t.childNodes[1],o=t.childNodes[0],i=parseInt((n.offsetWidth-n.clientWidth)/2,10),r=o.clientWidth/100,a=o.clientHeight/100,d=parseInt(50*Math.max(r,a),10),l=parseInt((e.getComputedStyle?getComputedStyle(A,null):A.currentStyle).width,10);Modernizr.addTest("cssvmaxunit",s(d,l)||s(d,l-i))},3),k("#modernizr1{width: 50vm;width:50vmin}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",function(t){var A=t.childNodes[2],n=t.childNodes[1],o=t.childNodes[0],i=parseInt((n.offsetWidth-n.clientWidth)/2,10),r=o.clientWidth/100,a=o.clientHeight/100,d=parseInt(50*Math.min(r,a),10),l=parseInt((e.getComputedStyle?getComputedStyle(A,null):A.currentStyle).width,10);Modernizr.addTest("cssvminunit",s(d,l)||s(d,l-i))},3),k("#modernizr { width: 50vw; }",function(t){var A=parseInt(e.innerWidth/2,10),n=parseInt((e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).width,10);Modernizr.addTest("cssvwunit",n==A)});var P="Moz O ms Webkit",N=x._config.usePrefixes?P.split(" "):[];x._cssomPrefixes=N;var M=function(t){var n,o=C.length,i=e.CSSRule;if("undefined"==typeof i)return A;if(!t)return!1;if(t=t.replace(/^@/,""),n=t.replace(/-/g,"_").toUpperCase()+"_RULE",n in i)return"@"+t;for(var r=0;o>r;r++){var a=C[r],s=a.toUpperCase()+"_"+n;if(s in i)return"@-"+a.toLowerCase()+"-"+t}return!1};x.atRule=M;var Q=x._config.usePrefixes?P.toLowerCase().split(" "):[];x._domPrefixes=Q;var I={elem:r("modernizr")};Modernizr._q.push(function(){delete I.elem});var V={style:I.elem.style};Modernizr._q.unshift(function(){delete V.style});var Y=x.testProp=function(e,t,n){return g([e],A,t,n)};Modernizr.addTest("textshadow",Y("textShadow","1px 1px")),x.testAllProps=v,x.testAllProps=w,Modernizr.addTest("cssanimations",w("animationName","a",!0)),Modernizr.addTest("appearance",w("appearance")),Modernizr.addTest("backgroundcliptext",function(){return w("backgroundClip","text")}),Modernizr.addTest("bgsizecover",w("backgroundSize","cover")),Modernizr.addTest("borderradius",w("borderRadius","0px",!0)),Modernizr.addTest("boxshadow",w("boxShadow","1px 1px",!0)),Modernizr.addTest("boxsizing",w("boxSizing","border-box",!0)&&(t.documentMode===A||t.documentMode>7)),function(){Modernizr.addTest("csscolumns",function(){var e=!1,t=w("columnCount");try{(e=!!t)&&(e=new Boolean(e))}catch(A){}return e});for(var e,t,A=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],n=0;n<A.length;n++)e=A[n].toLowerCase(),t=w("column"+A[n]),("breakbefore"===e||"breakafter"===e||"breakinside"==e)&&(t=t||w(A[n])),Modernizr.addTest("csscolumns."+e,t)}(),Modernizr.addTest("ellipsis",w("textOverflow","ellipsis")),Modernizr.addTest("cssfilters",function(){if(Modernizr.supports)return w("filter","blur(2px)");var e=r("a");return e.style.cssText=C.join("filter:blur(2px); "),!!e.style.length&&(t.documentMode===A||t.documentMode>9)}),Modernizr.addTest("flexbox",w("flexBasis","1px",!0)),Modernizr.addTest("flexwrap",w("flexWrap","wrap",!0)),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&w("transform","scale(1)",!0)}),Modernizr.addTest("csstransforms3d",function(){var e=!!w("perspective","1px",!0),t=Modernizr._config.usePrefixes;if(e&&(!t||"webkitPerspective"in b.style)){var A,n="#modernizr{width:0;height:0}";Modernizr.supports?A="@supports (perspective: 1px)":(A="@media (transform-3d)",t&&(A+=",(-webkit-transform-3d)")),A+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",k(n+A,function(t){e=7===t.offsetWidth&&18===t.offsetHeight})}return e}),Modernizr.addTest("csstransitions",w("transition","all",!0));var Z=x.prefixed=function(e,t,A){return 0===e.indexOf("@")?M(e):(-1!=e.indexOf("-")&&(e=c(e)),t?v(e,t,A):v(e,"pfx"))};Modernizr.addTest("backgroundblendmode",Z("backgroundBlendMode","text")),o(),i(y),delete x.addTest,delete x.addAsyncTest;for(var U=0;U<Modernizr._q.length;U++)Modernizr._q[U]();e.Modernizr=Modernizr}(window,document);