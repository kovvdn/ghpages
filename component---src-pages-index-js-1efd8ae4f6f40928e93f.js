(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{153:function(e,t,A){"use strict";A.r(t);A(57);var a=A(0),n=A.n(a),i=A(43),r=function(e){var t=e.post;return n.a.createElement("article",null,n.a.createElement("h3",null,t.frontmatter.title),n.a.createElement("span",null,t.frontmatter.date),n.a.createElement("p",null,t.excerpt),n.a.createElement(i.Link,{to:t.fields.slug},"Go!"))},c=A(159);A.d(t,"PostsQuery",function(){return o});t.default=function(e){var t=e.data;return n.a.createElement(c.a,null,n.a.createElement("h2",null,"Latest Posts:"),t.allMarkdownRemark.edges.map(function(e){var t=e.node;return n.a.createElement(r,{key:t.id,post:t})}))};var o="3356518714"},156:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby"}},file:{name:"architecture",childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAOABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAUGAwT/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAAB5WSPWLrSXE//xAAcEAADAAEFAAAAAAAAAAAAAAABAgMABBARExT/2gAIAQEAAQUClBDLTjq2HKFbvnprn//EABURAQEAAAAAAAAAAAAAAAAAABAR/9oACAEDAQE/Aaf/xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAgEBPwFJ/8QAHxAAAgECBwAAAAAAAAAAAAAAAQIAECIREiEyQVFh/9oACAEBAAY/AlbMSzdcQ3B18paZgNJvn//EABwQAQADAAIDAAAAAAAAAAAAAAEAESFBUWFxkf/aAAgBAQABPyFQqKCte0eq4x6Myb+PUDoDwR5H8J//2gAMAwEAAgADAAAAEMwv/8QAFhEBAQEAAAAAAAAAAAAAAAAAEQAB/9oACAEDAQE/EMGEX//EABYRAQEBAAAAAAAAAAAAAAAAAAEQMf/aAAgBAgEBPxBHJ//EAB4QAQACAgEFAAAAAAAAAAAAAAEAESFBMVFhcYGR/9oACAEBAAE/EHcDYCh1/fEbsyAadbnk1KhspKxZYmTPphoHpw20412IlyZf/9k=",aspectRatio:1.4448669201520912,src:"/gatsby/static/architecture-0835d5d936829d5ce939fa80c4e6ba35-1388c.jpg",srcSet:"/gatsby/static/architecture-0835d5d936829d5ce939fa80c4e6ba35-e17f8.jpg 360w,\n/gatsby/static/architecture-0835d5d936829d5ce939fa80c4e6ba35-f02d6.jpg 720w,\n/gatsby/static/architecture-0835d5d936829d5ce939fa80c4e6ba35-1388c.jpg 1440w,\n/gatsby/static/architecture-0835d5d936829d5ce939fa80c4e6ba35-7248a.jpg 2160w,\n/gatsby/static/architecture-0835d5d936829d5ce939fa80c4e6ba35-cee04.jpg 2880w,\n/gatsby/static/architecture-0835d5d936829d5ce939fa80c4e6ba35-8338f.jpg 4320w,\n/gatsby/static/architecture-0835d5d936829d5ce939fa80c4e6ba35-f6701.jpg 4560w",sizes:"(max-width: 1440px) 100vw, 1440px"}}}}}},157:function(e,t,A){},159:function(e,t,A){"use strict";var a=A(155),n=A.n(a),i=A(156),r=A(0),c=A.n(r),o=A(2),l=A.n(o),d=A(160),s=A.n(d),u=A(43),p=A(15),E=A(7),m=A.n(E),f=A(161),h=A.n(f),g=A(154),w=g.a.ul.withConfig({displayName:"menu__MenuWrapper",componentId:"ldryeq-0"})(["display:flex;justify-content:space-evenly;align-items:center;"]),b=g.a.li.withConfig({displayName:"menu__MenuItem",componentId:"ldryeq-1"})(["font-size:18px;font-weight:500;> a{display:block;padding:10px;font-family:sans-serif;text-decoration:none;color:#fff;text-shadow:1px 1px 10px #000;}"]),B=function(){return c.a.createElement("nav",null,c.a.createElement(w,null,c.a.createElement(b,null,c.a.createElement(u.Link,{to:"/"},"Home")),c.a.createElement(b,null,c.a.createElement(u.Link,{to:"/about"},"About"))))},x=g.a.div.withConfig({displayName:"container__Container",componentId:"v1kpwz-0"})(["margin:0 auto;max-width:960px;"]);function y(){var e=n()(["\n  padding: 1.45rem 1.0875rem;\n  position: relative;\n  z-index: 2;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return y=function(){return e},e}var j=Object(g.b)(["from{height:20vh}to{height:60vh}"]),v=Object(g.b)(["from{height:60vh}to{height:20vh}"]),Q=g.a.div.withConfig({displayName:"header__HeaderWrapper",componentId:"sc-31ozxh-0"})(["background:#323232;position:relative;overflow:hidden;height:",";animation:"," 0.3s ease;"],function(e){return e.isIndexPage?"60vh":"20vh"},function(e){return e.isIndexPage?j:v}),Y=x.extend(y()),C=function(e){function t(){return e.apply(this,arguments)||this}m()(t,e);var A=t.prototype;return A.componentDidUpdate=function(e,t){console.log("test")},A.render=function(){var e=this.props,t=e.siteTitle,A=e.billboard,a=e.location.pathname;return c.a.createElement(Q,{isIndexPage:"/"===a},c.a.createElement(Y,null,c.a.createElement("h1",{style:{margin:0}},c.a.createElement(u.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t)),c.a.createElement(B,null)),c.a.createElement(h.a,{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},fluid:A}))},t}(r.Component);A(157);function D(){var e=n()(["\n  padding: 0px 1.0875rem 1.45rem;\n  padding-top: 0;\n"]);return D=function(){return e},e}var N=x.extend(D()),k=function(e){var t=e.children;return c.a.createElement(u.StaticQuery,{query:"3730400611",render:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(s.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},c.a.createElement("html",{lang:"en"})),c.a.createElement(p.Location,null,function(t){var A=t.location;return c.a.createElement(C,{siteTitle:e.site.siteMetadata.title,billboard:e.file.childImageSharp.fluid,location:A})}),c.a.createElement(N,null,t))},data:i})};k.propTypes={children:l.a.node.isRequired};t.a=k}}]);
//# sourceMappingURL=component---src-pages-index-js-1efd8ae4f6f40928e93f.js.map