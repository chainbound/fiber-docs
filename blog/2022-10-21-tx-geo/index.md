---
slug: transaction-geography
title: Tracing the geographic origin of Ethereum transactions
authors: [jonas]
# tags: [facebook, hello, docusaurus]
---

In our journey of creating the ideal network topology for our Fiber nodes, we had to determine the critical geographical
regions of the Ethereum p2p network. We will define these "hot spots" as regions where the most transactions are originally
broadcasted from.

Because Fiber is a mempool service, we need to be able to deliver transactions to users as fast as possible, which also means making sure we sufficiently cover these hotspots. This article will go over our findings.

## The setup
The setup will be a number of Ethereum nodes deployed globally that **keep track of when they received a certain transaction, but also
from which peer it came**. 
Later on, we'll be able to inspect these timestamps to see which node heard about the transaction first. 
We'll also be able to use the peer IP addresses to find which hosting providers are responsible for broadcasting
the most transactions.

Each node will be connected to a significant amount of peers (400), **for a theoretical
maximum reach of 6000 peers**. In practice, this number will be a lot lower due to duplicate peers.
Now where do we deploy these nodes?

It's no secret that **most critical Ethereum infrastructure runs on AWS** [[1]](#references):

![](./hosting-chart.png)

Which is why we deployed our nodes in the following 13 AWS regions:
* us-east-1 (N. Virginia)
* us-east-2 (Ohio)
* us-west-1 (N. California)
* us-west-2 (Oregon)
* ap-east-1 (Hong Kong)
* ap-northeast-2 (Seoul)
* ap-northeast-1 (Tokyo)
* ap-southeast-1 (Singapore)
* eu-west-1 (Ireland)
* eu-west-2 (London)
* eu-west-3 (Paris)
* eu-north-1 (Stockholm) 

This obviously doesn't cover the whole world, but since they're located at backbone hotspots, it will do.

With this setup, we've recorded 5.5 million Ethereum transactions over the period of a couple of days. Let's look at the results.

## The results

#### Geography
![](./tx_geo.png)
Most transactions are seen first in the US in the North Virginia area, which is
where the notorious **us-east-1** AWS region sits. Ohio is a hotspot as well, seeing
a little more than 8% of transactions first. Regions on the West Coast are less active:
Oregon and North California combined only see a little more than 5% of transactions first.

In **Europe**, Frankfurt is by far the most active region. Paris and London are also important
regions, both seeing close to 6% of recorded transactions first. In the **Asia Pacific** region, Tokyo and Singapore are the most active.


Interestingly, looking at the activity per "continent", we can see that the EU and the US lead by a wide margin:
![](./tx_geo_continent.png)

Based on these results, we've determined the number of nodes to deploy in each of these regions.

#### Hosting providers
Since we recorded the sending peer of every transaction, we can take a closer look at the different hosting
providers that originate the most transactions. We know that AWS hosts a lot of full nodes, but is that actually where
infrastructure that belongs to the largest *transaction broadcasters* is?

To figure that out, we'll look at the most "active" peer (peer from which we received the most transactions first) per region, and identify the hosting provider based on their IP address.

| Region | Hosting Provider |
| ------ | ---------------- |
| us-east-1    | AWS, Virginia     |
| eu-central-1 | Hetzner, Falkenstein |
| us-east-2 | AWS, Ohio |
| eu-west-3 | Google Cloud, Brussels |
| eu-west-2 | OVH, UK |
| ap-northeast-1 | AWS, Tokyo |
| ap-southeast-1 | Contabo, Singapore |
| eu-west-1 | AWS, Dublin |
| us-west-2 | Telus Communications, Vancouver |
| ap-east-1 | Google Cloud, Hong Kong |
| ap-northeast-2 | AWS, Seoul |
| eu-north-1 | Hetzner, Falkenstein |
| us-west-1 | AWS, Virginia |

Turns out that **AWS wins only in 6 of the 13 regions**. In Virginia and in Ohio, both very important regions, it has been the biggest broadcaster. But we also see Google Cloud winning in Hong Kong as well as in Paris (from their datacenter in Brussels, Belgium). Hetzner wins in Frankfurt by a wide margin, perhaps not surprisingly. It also wins in Stockholm, Sweden,
even though the broadcaster was in Frankfurt. This tells us that the eu-north area does not seem to have a lot of
activity. In Oregon, the biggest broadcaster was in Vancouver, Canada. In Singapore, it came from Contabo.

Another interesting observation is that there's almost never one broadcaster that stands out per region. The second and
third biggest broadcasters are never far behind. This suggests that providers like [Alchemy](https://www.alchemy.com/)
and [Infura](https://infura.io/), who send the largest part of Ethereum transactions, use a lot of nodes, possibly
distributed across geographic areas.

## Conclusion
When milliseconds matter, this is all information that has to be taken into consideration, and that's what we did
with Fiber. Listening to transactions is only one aspect of high frequency trading on blockchains, but it's a very important one that one needs to get right by carefully choosing the regions, concentration, and cloud providers
across which to deploy nodes.

If you're interested in learning more about Fiber, check out the [documentation](/docs/intro) or
join the [Discord](https://discord.gg/J4KNdeCYGX). We will be posting more stories like these,
follow us on Twitter for updates [@chainbound_](https://twitter.com/chainbound_).

## References
1. https://ethernodes.org/networkType/Hosting