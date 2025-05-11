<template>
    <div>
        <HeroSmall :title="pageData.herosmall.title" :image="pageData.herosmall.image" :link="pageData.herosmall.link" />
        <ImageText :image="pageData.imagetext.image" :text1="pageData.imagetext.text1" :infos="pageData.imagetext.infos" :text2="pageData.imagetext.text2" :link="pageData.imagetext.link" />
        <AnimatedText :text="pageData.animatedtext.text" />
        <MoodPicture :image="pageData.moodpicture.image" />
        <Infos :infos="pageData.infos" />
    </div>
</template>

<script lang="ts" setup>
const pageData = ref<any>({
    herosmall: {
        title: "Kurse zu Wildpflanzen und Heilkräuter",
        image: {
            src: "/images/herosmall_1.png",
            alt: "Kräuterakademie",
        },
        link: {
            href: "/akademie",
            text: "Kräuterakademie",
        },
    },
    imagetext: {
        image: {
            src: "/images/imgtext_1.png",
            alt: "Seminare",
        },
        text1: "Ich bin ein kleiner Blindtext. Und zwar schon so lange ich denken kann. Es war nicht leicht zu verstehen, was es bedeutet, ein blinder Text zu sein: Man ergibt keinen Sinn. Wirklich keinen Sinn. Man wird zusammenhangslos eingeschoben und rumgedreht - und oftmals gar nicht erst gelesen. Aber bin ich allein deshalb ein Text.",
        infos: "Finde zu deiner Natur und entfalte deine Kraft.",
        text2: "Ich bin ein kleiner Blindtext. Und zwar schon so lange ich denken kann. Es war nicht leicht zu verstehen, was es bedeutet, ein blinder Text zu sein: Man ergibt keinen Sinn. Wirklich keinen Sinn. Man wird zusammenhangslos eingeschoben",
        link: {
            href: "/seminare",
            text: "Link Seminare",
        },
    },
    animatedtext: {
        text: "Ich bin ein kleiner Blindtext. Und zwar schon so lange ich denken kann. Es war nicht leicht zu verstehen, was es bedeutet, ein blinder Text zu sein: Man ergibt keinen Sinn. Wirklich keinen Sinn. Man wird zusammenhangslos eingeschoben und rumgedreht - und oftmals gar nicht erst gelesen. Aber bin ich allein deshalb ein Text.",
    },
    moodpicture: {
        image: {
            src: "/images/herobig_1.png",
            alt: "Kräuterakademie",
        },
    },
    infos: [
        {
            title: "Lehrgangskosten € 270 + Mwst",
            text: "Im Preis inbegriffen sind umfangreiche Unterlagen und Bestimmungshilfen",
        },
        {
            title: "Teilnehmerzahl ist begrenzt",
            text: "Bei Fragen oder Infos: 338 269 8477 oder sigrid.thaler@gmail.com",
        },
        {
            title: "Referentin Sigrid Thaler",
            text: "Referentin der FNL Kräuterakademie",
        },
    ],
});
</script>

<style lang="scss" scoped></style>
