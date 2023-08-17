---
sidebar_position: 1
title: Introduction
---
**Fiber Network** is a global network of nodes that connect to the Ethereum peer-to-peer (p2p) networking layer.
Fiber nodes are internally connected over a private network ensuring fast, global message propagation. **Fiber** can be leveraged for the following:
* Real-time **monitoring** of pending transactions on Ethereum (the "mempool")
* Real-time updates on validated states in the form of Ethereum blocks
* Efficiently **broadcasting** transactions to the Ethereum network

:::info
If you're interested in trying it out, join our [Discord](https://discord.gg/J4KNdeCYGX).
:::

## Motivation
The functioning of blockchains like Ethereum primarily relies on **peer-to-peer (P2P) gossip networks**. 
The chain is actually formed through the continuous dissemination of messages. 
Nevertheless, the propagation of messages on these networks is not always efficient or dependable. 
Owing to the intrinsic characteristics of P2P gossip networks operating over the public internet, messages may encounter **delays or might even be lost**.

Certain applications, for instance, **high-frequency trading (HFT)**, demand the most current information about the **blockchain's state** (blocks)
and **impending state transitions** (transactions or the mempool). Moreover, missing any messages is not an option as it could result in lost opportunities.

What sets apart HFT on blockchains is that an opportunity, or a 'target transaction,' could originate **from any corner of the world**, 
unlike traditional HFT. Thus, it is critical to **maintain connections with as many peers** globally as possible to reduce 'source latency.'

We offer optimized streams of P2P messages such as **transactions and blocks** that are perfect for these applications. 
_Fiber is tailored to serve quant funds, searchers, research firms, validators and anyone looking to enhance blockchain execution in general._

Fiber Network achieves this by positioning Fiber Nodes worldwide, with a higher density in regions with more activity.

A simplified depiction of this is provided in the diagram below:

![](/img/fiber-network.png)

Once a user has processed a transaction and identified an opportunity, it is essential for their transaction to be broadcasted as swiftly as possible 
to reach the block builder or producer ahead of competitors. We cannot predict where the final block builder or producer will be located, especially with 
Proof of Stake where a validator could be anywhere. The extensive global connectivity of Fiber Network to a large number of peers ensures the user experiences 
the minimal possible latency to the block producer. We refer to this as 'target latency.'

## Guiding Principles

Fiber Network was developed keeping the following principles at the forefront:

#### Equity

We pledge not to implement artificial latency based on pricing tiers, nor will we cap the number of transactions you can send without a valid reason.

#### Dependability

Fiber is designed to be a resilient system with the goal of becoming the most reliable player in the mempool service arena.

#### Transparency

We provide a suite of tools to monitor and troubleshoot any strategies.

#### Adaptability

As the P2P network continually evolves, Fiber also adapts to these changes.

Key Concepts
------------

### Fiber Nodes

Fiber Nodes (FN) are the individual nodes that constitute the Fiber Network. They mainly encompass three services:

- A communication service with the Ethereum network: [devp2p](https://github.com/ethereum/devp2p) on Execution Layer
and [libp2p](https://blog.libp2p.io/libp2p-and-ethereum/) on Consensus Layer.
- An internal messaging service that circulates messages within the Fibernet.
- A gRPC-based API.

![](/img/fiber-node.png)

Each node can establish connections with a substantial number of peers (determined by the resources of the base machine/container), 
guaranteeing excellent visibility of new transactions (termed as "mempool") and recently generated blocks.

### Fiber Network
The key point to grasp here is that the nodes are **interconnected as a mesh network over high-speed, cross-region links,** 
with Ethereum messages efficiently binary-encoded for optimal speed.  

This assures that an Ethereum message (transaction or block) 
entering the Fibernet through a node A located in Virginia and needing to reach a node B in Frankfurt (for instance, to get to the block producer), 
the link between these two nodes will provide the most efficient route. [1]

### Indexing
Refer to [FiberDB](./fiberdb.md) for more details.

Every transaction and block observed on a node is dispatched to a centralized indexing service along with the following attributes:

-   Metadata concerning the Fiber Node (location)
-   Timestamp
-   Information on which node the block or transaction originated from (either a devp2p peer or another Fiber Node)

All this data can be utilized for operations like optimizing the P2P layer, tracking blocks and transactions, measuring latency, among any other uses you can envisage.

**Footnotes**
1. There's a possibility that the direct link between these two nodes is unstable or down. However, because all Fiber Nodes relay all new transactions, a third 
node (perhaps in London) will forward the transaction itself, resulting in only a slight increase in latency.
