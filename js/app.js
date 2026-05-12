/**
 * app.js — ガイドライン共通インタラクション
 */

// 用語辞書フィルター
function filterGlossary(query) {
  const q = query.toLowerCase();
  document.querySelectorAll('#glossaryTable tbody tr').forEach(row => {
    row.style.display = row.textContent.toLowerCase().includes(q) ? '' : 'none';
  });
}
