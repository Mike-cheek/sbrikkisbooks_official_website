(self.webpackChunksbrikkisbooks=self.webpackChunksbrikkisbooks||[]).push([[351],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var c,l,u,s;if(Array.isArray(e)){if((c=e.length)!=i.length)return!1;for(l=c;0!=l--;)if(!a(e[l],i[l]))return!1;return!0}if(n&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(s=e.entries();!(l=s.next()).done;)if(!i.has(l.value[0]))return!1;for(s=e.entries();!(l=s.next()).done;)if(!a(l.value[1],i.get(l.value[0])))return!1;return!0}if(r&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(s=e.entries();!(l=s.next()).done;)if(!i.has(l.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((c=e.length)!=i.length)return!1;for(l=c;0!=l--;)if(e[l]!==i[l])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((c=(u=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(i,u[l]))return!1;if(t&&e instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==u[l]&&"__v"!==u[l]&&"__o"!==u[l]||!e.$$typeof)&&!a(e[u[l]],i[u[l]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return a(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,o=n(7294),a=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,u=[];function s(){l=e(u.map((function(e){return e.props}))),m.canUseDOM?t(l):n&&(l=n(l))}var m=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return l},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,u=[],e};var i=o.prototype;return i.UNSAFE_componentWillMount=function(){u.push(this),s()},i.componentDidUpdate=function(){s()},i.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),s()},i.render=function(){return a.createElement(r,this.props)},o}(o.PureComponent);return i(m,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(m,"canUseDOM",c),m}}},1082:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var r=n(7294),o=n.p+"static/logo-72546d3427ebf8019513c64f3d2bff1f.svg",a=function(e){return r.createElement("a",{href:"/"},r.createElement("img",{src:o,alt:"Sbrikki's Books Logo",className:"logo-module--logo--EQ6xL"}))},i="navItem-module--item--HpDHa",c=n(5444),l=function(e){return r.createElement(r.Fragment,null,e.isHref?r.createElement("a",{href:e.path,className:i,onClick:e.onClick},e.text):r.createElement(c.Link,{className:i,to:e.path,onClick:e.onClick},e.text))},u=function(e){return r.createElement(r.Fragment,null,r.createElement("div",{className:"navigation-module--navDesktop--V4wOn"},r.createElement(l,{text:"Home",path:"/"}),r.createElement(l,{text:"Spotify",path:"/spotify"}),r.createElement(l,{text:"Stats",path:"/stats"}),r.createElement(l,{text:"King",path:"/king"}),r.createElement(l,{text:"Contact us",path:"#contactUs",isHref:!0})),r.createElement("div",{className:"navigation-module--navMobile--7U-MJ"},r.createElement(l,{text:"Home",path:"/",onClick:e.onClick}),r.createElement(l,{text:"Spotify",path:"/spotify",onClick:e.onClick}),r.createElement(l,{text:"Stats",path:"/stats",onClick:e.onClick}),r.createElement(l,{text:"King",path:"/king",onClick:e.onClick}),r.createElement(l,{text:"Contact us",path:"#contactUs",onClick:e.onClick,isHref:!0})))};var s=function(e){return r.createElement("div",{className:"hamburger-module--hamburger--XhWSf",onClick:e.onClick,onKeyDown:e.onClick,role:"button",tabIndex:0},r.createElement("div",{className:e.navBarOpen?"hamburger-module--crossLine1--kEFxb":"hamburger-module--hamLine1--jCuN0"}),r.createElement("div",{className:e.navBarOpen?"hamburger-module--crossLine2--6T+aQ":"hamburger-module--hamLine2--zIAoH"}),r.createElement("div",{className:e.navBarOpen?"hamburger-module--crossLine3--AYcoW":"hamburger-module--hamLine3--JPMju"}))},m=function(e){var t=(0,r.useState)(!1),n=t[0],o=t[1];(0,r.useEffect)((function(){var e=window.pageYOffset;window.onscroll=function(){var t=window.pageYOffset;document.getElementById("navBar")&&(0===t||e>t?document.getElementById("navBar").style.top="0":n||(document.getElementById("navBar").style.top="-80px")),e=t}}));var i=function(){o(!1),document.body.style.overflowY="scroll",document.body.style.height="auto",document.getElementsByTagName("html")[0].style.overflowY="scroll",document.getElementsByTagName("html")[0].style.height="auto"};return r.createElement("div",{className:"navBar-module--navBar--TdHdv",id:"navBar"},r.createElement("div",{className:"navBar-module--logo--WgOHQ"},r.createElement(a,null)),e.isBlocking?null:r.createElement("div",{className:"navBar-module--navigationDesktop--foGDZ"},r.createElement(u,null)),n&&!e.isBlocking?r.createElement("div",{className:"navBar-module--navigationMobile--DS1-I"},r.createElement(u,{onClick:i})):null,e.isBlocking?null:r.createElement("div",{className:"navBar-module--hamburger---A7xu"},r.createElement(s,{onClick:n?i:function(){o(!0),document.body.style.overflow="hidden",document.body.style.height="100%",document.getElementsByTagName("html")[0].style.overflow="hidden",document.getElementsByTagName("html")[0].style.height="100%"},navBarOpen:n})))},f=function(e){var t=e.email,n=e.subject,o=void 0===n?"":n,a=e.body,i=void 0===a?"":a,c=e.children,l=e.enabled,u=o||i?"?":"";return o&&(u+="subject="+encodeURIComponent(o)),i&&(u+=(o?"&":"")+"body="+encodeURIComponent(i)),r.createElement(r.Fragment,null,r.createElement("a",{href:"mailto:"+t+u,className:l?"mailTo-module--mailto--rzFFj":"mailTo-module--mailtoDisabled--77y+n"},c),l?null:r.createElement("p",{className:"mailTo-module--suggestion--OMfQ2"},"Fill in the fields above first"))},d="contactUs-module--nsInput--TgDYx";var p=function(e){var t=(0,r.useState)(),n=t[0],o=t[1],a=(0,r.useState)(),i=a[0],c=a[1];return r.createElement("div",{className:"contactUs-module--contactUs--9475g"},r.createElement("div",{className:"contactUs-module--contactHero--BLjmv"},r.createElement("div",{className:"contactUs-module--hamWrapper---ph+j"},r.createElement(s,{navBarOpen:e.formOpened,onClick:e.closeForm})),r.createElement("p",null,"Insert name and surname and contact us!"),r.createElement("input",{type:"text",id:"nameIn",onChange:function(){o(document.getElementById("nameIn").value)},className:d,placeholder:"Name"}),r.createElement("input",{type:"text",id:"surnameIn",onChange:function(){c(document.getElementById("surnameIn").value)},className:d,placeholder:"Surname"}),console.log(n+" "+i),r.createElement(f,{email:"sbrikkisbooks@gmail.com",subject:"I want to join!",body:"Hi, I'm "+n+" "+i+". I want to join to your Book Club!",enabled:void 0!==n&&void 0!==i&&""!==n&&""!==i},"Send us a mail!")))};var h=function(e){var t=(0,r.useState)(!1),n=t[0],o=t[1];return r.createElement("div",{className:"footer-module--footer--lU7l1",id:"contactUs"},r.createElement("p",null,"Join us!"),r.createElement("button",{onClick:function(){o(!0),e.setNotScrolling()},className:"footer-module--formButton--HXgpd"},"CONTACT US!"),n?r.createElement(p,{closeForm:function(){o(!1),e.setScrolling()},formOpened:n}):null)},y=function(e){var t=e.children,n=e.isBlocking;return r.createElement(r.Fragment,null,r.createElement(m,{isBlocking:n}),r.createElement("div",{className:"layout-module--layout--4I4G6"},t),r.createElement(h,null))}},6811:function(e,t,n){"use strict";n.d(t,{Z:function(){return Ee}});var r,o,a,i,c=n(7294),l=n(5697),u=n.n(l),s=n(4839),m=n.n(s),f=n(2993),d=n.n(f),p=n(6494),h=n.n(p),y="bodyAttributes",g="htmlAttributes",b="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},E=(Object.keys(v).map((function(e){return v[e]})),"charset"),T="cssText",w="href",k="http-equiv",C="innerHTML",O="itemprop",S="name",A="property",j="rel",I="src",N="target",x={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},B="defaultTitle",L="defer",P="encodeSpecialCharacters",M="onChangeClientState",H="titleTemplate",U=Object.keys(x).reduce((function(e,t){return e[x[t]]=t,e}),{}),D=[v.NOSCRIPT,v.SCRIPT,v.STYLE],R="data-react-helmet",F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},K=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},z=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},W=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Q=function(e){var t=X(e,v.TITLE),n=X(e,H);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=X(e,B);return t||r||void 0},V=function(e){return X(e,M)||function(){}},J=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return q({},e,t)}),{})},Z=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o].toLowerCase();if(-1!==e.indexOf(a)&&n[a])return t.concat(n)}return t}),[])},G=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+F(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var c=a[i],l=c.toLowerCase();-1===t.indexOf(l)||n===j&&"canonical"===e[n].toLowerCase()||l===j&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==C&&c!==T&&c!==O||(n=c)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][u]&&(o[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(o),i=0;i<a.length;i++){var c=a[i],l=h()({},r[c],o[c]);r[c]=l}return e}),[]).reverse()},X=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:n.g.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ae=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,u=e.scriptTags,s=e.styleTags,m=e.title,f=e.titleAttributes;le(v.BODY,r),le(v.HTML,o),ce(m,f);var d={baseTag:ue(v.BASE,n),linkTags:ue(v.LINK,a),metaTags:ue(v.META,i),noscriptTags:ue(v.NOSCRIPT,c),scriptTags:ue(v.SCRIPT,u),styleTags:ue(v.STYLE,s)},p={},h={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(p[e]=n),r.length&&(h[e]=d[e].oldTags)})),t&&t(),l(e,p,h)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),le(v.TITLE,t)},le=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(R),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(t),c=0;c<i.length;c++){var l=i[c],u=t[l]||"";n.getAttribute(l)!==u&&n.setAttribute(l,u),-1===o.indexOf(l)&&o.push(l);var s=a.indexOf(l);-1!==s&&a.splice(s,1)}for(var m=a.length-1;m>=0;m--)n.removeAttribute(a[m]);o.length===a.length?n.removeAttribute(R):n.getAttribute(R)!==i.join(",")&&n.setAttribute(R,i.join(","))}},ue=function(e,t){var n=document.head||document.querySelector(v.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===C)n.innerHTML=t.innerHTML;else if(r===T)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(R,"true"),o.some((function(e,t){return i=t,n.isEqualNode(e)}))?o.splice(i,1):a.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:a}},se=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},me=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[x[n]||n]=e[n],t}),t)},fe=function(e,t,n){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[R]=!0,o=me(n,r),[c.createElement(v.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=se(n),a=ie(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+W(a,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+W(a,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case y:case g:return{toComponent:function(){return me(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[R]=!0,r);return Object.keys(t).forEach((function(e){var n=x[e]||e;if(n===C||n===T){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),c.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===C||e===T)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+W(r[t],n)+'"';return e?e+" "+o:o}),""),a=r.innerHTML||r.cssText||"",i=-1===D.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(i?"/>":">"+a+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.scriptTags,u=e.styleTags,s=e.title,m=void 0===s?"":s,f=e.titleAttributes;return{base:fe(v.BASE,t,r),bodyAttributes:fe(y,n,r),htmlAttributes:fe(g,o,r),link:fe(v.LINK,a,r),meta:fe(v.META,i,r),noscript:fe(v.NOSCRIPT,c,r),script:fe(v.SCRIPT,l,r),style:fe(v.STYLE,u,r),title:fe(v.TITLE,{title:m,titleAttributes:f},r)}},pe=m()((function(e){return{baseTag:Z([w,N],e),bodyAttributes:J(y,e),defer:X(e,L),encode:X(e,P),htmlAttributes:J(g,e),linkTags:G(v.LINK,[j,w],e),metaTags:G(v.META,[S,E,k,A,O],e),noscriptTags:G(v.NOSCRIPT,[C],e),onChangeClientState:V(e),scriptTags:G(v.SCRIPT,[I,C],e),styleTags:G(v.STYLE,[T],e),title:Q(e),titleAttributes:J(b,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ae(e,(function(){oe=null}))})):(ae(e),oe=null)}),de)((function(){return null})),he=(o=pe,i=a=function(e){function t(){return _(this,t),z(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return q({},r,((t={})[n.type]=[].concat(r[n.type]||[],[q({},o,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(r.type){case v.TITLE:return q({},o,((t={})[r.type]=i,t.titleAttributes=q({},a),t));case v.BODY:return q({},o,{bodyAttributes:q({},a)});case v.HTML:return q({},o,{htmlAttributes:q({},a)})}return q({},o,((n={})[r.type]=q({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=q({},t);return Object.keys(e).forEach((function(t){var r;n=q({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,a=o.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[U[n]||n]=e[n],t}),t)}(K(o,["children"]));switch(n.warnOnInvalidChildren(e,a),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=K(e,["children"]),r=q({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(o,r)},Y(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(c.Component),a.propTypes={base:u().object,bodyAttributes:u().object,children:u().oneOfType([u().arrayOf(u().node),u().node]),defaultTitle:u().string,defer:u().bool,encodeSpecialCharacters:u().bool,htmlAttributes:u().object,link:u().arrayOf(u().object),meta:u().arrayOf(u().object),noscript:u().arrayOf(u().object),onChangeClientState:u().func,script:u().arrayOf(u().object),style:u().arrayOf(u().object),title:u().string,titleAttributes:u().object,titleTemplate:u().string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=o.peek,a.rewind=function(){var e=o.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);he.renderStatic=he.rewind;var ye=n(9499),ge=n(5444),be=function(e){var t=e.title,n=e.description,r=e.image,o=e.article,a=(0,ye.useLocation)().pathname,i=(0,ge.useStaticQuery)(ve).site.siteMetadata,l=i.defaultTitle,u=i.titleTemplate,s=i.defaultDescription,m=i.siteUrl,f=i.defaultImage,d=i.twitterUsername,p={title:t||l,description:n||s,image:""+m+(r||f),url:""+m+a};return c.createElement(he,{title:p.title,titleTemplate:u,htmlAttributes:{lang:"en"}},c.createElement("meta",{name:"description",content:p.description}),c.createElement("meta",{name:"image",content:p.image}),c.createElement("meta",{name:"keywords",content:"sbrikki, books, sbrikki's books, book club, sbrikkisbooks"}),p.url&&c.createElement("meta",{property:"og:url",content:p.url}),!o?null:c.createElement("meta",{property:"og:type",content:"article"}),p.title&&c.createElement("meta",{property:"og:title",content:p.title}),p.description&&c.createElement("meta",{property:"og:description",content:p.description}),p.image&&c.createElement("meta",{property:"og:image",content:p.image}),c.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),d&&c.createElement("meta",{name:"twitter:creator",content:d}),p.title&&c.createElement("meta",{name:"twitter:title",content:p.title}),p.description&&c.createElement("meta",{name:"twitter:description",content:p.description}),p.image&&c.createElement("meta",{name:"twitter:image",content:p.image}))};be.defaultProps={title:"Sbrikki's Books - A Book Club for everyone",description:"Sbrikki's Books is an apolitical book club for everyone. The main aim is the growth of every member from a cultural point of view. We also drink.",image:null,article:!1};var ve="2094259327",Ee=be}}]);
//# sourceMappingURL=commons-23d6885feaca3e5a52d6.js.map