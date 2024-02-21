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
          name: "University of Groningen (RUG)  [2023-Current]",
          url: "https://www.rug.nl/",
          icon: "https://logo.clearbit.com/rug.nl",
          description: "<p>After my Bachelor’s, I wanted to do something more specific. Hence, I decided to pursue a <b class='font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient'>Master in Artificial Intelligence</b> with a specialisation in robotics at the University of Groningen. Currently pursuing this Master, some notable course that I’ve followed are: Deep Learning, Robotics for AI, Pattern Recognition, Machine Learning, and Cognitive Robotics.</p>"
        },
        {
          name: "University of Brussels (ULB) [2020-2023]",
          url: "https://www.ulb.be/",
          icon: "https://logo.clearbit.com/ulb.be",
          description: "<p>Being passionate about computers and programming since a young age, a <b class='font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient'>Bachelor in Computer Science</b> was the logical choice. During my Bachelor, I’ve learned a lot about programming, algorithms, and data structures. I followed courses such as Object Oriented Programming, Software Architecture, Algorithms and Data Structure, Operational Research, Computer Networks, and Database systems.</p>"
        },
      ]
    }
  },
})
</script>

<style>
.animate-gradient {
  background-size: 300%;
  -webkit-animation: animatedgradient 6s ease infinite alternate;
  -moz-animation: animatedgradient 6s ease infinite alternate;
  animation: animatedgradient 6s ease infinite alternate;
}

@keyframes animatedgradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>