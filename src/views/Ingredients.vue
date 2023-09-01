<script setup>
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";
import axiosClient from "../api/axiosClient";

const ingredients = ref([]);
onMounted(() => {
  axiosClient.get("/list.php?i=list").then(({ data }) => {
    ingredients.value = data.meals;
  });
});
</script>

<template>
  <div class="p-8">
    <h1 class="text-4xl text-center font-bold mb-4">Ingredients</h1>
    <section
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
    >
      <RouterLink
        :to="{
          name: 'byIngredients',
          params: { ingredient: ingredient.strIngredient },
        }"
        v-for="ingredient in ingredients"
        :key="ingredient.idIngredient"
        class="block text-center bg-white p-3 mb-3 rounded shadow"
      >
        <h2 class="text-lg font-medium">{{ ingredient.strIngredient }}</h2>
        <!-- <p>{{ ingredient.strDescription }}</p> -->
      </RouterLink>
    </section>
  </div>
</template>

<style scoped></style>
