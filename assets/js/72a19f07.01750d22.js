"use strict";(self.webpackChunkfiber_website=self.webpackChunkfiber_website||[]).push([[3068],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(n),h=a,m=p["".concat(c,".").concat(h)]||p[h]||u[h]||o;return n?r.createElement(m,s(s({ref:t},d),{},{components:n})):r.createElement(m,s({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6402:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:2,title:"API Design"},s=void 0,i={unversionedId:"usage/api",id:"usage/api",title:"API Design",description:"The API currently consists of 6 methods:",source:"@site/docs/usage/api.md",sourceDirName:"usage",slug:"/usage/api",permalink:"/docs/usage/api",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/usage/api.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"API Design"},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/usage/getting-started"},next:{title:"Streams",permalink:"/docs/usage/streams"}},c={},l=[{value:"<code>subscribeNewTxs</code>",id:"subscribenewtxs",level:3},{value:"<code>subscribeNewBlocks</code>",id:"subscribenewblocks",level:3},{value:"<code>sendTransaction</code>",id:"sendtransaction",level:3},{value:"<code>sendRawTransaction</code>",id:"sendrawtransaction",level:3},{value:"<code>SendTransactionSequence</code>",id:"sendtransactionsequence",level:3},{value:"<code>sendRawTransactionSequence</code>",id:"sendrawtransactionsequence",level:3}],d={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The API currently consists of 6 methods:"),(0,a.kt)("h3",{id:"subscribenewtxs"},(0,a.kt)("inlineCode",{parentName:"h3"},"subscribeNewTxs")),(0,a.kt)("p",null,"This method opens a subscription in the form of a gRPC stream. The stream will send any new transaction that the node receives, either from the Fibernet\nor from full nodes it's connected to. The transactions on this stream have not been validated, and in some cases they can be invalid, so we recommend\nhaving a process for filtering out invalid transactions. The reason Fiber does this is to not introduce any latency in the message path, ensuring fastest possible\ndelivery."),(0,a.kt)("h3",{id:"subscribenewblocks"},(0,a.kt)("inlineCode",{parentName:"h3"},"subscribeNewBlocks")),(0,a.kt)("p",null,"This method opens a subscription in the form of a gRPC stream. The stream will send any new block that are broadcasted on the consensus layer."),(0,a.kt)("h3",{id:"sendtransaction"},(0,a.kt)("inlineCode",{parentName:"h3"},"sendTransaction")),(0,a.kt)("p",null,"Method for sending signed transactions (with the ",(0,a.kt)("inlineCode",{parentName:"p"},"v"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"r"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"s")," fields populated) to the Fiber Network. Fiber propagates these transactions to all other Fiber nodes, as well as all full nodes it's connected to."),(0,a.kt)("h3",{id:"sendrawtransaction"},(0,a.kt)("inlineCode",{parentName:"h3"},"sendRawTransaction")),(0,a.kt)("p",null,"Method for sending a signed RLP encoded transaction. This is useful when you\u2019re using libraries like ",(0,a.kt)("inlineCode",{parentName:"p"},"ethers")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"web3.js")," with JavaScript, or ",(0,a.kt)("inlineCode",{parentName:"p"},"ethers-rs")," with Rust."),(0,a.kt)("h3",{id:"sendtransactionsequence"},(0,a.kt)("inlineCode",{parentName:"h3"},"SendTransactionSequence")),(0,a.kt)("p",null,"Method for sending a sequence of transactions to be propagated across the network, to ensure that they arrive at the block producer in the correct order."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This is not enforced in any reliable way, ",(0,a.kt)("strong",{parentName:"p"},"only")," at the p2p network layer.")),(0,a.kt)("h3",{id:"sendrawtransactionsequence"},(0,a.kt)("inlineCode",{parentName:"h3"},"sendRawTransactionSequence")),(0,a.kt)("p",null,"Same as above, but for RLP encoded signed transactions."))}u.isMDXComponent=!0}}]);