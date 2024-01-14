---
id: "get-pools"
sidebar_position: 2
title: "Get Pools"
---

## Tracking Pools

There are two methods to track all liquidity pools from Poolshark:

1) Query the publicly available [Limit Subgraph API](https://arbitrum-mainnet.graph-eu.p2pify.com/27c3c2867e193dcf17ca262f64efe2a4/limit-arbitrum-redeploy/graphql).

Use the following query to fetch all LimitPools:
```
{
	limitPools(first: 5) {
        id
        token0 {
            id
            name
            symbol
            decimals
            usdPrice
        }
        token1 {
            id
            name
            symbol
            decimals
            usdPrice
        }
        poolPrice
  }
}
```


2) Index all the `LimitPoolCreated` or `PoolCreated` events.

* The `LimitPoolCreated` event is custom to Poolshark
* The `PoolCreated` event is compatible with Uniswap v3 indexers.

The `LimitPoolCreated()` event allows third parties to track all pools currently available.

This event is emitted from the `LimitPoolFactory` contract each time a new pool is created.

```solidity
    event LimitPoolCreated(
        /**
         * @custom:field pool
         * @notice The contract address of the LimitPool created
         */
        address pool,

        /**
         * @custom:field token
         * @notice The contract address of the LP position tokens
         * @notice zeroForOne (i.e. token0 => token1 swap) moves price lower
         * @notice !zeroForOne (i.e. token1 => token0 swap) moves price higher
         */
        address token,

        /**
         * @custom:field token0
         * @notice The ERC-20 token alphanumerically sorted first
         * @notice For the tokens `0xb...` and `0xa...`, token0 would be `0xa...` 
         */
        address indexed token0,

        /**
         * @custom:field token1
         * @notice The ERC-20 token alphanumerically sorted second
         * @notice For the tokens `0xb...` and `0xa...`, token1 would be `0xb...` 
         */
        address indexed token1,

        /**
         * @custom:field swapFee
         * @notice The swap fee in multiples of 0.0001%
         * @notice A `swapFee` of `3000` is equal to `0.3%` 
         */
        uint16 indexed swapFee,

        /**
         * @custom:field tickSpacing
         * @notice The multiple of 0.01% between price ticks
         * @notice A `tickSpacing` of `30` is equal to `0.3%` 
         */
        int16 tickSpacing,

        /**
         * @custom:field poolTypeId
         * @notice The multiple of 0.01% between price ticks
         * @notice 0 - x*y=k LimitPool
         */
        uint16 poolTypeId
    );
```