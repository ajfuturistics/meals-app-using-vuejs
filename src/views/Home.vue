<script setup>
import { onMounted, ref } from "vue";
import axiosClient from "../api/axiosClient";

const ingredients = ref([]);

onMounted(async () => {
  const response = await axiosClient.get("/list.php?i=list");
  ingredients.value = response.data.meals;
});
</script>

<template>
  <div class="p-8 flex flex-col justify-center items-center"></div>
</template>

<style scoped></style>
