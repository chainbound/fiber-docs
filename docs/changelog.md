---
sidebar_position: 7
title: Changelog
---

### 21 September 2023 – Fiber v0.1.8

- New node deployment in Stockholm (eu-north-1) for improved topology
- Fixed bug with sending transactions to Fiber
- Fixed indexer bug with inconsistent node IDs
- A lot of internal improvements and metrics

### 10 August 2023 – Fiber v0.1.7

- New stream types:
  - `NewExecutionPayloads`: this used to be the NewBlocks stream, but we've renamed it to avoid confusion.
  - `NewExecutionHeaders`: a stream of execution payload headers (no transactions). This stream is expected to be 10-30ms faster than the NewExecutionPayloads stream, because the headers get propagated internally without the payload, making them much smaller and faster to propagate.
  - `NewBeaconBlocks`: a stream of beacon blocks stripped out of the execution payload to make it more performant. You can think of this as the beacon block header.
  - For more info, see our [updated docs on the stream types](./usage/streams_sub.mdx).
- Better de-duplication:
  - We've improved our transaction pool design again, and the chances of seeing duplicate / confirmed transactions should be close to 0 now.
- Reliability improvements:
  - Some of you might have noticed the streams sometimes cutting off for a couple of seconds. This issue has been addressed.
- JSON-RPC API:
  - We've added the possibility to connect to Fiber through Websockets with the Ethereum standard JSON-RPC interface. You can find more info in our [JSON-RPC API docs](./usage/json-rpc.mdx).

### 13 July 2023 – Fiber v0.1.6

- Significant improvements to the New Blocks stream:
  - For v0.1.6 we focused on improving our new blocks stream. We benchmarked it against Bloxroute's enterprise plan bdnBlocks stream through the Cloud API, and the results are very positive for Fiber.
- You can now also trace blocks using cbctl: https://github.com/chainbound/cbctl
  - Simply run cbctl fiber trace block --number `<number>`
  - Or cbctl fiber trace block --hash `<hash>`

### 12 June 2023 – Fiber v0.1.5

- Stability and reliability improvements:
  - We had a memory usage regression causing memory leaks with the last upgrade that is now fixed.
- Stale transaction filtering:
  - We reworked the transaction pool implementation for much better validation and stale transaction filtering. The probability of getting a transaction twice is now much lower, and the probability of getting a confirmed transaction should be close to zero.
- Additional node deployments:
  - We've deployed 2 additional nodes for better network coverage in important locations.

### 23 May 2023 – Fiber v0.1.4

- Fixes for yesterday's incident
- Block stream fixes and performance improvements
- A new peer scoring system to maximize p2p network performance
