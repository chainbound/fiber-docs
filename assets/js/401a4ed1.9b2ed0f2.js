"use strict";(self.webpackChunkfiber_website=self.webpackChunkfiber_website||[]).push([[4234],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(a),u=i,g=m["".concat(l,".").concat(u)]||m[u]||d[u]||r;return a?n.createElement(g,o(o({ref:t},c),{},{components:a})):n.createElement(g,o({ref:t},c))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3135:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(7462),i=(a(7294),a(3905));const r={sidebar_position:2,title:"Use Cases"},o=void 0,s={unversionedId:"use-cases",id:"use-cases",title:"Use Cases",description:"Fiber is accessible via API, facilitating seamless streaming and propagation of data across the Ethereum network",source:"@site/docs/use-cases.md",sourceDirName:".",slug:"/use-cases",permalink:"/docs/use-cases",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/use-cases.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Use Cases"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/intro"},next:{title:"Getting Started",permalink:"/docs/usage/getting-started"}},l={},p=[{value:"1. Searchers &amp; Builders",id:"1-searchers--builders",level:2},{value:"1.1 MEV Capturing",id:"11-mev-capturing",level:3},{value:"1.2 Transaction Inclusion Receipts",id:"12-transaction-inclusion-receipts",level:3},{value:"1.3 Transaction Propagation",id:"13-transaction-propagation",level:3},{value:"2. Systematic Risk Mitigation",id:"2-systematic-risk-mitigation",level:2},{value:"2.1 Hacks Detection &amp; Prevention",id:"21-hacks-detection--prevention",level:3},{value:"3. Validators",id:"3-validators",level:2},{value:"3.1 FiberGuard",id:"31-fiberguard",level:3},{value:"4. High-Frequency Trading",id:"4-high-frequency-trading",level:2},{value:"4.1 Signal generation",id:"41-signal-generation",level:3},{value:"5. Research",id:"5-research",level:2},{value:"5.1 P2P Network Exploration",id:"51-p2p-network-exploration",level:3}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Fiber is accessible via API, facilitating seamless streaming and propagation of data across the Ethereum network")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Consequently, the need for deploying and maintaining individual full nodes is rendered unnecessary.\nBy abstracting away the complexities of node infrastructure, Fiber simplifies the process of accessing")," ",(0,i.kt)("strong",{parentName:"p"},"real-time data\nacross Consensus and Execution layers.")),(0,i.kt)("p",null,"The distributed nature of the network allows for transactions to be processed and propagated ",(0,i.kt)("strong",{parentName:"p"},"more efficiently than other services")," (eg. RPC providers or mempool services) and single nodes."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If interested in testing Fiber's performances, clone ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/chainbound/fiber-benchmarks"},"fiber-benchmarks")," repo and benchmark it yourself!"),(0,i.kt)("p",{parentName:"admonition"},"In this ",(0,i.kt)("a",{parentName:"p",href:"https://fiber.chainbound.io/blog/fiber-vs-bloxroute"},"article")," we outline the results gathered in Q1 '23.")),(0,i.kt)("h2",{id:"1-searchers--builders"},"1. Searchers & Builders"),(0,i.kt)("h3",{id:"11-mev-capturing"},"1.1 MEV Capturing"),(0,i.kt)("p",null,"Low latency access to mempool data gives ",(0,i.kt)("strong",{parentName:"p"},"searchers")," and ",(0,i.kt)("strong",{parentName:"p"},"builders")," a latency and reliability advantage\nover the competition."),(0,i.kt)("p",null,"On the Execution Layer (EL), Fiber provides the ",(0,i.kt)("inlineCode",{parentName:"p"},"NewTransactions")," stream, which returns new transactions that are propagated across the Ethereum mempool."),(0,i.kt)("p",null,"The stream can be leveraged to deploy MEV strategies, as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"DEX Arbitrage"),(0,i.kt)("li",{parentName:"ul"},"Liquidity Sniping"),(0,i.kt)("li",{parentName:"ul"},"NFT Sniping"),(0,i.kt)("li",{parentName:"ul"},"Liquidations"),(0,i.kt)("li",{parentName:"ul"},"PGAs (Priority Gas Auctions)"),(0,i.kt)("li",{parentName:"ul"},"Long-tail MEV")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"As of July '23 we observe ",(0,i.kt)("strong",{parentName:"p"},"~85% of transaction being submitted via the mempool"),", the remaining 15% is submitted as Private\nOrder Flow (POF). Given ",(0,i.kt)("inlineCode",{parentName:"p"},"NewTransactions")," has proven to be the fastest and most reliable stream of mempool data over multiple time periods,\n",(0,i.kt)("strong",{parentName:"p"},"Builders")," and ",(0,i.kt)("strong",{parentName:"p"},"Searchers")," can integrate the stream to maximize their MEV capturing potential.")),(0,i.kt)("h3",{id:"12-transaction-inclusion-receipts"},"1.2 Transaction Inclusion Receipts"),(0,i.kt)("p",null,"Fiber can also be leveraged by ",(0,i.kt)("strong",{parentName:"p"},"Builders")," and ",(0,i.kt)("strong",{parentName:"p"},"Searchers")," that are looking to confirm the inclusion of their transactions in the most recent block as fast as possible.\nOn the Consensus Layer, Fiber provides the ",(0,i.kt)("inlineCode",{parentName:"p"},"NewExecutionPayloads")," stream, which abstracts the payload from ",(0,i.kt)("inlineCode",{parentName:"p"},"BeaconBlockBody")," and returns it as a separate stream."),(0,i.kt)("p",null,"Subscription to this stream allows Builders and Searchers to ",(0,i.kt)("strong",{parentName:"p"},"reduce transaction confirmation time")," by 40ms-200ms, compared to other services, such as Bloxroute."),(0,i.kt)("p",null,"To note, some applications include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Stat-Arb:")," Decrease the time to confirm on-chain transactions inclusion allows for more accurate hedging on CEXs"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Inquire at ",(0,i.kt)("a",{parentName:"em",href:"mailto:admin@chainbound.io"},"admin@chainbound.io")," for more information on MEV use-cases"))),(0,i.kt)("h3",{id:"13-transaction-propagation"},"1.3 Transaction Propagation"),(0,i.kt)("p",null,"Via the ",(0,i.kt)("inlineCode",{parentName:"p"},"sendTransaction")," API endpoint, searchers are able to ",(0,i.kt)("strong",{parentName:"p"},"submit transactions")," to the Ethereum network via Fiber.\nThis has many use-cases, including:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Redundancy in transaction submission")," - Fiber can be used as a backup to their main transaction submission service, which can be private or public."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Censorship resistance")," - Fiber can be used to submit transactions to the Ethereum network in a way that is resistant to censorship. ")),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Fiber is not integrated with any Private Order Flow (POF) provider, therefore users should be mindful of the usual dangers of submitting to the public mempool (front-running, sandwiching attacks).")),(0,i.kt)("h2",{id:"2-systematic-risk-mitigation"},"2. Systematic Risk Mitigation"),(0,i.kt)("h3",{id:"21-hacks-detection--prevention"},"2.1 Hacks Detection & Prevention"),(0,i.kt)("p",null,"Hackers are constantly looking for new ways to exploit vulnerabilities in smart contracts."),(0,i.kt)("p",null,"With Fiber's stream, protocols and applications can track events in real-time to detect and prevent hacks, examples include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Automated ",(0,i.kt)("strong",{parentName:"li"},"defensive measures")," to protect users and funds (eg. hack-prevention via front-running malicious users)"),(0,i.kt)("li",{parentName:"ul"},"Automated ",(0,i.kt)("strong",{parentName:"li"},"detection of hacks")," and exploits with real-time alerts"),(0,i.kt)("li",{parentName:"ul"},"Real-time ",(0,i.kt)("strong",{parentName:"li"},"anomaly detection")," in smart contracts deployments and transactions")),(0,i.kt)("h2",{id:"3-validators"},"3. Validators"),(0,i.kt)("h3",{id:"31-fiberguard"},"3.1 FiberGuard"),(0,i.kt)("p",null,"Validators can optimize their performance and minimize their p2p latency with the implementation of FiberGuard,\nan advanced technology designed to enhance their operations."),(0,i.kt)("p",null,"FiberGuard provides validators with a reliable and low-latency ",(0,i.kt)("inlineCode",{parentName:"p"},"NewBeaconBlocks")," stream, which is crucial for\npromptly receiving new blocks. This capability enables validators to ",(0,i.kt)("strong",{parentName:"p"},"efficiently generate attestations")," and\n",(0,i.kt)("strong",{parentName:"p"},"produce new blocks"),", improving their overall performance."),(0,i.kt)("p",null,"By adopting FiberGuard, validators can achieve the following benefits:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Reduced Streaming Latency:")," With FiberGuard, validators can experience significantly reduced streaming\nlatency of ",(0,i.kt)("inlineCode",{parentName:"p"},"BeaconBlock"),". This improvement can lead to up to ",(0,i.kt)("strong",{parentName:"p"},"1-second reduction in latency")," when compared to a\nsingle node setup and a remarkable ",(0,i.kt)("strong",{parentName:"p"},"50-200 milliseconds")," reduction compared to other existing services.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Enhanced Reliability and Uptime:")," Leveraging the distributed nature of the Fiber network,\nvalidators can ",(0,i.kt)("strong",{parentName:"p"},"increase the reliability and uptime of their operations"),". This means that validators are\nless prone to downtime or interruptions, resulting in a more dependable validation process.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Lower Operating Costs:")," One of the key advantages of utilizing FiberGuard is the cost reduction\nit offers to running a validator. By mitigating the ",(0,i.kt)("strong",{parentName:"p"},"risks of reorgs, missed attestations, or inactivity penalties"),",\nvalidators can avoid potential financial losses and optimize their profitability."))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"Attestations account for ~85% of the total validator yield")," over time. After the Altair upgrade, attestations are highly sensitive to latency:\nif the ",(0,i.kt)("inlineCode",{parentName:"p"},"slot_delay")," of an attestation is larger than 1, the validator will ",(0,i.kt)("strong",{parentName:"p"},"miss out on more than 20%")," of the potential reward\n(read more about attestations rewards ",(0,i.kt)("a",{parentName:"p",href:"https://eth2book.info/capella/part2/incentives/rewards/"},"here"),")."),(0,i.kt)("p",{parentName:"admonition"},"The following chart shows the ",(0,i.kt)("strong",{parentName:"p"},"validator's reward")," over time, outlining the importance of ",(0,i.kt)("inlineCode",{parentName:"p"},"slot_delay")," minimization."),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("img",{src:a(9853).Z,width:"1654",height:"798"}))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"FiberGuard allows validators to connect to the stream via ",(0,i.kt)("strong",{parentName:"p"},"direct/trusted peering connections"),", allowing easy integration with an existing beacon node\nwithout requiring any additional software.")),(0,i.kt)("h2",{id:"4-high-frequency-trading"},"4. High-Frequency Trading"),(0,i.kt)("h3",{id:"41-signal-generation"},"4.1 Signal generation"),(0,i.kt)("p",null,"High Frequency Trading (HFT) across TradFi, CeFi and DeFi requires access to real-time data to generate signals and execute trades.\nFiber provides a reliable and ",(0,i.kt)("strong",{parentName:"p"},"low-latency stream of the most up-to-date state")," (block) on Ethereum, giving trading shops a competitive edge over their competitors."),(0,i.kt)("p",null,"Two Fiber streams can be leveraged by HFTs:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"By subscribing to ",(0,i.kt)("inlineCode",{parentName:"li"},"NewExecutionPayload"),", HFTs can process transactions, included in the most recent block, before the competition."),(0,i.kt)("li",{parentName:"ul"},"HFTs can also subscribe to the ",(0,i.kt)("inlineCode",{parentName:"li"},"NewTransactions")," stream to process pending transactions and generate signals based on transaction inputs.")),(0,i.kt)("p",null,"Some benefits of using Fiber for HFT execution across TradFi, CeFi and DeFi include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Better ",(0,i.kt)("strong",{parentName:"li"},"informed Decision-Making")," trading logic"),(0,i.kt)("li",{parentName:"ul"},"More granular understanding of ",(0,i.kt)("strong",{parentName:"li"},"Trends and Patterns")),(0,i.kt)("li",{parentName:"ul"},"Ability to ",(0,i.kt)("strong",{parentName:"li"},"backtest and validate")," trading strategies via ",(0,i.kt)("a",{parentName:"li",href:"/docs/fiberdb"},"FiberDB"))),(0,i.kt)("h2",{id:"5-research"},"5. Research"),(0,i.kt)("h3",{id:"51-p2p-network-exploration"},"5.1 P2P Network Exploration"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Ethereum has the most decentralized P2P network of any of the blockchains currently running.\nThe geo-distributed nature of Ethereum nodes lays the ground for many interesting\nanalyses and explorations of the ",(0,i.kt)("strong",{parentName:"p"},"propagation of messages")," across the Ethereum network."),(0,i.kt)("p",{parentName:"admonition"},"The analysis of Ethereum P2P network would be impossible to perform with a single node, or even a small cluster of nodes, but thanks to Fiber\nusers can access a ",(0,i.kt)("strong",{parentName:"p"},"large network of nodes and perform analysis at scale"),".")),(0,i.kt)("p",null,"Fiber and FiberDB can be used to perform analyses such as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Latency and delay analysis")," by comparing and contrasting data across multiple situations and time periods."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Network topology analysis")," by identify the distribution of network participants. Understanding the network's structure is crucial for optimizing routing of messages."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Network traffic analysis")," this includes evaluation of transaction and block propagation, as well as network hotspots.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"In addition to Fiber, we also provide ",(0,i.kt)("strong",{parentName:"p"},"FiberDB"),": a component that collects all message observations (transactions, blocks) from deployed Fiber nodes\nlogging timestamp and geolocation of each. (more info on FiberDB ",(0,i.kt)("a",{parentName:"p",href:"/docs/fiberdb"},"here"))))}d.isMDXComponent=!0},9853:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/validators_reward-79e7dbfaeb9b4b8dc25648371f3a4ef3.png"}}]);