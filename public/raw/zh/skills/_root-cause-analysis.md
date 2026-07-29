---
title: "root-cause-analysis（根本原因分析）"
description: "根本原因分析技能。定义了5 Whys、鱼骨图、故障树等RCA方法的应用规范。"
version: "1.0.0"
kind: "skill"
tags:
  - "gmp"
  - "rca"
  - "deviation"
  - "quality"
  - "compliance"
appliesTo:
  - "quality"
trigger: "当需要进行根本原因分析（偏差调查、故障分析、投诉调查等）时"
relatedAgents:
  - "quality"
relatedSkills:
  - "failure-diagnosis"
isChinaOriginal: true
updatedAt: 2026-07-29
---

根本原因分析技能。定义了 5 Whys、鱼骨图、故障树等 RCA 方法的应用规范。

## 何时使用

当需要进行根本原因分析（偏差调查、故障分析、投诉调查等）时加载此技能。

## RCA 方法

### 5 Whys
- 从现象出发，连续追问"为什么"
- 直到找到可控制的根本原因
- 避免停在"人员失误"——继续追问为什么人员会失误

### Fishbone (Ishikawa) Diagram
按 6M 分类分析：
- **Man (人员)** — 培训、资质、疲劳
- **Machine (设备)** — 校准、维护、设计
- **Material (物料)** — 规格、存储、供应商
- **Method (方法)** — SOP、工艺参数、工作实践
- **Measurement (测量)** — 校准、方法、频率
- **Environment (环境)** — 温湿度、洁净度、压差

### Fault Tree Analysis
- 从顶层事件向下分解
- 使用 AND/OR 逻辑门
- 识别最小割集

## 关键合规要点

- 根本原因必须可控制（非"人为错误"这种不可控原因）
- 分析过程必须有记录
- 必须区分直接原因和根本原因
- 多个根本原因的情况必须全部识别

## 撰写规则

- 分析过程必须展示推理链
- 结论必须有证据支撑
- 避免预设结论再找证据
