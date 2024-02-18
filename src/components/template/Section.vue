<template>
  <div class="flex flex-col gap-6 w-7/12">
    <h1 class="text-4xl font-bold">
      {{ title }}
    </h1>
    <slot/>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from 'vue'

defineProps({
  title: String,
})
</script>