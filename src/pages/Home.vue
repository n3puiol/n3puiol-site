<template>
  <div class="flex flex-col gap-12 justify-center items-center min-h-screen">
    <TopBanner class="mt-12" />
    <Projects />
    <Skills />
    <Education />
  </div>
  <div class="bottom-1 flex gap-1 justify-center">
    <a href="/" class="text-blue-500">Source Code</a>
    <p>|</p>
    <a href="/about" class="text-blue-500">CV</a>
  </div>
</template>

<script setup lang="ts">
import TopBanner from "../components/TopBanner.vue";
import Projects from "../components/Projects.vue";
import Skills from "../components/Skills.vue";
import Education from "../components/Education.vue";
</script>