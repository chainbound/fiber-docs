---
sidebar_position: 5
title: Roadmap
---

## Phase 1: **Fiber** goes Live!  
#### _September -> November '22_

- [x] MVP deployment on AWS instances across 4 regions  
- [x] Introduction of Basic Transaction Filtering  
- [x] API Implementation to send transactions ([link](/docs/usage/api))  
- [x] Deploy across 13 AWS regions  


_Preliminary results: ~120ms faster than Infura (median) and ~5/10% faster than Bloxroute_
## Phase 2: **Fiber** optimizoooor
#### _December '22 -> January '23_  

- [x] Release **fiber-inject** - full node sidecar for injecting **Fiber** transactions into local mempool over p2p ([link](/docs/usage/fiber-inject))  
- [x] Set database for transaction indexing and tracing ([link](/docs/usage/tracing))
- [x] Upgrade internal messaging network with ~2x throughput and improved latency  
- [x] Release **fiber-stats**: dashboard for performance monitoring ([link](http://fiber-stats.chainbound.io/d/h4zwdDK4z/fiber-stats?orgId=1&refresh=30s&from=now-5m&to=now))
- [ ] Release **Fiber v0.1.0-beta**
  - [ ] [Reth](https://github.com/paradigmxyz/reth) integration for a solid base networking layer that can be chain-agnostic
  - [ ] Block stream 
  - [ ] Implementation of peer-selection-algorithm for optimized network topology  
- [ ] Development of observability tools and metrics for debugging, research and system monitoring  
- [ ] Release **fiber-monitor** - system to monitor  major network transaction broadcasters and hotspots
- [ ] Release `fiber-py` - Fiber client in python  

## Phase 3: Privatizing the order-flow
#### _January -> March '23_

- [ ] Beta deployment of **fiber-flow**
  - [ ] Private order-flow system with direct connections to block builders
  - [ ] Unified endpoint for submitting bundles to block builder RPCs, with conditional cancellations and deadlines
- [ ] Production deployment of **fiber-flow** including:
  - [ ] Kickback rewards from MEV  
  - [ ] Transaction & bundle simulation  
  - [ ] Revert protection  

## Phase 4: Block-Builders 2.0
#### _March -> April '22_
- [ ] Release of **fiber-builder** - Dedicated Fiber block-builder, leveraging Fiber network and **fiber-flow**

## Phase 5: Expansion
#### _Q3/4 '23_
- [ ] Release of **fiber-polygon** - Fiber implementation for the Polygon blockchain  
- [ ] Release of **fiber-avax** - Fiber implementation for the Avalanche blockchain  


_At Chainbound we believe the future is in the proliferation of rollups. These will capture the majority of blockchain activity and 
Ethereum will transition into a global settlement layer.
Right now, rollups do not have a public mempool as a single sequencer (normally run by the rollup foundation) manages validation, 
sequencing and batching. In the future, validation will become decentralized, as anyone will be able to run sequencers. 
At that point Fiber will:_   

- [ ] Launch on L2s  
- [ ] Develop co-location services with sequencers to provide fast access to newly validated states  


_Rollups currently in this roadmap are `Arbitrum` and `Optimism`_
  