<docs>
---
order: 10
title:
  zh-CN: 自定义新增页签触发器
  en-US: Customized trigger of new tab
---

## zh-CN

隐藏默认的页签增加图标，给自定义触发器绑定事件。

## en-US

Hide default plus icon, and bind event for customized trigger.

</docs>

<template>
  <div>
    <div :style="{ marginBottom: '16px' }">
      <a-button @click="add">ADD</a-button>
    </div>
    <a-tabs v-model:active-key="activeKey" hide-add type="editable-card" @edit="onEdit">
      <a-tab-pane v-for="pane in panes" :key="pane.key" :tab="pane.title" :closable="pane.closable">
        {{ pane.content }}
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const panes = ref<{ title: string; content: string; key: string; closable?: boolean }[]>(
  new Array(2).fill(null).map((_, index) => {
    const id = String(index + 1);
    return { title: `Tab ${id}`, content: `Content of Tab Pane ${id}`, key: id };
  }),
);
const activeKey = ref(panes.value[0].key);
const newTabIndex = ref(0);

const add = () => {
  activeKey.value = `newTab${newTabIndex.value++}`;
  panes.value.push({
    title: `New Tab ${activeKey.value}`,
    content: `Content of new Tab ${activeKey.value}`,
    key: activeKey.value,
  });
};

const remove = (targetKey: string) => {
  let lastIndex = 0;
  panes.value.forEach((pane, i) => {
    if (pane.key === targetKey) {
      lastIndex = i - 1;
    }
  });
  panes.value = panes.value.filter(pane => pane.key !== targetKey);
  if (panes.value.length && activeKey.value === targetKey) {
    if (lastIndex >= 0) {
      activeKey.value = panes.value[lastIndex].key;
    } else {
      activeKey.value = panes.value[0].key;
    }
  }
};

const onEdit = (targetKey: string) => {
  remove(targetKey);
};
</script>
