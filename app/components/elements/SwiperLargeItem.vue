<template>
    <div class="item-container">
        <MediaElement v-if="data.image" :media="data.image" ref="imageElement" />
        <div class="content-container">
            <p v-if="data.infos" class="infos">{{ data.infos }}</p>
            <h3 v-if="data.title" class="title">{{ data.title }}</h3>
            <div class="description-container">
                <LexicalRenderer class="description" :nodes="data.description" />
            </div>
            <div class="links-container">
                <NuxtLink
                    class="link-button"
                    :to="link.href || '/'"
                    v-for="link in data.links"
                    :target="link.target ?? '_self'"
                    >{{ link.text }}</NuxtLink
                >
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    export interface SwiperLargeItem {
        image: WebMedia;
        infos?: string;
        title?: string;
        description?: any;
        links?: Array<Link>;
    }

    export interface SwiperLargeItemProps {
        data: SwiperLargeItem;
    }

    const props = defineProps<SwiperLargeItemProps>();

    onMounted(() => {});
</script>

<style lang="scss" scoped>
    .item-container {
        width: 100%;

        display: grid;
        grid-template-columns: repeat(10, 1fr);
        column-gap: 4.5rem;
    }

    .media-container {
        @include col-start(1);
        @include col(5);
    }

    .content-container {
        @include col-start(7);
        @include col(4);

        & {
            padding-top: 10rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
    }

    .title {
        @include font-30-30-5-BL();

        & {
            margin-top: 4.5rem;
        }
    }

    .description-container {
        margin-top: 2.5rem;
    }

    .links-container {
        margin-top: 4.5rem;

        display: flex;
        gap: 1rem;
    }

    @media (max-width: 1023px) {
        .media-container {
            @include col-start(1);
            @include col(10);
        }

        .content-container {
            @include col-start(1);
            @include col(10);

            & {
                padding: 0;
            }
        }

        .infos {
            margin-top: 1rem;
        }

        .title {
            margin-top: 2.5rem;
        }

        .description-container {
            margin-top: 1rem;
        }

        .links-container {
            margin-top: 2.5rem;

            flex-direction: column;
        }
    }
</style>
