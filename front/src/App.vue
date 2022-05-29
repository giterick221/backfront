<script>
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
  <header>
    <div>
      <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <RouterLink to="/">INICIO</RouterLink>
        |
        <RouterLink to="/insertar">REGISTRAR COMMINATORIA</RouterLink>
        |
        <RouterLink to="/fiscales">LISTA DE FISCALES</RouterLink>
        |
        <RouterLink to="/editarConminatoria">EDITAR</RouterLink>
        |
        <RouterLink to="/reportes">REPORTES</RouterLink>
        |
        <RouterLink to="/salir">SALIR</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>
