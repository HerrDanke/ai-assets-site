---
title: "change-control-writing（变更控制文档撰写）"
description: "变更控制文档撰写技能。定义了符合GMP要求的变更控制文档结构、撰写方法和合规要点。"
version: "1.0.0"
kind: "skill"
tags:
  - "change-control"
  - "gmp"
  - "compliance"
  - "documentation"
appliesTo:
  - "gmp-compliance"
trigger: "当需要撰写或审核变更控制（Change Control）文档时"
relatedAgents:
  - "gmp-compliance"
relatedSkills: []
isChinaOriginal: true
updatedAt: 2026-07-29
---

变更控制文档撰写是将变更请求转化为符合GMP要求的正式文档的过程。在这一阶段，撰写人需要将变更意图拆解为一系列结构化的章节，确保文档覆盖所有合规要点，并能够通过质量部门的审核。变更控制文档不仅记录变更的内容本身，更记录变更的理由、影响、风险和验证要求，为变更的审批、实施和关闭提供完整的证据链。

一份高质量的变更控制文档不仅是变更实施的依据，更是GMP合规的关键证据。它需要回答「为什么变」「变什么」「怎么变」「如何验证」「如何回退」等核心问题——具体的实施细节留给执行团队在实施计划中细化。变更控制文档的撰写需要结合FMEA等风险评估方法，确保变更的风险被充分识别和控制。最终产出的变更控制文档将成为变更审批流程的原材料，也是后续审计和检查的重要依据。

## Document Structure

变更控制文档必须包含以下章节：

1. **Objective** — 变更目的，一句话精准定义
2. **Scope** — 清晰界定变更范围，不模糊
3. **Background / Justification** — 变更理由（业务驱动/合规驱动/CAPA驱动）
4. **Description of Change** — 变更的详细描述（Before → After）
5. **Impact Assessment** — 影响评估，必须覆盖：
   - GMP合规性
   - 产品质量
   - 数据完整性
   - 验证状态（是否影响现有验证）
   - 相关系统和流程
6. **Risk Assessment** — 风险评估（结合FMEA或等同方法）
7. **Implementation Plan** — 实施计划（步骤清晰、可执行、含时间线）
8. **Verification / Validation Requirements** — 验证/确认要求
9. **Rollback Plan** — 回退策略（如适用）
10. **Conclusion** — 结论

## Key Compliance Points

- 任何影响已验证状态的变更必须触发再验证评估
- 变更必须评估对21 CFR Part 11合规性的影响
- 变更实施前必须完成所有前提条件的确认
- 变更完成后必须进行关闭确认

## Writing Rules

- 变更描述必须精确到具体参数/配置/版本的改变
- Impact Assessment 不能泛泛而谈，必须针对本次变更逐项分析
- Risk Assessment 必须有明确的接受标准
- 实施计划必须包含职责分配和完成标志
