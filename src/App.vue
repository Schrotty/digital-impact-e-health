<script setup lang="ts">
import Timeline from "./components/Timeline.vue";
import { Pie } from 'vue-chartjs';
import {Tab, TabGroup, TabList, TabPanel, TabPanels} from "@headlessui/vue";
import {ref} from "vue";
import {Chart as ChartJS, BarElement, CategoryScale, Legend, LinearScale, Title, Tooltip, ArcElement} from "chart.js";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
            legend: {
                display: false,
                labels: {
                    color: 'rgb(255, 99, 132)'
                }
            }
        }
}

const gematikChartData = {
  labels: ["GKV-Spitzenverband", "Kassenärztliche Bundesvereinigung", "Deutsche Krankenhausgesellschaft", "Deutscher Apothekerverband", "Bundesärztekammer", "Bundeszahnärztekammer", "Kassenzahnärztliche Bundesvereinigung"],
  datasets: [{
    label: "Gesellschafteranteile",
    data: [50, 15, 12, 8, 5, 5, 5],
    backgroundColor: [
        '#a5b4fc', '#93c5fd', '#7dd3fc', '#67e8f9', '#5eead4', '#6ee7b7', '#86efac'
    ],
  }]
}

const estlandChartData = {
  labels: ["Staat"],
  datasets: [{
    label: "Gesellschafteranteile",
    data: [100],
    backgroundColor: '#a5b4fc',
  }]
}

const selected = ref()
const politics = [
  {
    label: "2001"
  },
  {
    label: "2002 - Pilotprojekt \"Elektronische Gesundheitskarte\"",
    fullText: "Am 21. August wurde das Projekt \"Gesundheitskarte Schleswig-Holstein\" vorgestellt. Neben den bisher üblichen Daten soll die neue Karte zusätzliche Notfalldaten " +
              "über Blutgruppe, Allergien, Implantate und Impfungen enthalten. Ebenso soll sie den Zugriff auf das kommende E-Rezept gewähren." +
              "Die Karte soll bis 2006 bundesweit eingeführt werden."
  },
  {
    label: "2003",
    fullText: ""
  },
  {
    label: "2004 - Das Gesundheitsmodernisierungsgesetz",
    fullText: "Das \"Gesetz zur Modernisierung der gesetzlichen Krankenversicherung\" tritt in Kraft und reformierte weite Teile der gesetzlichen Krankenversicherung mit dem Ziel " +
              "die Beiträge zur gesetzlichen Krankenversicherung zu senken."
  },
  {
    label: "2005 - Gründung der Gematik",
    fullText: "Das Gesetz zur Organisationsstruktur der Telematik im Gesundheitswesen definiert die Aufgaben der neu gegründeten \"Gematik - Gesellschaft für Telematikanwendungen der Gesundheitskarte mbH\".\n" +
              "Sie soll unter anderem technische und funktionale Anforderungen für Komponenten und Dienste der Telematikinfrastruktur (TI) definieren und solche zulassen.\n" +
              "Weiter soll sie Rahmenbedingungen für den Betrieb der TI festlegen und deren Einhaltung sicherstellen."
  },
  {
    label: "2006"
  },
  {
    label: "2007"
  },
  {
    label: "2008"
  },
  {
    label: "2009"
  },
  {
    label: "2010 - Schlichtungsverfahren innerhalb der Gematik",
    fullText: "Festlegungen für das weitere Vorgehen werden getroffen und ein Schlichtungsverfahren für Streitfragen eingeführt. Gleichzeitig wird Druck auf die Kassen gemacht " +
              "die Einführung zu beschleunigen, da ansonsten Kürzungen bei der Verwaltung drohen. Ebenso soll die Telematikinfrastruktur für andere Bereiche geöffnet werden." +
              "So sollen andere Leistungserbringer ebenfalls die TI nutzen können."
  },
  {
    label: "2011",
  },
  {
    label: "2012"
  },
  {
    label: "2013"
  },
  {
    label: "2014"
  },
  {
    label: "2015 - Das E-Health Gesetz",
    fullText: "Gesetz für sichere digitale Kommunikation und Anwendung im Gesundheitssystem sowie zur Änderung weiterer Gesetze (E-Health-Gesetz): " +
              "Fahrplan für die Einführung der digitalen Infrastruktur im Gesundheitswesen + diverse Umsetzungsfristen für Akteure der Selbstverwaltung." +
              "Ziel ist die Chancen der Digitalisierung für die Gesundheitsvorsorge zu nutzen und eine schnelle Einführung medizinischer Anwendungen für die Patientinnen und Patienten zu ermöglichen." +
              "Die Organisationen der Selbstverwaltung erhielten darin klare Vorgaben und Fristen, die bei Nichteinhaltung teilweise auch zu Sanktionen führen."
  },
  {
    label: "2016"
  },
  {
    label: "2017"
  },
  {
    label: "2018"
  },
  {
    label: "2019 - Das TSVG & GSV treten in Kraft",
    fullText: "Gesetz für schnellere Termine und bessere Versorgung (Terminservice- und Versorgungsgesetz, TSVG)\n" +
              "(Fristen zur Einführung der ePA, eAU; Umbenennung in und effektivere Entscheidungsprozesse der gematik)." +
              "Gesetz für mehr Sicherheit in der Arzneimittelversorgung (GSAV):\n" +
              "Ermöglichung der Abgabe verschreibungspflichtiger Arzneimittelversorgung durch Abgabe nach ausschließlicher Fernbehandlung; Vorgaben für Selbstverwaltung zur Einführung zur Einführung des E-Rezepts"
  },
  {
    label: "2020"
  },
  {
    label: "2021"
  },
  {
    label: "2022"
  },
  {
    label: "2023"
  }
]
const production = [
  {
    label: "2001"
  },
  {
    label: "2002",
  },
  {
    label: "2003",
  },
  {
    label: "2004",
  },
  {
    label: "2005"
  },
  {
    label: "2006"
  },
  {
    label: "2007"
  },
  {
    label: "2008"
  },
  {
    label: "2009"
  },
  {
    label: "2010"
  },
  {
    label: "2011 - Die elektronische Gesundheitskarte erscheint",
    fullText: "Ausgabe der ersten Generation von elektronischen Gesundheitskarten, enthält abseits eines Lichtbildes aber keine weiteren Funktionen. Sie hätte bereits 2006 erscheinen sollen." +
              "Sie sollte ursprünglich neben Informationen über Blutgruppe, Allergien, Implantate und Impfungen auch Zugriff E-Rezept gewähren."
  },
  {
    label: "2012"
  },
  {
    label: "2013"
  },
  {
    label: "2014"
  },
  {
    label: "2015",
  },
  {
    label: "2016"
  },
  {
    label: "2017 - Die elektronische Gesundheitskarten muss getauscht werden",
    fullText: "Ab Oktober können elektronische Gesundheitskarten der ersten Generation nicht mehr eingelesen werden und der Wechsel auf Version zwei wird nötig." +
              "Diese ermöglicht nun auch den Abgleich mit den Versichertenstammdaten.",
  },
  {
    label: "2018 - Die Telematikinfrastruktur wechselt in den Produktivbetrieb",
    fullText: "Produktivbetrieb der Telematikinfrastruktur (TI). Alle Arztpraxen müssen bis Ende 2018 angebunden sein."
  },
  {
    label: "2019"
  },
  {
    label: "2020",
    fullText: ""
  },
  {
    label: "2021 - Die elektronische Gesundheitsakte geht an den Start",
    fullText: "Durch das TSVG wurden die gesetzlichen Krankenversicherungen zunächst dazu verpflichtet, ihren Versicherten bis Januar 2021 eine elektronische" +
              "Patientenakte anzubieten. Die Nutzung ist freiwillig. Seit Juli 2021 müssen vertragsärztlich tätigen Leistungserbringende praktisch in der Lage sein, die elektronische" +
              "Patientenakte zu nutzen und zu befüllen. Bis Januar 2022 müssen auch Krankenhäuser die ePA nutzen können."
  },
  {
    label: "2022 - Start des Pilotversuches & deren Abbruch",
    fullText: "Apotheken sind in der Lage elektronische Rezepte anzunehmen, jedoch sind viele Praxen nicht in der Lage diese auszustellen."
  },
  {
    label: "2023 - Geplante bundesweite Einführung des E-Rezepts",
    fullText: "Mitte 2023 soll das E-Rezept bundesweit eingeführt werden."
  }
]
const estland = [
  {
    label: "2001 - Einführung der digitalen Infrastruktur",
    fullText: "Einführung der sog. X-Road-Infrastruktur für alle digitalen Austausche im Gesundheitswesen (in Deutschland vergleichbar mit der TI-Infrastruktur).",
    visible: true
  },
  {
    label: "2002"
  },
  {
    label: "2003"
  },
  {
    label: "2004"
  },
  {
    label: "2005 - Fördermittel der EU werden bewilligt",
    fullText: "EU-Mittel für \"E-Health 2005\" (ePA, E-Rezept, digitale Bildverarbeitung, digitale Registrierung) werden bewilligt.",
    visible: true
  },
  {
    label: "2006"
  },
  {
    label: "2007"
  },
  {
    label: "2008 - Einführung der ePA",
    fullText: "Einführung der elektronischen Patientenakte (ePA).",
    visible: true
  },
  {
    label: "2009 - Das Gesundheitsinformationsportal startet",
    fullText: "Das Gesundheitsinformationsportal startet in den Produktivbetrieb.",
    visible: true
  },
  {
    label: "2010 - Der E-Rezept startet",
    fullText: "Der E-Rezept-Dienst startet in den Produktivbetrieb.",
    visible: true
  },
  {
    label: "2011"
  },
  {
    label: "2012 - Videosprechstunden sind möglich",
    fullText: "Videosprechstunden sind möglich.",
    visible: true
  },
  {
    label: "2013 - Staatliche IT-Health Strategie",
    fullText: "\"Staatliche IT-Health Strategie 2013\", neu aufgelegt 2020",
    visible: true
  },
  {
    label: "2014"
  },
  {
    label: "2015"
  },
  {
    label: "2016"
  },
  {
    label: "2017"
  },
  {
    label: "2018 - Grenzüberschreitende Verschreibungen",
    fullText: "Grenzüberschreitende E-Verschreibungen nach Finnland werden ermöglicht.",
    visible: true
  },
  {
    label: "2019"
  },
  {
    label: "2020"
  },
  {
    label: "2021"
  },
  {
    label: "2022"
  },
  {
    label: "2023"
  },
]

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement)
</script>

<template>
  <div class="container mx-auto">

    <!-- INTRO SECTION -->
    <section id="title-section" class="flex flex-col h-screen mx-auto">
      <h1>Das E-Rezept und die Digitalisierung im Gesundheitswesen</h1>
      <h2>Eine interaktive Einführung</h2>
    </section>

    <!-- TIMELINE SECTION -->
    <section id="timeline-section" class="flex flex-col h-auto mx-auto">
      <TabGroup as="div" class="flex flex-row-reverse h-max max-w-full justify-between">
        <TabList class="flex flex-col content-end flex-wrap sticky top-2 h-auto self-start">
          <Tab v-slot="{ selected }" class="label text-right" >
            <span :class="{ 'text-white': selected, 'text-gray-500': !selected }">Gesetzliche Rahmenbedingungen</span>
          </Tab>
          <Tab v-slot="{ selected }" class="label text-right" >
            <span :class="{ 'text-white': selected, 'text-gray-500': !selected }">Test und Inbetriebnahme</span>
          </Tab>
          <Tab v-slot="{ selected }" class="label text-right" >
            <span :class="{ 'text-white': selected, 'text-gray-500': !selected }">Ablauf in Estland</span>
          </Tab>
        </TabList>

        <TabPanels as="div">
          <TabPanel>
            <timeline :timeline-entries="politics"/>
          </TabPanel>
          <TabPanel>
            <timeline :timeline-entries="production"/>
          </TabPanel>
          <TabPanel>
            <timeline :timeline-entries="estland"/>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </section>

    <section id="why-section" class="flex flex-col h-screen mx-auto">
      <h1>Woran liegt es, dass in Deutschland bis 2023 das E-Rezept noch nicht flächendeckend eingeführt ist?</h1>
    </section>

    <!-- GEMATIK SECTION -->
    <section id="gematik-section" class="flex flex-col h-screen mx-auto">
      <h1>Struktur der Gematik bis 2019</h1>
      <div class="flex gap-3 mb-3">
        <div class="flex flex-col w-1/2">
          <span class="label">Hohe Autonomie bei Selbstverwaltungsorganen</span>
          <p>
            Die Politik setzt den gesetzlichen Rahmen, die Umsetzung ist Aufgabe der
            Selbstverwaltungsorgane. Dabei sollen sie sicherstellen, dass die Gestaltung des
            Digitalisierungsprozesses der Lebenswirklichkeit entspricht und sachorientierte
            Entscheidungen getroffen werden.
          </p>
        </div>

        <div class="flex flex-col w-1/2">
          <span class="label">Keine klare Zielrichtung</span>
          <p>
            Seitens des BMG fehlt eine zielgerichtete Strategie, es gibt keine / wenig
            Autonomiebeschränkende gesetzliche Rahmenbedingungen (Fristen, Sanktionen,
            Vorgaben). Dadurch fehlt der Gematik der "Leistungsdruck".
          </p>
        </div>
      </div>

      <div class="flex flex-row gap-3 mb-6">
        <div class="flex flex-col w-1/2">
          <span class="label">Wenig Transparenz</span>
          <p>
            Die Gesellschafterversammlung tagen geheim, eine Veröffentlichung von Protokollen
            findet nicht statt. So sind (nicht-)Entscheidungen der interessierten Öffentlichkeit nicht
            zugänglich. Entscheidungsprozesse und Interessenkonflikte sind opak.
          </p>
        </div>

        <div class="flex flex-col w-1/2">
          <span class="label">Faktisch Beschlussunfähig</span>
          <p>
            Zuwiderlaufende Interessen der Gesellschafter bei gleichzeitiger Notwendigkeit einer
            67% Mehrheit für Beschlüsse, sorgten dafür dass sich Gesellschafter gegenseitig
            blockierten.
          </p>
        </div>
      </div>

      <div class="flex flex-row gap-3">
        <div class="flex flex-col w-1/2">
          <span class="label">Die Gesellschafter der Gematik bis 2019 in %</span>
          <div class="flex">
            <pie id="estland-pie-chart" :data="gematikChartData" :options="chartOptions" />
          </div>
        </div>

        <div class="flex flex-col w-1/2">
            <span class="label">Änderungen in 2019</span>
            <p>
              Um Blockaden aufzulösen und den Digitalisierungsprozess zu beschleunigen, übernahm (mit den
              TSVG) 2019 das BMG mit 51% die Mehrheitsanteile der gematik und legte die einfache Mehrheit zur
              Beschlussfähigkeit fest. Damit kann das BMG allein Entscheidungen beschließen.
            </p>
          </div>
      </div>
    </section>

    <!-- PRE ESTLAND -->
    <section id="post-gematik-section" class="flex flex-col h-screen mx-auto">
      <h1>Im Vergleich dazu: Wie ist die Struktur der estländischen E-Health Foundation (bis 2017) aufbaut?</h1>
    </section>

    <!-- ESTLAND SECTION -->
    <section id="estland-section" class="flex flex-col h-screen mx-auto">
      <h1>Struktur der estländischen E-Health Foundation bis 2017</h1>
      <div class="flex gap-3">
        <div class="flex flex-col w-1/2">
          <span class="label">Die Gesellschafter der E-Health Foundation</span>
          <div class="flex">
            <pie id="estland-pie-chart" :data="estlandChartData" :options="chartOptions" />
          </div>
        </div>

        <div class="flex flex-col w-2/3 gap-3">
          <div class="flex flex-col">
            <span class="label">Zielvorgabe durch Politik</span>
            <p>
              Die Politik legt durch Gesetze fest (zuletzt durch eine "Gesundheits-IT Strategie" 2013 und
              2017), bis wann welche Gesundheitsleistungen digital sein sollen. Die E-Health Foundation
              kümmert sich als Teilorganisation des Sozialministeriums um die Umsetzung.
              Da die E-Health Foundation keine Gesellschafter außer dem Staat hat, kann sie schneller
              Beschlüsse fassen und Entscheidungen treffen.
            </p>
          </div>

          <div class="flex flex-col">
        <span class="label">Teilbeteiligung der Krankenkassen</span>
        <p>
          Die Krankenkassen finanzieren teilweise die Entwicklung von digitalen
          Gesundheitsdienstleistungen mit. Der Betrieb wird allerdings vom Staat getragen.
          2017 wurde die E-Health Foundation als Zentrum für Gesundheits- und
          Sozialinformationssysteme (TEHIK) zusammengelegt. Sie untersteht weiterhin dem
          Sozialministerium.
        </p>
      </div>
        </div>
      </div>
    </section>

    <!-- COMPARISON -->
    <section id="comparison-section" class="flex flex-col h-screen mx-auto content-section">
      <h1>Wäre es also auch für Deutschland zielführend keine Gesellschafter in den Digitalisierungsprozess einzubeziehen?</h1>
      <div class="flex gap-3 mb-3">
        <div class="flex flex-col w-1/2">
          <span class="label">Selbstverwaltung als Prinzip demokratischen Konsens</span>
          <p>
            Das deutsche Gesundheitssystem wird nach dem Prinzip der Selbstverwaltung
            organisiert. Die Struktur des Systems beruht auf Konsens und Kompromissen. Durch
            die Beteiligung der Selbstverwaltungsorgane wird das demokratische Prinzip
            aufrechterhalten.
          </p>
        </div>

        <div class="flex flex-col w-1/2">
          <span class="label">Voraussetzung: Transparenz</span>
          <p>
            Die Selbstverwaltungsorgane vertreten sowohl die Interessen der Patient:innen, sind
            zeitgleich aber auch gewinnorientiert. Sofern dabei entstehende Verteilungs- und
            Interessenkonflikte von der gematik jedoch transparent transportiert werden, ist eine
            Reaktion seitens der Öffentlichkeit und der Politik notwendig. So kann der öffentliche
            Diskurs unter Stärkung der Patient:innenposition angeregt und Alternativen durch die
            technisch-interessierte Öffentlichkeit aufgezeigt werden (bspw. durch den Chaos
            Computer Club), während die Politik als Reaktion entsprechende gesetzliche,
            begrenzende Rahmenbedingungen vorgeben kann.
          </p>
        </div>
      </div>

      <div class="flex gap-3 mb-12">
        <div class="flex flex-col w-1/2">
          <span class="label">Fachwissen und Expertise</span>
          <p>
            Die Gestaltung des Prozesses erfolgt bei Beteiligung der Spitzenorganisationen des
            deutschen Gesundheitswesend durch diejenigen Akteure, welche die meiste
            Expertise besitzen. Das Produkt muss gemäß der realen Notwendigkeiten entworfen
            und spezifiziert werden, sodass das E-Rezept und dessen Prozessabläufe einen
            Mehrwert bringen. Da das BMG als Behörde ein Verwaltungsorgan darstellt, kann
            angezweifelt werden, dass die notwendige Nähe zum Produkt besteht.
          </p>
        </div>

        <div class="flex flex-col w-1/2">
          <span class="label">Akzeptanz der Leistungserbringer</span>
          <p>
            Besonders den Leistungserbringern und den Patient:innen(-verbänden) kommt eine
            bremsende Rolle zu, da Patient:innen im Zweifelsfall die Leidtragenden sind und die
            Leistungsbringer nur von der Digitalisierung profitieren, wenn sie einen medizinischen
            oder verwaltungstechnischen Vorteil bringt. Umso wichtiger ist die Akzeptanz bei den
            Selbstverwaltungsorganen, damit digitale Anwendungen erfolgreich etabliert werden
            können.
          </p>
        </div>
      </div>

      <div class="flex gap-3">
        <div class="flex flex-col">
          <h2>Unserer Ansicht nach, kann auch unter Einbeziehung der Spitzenorganisationen des deutschen Gesundheitswesens der Digitalisierungsprozess erfolgreich umgesetzt werden.</h2>
          <p class="w-1/2">
            Dies setzt jedoch voraus, dass von Beginn an die Politik eine starke, steuernde Rolle einnimmt und
            die Spitzenorganisationen durch gesetzliche Rahmenbedingungen und Fristen in die Pflicht nimmt.
            Die Bedeutung der Akzeptanz darf nicht unterschätzt werden, nicht nur von den
            Selbstverwaltungsorganen, sondern von Patient:innen und Versicherten sowie der technisch interessierten Öffentlichkeit.
          </p>
        </div>
      </div>
    </section>

    <!-- FINAL SECTION -->
    <section id="estland-section" class="flex flex-col h-screen mx-auto content-section">
      <h1>Zum Abschluss</h1>
      <h2>Welche Bedeutung hat für euch die gesellschaftliche Beteiligung von verschiedenen Akteur:innen?</h2>
      <h2> Wie könnte eine zügige Einführung von digitalen Anwendungen erfolgen, während gleichzeitig keine gesellschaftlichen Akteure vernachlässigt werden?</h2>
    </section>

    <!-- OUTRO SECTION -->
    <section id="outro-section" class="flex flex-col h-screen mx-auto">
      <h1>Weiterführende Quellen & Infos</h1>
      <div class="flex flex-col gap-3">
        <a href="https://www.e-fi.de/fileadmin/Assets/Studien/2022/StuDIS_12_2022.pdf" target="_blank">
          <span class="label hover:underline">Studie zur deutschen E-Health Entwicklung </span>
          <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" class="align-top" />
        </a>

        <a href="https://www.ccc.de/de/updates/2022/erezept-mangelhaft" target="_blank">
          <span class="label hover:underline">Kritik des CCC </span>
          <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" class="align-top" />
        </a>

        <a href="https://patientenvertretung.g-ba.de/" target="_blank">
          <span class="label hover:underline">Der Gemeinsame Bundesausschuss </span>
          <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" class="align-top" />
        </a>

        <a href="https://link.springer.com/article/10.1007/s00103-019-02994-y" target="_blank">
          <span class="label hover:underline">Brauchen wir mehr Patientenvertretung in Deutschland? </span>
          <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" class="align-top" />
        </a>
      </div>
    </section>
  </div>
</template>
