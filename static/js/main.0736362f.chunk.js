(this.webpackJsonppizza=this.webpackJsonppizza||[]).push([[0],{30:function(e,t,a){e.exports=a(41)},35:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),o=a.n(c),l=(a(35),a(2)),i=a(14),s=function(e){return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"container container--header"},r.a.createElement(i.b,{to:"/"},r.a.createElement("div",{className:"header__logo"},r.a.createElement("img",{width:"40",alt:"pizza-logo",src:"./img/pizza-logo.svg"}),r.a.createElement("div",{className:"header__title"},r.a.createElement("h1",null,"REACT PIZZA"),r.a.createElement("p",null,"\u0421\u0430\u043c\u0430\u044f \u0432\u043a\u0443\u0441\u043d\u0430\u044f \u043f\u0438\u0446\u0446\u0430 \u0432\u043e \u0432\u0441\u0435\u043b\u0435\u043d\u043d\u043e\u0439")))),r.a.createElement("div",{className:"header__cart"},r.a.createElement(i.b,{to:"cart",className:"button button--cart"},r.a.createElement("span",null,"520\u0420"),r.a.createElement("div",{className:"button__delimeter"}),r.a.createElement("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),r.a.createElement("path",{d:"M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),r.a.createElement("path",{d:"M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})),r.a.createElement("span",null,"3")))))},u=a(3),m=a(15),p=a(21),d=a.n(p),E=["\u0442\u043e\u043d\u043a\u043e\u0435","\u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043e\u043d\u043d\u043e\u0435"],f=[26,30,40],h=r.a.memo((function(e){var t=e.outline,a=e.name,c=e.types,o=e.sizes,l=e.price,i=e.imgUrl,s=Object(n.useState)({type:c[0],size:f.indexOf(o[0])}),p=Object(m.a)(s,2),h=p[0],b=p[1];return r.a.createElement("li",{className:"pizza"},r.a.createElement("img",{width:"250",alt:"pizza-img",src:i}),r.a.createElement("h3",null,a),r.a.createElement("div",{className:"pizza__options options"},r.a.createElement("ul",{className:"options__types"},E.map((function(e,t){return r.a.createElement("li",{key:e,onClick:function(){return function(e){b(Object(u.a)(Object(u.a)({},h),{},{type:e}))}(t)},className:d()({options__type:!0,options__button:!0,"options__button--active":t===h.type,disabled:!c.includes(t)})},e)}))),r.a.createElement("ul",{className:"options__sizes"},f.map((function(e,t){return r.a.createElement("li",{key:e,onClick:function(){return function(e){b(Object(u.a)(Object(u.a)({},h),{},{size:e}))}(t)},className:d()({"options__type options__button":!0,"options__button--active":t===h.size,disabled:!o.includes(e)})},e," \u0441\u043c.")})))),r.a.createElement("div",{className:"pizza__footer"},r.a.createElement("p",{className:"pizza__price"},"\u043e\u0442 ",l," \u0420."),r.a.createElement("button",{className:t?"button button--outline":"button"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c")))})),b=a(6),_="filters/SORTED_BY",g="filters/SET_CATEGORY",y=function(e){return{type:_,payload:e}},v=function(e){return{type:g,payload:e}},z=["\u0412\u0441\u0435","\u041c\u044f\u0441\u043d\u044b\u0435","\u0412\u0435\u0433\u0435\u0442\u0430\u0440\u0438\u0430\u043d\u0441\u043a\u0430\u044f","\u0413\u0440\u0438\u043b\u044c","\u041e\u0441\u0442\u0440\u044b\u0435","\u0417\u0430\u043a\u0440\u044b\u0442\u044b\u0435"];var C=r.a.memo((function(){var e=r.a.useState("\u0412\u0441\u0435"),t=Object(m.a)(e,2),a=t[0],n=t[1],c=Object(b.b)(),o=function(e){var t=e.target.textContent;n(t),c(v(t))};return r.a.createElement("ul",{className:"filter-group__list"},z&&z.map((function(e){return r.a.createElement("li",{onClick:o,className:"filter-group__item ".concat(a===e?" filter-group__item--active":""),key:e},e)})))})),j=["\u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0441\u0442\u0438","\u0446\u0435\u043d\u0435","\u0430\u043b\u0444\u0430\u0432\u0438\u0442\u0443"],N=r.a.memo((function(){var e=Object(b.b)(),t=Object(b.c)((function(e){return e.filters.sortedBy})),a=r.a.useState(!1),n=Object(m.a)(a,2),c=n[0],o=n[1],l=r.a.useRef(),i=function(e){e.path.includes(l.current)||o(!1)};return r.a.useEffect((function(){document.body.addEventListener("click",i)}),[]),r.a.createElement("div",{ref:l,className:"filter-group__sort sort"},r.a.createElement("div",{className:"sort__label"},r.a.createElement("svg",{className:c?"rotated":"",width:"10",height:"6",viewBox:"0 0 10 6",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z",fill:"#2C2C2C"})),r.a.createElement("b",null,"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430 \u043f\u043e: "),r.a.createElement("span",{className:"sort__link",onClick:function(){o(!c)}},t)),c&&r.a.createElement("ul",{className:"sort__popup",onClick:function(t){var a=t.target.textContent;e(y(a)),o(!c)}},j&&j.map((function(e){return r.a.createElement("li",{className:e===t?"sort__popup--active":"",key:e},e)}))))})),O=(a(53),"pizzas/IS_LOADED"),w="pizzas/SET_PIZZAS",k=function(e){return{type:w,payload:e}},x=function(e){return{type:O,payload:e}},L=function(e){return{"\u0412\u0441\u0435":"all","\u041c\u044f\u0441\u043d\u044b\u0435":"meat","\u0412\u0435\u0433\u0435\u0442\u0430\u0440\u0438\u0430\u043d\u0441\u043a\u0430\u044f":"veg","\u0413\u0440\u0438\u043b\u044c":"gril","\u041e\u0441\u0442\u0440\u044b\u0435":"spicy","\u0417\u0430\u043a\u0440\u044b\u0442\u044b\u0435":"close","\u0446\u0435\u043d\u0435":"price","\u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0441\u0442\u0438":"rating","\u0430\u043b\u0444\u0430\u0432\u0438\u0442\u0443":"name"}[e]},S=function(e,t){return function(a){a(x(!1)),fetch("http://localhost:3000/pizzas?".concat("\u0412\u0441\u0435"===e?"":"tag=".concat(L(e)),"&_sort=").concat(L(t),"&_order=asc")).then((function(e){return e.json()})).then((function(e){a(k(e)),a(x(!0))})).catch((function(e){}))}},B=a(26),A=function(e){return r.a.createElement(B.a,Object.assign({speed:2,width:250,height:476,viewBox:"0 0 250 476",backgroundColor:"#f5f5f5",foregroundColor:"#e0e0e0"},e),r.a.createElement("circle",{cx:"125",cy:"125",r:"125"}),r.a.createElement("rect",{x:"0",y:"294",rx:"3",ry:"3",width:"250",height:"34"}),r.a.createElement("rect",{x:"0",y:"358",rx:"3",ry:"3",width:"250",height:"60"}),r.a.createElement("rect",{x:"0",y:"427",rx:"3",ry:"3",width:"110",height:"43"}),r.a.createElement("rect",{x:"139",y:"427",rx:"3",ry:"3",width:"110",height:"43"}))},Z=r.a.memo((function(){var e=Object(b.c)((function(e){return e.pizzas.isLoaded})),t=Object(b.c)((function(e){return e.pizzas.items})),a=Object(b.c)((function(e){return e.filters})),n=a.category,c=a.sortedBy,o=Object(b.b)();return r.a.useEffect((function(){o(S(n,c))}),[n,c]),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"filter-group"},r.a.createElement(C,null),r.a.createElement(N,null)),r.a.createElement("section",{className:"content-group"},r.a.createElement("h2",null,"\u0412\u0441\u0435 \u043f\u0438\u0446\u0446\u044b"),r.a.createElement("ul",{className:"pizzas"},e?t&&t.map((function(e){return r.a.createElement(h,Object.assign({key:e.id},e))})):Array.from("0123456789ab").map((function(e){return r.a.createElement(A,{key:e,className:"pizza"})})),!t.length&&r.a.createElement("p",null,"\u041f\u0438\u0446\u0446\u044b \u0437\u0430\u043a\u043e\u043d\u0447\u0438\u043b\u0438\u0441\u044c"))))})),M=function(){return r.a.createElement("h1",null,"\u041a\u043e\u0440\u0437\u0438\u043d\u0430")};var T=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"wrapper"},r.a.createElement(s,null),r.a.createElement("main",{className:"main"},r.a.createElement(l.a,{path:"/",exact:!0,component:Z}),r.a.createElement(l.a,{path:"/cart",exact:!0,component:M})),r.a.createElement("footer",{className:"footer"},"footer")))},R=a(27),D=a(13),H=a(28),I={isLoaded:!1,items:[]},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case w:return Object(u.a)(Object(u.a)({},e),{},{items:n});case O:return Object(u.a)(Object(u.a)({},e),{},{isLoaded:n});default:return e}},J={sortedBy:"\u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0441\u0442\u0438",category:"\u0412\u0441\u0435"},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case _:return Object(u.a)(Object(u.a)({},e),{},{sortedBy:n});case g:return Object(u.a)(Object(u.a)({},e),{},{category:n});default:return e}},Y=Object(D.combineReducers)({pizzas:W,filters:P}),G=Object(D.createStore)(Y,Object(R.composeWithDevTools)(Object(D.applyMiddleware)(H.a)));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,null,r.a.createElement(b.a,{store:G},r.a.createElement(T,null)))),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.0736362f.chunk.js.map