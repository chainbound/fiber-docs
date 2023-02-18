"use strict";(self.webpackChunkfiber_website=self.webpackChunkfiber_website||[]).push([[490],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=l(r),m=o,g=h["".concat(p,".").concat(m)]||h[m]||u[m]||a;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},1520:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={slug:"reth-p2p",title:"Diving into the Reth p2p stack",authors:["jonas"],tags:["ethereum","devp2p","reth","rust"]},i=void 0,s={permalink:"/blog/reth-p2p",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-02-17-reth-p2p/index.md",source:"@site/blog/2023-02-17-reth-p2p/index.md",title:"Diving into the Reth p2p stack",description:"Recently, the engineering team at Paradigm unveiled a new open-source execution client",date:"2023-02-17T00:00:00.000Z",formattedDate:"February 17, 2023",tags:[{label:"ethereum",permalink:"/blog/tags/ethereum"},{label:"devp2p",permalink:"/blog/tags/devp-2-p"},{label:"reth",permalink:"/blog/tags/reth"},{label:"rust",permalink:"/blog/tags/rust"}],readingTime:11.39,hasTruncateMarker:!0,authors:[{name:"Jonas Bostoen",title:"Chainbound CTO",url:"https://github.com/jonasbostoen",imageURL:"https://github.com/jonasbostoen.png",key:"jonas"}],frontMatter:{slug:"reth-p2p",title:"Diving into the Reth p2p stack",authors:["jonas"],tags:["ethereum","devp2p","reth","rust"]},nextItem:{title:"Identifying hotspots on the Ethereum p2p network",permalink:"/blog/ethereum-hotspots"}},p={authorsImageUrls:[void 0]},l=[],c={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Recently, the engineering team at Paradigm ",(0,o.kt)("a",{parentName:"p",href:"https://www.paradigm.xyz/2022/12/reth"},"unveiled")," a new open-source execution client\ncalled ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/paradigmxyz/reth"},"Reth")),". In short, reth aims to be an execution client to serve a large\nuser base, including ",(0,o.kt)("strong",{parentName:"p"},"power users")," like MEV searchers, RPC node operators, block builders, and more. It will do so by making reth highly\nperformant, but also very configurable, so that users can tweak and tune the settings to find the optimal setup\nfor their use case. No other execution client is doing this, so this is big positive for the space."))}u.isMDXComponent=!0}}]);