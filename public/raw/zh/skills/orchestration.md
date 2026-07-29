---
title: "orchestration（编排调度）"
description: "统筹整个工程流水线的方法：理解用户需求、判断当前阶段、拉起子图团队、同步进度。"
version: "1.0.0"
kind: "skill"
tags:
  - "orchestration"
  - "main-assistant"
  - "multi-agent"
appliesTo:
  - "main-assistant"
trigger: "当用户提出一个新的工程任务，需要判断当前处于流水线的哪个阶段并调度相应的 Agent 团队时"
relatedAgents:
  - "main-assistant"
relatedSkills:
  - "stage-routing"
isChinaOriginal: false
updatedAt: 2026-07-29
---

编排调度是 main-assistant 统筹整个工程流水线运转的方法论。当用户提出一个新的工程任务时，main-assistant 需要首先理解任务意图，然后判断当前处于流水线的哪个阶段——是决策地图尚未完成的早期探索，还是规格已就绪的中期执行，还是进入迭代优化的后期演进。基于阶段判断，main-assistant 拉起相应的子图团队（sub-agent team），为它们分配任务上下文，并设定同步节点。

编排调度的核心挑战在于「信息传递」与「状态同步」。每个子图团队完成自己的工作后，结果需要以结构化的方式汇总回 main-assistant，由 main-assistant 判断是否进入下一阶段，还是需要回到之前的阶段进行修正。这种调度不是线性的瀑布，而是一个可以回环的循环：执行中发现方向错误，可能需要回到 wayfinder 重新做决策映射；测试中发现需求歧义，可能需要回到 spec-writer 重新编写规格。编排调度使多 Agent 协作保持有序而非混乱。
