<script setup>
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
</script>

<template>
  <div class="p-8 flex flex-col justify-center items-center">
    <div class="flex gap-2 mt-2">
      <RouterLink
        v-for="letter in letters"
        :key="letter"
        :to="{ name: 'byLetter', params: { letter } }"
      >
        {{ letter }}
      </RouterLink>
    </div>
  </div>
</template>

<style scoped></style>
