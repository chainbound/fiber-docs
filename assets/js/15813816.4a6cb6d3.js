"use strict";(self.webpackChunkfiber_website=self.webpackChunkfiber_website||[]).push([[3795],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return t?a.createElement(g,o(o({ref:n},p),{},{components:t})):a.createElement(g,o({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(7294),r=t(6010);const i="tabItem_Ymn6";function o(e){let{children:n,hidden:t,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(7462),r=t(7294),i=t(6010),o=t(2389),s=t(7392),l=t(7094),c=t(2466);const p="tabList__CuJ",d="tabItem_LNqP";function u(e){var n;const{lazy:t,block:o,defaultValue:u,values:m,groupId:g,className:h}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=m??b.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),y=(0,s.l)(k,((e,n)=>e.value===n.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===u?u:u??(null==(n=b.find((e=>e.props.default)))?void 0:n.props.value)??b[0].props.value;if(null!==f&&!k.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:T,setTabGroupChoices:x}=(0,l.U)(),[N,w]=(0,r.useState)(f),v=[],{blockElementScrollPositionUntilNextRender:C}=(0,c.o5)();if(null!=g){const e=T[g];null!=e&&e!==N&&k.some((n=>n.value===e))&&w(e)}const S=e=>{const n=e.currentTarget,t=v.indexOf(n),a=k[t].value;a!==N&&(C(n),w(a),null!=g&&x(g,String(a)))},_=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=v.indexOf(e.currentTarget)+1;t=v[n]??v[0];break}case"ArrowLeft":{const n=v.indexOf(e.currentTarget)-1;t=v[n]??v[v.length-1];break}}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":o},h)},k.map((e=>{let{value:n,label:t,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,key:n,ref:e=>v.push(e),onKeyDown:_,onFocus:S,onClick:S},o,{className:(0,i.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":N===n})}),t??n)}))),t?(0,r.cloneElement)(b.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==N})))))}function m(e){const n=(0,o.Z)();return r.createElement(u,(0,a.Z)({key:String(n)},e))}},6115:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=t(7462),r=(t(7294),t(3905)),i=t(5488),o=t(5162);const s={sidebar_position:3,title:"Broadcasting Transactions"},l=void 0,c={unversionedId:"usage/broadcasting-txs",id:"usage/broadcasting-txs",title:"Broadcasting Transactions",description:"Sending Transactions via Echo",source:"@site/docs/usage/broadcasting-txs.mdx",sourceDirName:"usage",slug:"/usage/broadcasting-txs",permalink:"/docs/usage/broadcasting-txs",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/usage/broadcasting-txs.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Broadcasting Transactions"},sidebar:"tutorialSidebar",previous:{title:"Subscribing to Streams",permalink:"/docs/usage/subscriptions"},next:{title:"FiberBoost",permalink:"/docs/usage/fiber-boost"}},p={},d=[{value:"Sending Transactions via Echo",id:"sending-transactions-via-echo",level:2},{value:"Sending Transactions via Fiber",id:"sending-transactions-via-fiber",level:2},{value:"<code>SendTransaction</code>",id:"sendtransaction",level:3},{value:"<code>SendRawTransaction</code>",id:"sendrawtransaction",level:3},{value:"<code>SendTransactionSequence</code>",id:"sendtransactionsequence",level:3},{value:"<code>SendRawTransactionSequence</code>",id:"sendrawtransactionsequence",level:3}],u={toc:d};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"sending-transactions-via-echo"},"Sending Transactions via Echo"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fiber's users can leverage ",(0,r.kt)("a",{parentName:"strong",href:"https://echo.chainbound.io/"},"Echo")," a standalone product, developed by Chainbound, to easily broadcast transactions directly to block builders and validators.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://echo.chainbound.io/"},"Here")," Echo's official documentation!")),(0,r.kt)("p",null,"Echo has the following unique features:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"UX & Convenience"),": Unified API for quick bundle submissions."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Front-running Protection"),": Direct transmissions to block builders, skipping the mempool to defend against MEV."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Maintenance & Upgrades"),": Automated system upgrades and updates with the latest builder API specifications."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Real-time Notifications"),": Immediate alerts once your bundle is included in a block via Fiber's ",(0,r.kt)("inlineCode",{parentName:"li"},"execution_payloads")," stream."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Mempool Add-on Integration"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Use the ",(0,r.kt)("inlineCode",{parentName:"li"},"SendTransactionSequence")," method from Fiber."),(0,r.kt)("li",{parentName:"ul"},"Allows global dispatch to both mempools and builders."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Ideal for rapid inclusion tasks like hack-prevention and Oracle updates."))))),(0,r.kt)("p",null,"You can obtain a ",(0,r.kt)("strong",{parentName:"p"},"free API key")," by reaching out to us at ",(0,r.kt)("a",{parentName:"p",href:"mailto:admin@chainbound.io"},"admin@chainbound.io")," or by joining our ",(0,r.kt)("a",{parentName:"p",href:"https://discord.com/invite/J4KNdeCYGX"},"Discord")," and opening a ticket."),(0,r.kt)("h2",{id:"sending-transactions-via-fiber"},"Sending Transactions via Fiber"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"For users only interested in fast-inclusion, Fiber allows to bypass Echo's methods and inject transactions directly to the p2p network, guaranteeing low latency and reliable\npropagation globally.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"We currently support 4 methods for sending transactions & bundles directly via Fiber:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Method"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SendTransaction")),(0,r.kt)("td",{parentName:"tr",align:null},"Method for sending signed transactions (with the ",(0,r.kt)("inlineCode",{parentName:"td"},"v"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"r"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"s")," fields populated) to the Fiber Network. Fiber propagates these transactions to all other Fiber nodes, as well as all full nodes it's connected to.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SendRawTransaction")),(0,r.kt)("td",{parentName:"tr",align:null},"Method for sending a signed RLP encoded transaction. This is useful when you\u2019re using libraries like ",(0,r.kt)("inlineCode",{parentName:"td"},"ethers")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"web3.js")," with JavaScript, or ",(0,r.kt)("inlineCode",{parentName:"td"},"ethers-rs")," with Rust.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SendTransactionSequence")),(0,r.kt)("td",{parentName:"tr",align:null},"Method for sending a sequence of transactions to be propagated across the network, to ensure that they arrive at the block producer in the correct order.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SendRawTransactionSequence")),(0,r.kt)("td",{parentName:"tr",align:null},"Same as above, but for RLP encoded signed transactions.")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"SendTransactionSequence")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"SendRawTransactionSequence")," methods don't guarantee that the transactions\nwill land in order on-chain. They will be sent in sequence, but the final ordering will be determined by the\nblock producer for the block in which they're included.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Here you can find the endpoints implementation in the different packages:")),(0,r.kt)("h3",{id:"sendtransaction"},(0,r.kt)("inlineCode",{parentName:"h3"},"SendTransaction")),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"go",label:"Golang",mdxType:"TabItem"},(0,r.kt)("p",null,"In Go, the method takes a ",(0,r.kt)("inlineCode",{parentName:"p"},"go-ethereum.types.Transaction")," as a parameter. This plays along nicely with any code\nthat's already using ",(0,r.kt)("inlineCode",{parentName:"p"},"go-ethereum")," as a library."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "context"\n    "log"\n    "math/big"\n    "time"\n\n    fiber "github.com/chainbound/fiber-go"\n\n    "github.com/ethereum/go-ethereum/core/types"\n    "github.com/ethereum/go-ethereum/common"\n    "github.com/ethereum/go-ethereum/crypto"\n)\n\n\nfunc main() {\n    // Connection process omitted\n    ...\n\n    // Example transaction\n    tx := types.NewTx(&types.DynamicFeeTx{\n        Nonce:     nonce,\n        To:        common.HexToAddress("0x...."),\n        Value:     big.NewInt(100),\n        Gas:       21000,\n        GasFeeCap: big.NewInt(x),\n        GasTipCap: big.NewInt(y),\n        Data:      nil,\n    })\n\n    // Get your private key\n    pk, _ := crypto.HexToECDSA("YOUR_PRIVATE_KEY")\n    // Create a signer\n    signer := types.NewLondonSigner(common.Big1)\n\n    // Sign the transaction. Note that this doesn\'t RLP encode the transaction\n    signed, err := types.SignTx(tx, signer, pk)\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    // Create a timeout for sending\n    ctx, cancel := context.WithTimeout(context.Background(), 3*time.Second)\n    defer cancel()\n\n    // Returns:\n    // * Transaction hash\n    // * Unix timestamp in microseconds at which the node saw the transaction (useful for debugging latency issues)\n    // * Any potential errors\n    hash, timestamp, err := client.SendTransaction(ctx, signed)\n    if err != nil {\n        log.Fatal(err)\n    }\n\n}\n'))),(0,r.kt)(o.Z,{value:"rs",label:"Rust",mdxType:"TabItem"},(0,r.kt)("p",null,"In Rust, we again use ",(0,r.kt)("inlineCode",{parentName:"p"},"ethers-rs")," to construct and sign transactions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use ethers::{\n    signers::{LocalWallet, Signer},\n    types::{transaction::eip2718::TypedTransaction, Address, TransactionRequest}, utils::hex::ToHex,\n};\nuse fiber::Client;\n\n#[tokio::main]\nasync fn main() {\n    // Connection process omitted\n    ...\n\n    // Construct transaction\n    let tx: TypedTransaction = TransactionRequest::new()\n        .nonce(3)\n        .gas_price(1)\n        .gas(25000)\n        .to("b94f5374fce5edbc8e2a8697c15331677e6ebf0b".parse::<Address>().unwrap())\n        .value(10)\n        .data(vec![0x55, 0x44])\n        .chain_id(1)\n        .into();\n\n    // Parse private key\n    let wallet: LocalWallet = "PRIVATE_KEY".parse().unwrap();\n\n    let signed = wallet.sign_transaction(&tx.clone()).await.unwrap();\n\n    let (hash, timestamp) = client.send_transaction(&signed).await.unwrap();\n}\n'))),(0,r.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("p",null,"The JavaScript package uses ",(0,r.kt)("inlineCode",{parentName:"p"},"@ethereumjs/tx")," to construct and sign transactions. If you want to use ",(0,r.kt)("inlineCode",{parentName:"p"},"ethers.js")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"web3.js"),", you can do that with ",(0,r.kt)("a",{parentName:"p",href:"#sendrawtransaction"},"SendRawTransaction")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { Client, TransactionResponse } from 'fiber-ts';\nimport { TypedTransaction, TransactionFactory } from '@ethereumjs/tx';\n\n// Connection process omitted\n...\n\nconst pk = Buffer.from('YOUR_PRIVATE_KEY', 'hex');\n\n// Build an EIP1559 TypedTransaction with ethereumjs\nconst tx = TransactionFactory.fromTxData({\n    chainId: 1,\n    type: 2,\n    to: '0x...',\n    gasLimit: 21000,\n    value: 0,\n    nonce: 21,\n    maxFeePerGas: 20 * 1e9,\n    maxPriorityFeePerGas: 2 * 1e9,\n});\n\n// Sign & encode the transaction\nconst signed = tx.sign(pk);\n\n// Result contains the timestamp (unix microseconds) and hash of the transaction\nconst result: TransactionResponse = await client.sendTransaction(signed);\n"))),(0,r.kt)(o.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"from fiber.client import Client, Transaction\n\n...\n\ntry:\n    new_transaction = Transaction(\n        to='0x123abc...',\n        gas=100000,\n        nonce=0,\n        value=100,\n        sender='0x789xyz...',\n        type=1,\n        gas_price=10,\n        input='0xabcdef...',\n        max_fee=1000,\n        priority_fee=5,\n        v=27,\n        r='0x123456...',\n        s='0x789abc...',\n        access_list=None,\n        chain_id=1\n    )\n  sub = client.send_transaction(new_transaction)\nexcept Exception as e:\n    print(\"error sending tx\", e)\n")))),(0,r.kt)("h3",{id:"sendrawtransaction"},(0,r.kt)("inlineCode",{parentName:"h3"},"SendRawTransaction")),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"go",label:"Golang",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "context"\n    "log"\n    "math/big"\n    "time"\n\n    fiber "github.com/chainbound/fiber-go"\n\n    "github.com/ethereum/go-ethereum/core/types"\n    "github.com/ethereum/go-ethereum/common"\n    "github.com/ethereum/go-ethereum/crypto"\n)\n\n\nfunc main() {\n    // Connection process omitted\n    ...\n\n    // Example transaction\n    tx := types.NewTx(&types.DynamicFeeTx{\n        Nonce:     nonce,\n        To:        common.HexToAddress("0x...."),\n        Value:     big.NewInt(100),\n        Gas:       21000,\n        GasFeeCap: big.NewInt(x),\n        GasTipCap: big.NewInt(y),\n        Data:      nil,\n    })\n\n    // Get your private key\n    pk, _ := crypto.HexToECDSA("YOUR_PRIVATE_KEY")\n    // Create a signer\n    signer := types.NewLondonSigner(common.Big1)\n\n    // Sign the transaction. Note that this doesn\'t RLP encode the transaction\n    signed, err := types.SignTx(tx, signer, pk)\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    // Create a timeout for sending\n    ctx, cancel := context.WithTimeout(context.Background(), 3*time.Second)\n    defer cancel()\n\n    raw, err := signed.MarshalBinary()\n    if err != nil {\n        log.Fatal(err)\n    }\n\n\n    // Returns:\n    // * Transaction hash\n    // * Unix timestamp in microseconds at which the node saw the transaction (useful for debugging latency issues)\n    // * Any potential errors\n    hash, timestamp, err := client.SendRawTransaction(ctx, raw)\n    if err != nil {\n        log.Fatal(err)\n    }\n\n}\n'))),(0,r.kt)(o.Z,{value:"rs",label:"Rust",mdxType:"TabItem"},(0,r.kt)("p",null,"In Rust, we again use ",(0,r.kt)("inlineCode",{parentName:"p"},"ethers-rs")," to construct and sign transactions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use ethers::{\n    signers::{LocalWallet, Signer},\n    types::{transaction::eip2718::TypedTransaction, Address, TransactionRequest}, utils::hex::ToHex,\n};\nuse fiber::Client;\n\n#[tokio::main]\nasync fn main() {\n    // Connection process omitted\n    ...\n\n    // Construct transaction\n    let tx: TypedTransaction = TransactionRequest::new()\n        .nonce(3)\n        .gas_price(1)\n        .gas(25000)\n        .to("b94f5374fce5edbc8e2a8697c15331677e6ebf0b".parse::<Address>().unwrap())\n        .value(10)\n        .data(vec![0x55, 0x44])\n        .chain_id(1)\n        .into();\n\n    // Parse private key\n    let wallet: LocalWallet = "PRIVATE_KEY".parse().unwrap();\n\n    let sig = wallet.sign_transaction(&tx.clone()).await.unwrap();\n\n    // Sign transaction\n    let signed = tx.rlp_signed(&sig);\n\n    let (hash, timestamp) = client.send_raw_transaction(&signed).await.unwrap();\n}\n'))),(0,r.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("p",null,"With this endpoint you can use any library for serializing transactions. In this example, we'll use ",(0,r.kt)("inlineCode",{parentName:"p"},"ethers.js"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { Client } from 'fiber-ts';\nimport { ethers } from 'ethers';\n\n// Code omitted\n...\n\nconst wallet = new ethers.Wallet('PRIVATE_KEY');\n\nconst signedTx = await wallet.signTransaction({\n    chainId: 1,\n    type: 2,\n    to: '0x...',\n    gasLimit: 21000,\n    value: 0,\n    nonce: 21,\n    maxFeePerGas: 20 * 1e9,\n    maxPriorityFeePerGas: 2 * 1e9,\n});\n\nconst result = await client.sendRawTransaction(signedTx);\n"))),(0,r.kt)(o.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"from fiber.client import Client\nfrom web3 import Web3\n\n...\n\nprivate_key = 'YOUR_PRIVATE_KEY'\n\n# Set the transaction parameters\ntransaction = {\n    'nonce': 0,\n    'gasPrice': 100,\n    'gas': YOUR_GAS_LIMIT,\n    'to': YOUR_RECIPIENT_ADDRESS,\n    'value': YOUR_AMOUNT_IN_WEI,\n    'data': YOUR_DATA\n}\n\nsigned_tx = web3.eth.account.sign_transaction(transaction, private_key)\n\ntry:\n    response = client.send_raw_transaction(signed_tx.rawTransaction)\n    print(response)\nexcept Exception as e:\n    print(\"error sending tx\", e)\n")))),(0,r.kt)("h3",{id:"sendtransactionsequence"},(0,r.kt)("inlineCode",{parentName:"h3"},"SendTransactionSequence")),(0,r.kt)("p",null,"Sends multiple signed transactions in a sequence at the p2p level."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This is not a bundle like in Flashbots. ",(0,r.kt)("br",null),"\nThe final transaction ordering is determined by the block producer.")),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"go",label:"Golang",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "context"\n    "log"\n    "math/big"\n    "time"\n\n    fiber "github.com/chainbound/fiber-go"\n\n    "github.com/ethereum/go-ethereum/core/types"\n    "github.com/ethereum/go-ethereum/common"\n    "github.com/ethereum/go-ethereum/crypto"\n)\n\nfunc main() {\n\n    ...\n\n    // Example transaction\n    tx := types.NewTx(&types.DynamicFeeTx{\n        Nonce:     nonce,\n        To:        common.HexToAddress("0x...."),\n        Value:     big.NewInt(100),\n        Gas:       21000,\n        GasFeeCap: big.NewInt(x),\n        GasTipCap: big.NewInt(y),\n        Data:      nil,\n    })\n\n    pk, _ := crypto.HexToECDSA("PRIVATE_KEY")\n    signer := types.NewLondonSigner(common.Big1)\n\n    signed, err := types.SignTx(tx, signer, pk)\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    // type should be *types.Transaction (but signed, e.g. v,r,s fields filled in)\n    // (this is the transaction that will be sent first)\n    target := someTargetTransaction\n\n    hashes, timestamp, err := client.SendTransactionSequence(ctx, target, signed)\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    doSomething(hashes, timestamp)\n}\n'))),(0,r.kt)(o.Z,{value:"rs",label:"Rust",mdxType:"TabItem"},(0,r.kt)("p",null,"In Rust, we again use ",(0,r.kt)("inlineCode",{parentName:"p"},"ethers-rs")," to construct and sign transactions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"use ethers::{\n    ...\n    types::Transaction,\n};\nuse fiber::Client;\n\n#[tokio::main]\nasync fn main() {\n    // Connection process, signing transaction omitted\n    ...\n\n    // build transactions with ethers-rs\n    let transactions: Vec<Transaction> = vec![tx1, tx2, tx3];\n\n    let (hash, timestamp) = client.send_transaction_sequence(transactions).await.unwrap();\n}\n"))),(0,r.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("p",null,"The JavaScript package uses ",(0,r.kt)("inlineCode",{parentName:"p"},"@ethereumjs/tx")," to construct and sign transactions.\nIf you want to use ",(0,r.kt)("inlineCode",{parentName:"p"},"ethers.js")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"web3.js"),", you can do that with ",(0,r.kt)("a",{parentName:"p",href:"#sendrawtransaction"},"SendRawTransaction")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { Client, TransactionResponse } from 'fiber-ts';\nimport { TypedTransaction, TransactionFactory } from '@ethereumjs/tx';\n\n// Connection process, signing transaction omitted\n...\n\nconst transactions = [tx1, tx2, tx3];\n\n// Result contains an array of transaction hashes and their timestamps\nconst result: TransactionResponse = await client.sendTransactionSequence(transactions);\n"))),(0,r.kt)(o.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'from fiber.client import Client\nfrom web3 import Web3\n\n# Connection process, signing transactions omitted\n...\n\ntry:\n    response = client.send_transaction_sequence([tx1, tx2, tx3])\n    print(response)\nexcept Exception as e:\n    print("error sending tx", e)\n')))),(0,r.kt)("h3",{id:"sendrawtransactionsequence"},(0,r.kt)("inlineCode",{parentName:"h3"},"SendRawTransactionSequence")),(0,r.kt)("p",null,"Exactly the same as above, but this time our transactions have to be RLP encoded. Check the ",(0,r.kt)("a",{parentName:"p",href:"#sendrawtransaction"},"SendRawTransaction")," section\nfor full examples of signing and RLP encoding transactions."),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"go",label:"Golang",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "context"\n    "log"\n    "math/big"\n    "time"\n\n    fiber "github.com/chainbound/fiber-go"\n\n    "github.com/ethereum/go-ethereum/core/types"\n    "github.com/ethereum/go-ethereum/common"\n    "github.com/ethereum/go-ethereum/crypto"\n)\n\n\nfunc main() {\n    // Connection process, signing transaction omitted\n    ...\n\n    bytes, err := signed.MarshalBinary()\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    // Type should be []byte\n    targetTransaction := someTargetTransaction\n\n    hashes, timestamp, err := client.SendRawTransactionSequence(ctx, targetTransaction, bytes)\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    doSomething(hashes, timestamp)\n}\n'))),(0,r.kt)(o.Z,{value:"rs",label:"Rust",mdxType:"TabItem"},(0,r.kt)("p",null,"In Rust, we again use ",(0,r.kt)("inlineCode",{parentName:"p"},"ethers-rs")," to construct and sign transactions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use ethers::{\n    signers::{LocalWallet, Signer},\n    types::{transaction::eip2718::TypedTransaction, Address, TransactionRequest}, utils::hex::ToHex,\n};\nuse fiber::Client;\n\n#[tokio::main]\nasync fn main() {\n    // Connection process, signing transaction omitted\n    ...\n\n    let target = "0xabcd...".to_string();\n\n    let transactions = vec![target, raw_signed];\n    let (hash, timestamp) = client.send_raw_transaction_sequence(transactions).await.unwrap();\n}\n'))),(0,r.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("p",null,"The JavaScript package uses ",(0,r.kt)("inlineCode",{parentName:"p"},"@ethereumjs/tx")," to construct and sign transactions. If you want to use ",(0,r.kt)("inlineCode",{parentName:"p"},"ethers.js")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"web3.js"),", you can do that with ",(0,r.kt)("a",{parentName:"p",href:"#sendrawtransaction"},"SendRawTransaction")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { Client, TransactionResponse } from 'fiber-ts';\nimport { TypedTransaction, TransactionFactory } from '@ethereumjs/tx';\n\n// Connection process, signing transaction omitted\n...\n\n\n// Result contains the timestamp (unix microseconds) and hash of the transaction\nconst result: TransactionResponse = await client.rawBackrunTransaction(\"0xabcd...\", rawSigned);\n"))),(0,r.kt)(o.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"from fiber.client import Client\nfrom web3 import Web3\n\n# Connection process, signing transactions omitted\n...\n\ntarget = '0xabcd...'\n\ntry:\n    response = client.send_raw_transaction_sequence([target, raw_signed])\n    print(response)\nexcept Exception as e:\n    print(\"error sending tx\", e)\n")))))}m.isMDXComponent=!0}}]);