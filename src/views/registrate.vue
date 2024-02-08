<template>
   <div class="registro">
    <h1>Registro de Usuario</h1>
    <form @submit.prevent="registerUser">
      <div>
        <label for="username">Nombre de usuario:</label>
        <input type="text" id="username" v-model="userData.username">
      </div>
      <div>
        <label for="password">Contraseña:</label>
        <input type="password" id="password" v-model="userData.pass">
      </div>
      <div>
        <label for="email">Correo electrónico:</label>
        <input type="email" id="email" v-model="userData.email">
      </div>
      <button type="submit">Registrar</button>
    </form>
    <div v-if="registrationError" class="error-message">
      Error: No se pudo completar el registro. Por favor, revisa tus datos e intenta de nuevo.
    </div>
    <div v-if="registrationGood" class="error-message">
      El usuario fue creado corectamente
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import http from "../hpp-confi";
export default {
  name: 'Registro',
  data() {
    return {
      userData: {
        username: '',
        pass: '',
        email: ''
      },
       registrationError: false,
       registrationGood: false
    };
  },
  methods: {
    async registerUser() {
      try {
        const response = await http.post('http://localhost:3000/api/registros/add', this.userData);
        console.log('Registro exitoso:', response.data);
        this.registrationGood = true
      } catch (error) {
        console.error('Error al registrar usuario:', error); 
        this.registrationError = true
        // Si hay un error en la solicitud, establece registrationError a true
      }
    }
  }
};
</script>

