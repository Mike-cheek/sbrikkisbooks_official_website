(this.webpackJsonpsbrikkisbooks_official_website=this.webpackJsonpsbrikkisbooks_official_website||[]).push([[0],[,,,,function(e,t,n){e.exports={navBar:"navBar_navBar__3w8sZ",logo:"navBar_logo__1WSxW",navigationDesktop:"navBar_navigationDesktop__3N9JK",navigationMobile:"navBar_navigationMobile__3RJAc",hamburger:"navBar_hamburger__qyanT",navBarDesktop:"navBar_navBarDesktop__3llAV"}},,function(e,t,n){e.exports={navDesktop:"navigation_navDesktop__3OErR",navMobile:"navigation_navMobile__N_jzb",rotateMenu:"navigation_rotateMenu__2pzhN"}},function(e,t,n){e.exports={hamburger:"hamburger_hamburger__89CFo",pop:"hamburger_pop___H6uc",flip:"hamburger_flip__1DSLn"}},function(e,t,n){e.exports={list:"playersList_list__2TjKI",pop:"playersList_pop__3d9hK",hiddenList:"playersList_hiddenList__1dR2y"}},function(e,t,n){e.exports={players:"choosePlayers_players__r1Qsb",countPlayers:"choosePlayers_countPlayers__u1Mj_",pop:"choosePlayers_pop__2bzu3"}},,function(e,t,n){e.exports={logo:"logo_logo__KB9YB",pop:"logo_pop__1WyRC"}},function(e,t,n){e.exports={item:"navItem_item__2C0zg",hov:"navItem_hov__3iSkT"}},function(e,t,n){e.exports={cross:"cross_cross__1Zve4"}},,,,function(e,t,n){e.exports={gif:"bookAnimation_gif__MxLku",fadeInAndPop:"bookAnimation_fadeInAndPop__3f1R7"}},,function(e,t,n){e.exports={text:"text_text__39Fn5",pop:"text_pop__30HZr"}},function(e,t,n){e.exports={hero:"hero_hero__1924p"}},function(e,t,n){e.exports={kingHero:"kingHero_kingHero__13edf"}},function(e,t,n){e.exports={playerGame:"playerGame_playerGame__29oGi"}},function(e,t,n){e.exports={separator:"separator_separator__2U1O-"}},,,,,function(e,t,n){},,,,,,function(e,t,n){e.exports={fadeIn:"spotify_fadeIn__3Pag_"}},function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),s=n(10),o=n.n(s),r=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),i(e),c(e),s(e),o(e)}))},a=n(3),l=(n(28),n(4)),j=n.p+"static/media/logo.72546d34.svg",u=n(11),b=n(0),d=function(e){return Object(b.jsx)("img",{src:j,alt:"Logo",className:u.logo})},p=n(12),x=function(e){return Object(b.jsx)("button",{className:p.item,onClick:e.onClick,children:e.text})},m=n(6),O=function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:m.navDesktop,children:[Object(b.jsx)(x,{text:"Home",onClick:e.viewHero}),Object(b.jsx)(x,{text:"Spotify",onClick:e.viewSpotify}),Object(b.jsx)(x,{text:"King",onClick:e.viewKing})]}),Object(b.jsxs)("div",{className:m.navMobile,children:[Object(b.jsx)(x,{text:"Home",onClick:e.viewHero}),Object(b.jsx)(x,{text:"Spotify",onClick:e.viewSpotify}),Object(b.jsx)(x,{text:"King",onClick:e.viewKing})]})]})},f=n(7),v=n.p+"static/media/hamburger.d46ad84e.svg";var h=function(e){return Object(b.jsx)("div",{className:f.flip,children:Object(b.jsx)("img",{src:v,className:f.hamburger,alt:"Open",onClick:e.onclick})})},_=n.p+"static/media/cross.7714b4bb.svg",g=n(13);var k=function(e){return Object(b.jsx)("img",{src:_,alt:"Close",className:g.cross,onClick:e.onclick})},y=function(e){var t=Object(i.useState)(!1),n=Object(a.a)(t,2),c=n[0],s=n[1];Object(i.useEffect)((function(){var e=window.pageYOffset;window.onscroll=function(){var t=window.pageYOffset;0===t||e>t?document.getElementById("navBar").style.top="0":c||(document.getElementById("navBar").style.top="-80px"),e=t}}));var o=function(){s(!1)};return Object(b.jsxs)("div",{className:l.navBar,id:"navBar",children:[Object(b.jsx)("div",{className:l.logo,children:Object(b.jsx)(d,{})}),Object(b.jsx)("div",{className:l.navigationDesktop,children:Object(b.jsx)(O,{viewHero:e.viewHero,viewKing:e.viewKing,viewSpotify:e.viewSpotify})}),c?Object(b.jsx)("div",{className:l.navigationMobile,children:Object(b.jsx)(O,{viewHero:function(){o(),e.viewHero()},viewKing:function(){o(),e.viewKing()},viewSpotify:function(){o(),e.viewSpotify()}})}):null,Object(b.jsx)("div",{className:l.hamburger,children:c?Object(b.jsx)(k,{onclick:o}):Object(b.jsx)(h,{onclick:function(){s(!0)}})})]})},w=n(14),S=function(e){return Object(b.jsxs)(w.a,{children:[Object(b.jsx)("title",{children:e.title}),Object(b.jsx)("meta",{name:"description",content:e.description}),Object(b.jsx)("meta",{name:"keywords",content:e.keywords}),Object(b.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"})]})},B=n.p+"static/media/book-paging.c80b5674.gif",C=n(17);var N=function(){return Object(b.jsx)("img",{src:B,alt:"Reading...",className:C.gif})},P=n(18),H=n.n(P),I=function(){return Object(b.jsx)(H.a,{options:{strings:["We read...","We drink...","We vaccinate ourselves...","We have fun!"],autoStart:!0,loop:!0,deleteSpeed:50}})},K=n(19);var M=function(){return Object(b.jsxs)("div",{className:K.text,children:[Object(b.jsx)("h1",{children:"Welcome to Sbrikki's Books"}),Object(b.jsx)("h2",{children:"Join us in this Book Club for nights full of reading"}),Object(b.jsx)("h2",{children:Object(b.jsx)(I,{})})]})},F=n(20),L=function(){return Object(b.jsxs)("div",{className:F.hero,id:"/",children:[Object(b.jsx)(M,{}),Object(b.jsx)(N,{})]})},W=n(21),D=n(8);var E=function(e){var t,n=[],c=Object(i.useState)(!1),s=Object(a.a)(c,2),o=s[0],r=s[1];for(t=0;t<e.numPlayers;t++)n.push(t);return Object(i.useEffect)((function(){var e=document.getElementById("list").getBoundingClientRect();e.top>=0&&e.left>=0&&e.right<=window.innerWidth&&e.bottom<=window.innerHeight?r(!0):r(!1)}),[]),Object(b.jsxs)(b.Fragment,{children:[n.map((function(e){return Object(b.jsx)("div",{className:o?D.list:D.hiddenList,id:"list",children:Object(b.jsx)("input",{type:"input",id:"player"+e,placeholder:"Name"})},e)})),e.numPlayers>0?Object(b.jsx)("button",{onClick:e.onClick,children:Object(b.jsx)("h3",{children:"START!"})}):null]})},R=n(9);var T=function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:R.players,children:[Object(b.jsx)("h2",{children:"How many players?"}),Object(b.jsxs)("div",{className:R.countPlayers,children:[Object(b.jsx)("button",{onClick:e.decreasePlayers,children:Object(b.jsx)("p",{children:"-"})}),Object(b.jsx)("p",{children:e.numPlayers}),Object(b.jsx)("button",{onClick:e.increasePlayers,children:Object(b.jsx)("p",{children:"+"})})]})]}),Object(b.jsx)(E,{numPlayers:e.numPlayers,onClick:e.getPlayers})]})},A=n(22),G=function(e){var t,n=[];for(t=1;t<e.rounds;t++)n.push(t);return Object(b.jsxs)("div",{className:A.playerGame,children:[Object(b.jsx)("h3",{children:e.name}),n.map((function(t){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("input",{type:"number",id:"num"+e.name+t,min:"0",max:t}),Object(b.jsx)("input",{type:"checkbox",id:"check"+e.name+t,onChange:void e.name})]})}))]})},J=function(e){return Object(b.jsx)(b.Fragment,{children:e.players.map((function(t){return Object(b.jsx)("div",{children:Object(b.jsx)(G,{name:t.name,rounds:e.rounds})},t.key)}))})},Y=function(){var e=Object(i.useState)(!1),t=Object(a.a)(e,2),n=t[0],c=t[1],s=Object(i.useState)(5),o=Object(a.a)(s,2),r=o[0],l=o[1],j=Object(i.useState)([]),u=Object(a.a)(j,2),d=u[0],p=u[1],x=Object(i.useState)(0),m=Object(a.a)(x,2),O=m[0],f=m[1],v=Object(i.useState)(0),h=Object(a.a)(v,2),_=h[0],g=h[1],k=[];return Object(b.jsxs)("div",{className:W.kingHero,id:"/king",children:[Object(b.jsx)("h1",{children:"Let's play King"}),n?null:Object(b.jsx)(T,{decreasePlayers:function(){r>0&&l(r-1),r<=0&&alert("Mbare ocaca menu un cristiano nun si po fari")},increasePlayers:function(){r<10&&l(r+1),r>=10&&alert("Mbare quantu spacchiu siti")},numPlayers:r,getPlayers:function(){for(var e=!0,t=0;t<r;t++){""===document.getElementById("player"+t).value&&(e=!1)}if(e){for(var n=0;n<r;n++){var i=document.getElementById("player"+n);k.push({id:n,key:n,name:i.value})}p(k),c(!0),f(parseInt(40/r)),g(40%r)}}}),_>0?Object(b.jsxs)("h3",{children:["You have to remove ",_," ",1===_?"card":"cards"," from the deck"]}):null,O>0?Object(b.jsxs)("h3",{children:["We are going to play ",O," ",1===O?"round":"rounds"]}):Object(b.jsx)("h3",{children:"Insert names to start"}),n?Object(b.jsx)(J,{players:d,rounds:O}):null]})},z=n(23),Z=function(){return Object(b.jsx)("div",{className:z.separator,children:Object(b.jsx)("p",{})})};n(34);var q=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("iframe",{src:"https://open.spotify.com/embed/playlist/3XWNoTPdXdIRapbK86Y11l",width:"100%",height:"380",frameBorder:"0",allowtransparency:"true",allow:"encrypted-media",title:"Spotify"})})},X=function(){var e=Object(i.useState)(!0),t=Object(a.a)(e,2),n=t[0],c=t[1],s=Object(i.useState)(!1),o=Object(a.a)(s,2),r=o[0],l=o[1],j=Object(i.useState)(!1),u=Object(a.a)(j,2),d=u[0],p=u[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(S,{title:"Sbrikki's Books",description:"Sbrikki's Books - Book Club",keywords:"sbrikki, books, sbrikkis, book, club, libro"}),Object(b.jsx)(y,{viewHero:function(){c(!0),l(!1),p(!1)},viewKing:function(){c(!1),l(!0),p(!1)},viewSpotify:function(){c(!1),l(!1),p(!0)}}),n?Object(b.jsx)(L,{}):null,r?Object(b.jsx)(Y,{}):null,d?Object(b.jsx)(q,{}):null,Object(b.jsx)(Z,{})]})};o.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(X,{})}),document.getElementById("root")),r(console.log)}],[[35,1,2]]]);
//# sourceMappingURL=main.59fd2585.chunk.js.map