<template>
    <HeroBig :title="pageData.herobig.title" :image="pageData.herobig.image" />
</template>

<script lang="ts" setup>
const pageData = ref<any>({
    herobig: {
        title: "Kräuterkurs Titel",
        image: {
            src: "/images/herobig_1.png",
            alt: "Kräuterkurs Bild",
        },
    },
});
</script>

<style lang="scss" scoped></style>
