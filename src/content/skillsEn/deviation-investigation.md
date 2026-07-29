---
title: "deviation-investigation"
description: "Deviation investigation and documentation skill. Defines the description, investigation, and documentation methodology for GMP deviation events."
version: "1.0.0"
kind: "skill"
tags:
  - "gmp"
  - "deviation"
  - "compliance"
  - "quality"
appliesTo:
  - "quality"
trigger: "When a deviation (Deviation) event needs to be written, reviewed, or investigated"
relatedAgents:
  - "quality"
relatedSkills:
  - "failure-diagnosis"
isChinaOriginal: false
updatedAt: 2026-07-29
---

Deviation investigation and documentation skill. Defines the description, investigation, and documentation methodology for GMP deviation events.

## When to Use

Load this skill when a deviation (Deviation) event needs to be written, reviewed, or investigated.

## Document Structure

A deviation document must contain the following sections:

1. **Event Description**
   - Objective, no speculation, no attribution of blame
   - Includes: time, location, personnel/equipment involved, method of discovery
2. **Immediate Actions (Containment)**
   - Actions taken immediately after the issue was identified
   - Measures to isolate/suspend/protect the product
3. **Root Cause Analysis (RCA)**
   - Use structured methods (5 Whys / Fishbone / Fault Tree)
   - Distinguish between direct cause and root cause
4. **Impact Assessment**
   - Batch impact (whether released products are affected)
   - Product quality impact
   - System impact (whether other systems/processes are affected)
   - Data integrity impact
5. **CAPA Recommendations**
   - Corrective Action
   - Preventive Action
6. **Conclusion & Disposition**

## Key Compliance Points

- The deviation description must have a traceable logical chain to the final conclusion
- If data integrity issues are involved, an independent investigation must be initiated
- All CAPA assignments must be completed before the deviation can be closed
- Deviations that exceed the time specified in the SOP must undergo a quality evaluation

## Writing Rules

- Event descriptions must contain only facts; do not use speculative language such as "obviously" or "should"
- RCA must drill down to a controllable level (not surface causes like "personnel error")
- Impact Assessment must reference specific batch numbers/product codes
