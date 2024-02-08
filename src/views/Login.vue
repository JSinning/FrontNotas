<template>
  <div class="login">
    <h1>Iniciar Sesión</h1>
    <form @submit.prevent="loginUser">
      <div>
        <label for="username">Nombre de usuario:</label>
        <input type="text" id="username" v-model="userData.username">
      </div>
      <div>
        <label for="password">Contraseña:</label>
        <input type="password" id="password" v-model="userData.password">
      </div>
      <button type="submit">Iniciar Sesión</button>
    </form>
    <div v-if="loginError" class="error-message">
      Error: Nombre de usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import http from "../hpp-confi";
export default {
  name: 'Login',
  data() {
    return {
      userData: {
        username: '',
        password: ''
      },
      loginError: false
    };
  },
  methods: {
    async loginUser() {
      try {
        const response = await http.get(`http://localhost:3000/api/registros/find/${this.userData.username}`);
        if(response.status === 200){
          this.$store.dispatch('addUser', response.data.data[0].usrname);
          this.$store.dispatch('addId', response.data.data[0].id);
         console.log(response.data.data[0].id)
        }
      } catch (error) {
        console.error('Error al iniciar sesión:', error);
        this.loginError = true; // Si hay un error en la solicitud, establece loginError a true
      }
    }
  }
};
</script>

