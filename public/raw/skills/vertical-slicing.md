---
title: "vertical-slicing（垂直切片）"
description: "将技术规格拆分为可独立交付的垂直切片票据的方法：识别前置重构、定义阻塞边、验证粒度。"
version: "1.0.0"
kind: "skill"
tags:
  - "slicing"
  - "task-decomposition"
  - "ticket-slicer"
appliesTo:
  - "ticket-slicer"
trigger: "当技术规格已完成并确认，需要将'做什么'拆分为'如何一块块做'时"
relatedAgents:
  - "ticket-slicer"
relatedSkills:
  - "dependency-mapping"
isChinaOriginal: false
updatedAt: 2026-07-29
---

垂直切片是将一份完整的技术规格拆分为一系列可独立交付的工作票据的方法论。与水平分层（先做完所有数据库层、再做所有服务层、最后做所有 UI）不同，垂直切片强调每个票据都从用户视角出发，穿透所有必要的层次，交付一个可用的增量价值。每个切片都是一个「最小可用单元」，可以在完成时被独立验证、集成、甚至发布。

切片过程中需要解决三个核心问题：一是识别前置重构——那些不产生用户价值但为后续切片铺路的结构性工作；二是定义阻塞边——哪些切片必须在其他切片之前完成，以及哪些可以并行推进；三是验证粒度——每个切片的大小是否合适，过大则失去迭代的灵活性，过小则造成过多的集成负担。良好的切片规划使得流水线中的 executor 可以并行工作，同时保证每一步交付都是可验证的。
