<docs>
---
order: 8
title:
  zh-CN: 自定义展开/折叠图标
  en-US: Customize collapse/expand icon
---

## zh-CN

自定义展开/折叠图标。

## en-US

customize collapse/expand icon of tree node

</docs>

<template>
  <a-tree
    v-model:expanded-keys="expandedKeys"
    v-model:selected-keys="selectedKeys"
    show-line
    :tree-data="treeData"
  >
    <template #switcherIcon="{ switcherCls }"><down-outlined :class="switcherCls" /></template>
  </a-tree>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { DownOutlined } from '@ant-design/icons-vue';
import type { TreeProps } from 'ant-design-vue';
const expandedKeys = ref<string[]>(['0-0-0']);
const selectedKeys = ref<string[]>([]);
const treeData: TreeProps['treeData'] = [
  {
    title: 'parent 1',
    key: '0-0',
    children: [
      {
        title: 'parent 1-0',
        key: '0-0-0',
        children: [
          {
            title: 'leaf',
            key: '0-0-0-0',
          },
          {
            title: 'leaf',
            key: '0-0-0-1',
          },
          {
            title: 'leaf',
            key: '0-0-0-2',
          },
        ],
      },
      {
        title: 'parent 1-1',
        key: '0-0-1',
        children: [
          {
            title: 'leaf',
            key: '0-0-1-0',
          },
        ],
      },
      {
        title: 'parent 1-2',
        key: '0-0-2',
        children: [
          {
            title: 'leaf',
            key: '0-0-2-0',
          },
          {
            title: 'leaf',
            key: '0-0-2-1',
          },
        ],
      },
    ],
  },
];
</script>
