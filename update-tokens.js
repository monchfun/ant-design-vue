const fs = require('fs');
const path = require('path');

/**
 * 更新 Vue 项目的 token-meta.json 文件，补充来自 React 项目的缺失描述
 */
function updateTokenDescriptions() {
  try {
    // 读取 React 项目的 token-meta.json
    const reactTokensPath = path.join(__dirname, 'token-meta.json');
    const reactTokens = JSON.parse(fs.readFileSync(reactTokensPath, 'utf8'));

    // 读取 Vue 项目的 token-meta.json
    const vueTokensPath = path.join(__dirname, 'components/version/token-meta.json');
    const vueTokens = JSON.parse(fs.readFileSync(vueTokensPath, 'utf8'));

    let updatedCount = 0;

    // 遍历 React 项目的 global tokens
    Object.keys(reactTokens.global).forEach(key => {
      if (vueTokens[key]) {
        let hasUpdate = false;

        // 检查并更新缺失的字段
        if (!vueTokens[key].name && reactTokens.global[key].name) {
          vueTokens[key].name = reactTokens.global[key].name;
          hasUpdate = true;
        }

        if (!vueTokens[key].nameEn && reactTokens.global[key].nameEn) {
          vueTokens[key].nameEn = reactTokens.global[key].nameEn;
          hasUpdate = true;
        }

        if (!vueTokens[key].desc && reactTokens.global[key].desc) {
          vueTokens[key].desc = reactTokens.global[key].desc;
          hasUpdate = true;
        }

        if (!vueTokens[key].descEn && reactTokens.global[key].descEn) {
          vueTokens[key].descEn = reactTokens.global[key].descEn;
          hasUpdate = true;
        }

        if (hasUpdate) {
          updatedCount++;
          console.log(`Updated token: ${key}`);
        }
      }
    });

    // 写回更新后的文件
    fs.writeFileSync(vueTokensPath, JSON.stringify(vueTokens, null, 2));

    console.log(`\nToken descriptions updated successfully!`);
    console.log(`Total tokens updated: ${updatedCount}`);
  } catch (error) {
    console.error('Error updating token descriptions:', error.message);
    process.exit(1);
  }
}

// 执行更新
updateTokenDescriptions();
