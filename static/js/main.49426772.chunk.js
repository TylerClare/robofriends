(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);n(8),n(9);var r=n(1),c=n.n(r),s=n(7),o=n.n(s),a=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),s(e),o(e)}))},i=n(2),h=n(3),l=n(5),b=n(4),u=n(0),d=function(e){var t=e.name,n=e.email,r=e.id;return Object(u.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(u.jsx)("img",{src:"https://robohash.org/".concat(r,"?200x200"),alt:"robots"}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:t}),Object(u.jsx)("p",{children:n})]})]})},j=function(e){var t=e.robots;return Object(u.jsx)("div",{children:t.map((function(e,n){return Object(u.jsx)(d,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},f=function(e){var t=e.searchChange;return Object(u.jsx)("div",{className:"pa2",children:Object(u.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Robots",onChange:t})})},O=function(e){return Object(u.jsx)("div",{style:{overflowY:"scroll",border:"5px solid black",height:"800px"},children:e.children})},p=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(h.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(u.jsx)("h1",{children:"Oooops. That is not good."}):this.props.children}}]),n}(r.Component),g=(n(15),function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchField,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(u.jsxs)("div",{className:"tc",children:[Object(u.jsx)("h1",{className:"f2",children:"RoboFriends"}),Object(u.jsx)(f,{searchChange:this.onSearchChange}),Object(u.jsx)(O,{children:Object(u.jsx)(p,{children:Object(u.jsx)(j,{robots:r})})})]}):Object(u.jsx)("h1",{children:"Loading..."})}}]),n}(r.Component));o.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root")),a()},9:function(e,t,n){}},[[16,1,2]]]);
//# sourceMappingURL=main.49426772.chunk.js.map