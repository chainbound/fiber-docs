---
sidebar_position: 6
title: FAQ
---

### Do I need a blockchain node to use Fiber Network?

No. You can connect to the API without needing a blockchain node.<br />
To do so, you can follow our [Getting started](./usage/getting-started.mdx) guide.

### Can I connect using Websockets?

No, for now the only way to connect is using one of the provided [client packages](./usage/getting-started.mdx#installing). The reason is that gRPC streams are a little bit faster, but we’re planning to implement Websocket support soon.

### Which networks does Fiber support?

For now, only Ethereum. Support for other EVM chains (Polygon, BSC) is planned.
