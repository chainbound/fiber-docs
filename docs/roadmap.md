---
sidebar_position: 5
title: Roadmap
---

## Phase 1: **Fiber** goes Live!  
#### _September -> November '22_

:white_check_mark: `FIBER` MVP Deployment on AWS instances across 4 regions  
:white_check_mark: Introduction of Basic Transaction Filtering (`BTF`)  
:white_check_mark: API Implementation to send transactions ([link](https://fiber.chainbound.io/docs/usage/api))  
:white_check_mark: `FIBER` deployment across 13 regions  


_Preliminary results: ~2.5s faster than Infura and ~5/10% faster than Bloxroute_

## Phase 2: **Fiber** opminizaatooor
#### _December '22 -> January '23_  

:white_check_mark: Set database for transaction indexing and tracing ([link](/docs/usage/tracing)), further adds-on include:
- [ ] Develop mapping algorithm for transactions tracing  
- [ ] Release `FIBER-monitor` - system to monitor  major network transactions broadcasters and transactions hotspots  

:white_check_mark: Release `FIBER-dash` dashboard for system performance monitoring ([link](http://fiber-stats.chainbound.io/d/h4zwdDK4z/fiber-stats?orgId=1&refresh=30s))  
:white_check_mark: Upgrade internal messaging network with ~2x performance throughput  
:white_check_mark: Deployment of `FIBER-inject` - `geth` implementation with extended `FIBER` mempool ([link](/docs/usage/fiber-inject))
- [ ] Deployment of `FIBER-block` - tool to monitor block propagation
- [ ] Release `fiber-py` - Fiber client in python
- [ ] Implementation of peer-selection-algorithm for optimized network topology
- [ ] Development of observability tools and metrics for debugging, research and system monitoring

## Phase 3: Privatizing the order-flow
#### _January -> March '23_

- [ ] Beta deployment of `FIBER-flow` - private order-flow system with direct connections to block-builders
- [ ] Production deployment of `FIBER-flow` including:
    -  [ ] Kickback rewards from MEV
    -  [ ] Transaction & bundle simulation
    -  [ ] Revert protection

## Phase 4: Block-Builders 2.0
#### _March -> April '22_
- [ ] Release of `FIBER-builder` - Dedicated fiber block-builder, leveraging Fiber network and `FIBER-flow`-

## Phase 5: Rolling up **Fiber**
#### _Q3/4 '23_
- [ ] Release of `FIBER-polygon` - Fiber implementation for Polygon blockchain
- [ ] Release of `FIBER-avalanche` - FIBER implementation for Avalanche blockchain


_At Chainbound we believe the future is in the proliferation of rollups. These will capture majority of blockchain activity and etherum will transition into settlement layer.
Right now, rollups do not have a public mempool as single sequencer (normally run by the Roolup-Foundation) manage validation. 
In the future, validation will become decentralized, as anyone will be able to run a sequencers. At that point Fiber will:_
- [ ] Launch `FIBER`, `FIBER-monitor`, `FIBER-block` on L2s
- [ ] Develop co-location services with sequencers to provide fast access to new validated states  


_Rollups currently in this roadmap are `Arbitrum` and `Optimism`_
  