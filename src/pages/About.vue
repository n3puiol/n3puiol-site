<template>
  <div class="flex flex-col gap-12 items-center min-h-screen">
    <Section title="About">
      <PDFViewer
          source="cv.pdf"
          style="height: 90vh;"
          @download="handleDownload"
      />
    </Section>
  </div>
</template>

<script setup lang="ts">
import Section from "../components/template/Section.vue";
import PDFViewer from "pdf-viewer-vue";

const handleDownload = () => {
  const link = document.createElement('a');
  link.href = 'cv.pdf';
  link.download = 'cv.pdf';
  link.click();
}
</script>