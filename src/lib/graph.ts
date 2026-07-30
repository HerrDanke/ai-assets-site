// src/lib/graph.ts
import { getCollection } from 'astro:content';

/**
 * 生成 Mermaid 图表定义
 */
export function generateMermaidGraph(
  workflow: {
    slug: string;
    title: string;
    participants: string[];
  },
  agents: Array<{ slug: string; data: { title: string; skills?: string[]; profiles?: string[] } }>,
  skills: Array<{ slug: string; data: { title: string } }>,
  profiles: Array<{ slug: string; data: { title: string } }>
): string {
  const lines: string[] = ['graph LR'];
  const wfSkills = new Set<string>();
  const wfProfiles = new Set<string>();

  // Agent 节点和关系
  for (const agent of agents) {
    const agentId = `agent_${agent.slug}`;
    lines.push(`    ${agentId}["🤖 ${agent.data.title}"]`);
    for (const skill of (agent.data.skills ?? [])) {
      lines.push(`    ${agentId} --> skill_${skill}`);
      wfSkills.add(skill);
    }
    for (const profile of (agent.data.profiles ?? [])) {
      lines.push(`    ${agentId} -.-> profile_${profile}`);
      wfProfiles.add(profile);
    }
  }

  // Skill 节点
  for (const skill of wfSkills) {
    const skillData = skills.find(s => s.slug === skill);
    lines.push(`    skill_${skill}["📘 ${skillData?.data.title || skill}"]`);
  }

  // Profile 节点
  for (const profile of wfProfiles) {
    const profileData = profiles.find(p => p.slug === profile);
    lines.push(`    profile_${profile}["🧩 ${profileData?.data.title || profile}"]`);
  }

  // Workflow 节点
  const wfId = `wf_${workflow.slug}`;
  lines.push(`    ${wfId}["⚙️ ${workflow.title}:::workflow"]`);
  for (const participant of workflow.participants) {
    lines.push(`    ${wfId} --> agent_${participant}`);
  }

  // 样式
  lines.push('    classDef agent fill:#7c6cff,stroke:#7c6cff,color:#fff');
  lines.push('    classDef skill fill:#4dd6c8,stroke:#4dd6c8,color:#0a0b10');
  lines.push('    classDef profile fill:#f5a623,stroke:#f5a623,color:#0a0b10');
  lines.push('    classDef workflow fill:#ff6b6b,stroke:#ff6b6b,color:#fff');

  return lines.join('\n');
}

/**
 * 生成完整的工作流图表映射
 */
export async function buildGraphData(suffix: string): Promise<Record<string, string>> {
  const workflows = await getCollection('workflows' + suffix);
  const allAgents = await getCollection('agents' + suffix);
  const allSkills = await getCollection('skills' + suffix);
  const allProfiles = await getCollection('profiles' + suffix);

  const graphs: Record<string, string> = {};

  for (const wf of workflows) {
    const participants = allAgents.filter(a => (wf.data.participants ?? []).includes(a.slug));
    graphs[wf.slug] = generateMermaidGraph(
      { slug: wf.slug, title: wf.data.title, participants: wf.data.participants ?? [] },
      participants,
      allSkills,
      allProfiles
    );
  }

  return graphs;
}
