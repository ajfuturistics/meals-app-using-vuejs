<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <header class="bg-white shadow h-16 flex justify-between items-stretch">
    <RouterLink :to="{ name: 'home' }" class="inline-flex items-center px-5">
      Home
    </RouterLink>

    <div class="flex gap-1 items-center">
      <RouterLink
        :to="{ name: 'byName' }"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100"
      >
        Search Meals
      </RouterLink>
      <RouterLink
        :to="{ name: 'byLetter' }"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100"
      >
        Meals by Letter
      </RouterLink>
      <RouterLink
        :to="{ name: 'byIngredients' }"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100"
      >
        Meals by Ingredient
      </RouterLink>
    </div>
  </header>
</template>

<style scoped></style>
