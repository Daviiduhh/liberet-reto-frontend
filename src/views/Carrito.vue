<template>
  <main class="carrito" v-if="carrito.getCarrito.length > 0">
    <CardMeal
      v-for="meal in carrito.getCarrito"
      :key="meal.idMeal"
      :meal="meal"
      :functional="false"
    />
  </main>
  <h2 class="title" v-else>Carrito vacio</h2>
</template>

<script setup>
import { useCarritoStore } from "../stores/carrito";
import CardMeal from "../components/CardMeal.vue";
const carrito = useCarritoStore();
</script>

<style lang="scss" scoped>
.carrito {
  margin: 1rem 3rem 8rem 3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
}

.title {
    margin: 10rem auto;
    color: #FCAB3F;
}
</style>
