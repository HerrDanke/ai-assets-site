---
title: "code-review（代码审查）"
description: "对代码产出进行质量审查的方法：检查正确性、测试覆盖、安全、性能、可读性，给出 approve/request_changes/comment 结论。"
version: "1.0.0"
kind: "skill"
tags:
  - "review"
  - "quality"
  - "reviewer"
appliesTo:
  - "reviewer"
trigger: "当 executor 完成实现并提交代码 diff，需要有人验证代码质量时"
relatedAgents:
  - "reviewer"
relatedSkills:
  - "quality-gate"
isChinaOriginal: false
updatedAt: 2026-07-29
---

代码审查是 reviewer 对 executor 提交的代码 diff 进行系统性质量检查的方法论。审查沿着多个维度展开：正确性（代码是否做了它声称要做的事，边界条件是否处理）、测试覆盖（新增或修改的代码是否有对应的测试，测试是否真正验证了行为而非实现）、安全性（是否有注入、越权、数据泄露等风险）、性能（是否存在明显的 N+1 查询、内存泄漏、或不必要的重渲染）、以及可读性（命名是否清晰、结构是否合理、注释是否必要且准确）。

审查的输出是一个结构化结论，包含三个等级：approve（代码符合标准，可以合并）、request_changes（存在必须修复的问题，修复后需重新审查）、以及 comment（有建议性改进点，但不阻塞合并）。无论哪个结论，都应有具体的行内评论说明原因，而非泛泛而谈。代码审查不是挑毛病，而是在团队层面共享知识、传播最佳实践、并守住质量底线。
