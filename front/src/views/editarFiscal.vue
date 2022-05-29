<template>
  <h1>EDITAR</h1>
  <div>
    <div class="field">
      <label class="label">CI</label>
      <div class="control">
        <input class="input" type="text" placeholder="CI" v-model="ci_fiscal" />
      </div>
    </div>
    <div class="field">
      <label class="label">NOMBRE COMPLETO</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="COMBRE COMPLETO"
          v-model="nombre_fiscal"
        />
      </div>
    </div>
    <div class="field">
      <label class="label">TELEFONO</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="TELEFONO"
          v-model="telefono_fiscal"
        />
      </div>
      <div class="control">
        <button class="button is-success" @click="editarFiscal">
          ACTUALIZAR
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// import axios
import axios from "axios";

export default {
  name: "editarFiscal",
  data() {
    return {
      ci_fiscal: "",
      nombre_fiscal: "",
      telefono_fiscal: "",
    };
  },
  created: function () {
    this.getFiscalId();
  },
  methods: {
    // Get Product By Id
    async getFiscalId() {
      try {
        const respuestaApi = await axios.get(
          `http://localhost:9001/Fiscales/${this.$route.params.id}`
        );
        this.ci_fiscal = respuestaApi.data.ci_usuario;
        this.nombre_fiscal = respuestaApi.data.nombre_completo_usuario;
        this.telefono_fiscal = respuestaApi.data.telefono_usuario;
      } catch (err) {
        console.log(err);
      }
    },

    // Update product
    async editarFiscal() {
      try {
        await axios.put(
          `http://localhost:9001/Fiscales/${this.$route.params.id}`,
          {
            ci_usuario: this.ci_fiscal,
            nombre_completo_usuario: this.nombre_fiscal,
            telefono_usuario: this.telefono_fiscal,
          }
        );
        this.ci_fiscal = "";
        this.nombre_fiscal = "";
        this.telefono_fiscal = "";
        this.$router.push("/fiscales");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style></style>
