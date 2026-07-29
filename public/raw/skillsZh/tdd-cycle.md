---
title: "tdd-cycle（TDD 循环）"
description: "通过测试驱动开发实现代码的方法：RED 写失败测试 → GREEN 写最少实现 → REFACTOR 清理代码。"
version: "1.0.0"
kind: "skill"
tags:
  - "tdd"
  - "implementation"
  - "executor"
appliesTo:
  - "executor"
trigger: "当票据已处于 frontier 且需要开始编写实现代码时"
relatedAgents:
  - "executor"
relatedSkills:
  - "code-craft"
isChinaOriginal: false
updatedAt: 2026-07-29
---

TDD 循环是 executor 实现代码的核心方法论，包含三个阶段：RED、GREEN、REFACTOR。在 RED 阶段，开发者针对当前需求编写一个失败的测试用例，明确期望行为。这个测试必须是「刚好失败」的——它验证的应该是当前未实现的功能，而非语法错误或环境问题。编写失败测试的过程本身就是对需求的再确认：如果无法为某个行为写出测试，说明该行为的需求尚未清晰。

在 GREEN 阶段，开发者编写「最少的实现代码」让测试通过。这里的「最少」是关键——不写任何测试未要求的代码、不做任何测试未验证的优化。这一阶段的目标是让测试变绿，而非写出完美的代码。最后在 REFACTOR 阶段，在测试绿色的保护下，对代码进行清理：消除重复、改善命名、优化结构。REFACTOR 阶段不改变外部行为，因此测试应该始终保持绿色。这个循环以极小的步长推进，每一步都通过测试提供即时反馈。
