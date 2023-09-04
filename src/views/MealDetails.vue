<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../api/axiosClient";
import Button from "../components/Button.vue";

const route = useRoute();
const meal = ref({});

onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
    meal.value = data.meals[0] || {};
  });
});
</script>

<template>
  <div class="w-full max-w-[800px] mx-auto p-8 pb-4">
    <h2 class="text-5xl font-bold mb-5">{{ meal.strMeal }}</h2>
    <img
      :src="meal.strMealThumb"
      :alt="meal.strMeal"
      class="w-full aspect-video"
    />

    <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
      <p><strong>Category:</strong> {{ meal.strCategory }}</p>
      <p><strong>Area:</strong> {{ meal.strArea }}</p>
      <p><strong>Tags:</strong> {{ meal.strTags }}</p>
    </div>

    <div class="my-3">
      {{ meal.strInstructions }}
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2">
      <div>
        <h3 class="text-2xl font-semibold mb-3">Ingredients</h3>

        <ul>
          <template v-for="(el, idx) in new Array(20)">
            <li v-if="meal[`strIngredient${idx + 1}`]">
              {{ meal[`strIngredient${idx + 1}`] }}
            </li>
          </template>
        </ul>
      </div>

      <div>
        <h3 class="text-2xl font-semibold mb-3">Measures</h3>

        <ul>
          <template v-for="(el, idx) in new Array(20)">
            <li v-if="meal[`strMeasure${idx + 1}`]">
              {{ meal[`strMeasure${idx + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
    </div>

    <div class="mt-4">
      <Button
        :href="meal.strYoutube"
        class="bg-red-500 hover:bg-red-600 text-white"
      >
        YouTube
      </Button>
      <Button
        v-if="meal.strSource"
        :href="meal.strSource"
        class="ml-3 bg-indigo-500 hover:bg-indigo-600 text-white"
      >
        View Original Source
      </Button>
    </div>
  </div>
</template>

<style scoped></style>
