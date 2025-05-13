<template>
    <HeroBig :data="pageData.herobig" />
    <Accordions :data="pageData.accordions" />
    <CourseList :data="pageData.nextdates" />
    <Infos :data="pageData.infos" />
    <CourseList :data="pageData.courselist" />
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
                        <strong>Die Kurszeigten sind von 9:00 bis 19:00 Uhr.</strong>
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
                fromDate: "2025-10-04",
                toDate: "2027-08-07",
                description: "Der Kurs läuft in Montan, im Unterland von Oktober 2025 bis August 2027. Die Kurstage sind immer am Samstag und finden in der Zeit von 9:00 bis 17:00 Uhr statt.",
                link: {
                    text: "Kräuterkurs Anmelden",
                    href: "/kurse/unterland-k25",
                },
                dates: ["2025-10-04", "2025-11-08", "2025-11-22", "2026-01-10", "2026-01-31", "2026-02-14", "2026-03-21", "2026-04-04", "2026-05-16", "2026-05-30", "2026-06-13", "2026-07-11", "2026-08-01", "2026-08-22", "2026-09-12", "2026-09-26", "2026-10-10", "2026-11-14", "2026-12-05", "2027-01-16", "2027-02-13", "2027-02-27", "2027-03-13", "2027-04-03", "2027-04-24", "2027-05-08", "2027-05-29", "2027-06-19", "2027-07-03", "2027-07-17", "2027-08-07"],
            },
            {
                title: "Piustertal K26",
                place: "Pustertal",
                fromDate: "2025-10-09",
                toDate: "2027-08-05",
                description: "Der Kurs läuft im Pustertal von Oktober 2025 bis August 2027. Die Kurstage sind immer am Donnerstag und finden in der Zeit von 9:00 bis 17:00 Uhr statt.",
                link: {
                    text: "Kräuterkurs Anmelden",
                    href: "/kurse/pustertal-k26",
                },
                dates: ["2025-10-09", "2025-11-06", "2025-11-27", "2026-01-15", "2026-01-29", "2026-02-19", "2026-03-19", "2026-04-09", "2026-05-09", "2026-05-14", "2026-06-18", "2026-07-09", "2026-07-30", "2026-08-20", "2026-09-17", "2026-10-01", "2026-10-15", "2026-11-12", "2026-12-03", "2027-01-14", "2027-02-11", "2027-03-04", "2027-03-18", "2027-04-08", "2027-04-18", "2027-05-08", "2027-05-29", "2027-06-03", "2027-06-24", "2027-07-08", "2027-07-22", "2027-08-05"],
            },
        ],
    },
    infos: {
        infos: [
            {
                title: "Kosten € 2080 + Mwst",
                text: "Im Preis inbegriffen sind umfangreiche Unterlagen, Verwaltungskosten, der FNL Mitgliedsbeitrag und die Prüfungsgebühr.",
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
            },
        ],
    },
});
</script>

<style lang="scss" scoped></style>
