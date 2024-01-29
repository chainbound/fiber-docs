---
sidebar_position: 2
title: Use Cases
---
**Fiber is accessible via API, facilitating seamless streaming and propagation of data across the Ethereum network**

_By abstracting away the complexities of node infrastructure, Fiber simplifies the process of accessing_ **real-time data
across Consensus and Execution layers.**

The distributed nature of the network allows for transactions to be processed and propagated **more efficiently than other services** (eg. RPC providers or mempool services) and single nodes.

:::info
If interested in testing Fiber's performances, clone [fiber-benchmarks](https://github.com/chainbound/fiber-benchmarks) repo and benchmark it yourself!

In this [article](https://fiber.chainbound.io/blog/fiber-vs-bloxroute) we outline the results gathered in Q1 '23.
:::

## 1. Searchers & Builders

### 1.1 MEV Capturing
Low latency access to mempool data gives **searchers** and **builders** a latency and reliability advantage
over the competition.

On the Execution Layer (EL), Fiber provides the `NewTransactions` stream, which returns new transactions that are propagated across the Ethereum mempool.

The stream can be leveraged to deploy MEV strategies, as:
* DEX Arbitrage
* Liquidity Sniping
* NFT Sniping
* Liquidations
* Long-tail MEV

:::note
As of July '23 we observe **~85% of transaction being submitted via the mempool**, the remaining 15% is submitted as Private
Order Flow (POF). Given `NewTransactions` has proven to be the fastest and most reliable stream of mempool data over multiple time periods,
**Builders** and **Searchers** can integrate the stream to maximize their MEV capturing potential.
:::

### 1.2 Transaction Inclusion Receipts
Fiber can also be leveraged by **Builders** and **Searchers** that are looking to confirm the inclusion of their transactions in the most recent block
as fast as possible.
On the Consensus Layer, Fiber provides the `NewExecutionPayloads` stream, which abstracts the payload from `BeaconBlockBody` and returns it as a separate stream.

Subscription to this stream allows Builders and Searchers to **reduce transaction confirmation time** by 40ms-200ms, compared to other services, such as Bloxroute.

To note, some applications include:
* **Stat-Arb:** Decrease the time to confirm on-chain transactions inclusion allows for more accurate hedging on CEXs
* _Inquire at admin@chainbound.io for more information on MEV use-cases_

### 1.3 Transaction Propagation
Via the `sendTransaction` API endpoint, searchers are able to **submit transactions** to the Ethereum network via Fiber.
This has many use-cases, including:
* **Redundancy in transaction submission** - Fiber can be used as a backup to their main transaction submission service, which can be private or public.
* **Censorship resistance** - Fiber can be used to submit transactions to the Ethereum network in a way that is resistant to censorship.

:::warning
Fiber is not integrated with any Private Order Flow (POF) provider, therefore users should be mindful of the usual dangers of submitting to the public mempool (front-running, sandwiching attacks).
:::

## 2. Systematic Risk Mitigation
### 2.1 Hacks Detection & Prevention
Hackers are constantly looking for new ways to exploit vulnerabilities in smart contracts.

With Fiber's stream, protocols and applications can track events in real-time to detect and prevent hacks, examples include:
* Automated **defensive measures** to protect users and funds (eg. hack-prevention via front-running malicious users)
* Automated **detection of hacks** and exploits with real-time alerts
* Real-time **anomaly detection** in smart contracts deployments and transactions

## 3. Validators
### 3.1 FiberBoost
FiberBoost is a service that allows proposers (and relays) to broadcast blocks through Fiber Network, resulting in fast, global block propagation. Blocks are broadcast internally over our high-speed links, as well as to all the consensus P2P peers Fiber is connected to. In practice, **FiberBoost will reduce the probability of missed slots due to [proposer boost & honest reorgs](https://www.paradigm.xyz/2023/04/mev-boost-ethereum-consensus#proposer-boost--honest-reorgs)**.

FiberBoost can boost blocks through the following 3 interfaces:
- API
- Modified MEV-Boost
- Direct P2P peering

Click [here](./usage/fiber-boost) to get started.

### 3.2 FiberGuard
Validators can optimize their performance and minimize their p2p latency with the implementation of FiberGuard,
an advanced technology designed to enhance their operations.

FiberGuard provides validators with a reliable and low-latency `NewBeaconBlocks` stream, which is crucial for
promptly receiving new blocks. This capability enables validators to **efficiently generate attestations** and
**produce new blocks**, improving their overall performance.

By adopting FiberGuard, validators can achieve the following benefits:

1. **Reduced Streaming Latency:** With FiberGuard, validators can experience significantly reduced streaming
latency of `BeaconBlock`. This improvement can lead to up to **1-second reduction in latency** when compared to a
single node setup and a remarkable **50-200 milliseconds** reduction compared to other existing services.

2. **Enhanced Reliability and Uptime:** Leveraging the distributed nature of the Fiber network,
validators can **increase the reliability and uptime of their operations**. This means that validators are
less prone to downtime or interruptions, resulting in a more dependable validation process.

3. **Lower Operating Costs:** One of the key advantages of utilizing FiberGuard is the cost reduction
it offers to running a validator. By mitigating the **risks of reorgs, missed attestations, or inactivity penalties**,
validators can avoid potential financial losses and optimize their profitability.

:::note
**Attestations account for ~85% of the total validator yield** over time. After the Altair upgrade, attestations are highly sensitive to latency:
if the `slot_delay` of an attestation is larger than 1, the validator will **miss out on more than 20%** of the potential reward
(read more about attestations rewards [here](https://eth2book.info/capella/part2/incentives/rewards/)).

The following chart shows the **validator's reward** over time, outlining the importance of `slot_delay` minimization.

![](/img/validators_reward.png)
:::


:::info
FiberGuard allows validators to connect to the stream via **direct/trusted peering connections**, allowing easy integration with an existing beacon node
without requiring any additional software.
:::

## 4. High-Frequency Trading
### 4.1 Signal generation
High Frequency Trading (HFT) across TradFi, CeFi and DeFi requires access to real-time data to generate signals and execute trades.
Fiber provides a reliable and **low-latency stream of the most up-to-date state** (block) on Ethereum, giving trading shops a competitive edge over their competitors.

Two Fiber streams can be leveraged by HFTs:
* By subscribing to `NewExecutionPayload`, HFTs can process transactions, included in the most recent block, before the competition.
* HFTs can also subscribe to the `NewTransactions` stream to process pending transactions and generate signals based on transaction inputs.

Some benefits of using Fiber for HFT execution across TradFi, CeFi and DeFi include:
* Better **informed Decision-Making** trading logic
* More granular understanding of **Trends and Patterns**
* Ability to **backtest and validate** trading strategies via [FiberDB](./fiberdb.md)

## 5. Research
### 5.1 P2P Network Exploration
:::note
Ethereum has the most decentralized P2P network of any of the blockchains currently running.
The geo-distributed nature of Ethereum nodes lays the ground for many interesting
analyses and explorations of the **propagation of messages** across the Ethereum network.

The analysis of Ethereum P2P network would be impossible to perform with a single node, or even a small cluster of nodes, but thanks to Fiber
users can access a **large network of nodes and perform analysis at scale**.
:::

Fiber and FiberDB can be used to perform analyses such as:
* **Latency and delay analysis** by comparing and contrasting data across multiple situations and time periods.
* **Network topology analysis** by identify the distribution of network participants. Understanding the network's structure is crucial for optimizing routing of messages.
* **Network traffic analysis** this includes evaluation of transaction and block propagation, as well as network hotspots.

:::info
In addition to Fiber, we also provide **FiberDB**: a component that collects all message observations (transactions, blocks) from deployed Fiber nodes
logging timestamp and geolocation of each. (more info on FiberDB [here](/docs/fiberdb)
:::
