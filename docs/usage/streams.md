---
sidebar_position: 3
title: Streams
---
Fiber offers both transaction and block streams.

## Transaction Stream
The transaction stream provides **low-latency access to all new transactions seen by the Fiber Network**.
Because we want very low latency, **Fiber doesn't validate these transactions against EVM state**. Each node contains a simple transaction pool to drop duplicates, and validates the signature of incoming transactions, but that's all. This is something
the user should keep in mind!

The transaction stream contains **full transactions**, and the client implementations will usually convert these transactions
to a popular library implementation, like an `ethers-rs` transaction in Rust or an `@ethereumjs/tx` `TypedTransaction` in JavaScript.
## Filtering
Usually, users are only interested in specific transactions, which is why Fiber offers **transaction filters**.
Currently, you can filter based on the following properties:

* Sender
* Receiver
* MethodID
* Value

You can build complex filters using `AND` and `OR` operators. Let's look an example.

#### Example: getting all USDC and USDT transfers
To transfer an ERC20 token, you call the `Transfer` method, which has the following method ID: `0xa9059cbb`.
We want USDC and USDT transfers, so we filter the `To` field on either of the addresses. In string format,
it would look like this:
```
METHOD_ID == "0xa9059cbb" AND (TO == "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48" OR TO == "0xdAC17F958D2ee523a2206206994597C13D831ec7")
```
The client implementations offer easy-to-use interfaces for constructing filters.
Using the [Go client](https://github.com/chainbound/fiber-go) as an example, we can construct a filter like this:
```go
f := filter.New(
    filter.And(
        filter.MethodID("0xa9059cbb"),
        filter.Or(
            filter.To("0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"),
            filter.To("0xdAC17F958D2ee523a2206206994597C13D831ec7"),
        ),
    ),
)
```
:::info
Evaluating filters will introduce anywhere from 10 to 200 microseconds, depending on the complexity of the filter.
There's currently a limit of 16 filter elements or "nodes" in the filter tree.
:::

## Block Streams
:::caution
Both streams below are not **finalized**, meaning that the data is not guaranteed to be part of the canonical chain. Recent blocks can always be [reorged](https://www.paradigm.xyz/2021/07/ethereum-reorgs-after-the-merge).
:::
### Execution Payload Stream
A stream of [**execution payloads**](https://github.com/ethereum/consensus-specs/blob/dev/specs/capella/beacon-chain.md#executionpayload). These payloads are part of the beacon block, but they are only concerned with the execution layer (eth1). They contain
the traditional [block header](https://github.com/ethereum/consensus-specs/blob/dev/specs/capella/beacon-chain.md#executionpayloadheader) and the full list of transactions.

### Beacon Block Stream
A stream of [**beacon blocks**](https://github.com/ethereum/consensus-specs/blob/dev/specs/phase0/beacon-chain.md#beaconblock). These blocks contain the full consensus (eth2) data.
