---
sidebar_position: 1
title: API Interface
---

## Endpoint
--------
- The service supports the same API interface as the [Flashbots RPC](https://docs.flashbots.net/flashbots-auction/searchers/advanced/rpc-endpoint),
with additional features which are defined below.  
- The Echo API entrypoint is `https://echo-rpc.chainbound.io/`. All requests to the API must be made over HTTPS.

## Authentication
--------

Echo uses the same authentication mechanism as Fiber. To use the API, you must specify a valid API key in the `x-api-key` header 
of your request. You can obtain a free API key by reaching out to us at [admin@chainbound.io](mailto:admin@chainbound.io) or on [Discord](https://discord.gg/J4KNdeCYGX).

For a successful request, your header should be:
```json
{"x-api-key": "echo-api-key"}
```

Here are all available API methods:

## `eth_sendBundle`
--------
Users can send budles and transactions via `eth_sendBundle` method:
```js
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "eth_sendBundle",
  "params": [
    {
      txs,                   // Array[String], A list of signed transactions to execute in an atomic bundle
      blockNumber,           // String, a hex encoded block number for which this bundle is valid on
      minTimestamp,          // (Optional) Number, the minimum timestamp (in seconds) for which this bundle is valid
      maxTimestamp,          // (Optional) Number, the maximum timestamp (in seconds) for which this bundle is valid
      revertingTxHashes,     // (Optional) Array[String], A list of tx hashes that are allowed to revert
      replacementUuid,       // (Optional) String, UUIDv4 that can be used to cancel/replace this bundle
      refundPercent,         // (Optional) Number, the percentage (from 0 to 100) of the  ETH reward of the last transaction,
                             //   or the transaction specified by refundIndex, that should be refunded back to the ‘refundRecipient’
      refundIndex,           // (Optional) Number, the index of the transaction of which the ETH reward should be refunded.
                             //   Default, last transaction in the bundle
      refundRecipient,       // (Optional) Address, the address that will receive the ETH refund.
                             //   Default, sender of the first transaction in the bundle
      mevBuilders,           // (Optional) Array[String], A list of mev builders to send this bundle to.
                             //   If not specified, the bundle will be sent to all available builders
      usePublicMempool,      // (Optional) Boolean, If true, the bundle will also be propagated to the public mempool
                             //   through Fiber's internal network. Defaults to false.
                             //   WARNING: Using this flag will void the privacy guarantees of the bundle, making it
                             //   frontrunnable by anyone else, including other MEV searchers.
      awaitBuilderResponses, // (Optional) Boolean, If true, the HTTP request will hang until all builders have
                             //   responded, and the result will contain a `builderResponses` field. Defaults to false.
      awaitReceipt,          // (Optional) Boolean, If true, the HTTP request will hang until the bundle is either
                             //   included in a block, or the specified timeout is reached. Defaults to false.
      awaitReceiptTimeoutMs, // (Optional) Number, The timeout (in milliseconds) for the awaitReceipt flag.
                             //   Defaults to 30000 (30 seconds) if not specified and awaitReceipt is true.
    }
  ]
}
```
:::warning
The `usePublicMempool` flag will void the privacy guarantees of the bundle, making it frontrunnable by anyone else, including other MEV searchers. Use it only to send bundles that are not vulnerable to frontrunning.
:::

:::info
The `awaitBuilderResponses` flag can be very useful during testing & debugging, as it allows you to see the response from each builder. If for some reason some builders are returning an error, you can easily identify them and fix the issue. It's recommended to set this flag
to false in production, as it will slow down the API response time significantly.
:::

### Successful response
Here is the successful response format that you can expect from the API:

```js
{
  "jsonrpc": "2.0",
  "id": "123",
  "result": {
    bundleHash,          // String, a unique 256-bit bundle identifier, based its payload.
    receiptNotification, // (Optional) object containing the on-chain receipt of the bundle.
                         //   This field will only be present if you specified the `awaitReceipt` flag
                         //   in the request.
    builderResponses,    // (Optional) object containing the various builder responses as a key-value map,
                         //   with the key being the builder name, and the value being the response from that builder.
                         //   This field will only be present if you specified the `awaitBuilderResponses` flag
                         //   in the request.
  }
}
```

### Receipt Notification
If you set the `awaitReceipt` flag to **true** in the request params, 
the response will also include the `receiptNotification` field, which will be one of the following:

```js
{
  // ...,
  "receiptNotification": {
    status: "included" | "timedOut", // "included" if the bundle was included in a block, "timedOut" if the
                                     // "awaitReceiptTimeoutMs" (default: 30s) was reached without inclusion.
    data: {
      blockNumber, // Number, the block number in which the bundle was included. Only present if status == "included"
      elapsedMs    // Number, the time (in milliseconds) since the bundle was submitted. Always present.
    }
  }
}
```

## `eth_cancelBundle`
--------
Echo  allows users to cancel pending transactions by submitting a cancellation request via `eth_cancelBudnle`
```js
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "eth_cancelBundle",
  "params": [
    {
      replacementUuid, // UUIDv4 to uniquely identify submission
      mevBuilders      // (Optional) Array[String], A list of mev builders to send the cancel request to.
                       //   If not specified, the cancelBundle request will be sent only to the builders
                       //   that were originally specified when the bundle was submitted with `eth_sendBundle`
    }
  ]
}
```
:::note
The `replacementUuid` field must have been set when the bundle was submitted with `eth_sendBundle`.
:::

:::warning
You cannot specify a `replacementUuid` together with the `usePublicMempool` flag, 
as transactions sent to the public mempool can always be included.
:::

### Successful response

```js
{
  "jsonrpc": "2.0",
  "id": "123",
  "result": true  // Boolean, true if the cancellation request was successfully sent to block builders
}
```

## `echo_getBundleStats`
--------
This endpoint can be used to fetch information about a specific bundle sent to Echo.

```js
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "echo_getBundleStats",
  "params": [
    {
      bundleHash, // String, the bundle hash of the bundle you want to get stats for
    }
  ]
}
```

### Successful response
Here is the successful response format that you can expect from the API:

```js
{
  "jsonrpc": "2.0",
  "id": "1",
  "result": {
    [
      {
        bundleHash,  // String, the bundle hash of the bundle you requested stats for
        included,    // Boolean, true if the bundle was included in a block, false otherwise
        timestamp,   // Number, the timestamp (in milliseconds) when the bundle was included in a block
        blockNumber, // Number, the block number in which the bundle was included
        blockBuilder // String, the name of the builder that included the bundle
      },
      ...            // Additional bundles with the same bundleHash can be returned if they exist
    ]
  }
}
```

## `echo_getInclusionStats`
--------
This endpoint can be used to fetch information about the inclusion details of the bundles you send through Echo.

```js
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "echo_getInclusionStats",
  "params": [
    {} // Empty object
  ]
}
```

### Successful response
Here is the successful response format that you can expect from the API:

```js
{
  "jsonrpc": "2.0",
  "id": "1",
  "result": {
    avgInclusionDelay,   // Number, the average delay (in milliseconds) between bundle submission and inclusion in a block
    inclusionRate,       // Number, the ratio of bundles sent through Echo that were included in a block
    bundlesIncludedByBuilder: [
      {
        blockBuilder,    // String, the name of the builder
        bundlesIncluded, // Number, the number of bundles included by this builder
      },
      ...                // Each builder that included at least one of your bundles will be returned
    ]
  }
}
```
