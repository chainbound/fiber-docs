---
sidebar_position: 2
title: Use Cases
---
**Fiber is accessible via API, facilitating seamless streaming and propagation of data across Ethereum Networks.**

_Consequently, the need for deploying and maintaining individual full nodes is rendered unnecessary. 
By abstracting away the complexities of node infrastructure, Fiber simplifies the process of accessing real-time data 
across Consensus and Execution layers._

The distributed nature of the network allows for transactions to be processed and propagated **more efficiently than other services** (eg. RPC providers or mempool services) and single nodes.
To learn more about fiber performance, please refer to this [article](https://fiber.chainbound.io/blog/fiber-vs-bloxroute) we published in Q1 '23.

:::note
The Fiber network currently supports **three** major streams. 
This page we will explore some use-cases per each stream.
:::

##

## EL Stream - `NewTransactions`
This stream returns new transactions that are propagated across Ethereum mempool, with the following schema:
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

`NewTransactions` stream is particularly useful for:

### MEV Capturing
Low latency access to mempool (pending) transactions gives **searchers and builders** an edge over the competition.
MEV strategies which benefit from this stream integration include:
* Arbitrage
* Liquidity Sniping
* NFT Sniping
* Liquidations
* PGAs (Priority Gas Auctions)
* Long-tail MEV

As of July '23 we observe ~85% of transaction being submitted via mempool, the remaining 15% is submitted via Private 
Order Flows (POFs).  `NewTransactions` can be leveraged by Searchers to capture the majority of MEV opportunities pending 
in the open market (mempool), thanks to its low-latency, highly reliable and distributed nature.

_ps. In the future, we are looking also to provide live stats on transaction submission flows, giving more data to 
evaluate Fiber effectiveness in this specific use-case._ 

### Hacks Detection & Prevention
Hackers are constantly looking for new ways to exploit vulnerabilities in smart contracts. 
With Fiber protocols and applications can track on-chain and mempool events in real-time to detect and prevent hacks.

Examples include:
* Automated defensive measures to protect users and funds (eg. hack-prevention via front-running malicious users)
* Automated detection of hacks and exploits with real-time alerts 
* Anomaly detection in smart contracts deployments and transactions

### On-chain Forensic
As shown in the table below, Ethereum is by-far the most decentralized EVM blockchains in terms of nodes distribution. The geo-distribution of 
Ethereum nodes makes Fiber a great tool to perform comprehensive analysis of the network's performance and behaviors across its p2p layer.

![](/img/nodes_topology.png)
_source: etherscan.io/nodetracker_

Fiber distribute nature allows users to access data from multiple nodes located in multiple geo-locations, 
this is particularly useful for on-chain forensic and analysis.

Fiber and FiberDB can be used to perform analysis such as:
* **Latency and delay analysis** by comparing and contrasting data across multiple p2p networks, scenarios and time periods.
* **Network topology analysis** by identify the distribution of network resources. Understanding the network's structure is crucial for optimizing routing of messages.
* **Network traffic analysis** this includes evaluation of transaction propagation cross-referencing addresses with geographic hotspots.


### Back-end infrastructure for dApps, bots and apps
[...]

### Quant signal generation
[...]

## CL Stream - `NewBeaconBlocks`
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
### Validators Side-car
Given the current Ethereum implementation, validators can leverage this stream to boost their performances and latency. 
This is particularly useful for validators that are running on cloud providers, where the latency is higher than on-premise setups.

Specifically, attestations account for ~85% of the total validators yield over time. After Altair upgrade, attestations are highly sensitive to latency, these 
require to be submitted with a `slot_delay` not larger than 1 else will miss on more than 20% of the potential reward 
(read [here](https://eth2book.info/capella/part2/incentives/rewards/) for more).

`NewBeaconBlocks` can be leveraged by validators to improve their performance by:
1. Reduce streaming latency of `BeaconBlockBody` by up to 1 seconds, compared to a single node setup, and 50-200ms compared to other services (eg. Bloxroute)
2. Increase the reliability and up-time of validators by leveraging the distributed nature of the Fiber network
3. Reduce the cost of running a validator by decreasing risks of slashing due to downtime or missed attestations


[...]
![](/img/validators_reward.png)

:::note
Fiber is currently offering the stream via direct/trusted peering connections, allowing easy integration with existing setups.
:::

## CL Stream - `NewExecutionPayload`
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

### Low-latency Transaction Inclusion Monitoring 
[...]