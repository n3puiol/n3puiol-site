<template>
  <div class="flex flex-col gap-12 items-center min-h-screen">
    <TopBanner class="mt-12" />
    <Projects />
    <Skills />
    <Education />
  </div>
  <div class="bottom-1 flex gap-1 justify-center">
    <a href="https://github.com/n3puiol/n3puiol-site" target="_blank" class="text-blue-500">Source Code</a>
    <p>|</p>
    <router-link to="about" class="text-blue-500">CV</router-link>
  </div>
</template>

<script setup lang="ts">
import TopBanner from "../components/TopBanner.vue";
import Projects from "../components/Projects.vue";
import Skills from "../components/Skills.vue";
import Education from "../components/Education.vue";
</script>