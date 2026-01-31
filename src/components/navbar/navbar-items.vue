<script setup lang="ts">
const props = defineProps<{
  to: string;
  name: string;
}>();

</script>

<template>
  <router-link :to="props.to"
    class="nav-items border-b-4 border-transparent hover:border-b-4 hover:border-b-black transition-all duration-75 ease-in">
    {{ props.name }}
  </router-link>

</template>

<style scoped>
.nav-items {
  padding: 5px 15px;
}
</style>