<script setup>
import { truncateWords } from "../utils";
import Button from "./Button.vue";

const props = defineProps({
  meal: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="bg-white shadow rounded-xl">
    <RouterLink
      :to="{ name: 'mealDetails', params: { id: props.meal.idMeal } }"
    >
      <img
        :src="props.meal.strMealThumb"
        :alt="props.meal.strMeal"
        class="rounded-t-xl w-full h-48 object-cover"
        loading="lazy"
      />
    </RouterLink>
    <div class="p-3">
      <h3 class="font-semibold">{{ props.meal.strMeal }}</h3>

      <p class="mb-4">
        {{ truncateWords(props.meal.strInstructions, 20) }}
      </p>

      <div class="flex justify-between items-center">
        <Button
          :href="props?.meal?.strYoutube || ''"
          class="bg-red-500 hover:bg-red-600 text-white"
        >
          YouTube
        </Button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
