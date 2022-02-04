<template>
  <div class="w-1/3">
    <h1 class="text-3xl text-center">#{{ pokemon.id }}</h1>
    <img class="mx-auto h-64 w-64" :src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' + pokemon.id + '.png'" :alt="pokemon.name" loading="lazy">
    <p class="text-3xl text-center capitalize">{{ pokemon.name }}</p>
    <div class="flex flex-row justify-center my-3" v-if="pokemon.types">
      <span class="mx-2 border-2 rounded-3xl w-1/3 text-center capitalize" :class="'border-'+ pokemon.types[0].type.name">{{ pokemon.types[0].type.name }}</span>
      <span v-if="pokemon.types[1] !== undefined" class="mx-2 border-2 rounded-3xl w-1/3 text-center capitalize" :class="'border-' + pokemon.types[1].type.name">{{ pokemon.types[1].type.name }}</span>
    </div>
    <h1 class="text-center text-xl">Abilities: </h1>
    <div class="flex justify-around my-2" v-if="pokemon.abilities">
      <div v-for="ability in pokemon.abilities" :key="ability.ability.name">
        <span v-if="!ability.is_hidden" class="capitalize">{{ ability.ability.name | removeMinus }}</span>
        <span v-else class="text-gray-600 capitalize">
          {{ ability.ability.name | removeMinus }}
          <span class="text-red-600">*</span>
        </span>
      </div>
    </div>
    <h1 class="text-center text-xl my-2">About: </h1>
    <div class="flex justify-around">
      <span class="text-md">Height: {{ pokemon.height | formatString }}m </span>
      <span class="text-md">Weight: {{ pokemon.weight | formatString }}kg</span>
    </div>
    <h1 class="text-center text-xl my-2">Status: </h1>
    <div v-if="pokemon.stats">
      <Stats 
        :hp="pokemon.stats[0].base_stat"
        :attack="pokemon.stats[1].base_stat"
        :defense="pokemon.stats[2].base_stat"
        :spAtk="pokemon.stats[3].base_stat"
        :spDef="pokemon.stats[4].base_stat"
        :speed="pokemon.stats[5].base_stat"
      />
    </div>
 </div>
</template>

<script>
import Stats from "./Stats.vue"
export default {
    props: ["pokemon"],
    filters: {
        formatString: str => {
            str = String(str);
            return str.length === 1 ? "0." + str : str.substring(0, str.length - 1) + "." + str[str.length - 1];
        },
        removeMinus: str => {
            return str.split("-").reduce((accumulator, word) => accumulator += ` ${word}`, "");
        }
    },
    components: { Stats }
}
</script>

<style>

</style>