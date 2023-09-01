<script setup>
import { computed, onMounted } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import MealItem from "../components/MealItem.vue";

const route = useRoute();
const meals = computed(() => store.state.mealsByIngredient);

onMounted(() => {
  store.dispatch("searchMealsByIngredient", route.params.ingredient);
});
</script>

<template>
  <div class="p-8">
    <div v-if="!meals?.length" class="text-center">No meals found</div>

    <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
      <MealItem v-for="meal in meals" :key="meal.idMeal" :meal="meal" />
    </div>
  </div>
</template>

<style scoped></style>
