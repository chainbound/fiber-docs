---
sidebar_position: 6
title: FAQ
---

#### Do I need a blockchain node to use Fiber Network?
No. You can connect to the API without needing a blockchain node.

#### Can I connect using Websockets?
No, for now the only way to connect is using one of the above client packages. The reason is that gRPC streams are a little bit faster, but we’re planning to implement Websocket support soon.

#### Which networks does Fiber support?
For now, only Ethereum. Support for other EVM chains (Polygon, BSC) is planned.

#### Is Fiber faster than Bloxroute Enterprise?
Yes, but by how much varies by location. To check this for yourself, you can use our [benchmarking tool](https://github.com/chainbound/fiber-benchmarks).