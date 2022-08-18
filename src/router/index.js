import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
//import Projects from '../assets/projects.json'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/carrito",
    name: "Carrito",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Carrito.vue"),
  },
  {
    path: "/usuario",
    name: "Usuario",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Usuario.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
