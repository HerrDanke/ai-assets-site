// 将 src/content 下的 .md 文件复制到 public/raw/，供复制/下载功能使用
import { cp, mkdir, rm } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const srcDir = join(__dirname, 'src/content');
const destDir = join(__dirname, 'public/raw');

// 语言目录映射：collection name -> lang/folder
const collections = [
  { col: 'skillsZh', lang: 'zh', folder: 'skills' },
  { col: 'agentsZh', lang: 'zh', folder: 'agents' },
  { col: 'workflowsZh', lang: 'zh', folder: 'workflows' },
  { col: 'promptsZh', lang: 'zh', folder: 'prompts' },
  { col: 'toolsZh', lang: 'zh', folder: 'tools' },
  { col: 'profilesZh', lang: 'zh', folder: 'profiles' },
  { col: 'skillsEn', lang: 'en', folder: 'skills' },
  { col: 'agentsEn', lang: 'en', folder: 'agents' },
  { col: 'workflowsEn', lang: 'en', folder: 'workflows' },
  { col: 'promptsEn', lang: 'en', folder: 'prompts' },
  { col: 'toolsEn', lang: 'en', folder: 'tools' },
  { col: 'profilesEn', lang: 'en', folder: 'profiles' },
];

async function copyContent() {
  // 先清理 public/raw 陈旧遗留目录，保证每次构建为干净镜像
  await rm(destDir, { recursive: true, force: true });
  await mkdir(destDir, { recursive: true });
  for (const { col, lang, folder } of collections) {
    const src = join(srcDir, col);
    const dest = join(destDir, lang, folder);
    try {
      await mkdir(dirname(dest), { recursive: true });
      await cp(src, dest, { recursive: true });
    } catch (e) {
      // 目录可能不存在，跳过
    }
  }
  console.log('Content files copied to public/raw/');
}

copyContent();
