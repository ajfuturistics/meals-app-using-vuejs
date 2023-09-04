<script setup>
import MealItem from "./MealItem.vue";

const props = defineProps({
  meals: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <section>
    <div v-if="!meals?.length" class="text-center mt-6">No meals found</div>

    <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-5">
      <MealItem v-for="meal in props.meals" :key="meal.idMeal" :meal="meal" />
    </div>
  </section>
</template>

<style scoped></style>
