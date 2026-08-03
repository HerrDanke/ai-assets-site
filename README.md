# AI Assets Hub

管理和展示 AI 资产的静态站点：Skills · Agents · Workflows · Prompts · Tools · Profiles（中英双语）。

## 技术栈

- **Astro** — 静态站点生成器，Content Collections 类型安全
- **Mermaid** — 关系图可视化（Workflow 详情页 + 全局图谱页）
- **@fontsource** — Space Grotesk / Inter / JetBrains Mono 本地打包，零运行时字体请求
- **零运行时依赖** — 构建时生成纯静态 HTML
- **Hallmark 设计系统** — 全站视觉由 `design.md` 约束，token 见 `tokens.css`

## 快速开始

```bash
# 安装依赖
npm install

# 开发模式（端口可加 --port 8083）
npm run dev

# 构建
npm run build

# 预览构建结果
npm run preview -- --port 8083
```

> 发布端口为 **8083**（nginx 静态站点，root 指向 `dist/`）。

## 页面结构

```
/               首页    静态介绍（居中标题 + 简介）
/overview/      概览    统计卡片 + 工作流动态内容
/skills/        技能    列表 + 详情
/agents/        角色    列表 + 详情
/workflows/     流水线  列表 + 详情
/profiles/      画像    列表 + 详情
/graph/         图谱    Mermaid 关系图（按工作流过滤）
/search/        搜索    全文检索 + 类型筛选
/prompts/       提示词  列表
/tools/         工具    列表
/en/            以上所有页面的英文镜像
```

## 内容结构

Content Collections 按语言拆分，每种资产有独立的 Zod schema（`src/content/config.ts`）：

```
src/content/
├── skillsZh/  skillsEn/      # 工作方法论（.md）
├── agentsZh/  agentsEn/      # 角色预设（.md）
├── workflowsZh/ workflowsEn/ # 流水线定义（.md + yaml 引用）
├── promptsZh/ promptsEn/     # 可复用提示词（.md）
├── toolsZh/   toolsEn/       # MCP 服务器 / CLI 工具（.md）
└── profilesZh/ profilesEn/   # 身份片段（.md）
```

`copy-content.js` 会在 prebuild/predev 阶段将源文件复制到 `public/raw/{zh,en}/`，供前端复制 / 下载。

## 添加资产

每种资产类型在对应语言的 `src/content/<type>Zh|En/` 目录下新建 `.md` 文件，frontmatter 必须符合 `src/content/config.ts` 中定义的 schema。

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

## 设计系统

- `design.md` — 全站设计系统源头（genre / 主题色板 / 字体 / 各页面宏观结构）
- `tokens.css` — OKLCH token（颜色 / 间距 / 字号 / 动效 / 圆角），暗色优先 + 浅色模式
- 类型配色：Skill=紫 · Agent=青 · Workflow=橙 · Profile=绿（列表 kind 标签、详情页主题色、内容标签哈希配色）

## 部署

构建输出为纯静态文件（`dist/`），可部署到：

- **nginx**（本项目实际方式：端口 **8083**，root → `dist/`）
- Cloudflare Pages / Vercel / Netlify / GitHub Pages

## 路线图

- [x] 暗色 / 亮色主题切换
- [x] 概览页（Overview）与静态首页分离
- [x] Hallmark 设计系统（design.md + tokens.css）
- [x] 类型配色体系（kind / 详情主题 / 内容标签）
- [ ] Mermaid 图交互式点击
- [ ] 全文搜索（Pagefind）
- [ ] RSS Feed
