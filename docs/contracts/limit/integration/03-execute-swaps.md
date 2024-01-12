---
id: "swaps"
sidebar_position: 3
title: "Execute Swaps"
---

## Single Pool Swap

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

        /**
         * @custom:field callbackData
         * @notice arbitrary bytes passed to msg.sender after `swap` call
         */
        bytes callbackData;
    }
```

If nothing special is required, callbackData can be passed an a bytes32 value of zero.

Here is how this can be done using `ethers.js`:
```
    let txn = await hre.props.poolRouter
    .connect(signer)
    .multiSwapSplit(
        ['0xa43ddbcc4b78512c316bd7091b4c60f06db0fe42'],
        [
            {
                to: '0xBd5db4c7D55C086107f4e9D17c4c34395D1B1E1E',
                priceLimit: BigNumber.from('2172618421097231267834892073346),
                amount: ethers.utils.parseUnits('1', 18),
                zeroForOne: true,
                exactIn: true,
                callbackData: ethers.utils.formatBytes32String('')
            },
        ]
    )
    await txn.wait()
```

## Multiple Pool Split Swap

A "split swap" will split an input amount across multiple pools, carrying any leftover `tokenIn` amount until the `pools` list is exhausted.

The remaining directions follow the same as the [Single Pool Swap](/contracts/limit/integration/swaps#single-pool-swap) section above.


