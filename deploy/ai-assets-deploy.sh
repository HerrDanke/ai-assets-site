#!/usr/bin/env bash
# 部署 vault Assets/catalog → ai-assets 站 (8083)
# 每 5 分钟由 systemd timer 触发：vault/site fetch → ff-only merge → sync-from-vault → npm run build
# 与 docusaurus-deploy.sh 共享 /run/vault-deploy.lock，串行化对 vault 的 git 操作
set -euo pipefail

exec 9>/run/vault-deploy.lock
flock 9

VAULT=/root/webhost/vault
SITE=/root/webhost/ai-assets-site
STATE=/run/ai-assets-deploy.lastsha

# 拉取 vault（内容源）
cd "$VAULT"
git fetch origin master --quiet || { echo "[ai] $(date '+%F %T') vault fetch 失败"; exit 1; }

vault_local=$(git rev-parse HEAD)
vault_remote=$(git rev-parse origin/master)
if [ "$vault_local" != "$vault_remote" ]; then
  echo "[ai] $(date '+%F %T') vault $vault_local -> $vault_remote"
  git merge --ff-only origin/master || { echo "[ai] $(date '+%F %T') vault merge 失败（可能分叉），请手动处理"; exit 1; }
fi

# 拉取站点代码（与 docusaurus-deploy.sh 一致：站点代码改动同样自动部署）
cd "$SITE"
git fetch origin master --quiet || { echo "[ai] $(date '+%F %T') site fetch 失败"; exit 1; }

site_local=$(git rev-parse HEAD)
site_remote=$(git rev-parse origin/master)
if [ "$site_local" != "$site_remote" ]; then
  echo "[ai] $(date '+%F %T') site $site_local -> $site_remote"
  git merge --ff-only origin/master || { echo "[ai] $(date '+%F %T') site merge 失败（可能分叉），请手动处理"; exit 1; }
fi

# 任一仓库有更新则构建。状态文件记录 "vault_sha:site_sha"
last_state=$(cat "$STATE" 2>/dev/null || echo none)
cur_state="${vault_remote}:${site_remote}"
if [ "$last_state" = "$cur_state" ] && [ -f "$SITE/dist/index.html" ]; then
  echo "[ai] $(date '+%F %T') 无更新，跳过构建"
  exit 0
fi

echo "[ai] $(date '+%F %T') 构建 $cur_state"
node scripts/sync-from-vault.mjs
npm run build
[ -f "$SITE/dist/index.html" ] || { echo "[ai] $(date '+%F %T') build 产物缺失 dist/index.html"; exit 1; }

echo "$cur_state" > "$STATE"
echo "[ai] $(date '+%F %T') 完成 $cur_state"
