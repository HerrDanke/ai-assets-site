// src/lib/i18n.ts

export type Lang = 'zh' | 'en';

export interface NavText {
  skills: string;
  agents: string;
  workflows: string;
  profiles: string;
  graph: string;
  search: string;
  brand: string;
}

const navTexts: Record<Lang, NavText> = {
  zh: {
    skills: 'Skills',
    agents: 'Agents',
    workflows: 'Workflows',
    profiles: 'Profiles',
    graph: '图谱',
    search: '搜索',
    brand: 'AI Assets',
  },
  en: {
    skills: 'Skills',
    agents: 'Agents',
    workflows: 'Workflows',
    profiles: 'Profiles',
    graph: 'Graph',
    search: 'Search',
    brand: 'AI Assets',
  },
};

export function getNavText(lang: Lang): NavText {
  return navTexts[lang];
}

export function getLangFromPath(pathname: string): Lang {
  return pathname.startsWith('/en') ? 'en' : 'zh';
}

export function getCollectionSuffix(lang: Lang): string {
  return lang === 'en' ? 'En' : 'Zh';
}

export function getSwitchLangPath(currentPath: string, targetLang: Lang): string {
  if (targetLang === 'en') {
    return '/en' + (currentPath === '/' ? '' : currentPath);
  }
  return currentPath.replace(/^\/en/, '') || '/';
}
