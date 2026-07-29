---
title: "GMP Compliance Team"
description: "GMP Compliance Team - Multi-agent collaboration pipeline for GMP compliance documentation, automation troubleshooting, and technical translation"
version: "1.0.0"
kind: "workflow"
tags: ["pipeline", "multi-agent", "gmp", "pharma", "compliance"]
yamlPath: "/workflows/gmp-compliance-team.yaml"
participants:
  - "qms-writer"
  - "compliance-reviewer"
  - "automation-engineer"
  - "translation-specialist"
skills:
  - "change-control-writing"
  - "deviation-investigation"
  - "capa-management"
  - "gmp-risk-assessment"
  - "root-cause-analysis"
  - "data-integrity-review"
  - "pcs7-troubleshooting"
  - "wincc-diagnostics"
  - "alarm-management"
  - "csv-validation"
  - "en-de-translation"
profiles:
  - "gmp-quality-officer"
  - "qms-specialist"
  - "automation-engineer"
  - "technical-translator"
stages: 5
overview: |
  GMP Compliance Team is a multi-agent collaboration system focused on GMP compliance in the pharmaceutical industry. Following The Zerolph design philosophy, it combines modular Agents, Skills, and Profiles to deliver GMP compliance documentation, automation troubleshooting, and technical translation.

  The system includes 4 Agents: QMS Writer, Compliance Reviewer, Automation Engineer, and Translation Specialist.
designPhilosophy: |
  ## Design Principles

  ### 1. Context Engineering
  Each agent's context must be complete (constraints, information, task) and stripped of redundancy unrelated to the current task.

  ### 2. Gene Engineering
  Skills (experience) are anchored in Agent presets (structure), experience no longer drifts.

  ### 3. Modular Composability
  Profiles and Skills are small, composable modules, not monolithic Prompts.

  ### 4. Role Separation
  Multi-Agent essence is context isolation, each Agent maintains mental purity.

  ### 5. Genotype/Phenotype Separation
  Definition (genotype) is separated from runtime instance (phenotype).
updatedAt: 2026-07-29
---

## Overview

GMP Compliance Team is a multi-agent collaboration system focused on GMP compliance in the pharmaceutical industry. Following The Zerolph design philosophy, it combines modular Agents, Skills, and Profiles to deliver GMP compliance documentation, automation troubleshooting, and technical translation.

## Core Capabilities

| Capability | Agent | Description |
|------------|-------|-------------|
| QMS Documentation | qms-writer | Change Control, Deviation, CAPA and other QMS documents |
| Compliance Review | compliance-reviewer | Regulatory compliance review, data integrity assessment |
| Automation Troubleshooting | automation-engineer | PCS7/WinCC system fault diagnosis |
| Technical Translation | translation-specialist | EN-DE/DE-EN GMP technical document translation |

## Design Principles

1. **Context Engineering** - Each agent's context is complete and minimal
2. **Gene Engineering** - Skills are anchored in agent presets, experience doesn't drift
3. **Modular Composability** - Profiles and Skills are small, composable modules
4. **Role Separation** - Multi-Agent essence is context isolation
