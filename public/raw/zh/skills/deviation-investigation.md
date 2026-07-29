---
title: "deviation-investigation（偏差调查）"
description: "偏差调查与撰写技能。定义了GMP偏差事件的描述、调查和文档化方法。"
version: "1.0.0"
kind: "skill"
tags:
  - "gmp"
  - "deviation"
  - "compliance"
  - "quality"
appliesTo:
  - "quality"
trigger: "当需要撰写、审核或调查偏差（Deviation）事件时"
relatedAgents:
  - "quality"
relatedSkills:
  - "failure-diagnosis"
isChinaOriginal: true
updatedAt: 2026-07-29
---

偏差调查与撰写技能。定义了 GMP 偏差事件的描述、调查和文档化方法。

## 何时使用

当需要撰写、审核或调查偏差（Deviation）事件时加载此技能。

## 文档结构

偏差文档必须包含以下章节：

1. **事件描述（Event Description）**
   - 客观、无推测、无归咎
   - 包含：时间、地点、涉及人员/设备、发现方式
2. **即时措施（Immediate Actions / Containment）**
   - 发现问题后立即采取的行动
   - 隔离/暂停/保护产品的措施
3. **根本原因分析（Root Cause Analysis）**
   - 使用结构化方法（5 Whys / Fishbone / Fault Tree）
   - 区分直接原因和根本原因
4. **影响评估（Impact Assessment）**
   - 批次影响（是否影响已放行产品）
   - 产品质量影响
   - 系统影响（是否影响其他系统/流程）
   - 数据完整性影响
5. **CAPA 建议（CAPA Recommendations）**
   - 纠正措施（Corrective Action）
   - 预防措施（Preventive Action）
6. **结论与处置决定（Conclusion & Disposition）**

## 关键合规要点

- 偏差描述必须与最终结论的逻辑链可追溯
- 如果涉及数据完整性问题，必须启动独立调查
- 偏差关闭前必须完成所有 CAPA 的分配
- 超过 SOP 规定时间的偏差必须进行质量评估

## 撰写规则

- 事件描述只写事实，不使用"显然""应该"等推测性语言
- RCA 必须深入到可控制的层级（非"人员失误"表面原因）
- Impact Assessment 必须引用具体批次号/产品代码
