---
title: "root-cause-analysis"
description: "Root cause analysis skill. Defines application specifications for RCA methods including 5 Whys, Fishbone, and Fault Tree."
version: "1.0.0"
kind: "skill"
tags:
  - "gmp"
  - "rca"
  - "deviation"
  - "quality"
  - "compliance"
appliesTo:
  - "quality"
trigger: "When root cause analysis is needed (deviation investigation, failure analysis, complaint investigation, etc.)"
relatedAgents:
  - "quality"
relatedSkills:
  - "failure-diagnosis"
isChinaOriginal: false
updatedAt: 2026-07-29
---

Root cause analysis skill. Defines application specifications for RCA methods including 5 Whys, Fishbone, and Fault Tree.

## When to Use

Load this skill when root cause analysis is needed (deviation investigation, failure analysis, complaint investigation, etc.).

## RCA Methods

### 5 Whys
- Start from the phenomenon and continuously ask "why"
- Continue until a controllable root cause is found
- Avoid stopping at "personnel error" — continue asking why the personnel made the error

### Fishbone (Ishikawa) Diagram
Analyze by 6M categories:
- **Man** — training, qualification, fatigue
- **Machine** — calibration, maintenance, design
- **Material** — specifications, storage, supplier
- **Method** — SOP, process parameters, work practices
- **Measurement** — calibration, method, frequency
- **Environment** — temperature/humidity, cleanliness, pressure differential

### Fault Tree Analysis
- Decompose from the top-level event downward
- Use AND/OR logic gates
- Identify minimal cut sets

## Key Compliance Points

- Root cause must be controllable (not uncontrollable causes like "human error")
- The analysis process must be documented
- Direct cause and root cause must be distinguished
- Multiple root causes must all be identified

## Writing Rules

- The analysis process must demonstrate the chain of reasoning
- Conclusions must be supported by evidence
- Avoid presupposing conclusions and then seeking evidence
