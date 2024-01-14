---
id: "remove liquidity"
sidebar_position: 5
title: "Remove Liquidity"
---

## Removing Range Liquidity

Range liquidity can be removed via the `burnRange` function:

```solidity
    function burnRange(
        BurnRangeParams memory params
    )
        external
        returns (
            int256 token0Delta,
            int256 token1Delta
        )
```

The `BurnRangeParams` struct has the following fields:

```solidity
    struct BurnRangeParams {
        /**
         * @custom:field to
         * @notice Address for the receiver of the burned liquidity
         */
        address to;

        /**
         * @custom:field positionId
         * @notice id of previous position minted
         */
        uint32 positionId;

        /**
         * @custom:field burnPercent
         * @notice Percent of the remaining liquidity to be removed
         * @notice 1e38 represents 100%
         * @notice 5e37 represents 50%
         * @notice 1e37 represents 10%
         */
        uint128 burnPercent;
    }
```

Below we are burning 100% of our Range position liquidity.

Ensure to pass the correct `positionId` desired. 

Here is how this can be done using `ethers.js`:
```
    let txn = await hre.props.limitPool
    .connect(signer)
    .burnRange(
        {
            to: '0xBd5db4c7D55C086107f4e9D17c4c34395D1B1E1E',
            positionId: 1,
            burnPercent: ethers.utils.parseUnits('1', 38),
        },
    )
    await txn.wait()
```

