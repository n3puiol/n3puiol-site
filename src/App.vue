<template>
  <div class="min-h-screen w-full text-gray-200 bg-gray-800">
    <div class="flex justify-center">
      <Top/>
    </div>
    <router-view/>
    <div class="flex justify-center">
      <Bottom/>
    </div>
  </div>
</template>

<script setup lang="ts">
import Top from "./components/layout/Top.vue";
import Bottom from "./components/layout/Bottom.vue";
</script>