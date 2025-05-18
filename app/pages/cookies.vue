<template>
    <HeroBig :data="heroData" />
    <div class="spacer" />
    <TextElement :data="text" v-for="text in textData" />
</template>

<script lang="ts" setup>
const heroData = ref<any>({});
const textData = ref<Array<any>>([]);

const { find } = useStrapi();

onMounted(async () => {
    const response: any = await find("cookies", {
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

<style lang="scss" scoped>
.spacer {
    height: 7.5rem;
    width: 100%;
}

@media (max-width: 1023px) {
    .spacer {
        height: 4.5rem;
    }
}
</style>
