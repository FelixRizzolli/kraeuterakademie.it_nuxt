<template>
    <SectionElement class="contentelement_titleelement" ref="title" :spacing="settings?.spacing" :div="true">
        <div v-if="data.title" class="content-container grid-container">
            <h1 class="title">{{ data.title }}</h1>
        </div>
    </SectionElement>
</template>

<script lang="ts" setup>
    import { gsap } from 'gsap';

    interface TitleElementData {
        title?: string;
    }

    interface TitleElementSettings {
        spacing: Spacing;
        style: string;
    }

    export interface TitleElementProps {
        data: TitleElementData;
        settings: TitleElementSettings;
    }

    const props = defineProps<TitleElementProps>();
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

    .contentelement_titleelement {
        padding-top: 30rem;
    }

    .title {
        @include col-start(3);
        @include col(6);

        @include wordbreak();

        & {
            z-index: 1;

            text-align: right;
        }
    }

    @media (max-width: 1023px) {
        .contentelement_titleelement {
            padding: 0;
        }

        .title {
            @include col-start(2);
            @include col(12);
        }
    }
</style>
