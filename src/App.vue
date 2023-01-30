<script setup lang="ts">
import Timeline from "./components/Timeline.vue";
import {Tab, TabGroup, TabList, TabPanel, TabPanels} from "@headlessui/vue";
import {ref} from "vue";

const selected = ref()
const politics = [
  {
    label: "2001"
  },
  {
    label: "2002 - Pilotprojekt \"Elektronische Gesundheitskarte\"",
    fullText: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
  },
  {
    label: "2003",
    fullText: ""
  },
  {
    label: "2004 - Das Gesundheitsmodernisierungsgesetz",
    fullText: ""
  },
  {
    label: "2005 - Gründung der Gematik",
    fullText: ""
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
    label: "2010 - Schlichtungsverfahren innerhalb der Gematik"
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
    label: "2015 - Das E-Health Gesetz"
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
    label: "2002 - Pilotprojekt \"Elektronische Gesundheitskarte\"",
    type: "politics",
    fullText: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
  },
  {
    label: "2003",
    type: "politics",
    fullText: ""
  },
  {
    label: "2004 - Das Gesundheitsmodernisierungsgesetz",
    type: "politics",
    fullText: ""
  },
  {
    label: "2005 - Gründung der Gematik",
    type: "politics",
    fullText: ""
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
    label: "2010 - Schlichtungsverfahren innerhalb der Geamtik",
    type: "politics",
  },
  {
    label: "2011 - Die erste Generation von elektronischen Gesundheitskarten erscheint",
    type: "prod",
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
    type: "politics",
  },
  {
    label: "2016"
  },
  {
    label: "2017 - Die erste Generation elektronischer Gesundheitskarten muss getauscht werden",
    type: "prod",
  },
  {
    label: "2018 - Die Telematikinfrastruktur wechselt in den Produktivbetrieb",
    type: "prod",
  },
  {
    label: "2019 - Das Terminservice- und Versorgungsgesetz & das Gesetz für mehr Sicherheit in der Arzneimittelversorgung",
    type: "politics",
  },
  {
    label: "2020 - Pilotversuche"
  },
  {
    label: "2021 - Die elektronische Gesundheitsakte für alle gesetzlichen Versicherten"
  },
  {
    label: "2022 - Apotheken nehmen elektronische Rezepte an & Abbruch der Pilotversuche"
  },
  {
    label: "2023 - Geplante bundesweite Einführung des E-Rezepts"
  }
]
const estland = [
  {
    label: "2001"
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
    label: "2011"
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
    label: "2015"
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
            <span :class="{ 'text-white': selected, 'text-gray-500': !selected }">Tests und Inbetriebnahme</span>
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

    <!-- ESTLAND SECTION -->
    <section id="estland-section" class="flex flex-col h-screen mx-auto">
      <h1>Struktur der estländischen E-Health Foundation bis 2017</h1>
      <div class="flex fle-col gap-3">
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
    </section>

    <!-- GEMATIK SECTION -->
    <section id="gematik-section" class="flex flex-col h-screen mx-auto">
      <h1>Struktur der Gematik bis 2019</h1>
      <div class="flex fle-col gap-3">
        <div class="flex flex-col">
          <span class="label">Hohe Autonomie bei Selbstverwaltungsorganen</span>
          <p>
            Die Politik setzt den gesetzlichen Rahmen, die Umsetzung ist Aufgabe der Selbstverwaltungsorgane. Dabei sollen sie sicherstellen, dass die Gestaltung des
            Digitalisierungsprozesses der Lebenswirklichkeit entspricht und sachorientierte Entscheidungen getroffen werden.
          </p>
        </div>

        <div class="flex flex-col">
          <span class="label">Keine klare Zielrichtung</span>
          <p>
            Seitens des BMG fehlt eine zielgerichtete Strategie, es gibt keine / wenig Autonomiebeschränkende gesetzliche Rahmenbedingungen (Fristen, Sanktionen, Vorgaben). Dadurch
            fehlt der Gematik der "Leistungsdruck".
          </p>
        </div>

        <div class="flex flex-col">
          <span class="label">Wenig Transparenz</span>
          <p>
            Die Gesellschafterversammlung tagen geheim, eine Veröffentlichung von Protokollen findet nicht statt. So sind (nicht-)Entscheidungen der interessierten Öffentlichkeit
            nicht zugänglich. Entscheidungsprozesse und Interessenkonflikte sind opak.
          </p>
        </div>

        <div class="flex flex-col">
          <span class="label">Faktisch Beschlussunfähig</span>
          <p>
            Zuwiderlaufende Interessen der Gesellschafter bei gleichzeitiger Notwendigkeit einer Zweidrittelmehrheit für Beschlüsse, sorgten dafür dass sich Gesellschafter
            gegenseitig blockierten.
          </p>
        </div>
      </div>
    </section>

    <!-- OUTRO SECTION -->
    <section id="outro-section" class="flex flex-col h-screen mx-auto">
      <h1>Weiterführende Quellen und Infomaterial</h1>
      <h2>wololo</h2>
    </section>
  </div>
</template>
