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
If interested in testing Fiber's performances, clone [fiber-benchmarks](https://github.com/chainbound/fiber-benchmarks) repo and benchmark to Bloxroute or give a read to this 
[article](https://fiber.chainbound.io/blog/fiber-vs-bloxroute) we published in Q1 '23.
:::


**This page we will explore some use-cases per available stream, 
and also provide an overview of FiberDB:**


## 1. EL Stream - `NewTransactions`
This stream returns new transactions that are propagated across **Ethereum mempool**, with the following schema:
```python
class Transaction:
    nonce: U256
    gas_price: Uint
    gas: Uint
    to: Union[Bytes0, Address]
    value: U256
    data: Bytes
    v: U256
    r: U256
    s: U256
```

### 1.1 MEV Capturing
Low latency access to mempool data gives **searchers** and **builders** a latency and reliability advantage over the competition.  

MEV strategies which require this stream integration include:
* Arbitrage
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



### 1.2 Hacks Detection & Prevention
Hackers are constantly looking for new ways to exploit vulnerabilities in smart contracts. 

With Fiber protocols and applications can track on-chain and mempool events in real-time to detect and prevent hacks, examples include:
* Automated **defensive measures** to protect users and funds (eg. hack-prevention via front-running malicious users)
* Automated **detection of hacks** and exploits with real-time alerts 
* Real-time **anomaly detection** in smart contracts deployments and transactions

`TODO: Insert image depicting hack detection and prevention via Fiber`

## 2. CL Stream - `NewBeaconBlocks`
This stream returns new blocks metadata that are propagated across the ETH2 Network (Beacon Chain). 
The stream schema follows [ethereum/consensus-specs/BeaconBlockBody](https://github.com/ethereum/consensus-specs/blob/dev/specs/capella/beacon-chain.md#beaconblockbody) 
specs, therefore includes:
```python
class BeaconBlockBody(Container):
    randao_reveal: BLSSignature
    eth1_data: Eth1Data  # Eth1 data vote
    graffiti: Bytes32  # Arbitrary data
    # Operations
    proposer_slashings: List[ProposerSlashing, MAX_PROPOSER_SLASHINGS]
    attester_slashings: List[AttesterSlashing, MAX_ATTESTER_SLASHINGS]
    attestations: List[Attestation, MAX_ATTESTATIONS]
    deposits: List[Deposit, MAX_DEPOSITS]
    voluntary_exits: List[SignedVoluntaryExit, MAX_VOLUNTARY_EXITS]
    sync_aggregate: SyncAggregate
    # Execution
    execution_payload: ExecutionPayload
    # Capella operations
    bls_to_execution_changes: List[SignedBLSToExecutionChange, MAX_BLS_TO_EXECUTION_CHANGES]  # [New in Capella]
```
### 2.1 FiberGuard for Validators
Validators can leverage this stream to boost their performances and latency via **FiberGuard**. 
This is particularly useful for validators that are running on cloud providers, where the latency is higher than on-premise setups.

:::info
FiberGuard allows validators to connect to the stream via **direct/trusted peering connections**, allowing easy integration with existing setups.
:::
Via **FiberGuard**, `NewBeaconBlocks` stream can be leveraged by validators to improve their performance by:
1. Reduce streaming latency of `BeaconBlockBody` by **up to 1 seconds**, compared to a single node setup, and **50-200ms** compared to other services.
2. **Increase the reliability** and up-time of validators by leveraging the distributed nature of the Fiber network.
3. **Reduce the cost** of running a validator by decreasing risks of slashing due to downtime or missed attestations.



:::note
**Attestations account for ~85% of the total validators yield** over time. After Altair upgrade, attestations are highly sensitive to latency, these 
require to be submitted with a `slot_delay` not larger than 1 else **will miss on more than 20%** of the potential reward 
(read [here](https://eth2book.info/capella/part2/incentives/rewards/) for more).

The following chart shows the **validator's reward** over time, outlining the importance of `slot_delay` minimization.

![](/img/validators_reward.png)
:::

## 3. CL Stream - `NewExecutionPayload`
This stream abstracts `execution_payload` from `BeaconBlockBody` and returns the payload as a separate stream.
The payload includes the following fields:
```python
class ExecutionPayload(Container):
    # Execution block header fields
    parent_hash: Hash32
    fee_recipient: ExecutionAddress  # 'beneficiary' in the yellow paper
    state_root: Bytes32
    receipts_root: Bytes32
    logs_bloom: ByteVector[BYTES_PER_LOGS_BLOOM]
    prev_randao: Bytes32  # 'difficulty' in the yellow paper
    block_number: uint64  # 'number' in the yellow paper
    gas_limit: uint64
    gas_used: uint64
    timestamp: uint64
    extra_data: ByteList[MAX_EXTRA_DATA_BYTES]
    base_fee_per_gas: uint256
    # Extra payload fields
    block_hash: Hash32  # Hash of execution block
    transactions: List[Transaction, MAX_TRANSACTIONS_PER_PAYLOAD]
    withdrawals: List[Withdrawal, MAX_WITHDRAWALS_PER_PAYLOAD]  # [New in Capella] 
```

### 3.1 Transaction Inclusion Receipts 
This use-case is particularly useful for **Builders** and **Searchers** that are looking to confirm the inclusion of their transactions in the most recent block.

Given the **low-latency** of this stream, Builders and Searchers can **reduce the time to confirmation** of their transactions between 40ms to 200ms, 
compared to other services, such as Bloxroute. 

To note, some benefits we observed:
* **Stat-Arb:** Decrease the time to confirm on-chain transactions inclusion allows for more accurate hedging on CEXs
* [...]

### 3.2 HFT signal generation
High Frequency Trading (HFT) across TradFi, CeFi and DeFi requires access to real-time data to generate signals and execute trades.
Fiber provides a reliable and **low-latency stream of the most up-to-date state** (block) on Ethereum, giving trading shop a competitive edge over their competitors.

:::note
As of July '23, ~15% of transaction are submitted via Private Order Flows (POFs) rendering their **monitoring impossible until inclusion in 
a valid block** and propagation by proposer.
:::

By subscribing to the `NewExecutionPayload`, high-frequency traders gain the capability to **detect signals from POFs transactions** included in the most recent block 
ahead of their competitors.

Some benefits of using Fiber for HFT execution across TradFi, CeFi and DeFi include:
* Better informed Decision-Making trading logic
* More granular understanding of Trends and Patterns
* Ability to backtest and validate trading strategies via `FiberDB`


## 4. CL API - `sendTransaction`
[...]
## 5 FiberDB
Check out the [FiberDB](./fiberdb) section for more info of Fiber proprietary database.
### 5.1 P2p Network Explorations
Ethereum is by far the most decentralized EVM blockchains in terms of nodes distribution across geo-locations. 
The geo-distribution diversity (shown in the table below) of Ethereum nodes lays the ground for many interesting 
analysis and explorations of the **propagation of messages** across the Ethereum network. 

This analysis would be impossible to perform with a single node, or even a small cluster of nodes, but thanks to Fiber
users can access a **large network of nodes and perform analysis at scale**. This is particularly useful for forensic companies 
and researchers who are interested in understanding the propagation of messages across the network.

In addition to Fiber, we also provide **FiberDB**: a component that collects all message observations (transactions, blocks) from deployed Fiber nodes
logging timestamp and geolocation of each. (more info on FiberDB [here](/docs/fiberdb)



Fiber distributed nature allows users to monitor transactions propagating across nodes located in multiple geo-locations, 
this is particularly useful for on-chain forensic and analysis.

Fiber and FiberDB can be used to perform analysis such as:
* **Latency and delay analysis** by comparing and contrasting data across multiple p2p networks, scenarios and time periods.
* **Network topology analysis** by identify the distribution of network resources. Understanding the network's structure is crucial for optimizing routing of messages.
* **Network traffic analysis** this includes evaluation of transaction propagation cross-referencing addresses with geographic hotspots.

