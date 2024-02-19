<template>
  <div class="min-h-screen w-full text-gray-200 bg-gray-800">
    <div class="flex justify-center">
      <Top/>
    </div>
    <router-view/>
  </div>
</template>

<script setup lang="ts">
import Top from "./components/layout/Top.vue";
</script>