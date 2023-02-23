"use strict";(self.webpackChunkfiber_website=self.webpackChunkfiber_website||[]).push([[7877],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=r,u=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return n?a.createElement(u,i(i({ref:t},h),{},{components:n})):a.createElement(u,i({ref:t},h))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},551:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={slug:"fiber-vs-bloxroute",title:"Fiber vs. Bloxroute: The Standoff",authors:["jonas"],tags:["ethereum","mempool"]},i=void 0,s={permalink:"/blog/fiber-vs-bloxroute",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-02-23-fiber-vs-bloxroute/index.md",source:"@site/blog/2023-02-23-fiber-vs-bloxroute/index.md",title:"Fiber vs. Bloxroute: The Standoff",description:"Source//www.pinterest.com/pin/567242515550180347",date:"2023-02-23T00:00:00.000Z",formattedDate:"February 23, 2023",tags:[{label:"ethereum",permalink:"/blog/tags/ethereum"},{label:"mempool",permalink:"/blog/tags/mempool"}],readingTime:6.705,hasTruncateMarker:!0,authors:[{name:"Jonas Bostoen",title:"Chainbound CTO",url:"https://github.com/jonasbostoen",imageURL:"https://github.com/jonasbostoen.png",key:"jonas"}],frontMatter:{slug:"fiber-vs-bloxroute",title:"Fiber vs. Bloxroute: The Standoff",authors:["jonas"],tags:["ethereum","mempool"]},nextItem:{title:"Diving into the Reth p2p stack",permalink:"/blog/reth-p2p"}},l={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"Setup",id:"setup",level:2},{value:"Results",id:"results",level:2},{value:"Transaction delivery",id:"transaction-delivery",level:3},{value:"Overall performance",id:"overall-performance",level:3},{value:"Conclusion",id:"conclusion",level:2},{value:"Footnotes",id:"footnotes",level:2}],h={toc:c};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"https://i.pinimg.com/564x/ca/98/5e/ca985ebc3cfc605d9e0d314b807b8353.jpg"}),(0,r.kt)("figcaption",null,(0,r.kt)("sup",null,"Source: https://www.pinterest.com/pin/567242515550180347"))),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"For the last few months, we\u2019ve been working on a new implementation of Fiber on Ethereum. Fiber is a mempool service that consists of a network of highly optimized nodes. "),(0,r.kt)("p",null,"Fiber is built with 3 pillars in mind:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Reliability"),(0,r.kt)("li",{parentName:"ul"},"(consistent) Performance"),(0,r.kt)("li",{parentName:"ul"},"Resource-efficiency")),(0,r.kt)("p",null,"These pillars, and the fact that there\u2019s now a new, modular execution client being built by Paradigm (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paradigmxyz/reth"},"https://github.com/paradigmxyz/reth"),") in Rust, made Rust the ideal candidate for the job. And so we set to work. A couple of months later now, and we\u2019ve deployed the new version. "),(0,r.kt)("p",null,"Bloxroute has been the de-facto mempool service for traders and searchers on Ethereum. Back in December 2020, KeeperDAO (now Rook) ran a ",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/keeperdao/a-performance-benchmark-on-mempool-services-9e68bf070952"},"performance benchmark")," on Bloxroute, Blocknative and a standard Alchemy node. They found that Bloxroute blew the other 2 out of the water: it delivered transactions first 97% of the time. Since then, there hasn\u2019t really been any new competition, - we aim to change that."),(0,r.kt)("p",null,"Our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chainbound/fiber-benchmarks"},"benchmarking tool")," consistently shows Fiber seeing a transaction first about 80% of the time, with a median latency difference of 10-12 milliseconds. "),(0,r.kt)("p",null,"This is the output of the last benchmarking run (1 hour)",(0,r.kt)("sup",{parentName:"p",id:"fnref-1-8e99a3"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1-8e99a3",className:"footnote-ref"},"1")),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"========== STATS =============\nMean difference: 34.81ms\nMedian difference: 11.00ms\nP10 difference: -2.00ms\nP25 difference: 3.00ms\nP75 difference: 29.00ms\nP90 difference: 53.00ms\nMax difference: 9311.00ms\nMin difference: -81.00ms\nStdev: 273.80ms\n\n========== RESULT =============\nFiber won 81.87% of the time\n")),(0,r.kt)("p",null,"This is great news for Fiber, but seeing a pending transaction first is only one side of the coin.\nIn real-world scenarios, HFT players and bots need to capitalize on these opportunities by broadcasting\na responding transaction as quickly as possible",(0,r.kt)("sup",{parentName:"p",id:"fnref-2-8e99a3"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2-8e99a3",className:"footnote-ref"},"2")),".\nWe therefore decided to measure both listening and broadcasting, to see which service is faster on both fronts."),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Price plans used:")),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Bloxroute"),": Enterprise Plan ($1250/mo)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Fiber"),": Basic Plan ($500/mo)"))),(0,r.kt)("p",null,"To test the services, we\u2019ll set up a classical MEV scenario: the backrun. "),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Backrunning is the act of sending a transaction with the same gas price as some target\ntransaction, as fast as possible, which will result in your transaction being ordered right\nafter the target transaction by the entity putting together the block",(0,r.kt)("sup",{parentName:"em",id:"fnref-3-8e99a3"},(0,r.kt)("a",{parentName:"sup",href:"#fn-3-8e99a3",className:"footnote-ref"},"3")),". Transactions with\nthe same gas price are ordered by arrival time, so latency is extremely important here",(0,r.kt)("sup",{parentName:"em",id:"fnref-4-8e99a3"},(0,r.kt)("a",{parentName:"sup",href:"#fn-4-8e99a3",className:"footnote-ref"},"4")),".\nLiquidity / NFT sniping, arbitrage and liquidations are all types of backrunning.")),(0,r.kt)("p",null,"Backrunning will allow us to test 2 interrelated components that a mempool service must\nhave separately: ",(0,r.kt)("strong",{parentName:"p"},"fast transaction delivery")," (listening side) and ",(0,r.kt)("strong",{parentName:"p"},"fast transaction\ndistribution")," (sending side / broadcasting). The combination of these 2 is what determines\noverall performance. We will establish the backrunning bot on a server in the us-east-1 Virginia\nregion, with roughly 1 millisecond latency to both the Fiber and Bloxroute API\n(we\u2019re using the Cloud Websockets API).\nWe don\u2019t want last hop latency messing with the results."),(0,r.kt)("p",null,"Our target transactions (the one we want to backrun), will be broadcast from a couple of different sources: Infura, Alchemy, and a residential node in Belgium. The reason for this is that Infura and Alchemy together originate most of Ethereum transactions, and for the residential node, we\u2019ll see how the services compare for a transaction that comes from somewhere closer to the network edge as opposed to AWS or Google Cloud. It will also show us the internal network latency of both network services: if a transaction originates in Belgium and our bot is in Virginia, a large part of the total latency will be taken up by internal propagation. Since both solutions use AWS, we don\u2019t expect a large difference here, but it could still have an impact. Besides that, we\u2019re also going to be backrunning 30 random transactions, that could come from anywhere."),(0,r.kt)("p",null,"We\u2019re testing 10 backruns on each RPC node (besides the 30 random ones), to see if we can spot a pattern. The backrun transaction will be sent with the same nonce to both Bloxroute and Fiber, so to differentiate, we\u2019ll input the service name as UTF-8 in the transaction\u2019s calldata. For same nonce transactions, only the first one will be included, while the other will be dropped."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fiber: ",(0,r.kt)("inlineCode",{parentName:"li"},"0x6669626572"),(0,r.kt)("img",{src:n(768).Z,width:"2000",height:"246"})),(0,r.kt)("li",{parentName:"ul"},"Bloxroute: ",(0,r.kt)("inlineCode",{parentName:"li"},"0x626c6f78726f757465"),(0,r.kt)("img",{src:n(9987).Z,width:"1904",height:"234"}))),(0,r.kt)("h2",{id:"results"},"Results"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Download the CSV dataset ",(0,r.kt)("a",{target:"_blank",href:n(5440).Z},"here"),".")),(0,r.kt)("h3",{id:"transaction-delivery"},"Transaction delivery"),(0,r.kt)("p",null,"For delivery time, Fiber was first 52 out of 60 times,\nwhich is ",(0,r.kt)("strong",{parentName:"p"},"87%")," and roughly corresponds to our benchmark run above.\n",(0,r.kt)("img",{src:n(150).Z,width:"1928",height:"1158"}),"\nLet\u2019s take a closer look at transaction delivery time per service.\nThe vertical axis is the transaction delivery latency in ",(0,r.kt)("strong",{parentName:"p"},"milliseconds"),".\nThe service that first discovered the transaction has a latency of 0, and\nthe other value is the difference between the two.\n",(0,r.kt)("img",{src:n(9969).Z,width:"2935",height:"1158"}),"\nThe largest latency difference is ",(0,r.kt)("strong",{parentName:"p"},"166ms")," in favor of Fiber,\nlet\u2019s filter it out for now so we can have a better look at the rest of the values:\n",(0,r.kt)("img",{src:n(3342).Z,width:"2935",height:"1158"}),"\nThe above graph shows us that often, it\u2019s a close call, but overall, ",(0,r.kt)("strong",{parentName:"p"},"Fiber is much closer to the baseline of 0 in all of the cases"),".\nThe largest difference by which Fiber lost is ",(0,r.kt)("strong",{parentName:"p"},"5 milliseconds"),", compared to 166ms for Bloxroute.\nThis shows us that Fiber is faster, and has more consistent performance,\nwhich satisfies our second requirement."),(0,r.kt)("p",null,"We don\u2019t find any significant correlation between the differences in delivery time and the RPC node used to\nbroadcast the target transaction, which means that both services are pretty well connected globally, and are able to internally propagate transactions quickly."),(0,r.kt)("h3",{id:"overall-performance"},"Overall performance"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fiber wins in 54 out of 60 backruns (90% of the time)"),"\n",(0,r.kt)("img",{src:n(8105).Z,width:"1928",height:"1158"}),"\nFiber wins 90% of the backrunning challenges that we set up."),(0,r.kt)("p",null,"Interestingly, in 2 cases where Bloxroute delivered a transaction first (by 1 and 4 milliseconds), Fiber still won the backrun. This means that in those 2 cases, Fiber\u2019s distribution network was faster."),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"https://wallpapercave.com/wp/wp9032145.jpg"}),(0,r.kt)("figcaption",null,(0,r.kt)("sup",null,"Source: https://wallpapercave.com/w/wp9032145"))),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A good mempool service tries to tame the chaos and randomness inherent to a global mempool"),". This gets harder and harder the more decentralized a network layer is, which is why it\u2019s important to try to cover as much ground as possible. Not just in terms of geographic distribution, but also in connecting to a broad set of peers. With Fiber, we\u2019ve built the technology in a way that allows us to do this for a reasonable cost, which is why we came out ahead. "),(0,r.kt)("p",null,"Ever since the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.flashbots.net/flashbots-auction/overview"},"Flashbots auction")," launched, we realize latency on Ethereum mainnet has lost some of its importance. But we decided to build on Ethereum first to prove that we can be faster, and to then expand to other chains (and rollups) to do the same. Check out our ",(0,r.kt)("a",{parentName:"p",href:"https://fiber.chainbound.io/docs/roadmap"},"roadmap")," for more information."),(0,r.kt)("p",null,"If you\u2019re interested in trying Fiber out, we have a 5 day refund period. Join our ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/J4KNdeCYGX"},"Discord")," and shoot us a message and we\u2019ll DM you. For now, we offer 2 plans: Basic ($500/mo) and Professional ($1000/mo). The only differentiator between the plans is that with Basic, you can actively listen to only one stream at a time, while you can listen to up to 3 with Professional (from multiple locations). We don\u2019t introduce any artificial latency to the Basic plan. Accessing Fiber can easily be done by using the client libraries we built in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chainbound/fiber-go"},"Go"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chainbound/fiber-rs"},"Rust")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chainbound/fiber-ts"},"TypeScript"),". Read more in the documentation ",(0,r.kt)("a",{parentName:"p",href:"https://fiber.chainbound.io/docs/intro"},"here"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Thanks for reading!")),(0,r.kt)("h2",{id:"footnotes"},"Footnotes"),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1-8e99a3"},"P10/P25/P75/P90 are the percentiles in which each of the latency difference observations fall. Negative means that Bloxroute was faster. For example, P10 is -2ms, which means that for the lowest 10% of observations, Bloxroute was faster by >2ms.\nOn the other hand, a P90 value of 53 means that 10% of the transaction where delivered by Fiber first with a difference of more than 54 milliseconds.",(0,r.kt)("a",{parentName:"li",href:"#fnref-1-8e99a3",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-2-8e99a3"},"Unless they decide to use a private mempool like Flashbots.",(0,r.kt)("a",{parentName:"li",href:"#fnref-2-8e99a3",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-3-8e99a3"},"Assuming neither the backrun transaction or the target transaction is reordered due to being included in a bundle.",(0,r.kt)("a",{parentName:"li",href:"#fnref-3-8e99a3",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-4-8e99a3"},"Go-ethereum code: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ethereum/go-ethereum/blob/645e3e86c45bfb726b507e661f788baa85d0249f/core/types/transaction.go#L531"},"go-ethereum/core/types/transaction.go#L53"),". Note that for type 2 transactions, the order is determined by the priority fee.",(0,r.kt)("a",{parentName:"li",href:"#fnref-4-8e99a3",className:"footnote-backref"},"\u21a9")))))}p.isMDXComponent=!0},5440:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/data-9fbfe53a40df874cf3ea4bf2ff331c07.csv"},9969:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/all-differences-92c75ede7bcab2896f67686a5d864af7.png"},9987:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/bloxroute-input-43ace4bc1c930f0bb391c26274bb0f44.png"},768:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/fiber-input-6e46d6a5e0ff36e6bdd9735effec4ce3.png"},3342:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/filtered-differences-71cdf272dbd51375780e93d9dda56893.png"},150:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/seen-first-rate-f0f3b00b216f5bbd24061def1b96f9a9.png"},8105:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/total-win-rate-4bd2b4bba9d2d97bb4e199dd67be1f3a.png"}}]);