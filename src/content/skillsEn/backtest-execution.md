---
title: "Backtest Execution Methodology"
description: "Four-fold overfitting diagnosis: Out-of-Sample + Walk-Forward + Monte Carlo + Parameter Sensitivity."
version: "1.0.0"
kind: "skill"
tags: ['backtest', 'overfitting', 'validation']
appliesTo: ['backtest-engineer']
trigger: "When needing to validate strategies via backtesting"
relatedAgents: ['backtest-engineer', 'quant-researcher']
relatedSkills: ['technical-research', 'risk-assessment']
isChinaOriginal: true
updatedAt: 2026-07-30
---

Backtest lifecycle: research environment -> strategy implementation -> performance evaluation -> overfitting diagnosis -> trap detection.

Four-fold validation: Out-of-Sample (Walk-Forward), Monte Carlo simulation, parameter sensitivity.

Common traps: look-ahead bias, survivorship bias, data mining, ignoring transaction costs.
