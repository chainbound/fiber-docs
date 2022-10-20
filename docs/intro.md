---
sidebar_position: 1
title: Introduction
---
**Fiber Network** is a global network of nodes that connect to the Ethereum p2p networking layer. These Fiber Nodes are connected to each other with a high-speed connection, allowing them to quickly send Ethereum messages from one part of the world to the other. This can be leveraged into a global and almost real-time overview of new transactions and blocks.
:::info
If you're interested in trying it out, join our [Discord](https://discord.gg/J4KNdeCYGX).
:::

## Motivation
A lot of DeFi strategies require low latency to transactions, since they represent a pending state change that could
result in financial opportunities. We will group together these strategies, which include [MEV](https://ethereum.org/en/developers/docs/mev/) like 
arbitrage and liquidations, but also things like market making, as **High Frequency Trading** (HFT).

There are a lot of differences with HFT in traditional markets however. Firstly, in traditional markets, all financial data
goes through a centralized exchange. This centralized exchange is usually located in a single geographical area, which means
that organizations wanting fast access to market data will need to **co-locate** with the exchange servers. This is often
prohibitively expensive, and usually reserved only for the big players.

On blockchains, it doesn't work like that. A low latency strategy on a blockchain usually consists of 3 steps:
1. **Listening**: this step is concerned with listening to the p2p network for opportunities which come in the form of
transactions or blocks.
2. **Processing**: this step processes transactions and blocks, and decides whether there are opportunities that can
be captured or not. For example: an arbitrage bot looking for price discrepancies across different DEXes.
3. **Broadcasting**: if the previous step produced a transaction to capture
an opportunity, this transaction needs to be broadcasted to the network.

Each of these steps needs to happen as quickly as possible to get the highest chance of capturing the opportunity.
The special thing about HFT on blockchains is that an opportunity (*target transaction*) **can
come from anywhere in the world**, in contrast with traditional HFT. It's true that these transactions will often come from centralized services like Infura
and Alchemy, which have servers in known locations, but that's not always the case. So for step 1, it's crucial
that we are connected to as many peers as possible across the globe, to make sure we receive the target transactions ASAP.

This is where Fiber Network steps in. We have deployed [Fiber Nodes](#fiber-nodes) distributed **across the globe**, as well as **concentrated
in high-activity regions**, to make sure our users receive any target transactions before anyone else. A simplified
overview can be seen in the diagram below:

![](/img/fiber-network.png)

In step 3, after a user is done processing a transaction and has found an opportunity, **they need their transaction broadcasted as fast as possible**, to arrive at the block builder / block producer before the competition. Again,
**we don't know where the final block builder / producer is going to be**, and especially with Proof of Stake, a validator
can be anywhere.
This is basically step 1 in reverse, and the global connectivity of Fiber Network to a high amount of peers will make
sure the user has the lowest latency to the builder / producer as possible.

## Principles
Fiber Network was built with the following principles in mind:
#### Fairness
We will not introduce artificial latency based on price plans, nor unnecessarily cap the amount of transactions you can send.
#### Visibility
We will offer a variety of tools to observe and troubleshoot any strategies.

## Concepts

### Fiber Nodes

Fiber Nodes (FN) are the individual nodes that make up the Fiber Network. They essentially consist of 3 services: 
a service for communication with the Ethereum network ([devp2p](https://github.com/ethereum/devp2p) implementation), 
a service for sharing messages internally over the Fibernet, and a [gRPC](https://grpc.io/) based API.

![](/img/fiber-node.png)

Each node can connect to a considerable amount of peers (depending on the resources of the underlying machine / container), ensuring great visibility of new transactions (”mempool”) and newly produced blocks.

### Fiber Network

The crucial part to understand here is that the nodes are connected as a mesh network over high-speed cross-region links, and Ethereum messages are efficiently binary encoded for maximum speed. This ensures that when an Ethereum message (transaction or block) enters the Fibernet through **node A in Virginia**, and needs to get to **node B in Frankfurt** (for getting to the block producer for example), the link between these 2 nodes will be the best possible path for getting there. [1]

### Indexing
Every transaction and every block that’s seen on a node gets sent to a central indexing service along with the following properties:

- Metadata about the Fiber Node (location)
- Timestamp
- What node the block / transaction came from (either a devp2p peer or another FN)

All this information can be used for things like **optimizing the p2p layer, tracing blocks and transactions, measuring latency, and anything else you can think of.**

## Footnotes
1. It is possible that the direct link between these 2 nodes is down / flaky, but because all Fiber Nodes relay all newly seen transactions, a third node (say in London) will relay the transaction itself, with only a tiny latency increase.