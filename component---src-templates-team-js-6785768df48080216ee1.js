(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{139:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return f});var n=a(0),r=a.n(n),i=a(145),c=a(159),o=a(170),l=a(172),u=a.n(l),s=a(176),m=a.n(s),d=a(155),p=a.n(d),f="2412733283";t.default=function(e){var t=e.data,a=t.markdownRemark.frontmatter,n=a.title,l=a.image,s=a.jobtitle,d=t.markdownRemark.html;return r.a.createElement(o.a,null,r.a.createElement(c.a,{title:n}),r.a.createElement(m.a,null,r.a.createElement(u.a,{spacing:24,container:!0,direction:"row",alignItems:"flex-start",justify:"center"},r.a.createElement(u.a,{item:!0,xs:12,md:4},r.a.createElement("img",{style:{width:"100%"},src:Object(i.withPrefix)(l),alt:""})),r.a.createElement(u.a,{item:!0,xs:12,md:8},r.a.createElement(p.a,{gutterBottom:!0,variant:"h2",component:"h2"},n),r.a.createElement(p.a,{gutterBottom:!0,variant:"h5",component:"h5"},s),r.a.createElement(p.a,{dangerouslySetInnerHTML:{__html:d}})))))}},145:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),c=a.n(i),o=a(146),l=a.n(o);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var u=a(157),s=a.n(u);a.d(t,"PageRenderer",function(){return s.a});var m=a(32);a.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},157:function(e,t,a){var n;e.exports=(n=a(165))&&n.default||n},158:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Material UI Business Starter",contact:{email:"peter@foxandgeese.com",phone:"503-724-8522"}}}}}},159:function(e,t,a){"use strict";var n=a(164),r=a(0),i=a.n(r),c=a(179),o=a.n(c),l=a(145),u=function(e){return i.a.createElement(l.StaticQuery,{query:s,render:function(t){var a=e.title||t.site.siteMetadata.title;return i.a.createElement(o.a,{htmlAttributes:{lang:"en"},title:a,titleTemplate:"%s - "+t.site.siteMetadata.title},e.children)},data:n})};u.defaultProps={lang:"en",meta:[],keywords:[]},t.a=u;var s="1175772"},164:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Material UI Business Starter"}}}}},165:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),c=a.n(i),o=a(55),l=a(2),u=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=u},166:function(e){e.exports={data:{site:{siteMetadata:{menuLinks:[{name:"Products",link:"/products"},{name:"Team",link:"/team"}]}}}}},167:function(e){e.exports={data:{site:{siteMetadata:{menuLinks:[{name:"Products",link:"/products"},{name:"Team",link:"/team"}]}}}}},168:function(e,t,a){"use strict";(function(e,n){a.d(t,"a",function(){return d});a(74),a(53),a(75),a(194);var r=a(174),i=a(161),c=a(195),o=a.n(c),l=a(196),u=a.n(l),s=Object(i.createMuiTheme)({palette:{primary:{light:o.a[300],main:o.a[500],dark:o.a[700]},secondary:{light:u.a[300],main:u.a[500],dark:u.a[700]}},typography:{useNextVariants:!0}});function m(){return{theme:s,sheetsManager:new Map,sheetsRegistry:new r.SheetsRegistry,generateClassName:Object(i.createGenerateClassName)()}}function d(){return e.browser?(n.__INIT_MATERIAL_UI__||(n.__INIT_MATERIAL_UI__=m()),n.__INIT_MATERIAL_UI__):m()}}).call(this,a(193),a(73))},169:function(e,t,a){},170:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),c=a.n(i),o=a(159),l=a(158),u=a(145),s=(a(162),a(163),a(166)),m=a(173),d=a.n(m),p=function(e){var t=e.data.site.siteMetadata.menuLinks;return c.a.createElement(c.a.Fragment,null,t.map(function(e){return c.a.createElement(u.Link,{key:e.name,to:e.link},c.a.createElement(d.a,{style:{color:"#fff"}},e.name))}))},f=function(e){return c.a.createElement(u.StaticQuery,{query:"240237662",render:function(e){return c.a.createElement(p,{data:e})},data:s})},h=a(167),E=a(184),g=a.n(E),y=a(185),v=a.n(y),k=a(183),w=a.n(k),x=a(177),M=a.n(x),b=a(160),C=function(e){function t(t){var a;return(a=e.call(this,t)||this).toggleMenu=function(e){a.setState(function(e){return{menuActive:!e.menuActive}})},a.state={menuActive:!1},a}return r()(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata.menuLinks;return c.a.createElement(c.a.Fragment,null,c.a.createElement(M.a,{onClick:this.toggleMenu},c.a.createElement(b.a,{style:{color:"#efefef"}})),c.a.createElement(w.a,{onClickAway:this.toggleMenu},c.a.createElement(g.a,{open:this.state.menuActive,onClose:this.toggleMenu},e.map(function(e){return c.a.createElement(u.Link,{key:e.name,to:e.link},c.a.createElement(v.a,null,e.name))}))))},t}(c.a.Component),_=function(e){return c.a.createElement(u.StaticQuery,{query:"709782962",render:function(t){return c.a.createElement(C,{active:e.active,data:t})},data:h})},I=a(189),T=a.n(I),q=a(172),S=a.n(q),R=a(187),P=a.n(R),A=a(186),L=a.n(A),j=a(155),N=a.n(j),U=a(188),B=a.n(U),G=a(178),Q=a.n(G),F=function(e){return c.a.createElement(L.a,{id:"appBar"},c.a.createElement(P.a,null,c.a.createElement(S.a,{container:!0,justify:"space-between",alignItems:"center",spacing:16},c.a.createElement(S.a,{item:!0},c.a.createElement(B.a,{id:"logo",variant:"outlined",avatar:c.a.createElement(Q.a,{id:"logoIcon"},c.a.createElement(b.c,null)),label:c.a.createElement(u.Link,{to:"/"},e.data.site.siteMetadata.title.toUpperCase())})),c.a.createElement(S.a,{item:!0},c.a.createElement(T.a,{smDown:!0},c.a.createElement(N.a,{style:{color:"#efefef",flex:1},component:"span",variant:"caption"},c.a.createElement(f,null))))),c.a.createElement(S.a,{item:!0},c.a.createElement(T.a,{mdUp:!0},c.a.createElement(_,null)))))},O=function(e){return c.a.createElement(u.StaticQuery,{query:"4102418190",render:function(e){return c.a.createElement(F,{data:e})},data:l})},D=a(190),J=a.n(D),H=function(e){var t=e.data.site.siteMetadata,a=t.title,n=t.contact,r=n.email,i=n.phone;return c.a.createElement(c.a.Fragment,null,c.a.createElement(J.a,{style:{marginTop:"48px",marginBottom:"24px"}}),c.a.createElement("footer",{style:{marginBottom:"24px",whiteSpace:"nowrap"},id:"footer"},c.a.createElement("span",null,c.a.createElement(N.a,{variant:"caption",component:"span"},"©",(new Date).getFullYear()," ",a," – ",r," – ",i))))},V=function(e){return c.a.createElement(u.StaticQuery,{query:"4102418190",render:function(e){return c.a.createElement(H,{data:e})},data:l})},Y=a(191),z=a(161),K=a(197),W=a.n(K),X=a(192),Z=a.n(X),$=a(168);var ee=function(e){return function(t){function a(e){var a;return(a=t.call(this,e)||this).muiPageContext=Object($.a)(),a}r()(a,t);var n=a.prototype;return n.componentDidMount=function(){var e=document.querySelector("#jss-server-side");e&&e.parentNode&&e.parentNode.removeChild(e)},n.render=function(){return c.a.createElement(Z.a,{generateClassName:this.muiPageContext.generateClassName},c.a.createElement(z.MuiThemeProvider,{theme:this.muiPageContext.theme,sheetsManager:this.muiPageContext.sheetsManager},c.a.createElement(W.a,null),c.a.createElement(e,this.props)))},a}(c.a.Component)},te=(a(169),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.children;return c.a.createElement(c.a.Fragment,null,c.a.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500"}),c.a.createElement(o.a,null),c.a.createElement(O,null),c.a.createElement(Y.Grid,{style:{marginTop:"94px"}},c.a.createElement(Y.Row,null,c.a.createElement(Y.Col,{xs:12},t?c.a.createElement(N.a,{variant:"h2",gutterBottom:!0,style:{textAlign:"center"}},t):null,a,c.a.createElement(V,null)))))},t}(c.a.Component));t.a=ee(te)}}]);
//# sourceMappingURL=component---src-templates-team-js-6785768df48080216ee1.js.map