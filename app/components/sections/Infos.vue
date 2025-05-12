<template>
    <section class="contentelement_template grid-container">
        <div class="info" v-for="(info, index) in infos" :key="index">
            <h3 v-if="info.title" class="title">{{ info.title }}</h3>
            <p v-if="info.text" class="text">{{ info.text }}</p>
        </div>
    </section>
</template>

<script lang="ts" setup>
export interface TemplateProps {
    infos: Array<{
        title?: string;
        text?: string;
    }>;
}

const props = defineProps<TemplateProps>();
</script>

<style lang="scss" scoped>
.contentelement_template {
    margin-bottom: 15rem;
    padding: 15rem 0;

    background-color: $colorBackgroundBrown;
    color: $colorFontWhite;
}

.info {
    @include col(4);

    &:nth-child(3n + 1) {
        @include col-start(2);
    }

    &:nth-child(3n + 2) {
        @include col-start(6);
        margin-top: 13.5rem;
    }

    &:nth-child(3n) {
        @include col-start(10);
        margin-top: 6rem;
    }
}

.title {
    @include font-24-39-5-L();
    @include fontFamilyDefault();

    & {
        font-weight: 700;
    }
}

.text {
    @include font-24-39-5-L();
}

@media (max-width: 1024px) {
    .contentelement_template {
        padding: 7.5rem 0;
    }
    .info {
        @include col(12);

        &:nth-child(3n + 1) {
            @include col-start(2);
            @include col(12);
        }

        &:nth-child(3n + 2) {
            @include col-start(2);
            @include col(12);
            margin-top: 0;
        }

        &:nth-child(3n) {
            @include col-start(2);
            @include col(12);
            margin-top: 0;
        }

        &:not(:first-of-type) {
            margin-top: 3.5rem;
        }
    }
}
</style>
