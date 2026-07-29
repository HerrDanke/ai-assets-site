---
title: "wincc-diagnostics（WinCC诊断）"
description: "WinCC诊断技能。定义了WinCC画面、报警和Tag系统的诊断方法。"
version: "1.0.0"
kind: "skill"
tags:
  - "wincc"
  - "diagnostics"
  - "hmi"
  - "scada"
appliesTo:
  - "wincc"
trigger: "当需要诊断WinCC画面问题、报警异常或Tag数据异常时"
relatedAgents: []
relatedSkills:
  - "failure-diagnosis"
isChinaOriginal: true
updatedAt: 2026-07-29
---

WinCC诊断技能定义了WinCC画面、报警和Tag系统的诊断方法。当需要诊断WinCC画面问题、报警异常或Tag数据异常时加载此技能。

## 诊断领域

### 报警诊断
- 报警持续触发但实际正常 → 检查deadband设置、传感器校准
- 报警未触发但实际异常 → 检查报警限值、使能状态
- 报警风暴 → 检查根本原因报警，抑制级联

### Tag诊断
- Tag值不更新 → 检查通讯状态、PLC连接
- Tag值异常跳变 → 检查scaling配置、信号干扰
- Tag值与现场不符 → 检查AI模块、信号线缆

### 运行诊断
- 画面加载缓慢 → 检查Tag数量、归档负载
- 历史数据缺失 → 检查归档配置、存储介质
- 用户权限异常 → 检查用户管理器、权限配置

## 关键合规要点
- 报警修改必须经过变更控制
- 报警旁路必须有记录和审批
- 审计追踪不能关闭
- 历史数据归档必须完整
