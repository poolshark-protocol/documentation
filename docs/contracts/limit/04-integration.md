---
id: "integration"
sidebar_position: 2
title: "Integration"
toc_max_heading_level: 2
---

## Tracking Pools

The `PoolCreated()` event allows third parties to track all pools currently available.

This event is emitted from the `LimitPoolFactory` contract each time a new pool is created.

```
    event LimitPoolCreated(
        address pool,
        address token,
        address indexed token0,
        address indexed token1,
        uint16 indexed swapFee,
        int16 tickSpacing,
        uint16 poolTypeId
    );
```

`pool` - the contract address of the Limit Pool.

`token` - the ERC-1155 contract address for LP positions.

`token0` - the ERC-20 token address for the first token in the pair.

`token1` - the ERC-20 token address for the second token in the pair.

Note: `token0` and `token1` are sorted alphanumerically with regards to the token contract addresses.

If the token pair is `0xb...` and `0xa...`, `token0` will always be `0xa...` and `token1` will always be `0xb...`.

`swapFee` - the swap fee in multiples of 0.0001%.

Note: A `swapFee` of `3000` is equal to `0.3%`.

`tickSpacing` - the multiple of 0.01% between price ticks.

Note: A `tickSpacing` of `30` is equal to `0.3%`.

`poolTypeId` - the poolType id for the pool.

Note: Initially the only "pool type" will be '0', which is an `x*y=k` LimitPool.

## Quoting Pools