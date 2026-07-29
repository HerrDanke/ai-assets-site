---
title: "tdd-cycle (TDD Cycle)"
description: "A method for implementing code through test-driven development: RED write a failing test → GREEN write the minimal implementation → REFACTOR clean up the code."
version: "1.0.0"
kind: "skill"
tags:
  - "tdd"
  - "implementation"
  - "executor"
appliesTo:
  - "executor"
trigger: "When a ticket is on the frontier and it's time to start writing implementation code"
relatedAgents:
  - "executor"
relatedSkills:
  - "code-craft"
isChinaOriginal: false
updatedAt: 2026-07-29
---

The TDD Cycle is the core methodology for the executor to implement code, consisting of three phases: RED, GREEN, and REFACTOR. In the RED phase, the developer writes a failing test case for the current requirement, clarifying the expected behavior. This test must "just fail" — it should verify functionality that is not yet implemented, not syntax errors or environmental issues. The process of writing a failing test is itself a reconfirmation of the requirement: if you can't write a test for a certain behavior, it means the requirement for that behavior is not yet clear.

In the GREEN phase, the developer writes "the minimal implementation" to make the test pass. The word "minimal" is key here — don't write any code the test doesn't require, don't do any optimization the test doesn't verify. The goal of this phase is to turn the tests green, not to write perfect code. Finally, in the REFACTOR phase, with the protection of green tests, the code is cleaned up: eliminating duplication, improving naming, and optimizing structure. The REFACTOR phase does not change external behavior, so the tests should remain green throughout. This cycle advances in extremely small steps, with each step providing immediate feedback through the tests.
