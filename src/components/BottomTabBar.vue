<template>
  <menu class="menu">
    <router-link to="/carrito">
      <fa class="menu__icon" :class="$route.path == '/carrito' ? 'selected' : ''" icon="fa-solid fa-cart-shopping" />
    </router-link>
    <router-link to="/">
      <fa class="menu__icon" :class="$route.path == '/' ? 'selected' : ''" icon="fa-solid fa-border-all" />
    </router-link>
    <router-link to="/usuario">
      <fa class="menu__icon" :class="$route.path == '/usuario' ? 'selected' : ''" icon="fa-solid fa-circle-user" />
    </router-link>
  </menu>
</template>

<style lang="scss" scoped>
.selected {
  color: #fcab3f !important;
}
.menu {
  z-index: 5;
  position: fixed;
  bottom: 0;
  margin: 0;
  padding: 0.7rem 0;
  width: 100%;
  max-width: 720px;
  background-color: #dcdcdc;
  display: flex;
  justify-content: space-between;

  & > *:first-child {
    margin-left: 200px;
  }
  & > *:last-child {
    margin-right: 200px;
  }

  &__icon {
    color: #c7c7c7;
    font-size: 1.5rem;
  }
}
</style>
