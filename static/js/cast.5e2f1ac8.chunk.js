(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[2],{65:function(t,e,c){"use strict";c.r(e),c.d(e,"default",(function(){return h}));var n=c(53),r=c(0),a=c(3),i=c(12),s=c(54),o=c(1);function h(){var t=Object(r.useState)([]),e=Object(n.a)(t,2),c=e[0],h=e[1],j=Object(r.useState)(!1),u=Object(n.a)(j,2),b=u[0],O=u[1],f=Object(r.useState)(!1),p=Object(n.a)(f,2),d=p[0],l=p[1],m=Object(a.h)().muvieid;return Object(r.useEffect)((function(){O(!0),s.a(m).then((function(t){0===t.length&&l(!0);var e=t.cast;h(e)})).finally((function(){return O(!1)}))}),[m]),Object(o.jsxs)(o.Fragment,{children:[c.map((function(t){return Object(o.jsxs)("div",{children:[Object(o.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(t.profile_path),alt:"poster"}),Object(o.jsx)("h3",{children:t.name}),Object(o.jsxs)("p",{children:["Character: ",t.character]})]},t.id)})),b&&Object(o.jsx)(i.a,{}),d&&Object(o.jsx)("h2",{children:"Sorry. We have no information about the actors for this movie "})]})}}}]);
//# sourceMappingURL=cast.5e2f1ac8.chunk.js.map