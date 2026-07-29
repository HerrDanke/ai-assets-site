---
title: "data-integrity-review"
description: "Data Integrity Review skill. Defines the data integrity assessment methodology based on ALCOA+ principles."
version: "1.0.0"
kind: "skill"
tags:
  - "gmp"
  - "data-integrity"
  - "compliance"
  - "quality"
appliesTo:
  - "quality"
trigger: "When data integrity risks need to be assessed or data integrity compliance needs to be reviewed"
relatedAgents:
  - "quality"
relatedSkills:
  - "deviation-investigation"
isChinaOriginal: false
updatedAt: 2026-07-29
---

Data Integrity Review skill. Defines the data integrity assessment methodology based on ALCOA+ principles.

## When to Use

Load this skill when data integrity risks need to be assessed or data integrity compliance needs to be reviewed.

## ALCOA+ Principles

- **Attributable** — Data can be traced back to its originator
- **Legible** — Data is readable and comprehensible
- **Contemporaneous** — Data is recorded at the time it is generated
- **Original** — Original data or certified copies
- **Accurate** — Data is accurate and error-free
- **Complete** — Data is complete with no omissions
- **Consistent** — Data is consistent and time-sequenced
- **Enduring** — Data is persistently preserved
- **Available** — Data is accessible when needed

## Review Scope

Data integrity review must cover:
- Audit Trail integrity and review frequency
- User access control (segregation of duties, unique user IDs)
- Electronic signatures (21 CFR Part 11 compliance)
- Data backup and recovery
- Data archiving and retention
- System clock synchronization
- Controls and records for data modifications

## Key Compliance Points

- Audit trail cannot be turned off or modified
- Data modifications must have records and justification
- System administrators cannot serve as data approvers
- Electronic signatures must be equivalent to handwritten signatures
- Backup data must be tested for recovery on a regular basis
