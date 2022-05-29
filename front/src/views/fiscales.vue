<template>
  <h1>FISCALES</h1>
  <div>
    <table class="table table table-bordered table-striped">
      <thead>
        <tr>
          <th>CI</th>
          <th>NOMBRE FISCAL</th>
          <th>TELEFONO</th>
          <th class="has-text-centered">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.ci_fiscal">
          <td>{{ item.ci_usuario }}</td>
          <td>{{ item.nombre_completo_usuario }}</td>
          <td>{{ item.telefono_usuario }}</td>
          <td class="has-text-centered">
            <router-link
              :to="{
                name: 'editarFiscal',
                params: { id: item.id_usuario },
              }"
              class="button is-info is-small"
              >Editar</router-link
            >
            <a
              class="button is-danger is-small"
              @click="ocultarFiscal(item.id_usuario)"
              >eliminar</a
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// import axios
import axios from "axios";

export default {
  name: "listarfiscales",
  data() {
    return {
      items: [],
    };
  },

  created() {
    this.getFiscales();
  },

  methods: {
    // Get All Products
    async getFiscales() {
      try {
        const response = await axios.get("http://localhost:9001/fiscales");
        this.items = response.data;
      } catch (err) {
        console.log(err);
      }
    },

    // Delete Product
    async ocultarFiscal(id) {
      try {
        await axios.delete(`http://localhost:9001/fiscales/${id}`);
        this.getFiscales();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style></style>
