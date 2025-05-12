<template>
    <HeroBig :title="pageData.herobig.title" :image="pageData.herobig.image" />
    <Accordions :title="pageData.accordions.title" :accordions="pageData.accordions.accordions" />
    <TextElement :title="pageData.textelement.title" :text="pageData.textelement.content" :link="pageData.textelement.link" />
    <CourseList :title="pageData.courselist.title" :courses="pageData.courselist.courses" />
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
    courselist: {
        title: "Aktuelle Kurse",
        courses: [
            {
                title: "Pustertal K20",
                place: "Pustertal",
                fromDate: "2023-10-28",
                toDate: "2025-08-17",
                description: "Im Pustertal wird der Volksheilkundliche Kräuterkurs nach Ignaz Schlifni bei Bergila in der Gemeinde Pfalzen abgehalten. Es werden auch mehrere Exkursionen in andere Landesteile von Südtirol unternommen.",
                link: {
                    text: "Kräuterkurs Anmelden",
                    href: "/kurse/pustertal-k20",
                },
                dates: ["28.10.2023 SA", "11.11.2023 SA", "09.12.2023 SO", "20.01.2024 SA", "10.02.2024 SO", "23.03.2024 SA", "27.04.2024 SA", "11.05.2024 SA", "08.06.2024 SA", "06.07.2024 SO", "03.08.2024 SO", "31.08.2024 MI", "14.09.2024 SA", "28.09.2024 SO", "12.10.2024 SA", "09.11.2024 SA", "23.11.2024 SA", "07.12.2024 SO", "18.01.2025 SA", "08.02.2025 MI", "22.02.2025 SO", "15.03.2025 SA", "05.04.2025 SO", "26.04.2025 SO", "10.05.2025 SA", "24.05.2025 SA", "14.06.2025 MI", "28.06.2025 SA", "12.07.2025 SO", "26.07.2025 SO", "09.08.2025 SA", "16.08.2025 SA", "17.08.2025 SA"],
            },
            {
                title: "Vinschgau K23",
                place: "Vinschgau",
                fromDate: "2023-10-28",
                toDate: "2025-08-17",
                description: "Ein blinder Text zu sein: Man ergibt keinen Sinn. Wirklich keinen Sinn. Man wird zusammenhangslos eingeschoben. Ich bin ein kleiner Blindtext. Und zwar schon so lange ich denken kann. Es war nicht leicht zu verstehen, was es bedeutet.",
                link: {
                    text: "Kräuterkurs Anmelden",
                    href: "/kurse/pustertal-k20",
                },
                dates: ["28.10.2023 SA", "11.11.2023 SA", "09.12.2023 SO", "20.01.2024 SA", "10.02.2024 SO", "23.03.2024 SA", "27.04.2024 SA", "11.05.2024 SA", "08.06.2024 SA", "06.07.2024 SO", "03.08.2024 SO", "31.08.2024 MI", "14.09.2024 SA", "28.09.2024 SO", "12.10.2024 SA", "09.11.2024 SA", "23.11.2024 SA", "07.12.2024 SO", "18.01.2025 SA", "08.02.2025 MI", "22.02.2025 SO", "15.03.2025 SA", "05.04.2025 SO", "26.04.2025 SO", "10.05.2025 SA", "24.05.2025 SA", "14.06.2025 MI", "28.06.2025 SA", "12.07.2025 SO", "26.07.2025 SO", "09.08.2025 SA", "16.08.2025 SA", "17.08.2025 SA"],
            },
            {
                title: "Unterland K21",
                place: "Unterland",
                fromDate: "2023-10-28",
                toDate: "2025-08-17",
                description: "DIch bin ein kleiner Blindtext. Und zwar schon so lange ich denken kann. Es war nicht leicht zu verstehen, was es bedeutet, ein blinder Text zu sein: Man ergibt keinen Sinn. Wirklich keinen Sinn. Man wird zusammenhangslos eingeschoben.",
                link: {
                    text: "Kräuterkurs Anmelden",
                    href: "/kurse/pustertal-k20",
                },
                dates: ["28.10.2023 SA", "11.11.2023 SA", "09.12.2023 SO", "20.01.2024 SA", "10.02.2024 SO", "23.03.2024 SA", "27.04.2024 SA", "11.05.2024 SA", "08.06.2024 SA", "06.07.2024 SO", "03.08.2024 SO", "31.08.2024 MI", "14.09.2024 SA", "28.09.2024 SO", "12.10.2024 SA", "09.11.2024 SA", "23.11.2024 SA", "07.12.2024 SO", "18.01.2025 SA", "08.02.2025 MI", "22.02.2025 SO", "15.03.2025 SA", "05.04.2025 SO", "26.04.2025 SO", "10.05.2025 SA", "24.05.2025 SA", "14.06.2025 MI", "28.06.2025 SA", "12.07.2025 SO", "26.07.2025 SO", "09.08.2025 SA", "16.08.2025 SA", "17.08.2025 SA"],
            },
        ],
    },
});
</script>

<style lang="scss" scoped></style>
