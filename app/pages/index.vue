<template>
    <HeroSmall :title="pageData.herosmall.title" :image="pageData.herosmall.image" :link="pageData.herosmall.link" />
    <AnimatedText :text="pageData.animatedtext.text" />
</template>

<script lang="ts" setup>
const pageData = ref<any>({
    herosmall: {
        title: "Kurse zu Wildpflanzen und Heilkräuter",
        image: {
            src: "/images/herosmall_2.png",
            alt: "Kräuterakademie",
        },
        link: {
            href: "/kraeuterkurse",
            text: "Kräuterakademie",
        },
    },
    animatedtext: {
        text: "Alles was wir brauchen, um gesund zu bleiben, hat uns die Natur reichlich geschenkt. ~ Sebastian Kneipp",
    },
});
</script>

<style lang="scss" scoped></style>
