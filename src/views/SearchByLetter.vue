<script setup>
import { computed, watch, onMounted } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import MealList from "../components/MealList.vue";
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
    <h1 class="text-4xl text-center font-bold mb-6">Search Meals By Letter</h1>
    <div class="flex flex-wrap justify-center gap-2 mt-2 mb-6">
      <RouterLink
        v-for="letter in letters"
        class="hover:scale-125 hover:font-medium transition-transform hover:text-purple-500"
        :key="letter"
        :to="{ name: 'byLetter', params: { letter } }"
      >
        {{ letter }}
      </RouterLink>
    </div>

    <MealList :meals="meals" />
  </div>
</template>

<style scoped></style>
