---
title: "decision-mapping (Decision Map)"
description: "A method for turning vague ideas into a decision map: define the destination, identify fog zones, generate decision tickets, and maintain the map."
version: "1.0.0"
kind: "skill"
tags:
  - "planning"
  - "decision-making"
  - "wayfinder"
appliesTo:
  - "wayfinder"
trigger: "When the overall direction of an engineering task is not yet clear, there are multiple mutually exclusive options, or the success criteria cannot be stated in a single sentence"
relatedAgents:
  - "wayfinder"
relatedSkills:
  - "scope-boundary"
isChinaOriginal: false
updatedAt: 2026-07-29
---

A decision map is a methodology for transforming vague intentions into a structured decision space. Its starting point is defining the "destination" — the verifiable state that the task ultimately aims to achieve. Once the destination is clear, "fog zones" must be actively identified: key areas where information is insufficient, assumptions are unvalidated, or multiple possible paths exist. For each fog zone, a "decision ticket" is generated, clearly listing the alternative options, the prerequisites and risks of each option, and the minimum verification steps needed to make a choice.

The core value of this method lies in transforming "uncertainty" from a vague anxiety into trackable work items. A decision map is not a one-time artifact, but a living document that continuously evolves as information increases. Whenever new signals emerge, assumptions are validated or overturned, it is necessary to return to the map, update the status of fog zones, close resolved tickets, or open new ones. Ultimately, when all fog zones are cleared, the direction of the engineering task shifts from "vague" to "clear," ready to move into the subsequent scope definition and specification writing phases.
