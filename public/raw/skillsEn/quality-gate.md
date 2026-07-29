---
title: "quality-gate (Quality Gate)"
description: "A method for defining and enforcing code quality standards: specifying what can be merged and what must be modified."
version: "1.0.0"
kind: "skill"
tags:
  - "quality"
  - "standards"
  - "reviewer"
appliesTo:
  - "reviewer"
trigger: "When the reviewer completes a code review and needs to render a final verdict"
relatedAgents:
  - "reviewer"
relatedSkills:
  - "code-review"
isChinaOriginal: false
updatedAt: 2026-07-29
---

A quality gate is a methodology by which the reviewer renders a final decision after completing a code review. Based on the findings of the code review and against the project's predefined quality standards, it delivers a verdict of approve, request_changes, or comment. The core value of a quality gate lies in transforming quality standards from "personal judgment" into "explicit rules" — what severity of defect must block a merge, what issues can be fixed after the fact, and under what circumstances a downgraded acceptance is permitted should all have clear definitions.

An effective quality gate must balance "strictness" with "pragmatism": overly strict and the review becomes a bottleneck, overly loose and it loses its purpose as a gatekeeper. Gate rules should be documented and continuously evolved through team practice. When edge cases arise (for example, a change that does not affect functionality but violates coding style), the quality gate provides a consistent decision-making framework, avoiding arbitrary decisions that vary from person to person. Ultimately, the goal of a quality gate is to ensure that "the merged code is always in a releasable state," not to pursue perfection.
