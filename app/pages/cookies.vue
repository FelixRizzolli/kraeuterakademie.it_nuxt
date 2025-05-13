<template>
    <HeroBig :data="pageData.hero" />
    <div class="spacer" />
    <TextElement :data="pageData.verwendung" />
    <TextElement :data="pageData.arten" />
    <TextElement :data="pageData.erforderlich" />
    <TextElement :data="pageData.leisgung" />
    <TextElement :data="pageData.funktionalitaet" />
    <TextElement :data="pageData.verwendet" />
    <TextElement :data="pageData.datenschutz" />
</template>

<script lang="ts" setup>
const pageData = ref<any>({
    hero: {
        title: "Cookies",
    },
    verwendung: {
        title: "Verwendung von Cookies",
        text: String.raw`
          <p>
            Auf dieser Webseite werden so genannte „Cookies“ verwendet, das sind kleine Informationsdateien, 
            die vom Server einer Webseite über den Browser vorübergehend oder ständig auf Ihrem Computer oder 
            anderem Gerät gespeichert werden und die Nutzung der Webseite vereinfachen, vervollständigen oder 
            personalisieren.
          </p>
          <p>
            Durch die Nutzung dieser Webseite erklären Sie sich mit der Bearbeitung der über Sie erhobenen 
            Daten durch Google einverstanden.
          </p>
          <p>
            Sie können in Ihrem Browser die Speicherung von Cookies deaktivieren oder gespeicherte Cookies 
            löschen, wodurch es jedoch unter Umständen zu einer eingeschränkten Funktionalität, zu Verzögerungen 
            oder zu einer Unbrauchbarkeit bestimmter Teile der Webseite kommen kann.
          </p>
          <ul style="margin-top: 3rem;">
            <li>
              <a href="https://support.google.com/accounts/answer/61416?hl=de">Cookie-Einstellungen bei Chrome</a>
            </li>
            <li>
              <a href="https://support.apple.com/de-de/105082">Cookie-Einstellungen bei Safari</a>
            </li>
            <li>
              <a href="https://support.mozilla.org/de/kb/cookies-informationen-websites-auf-ihrem-computer">Cookie-Einstellungen bei Firefox</a>
            </li>
            <li>
              <a href="https://support.microsoft.com/en-us/help/4027947/windows-delete-cookies">Cookie-Einstellungen bei Microsoft Edge</a>
            </li>
            <li>
              <a href="https://help.opera.com/de/latest/web-preferences/">Cookie-Einstellungen bei Opera</a>
            </li>
          </ul>
        `,
        link: {
            text: "Linkedin",
            href: "https://www.linkedin.com/in/felix-rizzolli/",
        },
    },
    arten: {
        title: "Welche Cookies verwenden wir und warum?",
        text: String.raw`
          <p>
            Im Allgemeinen nutzt unsere Webseite Cookies, um Sie von anderen Nutzern auf unserer Webseite zu 
            unterscheiden. Dies hilft uns dabei, Ihre Nutzererfahrung zu verbessern, wenn Sie auf unserer Seite 
            surfen und erlaubt es uns zudem, unsere Webseite zu verbessern.
          </p>
          <p>
            Die auf unserer Webseite verwendeten Cookies sind wie folgt kategorisiert:
          </p>
          <ul style="margin-top: 3rem;">
            <li>Unbedingt erforderliche Cookies</li>
            <li>Leistungs-Cookies</li>
            <li>Funktionalitäts-Cookies</li>
            <li>Targeting-Cookies</li>
          </ul>
        `,
        link: {
            text: "Linkedin",
            href: "https://www.linkedin.com/in/felix-rizzolli/",
        },
    },
    erforderlich: {
        title: "Unbedingt erforderliche Cookies",
        text: String.raw`
          <p>
            „Unbedingt erforderliche“ Cookies ermöglichen es Ihnen, sich auf der Webseite zu bewegen und 
            wesentliche Funktionen wie sichere Bereiche und Einkaufskörbe zu nutzen. Ohne diese Cookies 
            können wir die beantragten Dienste nicht zur Verfügung stellen.
          </p>
          <p>
            Wir verwenden diese unbedingt erforderlichen Cookies, um:
          </p>
          <ul style="margin-top: 3rem;">
            <li>
              Sie als auf unserer Webseite eingeloggt zu identifizieren und zu authentisieren;
            </li>
            <li>
              sicherzustellen, dass Sie sich auf unserer Webseite mit dem richtigen Dienst verbinden, 
              wenn wir die Webseite in Ihrer Funktionsweise ändern;
            </li>
            <li>
              diese hinzugefügten Artikel zu identifizieren, wenn Sie auf unsere Webseite zurückkehren;
            </li>
            <li>
              aus Sicherheitsgründen.
            </li>
          </ul>
          <p>
            Die Annahme dieser Cookies ist die Nutzungsbedingung für die Webseite, blockieren Sie diese 
            Cookies daher, so können wir nicht garantieren, wie die Webseite oder die Sicherheit auf 
            unserer Webseite während Ihres Besuchs funktionieren.
          </p>
        `,
        link: {
            text: "Linkedin",
            href: "https://www.linkedin.com/in/felix-rizzolli/",
        },
    },
    leisgung: {
        title: "Leistungs-Cookies",
        text: String.raw`
          <p>
            „Leistungs“-Cookies erfassen Informationen darüber, wie Sie unsere Webseite nutzen, z. B. 
            welche Seiten Sie besuchen und ob Fehler auftreten. Diese Cookies erfassen keine Informationen, 
            die Sie identifizieren könnten und werden nur dazu verwendet, dass wir die Funktionsfähigkeit 
            unserer Webseite verbessern können, verstehen, welche Interessen unsere Nutzer haben und die 
            Effizienz unserer Werbung messen können.
          </p>
          <p>
            Wir verwenden die „Leistungs“-Cookies, um:
          </p>
          <ul style="margin-top: 3rem;">
            <li>
              Web-Analytics durchzuführen; Statistiken zu erstellen, wie unsere Webseite genutzt wird;
            </li>
            <li>
              Affiliate-Tracking durchzuführen; verbundenen Unternehmen Feedback zu geben, dass einer unserer Besucher auch ihre Webseite besucht hat;
            </li>
            <li>
              es uns einfacher zu machen, die Webseite zu verbessern, indem aufgetretene Fehler gemessen werden;
            </li>
            <li>
              unterschiedliche Designs für die Webseite zu testen.
            </li>
          <ul>
          <p>
            Einige unserer Leistungs-Cookies werden von Dritten für uns verwaltet. Wir erlauben Dritten nicht, die 
            Cookies zu einem anderen Zweck außer den unten aufgeführten Zwecken zu verwenden. <br />
            Durch die Nutzung unserer Webseite oder Ausdrücken Ihrer Zustimmung, so wie anderweitig durch das anwendbare 
            Gesetz erforderlich, stimmen Sie der Nutzung der „Leistungs“-Cookies zu. Die Annahme dieser Cookies ist die 
            Nutzungsbedingung für die Webseite, blockieren Sie diese Cookies, so können wir nicht garantieren, wie die 
            Webseite in Ihrem Fall funktionieren wird.
          </p>
        `,
        link: {
            text: "Linkedin",
            href: "https://www.linkedin.com/in/felix-rizzolli/",
        },
    },
    funktionalitaet: {
        title: "Funktionalität",
        text: String.raw`
          <p>
            „Funktionalitäts“-Cookies werden dafür verwendet, Dienstleistungen zur Verfügung zu stellen oder 
            Einstellungen zu speichern, um Ihren Besuch zu verbessern.
          </p>
          <p>
            Wir verwenden die „Funktionalitäts-“Cookies, um:
          </p>
          <ul style="margin-top: 3rem;">
            <li>
              von Ihnen verwendete Einstellungen zu speichern, wie Layout, Textgröße, Präferenzen und Farben;
            </li>
            <li>
              zu speichern, ob wir uns bereits darüber erkundigt haben, ob Sie an einer Umfrage teilnehmen möchten;
            </li>
            <li>
              zu speichern, ob Sie sich mit einer bestimmten Komponente oder Produktliste auf der Webseite 
              beschäftigt haben, so dass wir diese nicht nochmal anzeigen.
            </li>
            <li>
              zu zeigen, wenn Sie sich auf der Webseite eingeloggt haben;
            </li>
            <li>
              eingebettete Videoinhalte zur Verfügung zu stellen und zu zeigen.
            </li>
          </ul>
          <p>
            Einige dieser Cookies werden von Dritten für uns verwaltet. Wir erlauben Dritten nicht, die Cookies 
            zu einem anderen Zweck außer den unten aufgeführten Zwecken zu verwenden.
          </p>
        `,
        link: {
            text: "Linkedin",
            href: "https://www.linkedin.com/in/felix-rizzolli/",
        },
    },
    verwendet: {
        title: "Wir verwenden folgende Cookies",
        text: String.raw`
          <ul>
            <li>
              <strong>__utma</strong>, Google, Performance, Lebensdauer: unbegrenzt. Dieser Cookie beinhaltet die 
              Informationen darüber, wann der Besucher das erste Mal auf der Seite war, wie oft er sie besucht hat 
              und wann er sie das letzte Mal aufgerufen hat.
            </li>
            <li>
              <strong>__utmb</strong>, Google, Performance, Lebensdauer: bis zum Ende der Session. Dieser Cookie 
              enthält einen Zeitstempel,wann der Besucher die Seite aufgerufen hat. Zusammen mit __utmc kann dieser 
              Cookie Auskunft über die Aufenthaltsdauer des Besuchers auf einer Seite geben.
            </li>
            <li>
              <strong>__utmc</strong>, Google, Performance, Lebensdauer: 30 Minuten. Dieser Cookie enthält einen 
              Zeitstempel, wann der Besucher die Seite verlassen hat. Zusammen mit __utmb kann dieser Cookie 
              Auskunft über die Aufenthaltsdauer des Besuchers auf einer Seite geben.
            </li>
            <li>
              <strong>__utmk</strong>, Google, Performance, Lebensdauer: unbegrenzt. Dieser Cookie beinhaltet
               einen Hashwert über alle hier genannten UTM-Cookies.
            </li>
            <li>
              <strong>__utmt</strong>, Google, Performance, Lebensdauer: 10 Minuten. Zeigt an welche Art von 
              Request gemacht wurde. (Kann event, transaction, item oder custom variable sein. Wenn keine Info 
              angegeben, ist es ein einfacher Pageview.)
            </li>
            <li>
              <strong>__utmv</strong>, Google, Performance, Lebensdauer: unbegrenzt. Dieser Cookie ist für 
              individuelle Inhalte gedacht, kann frei belegt werden und dient somit der Steuerung benutzerdefinierter 
              Analysen.
            </li>
            <li>
              <strong>__utmx</strong>, Google, Performance, Lebensdauer: 2 Jahre. Dieser Cookie beinhaltet Werte 
              des Google Webseite Optimizer
            </li>
            <li>
              <strong>__utmz</strong>, Google, Performance, Lebensdauer: 6 Monate. Dieser Cookie beinhaltet 
              Informationen darüber, woher der Besucher kam bevor er die zu analysierende Seite aufgerufen hat. 
              Darin können beispielsweise Informationen über Suchmaschinen und die dort eingegebenen Suchbegriffe 
              gespeichert sein oder wo auf der Erde sich die aufrufende IP-Adresse befindet.
            </li>
            <li>
              <strong>__ga</strong>, Google, Performance, Lebensdauer: 2 Jahre. Wird verwendet, um Benutzer zu 
              unterscheiden.
            </li>
            <li>
              <strong>__gat</strong>, Google, Performance, Lebensdauer: 10 Minuten. Wird verwendet, um Tracker 
              Objekte zu erzeugen.
            </li>
            <li>
              <strong>__gid</strong>, Google, Performance, Lebensdauer: 24 Stunden. Wird verwendet, um Benutzer 
              zu unterscheiden.
            </li>
          </ul>
        `,
        link: {
            text: "Linkedin",
            href: "https://www.linkedin.com/in/felix-rizzolli/",
        },
    },
    datenschutz: {
        title: "Datenschutzrichtlinie Google",
        text: String.raw`
          <ul>
            <li>
              <a href="https://policies.google.com/privacy?hl=de">Datenschutz und den Nutzungsbedingungen von Google</a>
            </li>
          </ul>
        `,
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
