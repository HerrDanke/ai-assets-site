---
title: "orchestration"
description: "The methodology for orchestrating the entire engineering pipeline: understanding user requirements, identifying the current stage, spinning up sub-agent teams, and synchronizing progress."
version: "1.0.0"
kind: "skill"
tags:
  - "orchestration"
  - "main-assistant"
  - "multi-agent"
appliesTo:
  - "main-assistant"
trigger: "When the user proposes a new engineering task and it is necessary to determine which stage of the pipeline is current and dispatch the corresponding agent team"
relatedAgents:
  - "main-assistant"
relatedSkills:
  - "stage-routing"
isChinaOriginal: false
updatedAt: 2026-07-29
---

Orchestration is the methodology by which main-assistant coordinates the operation of the entire engineering pipeline. When the user proposes a new engineering task, main-assistant first needs to understand the task intent, then determine which stage of the pipeline is current—whether it is the early exploration phase where the decision map is not yet complete, the mid-phase execution where specifications are ready, or the late-phase iteration and optimization. Based on the stage assessment, main-assistant spins up the corresponding sub-agent team, assigns task context to them, and sets synchronization checkpoints.

The core challenges of orchestration lie in "information passing" and "state synchronization." After each sub-agent team completes its work, the results need to be aggregated back to main-assistant in a structured manner, and main-assistant decides whether to proceed to the next stage or to return to a previous stage for correction. This kind of dispatch is not a linear waterfall, but a loop that can cycle back: discovering a wrong direction during execution may require returning to wayfinder to redo the decision mapping; discovering requirement ambiguity during testing may require returning to spec-writer to rewrite the specifications. Orchestration keeps multi-agent collaboration orderly rather than chaotic.
