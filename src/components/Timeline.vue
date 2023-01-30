<template>
<div class="timeline-container">
        <div class="timeline-bar"></div>

        <div class="timeline-entry-list">
          <template v-for="entry in timelineEntries">
            <Disclosure :default-open="entry.visible || false">
              <div class="timeline-entry">
              <div class="flex">
                <div class="timeline-entry-marker"></div>
                <DisclosureButton>
                  <div class="timeline-entry-label">{{ entry.label }}</div>
                </DisclosureButton>
              </div>

              <DisclosurePanel>
                <p class="timeline-entry-fulltext max-w-xl">{{ entry.fullText || "" }}</p>
              </DisclosurePanel>
            </div>
            </Disclosure>
          </template>
        </div>
      </div>
</template>
<script setup lang="ts">
import {Disclosure, DisclosureButton, DisclosurePanel} from "@headlessui/vue";
defineProps(['timelineEntries'])
</script>