(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{136:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),i=a(0),o=a.n(i),u=a(170),c=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement(u.a,{title:"Not Found"},o.a.createElement("p",null,"Hey! You just hit a page that doesn't exist..."))},t}(o.a.Component);t.default=c},145:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),u=a(146),c=a.n(u);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return u.withPrefix}),a.d(t,"navigate",function(){return u.navigate}),a.d(t,"push",function(){return u.push}),a.d(t,"replace",function(){return u.replace}),a.d(t,"navigateTo",function(){return u.navigateTo});var l=a(157),s=a.n(l);a.d(t,"PageRenderer",function(){return s.a});var m=a(32);a.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},157:function(e,t,a){var n;e.exports=(n=a(165))&&n.default||n},158:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Material UI Business Starter",contact:{email:"peter@foxandgeese.com",phone:"503-724-8522"}}}}}},159:function(e,t,a){"use strict";var n=a(164),r=a(0),i=a.n(r),o=a(179),u=a.n(o),c=a(145),l=function(e){return i.a.createElement(c.StaticQuery,{query:s,render:function(t){var a=e.title||t.site.siteMetadata.title;return i.a.createElement(u.a,{htmlAttributes:{lang:"en"},title:a,titleTemplate:"%s - "+t.site.siteMetadata.title},e.children)},data:n})};l.defaultProps={lang:"en",meta:[],keywords:[]},t.a=l;var s="1175772"},164:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Material UI Business Starter"}}}}},165:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),u=a(55),c=a(2),l=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},166:function(e){e.exports={data:{site:{siteMetadata:{menuLinks:[{name:"Products",link:"/products"},{name:"Team",link:"/team"}]}}}}},167:function(e){e.exports={data:{site:{siteMetadata:{menuLinks:[{name:"Products",link:"/products"},{name:"Team",link:"/team"}]}}}}},168:function(e,t,a){"use strict";(function(e,n){a.d(t,"a",function(){return d});a(74),a(53),a(75),a(194);var r=a(174),i=a(161),o=a(195),u=a.n(o),c=a(196),l=a.n(c),s=Object(i.createMuiTheme)({palette:{primary:{light:u.a[300],main:u.a[500],dark:u.a[700]},secondary:{light:l.a[300],main:l.a[500],dark:l.a[700]}},typography:{useNextVariants:!0}});function m(){return{theme:s,sheetsManager:new Map,sheetsRegistry:new r.SheetsRegistry,generateClassName:Object(i.createGenerateClassName)()}}function d(){return e.browser?(n.__INIT_MATERIAL_UI__||(n.__INIT_MATERIAL_UI__=m()),n.__INIT_MATERIAL_UI__):m()}}).call(this,a(193),a(73))},169:function(e,t,a){},170:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),o=a.n(i),u=a(159),c=a(158),l=a(145),s=(a(162),a(163),a(166)),m=a(173),d=a.n(m),p=function(e){var t=e.data.site.siteMetadata.menuLinks;return o.a.createElement(o.a.Fragment,null,t.map(function(e){return o.a.createElement(l.Link,{key:e.name,to:e.link},o.a.createElement(d.a,{style:{color:"#fff"}},e.name))}))},f=function(e){return o.a.createElement(l.StaticQuery,{query:"240237662",render:function(e){return o.a.createElement(p,{data:e})},data:s})},h=a(167),g=a(184),E=a.n(g),y=a(185),v=a.n(y),k=a(183),M=a.n(k),w=a(177),x=a.n(w),b=a(160),C=function(e){function t(t){var a;return(a=e.call(this,t)||this).toggleMenu=function(e){a.setState(function(e){return{menuActive:!e.menuActive}})},a.state={menuActive:!1},a}return r()(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata.menuLinks;return o.a.createElement(o.a.Fragment,null,o.a.createElement(x.a,{onClick:this.toggleMenu},o.a.createElement(b.a,{style:{color:"#efefef"}})),o.a.createElement(M.a,{onClickAway:this.toggleMenu},o.a.createElement(E.a,{open:this.state.menuActive,onClose:this.toggleMenu},e.map(function(e){return o.a.createElement(l.Link,{key:e.name,to:e.link},o.a.createElement(v.a,null,e.name))}))))},t}(o.a.Component),_=function(e){return o.a.createElement(l.StaticQuery,{query:"709782962",render:function(t){return o.a.createElement(C,{active:e.active,data:t})},data:h})},I=a(189),T=a.n(I),q=a(172),S=a.n(q),A=a(187),P=a.n(A),R=a(186),L=a.n(R),N=a(155),j=a.n(N),U=a(188),G=a.n(U),Q=a(178),F=a.n(Q),B=function(e){return o.a.createElement(L.a,{id:"appBar"},o.a.createElement(P.a,null,o.a.createElement(S.a,{container:!0,justify:"space-between",alignItems:"center",spacing:16},o.a.createElement(S.a,{item:!0},o.a.createElement(G.a,{id:"logo",variant:"outlined",avatar:o.a.createElement(F.a,{id:"logoIcon"},o.a.createElement(b.c,null)),label:o.a.createElement(l.Link,{to:"/"},e.data.site.siteMetadata.title.toUpperCase())})),o.a.createElement(S.a,{item:!0},o.a.createElement(T.a,{smDown:!0},o.a.createElement(j.a,{style:{color:"#efefef",flex:1},component:"span",variant:"caption"},o.a.createElement(f,null))))),o.a.createElement(S.a,{item:!0},o.a.createElement(T.a,{mdUp:!0},o.a.createElement(_,null)))))},O=function(e){return o.a.createElement(l.StaticQuery,{query:"4102418190",render:function(e){return o.a.createElement(B,{data:e})},data:c})},D=a(190),J=a.n(D),Y=function(e){var t=e.data.site.siteMetadata,a=t.title,n=t.contact,r=n.email,i=n.phone;return o.a.createElement(o.a.Fragment,null,o.a.createElement(J.a,{style:{marginTop:"48px",marginBottom:"24px"}}),o.a.createElement("footer",{style:{marginBottom:"24px",whiteSpace:"nowrap"},id:"footer"},o.a.createElement("span",null,o.a.createElement(j.a,{variant:"caption",component:"span"},"©",(new Date).getFullYear()," ",a," – ",r," – ",i))))},H=function(e){return o.a.createElement(l.StaticQuery,{query:"4102418190",render:function(e){return o.a.createElement(Y,{data:e})},data:c})},V=a(191),z=a(161),K=a(197),W=a.n(K),X=a(192),Z=a.n(X),$=a(168);var ee=function(e){return function(t){function a(e){var a;return(a=t.call(this,e)||this).muiPageContext=Object($.a)(),a}r()(a,t);var n=a.prototype;return n.componentDidMount=function(){var e=document.querySelector("#jss-server-side");e&&e.parentNode&&e.parentNode.removeChild(e)},n.render=function(){return o.a.createElement(Z.a,{generateClassName:this.muiPageContext.generateClassName},o.a.createElement(z.MuiThemeProvider,{theme:this.muiPageContext.theme,sheetsManager:this.muiPageContext.sheetsManager},o.a.createElement(W.a,null),o.a.createElement(e,this.props)))},a}(o.a.Component)},te=(a(169),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.children;return o.a.createElement(o.a.Fragment,null,o.a.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500"}),o.a.createElement(u.a,null),o.a.createElement(O,null),o.a.createElement(V.Grid,{style:{marginTop:"94px"}},o.a.createElement(V.Row,null,o.a.createElement(V.Col,{xs:12},t?o.a.createElement(j.a,{variant:"h2",gutterBottom:!0,style:{textAlign:"center"}},t):null,a,o.a.createElement(H,null)))))},t}(o.a.Component));t.a=ee(te)}}]);
//# sourceMappingURL=component---src-pages-404-js-9b74246fd9e41f106105.js.map