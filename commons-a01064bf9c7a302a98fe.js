(self.webpackChunksbrikkisbooks=self.webpackChunksbrikkisbooks||[]).push([[351],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var c,u,l,s;if(Array.isArray(e)){if((c=e.length)!=i.length)return!1;for(u=c;0!=u--;)if(!a(e[u],i[u]))return!1;return!0}if(n&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!i.has(u.value[0]))return!1;for(s=e.entries();!(u=s.next()).done;)if(!a(u.value[1],i.get(u.value[0])))return!1;return!0}if(r&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!i.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((c=e.length)!=i.length)return!1;for(u=c;0!=u--;)if(e[u]!==i[u])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((c=(l=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(i,l[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==l[u]&&"__v"!==l[u]&&"__o"!==l[u]||!e.$$typeof)&&!a(e[l[u]],i[l[u]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return a(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,o=n(7294),a=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,l=[];function s(){u=e(l.map((function(e){return e.props}))),m.canUseDOM?t(u):n&&(u=n(u))}var m=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,l=[],e};var i=o.prototype;return i.UNSAFE_componentWillMount=function(){l.push(this),s()},i.componentDidUpdate=function(){s()},i.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),s()},i.render=function(){return a.createElement(r,this.props)},o}(o.PureComponent);return i(m,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(m,"canUseDOM",c),m}}},9508:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var r=n(7294),o=n.p+"static/logo-72546d3427ebf8019513c64f3d2bff1f.svg",a=function(e){return r.createElement("a",{href:"/",title:"Go to Home Page"},r.createElement("img",{src:o,alt:"Sbrikki's Books Logo",className:"logo-module--logo--EQ6xL",width:"50px",height:"50px"}))},i="navItem-module--item--HpDHa",c=n(5444),u=function(e){return r.createElement(r.Fragment,null,e.isHref?r.createElement("a",{href:e.path,className:i,onClick:e.onClick,title:"Go to "+e.text+" page"},e.text):r.createElement(c.Link,{className:i,to:e.path,onClick:e.onClick,title:"Go to "+e.text+" page"},e.text))},l=function(e){return r.createElement(r.Fragment,null,r.createElement("div",{className:"navigation-module--navDesktop--V4wOn"},r.createElement(u,{text:"Home",path:"/"}),r.createElement(u,{text:"Spotify",path:"/spotify"}),r.createElement(u,{text:"Stats",path:"/stats"}),r.createElement(u,{text:"King",path:"/king"}),r.createElement(u,{text:"Contact us",path:"#contactUs",isHref:!0})),r.createElement("div",{className:"navigation-module--navMobile--7U-MJ"},r.createElement(u,{text:"Home",path:"/",onClick:e.onClick}),r.createElement(u,{text:"Spotify",path:"/spotify",onClick:e.onClick}),r.createElement(u,{text:"Stats",path:"/stats",onClick:e.onClick}),r.createElement(u,{text:"King",path:"/king",onClick:e.onClick}),r.createElement(u,{text:"Contact us",path:"#contactUs",onClick:e.onClick,isHref:!0})))};var s=function(e){return r.createElement("div",{className:"hamburger-module--hamburger--XhWSf",onClick:e.onClick,onKeyDown:e.onClick,role:"button",tabIndex:0},r.createElement("div",{className:e.navBarOpen?"hamburger-module--crossLine1--kEFxb":"hamburger-module--hamLine1--jCuN0"}),r.createElement("div",{className:e.navBarOpen?"hamburger-module--crossLine2--6T+aQ":"hamburger-module--hamLine2--zIAoH"}),r.createElement("div",{className:e.navBarOpen?"hamburger-module--crossLine3--AYcoW":"hamburger-module--hamLine3--JPMju"}))},m=function(e){var t=(0,r.useState)(!1),n=t[0],o=t[1];(0,r.useEffect)((function(){var e=window.pageYOffset;window.onscroll=function(){var t=window.pageYOffset;document.getElementById("navBar")&&(0===t||e>t?document.getElementById("navBar").style.top="0":n||(document.getElementById("navBar").style.top="-80px")),e=t}}));var i=function(){o(!1),document.body.style.overflowY="scroll",document.body.style.height="auto",document.getElementsByTagName("html")[0].style.overflowY="scroll",document.getElementsByTagName("html")[0].style.height="auto"};return r.createElement("div",{className:"navBar-module--navBar--TdHdv",id:"navBar"},r.createElement("div",{className:"navBar-module--logo--WgOHQ"},r.createElement(a,null)),e.isBlocking?null:r.createElement("div",{className:"navBar-module--navigationDesktop--foGDZ"},r.createElement(l,null)),n&&!e.isBlocking?r.createElement("div",{className:"navBar-module--navigationMobile--DS1-I"},r.createElement(l,{onClick:i})):null,e.isBlocking?null:r.createElement("div",{className:"navBar-module--hamburger---A7xu"},r.createElement(s,{onClick:n?i:function(){o(!0),document.body.style.overflow="hidden",document.body.style.height="100%",document.getElementsByTagName("html")[0].style.overflow="hidden",document.getElementsByTagName("html")[0].style.height="100%"},navBarOpen:n})))},f=function(e){var t=e.email,n=e.subject,o=void 0===n?"":n,a=e.body,i=void 0===a?"":a,c=e.children,u=e.enabled,l=o||i?"?":"";return o&&(l+="subject="+encodeURIComponent(o)),i&&(l+=(o?"&":"")+"body="+encodeURIComponent(i)),r.createElement(r.Fragment,null,r.createElement("a",{href:"mailto:"+t+l,className:u?"mailTo-module--mailto--rzFFj":"mailTo-module--mailtoDisabled--77y+n"},c),u?null:r.createElement("p",{className:"mailTo-module--suggestion--OMfQ2"},"Fill in the fields above first"))},p="contactUs-module--nsInput--TgDYx";var d=function(e){var t=(0,r.useState)(),n=t[0],o=t[1],a=(0,r.useState)(),i=a[0],c=a[1];return r.createElement("div",{className:"contactUs-module--contactUs--9475g"},r.createElement("div",{className:"contactUs-module--contactHero--BLjmv"},r.createElement("div",{className:"contactUs-module--hamWrapper---ph+j"},r.createElement(s,{navBarOpen:e.formOpened,onClick:e.closeForm})),r.createElement("p",null,"Insert name and surname and contact us!"),r.createElement("input",{type:"text",id:"nameIn",onChange:function(){o(document.getElementById("nameIn").value)},className:p,placeholder:"Name"}),r.createElement("input",{type:"text",id:"surnameIn",onChange:function(){c(document.getElementById("surnameIn").value)},className:p,placeholder:"Surname"}),console.log(n+" "+i),r.createElement(f,{email:"sbrikkisbooks@gmail.com",subject:"I want to join!",body:"Hi, I'm "+n+" "+i+". I want to join to your Book Club!",enabled:void 0!==n&&void 0!==i&&""!==n&&""!==i},"Send us a mail!")))};var y=function(e){var t=(0,r.useState)(!1),n=t[0],o=t[1];return r.createElement("div",{className:"footer-module--footer--lU7l1",id:"contactUs"},r.createElement("p",null,"Join us!"),r.createElement("button",{onClick:function(){o(!0),e.setNotScrolling()},className:"footer-module--formButton--HXgpd"},"CONTACT US!"),n?r.createElement(d,{closeForm:function(){o(!1),e.setScrolling()},formOpened:n}):null,r.createElement("a",{href:"https://open.spotify.com/playlist/3XWNoTPdXdIRapbK86Y11l",title:"Go to our playlist"},r.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMzMzLjMzIDEzMzMuMyIgc2hhcGUtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iIHRleHQtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iIGltYWdlLXJlbmRlcmluZz0ib3B0aW1pemVRdWFsaXR5IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTY2Ni42NiAwQzI5OC40OCAwIDAgMjk4LjQ3IDAgNjY2LjY1YzAgMzY4LjE5IDI5OC40OCA2NjYuNjUgNjY2LjY2IDY2Ni42NSAzNjguMjIgMCA2NjYuNjctMjk4LjQ1IDY2Ni42Ny02NjYuNjVDMTMzMy4zMyAyOTguNDkgMTAzNC44OC4wMyA2NjYuNjUuMDNsLjAxLS4wNHptMzA1LjczIDk2MS41MWMtMTEuOTQgMTkuNTgtMzcuNTcgMjUuOC01Ny4xNiAxMy43Ny0xNTYuNTItOTUuNjEtMzUzLjU3LTExNy4yNi01ODUuNjMtNjQuMjQtMjIuMzYgNS4wOS00NC42NS04LjkyLTQ5Ljc1LTMxLjI5LTUuMTItMjIuMzcgOC44NC00NC42NiAzMS4yNi00OS43NSAyNTMuOTUtNTguMDIgNDcxLjc4LTMzLjA0IDY0Ny41MSA3NC4zNSAxOS41OSAxMi4wMiAyNS44IDM3LjU3IDEzLjc3IDU3LjE2em04MS42LTE4MS41MmMtMTUuMDUgMjQuNDUtNDcuMDUgMzIuMTctNzEuNDkgMTcuMTMtMTc5LjItMTEwLjE1LTQ1Mi4zNS0xNDIuMDUtNjY0LjMxLTc3LjctMjcuNDkgOC4zLTU2LjUyLTcuMTktNjQuODYtMzQuNjMtOC4yOC0yNy40OSA3LjIyLTU2LjQ2IDM0LjY2LTY0LjgyIDI0Mi4xMS03My40NiA1NDMuMS0zNy44OCA3NDguODkgODguNTggMjQuNDQgMTUuMDUgMzIuMTYgNDcuMDUgMTcuMTIgNzEuNDZWNzgwem03LjAxLTE4OS4wMmMtMjE0Ljg3LTEyNy42Mi01NjkuMzYtMTM5LjM1LTc3NC41LTc3LjA5LTMyLjk0IDkuOTktNjcuNzgtOC42LTc3Ljc2LTQxLjU1LTkuOTgtMzIuOTYgOC42LTY3Ljc3IDQxLjU2LTc3Ljc4IDIzNS40OS03MS40OSA2MjYuOTYtNTcuNjggODc0LjM0IDg5LjE4IDI5LjY5IDE3LjU5IDM5LjQxIDU1Ljg1IDIxLjgxIDg1LjQ0LTE3LjUyIDI5LjYzLTU1Ljg5IDM5LjQtODUuNDIgMjEuOGgtLjAzeiIgZmlsbD0iIzMzMyIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9zdmc+",width:"40px",height:"40px",alt:"Sbrikki's Books Spotify"})))},g=function(e){var t=e.children,n=e.isBlocking;return r.createElement(r.Fragment,null,r.createElement(m,{isBlocking:n}),r.createElement("div",{className:"layout-module--layout--4I4G6"},t),r.createElement(y,null))}},6811:function(e,t,n){"use strict";n.d(t,{Z:function(){return ve}});var r,o,a,i,c=n(7294),u=n(5697),l=n.n(u),s=n(4839),m=n.n(s),f=n(2993),p=n.n(f),d=n(6494),y=n.n(d),g="bodyAttributes",h="htmlAttributes",b="titleAttributes",T={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},v=(Object.keys(T).map((function(e){return T[e]})),"charset"),E="cssText",j="href",N="http-equiv",M="innerHTML",C="itemprop",w="name",k="property",O="rel",L="src",A="target",I={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},S="defaultTitle",x="defer",D="encodeSpecialCharacters",U="onChangeClientState",B="titleTemplate",z=Object.keys(I).reduce((function(e,t){return e[I[t]]=t,e}),{}),P=[T.NOSCRIPT,T.SCRIPT,T.STYLE],Y="data-react-helmet",H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Q=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Z=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},F=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},_=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},G=function(e){var t=J(e,T.TITLE),n=J(e,B);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=J(e,S);return t||r||void 0},X=function(e){return J(e,U)||function(){}},V=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return W({},e,t)}),{})},q=function(e,t){return t.filter((function(e){return void 0!==e[T.BASE]})).map((function(e){return e[T.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o].toLowerCase();if(-1!==e.indexOf(a)&&n[a])return t.concat(n)}return t}),[])},K=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+H(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var c=a[i],u=c.toLowerCase();-1===t.indexOf(u)||n===O&&"canonical"===e[n].toLowerCase()||u===O&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==M&&c!==E&&c!==C||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][l]&&(o[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(o),i=0;i<a.length;i++){var c=a[i],u=y()({},r[c],o[c]);r[c]=u}return e}),[]).reverse()},J=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:n.g.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ae=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,m=e.title,f=e.titleAttributes;ue(T.BODY,r),ue(T.HTML,o),ce(m,f);var p={baseTag:le(T.BASE,n),linkTags:le(T.LINK,a),metaTags:le(T.META,i),noscriptTags:le(T.NOSCRIPT,c),scriptTags:le(T.SCRIPT,l),styleTags:le(T.STYLE,s)},d={},y={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(d[e]=n),r.length&&(y[e]=p[e].oldTags)})),t&&t(),u(e,d,y)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),ue(T.TITLE,t)},ue=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(Y),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(t),c=0;c<i.length;c++){var u=i[c],l=t[u]||"";n.getAttribute(u)!==l&&n.setAttribute(u,l),-1===o.indexOf(u)&&o.push(u);var s=a.indexOf(u);-1!==s&&a.splice(s,1)}for(var m=a.length-1;m>=0;m--)n.removeAttribute(a[m]);o.length===a.length?n.removeAttribute(Y):n.getAttribute(Y)!==i.join(",")&&n.setAttribute(Y,i.join(","))}},le=function(e,t){var n=document.head||document.querySelector(T.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===M)n.innerHTML=t.innerHTML;else if(r===E)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(Y,"true"),o.some((function(e,t){return i=t,n.isEqualNode(e)}))?o.splice(i,1):a.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:a}},se=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},me=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[I[n]||n]=e[n],t}),t)},fe=function(e,t,n){switch(e){case T.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[Y]=!0,o=me(n,r),[c.createElement(T.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=se(n),a=ie(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+_(a,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+_(a,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case g:case h:return{toComponent:function(){return me(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[Y]=!0,r);return Object.keys(t).forEach((function(e){var n=I[e]||e;if(n===M||n===E){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),c.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===M||e===E)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+_(r[t],n)+'"';return e?e+" "+o:o}),""),a=r.innerHTML||r.cssText||"",i=-1===P.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(i?"/>":">"+a+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.scriptTags,l=e.styleTags,s=e.title,m=void 0===s?"":s,f=e.titleAttributes;return{base:fe(T.BASE,t,r),bodyAttributes:fe(g,n,r),htmlAttributes:fe(h,o,r),link:fe(T.LINK,a,r),meta:fe(T.META,i,r),noscript:fe(T.NOSCRIPT,c,r),script:fe(T.SCRIPT,u,r),style:fe(T.STYLE,l,r),title:fe(T.TITLE,{title:m,titleAttributes:f},r)}},de=m()((function(e){return{baseTag:q([j,A],e),bodyAttributes:V(g,e),defer:J(e,x),encode:J(e,D),htmlAttributes:V(h,e),linkTags:K(T.LINK,[O,j],e),metaTags:K(T.META,[w,v,N,k,C],e),noscriptTags:K(T.NOSCRIPT,[M],e),onChangeClientState:X(e),scriptTags:K(T.SCRIPT,[L,M],e),styleTags:K(T.STYLE,[E],e),title:G(e),titleAttributes:V(b,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ae(e,(function(){oe=null}))})):(ae(e),oe=null)}),pe)((function(){return null})),ye=(o=de,i=a=function(e){function t(){return R(this,t),F(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case T.SCRIPT:case T.NOSCRIPT:return{innerHTML:t};case T.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return W({},r,((t={})[n.type]=[].concat(r[n.type]||[],[W({},o,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(r.type){case T.TITLE:return W({},o,((t={})[r.type]=i,t.titleAttributes=W({},a),t));case T.BODY:return W({},o,{bodyAttributes:W({},a)});case T.HTML:return W({},o,{htmlAttributes:W({},a)})}return W({},o,((n={})[r.type]=W({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=W({},t);return Object.keys(e).forEach((function(t){var r;n=W({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,a=o.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[z[n]||n]=e[n],t}),t)}(Z(o,["children"]));switch(n.warnOnInvalidChildren(e,a),e.type){case T.LINK:case T.META:case T.NOSCRIPT:case T.SCRIPT:case T.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Z(e,["children"]),r=W({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(o,r)},Q(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(c.Component),a.propTypes={base:l().object,bodyAttributes:l().object,children:l().oneOfType([l().arrayOf(l().node),l().node]),defaultTitle:l().string,defer:l().bool,encodeSpecialCharacters:l().bool,htmlAttributes:l().object,link:l().arrayOf(l().object),meta:l().arrayOf(l().object),noscript:l().arrayOf(l().object),onChangeClientState:l().func,script:l().arrayOf(l().object),style:l().arrayOf(l().object),title:l().string,titleAttributes:l().object,titleTemplate:l().string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=o.peek,a.rewind=function(){var e=o.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);ye.renderStatic=ye.rewind;var ge=n(9499),he=n(5444),be=function(e){var t=e.title,n=e.description,r=e.image,o=e.article,a=(0,ge.useLocation)().pathname,i=(0,he.useStaticQuery)(Te).site.siteMetadata,u=i.defaultTitle,l=i.titleTemplate,s=i.defaultDescription,m=i.siteUrl,f=i.defaultImage,p=i.twitterUsername,d={title:t||u,description:n||s,image:""+m+(r||f),url:""+m+a};return c.createElement(ye,{title:d.title,titleTemplate:l,htmlAttributes:{lang:"en"}},c.createElement("meta",{name:"description",content:d.description}),c.createElement("meta",{name:"image",content:d.image}),c.createElement("meta",{name:"keywords",content:"sbrikki, books, sbrikki's books, book club, sbrikkisbooks"}),d.url&&c.createElement("meta",{property:"og:url",content:d.url}),o?c.createElement("meta",{property:"og:type",content:"article"}):c.createElement("meta",{property:"og:type",content:"website"}),d.title&&c.createElement("meta",{property:"og:title",content:d.title}),d.description&&c.createElement("meta",{property:"og:description",content:d.description}),d.image&&c.createElement("meta",{property:"og:image",content:d.image}),c.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),p&&c.createElement("meta",{name:"twitter:creator",content:p}),d.title&&c.createElement("meta",{name:"twitter:title",content:d.title}),d.description&&c.createElement("meta",{name:"twitter:description",content:d.description}),d.image&&c.createElement("meta",{name:"twitter:image",content:d.image}))};be.defaultProps={title:"Sbrikki's Books - A Book Club for everyone",description:"Sbrikki's Books is an apolitical book club for everyone. The main aim is the growth of every member from a cultural point of view. We also drink.",image:null,article:!1};var Te="2094259327",ve=be}}]);
//# sourceMappingURL=commons-a01064bf9c7a302a98fe.js.map