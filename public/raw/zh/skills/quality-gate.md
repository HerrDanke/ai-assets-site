---
title: "quality-gate（质量门禁）"
description: "设定和执行代码质量标准的方法：定义什么可以合并、什么必须修改。"
version: "1.0.0"
kind: "skill"
tags:
  - "quality"
  - "standards"
  - "reviewer"
appliesTo:
  - "reviewer"
trigger: "当 reviewer 完成代码审查、需要给出最终结论时"
relatedAgents:
  - "reviewer"
relatedSkills:
  - "code-review"
isChinaOriginal: false
updatedAt: 2026-07-29
---

质量门禁是 reviewer 在代码审查完成后执行最终决策的方法论。它基于代码审查的发现，对照项目预设的质量标准，给出 approve、request_changes 或 comment 的结论。质量门禁的核心价值在于将质量标准从「个人判断」转化为「显式规则」——什么级别的缺陷必须阻塞合并、什么问题可以事后修复、什么情况下允许降级接受，都应有明确的定义。

一个有效的质量门禁需要平衡「严格」与「务实」：过于严格会导致审查成为瓶颈，过于宽松则失去守门意义。门禁规则应当文档化，并在团队实践中持续演进。当出现边界案例时（例如一个不影响功能但违反编码风格的修改），质量门禁提供了一套一致的决策框架，避免因人而异的随意性。最终，质量门禁的目标是让「合并后的代码始终处于可发布状态」，而非追求完美。
