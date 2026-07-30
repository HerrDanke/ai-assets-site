---
title: "Quant Investment Gene Library"
description: "量化投资基因库 - 基于The Zeroth基因工程哲学的多智能体投资决策系统"
version: "1.0.0"
kind: "workflow"
tags: ["quant", "investment", "multi-agent", "fundamental", "technical"]
yamlPath: "/workflows/quant-investment-gene-library.yaml"
participants:
  - "research-director"
  - "fundamental-analyst"
  - "industry-researcher"
  - "quant-researcher"
  - "backtest-engineer"
  - "risk-officer"
  - "investment-officer"
skills:
  - "fundamental-research"
  - "technical-research"
  - "valuation-modeling"
  - "backtest-execution"
  - "risk-assessment"
profiles:
  - "quant-mindset"
  - "risk-first"
  - "data-driven"
stages: 5
overview: |
  量化投资基因库是基于 The Zerolph 基因工程（A-Genetic Engineering）哲学设计的多智能体投资决策系统。

  系统包含两条工作流：基本面分析流（fundamental-analysis）和技术面分析流（technical-analysis），
  共 7 个 Agent，覆盖从策略构思到投资决策的完整流程。
designPhilosophy: |
  ## 设计原则

  ### 1. 上下文洁净
  每个 Agent 只做一件事，能力边界严格限定。

  ### 2. 经验即基因
  Skill 不是孤立提示词，而是锚定在固定角色位置的可复用经验模块。

  ### 3. 组合式微小模块
  Profile/Skill/Prompt 均为体量小、可独立挂载的片段。

  ### 4. 先验证，再信任
  所有分析必须标注置信度，数据不足时留白。

  ### 5. 风险优先于收益
  从 Profile 到 Skill 到约束，风险意识贯穿始终。
diagram: |
  graph LR
      subgraph 基本面分析流
        RD[research-director<br/>研究主管] --> FA[fundamental-analyst<br/>基本面分析师]
        RD --> IR[industry-researcher<br/>行业研究员]
        FA --> RO[risk-officer<br/>风险官]
        IR --> RO
        RO --> IO[investment-officer<br/>投资官]
        IO --> RD
      end

      subgraph 技术面分析流
        RD2[research-director<br/>研究主管] --> QR[quant-researcher<br/>量化研究员]
        QR --> BE[backtest-engineer<br/>回测工程师]
        BE --> RO2[risk-officer<br/>风险官]
        RO2 --> IO2[investment-officer<br/>投资官]
        IO2 --> RD2
      end

      subgraph Skills 挂载
        S1[fundamental-research]
        S2[technical-research]
        S3[valuation-modeling]
        S4[backtest-execution]
        S5[risk-assessment]
      end

      FA -.-> S1
      IR -.-> S1
      QR -.-> S2
      QR -.-> S4
      BE -.-> S4
      RO -.-> S5
      IO -.-> S3
updatedAt: 2026-07-30
---

## 概述

量化投资基因库是一套基于 The Zerolph 基因工程哲学的多 Agent 投资决策系统。系统严格遵循上下文洁净、经验即基因、组合式微小模块、风险优先等设计原则。

## 两条工作流基因

### 基本面分析流 (Fundamental Analysis)

适用：个股深度研究 / 行业配置 / 长期持仓论证

| 阶段 | Agent | 输入 → 输出 |
|------|-------|-------------|
| 1. 并行研究 | fundamental-analyst + industry-researcher | 研究目标 → 财务报告 + 行业报告 |
| 2. 风险审查 | risk-officer | 两份报告 → 风险评估 |
| 3. 投资决策 | investment-officer | 风险审查 → 投资决策 |
| 4. 主管汇总 | research-director | 所有报告 → 最终综合报告 |

### 技术面分析流 (Technical Analysis)

适用：策略开发 / 因子挖掘 / 系统化交易系统

| 阶段 | Agent | 输入 → 输出 |
|------|-------|-------------|
| 1. 策略研究 | quant-researcher | 策略类型 → 策略逻辑 + 因子检验 |
| 2. 回测验证 | backtest-engineer | 策略逻辑 → 回测报告 |
| 3. 风险审查 | risk-officer | 回测报告 → 策略风险评估 |
| 4. 策略决策 | investment-officer | 风险审查 → 采纳/否决 |
| 5. 主管汇总 | research-director | 所有报告 → 最终策略报告 |

## 设计原则

1. **上下文洁净** - 每个 Agent 只做一件事
2. **经验即基因** - Skill 锚定在固定角色位置
3. **组合式微小模块** - Profile/Skill 可独立挂载
4. **风险优先** - 风险意识贯穿始终
5. **诚实标注** - 数据不足时留白
