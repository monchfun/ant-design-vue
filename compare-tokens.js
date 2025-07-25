const tokenMeta = require('./token-meta.json');
const tokenJson = require('./token.json');

// 收集所有在 token.json 中引用的全局 token
const allGlobalTokens = new Set();
Object.values(tokenJson).forEach(comp => {
  if (comp.global) {
    comp.global.forEach(token => allGlobalTokens.add(token));
  }
});

// 找出在 token-meta.json 中缺失的 token
const missingTokens = Array.from(allGlobalTokens).filter(token => !tokenMeta.global[token]);

console.log('=== Missing Tokens in token-meta.json ===');
console.log('Total missing:', missingTokens.length);
console.log('Missing tokens:');
missingTokens.forEach((token, index) => {
  console.log(`${index + 1}. ${token}`);
});

// 同时检查哪些 token 有描述但缺少某些字段
console.log('\n=== Tokens with incomplete descriptions ===');
const incompleteTokens = [];
Object.keys(tokenMeta.global).forEach(token => {
  const meta = tokenMeta.global[token];
  if (!meta.name || !meta.nameEn || !meta.desc || !meta.descEn) {
    incompleteTokens.push({
      token,
      missing: {
        name: !meta.name,
        nameEn: !meta.nameEn,
        desc: !meta.desc,
        descEn: !meta.descEn,
      },
    });
  }
});

console.log('Total incomplete:', incompleteTokens.length);
incompleteTokens.slice(0, 10).forEach(item => {
  console.log(
    `${item.token}: missing ${Object.keys(item.missing)
      .filter(k => item.missing[k])
      .join(', ')}`,
  );
});

if (incompleteTokens.length > 10) {
  console.log(`... and ${incompleteTokens.length - 10} more`);
}
