---
id: "tick data"
sidebar_position: 7
title: "Tick Data"
---

### getTickDataInWord

```solidity
  function getTickDataInWord(
    address pool,
    int16 tickBitmapIndex
  ) public returns (Tick[] memory ticks)
```

Get all the data for pool ticks at a specified word index.

Each word is 256 bits and contains up to 256 ticks.

#### Parameters:

| Name              | Type    | Description                                                                                              |
| :---------------- | :------ | :------------------------------------------------------------------------------------------------------- |
| `pool`            | address | The address of the pool for which to fetch populated tick data                                           |
| `tickBitmapIndex` | int16   | The index of the word in the tick bitmap for which to parse the bitmap and fetch all the populated ticks |

#### Return Values:

| Name             | Type                      | Description                                                 |
| :--------------- | :------------------------ | :---------------------------------------------------------- |
| `populatedTicks` | Tick[] | An array of tick data for the given 256-bit word in the tick bitmap |