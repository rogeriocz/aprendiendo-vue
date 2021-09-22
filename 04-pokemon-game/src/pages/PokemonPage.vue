<template>
  <h1>¿Quién es este pokémon?</h1>
  <div v-if="!pokemon">Espere por favor...</div>
  <div v-else="pokemon">
    <!-- TODO: img -->
    <PokemonPicture 
    v-bind:pokemonId="pokemon.id"
    v-bind:showPokemon="showPokemon" />
    <!-- TODO: Options -->
    <PokemonOptions 
    v-bind:pokemons="pokemonArr"
    @selection="checkAnswer" />
  </div>

  <template v-if="showAnswer">
    <h2>{{message}}</h2>
    <button @click="newGame">Nuevo Juego</button>
  </template>
    
</template>

<script>
import PokemonPicture from "@/components/PokemonPicture.vue";
import PokemonOptions from "@/components/PokemonOptions.vue";

import getPokemonOptions from "@/helpers/getPokemonOptions";

console.log(getPokemonOptions());

export default {
  components: { PokemonPicture, PokemonOptions },
  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: ''
    };
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions();
      const rndInt = Math.floor(Math.random() * 4);
      this.pokemon = this.pokemonArr[rndInt];
      console.log(rndInt);
    },

    checkAnswer(selectedId) {
      this.showPokemon = true
      this.showAnswer  = true

      if( selectedId === this.pokemon.id ) {
        this.message = `Correcto, ${this.pokemon.name}`
      }else{
        this.message = `Oops. era: ${this.pokemon.name}`
      }
    },
    newGame() {

      this.showPokemon  = false
      this.showAnswer   = false
      this.pokemonArr   = []
      this.pokemon      = null
      this.mixPokemonArray()
    }
  },
  mounted() {
    this.mixPokemonArray();
  },
};
</script>