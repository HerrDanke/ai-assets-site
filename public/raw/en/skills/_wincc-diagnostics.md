---
title: "wincc-diagnostics（WinCC Diagnostics）"
description: "WinCC diagnostics skill. Defines diagnostic methods for WinCC screens, alarms, and Tag systems."
version: "1.0.0"
kind: "skill"
tags:
  - "wincc"
  - "diagnostics"
  - "hmi"
  - "scada"
appliesTo:
  - "wincc"
trigger: "When WinCC screen issues, alarm anomalies, or Tag data anomalies need to be diagnosed"
relatedAgents: []
relatedSkills:
  - "failure-diagnosis"
isChinaOriginal: false
updatedAt: 2026-07-29
---

WinCC diagnostics skill defines diagnostic methods for WinCC screens, alarms, and Tag systems. Load this skill when WinCC screen issues, alarm anomalies, or Tag data anomalies need to be diagnosed.

## Diagnostic Areas

### Alarm Diagnostics
- Alarms continuously triggered but actually normal → check deadband settings, sensor calibration
- Alarms not triggered but actually abnormal → check alarm limits, enable status
- Alarm flood → check root cause alarms, suppress cascading

### Tag Diagnostics
- Tag value not updating → check communication status, PLC connection
- Tag value abnormal jumping → check scaling configuration, signal interference
- Tag value inconsistent with field → check AI module, signal cable

### Runtime Diagnostics
- Screen loading slowly → check Tag count, archival load
- Historical data missing → check archival configuration, storage medium
- User permission anomalies → check user manager, permission configuration

## Key Compliance Points
- Alarm modifications must go through change control
- Alarm bypass must have records and approval
- Audit trail cannot be disabled
- Historical data archiving must be complete
