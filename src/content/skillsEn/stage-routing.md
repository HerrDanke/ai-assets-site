---
title: "stage-routing"
description: "The methodology for determining the pipeline stage based on user input and routing to the corresponding Agent."
version: "1.0.0"
kind: "skill"
tags:
  - "routing"
  - "main-assistant"
  - "multi-agent"
appliesTo:
  - "main-assistant"
trigger: "When a user message arrives and it is necessary to quickly determine which stage agent the request should be routed to"
relatedAgents:
  - "main-assistant"
relatedSkills:
  - "orchestration"
isChinaOriginal: false
updatedAt: 2026-07-29
---

Stage routing is the methodology by which main-assistant quickly determines the pipeline stage based on user input and routes to the corresponding Agent. It solves the problem of "when a request comes in, who should handle it." The core of stage routing is a set of classification rules: based on the semantic characteristics of the user's message (whether it describes a vague requirement, asks about a specific implementation detail, or reports a runtime error), it maps the request to the corresponding pipeline stage—wayfinder (decision mapping), spec-writer (specification authoring), ticket-slicer (task slicing), executor (code implementation), reviewer (code review), or evolver (failure fixing).

Routing is not a one-time decision, but ongoing state machine maintenance. When the user supplements information, changes intent, or new input arises from work in the original stage, routing needs to be re-evaluated. Stage routing is also responsible for handling "cross-stage" requests—for example, when the user skips decision mapping and directly requests implementation, routing should identify the missing prerequisite stage and suggest completing the necessary preparation work first, rather than proceeding directly to execution. Accurate routing ensures that every request is handled by the most appropriate Agent, avoiding resource waste and context mismatch.
