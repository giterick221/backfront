import { createRouter, createWebHistory } from "vue-router";
import inicio from "../views/inicio.vue";
import ingresar from "../views/ingresar.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "inicio",
      component: inicio,
    },
    {
      path: "/registrar",
      name: "registrar",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/registrar.vue"),
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
      path: "/editar",
      name: "editar",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/editar.vue"),
    },
    {
      path: "/reportes",
      name: "reportes",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/reportes.vue"),
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
