<template>
    <Accordions v-if="name === 'Accordions' && data" :data="data" :settings="settings" />
    <AnimatedText v-else-if="name === 'AnimatedText' && data" :data="data" :settings="settings" />
    <BookList v-else-if="name === 'BookList' && data" :data="data" :settings="settings" />
    <CourseList v-else-if="name === 'CourseList' && data" :data="data" :settings="settings" />
    <HeroLarge v-else-if="name === 'HeroLarge' && data" :data="data" :settings="settings" />
    <HeroSmall v-else-if="name === 'HeroSmall' && data" :data="data" :settings="settings" />
    <HighlightedLinks v-else-if="name === 'HighlightedLinks' && data" :data="data" :settings="settings" />
    <ImageText v-else-if="name === 'ImageText' && data" :data="data" :settings="settings" />
    <Infos v-else-if="name === 'Infos' && data" :data="data" :settings="settings" />
    <MoodPicture v-else-if="name === 'MoodPicture' && data" :data="data" :settings="settings" />
    <SwiperCard v-else-if="name === 'SwiperCard' && data" :data="data" :settings="settings" />
    <SwiperLarge v-else-if="name === 'SwiperLarge' && data" :data="data" :settings="settings" />
    <SwiperSimple v-else-if="name === 'SwiperSimple' && data" :data="data" :settings="settings" />
    <TextElement v-else-if="name === 'TextElement' && data" :data="data" :settings="settings" />
    <TitleElement v-else-if="name === 'TitleElement' && data" :data="data" :settings="settings" />
</template>

<script lang="ts" setup>
    interface ContentComponentRendererProps {
        name: string;
        data: any;
        settings?: any;
    }

    const props = defineProps<ContentComponentRendererProps>();
</script>

<style></style>
