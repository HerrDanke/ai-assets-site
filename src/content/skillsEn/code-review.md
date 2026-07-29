---
title: "code-review"
description: "A methodology for quality review of code output: checks correctness, test coverage, security, performance, and readability; produces an approve/request_changes/comment conclusion."
version: "1.0.0"
kind: "skill"
tags:
  - "review"
  - "quality"
  - "reviewer"
appliesTo:
  - "reviewer"
trigger: "When the executor completes an implementation and submits a code diff, and code quality needs to be verified"
relatedAgents:
  - "reviewer"
relatedSkills:
  - "quality-gate"
isChinaOriginal: false
updatedAt: 2026-07-29
---

Code review is a methodology by which a reviewer performs a systematic quality check on the code diff submitted by an executor. The review is conducted along multiple dimensions: correctness (does the code do what it claims to do, are edge cases handled), test coverage (does new or modified code have corresponding tests, and do those tests truly verify behavior rather than implementation), security (are there risks of injection, unauthorized access, data leakage, etc.), performance (are there obvious N+1 queries, memory leaks, or unnecessary re-renders), and readability (are names clear, is the structure sound, are comments necessary and accurate).

The output of a review is a structured conclusion with three levels: approve (the code meets the standard and can be merged), request_changes (there must be issues fixed, requiring re-review after fixes), and comment (there are suggested improvements, but they do not block merging). Regardless of the conclusion, specific inline comments should explain the reasoning, rather than speaking in generalities. Code review is not about nitpicking — it is about sharing knowledge across the team, spreading best practices, and holding the line on quality.
