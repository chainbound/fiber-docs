---
sidebar_position: 5
title: Roadmap
---

:::caution
This space is constantly changing and we’re hesitant to commit to a certain roadmap, because at any point in time, 
new developments could (directly or indirectly) completely change our course.
:::

## Phase 0
### Overview
This phase is where we’re at now. It basically entails optimizing Fiber and building better tooling and UX.

### Current features

- Highly performant and reliable Rust deployment on AWS
- 13 nodes across 10 regions
- Transaction and block streams with transaction filtering
- Client libraries in 3 languages: [Rust](https://github.com/chainbound/fiber-rs), [Go](https://github.com/chainbound/fiber-go), and [TypeScript](https://github.com/chainbound/fiber-ts)
- API endpoints for sending and back-running transactions
- TimescaleDB that indexes transactions and blocks along with location and time metadata
- Release [benchmarking tool](https://github.com/chainbound/fiber-benchmarks) to compare other mempool services vs Fiber
- Faster transaction stream than Bloxroute (median 11ms, Fiber wins 80% of the time)

### To Do

- [ ]  Static peering options to directly connect devp2p between Fiber and a customer's local node
- [ ]  Optimize consensus layer networking for lower latency block stream
- [ ]  Implement peer selection algorithm for best possible network topology
- [ ]  Improvements for discarding stale / invalid transactions
- [ ]  Scale up by deploying more nodes (if necessary)
- [ ]  Python client library
- [ ]  Specialized block and transaction explorer front-end: **Fiber p2p explorer**
    - Maps for tracing transactions & blocks
    - Finding active transaction broadcasters
    - Identifying active validators

## Phase 1

### Overview
This phase is where we integrate more with the ecosystem that Flashbots has set up. 
At some point, we would like to segway into block building, and potentially SUAVE, - this would be our entry point.

### To Do

- [ ]  Fiber RPC that aggregates all builder endpoints (currently each builder has their own endpoint)
    - Similar to Flashbots Protect RPC, but across all builders for faster inclusion and front-running protection
- [ ]  Specialized searcher API
    - **API that connects to all block builders**, that provides all the functionality a block builder provides (submitting bundles and private transactions), but along with policies for specifying which builders to submit to, conditional cancellations and timeouts etc. Area for further exploration.
    - **Distributed simulation platform**: a set of globally distributed full-nodes connected to the Fiber Network, optimized for transaction and bundle simulation. Very up-to-date state due to Fiber, so should be faster than anyone trying to build this themselves. We can leverage reth (or a patched version) for this. We also want to experiment with specialized simulation (i.e. more simulation parameters than are usually available).
    - **When we want to run our own builder later in the roadmap, we can leverage the order flow we would receive from this.**
    - Integrate with [MEV-Share](https://collective.flashbots.net/t/mev-share-programmably-private-orderflow-to-share-mev-with-users/1264): become a matchmaker

## Phase 2
:::info
This phase is completely dependent on the direction sequencer decentralization takes, and also on when it happens. 
There’s still a lot of research being done on the ordering policies to be used in a decentralized setup (i.e. Chainlink FSS, FBA-FCFS and more), 
so it might still be some time off.
:::

### Overview

This phase is where we need to look at other domains. Since Flashbots, latency isn’t the primary auction mechanism for extracting MEV on Ethereum anymore. 
It still provides an edge (some blocks are not built by mev-boost, meaning that traditional ordering still applies), 
and used alongside Flashbots, there are some advantages as well. But in general, we feel like we need to expand the product offering to remain competitive.

We choose to look at L2s primarily because we believe that’s where most blockchain activity will happen in the future. 

We also want to provide support for the ERC4337 mempool, since searchers and builders (our customers) will probably also be the ERC4337 bundlers.

**To discuss: do we look at the Cosmos ecosystem here as well?**

### To Do

- [ ]  Become part of the decentralized sequencer set on rollups like Optimism, Arbitrum, Fuel, Starknet, ZkSync. 
  - This is a pre-requisite to provide any service there since the L2 mempools will most likely be permissioned (we don’t actually need to have a sequencer if we just have points of presence at every one of the sequencer sets, who stream transactions any way. However, if there is an ordering mechanism like [FBA-FCFS](https://research.arbitrum.io/t/transaction-ordering-policy/127/2), which takes *****some***** time to reach order consensus, there might be a non-trivial delay between the broadcast and the publish on the API, since the API should only publish the canonical L2 order).
- [ ]  Adapt / develop respective L2 nodes to meet performance / latency requirements
- [ ]  Build a highly performant API, possibly with co-location services
- [ ]  ERC4337 `userOps` stream for bundlers

## Phase 3

### Overview

Use the existing customer base and the searcher API from phase 2 for our own **block builder**. 

### To Do

- [ ]  Planning to explore AI, symbolic execution, FPGAs and other technologies (as well as our low-latency learnings) for building the best blocks
- [ ]  TBD

## Research

### Overview

Aside from building, we would also like to be involved in research to help the overall ecosystem. Below we list some of the topics we’re interested in:

### Topics

- Encrypted mempools (SGX, threshold encryption, delay encryption, witness encryption)
- Libp2p and overall p2p networking optimizations
- Sequencer decentralization and fair sequencing
- Shared sequencer sets
- MEV in general
- Optimizing EVM execution (options for parallellization, eWASM revisit)
- Alternative smart contract VMs (Fuel VM, Aptos, CosmWasm, …)
- Light clients
- DA layers like Celestia
- …