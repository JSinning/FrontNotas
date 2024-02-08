<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld :username=userData.username :Id=userData.id  />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data() {
    return {
      userData: {
        username: this.$store.getters.getUsuario,
        id: this.$store.getters.getID.toString() 
      },
    };
  },
}
</script>
