<template>
  <div class="flex flex-col gap-12 items-center min-h-screen">
    <Section title="About">
      <p>
        I am a Msc. in Artificial Intelligence student with a Bsc. in Computer Science.
        <br>Continuously striving to keep learning in the field of computer science and AI, otherwise I get bored.
        <br>My main expertises are software development with the most experience in building fullstack application, and
        machine learning.
        <br>Please find my resume below:
      </p>
      <div class="h-[70vh]">
        <PDFViewer
            ref="pdfViewer"
            source="cv.pdf"
            @download="handleDownload"
        />
      </div>
    </Section>
  </div>
</template>

<script setup lang="ts">
import Section from "../components/template/Section.vue";
import PDFViewer from "pdf-viewer-vue";
import {ref, onMounted} from "vue";

const handleDownload = () => {
  const link = document.createElement('a');
  link.href = 'cv.pdf';
  link.download = 'cv.pdf';
  link.click();
}

const pdfViewer = ref(null);

onMounted(() => {
  if (pdfViewer.value) {
    (pdfViewer.value as any).zoom = 200;
  }
});


</script>