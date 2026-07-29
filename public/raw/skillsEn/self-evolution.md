---
title: "self-evolution"
description: "Method for diagnosing recurring failures and applying minimal, durable fixes at the correct level: root cause analysis → level identification → fix → verification."
version: "1.0.0"
kind: "skill"
tags:
  - "evolution"
  - "self-healing"
  - "evolver"
appliesTo:
  - "evolver"
trigger: "When recurring failure patterns (rather than isolated one-off failures) appear in the pipeline"
relatedAgents:
  - "evolver"
relatedSkills:
  - "failure-diagnosis"
isChinaOriginal: false
updatedAt: 2026-07-29
---

Self-evolution is the methodology by which the evolver, upon detecting recurring failure patterns, applies durable fixes through root cause analysis and level identification. Its process is divided into four steps: root cause analysis (finding the fundamental cause of the failure, not just its symptoms), level identification (determining at which level the fix should be applied—whether it's a single code file, a specific Agent's configuration, the rules of the entire pipeline, or the contract of an external dependency), fix implementation (applying a minimal fix to avoid excessive changes), and verification (confirming that the fix is effective and has not introduced new problems).

The core principle of self-evolution is "fix at the correct level." If a bug is caused by a logical error in a function, the fix should be inside that function; if it's caused by an unreasonable Agent configuration, the fix should be at the configuration level; if process rules lead to repeated failures, the fix should be at the rule level. Fixing at the wrong level—such as working around at the code level a problem that should have been solved by configuration—only produces fragile workarounds, not genuine improvements. Self-evolution enables the pipeline to learn from failures and continuously improve.
