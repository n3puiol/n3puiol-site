<template>
  <div class="flex flex-col items-center gap-2">
    <div class="flex gap-2 items-baseline">
      <router-link to="/" class="md:text-8xl text-6xl font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400
      text-transparent bg-clip-text bg-300% animate-gradient hover:italic hover:underline">
        n3puiol
      </router-link>
      <a href="https://github.com/n3puiol" target="_blank">
        <GithubIcon :size="$grid['md'] ? 64 : 42" class="hover:opacity-65"/>
      </a>
    </div>
    <div class="flex gap-1 items-center">
      <h2>
        Louis Vanstappen
      </h2>
      <a href="https://linkedin.com/in/louis-vanstappen" target="_blank">
        <LinkedinIcon :size="32" class="hover:opacity-65"/>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import GithubIcon from 'vue-material-design-icons/Github.vue';
import LinkedinIcon from 'vue-material-design-icons/Linkedin.vue';
</script>

<style>
.animate-gradient {
  background-size: 300%;
  -webkit-animation: animatedgradient 6s ease infinite alternate;
  -moz-animation: animatedgradient 6s ease infinite alternate;
  animation: animatedgradient 6s ease infinite alternate;
}

@keyframes animatedgradient {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}
</style>
