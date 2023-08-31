---
sidebar_position: 1
title: Architecture
---
------

**Echo** is a service developed by [Chainbound](https://www.chainbound.io/) 
which leverages the [Fiber Network](https://fiber.chainbound.io/docs/intro).  

Echo **extends Fiber's functionalities** by integrating with the **Proposer-Builder Separation (PBS) architecture**, 
allowing users to directly send transactions and bundles to Block Builders. 

------
## Transaction & Bundle Flow 
![](/img/echo-diagram.jpg)
Following the infrographic depicted up here, users should expect the following flow: 
1. **User submits transaction (or bundle)** via `https://echo.chainbound.io` endpoint with `eth_sendBundle` method.
2. **Echo picks up the transaction** and depending on user preferences:  
       A. Echo routes the transaction to the builders specified in `mevBuilders` field.  
       B. If user specified `usePublicMempool: true`, Echo submits the transaction to the public mempool.
> Here, Echo leverages the `SendTransaction()` method of the Fiber network, ensuring fast inclusion. More info [here](https://fiber.chainbound.io/docs/usage/transaction_broad).
3. **Builders submit their blocks** to relays. Proposers select the block with the highest bid (not depicted in diagram). 
4. **New block is broadcast** it to the network.
5. **Receipt notification**: Once the user transaction is included in a block, Echo notifies the user with a receipt notification.

   > Here Echo leverages Fiber's `NewExecutionPayloads()` stream, allowing the system to check `tx_hash` inclusion in newly produced blocks 
   > as soon as these are broadcast by relays or validators.
