<template>
 <div class="bg-blue-200 h-32 w-32">
     <NuxtLink :to="'/pokemon/' + pokemon">
        <img class="mx-auto h-24 w-24" :src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+id+'.png'" :alt="pokemon">
        <div class="text-center">
          <span class="text-md capitalize">← #{{ id }} {{ pokemon }}</span>
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