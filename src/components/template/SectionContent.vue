<template>
  <div class="flex gap-2">
    <img class="w-12 h-12 rounded-lg" :src="icon" :alt="name"/>
    <div class="flex flex-col gap-1">
      <h1 class="font-bold text-xl">
        {{ name }}
      </h1>
      <a :href="url">
      </a>
      <p>
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "SectionContent",
  props: {
    name: String,
    url: String,
    icon: String,
    description: String
  }
})
</script>