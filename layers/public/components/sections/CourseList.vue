<template>
    <SectionElement
        class="contentelement_courselist grid-container"
        :spacing="settings?.spacing"
        :style="settings?.style"
    >
        <h2 v-if="data.title" class="title" ref="titleElement">{{ data.title }}</h2>
        <div class="courselist-container grid-container">
            <Course v-for="(course, index) in data.courses" :key="index" :course="course" />
        </div>
    </SectionElement>
</template>

<script lang="ts" setup>
    import { gsap } from 'gsap';
    import type { Course } from '../elements/Course.vue';

    interface CourseListData {
        title?: string;
        courses: Array<Course>;
    }

    interface CourseListSettings {
        spacing: Spacing;
        style: string;
    }

    export interface CourseListProps {
        data: CourseListData;
        settings: CourseListSettings;
    }

    const props = defineProps<CourseListProps>();

    const titleElement = ref<HTMLElement>();

    onMounted(() => {
        if (titleElement.value instanceof HTMLElement) {
            const opacityEffect = getOpacityEffect(gsap);
            opacityEffect(titleElement);
        }
    });
</script>

<style lang="scss" scoped>
    @use '~~/layers/public/assets/styles/public/utils.scss' as *;

    .contentelement_courselist {
        margin-bottom: 15rem;
    }

    .title {
        @include col-start(3);
        @include col(6);

        @include wordbreak();
    }

    .courselist-container {
        @include col-start(1);
        @include col(14);
    }

    .course:nth-child(3n + 1) {
        @include col-start(3);
        @include col(4);

        & {
            margin-top: 19.5rem;
        }
    }

    .course:nth-child(3n + 2) {
        @include col-start(10);
        @include col(4);

        & {
            margin-top: 7.5rem;
        }
    }

    .course:nth-child(3n) {
        @include col-start(8);
        @include col(4);
    }

    @media (max-width: 1023px) {
        .contentelement_courselist {
            margin-bottom: 7.5rem;
        }

        .title {
            @include col-start(3);
            @include col(11);
        }

        .courselist-container {
            margin-top: 4.5rem;

            row-gap: 6rem;
        }

        .course:nth-child(3n + 1) {
            @include col-start(2);
            @include col(10);

            & {
                margin-top: 0;
            }
        }

        .course:nth-child(3n + 2) {
            @include col-start(3);
            @include col(10);
        }

        .course:nth-child(3n) {
            @include col-start(2);
            @include col(10);
        }
    }
</style>
