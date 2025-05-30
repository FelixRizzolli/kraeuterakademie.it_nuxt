<template>
    <div class="card-container">
        <StrapiImage v-if="data.image" :image="data.image" ref="imageElement" />
        <p v-if="data.info" class="info">{{ data.info }}</p>
        <p v-else-if="data.date" class="date">{{ data.date }}</p>
        <h3 v-if="data.title" class="title">{{ data.title }}</h3>
        <NuxtLink v-if="data.link" class="link-button" :to="data.link.href">{{ data.link.text }}</NuxtLink>
    </div>
</template>

<script lang="ts" setup>
    interface StrapiImage {
        alternativeText: string | null;
        url: string;
    }

    interface Link {
        href: string;
        text: string;
    }

    export interface SwiperCardItem {
        image: StrapiImage;
        info?: string;
        date?: string;
        title?: string;
        link?: Link;
    }

    export interface SwiperCardItemProps {
        data: SwiperCardItem;
    }

    const props = defineProps<SwiperCardItemProps>();

    onMounted(() => {});
</script>

<style lang="scss" scoped>
    .card-container {
        width: 100%;
    }

    .info {
        margin-top: 2.5rem;
    }

    .date {
        margin-top: 2.5rem;
    }

    .title {
        @include font-30-30-5-BL();

        & {
            margin-top: 1.5rem;
        }
    }

    .link-button {
        margin-top: 4rem;
    }

    @media (max-width: 1023px) {
        .info {
            margin-top: 1rem;
        }

        .date {
            margin-top: 1rem;
        }

        .link-button {
            margin-top: 4.5rem;
        }
    }
</style>
