---
sidebar_position: 2
title: API Design
---

The API currently consists of 6 methods:

### `subscribeNewTxs`

This method opens a subscription in the form of a gRPC stream. The stream will send any new transaction that the node receives, either from the Fibernet
or from full nodes it's connected to. The transactions on this stream have not been validated, and in some cases they can be invalid, so we recommend
having a process for filtering out invalid transactions. The reason Fiber does this is to not introduce any latency in the message path, ensuring fastest possible
delivery.

### `subscribeNewBlocks`

This method opens a subscription in the form of a gRPC stream. The stream will send any new block that are broadcasted on the consensus layer.

### `sendTransaction`

Method for sending signed transactions (with the `v`, `r`, `s` fields populated) to the Fiber Network. Fiber propagates these transactions to all other Fiber nodes, as well as all full nodes it's connected to.

### `sendRawTransaction`

Method for sending a signed RLP encoded transaction. This is useful when you’re using libraries like `ethers` or `web3.js` with JavaScript, or `ethers-rs` with Rust.

### `SendTransactionSequence`

Method for sending a sequence of transactions to be propagated across the network, to ensure that they arrive at the block producer in the correct order.

:::info
This is not enforced in any reliable way, **only** at the p2p network layer.
:::

### `sendRawTransactionSequence`

Same as above, but for RLP encoded signed transactions.
