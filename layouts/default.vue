<template>
  <div class="w-full min-h-screen mt-0 bg-gray-100">
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