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
          <td>{{ item.ci_fiscal }}</td>
          <td>{{ item.nombre_fiscal }}</td>
          <td>{{ item.telefono }}</td>
          <td class="has-text-centered">
            <router-link
              :to="{ name: 'editar', params: { id: item.ci_fiscal } }"
              class="button is-info is-small"
              >Editar</router-link
            >
            <a
              class="button is-danger is-small"
              @click="deleteProduct(item.ci_fiscal)"
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
    this.getProducts();
  },

  methods: {
    // Get All Products
    async getProducts() {
      try {
        const response = await axios.get("http://localhost:9001/fiscales");
        this.items = response.data;
      } catch (err) {
        console.log(err);
      }
    },

    // Delete Product
    async deleteProduct(id) {
      try {
        await axios.delete(`http://localhost:9001/fiscales/${id}`);
        this.getProducts();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style></style>
