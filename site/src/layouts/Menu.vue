<template>
  <a-config-provider :theme="{ components: { Menu: { colorItemBg: colorBgContainer } } }">
    <a-menu
      :inline-indent="30"
      class="aside-container menu-site"
      mode="inline"
      :theme="isDark ? 'dark' : 'light'"
      :selected-keys="[activeMenuItem]"
    >
      <a-menu-item v-if="showOverview" key="/components/overview">
        <router-link :to="getLocalizedPathname('/components/overview', isZhCN)">
          {{ isZhCN ? '组件总览' : 'Components Overview' }}
        </router-link>
      </a-menu-item>

      <template v-for="m in menus">
        <template v-if="m.children">
          <a-menu-item-group :key="m.order" :title="isZhCN ? m.title : m.enTitle">
            <template v-for="n in m.children">
              <a-menu-item v-if="n.path" :key="n.path">
                <a v-if="n.target" :target="n.target" :href="n.path">
                  <span>{{ isZhCN ? n.title : n.enTitle || n.title }}</span>
                  <span v-if="isZhCN" class="chinese">{{ n.subtitle }}</span>
                </a>
                <router-link v-else :to="getLocalizedPathname(n.path, isZhCN)">
                  <span>{{ isZhCN ? n.title : n.enTitle || n.title }}</span>
                  <span v-if="isZhCN" class="chinese">{{ n.subtitle }}</span>
                </router-link>
                <a-tag v-if="n.tag" color="green" style="margin-left: auto">{{ n.tag }}</a-tag>
              </a-menu-item>
            </template>
          </a-menu-item-group>
        </template>
        <template v-else>
          <a-menu-item :key="m.path">
            <a v-if="m.target" :target="m.target" :href="m.path">
              {{ isZhCN ? `${m.title} ${m.subtitle || ''}` : m.enTitle || m.title }}
            </a>
            <router-link v-else :to="getLocalizedPathname(m.path, isZhCN)">
              {{ isZhCN ? `${m.title} ${m.subtitle || ''}` : m.enTitle || m.title }}
            </router-link>
          </a-menu-item>
        </template>
      </template>
    </a-menu>
  </a-config-provider>
</template>
<script lang="ts">
import { getLocalizedPathname } from '../utils/util';
import { computed, defineComponent, watch, inject } from 'vue';
import { useRoute } from 'vue-router';
import useSiteToken from '../hooks/useSiteToken';

export default defineComponent({
  name: 'Menu',
  props: ['menus', 'isZhCN', 'activeMenuItem'],
  setup(props) {
    const siteToken = useSiteToken();
    const route = useRoute();
    const showOverview = computed(() => {
      return route.path.indexOf('/components') === 0;
    });
    const themeMode = inject('themeMode');
    const isDark = computed<boolean>(() => (themeMode as any).theme.value === 'dark');
    const colorBgContainer = computed(() => siteToken.value.token.colorBgContainer);
    watch(
      [() => props.activeMenuItem, () => props.isZhCN, () => props.menus],
      () => {
        const menus = props.menus.reduce(
          (pre, current) => [...pre, current, ...(current.children || [])],
          [{ path: '/components/overview', title: '组件总览', enTitle: 'Components Overview' }],
        );
        const item = menus.find(m => m.path === props.activeMenuItem);
        let title = props.isZhCN
          ? 'Ant Design Vue - 一套企业级 Vue 组件库'
          : 'Ant Design Vue — An enterprise-class UI components based on Ant Design and Vue.js';
        if (item && item.title) {
          title = props.isZhCN
            ? `${item.subtitle || ''} ${item.title} - Ant Design Vue`
            : `${item.enTitle || item.title} - Ant Design Vue`;
        }
        document.title = title.trim();
      },
      { immediate: true, flush: 'post' },
    );
    return {
      getLocalizedPathname,
      showOverview,
      isDark,
      colorBgContainer,
    };
  },
});
</script>
<style lang="less" scoped></style>
