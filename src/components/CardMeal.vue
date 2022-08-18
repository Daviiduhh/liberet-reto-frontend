<template>
  <div class="meal">
    <div
      class="meal__img"
      :style="`background: url('${meal.strMealThumb}'); background-size: cover;
        background-repeat: no-repeat;`"
    >
      <span
        class="meal__first"
        v-show="firstValue != false"
        v-text="firstValue"
      ></span>
      <span class="meal__area" v-text="mealDetails.strArea"></span>
      <span class="meal__name" v-text="meal.strMeal"></span>
    </div>
    <div class="meal__bottom">
      <fa
        class="meal__watch"
        icon="fa-regular fa-clock"
        @click="incrementCarrito(meal)"
      />
      <span class="meal__span" v-text="price"></span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import axios from "axios";
import { useCarritoStore } from "../stores/carrito";

const carrito = useCarritoStore();

const props = defineProps({
  meal: Object,
  functional: Boolean
});

onMounted(() => {
  getMealDetails();
});

const mealDetails = ref({});

const getMealDetails = () => {
  axios
    .get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${props.meal.idMeal}`
    )
    .then((res) => {
      mealDetails.value = res.data.meals[0];
    })
    .catch((e) => console.log(e));
};

const price = computed(() => {
  const formatedPrice = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "MXN",
  });
  return formatedPrice.format(props.meal.idMeal);
});

const firstValue = computed(() => {
  if (mealDetails.value.strTags == null) {
    return false;
  } else {
    return mealDetails.value.strTags.split(",")[0];
  }
});

const incrementCarrito = (meal) => {
  if (props.functional) {
    carrito.incrementCarrito(meal)
  }
}
</script>

<style lang="scss" scoped>
.meal {
  width: 100%;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.4);

  &__img {
    position: relative;
    width: 100%;
    aspect-ratio: 1;
    border-radius: 0.5rem;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;

    &::after {
      position: absolute;
      content: "";
      display: block;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      border-radius: 0.5rem;

      background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.6) 0%,
        rgba(255, 255, 255, 0) 100%
      );

      mix-blend-mode: normal;
    }
  }

  &__bottom {
    width: calc(100% - 1rem);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
  }
  &__first,
  &__area,
  &__name {
    font-weight: 600;
    text-align: left;
    padding: 0 0.3rem 0.3rem 0.3rem;
    z-index: 5;
  }

  &__first {
    color: #fdc963;
    background-color: #fff;
    border-radius: 0.2rem;
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    padding: 0.1rem;
  }

  &__area {
    color: #fff;
  }
  &__name {
    color: #fcab3f;
  }
  &__watch {
    color: #fcab3f;
    font-size: 1.5rem;
  }
}
</style>
