<template>
  <Section title="Projects">
    <div class="flex flex-col gap-4">
      <SectionContent v-for="project in projects" :key="project.name" :name="project.name" :url="project.url"
               :icon="project.icon" :description="project.description"/>
    </div>
  </Section>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import SectionContent from "./template/SectionContent.vue";
import Section from "./template/Section.vue";

export default defineComponent({
  name: "Projects",
  components: {
    Section,
    SectionContent
  },
  data() {
    return {
      projects: [
        {
          name: "Rust Neural Network",
          url: "/project/rust_neural_network",
          icon: "https://logo.clearbit.com/rust-lang.ru",
          description: "A simple neural network library written in Rust."
        },
        {
          name: "This website",
          url: "/project/this_website",
          icon: "https://via.placeholder.com/64",
          description: "An amazing website (debatable)."
        },
        {
          name: "Stickerswan",
          url: "/project/stickerswan",
          icon: "https://app.stickerswan.com/stickerswan.svg",
          description: "A sticker creation app."
        }
      ]
    }
  },
})
</script>