#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// 1. 設定來源與目標路徑
const skillContent = fs.readFileSync(path.join(__dirname, '../SKILL.md'), 'utf8');
const targetFolder = path.join(process.cwd(), '.github', 'skills', 'zhi-terminator');
const targetFile = path.join(targetFolder, 'SKILL.md');

console.log('Zhi-Terminator 正在掃描並初始化防禦結界...');

try {
  // 2. 遞迴建立目錄
  if (!fs.existsSync(targetFolder)) {
    fs.mkdirSync(targetFolder, { recursive: true });
  }

  // 3. 寫入 SKILL.md
  fs.writeFileSync(targetFile, skillContent);

  console.log('\x1b[32m%s\x1b[0m', '安裝成功！');
  console.log(`位置: .github/skills/zhi-terminator/SKILL.md`);
  console.log('\n現在你的 GitHub Copilot 或 AI Agent 已經可以讀取這套術語守護規則了。');
  console.log('建議在 Copilot Chat 中輸入：「載入 zhi-terminator 規則，幫我檢查文件。」');

} catch (err) {
  console.error('\x1b[31m%s\x1b[0m', '安裝失敗：', err.message);
}
