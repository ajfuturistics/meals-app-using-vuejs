<script setup>
import { ref, computed, onMounted } from "vue";
import { RouterLink } from "vue-router";
import axiosClient from "../api/axiosClient";

const ingredients = ref([]);
const keyword = ref("");

const searchIngredient = computed(() => {
  return ingredients.value.filter((ingr) =>
    ingr?.strIngredient?.toLowerCase()?.includes(keyword.value?.toLowerCase())
  );
});
onMounted(() => {
  axiosClient.get("/list.php?i=list").then(({ data }) => {
    ingredients.value = data.meals;
  });
});
</script>

<template>
  <div class="p-8">
    <h1 class="text-4xl text-center font-bold mb-6">Ingredients</h1>
    <input
      v-model="keyword"
      type="text"
      class="rounded border-2 border-gray-200 w-full mb-6"
      placeholder="Search for Ingredients"
    />
    <section
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
    >
      <RouterLink
        :to="{
          name: 'byIngredients',
          params: { ingredient: ingredient.strIngredient },
        }"
        v-for="ingredient in searchIngredient"
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
