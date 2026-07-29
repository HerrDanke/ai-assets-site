---
title: "failure-diagnosis（失败诊断）"
description: "对重复性失败进行根因诊断的方法：收集失败信号、分析模式、定位根因、输出诊断报告。"
version: "1.0.0"
kind: "skill"
tags:
  - "diagnosis"
  - "root-cause"
  - "evolver"
appliesTo:
  - "evolver"
trigger: "当流水线中出现重复性失败信号时"
relatedAgents:
  - "evolver"
relatedSkills:
  - "self-evolution"
isChinaOriginal: false
updatedAt: 2026-07-29
---

失败诊断是 evolver 对流水线中出现的重复性失败进行系统性根因分析的方法论。它的起点是「收集失败信号」——包括编译错误、测试失败、运行时异常、以及 Agent 执行超时的记录。并非所有失败都值得诊断：单次偶发失败可能由环境抖动或外部依赖暂时不可用引起，通常可以重试解决。只有当失败呈现出重复模式（同一位置、同一类型、或同一 Agent）时，才进入正式的诊断流程。

诊断过程沿着「信号 → 模式 → 假设 → 验证」的路径推进。首先从历史信号中提炼出失败模式，然后提出根因假设（例如：某段代码假设了一个不存在的 API 字段、某个 Agent 的 prompt 缺少关键上下文、某个测试的断言与实现脱节）。每个假设都通过追加日志、回滚变更、或隔离测试来验证。最终输出一份诊断报告，描述根因、影响范围、以及建议的修复方向，供 self-evolution 技能执行修复。
