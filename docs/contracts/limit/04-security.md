---
id: "security"
sidebar_position: 4
title: "Security"
---

Ensuring the security of the Poolshark Protocol is our utmost priority. Poolshark Labs has dedicated significant efforts towards the
design and testing of the protocol to guarantee its safety and reliability.

## Audits

The codebase has undergone rigorous audits by leading security experts from [Guardian Audits][guardian-audits] as well as
independent auditors.

Guardian Audits also helped build out an [Echidna framework for Limit][fuzz-testing] which helped identify findings during the audit period.

## Bug Bounty

The Poolshark Protocol is subject to a bug bounty program per the terms outlined
[here](https://github.com/poolshark-protocol/limit/SECURITY.md).

Poolshark Labs is offering a bounty of up to $100,000 for
reporting critical vulnerabilities.

## Complete Process
- *Audit Reports*
    * [Guardian Audits][guardian-audits]
    * [Verilog Solutions][verilog-solutions]

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

[guardian-audits]: https://github.com/GuardianAudits/Audits/blob/main/Poolshark/Poolshark_Limit_Audit.pdf
[verilog-solutions]: https://www.verilog.solutions/audits/poolshark/
[unit-testing]: https://github.com/poolshark-protocol/limit/tree/arb-mainnet/test/contracts
[fuzz-testing]: https://github.com/poolshark-protocol/limit/blob/echidna/contracts/LimitEchidnaPool.sol
