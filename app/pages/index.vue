<template>
    <HeroSmall v-if="heroData" :data="heroData" />
    <AnimatedText v-if="textData.text" :data="textData" />
</template>

<script lang="ts" setup>
const heroData = ref<any>({});
const textData = ref<any>({});

const { find } = useStrapi();

onMounted(async () => {
    const response: any = await find("home", {
        populate: {
            hero: {
                populate: "*",
            },
            text: {
                populate: "*",
            },
        },
    });

    if (response) {
        heroData.value = response.data?.hero;
        textData.value = response.data?.text;
    } else {
        console.error("Failed to fetch data from Strapi");
    }
});
</script>

<style lang="scss" scoped></style>
