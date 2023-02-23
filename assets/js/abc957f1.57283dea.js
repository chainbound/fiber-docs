"use strict";(self.webpackChunkfiber_website=self.webpackChunkfiber_website||[]).push([[2454],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(r),f=o,b=m["".concat(u,".").concat(f)]||m[f]||p[f]||i;return r?n.createElement(b,a(a({ref:t},s),{},{components:r})):n.createElement(b,a({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},980:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const i={slug:"fiber-vs-bloxroute",title:"Fiber vs. Bloxroute: The Standoff",authors:["jonas"],tags:["ethereum","mempool"]},a=void 0,l={permalink:"/blog/fiber-vs-bloxroute",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-02-23-fiber-vs-bloxroute/index.md",source:"@site/blog/2023-02-23-fiber-vs-bloxroute/index.md",title:"Fiber vs. Bloxroute: The Standoff",description:"Source//www.pinterest.com/pin/567242515550180347",date:"2023-02-23T00:00:00.000Z",formattedDate:"February 23, 2023",tags:[{label:"ethereum",permalink:"/blog/tags/ethereum"},{label:"mempool",permalink:"/blog/tags/mempool"}],readingTime:6.705,hasTruncateMarker:!0,authors:[{name:"Jonas Bostoen",title:"Chainbound CTO",url:"https://github.com/jonasbostoen",imageURL:"https://github.com/jonasbostoen.png",key:"jonas"}],frontMatter:{slug:"fiber-vs-bloxroute",title:"Fiber vs. Bloxroute: The Standoff",authors:["jonas"],tags:["ethereum","mempool"]},nextItem:{title:"Diving into the Reth p2p stack",permalink:"/blog/reth-p2p"}},u={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2}],s={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("figure",null,(0,o.kt)("img",{src:"https://i.pinimg.com/564x/ca/98/5e/ca985ebc3cfc605d9e0d314b807b8353.jpg"}),(0,o.kt)("figcaption",null,(0,o.kt)("sup",null,"Source: https://www.pinterest.com/pin/567242515550180347"))),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"For the last few months, we\u2019ve been working on a new implementation of Fiber on Ethereum. Fiber is a mempool service that consists of a network of highly optimized nodes. "),(0,o.kt)("p",null,"Fiber is built with 3 pillars in mind:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Reliability"),(0,o.kt)("li",{parentName:"ul"},"(consistent) Performance"),(0,o.kt)("li",{parentName:"ul"},"Resource-efficiency")))}p.isMDXComponent=!0}}]);