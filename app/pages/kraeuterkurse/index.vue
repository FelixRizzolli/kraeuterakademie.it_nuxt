<template>
    <HeroBig :title="pageData.herobig.title" :image="pageData.herobig.image" />
    <Accordions :title="pageData.accordions.title" :accordions="pageData.accordions.accordions" />
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
    accordions: {
        title: "Titel zum Programm",
        accordions: [
            {
                title: "Botanische Grundkenntnisse & Pflanzeninhaltsstoffe",
                content: "Asklepius, Gott der Heilkunst, verkündete schon vor 3000 Jahren: „Zuerst das Wort, dann die Heilpflanze und zuletzt das Messer“ In der Volksheilkunde suchen wir nicht nach Antimittel, sondern nach den Kräften der Natur, welche die Selbstheilungskräfte anregen und wieder einen Ausgleich schaffen. Dies bewirkt nicht nur der stoffliche Bereich, das immaterielle Wirkprinzip darf nicht unterschätzt werden.",
            },
            {
                title: "Traditioneller Gebrauch in der Volksheilkunde",
                content: "Asklepius, Gott der Heilkunst, verkündete schon vor 3000 Jahren: „Zuerst das Wort, dann die Heilpflanze und zuletzt das Messer“ In der Volksheilkunde suchen wir nicht nach Antimittel, sondern nach den Kräften der Natur, welche die Selbstheilungskräfte anregen und wieder einen Ausgleich schaffen. Dies bewirkt nicht nur der stoffliche Bereich, das immaterielle Wirkprinzip darf nicht unterschätzt werden.",
            },
            {
                title: "Anatomie, Homöopathie, Bachblüten und Spagyrik",
                content: "Asklepius, Gott der Heilkunst, verkündete schon vor 3000 Jahren: „Zuerst das Wort, dann die Heilpflanze und zuletzt das Messer“ In der Volksheilkunde suchen wir nicht nach Antimittel, sondern nach den Kräften der Natur, welche die Selbstheilungskräfte anregen und wieder einen Ausgleich schaffen. Dies bewirkt nicht nur der stoffliche Bereich, das immaterielle Wirkprinzip darf nicht unterschätzt werden.",
            },
            {
                title: "Ätherische Öle, Hydrolate, Destillation",
                content: "Asklepius, Gott der Heilkunst, verkündete schon vor 3000 Jahren: „Zuerst das Wort, dann die Heilpflanze und zuletzt das Messer“ In der Volksheilkunde suchen wir nicht nach Antimittel, sondern nach den Kräften der Natur, welche die Selbstheilungskräfte anregen und wieder einen Ausgleich schaffen. Dies bewirkt nicht nur der stoffliche Bereich, das immaterielle Wirkprinzip darf nicht unterschätzt werden.",
            },
            {
                title: "Räuchern, Brauchtum, Jahreskreisfeste",
                content: "Asklepius, Gott der Heilkunst, verkündete schon vor 3000 Jahren: „Zuerst das Wort, dann die Heilpflanze und zuletzt das Messer“ In der Volksheilkunde suchen wir nicht nach Antimittel, sondern nach den Kräften der Natur, welche die Selbstheilungskräfte anregen und wieder einen Ausgleich schaffen. Dies bewirkt nicht nur der stoffliche Bereich, das immaterielle Wirkprinzip darf nicht unterschätzt werden.",
            },
        ],
    },
});
</script>

<style lang="scss" scoped></style>
