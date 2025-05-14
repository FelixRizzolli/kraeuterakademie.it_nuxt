<template>
    <HeroBig :data="pageData.herobig" />
    <Accordions :data="pageData.accordions" />
    <CourseList :data="pageData.nextdates" />
    <Infos :data="pageData.infos" />
    <CourseList :data="pageData.courselist1" />
    <CourseList :data="pageData.courselist2" />
</template>

<script lang="ts" setup>
const pageData = ref<any>({
    herobig: {
        title: "Volksheilkundlicher Kräuterkurs nach Ignaz Schlifni",
        image: {
            src: "/images/herobig_1.png",
            alt: "Kräuterkurs Bild",
        },
    },
    accordions: {
        title: "Ganzheitliche Kräuterausbildung in Südtirol mit Abschluss",
        accordions: [
            {
                title: "Kennenlernen von über 400 Pflanzen",
                content: String.raw`
                    <p>
                        Tauche ein in die faszinierende Pflanzenwelt und lerne über <strong>400 heimische Pflanzen</strong> kennen, darunter Bäume, Sträucher, Kräuter und Giftpflanzen. Du wirst ihre Erkennungsmerkmale, Verwandtschaften und Anwendungen entdecken.
                    </p>
                `,
            },
            {
                title: "Botanische Grundkenntnisse",
                content: String.raw`
                    <p>
                        Mit einem soliden <strong>botanischen Grundwissen</strong> kannst du Pflanzen präzise betrachten, einteilen und selbstständig bestimmen. So erhälst du einen ganzheitlichen <strong>Zugang zur Natur</strong>.
                    </p>
                `,
            },
            {
                title: "Pflanzeninhaltsstoffe & Volksheilkunde",
                content: String.raw`
                    <p>
                        Um die Inhaltsstoffe von Pflanzen effektiv in der <strong>Volksheilkunde</strong> zu nutzen, ist es wichtig, deren Eigenschaften zu verstehen. Du erfährst, wie <strong>Erntezeitpunkt, Konservierung und Extraktion die Wirksamkeit</strong> beeinflussen. Der Fokus liegt auf den natürlichen Kräften, die unsere Selbstheilung fördern und Körper, Geist und Seele ins Geleichgewicht bringen.
                    </p>
                `,
            },
            {
                title: "Anatomie des menschlichen Körpers",
                content: String.raw`
                    <p>
                        Ein weiterer wichtiger Aspekt ist das Verständnis deines "inneren Arztes". Durch das Studium der <strong>Anatomie</strong> deines Körpers unterstützt du deine Selbstheilungskräfte.
                    </p>
                `,
            },
            {
                title: "Ganzheitliche Ansätze",
                content: String.raw`
                    <p>
                        Es werden ganzheitliche Ansätze wie <strong>Homöopathie, Bachblüten, Spagyrik und Gemmotherapie</strong> behandelt. Lerne auch über ätherische Öle und Hydrolate sowie deren Anwendung für dein Wohlbefinden.
                    </p>
                `,
            },
            {
                title: "Altes Wissen, Brauchtum",
                content: String.raw`
                    <p>
                        Erwecke fast vergessenes Wissen zum Leben! <strong>Mythologie, Brauchtum und Jahreskreisfeste</strong> bieten wertvolle Einblicke in alte Traditionen. Das Räuchern verbindet dich auf wunderbare Weise mit dem Wesen der Pflanzen.
                    </p>
                `,
            },
            {
                title: "Dauer der Ausbildung",
                content: String.raw`
                    <p>
                        Die Ausbildung dauert eineinhalb bis zwei Jahre und umfasst mindestens 200 Unterrichtseinheiten, verteilt auf 30 Kurstage, einer Lehrfahrt sowie Prüfungsvorbereitungseinheiten. Gastreferenten bereichern den Kurs mit ihrem Wissen.
                    </p>
                    <p>
                        <strong>Die Kurszeiten sind von 9:00 bis 17:00 Uhr.</strong>
                    </p>
                    <p>
                        Die <strong>Diplomprüfung</strong> findet im <strong>Schloss Hunnenbrunn</strong> statt; alternativ erhält man einen Kursnachweis.
                    </p>
                    <p>
                        Die Kurse starten jährlich in verschiedenen Landesteilen in Südtirol.
                    </p>
                `,
            },
            {
                title: "Berufliche Möglichkeiten",
                content: String.raw`
                    <p>
                        Die Ausbildung bietet zahlreiche berufliche Perspektiven, darunter das Anbieten von <strong>Kräuterführungen, Seminaren und Workshops</strong> für Hotels, Tourismusverbände und Schulen. Mit dem Diplom kannst du dem <strong>Verein der Südtiroler Kräuterpädagogen</strong> beitreten.
                    </p>
                `,
            },
        ],
    },
    nextdates: {
        title: "Kommende Kurse",
        courses: [
            {
                title: "Unterland K25",
                place: "Unterland",
                description: "Der Kurs findet von Oktober 2025 bis August 2027 im Unterland, statt. Die Kurstage sind jeweils samstags und dauern von 9:00 bis 17:00 Uhr.",
                link: {
                    text: "Kräuterkurs Anmelden",
                    href: "mailto:sigrid.thaler@gmail.com?subject=Anmeldung zum Kräuterkurs (Unterland K25)",
                },
                dates: ["2025-10-04", "2025-11-08", "2025-11-22", "2026-01-10", "2026-01-31", "2026-02-14", "2026-03-21", "2026-04-04", "2026-05-16", "2026-05-30", "2026-06-13", "2026-07-11", "2026-08-01", "2026-08-22", "2026-09-12", "2026-09-26", "2026-10-10", "2026-11-14", "2026-12-05", "2027-01-16", "2027-02-13", "2027-02-27", "2027-03-13", "2027-04-03", "2027-04-24", "2027-05-08", "2027-05-29", "2027-06-19", "2027-07-03", "2027-07-17", "2027-08-07", "2027-08-21", "2027-08-22", "2026-07-14", "2026-07-15"],
            },
            {
                title: "Pustertal K26",
                place: "Pustertal",
                description: "Der Kurs findet von Oktober 2025 bis August 2027 im Pustertal, statt. Die Kurstage sind jeweils samstags und dauern von 9:00 bis 17:00 Uhr",
                link: {
                    text: "Kräuterkurs Anmelden",
                    href: "mailto:sigrid.thaler@gmail.com?subject=Anmeldung zum Kräuterkurs (Pustertal K26)",
                },
                dates: ["2025-10-09", "2025-11-06", "2025-11-27", "2026-01-15", "2026-01-29", "2026-02-19", "2026-03-19", "2026-04-09", "2026-05-14", "2026-05-28", "2026-06-18", "2026-07-09", "2026-07-30", "2026-08-20", "2026-09-17", "2026-10-01", "2026-10-15", "2026-11-12", "2026-12-03", "2027-01-14", "2027-02-11", "2027-03-04", "2027-03-18", "2027-04-08", "2027-04-29", "2027-05-13", "2027-06-03", "2027-06-24", "2027-07-08", "2027-07-22", "2027-08-05", "2027-08-21", "2027-08-22", "2026-07-14", "2026-07-15"],
            },
        ],
    },
    infos: {
        infos: [
            {
                title: "Die Kursgebühr beträgt € 1790 + MwSt",
                text: "Zusätzlich fallen folgende Kosten an: Verwaltungskosten und Unterlagen (€ 190), Mitgliedsbeitrag FNL (€ 40) sowie die Prüfungsgebühr (€ 60).",
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
    },
    courselist1: {
        title: "Aktuelle Kurse",
        courses: [
            {
                title: "Pustertal K20",
                place: "Pustertal",
                description: "Der Kurs findet von Oktober 2023 bis August 2025 im Pustertal, statt. Die Kurstage sind jeweils samstags und dauern von 9:00 bis 17:00 Uhr.",
                dates: ["2023-10-28", "2023-11-11", "2023-12-09", "2024-01-20", "2024-02-10", "2024-03-23", "2024-04-27", "2024-05-11", "2024-06-08", "2024-07-06", "2024-08-03", "2024-08-31", "2024-09-14", "2024-09-28", "2024-10-12", "2024-11-09", "2024-11-23", "2024-12-07", "2025-01-18", "2025-02-08", "2025-02-22", "2025-03-15", "2025-03-23", "2025-04-12", "2025-04-26", "2025-05-10", "2025-05-24", "2025-06-28", "2025-06-29", "2025-07-12", "2025-08-09", "2025-08-16", "2025-08-17", "2024-07-09", "2024-07-10", "2024-07-13", "2024-07-14"],
            },
            {
                title: "Unterland K21",
                place: "Unterland",
                description: "Der Kurs findet von Oktober 2023 bis August 2025 im Unterland, statt. Die Kurstage sind jeweils samstags und dauern von 9:00 bis 17:00 Uhr.",
                dates: ["2023-10-24", "2023-11-21", "2023-12-12", "2024-01-23", "2024-02-13", "2024-03-26", "2024-04-30", "2024-05-14", "2024-06-11", "2024-07-09", "2024-08-06", "2024-09-03", "2024-09-17", "2024-10-01", "2024-10-15", "2024-11-12", "2024-11-26", "2024-12-10", "2025-01-21", "2025-02-11", "2025-02-23", "2025-03-16", "2025-04-08", "2025-04-29", "2025-05-13", "2025-05-27", "2025-06-17", "2025-07-01", "2025-07-15", "2025-08-06", "2025-08-12", "2025-08-16", "2025-08-17", "2024-07-20", "2024-07-21", "2024-07-30", "2024-07-31"],
            },
            {
                title: "Unterland K22",
                place: "Unterland",
                description: "Der Kurs findet von Oktober 2023 bis August 2025 im Unterland, statt. Die Kurstage sind jeweils samstags und dauern von 9:00 bis 17:00 Uhr.",
                dates: ["2023-10-29", "2023-11-19", "2023-12-10", "2024-01-21", "2024-02-11", "2024-03-03", "2024-04-28", "2024-05-19", "2024-06-09", "2024-07-07", "2024-08-04", "2024-09-01", "2024-09-15", "2024-10-13", "2024-10-27", "2024-11-10", "2024-11-24", "2024-12-08", "2025-01-19", "2025-02-09", "2025-02-23", "2025-03-16", "2025-04-13", "2025-04-27", "2025-05-18", "2025-06-01", "2025-06-15", "2025-07-06", "2025-07-20", "2025-08-03", "2025-08-10", "2025-08-16", "2025-08-17", "2024-07-20", "2024-07-21", "2024-07-30", "2024-07-31"],
            },
        ],
    },
    courselist2: {
        title: " ",
        courses: [
            {
                title: "Unterland K23",
                place: "Unterland",
                description: "Der Kurs findet von Oktober 2024 bis August 2026 im Unterland, statt. Die Kurstage sind jeweils samstags und dauern von 9:00 bis 17:00 Uhr.",
                dates: ["2024-10-29", "2024-11-19", "2024-12-03", "2025-01-28", "2025-02-18", "2025-03-18", "2025-04-15", "2025-05-06", "2025-06-03", "2025-07-08", "2025-08-05", "2025-08-26", "2025-09-16", "2025-09-30", "2025-10-21", "2025-11-04", "2025-11-25", "2025-12-09", "2026-01-13", "2026-02-03", "2026-02-24", "2026-03-10", "2026-03-24", "2026-04-14", "2026-05-05", "2026-05-26", "2026-06-09", "2026-06-23", "2026-07-07", "2026-07-21", "2026-08-04", "2026-08-16", "2026-08-17", "2025-07-29", "2025-07-30"],
            },
            {
                title: "Pustertal K24",
                place: "Pustertal",
                description: "Der Kurs findet von Oktober 2024 bis August 2026 im Pustertal, statt. Die Kurstage sind jeweils samstags und dauern von 9:00 bis 17:00 Uhr.",
                dates: ["2024-10-26", "2024-11-16", "2024-12-14", "2025-02-15", "2025-02-16", "2025-03-29", "2025-04-19", "2025-05-17", "2025-06-07", "2025-06-21", "2025-07-19", "2025-08-02", "2025-09-13", "2025-09-27", "2025-10-11", "2025-11-15", "2025-11-29", "2025-12-13", "2026-01-17", "2026-02-07", "2026-02-28", "2026-03-14", "2026-04-11", "2026-04-25", "2026-05-09", "2026-05-23", "2026-06-06", "2026-06-20", "2026-07-04", "2026-07-18", "2026-08-08", "2026-08-16", "2026-08-17"],
            },
        ],
    },
});
</script>

<style lang="scss" scoped></style>
