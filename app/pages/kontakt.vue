<template>
    <HeroBig :data="heroData" />
    <ImageText :data="contactData" />
</template>

<script lang="ts" setup>
const heroData = ref<any>({});
const contactData = ref<any>({});

const { find } = useStrapi();

onMounted(async () => {
    const response: any = await find("contact", {
        populate: {
            hero: {
                populate: "*",
            },
            contact: {
                populate: "*",
            },
        },
    });

    console.log(response);

    if (response) {
        heroData.value = response.data?.hero;
        contactData.value = response.data?.contact;
    } else {
        console.error("Failed to fetch data from Strapi");
    }
});
</script>

<style lang="scss" scoped></style>
