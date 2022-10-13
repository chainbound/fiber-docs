---
sidebar_position: 2
title: Getting Started
---
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

The API consists of 6 general methods:

- `subscribeNewTxs`: endpoint for opening a subscription to any new transaction that the node receives, either from the Fibernet or the devp2p network. These transactions are immediately sent to the subscription, which means they have not been verified. This is to provide the fastest possible delivery.
- `subscribeNewBlocks`: same as above but for newly mined blocks.
- `sendTransaction`: endpoint for sending transactions to be propagated across the network.
- `sendRawTransaction`: endpoint for sending a raw RLP encoded transaction. This is useful when you’re using libraries like **ethers** or **web3** with JavaScript.
- `backrunTransaction`: endpoint for sending pairs of transactions to be propagated across the network, to ensure that they arrive at the block producer in the correct order. You can think of this as less reliable Flashbots bundles, just by making use of the p2p layer.
- `rawBackrunTransaction`: same as above but for RLP encoded signed transactions.