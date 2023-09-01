import axiosClient from "../api/axiosClient";

export function searchMeals({ commit }, keyword) {
  axiosClient.get(`/search.php?s=${keyword}`).then(({ data }) => {
    commit("setSearchMeals", data.meals);
  });
}
export function searchMealsByLetter({ commit }, letter) {
  axiosClient.get(`/search.php?f=${letter}`).then(({ data }) => {
    commit("setMealsByLetter", data.meals);
  });
}
export function searchMealsByCategory({ commit }, category) {
  axiosClient.get(`/filter.php?c=${category}`).then(({ data }) => {
    commit("setMealsByIngredient", data.meals);
  });
}
