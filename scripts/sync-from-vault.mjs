// 从 vault Assets/catalog/ 同步展示内容到站点 src/content/ 与 public/workflows/
// 内容真相源 = ObsidiaNote vault（github.com:HerrDanke/ObsidiaNote）
import { cp, mkdir, rm, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..'); // 站点根
const VAULT = process.env.VAULT_ROOT || '/root/webhost/vault';
const CATALOG = path.join(VAULT, 'Assets', 'catalog');

// 8 个 collection（vault catalog 下的双语目录，mkdir 生成保证 astro 全存在）
const collections = [
  'agentsZh', 'agentsEn',
  'skillsZh', 'skillsEn',
  'profilesZh', 'profilesEn',
  'workflowsZh', 'workflowsEn',
];

let copied = 0;
for (const col of collections) {
  const dest = path.join(ROOT, 'src/content', col);
  await rm(dest, { recursive: true, force: true });   // 先清空，保证镜像一致（删除陈旧文件）
  await mkdir(dest, { recursive: true });
  const src = path.join(CATALOG, col);
  const names = await readdir(src).catch(() => []);    // vault 无此目录 → []
  if (names.length === 0) continue;
  await cp(src, dest, { recursive: true });
  copied += names.filter(n => n.endsWith('.md')).length;
}

// 工作流 yaml：vault Assets/catalog/workflows-yaml/ → 站点 public/workflows/
const yamlSrc = path.join(CATALOG, 'workflows-yaml');
const yamlDest = path.join(ROOT, 'public/workflows');
await rm(yamlDest, { recursive: true, force: true });
await mkdir(yamlDest, { recursive: true });
const yamlNames = await readdir(yamlSrc).catch(() => []);
if (yamlNames.length > 0) await cp(yamlSrc, yamlDest, { recursive: true });

// 校验：非空集合至少同步到 100 个 md，否则视为源异常直接失败（防静默构建空站）
if (copied < 100) {
  console.error(`sync 异常：仅同步 ${copied} 个 md（期望 ≥100），vault catalog 可能缺失`);
  process.exit(1);
}
console.log(`sync ok: ${copied} md + ${yamlNames.length} yaml`);
