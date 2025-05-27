#!/usr/bin/env node

const fs = require("fs");

const msgPath = process.argv[2];
const commitMsg = fs.readFileSync(msgPath, "utf-8").trim();

const validPattern =
  /^(feat|fix|docs|style|refactor|perf|test|chore|revert|ci|build): .+$/;

if (!validPattern.test(commitMsg)) {
  console.error(`❌ Неверное сообщение коммита: "${commitMsg}"

✅ Ожидаемый формат:
  <type>: описание [TOTB-1234]

Примеры:
  feat: добавил модалку
  fix: починил баг в форме

🔗 Подробнее о форматировании сообщений: 
https://www.conventionalcommits.org/ru/v1.0.0-beta.4/
  `);
  process.exit(1);
}

console.log(`✅ Коммит "${commitMsg}" соответствует формату.`);
