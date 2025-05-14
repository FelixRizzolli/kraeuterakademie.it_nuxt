<template>
    <HeroBig :data="pageData.hero" />
    <div class="spacer" />
    <TextElement :title="pageData.verantwortlicher" />
    <TextElement :title="pageData.sicherheit" />
    <TextElement :title="pageData.begriffsbestimmungen" />
    <TextElement :title="pageData.verarbeitung" />
    <TextElement :title="pageData.informationen" />
    <TextElement :title="pageData.cookies" />
    <TextElement :title="pageData.funktionen" />
    <TextElement :title="pageData.kinder" />
    <TextElement :title="pageData.rechte" />
    <TextElement :title="pageData.googleanalytics" />
    <TextElement :title="pageData.googleadwords" />
    <TextElement :title="pageData.youtube" />
    <TextElement :title="pageData.googletagmanager" />
    <TextElement :title="pageData.newsletter" />
    <TextElement :title="pageData.facebook" />
    <TextElement :title="pageData.datenschutz" />
</template>

<script lang="ts" setup>
const pageData = ref<any>({
    hero: {
        title: "Privacy",
    },
    verantwortlicher: {
        title: "Name und Kontakt des Verantwortlichen gemäß Artikel 4, Abs. 7, DSGVO",
        content: String.raw`
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
    sicherheit: {
        title: "Sicherheit und Schutz Ihrer personenbezogenen Daten",
        content: String.raw`
          <p>
            Wir betrachten es als unsere vorrangige Aufgabe, die Vertraulichkeit der von Ihnen bereitgestellten personenbezogenen 
            Daten zu wahren und diese vor unbefugten Zugriffen zu schützen. Deshalb wenden wir äußerste Sorgfalt und modernste 
            Sicherheitsstandards an, um einen maximalen Schutz Ihrer personenbezogenen Daten zu gewährleisten.
          </p>
          <p>
            Als privatrechtliches Unternehmen unterliegen wir den Bestimmungen der europäischen Datenschutzgrundverordnung 
            (DSGVO 2016/679). Wir haben technische und organisatorische Maßnahmen getroffen, die sicherstellen, dass die 
            Vorschriften über den Datenschutz sowohl von uns, als auch von unseren externen Dienstleistern beachtet werden.
          </p>

          <ul style="margin-top: 3rem;">
            <li>
            </li>
          <ul>
        `,
        link: {
            text: "Linkedin",
            href: "https://www.linkedin.com/in/felix-rizzolli/",
        },
    },
    begriffsbestimmungen: {
        title: "Begriffsbestimmungen",
        content: String.raw`
          <p>
            Der Gesetzgeber fordert, dass personenbezogene Daten auf rechtmäßige Weise, nach Treu und Glauben und 
            in einer für die betroffene Person nachvollziehbaren Weise verarbeitet werden („Rechtmäßigkeit, 
            Verarbeitung nach Treu und Glauben, Transparenz“). Um dies zu gewährleisten, informieren wir Sie über 
            die einzelnen gesetzlichen Begriffsbestimmungen, die auch in dieser Datenschutzerklärung verwendet werden:
          </p>
          <ol style="margin-top: 3rem;">
            <li>
              <strong>Personenbezogene Daten </strong><br />
              „Personenbezogene Daten“ sind alle Informationen, die sich auf eine identifizierte oder identifizierbare 
              natürliche Person (im Folgenden „betroffene Person“) beziehen; als identifizierbar wird eine natürliche 
              Person angesehen, die direkt oder indirekt, insbesondere mittels Zuordnung zu einer Kennung wie einem 
              Namen, zu einer Kennnummer, zu Standortdaten, zu einer Online-Kennung oder zu einem oder mehreren 
              besonderen Merkmalen identifiziert werden kann, die Ausdruck der physischen, physiologischen, 
              genetischen, psychischen, wirtschaftlichen, kulturellen oder sozialen Identität dieser natürlichen 
              Person sind.
            </li>
            <li>
              <strong>Verarbeitung</strong><br />
              „Verarbeitung“ ist jeder, mit oder ohne Hilfe automatisierter Verfahren, ausgeführter Vorgang oder jede 
              solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten wie das Erheben, das Erfassen, die Organisation, 
              das Ordnen, die Speicherung, die Anpassung oder Veränderung, das Auslesen, das Abfragen, die Verwendung, die 
              Offenlegung durch Übermittlung, Verbreitung oder eine andere Form der Bereitstellung, den Abgleich oder die 
              Verknüpfung, die Einschränkung, das Löschen oder die Vernichtung.
            </li>
            <li>
              <strong>Einschränkung der Verarbeitung</strong><br />
              „Einschränkung der Verarbeitung“ ist die Markierung gespeicherter personenbezogener Daten mit dem Ziel, ihre 
              künftige Verarbeitung einzuschränken.
            </li>
            <li>
              <strong>Profiling</strong><br />
              „Profiling“ ist jede Art der automatisierten Verarbeitung personenbezogener Daten, die darin besteht, dass 
              diese personenbezogenen Daten verwendet werden, um bestimmte persönliche Aspekte, die sich auf eine 
              natürliche Person beziehen, zu bewerten, insbesondere um Aspekte bezüglich Arbeitsleistung, wirtschaftliche 
              Lage, Gesundheit, persönliche Vorlieben, Interessen, Zuverlässigkeit, Verhalten, Aufenthaltsort oder 
              Ortswechsel dieser natürlichen Person zu analysieren oder vorherzusagen.
            </li>
            <li>
              <strong>Pseudonymisierung</strong><br />
              „Pseudonymisierung“ ist die Verarbeitung personenbezogener Daten in einer Weise, dass die personenbezogenen 
              Daten ohne Hinzuziehung zusätzlicher Informationen nicht mehr einer spezifischen betroffenen Person zugeordnet 
              werden können, sofern diese zusätzlichen Informationen gesondert aufbewahrt werden und technischen und 
              organisatorischen Maßnahmen unterliegen, die gewährleisten, dass die personenbezogenen Daten nicht einer 
              identifizierten oder identifizierbaren natürlichen Person zugewiesen werden können.
            </li>
            <li>
              <strong>Dateisystem</strong><br />
              „Dateisystem“ ist jede strukturierte Sammlung personenbezogener Daten, die nach bestimmten Kriterien zugänglich 
              sind, unabhängig davon, ob diese Sammlung zentral, dezentral oder nach funktionalen oder geografischen 
              Gesichtspunkten geordnet geführt wird.
            </li>
            <li>
              <strong>Verantwortlicher</strong><br />
              „Verantwortlicher“ ist eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die 
              allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten 
              entscheidet; sind die Zwecke und Mittel dieser Verarbeitung durch das Unionsrecht oder das Recht der 
              Mitgliedstaaten vorgegeben, so können der Verantwortliche beziehungsweise die bestimmten Kriterien seiner 
              Benennung nach dem Unionsrecht oder dem Recht der Mitgliedstaaten vorgesehen werden.
            </li>
            <li>
              <strong>Auftragsverarbeiter</strong><br />
              „Auftragsverarbeiter“ ist eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, 
              die personenbezogene Daten im Auftrag des Verantwortlichen verarbeitet.
            </li>
            <li>
              <strong>Empfänger</strong><br />
              „Empfänger“ ist eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, denen 
              personenbezogene Daten offengelegt werden, unabhängig davon, ob es sich bei ihr um einen Dritten handelt 
              oder nicht. Behörden, die im Rahmen eines bestimmten Untersuchungsauftrags nach dem Unionsrecht oder dem 
              Recht der Mitgliedstaaten möglicherweise personenbezogene Daten erhalten, gelten jedoch nicht als Empfänger; 
              die Verarbeitung dieser Daten durch die genannten Behörden erfolgt im Einklang mit den geltenden 
              Datenschutzvorschriften gemäß den Zwecken der Verarbeitung.
            </li>
            <li>
              <strong>Dritter</strong><br />
              „Dritter“ ist eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, außer der 
              betroffenen Person, dem Verantwortlichen, dem Auftragsverarbeiter und den Personen, die unter der 
              unmittelbaren Verantwortung des Verantwortlichen oder des Auftragsverarbeiters befugt sind, die 
              personenbezogenen Daten zu verarbeiten.
            </li>
            <li>
              <strong>Einwilligung</strong><br />
              Eine „Einwilligung“ der betroffenen Person ist jede freiwillig für den bestimmten Fall, in informierter 
              Weise und unmissverständlich abgegebene Willensbekundung in Form einer Erklärung oder einer sonstigen 
              eindeutigen bestätigenden Handlung, mit der die betroffene Person zu verstehen gibt, dass sie mit der 
              Verarbeitung der sie betreffenden personenbezogenen Daten einverstanden ist.
            </li>
          <ol>
        `,
        link: {
            text: "Linkedin",
            href: "https://www.linkedin.com/in/felix-rizzolli/",
        },
    },
    verarbeitung: {
        title: "Rechtmäßigkeit der Verarbeitung",
        content: String.raw`
          <p>
            Die Verarbeitung personenbezogener Daten ist nur rechtmäßig, wenn für die Verarbeitung eine Rechtsgrundlage 
            besteht. Rechtsgrundlage für die Verarbeitung können gemäß Artikel 6 Abs. 1 lit. a - f DSGVO insbesondere 
            sein:
          </p>
          <ol type="a" style="margin-top: 3rem;">
            <li>
              Die betroffene Person hat ihre Einwilligung zu der Verarbeitung der sie betreffenden personenbezogenen 
              Daten für einen oder mehrere bestimmte Zwecke gegeben;
            </li>
            <li>
              die Verarbeitung ist für die Erfüllung eines Vertrags, dessen Vertragspartei die betroffene Person ist, 
              oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, die auf Anfrage der betroffenen Person erfolgen;
            </li>
            <li>
              die Verarbeitung ist zur Erfüllung einer rechtlichen Verpflichtung erforderlich, der der Verantwortliche 
              unterliegt;
            </li>
            <li>
              die Verarbeitung ist erforderlich, um lebenswichtige Interessen der betroffenen Person oder einer anderen 
              natürlichen Person zu schützen;
            </li>
            <li>
              die Verarbeitung ist für die Wahrnehmung einer Aufgabe erforderlich, die im öffentlichen Interesse liegt 
              oder in Ausübung öffentlicher Gewalt erfolgt, die dem Verantwortlichen übertragen wurde;
            </li>
            <li>
              die Verarbeitung ist zur Wahrung der berechtigten Interessen des Verantwortlichen oder eines Dritten 
              erforderlich, sofern nicht die Interessen oder Grundrechte und Grundfreiheiten der betroffenen Person, die 
              den Schutz personenbezogener Daten erfordern, überwiegen, insbesondere dann, wenn es sich bei der betroffenen 
              Person um ein Kind handelt.
            </li>
          <ol>
        `,
        link: {
            text: "Linkedin",
            href: "https://www.linkedin.com/in/felix-rizzolli/",
        },
    },
    informationen: {
        title: "Information über die Erhebung personenbezogener Daten",
        content: String.raw`
          <ol>
            <li>
              Im Folgenden informieren wir über die Erhebung personenbezogener Daten bei Nutzung unserer Website. 
              Personenbezogene Daten sind z.B. Name, Adresse, E-Mail-Adressen, Nutzerverhalten.
            </li>
            <li>
              Bei einer Kontaktaufnahme mit uns per E-Mail werden die von Ihnen mitgeteilten Daten (Ihre E-Mail-Adresse, 
              ggf. Ihr Name und Ihre Telefonnummer) von uns gespeichert, um Ihre Fragen zu beantworten. Die in diesem 
              Zusammenhang anfallenden Daten löschen wir, nachdem die Speicherung nicht mehr erforderlich ist, oder die 
              Verarbeitung wird eingeschränkt, falls gesetzliche Aufbewahrungspflichten bestehen.
            </li>
          <ol>
          <h3 style="margin-top: 3rem;">Erhebung personenbezogener Daten bei Besuch unserer Website</h3>
          <p>
            Bei der bloß informatorischen Nutzung der Website, also wenn Sie sich nicht registrieren oder uns anderweitig 
            Informationen übermitteln, erheben wir nur die personenbezogenen Daten, die Ihr Browser an unseren Server 
            übermittelt. Wenn Sie unsere Website betrachten möchten, erheben wir die folgenden Daten, die für uns 
            technisch erforderlich sind, um Ihnen unsere Website anzuzeigen und die Stabilität und Sicherheit zu 
            gewährleisten (Rechtsgrundlage ist Art. 6 Abs. 1 S. 1 lit. f DSGVO):
          </p>
          <ul style="margin-top: 3rem;">
            <li>IP-Adresse</li>
            <li>Datum und Uhrzeit der Anfrage</li>
            <li>Zeitzonendifferenz zur Greenwich Mean Time (GMT)</li>
            <li>Inhalt der Anforderung (konkrete Seite)</li>
            <li>Zugriffsstatus/HTTP-Statuscode</li>
            <li>jeweils übertragene Datenmenge</li>
            <li>Website, von der die Anforderung kommt</li>
            <li>Browser</li>
            <li>Betriebssystem und dessen Oberfläche</li>
            <li>Sprache und Version der Browsersoftware</li>
          <ul>
        `,
        link: {
            text: "Linkedin",
            href: "https://www.linkedin.com/in/felix-rizzolli/",
        },
    },
    cookies: {
        title: "Einsatz von Cookies",
        content: String.raw`
          <p>
            Zusätzlich zu den zuvor genannten Daten werden bei der Nutzung unserer Website Cookies auf Ihrem 
            Rechner gespeichert. Bei Cookies handelt es sich um kleine Textdateien, die auf Ihrer Festplatte 
            dem von Ihnen verwendeten Browser zugeordnet gespeichert werden und durch welche der Stelle, die 
            den Cookie setzt, bestimmte Informationen zufließen. Cookies können keine Programme ausführen oder 
            Viren auf Ihren Computer übertragen. Sie dienen dazu, das Internetangebot insgesamt nutzerfreundlicher 
            und effektiver zu machen.
          </p>
        `,
        link: {
            text: "Linkedin",
            href: "https://www.linkedin.com/in/felix-rizzolli/",
        },
    },
    funktionen: {
        title: "Weitere Funktionen und Angebote unserer Website",
        content: String.raw`
          <ol style="margin-top: 3rem;">
            <li>
              Neben der rein informatorischen Nutzung unserer Website bieten wir verschiedene Leistungen an, 
              die Sie bei Interesse nutzen können. Dazu müssen Sie in der Regel weitere personenbezogene Daten 
              angeben, die wir zur Erbringung der jeweiligen Leistung nutzen und für die die zuvor genannten 
              Grundsätze zur Datenverarbeitung gelten.
            </li>
            <li>
              Teilweise bedienen wir uns zur Verarbeitung Ihrer Daten externer Dienstleister. Diese wurden von 
              uns sorgfältig ausgewählt und beauftragt, sind an unsere Weisungen gebunden und werden regelmäßig 
              kontrolliert.
            </li>
            <li>
              Weiterhin können wir Ihre personenbezogenen Daten an Dritte weitergeben, wenn Aktionsteilnahmen, 
              Gewinnspiele, Vertragsabschlüsse oder ähnliche Leistungen von uns gemeinsam mit Partnern angeboten 
              werden. Nähere Informationen hierzu erhalten Sie bei Angabe Ihrer personenbezogenen Daten oder 
              untenstehend in der Beschreibung des Angebotes.
            </li>
            <li>
              Soweit unsere Dienstleister oder Partner ihren Sitz in einem Staat außerhalb des Europäischen 
              Wirtschaftsraumen (EWR) haben, informieren wir Sie über die Folgen dieses Umstands in der 
              Beschreibung des Angebotes.
            </li>
          <ol>
        `,
        link: {
            text: "Linkedin",
            href: "https://www.linkedin.com/in/felix-rizzolli/",
        },
    },
    kinder: {
        title: "Kinder",
        content: String.raw`
          <p>
            Unser Angebot richtet sich grundsätzlich an Erwachsene. Personen unter 18 Jahren sollten ohne Zustimmung 
            der Eltern oder Erziehungsberechtigten keine personenbezogenen Daten an uns übermitteln.
          </p>
        `,
        link: {
            text: "Linkedin",
            href: "https://www.linkedin.com/in/felix-rizzolli/",
        },
    },
    rechte: {
        title: "Rechte der betroffenen Person",
        content: String.raw`
          <ol>
            <li>
              <strong>Widerruf der Einwilligung</strong><br />
              Sofern die Verarbeitung der personenbezogenen Daten auf einer erteilten Einwilligung beruht, 
              haben Sie jederzeit das Recht, die Einwilligung zu widerrufen. Durch den Widerruf der Einwilligung 
              wird die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung 
              nicht berührt. Für die Ausübung des Widerrufsrechts können Sie sich jederzeit an uns wenden.
            </li>
            <li>
              <strong>Recht auf Bestätigung</strong><br />
              Sie haben das Recht, von dem Verantwortlichen eine Bestätigung darüber zu verlangen, ob wir sie 
              betreffende personenbezogene Daten verarbeiten. Die Bestätigung können Sie jederzeit unter den 
              Kontaktdaten im Impressum verlangen.
            </li>
            <li>
              <strong>Auskunftsrecht</strong><br />
              Sofern personenbezogene Daten verarbeitet werden, können Sie jederzeit Auskunft über diese 
              personenbezogenen Daten und über folgenden Informationen verlangen:

              <ol type="a">
                <li>
                  die Verarbeitungszwecke;
                </li>
                <li>
                  den Kategorien personenbezogener Daten, die verarbeitet werden;
                </li>
                <li>
                  die Empfänger oder Kategorien von Empfängern, gegenüber denen die personenbezogenen Daten 
                  offengelegt worden sind oder noch offengelegt werden, insbesondere bei Empfängern in 
                  Drittländern oder bei internationalen Organisationen;
                </li>
                <li>
                  falls möglich, die geplante Dauer, für die die personenbezogenen Daten gespeichert 
                  werden, oder, falls dies nicht möglich ist, die Kriterien für die Festlegung dieser Dauer;
                </li>
                <li>
                  das Bestehen eines Rechts auf Berichtigung oder Löschung der Sie betreffenden personenbezogenen 
                  Daten oder auf Einschränkung der Verarbeitung durch den Verantwortlichen oder eines 
                  Widerspruchsrechts gegen diese Verarbeitung;
                </li>
                <li>
                  das Bestehen eines Beschwerderechts bei einer Aufsichtsbehörde;
                </li>
                <li>
                  wenn die personenbezogenen Daten nicht bei der betroffenen Person erhoben werden, alle 
                  verfügbaren Informationen über die Herkunft der Daten;
                </li>
                <li>
                  das Bestehen einer automatisierten Entscheidungsfindung einschließlich Profiling gemäß Artikel 
                  22 Absätze 1 und 4 DSGVO und - zumindest in diesen Fällen - aussagekräftige Informationen über
                  die involvierte Logik sowie die Tragweite und die angestrebten Auswirkungen einer derartigen 
                  Verarbeitung für die betroffene Person.
                </li>
              </ol>

              <p>
                Werden personenbezogene Daten an ein Drittland oder an eine internationale Organisation übermittelt, 
                so haben Sie das Recht, über die geeigneten Garantien gemäß Artikel 46 DSGVO im Zusammenhang mit der 
                Übermittlung unterrichtet zu werden. Wir stellen eine Kopie der personenbezogenen Daten, die Gegenstand 
                der Verarbeitung sind, zur Verfügung. Für alle weiteren Kopien, die Sie beantragen, können wir ein 
                angemessenes Entgelt auf der Grundlage der Verwaltungskosten verlangen. Stellen Sie den Antrag 
                elektronisch, so sind die Informationen in einem gängigen elektronischen Format zur Verfügung zu 
                stellen, sofern er nichts anderes angibt. Das Recht auf Erhalt einer Kopie gemäß Absatz 3 darf die 
                Rechte und Freiheiten anderer Personen nicht beeinträchtigen.
              </p>
            </li>
            <li>
              <strong>Recht auf Berichtigung</strong><br />
              Sie haben das Recht, von uns unverzüglich die Berichtigung Sie betreffender unrichtiger personenbezogener 
              Daten zu verlangen. Unter Berücksichtigung der Zwecke der Verarbeitung haben Sie das Recht, die 
              Vervollständigung unvollständiger personenbezogener Daten - auch mittels einer ergänzenden Erklärung - 
              zu verlangen.
            </li>
            <li>
              <strong>Recht auf Löschung ("Recht auf vergessen werden")</strong><br />
              Sie haben das Recht, von dem Verantwortlichen zu verlangen, dass Sie betreffende personenbezogene Daten 
              unverzüglich gelöscht werden, und wir sind verpflichtet, personenbezogene Daten unverzüglich zu löschen, 
              sofern einer der folgenden Gründe zutrifft:
              <ol type="a">
                <li>
                  Die personenbezogenen Daten sind für die Zwecke, für die sie erhoben oder auf sonstige Weise verarbeitet 
                  wurden, nicht mehr notwendig.
                </li>
                <li>
                  Die betroffene Person widerruft ihre Einwilligung, auf die sich die Verarbeitung gemäß Artikel 6 Absatz 1 
                  Buchstabe a oder Artikel 9 Absatz 2 Buchstabe a DSGVO stützte, und es fehlt an einer anderweitigen 
                  Rechtsgrundlage für die Verarbeitung.
                </li>
                <li>
                  Die betroffene Person legt gemäß Artikel 21 Absatz 1 DSGVO Widerspruch gegen die Verarbeitung ein und es 
                  liegen keine vorrangigen berechtigten Gründe für die Verarbeitung vor, oder die betroffene Person legt 
                  gemäß Artikel 21 Absatz 2 DSGVO Widerspruch gegen die Verarbeitung ein.
                </li>
                <li>
                  Die personenbezogenen Daten wurden unrechtmäßig verarbeitet.
                </li>
                <li>
                  Die Löschung der personenbezogenen Daten ist zur Erfüllung einer rechtlichen Verpflichtung nach dem 
                  Unionsrecht oder dem Recht der Mitgliedstaaten erforderlich, dem der Verantwortliche unterliegt.
                </li>
                <li>
                  Die personenbezogenen Daten wurden in Bezug auf angebotene Dienste der Informationsgesellschaft gemäß 
                  Artikel 8 Absatz 1 DSGVO erhoben.
                </li>
              </ol>
              <p>
                Hat der Verantwortliche die personenbezogenen Daten öffentlich gemacht und ist er gemäß Absatz 1 zu deren 
                Löschung verpflichtet, so trifft er unter Berücksichtigung der verfügbaren Technologie und der 
                Implementierungskosten angemessene Maßnahmen, auch technischer Art, um für die Datenverarbeitung 
                Verantwortliche, die die personenbezogenen Daten verarbeiten, darüber zu informieren, dass eine betroffene 
                Person von ihnen die Löschung aller Links zu diesen personenbezogenen Daten oder von Kopien oder 
                Replikationen dieser personenbezogenen Daten verlangt hat.<br />
                Das Recht auf Löschung ("Recht auf vergessen werden") besteht nicht, soweit die Verarbeitung erforderlich ist:
              </p>
              <ul>
                <li>
                  zur Ausübung des Rechts auf freie Meinungsäußerung und Information;
                </li>
                <li>
                  zur Erfüllung einer rechtlichen Verpflichtung, die die Verarbeitung nach dem Recht der Union oder der 
                  Mitgliedstaaten, dem der Verantwortliche unterliegt, erfordert, oder zur Wahrnehmung einer Aufgabe, die im
                   öffentlichen Interesse liegt oder in Ausübung öffentlicher Gewalt erfolgt, die dem Verantwortlichen übertragen 
                   wurde;
                </li>
                <li>
                  aus Gründen des öffentlichen Interesses im Bereich der öffentlichen Gesundheit gemäß Artikel 9 Absatz 2 Buchstaben 
                  h und i sowie Artikel 9 Absatz 3 DSGVO;
                </li>
                <li>
                  für im öffentlichen Interesse liegende Archivzwecke, wissenschaftliche oder historische Forschungszwecke oder 
                  für statistische Zwecke gemäß Artikel 89 Absatz 1 DSGVO, soweit das in Absatz 1 genannte Recht voraussichtlich 
                  die Verwirklichung der Ziele dieser Verarbeitung unmöglich macht oder ernsthaft beeinträchtigt, oder
                </li>
                <li>
                  zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.
                </li>
              </ul>
            </li>
            <li>
              <strong>Recht auf Einschränkung der Verarbeitung</strong><br />
              Sie haben das Recht, von uns die Einschränkung der Verarbeitung ihrer personenbezogenen Daten zu verlangen, wenn eine 
              der folgenden Voraussetzungen gegeben ist:

              <ol type="a">
                <li>
                  die Richtigkeit der personenbezogenen Daten von der betroffenen Person bestritten wird, und zwar für eine Dauer, 
                  die es dem Verantwortlichen ermöglicht, die Richtigkeit der personenbezogenen Daten zu überprüfen,
                </li>
                <li>
                  die Verarbeitung unrechtmäßig ist und die betroffene Person die Löschung der personenbezogenen Daten ablehnt und 
                  stattdessen die Einschränkung der Nutzung der personenbezogenen Daten verlangt;
                </li>
                <li>
                  der Verantwortliche die personenbezogenen Daten für die Zwecke der Verarbeitung nicht länger benötigt, die 
                  betroffene Person sie jedoch zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen benötigt, oder
                </li>
                <li>
                  die betroffene Person Widerspruch gegen die Verarbeitung gemäß Artikel 21 Absatz 1 DSGVO eingelegt hat, solange noch 
                  nicht feststeht, ob die berechtigten Gründe des Verantwortlichen gegenüber denen der betroffenen Person überwiegen.
                </li>
              </ol>
              <p>
                Wurde die Verarbeitung gemäß den oben genannten Voraussetzungen eingeschränkt, so werden diese personenbezogenen Daten - 
                von ihrer Speicherung abgesehen - nur mit Einwilligung der betroffenen Person oder zur Geltendmachung, Ausübung oder 
                Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus 
                Gründen eines wichtigen öffentlichen Interesses der Union oder eines Mitgliedstaats verarbeitet.<br />
                Um das Recht auf Einschränkung der Verarbeitung geltend zu machen, kann sich die betroffene Person jederzeit an uns unter 
                den Kontaktdaten im Impressum wenden.
              </p>
            </li>
            <li>
              <strong>Recht auf Datenübertragbarkeit</strong><br />
              Sie haben das Recht, die Sie betreffenden personenbezogenen Daten, die Sie uns bereitgestellt haben, in einem strukturierten, 
              gängigen und maschinenlesbaren Format zu erhalten, und Sie haben das Recht, diese Daten einem anderen Verantwortlichen ohne 
              Behinderung durch den Verantwortlichen, dem die personenbezogenen Daten bereitgestellt wurden, zu übermitteln, sofern:

              <ol type="a">
                <li>
                  die Verarbeitung auf einer Einwilligung gemäß Artikel 6 Absatz 1 Buchstabe a oder Artikel 9 Absatz 2 Buchstabe a 
                  oder auf einem Vertrag gemäß Artikel 6 Absatz 1 Buchstabe b DSGVO beruht und
                </li>
                <li>
                  die Verarbeitung mithilfe automatisierter Verfahren erfolgt.
                </li>
              </ol>

              <p>
                Bei der Ausübung des Rechts auf Datenübertragbarkeit gemäß Absatz 1 haben Sie das Recht, zu erwirken, dass die 
                personenbezogenen Daten direkt von einem Verantwortlichen zu einem anderen Verantwortlichen übermittelt werden, 
                soweit dies technisch machbar ist. Die Ausübung des Rechts auf Datenübertragbarkeit lässt das Recht auf Löschung 
                ("Recht auf Vergessen werden") unberührt. Dieses Recht gilt nicht für eine Verarbeitung, die für die Wahrnehmung 
                einer Aufgabe erforderlich ist, die im öffentlichen Interesse liegt oder in Ausübung öffentlicher Gewalt erfolgt, 
                die dem Verantwortlichen übertragen wurde.
              </p>
            </li>
            <li>
              <strong>Widerspruchsrecht</strong><br />
              Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung 
              Sie betreffender personenbezogener Daten, die aufgrund von Artikel 6 Absatz 1 Buchstaben e oder f DSGVO erfolgt, 
              Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling. Der Verantwortliche 
              verarbeitet die personenbezogenen Daten nicht mehr, es sei denn, er kann zwingende schutzwürdige Gründe für die 
              Verarbeitung nachweisen, die die Interessen, Rechte und Freiheiten der betroffenen Person überwiegen, oder die 
              Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.<br />
              Werden personenbezogene Daten verarbeitet, um Direktwerbung zu betreiben, so haben SIe das Recht, jederzeit 
              Widerspruch gegen die Verarbeitung Sie betreffender personenbezogener Daten zum Zwecke derartiger Werbung 
              einzulegen; dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht. 
              Widersprechen Sie der Verarbeitung für Zwecke der Direktwerbung, so werden die personenbezogenen Daten nicht 
              mehr für diese Zwecke verarbeitet.<br />
              Im Zusammenhang mit der Nutzung von Diensten der Informationsgesellschaft könne Sie ungeachtet der Richtlinie 
              2002/58/EG Ihr Widerspruchsrecht mittels automatisierter Verfahren ausüben, bei denen technische Spezifikationen 
              verwendet werden.<br />
              Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, gegen die Sie betreffende 
              Verarbeitung Sie betreffender personenbezogener Daten, die zu wissenschaftlichen oder historischen Forschungszwecken 
              oder zu statistischen Zwecken gemäß Artikel 89 Absatz 1 erfolgt, Widerspruch einzulegen, es sei denn, die Verarbeitung 
              ist zur Erfüllung einer im öffentlichen Interesse liegenden Aufgabe erforderlich. <br />
              Das Widerspruchsrecht können Sie jederzeit ausüben, indem Sie sich an den jeweiligen Verantwortlichen wenden.
            </li>
            <li>
              <strong>Automatisierte Entscheidungen im Einzelfall einschließlich Profiling</strong><br />
              Sie haben das Recht, nicht einer ausschließlich auf einer automatisierten Verarbeitung - einschließlich Profiling - 
              beruhenden Entscheidung unterworfen zu werden, die Ihnen gegenüber rechtliche Wirkung entfaltet oder Sie in ähnlicher 
              Weise erheblich beeinträchtigt. Dies gilt nicht, wenn die Entscheidung:

              <ol type="a">
                <li>
                  für den Abschluss oder die Erfüllung eines Vertrags zwischen der betroffenen Person und dem Verantwortlichen 
                  erforderlich ist,
                </li>
                <li>
                  aufgrund von Rechtsvorschriften der Union oder der Mitgliedstaaten, denen der Verantwortliche unterliegt, 
                  zulässig ist und diese Rechtsvorschriften angemessene Maßnahmen zur Wahrung der Rechte und Freiheiten sowie 
                  der berechtigten Interessen der betroffenen Person enthalten oder
                </li>
                <li>
                  mit ausdrücklicher Einwilligung der betroffenen Person erfolgt.
                </li>
              </ol>
            </li>
            <li>
              <strong>Recht auf Beschwerde bei einer Aufsichtsbehörde</strong><br />
              Sie haben zudem, unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs, das Recht 
              auf Beschwerde bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres Aufenthaltsorts, ihres 
              Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes, wenn die betroffene Person der Ansicht ist, dass die 
              Verarbeitung der sie betreffenden personenbezogenen Daten gegen diese Verordnung verstößt.
            </li>
            <li>
              <strong>Recht auf wirksamen gerichtlichen Rechtsbehelf</strong><br />
              Sie haben unbeschadet eines verfügbaren verwaltungsrechtlichen oder außergerichtlichen Rechtsbehelfs einschließlich 
              des Rechts auf Beschwerde bei einer Aufsichtsbehörde gemäß Artikel 77 DSGVO das Recht auf einen wirksamen 
              gerichtlichen Rechtsbehelf, wenn sie der Ansicht ist, dass die ihr aufgrund dieser Verordnung zustehenden Rechte 
              infolge einer nicht im Einklang mit dieser Verordnung stehenden Verarbeitung ihrer personenbezogenen Daten 
              verletzt wurden.
            </li>
          <ol>
        `,
        link: {
            text: "Linkedin",
            href: "https://www.linkedin.com/in/felix-rizzolli/",
        },
    },
    googleanalytics: {
        title: "Einsatz von Google Analytics",
        content: String.raw`
          <ol>
            <li>
              Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Inc. („Google“). Google Analytics 
              verwendet sog. „Cookies“, Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der 
              Benutzung der Website durch Sie ermöglichen. Die durch den Cookie erzeugten Informationen über Ihre Benutzung 
              dieser Website werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Im 
              Falle der Aktivierung der IP-Anonymisierung auf dieser Website, wird Ihre IP-Adresse von Google jedoch innerhalb 
              von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen 
              Wirtschaftsraum zuvor gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in 
              den USA übertragen und dort gekürzt. Im Auftrag des Betreibers dieser Website wird Google diese Informationen 
              benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die Website-Aktivitäten zusammenzustellen 
              und um weitere mit der Website-Nutzung und der Internetnutzung verbundene Dienstleistungen gegenüber dem 
              Website-Betreiber zu erbringen.
            </li>
            <li>
              Die im Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt.
            </li>
            <li>
              Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website vollumfänglich werden nutzen können. Sie können darüber hinaus die Erfassung der durch das Cookie erzeugten und auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem sie das unter dem folgenden Link verfügbare Browser-Plug-in herunterladen und installieren: tools.google.com/dlpage/gaoptout?hl=de.
            </li>
            <li>
              Wir nutzen Google Analytics, um die Nutzung unserer Website analysieren und regelmäßig verbessern zu können. Über die gewonnenen Statistiken können wir unser Angebot verbessern und für Sie als Nutzer interessanter ausgestalten. Für die Ausnahmefälle, in denen personenbezogene Daten in die USA übertragen werden, hat sich Google dem EU-US Privacy Shield unterworfen, https://www.privacyshield.gov/EU-US-Framework. Rechtsgrundlage für die Nutzung von Google Analytics ist Art. 6 Abs. 1 S. 1 lit. f DSGVO.
            </li>
            <li>
              Informationen des Drittanbieters: Google Dublin, Google Ireland Ltd., Gordon House, Barrow Street, Dublin 4, 
              Ireland, Fax: +353 (1) 436 1001. <br />
              Nutzerbedingungen: <a href="marketingplatform.google.com/about/analytics/terms/de/">marketingplatform.google.com/about/analytics/terms/de/</a>,<br />
              Übersicht zum Datenschutz: <a href="policies.google.com/privacy">policies.google.com/privacy</a>, <br />
              sowie die Datenschutzerklärung: <a href="policies.google.com/privacy?hl=de&gl=de">policies.google.com/privacy?hl=de&gl=de</a>.
            </li>
            <li>
              Diese Website verwendet Google Analytics zudem für eine geräteübergreifende Analyse von Besucherströmen, die 
              über eine User-ID durchgeführt wird. Sie können in Ihrem Google-Kundenkonto unter „Meine Daten“, „persönliche 
              Daten“ die geräteübergreifende Analyse Ihrer Nutzung deaktivieren.
            </li>
          <ol>
        `,
        link: {
            text: "Linkedin",
            href: "https://www.linkedin.com/in/felix-rizzolli/",
        },
    },
    googleadwords: {
        title: "Google AdWords und Google Conversion-Tracking",
        content: String.raw`
          <p>
            Conversion-Tracking von AdWords ist ein Analysedienst von Google Inc., der die Daten vom Google AdWords-Werbenetzwerk 
            mit den durch diese Anwendung getätigten Aktionen verbindet. Mehr Informationen zu Google AdWords und Google 
            Conversion-Tracking finden Sie in den Datenschutzbestimmungen von Google:
            <a href="https://www.google.de/policies/privacy/">https://www.google.de/policies/privacy/</a>.
          </p>
        `,
        link: {
            text: "Linkedin",
            href: "https://www.linkedin.com/in/felix-rizzolli/",
        },
    },
    youtube: {
        title: "YouTube Video",
        content: String.raw`
          <p>
            YouTube ist ein von Google Inc. bereitgestellter Service zur Visualisierung von Videoinhalten, mit dem diese Anwendung 
            entsprechende Inhalte auf ihren Seiten einbinden kann. Datenschutzbestimmungen von Google:
            <a href="https://www.google.de/policies/privacy/">https://www.google.de/policies/privacy/</a>.
          </p>
        `,
        link: {
            text: "Linkedin",
            href: "https://www.linkedin.com/in/felix-rizzolli/",
        },
    },
    googletagmanager: {
        title: "Google Tag Manager",
        content: String.raw`
          <p>
            Google Tag Manager ist ein von Google LLC bereitgestellter Dienst zur Verwaltung von Tags. Datenschutzbestimmungen 
            von Google: <a href="https://www.google.de/policies/privacy/">https://www.google.de/policies/privacy/</a>.
          </p>
        `,
        link: {
            text: "Linkedin",
            href: "https://www.linkedin.com/in/felix-rizzolli/",
        },
    },
    newsletter: {
        title: "Newsletter",
        content: String.raw`
          <p>
            Mit der Registrierung in unserem Newsletter-System stimmen Sie zu, regelmäßig Informationen mittels Newsletter 
            zugesendet zu bekommen. Sie können Ihre Zustimmung zur Nutzung Ihrer persönlichen Daten jederzeit widerrufen. Dieser 
            Widerruf kann beispielsweise durch einen Klick auf den Button zum Abbestellen am Ende jedes Newsletters erfolgen. 
            Sobald Sie den Newsletter abbestellt haben, werden alle Ihre Daten aus unserer Mailingliste gelöscht. Diese Daten 
            verwenden wir ausschließlich für den Versand der angeforderten Informationen und geben sie nicht an Dritte weiter.
          </p>
        `,
        link: {
            text: "Linkedin",
            href: "https://www.linkedin.com/in/felix-rizzolli/",
        },
    },
    facebook: {
        title: "Facebook Pixel",
        content: String.raw`
          <p>
            Unsere Website nutzt zur Konversionsmessung das Besucheraktions-Pixel von Facebook, Facebook Inc., 1601 S. 
            California Ave, Palo Alto, CA 94304, USA (“Facebook”).
          </p>
          <p>
            So kann das Verhalten der Seitenbesucher nachverfolgt werden, nachdem diese durch Klick auf eine 
            Facebook-Werbeanzeige auf die Website des Anbieters weitergeleitet wurden. Dadurch können die Wirksamkeit der 
            Facebook-Werbeanzeigen für statistische und Marktforschungszwecke ausgewertet werden und zukünftige Werbemaßnahmen 
            optimiert werden.
          </p>
          <p>
            Die erhobenen Daten sind für uns als Betreiber dieser Website anonym, wir können keine Rückschlüsse auf die 
            Identität der Nutzer ziehen. Die Daten werden aber von Facebook gespeichert und verarbeitet, sodass eine
            Verbindung zum jeweiligen Nutzerprofil möglich ist und Facebook die Daten für eigene Werbezwecke, entsprechend 
            der <a href="https://de-de.facebook.com/about/privacy/">Facebook-Datenverwendungsrichtlinie</a> verwenden kann. 
            Dadurch kann Facebook das Schalten von Werbeanzeigen auf Seiten von Facebook sowie außerhalb von Facebook
            ermöglichen. Diese Verwendung der Daten kann von uns als Seitenbetreiber nicht beeinflusst werden.
          </p>
          <p>
            Die Nutzung von Facebook-Pixel erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat 
            ein berechtigtes Interesse an effektiven Werbemaßnahmen unter Einschluss der sozialen Medien.
          </p>
          <p>
            In den Datenschutzhinweisen von Facebook finden Sie weitere Hinweise zum Schutz Ihrer Privatsphäre: 
            <a href="de-de.facebook.com/about/privacy/">de-de.facebook.com/about/privacy/</a>.
          </p>
          <p>
            Sie können außerdem die Remarketing-Funktion “Custom Audiences” im Bereich Einstellungen für Werbeanzeigen unter 
            <a href="www.facebook.com/ads/preferences/">www.facebook.com/ads/preferences/</a> deaktivieren. Dazu müssen Sie 
            bei Facebook angemeldet sein.
          </p>
          <p>
            Wenn Sie kein Facebook Konto besitzen, können Sie nutzungsbasierte Werbung von Facebook auf der Website der 
            European Interactive Digital Advertising Alliance deaktivieren: 
            <a href="www.youronlinechoices.com/de/praferenzmanagement">www.youronlinechoices.com/de/praferenzmanagement</a>.
          </p>
        `,
        link: {
            text: "Linkedin",
            href: "https://www.linkedin.com/in/felix-rizzolli/",
        },
    },
    datenschutz: {
        title: "Datenschutzrichtlinie Google",
        content: String.raw`
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
