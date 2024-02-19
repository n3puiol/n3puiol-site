<template>
  {{}}
  <div class="flex items-baseline justify-around lg:w-7/12 w-10/12">
    <div class="w-1/4" v-if="$route.path=='/'"/>
    <button @click="$router.go(-1)" class="w-1/4" v-else>
      <ArrowLeftIcon :size="$grid['md'] ? 64 : 42" class="hover:opacity-65"/>
    </button>
    <TopBanner class="mt-12 w-1/2"/>
    <div class="w-1/4"/>
  </div>
</template>

<script setup lang="ts">
import ArrowLeftIcon from "vue-material-design-icons/ArrowLeft.vue";
import TopBanner from "../TopBanner.vue";
</script>