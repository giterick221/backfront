import { createRouter, createWebHistory } from "vue-router";
import inicio from "../views/inicio.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "inicio",
      component: inicio,
    },
    {
      path: "/insertar",
      name: "insertar",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/insertar.vue"),
    },
    {
      path: "/fiscales",
      name: "fiscales",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/fiscales.vue"),
    },
    {
      path: "/editarConminatoria",
      name: "editarConminatoria",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/editarConminatoria.vue"),
    },
    {
      path: "/editarFiscal",
      name: "editarFiscal",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/editarFiscal.vue"),
    },
    {
      path: "/salir",
      name: "salir",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/salir.vue"),
    },
  ],
});

export default router;
