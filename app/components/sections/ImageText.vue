<template>
    <section class="contentelement_imagetext grid-container">
        <div v-if="image" class="image">
            <img :src="image.src" :alt="image.alt" />
        </div>
        <div v-if="text1" class="text" v-html="text1"></div>
        <div v-if="infos" class="infos" v-html="infos"></div>
        <div v-if="text2" class="text" v-html="text2"></div>
        <NuxtLink v-if="link" class="link-button" :to="link.href">{{ link.text }}</NuxtLink>
    </section>
</template>

<script lang="ts" setup>
interface Image {
    src: string;
    alt: string;
}

interface Link {
    href: string;
    text: string;
}

interface ImageTextProps {
    image?: Image;
    text1?: string;
    infos?: string;
    text2?: string;
    link?: Link;
}

const props = defineProps<ImageTextProps>();

onMounted(() => {
    console.log("Component mounted");
});
</script>

<style lang="scss" scoped>
.contentelement_imagetext {
    margin-bottom: 15rem;
}

.image {
    @include col-start(3);
    @include col(4);
    @include row(4);

    img {
        width: 100%;
        height: auto;
    }
}

.text {
    @include col-start(9);
    @include col(4);

    &:first-of-type {
        margin-top: 12rem;
    }
}

.infos {
    @include col-start(10);
    @include col(4);
    @include font-50-63-1-BL();
    @include fontFamilyHeading();

    & {
        margin: 7.5rem 0;

        color: $colorFontLight;
    }

    &::before,
    &::after {
        display: block;
        content: "";
        width: 45%;
        height: 0.3rem;
        background-color: $colorFontLight;
    }

    &::before {
        margin-bottom: 4rem;
    }

    &::after {
        margin-top: 4rem;
    }
}

.link-button {
    @include col-start(9);
    @include col(4);

    & {
        margin-top: 4.5rem;
    }
}

:deep(h3:not(:first-child)) {
    margin-top: 4.5rem;
}
</style>
