<template>
  <h1>COMMINATORIAS</h1>
  <div>
    <table class="table table table-bordered table-striped">
      <thead>
        <tr>
          <th>CUD</th>
          <th>NUREJ</th>
          <th>FISCAL</th>
          <th>DENUNCIADO</th>
          <th>DENUNCIANTE</th>
          <th>DELITO</th>
          <th>FECHA NOTIF. C.D.</th>
          <th>FECHA NOTIF. FISCAL</th>
          <th>TIEMPO RESTANTE</th>
          <th>REALIZADO</th>
          <th class="has-text-centered">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id_conmi">
          <td>{{ item.cud_conmi }}</td>
          <td>{{ item.nurej_conmi }}</td>
          <td>{{ item.fiscal_conmi }}</td>
          <td>{{ item.denunciado_conmi }}</td>
          <td>{{ item.denunciante_conmi }}</td>
          <td>{{ item.delito_conmi }}</td>
          <td>{{ item.fecha_notif_cd_conmi }}</td>
          <td>{{ item.fecha_notif_fiscal_conmi }}</td>
          <td>{{ item.tiempo_restante_conmi }}</td>
          <td>{{ item.realizado_conmi }}</td>
          <td class="has-text-centered">
            <router-link
              :to="{ name: 'editar', params: { id: item.id_conmi } }"
              class="button is-info is-small"
              >Editar</router-link
            >
            <a
              class="button is-danger is-small"
              @click="deleteProduct(item.id_conmi)"
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
  name: "listarConminatorias",
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
        const response = await axios.get("http://localhost:9001/conminatorias");
        this.items = response.data;
      } catch (err) {
        console.log(err);
      }
    },

    // Delete Product
    async deleteProduct(id) {
      try {
        await axios.delete(`http://localhost:9001/conminatorias/${id}`);
        this.getProducts();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style></style>
