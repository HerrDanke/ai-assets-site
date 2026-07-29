---
title: "Vertical Slicing"
description: "A method for breaking down technical specs into independently deliverable vertical-slice tickets: identify prerequisite refactorings, define blocking edges, validate granularity."
version: "1.0.0"
kind: "skill"
tags:
  - "slicing"
  - "task-decomposition"
  - "ticket-slicer"
appliesTo:
  - "ticket-slicer"
trigger: "When the technical spec is complete and confirmed, and you need to break down 'what to do' into 'how to do it piece by piece'"
relatedAgents:
  - "ticket-slicer"
relatedSkills:
  - "dependency-mapping"
isChinaOriginal: false
updatedAt: 2026-07-29
---

Vertical slicing is a methodology for breaking down a complete technical spec into a series of independently deliverable work tickets. Unlike horizontal layering (doing all the database layer first, then all the service layer, and finally all the UI), vertical slicing emphasizes that each ticket approaches the work from the user's perspective, cuts through all necessary layers, and delivers a usable increment of value. Each slice is a "minimum viable unit" that can be independently verified, integrated, or even released when complete.

Three core problems must be addressed during slicing: first, identifying prerequisite refactorings — structural work that produces no user value but paves the way for subsequent slices; second, defining blocking edges — which slices must be completed before others and which can be advanced in parallel; and third, validating granularity — whether each slice is appropriately sized, as overly large slices lose iteration flexibility while overly small slices create excessive integration overhead. Good slicing planning allows executors in the pipeline to work in parallel while ensuring every step of the deliverable is verifiable.
