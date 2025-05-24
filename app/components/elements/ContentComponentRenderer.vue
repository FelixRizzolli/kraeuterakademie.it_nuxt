<template>
    <Accordions v-if="name === 'Accordions' && data" :data="data" />
    <AnimatedText v-else-if="name === 'AnimatedText' && data" :data="data" />
    <CourseList v-else-if="name === 'CourseList' && data" :data="data" />
    <HeroSmall v-else-if="name === 'HeroSmall' && data" :data="data" />
    <HeroBig v-else-if="name === 'HeroBig' && data" :data="data" />
    <ImageText v-else-if="name === 'ImageText' && data" :data="data" />
    <Infos v-else-if="name === 'Infos' && data" :data="data" />
    <MoodPicture v-else-if="name === 'MoodPicture' && data" :data="data" />
    <TextElement v-else-if="name === 'TextElement' && data" :data="data" />
</template>

<script lang="ts" setup>
    interface ContentComponentRendererProps {
        name: string;
        data: any;
    }

    const props = defineProps<ContentComponentRendererProps>();

    onMounted(() => {
        console.log('ContentComponentRenderer mounted with props:', props);
    });
</script>

<style></style>
