<template>
  <menu class="menu">
    <fa class="menu__icon" icon="fa-solid fa-cart-shopping" />
    <fa class="menu__icon selected" icon="fa-solid fa-border-all" />
    <fa class="menu__icon" icon="fa-solid fa-circle-user" />
  </menu>
</template>

<style lang="scss" scoped>
.selected {
    color: #fcab3f !important;

}
.menu {
  margin: auto 0 0 0;
  padding: 0.7rem 0;
  width: 100%;
  background-color: #E4E4E4;
  display: flex;
  justify-content: space-between;

  & > svg:first-child {
    margin-left: 200px;
  }
  & > svg:last-child {
    margin-right: 200px;
  }

  &__icon {
    color: #4d4d4d;
    font-size: 1.5rem;
  }
}
</style>
