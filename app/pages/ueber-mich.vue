<template>
    <HeroBig v-if="heroData" :data="heroData" />
    <TextElement :data="text" v-for="text in textData" />
</template>

<script lang="ts" setup>
const heroData = ref<any>({});
const textData = ref<Array<any>>([]);

const { find } = useStrapi();

onMounted(async () => {
    const response: any = await find("about", {
        populate: {
            hero: {
                populate: "*",
            },
            texte: {
                populate: "*",
            },
        },
    });

    if (response) {
        heroData.value = response.data?.hero;
        textData.value = response.data?.texte;
    } else {
        console.error("Failed to fetch data from Strapi");
    }
});
</script>

<style lang="scss" scoped></style>
