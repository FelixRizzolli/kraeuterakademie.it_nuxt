<template>
    <div class="card-container">
        <StrapiImage v-if="data.image" :image="data.image" ref="imageElement" />
        <p v-if="data.info">{{ data.info }}</p>
        <p v-if="data.date">{{ data.date }}</p>
        <h3 v-if="data.title">{{ data.title }}</h3>
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

    onMounted(() => {
        console.log('SwiperCardItem mounted with data:', props.data);
    });
</script>

<style>
    .card-container {
        max-width: 40rem;
    }
</style>
