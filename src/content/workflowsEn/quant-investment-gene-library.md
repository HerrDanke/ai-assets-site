---
title: "Quant Investment Gene Library"
description: "Multi-agent investment decision system based on The Zerolph genetic engineering philosophy"
version: "1.0.0"
kind: "workflow"
tags: ["quant", "investment", "multi-agent", "fundamental", "technical"]
yamlPath: "/workflows/quant-investment-gene-library.yaml"
participants:
  - "research-director"
  - "fundamental-analyst"
  - "industry-researcher"
  - "quant-researcher"
  - "backtest-engineer"
  - "risk-officer"
  - "investment-officer"
skills:
  - "fundamental-research"
  - "technical-research"
  - "valuation-modeling"
  - "backtest-execution"
  - "risk-assessment"
profiles:
  - "quant-mindset"
  - "risk-first"
  - "data-driven"
stages: 5
overview: |
  The Quant Investment Gene Library is a multi-agent investment decision system based on
  The Zerolph genetic engineering (A-Genetic Engineering) philosophy.

  The system contains two workflows: Fundamental Analysis and Technical Analysis,
  with 7 Agents covering the full pipeline from strategy conception to investment decision.
designPhilosophy: |
  ## Design Principles

  ### 1. Context Cleanliness
  Each Agent does only one thing, with strictly defined capability boundaries.

  ### 2. Experience as Genes
  Skills are not isolated prompts but reusable experience modules anchored to fixed role positions.

  ### 3. Composable Micro-Modules
  Profile/Skill/Prompt are all small, independently mountable fragments.

  ### 4. Verify Before Trust
  All analysis must annotate confidence level, leave blank when data is insufficient.

  ### 5. Risk Before Return
  From Profile to Skill to constraints, risk awareness runs throughout.
diagram: |
  graph LR
      subgraph Fundamental Analysis
        RD[research-director<br/>Research Director] --> FA[fundamental-analyst<br/>Fundamental Analyst]
        RD --> IR[industry-researcher<br/>Industry Researcher]
        FA --> RO[risk-officer<br/>Risk Officer]
        IR --> RO
        RO --> IO[investment-officer<br/>Investment Officer]
        IO --> RD
      end

      subgraph Technical Analysis
        RD2[research-director<br/>Research Director] --> QR[quant-researcher<br/>Quant Researcher]
        QR --> BE[backtest-engineer<br/>Backtest Engineer]
        BE --> RO2[risk-officer<br/>Risk Officer]
        RO2 --> IO2[investment-officer<br/>Investment Officer]
        IO2 --> RD2
      end

      subgraph Skills Mount
        S1[fundamental-research]
        S2[technical-research]
        S3[valuation-modeling]
        S4[backtest-execution]
        S5[risk-assessment]
      end

      FA -.-> S1
      IR -.-> S1
      QR -.-> S2
      QR -.-> S4
      BE -.-> S4
      RO -.-> S5
      IO -.-> S3
updatedAt: 2026-07-30
---

## Overview

The Quant Investment Gene Library is a multi-agent investment decision system based on The Zerolph genetic engineering philosophy. It strictly follows design principles of context cleanliness, experience as genes, composable micro-modules, and risk-first.

## Two Workflow Genes

### Fundamental Analysis Workflow

Applicable: Individual stock research / Industry allocation / Long-term position justification

| Stage | Agent | Input → Output |
|-------|-------|----------------|
| 1. Parallel Research | fundamental-analyst + industry-researcher | Research target → Financial report + Industry report |
| 2. Risk Review | risk-officer | Two reports → Risk assessment |
| 3. Investment Decision | investment-officer | Risk review → Investment decision |
| 4. Director Summary | research-director | All reports → Final comprehensive report |

### Technical Analysis Workflow

Applicable: Strategy development / Factor mining / Systematic trading systems

| Stage | Agent | Input → Output |
|-------|-------|----------------|
| 1. Strategy Research | quant-researcher | Strategy type → Strategy logic + Factor testing |
| 2. Backtest Validation | backtest-engineer | Strategy logic → Backtest report |
| 3. Risk Review | risk-officer | Backtest report → Strategy risk assessment |
| 4. Strategy Decision | investment-officer | Risk review → Adopt/Reject |
| 5. Director Summary | research-director | All reports → Final strategy report |

## Design Principles

1. **Context Cleanliness** - Each Agent does only one thing
2. **Experience as Genes** - Skills anchored to fixed role positions
3. **Composable Micro-Modules** - Profile/Skill independently mountable
4. **Risk First** - Risk awareness runs throughout
5. **Honest Annotation** - Leave blank when data is insufficient
