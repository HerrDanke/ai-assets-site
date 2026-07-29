---
title: "gmp-risk-assessment（GMP风险评估）"
description: "GMP风险评估技能。定义了制药行业风险评估的方法论（FMEA、HACCP、风险矩阵）和应用场景。"
version: "1.0.0"
kind: "skill"
tags:
  - "gmp"
  - "risk-assessment"
  - "compliance"
  - "quality-assurance"
  - "fmea"
  - "haccp"
appliesTo:
  - "quality-officer"
  - "compliance-reviewer"
trigger: "当需要进行GMP风险评估（变更影响评估、偏差影响评估、供应商风险评估等）时"
relatedAgents:
  - "quality-officer"
  - "compliance-reviewer"
relatedSkills:
  - "deviation-investigation"
  - "capa-management"
  - "change-control-writing"
  - "sop-authoring"
  - "data-integrity-review"
isChinaOriginal: true
updatedAt: 2026-07-29
---

# Skill: GMP Risk Assessment

## When to Use

当需要进行GMP风险评估（变更影响评估、偏差影响评估、供应商风险评估等）时加载此技能。

## Risk Assessment Methods

### FMEA (Failure Mode and Effects Analysis)
- **Severity (S)** — 失效影响的严重程度（1-10）
- **Occurrence (O)** — 失效原因的发生频率（1-10）
- **Detection (D)** — 失效的可检测性（1-10）
- **RPN = S × O × D** — 风险优先数

### Risk Matrix
- 将风险按严重性和可能性分级
- 定义可接受/不可接受风险边界
- 对不可接受风险制定控制措施

## Assessment Scope

GMP风险评估必须覆盖：
- **产品质量风险** — 对最终产品质量的潜在影响
- **患者安全风险** — 对患者健康的潜在影响
- **数据完整性风险** — 对数据可靠性的潜在影响（ALCOA+）
- **合规风险** — 对法规符合性的潜在影响
- **业务连续性风险** — 对生产连续性的潜在影响

## Key Compliance Points

- 风险评估必须有明确的接受标准
- 残余风险必须被确认和接受
- 风险控制措施必须可验证
- 风险评估必须定期复审

## Writing Rules

- 风险描述必须具体（非"可能影响产品质量"）
- 风险等级必须有明确的判定依据
- 控制措施必须与风险等级相称
