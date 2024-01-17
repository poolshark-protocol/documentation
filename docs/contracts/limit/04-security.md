---
id: "security"
sidebar_position: 4
title: "Security"
---

Ensuring the security of the Poolshark Protocol is our utmost priority. Poolshark Labs has dedicated significant efforts towards the
design and testing of the protocol to guarantee its safety and reliability.

## Audits

The codebase has undergone rigorous audits by leading security experts from [Guardian Audits](https://github.com/GuardianAudits/Audits/blob/main/Poolshark/Poolshark_Limit_Audit.pdf) as well as
independent auditors.

For a comprehensive list of all audits conducted, please click
[here](https://github.com/poolshark-protocol/limit/tree/master/audits).

## Bug Bounty

The Poolshark Protocol is subject to a bug bounty program per the terms outlined
[here](https://github.com/poolshark-protocol/limit/SECURITY.md).

Poolshark Labs is offering a bounty of up to $100,000 for
reporting critical vulnerabilities.

## Complete Process
- [*Audit Reports*][audits]
    * Guardian Audits
    * Verilog

- *Public Bug Bounty*
    * Immunefi $100k USD Payout
- *Testnet Beta*
    * Arbitrum Goerli
    * Scroll Sepolia
- [*Unit Testing*][unit-testing]
    * Base cases
    * Audit findings
    * Code coverage
- [*Fuzz Testing*][fuzz-testing]
    * ERC-20 balance underflow
    * Liquidity overflow & underflow
    * Pool prices crossing
    * TWAP oracle underflow
    * Liquidity oracle underflow
    * Fee growth underflow

[audits]: https://github.com/poolshark-protocol/limit/tree/master/audits
[unit-testing]: https://github.com/poolshark-protocol/limit/tree/arb-mainnet/test/contracts
[fuzz-testing]: https://github.com/poolshark-protocol/limit/blob/echidna/contracts/LimitEchidnaPool.sol
