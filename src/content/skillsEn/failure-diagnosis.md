---
title: "failure-diagnosis"
description: "A methodology for root-cause diagnosis of recurring failures: collect failure signals, analyze patterns, locate root causes, and output a diagnostic report."
version: "1.0.0"
kind: "skill"
tags:
  - "diagnosis"
  - "root-cause"
  - "evolver"
appliesTo:
  - "evolver"
trigger: "When recurring failure signals appear in the pipeline"
relatedAgents:
  - "evolver"
relatedSkills:
  - "self-evolution"
isChinaOriginal: false
updatedAt: 2026-07-29
---

Failure diagnosis is the evolver's methodology for conducting systematic root-cause analysis on recurring failures that appear in the pipeline. Its starting point is "collecting failure signals" — including compilation errors, test failures, runtime exceptions, and records of Agent execution timeouts. Not all failures warrant diagnosis: one-off occasional failures may be caused by environment jitter or temporary unavailability of external dependencies, and can usually be resolved by retrying. Only when failures exhibit a recurring pattern (same location, same type, or same Agent) does the formal diagnosis process begin.

The diagnosis process follows the path of "signal → pattern → hypothesis → verification." First, failure patterns are distilled from historical signals, then root-cause hypotheses are proposed (for example: a piece of code assumes a non-existent API field, an Agent's prompt lacks critical context, or a test's assertion is out of sync with the implementation). Each hypothesis is verified by adding logs, rolling back changes, or running isolated tests. Finally, a diagnostic report is produced, describing the root cause, scope of impact, and suggested repair direction, for the self-evolution skill to execute the fix.
