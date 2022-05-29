<template>
  <h1>EDITAR</h1>
  <div>
    <div class="field">
      <label class="label">CUD</label>
      <div class="control">
        <input class="input" type="text" placeholder="CUD" v-model="cud" />
      </div>
    </div>
    <div class="field">
      <label class="label">NUREJ</label>
      <div class="control">
        <input class="input" type="text" placeholder="NUREJ" v-model="nurej" />
      </div>
    </div>
    <div class="field">
      <label class="label">FISCAL</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="FISCAL"
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
          placeholder="DENUNCIADO"
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
          placeholder="DENUNCIANTE"
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
          placeholder="DELITO"
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
          placeholder="FECHA CD"
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
          placeholder="FECHA FIS"
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
          placeholder="REALIZADO"
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
          placeholder="TIEMPO RESTANTE"
          v-model="tiempo_restante"
        />
      </div>
    </div>
    <div class="control">
      <button class="button is-success" @click="insertarConminatoria">
        UPDATE
      </button>
    </div>
  </div>
</template>

<script>
// import axios
import axios from "axios";

export default {
  name: "insertarConminatoria",
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
  methods: {
    async insertarConminatoria() {
      try {
        await axios.post(`http://localhost:9001/conminatorias/`, {
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
        });
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
