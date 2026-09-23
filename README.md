# AI Assets Hub

管理和展示 AI 资产的静态站点：Skills · Agents · Workflows · Profiles（中英双语）。

## 架构概览

```
Obsidian vault（HerrDanke/ObsidiaNote）           ← 内容真相源
└── Assets/catalog/                                ← 双语资产内容（手工维护这里）
      │  sync-from-vault.mjs（构建前同步）
      ▼
本仓库（ai-assets-site）                           ← 站点代码 + schema
├── src/content/<type>Zh|En/  （构建时生成，gitignored）
├── src/pages/  src/components/  src/layouts/  src/lib/
└── public/raw/  public/workflows/  （构建产物，gitignored）
      │  npm run build（Astro 静态生成）
      ▼
dist/ → nginx 8083（systemd timer 自动部署）
```

**核心原则**：内容与代码分离。内容真相源在 vault 的 `Assets/catalog/`，本仓库只存站点代码。每次部署从 vault 同步内容再构建。

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

# 先同步 vault 内容到 src/content/（vault 需已 clone 到本地）
node scripts/sync-from-vault.mjs

# 开发模式（端口可加 --port 8083）
npm run dev

# 构建（prebuild 会自动跑 sync-from-vault + copy-content）
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
/en/            以上所有页面的英文镜像
```

## 内容真相源（vault `Assets/catalog/`）

内容**不在本仓库**，在 Obsidian vault 的 `Assets/catalog/`（单一真相源）。构建前由 `scripts/sync-from-vault.mjs` 同步到本仓库 `src/content/`：

```
vault/Assets/catalog/
├── skillsZh/   skillsEn/     # 工作方法论（.md）
├── agentsZh/   agentsEn/     # 角色预设（.md）
├── workflowsZh/ workflowsEn/ # 流水线定义（.md + yaml 引用）
├── profilesZh/ profilesEn/   # 身份片段（.md）
└── workflows-yaml/           # 流水线 Graph 蓝图（.yaml）→ 同步到 public/workflows/
```

`src/content/`、`public/raw/`、`public/workflows/` 均为**构建产物**（gitignored），不提交。

### 双向脚本

| 脚本 | 作用 |
|------|------|
| `scripts/sync-from-vault.mjs` | vault `Assets/catalog/` → `src/content/` + `public/workflows/`（构建前） |
| `copy-content.js` | `src/content/` → `public/raw/{zh,en}/`（供前端复制/下载，prebuild 自动执行） |

## 添加资产

**在 vault 的 `Assets/catalog/` 下操作**（不是本仓库）：

1. 在对应语言的 `Assets/catalog/<type>Zh|En/` 目录新建 `.md` 文件
2. **双语文件对**：新增资产要同时建 `xxxZh` 和 `xxxEn` 两个同名文件（En 为忠实翻译）
3. frontmatter 必须符合 `src/content/config.ts` 中定义的 schema
4. 提交到 vault 并 push——服务器 timer 自动同步构建

示例（Skill，`vault/Assets/catalog/skillsZh/myskill.md`）：

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

> ⚠️ schema 校验在构建时执行——改坏 frontmatter 字段会在部署时报错（不会静默坏站）。

## 设计系统

- `design.md` — 全站设计系统源头（genre / 主题色板 / 字体 / 各页面宏观结构）
- `tokens.css` — OKLCH token（颜色 / 间距 / 字号 / 动效 / 圆角），暗色优先 + 浅色模式
- 类型配色：Skill=紫 · Agent=青 · Workflow=橙 · Profile=绿（列表 kind 标签、详情页主题色、内容标签哈希配色）

## 部署（自动）

构建输出为纯静态文件（`dist/`），由服务器 systemd 自动部署：

- **`ai-assets-deploy.timer`**（每 5 分钟）：vault `fetch` + ff-only merge → 本仓库 `fetch` + ff-only merge → `sync-from-vault.mjs` → `npm run build` → nginx 服务 `dist/`
- 内容更新 push **vault**、站点代码更新 push **本仓库**，两者都在 **最长 5 分钟**内自动上线
- 跳过条件：状态文件 `/run/ai-assets-deploy.lastsha`（格式 `vault_sha:site_sha`）与当前两个远端 SHA 完全一致、且 `dist/index.html` 存在时跳过构建
- 部署脚本：本仓库 [`deploy/ai-assets-deploy.sh`](./deploy/ai-assets-deploy.sh) 纳管（`/usr/local/sbin/ai-assets-deploy.sh` 是指向它的软链）；与 `docusaurus-deploy` 共享 `/run/vault-deploy.lock` 防 git 并发

## 路线图

- [x] 暗色 / 亮色主题切换
- [x] 概览页（Overview）与静态首页分离
- [x] Hallmark 设计系统（design.md + tokens.css）
- [x] 类型配色体系（kind / 详情主题 / 内容标签）
- [x] 内容源迁入 vault `Assets/catalog/`（单一真相源）
- [x] 服务器自动部署（systemd timer 每 5 分钟）
- [ ] Mermaid 图交互式点击
- [ ] 全文搜索（Pagefind）
- [ ] RSS Feed
