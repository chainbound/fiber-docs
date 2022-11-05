"use strict";(self.webpackChunkfiber_website=self.webpackChunkfiber_website||[]).push([[477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"ethereum-hotspots","metadata":{"permalink":"/blog/ethereum-hotspots","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-10-21-ethereum-hotspots/index.md","source":"@site/blog/2022-10-21-ethereum-hotspots/index.md","title":"Identifying hotspots on the Ethereum p2p network","description":"In our journey of creating the ideal network topology for our Fiber nodes, we had to determine the critical geographical","date":"2022-10-21T00:00:00.000Z","formattedDate":"October 21, 2022","tags":[{"label":"ethereum","permalink":"/blog/tags/ethereum"},{"label":"devp2p","permalink":"/blog/tags/devp-2-p"}],"readingTime":7.425,"hasTruncateMarker":true,"authors":[{"name":"Jonas Bostoen","title":"Chainbound CTO","url":"https://github.com/jonasbostoen","imageURL":"https://github.com/jonasbostoen.png","key":"jonas"}],"frontMatter":{"slug":"ethereum-hotspots","title":"Identifying hotspots on the Ethereum p2p network","authors":["jonas"],"tags":["ethereum","devp2p"]}},"content":"In our journey of creating the ideal network topology for our Fiber nodes, we had to determine the critical geographical\\nregions of the Ethereum p2p network. We will define these \\"hotspots\\" as regions where the most transactions are originally\\nbroadcasted from.\\n\\nBecause Fiber is a mempool service, we need to be able to deliver transactions to users as fast as possible, which also means making sure we sufficiently cover these hotspots. In essence, we want to make sure we\'re as close to the original\\nbroadcaster is possible, which in p2p terms means either being directly connected to it, or only 1 or 2 hops away. Each hop\\nwill introduce a non-trivial amount of latency, which is something we need to minimize.\\n\\n\x3c!-- truncate --\x3e\\n\\nLet\'s look at a couple scenarios:\\n\\n![](./2-hop-setup.png)\\n\\nIn this setup, we\'re 2 hops away from the transaction broadcaster. We\'ll simplify here and assume that nodes always\\nbroadcast the full transaction message, which is not the case [[2]](#references).\\n\\nThere are 3 factors introducing latency here:\\n* **A**: The first network hop.\\n* **B**: The time it takes this node to process, validate, and re-broadcast the transaction.\\n* **C**: The second network hop.\\n\\nThis network topology is not ideal, since your total latency will be **A + B + C**, and all of these steps\\nhave an element of variability to them.\\n\\nWhat we actually want is the following, single hop topology:\\n\\n![](./1-hop-setup.png)\\n\\nHere, the only latency we have is **A**, the first and only network hop. The only way to achieve this is to try\\nto **connect to as much peers as possible in that region**, which will give you a better chance of direct peerings\\nwith transaction broadcasters. You can do this by either having one node with a very large maximum peer count, or by having more\\nthan one node in the region. Because maintaining a large amount of peers is pretty resource intensive, we opted\\nfor the second option.\\n\\nNow that we know why we need to cover these hotspots sufficiently, how do we identify them?\\nThis article will go over our findings.\\n\\n## The setup\\nThe setup will consist of a number of Ethereum nodes deployed globally that **keep track of when they received a certain transaction, but also from which peer it came**. \\nLater on, we\'ll be able to inspect these timestamps to see which node heard about the transaction first. \\nWe\'ll also be able to use the peer IP addresses to find which hosting providers are responsible for broadcasting\\nthe most transactions. But where do we deploy these nodes?\\n\\nIt\'s no secret that **most critical Ethereum infrastructure runs on AWS** [[1]](#references):\\n\\n![](./hosting-chart.png)\\n\\nWhich is why we deployed our nodes in the following 13 AWS regions:\\n* us-east-1 (N. Virginia)\\n* us-east-2 (Ohio)\\n* us-west-1 (N. California)\\n* us-west-2 (Oregon)\\n* ap-east-1 (Hong Kong)\\n* ap-northeast-2 (Seoul)\\n* ap-northeast-1 (Tokyo)\\n* ap-southeast-1 (Singapore)\\n* eu-west-1 (Ireland)\\n* eu-west-2 (London)\\n* eu-west-3 (Paris)\\n* eu-north-1 (Stockholm) \\n\\nThis obviously doesn\'t cover the whole world, but since they\'re located at backbone hotspots, it will do.\\n\\nEach node will be connected to a significant amount of peers (400), **for a theoretical\\nmaximum reach of 5200 peers**. In practice, this number will be a lot lower due to duplicate peers.\\nWith this setup, we\'ve recorded **5.5 million Ethereum transactions** over the period of a couple of days. Let\'s look at the results.\\n\\n## The results\\n\\n### Geography\\n![](./tx_geo.png)\\nMost transactions are seen first in the US in the North Virginia area, which is\\nwhere the notorious **us-east-1** AWS region sits. Ohio is a hotspot as well, seeing\\na little more than 8% of transactions first. Regions on the West Coast are less active:\\nOregon and North California combined only see a little more than 5% of transactions first.\\n\\nIn **Europe**, Frankfurt is by far the most active region. Paris and London are also important\\nregions, both seeing close to 6% of recorded transactions first. In the **Asia Pacific** region, Tokyo and Singapore are the most active.\\n\\n\\nInterestingly, looking at the activity per \\"continent\\", we can see that the EU and the US lead by a wide margin:\\n![](./tx_geo_continent.png)\\n\\nBased on these results, we\'ve been able to work out a good geographical distribution of our node setup.\\n\\n### Hosting providers\\nSince we recorded the sending peer of every transaction, we can take a closer look at the different hosting\\nproviders that originate the most transactions. We know that AWS hosts a lot of full nodes, but is that actually where\\ninfrastructure that belongs to the largest *transaction broadcasters* is?\\n\\nTo figure that out, we\'ll look at the top 3 most \\"active\\" peers (peers from which we received the most transactions first) per region, and identify the hosting provider based on their IP addresses.\\n\\n**us-east-1: Virginia region**\\n\\nAll in AWS, Virginia.\\n\\n**eu-central-1: Frankfurt region**\\n\\nAll in Hetzner, Frankfurt. Hetzner is a bare metal cloud provider that\'s primarily active in Germany.\\n\\n**us-east-2: Ohio region**\\n\\nAll in AWS, Virginia. Only the 4th biggest originated from the AWS Ohio datacenter, again confirming that the us-east-1 region\\nis a big hotspot.\\n\\n**eu-west-3: Paris region**\\n1. Google Cloud, Brussels\\n2. Google Cloud, Brussels\\n3. Hetzner, Frankfurt\\n\\nThis seems to suggest that the Paris region itself is not very active.\\n\\n**eu-west-2: London region**\\n\\n1. OVHCloud, London\\n2. Google Cloud, Brussels\\n3. Hetzner, Frankfurt\\n\\n**ap-northeast-1: Tokyo region**\\n\\n1. AWS, Tokyo\\n2. AWS, Virginia\\n3. AWS, Tokyo\\n\\n**ap-southeast-1: Singapore region**\\n\\n1. Contabo, Singapore\\n2. Hetzner, Frankfurt (?)\\n3. AWS, Singapore\\n\\n**eu-west-1: Dublin region**\\n\\n1. AWS, Dublin\\n2. AWS, Tokyo (?)\\n3. AWS, Dublin\\n\\n**us-west-2: Oregon region**\\n\\n1. Telus Communications, Vancouver\\n2. AWS, Virginia\\n3. AWS, Oregon\\n\\n**ap-east-1: Hong Kong region**\\n\\n1. Google Cloud, Hong Kong\\n2. Google Cloud, Hong Kong\\n3. AWS, Virginia (?)\\n\\n**ap-northeast-2: Seoul region**\\n\\n1. AWS, Seoul\\n2. AWS, Seoul\\n3. AWS, Tokyo\\n\\n**eu-north-1: Stockholm region**\\n\\n1. Hetzner, Frankfurt\\n2. AWS, Virginia (?)\\n3. Hetzner, Finland\\n\\n**us-west-1: California region**\\n\\n1. AWS, Virginia\\n2. AWS, Virginia\\n3. AWS, California\\n\\nAnd putting all the winners in a table:\\n\\n| Region | Hosting Provider |\\n| ------ | ---------------- |\\n| us-east-1    | AWS, Virginia     |\\n| eu-central-1 | Hetzner, Frankfurt |\\n| us-east-2 | AWS, Ohio |\\n| eu-west-3 | Google Cloud, Brussels |\\n| eu-west-2 | OVH, UK |\\n| ap-northeast-1 | AWS, Tokyo |\\n| ap-southeast-1 | Contabo, Singapore |\\n| eu-west-1 | AWS, Dublin |\\n| us-west-2 | Telus Communications, Vancouver |\\n| ap-east-1 | Google Cloud, Hong Kong |\\n| ap-northeast-2 | AWS, Seoul |\\n| eu-north-1 | Hetzner, Frankfurt |\\n| us-west-1 | AWS, Virginia |\\n\\nTurns out that **AWS wins only in 6 of the 13 regions**. In Virginia and in Ohio, both very important regions, it has been the biggest broadcaster. But we also see Google Cloud winning in Hong Kong as well as in Paris (from their datacenter in Brussels, Belgium). Hetzner wins in Frankfurt by a wide margin, perhaps not surprisingly. It also wins in Stockholm, Sweden,\\neven though the broadcaster was in Frankfurt. This tells us that the eu-north area does not seem to have a lot of\\nactivity. Overall, Hetzner is a really active hosting provider in Europe. \\nIn Oregon, the biggest broadcaster was in Vancouver, Canada. In Singapore, it came from Contabo.\\n\\nAnother interesting observation is that there\'s almost never one broadcaster that stands out per region. The second and\\nthird biggest broadcasters are never far behind. This suggests that providers like [Alchemy](https://www.alchemy.com/)\\nand [Infura](https://infura.io/), who send the largest part of Ethereum transactions, use a lot of nodes, possibly\\ndistributed across geographic areas.\\n\\nYou might have also noticed the slight anomalies tagged with **(?)**. These are entries that don\'t really make a lot of sense.\\nThe fact that an AWS broadcaster in Virginia can make the top 3 active peers of our node in Hong Kong \\nmeans that those transactions didn\'t arrive at our node in Virginia first. For now, we attribute these anomalies to the randomness\\nof the p2p network, but we\'ll continue looking into it.\\n\\n## Conclusion\\nWhen milliseconds matter, this is all information that has to be taken into consideration, and that\'s what we did\\nwith Fiber. Listening to transactions is only one aspect of high frequency trading on blockchains, but it\'s a very important one that one needs to get right by carefully choosing the regions, concentration, and cloud providers\\nacross which to deploy nodes.\\n\\nIf you\'re interested in learning more about Fiber, check out the [documentation](/docs/intro) or\\njoin the [Discord](https://discord.gg/J4KNdeCYGX). We will be posting more stories like these,\\nfollow us on Twitter for updates [@chainbound_](https://twitter.com/chainbound_)!\\n\\n## References\\n1. https://ethernodes.org/networkType/Hosting\\n2. In reality, the full message is only broadcast to a subset of peers, whereas the rest receive only the hash **announcement**.\\nIt\'s up to these nodes to check if they\'ve already received the transaction, and otherwise they have to request\\nit. This introduces another round trip. See the devp2p specificiation on transaction exchange: https://github.com/ethereum/devp2p/blob/master/caps/eth.md#transaction-exchange"}]}')}}]);