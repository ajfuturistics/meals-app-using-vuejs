<script setup>
import { computed, watch, onMounted } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import MealItem from "../components/MealItem.vue";
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const route = useRoute();
const meals = computed(() => store.state.mealsByLetter);

watch(route, () => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});

onMounted(() => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});
</script>

<template>
  <div class="p-8">
    <div class="flex justify-center gap-2 mt-2">
      <RouterLink
        v-for="letter in letters"
        :key="letter"
        :to="{ name: 'byLetter', params: { letter } }"
      >
        {{ letter }}
      </RouterLink>
    </div>

    <div v-if="!meals?.length" class="text-center">No meals found</div>
    <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
      <MealItem v-for="meal in meals" :key="meal.idMeal" :meal="meal" />
    </div>
  </div>
</template>

<style scoped></style>
