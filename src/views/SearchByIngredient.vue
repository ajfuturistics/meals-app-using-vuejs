<script setup>
import { computed, onMounted } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import MealItem from "../components/MealItem.vue";
import MealList from "../components/MealList.vue";

const route = useRoute();
const meals = computed(() => store.state.mealsByIngredient);

onMounted(() => {
  store.dispatch("searchMealsByIngredient", route.params.ingredient);
});
</script>

<template>
  <div class="p-8">
    <h1 class="text-4xl text-center font-bold mb-6">
      Meals for {{ route.params.ingredient }}
    </h1>
    <MealList :meals="meals" />
  </div>
</template>

<style scoped></style>
