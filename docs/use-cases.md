---
sidebar_position: 2
title: Use Cases
---
**Fiber is accessible via API, facilitating seamless streaming and propagation of data across Ethereum Networks.**

_Consequently, the need for deploying and maintaining individual full nodes is rendered unnecessary. 
By abstracting away the complexities of node infrastructure, Fiber simplifies the process of accessing_ **real-time data 
across Consensus and Execution layers.**

The distributed nature of the network allows for transactions to be processed and propagated **more efficiently than other services** (eg. RPC providers or mempool services) and single nodes.

:::info
If interested in testing Fiber's performances, clone [fiber-benchmarks](https://github.com/chainbound/fiber-benchmarks) repo and benchmark it yourself! 

In this [article](https://fiber.chainbound.io/blog/fiber-vs-bloxroute) we outline the results gathered in Q1 '23.
:::

## 1. Searchers & Builders

### 1.1 MEV Capturing
Low latency access to mempool data gives **searchers** and **builders** a latency and reliability advantage over the competition.  

On the Execution Layer (EL), Fiber provides the `NewTransactions` stream, which returns new transactions that are propagated across the Ethereum mempool.

The stream can be leveraged to deploy MEV strategies, as:
* DEX Arbitrage
* Liquidity Sniping
* NFT Sniping
* Liquidations
* PGAs (Priority Gas Auctions)
* Long-tail MEV

:::note
As of July '23 we observe **~85% of transaction being submitted via the mempool**, the remaining 15% is submitted via Private 
Order Flows (POFs). Given, `NewTransactions` has proven to be the fastest and most reliable stream of mempool data over multiple time periods, we believe 
**Builders** and **Searchers** should integrate the stream to maximize their MEV capturing potential.

_ps. In the future, we are looking to provide live stats on mempool vs POFs transaction submission flows, giving more data to 
evaluate Fiber effectiveness in this specific use-case._ 
:::

### 1.2 Transaction Inclusion Receipts
Fiber can also be leveraged by **Builders** and **Searchers** that are looking to confirm asap the inclusion of their transactions in the most recent block.
On the Consensus Layer, Fiber provider the `execution_payload` stream, which abstracts the payload from `BeaconBlockBody` and returns it as a separate stream.
Subscription to this stream allows Builders and Searchers to **reduce transaction confirmation time** by 40ms-200ms, compared to other services, such as Bloxroute. 

To note, some applications include:
* **Stat-Arb:** Decrease the time to confirm on-chain transactions inclusion allows for more accurate hedging on CEXs
* [...]

### 1.3 Transaction Propagation
Via the `sendTransaction` API endpoint, builders and searchers are able to **submit transactions** to the Ethereum network via Fiber. 
This has many use-cases, including:
* **Redundancy in transaction submission** - Fiber can be used as a backup to their main transaction submission service
* [...]

:::warning
Fiber is not integrated with any Private Order Flow (POF) provider, therefore users should be mindful of front-running attacks when submitting.
:::

## 2. Systematic Risk Minitagation
### 2.1 Hacks Detection & Prevention
Hackers are constantly looking for new ways to exploit vulnerabilities in smart contracts. 

With Fiber's stream, protocols and applications can track events in real-time to detect and prevent hacks, examples include:
* Automated **defensive measures** to protect users and funds (eg. hack-prevention via front-running malicious users)
* Automated **detection of hacks** and exploits with real-time alerts 
* Real-time **anomaly detection** in smart contracts deployments and transactions

`TODO: Insert image depicting hack detection and prevention via Fiber`

## 3. Validators & Stakers
### 3.1 FiberGuard
:::note
**Attestations account for ~85% of the total validators yield** over time. After Altair upgrade, attestations are highly sensitive to latency, these 
require to be submitted with a `slot_delay` not larger than 1 else **will miss on more than 20%** of the potential reward 
(read [here](https://eth2book.info/capella/part2/incentives/rewards/) for more).

The following chart shows the **validator's reward** over time, outlining the importance of `slot_delay` minimization.

![](/img/validators_reward.png)
:::

Validators can leverage the `NewBeaconBlocks` stream to boost their performances and latency via **FiberGuard**. 
This is particularly useful for validators that are running on cloud providers, where the latency is higher than on-premise setups.

Via **FiberGuard**, `NewBeaconBlocks` stream can be leveraged by validators to improve their performance by:
1. Reduce streaming latency of `BeaconBlockBody` by **up to 1 seconds**, compared to a single node setup, and **50-200ms** compared to other services.
2. **Increase the reliability** and up-time of validators by leveraging the distributed nature of the Fiber network.
3. **Reduce the cost** of running a validator by decreasing risks of slashing due to downtime or missed attestations.

:::info
FiberGuard allows validators to connect to the stream via **direct/trusted peering connections**, allowing easy integration with existing setups.
:::

## 4. High-Frequency Trading
### 4.1 Signal generation
High Frequency Trading (HFT) across TradFi, CeFi and DeFi requires access to real-time data to generate signals and execute trades.
Fiber provides a reliable and **low-latency stream of the most up-to-date state** (block) on Ethereum, giving trading shop a competitive edge over their competitors.

Two Fiber streams can be leveraged by HFTs:
* By subscribing to `NewExecutionPayload`, HFTs can process transactions, included in the most recent block, before the competition. 
* HFTs can also subscribe to `NewTransactions` stream to process pending transactions and generate signals based on 
**statistical probability of transactions inclusion** in the next block.

Some benefits of using Fiber for HFT execution across TradFi, CeFi and DeFi include:
* Better **informed Decision-Making** trading logic
* More granular understanding of **Trends and Patterns**
* Ability to **backtest and validate** trading strategies via `FiberDB`

## 5. Research
### 5.1 P2p Network Explorations
:::note
Ethereum is by far the most decentralized EVM blockchains in terms of nodes distribution across geo-locations. 
The geo-distribution diversity of Ethereum nodes lays the ground for many interesting 
analysis and explorations of the **propagation of messages** across the Ethereum network. 

The analysis of ETH p2p network would be impossible to perform with a single node, or even a small cluster of nodes, but thanks to Fiber
users can access a **large network of nodes and perform analysis at scale**. This is particularly useful for forensic companies 
and researchers who are interested in understanding the propagation of messages across the network.
:::



Fiber distributed nature allows users to monitor transactions propagating across nodes located in multiple geo-locations, 
this is particularly useful for on-chain forensic and analysis.

Fiber and FiberDB can be used to perform analysis such as:
* **Latency and delay analysis** by comparing and contrasting data across multiple p2p networks, scenarios and time periods.
* **Network topology analysis** by identify the distribution of network resources. Understanding the network's structure is crucial for optimizing routing of messages.
* **Network traffic analysis** this includes evaluation of transaction propagation cross-referencing addresses with geographic hotspots.

:::info
In addition to Fiber, we also provide **FiberDB**: a component that collects all message observations (transactions, blocks) from deployed Fiber nodes
logging timestamp and geolocation of each. (more info on FiberDB [here](/docs/fiberdb)
:::

