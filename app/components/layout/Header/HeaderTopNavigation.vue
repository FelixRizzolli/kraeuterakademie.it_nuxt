<template>
  <nav class="top-navigation">
    <NuxtLink v-for="link in links" :key="link.name" class="link" :to="link.href">{{ link.name }}</NuxtLink>
  </nav>
</template>

<script lang="ts" setup>

const links = ref<Array<{ name: string; href: string }>>([
  { name: 'Kräuterkurse', href: '/kraeuterkurse' },
  { name: 'Seminare', href: '/seminare' },
  { name: 'Bücher', href: '/buecher' },
  { name: 'Über Mich', href: '/ueber-mich' },
  { name: 'FNL', href: '/fnl' },
  { name: 'Kontakt', href: '/contact' },
]);

</script>

<style lang="scss" scoped>
  .top-navigation {
    margin: 4.5rem 9rem 0 0;

    position: absolute;
    top:0;
    right: 0;

    display: flex;
    gap: 4.5rem;;
  }

  .link {
    text-decoration: none;
    cursor: pointer;

    color: $colorFontLight;
  }

  .link:hover {
    color: $colorCta;
  }

</style>