<template>
  <div class="flex flex-col gap-12 items-center min-h-screen">
    <RustNeuralNetworkProject v-if="$route.params.id=='rust_neural_network'"/>
    <ThisWebsiteProject v-if="$route.params.id=='this_website'"/>
    <StickerswanProject v-if="$route.params.id=='stickerswan'"/>
  </div>
</template>

<script setup lang="ts">
import RustNeuralNetworkProject from "./projects/RustNeuralNetworkProject.vue";
import StickerswanProject from "./projects/StickerswanProject.vue";
import ThisWebsiteProject from "./projects/ThisWebsiteProject.vue";
</script>