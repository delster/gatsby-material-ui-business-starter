(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{140:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return E});var n=a(0),r=a.n(n),i=a(146),l=a(160),c=a(157),u=a.n(c),o=a(169),s=a(171),d=a.n(s),m=a(193),f=a.n(m),p=a(194),y=a.n(p),v=a(200),g=a.n(v),E="2782092023";t.default=function(e){var t=e.data.allMarkdownRemark.edges;return r.a.createElement(o.a,{title:"Products"},r.a.createElement(l.a,{title:"Products"}),r.a.createElement(d.a,{spacing:24,container:!0,direction:"row",alignItems:"flex-start",justify:"center"},t.map(function(e){var t=e.node,a=t.excerpt,n=t.frontmatter,l=n.path,c=n.title,o=n.image;return r.a.createElement(d.a,{item:!0,xs:12,md:6,key:l},r.a.createElement(f.a,null,r.a.createElement(g.a,{style:{height:"200px"},image:Object(i.withPrefix)(o)}),r.a.createElement(y.a,null,r.a.createElement(u.a,{gutterBottom:!0,variant:"h5",component:"h2"},r.a.createElement(i.Link,{to:l},c)),r.a.createElement(u.a,{component:"p"},a))))})))}},146:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return f});var n=a(0),r=a.n(n),i=a(4),l=a.n(i),c=a(147),u=a.n(c);a.d(t,"Link",function(){return u.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var o=a(158),s=a.n(o);a.d(t,"PageRenderer",function(){return s.a});var d=a(32);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),f=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},158:function(e,t,a){var n;e.exports=(n=a(164))&&n.default||n},159:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Material UI Business Starter",contact:{email:"peter@foxandgeese.com",phone:"503-724-8522"}}}}}},160:function(e,t,a){"use strict";var n=a(165),r=a(0),i=a.n(r),l=a(178),c=a.n(l),u=a(146),o=function(e){return i.a.createElement(u.StaticQuery,{query:s,render:function(t){var a=e.title||t.site.siteMetadata.title;return i.a.createElement(c.a,{htmlAttributes:{lang:"en"},title:a,titleTemplate:"%s - "+t.site.siteMetadata.title},e.children)},data:n})};o.defaultProps={lang:"en",meta:[],keywords:[]},t.a=o;var s="1175772"},164:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),c=a(53),u=a(2),o=function(e){var t=e.location,a=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};o.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=o},165:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Material UI Business Starter"}}}}},166:function(e){e.exports={data:{site:{siteMetadata:{menuLinks:[{name:"Products",link:"/products"},{name:"Team",link:"/team"}]}}}}},167:function(e){e.exports={data:{site:{siteMetadata:{menuLinks:[{name:"Products",link:"/products"},{name:"Team",link:"/team"}]}}}}},168:function(e,t,a){},169:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(160),l=a(159),c=a(146),u=(a(162),a(163),a(166)),o=a(172),s=a.n(o),d=function(e){var t=e.data.site.siteMetadata.menuLinks;return r.a.createElement(r.a.Fragment,null,t.map(function(e){return r.a.createElement(c.Link,{key:e.name,to:e.link},r.a.createElement(s.a,{style:{color:"#fff"}},e.name))}))},m=function(e){return r.a.createElement(c.StaticQuery,{query:"240237662",render:function(e){return r.a.createElement(d,{data:e})},data:u})},f=a(7),p=a.n(f),y=a(167),v=a(184),g=a.n(v),E=a(185),h=a.n(E),b=a(183),k=a.n(b),M=a(175),w=a.n(M),x=a(161),P=function(e){function t(t){var a;return(a=e.call(this,t)||this).toggleMenu=function(e){a.setState(function(e){return{menuActive:!e.menuActive}})},a.state={menuActive:!1},a}return p()(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata.menuLinks;return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{onClick:this.toggleMenu},r.a.createElement(x.a,{style:{color:"#efefef"}})),r.a.createElement(k.a,{onClickAway:this.toggleMenu},r.a.createElement(g.a,{open:this.state.menuActive,onClose:this.toggleMenu},e.map(function(e){return r.a.createElement(c.Link,{key:e.name,to:e.link},r.a.createElement(h.a,null,e.name))}))))},t}(r.a.Component),j=function(e){return r.a.createElement(c.StaticQuery,{query:"709782962",render:function(t){return r.a.createElement(P,{active:e.active,data:t})},data:y})},q=a(189),S=a.n(q),C=a(171),O=a.n(C),T=a(187),_=a.n(T),L=a(186),N=a.n(L),R=a(157),B=a.n(R),Q=a(188),A=a.n(Q),G=a(176),I=a.n(G),U=function(e){return r.a.createElement(N.a,{id:"appBar"},r.a.createElement(_.a,null,r.a.createElement(O.a,{container:!0,justify:"space-between",alignItems:"center",spacing:16},r.a.createElement(O.a,{item:!0},r.a.createElement(A.a,{id:"logo",variant:"outlined",avatar:r.a.createElement(I.a,{id:"logoIcon"},r.a.createElement(x.c,null)),label:r.a.createElement(c.Link,{to:"/"},e.data.site.siteMetadata.title.toUpperCase())})),r.a.createElement(O.a,{item:!0},r.a.createElement(S.a,{smDown:!0},r.a.createElement(B.a,{style:{color:"#efefef",flex:1},component:"span",variant:"caption"},r.a.createElement(m,null))))),r.a.createElement(O.a,{item:!0},r.a.createElement(S.a,{mdUp:!0},r.a.createElement(j,null)))))},F=function(e){return r.a.createElement(c.StaticQuery,{query:"4102418190",render:function(e){return r.a.createElement(U,{data:e})},data:l})},D=a(190),J=a.n(D),z=function(e){var t=e.data.site.siteMetadata,a=t.title,n=t.contact,i=n.email,l=n.phone;return r.a.createElement(r.a.Fragment,null,r.a.createElement(J.a,{style:{marginTop:"48px",marginBottom:"24px"}}),r.a.createElement("footer",{style:{marginBottom:"24px",whiteSpace:"nowrap"},id:"footer"},r.a.createElement("span",null,r.a.createElement(B.a,{variant:"caption",component:"span"},"©",(new Date).getFullYear()," ",a," – ",i," – ",l))))},V=function(e){return r.a.createElement(c.StaticQuery,{query:"4102418190",render:function(e){return r.a.createElement(z,{data:e})},data:l})},Y=a(192),H=a.n(Y),K=a(191),W=a(177),X=(a(168),Object(W.createMuiTheme)({palette:{primary:{light:"#757ce8",main:"#3f50b5",dark:"#002884",contrastText:"#fff"},secondary:{light:"#ff7961",main:"#f44336",dark:"#ba000d",contrastText:"#000"}},typography:{useNextVariants:!0}}));t.a=function(e){return r.a.createElement(W.MuiThemeProvider,{theme:X},r.a.createElement(H.a,null),r.a.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500"}),r.a.createElement(i.a,null),r.a.createElement(F,null),r.a.createElement(K.Grid,{style:{marginTop:"94px"}},r.a.createElement(K.Row,null,r.a.createElement(K.Col,{xs:12},e.title?r.a.createElement(B.a,{variant:"h2",gutterBottom:!0,style:{textAlign:"center"}},e.title):null,e.children,r.a.createElement(V,null)))))}},193:function(e,t,a){"use strict";var n=a(8);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=n(a(199))},194:function(e,t,a){"use strict";var n=a(8);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=n(a(202))},199:function(e,t,a){"use strict";var n=a(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=n(a(144)),i=n(a(145)),l=n(a(0)),c=(n(a(4)),n(a(149))),u=n(a(174)),o=n(a(148)),s={root:{overflow:"hidden"}};function d(e){var t=e.classes,a=e.className,n=e.raised,o=(0,i.default)(e,["classes","className","raised"]);return l.default.createElement(u.default,(0,r.default)({className:(0,c.default)(t.root,a),elevation:n?8:1},o))}t.styles=s,d.defaultProps={raised:!1};var m=(0,o.default)(s,{name:"MuiCard"})(d);t.default=m},200:function(e,t,a){"use strict";var n=a(8);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=n(a(201))},201:function(e,t,a){"use strict";var n=a(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=n(a(51)),i=n(a(144)),l=n(a(145)),c=n(a(0)),u=(n(a(4)),n(a(149))),o=(n(a(153)),a(150),n(a(148))),s={root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"}};t.styles=s;var d=["video","audio","picture","iframe","img"];function m(e){var t=e.classes,a=e.className,n=e.component,o=e.image,s=e.src,m=e.style,f=(0,l.default)(e,["classes","className","component","image","src","style"]),p=-1!==d.indexOf(n),y=!p&&o?(0,i.default)({backgroundImage:'url("'.concat(o,'")')},m):m;return c.default.createElement(n,(0,i.default)({className:(0,u.default)(t.root,(0,r.default)({},t.media,p),a),style:y,src:p?o||s:void 0},f))}m.defaultProps={component:"div"};var f=(0,o.default)(s,{name:"MuiCardMedia"})(m);t.default=f},202:function(e,t,a){"use strict";var n=a(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=n(a(144)),i=n(a(145)),l=n(a(0)),c=(n(a(4)),n(a(149))),u=(a(150),n(a(148))),o={root:{padding:16,"&:last-child":{paddingBottom:24}}};function s(e){var t=e.classes,a=e.className,n=e.component,u=(0,i.default)(e,["classes","className","component"]);return l.default.createElement(n,(0,r.default)({className:(0,c.default)(t.root,a)},u))}t.styles=o,s.defaultProps={component:"div"};var d=(0,u.default)(o,{name:"MuiCardContent"})(s);t.default=d}}]);
//# sourceMappingURL=component---src-pages-products-index-js-9d12003b07d5f5cc4e7b.js.map