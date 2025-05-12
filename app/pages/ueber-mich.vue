<template>
    <HeroBig :title="pageData.herobig.title" :image="pageData.herobig.image" />
    <TextElement :title="pageData.werdegang.title" :text="pageData.werdegang.content" :link="pageData.werdegang.link" />
    <TextElement :title="pageData.privat.title" :text="pageData.privat.content" :link="pageData.privat.link" />
</template>

<script lang="ts" setup>
const pageData = ref<any>({
    herobig: {
        title: "Über mich",
        image: {
            src: "/images/sigrid/sigrid_01.jpg",
            alt: "Sigrid Thaler Rizzolli",
        },
    },
    werdegang: {
        content: String.raw`
            <p>Ich bin mitten im Naturpark Trudnerhorn aufgewachsen. Dies ist einer der sieben Naturparke Südtirols, es ist der kleinste, jedoch der südlichste und somit der artenreichste, da wir schon sehr viel mediterranen Einfluss haben. Ich konnte also schon als Kind die Natur hautnah erleben.</p>
            <p>Nach der Matura habe ich in Innsbruck Biologie studiert und mich auf Botanik spezialisiert. Ich habe 10 Jahre an der Mittelschule Mathematik und Biologie unterrichtet. Die Wissensvermittlung hat mir immer schon sehr viel Spaß gemacht.</p>
            <p>2000, 2002 und 2004 sind meine 3 Söhne (Felix, Oskar und Benno) zur Welt gekommen. In dieser Zeit habe ich mich intensiv mit der Heilkraft der Pflanzen und gesunder Ernährung befasst und verschiedenste Vorträge und Seminare besucht. Meine Devise war immer schon: vorbeugen ist besser als heilen. So konnte ich meine Söhne sicherlich vor so mancher Antibiotikakur verschonen.</p>
            <p>2008 habe ich die Wissensvermittlung von Pflanzen und Heilkräutern zu meinem Beruf gemacht. Tief in mir steckte der Drang, das Wesen der Pflanzen besser zu erforschen und gleichzeitig meine Erfahrung und mein Wissen auch anderen Personen zugänglich zu machen. Ich habe für mehrere Hotels, Tourismusverbände und den Geoparc Bletterbach gearbeitet. Von Mai bis Oktober war ich fast täglich mit Leuten unterwegs, um gemeinsam die Natur zu erkunden. Nebenbei hielt ich auch verschiedene Seminare, Vorträge und Workshops. Mehrere Jahre unterrichtete ich angehende Kräuterpädagogen sowohl in Deutschland als auch in Österreich.</p>
            <p>2015 wurde mein erstes Buch "Mein Kräuterbüchlein" gedruckt, mittlerweile gibt es auch die italienische Übersetzung als "Il mio libro delle erbe". 2016 wurde "Mein Kräuterbüchlein" bereits in zweiter Auflage gedruckt.</p>
            <p>2017 erschien das Bestsellerbuch „Die Zirbe“, welches mittlerweile schon in 4. Auflage erscheint. Auch dieses Buch wurde ins Italienische übersetzt. „Il cirmolo“ erreichte Platz 1 in der Bestsellerliste.</p>
            <p>2017 gründete ich meine eigene Kräuterakademie unter dem Namen STR-Kräuterakademie. In Zusammenarbeit mit der FNL-Kräuterakademie bilde ich nun landesweit FNL-Kräuterexperten aus.</p>
            <p>2018 wurde ich zur Präsidentin der Südtiroler Kräuterpädagogen gewählt. Es ist mir eine große Freude und Ehre im Bereich Natur und Umwelt, Kräuterwissen, Volksheilkunde und vielem mehr in Südtirol auf drei Ebenen unterwegs sein zu dürfen, und zwar einmal als Landesreferentin der Kräuterexperten, als Landesleiterin der Freunde naturgemäßer Lebensweise und als Präsidentin der Südtiroler Kräuterpädagogen.</p>
        `,
    },
    privat: {
        title: "Ganz privat",
        content: String.raw`
            <p>Mein größter Reichtum ist meine Familie, meine glückliche Beziehung zu meinem Mann Thomas, der mich in allem unterstützt, und meine drei Söhne Felix, Oskar und Benno, die mein Leben ungemein bereichern. Aber auch mit meiner Verwandtschaft, meinen Geschwistern habe ich ein sehr harmonisches Verhältnis. Ich bin als jüngste von 8 Kindern geboren.</p>
            <p>Übrigens Geburt: ich bin in der Nacht der Hexen, in der Walpurgisnacht um 3 Uhr morgens zur Welt gekommen. Der Hexenbesen ist mir somit schon mit auf dem Weg gegeben worden. Ich bin mittlerweile überzeugt, dass alles was ich mache, meine Bestimmung, mein Auftrag auf dieser Welt ist.</p>
            <p>Ich bin ein sehr positiv denkender Mensch, lache gerne, bin für jeden Spaß zu haben, kenne keine Langeweile, liebe die Herausforderung, bin voller Energie und genieße jeden Tag meines Lebens.</p>
            <p>Ich liebe die Schönheit der Natur, spüre tagtäglich ihre wunderbaren Kräfte und schätze es ungemein, dass ich auch andere Menschen dafür begeistern kann.</p>
        `,
    },
});
</script>

<style lang="scss" scoped></style>
