---
id: "quoting"
sidebar_position: 2
title: "Fetch Quotes"
---

## Single Pool Quote

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

## Multiple Pool Quotes

Quoting multiple LimitPools can be done via the `PoolsharkRouter` contract (see [deployments](/contracts/limit/deployments)).

```
    /**
    * @param params The QuoteParms struct to be passed in
    * @return inAmount - the amount of tokenIn sent as input
    * @return outAmount - the amount of tokenOut returned as output
    * @return results - the QuoteResult struct array 
    */
    function multiQuote(
        address[] memory pools,
        QuoteParams[] memory params,
        bool sortResults
    ) external view returns (QuoteResults[] memory results)
```

If `sortResults` is true, the first item in `results` will have the best quote.
- If `exactIn` is true, the first result will contain the highest `tokenOut` amount as output
- If `exactIn` is false, the first result will contain the lowest `tokenIn` amount as input

If `sortResults` is false, the ordering of `results` will match the `pools` array passed in.

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

The `QuoteResults` struct has the following fields:
```
    struct QuoteResults {
        /**
         * @custom:field pool
         * @notice The pool address of the result
         */
        address pool;

        /**
         * @custom:field amountIn
         * @notice The amount of tokenIn as input
         */
        int256 amountIn;

        /**
         * @custom:field amountOut
         * @notice The amount of tokenOut as output
         */
        int256 amountOut;
        
        /**
         * @custom:field priceAfter
         * @notice The Q64.96 sqrt price after the swap
         */
        uint160 priceAfter;
    }
```
