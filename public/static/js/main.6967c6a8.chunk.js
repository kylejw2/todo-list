(this.webpackJsonppresentation=this.webpackJsonppresentation||[]).push([[0],{131:function(e,t,a){e.exports=a.p+"static/media/bgImg.7cfaf174.jpg"},132:function(e,t,a){e.exports=a.p+"static/media/bgImgMobile.7a95487b.jpg"},135:function(e,t,a){e.exports=a(247)},14:function(e,t){var a=window.localStorage;e.exports={getItem:function(e){return a.getItem(e)},setItem:function(e,t){a.setItem(e,t)},getRemember:function(){return"true"===a.getItem("remember")}}},140:function(e,t,a){},147:function(e,t){},149:function(e,t){},160:function(e,t){},162:function(e,t){},187:function(e,t){},189:function(e,t){},190:function(e,t){},196:function(e,t){},198:function(e,t){},216:function(e,t){},218:function(e,t){},230:function(e,t){},233:function(e,t){},247:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(31),s=a.n(c),l=(a(140),a(133)),i=a(7),o=a(6),m=a(44),u=a.n(m),d=function(e){return r.a.createElement("nav",{className:"navbar navbar-expand-md bg-transparent navbar-dark bg-dark",style:{width:"100%"}},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("a",{className:"navbar-brand",href:"/"},r.a.createElement("img",{src:u.a,alt:"",width:"75px"})),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarResponsive"},r.a.createElement("span",{className:"navbar-toggler-icon"}))),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarResponsive"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"/"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link disabled",href:"/"},"About")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link disabled",href:"/"},"Pricing")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"#",onClick:function(){return e.changeSignup(!0)}},"Sign up")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"#",onClick:function(){return e.changeSignup(!1)}},"Log in")))))},p=a(131),f=a.n(p),g=a(132),h=a.n(g),b=a(11),E=a.n(b),v=a(22),j=a(69),O=a.n(j),k=a(14),N=function(e){var t=Object(n.useState)((function(){return""})),a=Object(o.a)(t,2),c=a[0],s=a[1],l=Object(n.useState)((function(){return""})),i=Object(o.a)(l,2),m=i[0],u=i[1],d=Object(n.useState)((function(){return""})),p=Object(o.a)(d,2),f=p[0],g=p[1],h=Object(n.useState)((function(){return""})),b=Object(o.a)(h,2),j=b[0],N=b[1],y=Object(n.useState)((function(){return!0})),S=Object(o.a)(y,2),w=S[0],x=S[1],C=Object(n.useState)((function(){return!1})),I=Object(o.a)(C,2),T=I[0],A=I[1],L=Object(n.useState)((function(){return!0})),D=Object(o.a)(L,2),J=D[0],P=D[1],q=O.a.genSaltSync(10),B=function(e){switch(e.target.name){case"remember":P(!J);break;case"name":s(e.target.value);break;case"email":u(e.target.value);break;case"password1":g(e.target.value);break;default:N(e.target.value)}},F=function(){var t=Object(v.a)(E.a.mark((function t(){var a,n,r;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={name:c,email:m,password:O.a.hashSync(f,q),lists:[]},n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)},t.next=4,fetch("".concat("/api","/users/signup"),n);case 4:401===(r=t.sent).status?A(!0):(A(!1),J&&Object(k.setItem)("token",r.headers.get("auth")),e.handleSuccessfulAuth(r.headers.get("auth")));case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return r.a.createElement("form",{className:"signup-login"},r.a.createElement("h2",null,"Sign up"),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",name:"name",className:"form-control",placeholder:"Enter name",value:c,onChange:B,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"email",name:"email",className:"form-control",placeholder:"Enter email",value:m,onChange:B,required:!0}),r.a.createElement("small",{className:"form-text text-muted"},"I'll never share your email with anyone else."),T?r.a.createElement("small",{className:"bright-red"},"Email already in use"):r.a.createElement(r.a.Fragment,null)),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",name:"password1",className:"form-control",placeholder:"Enter password",value:f,onChange:B,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",name:"password2",className:"form-control",placeholder:"Confirm password",value:j,onChange:B,required:!0}),w?r.a.createElement(r.a.Fragment,null):r.a.createElement("small",{className:"bright-red"},"Passwords do not match")),r.a.createElement("div",{className:"form-check",style:{paddingBottom:"12px"}},r.a.createElement("input",{type:"checkbox",name:"remember",className:"form-check-input",checked:J,onChange:B})," "," Keep me signed in"),r.a.createElement("button",{className:"btn btn-primary",onClick:function(e){e.preventDefault(),f===j?(x(!0),F()):x(!1)}},"Submit"),r.a.createElement("p",{onClick:function(){return e.changeSignup(!1)},className:"has-account"},"Already have an account?"))},y=function(e){var t=Object(n.useState)(Object(k.getItem)("email")),a=Object(o.a)(t,2),c=a[0],s=a[1],l=Object(n.useState)((function(){return""})),i=Object(o.a)(l,2),m=i[0],u=i[1],d=Object(n.useState)(Object(k.getRemember)()),p=Object(o.a)(d,2),f=p[0],g=p[1],h=Object(n.useState)((function(){return!1})),b=Object(o.a)(h,2),j=b[0],O=b[1],N=function(){var t=Object(v.a)(E.a.mark((function t(){var a,n,r;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={email:c,password:m},n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)},t.next=4,fetch("".concat("/api","/users/login"),n);case 4:401===(r=t.sent).status?O(!0):(O(!1),f&&Object(k.setItem)("auth",r.headers.get("auth")),e.handleSuccessfulAuth(r.headers.get("auth")));case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return r.a.createElement("form",{className:"signup-login"},r.a.createElement("h2",null,"Log in"),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"email",name:"email",className:"form-control",placeholder:"Enter email",value:c,onChange:function(e){var t=e.target;s(t.value)},required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",name:"password1",className:"form-control",placeholder:"Enter password",value:m,onChange:function(e){var t=e.target;u(t.value)},required:!0}),j?r.a.createElement("small",{className:"bright-red"},"Username and password incorrect."):r.a.createElement(r.a.Fragment,null)),r.a.createElement("div",{className:"form-check",style:{paddingBottom:"12px"}},r.a.createElement("input",{type:"checkbox",className:"form-check-input",checked:f,onChange:function(e){e.target;g(!f)}})," "," Keep me signed in"),r.a.createElement("button",{className:"btn btn-primary",onClick:function(e){e.preventDefault(),N(),f?(Object(k.setItem)("email",c),Object(k.setItem)("remember",!0)):(Object(k.setItem)("email",""),Object(k.setItem)("remember",!1),Object(k.setItem)("auth",""))}},"Submit"),r.a.createElement("p",{onClick:function(){return e.changeSignup(!0)},className:"has-account"},"Create an account"))},S=a(45),w=function(e){var t=Object(n.useState)((function(){return!0})),a=Object(o.a)(t,2),c=a[0],s=a[1],l=function(e){s(e)},i=function(t){Object(S.setItem)("auth",t),e.history.push("/profile")};return e.token&&i(e.token),r.a.createElement(r.a.Fragment,null,r.a.createElement(d,{changeSignup:l}),window.innerWidth>576?r.a.createElement("img",{src:f.a,className:"bgImg",alt:""}):r.a.createElement("img",{src:h.a,className:"bgImg",alt:""}),r.a.createElement("div",{className:"bgFilter"}),r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"offset-md-7 col-md-4 col-xs-10 align-items-center align"},c?r.a.createElement(N,{changeSignup:l,handleSuccessfulAuth:i}):r.a.createElement(y,{changeSignup:l,handleSuccessfulAuth:i})))))},x=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"list-group-item sideItem",onClick:function(){e.displayList(e.index)}},e.name))},C=a(253),I=a(248),T=a(249),A=a(250),L=a(251),D=a(46),J=function(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),c=a[0],s=a[1],l=Object(n.useState)(!1),i=Object(o.a)(l,2),m=i[0],d=i[1],p=Object(n.useState)(""),f=Object(o.a)(p,2),g=f[0],h=f[1],b=Object(n.useState)(""),E=Object(o.a)(b,2),v=E[0],j=E[1],O=Object(n.useState)(""),k=Object(o.a)(O,2),N=k[0],y=k[1],S=Object(n.useState)(new Date),w=Object(o.a)(S,2),x=w[0],J=w[1],P=Object(n.useState)(!1),q=Object(o.a)(P,2),B=q[0],F=q[1],R=function(){return s(!c)},H=function(){return d(!m)};return r.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark sticky-top"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"nav nav-justified col-1"}),r.a.createElement("div",{className:"nav nav-justified col-6 offset-2"},r.a.createElement("img",{src:u.a,className:"navbar-brand mx-auto",alt:"",width:"75px"})),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarResponsive"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarResponsive"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item",onClick:R},r.a.createElement("div",null,r.a.createElement(C.a,{isOpen:c,toggle:R},r.a.createElement(I.a,{toggle:R},"Add a new list"),r.a.createElement(T.a,null,r.a.createElement("form",null,r.a.createElement("input",{type:"text",value:g,placeholder:"New list name",style:{width:"100%",marginBottom:"10px"},onChange:function(e){var t=e.target;return h(t.value)},minLength:"1",required:!0}),r.a.createElement("input",{type:"text",value:v,placeholder:"List description",style:{width:"100%"},onChange:function(e){var t=e.target;return j(t.value)}}))),r.a.createElement(A.a,null,r.a.createElement(L.a,{color:"primary",onClick:function(){var t={name:g,description:v,tasks:[]};e.addList(t),R(),h(""),j("")}},"Create List")," ",r.a.createElement(L.a,{color:"secondary",onClick:R},"Cancel")))),r.a.createElement("p",{className:"nav-link"},"Add List")),r.a.createElement("li",{className:"nav-item",onClick:H},r.a.createElement("div",null,r.a.createElement(C.a,{isOpen:m,toggle:H},r.a.createElement(I.a,{toggle:H},"Add a new task"),r.a.createElement(T.a,null,r.a.createElement("form",null,r.a.createElement("input",{type:"text",value:N,placeholder:"New task name",style:{width:"100%",marginBottom:"10px"},onChange:function(e){var t=e.target;return y(t.value)},minLength:"1"}),B?"":r.a.createElement(D.a,{value:x,onChange:function(e){J(e)}}),r.a.createElement("input",{type:"checkbox",checked:B,style:{marginTop:"10px"},onChange:function(){return F(!B)}})," "," No finish date")),r.a.createElement(A.a,null,r.a.createElement(L.a,{color:"primary",onClick:function(){var t={name:N};B||(t.finishDate=x.toString()),e.addTask(t),H(),y(""),J(new Date)}},"Create Task")," ",r.a.createElement(L.a,{color:"secondary",onClick:H},"Cancel")))),r.a.createElement("p",{className:"nav-link"},"Add Task"))))))},P=function(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),c=a[0],s=a[1],l=Object(n.useState)(e.task.name),i=Object(o.a)(l,2),m=i[0],u=i[1],d=Object(n.useState)(new Date),p=Object(o.a)(d,2),f=p[0],g=p[1],h=Object(n.useState)(!1),b=Object(o.a)(h,2),E=b[0],v=b[1],j=function(){!0===c&&(u(e.task.name),g(new Date)),s(!c)},O=function(t){document.title=t?"Congrats!":"List",e.removeTask(e.index),j()};return r.a.createElement("li",{className:"row",style:{marginTop:"10px",borderBottom:"1px dashed #343b40"}},r.a.createElement("div",{className:"col-4"},r.a.createElement("div",null,e.task.name)),r.a.createElement("div",{className:"col-4"},void 0===e.task.finishDate?r.a.createElement("i",null,"No finish date"):e.task.finishDate.toString().substr(0,15)),r.a.createElement("div",{className:"col-4 text-center"},r.a.createElement("i",{className:"fa fa-gear",onClick:j,style:{fontSize:"20px"}}),r.a.createElement("div",null,r.a.createElement(C.a,{isOpen:c,toggle:j},r.a.createElement(I.a,{toggle:j},"Current Task"),r.a.createElement(T.a,null,r.a.createElement("form",null,r.a.createElement("input",{type:"text",placeholder:"New list name",style:{width:"100%",marginBottom:"10px"},value:m,onChange:function(e){var t=e.target;return u(t.value)}}),E?"":r.a.createElement(D.a,{value:f,onChange:function(e){g(e)}}),r.a.createElement("input",{type:"checkbox",checked:E,style:{marginTop:"10px"},onChange:function(){return v(!E)}})," "," No finish date")),r.a.createElement(A.a,null,r.a.createElement(L.a,{color:"success",onClick:function(){return O(!0)}},"Completed")," ",r.a.createElement(L.a,{color:"secondary",onClick:function(){var t={name:m};E||(t.finishDate=f),e.updateTask(t,e.index)}},"Update"),r.a.createElement(L.a,{color:"danger",onClick:function(){return O(!1)}},"Delete"))))))},q=a(252),B=function(e){var t=Object(S.getItem)("auth");t||e.history.push("/");var a=Object(n.useState)({lists:[]}),c=Object(o.a)(a,2),s=c[0],l=c[1],i=Object(n.useState)({name:"",description:"",tasks:[]}),m=Object(o.a)(i,2),u=m[0],d=m[1],p=Object(n.useState)(0),f=Object(o.a)(p,2),g=f[0],h=f[1];Object(n.useEffect)((function(){var e={headers:{auth:t}};fetch("".concat("/api","/lists"),e).then((function(e){return e.json()})).then((function(e){l(e),e.lists.length>0&&d(e.lists[g])}))}),[t,l,g]);var b=function(e){d(s.lists[e]),h(e)},j=function(){var e=Object(v.a)(E.a.mark((function e(t){var a,n,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return 0===s.lists.length&&d(t),(a=Object.assign({},s)).lists.push(t),n=s.id,delete a.id,r={method:"PATCH",headers:{"Content-Type":"application/json",id:n},body:JSON.stringify({lists:a.lists})},e.next=8,fetch("".concat("/api","/lists"),r);case 8:a.id=n,l(a);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(v.a)(E.a.mark((function e(t){var a,n,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==u.name){e.next=3;break}return window.alert("You must create a list before adding a task."),e.abrupt("return");case 3:return a=Object.assign({},s),n=a.id,delete a.id,a.lists[g].tasks.push(t),r={method:"PATCH",headers:{"Content-Type":"application/json",id:s.id},body:JSON.stringify(a)},e.next=10,fetch("".concat("/api","/lists"),r);case 10:a.id=n,l(a);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(v.a)(E.a.mark((function e(t){var a,n,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},s),n=a.id,delete a.id,a.lists[g].tasks.splice(t,1),r={method:"PATCH",headers:{"Content-Type":"application/json",id:n},body:JSON.stringify(a)},e.next=7,fetch("".concat("/api","/lists"),r);case 7:a.id=n,l(a);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(v.a)(E.a.mark((function e(t){var a,n,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return document.title=t?"Way to go!":"Keep trying!",a=Object.assign({},s),n=a.id,delete a.id,a.lists.splice(g,1),r={method:"PATCH",headers:{"Content-Type":"application/json",id:n},body:JSON.stringify(a)},e.next=8,fetch("".concat("/api","/lists"),r);case 8:a.id=n,l(a),0!==a.lists.length?(h(0),d(s.lists[0])):(h(0),d({name:"",description:"",tasks:[]}));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(v.a)(E.a.mark((function e(t,a){var n,r,c;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object.assign({},s),r=n.id,delete n.id,n.lists[g].tasks.splice(a,1,t),c={method:"PATCH",headers:{"Content-Type":"application/json",id:r},body:JSON.stringify(n)},e.next=7,fetch("".concat("/api","/lists"),c);case 7:n.id=r,l(n);case 9:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(J,{addList:j,addTask:O}),r.a.createElement("div",{className:"container-fluid",style:{padding:"0"}},r.a.createElement("div",{className:"row"},r.a.createElement("aside",{className:"col-md-3"},r.a.createElement("ul",{className:"list-group list-group-flush sidebar"},s.lists.map((function(e,t){return r.a.createElement(x,{key:t,displayList:b,index:t,name:e.name})})))),r.a.createElement("main",{className:"col-md-9"},r.a.createElement("h1",{className:"display-title"},u.name,s.lists.length>0?r.a.createElement("span",{style:{float:"right",marginRight:"20px"}},r.a.createElement(q.a,null,r.a.createElement(L.a,{color:"success",onClick:function(){return N(!0)}},r.a.createElement("i",{className:"fa fa-check"})),r.a.createElement(L.a,{color:"danger",onClick:function(){return N(!1)}},r.a.createElement("i",{className:"fa fa-remove"})))):"To begin, add your first list!"),r.a.createElement("h3",{style:{fontWeight:"200",fontStyle:"italic"}},u.description),r.a.createElement("ul",null,u.tasks.map((function(e,t){return r.a.createElement(P,{task:e,index:t,key:t,removeTask:k,updateTask:y})})))))))};var F=function(){var e=Object(k.getItem)("auth");return r.a.createElement(l.a,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(w,Object.assign({},t,{token:e}))}}),r.a.createElement(i.a,{exact:!0,path:"/profile",render:function(t){return r.a.createElement(B,Object.assign({},t,{token:e}))}})))};s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(F,null)),document.getElementById("root"))},44:function(e,t,a){e.exports=a.p+"static/media/logo.cddeebc3.png"},45:function(e,t){var a=window.sessionStorage;e.exports={setItem:function(e,t){a.setItem(e,t)},getItem:function(e){return a.getItem(e)}}}},[[135,1,2]]]);
//# sourceMappingURL=main.6967c6a8.chunk.js.map