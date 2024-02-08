<template>
  <div class="about">
     <div class="pokemon">
    <h1>Pokémon</h1>
    <button @click="fetchPokemon">Fetch Pokémon</button>
    <div v-if="pokemonDataLoaded">
      <h2>{{ pokemonData.name }}</h2>
      <img :src="pokemonData.sprites.front_default" :alt="pokemonData.name">
    </div>
  </div>
  </div>
</template>
<script>
// @ is an alias to /src
import axios from 'axios'
export default {
  name: 'Pokemon',
  data() {
    return {
      pokemonData: {},
      pokemonDataLoaded: false
    };
  },
  methods: {
    async fetchPokemon() {
      try {
        const randomPokemonId = Math.floor(Math.random() * 898) + 1; // There are 898 Pokémon in total
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`);
        this.pokemonData = response.data;
        this.pokemonDataLoaded = true;
      } catch (error) {
        console.error('Error fetching Pokémon data:', error);
      }
    }
  }
};
</script>

