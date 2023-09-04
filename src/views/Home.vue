<script setup>
import { onMounted, ref } from "vue";
import axiosClient from "../api/axiosClient";
import MealList from "../components/MealList.vue";

const randomMeals = ref([]);

onMounted(async () => {
  for (let i = 0; i < 10; i++) {
    axiosClient.get("/random.php").then(({ data }) => {
      randomMeals.value.push(data.meals[0]);
    });
  }
});
</script>

<template>
  <div class="p-8">
    <h1 class="text-4xl text-center font-bold mb-6">Random Meals</h1>
    <MealList :meals="randomMeals" />
  </div>
</template>

<style scoped></style>
