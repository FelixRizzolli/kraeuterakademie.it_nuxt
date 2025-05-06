<template>
  <section class="contentelement_imagetext grid-container">
    <div class="image">
      <img :src="image?.src" :alt="image?.alt" />
    </div>
    <p class="text">{{ text1 }}</p>
    <p class="infos">{{ infos }}</p>
    <p class="text">{{ text2 }}</p>
    <NuxtLink class="link-button" :to="link?.href">{{ link?.text }}</NuxtLink>
  </section>
</template>

<script lang="ts" setup>

interface Image {
  src: string;
  alt: string;
}

interface Link {
  href: string;
  text: string;
}

const image = ref<Image>({
  src: '/images/imgtext_1.png',
  alt: 'Seminare',
});
const text1 = ref<string>('Ich bin ein kleiner Blindtext. Und zwar schon so lange ich denken kann. Es war nicht leicht zu verstehen, was es bedeutet, ein blinder Text zu sein: Man ergibt keinen Sinn. Wirklich keinen Sinn. Man wird zusammenhangslos eingeschoben und rumgedreht – und oftmals gar nicht erst gelesen. Aber bin ich allein deshalb ein Text.');
const infos = ref<string>('Finde zu deiner Natur und entfalte deine Kraft.');
const text2 = ref<string>('Ich bin ein kleiner Blindtext. Und zwar schon so lange ich denken kann. Es war nicht leicht zu verstehen, was es bedeutet, ein blinder Text zu sein: Man ergibt keinen Sinn. Wirklich keinen Sinn. Man wird zusammenhangslos eingeschoben');
const link = ref<Link>({
  href: '/seminare',
  text: 'Link Seminare',
});

onMounted(() => {
  console.log('Component mounted');
});
      
</script>

<style lang="scss" scoped>
.contentelement_imagetext {
  margin-top: 15rem;
}

.image {
  @include col-start(3);
  @include col(4);
  @include row(4);
}

.text {
  @include col-start(9);
  @include col(4);

  &:first-of-type {
    margin-top: 12rem;
  }
}

.infos {
  @include col-start(10);
  @include col(4);
  @include font-50-63-1-BL();
  @include fontFamilyHeading();

  & {
    margin: 7.5rem 0;

    color: $colorFontLight;
  }    
  
  &::before,
  &::after {
    display: block;
    content: '';
    width: 45%;
    height: 0.3rem;
    background-color: $colorFontLight;
  }
  
  &::before {
    margin-bottom: 4rem;
  }
  
  &::after {
    margin-top: 4rem;
  }
}

.link-button {
  @include col-start(9);
  @include col(4);

  & {
    margin-top: 4.5rem;
  }
}

</style>