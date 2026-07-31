---
title: "回测执行方法论"
description: "四重检验过拟合诊断：样本外检验 + Walk-Forward + 蒙特卡洛 + 参数敏感性。"
version: "1.0.0"
kind: "skill"
tags: ['backtest', 'overfitting', 'validation']
appliesTo: ['backtest-engineer']
trigger: "当需要对策略进行回测验证时"
relatedAgents: ['backtest-engineer', 'quant-researcher']
relatedSkills: ['technical-research', 'risk-assessment']
isChinaOriginal: true
updatedAt: 2026-07-30
---

回测生命周期：研究环境搭建→策略实现→绩效评估→过拟合诊断→陷阱排查。

四重检验：样本外检验(Walk-Forward)、蒙特卡洛模拟、参数敏感性。

常见陷阱：未来函数、幸存者偏差、数据挖掘、忽视交易成本。
