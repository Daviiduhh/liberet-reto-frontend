<template>
  <header class="header">
    <span class="header__location" @click="getLocation">
      <fa class="header__location__icon" icon="fa-solid fa-location-dot" />
      <span
        class="header__location__text"
        :class="location != 'Select location...' ? 'location-selected' : ''"
        v-text="location"
      ></span>
    </span>
    <fa class="header__menu" icon="fa-solid fa-bars" />
  </header>
</template>

<script setup>
import { ref } from "vue";

const location = ref("Select location...");

const getLocation = () => {
  location.value = window.prompt("Please enter your location", "Guadalajara");
};
</script>

<style lang="scss" scoped>
.location-selected {
  font-weight: 600;
}
.header {
  width: calc(100% - 4rem);
  padding: 0.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #e4e4e4;

  &__location {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;

    &__icon {
      color: #f49897;
      font-size: 1.5rem;
    }
    &__text {
      color: #4d4d4d;
    }
  }

  &__menu {
    font-size: 1.5rem;
  }
}
</style>
