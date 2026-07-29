---
title: "code-craft"
description: "Methods for writing high-quality code: code style, naming conventions, structure optimization, keeping tests green."
version: "1.0.0"
kind: "skill"
tags:
  - "quality"
  - "refactoring"
  - "executor"
appliesTo:
  - "executor"
trigger: "When executor cleans up code during the REFACTOR phase of TDD"
relatedAgents:
  - "executor"
relatedSkills:
  - "tdd-cycle"
isChinaOriginal: false
updatedAt: 2026-07-29
---

Code craft is the methodology used by executor to improve code quality during the REFACTOR phase of TDD. Its core goal is to transform "code that works" into "code that is easy to understand," while always keeping tests green. The dimensions code craft focuses on include: consistent code style (following existing project conventions), accurate naming (let names reveal intent rather than implementation), reasonable structure (short functions, single responsibility, clear layers), and moderate abstraction (not introducing generality not required by tests).

"Keeping tests green" is a prerequisite constraint of code craft. All refactoring must be done under the protection of green tests; once tests turn red, it means the refactoring has changed external behavior, and you should immediately roll back or fix the tests. Code craft also emphasizes "minimal changes" — each refactoring does only one thing, making it easier to locate issues. When REFACTOR is complete, the code should be in a state where the next person to take it over can understand its intent, locate modification points, and continue development safely without asking the original author.
