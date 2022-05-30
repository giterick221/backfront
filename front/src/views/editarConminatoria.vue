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
        <textarea
          class="input"
          type="text"
          placeholder="DENUNCIADO"
          v-model="denunciado"
        >
        </textarea>
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
      <button class="button is-success" @click="editarConminatoria">
        ACTUALIZAR
      </button>
    </div>
  </div>
</template>

<script>
// import axios
import axios from "axios";
import moment from "moment";
export default {
  name: "editarConminatoria",
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
    this.getConminatoriaId();
  },
  methods: {
    format_date(value) {
      if (value) {
        return moment(String(value)).format("DD-MM-YYYY");
      }
    },
    async getConminatoriaId() {
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

    async editarConminatoria() {
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
