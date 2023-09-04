<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import MealList from "../components/MealList.vue";

const router = useRoute();
const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);

async function searchMeals() {
  if (keyword.value) {
    store.dispatch("searchMeals", keyword.value);
  } else {
    store.commit("setSearchMeals", []);
  }
}

onMounted(() => {
  keyword.value = router.params.name;
  if (keyword.value) {
    searchMeals();
  }
});
</script>

<template>
  <section class="p-8">
    <h1 class="text-4xl text-center font-bold mb-6">Search By Name</h1>
    <div class="pb-6">
      <input
        v-model="keyword"
        type="text"
        class="rounded border-2 border-gray-200 w-full"
        placeholder="Search for Meals"
        @change="searchMeals"
      />
    </div>

    <MealList :meals="meals" />
  </section>
</template>

<style scoped></style>
