---
sidebar_position: 1
title: Architecture
---
------

**Echo** is a service developed by [Chainbound](https://www.chainbound.io/) 
which leverages the [Fiber Network](https://fiber.chainbound.io/docs/intro).  


Echo **extends Fiber's functionalities** by directly integrating with the **Proposer-Builder Separation (PBS) architecture**, 
allowing users to directly send transactions and bundles to Block Builders. 

------
## Transactions & Bundles Flow 
![](/img/echo-diagram.jpg)
Following the infrographic depicted up here, users should expect the following flow: 
1. **User Submit Transaction (or bundle)** via `https://echo.chainbound.io` endpoint with `eth_sendBundle` method.
2. **Echo picks up the transaction** and given user preferences:  
       A. Echo routes the transaction to builders specified in `mevBuilders` field.  
       B. If user specified `usePublicMempool=True` Echo submits the transaction to the public mempool.
> Here Echo leverages the `SendTransaction()` method of the Fiber network, ensuring fast inclusion. (read [here](https://fiber.chainbound.io/docs/usage/transaction_broad) for more info)
3. **Builders submit their blocks** to Relays. Proposers select the block with the highest bid (not depicted in diagram). 
4. **New block is broadcasted** it to the network.
5. **Receipt notification**: Once the user transaction is included in a block, Echo notifies the user with a
unique receipt notification.

   > Here Echo leverages Fiber's stream `NewExecutionPayload()` allowing the system to check `trx_hash` inclusion in newly produced blocks 
   > as soon as these are broadcast by relays or validators.
