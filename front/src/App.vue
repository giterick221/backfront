<script>
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
  <header>
    <div>
      <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <RouterLink to="/">INICIO</RouterLink>
        |
        <RouterLink to="/registrar">REGISTRAR COMMINATORIA</RouterLink>
        |
        <RouterLink to="/fiscales">LISTA DE FISCALES</RouterLink>
        |
        <RouterLink to="/editar">EDITAR</RouterLink>
        |
        <RouterLink to="/reportes">REPORTES</RouterLink>
        |
        <RouterLink to="/salir">SALIR</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>
