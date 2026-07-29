# AI Assets Hub

管理和展示 AI 资产的静态站点：Skills · Agents · Workflows · Prompts · Tools · Profiles

## 技术栈

- **Astro** — 静态站点生成器，Content Collections 类型安全
- **Mermaid** — 关系图可视化（Workflow 详情页 + 全局图谱页）
- **零运行时依赖** — 构建时生成纯静态 HTML

## 快速开始

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建
npm run build

# 预览构建结果
npm run preview
```

## 内容结构

```
src/content/
├── skills/        # 工作方法论（.md）
├── agents/        # 角色预设（.md）
├── workflows/     # 流水线定义（.md + yaml 引用）
├── prompts/       # 可复用提示词（.md）
├── tools/         # MCP 服务器 / CLI 工具（.md）
└── profiles/      # 身份片段（.md）
```

## 添加资产

每种资产类型在 `src/content/<type>/` 目录下新建 `.md` 文件，frontmatter 必须符合 `src/content/config.ts` 中定义的 schema。

示例（Skill）：

```markdown
---
title: "我的新 Skill"
description: "这个 Skill 是做什么的"
version: "1.0.0"
kind: "skill"
tags: ["workflow", "planning"]
appliesTo: ["main-assistant"]
---

## 内容正文（Markdown）

在这里写 Skill 的详细文档…
```

## 部署

构建输出为纯静态文件，可部署到：
- Cloudflare Pages
- Vercel
- Netlify
- GitHub Pages

## 路线图

- [ ] Mermaid 图交互式点击
- [ ] 全文搜索（Pagefind）
- [ ] RSS Feed
- [ ] 暗色/亮色主题切换（已实现）
