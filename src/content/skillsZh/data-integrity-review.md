---
title: "data-integrity-review（数据完整性审查）"
description: "数据完整性审查技能。定义了基于ALCOA+原则的数据完整性评估方法。"
version: "1.0.0"
kind: "skill"
tags:
  - "gmp"
  - "data-integrity"
  - "compliance"
  - "quality"
appliesTo:
  - "quality"
trigger: "当需要评估数据完整性风险、审查数据完整性合规性时"
relatedAgents:
  - "quality"
relatedSkills:
  - "deviation-investigation"
isChinaOriginal: true
updatedAt: 2026-07-29
---

数据完整性审查技能。定义了基于 ALCOA+ 原则的数据完整性评估方法。

## 何时使用

当需要评估数据完整性风险、审查数据完整性合规性时加载此技能。

## ALCOA+ 原则

- **Attributable** — 数据可追溯到产生者
- **Legible** — 数据可读、可理解
- **Contemporaneous** — 数据在产生时记录
- **Original** — 原始数据或经认证的副本
- **Accurate** — 数据准确、无错误
- **Complete** — 数据完整、无遗漏
- **Consistent** — 数据一致、有时间顺序
- **Enduring** — 数据持久保存
- **Available** — 数据在需要时可获取

## 审查范围

数据完整性审查必须覆盖：
- 审计追踪（Audit Trail）的完整性和审查频率
- 用户访问控制（权限分离、唯一用户ID）
- 电子签名（21 CFR Part 11 合规）
- 数据备份与恢复
- 数据归档与保留
- 系统时钟同步
- 数据修改的控制和记录

## 关键合规要点

- 审计追踪不能关闭、不能修改
- 数据修改必须有记录和理由
- 系统管理员不能是数据审批人
- 电子签名必须等同于手写签名
- 备份数据必须定期测试恢复
