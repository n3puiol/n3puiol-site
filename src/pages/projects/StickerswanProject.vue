<template>
  <Section title="Stickerswan">
    <p>The website you are currently visiting</p>
    <p>
      A sticker editing app which allows user to create, customize, and purchase stickers.
      The frontend is built with <a href="https://vuejs.org/" class="text-blue-500 hover:underline">Vue.js</a>,
      <a href="https://www.typescriptlang.org/" class="text-blue-500 hover:underline">TypeScript</a>, and
      <a href="https://tailwindcss.com/" class="text-blue-500 hover:underline">Tailwind</a>.
      The backend is built with <a href="https://expressjs.com/" class="text-blue-500 hover:underline">Express.js</a> and
      makes use of a <a href="https://www.postgresql.org/" class="text-blue-500 hover:underline">PostgreSQL</a> database and
      <a href="https://min.io/" class="text-blue-500 hover:underline">Minio</a> S3 bucket storage.
      Once an order is made, the sticker is converted to the proper format to be printed and shipped.
      Users can also track the process of their order (printed/shipped/delivered) and an admin can update these states dynamically.
      There is also an admin dashboard which is used to organize orders and simplify the order process in the factory.
      The dashboard is built using <a href="https://medusajs.com/" class="text-blue-500 hover:underline">Medusa</a>.
    </p>
    <a href="https://app.stickerswan.com" target="_blank" class="text-blue-500 hover:underline">
      Link
    </a>
  </Section>
</template>

<script setup lang="ts">
import Section from "../../components/template/Section.vue";
</script>