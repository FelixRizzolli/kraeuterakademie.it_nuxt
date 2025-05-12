<template>
    <section class="contentelement_courselist grid-container">
        <h2 v-if="title" class="title">{{ title }}</h2>
        <Course v-for="(course, index) in courses" :key="index" :course="course" />
    </section>
</template>

<script lang="ts" setup>
export interface CourseListProps {
    title?: string;
    courses: Array<Course>;
}

const props = defineProps<CourseListProps>();
</script>

<style lang="scss" scoped>
.contentelement_courselist {
    margin-bottom: 15rem;
}

.title {
    @include col-start(3);
    @include col(6);

    & {
        margin-bottom: 18rem;
    }
}

.course:nth-child(3n + 2) {
    @include col-start(3);
    @include col(4);

    & {
        margin-top: 12rem;
    }
}

.course:nth-child(3n) {
    @include col-start(10);
    @include col(4);
}

.course:nth-child(3n + 1) {
    @include col-start(8);
    @include col(4);
}
</style>
