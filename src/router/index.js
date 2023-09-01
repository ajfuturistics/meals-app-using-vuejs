import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../layouts/DefaultLayout.vue";
import Home from "../views/Home.vue";
import SearchByLetter from "../views/SearchByLetter.vue";
import SearchByName from "../views/SearchByName.vue";
import SearchByIngredient from "../views/SearchByIngredient.vue";
import MealDetails from "../views/MealDetails.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: DefaultLayout,
      children: [
        {
          path: "/",
          name: "home",
          component: Home,
        },
        {
          path: "/by-name/:name?",
          name: "byName",
          component: SearchByName,
        },
        {
          path: "/by-letter/:letter?",
          name: "byLetter",
          component: SearchByLetter,
        },
        {
          path: "/by-ingredients/:ingredient?",
          name: "byIngredients",
          component: SearchByIngredient,
        },
        {
          path: "/meal/:id",
          name: "mealDetails",
          component: MealDetails,
        },
      ],
    },
  ],
});

export default router;
