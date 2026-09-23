// src/lib/workflows.ts
import { getCollection, type CollectionEntry } from 'astro:content';

export interface WorkflowMap {
  [slug: string]: {
    title: string;
    description: string;
    agents: string[];
    skills: string[];
    profiles: string[];
    stages?: number;
    overview?: string;
    designPhilosophy?: string;
  };
}

/**
 * 构建工作流映射数据
 */
export async function buildWorkflowMap(suffix: string): Promise<WorkflowMap> {
  const workflows = await getCollection('workflows' + suffix);
  const agents = await getCollection('agents' + suffix);
  const skills = await getCollection('skills' + suffix);
  const profiles = await getCollection('profiles' + suffix);

  const map: WorkflowMap = {};

  for (const wf of workflows) {
    const participantSlugs = wf.data.participants ?? [];
    const participants = agents.filter(a => participantSlugs.includes(a.slug));

    const wfSkills = [...new Set(participants.flatMap(a => a.data.skills ?? []))];
    const wfProfiles = [...new Set(participants.flatMap(a => a.data.profiles ?? []))];

    map[wf.slug] = {
      title: wf.data.title,
      description: wf.data.description,
      agents: participantSlugs,
      skills: wfSkills,
      profiles: wfProfiles,
      stages: wf.data.stages,
      overview: wf.data.overview,
      designPhilosophy: wf.data.designPhilosophy,
    };
  }

  return map;
}

/**
 * 获取工作流关联的所有资产 slug
 */
export function getWorkflowAssets(wf: WorkflowMap[string]): {
  skills: Set<string>;
  agents: Set<string>;
  profiles: Set<string>;
} {
  return {
    skills: new Set(wf.skills),
    agents: new Set(wf.agents),
    profiles: new Set(wf.profiles),
  };
}
