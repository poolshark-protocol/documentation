---
id: "quoting"
sidebar_position: 2
title: "Fetch Quotes"
---

## Quoting Pools

Quoting a LimitPool can be done via the following function:

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
