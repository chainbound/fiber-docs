---
sidebar_position: 5
title: FiberDB
---
## Introduction

FiberDB is a component that collects all message observations (transactions, blocks) from all of the deployed Fiber nodes. It then separates these observations into objects and stores them in designated tables in a Clickhouse database. Format below:

![Fiber-IndexDB-ERD.png](/img/fiberdb-erd.png)

The most interesting tables are the observations table. Since we have global points of presence in the form of Fiber Nodes, that connect to both the eth1 (execution) and eth2 (consensus) networks, we can link traffic on both p2p networks to geographic regions.

For the eth1 network, this allows us to identify the big transaction originators. This will be some of the biggest RPC node providers. Customers will be able to use this data to strategically place their clients. Since we also store application-level data (the full transaction), it’s possible to link app-specific data to the network layer. This would be useful in identifying PGAs for example.

For the eth2 network, we can locate validators, staking pools and relays. We can also analyze equivocations and other anomalies on the consensus network.

## Data Format

- **`transaction_observations`**

All of the observations of a certain transaction (identified by `tx_hash`) through the Fiber network. More details below.

- **`private_transaction_observations`**

Same as above but for private (user) transactions. Only accessible by the user that sent the transaction for tracing / debugging purposes.

- **`transactions`**

All of the individual transaction along with their payloads. This is what you would see on Etherscan. The reason that we index these as well is that not all transactions sent over the network eventually end up on the chain, and some of them get lost / replaced. We want to know what types of these transactions are as well. One example use case of this would be identifying PGAs - a lot of the replaced transactions won’t end up on the chain, but since we index their payload, we can easily look into what was going on.

- **`block_observations`**

All of the observations of a certain block (identified by `block_hash` and `block_number`) through the Fiber network. This allows us to see, at a network level, where blocks are originated and how they propagate. It will also allow us to trace potential equivocation attacks or slashable offenses more closely.

- **`block_headers`**

Header payloads. Same as with the transactions table, allows us to examine blocks that didn’t make it on the canonical chain more closely.

- **`block_bodies`**

Contain all of the transaction hashes in that block. Cross-checking these with the `transaction_observations` table will allow us to identify “private” transactions (i.e. not broadcasted over the p2p network).

Let’s take a closer look at the `transaction_observations` and `block_observations` tables. Each row in these tables is an observation from one of our nodes, along with some network metadata like `timestamp`, `region`, `node_id` and `source`. The `source` is the peer we received the message from.

The observations are further categorized by `observation_type`. This column describes where the message came from, and it can either be from a peer in the p2p network (`p2p`), or from another Fiber node (`fiber`). All transactions are propagated over the internal Fiber network for lower latency, which is why we have this column to distinguish the 2.

For any message observation (unless it’s the first), there will likely be a row with the `fiber` type first, and a `p2p` type second, because the Fiber network is usually faster than the p2p network. We record both types so that we can analyze the delta between them, as well as the normal p2p propagation behaviour.

## Database

This data is backed by a hosted [Clickhouse](https://clickhouse.com/) database. We chose Clickhouse Cloud due to its impressive performance, automatic up/down scaling, and great UX. As a customer, there are 2 ways for you to get this data:

1. **Realtime Push**: our indexing middleware would connect directly to your database, and all messages will be pushed to the DB as soon as the indexer sees them. You would be able to define what data you want to save. This option is the most flexible, because you’ll be able to do whatever you want with the data once you have it locally.
2. **Hosted DB Access**: you get access to our hosted Clickhouse DB. We create a user with limited quota’s, with which you can connect and do everything you need. Less flexible, but no need to store anything locally.

## Example

Let’s look at an example transaction trace:

![FiberDB Example Trace](/img/fiberdb-example.png)

- The transaction was first received by node `fiber-node-nzB22n0B-eu-central-1` in Frankfurt.
- It then sent it on to the Fiber network to all of the other nodes, and the nodes in Europe got the transaction soon after. With a small delay, they also received it from the p2p network (check the `observation_type` column)
- However, in the US, it was received by node `fiber-node-Bhg6kcGw-us-east-1` from the `p2p` network first. It then propagated it on to the other nodes in the US, and we see the same thing happening as in the previous step.
- Then, in AP, node `fiber-node-jnv6bfld-ap-east-1` in Hong Kong picked up the transaction from a peer and broadcasts it on.
