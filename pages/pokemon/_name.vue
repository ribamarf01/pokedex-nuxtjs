<template>
  <div class="mt-12">
    <PokemonNotFound v-if="!exists" />
    <div  class="flex justify-around items-center">
      <PreviousPokemon :id="prev.id" :pokemon="prev.name" />
      <InfoPokemon 
        :pokemon="actual"
      />
      <NextPokemon :id="next.id" :pokemon="next.name" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import InfoPokemon from '../../components/InfoPokemon.vue'
import PreviousPokemon from '../../components/PreviousPokemon.vue'
import NextPokemon from '../../components/NextPokemon.vue'
import PokemonNotFound from '../../components/PokemonNotFound.vue'

export default {
  components: { InfoPokemon, PreviousPokemon, NextPokemon, PokemonNotFound },
  computed: {
    ...mapGetters("individualPokemonStore", { exists: "EXISTS", actual: "GET_ACTUAL", next: "GET_NEXT", prev: "GET_PREVIOUS" })
  },
  methods: {
    ...mapActions("individualPokemonStore", { loadApi: "fetchApi" })
  },
  created() {
    this.loadApi(this.$route.params.name)
  }
}
</script>

<style>

</style>