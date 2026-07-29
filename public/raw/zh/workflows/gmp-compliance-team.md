---
title: "GMP Compliance Team"
description: "GMP合规团队 - 专注于制药行业GMP合规文档、自动化系统故障诊断和技术翻译的多Agent协作流水线"
version: "1.0.0"
kind: "workflow"
tags: ["pipeline", "multi-agent", "gmp", "pharma", "compliance"]
yamlPath: "/workflows/gmp-compliance-team.yaml"
participants:
  - "qms-writer"
  - "compliance-reviewer"
  - "automation-engineer"
  - "translation-specialist"
skills:
  - "change-control-writing"
  - "deviation-investigation"
  - "capa-management"
  - "gmp-risk-assessment"
  - "root-cause-analysis"
  - "data-integrity-review"
  - "pcs7-troubleshooting"
  - "wincc-diagnostics"
  - "alarm-management"
  - "csv-validation"
  - "en-de-translation"
profiles:
  - "gmp-quality-officer"
  - "qms-specialist"
  - "automation-engineer"
  - "technical-translator"
stages: 5
overview: |
  GMP Compliance Team 是一个专注于制药行业 GMP 合规的多 Agent 协作系统。该系统遵循 The Zerolph 的设计哲学，通过模块化的 Agent、Skill 和 Profile 组合，实现 GMP 合规文档撰写、自动化系统故障诊断和技术翻译等功能。

  系统包含 4 个 Agent：QMS 文档撰写专家、合规审查专家、自动化工程师、技术翻译专家。
designPhilosophy: |
  ## 设计原则

  ### 1. 上下文工程
  每个 Agent 的上下文必须完整（约束、信息、任务），且与当前任务无关的冗余必须剔除。

  ### 2. 基因工程
  Skill（经验）被锚定在 Agent 预设（结构）中，经验不再漂移。

  ### 3. 模块可组合
  Profile 和 Skill 是小而可组合的模块，非单一庞大 Prompt。

  ### 4. 角色隔离
  Multi-Agent 的本质是上下文隔离，每个 Agent 保持心智纯净。

  ### 5. 基因型/表现型分离
  Definition（基因型）与运行时实例（表现型）分离。
updatedAt: 2026-07-29
---

## 概述

GMP Compliance Team 是一个专注于制药行业 GMP 合规的多 Agent 协作系统。该系统遵循 The Zerolph 的设计哲学，通过模块化的 Agent、Skill 和 Profile 组合，实现 GMP 合规文档撰写、自动化系统故障诊断和技术翻译等功能。

## 核心能力

| 能力 | Agent | 说明 |
|------|-------|------|
| QMS 文档撰写 | qms-writer | 变更控制、偏差、CAPA 等质量体系文档 |
| 合规审查 | compliance-reviewer | 法规符合性审查、数据完整性评估 |
| 自动化诊断 | automation-engineer | PCS7/WinCC 系统故障排查 |
| 技术翻译 | translation-specialist | 英-德/德-英 GMP 技术文件翻译 |

## 设计原则

1. **上下文工程** - 每个 Agent 的上下文完整且精简
2. **基因工程** - Skill 锚定在 Agent 预设中，经验不漂移
3. **模块可组合** - Profile 和 Skill 是小而可组合的模块
4. **角色隔离** - Multi-Agent 本质是上下文隔离
