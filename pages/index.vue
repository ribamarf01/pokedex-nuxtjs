<template>
  <div class="w-full">
    <div class="flex my-3 flex-wrap justify-center">
      <div v-for="pokemon in pokemonList" :key="pokemon.id">
        <PokemonCard 
          :pokemon="pokemon.name"
          :typeOne="pokemon.types[0].type.name"
          :typeTwo="pokemon.types[1] !== undefined ? pokemon.types[1].type.name : pokemon.types[0].type.name"
          :imgUrl="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' + pokemon.id + '.png'"
          :id="pokemon.id"
        />
      </div>
    </div>
    <Spinner v-if="loaded" class="mx-auto mb-3"/>
  </div>
</template>

<script> 
import PokemonCard from "../components/PokemonCard.vue";
import Spinner from "../components/Spinner.vue";
import { mapGetters, mapActions } from 'vuex'
export default {  
    name: "index",
    components: { PokemonCard, Spinner },
    computed: {
      ...mapGetters("pokemonStore", { pokemonList: "GET_LIST", loaded: "GET_LOADED_STATE" })
    },
    methods: {
      loadMorePokemons() {
        window.onscroll = () => {
          let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
          if (bottomOfWindow) {
            this.loadApi()
          }
        }
      },
      ...mapActions("pokemonStore", { loadApi: "fetchList" })
    },
    mounted() {
      this.loadApi()
      this.loadMorePokemons()
    }
}
</script>