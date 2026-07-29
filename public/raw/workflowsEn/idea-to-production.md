---
title: "Engineer Pipeline"
description: "A complete automated pipeline from vague ideas to production code"
version: "1.0.0"
kind: "workflow"
tags: ["pipeline", "multi-agent", "full-lifecycle"]
yamlPath: "/workflows/idea-to-production.yaml"
participants:
  - "main-assistant"
  - "wayfinder"
  - "spec-writer"
  - "ticket-slicer"
  - "executor"
  - "reviewer"
  - "evolver"
stages: 6
diagram: |
  graph LR
    subgraph Main Pipeline
      WF[wayfinder<br/>Fog Planning] --> SW[spec-writer<br/>Spec Authoring]
      SW --> TS[ticket-slicer<br/>Ticket Slicing]
      TS --> EX[executor<br/>TDD Implementation]
      EX --> RV[reviewer<br/>Code Review]
      RV --> EV[evolver<br/>Self-Evolution]
    end

    subgraph Scheduling Layer
      MA[main-assistant<br>/ Main Entry Point]
    end

    MA --> WF
    MA --> SW
    MA --> TS
    MA --> EX
    MA --> RV
    MA --> EV
    RV --> EX

    subgraph Skills Mount
      S1[orchestration]
      S2[decision-mapping]
      S3[spec-authoring]
      S4[vertical-slicing]
      S5[tdd-cycle]
      S6[code-review]
      S7[self-evolution]
    end

    MA -.-> S1
    WF -.-> S2
    SW -.-> S3
    TS -.-> S4
    EX -.-> S5
    RV -.-> S6
    EV -.-> S7
updatedAt: 2026-07-29
---

## Overview

This is a **multi-agent collaborative engineering pipeline** that combines Matt Pocock's engineering pipeline with The Zeroth's genetic engineering concepts.

## Pipeline Stages

| Stage | Agent | Input → Output |
|-------|-------|----------------|
| 1. Fog Planning | wayfinder | Vague idea → Decision map |
| 2. Spec Authoring | spec-writer | Decision → Technical spec |
| 3. Ticket Slicing | ticket-slicer | Spec → Vertical slices |
| 4. TDD Implementation | executor | Ticket → Code |
| 5. Code Review | reviewer | Code → Review conclusion |
| 6. Self-Evolution | evolver | Failure signal → Genetic fix |

## Design Principles

1. **Clean Context** — Each agent only sees the information needed for its current stage
2. **Genetic Engineering** — Experience is anchored in structure, heritable and evolvable
3. **Vertical Slicing** — Each slice can be demonstrated independently
4. **TDD Driven** — No implementation without a failing test
5. **Evolvable** — Skills, prompts, and graphs can all be modified

## Three Elements of Edge Design

Each edge defines:
- **trigger**: When to hand off
- **context_filter**: What to pass and what to filter
- **escalation**: Escalation mechanism
