---
title: "dependency-mapping（依赖映射）"
description: "分析票据间依赖关系的方法：定义阻塞边、识别 frontier、确定发布顺序。"
version: "1.0.0"
kind: "skill"
tags:
  - "dependency"
  - "slicing"
  - "ticket-slicer"
appliesTo:
  - "ticket-slicer"
trigger: "当需要确定'哪些票据必须在哪些之前完成'时"
relatedAgents:
  - "ticket-slicer"
relatedSkills:
  - "vertical-slicing"
isChinaOriginal: false
updatedAt: 2026-07-29
---

依赖映射是对垂直切片产出的票据进行依赖分析的方法论。在这一阶段，ticket-slicer 需要明确每张票据的前置条件：它依赖哪些其他票据的输出？它阻塞了哪些后续票据的执行？这些关系被整理为一张有向无环图（DAG），图中的边表示「必须先完成 A 才能开始 B」的阻塞关系。

依赖映射的产出之一是「frontier」集合——即所有前置条件都已满足、当前可以立即开始执行的票据。frontier 是流水线调度的核心：executor 从 frontier 中选取票据进行实现，每完成一张票据，依赖图被更新，新的票据可能进入 frontier。此外，依赖映射还用于确定最小发布顺序——在哪些节点上可以安全地集成和发布，以确保用户始终能拿到一个可工作的系统，即使整体功能尚未完成。
