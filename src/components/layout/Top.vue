<template>
  {{}}
  <div class="flex items-baseline justify-around w-7/12">
    <div class="w-1/4" v-if="$route.path=='/'"/>
    <button @click="$router.go(-1)" class="w-1/4" v-else>
      <ArrowLeftIcon size="64" class="hover:opacity-65"/>
    </button>
    <TopBanner class="mt-12 w-1/2"/>
    <div class="w-1/4"/>
  </div>
</template>

<script setup lang="ts">
import ArrowLeftIcon from "vue-material-design-icons/ArrowLeft.vue";
import TopBanner from "../TopBanner.vue";
</script>