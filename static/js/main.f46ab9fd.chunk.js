(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{11:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(5),s=n.n(a),i=(n(11),n(2)),o=n(0),l=function(e){return Object(o.jsxs)(r.a.Fragment,{children:[Object(o.jsx)("div",{className:"field",children:Object(o.jsx)("label",{children:"Enter Search Term"})}),Object(o.jsxs)("div",{className:"input-group rounded mb-2",children:[Object(o.jsx)("input",{type:"search",className:"form-control rounded",placeholder:"Search","aria-label":"Search","aria-describedby":"search-addon",onChange:e.handleChangeTerm}),Object(o.jsx)("span",{className:"input-group-text border-0",id:"search-addon",children:Object(o.jsx)("i",{className:"bi bi-search"})})]})]})},d=n(4),j=n.n(d),u=n(6),h=function(e){var t=e.movie,n=t.Poster,c=t.Title,r=t.Type,a=t.Year;return Object(o.jsxs)("div",{className:"video-item item mb-2",children:[Object(o.jsx)("img",{alt:c,className:"ui image",src:n}),Object(o.jsxs)("div",{className:"content",children:[Object(o.jsxs)("div",{children:["Title: ",c]}),Object(o.jsxs)("div",{children:["Type: ",r]}),Object(o.jsxs)("div",{children:["Year of Production: ",a]})]})]})},b=function(e){var t,n=Object(c.useState)([]),a=Object(i.a)(n,2),s=a[0],l=a[1],d=Object(c.useState)(""),b=Object(i.a)(d,2),m=b[0],O=b[1];return Object(c.useEffect)((function(){var t=function(){var t=Object(u.a)(j.a.mark((function t(){var n,c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("http://www.omdbapi.com/?apikey=a60d62fd&s="+e.searchTerm);case 3:return n=t.sent,t.next=6,n.json();case 6:c=t.sent,console.log(c),"True"===c.Response?(l(c.Search),O(""),console.log(c.Search.length)):(O(c.Error),l([])),t.next=13;break;case 11:t.prev=11,t.t0=t.catch(0);case 13:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(){return t.apply(this,arguments)}}(),n=setTimeout((function(){e.searchTerm&&t()}),1e3);return function(){clearTimeout(n)}}),[e.searchTerm]),""!==m?Object(o.jsx)("p",{style:{display:"flex",justifyContent:"center"},children:m}):(s.length&&(t=s.map((function(e){return Object(o.jsx)(h,{movie:e},e.imdbID)}))),Object(o.jsx)(r.a.Fragment,{children:Object(o.jsx)("div",{className:"ui celled list",children:t})}))},m=function(e){var t=Object(c.useState)(""),n=Object(i.a)(t,2),r=n[0],a=n[1];return Object(o.jsx)(c.Fragment,{children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"flex-row",children:[Object(o.jsx)(l,{handleChangeTerm:function(e){return a(e.target.value)}}),Object(o.jsx)(b,{searchTerm:r})]})})})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(o.jsx)(c.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root")),O()}},[[14,1,2]]]);
//# sourceMappingURL=main.f46ab9fd.chunk.js.map