---
title: "spec-authoring（规格编写）"
description: "将已对齐的理解转化为技术规格说明的方法：识别接缝、编写用户故事、明确范围边界。"
version: "1.0.0"
kind: "skill"
tags:
  - "specification"
  - "documentation"
  - "spec-writer"
appliesTo:
  - "spec-writer"
trigger: "当工程方向已对齐、核心决策已确定，但尚未形成可执行的技术文档时"
relatedAgents:
  - "spec-writer"
relatedSkills:
  - "seam-design"
isChinaOriginal: false
updatedAt: 2026-07-29
---

规格编写是将决策地图与范围边界转化为可执行技术文档的过程。在这一阶段，spec-writer 需要将高层意图拆解为一系列具体的功能模块与用户故事，并识别每个模块与系统其余部分之间的「接缝」——即交互边界与依赖关系。用户故事的编写强调以用户视角描述行为价值，而非以技术视角描述实现细节。每个用户故事都应附带明确的验收标准，使得后续的测试与验收有据可依。

一份高质量的技术规格说明不仅是开发者的工作指南，更是整个 Agent 团队的共同参考点。它需要回答「做什么」而非「怎么做」——具体的实现策略留给后续的 executor 阶段。规格编写过程中，seam-design 技能用于确定每个功能模块的测试边界，确保后续的测试覆盖有清晰的着力点。最终产出的规格文档将成为 ticket-slicer 进行垂直切片的原材料。
