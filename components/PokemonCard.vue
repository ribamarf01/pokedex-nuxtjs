<template>
  <div>
    <div class="w-64 h-min-max m-3 border-t-4 border-l-4 rounded-3xl" :class="'border-'+typeOne">
      <div class="flex justify-center flex-col border-b-4 border-r-4 rounded-3xl w-64 h-full" :class="'border-'+typeTwo">
        <h1 class="text-2xl capitalize text-center">{{ pokemon }}</h1>
        <img :src="imgUrl" :alt="pokemon" class="w-36 h-36 mx-auto my-2" loading="lazy">
        <h1 class="text-xl text-center"># {{ id }}</h1>
        <div class="flex flex-row justify-center">
          <span class="mx-2 border-2 rounded-3xl w-1/2 text-center capitalize" :class="'border-'+ typeOne">{{ typeOne }}</span>
          <span v-if="typeOne !== typeTwo" class="mx-2 border-2 rounded-3xl w-1/2 text-center capitalize" :class="'border-' + typeTwo">{{ typeTwo }}</span>
        </div>
        <NuxtLink :to="'/pokemon/' + pokemon" class="text-center text-sm">Details...</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['pokemon', 'typeOne', 'typeTwo', 'imgUrl', 'id']
}
</script>