---
sidebar_position: 5
title: Roadmap
---

## Phase 1: now

**Done**

- Working product on AWS with small user base
- 3 client implementations (Go, Rust, JS)
- Transaction stream that's about 5-10% faster than Bloxroute
- Basic transaction filtering
- API for sending transactions
- Deployed across 13 regions
- Database that indexes all transactions and a tool for tracing them ([link](/docs/usage/tracing))
- Stats dashboard ([link](http://fiber-stats.chainbound.io/d/h4zwdDK4z/fiber-stats?orgId=1&refresh=30s))
- High performance internal messaging network
- Tool for injecting fiber transactions into a local mempool ([link](/docs/usage/fiber-inject))

**To Do**
- [ ] Implement block propagation
- [ ] Python client
- [ ] Rewrite in Rust for better performance, stability and resource efficiency
- [ ] Implement peer selection algorithm for best network topology
- [ ] Exclusive peering connections with builders for better propagation times
- [ ] More observability tooling and metrics for debugging, research and overall better monitoring
- [ ] Tools for utilizing the index database:
    - Maps for tracing transactions
    - Identifying heavy transaction broadcasters
    - Seeing network hotspots

## Phase 2: private order flow
- Connecting to block builders and offering private transactions to our customers. Users would be able to send their transactions to builders of choice, with a couple of additional features:
    - Optional kickback rewards from MEV
    - Transaction & bundle simulation
    - Revert protection

## Phase 3: block building
- Use the existing customer base and private transaction features as a base for our own block building solution

## Phase 4: expand to rollups & other chains
- Rollups are probably going to capture a large market share, because of their fast confirmation times, security and low transaction fees.
- Currently, rollups are maintained by a single sequencer that takes in transactions. These transactions are then streamed on the sequencer API to anyone that’s interested. For capturing MEV, people will co-locate with this sequencer.
- In the future, sequencing will be a decentralized process, which means that there will be many sequencers across the world. Fiber could take a similar approach as it does now, and co-locate with the biggest sequencers to provide fast access to searchers everywhere.
- We can also expand to other chains, re-using a large part of the already built technology stack.
- Explore Cosmos ecosystem, specialized solution for dYdX market makers for example.