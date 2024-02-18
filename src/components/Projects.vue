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
          name: "Project 1",
          url: "/projects/1",
          icon: "https://via.placeholder.com/64",
          description: "This is the first project"
        },
        {
          name: "Project 2",
          url: "/projects/2",
          icon: "https://via.placeholder.com/64",
          description: "This is the second project"
        },
        {
          name: "Project 3",
          url: "/projects/3",
          icon: "https://via.placeholder.com/64",
          description: "This is the third project"
        }
      ]
    }
  },
})
</script>