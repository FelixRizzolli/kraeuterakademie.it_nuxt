<template>
  <header>
    <HeaderSidebar :logo="sidebar.logo" :links="sidebar.links" />
    <HeaderTopNavigation :links="topNavigation.links" />
    <section class="button">

    </section>
  </header>
</template>

<script lang="ts" setup>
import type { HeaderTopNavigationProps } from './HeaderTopNavigation.vue';
import type { HeaderSidebarProps } from './HeaderSidebar.vue';


export interface HeaderCtaButtonProps {
  text: string;
  link: string;
}

export interface HeaderProps {
  sidebar: HeaderSidebarProps;
  topNavigation: HeaderTopNavigationProps;
  ctaButton: HeaderCtaButtonProps;
}

const props = defineProps<HeaderProps>();

</script>

<style lang="scss" scoped>
  header {
    position: relative;
    z-index: 10;
  }

</style>