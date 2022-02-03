<template>
  <div class="flex justify-center items-center border-2 border-gray-300 h-40 w-40 rounded-3xl hover:bg-gray-200 transition-all duration-300">
     <NuxtLink :to="'/pokemon/' + pokemon">
        <img class="mx-auto h-24 w-24" :src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+id+'.png'" :alt="pokemon">
        <div class="text-center">
          <span class="text-md capitalize">#{{ id }} {{ pokemon }} →</span>
        </div>
     </NuxtLink>
 </div>
</template>

<script>
export default {
  props: ['id', 'pokemon']
}
</script>

<style>

</style>