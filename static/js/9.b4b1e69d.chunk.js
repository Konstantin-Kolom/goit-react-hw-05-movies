(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[9],{54:function(e,t,n){"use strict";n.d(t,"c",(function(){return l})),n.d(t,"e",(function(){return j})),n.d(t,"b",(function(){return b})),n.d(t,"a",(function(){return d})),n.d(t,"d",(function(){return h}));var c=n(55),a=n.n(c),i=n(57),s="1cecc067256bce66d88819c359ab872b",r="https://api.themoviedb.org/3/";function o(){return u.apply(this,arguments)}function u(){return u=Object(i.a)(a.a.mark((function e(){var t,n,c,i=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:"",n=i.length>1&&void 0!==i[1]?i[1]:{},e.next=4,fetch(t,n);case 4:if(!(c=e.sent).ok){e.next=11;break}return e.next=8,c.json();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=Promise.reject(new Error("Not found"));case 12:return e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}function l(){return o("".concat(r,"trending/all/day?api_key=").concat(s))}function j(e){return o("".concat(r,"search/movie?api_key=").concat(s,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"))}function b(e){return o("".concat(r,"movie/").concat(e,"?api_key=").concat(s,"&language=en-US"))}function d(e){return o("".concat(r,"movie/").concat(e,"/credits?api_key=").concat(s,"&language=en-US"))}function h(e){return o("".concat(r,"movie/").concat(e,"/reviews?api_key=").concat(s,"&language=en-US&page=1"))}},62:function(e,t,n){e.exports={button:"MovieDetailsPage_button__19PXw",buttonText:"MovieDetailsPage_buttonText__2OjxA",boxCard:"MovieDetailsPage_boxCard__17EwE",img:"MovieDetailsPage_img__3ugFU",link:"MovieDetailsPage_link__1vdbg",linkActive:"MovieDetailsPage_linkActive__iMSg7"}},68:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return x}));var c=n(53),a=n(0),i=n(3),s=n(6),r=n(63),o=n(12),u=n(1);function l(){return Object(u.jsx)("h1",{children:"Sorry, we have no information about this movie :( "})}var j=n(54),b=n(62),d=n.n(b),h=Object(a.lazy)((function(){return n.e(2).then(n.bind(null,65))})),v=Object(a.lazy)((function(){return n.e(5).then(n.bind(null,66))}));function x(){var e=Object(a.useState)(""),t=Object(c.a)(e,2),n=t[0],b=t[1],x=Object(a.useState)(!1),O=Object(c.a)(x,2),p=O[0],f=O[1],m=Object(i.i)(),g=m.url,_=m.path,k=Object(i.h)().muvieid,w=Object(i.g)(),y=Object(i.f)();function N(){var e;y.push((null===(e=w.state)||void 0===e?void 0:e.from)?w.state.from:"/")}Object(a.useEffect)((function(){j.b(k).then((function(e){b(e)})).catch((function(){return f(!0)}))}),[k]);var S=n.name,C=n.title,P=n.poster_path,M=n.vote_average,A=n.overview,D=n.genres;return""!==n?Object(u.jsxs)("div",{children:[Object(u.jsxs)("button",{type:"button",onClick:N,className:d.a.button,children:[Object(u.jsx)(r.a,{size:"20px"})," ",Object(u.jsx)("span",{className:d.a.buttonText,children:" Go back"})]}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:d.a.boxCard,children:[Object(u.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(P),alt:"poster",loading:"lazy",className:d.a.img}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("h2",{className:"title",children:[S,C]}),Object(u.jsxs)("p",{children:["User score: ",10*M,"%"]}),Object(u.jsx)("h3",{children:"Overview:"})," ",Object(u.jsx)("p",{children:A}),Object(u.jsx)("h4",{children:"Genres: "}),Object(u.jsx)("p",{children:D.map((function(e){return Object(u.jsx)("span",{children:e.name},e.id)}))})]})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h4",{children:"Additional information"}),Object(u.jsxs)("ul",{children:[Object(u.jsxs)(a.Suspense,{fallback:Object(u.jsx)(o.a,{}),children:[Object(u.jsx)("li",{children:Object(u.jsx)(s.c,{to:{pathname:"".concat(g,"/cast"),state:{from:w.state.from}},className:d.a.link,activeClassName:d.a.linkActive,children:"Cast"})}),Object(u.jsx)("li",{children:Object(u.jsx)(s.c,{to:{pathname:"".concat(g,"/reviews"),state:{from:w.state.from}},className:d.a.link,activeClassName:d.a.linkActive,children:"Reviews"})})]}),Object(u.jsx)(i.a,{path:"".concat(_,"/cast"),children:Object(u.jsx)(h,{})}),Object(u.jsx)(i.a,{path:"".concat(_,"/reviews"),children:Object(u.jsx)(v,{})})]})]})]})]}):""===n&&!1===p?Object(u.jsx)(o.a,{}):""===n&&!0===p?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("button",{type:"button",onClick:N,className:d.a.button,children:[Object(u.jsx)(r.a,{size:"20px"})," ",Object(u.jsx)("span",{className:d.a.buttonText,children:" Go back"})]}),Object(u.jsx)(l,{})]}):void 0}}}]);
//# sourceMappingURL=9.b4b1e69d.chunk.js.map