<template>
  <main class="perfil">
    <div class="perfil__item">
      <span class="perfil__item__label">Dia seleccionado: </span>
      <span
        class="perfil__item__data"
        v-text="perfil.getDiaSeleccionado"
      ></span>
    </div>
    <div class="perfil__item">
      <span class="perfil__item__label">Categoria: </span>
      <span
        class="perfil__item__data"
        v-text="perfil.getCategoriaSeleccionada.strCategory"
      ></span>
    </div>
    <div class="perfil__item">
      <span class="perfil__item__label">Horario: </span>
      <span
        class="perfil__item__data"
        v-text="perfil.getPeriodoSeleccionado.horario"
      ></span>
    </div>
  </main>
</template>

<script setup>
import { usePerfilStore } from "../stores/perfil";
const perfil = usePerfilStore();
</script>

<style lang="scss" scoped>
.perfil {
    margin: 10rem auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;

    &__item {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 1rem;

        &__label {
            font-weight: 600;
        }
        &__data {
            color: #FCAB3F;
            font-weight: 500;
        }
    }
}
</style>
