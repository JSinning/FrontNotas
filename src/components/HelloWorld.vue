<template>
   <div class="notas">
    <h2>Mis Notas {{username}}</h2>
      <form @submit.prevent="crearNota">
      <div>
        <label for="titulo">Titulo:</label>
        <input type="text" id="titel" v-model="notasCreate.nombre">
      </div>
      <div>
        <label for="des">descripcion:</label>
        <input type="text" id="des" v-model="notasCreate.descripcion">
      </div>
       <div>
        <label for="action">Action:</label>
        <input type="checkbox" id="action" v-model="notasCreate.action">
      </div>
      <button type="submit">Crear Nota</button>
    </form>
    <table>
      <thead>
        <tr>
          <th>Título</th>
          <th>Contenido</th>
          <!-- Otros campos de la nota -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="nota in notas" :key="nota.id">
          <td>{{ nota.nombre }}</td>
          <td>{{ nota.descripcion }}</td>
          <td> <input type="checkbox" id="checkbox" v-model="nota.action" /></td>
          <!-- Otros campos de la nota -->
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import http from "../hpp-confi";
export default {
  name: 'Notas',
  props: {
    username: String,
    Id: String
  },
  data(){
    return {
      notas:[],
      notasCreate:{
        nombre: '',
        descripcion: '',
        userid: '',
        action: false
      }
    }
  },
  mounted() {
    this.obtenerNotas();
  },
   methods: {
    async obtenerNotas() {
      try {
        const response = await http.get(`http://localhost:3000/api/nota/${Number(this.$props.Id)}`);
        if(response.status === 200){
           this.notas = response.data
        }
      } catch (error) {
        console.error('Error al iniciar sesión:', error);
        this.loginError = true;
      }
    },
    async crearNota() {
      const id = this.$props.Id
      this.notasCreate.userid = id
      try {
        const response = await http.post('http://localhost:3000/api/nueva-nota', this.notasCreate);
        if(response.status === 200){
           await this.obtenerNotas()
           this.notasCreate.userid = '',
           this.notasCreate.descripcion = '',
           this.notasCreate.action = false
        }
      } catch (error) {
        console.error('Error al iniciar sesión:', error);
        this.loginError = true;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
