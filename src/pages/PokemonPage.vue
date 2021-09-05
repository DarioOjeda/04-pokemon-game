import PokemonPage from '@/pages/PokemonPage.vue';
<template>
    <h1 v-if="!pokemon">Espere porfavor...</h1>

    <div v-else>
      <h1>¿Quién es este pokémon?</h1>
    
      <PokemonPicture 
        :pokemon-id="pokemon.id" 
        :show-pokemon="showPokemon" 
      />
      <PokemonOptions 
          :pokemons="pokemonArr"
          @select-pokemon="checkAnswer"      
      />
      <template v-if="showAnswer">
        <h2 class="fade-in">{{ msg }}</h2>
        <button @click="newGame">
          Nuevo juego
        </button>
      </template>
      

    </div>
    

</template>

<script>

import PokemonPicture from '@/components/PokemonPicture.vue'
import PokemonOptions from '@/components/PokemonOptions.vue'
import getPokemonOptions from '@/helpers/getPokemonOptions';

// getPokemonOptions()


export default {
  components: {
    PokemonOptions,
    PokemonPicture
  },
  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      msg: ''
    }
  },
  methods: {
    async mixPokemonArr() {
      this.pokemonArr = await getPokemonOptions()

      const rndInt = Math.floor( Math.random() * 4 )
      this.pokemon = this.pokemonArr[rndInt]
    },
    checkAnswer(selectedId) {
      this.showPokemon = true
      this.showAnswer = true

      if(selectedId === this.pokemon.id) {
        this.msg = `Correcto, ${ this.pokemon.name }`
      }else{
        this.msg = `Error, era ${ this.pokemon.name }`
      }
    },
    async newGame() {
     this.showPokemon = false
     this.showAnswer = false 
     this.pokemonArr = []
     this.pokemon = null

     this.mixPokemonArr() 
    }
  },
  mounted() {
    this.mixPokemonArr()
  }
}
</script>
