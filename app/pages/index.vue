<template>
    <HeroSmall v-if="heroData" :data="heroData" />
    <AnimatedText v-if="textData.text" :data="textData" />
</template>

<script lang="ts" setup>
const heroData = ref<any>({});
const textData = ref<any>({});
const seoData = ref<any>({});

const { find } = useStrapi();

onMounted(async () => {
    const response: any = await find("home", {
        populate: {
            seo: {
                populate: "*",
            },
            hero: {
                populate: "*",
            },
            text: {
                populate: "*",
            },
        },
    });

    if (response) {
        seoData.value = response.data?.seo;
        heroData.value = response.data?.hero;
        textData.value = response.data?.text;

        // Set SEO meta tags
        useSeoMeta({
            title: seoData.value?.metaTitle ?? "",
            description: seoData.value?.metaDescription ?? "",
            keywords: seoData.value?.keywords ?? "",
            robots: seoData.value?.preventIndexing ? "noindex, nofollow" : "index, follow",
            ogTitle: seoData.value?.metaTitle ?? "",
            ogDescription: seoData.value?.metaDescription ?? "",
            ogImage: seoData.value?.sharedImage?.media?.url ?? "",
            ogImageAlt: seoData.value?.sharedImage?.alt ?? "",
            twitterTitle: seoData.value?.metaTitle ?? "",
            twitterDescription: seoData.value?.metaDescription ?? "",
            twitterImage: seoData.value?.sharedImage?.media?.url ?? "",
        });
    } else {
        console.error("Failed to fetch data from Strapi");
    }
});
</script>

<style lang="scss" scoped></style>
