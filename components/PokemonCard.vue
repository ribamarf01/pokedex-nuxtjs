<template>
  <div>
    <div class="w-64 h-min-max m-3 border-t-4 border-l-4 rounded-3xl" :class="'border-' + TypeColorOne">
      <div class="flex justify-center flex-col border-b-4 border-r-4 rounded-3xl w-64 h-full" :class="'border-' + TypeColorTwo">
        <h1 class="text-2xl capitalize text-center">{{ pokemon }}</h1>
        <img :src="imgUrl" :alt="pokemon" class="w-36 h-36 mx-auto my-2" loading="lazy">
        <h1 class="text-xl text-center"># {{ id }}</h1>
        <div class="flex flex-row justify-center">
          <span class="mx-2 border-2 rounded-3xl w-1/2 text-center capitalize" :class="'border-'+ TypeColorOne">{{ typeOne }}</span>
          <span v-if="typeOne !== typeTwo" class="mx-2 border-2 rounded-3xl w-1/2 text-center capitalize" :class="'border-' + TypeColorTwo">{{ typeTwo }}</span>
        </div>
        <NuxtLink :to="'/pokemon/' + pokemon" class="text-center text-sm">Mais detalhes...</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['pokemon', 'typeOne', 'typeTwo', 'imgUrl', 'id'],
  data: () => {
    return {
      TypeColorOne: "",
      TypeColorTwo: ""
    }
  },
  mounted() {
    this.pickTypeColorOne()
    this.typeOne !== this.typeTwo ? this.pickTypeColorTwo() : this.TypeColorTwo = this.TypeColorOne
  },
  methods: {
    pickTypeColorOne() {
      switch(this.typeOne) {
        case "bug":
          this.TypeColorOne = "green-900"
          break;
        case "dark":
          this.TypeColorOne = "yellow-900"
          break;
        case "dragon":
          this.TypeColorOne = "indigo-700"
          break;
        case "electric":
          this.TypeColorOne = "yellow-300"
          break;
        case "fairy":
          this.TypeColorOne = "pink-300"
          break;
        case "fighting":
          this.TypeColorOne = "yellow-900"
          break;
        case "fire":
          this.TypeColorOne = "red-500"
          break;
        case "flying":
          this.TypeColorOne = "indigo-400"
          break;
        case "ghost":
          this.TypeColorOne = "purple-400"
          break;
        case "grass":
          this.TypeColorOne = "green-400"
          break;
        case "ground":
          this.TypeColorOne = "yellow-200"
          break;
        case "ice":
          this.TypeColorOne = "blue-200"
          break;
        case "normal":
          this.TypeColorOne = "gray-500"
          break;
        case "poison":
          this.TypeColorOne = "purple-500"
          break;
        case "psychic":
          this.TypeColorOne = "pink-400"
          break;
        case "rock":
          this.TypeColorOne = "yellow-400"
          break;
        case "steel":
          this.TypeColorOne = "grey-300"
          break;
        case "water":
          this.TypeColorOne = "blue-400"
          break;
        default:
          break;
      }
    },
    pickTypeColorTwo() {
      switch(this.typeTwo) {
        case "bug":
          this.TypeColorTwo = "green-900"
          break;
        case "dark":
          this.TypeColorTwo = "yellow-900"
          break;
        case "dragon":
          this.TypeColorTwo = "indigo-700"
          break;
        case "electric":
          this.TypeColorTwo = "yellow-300"
          break;
        case "fairy":
          this.TypeColorTwo = "pink-300"
          break;
        case "fighting":
          this.TypeColorTwo = "yellow-900"
          break;
        case "fire":
          this.TypeColorTwo = "red-500"
          break;
        case "flying":
          this.TypeColorTwo = "indigo-400"
          break;
        case "ghost":
          this.TypeColorTwo = "purple-400"
          break;
        case "grass":
          this.TypeColorTwo = "green-400"
          break;
        case "ground":
          this.TypeColorTwo = "yellow-200"
          break;
        case "ice":
          this.TypeColorTwo = "blue-200"
          break;
        case "normal":
          this.TypeColorTwo = "grey-700"
          break;
        case "poison":
          this.TypeColorTwo = "purple-500"
          break;
        case "psychic":
          this.TypeColorTwo = "pink-500"
          break;
        case "rock":
          this.TypeColorTwo = "yellow-400"
          break;
        case "steel":
          this.TypeColorTwo = "gray-300"
          break;
        case "water":
          this.TypeColorTwo = "blue-400"
          break;
        default:
          break;
      }
    }
  }
}
</script>