<script setup>
import { RouterView } from "vue-router";
import Header from "../components/Header.vue";
</script>

<template>
  <div class="bg-gray-100 min-h-screen">
    <Header />
    <main class="max-w-[1200px] mx-auto">
      <RouterView />
    </main>
  </div>
</template>

<style scoped></style>
