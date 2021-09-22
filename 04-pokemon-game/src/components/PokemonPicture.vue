<template>
  <div class="pokemon-container">
    <img
      v-bind:src="imgSrc"
      class="hidden-pokemon"
      alt="pokemon"
    />
    <img
    v-if="showPokemon"
    v-bind:src="imgSrc"
    class="fade-in"
    alt="pokemon"
    />
  </div>
</template>

<script>
export default {
    props: {
        pokemonId: {
            type: Number,
            require: true
        },
        showPokemon: {
            type: Boolean,
            require: true,
            default: false
        }
    },
    computed: {
        imgSrc() {
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
        }
    }
};
</script>

<style scoped>
/* Pokemon Picture */
.pokemon-container {
  height: 200px;
  width: 400px;
  margin: 0 auto;
  position: relative;
}
 
img {
  height: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
.hidden-pokemon {
  filter: brightness(0);
}


</style>