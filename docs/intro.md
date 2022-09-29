---
sidebar_position: 1
title: Introduction
---
# Fiber Network

:::info
💡 Looking for alpha testers! Please contact me on Discord **@mempirate | Chainbound#8926**, or on Twitter [@mempirate](https://twitter.com/mempirate).

**The testing phase is currently in progress, you can still participate!**
:::

## Introduction

Fiber Network is a global network of sentries that connect to the Ethereum p2p networking layer. These sentries (Fiber Nodes) are connected to each other with a high-speed connection, allowing them to quickly send Ethereum messages from one part of the world to the other. This can be leveraged into a global and almost real-time overview of new transactions and blocks, like [Bloxroute](https://bloxroute.com/) and their BDN.

## Concepts

### Fiber Nodes

Fiber Nodes (FN) are the individual nodes that make up the Fiber Network. They essentially consist of 2 interfaces: an interface for communication with the Ethereum network ([devp2p](https://github.com/ethereum/devp2p) implementation), and an interface for sharing messages internally over the Fibernet (custom [pubsub](https://cloud.google.com/pubsub/docs/overview) implementation with [gRPC](https://grpc.io/)).

Each of the nodes is a very lightweight implementation that is just the Ethereum p2p stack without a state database or EVM, **making it possible to deploy a large swarm of them across regions, countries and datacenters (cloud providers), at relatively low cost**.

Each node can connect to a considerable amount of peers (depending on the resources of the underlying machine / container), ensuring great visibility of new transactions (”mempool”) and newly produced blocks.

### Fiber Network

The crucial part to understand here is that the nodes are connected as a mesh network over specialized, high-speed links, and Ethereum messages are efficiently binary encoded for maximum speed. This ensures that when an Ethereum message (transaction or block) enters the Fibernet through **node A in Virginia**, and needs to get to **node B in Frankfurt** (for getting to the block producer for example), the link between these 2 nodes will be the best possible path for getting there. [1]

### Indexing

Every transaction and every block that’s seen on a node gets sent to a central indexing service along with the following properties:

- Metadata about the Fiber Node (location)
- Timestamp
- What node the block / transaction came from (either a devp2p peer or another FN)

All this information can be used for things like **optimizing the p2p layer, tracing blocks and transactions, measuring latency, and anything else you can think of.**

## Usage

Users will be able to connect to the closest node nearby over a gRPC API. We offer the following client packages to make this connection process as easy as possible:

| Programming Language | Package |
| --- | --- |
| JavaScript / TypeScript | [fiber-ts](https://github.com/chainbound/fiber-ts) |
| Golang | [fiber-go](https://github.com/chainbound/fiber-go) |
| Python | fiber-py (WIP) |
| Rust | [fiber-rs](https://github.com/chainbound/fiber-rs) |

:::info
If you want to build your own client (or help with the WIP implementations), all you need are the protobuf / gRPC files and a compiler for your language. Documentation for different gRPC language implementations can be found at [https://grpc.io/docs/languages](https://grpc.io/docs/languages/). The Fiber protobuf definitions are at [https://github.com/chainbound/fiber-proto](https://github.com/chainbound/fiber-proto). For examples of how to actually use it (API authentication), please refer to the already implemented packages.
:::

The API consists of 4 general methods:

- `subscribeNewTxs`: endpoint for opening a subscription to any new transaction that the node receives, either from the Fibernet or the devp2p network. These transactions are immediately sent to the subscription, which means they have not been verified. This is to provide the fastest possible delivery.
- `subscribeNewBlocks`: same as above but for newly mined blocks.
- `sendTransaction`: endpoint for sending transactions to be propagated across the network.
- `sendRawTransaction`: endpoint for sending a raw RLP encoded transaction. This is useful when you’re using libraries like **ethers** or **web3** with JavaScript.
- `backrunTransaction`: endpoint for sending pairs of transactions to be propagated across the network, to ensure that they arrive at the block producer in the correct order. You can think of this as less reliable Flashbots bundles, just by making use of the p2p layer.
- `rawBackrunTransaction`: same as above but for RLP encoded signed transactions.

## FAQ

- *Do I need a blockchain node to use Fiber Network?*

  **⇒ No. You can connect to the API without needing a blockchain node.**
- *Can I connect using Websockets?*

  **⇒ No, for now the only way to connect is using one of the above client packages. The reason is that gRPC streams are a little bit faster, but we’re planning to implement Websocket support soon.**
- *Is Fiber Network faster than Bloxroute?*

  **⇒ See benchmarks section below. We also did a small number of backrunning challenges, and Fiber was faster 4 out of 5 times. For blocks, Bloxroute is still faster (though not always), presumably because of direct connections and their block compression techniques.**

## Benchmarks

Benchmarks are against the Bloxroute Enterprise plan.

### Transactions

For 50000 transactions, we get the following results (outliers filtered):

| Consumer: EU West (AMS) | Seen first | Mean | Median |
| --- | --- | --- | --- |
| Fiber Network (15 nodes) | 74.91% | 22ms | 14ms |

| Consumer: US East (VINT HILL) | Seen first | Mean | Median |
| --- | --- | --- | --- |
| Fiber Network (15 nodes) | 92.79% | 57ms | 56ms |

**Sources**

* [blxr_benchmark_ams.csv](/files/blxr_benchmark_ams.csv)

* [blxr_benchmark_us_east.csv](/files/blxr_benchmark_us_east.csv)

**Network Topology**

![21_09_setup.png](/img/21_09_setup.png)

### Blocks

WIP 🏗️

Since the merge, block propagation has moved to a different p2p network (libp2p consensus layer network). This will be implemented in the future.

## Footnotes

1. It is possible that the direct link between these 2 nodes is down / flaky, but because all Fiber Nodes relay all newly seen transactions, a third node (say in London) will relay the transaction itself, with only a tiny latency increase.