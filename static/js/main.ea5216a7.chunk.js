(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var r=n(6),c=n.n(r),s=n(3),a=n(4),u=n(1),o=n.n(u),i=n(2),l=n.n(i),p=(n(12),n(13),n(14),n(0)),j=function(t){var e=t.posts,n=t.postId,r=t.setPostId;return Object(p.jsxs)("div",{className:"PostsList",children:[Object(p.jsx)("h2",{children:"Posts:"}),0===e.length?Object(p.jsx)("p",{children:"Posts not found"}):Object(p.jsx)("ul",{className:"PostsList__list",children:e.map((function(t){return Object(p.jsxs)("li",{className:"PostsList__item",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"[User #".concat(t.userId,"]: ")}),t.title]}),n===t.id?Object(p.jsx)("button",{type:"button",className:"PostsList__button button",onClick:function(){return r(0)},children:"Close"}):Object(p.jsx)("button",{type:"button",className:"PostsList__button button",onClick:function(){return r(t.id)},children:"Open"})]},t.id)}))})]})},b=(n(16),n(17),function(){return Object(p.jsx)("div",{className:"Loader",children:Object(p.jsx)("div",{className:"Loader__content"})})}),f="https://mate.academy/students-api",d=function(){var t=Object(s.a)(o.a.mark((function t(e){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(f).concat(e));case 3:return n=t.sent,t.next=6,n.json();case 6:return t.abrupt("return",t.sent);case 9:return t.prev=9,t.t0=t.catch(0),t.abrupt("return",console.log(t.t0));case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(s.a)(o.a.mark((function t(e){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(f).concat(e),{method:"DELETE"});case 3:return n=t.sent,t.next=6,n.json();case 6:return t.abrupt("return",t.sent);case 9:return t.prev=9,t.t0=t.catch(0),t.abrupt("return",console.log(t.t0));case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=Object(s.a)(o.a.mark((function t(e,n){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(f).concat(e),{headers:{"Content-type":"application/json; charset=UTF-8"},method:"POST",body:JSON.stringify(n)});case 3:return r=t.sent,t.next=6,r.json();case 6:return t.abrupt("return",t.sent);case 9:return t.prev=9,t.t0=t.catch(0),t.abrupt("return",console.log(t.t0));case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,n){return t.apply(this,arguments)}}(),O=function(){var t=Object(s.a)(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",d("/comments?postId=".concat(e)));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),x=function(){var t=Object(s.a)(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",m("/comments/".concat(e)));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=Object(s.a)(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",h("/comments",e));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),_=(n(18),l.a.memo((function(t){var e=t.postId,n=t.fetchComments,r=Object(i.useState)(""),c=Object(a.a)(r,2),u=c[0],l=c[1],j=Object(i.useState)(""),f=Object(a.a)(j,2),d=f[0],m=f[1],h=Object(i.useState)(""),O=Object(a.a)(h,2),x=O[0],_=O[1],w=Object(i.useState)(!1),N=Object(a.a)(w,2),y=N[0],k=N[1],S=Object(i.useState)(!1),g=Object(a.a)(S,2),P=g[0],C=g[1],I=function(){y&&k(!1)},F=function(){var t=Object(s.a)(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v(e);case 2:return t.next=4,n();case 4:C(!1);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(p.jsxs)("form",{className:"NewCommentForm",onSubmit:function(t){(t.preventDefault(),u&&d&&x)?(C(!0),F({postId:e,name:u,email:d,body:x}),l(""),m(""),_("")):k(!0)},children:[Object(p.jsx)("div",{className:"form-field",children:Object(p.jsx)("input",{value:u,type:"text",name:"name",placeholder:"Your name",className:"NewCommentForm__input",onChange:function(t){l(t.target.value),I()}})}),Object(p.jsx)("div",{className:"form-field",children:Object(p.jsx)("input",{value:d,type:"text",name:"email",placeholder:"Your email",className:"NewCommentForm__input",onChange:function(t){m(t.target.value),I()}})}),Object(p.jsx)("div",{className:"form-field",children:Object(p.jsx)("textarea",{value:x,name:"body",placeholder:"Type comment here",className:"NewCommentForm__input",onChange:function(t){_(t.target.value),I()}})}),Object(p.jsx)("button",{type:"submit",className:"NewCommentForm__submit-button button",children:"Add a comment"}),P&&Object(p.jsx)(b,{}),y&&Object(p.jsx)("h3",{children:"Fill all fields"})]})}))),w=function(){var t=Object(s.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",d("/posts"));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),N=function(){var t=Object(s.a)(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",d("/posts?userId=".concat(e)));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),y=function(){var t=Object(s.a)(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",d("/posts/".concat(e)));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),k=function(t){var e=t.postId,n=Object(i.useState)(),r=Object(a.a)(n,2),c=r[0],u=r[1],l=Object(i.useState)([]),j=Object(a.a)(l,2),f=j[0],d=j[1],m=Object(i.useState)(!0),h=Object(a.a)(m,2),v=h[0],w=h[1],N=Object(i.useState)(!0),k=Object(a.a)(N,2),S=k[0],g=k[1],P=function(){var t=Object(s.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=d,t.next=3,O(e);case 3:t.t1=t.sent,(0,t.t0)(t.t1),w(!1);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),C=function(){var t=Object(s.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return w(!0),t.t0=u,t.next=4,y(e);case 4:t.t1=t.sent,(0,t.t0)(t.t1),P();case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(i.useEffect)((function(){0!==e&&C()}),[e]),Object(p.jsxs)("div",{className:"PostDetails",children:[Object(p.jsx)("h2",{children:"Post details:"}),v?Object(p.jsx)(b,{}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("section",{className:"PostDetails__post",children:Object(p.jsx)("p",{children:null===c||void 0===c?void 0:c.title})}),Object(p.jsx)("section",{className:"PostDetails__comments",children:0===f.length?Object(p.jsx)("p",{children:"No comments"}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("button",{type:"button",className:"button",onClick:function(){return g(!S)},children:"".concat(S?"Hide":"Show"," ").concat(f.length," comments")}),S&&Object(p.jsx)("ul",{className:"PostDetails__list",children:f.map((function(t){return Object(p.jsxs)("li",{className:"PostDetails__list-item",children:[Object(p.jsx)("button",{type:"button",className:"PostDetails__remove-button button",onClick:function(){x(t.id),d(f.filter((function(e){return e.id!==t.id})))},children:"X"}),Object(p.jsx)("p",{children:t.body})]},t.id)}))})]})}),Object(p.jsx)("section",{children:Object(p.jsx)("div",{className:"PostDetails__form-wrapper",children:Object(p.jsx)(_,{postId:e,fetchComments:P})})})]})]})},S=function(){var t=Object(s.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",d("/users"));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),g=function(){var t=Object(i.useState)([]),e=Object(a.a)(t,2),n=e[0],r=e[1],c=Object(i.useState)([]),u=Object(a.a)(c,2),l=u[0],f=u[1],d=Object(i.useState)(!0),m=Object(a.a)(d,2),h=m[0],O=m[1],x=Object(i.useState)(0),v=Object(a.a)(x,2),_=v[0],y=v[1],g=Object(i.useState)(0),P=Object(a.a)(g,2),C=P[0],I=P[1],F=function(){var t=Object(s.a)(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return O(!0),t.next=3,S();case 3:e=t.sent,r(e);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),D=function(){var t=Object(s.a)(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w();case 2:e=t.sent,f(e),O(!1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),A=function(){var t=Object(s.a)(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return O(!0),t.next=3,N(C);case 3:e=t.sent,f(e),O(!1);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(i.useEffect)((function(){F()}),[]),Object(i.useEffect)((function(){0===C?D():A()}),[C]),Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("header",{className:"App__header",children:Object(p.jsxs)("label",{htmlFor:"user-selector",children:["Select a user: \xa0",Object(p.jsxs)("select",{className:"App__user-selector",id:"user-selector",value:C,onChange:function(t){return I(+t.target.value)},children:[Object(p.jsx)("option",{value:"0",children:"All users"}),n.map((function(t){return Object(p.jsx)("option",{value:t.id,children:t.name})}))]})]})}),Object(p.jsxs)("main",{className:"App__main",children:[Object(p.jsx)("div",{className:"App__sidebar",children:h?Object(p.jsx)(b,{}):Object(p.jsx)(j,{posts:l,postId:_,setPostId:y})}),Object(p.jsx)("div",{className:"App__content",children:0!==_&&Object(p.jsx)(k,{postId:_})})]})]})};c.a.render(Object(p.jsx)(g,{}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.ea5216a7.chunk.js.map