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


_Preliminary results: ~120ms faster than Infura (median) and ~5/10% faster than Bloxroute_
## Phase 2: **Fiber** optimizoooor
#### _December '22 -> January '23_  

:white_check_mark: Set database for transaction indexing and tracing ([link](/docs/usage/tracing)), further add-ons include:  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:black_square_button: Develop mapping algorithm for transactions tracing  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:black_square_button: Release **fiber-monitor** - system to monitor  major network transactions broadcasters and transactions hotspots  
:white_check_mark: Release **fiber-stats**, a dashboard for system performance monitoring ([link](http://fiber-stats.chainbound.io/d/h4zwdDK4z/fiber-stats?orgId=1&refresh=30s))  
:white_check_mark: Upgrade internal messaging network with ~2x throughput and improved latency  
:white_check_mark: Release **fiber-inject** - full node sidecar for injecting **Fiber** transactions into local mempool over p2p ([link](/docs/usage/fiber-inject))  
:black_square_button: Deployment of **fiber-blockmon** - tool to monitor block propagation  
:black_square_button: Release `fiber-py` - Fiber client in python  
:black_square_button: Implementation of peer-selection-algorithm for optimized network topology  
:black_square_button: Development of observability tools and metrics for debugging, research and system monitoring  

## Phase 3: Privatizing the order-flow
#### _January -> March '23_

:black_square_button: Beta deployment of **fiber-flow** - private order-flow system with direct connections to block-builders  
:black_square_button: Production deployment of **fiber-flow** including:  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:black_square_button: Kickback rewards from MEV  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:black_square_button: Transaction & bundle simulation  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:black_square_button: Revert protection  

## Phase 4: Block-Builders 2.0
#### _March -> April '22_
:black_square_button: Release of **fiber-builder** - Dedicated Fiber block-builder, leveraging Fiber network and **fiber-flow**

## Phase 5: Rolling up **Fiber**
#### _Q3/4 '23_
:black_square_button: Release of **fiber-polygon** - Fiber implementation for the Polygon blockchain  
:black_square_button: Release of **fiber-avax** - Fiber implementation for the Avalanche blockchain  


_At Chainbound we believe the future is in the proliferation of rollups. These will capture majority of blockchain activity and etherum will transition into a global settlement layer.
Right now, rollups do not have a public mempool as a single sequencer (normally run by the rollup foundation) manages batching and validation.
In the future, validation will become decentralized, as anyone will be able to run sequencers. At that point Fiber will:_   

:black_square_button: Launch **fiber**, **fiber-monitor**, **fiber-block** on L2s  
:black_square_button: Develop co-location services with sequencers to provide fast access to newly validated states  


_Rollups currently in this roadmap are `Arbitrum` and `Optimism`_
  