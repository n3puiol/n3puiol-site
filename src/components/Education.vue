<template>
  <Section title="Education">
    <div class="flex flex-col gap-4">
      <SectionContent v-for="education in educations" :key="education.name" :name="education.name" :url="education.url"
                      :icon="education.icon" :description="education.description"/>
    </div>
  </Section>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import SectionContent from "./template/SectionContent.vue";
import Section from "./template/Section.vue";

export default defineComponent({
  name: "Education",
  components: {
    Section,
    SectionContent
  },
  data() {
    return {
      educations: [
        {
          name: "University of Groningen (RUG)",
          url: "https://www.rug.nl/",
          icon: "https://logo.clearbit.com/rug.nl",
          description: "This is the second uni"
        },
        {
          name: "University of Brussels (ULB)",
          url: "https://www.ulb.be/",
          icon: "https://logo.clearbit.com/ulb.be",
          description: "This is the first uni"
        },
      ]
    }
  },
})
</script>