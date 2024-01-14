---
id: "tick data"
sidebar_position: 7
title: "Tick Data"
---

### getTickDataInWord

```solidity
  /**
  * @param pool - The contract address of the pool
  * @param tickBitmapIndex - the word index in the tick bitmap to fetch tick data for
  * @return populatedTicks - TickData array sorted from highest tick first
  */
  function getTickDataInWord(
    address pool,
    int16 tickBitmapIndex
  ) public returns (TickData[] memory populatedTicks)
```

Get all the data for pool ticks at a specified word index.

Each word is 256 bits and contains up to 256 ticks.

One word will cover a % price move equal to:
```
((1 + (tickSpacing / 20000)) ^ 256) * 100 - 100
```

For a tick spacing of 10 this will be ~13.65%.

The `TickData` struct has the following fields:

```
    struct TickData {
        /**
         * @custom:field tick
         * @notice The index of the tick
         */
        int24 tick;

        /**
         * @custom:field liquidityDelta
         * @notice The +/- liquidity change at the tick
         * @notice Delta applied for upward crosses
         * @notice Opposite delta applied for downward crosses
         */
        int128 liquidityDelta;

        /**
         * @custom:field liquidityAbsolute
         * @notice The absolute value of liquidity at the tick
         */
        uint128 liquidityAbsolute;
    }
```