<template>
  <div class="flex gap-2">
    <img class="w-12 h-12 rounded-lg bg-white" :src="icon" :alt="name"/>
    <div class="flex flex-col gap-1">
      <a class="flex gap-1 items-center" :href="url" v-if="url && url[0]=='h'" @mouseover="hover=true" @mouseleave="hover=false">
        <h1 :class="{ 'font-bold text-xl': true, 'opacity-65': hover }">
          {{ name }}
        </h1>
        <ArrowTopRightIcon size="24" :class="{ 'opacity-65': hover }" v-if="url?.length"/>
      </a>
      <router-link class="flex gap-1 items-center" :to="url" v-if="url && url[0]=='/'" @mouseover="hover=true" @mouseleave="hover=false">
        <h1 :class="{ 'font-bold text-xl': true, 'opacity-65': hover }">
          {{ name }}
        </h1>
        <ArrowTopRightIcon size="24" :class="{ 'opacity-65': hover }" v-if="url?.length"/>
      </router-link>
      <div v-html="description"></div>
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
  },
  data() {
    return {
      hover: false
    }
  },
})
</script>