<template>
  <h1>COMMINATORIAS</h1>
  <div id="tabla_inicio">
    <table class="table table table-bordered table-striped">
      <thead class="thead-dark">
        <tr>
          <th scope="col">CUD</th>
          <th>NUREJ</th>
          <th>FISCAL</th>
          <th>DENUNCIADO</th>
          <th>DENUNCIANTE</th>
          <th>DELITO</th>
          <th>FECHA NOTIF. C.D.</th>
          <th>FECHA NOTIF. FISCAL</th>
          <th>TIEMPO RESTANTE</th>
          <th>REALIZADO</th>
          <th class="has-text-centered">OPCIONES</th>
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
          <td>{{ format_date(item.fecha_notif_cd_conmi) }}</td>
          <td>{{ format_date(item.fecha_notif_fiscal_conmi) }}</td>
          <td>{{ format_date(item.tiempo_restante_conmi) }}</td>
          <td>{{ item.realizado_conmi }}</td>
          <td class="has-text-centered">
            <router-link
              :to="{
                name: 'editarConminatoria',
                params: { id: item.id_conmi },
              }"
              class="btn btn-primary btn-sm"
              >Editar</router-link
            >
            |
            <a
              class="btn btn-danger btn-sm"
              @click="ocultarConminatoria(item.id_conmi)"
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
import moment from "moment";
export default {
  name: "listarConminatorias",
  data() {
    return {
      items: [],
    };
  },

  created() {
    this.getConminatorias();
  },

  methods: {
    format_date(value) {
      if (value) {
        return moment(String(value)).format("DD-MM-YYYY");
      }
    },
    async getConminatorias() {
      try {
        const response = await axios.get("http://localhost:9001/conminatorias");
        this.items = response.data;
      } catch (err) {
        console.log(err);
      }
    },

    async ocultarConminatoria(id) {
      try {
        await axios.delete(`http://localhost:9001/conminatorias/${id}`);
        this.getConminatorias();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style>
#tabla_inicio {
  text-align: center;
}
</style>
