(this["webpackJsonpwhatsapp-clone"]=this["webpackJsonpwhatsapp-clone"]||[]).push([[0],{1068:function(e,t,a){},1069:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(9),r=a.n(s),i=(a(20),a(10)),o=a(1),l=a(2),m=a(6),u=a(21),d=function e(){Object(m.a)(this,e),this.id=u.random.uuid(),this.name=u.name.findName(),this.avatar=u.internet.avatar()},f=function e(t,a,n){Object(m.a)(this,e),this.id=u.random.uuid(),this.msg=a||u.lorem.words(u.helpers.randomize(Object(o.a)(Array(20).keys()))),this.isMainUser=t,this.date=n||u.date.recent()},g=new d,h=Object(o.a)(Array(11).keys()).map((function(){return new d})).map((function(e){return{contact:e,messages:Object(o.a)(Array(50).keys()).map((function(e,t){return new f((t+1)%2===0)})).filter((function(e){return e.msg}))}}));function v(e){var t=e.user,a=e.showName;return c.a.createElement("div",{className:"avatar-component"},c.a.createElement("img",{className:"avatar",src:t.avatar,alt:""}),a&&c.a.createElement("h3",{className:"avatar-title"},t.name))}var p=a(5),E=a.n(p);function b(e){var t,a,n=e.contact,s=e.setContactSelected,r=e.messages,i=Math.max.apply(Math,Object(o.a)(r.map((function(e){return e.date.getTime()})))),l=r.find((function(e){return e.date.getTime()===i}));return c.a.createElement("div",{className:"contact-box",onClick:function(){return s(n)}},c.a.createElement(v,{user:n}),c.a.createElement("div",{className:"right-section"},c.a.createElement("div",{className:"contact-box-header"},c.a.createElement("h3",{className:"avatar-title"},n.name),c.a.createElement("span",{className:"time-mark"},l.date.toLocaleDateString())),c.a.createElement("div",{className:"last-msg"},c.a.createElement("img",{src:E.a,alt:"",className:"icon-small"}),c.a.createElement("span",{className:"text"},(t=l.msg,a=30,t.length>a?"".concat(t.substring(0,a)," ..."):t)))))}function N(e){var t=e.message;return c.a.createElement("div",{className:"message ".concat(t.isMainUser?"sent":"received")},t.msg,c.a.createElement("div",{className:"metadata"},c.a.createElement("span",{className:"date"},t.date.toLocaleString()),t.isMainUser&&c.a.createElement("img",{src:E.a,alt:"",className:"icon-small"})))}function j(e){var t=e.messages,a=Object(n.useRef)(null);return Object(n.useEffect)((function(){a.current.scrollIntoView()}),[t]),c.a.createElement("div",{className:"chats"},t.sort((function(e,t){return e.date.getTime()-t.date.getTime()})).map((function(e){return c.a.createElement(N,{message:e,key:e.id})})),c.a.createElement("div",{style:{float:"right",clear:"both"},ref:a}))}var w=a(11),O=a.n(w),y=a(12),x=a.n(y),S=a(13),k=a.n(S);function M(e){var t=e.message,a=e.setMessage,n=e.pushMessage;return c.a.createElement("div",{className:"chat-input-box"},c.a.createElement("div",{className:"icon emoji-selector"},c.a.createElement("img",{src:O.a,alt:""})),c.a.createElement("div",{className:"chat-input"},c.a.createElement("input",{type:"text",placeholder:"Type a message",value:t,onChange:function(e){return a(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&t&&n()}})),c.a.createElement("div",{className:"icon send",onClick:n},c.a.createElement("img",{src:t?k.a:x.a,alt:""})))}function C(e){var t=e.search,a=e.setSearch;return c.a.createElement("div",{className:"search"},c.a.createElement("input",{type:"text",placeholder:"Search or start a new chat",value:t,onChange:function(e){return a(e.target.value)}}))}var T=a(14),L=a.n(T);function I(){return c.a.createElement("div",{className:"welcome"},c.a.createElement("img",{src:L.a,alt:""}),c.a.createElement("h1",null," HELLO TITU."),c.a.createElement("h4",null,"   Some people go to priests; others to poetry; I to my friends."))}a(1068);var U=function(){var e=Object(n.useState)(h),t=Object(l.a)(e,2),a=t[0],s=t[1],r=Object(n.useState)({}),m=Object(l.a)(r,2),u=m[0],d=m[1],p=Object(n.useState)([]),E=Object(l.a)(p,2),N=E[0],w=E[1],O=Object(n.useState)(""),y=Object(l.a)(O,2),x=y[0],S=y[1],k=Object(n.useState)(""),T=Object(l.a)(k,2),L=T[0],U=T[1],A=Object(n.useState)([]),D=Object(l.a)(A,2),B=D[0],J=D[1];return Object(n.useEffect)((function(){var e=a.find((function(e){return e.contact.id===u.id}));w(e&&e.messages||[]),function(e,t){var a=e.filter((function(e){var a=e.contact;return!t||a.name.toLowerCase().includes(t.toLowerCase())}));J(a)}(a,L)}),[u,a,L]),c.a.createElement("div",{className:"app"},c.a.createElement("aside",null,c.a.createElement("header",null,c.a.createElement(v,{user:g})),c.a.createElement(C,{search:L,setSearch:U}),c.a.createElement("div",{className:"contact-boxes"},B.map((function(e){var t=e.contact,a=e.messages;return c.a.createElement(b,{contact:t,key:t.id,setContactSelected:d,messages:a})})))),u.id?c.a.createElement("main",null,c.a.createElement("header",null,c.a.createElement(v,{user:u,showName:!0})),c.a.createElement(j,{messages:N}),c.a.createElement(M,{message:x,setMessage:S,pushMessage:function(){var e=a.findIndex((function(e){return e.contact.id===u.id})),t=Object.assign([],a,Object(i.a)({},e,{contact:u,messages:[].concat(Object(o.a)(a[e].messages),[new f(!0,x,new Date)])}));s(t),S("")}})):c.a.createElement(I,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},11:function(e,t,a){e.exports=a.p+"static/media/tag_faces.c50cc449.svg"},12:function(e,t,a){e.exports=a.p+"static/media/mic.958bf042.svg"},13:function(e,t,a){e.exports=a.p+"static/media/send.282ecb9e.svg"},14:function(e,t,a){e.exports=a.p+"static/media/intro-whatsapp.282a36f5.jpg"},15:function(e,t,a){e.exports=a(1069)},20:function(e,t,a){},5:function(e,t,a){e.exports=a.p+"static/media/done_all.211c1153.svg"}},[[15,1,2]]]);
//# sourceMappingURL=main.54ad0a35.chunk.js.map