---
sidebar_position: 1
title: Introduction
---
**Fiber Network** is a global network of nodes that connect to the Ethereum peer-to-peer (p2p) networking layer. Fiber nodes are internally connected over a private network ensuring fast, global message propagation. **Fiber** can be leveraged for the following:
* Real-time **monitoring** of pending transactions on Ethereum (the "mempool")
* Real-time updates on validated states in the form of Ethereum blocks
* Efficiently **broadcasting** transactions to the Ethereum network

:::info
If you're interested in trying it out, join our [Discord](https://discord.gg/J4KNdeCYGX).
:::

## Motivation
**P2P gossip networks are at the core of how blockchains like Ethereum operate**. The continuous propagation of messages is what builds the actual chain. However,
message propagation on p2p gossip networks is **not always optimal or reliable**.
Due to the inherent properties of p2p gossip networks that run over the public internet, messages can be **delayed** or even **dropped**.

For some use cases, such as high-frequency trading (HFT), it is crucial to have
the most up-to-date information about the blockchain state (blocks), and
pending state transitions (transactions, or the mempool). Besides that, it is
unacceptable to miss any messages, as this can lead to missed opportunities.

The unusual thing about HFT on blockchains is that an opportunity (*target
transaction*) **can
come from anywhere in the world**, in contrast with traditional HFT. So again,
it's crucial that we are connected to as many peers as possible across the
globe, to minimize **source latency**.

We provide optimized streams of p2p messages like transactions and blocks that
are ideal for these use cases.
Fiber caters to quant funds, searchers, research companies and in general anyone looking optimize blockchain execution.

In practice, Fiber Network does so by deploying [Fiber Nodes](#fiber-nodes)  **across the globe**, with higher **concentration
in high-activity regions**.

A simplified overview can be seen in the diagram below:

![](/img/fiber-network.png)

After a user is done processing a transaction and has found an opportunity, **they need their transaction broadcasted as fast as possible**, to arrive at the block builder / block producer before the competition. Again,
**we don't know where the final block builder / producer is going to be**, and especially with Proof of Stake, a validator can be anywhere.
This is basically step 1 in reverse, and the global connectivity of Fiber Network to a high amount of peers will make
sure the user has the lowest latency to the block producer as possible.
We call this **target latency**.

## Principles
Fiber Network was built with the following principles in mind:
#### Fairness
We will not introduce artificial latency based on price plans, nor unnecessarily cap the amount of transactions you can send.
#### Reliability
Fiber is a fault-tolerant system, and we aim to be the most reliable player in the mempool service game.
#### Visibility
We will offer a variety of tools to observe and troubleshoot any strategies.
#### Adaptiveness
The P2P network is always changing and adapting, and Fiber will change with it.

## Concepts

### Fiber Nodes

Fiber Nodes (FN) are the individual nodes that make up the Fiber Network. They essentially consist of 3 services:
- Communication service with the Ethereum network ([devp2p](https://github.com/ethereum/devp2p)
- Internal messaging service: a service that shares messages internally over the Fibernet.
- gRPC based API

![](/img/fiber-node.png)

Each node can connect to a considerable amount of peers (depending on the resources of the underlying machine / container), ensuring great visibility of new transactions (”mempool”) and newly produced blocks.

### Fiber Network
The crucial part to understand here is that the nodes are connected as a mesh network over high-speed cross-region links, and Ethereum messages are efficiently binary encoded for maximum speed.
This ensures that when an Ethereum message (transaction or block) enters the Fibernet through **node A in Virginia**, and needs to get to **node B in Frankfurt**
(for getting to the block producer for example), the link between these 2 nodes will be the best possible path for getting there. [1]

### Indexing
See [FiberDB](./fiberdb.md).

Every transaction and every block that’s seen on a node gets sent to a central indexing service along with the following properties:

- Metadata about the Fiber Node (location)
- Timestamp
- What node the block / transaction came from (either a devp2p peer or another FN)

All this information can be used for things like **optimizing the p2p layer, tracing blocks and transactions, measuring latency, and anything else you can think of.**

## Footnotes
1. It is possible that the direct link between these 2 nodes is down / flaky, but because all Fiber Nodes relay all newly seen transactions,
a third node (say in London) will relay the transaction itself, with only a tiny latency increase.
