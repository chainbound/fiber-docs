"use strict";(self.webpackChunkfiber_website=self.webpackChunkfiber_website||[]).push([[9557],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),u=s(n),f=o,b=u["".concat(c,".").concat(f)]||u[f]||p[f]||a;return n?r.createElement(b,i(i({ref:t},l),{},{components:n})):r.createElement(b,i({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d.mdxType="string"==typeof e?e:o,i[1]=d;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3307:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>d,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:6,title:"Mempool Injector"},i=void 0,d={unversionedId:"usage/fiber-inject",id:"usage/fiber-inject",title:"Mempool Injector",description:"Often, it's very useful to inject transactions from Fiber into your local mempool.",source:"@site/docs/usage/fiber-inject.md",sourceDirName:"usage",slug:"/usage/fiber-inject",permalink:"/docs/usage/fiber-inject",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/usage/fiber-inject.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Mempool Injector"},sidebar:"tutorialSidebar",previous:{title:"Tracing",permalink:"/docs/usage/tracing"},next:{title:"FiberGuard",permalink:"/docs/usage/fiber-guard"}},c={},s=[{value:"Usage",id:"usage",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Add Fiber inject as a trusted peer",id:"add-fiber-inject-as-a-trusted-peer",level:3},{value:"1. Expose the p2p port of the Docker container",id:"1-expose-the-p2p-port-of-the-docker-container",level:4},{value:"2. Find the <code>enode</code>",id:"2-find-the-enode",level:4},{value:"3. Add <code>enode</code> to your local node&#39;s trusted peerset",id:"3-add-enode-to-your-local-nodes-trusted-peerset",level:4},{value:"4. Check if the connection was made",id:"4-check-if-the-connection-was-made",level:4}],l={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Often, it's very useful to inject transactions from Fiber into your local mempool. "),(0,o.kt)("p",null,"Fiber offers a Docker image that allows users to do that."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --name fiber-inject mempirate/fiber-inject \\\n    fiber-inject \\\n    --fiber-api $API_ENDPOINT \\\n    --fiber-key $YOUR_API_KEY \\\n    --enodes $ENODE1,$ENODE2\n")),(0,o.kt)("p",null,"This will subscribe to the Fiber transaction stream and broadcast all the transactions it receives\nto your local nodes (specified by ",(0,o.kt)("inlineCode",{parentName:"p"},"--enodes"),", provided they're connected)."),(0,o.kt)("p",null,"Your local ",(0,o.kt)("inlineCode",{parentName:"p"},"enode"),"'s IP address should either be the gateway address of your Docker network (usually ",(0,o.kt)("inlineCode",{parentName:"p"},"172.17.0.1"),"), or one of the publicly reachable\nIP addresses of your machine."),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("p",null,"It's possible that your local node has reached its maximum amount of peers, and therefore won't accept Fiber inject as another peer.  "),(0,o.kt)("p",null,"If the Docker container doesn't print the following (",(0,o.kt)("inlineCode",{parentName:"p"},"docker logs fiber-inject"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"14:51:44.831 INF [DEVP2P] Connected to trusted peer           enode=...\n")),(0,o.kt)("p",null,"means that your node reached max n. of peers, and you have to add ",(0,o.kt)("inlineCode",{parentName:"p"},"fiber-inject")," as a trusted peer. "),(0,o.kt)("h3",{id:"add-fiber-inject-as-a-trusted-peer"},"Add Fiber inject as a trusted peer"),(0,o.kt)("h4",{id:"1-expose-the-p2p-port-of-the-docker-container"},"1. Expose the p2p port of the Docker container"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Make sure the mapped port isn't already taken by your local node.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -p 30304:30303 --name fiber-inject mempirate/fiber-inject \\\n    fiber-inject \\\n    --fiber-api $API_ENDPOINT \\\n    --fiber-key $YOUR_API_KEY \\\n    --enodes $ENODE1,$ENODE2\n")),(0,o.kt)("h4",{id:"2-find-the-enode"},"2. Find the ",(0,o.kt)("inlineCode",{parentName:"h4"},"enode")),(0,o.kt)("p",null,"Fetch ",(0,o.kt)("inlineCode",{parentName:"p"},"enode")," from output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"14:51:44.811 INF [DEVP2P] Starting devp2p server               enode=enode://6e45ab02bc08b03da9527ef42e07e12d144eea3365b102b3d7f3b7a3f4ae0aed24a039d346af3a7e0e3c84257458af076e55e8860e262f551dab9d4e472f0fe3@127.0.0.1:30303?discport=0\n")),(0,o.kt)("h4",{id:"3-add-enode-to-your-local-nodes-trusted-peerset"},"3. Add ",(0,o.kt)("inlineCode",{parentName:"h4"},"enode")," to your local node's trusted peerset"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Make sure you use your mapped port as the ",(0,o.kt)("inlineCode",{parentName:"p"},"enode")," port.")),(0,o.kt)("p",null,"If you're using geth, you can use the JavaScript console:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"geth attach --datadir $DATADIR --exec \\\n'admin.addTrustedPeer(\"enode://6e45ab02bc08b03da9527ef42e07e12d144eea3365b102b3d7f3b7a3f4ae0aed24a039d346af3a7e0e3c84257458af076e55e8860e262f551dab9d4e472f0fe3@127.0.0.1:30304\")'\n")),(0,o.kt)("h4",{id:"4-check-if-the-connection-was-made"},"4. Check if the connection was made"),(0,o.kt)("p",null,"Check the output and confirm the connection should have been made."))}p.isMDXComponent=!0}}]);