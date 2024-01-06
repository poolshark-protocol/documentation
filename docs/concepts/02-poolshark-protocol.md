---
id: "poolshark-protocol"
sidebar_position: 2
title: "The Poolshark Protocol"
---

Poolshark is an AMM (automated market maker) protocol with 
directional and bidirectional liquidity.

With directional liquidity, pool depositors can create sell-only liquidity positions.

:::info

Poolshark's roots as a directional liquidity protocol go all the way back to September 2022.

:::

## What problem does Poolshark Address?

To understand the unique characteristics of Poolshark, it is helpful to examine two aspects: the concept of directional liquidity as an alternative to standard LPing, and the concept of native limit and stop support on AMMs.

### Native Limit Orders for AMMs

In the current landscape, DEXes on the market cannot meet pro traders' demands when it comes to directional execution.
The current iteration of DEXes provides a limited environment for spot trading.

The only means by which a trade can execute directionally is by swapping against the pool, simulating a Market Order.
Market Orders involve the trader receiving the real-time price available on the exchange at time of execution.

Limit Orders involve traders getting filled at an exact price. With Poolshark, users have access to Limit Swaps, a new
method of on-chain trading which combines the power of token swapping with liquidity providing.

#### How Limit Swaps Work

| Price Available | Amount Filled | Limit Swap Result                                                                          |
| :-------------- | :----------- | :---------------------------------------------------------------------------------- |
| Yes    | `100%` | token swapping only |
| Yes  | `<100%`  | token swapping + liquidity providing                                 |
| No | `0%`  | liquidity providing                                              |


### Native Stop Orders for AMMs

A stop-loss order specifies a limit on the maximum possible loss an investor can endure. Once the stop price is reached, assets are automatically sold to prevent further losses.

Current DEXes support an off-chain version of stop-losses.

However the trader is not guaranteed execution price as on-chain execution often lags the stop price being hit. Cover Pools allow the liquidity provider to specify a range over which they want to exit an asset over.

For example, the Cover LP could sell a user's ETH from 1500 -> 1000 DAI per ETH.

As the reference price crosses into the LP's range, liquidity will be unlocked and dutch auctioned. This ensures the best chance of the user's Cover LP to be filled, given the pool auction can outpace the market price.

### In conclusion

Directional liquidity allows for one-way fills, akin to the traditional limit order system.

The Poolshark team is excited to see how new utilities are formed around each type of custom position. 

With these new position types, liquidity providers can customize their risk profiles by placing directional bets on the market.

## Where can I find more information?

For more details on the Poolshark Protocol, explore this documentation site as well as
the official [Poolshark website](https://poolshark.fi) as well.

<!-- [^1]:
    Short for Decentralized Finance: an ecosystem of financial applications and services built on blockchain networks,
    primarily Ethereum, that leverage smart contracts to enable trustless, permissionless, and transparent financial
    transactions without relying on traditional intermediaries like banks or financial institutions. -->
