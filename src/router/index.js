import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
//import Projects from '../assets/projects.json'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
//   {
//     path: '/portfolio',
//     name: 'Portfolio',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/Portfolio.vue')
//   },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router