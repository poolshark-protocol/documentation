---
id: "add liquidity"
sidebar_position: 4
title: "Add Liquidity"
---

## Adding Range Liquidity

Range liquidity can be added via the `mintRange` function:

```solidity
    function mintRange(
        MintRangeParams memory params
    )
        external
        returns (
            int256 token0Delta,
            int256 token1Delta
        )
```

The `MintRangeParams` struct has the following fields:

```solidity
    /**
     * @custom:struct MintRangeParams
     */
    struct MintRangeParams {
        /**
         * @custom:field to
         * @notice Address for the receiver of the minted position
         */
        address to;

        /**
         * @custom:field lower
         * @notice The lower price tick for the position range
         * @dev Must be divisible by the tick spacing
         * @dev 90 is a valid tick for a tick spacing of 30
         * @dev 100 is not a valid tick for a tick spacing of 30
         */
        int24 lower;

        /**
         * @custom:field upper
         * @notice The upper price tick for the position range
         * @dev Must be divisible by the tick spacing
         * @dev 90 is a valid tick for a tick spacing of 30
         * @dev 100 is not a valid tick for a tick spacing of 30
         */
        int24 upper;

        /**
         * @custom:field positionId
         * @notice positionId = 0 for new positions
         * @notice positionId > 0 for existing positions 
         */
        uint32 positionId;

        /**
         * @custom:field amount0
         * @notice token0 amount to deposit in position
         */
        uint128 amount0;

        /**
         * @custom:field amount1
         * @notice token1 amount to deposit in position
         */
        uint128 amount1;

        /**
         * @custom:field callbackData
         * @notice arbitrary bytes passed to msg.sender after `mint` call
         */
        bytes callbackData;
    }
```

If nothing special is required, callbackData can be passed an a bytes32 value of zero.

Here is how this can be done using `ethers.js`:
```
    let txn = await hre.props.poolRouter
    .connect(signer)
    .multiMintRange(
        ['0xa43ddbcc4b78512c316bd7091b4c60f06db0fe42'],
        [
            {
                to: '0xBd5db4c7D55C086107f4e9D17c4c34395D1B1E1E',
                lower: 54000,
                upper: 77040,
                positionId: 0,
                amount0: BigNumber.from('39168000000000000000'),
                amount1: BigNumber.from('33000000000000000000000'),
                callbackData: ethers.utils.formatBytes32String('')
            },
        ]
    )
    await txn.wait()
```

