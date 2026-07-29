import { defineCollection, z } from 'astro:content';

// ============================================================
// AI 资产管理站 — Content Collections Schema (双语)
// ============================================================

// --- 共享字段 ---
const baseSchema = z.object({
  title: z.string(),
  description: z.string(),
  version: z.string().default('1.0.0'),
  tags: z.array(z.string()).default([]),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  draft: z.boolean().default(false),
});

// --- 1. Skills ---
function skillSchema() {
  return baseSchema.extend({
    kind: z.enum(['skill']),
    appliesTo: z.array(z.string()).default([]),
    trigger: z.string().optional(),
    relatedAgents: z.array(z.string()).default([]),
    relatedSkills: z.array(z.string()).default([]),
    isChinaOriginal: z.boolean().default(false),
  });
}

// --- 2. Agents ---
function agentSchema() {
  return baseSchema.extend({
    kind: z.enum(['agent']),
    role: z.string(),
    model: z.object({
      provider: z.string().default('anthropic'),
      model: z.string().default('claude-sonnet-4-20250514'),
      temperature: z.number().min(0).max(1).default(0.5),
      reasoning: z.boolean().default(true),
      maxTokens: z.number().default(16384),
    }).optional(),
    skills: z.array(z.string()).default([]),
    profiles: z.array(z.string()).default([]),
    tools: z.array(z.string()).default([]),
    lifecycle: z.object({
      budgetCycles: z.number().default(10),
      autoSleep: z.boolean().default(true),
      reportTo: z.string().default('main_assistant'),
    }).optional(),
  });
}

// --- 3. Workflows ---
function workflowSchema() {
  return baseSchema.extend({
    kind: z.enum(['workflow']),
    yamlPath: z.string(),
    participants: z.array(z.string()).default([]),
    skills: z.array(z.string()).default([]),
    profiles: z.array(z.string()).default([]),
    stages: z.number().optional(),
    diagram: z.string().optional(),
    overview: z.string().optional(),
    designPhilosophy: z.string().optional(),
  });
}

// --- 4. Prompts ---
function promptSchema() {
  return baseSchema.extend({
    kind: z.enum(['prompt']),
    useCase: z.string(),
    applicableAgents: z.array(z.string()).default([]),
    variables: z.array(z.string()).default([]),
  });
}

// --- 5. Tools ---
function toolSchema() {
  return baseSchema.extend({
    kind: z.enum(['tool']),
    toolType: z.enum(['mcp_server', 'cli_tool', 'api', 'library']),
    installCommand: z.string().optional(),
    configExample: z.string().optional(),
    usedBy: z.array(z.string()).default([]),
  });
}

// --- 6. Profiles ---
function profileSchema() {
  return baseSchema.extend({
    kind: z.enum(['profile']),
    traits: z.array(z.string()).default([]),
    thinkingStyle: z.array(z.string()).default([]),
    applicableScenarios: z.array(z.string()).default([]),
    usedBy: z.array(z.string()).default([]),
  });
}

// 中文 collections
const skillsZh = defineCollection({ type: 'content', schema: skillSchema() });
const agentsZh = defineCollection({ type: 'content', schema: agentSchema() });
const workflowsZh = defineCollection({ type: 'content', schema: workflowSchema() });
const promptsZh = defineCollection({ type: 'content', schema: promptSchema() });
const toolsZh = defineCollection({ type: 'content', schema: toolSchema() });
const profilesZh = defineCollection({ type: 'content', schema: profileSchema() });

// 英文 collections
const skillsEn = defineCollection({ type: 'content', schema: skillSchema() });
const agentsEn = defineCollection({ type: 'content', schema: agentSchema() });
const workflowsEn = defineCollection({ type: 'content', schema: workflowSchema() });
const promptsEn = defineCollection({ type: 'content', schema: promptSchema() });
const toolsEn = defineCollection({ type: 'content', schema: toolSchema() });
const profilesEn = defineCollection({ type: 'content', schema: profileSchema() });

export const collections = {
  // 中文
  skillsZh,
  agentsZh,
  workflowsZh,
  promptsZh,
  toolsZh,
  profilesZh,
  // 英文
  skillsEn,
  agentsEn,
  workflowsEn,
  promptsEn,
  toolsEn,
  profilesEn,
};
