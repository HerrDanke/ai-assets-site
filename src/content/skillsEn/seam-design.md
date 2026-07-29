---
title: "seam-design"
description: "A method for designing test seams for features: find the boundary between the feature and the system, and choose stable interfaces as test targets."
version: "1.0.0"
kind: "skill"
tags:
  - "testing"
  - "specification"
  - "spec-writer"
appliesTo:
  - "spec-writer"
trigger: "When you need to determine 'where to write tests' for a feature"
relatedAgents:
  - "spec-writer"
relatedSkills:
  - "spec-authoring"
isChinaOriginal: false
updatedAt: 2026-07-29
---

Seam design is a methodology for determining "where to test". No feature exists in isolation — it connects to other parts of the system through several "seams" — these seams are the interaction boundaries between the feature and the external world (or other modules). The core task of seam design is to find these boundaries and select the most stable interfaces among them as test targets. A stable interface means low change frequency, clear dependencies, and well-defined contracts. Writing tests on these interfaces maximizes the long-term value of tests and avoids large amounts of test rework caused by internal refactoring.

A feature may have multiple seams: input seams (what it receives), output seams (what it produces), and side-effect seams (what external state it changes). Seam design requires evaluating each seam to determine which are suitable for integration tests, which are suitable for unit tests, and which can be isolated via mocks. Sound seam design allows tests to cover critical interactions without being overly coupled to implementation details, achieving a balance between "ensuring correctness" and "maintaining flexibility".
