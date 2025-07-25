const fs = require('fs');
const path = require('path');

// 读取当前的 token 分析结果
const tokenMeta = require('./token-meta.json');
const tokenJson = require('./token.json');

// 收集所有在 token.json 中引用的全局 token
const allGlobalTokens = new Set();
Object.values(tokenJson).forEach(comp => {
  if (comp.global) {
    comp.global.forEach(token => allGlobalTokens.add(token));
  }
});

// 找出缺失的 token
const missingTokens = Array.from(allGlobalTokens).filter(token => !tokenMeta.global[token]);

console.log('=== 分析缺失的 Token ===');
console.log('总计缺失:', missingTokens.length);

// 分类缺失的 token
const categories = {
  colors: [],
  fontHeight: [],
  boxShadow: [],
  others: [],
};

missingTokens.forEach(token => {
  if (
    token.match(
      /^(blue|purple|cyan|green|magenta|pink|red|orange|yellow|volcano|geekblue|lime|gold)\d+$/,
    )
  ) {
    categories.colors.push(token);
  } else if (token.includes('fontHeight')) {
    categories.fontHeight.push(token);
  } else if (token.includes('boxShadow')) {
    categories.boxShadow.push(token);
  } else {
    categories.others.push(token);
  }
});

console.log('\n=== 分类统计 ===');
console.log('颜色相关:', categories.colors.length);
console.log('字体高度相关:', categories.fontHeight.length);
console.log('阴影相关:', categories.boxShadow.length);
console.log('其他:', categories.others.length);

console.log('\n=== 颜色 Token ===');
categories.colors.forEach(token => console.log(token));

console.log('\n=== 字体高度 Token ===');
categories.fontHeight.forEach(token => console.log(token));

console.log('\n=== 阴影 Token ===');
categories.boxShadow.forEach(token => console.log(token));

console.log('\n=== 其他 Token ===');
categories.others.forEach(token => console.log(token));

// 生成需要添加的注释内容
function generateColorTokenComment(token) {
  const match = token.match(/^(\w+)(\d+)$/);
  if (!match) return null;

  const [, colorName, level] = match;
  const colorNameZH =
    {
      blue: '蓝色',
      purple: '紫色',
      cyan: '青色',
      green: '绿色',
      magenta: '品红',
      pink: '粉色',
      red: '红色',
      orange: '橙色',
      yellow: '黄色',
      volcano: '火山',
      geekblue: '极客蓝',
      lime: '青柠',
      gold: '金色',
    }[colorName] || colorName;

  return {
    nameZH: `${colorNameZH}色阶 ${level}`,
    nameEN: `${colorName.charAt(0).toUpperCase() + colorName.slice(1)} Color Level ${level}`,
    desc: `${colorNameZH}色阶第 ${level} 级颜色`,
    descEN: `Level ${level} color of ${colorName} color palette`,
  };
}

function generateFontHeightComment(token) {
  if (token === 'fontHeight') {
    return {
      nameZH: '字体行高',
      nameEN: 'Font Line Height',
      desc: '默认字体的行高',
      descEN: 'Default font line height',
    };
  }
  if (token === 'fontHeightSM') {
    return {
      nameZH: '小号字体行高',
      nameEN: 'Small Font Line Height',
      desc: '小号字体的行高',
      descEN: 'Small font line height',
    };
  }
  if (token === 'fontHeightLG') {
    return {
      nameZH: '大号字体行高',
      nameEN: 'Large Font Line Height',
      desc: '大号字体的行高',
      descEN: 'Large font line height',
    };
  }
  return null;
}

function generateBoxShadowComment(token) {
  const shadowMap = {
    boxShadowPopoverArrow: {
      nameZH: '弹出框箭头阴影',
      nameEN: 'Popover Arrow Shadow',
      desc: '弹出框箭头的阴影效果',
      descEN: 'Shadow effect for popover arrow',
    },
    boxShadowCard: {
      nameZH: '卡片阴影',
      nameEN: 'Card Shadow',
      desc: '卡片组件的阴影效果',
      descEN: 'Shadow effect for card component',
    },
    boxShadowTabsOverflowLeft: {
      nameZH: '标签页左侧溢出阴影',
      nameEN: 'Tabs Left Overflow Shadow',
      desc: '标签页左侧溢出时的阴影效果',
      descEN: 'Shadow effect when tabs overflow on the left',
    },
    boxShadowTabsOverflowRight: {
      nameZH: '标签页右侧溢出阴影',
      nameEN: 'Tabs Right Overflow Shadow',
      desc: '标签页右侧溢出时的阴影效果',
      descEN: 'Shadow effect when tabs overflow on the right',
    },
    boxShadowTabsOverflowTop: {
      nameZH: '标签页顶部溢出阴影',
      nameEN: 'Tabs Top Overflow Shadow',
      desc: '标签页顶部溢出时的阴影效果',
      descEN: 'Shadow effect when tabs overflow on the top',
    },
    boxShadowTabsOverflowBottom: {
      nameZH: '标签页底部溢出阴影',
      nameEN: 'Tabs Bottom Overflow Shadow',
      desc: '标签页底部溢出时的阴影效果',
      descEN: 'Shadow effect when tabs overflow on the bottom',
    },
    boxShadowDrawerLeft: {
      nameZH: '抽屉左侧阴影',
      nameEN: 'Drawer Left Shadow',
      desc: '左侧抽屉的阴影效果',
      descEN: 'Shadow effect for left drawer',
    },
    boxShadowDrawerRight: {
      nameZH: '抽屉右侧阴影',
      nameEN: 'Drawer Right Shadow',
      desc: '右侧抽屉的阴影效果',
      descEN: 'Shadow effect for right drawer',
    },
    boxShadowDrawerUp: {
      nameZH: '抽屉顶部阴影',
      nameEN: 'Drawer Top Shadow',
      desc: '顶部抽屉的阴影效果',
      descEN: 'Shadow effect for top drawer',
    },
    boxShadowDrawerDown: {
      nameZH: '抽屉底部阴影',
      nameEN: 'Drawer Bottom Shadow',
      desc: '底部抽屉的阴影效果',
      descEN: 'Shadow effect for bottom drawer',
    },
  };

  return shadowMap[token] || null;
}

console.log('\n=== 生成注释示例 ===');
if (categories.colors.length > 0) {
  const example = generateColorTokenComment(categories.colors[0]);
  console.log('颜色注释示例:', JSON.stringify(example, null, 2));
}

if (categories.fontHeight.length > 0) {
  const example = generateFontHeightComment(categories.fontHeight[0]);
  console.log('字体高度注释示例:', JSON.stringify(example, null, 2));
}

if (categories.boxShadow.length > 0) {
  const example = generateBoxShadowComment(categories.boxShadow[0]);
  console.log('阴影注释示例:', JSON.stringify(example, null, 2));
}
