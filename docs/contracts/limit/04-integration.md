---
id: "integration"
sidebar_position: 2
title: "Integration"
toc_max_heading_level: 2
---

## Tracking Pools

The `LimitPoolCreated()` event allows third parties to track all pools currently available.

This event is emitted from the `LimitPoolFactory` contract each time a new pool is created.

```
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

## Quoting Pools

Quoting Limit Pools can be done via the following function, available on all LimitPool contracts:

```
    /**
    * @param params The QuoteParms struct to be passed in
    * @return inAmount - the amount of tokenIn sent as input
    * @return outAmount - the amount of tokenOut returned as output
    * @return priceAfter - the Q64.96 format pool price after the swap 
    */
    function quote(QuoteParams memory params)
        external
        view
        returns (
            int256 inAmount,
            int256 outAmount,
            uint160 priceAfter
        );
```

The `QuoteParams` struct has the following fields:

```
    struct QuoteParams {
        /**
         * @custom:field priceLimit
         * @notice The Q64.96 formatted sqrt price to stop swapping at
         * @notice zeroForOne (i.e. token0 => token1 swap) moves price lower
         * @notice !zeroForOne (i.e. token1 => token0 swap) moves price higher
         */
        uint160 priceLimit;

        /**
         * @custom:field amount
         * @notice The maximum tokenIn to be spent (exactIn)
         * @notice OR tokenOut amount to be received (!exactIn)
         */
        uint128 amount;

        /**
         * @custom:field exactIn
         * @notice True if `amount` is in tokenIn
         * @notice False if `amount` is in tokenOut
         */
        bool exactIn;

        /**
         * @custom:field zeroForOne
         * @notice True if swapping token0 => token1
         * @notice False if swapping token1 => token0
         */
        bool zeroForOne;
    }
```