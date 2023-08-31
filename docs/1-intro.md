---
sidebar_position: 1
title: Introduction
---
-----------------


#### **Echo** is a specialised API that allows Ethereum users to send bundles to their desired builders and the public mempool. 
The service is designed for minimal latency, ensuring the highest possibility of being included in the upcoming block.

**If you're interested in integrating with Echo, join our [Discord](https://discord.gg/J4KNdeCYGX) or email us at admin@chainbound.io.**



## Motivation
------
**Echo** has been built to address some pressing limitations of the current Ethereum transaction supply chain for 
**users**, **block Builders** and **Ethereum** itself.

### For users
:::info
As users we refer to **Protocols, Searchers, Bot operators** and **Systematic traders**.
:::
- **UX & Enhanced Convenience**: Submit your bundles to a unified API, and Echo will direct them to your chosen builders 
with minimal latency.

- **Front-running Protection**: By directly transmitting transactions to block builders, users can avoid the mempool and safeguard against MEV.

- **Effortless Builder Integrations and Upgrades**: We proactively manage and supervise all system upgrades 
and the latest API specifications from builders.

- **Bundle Inclusion Notifications**: Get notified of your confirmed bundles in real-time as they're included in new blocks. 
By leveraging Fiber's [`execution_payloads` stream](https://fiber.chainbound.io/docs/usage/streams_sub#block-payloads---subscribenewexecutionpayloads), Echo notifies you with a **receipt notification** the moment your bundle is included in a block.

- **Mempool add-on integration**: By enabling `usePublicMempool` users are able to simultaneously dispatch transactions to 
the mempool of nodes geo-distributed across the globe, in addition to the specified builders. Under the hood, this add-on leverages the [`SendTransactionSequence` method](https://fiber.chainbound.io/docs/usage/transaction_broad#sendtransactionsequence) from Fiber.

  > This feature is invaluable for hack-prevention services and Oracle updates which prioritize rapid inclusion and seek to avoid potential censorship from builders.

### For Block Builders
:::info
If you are a Builder interested in integrating with Echo, 
contact us on [Discord](https://discord.gg/J4KNdeCYGX) or email us at admin@chainbound.io.
:::

- **Overcoming the Entry Barrier**: The current environment presents a 'chicken-and-egg' problem for emerging builders. 
They need flow to build competitive blocks and gain market share, but without market share, they can't attract flow. 
**Echo aims to level the playing field by funneling flow towards all integrated builders.**

- **Trust Establishment**: Given the anonymous nature of the block building, trust establishment is a genuine challenge. 
By providing a platform that aggregates builders, **Echo aims to introduce vetting mechanisms, analytics and reviews,** 
allowing new and established builders to build trust with searchers more effectively.

- **Insightful Data Analysis**: One of the current challenges is the lack of comprehensive data on various builders. 
Echo can gather, and provide analytics on builder performance, statuses, and other essential metrics, benefiting 
the whole ecosystem. **Such data-driven insights can drive better decision-making for users and builders alike.**


### For the Ethereum Network
- **Mitigating Centralization Risks**: Currently there's a significant concentration of power amongst the Top-4 builders. 
Such centralization is contrary to the foundational principles of Ethereum. 
By promoting a diverse builder ecosystem, **Echo aims to directly counter this centralizing effect, 
ensuring the Ethereum ecosystem remains decentralized**.

- **Facilitating Innovation:** By lowering barriers to entry and promoting a more diverse ecosystem, 
**Echo aims to become a catalyst for innovation.** New strategies, tools, and approaches might emerge when a broader range 
of builders gain access to meaningful flow and compete on a more leveled playing field.

In conclusion, **Echo aims to align with the core principles of the Ethereum ecosystem**, addressing several challenges 
currently faced by users and builders. Not only does it promise to improve the user's UX experience, but it also
holds the potential to usher in more innovation and transparency.




