---
title: "code-craft（代码工艺）"
description: "编写高质量代码的方法：代码风格、命名规范、结构优化、保持测试绿色。"
version: "1.0.0"
kind: "skill"
tags:
  - "quality"
  - "refactoring"
  - "executor"
appliesTo:
  - "executor"
trigger: "当 executor 在 TDD 的 REFACTOR 阶段清理代码时"
relatedAgents:
  - "executor"
relatedSkills:
  - "tdd-cycle"
isChinaOriginal: false
updatedAt: 2026-07-29
---

代码工艺是 executor 在 TDD 的 REFACTOR 阶段对代码进行质量提升的方法论。它的核心目标是将「能工作的代码」转化为「好理解的代码」，同时始终保持测试绿色。代码工艺关注的维度包括：一致的代码风格（遵循项目既有约定）、准确的命名（让名称揭示意图而非实现）、合理的结构（函数短小、职责单一、层次清晰）、以及适度的抽象（不引入测试未要求的 generality）。

「保持测试绿色」是代码工艺的前提约束。任何重构都必须在测试绿色的保护下进行，一旦测试变红，说明重构改变了外部行为，应立即回滚或修复测试。代码工艺还强调「最小改动」——每次重构只做一件事，便于定位问题。当 REFACTOR 完成后，代码应处于这样一种状态：下一个接手的人能够在不询问原作者的情况下理解其意图、定位修改点、并安全地继续开发。
