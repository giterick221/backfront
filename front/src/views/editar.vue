<template>
  <h1>EDITAR</h1>
  <div>
    <div class="field">
      <label class="label">CUD</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Product Name"
          v-model="cud"
        />
      </div>
    </div>
    <div class="field">
      <label class="label">NUREJ</label>
      <div class="control">
        <input class="input" type="text" placeholder="Price" v-model="nurej" />
      </div>
    </div>
    <div class="field">
      <label class="label">FISCAL</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Product Name"
          v-model="fiscal"
        />
      </div>
    </div>
    <div class="field">
      <label class="label">DENUNCIADO</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Product Name"
          v-model="denunciado"
        />
      </div>
    </div>
    <div class="field">
      <label class="label">DENUNCIANTE</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Product Name"
          v-model="denunciante"
        />
      </div>
    </div>
    <div class="field">
      <label class="label">DELITO</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Product Name"
          v-model="delito"
        />
      </div>
    </div>
    <div class="field">
      <label class="label">FECHA CD</label>
      <div class="control">
        <input
          class="input"
          type="date"
          placeholder="Product Name"
          v-model="fecha_notif_cd"
        />
      </div>
    </div>
    <div class="field">
      <label class="label">FECHA FIS</label>
      <div class="control">
        <input
          class="input"
          type="date"
          placeholder="Product Name"
          v-model="fecha_notif_fiscal"
        />
      </div>
    </div>
    <div class="field">
      <label class="label">REALIZADO</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Product Name"
          v-model="realizado"
        />
      </div>
    </div>
    <div class="field">
      <label class="label">TIEMPO RESTANTE</label>
      <div class="control">
        <input
          class="input"
          type="date"
          placeholder="Product Name"
          v-model="tiempo_restante"
        />
      </div>
    </div>
    <div class="control">
      <button class="button is-success" @click="updateProduct">UPDATE</button>
    </div>
  </div>
</template>

<script>
// import axios
import axios from "axios";

export default {
  name: "EditProduct",
  data() {
    return {
      cud: "",
      nurej: "",
      fiscal: "",
      denunciado: "",
      denunciante: "",
      delito: "",
      fecha_notif_cd: "",
      fecha_notif_fiscal: "",
      realizado: "",
      tiempo_restante: "",
    };
  },
  created: function () {
    this.getProductById();
  },
  methods: {
    // Get Product By Id
    async getProductById() {
      try {
        const respuestaApi = await axios.get(
          `http://localhost:9001/conminatorias/${this.$route.params.id}`
        );
        this.cud = respuestaApi.data.cud_conmi;
        this.nurej = respuestaApi.data.nurej_conmi;
        this.fiscal = respuestaApi.data.fiscal_conmi;
        this.denunciado = respuestaApi.data.denunciado_conmi;
        this.denunciante = respuestaApi.data.denunciante_conmi;
        this.delito = respuestaApi.data.delito_conmi;
        this.fecha_notif_cd = respuestaApi.data.fecha_notif_cd_conmi;
        this.fecha_notif_fiscal = respuestaApi.data.fecha_notif_fiscal_conmi;
        this.realizado = respuestaApi.data.realizado_conmi;
        this.tiempo_restante = respuestaApi.data.tiempo_restante_conmi;
      } catch (err) {
        console.log(err);
      }
    },

    // Update product
    async updateProduct() {
      try {
        await axios.put(
          `http://localhost:9001/conminatorias/${this.$route.params.id}`,
          {
            cud_conmi: this.cud,
            nurej_conmi: this.nurej,
            fiscal_conmi: this.fiscal,
            denunciado_conmi: this.denunciado,
            denunciante_conmi: this.denunciante,
            delito_conmi: this.delito,
            fecha_notif_cd_conmi: this.fecha_notif_cd,
            fecha_notif_fiscal_conmi: this.fecha_notif_fiscal,
            tiempo_restante_conmi: this.tiempo_restante,
            realizado_conmi: this.realizado,
          }
        );
        this.cud = "";
        this.nurej = "";
        this.fiscal = "";
        this.denunciado = "";
        this.denunciante = "";
        this.delito = "";
        this.fecha_notif_cd = "";
        this.fecha_notif_fiscal = "";
        this.realizado = "";
        this.tiempo_restante = "";
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style></style>
