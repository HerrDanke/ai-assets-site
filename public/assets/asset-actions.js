// 资产卡片操作 + 工作流打包下载（双语支持）
(function () {
  'use strict';

  var isDownloading = false;

  function getLang() {
    return window.__LANG__ || 'zh';
  }

  function t(zh, en) {
    return getLang() === 'en' ? en : zh;
  }

  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (e) {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand('copy');
        document.body.removeChild(ta);
        return true;
      } catch (e2) {
        document.body.removeChild(ta);
        return false;
      }
    }
  }

  function downloadBlob(blob, filename) {
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function downloadText(filename, text) {
    downloadBlob(new Blob([text], { type: 'text/plain;charset=utf-8' }), filename);
  }

  function showStatus(message) {
    var el = document.getElementById('workflow-status');
    if (!el) return;
    el.textContent = message;
    el.classList.add('show');
  }

  function hideStatus() {
    var el = document.getElementById('workflow-status');
    if (el) el.classList.remove('show');
  }

  function showToast(message, type) {
    var existing = document.querySelector('.asset-toast');
    if (existing) existing.remove();

    var toast = document.createElement('div');
    toast.className = 'asset-toast asset-toast-' + (type || 'success');
    toast.textContent = message;
    document.body.appendChild(toast);

    requestAnimationFrame(function () { toast.classList.add('show'); });

    setTimeout(function () {
      toast.classList.remove('show');
      setTimeout(function () { toast.remove(); }, 200);
    }, 2500);
  }

  function loadJSZip() {
    return new Promise(function (resolve, reject) {
      if (window.JSZip) { resolve(window.JSZip); return; }
      var script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/jszip@3.10.1/dist/jszip.min.js';
      script.onload = function () { resolve(window.JSZip); };
      script.onerror = function () { reject(new Error('JSZip ' + t('加载失败', 'load failed'))); };
      document.head.appendChild(script);
    });
  }

  function downloadWorkflow() {
    if (isDownloading) return;
    isDownloading = true;

    var sel = document.getElementById('workflowSelector');
    var btn = document.getElementById('workflowDownloadBtn');
    btn.textContent = '⏳';

    if (!sel || !btn) {
      showToast(t('页面元素未找到', 'Elements not found'), 'error');
      btn.textContent = '📦';
      isDownloading = false;
      return;
    }

    var slug = sel.value;
    if (!slug) {
      showToast(t('请先选择一个工作流', 'Please select a workflow first'), 'error');
      btn.textContent = '📦';
      isDownloading = false;
      return;
    }

    var wf = window.__WORKFLOWS__[slug];
    if (!wf) {
      showToast(t('工作流数据不存在', 'Workflow not found'), 'error');
      btn.textContent = '📦';
      isDownloading = false;
      return;
    }

    btn.classList.add('loading');
    showStatus(t('正在加载 JSZip...', 'Loading JSZip...'));

    var lang = getLang();

    loadJSZip().then(function (JSZip) {
      var zip = new JSZip();
      var list = [];
      list.push({ p: 'workflows/' + slug + '.md', k: 'workflows', s: slug });
      (wf.agents || []).forEach(function (s) { list.push({ p: 'agents/' + s + '.md', k: 'agents', s: s }); });
      (wf.skills || []).forEach(function (s) { list.push({ p: 'skills/' + s + '.md', k: 'skills', s: s }); });
      (wf.profiles || []).forEach(function (s) { list.push({ p: 'profiles/' + s + '.md', k: 'profiles', s: s }); });

      var fetched = [];

      function fetchNext(idx) {
        showStatus(t('正在获取文件... (' + idx + '/' + list.length + ')', 'Fetching files... (' + idx + '/' + list.length + ')'));
        if (idx >= list.length) {
          if (fetched.length === 0) {
            showToast(t('没有找到可下载的文件', 'No files found'), 'error');
            btn.classList.remove('loading');
            btn.textContent = '📦';
            hideStatus();
            isDownloading = false;
            return;
          }
          showStatus(t('正在生成压缩包...', 'Generating zip...'));
          fetched.forEach(function (f) { zip.file(f.p, f.t); });
          zip.generateAsync({ type: 'blob' }).then(function (blob) {
            downloadBlob(blob, slug + '-workflow.zip');
            showToast(t('已打包 ' + fetched.length + ' 个文件，下载已开始', 'Packed ' + fetched.length + ' files, download started'), 'success');
            btn.classList.remove('loading');
            btn.textContent = '📦';
            hideStatus();
            isDownloading = false;
          }).catch(function (err) {
            showToast(t('生成压缩包失败：' + err.message, 'Zip failed: ' + err.message), 'error');
            btn.classList.remove('loading');
            btn.textContent = '📦';
            hideStatus();
            isDownloading = false;
          });
          return;
        }

        var item = list[idx];
        var url = '/raw/' + lang + '/' + item.k + '/' + item.s + '.md';

        fetch(url)
          .then(function (r) { return r.ok ? r.text() : null; })
          .then(function (text) {
            if (text) fetched.push({ p: item.p, t: text });
            fetchNext(idx + 1);
          })
          .catch(function () { fetchNext(idx + 1); });
      }

      fetchNext(0);
    }).catch(function (err) {
      showToast(t('打包失败：' + err.message, 'Pack failed: ' + err.message), 'error');
      btn.classList.remove('loading');
      btn.textContent = '📦';
      hideStatus();
      isDownloading = false;
    });
  }

  function init() {
    window.__downloadWorkflow = downloadWorkflow;

    // 初始化工作流选择器
    var selector = document.getElementById('workflowSelector');
    if (selector) {
      // 恢复上次选择
      var saved = localStorage.getItem('sp-workflow');
      if (saved && window.__WORKFLOWS__[saved]) {
        selector.value = saved;
      }
      // 监听变化并保存
      selector.addEventListener('change', function () {
        var slug = selector.value;
        localStorage.setItem('sp-workflow', slug);
        if (slug) {
          document.body.setAttribute('data-workflow', slug);
        } else {
          document.body.removeAttribute('data-workflow');
        }
        document.dispatchEvent(new CustomEvent('workflow:filter'));
      });
      // 初始化 body 属性
      if (selector.value) {
        document.body.setAttribute('data-workflow', selector.value);
      }
    }

    // 卡片按钮
    document.addEventListener('click', function (e) {
      var cardBtn = e.target.closest('.asset-card-btn');
      if (!cardBtn) return;
      e.preventDefault();
      e.stopPropagation();

      var slug = cardBtn.dataset.slug;
      var kind = cardBtn.dataset.kind;
      var action = cardBtn.dataset.action;
      if (!slug || !kind || !action) return;

      var lang = getLang();
      var url = '/raw/' + lang + '/' + kind + '/' + slug + '.md';

      fetch(url)
        .then(function (r) { if (!r.ok) throw new Error(t('文件未找到', 'File not found')); return r.text(); })
        .then(function (text) {
          if (action === 'copy') {
            return copyText(text).then(function (ok) {
              showToast(ok ? t('已复制到剪贴板', 'Copied to clipboard') : t('复制失败', 'Copy failed'), ok ? 'success' : 'error');
            });
          } else {
            downloadText(slug + '.md', text);
            showToast(t('下载已开始', 'Download started'), 'success');
          }
        })
        .catch(function (err) { showToast(t('操作失败：' + err.message, 'Operation failed: ' + err.message), 'error'); });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
