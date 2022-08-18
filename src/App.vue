<template>
  <Header />
  <Days />
  <main class="main">
    <section class="filter">
      <button class="filter__btn">
        <fa class="filter__btn__icon" icon="fa-regular fa-clock" />
        <span class="filter__btn__text">2:00 - 3:00 pm</span>
      </button>
      <button class="filter__btn">
        <fa class="filter__btn__icon" icon="fa-solid fa-utensils" />
        <span
          @click="showCategories = !showCategories"
          class="filter__btn__text"
          v-text="selectedCategory.strCategory"
        ></span>
      </button>
      <button class="filter__btn">
        <span class="filter__btn__icon">+1</span>
        <span class="filter__btn__text">Platillos</span>
      </button>
      <div class="filter__categories" v-show="showCategories">
        <div class="filter__categories__title">
          <fa
            class="filter__categories__title__icon"
            icon="fa-solid fa-utensils"
          />
          <span
            class="filter__categories__title__text"
            v-text="selectedCategory.strCategory"
          ></span>
        </div>
        <span
          class="filter__categories__category"
          v-for="category in categories"
          :key="category.idCategory"
          @click="selectedCategory = category"
          :class="
            selectedCategory.idCategory == category.idCategory
              ? 'selectedCategory'
              : ''
          "
          v-text="category.strCategory"
        ></span>
      </div>
    </section>
    <section class="meals">
      <CardMeal v-for="meal in meals" :meal="meal" :key="meal.idMeal" />
    </section>
  </main>
  <BottomTabBar />
  <div class="overlay" v-show="showCategories || showTiemposDisponibles"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import Header from "./components/Header.vue";
import Days from "./components/Days.vue";
import BottomTabBar from "./components/BottomTabBar.vue";
import CardMeal from "./components/CardMeal.vue";

const meals = ref([]);
const categories = ref([]);

const selectedCategory = ref({
  idCategory: "1",
  strCategory: "Beef",
});

const showCategories = ref(false);
const showTiemposDisponibles = ref(false);

onMounted(() => {
  getMeals();
  getCategories();
});

function getMeals(category = "Beef") {
  axios
    .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    .then((res) => {
      meals.value = res.data.meals;
    })
    .catch((e) => console.log(e));
}

function getCategories() {
  axios
    .get("https:www.themealdb.com/api/json/v1/1/categories.php")
    .then((res) => {
      categories.value = res.data.categories;
      console.log(categories.value);
    })
    .catch((e) => console.log(e));
}
</script>

<style lang="scss">
.selectedCategory {
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.5);
}

.main {
  background-color: #f1f1f1;
  width: 100%;
  min-height: 100vh;
}

.filter {
  z-index: 10;
  background-color: #f1f1f1;
  position: relative;
  padding: 1rem 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;

  &__btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.3rem;

    &__text {
      font-size: 0.9rem;
    }

    &__icon {
      color: #fdc963;
      font-weight: 600;
    }
  }

  &__categories {
    z-index: 10;
    width: 90%;
    position: absolute;
    top: 3.7rem;
    background-color: #fff;
    display: flex;
    box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.4);
    border-radius: 10px;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 0.5rem;

    &:last-child {
      padding-bottom: 1.5rem;
    }

    &__title {
      margin: 0.6rem auto 0.6rem 1rem;
      padding-left: 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;

      &__text {
        color: #4d4d4d;
        font-weight: 500;
        font-size: 1rem;
      }
      &__icon {
        color: #fdc963;
        font-size: 1.2rem;
      }
    }

    &__category {
      margin: 0 auto 0 1rem;
      padding: 0.3rem 0 0.3rem 2rem;
      width: 70%;
      text-align: left;
      background-color: #fbfbfb;
      border: 1px solid #eaeaea;
      border-radius: 8px;
      color: #4d4d4d;
      font-weight: 500;
    }
  }
}

.meals {
  margin: 1rem 3rem 2rem 3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
}
</style>
