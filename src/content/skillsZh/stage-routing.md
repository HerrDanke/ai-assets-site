---
title: "stage-routing（阶段路由）"
description: "根据用户输入判断流水线阶段并路由到对应 Agent 的方法。"
version: "1.0.0"
kind: "skill"
tags:
  - "routing"
  - "main-assistant"
  - "multi-agent"
appliesTo:
  - "main-assistant"
trigger: "当用户消息到达时，需要快速判断该将该请求路由到哪个阶段 Agent 时"
relatedAgents:
  - "main-assistant"
relatedSkills:
  - "orchestration"
isChinaOriginal: false
updatedAt: 2026-07-29
---

阶段路由是 main-assistant 根据用户输入快速判断流水线阶段并路由到对应 Agent 的方法论。它解决的是「一个请求进来，该由谁处理」的问题。阶段路由的核心是一组分类规则：根据用户消息的语义特征（是描述一个模糊需求、是询问一个具体实现细节、还是报告一个运行错误），将其映射到对应的流水线阶段——wayfinder（决策映射）、spec-writer（规格编写）、ticket-slicer（任务拆分）、executor（代码实现）、reviewer（代码审查）、或 evolver（失败修复）。

路由不是一次性的决策，而是持续进行的状态机维护。当用户补充信息、改变意图、或原有阶段的工作产生新的输入时，路由需要重新评估。阶段路由还负责处理「跨阶段」请求——例如用户直接跳过了决策映射要求开始实现，此时路由应识别出前置阶段的缺失，并建议先完成必要的准备工作，而非直接进入执行。准确的路由保证了每个请求都能被最合适的 Agent 处理，避免资源浪费和上下文错配。
