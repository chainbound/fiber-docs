(self.webpackChunkfiber_website=self.webpackChunkfiber_website||[]).push([[4660],{9516:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>m});var n=a(7294),s=a(4704),r=a(6010),o=a(6942),l=a(1207);const i="wss://demo-api.fiber.chainbound.io/ws/uniswap";let c,h;if("undefined"!=typeof window)try{c=new WebSocket(i),h=new o.q("wss://mainnet.infura.io/ws/v3/0728aa7b5c674c1796b64920ef30342d")}catch(d){console.error(d)}class m extends n.Component{constructor(e){super(e),this.socket=c,this.ethers=h,this.state={transactions:[]}}componentDidMount(){this.socket.addEventListener("open",(()=>{console.log("Connected to",i)})),this.socket.addEventListener("message",(e=>{const t=JSON.parse(e.data);this.state.transactions.some((e=>e.Hash===t.Hash))||t.From.includes("fiber-node")||(this.setState({transactions:[t,...this.state.transactions.slice(0,40)]}),this.ethers.waitForTransaction(t.Hash,2).then((e=>{this.state.transactions.some((e=>e.Hash==t.Hash))&&this.setState({transactions:this.state.transactions.filter((e=>e.Hash!==t.Hash))})})))})),this.socket.addEventListener("error",(e=>{console.error(e)}))}render(){return n.createElement(s.Z,{title:"Demo"},n.createElement("div",{className:(0,r.Z)(l.Z.demo)},n.createElement("h1",null,"Demo"),n.createElement("p",null,"This is a live table of the ",n.createElement("a",{target:"_blank",href:"https://etherscan.io/address/0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45"},"Uniswap Swap Router")," trades recorded from the Fiber transaction stream, with data about when and where the transaction was seen in the network. ",n.createElement("b",null,"The stream will have a delay of 10 seconds, because to get the extra metadata for the transaction, we need to wait for it to be indexed in the database.")," The actual moment the transaction was seen by Fiber is shown in the timestamp column."),n.createElement("table",{className:(0,r.Z)(l.Z.table)},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"Hash"),n.createElement("th",null,"Timestamp (UTC)"),n.createElement("th",null,"Location"),n.createElement("th",null,"Action"),n.createElement("th",null,"From Host"))),n.createElement("tbody",null,this.state.transactions.map((e=>{let t=e.NodeID.split("-");t=t.slice(-3);let a=t.join("-"),s=e.From.split("@")[1];return n.createElement("tr",{key:e.Hash},n.createElement("td",null,n.createElement("a",{href:`https://etherscan.io/tx/${e.Hash}`,target:"_blank"},e.Hash)),n.createElement("td",null,e.Timestamp.split("+")[0]),n.createElement("td",null,a),n.createElement("td",null,e.Action),n.createElement("td",null,s))}))))))}}},1207:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n={heroBanner:"heroBanner_qdFl",demo:"demo_HgDP",table:"table_aDIh",mainLogo:"mainLogo_NVvF",buttons:"buttons_AeoN"}},6601:()=>{}}]);