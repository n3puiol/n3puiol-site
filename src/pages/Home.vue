<template>
  <div class="flex flex-col gap-12 items-center min-h-screen">
    <Section>
      <p>
        Hi, I'm Louis Vanstappen. I built this website as a sort of online resume.
        I'm a flexible and adaptable software developer currently pursuing a Master in Artificial Intelligence.
        I'm passionate about technology and I'm always looking for new challenges.
      </p>
    </Section>
    <Projects/>
    <Education/>
    <Skills/>
  </div>
</template>

<script setup lang="ts">
import Projects from "../components/Projects.vue";
import Skills from "../components/Skills.vue";
import Education from "../components/Education.vue";
import Section from "../components/template/Section.vue";
</script>