const fs = require('fs');

// 读取 token-meta.json 文件
const tokenMeta = JSON.parse(fs.readFileSync('components/version/token-meta.json', 'utf8'));

// 找出缺少描述信息的 token
const missingDescriptions = [];

for (const [tokenName, tokenInfo] of Object.entries(tokenMeta)) {
  const missing = [];

  if (!tokenInfo.name || tokenInfo.name.trim() === '') {
    missing.push('name');
  }

  if (!tokenInfo.nameEn || tokenInfo.nameEn.trim() === '') {
    missing.push('nameEn');
  }

  if (!tokenInfo.desc || tokenInfo.desc.trim() === '') {
    missing.push('desc');
  }

  if (!tokenInfo.descEn || tokenInfo.descEn.trim() === '') {
    missing.push('descEn');
  }

  if (missing.length > 0) {
    missingDescriptions.push({
      tokenName,
      missing,
      type: tokenInfo.type,
      source: tokenInfo.source,
    });
  }
}

console.log(`找到 ${missingDescriptions.length} 个缺少描述信息的 token:`);
console.log('\n按缺失字段分组:');

// 按缺失字段分组
const groupedByMissing = {};
missingDescriptions.forEach(item => {
  const key = item.missing.join(', ');
  if (!groupedByMissing[key]) {
    groupedByMissing[key] = [];
  }
  groupedByMissing[key].push(item.tokenName);
});

for (const [missingFields, tokens] of Object.entries(groupedByMissing)) {
  console.log(`\n缺少 [${missingFields}] 的 token (${tokens.length}个):`);
  tokens.forEach(token => console.log(`  - ${token}`));
}

console.log('\n详细信息:');
missingDescriptions.forEach(item => {
  console.log(`\n${item.tokenName}:`);
  console.log(`  缺少: ${item.missing.join(', ')}`);
  console.log(`  类型: ${item.type}`);
  console.log(`  来源: ${item.source}`);
});
