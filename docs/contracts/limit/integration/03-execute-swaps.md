---
id: "swaps"
sidebar_position: 3
title: "Execute Swaps"
---

## Split Swap

A "split swap" will split an input amount across multiple pools, carrying any leftover `tokenIn` amount until the `pools` list is exhausted.

Executing a swap should be done through the `PoolsharkRouter` contract (see [deployments](/contracts/limit/deployments)).

The `multiSwapSplit` function on the `PoolsharkRouter` will allow execution of a swap.

First an ERC-20 `approve()` should be done with the `PoolsharkRouter` as the spender.

The amount will be the `tokenIn` amount desired to be swapped.

Then the `multiSwapSplit` function can be called:

```
    /**
    * @param pools The pool addresses to be swapped against
    * @param params The SwapParams struct array to be passed in
    */
    function multiSwapSplit(
        address[] memory pools,
        SwapParams[] memory params
    )
        external
        payable
```

The `SwapParams` struct has the following fields:

```
    struct SwapParams {
        /**
         * @custom:field to
         * @notice Address for the receiver of the swap token output
         */
        address to;

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
         * @notice True if `amount` is in tokenIn; False if `amount` is in tokenOut
         */
        bool exactIn;

        /**
         * @custom:field zeroForOne
         * @notice True if swapping token0 => token1
         * @notice False if swapping token1 => token0
         */
        bool zeroForOne;

        /**
         * @custom:field callbackData
         * @notice callback data which gets passed back to msg.sender at the end of a `mint` call
         */
        bytes callbackData;
    }
```

If nothing special is required, callbackData can be passed an a bytes32 value of zero.

Here is how this can be done using `ethers.js`:
```
ethers.utils.formatBytes32String('')
```


