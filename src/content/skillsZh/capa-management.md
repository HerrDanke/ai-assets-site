---
title: "capa-management（CAPA 管理）"
description: "CAPA管理技能。定义了纠正预防措施的问题定义、措施制定和有效性检查方法。"
version: "1.0.0"
kind: "skill"
tags:
  - "gmp"
  - "quality"
  - "compliance"
  - "capa"
appliesTo:
  - "quality"
trigger: "当需要制定、审核或管理 CAPA（Corrective and Preventive Action）时"
relatedAgents:
  - "quality"
relatedSkills:
  - "root-cause-analysis"
  - "deviation-investigation"
isChinaOriginal: true
updatedAt: 2026-07-29
---

CAPA 管理技能定义了纠正预防措施的问题定义、措施制定和有效性检查方法。

## 适用场景

当需要制定、审核或管理 CAPA（Corrective and Preventive Action）时加载此技能。

## CAPA 框架

### 问题陈述（Problem Statement）

- 精准定义问题（非症状描述）
- 包含：发生了什么、在哪里发生、何时发生、影响范围
- 避免在问题陈述中预设原因

### 根本原因对齐（Root Cause Alignment）

- 每项措施必须对应一个已确认的根本原因
- 区分纠正措施（Corrective Action，消除已发生问题的根本原因）和预防措施（Preventive Action，防止潜在问题的发生）
- 避免"表面修复"——措施必须能防止复发

### 措施规划（Action Planning）

- 每项措施必须包含：具体行动、责任人、完成标志、截止日期
- 措施必须可验证（如何证明措施已实施且有效）

### 有效性检查（Effectiveness Check）

- 定义有效性检查的标准和方法
- 设定有效性检查的时间窗口
- 明确"有效"的判定标准

## 关键合规要点

- CAPA 必须与根本原因分析形成闭环
- 措施必须防止复发，而非仅仅恢复现状
- 有效性检查不能仅依赖"没有再发生"作为唯一标准
- CAPA 关闭前必须完成有效性确认

## 编写规则

- Corrective Action 和 Preventive Action 必须分开描述
- 措施描述必须具体到可执行层级（非"加强培训""提高意识"）
- 必须包含可持续性机制说明
