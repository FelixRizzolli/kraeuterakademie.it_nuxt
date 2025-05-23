<template>
    <HeroBig v-if="heroData" :data="heroData" />
    <Accordions v-if="accordionsData" :data="accordionsData" />
    <CourseList v-if="nextcoursesData" :data="nextcoursesData" />
    <Infos v-if="infosData" :data="infosData" />
    <CourseList :data="course" v-for="course in runningcoursesData" />
</template>

<script lang="ts" setup>
const heroData = ref<any>({});
const accordionsData = ref<any>({});
const nextcoursesData = ref<any>({});
const infosData = ref<any>({});
const runningcoursesData = ref<Array<any>>([]);
const seoData = ref<any>({});

const { find } = useStrapi();

onMounted(async () => {
    const response: any = await find("courses", {
        populate: {
            seo: {
                populate: "*",
            },
            hero: {
                populate: "*",
            },
            accordions: {
                populate: "*",
            },
            nextcourses: {
                populate: {
                    courses: {
                        populate: "*",
                    },
                },
            },
            infos: {
                populate: "*",
            },
            runningcourses: {
                populate: "*",
            },
        },
    });

    console.log(response);

    if (response) {
        seoData.value = response.data?.seo;
        heroData.value = response.data?.hero;
        accordionsData.value = response.data?.accordions;
        nextcoursesData.value = response.data?.nextcourses;
        infosData.value = response.data?.infos;
        runningcoursesData.value = response.data?.runningcourses;

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
