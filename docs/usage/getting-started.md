---
sidebar_position: 1
title: Getting Started
---
Users can connect to the API at `fiberapi.io:8080`, providing their API key in the process.
The domain will resolve to the closest node to the client, based on latency (check out the [regions](/docs/regions) for where this will be). To check this latency, just `ping fiberapi.io` from the same machine as your client.

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
