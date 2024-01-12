---
id: "collect fees"
sidebar_position: 6
title: "Collect Fees"
---

## Collecting Range Fees

Range fees can be collected via the `burnRange` function.

By passing a `burnPercent` of `0`, any swap fees pending will be sent to the `to` address.

Here is how this can be done using `ethers.js`:
```
    let txn = await hre.props.limitPool
    .connect(signer)
    .burnRange(
        {
            to: '0xBd5db4c7D55C086107f4e9D17c4c34395D1B1E1E',
            positionId: 1,
            burnPercent: ethers.utils.parseUnits('0', 0),
        },
    )
    await txn.wait()
```

## Compounding Range Fees

Range fees can be compounded via the `burnRange` function.

By passing a `burnPercent` of `1` or greater, any swap fees pending will be:

1) Compounded into the existing Range position
2) Leftover fees will be sent to the `to` address provided

Here is how this can be done using `ethers.js`:
```
    let txn = await hre.props.limitPool
    .connect(signer)
    .burnRange(
        {
            to: '0xBd5db4c7D55C086107f4e9D17c4c34395D1B1E1E',
            positionId: 1,
            burnPercent: ethers.utils.parseUnits('1', 0),
        },
    )
    await txn.wait()
```

