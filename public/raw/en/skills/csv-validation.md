---
title: "csv-validation (CSV Validation)"
description: "Computer System Validation (CSV) skill. Defines the GAMP5-based validation lifecycle and documentation requirements."
version: "1.0.0"
kind: "skill"
tags:
  - "gamp5"
  - "validation"
  - "compliance"
  - "quality"
appliesTo:
  - "qms-writer"
  - "automation-engineer"
  - "compliance-reviewer"
trigger: "When you need to develop a CSV plan, write a validation protocol, or assess validation status"
relatedAgents:
  - "qms-writer"
  - "automation-engineer"
  - "compliance-reviewer"
relatedSkills:
  - "data-integrity-review"
  - "change-control-writing"
isChinaOriginal: false
updatedAt: 2026-07-29
---

The Computer System Validation (CSV) skill defines the GAMP5-based validation lifecycle and documentation requirements, applicable to computer system qualification and validation activities in regulated industries such as pharmaceuticals and medical devices.

## When to Use

Load this skill when you need to develop a CSV plan, write a validation protocol, or assess validation status.

## GAMP5 Framework

### System Categories
- **Category 1:** Infrastructure software
- **Category 3:** Non-configurable software
- **Category 4:** Configurable software
- **Category 5:** Custom software

### Validation Lifecycle
1. **Planning** — Validation Plan (VP)
2. **Specification** — URS/FS/DS/HDS
3. **Configuration / Coding** — Configuration / Programming
4. **Verification** — Code review, FAT/SAT
5. **Testing** — IQ/OQ/PQ
6. **Reporting** — Validation Summary Report (VSR)
7. **Operation & Maintenance** — Operations phase
8. **Retirement** — System retirement

## Key Documents

- **VP** — Validation Plan
- **URS** — User Requirement Specification
- **FS** — Functional Specification
- **DS** — Design Specification
- **IQ** — Installation Qualification
- **OQ** — Operational Qualification
- **PQ** — Performance Qualification
- **VSR** — Validation Summary Report

## Key Compliance Points

- Validation scope must be commensurate with system risk level
- Critical functions must be tested with priority
- Deviations must be resolved before validation closure
- Validation status must be assessed periodically (Periodic Review)
- Impact on validation status must be evaluated after any change
