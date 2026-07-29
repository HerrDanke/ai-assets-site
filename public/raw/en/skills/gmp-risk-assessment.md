---
title: "gmp-risk-assessment"
description: "GMP risk assessment skill. Defines risk assessment methodologies (FMEA, HACCP, risk matrix) and application scenarios in the pharmaceutical industry."
version: "1.0.0"
kind: "skill"
tags:
  - "gmp"
  - "risk-assessment"
  - "compliance"
  - "quality-assurance"
  - "fmea"
  - "haccp"
appliesTo:
  - "quality-officer"
  - "compliance-reviewer"
trigger: "When GMP risk assessment is required (change impact assessment, deviation impact assessment, supplier risk assessment, etc.)"
relatedAgents:
  - "quality-officer"
  - "compliance-reviewer"
relatedSkills:
  - "deviation-investigation"
  - "capa-management"
  - "change-control-writing"
  - "sop-authoring"
  - "data-integrity-review"
isChinaOriginal: false
updatedAt: 2026-07-29
---

# Skill: GMP Risk Assessment

## When to Use

Load this skill when GMP risk assessment is required (change impact assessment, deviation impact assessment, supplier risk assessment, etc.).

## Risk Assessment Methods

### FMEA (Failure Mode and Effects Analysis)
- **Severity (S)** — severity of the failure impact (1–10)
- **Occurrence (O)** — frequency of the failure cause (1–10)
- **Detection (D)** — detectability of the failure (1–10)
- **RPN = S × O × D** — Risk Priority Number

### Risk Matrix
- Classify risks by severity and likelihood
- Define acceptable/unacceptable risk boundaries
- Define control measures for unacceptable risks

## Assessment Scope

GMP risk assessment must cover:
- **Product quality risk** — potential impact on final product quality
- **Patient safety risk** — potential impact on patient health
- **Data integrity risk** — potential impact on data reliability (ALCOA+)
- **Compliance risk** — potential impact on regulatory compliance
- **Business continuity risk** — potential impact on production continuity

## Key Compliance Points

- Risk assessment must have clear acceptance criteria
- Residual risk must be confirmed and accepted
- Risk control measures must be verifiable
- Risk assessment must be reviewed periodically

## Writing Rules

- Risk descriptions must be specific (not "may affect product quality")
- Risk levels must have clear justification
- Control measures must be commensurate with the risk level
