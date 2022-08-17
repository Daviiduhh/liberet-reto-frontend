<template>
  <Header />
  <Days />
  <main class="main">
    <section class="filters"></section>
    <section class="meals">
      <CardMeal v-for="meal in meals" :meal="meal" :key="meal.idMeal" />
    </section>
  </main>
  <BottomTabBar />
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import Header from "./components/Header.vue";
import Days from "./components/Days.vue";
import BottomTabBar from "./components/BottomTabBar.vue";
import CardMeal from "./components/CardMeal.vue";

const meals = ref([]);

onMounted(() => {
  getMeals();
});

function getMeals(category = "Beef") {
  axios
    .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    .then((res) => {
      meals.value = res.data.meals;
    })
    .catch((e) => console.log(e));
}
</script>

<style lang="scss">
.main {
  background-color: #f1f1f1;
  width: 100%;
  min-height: 100vh;
}

.meals {
  margin: 2rem 3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
}
</style>
