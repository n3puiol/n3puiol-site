<template>
  <div class="flex flex-col gap-6 lg:w-7/12 w-10/12">
    <h1 class="text-4xl font-bold">
      {{ title }}
    </h1>
    <slot/>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: String,
})
</script>