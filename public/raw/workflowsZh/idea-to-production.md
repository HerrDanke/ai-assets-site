---
title: "Engineer Pipeline"
description: "从模糊想法到生产代码的完整自动化流水线"
version: "1.0.0"
kind: "workflow"
tags: ["pipeline", "multi-agent", "full-lifecycle"]
yamlPath: "/workflows/idea-to-production.yaml"
participants:
  - "main-assistant"
  - "wayfinder"
  - "spec-writer"
  - "ticket-slicer"
  - "executor"
  - "reviewer"
  - "evolver"
stages: 6
diagram: |
  graph LR
    subgraph 主线流水线
      WF[wayfinder<br/>大雾规划] --> SW[spec-writer<br/>规格编写]
      SW --> TS[ticket-slicer<br/>票据切片]
      TS --> EX[executor<br/>TDD 实现]
      EX --> RV[reviewer<br/>代码审查]
      RV --> EV[evolver<br/>自我进化]
    end

    subgraph 调度层
      MA[main-assistant<br/>主助手/唯一入口]
    end

    MA --> WF
    MA --> SW
    MA --> TS
    MA --> EX
    MA --> RV
    MA --> EV
    RV --> EX

    subgraph Skills 挂载
      S1[orchestration]
      S2[decision-mapping]
      S3[spec-authoring]
      S4[vertical-slicing]
      S5[tdd-cycle]
      S6[code-review]
      S7[self-evolution]
    end

    MA -.-> S1
    WF -.-> S2
    SW -.-> S3
    TS -.-> S4
    EX -.-> S5
    RV -.-> S6
    EV -.-> S7
updatedAt: 2026-07-29
---

## 概述

这是一个**多 Agent 协作的工程流水线**，融合了 Matt Pocock 的工程流水线与 The Zeroth 的基因工程概念。

## 流水线阶段

| 阶段 | Agent | 输入 → 输出 |
|------|-------|-------------|
| 1. 大雾规划 | wayfinder | 模糊想法 → 决策地图 |
| 2. 规格编写 | spec-writer | 决策 → 技术规格 |
| 3. 票据切片 | ticket-slicer | 规格 → 垂直切片 |
| 4. TDD 实现 | executor | 票据 → 代码 |
| 5. 代码审查 | reviewer | 代码 → 审查结论 |
| 6. 自我进化 | evolver | 失败信号 → 基因修复 |

## 设计原则

1. **上下文洁净** — 每个 Agent 只看到当前阶段需要的信息
2. **基因工程** — 经验锚定在结构中，可遗传可进化
3. **垂直切片** — 每片可独立演示
4. **TDD 驱动** — 没有失败测试就没有实现
5. **可进化** — Skill/Prompt/Graph 都可被修改

## 边设计三要素

每条边定义：
- **trigger**：何时移交
- **context_filter**：传递什么、过滤什么
- **escalation**：升级机制
