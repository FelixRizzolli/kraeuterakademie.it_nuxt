<template>
    <HeroBig :title="pageData.herobig.title" :image="pageData.herobig.image" />
    <Accordions :title="pageData.accordions.title" :accordions="pageData.accordions.accordions" />
    <TextElement :title="pageData.textelement.title" :text="pageData.textelement.content" :link="pageData.textelement.link" />
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
    textelement: {
        title: "Titel zu Zertifikat und Datum",
        link: {
            text: "Hier geht's zur Anmeldung",
            href: "/anmeldung",
        },
        content: String.raw`
            <p>Das Zertifikat zur/m Knospenexpert*in erhält man nach der Prüfung, bei der man das Gelernte präsentieren kann.</p>
            <p>Der dreitägige Lehrgang wird in Südtirol 2025 zweimal angeboten, und die Uhrzeiten sind jeweils von 8.30 bis 17.30 Uhr:</p>
            <ul>
                <li>Freitag: 28. Februar, 07. März, 21. März bei Bergila</li>
                <li>Samstag: 01. März, 08. März, 22. März in Montan</li>
            </ul>
        `,
    },
});
</script>

<style lang="scss" scoped></style>
