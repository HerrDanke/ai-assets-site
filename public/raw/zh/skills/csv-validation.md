---
title: "csv-validation（计算机化系统验证）"
description: "计算机化系统验证（CSV）技能。定义了基于GAMP5的验证生命周期和文档要求。"
version: "1.0.0"
kind: "skill"
tags:
  - "gamp5"
  - "validation"
  - "compliance"
  - "quality"
appliesTo:
  - "qms-writer"
  - "automation-engineer"
  - "compliance-reviewer"
trigger: "当需要制定CSV方案、撰写验证协议或评估验证状态时"
relatedAgents:
  - "qms-writer"
  - "automation-engineer"
  - "compliance-reviewer"
relatedSkills:
  - "data-integrity-review"
  - "change-control-writing"
isChinaOriginal: true
updatedAt: 2026-07-29
---

计算机化系统验证（CSV）技能定义了基于GAMP5的验证生命周期和文档要求，适用于制药、医疗器械等受监管行业的计算机系统确认与验证活动。

## 何时使用

当需要制定CSV方案、撰写验证协议或评估验证状态时加载此技能。

## GAMP5 Framework

### System Categories
- **Category 1:** 基础设施软件
- **Category 3:** 不可配置软件
- **Category 4:** 可配置软件
- **Category 5:** 定制软件

### Validation Lifecycle
1. **Planning** — 验证计划（VP）
2. **Specification** — URS/FS/DS/HDS
3. **Configuration / Coding** — 配置/编程
4. **Verification** — 代码审查、FAT/SAT
5. **Testing** — IQ/OQ/PQ
6. **Reporting** — 验证总结报告（VSR）
7. **Operation & Maintenance** — 运维阶段
8. **Retirement** — 系统退役

## Key Documents

- **VP** — Validation Plan
- **URS** — User Requirement Specification
- **FS** — Functional Specification
- **DS** — Design Specification
- **IQ** — Installation Qualification
- **OQ** — Operational Qualification
- **PQ** — Performance Qualification
- **VSR** — Validation Summary Report

## Key Compliance Points

- 验证范围必须与系统风险等级相称
- 关键功能必须优先测试
- 偏差必须在验证关闭前处理
- 验证状态必须定期评估（Periodic Review）
- 变更后必须评估对验证状态的影响
