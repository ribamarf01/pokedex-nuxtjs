<template>
  <div class="flex justify-between">
    <PreviousPokemon :id="prev.id" :pokemon="prev.name" />
    <InfoPokemon :pokemon="actual.name"/>
    <NextPokemon :id="next.id" :pokemon="next.name" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import InfoPokemon from '../../components/InfoPokemon.vue'
import PreviousPokemon from '../../components/PreviousPokemon.vue'
import NextPokemon from '../../components/NextPokemon.vue'

export default {
  components: { InfoPokemon, PreviousPokemon, NextPokemon },
  computed: {
    ...mapGetters("individualPokemonStore", { actual: "GET_ACTUAL", next: "GET_NEXT", prev: "GET_PREVIOUS" })
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