<template>
  <div class="flex gap-2">
    <img class="w-12 h-12 rounded-lg" :src="icon" :alt="name"/>
    <div class="flex flex-col gap-1">
      <div class="flex gap-1 items-center">
        <h1 class="font-bold text-xl">
          {{ name }}
        </h1>
        <a :href="url" v-if="url?.length">
          <ArrowTopRightIcon size="24" class="hover:opacity-65"/>
        </a>
      </div>
      <p>
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import ArrowTopRightIcon from 'vue-material-design-icons/ArrowTopRight.vue';

export default defineComponent({
  name: "SectionContent",
  props: {
    name: String,
    url: String,
    icon: String,
    description: String
  },
  components: {
    ArrowTopRightIcon
  }
})
</script>