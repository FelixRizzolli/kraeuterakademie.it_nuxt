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

const { find } = useStrapi();

onMounted(async () => {
    const response: any = await find("courses", {
        populate: {
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
        heroData.value = response.data?.hero;
        accordionsData.value = response.data?.accordions;
        nextcoursesData.value = response.data?.nextcourses;
        infosData.value = response.data?.infos;
        runningcoursesData.value = response.data?.runningcourses;
    } else {
        console.error("Failed to fetch data from Strapi");
    }
});
</script>

<style lang="scss" scoped></style>
