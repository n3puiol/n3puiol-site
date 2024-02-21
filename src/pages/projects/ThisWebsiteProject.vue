<template>
  <Section title="This Website">
    <p>The website you are currently visiting</p>
    <p>
      A website built with <a href="https://vuejs.org/" class="text-blue-500 hover:underline">Vue.js</a>,
      <a href="https://www.typescriptlang.org/" class="text-blue-500 hover:underline">TypeScript</a>, and
      <a href="https://tailwindcss.com/" class="text-blue-500 hover:underline">Tailwind</a>.
      The website is built to be reactive in order to be usable on computer, tablets, and phones.
      The code is structured in a way to reduce redundancy and to make it easy to add new content.
    </p>
    <a href="https://github.com/n3puiol/n3puiol-site" target="_blank" class="text-blue-500 hover:underline">
      Source Code
    </a>
  </Section>
</template>

<script setup lang="ts">
import Section from "../../components/template/Section.vue";
</script>