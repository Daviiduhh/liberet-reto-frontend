import { defineStore } from "pinia";

export const useCarritoStore = defineStore('carrito', {
    state: () => ({ carrito: [] }),
    getters: {
      getCarrito: (state) => state.carrito,
    },
    actions: {
      incrementCarrito(item) {
        this.carrito.push(item)
      },
    },
  })