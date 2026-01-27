#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const skillSource = path.join(__dirname, '../SKILL.md');
const targetDir = path.join(process.cwd(), '.github/skills/zhi-terminator');

if (!fs.existsSync(targetDir)){
    fs.mkdirSync(targetDir, { recursive: true });
}

fs.copyFileSync(skillSource, path.join(targetDir, 'SKILL.md'));

console.log('Zhi-Terminator Skill 已成功安裝至 .github/skills/zhi-terminator');
console.log('現在你的 AI Agent 已經具備「對抗支語」的能力了！');
