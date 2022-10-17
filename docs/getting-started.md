---
sidebar_position: 2
title: Getting Started
---
Users can connect to the API at `fiberapi.io:8080`, providing their API key in the process.
The domain will resolve to the closest node to the client, based on latency. To check this latency, just
`ping fiberapi.io` from the same machine as your client.

The API uses gRPC. We offer a number of client packages to make this connection process as easy as possible:

| Programming Language | Package                                               | Documentation |
| ----------------------- | -------------------------------------------------- | ------------- |
| JavaScript / TypeScript | [fiber-ts](https://github.com/chainbound/fiber-ts) | [README](https://github.com/chainbound/fiber-ts#readme)|
| Golang                  | [fiber-go](https://github.com/chainbound/fiber-go) | [README](https://github.com/chainbound/fiber-go#readme)|
| Python                  | fiber-py (WIP)                                     | |
| Rust                    | [fiber-rs](https://github.com/chainbound/fiber-rs) | [README](https://github.com/chainbound/fiber-rs#readme)|

:::info
If you want to build your own client (or help with the WIP implementations), all you need are the protobuf / gRPC files and a compiler for your language. Documentation for different gRPC language implementations can be found at [https://grpc.io/docs/languages](https://grpc.io/docs/languages/). The Fiber protobuf definitions are at [https://github.com/chainbound/fiber-proto](https://github.com/chainbound/fiber-proto). For examples of how to actually use it (API authentication), please refer to the already implemented packages.
:::

## API Design
The API currently consists of 6 methods:

#### `subscribeNewTxs`
This endpoint opens a subscription in the form of a gRPC stream. The stream will send any new transaction that the node receives, either from the Fibernet
or from full nodes it's connected to. The transactions on this stream have not been validated, and in some cases they can be invalid, so we recommend
having a process for filtering out invalid transactions. The reason Fiber does this is to not introduce any latency in the message path, ensuring fastest possible
delivery.
#### `subscribeNewBlocks`
🚧 WIP 🚧
#### `sendTransaction`
Endpoint for sending signed (v, r, s fields populated) to the Fiber Network. Fiber propagates these transactions to all other Fiber nodes, as well as all full nodes
it's connected to.

#### `sendRawTransaction`
Endpoint for sending a signed RLP encoded transaction. This is useful when you’re using libraries like `ethers` or `web3.js` with JavaScript, or `ethers-rs` with Rust.
#### `backrunTransaction`
Endpoint for sending pairs of transactions to be propagated across the network, to ensure that they arrive at the block producer in the correct order. 
:::info
This is not enforced in any reliable way, **only** at the p2p network layer.
:::
#### `rawBackrunTransaction`
Same as above but for RLP encoded signed transactions.

:::caution
The API is not stable and can change in the future. This will be reflected in the client packages.
:::