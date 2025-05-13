<template>
    <HeroBig :data="pageData.hero" />
    <div class="spacer" />
    <TextElement :data="pageData.eigentuemer" />
    <TextElement :data="pageData.haftungsausschluss" />
    <TextElement :data="pageData.webdesign" />
    <TextElement :data="pageData.programmierung" />
</template>

<script lang="ts" setup>
const pageData = ref<any>({
    hero: {
        title: "Impressum",
    },
    eigentuemer: {
        title: "Eigentümer und verantwortlich für den Inhalt",
        text: String.raw`
        <p>
          <strong>Sigrid Thaler Rizzolli</strong><br />
          Weingütl 6<br />
          39040 Montan, Bozen, Italien
        </p>
        <p>
          <a href="tel:+39 338 269 8477">+39 338 269 8477</a><br />
          <a href="mailto:sigrid.thaler@gmail.com">sigrid.thaler@gmail.com</a>
        </p>
      `,
    },
    haftungsausschluss: {
        title: "Haftungsausschluss",
        text: String.raw`
          <p>
            In dieser Homepage werden Hinweise zu naturheilkundlichen Anwendungen gegeben. Die Empfehlungen sind aufgrund wissenschaftlicher
            Untersuchungen und Erfahrungen mit größter Sorgfalt ausgewählt worden. Einen Arztbesuch können und wollen diese Ratschläge auf
            keinen Fall ersetzen. Es kann daher eine Haftung für Schäden durch unsachgemäße Anwendung von Heilpflanzen weder von Sigrid
            Thaler Rizzolli noch von anderen Personen übernommen werden.
          </p>
          <p>
            <strong>Bitte beachten Sie folgende rechtliche Hinweise zu dieser Seite:</strong>
          </p>
          <p>
            Diese Website kann Hinweise auf andere Eigentumsrechte und Informationen zu Urheberrechten enthalten, die beachtet und befolgt
            werden müssen. Dies gilt insbesondere für Logos, Bilder, Tondateien und Videos. Das Herunterladen, Drucken und Speichern von
            Dateien dieser Website für den ausschließlich privaten Gebrauch ist gestattet, darüber hinaus gehende Nutzung bedarf unserer
            ausdrücklichen Zustimmung. Wir übernehmen keine Haftung für Datenverlust oder andere technische Beeinträchtigungen, die beim
            Betrachten oder Herunterladen von Daten unserer Website entstehen können. Bei Links zu anderen Webseiten übernehmen wir
            keinerlei Haftung für deren Inhalt.
          </p>
          <p>
            Aus Gründen der vereinfachten Lesbarkeit wurde von einer geschlechtsspezifischen Schreibweise der auf natürliche Personen
            bezogenen Bezeichnungen großteils Abstand genommen. Soweit derartige Bezeichnungen nur in männlicher Form angeführt sind,
            beziehen sie sich in gleicher Weise auf weibliche Personen.
          </p>
          <p>
            Sollte es irgendwelche Fehler, Irrtümer oder Gründe zur Beanstandung auf dieser Seite geben, so informieren Sie uns via Email
            und wir werden dies schnellstmöglich prüfen und ggf. korrigieren.
          </p>
        `,
    },
    webdesign: {
        title: "Webdesign",
        text: String.raw`
          <p>
            <strong>hantha. Web Performance Experts</strong><br />
            Dick 48/B - 39058 Sarntal<br />
            Südtirol - Italien<br />
            <a href="https://www.hantha.com" target="_blank">www.hantha.com</a>
          </p>
          <p>
            <em>hantha. Web Performance Experts</em> bestechen mit inhaltlich und technisch ausgereiften Websites und Onlineshops.<br />
            Mehrere internationale Webdesign-Awards sprechen für sich. Vertrauen auch Sie der erfahrenen Internetagentur aus Südtirol und kontaktieren Sie uns jetzt.
          </p>
        `,
    },
    programmierung: {
        title: "Programmierung",
        text: String.raw`
          <p>
            <strong>Felix Rizzolli</strong><br />
            Weingütl 6<br />
            39040 Montan, Bozen, Italien<br />
          </p>
        `,
        link: {
            text: "Linkedin",
            href: "https://www.linkedin.com/in/felix-rizzolli/",
        },
    },
});
</script>

<style lang="scss" scoped>
.spacer {
    height: 7.5rem;
    width: 100%;
}

@media (max-width: 1023px) {
    .spacer {
        height: 4.5rem;
    }
}
</style>
