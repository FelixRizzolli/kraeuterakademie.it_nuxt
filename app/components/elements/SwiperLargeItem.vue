<template>
    <div class="item-container">
        <StrapiImage v-if="data.image" :image="data.image" ref="imageElement" />
        <p v-if="data.infos">{{ data.infos }}</p>
        <h3 v-if="data.title">{{ data.title }}</h3>
        <div class="description-container">
            <StrapiBlocksText class="description" :nodes="data.description" />
        </div>
        <NuxtLink class="link-button" :to="link.href" v-for="link in data.links">{{ link.text }}</NuxtLink>
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

    export interface SwiperLargeItem {
        image: StrapiImage;
        infos?: string;
        title?: string;
        description?: any;
        links?: Array<Link>;
    }

    export interface SwiperLargeItemProps {
        data: SwiperLargeItem;
    }

    const props = defineProps<SwiperLargeItemProps>();

    onMounted(() => {
        console.log('SwiperLargeItem mounted with data:', props.data);
    });
</script>

<style>
    .item-container {
        max-width: 40rem;
    }
</style>
