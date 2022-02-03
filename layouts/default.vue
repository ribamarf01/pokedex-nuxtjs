<template>
  <div class="bg-gray-200">
    <Nav />
    <Nuxt />
  </div>
</template>

<script>
import Nav from "../components/Nav.vue";
export default {
    name: "default",
    components: { Nav }
}
</script>