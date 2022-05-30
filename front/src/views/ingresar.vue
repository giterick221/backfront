<template>
  <div id="login">
    <h1>INGRESAR</h1>
    <input
      type="text"
      name="username"
      v-model="input_nom_usuario"
      placeholder="CI"
    />
    <br />
    <br />
    <input
      type="password"
      name="password"
      v-model="input_pass_usuario"
      placeholder="Password"
    />
    <br />
    <br />
    <button type="button" v-on:click="login()">Login</button>
  </div>
</template>

<script>
export default {
  name: "ingresar",
  data() {
    return {
      input: {
        nom_usuario: "",
        pass_usuario: "",
      },
    };
  },
  methods: {
    login() {
      if (this.input_nom_usuario != "" && this.input_pass_usuario != "") {
        if (
          this.input_nom_usuario == this.$parent.mockAccount.nom_usuario &&
          this.input_pass_usuario == this.$parent.mockAccount.pass_usuario
        ) {
          this.$emit("authenticated", true);
          this.$router.replace({ name: "secure" });
        } else {
          console.log("The username and / or password is incorrect");
        }
      } else {
        console.log("A username and password must be present");
      }
    },
  },
};
</script>

<style scoped>
#login {
  width: 250px;
  background-color: rgb(28, 179, 154);
  margin: auto;
  margin-top: 200px;
  padding: 20px;
  border-radius: 5px;
  color: white;
}
</style>
