<template>
  <Section title="Skills">
    <table class="table-auto border border-gray-300 rounded-lg border-separate">
      <caption></caption>
      <thead>
      <tr>
        <th v-for="(category, index) in categories.slice(0, categories.length - 1)" :key="index"
            class="max-w-1/12 w-fit text-lg px-4 py-2 border-r border-gray-300">{{ category }}
        </th>
        <th class="max-w-1/12 w-fit px-4 py-2 border-gray-300">{{ categories[categories.length - 1] }}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(language, index) in skills[0].languages" :key="index" class="text-sm">
        <td class="px-4 py-2 border-r border-t border-gray-300">{{ language }}</td>
        <td class="px-4 py-2 border-r border-t border-gray-300">{{ skills[0].ai[index] }}</td>
        <td class="px-4 py-2 border-r border-t border-gray-300">{{ skills[0].fullStack[index] }}</td>
        <td class="px-4 py-2 border-r border-t border-gray-300">{{ skills[0].frontEnd[index] }}</td>
        <td class="px-4 py-2 border-r border-t border-gray-300">{{ skills[0].backEnd[index] }}</td>
        <td class="px-4 py-2 border-r border-t border-gray-300">{{ skills[0].technology[index] }}</td>
        <td class="px-4 py-2 border-t border-gray-300">{{ skills[0].database[index] }}</td>
      </tr>
      </tbody>
    </table>
  </Section>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Section from "./template/Section.vue";

export default defineComponent({
  name: "Skills",
  components: {Section},
  data() {
    return {
      skills: [
        {
          languages: ["C++", "Python", "Rust", "TypeScript", "Java", "C", "Kotlin"],
          ai: ["TensorFlow", "Pandas", "NumPy", "SciPy", "Scikit-Learn", "Keras", "Matplotlib"],
          fullStack: ["UX/UI design", "Unit testing", "Database modeling", "Server management", "APIs development", "Deployment", "Effective communication"],
          frontEnd: ["Html/Css", "Vue", "Flutter", "JavaFx", "Qt5", "React", "Angular"],
          backEnd: ["Django", "Flask", "FastAPI", "Node.js", "Express", "Spring", "Spark Java"],
          technology: ["Git", "Docker", "ROS", "AWS", "Nginx", "VPS", "GraphQL"],
          database: ["SQL", "NoSQL", "Postgresql", "MongoDB", "SnowflakeSQL", "MariaDB", "SQLite3"]
        }
      ],
      categories: ["Languages", "AI", "Full-stack", "Front-end", "Back-end", "Technology", "Database"]
    }
  },
})
</script>