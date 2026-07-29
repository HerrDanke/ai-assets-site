---
title: "spec-authoring"
description: "Method for transforming aligned understanding into technical specifications: identifying seams, writing user stories, and clarifying scope boundaries."
version: "1.0.0"
kind: "skill"
tags:
  - "specification"
  - "documentation"
  - "spec-writer"
appliesTo:
  - "spec-writer"
trigger: "When the engineering direction has been aligned and core decisions have been made, but executable technical documentation has not yet been produced"
relatedAgents:
  - "spec-writer"
relatedSkills:
  - "seam-design"
isChinaOriginal: false
updatedAt: 2026-07-29
---

Spec-authoring is the process of transforming decision maps and scope boundaries into executable technical documentation. In this phase, the spec-writer breaks down high-level intent into a set of concrete feature modules and user stories, and identifies the "seams" — interaction boundaries and dependencies — between each module and the rest of the system. User stories are written from the user's perspective, describing behavioral value rather than technical implementation details. Each user story is accompanied by explicit acceptance criteria, providing a solid foundation for subsequent testing and validation.

A high-quality technical specification is not only a working guide for developers but also a shared reference point for the entire Agent team. It answers "what to do" rather than "how to do it" — specific implementation strategies are left to the subsequent executor phase. During the authoring process, the seam-design skill is used to determine the test boundaries for each feature module, ensuring that subsequent test coverage has clear targets. The final specification document serves as the raw material for the ticket-slicer to perform vertical slicing.
