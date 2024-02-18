<template>
  <div class="flex flex-col gap-12 items-center min-h-screen">
    <TopBanner class="mt-12"/>
    <Section title="About">
      <PDFViewer
          source="https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/examples/learning/helloworld.pdf"
          class="h-screen"
      />
    </Section>
  </div>
</template>

<script setup lang="ts">
import TopBanner from "../components/TopBanner.vue";
import Section from "../components/template/Section.vue";
import PDFViewer from "pdf-viewer-vue";
</script>