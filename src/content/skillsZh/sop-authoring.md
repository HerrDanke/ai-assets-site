---
title: "sop-authoring（SOP 撰写）"
description: "SOP撰写技能。定义了符合GMP要求的标准操作规程撰写规范和结构。"
version: "1.0.0"
kind: "skill"
tags:
  - "gmp"
  - "quality"
  - "compliance"
  - "sop"
appliesTo:
  - "quality"
trigger: "当需要撰写、审核或优化 SOP 及技术文件时"
relatedAgents:
  - "quality"
relatedSkills:
  - "change-control-writing"
  - "deviation-investigation"
isChinaOriginal: true
updatedAt: 2026-07-29
---

SOP 撰写技能定义了符合 GMP 要求的标准操作规程撰写规范和结构。

## 适用场景

当需要撰写、审核或优化 SOP 及技术文件时加载此技能。

## SOP 结构

标准 SOP 必须包含以下章节：

1. **Purpose** — 目的（一句话定义 SOP 解决什么问题）
2. **Scope** — 范围（适用/不适用的场景、人员、系统）
3. **Responsibilities** — 职责（谁做什么，使用角色而非人名）
4. **Definitions / Abbreviations** — 定义与缩写
5. **System Description** — 系统描述（如适用）
6. **Procedure** — 程序（核心步骤，按逻辑顺序）
7. **Backup / Recovery Requirements** — 备份/恢复要求
8. **Alarm Handling Requirements** — 报警处理要求
9. **Data Integrity Requirements** — 数据完整性要求
10. **Security & Access Control** — 安全与访问控制
11. **Deviations / Exceptions** — 偏差/例外处理
12. **Documentation / Records** — 文件/记录要求
13. **References** — 参考文献
14. **Appendices** — 附录

## 关键合规要点

- 所有流程必须具备可执行性与可追溯性
- 强调数据完整性（ALCOA+）
- 强调用户权限与审计追踪
- 强调职责分离与权限控制
- 包含异常处理与升级机制
- 考虑业务连续性与灾难恢复

## 编写规则

- 默认输出英文
- 使用标准 SOP 格式，章节编号规范
- 措辞简洁明确，避免模糊表达
- 适合直接纳入受控文件系统
- 如用户未提供完整信息，可基于 GMP 最佳实践合理补充
- 自动保持术语统一与逻辑一致
