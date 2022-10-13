---
sidebar_position: 3
title: FAQ
---

#### Do I need a blockchain node to use Fiber Network?

No. You can connect to the API without needing a blockchain node.
#### Can I connect using Websockets?
No, for now the only way to connect is using one of the above client packages. The reason is that gRPC streams are a little bit faster, but we’re planning to implement Websocket support soon.
#### Is Fiber Network faster than Bloxroute?
See benchmarks section below. We also did a small number of backrunning challenges, and Fiber was faster 4 out of 5 times. For blocks, Bloxroute is still faster (though not always), presumably because of direct connections and their block compression techniques.