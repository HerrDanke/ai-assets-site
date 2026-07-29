---
title: "dependency-mapping"
description: "Method for analyzing dependencies between tickets: defining blocking edges, identifying the frontier, and determining release order."
version: "1.0.0"
kind: "skill"
tags:
  - "dependency"
  - "slicing"
  - "ticket-slicer"
appliesTo:
  - "ticket-slicer"
trigger: "when you need to determine 'which tickets must be completed before which others'"
relatedAgents:
  - "ticket-slicer"
relatedSkills:
  - "vertical-slicing"
isChinaOriginal: false
updatedAt: 2026-07-29
---

Dependency mapping is a methodology for performing dependency analysis on tickets produced by vertical slicing. In this phase, the ticket-slicer needs to clarify the prerequisites for each ticket: which other tickets' outputs does it depend on? Which subsequent tickets does it block? These relationships are organized into a directed acyclic graph (DAG), where edges represent the blocking relationship "A must be completed before B can start."

One of the outputs of dependency mapping is the "frontier" set—the set of all tickets whose prerequisites have been satisfied and can be started immediately. The frontier is the core of pipeline scheduling: the executor selects tickets from the frontier for implementation, and each time a ticket is completed, the dependency graph is updated and new tickets may enter the frontier. Additionally, dependency mapping is used to determine the minimum release order—at which points it is safe to integrate and release, ensuring that users always get a working system even if the overall feature is not yet complete.
