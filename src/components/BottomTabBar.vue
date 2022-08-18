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
  z-index: 5;
  position: fixed;
  bottom: 0;
  margin: 0;
  padding: 0.7rem 0;
  width: 100%;
  background-color: #dcdcdc;
  display: flex;
  justify-content: space-between;

  & > svg:first-child {
    margin-left: 200px;
  }
  & > svg:last-child {
    margin-right: 200px;
  }

  &__icon {
    color: #c7c7c7;
    font-size: 1.5rem;
  }
}
</style>
