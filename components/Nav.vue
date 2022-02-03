<template>
  <div class="w-full py-4 bg-red-400">
    <NuxtLink to="/" class="flex justify-center items-center">
        <img src="https://img.icons8.com/ios/50/000000/pokeball--v1.png" class="pr-1 invert_image"/>
        <span class="text-4xl text-white pl-1">Pokedex</span>
    </NuxtLink>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.invert_image {
    filter: invert(100%)
}

</style>