<template>
  <header class="header">
    <span class="header__location">
      <fa class="header__location__icon" icon="fa-solid fa-location-dot" />
      <span class="header__location__text">Select location...</span>
    </span>
    <fa class="header__menu" icon="fa-solid fa-bars" />
  </header>
</template>

<style lang="scss" scoped>
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
