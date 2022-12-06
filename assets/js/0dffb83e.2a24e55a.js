"use strict";(self.webpackChunkfiber_website=self.webpackChunkfiber_website||[]).push([[75],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),c=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(a),k=n,u=d["".concat(s,".").concat(k)]||d[k]||m[k]||r;return a?i.createElement(u,l(l({ref:t},p),{},{components:a})):i.createElement(u,l({ref:t},p))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var c=2;c<r;c++)l[c]=a[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3208:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=a(7462),n=(a(7294),a(3905));const r={sidebar_position:5,title:"Roadmap"},l=void 0,o={unversionedId:"roadmap",id:"roadmap",title:"Roadmap",description:"Phase 1: Fiber goes Live!",source:"@site/docs/roadmap.md",sourceDirName:".",slug:"/roadmap",permalink:"/docs/roadmap",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/roadmap.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Roadmap"},sidebar:"tutorialSidebar",previous:{title:"Regions",permalink:"/docs/regions"},next:{title:"FAQ",permalink:"/docs/faq"}},s={},c=[{value:"Phase 1: <strong>Fiber</strong> goes Live!",id:"phase-1-fiber-goes-live",level:2},{value:"<em>September -&gt; November &#39;22</em>",id:"september---november-22",level:4},{value:"Phase 2: <strong>Fiber</strong> opminizaatooor",id:"phase-2-fiber-opminizaatooor",level:2},{value:"<em>December &#39;22 -&gt; January &#39;23</em>",id:"december-22---january-23",level:4},{value:"Phase 3: Privatizing the order-flow",id:"phase-3-privatizing-the-order-flow",level:2},{value:"<em>January -&gt; March &#39;23</em>",id:"january---march-23",level:4},{value:"Phase 4: Block-Builders 2.0",id:"phase-4-block-builders-20",level:2},{value:"<em>March -&gt; April &#39;22</em>",id:"march---april-22",level:4},{value:"Phase 5: Rolling up <strong>Fiber</strong>",id:"phase-5-rolling-up-fiber",level:2},{value:"<em>Q3/4 &#39;23</em>",id:"q34-23",level:4}],p={toc:c};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"phase-1-fiber-goes-live"},"Phase 1: ",(0,n.kt)("strong",{parentName:"h2"},"Fiber")," goes Live!"),(0,n.kt)("h4",{id:"september---november-22"},(0,n.kt)("em",{parentName:"h4"},"September -> November '22")),(0,n.kt)("p",null,"\u2705 ",(0,n.kt)("inlineCode",{parentName:"p"},"FIBER")," MVP Deployment on AWS instances across 4 regions"),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Introduction of Basic Transaction Filtering (",(0,n.kt)("inlineCode",{parentName:"li"},"BTF"),")"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","API Implementation to send transactions (",(0,n.kt)("a",{parentName:"li",href:"https://fiber.chainbound.io/docs/usage/api"},"link"),")"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,n.kt)("inlineCode",{parentName:"li"},"FIBER")," deployment across 13 regions")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Preliminary results: ~2.5s faster than Infura and ~5/10% faster than Bloxroute")),(0,n.kt)("h2",{id:"phase-2-fiber-opminizaatooor"},"Phase 2: ",(0,n.kt)("strong",{parentName:"h2"},"Fiber")," opminizaatooor"),(0,n.kt)("h4",{id:"december-22---january-23"},(0,n.kt)("em",{parentName:"h4"},"December '22 -> January '23")),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Set database for transaction indexing and tracing (",(0,n.kt)("a",{parentName:"li",href:"/docs/usage/tracing"},"link"),"), further adds-on include:",(0,n.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Develop mapping algorithm for transactions tracing"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Release ",(0,n.kt)("inlineCode",{parentName:"li"},"FIBER-monitor")," - system to monitor  major network transactions broadcasters and transactions hotspots"))),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Release ",(0,n.kt)("inlineCode",{parentName:"li"},"FIBER-dash")," dashboard for system performance monitoring (",(0,n.kt)("a",{parentName:"li",href:"http://fiber-stats.chainbound.io/d/h4zwdDK4z/fiber-stats?orgId=1&refresh=30s"},"link"),")"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Upgrade internal messaging network with ~2x performance throughput"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Deployment of ",(0,n.kt)("inlineCode",{parentName:"li"},"FIBER-inject")," - ",(0,n.kt)("inlineCode",{parentName:"li"},"geth")," implementation with extended ",(0,n.kt)("inlineCode",{parentName:"li"},"FIBER")," mempool (",(0,n.kt)("a",{parentName:"li",href:"/docs/usage/fiber-inject"},"link"),")"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Deployment of ",(0,n.kt)("inlineCode",{parentName:"li"},"FIBER-block")," - tool to monitor block propagation"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Release ",(0,n.kt)("inlineCode",{parentName:"li"},"fiber-py")," - Fiber client in python"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Implementation of peer-selection-algorithm for optimized network topology"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Development of observability tools and metrics for debugging, research and system monitoring")),(0,n.kt)("h2",{id:"phase-3-privatizing-the-order-flow"},"Phase 3: Privatizing the order-flow"),(0,n.kt)("h4",{id:"january---march-23"},(0,n.kt)("em",{parentName:"h4"},"January -> March '23")),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Beta deployment of ",(0,n.kt)("inlineCode",{parentName:"li"},"FIBER-flow")," - private order-flow system with direct connections to block-builders"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Production deployment of ",(0,n.kt)("inlineCode",{parentName:"li"},"FIBER-flow")," including:",(0,n.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Kickback rewards from MEV"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Transaction & bundle simulation"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Revert protection")))),(0,n.kt)("h2",{id:"phase-4-block-builders-20"},"Phase 4: Block-Builders 2.0"),(0,n.kt)("h4",{id:"march---april-22"},(0,n.kt)("em",{parentName:"h4"},"March -> April '22")),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Release of ",(0,n.kt)("inlineCode",{parentName:"li"},"FIBER-builder")," - Dedicated fiber block-builder, leveraging Fiber network and ",(0,n.kt)("inlineCode",{parentName:"li"},"FIBER-flow"),"-")),(0,n.kt)("h2",{id:"phase-5-rolling-up-fiber"},"Phase 5: Rolling up ",(0,n.kt)("strong",{parentName:"h2"},"Fiber")),(0,n.kt)("h4",{id:"q34-23"},(0,n.kt)("em",{parentName:"h4"},"Q3/4 '23")),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Release of ",(0,n.kt)("inlineCode",{parentName:"li"},"FIBER-polygon")," - Fiber implementation for Polygon blockchain"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Release of ",(0,n.kt)("inlineCode",{parentName:"li"},"FIBER-avalanche")," - FIBER implementation for Avalanche blockchain")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"At Chainbound we believe the future is in the proliferation of rollups. These will capture majority of blockchain activity and etherum will transition into settlement layer.\nRight now, rollups do not have a public mempool as single sequencer (normally run by the Roolup-Foundation) manage validation.\nIn the future, validation will become decentralized, as anyone will be able to run a sequencers. At that point Fiber will:")),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Launch ",(0,n.kt)("inlineCode",{parentName:"li"},"FIBER"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"FIBER-monitor"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"FIBER-block")," on L2s"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Develop co-location services with sequencers to provide fast access to new validated states  ")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Rollups currently in this roadmap are ",(0,n.kt)("inlineCode",{parentName:"em"},"Arbitrum")," and ",(0,n.kt)("inlineCode",{parentName:"em"},"Optimism"))))}m.isMDXComponent=!0}}]);